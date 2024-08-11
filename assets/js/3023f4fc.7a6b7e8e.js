"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),c=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),y=n,m=u["".concat(d,".").concat(y)]||u[y]||p[y]||i;return r?o.createElement(m,s(s({ref:t},l),{},{components:r})):o.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=y;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[u]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},74351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>v});var o=r(87462),n=r(67294),i=r(3905),s=r(86010),a=r(39960),d=r(44996);const c="card_Hw54";const l=function(e){const t=void 0===e.href,r=void 0!==e.href&&/^http/.test(e.href),o="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,l=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,d.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||i)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,d.Z)(e.icon),className:"Card-icon Card-icon-default"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,r)=>n.createElement("img",{src:(0,d.Z)(t),className:"Card-icon "+(r===e.activeIndex?"Card-icon-active":""),"data-index":r,key:r})))),e.header&&o,n.createElement("div",{className:"Card-content"},e.children))),u=(0,s.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,s.Z)(c,"docs-card")},l)):r?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,s.Z)(c,"docs-card"),href:e.href,target:"_blank"},l)):n.createElement("docs-card",{class:u},n.createElement(a.Z,{to:e.href,className:(0,s.Z)(c,"docs-card")},l))};const u=function(e){return n.createElement("docs-cards",{class:e.className},e.children)},p={title:"Identity Providers for BrowZer",slug:"/identity-providers-for-browZer"},y=void 0,m={unversionedId:"guides/Identity_Providers/index",id:"guides/Identity_Providers/index",title:"Identity Providers for BrowZer",description:"Identity Providers for OpenZiti BrowZer",source:"@site/docs/guides/Identity_Providers/index.md",sourceDirName:"guides/Identity_Providers",slug:"/identity-providers-for-browZer",permalink:"/docs/identity-providers-for-browZer",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Identity_Providers/index.md",tags:[],version:"current",frontMatter:{title:"Identity Providers for BrowZer",slug:"/identity-providers-for-browZer"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/guides/"},next:{title:"Auth0",permalink:"/docs/identity-providers-for-browZer-auth0"}},f={},v=[{value:"Supported identity providers",id:"supported-identity-providers",level:2},{value:"Cloud-based identity providers",id:"cloud-based-identity-providers",level:3},{value:"Self-hosted open source identity providers",id:"self-hosted-open-source-identity-providers",level:3}],h={toc:v},g="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Identity Providers for OpenZiti BrowZer"),(0,i.kt)("meta",{name:"description",content:"OpenZiti BrowZer is an open-source platform that enables you to protect your web app using zero-trust technologies that integrate with popular Identity Providers you already use."})),(0,i.kt)("p",null,"BrowZer allows you to secure your web app using zero-trust technologies ",(0,i.kt)("strong",{parentName:"p"},"without altering the web app itself")," and without the need for a client-side agent install. "),(0,i.kt)("p",null,"You must bring your own identity provider, and BrowZer can integrate with all popular identity providers that support OpenID Connect (OIDC)."),(0,i.kt)("p",null,"You can use your existing identity provider, or you can set up a new one using the instructions provided here."),(0,i.kt)("p",null,"Once your identity provider is set up, you can then authenticate your web app users onto your OpenZiti BrowZer overlay network.  "),(0,i.kt)("p",null,"Only authenticated users of your network will be able to see your web app -- it is safe and secure because it remains hidden and undetectable by malicious actors."),(0,i.kt)("intro-end",null),(0,i.kt)("h2",{id:"supported-identity-providers"},"Supported identity providers"),(0,i.kt)("p",null,"OpenZiti BrowZer works with the identity providers (IdP) or single sign-on (SSO) providers listed below."),(0,i.kt)("h3",{id:"cloud-based-identity-providers"},"Cloud-based identity providers"),(0,i.kt)(u,{mdxType:"DocsCards"},(0,i.kt)(l,{header:"Auth0",href:"/docs/identity-providers-for-browZer-auth0",icon:"/icons/logo-auth0.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"Secure access for everyone. But not just anyone.")),(0,i.kt)(l,{header:"Microsoft Entra ID",href:"/docs/identity-providers-for-browZer-entra",icon:"/icons/logo-entra.jpg",mdxType:"DocsCard"},(0,i.kt)("p",null,"(formerly Azure Active Directory) A cloud identity and access management solution.")),(0,i.kt)(l,{header:"Okta",href:"/docs/identity-providers-for-browZer-okta",icon:"/icons/logo-okta.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"Okta's Workforce and Customer Identity Clouds enable secure access, authentication, and automation.")),(0,i.kt)(l,{header:"Google",href:"/docs/identity-providers-for-browZer-google",icon:"/icons/logo-google.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"Use Google as your identity provider.")),(0,i.kt)(l,{header:"AWS Cognito",href:"/docs/identity-providers-for-browZer-cognito",icon:"/icons/logo-cognito.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"Secure, frictionless customer identity and access management that scales.")),(0,i.kt)(l,{header:"Duo",href:"/docs/identity-providers-for-browZer-duo",icon:"/icons/logo-duo.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"Easy to use. Incredibly effective. Cisco Duo simplifies identity security for your workforce."))),(0,i.kt)("br",null),(0,i.kt)("p",null,"If you want to use a cloud-based identity provider that is not listed above,\nplease express your interest over in our ",(0,i.kt)("a",{parentName:"p",href:"https://openziti.discourse.group/"},"Discourse forum"),"."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"self-hosted-open-source-identity-providers"},"Self-hosted open source identity providers"),(0,i.kt)(u,{mdxType:"DocsCards"},(0,i.kt)(l,{header:"Keycloak",href:"/docs/identity-providers-for-browZer-keycloak",icon:"/icons/logo-keycloak.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"An open source identity and access management solution.")),(0,i.kt)(l,{header:"Authentik",href:"/docs/identity-providers-for-browZer-authentik",icon:"/icons/logo-authentik.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"An open-source Identity Provider that emphasizes flexibility and versatility.")),(0,i.kt)(l,{header:"Authelia",href:"/docs/identity-providers-for-browZer-authelia",icon:"/icons/logo-authelia.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"A Federated OpenID Connect Provider")),(0,i.kt)(l,{header:"Dex",href:"/docs/identity-providers-for-browZer-dex",icon:"/icons/logo-dex.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"A Federated OpenID Connect Provider")),(0,i.kt)(l,{header:"Ory Kratos",href:"/docs/identity-providers-for-browZer-ory-kratos",icon:"/icons/logo-kratos.png",mdxType:"DocsCard"},(0,i.kt)("p",null,"Developer-friendly, security-hardened and battle-tested Identity, User Management and Authentication system.")),(0,i.kt)(l,{header:"Stytch",href:"/docs/identity-providers-for-browZer-stytch",icon:"/icons/logo-stytch.svg",mdxType:"DocsCard"},(0,i.kt)("p",null,"A one-stop shop for all your authentication and security requirements.")),(0,i.kt)(l,{header:"Zitadel",href:"/docs/identity-providers-for-browZer-zitadel",icon:"/icons/logo-zitadel.png",mdxType:"DocsCard"},(0,i.kt)("p",null,"Secure authentication management for your application."))),(0,i.kt)("br",null),(0,i.kt)("p",null,"If you want to use a self-hosted open source identity provider that is not listed above,\nplease express your interest over in our ",(0,i.kt)("a",{parentName:"p",href:"https://openziti.discourse.group/"},"Discourse forum"),"."))}k.isMDXComponent=!0}}]);