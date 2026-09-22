const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

/**
 * Dev: Vite proxies /api/leads → Express on :3001 (or set VITE_API_BASE_URL).
 * Production: same-origin /api/leads on wellspringsacademy.in (Nitro server routes).
 */
export const LEADS_API = {
  enquiry: `${API_BASE || (import.meta.env.DEV ? "http://localhost:3001" : "")}/api/leads/enquiry`,
  visitBooking: `${API_BASE || (import.meta.env.DEV ? "http://localhost:3001" : "")}/api/leads/visit-booking`,
} as const;