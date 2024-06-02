"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={toc:[{value:"Container Image",id:"container-image",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Example",id:"example",level:3}]},l="wrapper";function a(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-ziti-controller-in-docker"},"Run Ziti Controller in Docker"),(0,o.kt)("p",null,"You can use this container image to run a Ziti Controller in a Docker container."),(0,o.kt)("h2",{id:"container-image"},"Container Image"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-controller")," image is thin and is based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-cli")," image, which only provides the\n",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti-controller")," image adds an entrypoint that provides controller bootstrapping when\n",(0,o.kt)("inlineCode",{parentName:"p"},"ZITI_BOOTSTRAP=true")," and uses the same defaults and options as the Linux package."),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"The included ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yml")," demonstrates how to bootstrap a controller container."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"At a minimum, you must set the address and password options in the parent env or set every recurrence in the compose file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'# fetch the compose file for the ziti-router image\nwget https://get.openziti.io/dist/docker-images/ziti-controller/compose.yml\n\nZITI_PWD="mypass" \\\nZITI_CTRL_ADVERTISED_ADDRESS=ctrl.127.21.71.0.sslip.io \\\n    docker compose up\n')),(0,o.kt)("p",null,"After a few seconds, ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose ps"),' will show a "healthy" status for the controller.'),(0,o.kt)("p",null,"Then, you may log in to the controller using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ziti edge login ctrl.127.21.71.0.sslip.io:1280 -u admin -p mypass\n")))}a.isMDXComponent=!0;const c={title:"Deploy the Controller with Docker",sidebar_label:"Controller"},p=void 0,s={unversionedId:"guides/deployments/docker/controller",id:"guides/deployments/docker/controller",title:"Deploy the Controller with Docker",description:"",source:"@site/docs/guides/deployments/20-docker/10-controller.mdx",sourceDirName:"guides/deployments/20-docker",slug:"/guides/deployments/docker/controller",permalink:"/docs/guides/deployments/docker/controller",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/20-docker/10-controller.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Deploy the Controller with Docker",sidebar_label:"Controller"},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/docs/category/docker"},next:{title:"Router",permalink:"/docs/guides/deployments/docker/router"}},d={},u=[],m={toc:u},y="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a,{mdxType:"DockerControllerReadme"}))}k.isMDXComponent=!0}}]);