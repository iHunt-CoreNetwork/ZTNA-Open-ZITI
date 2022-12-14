"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[59],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={},r="It's All Software",s={unversionedId:"introduction/openziti-is-software",id:"introduction/openziti-is-software",title:"It's All Software",description:"OpenZiti is software first and foremost. Moving at the speed of software is a vital characteristic of any",source:"@site/docs/introduction/30-openziti-is-software.md",sourceDirName:"introduction",slug:"/introduction/openziti-is-software",permalink:"/docs/introduction/openziti-is-software",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/introduction/30-openziti-is-software.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"rootSidebar",previous:{title:"Features",permalink:"/docs/introduction/features"},next:{title:"Start Cooking With Ziti",permalink:"/docs/quickstarts/network/"}},l={},c=[{value:"Fabric",id:"fabric",level:2},{value:"Edge",id:"edge",level:2},{value:"SDKs",id:"sdks",level:2},{value:"Clients",id:"clients",level:2},{value:"Contributing",id:"contributing",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"its-all-software"},"It's All Software"),(0,o.kt)("p",null,"OpenZiti is software first and foremost. Moving at the speed of software is a vital characteristic of any\nmodern project."),(0,o.kt)("p",null,"This article lightly describes the internal software architecture of OpenZiti. In most scenarios, this information is not essential\nto deploy and operate an OpenZiti Network. While not strictly necessary, understanding the internal model can help operators\nunderstand the functionality provided by OpenZiti, understand design decisions, and smooth the road for contributors."),(0,o.kt)("p",null,"Broadly speaking there are four major areas of concentration for the OpenZiti project: Fabric, Edge, SDKs, Clients.\nThese areas are expanded on below."),(0,o.kt)("h2",{id:"fabric"},"Fabric"),(0,o.kt)("p",null,"All of the OpenZiti repositories build upon each other. with the Fabric repository as the base. It is the only repository that can be\nused on its own and have a semblance of network connectivity. From the Fabric repository alone, one can build a\nfabric-only controller and router binaries. The capabilities of these components will be limited and require\nlow-level configuration and maintenance. If done, a mesh network will be established that can be used to send\ndata from any point on the network to any other through a circuit that defines the client, the destination service, and\na terminator."),(0,o.kt)("p",null,'Without additional code, there will be a general lack of initiation-side security (i.e., anything can connect)\nand a stark lack of connectivity options both on the client and service side. The Fabric on its own does not present any\nfacilities that allow SDKs to connect to it. It does not know what the Edge and SDK\ncomponents can do. The Fabric is "blind" to the concepts beyond its mesh network.'),(0,o.kt)("p",null,"The Fabric provides extension points that allow others to define additional functionality. The primary interfaces\nfor this are provided on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," structs. Both expose code-level APIs that enable integrations."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," instances allow the definition and management of persistent data for services, routers, and terminators.\nIt also exposes extension points via the following interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xctrl")," - allows the definition of messages and message handlers that can be sent on the control plane between a\ncontroller and router"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xmgmt")," - allows the definition of messages and message handlers that can be sent on management connections"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xweb")," - allows the definition of HTTP Web APIs, which the controller uses to expose the Fabric API and HealthCheck\nAPI")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Router")," instances present an API that allows circuits to be setup and destroyed. It also exposes extension points via\nthe following interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xctrl")," - allows the definition of messages and message handlers that can be sent on the control plane between a\ncontroller and router"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xweb")," - allows the definition of HTTP Web APIs, which the router uses to expose the HealthCheck API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xgress")," - allows the definition of initiating and terminating connection capabilities")),(0,o.kt)("p",null,"Additionally, routers and controllers allow other components to inspect the static file configuration used to start an\ninstance. The modules ",(0,o.kt)("inlineCode",{parentName:"p"},"xctrl"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"xweb"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"xgress")," make use of this to add configuration sections. These configuration\nsections allow type-specific custom configuration."),(0,o.kt)("h2",{id:"edge"},"Edge"),(0,o.kt)("p",null,"The Fabric provides several extension points. The main consumer of those extension points is the\nEdge. The Edge extends controllers and routers to add additional security controls and enable SDK connectivity.\nThe Edge adds the concepts of endpoint identities, which represent OpenZiti SDKs that can connect to an OpenZiti Network. This\nconcept acts as a springboard for an entire suite of identity life cycle and access management features. Below are the\nFabric extension points and what Edge features they enable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xctrl")," - adds API Session/Session control and enforcement to the controller and router"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xweb")," - exposes the Edge Management & Client REST APIs on the controller"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"xgress")," - defines a new protocol, ",(0,o.kt)("inlineCode",{parentName:"li"},"xgress_edge"),", that enables SDKs to connect to routers to act as service clients\nand hosts")),(0,o.kt)("p",null,"The Edge also exposes a configuration extension point for SDKs. An SDK developer can define\nconfiguration types with JSON schemas. This configuration can be stored at the service, identity, or identity+service\nspecific level and delivered to connecting applications upon request. This mechanism allows SDK applications to\ndefine and distribute configuration to power advanced application features. The pre-built OpenZiti clients\nuse this feature to power features such as DNS/IP intercept addresses."),(0,o.kt)("h2",{id:"sdks"},"SDKs"),(0,o.kt)("p",null,"The Ziti SDKs come in a variety of languages. Where appropriate, they are wrappers around the Ziti C SDK. The SDKs\nmake use of the Edge Client REST API on the controller and the ",(0,o.kt)("inlineCode",{parentName:"p"},"xgress_edge")," protocol on the router to extend an OpenZiti\nNetwork beyond the mesh network of routers and into applications and devices. The SDKs rely on the Edge to enable\nservice connectivity over an OpenZiti Network. The SDKs do not directly interact with the Fabric. They act as a\nfulcrum to leverage the power of an OpenZiti Network."),(0,o.kt)("p",null,"The SDKs expose an API that allows endpoints to enroll, authenticate, list services, receive centralized configuration,\nand connect or host services based on security access configuration."),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("p",null,"OpenZiti clients are any code that uses an OpenZiti SDK to connect to an OpenZiti Network. The OpenZiti project can provide these\napplications or be custom-built by any software developer. They rely directly upon an OpenZiti SDK, indirectly\non the Edge, and subsequently the Fabric. They can serve as the initiating client or terminating host for\nservices. Clients may or may not expose extension points - it is at the author's discretion."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"The OpenZiti project welcomes contributions including, but not limited to, code, documentation and bug reports.\nOpenZiti has grown to have many, many repositories. Here are just a few notable repositories, there are many more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All code is found on GitHub under the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti"},"OpenZiti")," organization.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti"},"ziti"),": top level project which builds all OpenZiti executables"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/edge"},"edge"),": edge components and model which includes identity, polices and config"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/fabric"},"fabric"),": fabric project which includes core controller and router"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/foundation"},"foundation"),": project which contains library code used across multiple projects"),(0,o.kt)("li",{parentName:"ul"},"SDKs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-c"},"ziti-sdk-c"),": C SDK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/sdk-golang"},"sdk-golang"),": Go SDK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-jvm"},"ziti-sdk-jvm"),": SDK for JVM based languages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-py"},"ziti-sdk-csharp"),": Python SDK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-swift"},"ziti-sdk-swift"),": Swift SDK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-nodejs"},"ziti-sdk-nodejs"),": NodeJS SDK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-csharp"},"ziti-sdk-csharp"),": C# SDK"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-doc"},"ziti-doc"),": Documentation (which you are currently reading)"))),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://openziti.discourse.group/"},"Discourse forum")," is available")),(0,o.kt)("p",null,"OpenZiti was developed and open sourced by ",(0,o.kt)("a",{parentName:"p",href:"https://netfoundry.io"},"NetFoundry Inc."),". NetFoundry continues to fund and contribute to OpenZiti."))}d.isMDXComponent=!0}}]);