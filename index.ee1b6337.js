function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire4cc0;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequire4cc0=r),(0,r.register)("giU2u",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return o},set:function(e){return o=e},enumerable:!0,configurable:!0});var o,n=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)n.set(t[o],{baseUrl:e,path:t[o+1]})}}),r("giU2u").register(new URL("",import.meta.url).toString(),JSON.parse('["ehesI","index.ee1b6337.js","96aoC","device-photo-main-large.df6ecb3b.png","iUc65","kat-player.2d9c800d.png","bXv8h","jeans-vr.6ed909f1.svg"]'));var c={};c=new URL("device-photo-main-large.df6ecb3b.png",import.meta.url).toString();var d={};d=new URL("kat-player.2d9c800d.png",import.meta.url).toString();var l={};l=new URL("jeans-vr.6ed909f1.svg",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".open-bar__top").forEach(e=>{e.addEventListener("click",()=>{e.closest(".open-bar").classList.toggle("open-bar--active")})})}),window.openVideoPlayer=function(){document.getElementById("videoModal").style.display="flex"},window.closeVideoPlayer=function(){document.getElementById("videoModal").style.display="none"},document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("closeButton"),t=document.querySelectorAll(".video-button");e.addEventListener("click",closeVideoPlayer),t.forEach(e=>{e.addEventListener("click",openVideoPlayer)})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".dropdown__title"),t=document.querySelector(".dropdown__content");e.addEventListener("click",()=>{t.classList.toggle("dropdown__content--active")});let o=document.querySelector(".dropdown__title--text"),n=document.querySelectorAll(".dropdown__item");n.forEach(e=>{e.addEventListener("click",()=>{let r=e.textContent.trim().substring(0,2);o.textContent=r,t.classList.remove("dropdown__content--active"),n.forEach(e=>e.classList.remove("dropdown__item--active")),e.classList.add("dropdown__item--active")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".accordion"),t=document.querySelector(".faq"),o=document.querySelectorAll(".description__faq"),n=document.querySelector(".faq__close");e.forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("accordion--open")})),o.forEach(e=>{e.addEventListener("click",()=>{t.classList.add("page__aside--active"),document.body.classList.add("page__no-scroll")})}),n.addEventListener("click",()=>{t.classList.remove("page__aside--active"),document.body.classList.remove("page__no-scroll"),e.forEach(e=>{e.classList.remove("accordion--open")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".help"),t=document.querySelectorAll(".description__help"),o=document.querySelector(".help__close");t.forEach(t=>{t.addEventListener("click",()=>{e.classList.add("page__aside--active"),document.body.classList.add("page__no-scroll")})}),o.addEventListener("click",()=>{e.classList.remove("page__aside--active"),document.body.classList.remove("page__no-scroll")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".bucket"),t=document.querySelectorAll(".buy-button"),o=document.querySelector(".bucket__close");t.forEach(t=>{t.addEventListener("click",()=>{e.classList.add("page__aside--active"),document.body.classList.add("page__no-scroll")})}),o.addEventListener("click",()=>{e.classList.remove("page__aside--active"),document.body.classList.remove("page__no-scroll")})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".menu"),t=document.querySelectorAll(".icon--menu"),o=document.querySelector(".menu__close"),n=document.querySelectorAll(".nav__link");t.forEach(t=>{t.addEventListener("click",()=>{e.classList.add("page__aside--active"),document.body.classList.add("page__no-scroll")})}),o.addEventListener("click",()=>{e.classList.remove("page__aside--active"),document.body.classList.remove("page__no-scroll")}),n.forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("page__aside--active")})})}),document.addEventListener("DOMContentLoaded",()=>{let t=[/*@__PURE__*/e(c),/*@__PURE__*/e(d),/*@__PURE__*/e(l)],o=0,n=document.querySelector(".description__img"),r=document.querySelector(".slider__right--top"),s=document.querySelector(".slider__left--top"),a=document.querySelector(".description__slider");function i(e){n.src=t[e]}function u(){o===t.length-1&&(r.style.color="#929292"),o!==t.length-1&&(r.style.color="#fff"),0!==o&&(s.style.color="#fff"),0===o&&(s.style.color="#929292")}function _(){0===o&&a.style.setProperty("--slider-left","0"),1===o&&a.style.setProperty("--slider-left","33.3%"),2===o&&a.style.setProperty("--slider-left","66.6%")}i(o),r.addEventListener("click",()=>{o<t.length-1&&(i(o+=1),_()),u()}),s.addEventListener("click",()=>{o>0&&(i(o-=1),_()),u()})}),document.addEventListener("DOMContentLoaded",()=>{let t=[/*@__PURE__*/e(l),/*@__PURE__*/e(d),/*@__PURE__*/e(c)],o=0,n=document.querySelector(".about__img"),r=document.querySelector(".slider__right--bot"),s=document.querySelector(".slider__left--bot"),a=document.querySelector(".about__slider"),i=document.querySelector(".about__counter");function u(e){n.src=t[e]}function _(){o===t.length-1&&(r.style.color="#929292"),o!==t.length-1&&(r.style.color="#fff"),0!==o&&(s.style.color="#fff"),0===o&&(s.style.color="#929292")}function m(){0===o&&a.style.setProperty("--slider-left","0"),1===o&&a.style.setProperty("--slider-left","33.3%"),2===o&&a.style.setProperty("--slider-left","66.6%")}u(o),r.addEventListener("click",()=>{o<t.length-1&&(u(o+=1),m()),i.textContent=`${o+1}/3`,_()}),s.addEventListener("click",()=>{o>0&&(u(o-=1),m()),i.textContent=`${o+1}/3`,_()})});const s=document.querySelectorAll(".form"),a=document.querySelector(".bucket");s.forEach(e=>{e.addEventListener("submit",e=>{e.preventDefault(),a.classList.add("page__aside--active")})});
//# sourceMappingURL=index.ee1b6337.js.map
