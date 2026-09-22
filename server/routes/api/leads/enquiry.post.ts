import { defineEventHandler, readBody, setResponseStatus } from "h3";
import { handleEnquiryLead } from "../../../../backend/src/leads-handlers.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = await handleEnquiryLead(body);
  setResponseStatus(event, result.status);
  return result.body;
});
