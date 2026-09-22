import "dotenv/config";
import { debugCrmConfig, debugLog } from "./crm-debug.js";
import { postToCrm, toEnquiryCrmBody, toVisitCrmBody } from "./crm.js";

const CRM_API_URL = process.env.CRM_API_URL?.trim() || "";
const BACKEND_URL = process.env.BACKEND_URL?.trim() || "http://localhost:3001";

const sampleEnquiry = {
  parentFirstName: "Debug",
  parentLastName: "Parent",
  phone: "8007247468",
  email: "debug@example.com",
  childName: "Debug Child",
  grade: "Grade 6",
  visitTime: "2026-09-06T10:30:00+05:30",
  message: "CRM debug test from debug-crm.ts",
  url: "http://localhost:8081/admissions",
  utmSource: "debug",
  utmMedium: "script",
  utmCampaign: "local_test",
};

const sampleVisit = {
  studentName: "Debug Student",
  parentFirstName: "Debug",
  parentLastName: "Parent",
  phone: "8007247468",
  grade: "Grade 6",
  comments: "Visit booking debug test",
  url: "http://localhost:8081/",
  utmSource: "debug",
};

async function checkBackendHealth() {
  debugLog("Step 1 — Backend health check", BACKEND_URL);
  try {
    const res = await fetch(`${BACKEND_URL}/health`);
    const body = await res.text();
    console.info(`  Status: ${res.status}`);
    console.info(`  Body: ${body}`);
    return res.ok;
  } catch (error) {
    console.error("  Backend not reachable. Is `npm run dev` running in backend/?", error);
    return false;
  }
}

async function testBackendEnquiry() {
  debugLog("Step 2 — POST to backend /api/leads/enquiry", `${BACKEND_URL}/api/leads/enquiry`);
  try {
    const res = await fetch(`${BACKEND_URL}/api/leads/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sampleEnquiry),
    });
    const body = await res.text();
    console.info(`  Status: ${res.status}`);
    console.info(`  Body: ${body}`);
    return res.ok;
  } catch (error) {
    console.error("  Backend enquiry test failed:", error);
    return false;
  }
}

async function testCrmDirect() {
  debugLog("Step 3 — POST directly to CRM API");
  if (!CRM_API_URL) {
    console.error("  CRM_API_URL is missing in backend/.env");
    return false;
  }

  const crmBody = toEnquiryCrmBody(sampleEnquiry);
  console.info("  CRM body:\n", JSON.stringify(crmBody, null, 2));

  try {
    await postToCrm(crmBody);
    console.info("  CRM direct POST: OK (see response above if CRM_DEBUG=true)");
    return true;
  } catch (error) {
    console.error("  CRM direct POST failed:", error);
    return false;
  }
}

async function testVisitCrmBody() {
  debugLog("Step 4 — Preview visit booking CRM body (no send)");
  const body = toVisitCrmBody(sampleVisit);
  console.info(JSON.stringify(body, null, 2));
}

async function main() {
  console.info("\n=== Wellsprings CRM Debugger ===\n");
  debugCrmConfig(CRM_API_URL);

  const mode = process.argv[2] || "all";

  if (mode === "crm" || mode === "all") {
    await testCrmDirect();
  }

  if (mode === "backend" || mode === "all") {
    const healthy = await checkBackendHealth();
    if (healthy) await testBackendEnquiry();
  }

  if (mode === "preview" || mode === "all") {
    await testVisitCrmBody();
  }

  console.info("\n=== Done ===");
  console.info("Tips:");
  console.info("  - Set CRM_DEBUG=true in backend/.env and restart backend for live request logs");
  console.info("  - Run: npm run debug:crm");
  console.info("  - Run: npm run debug:crm -- backend   (backend only)");
  console.info("  - Run: npm run debug:crm -- crm       (CRM only)");
  console.info("  - Watch backend terminal while submitting the admissions form\n");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
