"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95974:(e,t,n)=>{n.d(t,{ZP:()=>a});var o=n(87462),r=(n(67294),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you are building a new application you have a unique opportunity to choose to use one of the Ziti SDKs and to create a\ntruly zero trust application from the start! Navigate over to ",(0,r.kt)("a",{parentName:"p",href:"/api"},"the API reference")," to learn more about which SDKs\nare available and for documentation focused on using these sdks."))}a.isMDXComponent=!0},97115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),i=n(77261),a=n(95974);const c={title:"Choosing a Client",id:"choose",sidebar_position:0},s="Choosing a Client",l={unversionedId:"core-concepts/clients/choose",id:"core-concepts/clients/choose",title:"Choosing a Client",description:"",source:"@site/docs/core-concepts/clients/choose.mdx",sourceDirName:"core-concepts/clients",slug:"/core-concepts/clients/choose",permalink:"/docs/core-concepts/clients/choose",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/clients/choose.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Choosing a Client",id:"choose",sidebar_position:0},sidebar:"rootSidebar",previous:{title:"Core Concepts",permalink:"/docs/core-concepts/"},next:{title:"SDKs",permalink:"/docs/core-concepts/clients/sdks"}},p={},u=[{value:"Tunnelers",id:"tunnelers",level:2},{value:"SDK",id:"sdk",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"choosing-a-client"},"Choosing a Client"),(0,r.kt)("p",null,"Once you have a Ziti Network - you are going to require a Ziti-aware client in order to access the network. There are\ntwo types of clients and depending on your needs you'll choose to either use a tunneler or you will use an SDK to\nsecurely access the Ziti Network."),(0,r.kt)("p",null,"Choosing which type of client you will use to connect to a Ziti Network is a straightforward process and comes down to a\nsingle question. If you are you installing Ziti in front of an existing application which has already been developed and\ndeployed you need to use a ",(0,r.kt)("a",{parentName:"p",href:"./tunnelers/"},"tunneler"),".  If you are developing a new product, starting from scratch and\nyou want to take advantage of a fully zero trust solution you will probably want to use an SDK."),(0,r.kt)("h2",{id:"tunnelers"},"Tunnelers"),(0,r.kt)(i.ZP,{mdxType:"TunnelerOverviewMd"}),(0,r.kt)("p",null,"Read more on using ",(0,r.kt)("a",{parentName:"p",href:"./tunnelers/"},"tunnelers here")),(0,r.kt)("h2",{id:"sdk"},"SDK"),(0,r.kt)(a.ZP,{mdxType:"QuickInfoMd"}))}m.isMDXComponent=!0},77261:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/desktop-edge-win/releases/latest"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/app/id1460484572"},"MacOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core-concepts/clients/tunnelers/linux/#install-linux-package"},"Linux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/app/id1460484353"},"iOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=org.openziti.mobile"},"Android"))))}a.isMDXComponent=!0;const c={toc:[]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An OpenZiti Tunneler is purpose-built software designed to connect applications which are not Ziti-aware to the OpenZiti Network."),(0,r.kt)(a,{mdxType:"TunnelerDlMd"}))}s.isMDXComponent=!0}}]);