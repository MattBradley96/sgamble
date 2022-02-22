import { t } from "i18next";
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { useTranslation } from "react-i18next";
import {
  Country,
  countries,
  getCountryName,
  getCityName,
  sanitizeCountryName,
} from "../domain/locs";

interface CountryInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
}

export function CountryInput({
  inputRef,
  currentGuess,
  setCurrentGuess,
}: CountryInputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { i18n } = useTranslation();

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) =>
        // setSuggestions(
        //   countries
        //     .map((c) => getCountryName(i18n.resolvedLanguage, c).toUpperCase().concat(", ".concat(getCityName(i18n.resolvedLanguage, c).toUpperCase())))
        //     .filter((countryName) =>
        //       sanitizeCountryName(countryName).includes(
        //         sanitizeCountryName(value)
        //       )
        //     )
        // )
        setSuggestions(
          countries
            .filter((c:Country) =>
              sanitizeCountryName(getCountryName(i18n.resolvedLanguage, c)).includes(
                sanitizeCountryName(value)
              )
          ).concat(countries
            .filter((c:Country) =>
              sanitizeCountryName(getCityName(i18n.resolvedLanguage, c)).includes(
                sanitizeCountryName(value)
              )
          ))
            .map((c) => getCountryName(i18n.resolvedLanguage, c).toUpperCase())
        )
      }
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(suggestion) => suggestion} //when clicked take the suggestion value
      renderSuggestion={(suggestion) => (
        <div className="border-2 dark:bg-slate-800 dark:text-slate-100">
          {suggestion}
        </div>
      )}
      containerProps={{
        className: "border-2 flex-auto relative",
      }}
      inputProps={{
        ref: inputRef,
        className: "w-full dark:bg-slate-800 dark:text-slate-100",
        placeholder: t("placeholder"),
        value: currentGuess,
        onChange: (_e, { newValue }) => setCurrentGuess(newValue),
      }}
      renderSuggestionsContainer={({ containerProps, children }) => (
        <div
          {...containerProps}
          className={`${containerProps.className} absolute bottom-full w-full bg-white mb-1 divide-x-2 max-h-52 overflow-auto`}
        >
          {children}
        </div>
      )}
    />
  );
}
