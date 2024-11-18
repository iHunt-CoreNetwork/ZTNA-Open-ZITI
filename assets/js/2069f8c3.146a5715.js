"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,h=d["".concat(p,".").concat(k)]||d[k]||u[k]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},89757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={title:"Microsoft Entra ID for BrowZer",sidebar_label:"Microsoft Entra ID",slug:"/identity-providers-for-browZer-entra"},o=void 0,l={unversionedId:"guides/Identity_Providers/entra/index",id:"guides/Identity_Providers/entra/index",title:"Microsoft Entra ID for BrowZer",description:"Microsoft Entra ID for OpenZiti BrowZer",source:"@site/docs/guides/Identity_Providers/entra/index.md",sourceDirName:"guides/Identity_Providers/entra",slug:"/identity-providers-for-browZer-entra",permalink:"/docs/identity-providers-for-browZer-entra",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Identity_Providers/entra/index.md",tags:[],version:"current",frontMatter:{title:"Microsoft Entra ID for BrowZer",sidebar_label:"Microsoft Entra ID",slug:"/identity-providers-for-browZer-entra"},sidebar:"docsSidebar",previous:{title:"Duo",permalink:"/docs/identity-providers-for-browZer-duo"},next:{title:"Google",permalink:"/docs/identity-providers-for-browZer-google"}},p={},s=[{value:"Get an Entra ID Account",id:"get-an-entra-id-account",level:3},{value:"Add a new Application",id:"add-a-new-application",level:3},{value:"Token configuration",id:"token-configuration",level:3},{value:"Expose an API",id:"expose-an-api",level:3},{value:"Owners",id:"owners",level:3},{value:"API permissions",id:"api-permissions",level:3},{value:"Manifest",id:"manifest",level:3},{value:"Gather IdP Information",id:"gather-idp-information",level:3},{value:"Gather <code>clientId</code>",id:"gather-clientid",level:4},{value:"Gather <code>issuer</code>",id:"gather-issuer",level:4},{value:"Gather <code>jwks_uri</code>",id:"gather-jwks_uri",level:4},{value:"Create External JWT Signer",id:"create-external-jwt-signer",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Microsoft Entra ID for OpenZiti BrowZer"),(0,r.kt)("meta",{name:"description",content:"How to configure Microsoft Entra ID for OpenZiti BrowZer."})),(0,r.kt)("img",{src:"/icons/logo-entra.jpg",alt:"How to configure Microsoft Entra ID for OpenZiti BrowZer",width:"20%"}),(0,r.kt)("h3",{id:"get-an-entra-id-account"},"Get an Entra ID Account"),(0,r.kt)("p",null,"If you don't already have an account you can sign up at ",(0,r.kt)("a",{parentName:"p",href:"https://entra.microsoft.com/"},"https://entra.microsoft.com/")),(0,r.kt)("h3",{id:"add-a-new-application"},"Add a new Application"),(0,r.kt)("p",null,'Once you have an Azure account, click on the "Entra" icon in the navbar:'),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(59454).Z,width:"2174",height:"382"}))),(0,r.kt)("br",null),'Then click on the "App Registrations" item in the left navbar:',(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra App Registrations",src:n(61157).Z,width:"532",height:"1086"}))),(0,r.kt)("br",null),'Then Click "New registration":',(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra New registration",src:n(33404).Z,width:"1650",height:"166"}))),(0,r.kt)("p",null,"Now Register an Application:"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," of the application, enter the URL where you will be hosting your browZer bootstrapper. For the example used in this documentation, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://entra-demo.ziti.netfoundry.io")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Supported account types"),", click the top option (",(0,r.kt)("inlineCode",{parentName:"p"},"single tenant"),")"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Redirect URI"),", make sure to select ",(0,r.kt)("inlineCode",{parentName:"p"},"SPA")," and then enter the URL where you will be hosting your browZer bootstrapper. For the example used in this documentation, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://entra-demo.ziti.netfoundry.io")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra Register an Application",src:n(80607).Z,width:"1676",height:"1370"}))),(0,r.kt)("p",null,"Once all the above fields have been filled in, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register")," button at the bottom of the form."),(0,r.kt)("h3",{id:"token-configuration"},"Token configuration"),(0,r.kt)("p",null,'Then click on the "Token configuration" item in the left navbar:'),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(4931).Z,width:"270",height:"518"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,'Then click "Add optional claim":'),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(24642).Z,width:"407",height:"131"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Then select ",(0,r.kt)("inlineCode",{parentName:"p"},"Access")," as the token type, and select ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," from the list of claims."),(0,r.kt)("p",null,"Then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," button at the bottom of the form."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(17906).Z,width:"557",height:"894"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"A form will appear. Select the checkbox ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft Graph email permission"),",\nThen click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," button."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(44162).Z,width:"576",height:"210"}))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"expose-an-api"},"Expose an API"),(0,r.kt)("p",null,'Then click on the "Expose an API" item in the left navbar:'),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(51349).Z,width:"260",height:"507"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Click  ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a scope")),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(89332).Z,width:"336",height:"323"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application ID URI"),", Entra will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"api://<YOUR_CLIENT_ID>"),". ",(0,r.kt)("strong",{parentName:"p"},"You should accept this default value and not alter it.")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(81601).Z,width:"1152",height:"446"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save and continue"),"."),(0,r.kt)("p",null,"Then, on the next form:"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scope name"),", enter ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenZiti.BrowZer"),"."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Who can consent"),", choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Admins and users"),"."),(0,r.kt)("p",null,"Enter what you like for the descriptions."),(0,r.kt)("p",null,"Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled"),"."),(0,r.kt)("p",null,"Then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add scope")," button at the borrom of the form."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(74078).Z,width:"570",height:"891"}))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"owners"},"Owners"),(0,r.kt)("p",null,'Then click on the "Owners" item in the left navbar:'),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(58860).Z,width:"262",height:"508"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Add yourself as an owner of the application:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(27044).Z,width:"1027",height:"285"}))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"api-permissions"},"API permissions"),(0,r.kt)("p",null,'Then click on the "API permissions" item in the left navbar:'),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(21802).Z,width:"251",height:"513"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"User.Read")," permission is not needed for browZer, so you may use the 3-dot menu on the right side to remove it."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(34768).Z,width:"1210",height:"286"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a permission"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(23712).Z,width:"548",height:"263"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now click ",(0,r.kt)("inlineCode",{parentName:"p"},"My APIs"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(59976).Z,width:"466",height:"148"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now click the item representing the URL where you will be hosting your browZer bootstrapper. For the example used in this documentation, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://entra-demo.ziti.netfoundry.io")),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(84380).Z,width:"831",height:"318"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Select the checkbox for ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenZiti.BrowZer"),", then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add permissions")," button at the bottom of the form."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(37991).Z,width:"760",height:"888"}))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"manifest"},"Manifest"),(0,r.kt)("p",null,'Then click on the "Manifest" item in the left navbar:'),(0,r.kt)("p",null,"Now click ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft Graph App Manifest"),", then scroll the JSON down to line 31 where you see ",(0,r.kt)("inlineCode",{parentName:"p"},"requestedAccessTokenVersion"),". This field defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".\nChange the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". This is extremely important. Failure to complete this step will results in invalid ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),"'s being produced by Entra during the ",(0,r.kt)("inlineCode",{parentName:"p"},"PKCE")," process performed between browZer and Entra when a user authenticates."),(0,r.kt)("p",null,"Then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entra icon",src:n(72600).Z,width:"1016",height:"590"}))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"gather-idp-information"},"Gather IdP Information"),(0,r.kt)("p",null,"Your OpenZiti network must be configured to become aware of your Entra identity provider.  OpenZiti refers to the identity provider as an ",(0,r.kt)("inlineCode",{parentName:"p"},"External JWT Signer"),".  Before you can set up the new JWT signer, you must gather some information from the new Entra Application that you just created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientId")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"issuer")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"jwks_uri"),(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("h4",{id:"gather-clientid"},"Gather ",(0,r.kt)("inlineCode",{parentName:"h4"},"clientId")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"clientID")," value can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Overview")," tab of the Application you Registered above:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auth0 clientId",src:n(34366).Z,width:"827",height:"455"}))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"gather-issuer"},"Gather ",(0,r.kt)("inlineCode",{parentName:"h4"},"issuer")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"issuer")," can be found via the openid-configuration endpoint that all OIDC-compliant identity providers expose.  "),(0,r.kt)("p",null,"The openid-configuration endpoint URL for Entra looks like this:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://login.microsoftonline.com/<YOUR_TENANT_ID>/v2.0/.well-known/openid-configuration"))),(0,r.kt)("p",null,"where the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_TENANT_ID>")," can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Overview")," tab of the Application you Registered above:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auth0 Domain",src:n(78849).Z,width:"827",height:"455"}))),(0,r.kt)("p",null,"When you enter the openid-configuration endpoint URL (",(0,r.kt)("inlineCode",{parentName:"p"},"https://login.microsoftonline.com/<YOUR_TENANT_ID>/v2.0/.well-known/openid-configuration"),") into a browser, you will receive a response resembling the following:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auth0 OIDC config",src:n(24615).Z,width:"897",height:"509"}))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Take note of the ",(0,r.kt)("inlineCode",{parentName:"p"},"issuer")," value."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"gather-jwks_uri"},"Gather ",(0,r.kt)("inlineCode",{parentName:"h4"},"jwks_uri")),(0,r.kt)("p",null,"Take note of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwks_uri")," value returned from the above openid-configuration endpoint URL."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"create-external-jwt-signer"},"Create External JWT Signer"),(0,r.kt)("p",null,"Using the values described above, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI to configure an external JWT signer that represents your Auth0 identity provider.  You can find details on how to do this in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/browzer/"},"BrowZer Quickstart documentation")))}u.isMDXComponent=!0},59454:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-1-af10f1d9402901e11da5e16582a38856.jpg"},44162:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-10-d8d244767d311928799ebe81135e13b2.jpg"},51349:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-11-49081d561ef99da2d81150862feba073.jpg"},89332:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-12-6b64601b3d8225e4c31f8cea45d14eb6.jpg"},74078:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-14-539fa56cf4500cf79d333556c31ab365.jpg"},21802:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-15-802b2bfc9a5f1ccb81fbe4183f3cfc92.jpg"},34768:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-16-192c6aed34a3c565c8ce4d8001270702.jpg"},23712:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-17-a7c8d10314e632f9cd9ad1da23101bd4.jpg"},58860:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-18-1fc20568005576dedbd8cf347b70e836.jpg"},27044:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-19-18e9c2d6a39ae58b48b4346bf7046f1b.jpg"},59976:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-22-fb114d451eac23de425a20f97d6541fb.jpg"},84380:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-23-c019d346a6172b89efeaaddede70c050.jpg"},37991:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-24-2189095a0c3edea7ab3f0f9b6eb23a7b.jpg"},72600:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-26-710b5061cc4db3d1d19bcfa2fccc626d.jpg"},34366:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-27-3af9cdf221b26a98612357ad750e6878.jpg"},78849:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-28-363cd9852b828a6b98862d7f01e1755b.jpg"},24615:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-29-b53a9364376b961dd78edcff284de9bd.jpg"},61157:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-3-6f1b2cd2c576b06e997f50ea197f5c6b.jpg"},33404:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-4-676d4d7817cdc7075024f6c109882aea.jpg"},80607:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-5-99ebc0511ddd17b61a175a4912ffd8e8.jpg"},4931:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-7-8cbe47d91f3808d47ad678e0b162deab.jpg"},24642:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-8-65e1fa67a8f6a610b22fb2db758d563c.jpg"},17906:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-9-9c7a75b5cc44f928ac8ebd9c49758b65.jpg"},81601:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/entra-scope-c4a60ccd4626fc861e7d06f44fd09f13.jpg"}}]);