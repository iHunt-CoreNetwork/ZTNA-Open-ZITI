"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=i,h=s["".concat(p,".").concat(f)]||s[f]||c[f]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51360:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={toc:[{value:"Gather IdP Information",id:"gather-idp-information",level:3},{value:"Gather <code>clientId</code>",id:"gather-clientid",level:4},{value:"Gather <code>issuer</code>",id:"gather-issuer",level:4},{value:"Gather <code>jwks_uri</code>",id:"gather-jwks_uri",level:4},{value:"Create External JWT Signer",id:"create-external-jwt-signer",level:3}]},a="wrapper";function l(e){let{components:t,...n}=e;return(0,i.kt)(a,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The generic instructions below apply to any identity provider used with BrowZer."),(0,i.kt)("p",null,"If you plan to use this identity provider with your BrowZer network,\nand you'd like more detailed instructions that are specific to this identity provider\n(e.g. ",(0,i.kt)("em",{parentName:"p"},"where in the IdP's UI to find the values described below"),"),\nplease express your interest over in our ",(0,i.kt)("a",{parentName:"p",href:"https://openziti.discourse.group/"},"Discourse forum"),"."),(0,i.kt)("h3",{id:"gather-idp-information"},"Gather IdP Information"),(0,i.kt)("p",null,"Your OpenZiti network must be configured to become aware of your Auth0 identity provider.",(0,i.kt)("br",{parentName:"p"}),"\n","OpenZiti refers to the identity provider as an ",(0,i.kt)("inlineCode",{parentName:"p"},"External JWT Signer"),".  Before you can set up the new JWT signer, you must gather some information from the new Auth0 Application that you just created:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"clientId")),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"issuer")),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"jwks_uri"),(0,i.kt)("br",null),(0,i.kt)("br",null))),(0,i.kt)("h4",{id:"gather-clientid"},"Gather ",(0,i.kt)("inlineCode",{parentName:"h4"},"clientId")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," can be found via the openid-configuration endpoint that all OIDC-compliant identity providers expose.  The openid-configuration endpoint URL for Auth0 looks like this:"),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"gather-issuer"},"Gather ",(0,i.kt)("inlineCode",{parentName:"h4"},"issuer")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer")," can be found via the openid-configuration endpoint that all OIDC-compliant identity providers expose.",(0,i.kt)("br",{parentName:"p"}),"\n","The openid-configuration endpoint URL for Auth0 looks like this:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://<YOUR_IDP_DOMAIN>/<YOUR_IDP_PATH>/.well-known/openid-configuration"))),(0,i.kt)("p",null,"where the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR_IDP_DOMAIN>")," is specific to where you are hosting your identity provider, and\nwhere the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR_IDP_PATH>")," is specific to your identity provider's implementation."),(0,i.kt)("p",null,"When you enter the openid-configuration endpoint URL into a browser, you will receive a JSON response that will\ncontain an ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer")," field."),(0,i.kt)("p",null,"Take note of the ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer")," value."),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"gather-jwks_uri"},"Gather ",(0,i.kt)("inlineCode",{parentName:"h4"},"jwks_uri")),(0,i.kt)("p",null,"The JSON response from the above openid-configuration endpoint URL will also\ncontain a ",(0,i.kt)("inlineCode",{parentName:"p"},"jwks_uri")," field."),(0,i.kt)("p",null,"Take note of the ",(0,i.kt)("inlineCode",{parentName:"p"},"jwks_uri")," value returned from the above openid-configuration endpoint URL."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"create-external-jwt-signer"},"Create External JWT Signer"),(0,i.kt)("p",null,"Using the values described above, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti")," CLI to configure an external JWT signer that represents your Auth0 identity provider.  You can find details on how to do this in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/browzer/"},"BrowZer Quickstart documentation")))}l.isMDXComponent=!0},10268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),o=n(51360);const a={title:"AWS Cognito for BrowZer",sidebar_label:"Cognito",slug:"/identity-providers-for-browZer-cognito"},l=void 0,p={unversionedId:"guides/Identity_Providers/cognito/index",id:"guides/Identity_Providers/cognito/index",title:"AWS Cognito for BrowZer",description:"AWS Cognito for OpenZiti BrowZer",source:"@site/docs/guides/Identity_Providers/cognito/index.md",sourceDirName:"guides/Identity_Providers/cognito",slug:"/identity-providers-for-browZer-cognito",permalink:"/docs/identity-providers-for-browZer-cognito",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Identity_Providers/cognito/index.md",tags:[],version:"current",frontMatter:{title:"AWS Cognito for BrowZer",sidebar_label:"Cognito",slug:"/identity-providers-for-browZer-cognito"},sidebar:"docsSidebar",previous:{title:"Authentik",permalink:"/docs/identity-providers-for-browZer-authentik"},next:{title:"Dex",permalink:"/docs/identity-providers-for-browZer-dex"}},d={},u=[],s={toc:u},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"AWS Cognito for OpenZiti BrowZer"),(0,i.kt)("meta",{name:"description",content:"How to configure AWS Cognito for OpenZiti BrowZer."})),(0,i.kt)("img",{src:"/icons/logo-cognito.svg",alt:"How to configure AWS Cognito for OpenZiti BrowZer",width:"15%"}),(0,i.kt)(o.ZP,{mdxType:"IdPGeneric"}))}f.isMDXComponent=!0}}]);