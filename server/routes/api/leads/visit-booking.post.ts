import { defineEventHandler, readBody, setResponseStatus } from "h3";
import { handleVisitBookingLead } from "../../../../backend/src/leads-handlers.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = await handleVisitBookingLead(body);
  setResponseStatus(event, result.status);
  return result.body;
});
