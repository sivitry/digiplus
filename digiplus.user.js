// ==UserScript==
// @name         digiplus
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://digiplus.adi.gov.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("123")
    var x = document.getElementsByTagName('a');
    var i;
    for(i=0; i<x.length; i++){
        if(x[i].href.indexOf("pdf")>0){
            console.log(i, x[i]);
            if(x[i].title.length>0){
                x[i].setAttribute("download", x[i].title);
            }
            else{
                var y = x[i].getElementsByClassName("ctn");
                var newname = y[0].innerText;
                x[i].setAttribute("download", newname);
            }
        }
    }
})();
