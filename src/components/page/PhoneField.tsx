import { CountrySelector, usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const labelCls =
  "font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)]";

const PREFERRED_COUNTRIES = ["in", "us", "gb", "ae", "sg", "au", "ca"] as const;

type PhoneFieldProps = {
  label: string;
  required?: boolean;
  value: string;
  onChange: (phone: string) => void;
  error?: string;
  id?: string;
};

export function PhoneField({
  label,
  required,
  value,
  onChange,
  error,
  id = "phone",
}: PhoneFieldProps) {
  const { inputValue, country, setCountry, handlePhoneValueChange, inputRef } = usePhoneInput({
    defaultCountry: "in",
    value,
    disableDialCodeAndPrefix: true,
    disableFormatting: true,
    preferredCountries: [...PREFERRED_COUNTRIES],
    onChange: (data) => onChange(data.phone),
  });

  return (
    <div className="block">
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && <span className="ml-1 text-[var(--coral-600)]">*</span>}
      </label>

      <div className="ws-phone-field mt-2">
        <div className="ws-phone-input">
          <CountrySelector
            selectedCountry={country.iso2}
            onSelect={(c) => setCountry(c.iso2)}
            preferredCountries={[...PREFERRED_COUNTRIES]}
            className="ws-phone-country-selector"
            renderButtonWrapper={({ children, rootProps }) => (
              <button
                {...rootProps}
                type="button"
                className="ws-phone-country-btn"
                aria-label={`Country code ${country.name}`}
              >
                <span className="ws-phone-country-btn-inner">
                  {children}
                  <span className="ws-phone-code">+{country.dialCode}</span>
                </span>
              </button>
            )}
            dropdownStyleProps={{
              className: "ws-phone-country-dropdown",
              listItemClassName: "ws-phone-country-option",
              listItemFlagClassName: "ws-phone-flag",
              listItemCountryNameClassName: "ws-phone-country-name",
              listItemDialCodeClassName: "ws-phone-dial-code",
            }}
          />

          <input
            id={id}
            ref={inputRef}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            required={required}
            value={inputValue}
            onChange={handlePhoneValueChange}
            placeholder="Phone number"
            className="ws-phone-number-input"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </div>
      </div>

      {error && (
        <span id={`${id}-error`} className="mt-1 block text-[12px] text-[var(--coral-600)]">
          {error}
        </span>
      )}
    </div>
  );
}
