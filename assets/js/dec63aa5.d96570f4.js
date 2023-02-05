"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={uid:"zitiSecurityPostureChecks"},s="Posture Checks",o={unversionedId:"learn/core-concepts/security/authorization/posture-checks",id:"learn/core-concepts/security/authorization/posture-checks",title:"Posture Checks",description:"Posture Checks represent environmental state (posture) that an endpoint must be in, in order for a Service Policy to",source:"@site/docs/learn/core-concepts/security/authorization/posture-checks.md",sourceDirName:"learn/core-concepts/security/authorization",slug:"/learn/core-concepts/security/authorization/posture-checks",permalink:"/docs/learn/core-concepts/security/authorization/posture-checks",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authorization/posture-checks.md",tags:[],version:"current",frontMatter:{uid:"zitiSecurityPostureChecks"},sidebar:"docsSidebar",previous:{title:"Creating a Service Policy",permalink:"/docs/learn/core-concepts/security/authorization/policies/creating-service-policies"},next:{title:"Session Diagram",permalink:"/docs/learn/core-concepts/security/SessionsAndConnections"}},l={},c=[{value:"Posture Data",id:"posture-data",level:2},{value:"Operating System",id:"os-os-version",level:3},{value:"Semver Examples",id:"semver-examples",level:3},{value:"Creating",id:"creating",level:3},{value:"Ziti CLI",id:"ziti-cli",level:4},{value:"Edge Management API",id:"edge-management-api",level:4},{value:"MAC Address",id:"mac-address",level:2},{value:"Creating",id:"creating-1",level:3},{value:"Ziti CLI",id:"ziti-cli-1",level:4},{value:"Edge Management API",id:"edge-management-api-1",level:4},{value:"MFA",id:"mfa",level:2},{value:"Creating",id:"creating-2",level:3},{value:"Ziti CLI",id:"ziti-cli-2",level:4},{value:"Edge Management API",id:"edge-management-api-2",level:4},{value:"Multi Process",id:"multi-process",level:2},{value:"Creating",id:"creating-3",level:3},{value:"Ziti CLI",id:"ziti-cli-3",level:4},{value:"Edge Management API",id:"edge-management-api-3",level:4},{value:"Windows Domain",id:"windows-domain",level:2},{value:"Creating",id:"creating-4",level:3},{value:"Ziti CLI",id:"ziti-cli-4",level:4},{value:"Edge Management API",id:"edge-management-api-4",level:4},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"posture-checks"},"Posture Checks"),(0,a.kt)("p",null,"Posture Checks represent environmental state (posture) that an endpoint must be in, in order for a Service Policy to\ngrant access to a service as either a client or host. Posture Checks are defined separately from Service Policies and\nassigned to them via attributes on the Posture Checks and attribute selectors on the Service Policy. This allows Posture\nChecks to be re-used."),(0,a.kt)("h2",{id:"posture-data"},"Posture Data"),(0,a.kt)("p",null,"Environmental state is saved as Posture Data - a set of values describing environmental state. Posture Data is provided\nto the controller via Posture Response sent from the client. Posture Responses are constructed from Posture Queries\nwhich are reported to the client per service from the controller."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mermaid.live/edit#pako:eNptkMtuAjEMRX9l5BWo8ANZsJl210XVkdgQFunkto2aBzgOEkL8e4PIICTwypLPsa98ojFZkKKMfUEc8erMD5ugY1er9w5RlqvVS5-icPIerLp3l2UAH9yIPJs38jav9PLqqW6znbiHfY3oGUZQwY-UpTA-kXcp5ifCXYChfAUns0fpeZg7c228s_VgE6f0U9GCAjgYZ-tHTpeZJvlFgCZVW2v4T5OO58qV3WXPm3WSmNS38RkLMkXScIwjKeGCCWovbdT5H_eEfjA"},(0,a.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNptkMtuAjEMRX9l5BWo8ANZsJl210XVkdgQFunkto2aBzgOEkL8e4PIICTwypLPsa98ojFZkKKMfUEc8erMD5ugY1er9w5RlqvVS5-icPIerLp3l2UAH9yIPJs38jav9PLqqW6znbiHfY3oGUZQwY-UpTA-kXcp5ifCXYChfAUns0fpeZg7c228s_VgE6f0U9GCAjgYZ-tHTpeZJvlFgCZVW2v4T5OO58qV3WXPm3WSmNS38RkLMkXScIwjKeGCCWovbdT5H_eEfjA",alt:null}))),(0,a.kt)("h1",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,"Posture Checks are event based and are evaluated as events are encountered. Once evaluated failure states begin\nto restrict access as Service Policies being to fail their associated Posture Checks. One exception to this\nis the ",(0,a.kt)("a",{parentName:"p",href:"#mfa"},"MFA Posture Check")," which has grace periods for some scenarios."),(0,a.kt)("h1",{id:"access"},"Access"),(0,a.kt)("p",null,"A single Service may be granted to a client through multiple Service Policies. Only one of those policies needs to be\nin a passing state for access to be granted. For example creating two Service Policies, one with Posture Checks and\none without, to the same service and client will result in the client always having access. This is because one\nService Policy lacking Posture Checks will always result as passing."),(0,a.kt)("h1",{id:"associating"},"Associating"),(0,a.kt)("p",null,"Posture Checks are associated to ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Service Policies")," through\n",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/policies/overview#roles-and-role-attributes"},"Roles and Role Attributes"),". Attributes on each Posture Check created\nwill be selected for on Service Policies via the ",(0,a.kt)("inlineCode",{parentName:"p"},"postureCheckRoles")," as an array of selected roles. Service Policies are\nassociated to Identities in the same fashion via ",(0,a.kt)("inlineCode",{parentName:"p"},"identityRoles")," and the attributes on Identities."),(0,a.kt)("h1",{id:"types"},"Types"),(0,a.kt)("p",null,"The following Posture Check types are currently defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#os-os-version"},"OS / OS Version")," - requires a specific operating system and optionally a specific version or versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mac-address"},"MAC Address")," - requires the client has a specific MAC address associated with its hardware"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mfa"},"MFA")," - requires the client currently has MFA TOTP enabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#multi-process"},"Multi Process")," - requires a client be running one or more applications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#windows-domain"},"Windows Domain")," - requires the client be a member of a specific domain")),(0,a.kt)("h3",{id:"os-os-version"},"Operating System"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"OS")," Posture Check type is used to verify a client's operating system and optionally version"),(0,a.kt)("p",null,"Supported OS Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"Windows Server"),(0,a.kt)("li",{parentName:"ul"},"Linux"),(0,a.kt)("li",{parentName:"ul"},"MaxOc"),(0,a.kt)("li",{parentName:"ul"},"iOS"),(0,a.kt)("li",{parentName:"ul"},"Android")),(0,a.kt)("p",null,"Versions may be validated with any valid ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semver 2.0")," statement. This includes the ability to\nspecify ranges by major, minor, and patch levels. Operating systems that do not have an explicit patch level, their\nbuild number will be used instead."),(0,a.kt)("h3",{id:"semver-examples"},"Semver Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">=1.2.7 <1.3.0")," would match the versions 1.2.7, 1.2.8, and 1.2.99, but not the versions 1.2.6, 1.3.0, or 1.1.0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">=1.2.7")," would match the versions 1.2.7, 1.2.8, 2.5.3, and 1.3.9, but not the versions 1.2.6 or 1.1.0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.2.7 || >=1.2.9 <2.0.0")," would match the versions 1.2.7, 1.2.9, and 1.4.6, but not the versions 1.2.8 or 2.0.0")),(0,a.kt)("h3",{id:"creating"},"Creating"),(0,a.kt)("h4",{id:"ziti-cli"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},' ziti edge create posture-check os windows-and-android -o "WINDOWS:>10.0.0,ANDROID:>6.0.0" -a check-attribute1')),(0,a.kt)("h4",{id:"edge-management-api"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/posture-checks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typeId": "OS",\n  "name": "windows-and-android",\n  "operatingSystems": [\n    {\n      "type": "WINDOWS",\n      "versions": [">10.0.0"]\n      \n    },\n    {\n      "type": "ANDROID",\n      "versions": [">6.0.0"]\n    }\n  ],\n  "attributes": ["check-attribute1"]\n}\n')),(0,a.kt)("h2",{id:"mac-address"},"MAC Address"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MAC")," Posture Check type is used to verify a client's network interface cards MAC addresses. MAC Addresses\nthat are not specified will fail the check."),(0,a.kt)("h3",{id:"creating-1"},"Creating"),(0,a.kt)("h4",{id:"ziti-cli-1"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ziti edge create posture-check mac mac-lsit =m "14-B2-2C-E5-F0-61" -m "D5-22-E8-B7-FF-48" -m "..."  -a check-attribute1')),(0,a.kt)("h4",{id:"edge-management-api-1"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/posture-checks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typeId": "MAC",\n  "name": "mac-list",\n  "macAddresses": ["14-B2-2C-E5-F0-61", "D5-22-E8-B7-FF-48", "..."],\n  "attributes": ["check-attribute1"]\n}\n')),(0,a.kt)("h2",{id:"mfa"},"MFA"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MFA")," Posture Check type is used to enforce ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/totp"},"MFA TOTP")," configuration on a client. Posture\nChecks enforce access authorization. For authentication enforcement, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/authentication-policies#secondary"},"Authentication Policies"),"."),(0,a.kt)("h3",{id:"creating-2"},"Creating"),(0,a.kt)("p",null,"MFA Posture Checks also support forcing a client to re-submit a valid TOTP on timeout, after locking/unlocking a\ndevice, or waking a device from sleep."),(0,a.kt)("p",null,"Timeouts are set through the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeoutSeconds")," property. Where values ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," represent no timeout."),(0,a.kt)("p",null,"Forcing submission on lock/unlock is set through ",(0,a.kt)("inlineCode",{parentName:"p"},"promptOnUnlock")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". After an unlock event the client\nis given a five-minute grace period before the posture check begins to fail."),(0,a.kt)("p",null,"Forcing submission on wake is set through ",(0,a.kt)("inlineCode",{parentName:"p"},"promptOnWake")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". After a wake event the client\nis given a five-minute grace period before the posture check begins to fail."),(0,a.kt)("h4",{id:"ziti-cli-2"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti edge create posture-check mfa my-mfa-check -s 3600 -w -u -a check-attribute1")),(0,a.kt)("h4",{id:"edge-management-api-2"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/posture-checks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typeId": "MFA",\n  "timeoutSeconds": 3600,\n  "promptOnWake": false,\n  "promptOnUnlock": false,\n  "attributes": ["check-attribute1"]\n}\n')),(0,a.kt)("h2",{id:"multi-process"},"Multi Process"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MULTI_PROCESS")," Posture Check is used to verify that one or more programs are running on the client. It can\noptionally check sha256 hash as well as digital signers on Window."),(0,a.kt)("h3",{id:"creating-3"},"Creating"),(0,a.kt)("p",null,"Multi Process Posture Checks allow multiple processes to be defined which either all of must be running or one of must\nbe running. The ",(0,a.kt)("inlineCode",{parentName:"p"},"semantic")," of the check determines how the processes are evaluated. ",(0,a.kt)("inlineCode",{parentName:"p"},"AllOf")," requires that all\nprocesses define in the check must be running. ",(0,a.kt)("inlineCode",{parentName:"p"},"OneOf")," requires only one of the processes to be valid."),(0,a.kt)("p",null,"All processes are checked to be running from the binary provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," setting."),(0,a.kt)("p",null,"Valid sha256 hashes of a binary may be provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},"hashes"),"."),(0,a.kt)("p",null,"If the file is digital signed (Windows only) the ",(0,a.kt)("inlineCode",{parentName:"p"},"signerFingerprints")," may be provided. Signer fingerprints are the\nsha1 fingerprints (thumbprints) of valid signing certificates."),(0,a.kt)("h4",{id:"ziti-cli-3"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ziti edge create posture-check process-multi my-proc-multi AnyOf "Windows,Linux", "C:\\\\program1.exe,/usr/local/program1" -a check-attribute1')),(0,a.kt)("h4",{id:"edge-management-api-3"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/posture-checks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typeId": "PROCESS_MULTI",\n  "name": "my-proc-multi",\n  "semantic": "OneOf",\n  "processes": [\n    {\n      "os": "WINDOWS",\n      "path": "C:\\\\program1.exe",\n      "hashes": ["421c76d77563afa1914846b010bd164f395bd34c2102e5e99e0cb9cf173c1d87"],\n      "signerFingerprints": ["79437f5edda13f9c0669b978dd7a9066dd2059f1"]\n    },\n    {\n      "os": "LINUX",\n      "path": "/usr/local/program1",\n      "hashes": ["b16d66911a4657945bf1929bc1a9d743168b819d9b19d1519eb29ffb3db140a4"],\n      "signerFingerprints": ["882106ca75dc47a5ffd055e640b30c2e01789521"]\n    }\n  ],\n  "attributes": ["check-attribute1"]\n}\n')),(0,a.kt)("h2",{id:"windows-domain"},"Windows Domain"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DOMAIN")," Posture CHeck is used to verify that a Windows client has joined a specific Windows Domain."),(0,a.kt)("h3",{id:"creating-4"},"Creating"),(0,a.kt)("h4",{id:"ziti-cli-4"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ziti edge create posture-check domain domain-list -d domain1 -d "domain2"  -a check-attribute1')),(0,a.kt)("h4",{id:"edge-management-api-4"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/posture-checks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typeId": "DOMAIN",\n  "name": "domain-list",\n  "macAddresses": ["domain1", "domain2"],\n  "attributes": ["check-attribute1"]\n}\n')),(0,a.kt)("h1",{id:"viewing-identity-posture-data"},"Viewing Identity Posture Data"),(0,a.kt)("p",null,"For troubleshooting purposes it is possible to view an identity's current Posture Data."),(0,a.kt)("h4",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /edge/management/v1/identities/<id>/posture-data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<empty body>\n")),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "apiSessionPostureData": {},\n    "domain": {\n      "lastUpdatedAt": "2022-08-03T11:03:29.451Z",\n      "postureCheckId": "-GIxFATMg",\n      "timedOut": false,\n      "domain": "MYDOMAIN"\n    },\n    "mac": {\n      "lastUpdatedAt": null,\n      "postureCheckId": "",\n      "timedOut": false,\n      "addresses": null\n    },\n    "os": {\n      "lastUpdatedAt": "2022-08-03T11:03:29.375Z",\n      "postureCheckId": "OZimG0oGR",\n      "timedOut": false,\n      "build": null,\n      "type": "windows",\n      "version": "10.0.19044"\n    },\n    "processes": [\n      {\n        "lastUpdatedAt": "2022-08-03T11:03:49.803Z",\n        "postureCheckId": "62yttIAeJ",\n        "timedOut": false,\n        "signerFingerprints": []\n      },\n      {\n        "lastUpdatedAt": "2022-08-03T11:03:49.986Z",\n        "postureCheckId": "Gh5DOegtE",\n        "timedOut": false,\n        "signerFingerprints": []\n      }\n    ]\n  },\n  "meta": {}\n}\n')),(0,a.kt)("h1",{id:"viewing-failed-service-requests"},"Viewing Failed Service Requests"),(0,a.kt)("p",null,"For troubleshooting purposes it is possible to view the last fifty failed service requests due to Posture Check failure."),(0,a.kt)("h4",{id:"request-1"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /edge/management/v1/identities/<id>/failed-service-requests")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<empty body>\n")),(0,a.kt)("h4",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {},\n  "data": [\n    {\n      "apiSessionId": "ckytwv9811tqz15mzoyfi1uvb",\n      "policyFailures": [\n        {\n          "policyId": "Nk43EwJKE",\n          "policyName": "TestPolicy1",\n          "checks": [\n            {\n              "actualValue": {\n                "passedMfa": false,\n                "passedOnUnlock": false\n              },\n              "expectedValue": {\n                "passedMfa": true,\n                "passedOnWake": true\n              },\n              "postureCheckId": "5Ucbw.tjo0",\n              "postureCheckName": "TestCheck1",\n              "postureCheckType": "MFA"\n            }\n          ]\n        }\n      ],\n      "serviceId": "iGoRLhrx0",\n      "serviceName": "TestService1",\n      "sessionType": "Dial",\n      "when": "2022-01-25T10:18:45.257Z"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);