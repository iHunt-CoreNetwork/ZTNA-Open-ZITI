"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[791,7035,4172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294),a=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(7462),a=n(7294),r=n(6010),o=n(2389),l=n(7392),s=n(7094),d=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function h(e){var t;const{lazy:n,block:o,defaultValue:h,values:p,groupId:m,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??y.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:h??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[C,T]=(0,a.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,d.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&k.some((t=>t.value===e))&&T(e)}const Z=e=>{const t=e.currentTarget,n=N.indexOf(t),i=k[n].value;i!==C&&(A(t),T(i),null!=m&&w(m,String(i)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:Z,onClick:Z},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function p(e){const t=(0,o.Z)();return a.createElement(h,(0,i.Z)({key:String(t)},e))}},1208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var i=n(7462),a=(n(7294),n(3905));const r={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#creates a new user named "NewUser"\nziti edge create identity user "NewUser" -o NewUser.jwt\n')))}o.isMDXComponent=!0;const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    Verb: POST\n\n    name:\n      The name of the CA to create\n    isAutoCaEnrollmentEnabled:\n      controls if the CA can be used for automatic enrollment\n    isOttCaEnrollmentEnabled:\n      controls if the CA be used for one time token enrollment\n    isAuthEnabled:\n      controls if the CA is enabled for authentication. Devices can enroll but not connect if set to false\n    certPem:\n      the CA to upload in PEM format\n    body:\n    {\n      "name": "${string}",\n      "isAutoCaEnrollmentEnabled": ${true|false},\n      "isOttCaEnrollmentEnabled": ${true|false},\n      "isAuthEnabled": ${true|false},\n      "certPem": "${string}"\n    }\n')))}s.isMDXComponent=!0;var d=n(5488),c=n(5162);const u={title:"Creating"},h=void 0,p={unversionedId:"identities/creating",id:"identities/creating",title:"Creating",description:"",source:"@site/docs/identities/creating.mdx",sourceDirName:"identities",slug:"/identities/creating",permalink:"/docusaurus/docs/identities/creating",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/identities/creating.mdx",tags:[],version:"current",frontMatter:{title:"Creating"},sidebar:"tutorialSidebar",previous:{title:"Ziti Identities",permalink:"/docusaurus/docs/identities/overview"},next:{title:"Enrolling",permalink:"/docusaurus/docs/identities/enrolling"}},m={},f=[{value:"Creating an Identity",id:"creating-an-identity",level:2},{value:"Choosing an Enrollment Method",id:"choosing-an-enrollment-method",level:2},{value:"One Time Token (OTT)",id:"one-time-token-ott",level:3},{value:"3rd Party CA - Overview",id:"3rd-party-ca---overview",level:3},{value:"Adding a 3rd Party CA to the Ziti Controller",id:"adding-a-3rd-party-ca-to-the-ziti-controller",level:4},{value:"3rd Party CA - One Time Token",id:"3rd-party-ca---one-time-token",level:4},{value:"3rd Party CA - Auto Enrolled",id:"3rd-party-ca---auto-enrolled",level:4},{value:"Choosing an Identity Type",id:"choosing-an-identity-type",level:2}],y={toc:f};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-an-identity"},"Creating an Identity"),(0,a.kt)("p",null,"The mechanism for creating identities is influenced by how your Ziti network is setup, specifically how the PKI is\nestablished. Identities are itegrally linked to the PKI configured in a given Ziti network and directly affects how\nidentities are created and enrolled. There are generally three enrollment methods for identities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One Time Token (ott) identites using the configured PKI"),(0,a.kt)("li",{parentName:"ul"},"One Time Token (ott) identites using a 3rd Party CA"),(0,a.kt)("li",{parentName:"ul"},"3rd Party auto-enrolled identities")),(0,a.kt)("h2",{id:"choosing-an-enrollment-method"},"Choosing an Enrollment Method"),(0,a.kt)("p",null,"Choosing which type of enrollment your identity will use comes down to whether you are using a 3rd Party CA or not. If the\nnetwork does not have a 3rd Party Certificate configured the only option is to use the One Time Token (OTT) enrollment method."),(0,a.kt)("p",null,"If one or more 3rd Party CA is installed you will need to understand the intention of each 3rd Party certificate."),(0,a.kt)("p",null,"Each of the types of enrollments are secure it just depends on your actual network setup as to which type to choose. If\nyou don't know - just use the One Time Token (OTT) method. The identity can always be recreated at a later date if necessary."),(0,a.kt)("h3",{id:"one-time-token-ott"},"One Time Token (OTT)"),(0,a.kt)("p",null,"The One Time Token method is available to all Ziti networks.  A one time token enrolled identity will\nhave a token generated at the time of the identity's creation.  This token is then submitted at some point in the future\nas part of the ",(0,a.kt)("a",{parentName:"p",href:"./enrolling"},"enrollment")," process.  Once an identity is successfully enrolled - the one time token is\nno longer valid and cannot be used to enroll the same identity again."),(0,a.kt)("p",null,"One time tokens are delivered from the Ziti Controller as a ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"jwt")," and the token\nexpires 24 hours after the identity is created.  The token is downloadable via the Ziti Admin Console. After you create\na user you can go to the Identities page and click the icon that looks like a certificate to download the .jwt file."),(0,a.kt)("p",null,"You can also create an identity for one time token enrollment using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," cli tool.  This command will\ncreate a new identity and output the jwt to the selected path. You can then transfer the .jwt file to the device where\nthe permanent identity JSON file will be installed by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"enroll")," command."),(0,a.kt)(o,{mdxType:"CreateCliExampleMd"}),(0,a.kt)("h3",{id:"3rd-party-ca---overview"},"3rd Party CA - Overview"),(0,a.kt)("p",null,'The Ziti Controller is capable of using an existing PKI for authentication and authorization rather than to PKI\nconfigured in the Ziti Controller.  Certificates that are not controlled by the Ziti Controller are referred to as "3rd\nparty". If you have an existing PKI setup you wish to reuse or if you are just interested in learning how\nto use a 3rd Party CA this section is for you.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Reusing a PKI is not a simple topic and managing and maintaining a PKI is out of the scope of this guide.")),(0,a.kt)("p",null,"A 3rd Party CA will need to be created and the public certificate uploaded into the Ziti Controller. After using an\nexisting PKI to reuse/generate a certificate, the Ziti Controller will be to create identities which will be expected to\npresent a certificate during the connection process that is valid per the provided certificate."),(0,a.kt)("h4",{id:"adding-a-3rd-party-ca-to-the-ziti-controller"},"Adding a 3rd Party CA to the Ziti Controller"),(0,a.kt)("p",null,"Adding a certificate to the Ziti Controller is easy using the Ziti Console."),(0,a.kt)(d.Z,{mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"tabid-new-ca-ui",label:"New CA via UI",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'On the left side click "Certificate Authorities"'),(0,a.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Certificate Authority'),(0,a.kt)("li",{parentName:"ol"},"Enter the name of the Certificate Authority you would like to create"),(0,a.kt)("li",{parentName:"ol"},"Choose if the CA should be used for Enrollment (yes) and Auth (yes)"),(0,a.kt)("li",{parentName:"ol"},"Click save"))),(0,a.kt)(c.Z,{value:"tabid-new-ca-cli",label:"New CA via REST",mdxType:"TabItem"},(0,a.kt)(s,{mdxType:"CreateCaJsonMd"}))),(0,a.kt)("h4",{id:"3rd-party-ca---one-time-token"},"3rd Party CA - One Time Token"),(0,a.kt)("p",null,"3rd Party CA OTT enrollment is closely related to ",(0,a.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"OTT Enrollment"),". The main difference is the\nutilization of a 3rd party CA certificate rather than the configured Ziti Edge CA and PKI. In this method, the system\ndoes not have access to the 3rd party CA private key and thus cannot provide CSR fulfillment capabilities. Instead it is\nassumed that the enrolling device has a separate process to acquire signed certificates. Rather than submitting a CSR\nthe client uses an already acquired signed certificate as its client certificate for the enrollment request. The client\ncertificate is validated against the CA certificate tied to the one time token."),(0,a.kt)("p",null,"Similar to the ",(0,a.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"OTT Enrollment")," process, identities must be provisioned ahead of enrollment in\norder to generate one time token required and to creat the jwt that can be delivered to enrolling devices. This means\nthat the provisioning of the Ziti Edge identities and the client certificates must be coordinated. Identities can be enrolled with a one time token flow similar to the ",(0,a.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"one time token flow"),"."),(0,a.kt)("h4",{id:"3rd-party-ca---auto-enrolled"},"3rd Party CA - Auto Enrolled"),(0,a.kt)("p",null,"CA Auto Enrollment is useful in situations where devices are provisioned with certificates en-mass that need to be able\nto register as identities within Ziti Edge. This enrollment method allows for device provisioning processes to skip the\nmanual configuration of Ziti Edge and instead allow clients to present a signed client certificate to generate an\nidentity during the enrollment process. The identity will grant the client access to authenticate only - any\nauthorization will need to be done after the device identities have been created."),(0,a.kt)("p",null,"A certificate can only be used for one identity. The Ziti Edge system does not allow the same certificate to be used for\nmultiple identities. An enrollment request is comprised of a special enrollment URL used to perform an HTTP POST request\nusing the signed client certificate as the TLS client certificate and an optional JSON payload that allows the client to\nspecify the devices display name and internal username. See ",(0,a.kt)("a",{parentName:"p",href:"./enrolling"},"enrollment")," for more details on enrolling."),(0,a.kt)(d.Z,{mdxType:"Tabs"},(0,a.kt)(c.Z,{label:"New 3rd Party CA Identity via UI",value:"tabid-new-identity-ui",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'On the left side click "Certificate Authorities"'),(0,a.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Certificate Authority'),(0,a.kt)("li",{parentName:"ol"},"Enter the name of the Certificate Authority you would like to create"),(0,a.kt)("li",{parentName:"ol"},"Choose if the CA should be used for Enrollment (yes) and Auth (yes)"),(0,a.kt)("li",{parentName:"ol"},"Click save"))),(0,a.kt)(c.Z,{label:"New 3rd Party Identity via CLI",value:"tabid-new-identity-cli",mdxType:"TabItem"},(0,a.kt)(o,{mdxType:"CreateIdCliMd"}))),(0,a.kt)("h2",{id:"choosing-an-identity-type"},"Choosing an Identity Type"),(0,a.kt)("p",null,"The three types of identities are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User"),(0,a.kt)("li",{parentName:"ul"},"Device"),(0,a.kt)("li",{parentName:"ul"},"Service")),(0,a.kt)("p",null,"These are functionally equivalent and have identical properties. You may wish to express the intended purpose of an\nidentity by choosing one or another type when the identity is created. The type can not be changed."))}k.isMDXComponent=!0},1621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={title:"Enrolling"},o="Enrolling an Identity",l={unversionedId:"identities/enrolling",id:"identities/enrolling",title:"Enrolling",description:"All connections made to the Ziti network leverage mutual TLS",source:"@site/docs/identities/enrolling.md",sourceDirName:"identities",slug:"/identities/enrolling",permalink:"/docusaurus/docs/identities/enrolling",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/identities/enrolling.md",tags:[],version:"current",frontMatter:{title:"Enrolling"},sidebar:"tutorialSidebar",previous:{title:"Creating",permalink:"/docusaurus/docs/identities/creating"},next:{title:"Ziti Services",permalink:"/docusaurus/docs/services/overview"}},s={},d=[{value:"Overview",id:"overview",level:3},{value:"One Time Token Enrollment - Internal PKI",id:"one-time-token-enrollment---internal-pki",level:3},{value:"3rd Party CA - One Time Token",id:"3rd-party-ca---one-time-token",level:3},{value:"3rd Party CA - Auto",id:"3rd-party-ca---auto",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enrolling-an-identity"},"Enrolling an Identity"),(0,a.kt)("p",null,"All connections made to the Ziti network leverage ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mutual TLS"),'\nwhich means every client needs a valid X509 certificate which it will present to the Ziti network during the connection\nprocess. The process of obtaining a key/certificate pair and presenting it securely to the Ziti Controller is called\n"Enrollment".'),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"All identities need to be enrolled with the Ziti Controller so the Ziti Controller can authenticate the incoming connection.\nThis process is slightly different for each type of identity and is complex. The easiest way to enroll an identity is to\nuse either the Ziti Desktop Edge/Ziti Mobile Edge for your operating system. Alternatively, you may perform the enrollment separate\nwith the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," CLI which can be downloaded from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/releases/latest"},"GitHub releases page")," "),(0,a.kt)("h3",{id:"one-time-token-enrollment---internal-pki"},"One Time Token Enrollment - Internal PKI"),(0,a.kt)("p",null,"Perhaps the easiest path to an enrolled identity is by using the one-time token enrollment flow. This flow leverages the\nPKI configured in the Ziti Controller.  Using the one-time token flow - the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will generate a private key\nand a certificate signing request for the Ziti Controller's built-in certificate authority to fulfill."),(0,a.kt)("p",null,"Follow these steps to enroll an identity with a one-time token:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"creating"},"create the Identity")),(0,a.kt)("li",{parentName:"ul"},"download or copy the JWT - this file contains the single use token"),(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti")," :")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --jwt ${jwt_file} \\\n    --out ${identity_config_file}\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The output from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," is a permanent identity configuration file which\nmust be stored securely. This file contains within it the private key that backs\nthe certificate issued by the Ziti Controller.  This file should not be\ntransferred or shared and should not be moved from the machine unless you are\nconfident you understand the risks involved in doing so.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage for ",(0,a.kt)("inlineCode",{parentName:"strong"},"ziti-edge-tunnel")," CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# enroll from a token file\n./ziti-edge-tunnel enroll --jwt ./myTunneler.jwt --identity ./myTunneler.json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# enroll from stdin\n./ziti-edge-tunnel enroll --jwt - --identity ./myTunneler.json < ./myTunneler.jwt\n")),(0,a.kt)("h3",{id:"3rd-party-ca---one-time-token"},"3rd Party CA - One Time Token"),(0,a.kt)("p",null,"This process is similar to the One Time Token flow from above. This flow expects that a private key and certificate have\nalready been created on or distributed to the machine that is about to enroll and that the certificate presented is\nsigned by a ",(0,a.kt)("a",{parentName:"p",href:"../manage/pki#third-party-ca-optional"},"third party CA")," already validated in the Ziti Controller."),(0,a.kt)("p",null,"Follow these steps to enroll a 3rd Pary CA - one-time token identity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docusaurus/docs/identities/creating"},"create the Identity")),(0,a.kt)("li",{parentName:"ul"},"download or copy the JWT - this file contains the one-time token"),(0,a.kt)("li",{parentName:"ul"},"run the ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti-tunneler")," for your given operating system. Notice you can provide the name of the identity :")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --cert ${user_certificate} \\\n    --key ${user_private_key} \\\n    --jwt ${one_time_jwt_file} \\\n    --out ${identity_config_file}\n")),(0,a.kt)("h3",{id:"3rd-party-ca---auto"},"3rd Party CA - Auto"),(0,a.kt)("p",null,'When using a third party CA identity creation process in the Ziti Controller is\nautomatic. The act of enrolling the identity will create it. Like "3rd Party CA'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'One Time Token" - this flow expects that a private key and certificate have\nalready been created on or distributed to the machine that is about to enroll.\nThe certificate presented to the Ziti Controller must be issued by a ',(0,a.kt)("a",{parentName:"li",href:"../manage/pki#third-party-ca-optional"},"third\nparty CA")," that was already\nimported and verified in the Ziti Controller with the\n",(0,a.kt)("inlineCode",{parentName:"li"},"isAutoCaEnrollmentEnabled")," property set to true.")),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will also require the re-use of a permanent JWT that is unique to the external CA. The JWT\ncan be downloaded from the Ziti Controller from:  ",(0,a.kt)("inlineCode",{parentName:"p"},"${controller_uri}/cas/${id}/jwt")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"${controller_uri}")," represents\nthe fully qualified address of the Ziti Controller api and ",(0,a.kt)("inlineCode",{parentName:"p"},"${id}")," represents the identifier for the given third party CA."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --cert ${user_certificate} \\\n    --key ${user_private_key} \\\n    --jwt ${reusable_ca_jwt_file} \\\n    --out ${identity_config_file}\n")),(0,a.kt)("p",null,"If supplied the ",(0,a.kt)("inlineCode",{parentName:"p"},"idname")," will be used as the name for the identity created. The default name of auto-created identities is generated from a template that uses values from the user certificate i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"[caName]-[commonName]"),"."))}u.isMDXComponent=!0},8964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=n(7462),a=(n(7294),n(3905)),r=n(1208),o=n(1621);const l={},s="Ziti Identities",d={unversionedId:"identities/overview",id:"identities/overview",title:"Ziti Identities",description:"Ziti is built on the foundation of zero trust. A solid pillar of that foundation requires that all connections in a",source:"@site/docs/identities/overview.mdx",sourceDirName:"identities",slug:"/identities/overview",permalink:"/docusaurus/docs/identities/overview",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/identities/overview.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"These are Guides",permalink:"/docusaurus/docs/guides/"},next:{title:"Creating",permalink:"/docusaurus/docs/identities/creating"}},c={},u=[{value:"3rd Party Certificates",id:"3rd-party-certificates",level:2}],h={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ziti-identities"},"Ziti Identities"),(0,a.kt)("p",null,"Ziti is built on the foundation of zero trust. A solid pillar of that foundation requires that all connections in a\nZiti-enabled network are authenticated.  Identities are the basis for Ziti authentication.  All devices connecting to a\nZiti network will have an Identity which is presented at the time of a connection being established by both the device\ninitiating the connection and the device receiving the incoming connection. Ziti implements ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mutual\nTLS")," in order to authenticate both sides of a connection."),(0,a.kt)("p",null,"Conceptually an identity can be thought of as congruent to a user account.  Identities are logical entities stored\ninside the Ziti Controller which map an X509 certifcate to a particular named identity.  Identities exist not only to\nauthenticate connections but are also used to authorize identities within Ziti. See ",(0,a.kt)("a",{parentName:"p",href:"../security/authorization/policies/overview"},"Policies"),"\nfor more information on authoriziation of identities."),(0,a.kt)("h2",{id:"3rd-party-certificates"},"3rd Party Certificates"),(0,a.kt)("p",null,'The certificate a Ziti Edge client presents can be generated by the Ziti Controller using the configured PKI or this\ncertificate can come from an existing PKI not controlled by the Ziti Controller. Certificates which are not created by\nthe Ziti Controller are referred to as "3rd Party" because from the perspective of the Ziti Controller the certificates\nare not from the configured PKI.'),(0,a.kt)(r.default,{mdxType:"CreateIdentityCliMd"}),(0,a.kt)(o.default,{mdxType:"EnrollingMd"}))}p.isMDXComponent=!0}}]);