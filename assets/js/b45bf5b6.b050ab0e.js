"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="Password Management",s={unversionedId:"learn/core-concepts/security/authentication/password-management",id:"learn/core-concepts/security/authentication/password-management",title:"Password Management",description:"For identities using username password (UPDB) authenticators the following actions are supported:",source:"@site/docs/learn/core-concepts/security/authentication/5-password-management.md",sourceDirName:"learn/core-concepts/security/authentication",slug:"/learn/core-concepts/security/authentication/password-management",permalink:"/docs/learn/core-concepts/security/authentication/password-management",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authentication/5-password-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Authentication",permalink:"/docs/learn/core-concepts/security/authentication/auth"},next:{title:"3rd Party CAs",permalink:"/docs/learn/core-concepts/security/authentication/third-party-cas"}},c={},l=[{value:"Administrative Password Reset",id:"administrative-password-reset",level:2},{value:"Ziti CLI",id:"ziti-cli",level:3},{value:"Management API",id:"management-api",level:3},{value:"Client Password Change",id:"client-password-change",level:2},{value:"Ziti CLI",id:"ziti-cli-1",level:3},{value:"Client or Management API",id:"client-or-management-api",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"password-management"},"Password Management"),(0,a.kt)("p",null,"For identities using username password (UPDB) authenticators the following actions are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"administrative password resets"),(0,a.kt)("li",{parentName:"ul"},"client initiated password rotation")),(0,a.kt)("h2",{id:"administrative-password-reset"},"Administrative Password Reset"),(0,a.kt)("p",null,"Passwords may be reset via the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/edge-management-reference"},"Edge Management API")," by an administrative client."),(0,a.kt)("h3",{id:"ziti-cli"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti edge update authenticator updb --identity <identityIdOrName> -p <newPassword>")),(0,a.kt)("h3",{id:"management-api"},"Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/authenticators/<id>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "password": "<new-password>"\n}\n')),(0,a.kt)("h2",{id:"client-password-change"},"Client Password Change"),(0,a.kt)("p",null,"Passwords may be reset via the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/developer/api#edge-management-api"},"Edge Management API")," or\n",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/developer/api#edge-client-api"},"Edge Client API")," by the currently authenticated client."),(0,a.kt)("h3",{id:"ziti-cli-1"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti edge update authenticator updb -c <currentPassword> -n <newPassword>")),(0,a.kt)("h3",{id:"client-or-management-api"},"Client or Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/current-identity/authenticators/<id>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "password": "<new-password>"\n}\n')))}d.isMDXComponent=!0}}]);