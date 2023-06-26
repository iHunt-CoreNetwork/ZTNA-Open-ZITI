"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running the app",id:"running-the-app",level:2}]};function a(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ziti-android-quickstart"},"Ziti Android Quickstart"),(0,i.kt)("p",null,"This is a simple app that demonstrates the use of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-sdk-android#readme"},"the Ziti SDK for Android")," (Kotlin). You will need the files in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-android-app"},"this Git repository"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android studio or other Android IDE"),(0,i.kt)("li",{parentName:"ul"},"Android simulator or device to run the app")),(0,i.kt)("h2",{id:"running-the-app"},"Running the app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run one of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openziti.io/docs/learn/quickstarts/network/"},"the quickstarts")," to create a Ziti network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a service that is used by this app:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"name = ziti-weather-service\nhostname = wttr.ziti\nport = 80\n\nendpoint host = wttr.in\nendpoint port = 80\nendpoint protocol = tcp\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create an identity for the device running this. You'll need one identity per device.\nYou will need to configure access to the service for your new identity.\nDownload enrollment JWT and copy it to the device.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once the app starts it will show notification to let user know that the app has not been enrolled\n",(0,i.kt)("img",{alt:"no-enrollment",src:n(79389).Z,width:"540",height:"1080"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tapping the notification allows you to select enrollent token\n",(0,i.kt)("img",{alt:"pick-jwt",src:n(36383).Z,width:"540",height:"1080"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If enrollment is successful it shows shows notification on the screen\n",(0,i.kt)("img",{alt:"success",src:n(11566).Z,width:"540",height:"1080"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After that the app can be used -- pushing the message button should load current weather\nfor Charlotte on the screen"))))}a.isMDXComponent=!0;const p={hide_title:!0,title:"Android",hide_table_of_contents:!1,toc_min_heading_level:3},l=void 0,s={unversionedId:"reference/developer/sdk/android",id:"reference/developer/sdk/android",title:"Android",description:"",source:"@site/docs/reference/developer/sdk/android.mdx",sourceDirName:"reference/developer/sdk",slug:"/reference/developer/sdk/android",permalink:"/docs/reference/developer/sdk/android",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/developer/sdk/android.mdx",tags:[],version:"current",frontMatter:{hide_title:!0,title:"Android",hide_table_of_contents:!1,toc_min_heading_level:3},sidebar:"docsSidebar",previous:{title:"Edge SDKs",permalink:"/docs/reference/developer/sdk/"},next:{title:"Ziti C SDK",permalink:"/docs/reference/developer/sdk/ziti-sdk-c"}},c={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a,{mdxType:"AndroidMd"}))}m.isMDXComponent=!0},11566:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enrollment-success-1ef86296bc22a3c8b5d7ba558d7b82e4.png"},79389:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/no-enrollment-8b88f8870847b8b38e4ff2aa053e85d9.png"},36383:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pick-jwt-307e1b1be38bb7c379e72b4641e87e39.png"}}]);