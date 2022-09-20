"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9079],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>u});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(i),u=n,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return i?a.createElement(f,l(l({ref:t},s),{},{components:i})):a.createElement(f,l({ref:t},s))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3950:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(7462),n=(i(7294),i(3905));const r={},l="3rd Party CAs",o={unversionedId:"security/authentication/third-party-cas",id:"security/authentication/third-party-cas",title:"3rd Party CAs",description:"3rd Party CAs allow external private key infrastructures (PKIs) to be imported into Ziti and used for client enrollment",source:"@site/docs/security/authentication/10-third-party-cas.md",sourceDirName:"security/authentication",slug:"/security/authentication/third-party-cas",permalink:"/docusaurus/docs/security/authentication/third-party-cas",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/security/authentication/10-third-party-cas.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Password Management",permalink:"/docusaurus/docs/security/authentication/password-management"},next:{title:"API Session Certificates",permalink:"/docusaurus/docs/security/authentication/api-session-certificates"}},c={},d=[{value:"Create",id:"create",level:2},{value:"Verification",id:"verification",level:2},{value:"Ziti CLI",id:"ziti-cli",level:3},{value:"Create Verification Certificate &amp; Submit",id:"create-verification-certificate--submit",level:4},{value:"Submit Verification Certificate",id:"submit-verification-certificate",level:4},{value:"Edge Management API",id:"edge-management-api",level:3},{value:"External ID &amp; X509 Claims",id:"external-id--x509-claims",level:2},{value:"CA Create/Update REST API",id:"ca-createupdate-rest-api",level:4},{value:"Ziti CLI",id:"ziti-cli-1",level:4},{value:"Location, Matcher, Parser",id:"location-matcher-parser",level:3},{value:"Location",id:"location",level:4},{value:"Matcher &amp; Matcher Criteria",id:"matcher--matcher-criteria",level:4},{value:"Parser &amp; Parser Criteria",id:"parser--parser-criteria",level:4}],s={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"3rd-party-cas"},"3rd Party CAs"),(0,n.kt)("p",null,"3rd Party CAs allow external private key infrastructures (PKIs) to be imported into Ziti and used for client enrollment\nand authentication. Ziti does not allow external private keys from PKIs to be imported for 3rd party CAs. Creation and\ndistribution of client certificates must be handled outside of Ziti."),(0,n.kt)("p",null,"3rd Party CAs represent x509 Certificate chains that have the ",(0,n.kt)("inlineCode",{parentName:"p"},"CA:true")," constraint. It is worth noting\nthat adding a x509 certificate as a 3rd Party CA will treat it as a trust anchor even if it is an intermediate CA.\n3rd Part CAs validate partial chains back to a registered 3rd Party CA. If full chain validation is required, ensure\nthat the root CA is added as a 3rd Party CA and ensure authenticating clients provide their client certificate in\nindex zero and any required intermediate certificates afterwards."),(0,n.kt)("h1",{id:"usage"},"Usage"),(0,n.kt)("p",null,"3rd Party CAs can be used in the following manners:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allows clients to enroll and authenticate automatically for at-scale network boarding - ",(0,n.kt)("a",{parentName:"li",href:"../enrollment#auto-ca-enrollment"},"Auto CA Enrollment")),(0,n.kt)("li",{parentName:"ul"},"allows clients to enroll pre-created identities - ",(0,n.kt)("a",{parentName:"li",href:"../enrollment#ott-ca-enrollment"},"OTT CA Enrollment")),(0,n.kt)("li",{parentName:"ul"},"allows clients to map to pre-created identities using ",(0,n.kt)("inlineCode",{parentName:"li"},"externalId")," and ",(0,n.kt)("a",{parentName:"li",href:"#external-id--x509-claims"},"X509 Claims"))),(0,n.kt)("h2",{id:"create"},"Create"),(0,n.kt)("p",null,"Creating a 3rd Party CA has various option that will determine how the 3rd Party CA will be used and how client\ncertificates will be validated. The following fields configure client authentication:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isAutoCaEnrollmentEnabled")," - allows client certificates of the CA to automatically enroll when encountered"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isOttCaEnrollmentEnabled")," - allows client certificates of the CA to enroll if an identity with an ",(0,n.kt)("inlineCode",{parentName:"li"},"ottca")," enrollment was created"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isAuthEnabled")," - allows client certificates of the CA to attempt to enroll"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"externalIdClaim")," - configuration used to pull values out of the x509 client certificate used to match identity ",(0,n.kt)("inlineCode",{parentName:"li"},"externalId"),", see ",(0,n.kt)("a",{parentName:"li",href:"#external-id--x509-claims"},"External Id & x509 Claims"))),(0,n.kt)("p",null,"For ",(0,n.kt)("a",{parentName:"p",href:"../enrollment#auto-ca-enrollment"},"Auto CA Enrollment")," an identity is created on first authentication.\nThe following fields allow configuration of newly created identities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"identityRoles")," - the identity roles to give to automatically enrolling identities"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"identityNameFormat")," - the identity name format used to name ",(0,n.kt)("a",{parentName:"li",href:"../enrollment#auto-ca-enrollment"},"automatically enrolling identities"))),(0,n.kt)("p",null,"On initial creation of a 3rd Party CA it will be in an unverified stated and must undergo ",(0,n.kt)("a",{parentName:"p",href:"#verification"},"verification"),".\nThe following fields relate to ",(0,n.kt)("a",{parentName:"p",href:"#verification"},"verification"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isVerified")," - read only field of whether this CA has been verified"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"verificationToken")," - read only displaying the verification token required to verify the CA")),(0,n.kt)("p",null,"All other fields are for informational purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," - the name of the given CA"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fingerprint")," - read only field of the sha1 fingerprint of the provided x509 certificate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"certPem")," - PEM encoded version of the CA")),(0,n.kt)("h2",{id:"verification"},"Verification"),(0,n.kt)("p",null,"In order for a 3rd Party CA to be used authentication and enrollment it must first be verified. While in an unverified\nstate ",(0,n.kt)("inlineCode",{parentName:"p"},"isVerfieid")," will be false and ",(0,n.kt)("inlineCode",{parentName:"p"},"verificationToken")," will contain a random security token. In order to verify\nthe 3rd Party CA a certificate with the ",(0,n.kt)("inlineCode",{parentName:"p"},"verificationToken")," set as the common name must be signed by the certificate\nprovided for the 3rd Party CA."),(0,n.kt)("h3",{id:"ziti-cli"},"Ziti CLI"),(0,n.kt)("p",null,"The Ziti CLI can assist with creating a verification certificate in two ways. It can create the verification certificate\nand submit it or submit an already created certificate."),(0,n.kt)("h4",{id:"create-verification-certificate--submit"},"Create Verification Certificate & Submit"),(0,n.kt)("p",null,"Access to the CA's certificate and private key is required."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"}," ziti edge verify ca <name> --cacert <signingCaCert> --cakey <signingCaKey> [--password <caKeyPassword>]")),(0,n.kt)("h4",{id:"submit-verification-certificate"},"Submit Verification Certificate"),(0,n.kt)("p",null,"Access to a certificate with the ",(0,n.kt)("inlineCode",{parentName:"p"},"verifiationToken")," set as the common name and signed by the 3rd Party CA is required"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ziti edge verify ca <name> --cert <pemCertFile>")),(0,n.kt)("h3",{id:"edge-management-api"},"Edge Management API"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"../../api/edge-apis#edge-management-api"},"Edge Management API")," accepts and ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," in the URL path and x509 certificate PEM\nas the body:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/cas/<id>/verify")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u2014\u2013BEGIN CERTIFICATE\u2014\u2013\nMIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG\n...\nHMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==\n\u2014\u2013END CERTIFICATE\u2014\u2013\n")),(0,n.kt)("h2",{id:"external-id--x509-claims"},"External ID & X509 Claims"),(0,n.kt)("p",null,"The base set of capabilities of x509 certificates do not allow the inclusion of custom private claims. Ziti internally\nuses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/openziti/x509-claims"},"x509-claims")," to allow claims data to be parsed from SANs and other\nfields. An example of this in other projects is ",(0,n.kt)("a",{parentName:"p",href:"https://spiffe.io/"},"SPIFFE"),". SPIFFE defines ",(0,n.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spiffe-about/spiffe-concepts/#spiffe-id"},"SPIFFE IDs"),"\nwhich are stored in ",(0,n.kt)("a",{parentName:"p",href:"https://spiffe.io/docs/latest/spiffe-about/spiffe-concepts/#spiffe-verifiable-identity-document-svid"},"SVIDs"),"."),(0,n.kt)("p",null,"3rd Party CAs support defining a set of x509 claims configuration that allows a claim to be matched to an identity\n",(0,n.kt)("inlineCode",{parentName:"p"},"externalId"),". The configuration is contained in an object in the field ",(0,n.kt)("inlineCode",{parentName:"p"},"externalIdClaims"),". When not defined, x509\nclient certificate authentication attempts to find an identity that is tied to an ",(0,n.kt)("a",{parentName:"p",href:"auth#authenticators"},"authenticator"),"\nby matching client certificates. Using x509 claims, the client is matched by the identity ",(0,n.kt)("inlineCode",{parentName:"p"},"externalId")," value."),(0,n.kt)("p",null,"The fields under ",(0,n.kt)("inlineCode",{parentName:"p"},"externalIdClaims")," is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"location")," - defines which value(s) in an x509 certificate will be processed: ",(0,n.kt)("inlineCode",{parentName:"li"},"COMMON_NAME"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SAN_URI"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SAN_EMAIL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"matcher")," - defines how values from ",(0,n.kt)("inlineCode",{parentName:"li"},"location")," will be filtered: ",(0,n.kt)("inlineCode",{parentName:"li"},"ALL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"PREFIX"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SUFFIX"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SCHEME")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"matcherCriteria")," - defines the ",(0,n.kt)("inlineCode",{parentName:"li"},"PREFIX"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SUFFIX"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"SCHEME")," to look for based on ",(0,n.kt)("inlineCode",{parentName:"li"},"matcher")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parser")," - defines how values from ",(0,n.kt)("inlineCode",{parentName:"li"},"location")," filtered by ",(0,n.kt)("inlineCode",{parentName:"li"},"matcher")," will be parsed: ",(0,n.kt)("inlineCode",{parentName:"li"},"NONE"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SPLIT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parserCriteria")," - defines the criteria to provide to ",(0,n.kt)("inlineCode",{parentName:"li"},"parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index")," - should multiple values still be available after ",(0,n.kt)("inlineCode",{parentName:"li"},"location"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"matcher,")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"parser")," processing the integer value here will be used from the set")),(0,n.kt)("h4",{id:"ca-createupdate-rest-api"},"CA Create/Update REST API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "myCA",\n  "certPem": "\u2014\u2013BEGIN CERTIFICATE\u2014\u2013\\nMIIDdTCCAHMU...\\n\u2014\u2013END CERTIFICATE\u2014\u2013",\n  "externalIdClaims": {\n    "location": "SAN_URI",\n    "matcher": "SCHEME",\n    "parser": "NONE",\n    "parserCriteria": "",\n    "index": 0\n  }\n}\n')),(0,n.kt)("h4",{id:"ziti-cli-1"},"Ziti CLI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ziti edge create ca myCa ca.pem -l SAN_URI -m SCHEME -x spiffe -p "NONE"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ziti edge update ca myCa -l SAN_URI -m SCHEME -x spiffe -p "NONE"\n')),(0,n.kt)("h3",{id:"location-matcher-parser"},"Location, Matcher, Parser"),(0,n.kt)("p",null,"x509 claims are located, matched, and parsed. Location defines where the value(s) are sourced from, matching filters,\nand parsing allows for a single value to yield multiple claims."),(0,n.kt)("h4",{id:"location"},"Location"),(0,n.kt)("p",null,"Location configuration sources value(s) from the x509 certificate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"COMMON_NAME")," - the common name of the certificate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SAN_URI")," - SAN URI fields"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SAN_EMAIL")," - SAN email fields")),(0,n.kt)("h4",{id:"matcher--matcher-criteria"},"Matcher & Matcher Criteria"),(0,n.kt)("p",null,"Matcher and matcher criteria work together to filter fields. The ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher")," uses ",(0,n.kt)("inlineCode",{parentName:"p"},"matcherCritera")," to perform basic\nfiltering."),(0,n.kt)("p",null,"Matcher values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ALL")," - returns all values (i.e. no filtering)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PREFIX")," - matches by the string prefix defined by ",(0,n.kt)("inlineCode",{parentName:"li"},"matcherCriteria")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SUFFIX")," - matched by the string suffix defined by ",(0,n.kt)("inlineCode",{parentName:"li"},"matcherCriteria")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SCHEME")," - a matcher that specializes in matching the protocol defined in ",(0,n.kt)("inlineCode",{parentName:"li"},"matcherCriteria")," of  a URI (used with ",(0,n.kt)("inlineCode",{parentName:"li"},"SAN_URI")," only)")),(0,n.kt)("h4",{id:"parser--parser-criteria"},"Parser & Parser Criteria"),(0,n.kt)("p",null,"Parser and parser criteria work together to turn individual values from location and matching into multiple values.\nParsers allow a single value to contain more than one claim."),(0,n.kt)("p",null,"Parser values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NONE")," - perform no parsing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SPLIT")," - perform string splitting based on the string separator defined by ",(0,n.kt)("inlineCode",{parentName:"li"},"parserCriteria"))))}p.isMDXComponent=!0}}]);