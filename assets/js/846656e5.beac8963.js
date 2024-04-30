"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6635],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>v});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(i),u=r,v=p["".concat(c,".").concat(u)]||p[u]||h[u]||o;return i?n.createElement(v,a(a({ref:t},d),{},{components:i})):n.createElement(v,a({ref:t},d))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5757:(e,t,i)=>{i.d(t,{ZP:()=>s});var n=i(87462),r=(i(67294),i(3905));const o={toc:[]},a="wrapper";function s(e){let{components:t,...i}=e;return(0,r.kt)(a,(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Edge router policies are entities within the Ziti Controller which provide\nidentities access to edge routers. In order to access or provide a\nservice the identity must first access the Ziti network fabric. Edge\nrouters are the points through which SDK based applications can\nget that access."))}s.isMDXComponent=!0},95900:(e,t,i)=>{i.d(t,{ZP:()=>s});var n=i(87462),r=(i(67294),i(3905));const o={toc:[]},a="wrapper";function s(e){let{components:t,...i}=e;return(0,r.kt)(a,(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Service edge router policies are entities within the Ziti Controller which provide\nservices access to edge routers. They are similar to edge router policies except\nthey determine via which edge routers a service can be used or provided."))}s.isMDXComponent=!0},75436:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=i(87462),r=(i(67294),i(3905)),o=i(5757),a=i(95900);const s={id:"glossary",title:"Glossary"},c=void 0,l={unversionedId:"reference/glossary",id:"reference/glossary",title:"Glossary",description:"Here you will find a list of terms you may come across as you are using Ziti.",source:"@site/docs/reference/glossary.md",sourceDirName:"reference",slug:"/reference/glossary",permalink:"/docs/reference/glossary",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"docsSidebar",previous:{title:"Ziti Swift SDK",permalink:"/docs/reference/developer/sdk/ziti-sdk-swift"},next:{title:"Overview",permalink:"/docs/guides/"}},d={},p=[{value:"Edge Router Policy",id:"edge-router-policy",level:2},{value:"Network Overlay, Overlay",id:"network-overlay-overlay",level:2},{value:"Service Definition",id:"service-definition",level:2},{value:"Service Edge Router Policy",id:"service-edge-router-policy",level:2},{value:"Session",id:"session",level:2},{value:"Initiating Router, Terminating Router",id:"initiating-router-terminating-router",level:2},{value:"Initiating Endpoint, Terminating Endpoint",id:"initiating-endpoint-terminating-endpoint",level:2},{value:"Path",id:"path",level:2},{value:"Underlay",id:"underlay",level:2},{value:"Xgress (Xctrl, Xmgmt), Ziti Fabric SDK",id:"xgress-xctrl-xmgmt-ziti-fabric-sdk",level:2},{value:"Ziti Controller, Controller",id:"ziti-controller-controller",level:2},{value:"Ziti Edge, Edge",id:"ziti-edge-edge",level:2},{value:"Ziti Enabled Application",id:"ziti-enabled-application",level:2},{value:"Ziti Endpoint SDK, Endpoint SDK, SDK",id:"ziti-endpoint-sdk-endpoint-sdk-sdk",level:2},{value:"Ziti Fabric, Fabric",id:"ziti-fabric-fabric",level:2},{value:"Ziti Network, Ziti",id:"ziti-network-ziti",level:2},{value:"Ziti Router, Router",id:"ziti-router-router",level:2},{value:"Ziti Service, Service",id:"ziti-service-service",level:2},{value:"Ziti Service, Service - Hosted",id:"ziti-service-service---hosted",level:2},{value:"Ziti Tunneler, Tunneler",id:"ziti-tunneler-tunneler",level:2},{value:"Zitification, Zitified, Zitify",id:"zitification-zitified-zitify",level:2}],h={toc:p},u="wrapper";function v(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here you will find a list of terms you may come across as you are using Ziti."),(0,r.kt)("h2",{id:"edge-router-policy"},(0,r.kt)("a",{parentName:"h2",href:"/docs/learn/core-concepts/security/authorization/policies/overview#edge-router-policies"},"Edge Router Policy")),(0,r.kt)(o.ZP,{mdxType:"ERPBrief"}),(0,r.kt)("h2",{id:"network-overlay-overlay"},"Network Overlay, Overlay"),(0,r.kt)("p",null,'A Ziti network is implemented as an "overlay". A network overlay abstracts away the layers beneath it, providing a new set of abstractions for designing and implementing software and systems. Good programming abstractions allow developers to focus on the rules implemented by those abstractions without being concerned with the layers below the abstraction. Ziti\'s overlay allows developers to focus on connectivity between components without having to be concerned with low-level details of how that connectivity is managed.'),(0,r.kt)("h2",{id:"service-definition"},"Service Definition"),(0,r.kt)("p",null,'A service definition is used to "bind" a service to a specific underlay network expression, through one or more nodes on a Ziti overlay network. A service definition usually includes a terminating router (or routers) and one or more SDK or underlay network endpoints where the service can be reached.'),(0,r.kt)("h2",{id:"service-edge-router-policy"},(0,r.kt)("a",{parentName:"h2",href:"/docs/learn/core-concepts/security/authorization/policies/overview#service-edge-router-policies"},"Service Edge Router Policy")),(0,r.kt)(a.ZP,{mdxType:"SERPBrief"}),(0,r.kt)("h2",{id:"session"},(0,r.kt)("a",{parentName:"h2",href:"/docs/learn/core-concepts/security/sessions#session"},"Session")),(0,r.kt)("p",null,'A Session is an "instance" of a service on behalf of an initiating endpoint, which is connected to a terminating endpoint. A Session has strong identity and security between the initiating endpoint, terminating endpoint, and throughout the links between. A Session selects a specific set of routers to traverse between the endpoints, and that path can change dynamically due to network performance.'),(0,r.kt)("h2",{id:"initiating-router-terminating-router"},"Initiating Router, Terminating Router"),(0,r.kt)("p",null,"An initiating router is the router which initiates a request for a Session on behalf of a connected endpoint. A terminating router is the router which provides access to the service associated with the Session request. Every Session links an initiating endpoint (through an initiating router), with a terminating endpoint (through a terminating router)."),(0,r.kt)("h2",{id:"initiating-endpoint-terminating-endpoint"},"Initiating Endpoint, Terminating Endpoint"),(0,r.kt)("p",null,'See "initiating router" and "terminating router" above. The initiating endpoint is the endpoint responsible for requesting connectivity to a service. The terminating endpoint is the endpoint that provides the service.'),(0,r.kt)("h2",{id:"path"},(0,r.kt)("a",{parentName:"h2",href:"/docs/learn/core-concepts/data-flow-explainer"},"Path")),(0,r.kt)("p",null,"The path is the set of Ziti Routers traversed by a Session from an initiating router to a terminating router. Ziti aggressively optimizes the path for throughput and reliability, and so it may change during the Session."),(0,r.kt)("h2",{id:"underlay"},"Underlay"),(0,r.kt)("p",null,'We refer to lower-level network concerns as "underlay". IP networking would be an example of an underlay concept.'),(0,r.kt)("h2",{id:"xgress-xctrl-xmgmt-ziti-fabric-sdk"},"Xgress (Xctrl, Xmgmt), Ziti Fabric SDK"),(0,r.kt)("p",null,"Xgress is a set of extension components for the Ziti fabric, which enable overlay applications to participate in the\noverlay network. Xgress focuses on extending the data plane, providing interfaces for creating initiating and\nterminating endpoints. Xctrl and Xmgmt focus on extending the control and management planes of the fabric. Xgress is the\ncore of the Ziti Fabric SDK."),(0,r.kt)("h2",{id:"ziti-controller-controller"},"Ziti Controller, Controller"),(0,r.kt)("p",null,"A Ziti Controller is a process that is installed on a host, which allows it to coordinate a Ziti network. The Ziti Controller is designed to be extensible through Ziti fabric extension mechanisms (Xctrl, Xmgmt), which means that it is capable of hosting extensions to the fabric control and management planes."),(0,r.kt)("h2",{id:"ziti-edge-edge"},"Ziti Edge, Edge"),(0,r.kt)("p",null,"The Ziti Edge implements the zero trust connectivity framework as an overlay application on top of the Ziti Fabric. The Ziti Edge provides connectivity implementations for a number of important endpoint types, including applications that embed Ziti connectivity through the Ziti Edge SDK. The Ziti Edge provides fallback connectivity solutions for non-Ziti applications using components like the Ziti tunnelers, and the Ziti proxy."),(0,r.kt)("h2",{id:"ziti-enabled-application"},"Ziti Enabled Application"),(0,r.kt)("p",null,"A Ziti Enabled Application is an application that embeds the Ziti Endpoint SDK, such that it can participate on a Ziti network to either access or host services."),(0,r.kt)("h2",{id:"ziti-endpoint-sdk-endpoint-sdk-sdk"},(0,r.kt)("a",{parentName:"h2",href:"/docs/reference/developer/sdk/"},"Ziti Endpoint SDK, Endpoint SDK, SDK")),(0,r.kt)("p",null,"The Ziti Endpoint SDK provides software components that are designed to be embedded into customer applications so that they can participate natively in a Ziti network. The SDK targets golang, Swift, C, C#, and potentially other programming languages, allowing programs in those languages to work with idioms and concepts native to those environments. The SDK provides support for both accessing and hosting services that are available on a Ziti network."),(0,r.kt)("h2",{id:"ziti-fabric-fabric"},(0,r.kt)("a",{parentName:"h2",href:"/docs/learn/introduction/openziti-is-software#fabric"},"Ziti Fabric, Fabric")),(0,r.kt)("p",null,"The Ziti Fabric provides the core of the network overlay. The Ziti Fabric implements a routable mesh network, which can provide reliable connectivity between any two points on the network. The fabric provides software extension mechanisms that allow the overlay to be embedded into new overlay applications. The Ziti Edge is an example of an overlay application implemented on top of Ziti Fabric extension mechanisms (Xgress, Xctrl, Xmgmt)."),(0,r.kt)("h2",{id:"ziti-network-ziti"},"Ziti Network, Ziti"),(0,r.kt)("p",null,"Ziti is a modern, programmable network overlay with associated edge components, for application-embedded, zero trust network connectivity, written by developers for developers."),(0,r.kt)("p",null,"Ziti is NetFoundry's next-generation programmable networking product. Ziti is used to create Ziti Networks."),(0,r.kt)("h2",{id:"ziti-router-router"},"Ziti Router, Router"),(0,r.kt)("p",null,'A Ziti Router is a process that is installed on a host, which allows it to participate in a Ziti Fabric. The router is designed to be extensible through Ziti fabric extension mechanisms (Xgress), which means that it is capable of "hosting" overlay network applications like the Ziti Edge.'),(0,r.kt)("h2",{id:"ziti-service-service"},(0,r.kt)("a",{parentName:"h2",href:"/docs/learn/core-concepts/services/overview"},"Ziti Service, Service")),(0,r.kt)("p",null,'A Ziti network is primarily concerned with providing access to "services". A service encapsulates the definition of any\nresource that could be accessed by a client on a traditional network. A Ziti Service is defined by a strong, extensible\nidentity, rather than by an expression of an underlay concept. This means that services defined on a Ziti Network have\nan almost limitless "namespace" available for identifying services. A Ziti service would be defined by a name and/or a\ncertificate, rather than by a DNS name or an IP address (underlay concepts).'),(0,r.kt)("h2",{id:"ziti-service-service---hosted"},"Ziti Service, Service - Hosted"),(0,r.kt)("p",null,"Similar to a Ziti Service however the destination is not described as an IP address and port but rather it is expressed\nas a Ziti Identity. When used with a Ziti SDK it is possible to create a truly zero trust application."),(0,r.kt)("h2",{id:"ziti-tunneler-tunneler"},(0,r.kt)("a",{parentName:"h2",href:"/docs/reference/tunnelers/"},"Ziti Tunneler, Tunneler")),(0,r.kt)("p",null,"A Ziti Tunneler provides connectivity for applications that are not Ziti enabled. Our tunneler implementations provide an underlay connectivity component (TUN, tproxy, etc.), and then use the Ziti Endpoint SDK such that they can bridge connectivity onto the Ziti network."),(0,r.kt)("h2",{id:"zitification-zitified-zitify"},"Zitification, Zitified, Zitify"),(0,r.kt)("p",null,'"Zitification", "Zitified", "Zitify" are words which the project has created to describe "embedding an OpenZiti SDK into a project".\nAfter an OpenZiti SDK is added to a project, it is said to be "zitified" (ziti-fied). The verb form of adding OpenZiti to\na project is called "zitify" (ziti-fy). A project which has had OpenZiti added to it, is often rerferred to as a "zitification" (ziti-fication).'))}v.isMDXComponent=!0}}]);