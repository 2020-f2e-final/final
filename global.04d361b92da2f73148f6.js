(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(r,n,o){o("6rr4"),o("ryzV"),r.exports=o("vTvl")},"6rr4":function(r,n,o){"use strict";o.r(n)},ryzV:function(r,n){function o(){window.scrollTo({top:0,behavior:"smooth"})}function i(){const e=document.querySelector("#go-top");e.addEventListener("click",o)}function l(e){const t=document.querySelector("#nav"),c=document.querySelector(`#${e}`);if(!c||!t)return;window.scrollTo({top:c.offsetTop-t.getBoundingClientRect().height,behavior:"smooth"})}function s(){const e=window.location.href.replace(/#.*/,"");Array.from(document.querySelectorAll("a")).filter(t=>t.href.startsWith(e)&&t.href.includes("#")).forEach(t=>{const c=t.href.split("#")[1];t.onclick=u=>{u.preventDefault(),l(c)}})}(()=>{i(),s()})()},vTvl:function(r,n,o){"use strict";o.r(n)}},[[0,0]]]);
