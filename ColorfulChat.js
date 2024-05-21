/**
 * @name ColorfulChat
 * @author OmegaBladeHD
 * @authorId 1236736811116662795
 * @version 1.0
 * @description Description
 * @invite [Unknow]
 * @website https://omegabladehd.github.io/
 */

(function() {
    'use strict';

    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    .message-2qnXI6:hover {
        color: red;
        animation: colorchange 1s infinite;
    }

    @keyframes colorchange {
        0%   {color: red;}
        25%  {color: yellow;}
        50%  {color: blue;}
        75%  {color: green;}
        100% {color: red;}
    }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
})();