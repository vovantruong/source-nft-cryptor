import React, { useEffect, useState } from "react";
import "./Language.css";
import Translate from "./translate.js";
const LanguageChange = () => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,vi', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element')
    };

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    return (
        <div className="">
            {/* <p className="translateText">Change website language</p> */}
            {/* <a className="dropdown-toggle nav-link" href="#" role="button" id="language"> English</a>
            <div 
                className="dropdown-menu"
                aria-labelledby="language"
            >
                <a
                    className="dropdown-item"
                    onClick={this.doGTranslate('en|en')}
                    >
                    English
                </a>
            </div> */}
            <div id="google_translate_element"></div>
        </div>
    );
};


export default LanguageChange;