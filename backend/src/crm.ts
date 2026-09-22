import type { EnquiryFormInput, VisitBookingFormInput } from "./schemas.js";
import { debugLog } from "./crm-debug.js";

const CRM_API_URL = process.env.CRM_API_URL?.trim() || "";

type CrmBody = Record<string, string>;

const UTM_NA = "NA";

function utmValue(value?: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : UTM_NA;
}

function trackingFields(data: {
  pageUrl?: string;
  url?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  adGroup?: string;
  utmDevice?: string;
  utmAgeGroup?: string;
  utmGenderGroup?: string;
}): CrmBody {
  return {
    URL: utmValue(data.url ?? data.pageUrl),
    UTM_Source: utmValue(data.utmSource),
    UTM_Medium: utmValue(data.utmMedium),
    UTM_Campaign: utmValue(data.utmCampaign),
    UTM_Term: utmValue(data.utmTerm),
    UTM_Content: utmValue(data.utmContent),
    Ad_Group: utmValue(data.adGroup),
    UTM_Device: utmValue(data.utmDevice),
    UTM_Age_Group: utmValue(data.utmAgeGroup),
    UTM_Gender_Group: utmValue(data.utmGenderGroup),
  };
}

function toCrmGrade(grade: string): string {
  return grade.replace(/\bGrade\b/g, "Class");
}

function parentFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

/** Lead First_Name should be given name only — not the full child/student name. */
function firstNameOnly(fullName: string): string {
  const first = fullName.trim().split(/\s+/).filter(Boolean)[0];
  return first ?? fullName.trim();
}

/** Split ISO visit time for Zoho Deluge (date + time → addTime). */
function visitTimeFields(visitTime: string): CrmBody {
  const match = visitTime.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/);
  if (!match) return { Preferred_Visit_Time: visitTime };
  return {
    Preferred_Visit_Time: visitTime,
    Preferred_Visit_Date: match[1],
    Preferred_Visit_Time_Only: match[2],
  };
}

export function toEnquiryCrmBody(data: EnquiryFormInput): CrmBody {
  return {
    ...trackingFields(data),
    First_Name: firstNameOnly(data.childName),
    Last_Name: data.parentLastName,
    Parent_or_Guardian_Name: parentFullName(data.parentFirstName, data.parentLastName),
    Email: data.email,
    Phone: data.phone,
    Mobile: data.phone,
    Grade_Applying_For: toCrmGrade(data.grade),
    ...(data.visitTime ? visitTimeFields(data.visitTime) : {}),
    ...(data.message ? { Message: data.message } : {}),
  };
}

export function toVisitCrmBody(data: VisitBookingFormInput): CrmBody {
  return {
    ...trackingFields(data),
    First_Name: firstNameOnly(data.studentName),
    Last_Name: data.parentLastName,
    Parent_or_Guardian_Name: parentFullName(data.parentFirstName, data.parentLastName),
    Phone: data.phone,
    Mobile: data.phone,
    Grade_Applying_For: toCrmGrade(data.grade),
    ...(data.comments ? { Comments: data.comments } : {}),
  };
}

export async function postToCrm(body: CrmBody): Promise<void> {
  const payload = { params: body };

  if (!CRM_API_URL) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[CRM] CRM_API_URL not set. POST body:\n", JSON.stringify(payload, null, 2));
      return;
    }
    throw new Error("CRM_API_URL is not configured");
  }

  debugLog("Sending to CRM", payload);

  const response = await fetch(CRM_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text().catch(() => "");
  let responseJson: unknown = responseText;
  try {
    responseJson = responseText ? JSON.parse(responseText) : null;
  } catch {
    // keep raw text
  }

  debugLog(`CRM response (${response.status})`, responseJson);

  if (!response.ok) {
    throw new Error(
      `CRM request failed (${response.status})${responseText ? `: ${responseText}` : ""}`,
    );
  }

  console.info("[CRM] Lead sent — status", response.status, responseText || "(empty body)");
}
