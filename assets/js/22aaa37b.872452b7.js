"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={authors:"andrewpmartinez"},o="Bootstrapping Trust",s={permalink:"/blog/bootstrapping-trust/part-05.bootstrapping-trust",source:"@site/blog/bootstrapping-trust/part-05.bootstrapping-trust.md",title:"Bootstrapping Trust",description:"Part 5 Bootstrapping Trust",date:"2023-11-13T22:09:50.000Z",formattedDate:"November 13, 2023",tags:[],readingTime:5.735,hasTruncateMarker:!1,authors:[{name:"Andrew Martinez",title:"OpenZiti Maintainer",url:"https://github.com/andrewpmartinez",imageURL:"https://avatars.githubusercontent.com/u/199856?v=4",key:"andrewpmartinez"}],frontMatter:{authors:"andrewpmartinez"},prevItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},nextItem:{title:"Golang Aha! Moments",permalink:"/blog/golang-aha/article"}},l={authorsImageUrls:[void 0]},p=[{value:"Part 5 Bootstrapping Trust",id:"part-5-bootstrapping-trust",level:2},{value:"Ziti",id:"ziti",level:3},{value:"Enrollment",id:"enrollment",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"part-5-bootstrapping-trust"},"Part 5 Bootstrapping Trust"),(0,i.kt)("p",null,"If you have read through the entire series up to here, welcome! If you\nhave not, please consider reading the whole series:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-01.encryption-everywhere"},"Part 1: Encryption Everywhere")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"Part 2: A Primer On Public-Key Cryptography")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-03.certificates"},"Part 3: Certificates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"Part 4: Certificate Authorities & Chains Of Trust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-05.bootstrapping-trust"},"Part 5: Bootstrapping Trust"))),(0,i.kt)("h3",{id:"ziti"},"Ziti"),(0,i.kt)("p",null,"In this series of articles, we are exploring bootstrapping trust, what\nthat means, and how it enables Zero Trust security methodologies. Ziti\nprovides a method to bootstrap trust via its enrollment process. For\nZiti, the enrollment process is bootstrapping trust. This trust must be\nin place as all connections in Ziti require verification. All identities\nin Ziti have a key pair that identifies that individual. The enrollment\nprocess abstracts the steps of setting up keys, certificates, CSRs, CAs,\nand deploying them to the proper locations. In addition, the Ziti SDKs\ncan be embedded within any application and enroll with a Ziti network in\nthe exact same fashion to bootstrap trust as part of Ziti's Zero Trust\nmodel."),(0,i.kt)("p",null,'Ziti has a concept called the "Edge." The Edge is a set of software\nfeatures that sit on top of the "Fabric." The Fabric is the core of each\nZiti component, and it provides long haul mesh routing while the Edge\nfocuses on enrolling Ziti components, managing access via policies, and\nmaintaining the trust necessary to provide the foundation of a Zero\nTrust network without the hassle of setting it up yourself. Together\nthey are a powerful combination of optimized long haul routing and trust\nmanagement.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fabric Edge",src:n(14409).Z,width:"500",height:"365"})),(0,i.kt)("p",null,"A small scale example Ziti system appears as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ziti System",src:n(19894).Z,width:"2910",height:"479"})),(0,i.kt)("p",null,"Ziti Edge has the concepts of identities for endpoint SDKs and routers.\nBoth require certificates signed by a trusted CA. Ziti can generate the\nPKI necessary to manage that trust. The PKI and its CAs will form the\nbackbone of the trust system that Ziti will deploy for you. In the\nsystem diagram above, the Ziti Controller will manage an intermediate CA\nand a secure enrollment process that will bootstrap trust for each\nrouter and SDK. After bootstrapping trust, the controller will maintain\ndata to manage the entire life cycle of the certificates it generates.\nThis life cycle encompasses all the concerns from part one of this\nseries, including bootstrapping, revoking, renewing, and rotating keys."),(0,i.kt)("p",null,"So let us review the components a Ziti Controller must have to function:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A CA (intermediate preferred)"),(0,i.kt)("li",{parentName:"ol"},"A server certificate generated for the Controller's IP/hostname/etc.\nSigned by the CA or a public CA"),(0,i.kt)("li",{parentName:"ol"},"A Ziti Controller configured and ready to run")),(0,i.kt)("p",null,"This article series has touched on items one and two, but not three. For\ninformation on how to configure a Ziti Controller refer to the Ziti\ndocumentation repository on Github. You will also find details on how to\nuse the Ziti CLI to generate the PKI necessary to start a Ziti network.\nHowever, here is a simple command that will help get the controller\nstarted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," ziti pki create ca test1\n ziti pki create server --dns myserver.com\n")),(0,i.kt)("h2",{id:"enrollment"},"Enrollment"),(0,i.kt)("p",null,"Once a Ziti Controller is up and running, it is possible to create a new\nidentity and enroll it. Behind the scenes, many things happen, but for\nnow, let us focus on what an administrator would have to perform."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Authenticate via the Ziti CLI, Ziti Admin Console (ZAC), or Edge REST\nAPI"),(0,i.kt)("li",{parentName:"ol"},"Issue a request to create a new identity for an SDK or router"),(0,i.kt)("li",{parentName:"ol"},"Receive an enrollment JWT Use the JWT on the enrolling device/server\nto enroll")),(0,i.kt)("p",null,"In those steps, we have performed many complex interactions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The enrolling identity:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"validated the enrollment JWT cryptographically"),(0,i.kt)("li",{parentName:"ul"},"validated the Ziti Controller as a suitable trust anchor\ncryptographically"),(0,i.kt)("li",{parentName:"ul"},"bootstrapped its trust pool of CAs as additional trust anchors over\na secure connection"),(0,i.kt)("li",{parentName:"ul"},"generated a key pair"),(0,i.kt)("li",{parentName:"ul"},"generated a CSR"))),(0,i.kt)("li",{parentName:"ul"},"The controller has:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"asserted its identity cryptographically"),(0,i.kt)("li",{parentName:"ul"},"asserted the validity of the enrolling identity"),(0,i.kt)("li",{parentName:"ul"},"provided a CA store of trust anchors"),(0,i.kt)("li",{parentName:"ul"},"fulfilled the CSR request for the identity")))),(0,i.kt)("p",null,"All of these items are performed making no assumptions and securely\nverifying each step. This process does not suffer from man-in-the-middle\nattacks. It provides many benefits! Below is a detailed image of each\nstep of the enrollment process."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enrollment Full",src:n(73e3).Z,width:"1906",height:"913"})),(0,i.kt)("p",null,"Let's break those steps down:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Via the Ziti CLI, ZAC, or Edge REST API the admin authenticates and\nrequests to create an identity"),(0,i.kt)("li",{parentName:"ol"},"The admin receives a JWT that is signed by the controller and is\ncryptographically verifiable. The JWT contains all the information\nfor the enrolling device/server to contact the controller and verify\nits identity. It also includes a secret enrollment token."),(0,i.kt)("li",{parentName:"ol"},"The JWT is given to the enrolling device"),(0,i.kt)("li",{parentName:"ol"},"The device parses the JWT, verifies all the information is present to\nenroll"),(0,i.kt)("li",{parentName:"ol"},"The device retrieves the public certificate from the controller at\nthe address specified in the JWT"),(0,i.kt)("li",{parentName:"ol"},"The device confirms that the server is, in fact, the owner of the\nprivate key for that certificate"),(0,i.kt)("li",{parentName:"ol"},"The device uses the retrieved certificate to verify the signature on\nthe JWT"),(0,i.kt)("li",{parentName:"ol"},"Verifies content has not changed"),(0,i.kt)("li",{parentName:"ol"},"Verifies the issuing server is the server it is communicating with"),(0,i.kt)("li",{parentName:"ol"},"Makes a secure connection to the server and requests the CAs to\ntrust"),(0,i.kt)("li",{parentName:"ol"},"The enrolling identity generates a key pair, if necessary, and a\nCSR. The CSR is submitted in a request with the JWT's enrollment\ntoken."),(0,i.kt)("li",{parentName:"ol"},"The controller verifies the CSR, verifies the enrollment token,\nverifies the client connection, and then returns the necessary\nsigned certificates.")),(0,i.kt)("p",null,"At the end of the process, which took four simple human steps, but\nnumerous cryptographically secure software steps, the controller now has\na record of the certificates issued to a specific identity. That\nidentity now has certificates that can be used to make connections to\nother enrolled Ziti components. All components in the system can verify\nthe identity of any other Ziti component. At every step, every link is\nverified. No individual piece of software blindly trusts any other for\ninbound or outbound connections. Trust has been successfully\nbootstrapped! Now we enter a maintenance window where trust has to be\nverified continuously and maintained. The enrolled identity can now\ninteract with the Ziti Controller to either function as a Ziti Router or\nas Zero Trust network client."),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Thank you for reading this far! If you completed the entire series, I\nhope it has been helpful. Zero Trust is a complicated topic, and it\nrequires a serious foundation in bootstrapping trust to get right.\nHopefully, this series starts you on your way. If you have time, please\ncheckout (Ziti)","[https://github.com/openziti]","! It is the Zero Trust\nnetwork overlay solution that I have personally worked on and was the\ninspiration for this series."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Written By: Andrew Martinez",(0,i.kt)("br",{parentName:"p"}),"\n","June 2020"))}h.isMDXComponent=!0},73e3:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enrollment-full-a4de028f2d23b9d3139ebff763361e7c.png"},14409:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fabric-edge-debb01e86651a5d95f9260e8cbd13ecc.png"},19894:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ziti-system-c36f11d4eaa20132bc62e5b899b00d2f.png"}}]);