"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},o="Certificate Management",c={unversionedId:"security/authentication/certificate-management",id:"security/authentication/certificate-management",title:"Certificate Management",description:"x509 client and server certificates are used for client, router, and controller verification. Client authentication",source:"@site/docs/security/authentication/40-certificate-management.md",sourceDirName:"security/authentication",slug:"/security/authentication/certificate-management",permalink:"/docusaurus/docs/security/authentication/certificate-management",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/security/authentication/40-certificate-management.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication Policies",permalink:"/docusaurus/docs/security/authentication/authentication-policies"},next:{title:"External JWT Signers",permalink:"/docusaurus/docs/security/authentication/external-jwt-signers"}},l={},s=[{value:"Router Certificate Extension",id:"router-certificate-extension",level:2},{value:"Client Certificate Extension",id:"client-certificate-extension",level:2},{value:"Client Certificate Extension",id:"client-certificate-extension-1",level:3},{value:"Request",id:"request",level:4},{value:"Response:",id:"response",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"certificate-management"},"Certificate Management"),(0,i.kt)("p",null,"x509 client and server certificates are used for client, router, and controller verification. Client authentication\nis possible through other means however router and controller verification is always x509 certificates."),(0,i.kt)("p",null,"In order to maintain valid client and server certificates, both routers and clients have API available to them to\nextend their current certificates forward. These APIs only work for the internal Ziti PKI. Routers within a Ziti\nnetwork always use the internal Ziti PKI for their certificates. Clients may be configured to other external\nPKIs via ",(0,i.kt)("a",{parentName:"p",href:"third-party-cas"},"3rd Party CAs"),". In that scenario ZIti can not provide support for certificate\nmanagement."),(0,i.kt)("h2",{id:"router-certificate-extension"},"Router Certificate Extension"),(0,i.kt)("p",null,"Routers will attempt to extend their current client and server certificates one week prior to expiration. No\nintervention is necessary on behalf of the network administrator. The request sent to the controller via a\npre-authenticated connection. If a router has been disconnected from the Ziti network and their client certificates\nhave expired, the router will have to be ",(0,i.kt)("a",{parentName:"p",href:"../enrollment#router-enrollment-extension"},"re-enrolled"),"."),(0,i.kt)("h2",{id:"client-certificate-extension"},"Client Certificate Extension"),(0,i.kt)("p",null,"Clients may determine their own client certificate extension frequency. In order to extend their current client\ncertificate issued by the Ziti PKI they must issue the following RESt request to either the\n",(0,i.kt)("a",{parentName:"p",href:"../../api/edge-apis#edge-management-api"},"Edge Management API")," or ",(0,i.kt)("a",{parentName:"p",href:"../../api/edge-apis#edge-client-api"},"Edge Client API"),"\nafter becoming ",(0,i.kt)("a",{parentName:"p",href:"auth#full-vs-partial-authentication"},"fully authenticated"),"."),(0,i.kt)("h3",{id:"client-certificate-extension-1"},"Client Certificate Extension"),(0,i.kt)("p",null,"The Ziti SDKs provide helper functions for this process and issuing these requests manually should not be necessary."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," necessary to extend a specific authenticator may be obtained by listing the clients current authenticators\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"GET edge/*/v1/current-identity/authenticators")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," may be ",(0,i.kt)("inlineCode",{parentName:"p"},"management")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"client"),". The CSR provided\nmust be PEM encoded."),(0,i.kt)("h4",{id:"request"},"Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST edge/client/v1/current-identity/authenticators/{id}/extend")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientCertCsr": "-----BEGIN NEW CERTIFICATE REQUEST-----\\n..."\n}\n')),(0,i.kt)("h4",{id:"response"},"Response:"),(0,i.kt)("p",null,"A new CA bundle and client certificate will be returned PEM encoded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n      "ca": "-----BEGIN CERTIFICATE-----\\nMIICZTCCAeygAwIBAgIUOoTKiY",\n      "clientCert": "-----BEGIN CERTIFICATE-----\\nMIICZTCCAeygAwIBAgIUOoTKiY"\n  },\n  "meta": {}\n}\n')))}p.isMDXComponent=!0}}]);