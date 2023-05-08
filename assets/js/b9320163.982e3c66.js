"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const s={},r="Session Types",o={unversionedId:"learn/core-concepts/security/sessions",id:"learn/core-concepts/security/sessions",title:"Session Types",description:"API Session",source:"@site/docs/learn/core-concepts/security/sessions.md",sourceDirName:"learn/core-concepts/security",slug:"/learn/core-concepts/security/sessions",permalink:"/docs/learn/core-concepts/security/sessions",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/sessions.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Enrollment",permalink:"/docs/learn/core-concepts/security/enrollment"},next:{title:"PKI",permalink:"/docs/learn/core-concepts/pki"}},l={},c=[{value:"API Session",id:"api-session",level:2},{value:"Full vs Partial Authentication",id:"full-vs-partial-authentication",level:4},{value:"Authentication Queries",id:"authentication-queries",level:5},{value:"Associated Data &amp; Removal",id:"associated-data--removal",level:4},{value:"Timeout",id:"timeout",level:4},{value:"Administrative Removal",id:"administrative-removal",level:4},{value:"Client Removal (Logout)",id:"client-removal-logout",level:4},{value:"Session",id:"session",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"session-types"},"Session Types"),(0,a.kt)("h2",{id:"api-session"},"API Session"),(0,a.kt)("p",null,"API Sessions represent a client that is either partially or fully authenticated as a specific Ziti Identity.\nThey are used to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"scope ",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/auth"},"authentication")," and ",(0,a.kt)("a",{parentName:"li",href:"authorization/posture-checks"},"Posture Data")),(0,a.kt)("li",{parentName:"ul"},"to make ",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/auth"},"authorization")," decisions.")),(0,a.kt)("p",null,"Clients interact with API Sessions via an opaque security token value and is received during authentication via ",(0,a.kt)("inlineCode",{parentName:"p"},"/edge/client|management/v1/authenticate"),"."),(0,a.kt)("p",null,"API Sessions are represented by opaque strings and are provided in the HTTP header ",(0,a.kt)("inlineCode",{parentName:"p"},"zt-session")," and in Edge Router\nconnection requests initiated by Ziti SDKs. API Sessions remain valid as long they have not timed out."),(0,a.kt)("p",null,"An API Sessions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"can and are represented by a JSON data structure returned from the Client and Management APIs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"returned from:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /edge/management/v1/authenticate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /edge/management/v1/current-api-session")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /edge/client/v1/authenticate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /edge/client/v1/current-api-session")))))),(0,a.kt)("li",{parentName:"ul"},"can be referenced by an internal ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," and a security token that is in the format of a UUID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," can be used on the following endpoints:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /edge/management/v1/api-sessions/<id>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DELETE /edge/management/v1/api-sessions/<id>"))))))),(0,a.kt)("p",null,"API Sessions are defined in the Client and Management Open API 2.0 specifications under ",(0,a.kt)("inlineCode",{parentName:"p"},"currentApiSessionDetail"),"."),(0,a.kt)("p",null,"Example ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/authenticate")," response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "_links": {\n      "self": {\n        "href": "./api-sessions/cl4zptpgqcrinn0hhgm7ek5ve"\n      },\n      "sessions": {\n        "href": "./api-sessions/cl4zptpgqcrinn0hhgm7ek5ve/sessions"\n      }\n    },\n    "createdAt": "2022-06-29T14:51:07.946Z",\n    "id": "cl4zptpgqcrinn0hhgm7ek5ve",\n    "tags": {},\n    "updatedAt": "2022-06-29T14:51:07.946Z",\n    "authQueries": [\n      {\n        "format": "alphaNumeric",\n        "httpMethod": "POST",\n        "httpUrl": "./authenticate/mfa",\n        "maxLength": 6,\n        "minLength": 4,\n        "provider": "ziti",\n        "typeId": "MFA"\n      }\n    ],\n    "authenticatorId": "vxtlfvUj6",\n    "cachedLastActivityAt": "2022-06-29T14:51:07.945Z",\n    "configTypes": [],\n    "identity": {\n      "_links": {\n        "auth-policies": {\n          "href": "./auth-policies/default"\n        },\n        "authenticators": {\n          "href": "./identities/vxtlfvUj6/authenticators"\n        },\n        "edge-router-policies": {\n          "href": "./identities/vxtlfvUj6/edge-routers"\n        },\n        "enrollments": {\n          "href": "./identities/vxtlfvUj6/enrollments"\n        },\n        "failed-service-requests": {\n          "href": "./identities/vxtlfvUj6/failed-service-requests"\n        },\n        "posture-data": {\n          "href": "./identities/vxtlfvUj6/posture-data"\n        },\n        "self": {\n          "href": "./identities/vxtlfvUj6"\n        },\n        "service-policies": {\n          "href": "./identities/vxtlfvUj6/service-policies"\n        }\n      },\n      "entity": "identities",\n      "id": "vxtlfvUj6",\n      "name": "Default Admin"\n    },\n    "identityId": "vxtlfvUj6",\n    "ipAddress": "127.0.0.1",\n    "isMfaComplete": false,\n    "isMfaRequired": true,\n    "lastActivityAt": "2022-06-29T14:51:07.945Z",\n    "token": "44a20395-1a0e-469d-ad9b-80df8dbbf8c4",\n    "expirationSeconds": 1800,\n    "expiresAt": "2022-06-29T15:21:07.945Z"\n  },\n  "meta": {}\n}\n')),(0,a.kt)("h4",{id:"full-vs-partial-authentication"},"Full vs Partial Authentication"),(0,a.kt)("p",null,"API Sessions may exist in two states:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partially Authenticated - limited API access"),(0,a.kt)("li",{parentName:"ul"},"Fully Authenticated - full API access")),(0,a.kt)("p",null,"Partial authentication occurs when a primary authentication method has been passed, but secondary Authentication Queries\nremain outstanding. Ziti Edge models MFA challenges as Authentication Queries. Authentication Queries include information\nthat can be used to display user prompts or direct users to integrating websites for SSO. If no outstanding\nAuthentication Queries are present for an API Session it is considered fully authenticated."),(0,a.kt)("p",null,"While partially authenticated, the API Session can only be used for a reduced set of operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"answering Authentication Queries"),(0,a.kt)("li",{parentName:"ul"},"enrolling in MFA TOTP")),(0,a.kt)("h5",{id:"authentication-queries"},"Authentication Queries"),(0,a.kt)("p",null,"Authentication Queries are represented on an API Session the property ",(0,a.kt)("inlineCode",{parentName:"p"},"authQueries")," which is an array. An example\nMFA challenge represented as an Authentication Query is provided below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "authQueries": [\n    {\n      "format": "alphaNumeric",\n      "httpMethod": "POST",\n      "httpUrl": "./authenticate/mfa",\n      "maxLength": 6,\n      "minLength": 4,\n      "provider": "ziti",\n      "typeId": "MFA"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The existence of any Authentication Query on an API Session represents a partial authentication state. API Sessions\nin this state will have reduced access to their target API. The data structure for Authentication Queries is defined\nin the Client and Management Open API 2.0 specifications under the label ",(0,a.kt)("inlineCode",{parentName:"p"},"authQueryDetail"),"."),(0,a.kt)("h4",{id:"associated-data--removal"},"Associated Data & Removal"),(0,a.kt)("p",null,"API Sessions, may be used to create ephemeral certificates called ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/api-session-certificates"},"API Session Certificates"),"\nand sessions for service access. Additionally, API Sessions are used to scope ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/posture-checks#posture-data"},"Posture Data"),".\nWhen an API Session is removed for any reason, all associated data is also removed. As an example, when removing an\nAPI Session used to create a ",(0,a.kt)("a",{parentName:"p",href:"#session"},"Session")," the ",(0,a.kt)("a",{parentName:"p",href:"#session"},"Session")," will also be removed. Removing a ",(0,a.kt)("a",{parentName:"p",href:"#session"},"Session")," will also terminate any\nexisting connections that used the security token associated with that ",(0,a.kt)("a",{parentName:"p",href:"#session"},"Session")," and prevent it from being used to\nestablish new connections."),(0,a.kt)("p",null,"Removal of an API Session occurs in the following scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"timeout"),(0,a.kt)("li",{parentName:"ul"},"administrative removal"),(0,a.kt)("li",{parentName:"ul"},"client removal (logout)")),(0,a.kt)("h4",{id:"timeout"},"Timeout"),(0,a.kt)("p",null,"The controller maintains a last accessed at timestamp for every API Session. This timestamp is used to determine whether\nthe timeout has been reached, signaling an API Session removal. Activities that update the timestamp include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any maintained Edge Router connection"),(0,a.kt)("li",{parentName:"ul"},"Any valid Client or Management API interaction")),(0,a.kt)("p",null,"The API Session timeout defaults to 30 minutes and can be configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"edge.api.sessionTimeout")," in the controller\nconfiguration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"edge:\n  api:\n  ...\n    # sessionTimeout - optional, default 30m\n    # The number of minutes before an Edge API session will time out. Timeouts are reset by\n    # API requests and connections that are maintained to Edge Routers\n    sessionTimeout: 30m\n    ...\n")),(0,a.kt)("h4",{id:"administrative-removal"},"Administrative Removal"),(0,a.kt)("p",null,"Through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/developer/api#edge-management-api"},"Edge Management API")," any API Session may be forcefully removed\nby calling ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /edge/management/v1/api-sessions<id>")," with an empty body."),(0,a.kt)("h4",{id:"client-removal-logout"},"Client Removal (Logout)"),(0,a.kt)("p",null,"A client may terminate its own API Session at any time by calling: ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /edge/client/v1/current-api-session")),(0,a.kt)("h2",{id:"session"},"Session"),(0,a.kt)("p",null,"Session represent access to a specific service for dialing or binding. They are scoped to the\n",(0,a.kt)("a",{parentName:"p",href:"#api-session"},"API Session")," that was used to create them. They are requested from the\ncontroller by a client through the Edge Client API. The result of that request is a security token representing\nthe Session and a list of Edge Routers that the client may use to dial or bind the target service through."),(0,a.kt)("p",null,"Sessions are removed when the parent ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/auth#api-sessions"},"API Session")," is removed,\n",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"policies")," are changed to deny access, or when ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/posture-checks"},"Posture Checks")," enter an\ninvalid state for the target service."))}p.isMDXComponent=!0}}]);