import React from "react";
import "./SelectLanguage.scss";
import SingleLanguage from "./SingleLanguage";
import { dataLocalStorage } from "./dataLocalStorage";

import england from "../../images/flags/england.svg";
import albania from "../../images/flags/albania.svg";
import german from "../../images/flags/german.svg";
import france from "../../images/flags/france.svg";

import { useDispatch, useSelector } from "react-redux";
import { chooseLanguage } from "../../store/actions/languageAction";
import { MdKeyboardArrowDown } from "react-icons/md";

function SelectLanguage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const languages = [
    { value: "en-GB", lang: "English", flag: england },
    { value: "sq-AL", lang: "Albanian", flag: albania },
    { value: "de-DE", lang: "German", flag: german },
    { value: "fr-FR", lang: "French", flag: france },
  ];

  const handleLanguageChange = (language, locale) => {
    dispatch(chooseLanguage(locale));
    dataLocalStorage.setLanguage(language);
    dataLocalStorage.setLocale(locale);
  };
  let flag = null;
  switch (dataLocalStorage.getLocale()) {
    case "en-GB":
      flag = england;
      break;
    case "sq-AL":
      flag = albania;
      break;
    case "de-DE":
      flag = german;
      break;
    case "fr-FR":
      flag = france;
      break;

    default:
      flag = england;
  }
  return (
    <div className="select-language">
      <img src={flag} alt="selected flag" />
      {dataLocalStorage.getLanguage() || "English"}
      <MdKeyboardArrowDown className="arrow" styles="up" />

      <div className="dropdown">
        {languages
          .sort(function (a, b) {
            let lang1 = a.lang.toUpperCase();
            let lang2 = b.lang.toUpperCase();
            if (lang1 < lang2) {
              return -1;
            }
            if (lang1 > lang2) {
              return 1;
            }
            return 0;
          })
          .map((thisLang, i) => {
            return (
              <SingleLanguage
                value={thisLang.value}
                key={i}
                handleLanguageChange={() =>
                  handleLanguageChange(thisLang.lang, thisLang.value)
                }
                styles={thisLang.value === language && "selected"}
                language={thisLang.lang}
                flag={thisLang.flag}
              ></SingleLanguage>
            );
          })}
      </div>
    </div>
  );
}
export default SelectLanguage;
