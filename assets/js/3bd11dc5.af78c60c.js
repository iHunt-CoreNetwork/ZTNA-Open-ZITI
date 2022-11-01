"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),i=r(6010);const o="tabItem_Ymn6";function a(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,a),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),i=r(7294),o=r(6010),a=r(2389),l=r(7392),c=r(7094),s=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:a,defaultValue:d,values:m,groupId:y,className:f}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,l.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,c.U)(),[w,E]=(0,i.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=y){const e=v[y];null!=e&&e!==w&&b.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,r=C.indexOf(t),n=b[r].value;n!==w&&(O(t),E(n),null!=y&&N(y,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;r=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=C[t]??C[C.length-1];break}}null==(t=r)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},f)},b.map((e=>{let{value:t,label:r,attributes:a}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:P,onClick:T},a,{className:(0,o.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,i.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,a.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var n=r(7462),i=(r(7294),r(3905)),o=r(5488),a=r(5162);const l={toc:[]};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Ziti Policies"'),(0,i.kt)("li",{parentName:"ol"},'It should already be selected, but if not, on the top nav bar, click "Edge Router Policies"'),(0,i.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Edge Router Policy'),(0,i.kt)("li",{parentName:"ol"},'Choose a name for the Edge Router Policy, such as "My Edge Router Policy"'),(0,i.kt)("li",{parentName:"ol"},"Enter the edge routers you want to include in the policy",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Specific edge routers can be referenced by ID or name using ",(0,i.kt)("inlineCode",{parentName:"li"},"@"),".  For example, an edge router called ",(0,i.kt)("inlineCode",{parentName:"li"},"us-east-4")," can be referenced using ",(0,i.kt)("inlineCode",{parentName:"li"},"@us-east-4"),". "),(0,i.kt)("li",{parentName:"ol"},"Edge routers can be referenced by role attribute using ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),". For example, any edge router which has the ",(0,i.kt)("inlineCode",{parentName:"li"},"us-seast")," role attribute will be included if ",(0,i.kt)("inlineCode",{parentName:"li"},"#us-east")," is included in the edge routers roles list."))),(0,i.kt)("li",{parentName:"ol"},"Enter the identities you want to include in the policy",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Specific identities can be referenced by ID or name using ",(0,i.kt)("inlineCode",{parentName:"li"},"@"),".  For example, as identity called ",(0,i.kt)("inlineCode",{parentName:"li"},"jsmith-desktop")," can be referenced using ",(0,i.kt)("inlineCode",{parentName:"li"},"@jsmith-desktop"),". "),(0,i.kt)("li",{parentName:"ol"},"Identities can be referenced by role attribute using ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),". For example, any identity which has the ",(0,i.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,i.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the identities roles list."))),(0,i.kt)("li",{parentName:"ol"},"Specify the role semantic",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If you select ",(0,i.kt)("inlineCode",{parentName:"li"},"Has Any Role")," then if you specify multiple roles then all entities which include ",(0,i.kt)("strong",{parentName:"li"},"any")," of the roles will be included."),(0,i.kt)("li",{parentName:"ol"},"If you select ",(0,i.kt)("inlineCode",{parentName:"li"},"Must Have All Roles"),", then if you specify multiple roles then only entities which include ",(0,i.kt)("strong",{parentName:"li"},"all")," of the given roles will be included    "))),(0,i.kt)("li",{parentName:"ol"},"Click save")))}c.isMDXComponent=!0;const s={toc:[]};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To create an Edge Router Policy using the CLI issue the following commands. (ensure you are ",(0,i.kt)("a",{parentName:"p",href:"/docs/manage/cli/logging-in"},"logged in"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Create an edge router policy named 'my-policy' which allows all identities to use all edge-routers \nziti edge create edge-router-policy my-policy --identity-roles '#all' --edge-router-roles '#all'\n")))}u.isMDXComponent=!0;const p={},d="Creating an Edge Router Policy",m={unversionedId:"core-concepts/security/authorization/policies/creating-edge-router-policies",id:"core-concepts/security/authorization/policies/creating-edge-router-policies",title:"Creating an Edge Router Policy",description:"",source:"@site/docs/core-concepts/security/authorization/policies/creating-edge-router-policies.mdx",sourceDirName:"core-concepts/security/authorization/policies",slug:"/core-concepts/security/authorization/policies/creating-edge-router-policies",permalink:"/docs/core-concepts/security/authorization/policies/creating-edge-router-policies",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/security/authorization/policies/creating-edge-router-policies.mdx",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Policies",permalink:"/docs/core-concepts/security/authorization/policies/overview"},next:{title:"Creating a Service Edge Router Policy",permalink:"/docs/core-concepts/security/authorization/policies/creating-service-edge-router-policies"}},y={},f=[],g={toc:f};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-an-edge-router-policy"},"Creating an Edge Router Policy"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"tabid-new-edge-router-policy-ui",label:"New Edge Router Policy via UI",mdxType:"TabItem"},(0,i.kt)(c,{mdxType:"CreateERPUIMD"})),(0,i.kt)(a.Z,{value:"tabid-new-edge-router-policy-cli",label:"New Edge Router Policy via CLI",mdxType:"TabItem"},(0,i.kt)(u,{mdxType:"CreateERPCLIMD"}))))}b.isMDXComponent=!0}}]);