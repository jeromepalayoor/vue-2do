if(!self.define){let e,i={};const o=(o,n)=>(o=new URL(o+".js",n).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const r=e=>o(e,c),u={module:{uri:c},exports:d,require:r};i[c]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(s(...e),d)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-2do"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue-2do/images/icon.png",revision:"cd08a4b33a2c01eb064cb0f491addba4"},{url:"/vue-2do/images/icons/icon-128x128.png",revision:"99456fd030ab9501b42345e21f814c34"},{url:"/vue-2do/images/icons/icon-144x144.png",revision:"c082a02c55980c9ca897efe3e933a9bb"},{url:"/vue-2do/images/icons/icon-152x152.png",revision:"53d031840aecb96748fddb002257e050"},{url:"/vue-2do/images/icons/icon-192x192.png",revision:"264314d541f2b8b35b178f0930638d86"},{url:"/vue-2do/images/icons/icon-512x512.png",revision:"59b7020336bfdf7bffad99de7103f98d"},{url:"/vue-2do/images/icons/icon-72x72.png",revision:"1f3b358fe06e8d2e7b6e9bdb1f465d4a"},{url:"/vue-2do/images/icons/icon-96x96.png",revision:"1d6e82c3f01b9340882ee7612e2ffc2a"},{url:"/vue-2do/index.html",revision:"cf0c6f82e5d6560ce0b4ae9095201721"},{url:"/vue-2do/js/app.dbf7d660.js",revision:null},{url:"/vue-2do/js/chunk-vendors.2108fab4.js",revision:null},{url:"/vue-2do/manifest.json",revision:"b73779a31002a53d783e4802b9b35c31"},{url:"/vue-2do/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map