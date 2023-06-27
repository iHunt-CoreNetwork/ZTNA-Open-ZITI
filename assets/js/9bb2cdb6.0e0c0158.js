"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[21],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},a=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},a),{},{components:r})):n.createElement(f,l({ref:t},a))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:10,sidebar_label:"Intro",title:"Introduction"},l=void 0,c={unversionedId:"guides/Public_Cloud_Deployment/README",id:"guides/Public_Cloud_Deployment/README",title:"Introduction",description:"This guide describes the steps for creating the OpenZiti components on the public clouds. The components include:",source:"@site/docs/guides/Public_Cloud_Deployment/README.md",sourceDirName:"guides/Public_Cloud_Deployment",slug:"/guides/Public_Cloud_Deployment/",permalink:"/docs/guides/Public_Cloud_Deployment/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Public_Cloud_Deployment/README.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Intro",title:"Introduction"},sidebar:"docsSidebar",previous:{title:"Public Cloud Deployment",permalink:"/docs/category/public-cloud-deployment"},next:{title:"Controller",permalink:"/docs/guides/Public_Cloud_Deployment/Controller"}},u={},s=[],a={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide describes the steps for creating the OpenZiti components on the public clouds. The components include: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Controller - use this guide for creating the controller"),(0,o.kt)("li",{parentName:"ol"},"Router     - use this guide for creating the routers"),(0,o.kt)("li",{parentName:"ol"},"Services   - use this guide to setup services and verify network setup.")))}p.isMDXComponent=!0}}]);