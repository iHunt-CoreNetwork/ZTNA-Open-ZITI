"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={},o="Configuration",l={unversionedId:"config-store/overview",id:"config-store/overview",title:"Configuration",description:"Ziti has the capability to define a configuration schema for an application and provide service configuration for those applications which need additional metadata.",source:"@site/docs/config-store/overview.md",sourceDirName:"config-store",slug:"/config-store/overview",permalink:"/docusaurus/docs/config-store/overview",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/config-store/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating",permalink:"/docusaurus/docs/services/creating"},next:{title:"consuming",permalink:"/docusaurus/docs/config-store/consuming"}},c={},s=[{value:"Why Centralized Configuration?",id:"why-centralized-configuration",level:2},{value:"Overview",id:"overview",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Ziti has the capability to define a configuration schema for an application and provide service configuration for those applications which need additional metadata. "),(0,a.kt)("h2",{id:"why-centralized-configuration"},"Why Centralized Configuration?"),(0,a.kt)("p",null,"One might ask why have this feature in Ziti when applications can store configuration data in local configuration files. While this approach works, centralized management makes deployments much easier. It can be difficult or impossible to update a file on a device out in the field, whereas updating the configuration in Ziti is easy, and running clients will quickly be notified of service changes."),(0,a.kt)("p",null,"The Ziti tunneler applicatons provide an example how configuration data can be used. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tunnelers need to know what ip/dns and port(s) to intercept for services they are proxying on the client side"),(0,a.kt)("li",{parentName:"ul"},"Tunnelers need to know where to reach out to applications they are proxying on the server side")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The configuration store has four components:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configuration types")," ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Configuration types define a type of configuration, including an optional JSON schema that the configuration data must conform to."),(0,a.kt)("li",{parentName:"ol"},"Configuration types have the following attributes: ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"A name "),(0,a.kt)("li",{parentName:"ol"},"An optional JSON schema to validate configurations of the type"),(0,a.kt)("li",{parentName:"ol"},"Standard edge attributes: id, tags, createdAt, updatedAt"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configurations")," ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Configurations have the following attributes: ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"A name"),(0,a.kt)("li",{parentName:"ol"},"The configuration data, which is arbitrary JSON data, so long as it conforms to the type schema (if specified)"),(0,a.kt)("li",{parentName:"ol"},"Standard edge attributes: id, tags, createdAt, updatedAt"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Services")," ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Each service can be linked to multiple configuration. Services can have one configuration linked for each configuration type."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Identities")," ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"An identity can have a configuration specified for a given service and configuration type. This will override any configuration for the service for that type ")))),(0,a.kt)("p",null,"This configuration model has the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Different applications can have their own configuration for the same service"),(0,a.kt)("li",{parentName:"ul"},"Applications can have multiple configuration types for themselves where it makes sense",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ziti tunnelers have one type for the client side and one for the server side, since they have different properties and not every service with use both"))),(0,a.kt)("li",{parentName:"ul"},"Since an application can support multiple configuration types, applications can version their configuration types as their needs change")))}u.isMDXComponent=!0}}]);