import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const PHONE_VALIDATION_MESSAGE =
  "Please enter a valid phone number for the selected country";

export function isValidInternationalPhone(phone: string): boolean {
  const value = phone.trim();
  if (!value.startsWith("+")) return false;
  return isValidPhoneNumber(value);
}

export const phoneSchema = z
  .string()
  .trim()
  .min(1, "Please enter a phone number")
  .refine(isValidInternationalPhone, { message: PHONE_VALIDATION_MESSAGE });
