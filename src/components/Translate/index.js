import React, { useEffect, useState } from "react";
import "./Language.css";
import "./translate.js";
const LanguageChange = () => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,vi,ja,zh-CN,ko', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element')
    };

    const translate = document.querySelector('.Footer_col__lmHST .translate');
    const lang = document.querySelector('iframe .goog-te-menu2');


    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.querySelector('#google_translate_element').appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

    }, []);
    useEffect(() => {
        // document.querySelector('.Footer_col__lmHST .translate').addEventListener("mouseenter", () => {
        //     document.querySelector('.goog-te-menu2').classList.add("home");
        // })
    });
    return (
        <div className="translate"
        >
            <div id="google_translate_element">
            </div>
        </div>
    );
};


export default LanguageChange;