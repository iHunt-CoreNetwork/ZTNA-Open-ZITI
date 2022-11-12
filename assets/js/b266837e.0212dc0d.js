"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7909],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(i),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||r;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5233:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(7462),a=(i(7294),i(3905));const r={uid:"zitiSecurityOverview"},o="Overview",s={unversionedId:"core-concepts/security/overview",id:"core-concepts/security/overview",title:"Overview",description:"A Ziti Network's security setup is defined by several entities defined in the Edge Management API. The following",source:"@site/docs/core-concepts/security/overview.md",sourceDirName:"core-concepts/security",slug:"/core-concepts/security/overview",permalink:"/docs/core-concepts/security/overview",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/security/overview.md",tags:[],version:"current",frontMatter:{uid:"zitiSecurityOverview"},sidebar:"rootSidebar",previous:{title:"Prometheus Endpoint",permalink:"/docs/core-concepts/metrics/prometheus"},next:{title:"Authentication",permalink:"/docs/core-concepts/security/authentication/auth"}},c={},l=[{value:"Authentication &amp; Authorization High Level Flow",id:"authentication--authorization-high-level-flow",level:2},{value:"Identity",id:"identity",level:2},{value:"Enrollment",id:"enrollment",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Authorization",id:"authorization",level:2}],u={toc:l};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A Ziti Network's security setup is defined by several entities defined in the ",(0,a.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API"),". The following\nare related to identity authentication and service access:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#identity"},"Identities")," - describe a human, device, or service within Ziti Edge"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authentication/auth#authenticators"},"Authenticators")," - describes the credentials of an authentication method associated with an Identity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./enrollment"},"Enrollments")," - describes a set of criteria necessary to create a new Identity and associated Authenticator"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authentication/authentication-policies"},"Authentication Policy")," - describes the methods available for Identity authentication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authentication/third-party-cas"},"3rd Party CAs")," - allows external x509 PKIs to be used for authentication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authentication/external-jwt-signers"},"External JWT Signers")," - allows external JWT signers to be used for authentication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./sessions"},"API Session")," - a security context represented by a security token (JWT, secret, etc) that represents\nIdentity authentication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./sessions"},"Session")," - a security context represented by a security token (JWT, secret, etc) that represents access\nto a Service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authorization/policies/overview"},"Service Policy")," - describes which Identities have access to which Services and the Posture Checks that are required to\npass for access"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authorization/policies/overview"},"Edge Router Policies"),"  - describes which Identities have access to which Edge Routers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authorization/posture-checks"},"Posture Checks")," - describes additional environmental state that an Identity must have in order to obtain and maintain\nservice access"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authorization/posture-checks#posture-data"},"Posture Queries")," - describes a request for environmental information from a client"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authorization/posture-checks#posture-data"},"Posture Responses")," - a response to a Posture Query provided by a client"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authorization/posture-checks#posture-data"},"Posture Data")," - the current environmental state provided via Posture Responses and known information"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authentication/auth#authentication-queries"},"Authentication Queries")," - additional, secondary, authentication factors required after initial, primary, authentication")),(0,a.kt)("p",null,"There is an additional policy type for Edge Routers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./authorization/policies/overview"},"Service Edge Router Policies")," - determines which services can be accessed over which routers")),(0,a.kt)("h2",{id:"authentication--authorization-high-level-flow"},"Authentication & Authorization High Level Flow"),(0,a.kt)("p",null,"The following is a high level overview of how these entities interact. Each interaction is further detailed in their\nown separate section."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"a client enrolls",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"A client may enroll via a pre-shared secret defined as an Enrollment or other verifiable documents (JWTs, x509\nCerts/CAs)"),(0,a.kt)("li",{parentName:"ol"},"an Identity is created with associated Authenticators and Authentication Policies"))),(0,a.kt)("li",{parentName:"ol"},"authentication: a client Identity attempts to authenticate",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"the authentication credentials are verified against the Authenticators, 3rd Party CAs, External JWT Signers,\nand/or Authentication Policy associated with the principal"),(0,a.kt)("li",{parentName:"ol"},"secondary factors defined by the Authentication Policy are reported to the client (MFA TOTP, JWT) as Authentication Queries"),(0,a.kt)("li",{parentName:"ol"},"the client provides secondary factors"),(0,a.kt)("li",{parentName:"ol"},"the client receives an API Session security token without unanswered Authentication Queries"))),(0,a.kt)("li",{parentName:"ol"},"authorization: a client may list Services which will be either grant ",(0,a.kt)("inlineCode",{parentName:"li"},"dial")," (client connect) or ",(0,a.kt)("inlineCode",{parentName:"li"},"bind")," (host) access",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"the Service Policies provide a filtered list of all services for the specific client issuing the request"),(0,a.kt)("li",{parentName:"ol"},"the Service Policies are also used to evaluate the Posture Checks associated with a Service Policy"),(0,a.kt)("li",{parentName:"ol"},"the Posture Checks are converted to Posture Queries with type, pass/fail state, and criteria information"),(0,a.kt)("li",{parentName:"ol"},"The Services and Posture Queries are returned to the client "),(0,a.kt)("li",{parentName:"ol"},"(Continuous) the client submits any Posture Responses to Posture Queries as necessary"))),(0,a.kt)("li",{parentName:"ol"},"authorization: the client requests a Session for a specific Service",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"(Continuous) the Service Policies are consulted for access additionally re-evaluating Posture Checks against the\ncurrent know Posture Data"),(0,a.kt)("li",{parentName:"ol"},"the list of Service Edge Router Policies and Edge Router Policies are consulted to provide a valid list Edge\nRouters the Session security token may be used on"),(0,a.kt)("li",{parentName:"ol"},"a Session security token and Edge Router list is provided to the client"))),(0,a.kt)("li",{parentName:"ol"},"the client attempts to connect to a target Edge Router with an API Session security token"),(0,a.kt)("li",{parentName:"ol"},"the target Edge Router evaluates the credential"),(0,a.kt)("li",{parentName:"ol"},"the client requests a Service connection with their Session security token",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"the connection request is verified through Service Edge Router Policies"))),(0,a.kt)("li",{parentName:"ol"},"the Edge Router coordinates the service connection")),(0,a.kt)("h1",{id:"high-level-concepts"},"High Level Concepts"),(0,a.kt)("p",null,"Below are the major areas of Ziti Edge's security model with a minimal description of what each area covers. The link(s)\nin each section will lead to a more detailed explanation of the relevant topics."),(0,a.kt)("h2",{id:"identity"},"Identity"),(0,a.kt)("p",null,"Ziti Edge defines a top level entity called an Identity. An Identity is a security principal that can bind (host) or\ndial (connect) to services over a Ziti Network. Read more in the ",(0,a.kt)("a",{parentName:"p",href:"./authentication/identities"},"Identity")," section."),(0,a.kt)("h2",{id:"enrollment"},"Enrollment"),(0,a.kt)("p",null,"Enrollment is a client initiated process where the result is the creation of an Identity that has some manner\nof authenticating. Enrollments may be automated through ",(0,a.kt)("a",{parentName:"p",href:"./authentication/third-party-cas"},"3rd Party Cas")," and\n",(0,a.kt)("a",{parentName:"p",href:"./authentication/external-jwt-signers"},"External JWT Signers"),"  or may be completed through pre-provisioning. Read more in the\n",(0,a.kt)("a",{parentName:"p",href:"./enrollment"},"Enrollment")," section."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./authentication/auth"},"Authentication")," is the process of a client proving their identity through the submission of one primary credential\nand zero or more secondary credentials that are prompted by Authentication Queries. Authentication methods can be\nconfigured through ",(0,a.kt)("a",{parentName:"p",href:"./authentication/third-party-cas"},"3rd Party Cas"),", ",(0,a.kt)("a",{parentName:"p",href:"./authentication/external-jwt-signers"},"External JWT Signers"),",\nand ",(0,a.kt)("a",{parentName:"p",href:"./authentication/authentication-policies"},"Authentication Policies"),". Read more in the\n",(0,a.kt)("a",{parentName:"p",href:"./authentication/auth"},"Authentication")," section."),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./authorization/auth"},"Authorization")," in Ziti is configured for Identities and Edge Routers. Edge Router authorization only covers which\nservices can be used over an Edge Router via Service Edge Router Policies. Identity authorization is covered by Service\nPolicies and Edge Router Policies."),(0,a.kt)("p",null,"All policies in Ziti are represented by a robust ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Attribute-based_access_control"},"attribute based access control system (ABAC)")," based on ",(0,a.kt)("inlineCode",{parentName:"p"},"roleAttributes"),"\nproperties on entities within the ",(0,a.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"roleAttributes")," properties are an array of user defined strings.\nPolicies support attribute selector properties to determine which entities a policy interacts on. Policies themselves\nare documented in ",(0,a.kt)("a",{parentName:"p",href:"./authorization/policies/overview"},"Policies")," section."),(0,a.kt)("p",null,"Additionally, Service Policies can require additional environmental states to be satisfied by Posture Checks.\nPosture Checks analyze Posture Data. Posture Data is a collection of server side information and data harvested from\nPosture Responses sent by client endpoints in response to Posture Queries. More can be found in\nthe ",(0,a.kt)("a",{parentName:"p",href:"./authorization/posture-checks"},"Posture Check"),"\nsection."),(0,a.kt)("p",null,"Read more in the ",(0,a.kt)("a",{parentName:"p",href:"./authorization/auth"},"Authorization"),"section."))}h.isMDXComponent=!0}}]);