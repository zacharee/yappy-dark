// ==UserScript==
// @name         YAPPYDARK
// @namespace    zachary@techyteen.tk
// @version      0.1a
// @description  Dark theme for Yappy Web
// @author       Zachary Wander

// @include      *://*yappy.im/web/*

// @grant        none
// ==/UserScript==

/*global jQuery*/

jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/zacharee/yappy-dark@master/yappydark.css">');
