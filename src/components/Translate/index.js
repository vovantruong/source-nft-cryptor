import React, { useEffect, useState } from "react";
import "./Language.css";
import Translates from "./translate.js";
const LanguageChange = () => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,vi,ja,zh-CN,ko', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false, multilanguagePage: true }, 'google_translate_element')
    };
    
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    return (
        <div className="">
            
            {/* <p className="translateText"
                onClick={this.doGTranslate('en|ja')}
            >Change website language</p> */}
            <a
                onClick={() => console.log(Translates)}
                >
                    Japan
            </a>
            <div id="google_translate_element"></div>
        </div>
    );
};


export default LanguageChange;