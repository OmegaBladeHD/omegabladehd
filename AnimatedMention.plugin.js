/**
 * @name MentionAnimation
 * @author OmegaBladeHD
 * @authorId 1236736811116662795
 * @version 1.0
 * @description Animate mentions
 * @invite [Unknow]
 * @website https://omegabladehd.github.io/
 */

const PluginName = "AnimatedMentions";

module.exports = class AnimatedMentions {
    start() {
        let css = `
            /* Animation multicolore */
            @keyframes rainbow {
                0% {color: red;}
                14% {color: orange;}
                28% {color: yellow;}
                42% {color: lime;}
                57% {color: blue;}
                71% {color: indigo;}
                85% {color: violet;}
                100% {color: red;}
            }

            /* Animation de tremblement */
            @keyframes shake {
                0% {transform: translate(1px, 1px) rotate(0deg);}
                10% {transform: translate(-1px, -2px) rotate(-1deg);}
                20% {transform: translate(-2px, 0px) rotate(1deg);}
                30% {transform: translate(1px, 2px) rotate(0deg);}
                40% {transform: translate(1px, -1px) rotate(1deg);}
                50% {transform: translate(-1px, 2px) rotate(-1deg);}
                60% {transform: translate(-1px, 1px) rotate(0deg);}
                70% {transform: translate(2px, 1px) rotate(-1deg);}
                80% {transform: translate(-1px, -1px) rotate(1deg);}
                90% {transform: translate(1px, 2px) rotate(0deg);}
                100% {transform: translate(1px, -2px) rotate(-1deg);}
            }

            /* Appliquer les animations aux mentions lors du survol */
            .mention:hover {
                animation: rainbow 5s linear infinite, shake 0.5s linear infinite;
            }
        `;

        BdApi.injectCSS(`${PluginName}-css`, css);
    }

    stop() {
        BdApi.clearCSS(`${PluginName}-css`);
    }
};
