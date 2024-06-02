"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={toc:[{value:"Container Image",id:"container-image",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Standalone Example",id:"standalone-example",level:3},{value:"Sidecar Example",id:"sidecar-example",level:3}]},a="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(a,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-ziti-router-in-docker"},"Run Ziti Router in Docker"),(0,o.kt)("p",null,"You can use this container image to run a Ziti Router in a Docker container."),(0,o.kt)("h2",{id:"container-image"},"Container Image"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-router")," image is thin and is based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-cli")," image, which only provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti"),"\nCLI. This ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti-router")," image adds an entrypoint that provides router bootstrapping when ",(0,o.kt)("inlineCode",{parentName:"p"},"ZITI_BOOTSTRAP=true")," and uses\nthe same defaults and options as the Linux package."),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"The included ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yml")," demonstrates how to bootstrap a router and documents the most relevant environment variables\nthat influence bootstrapping."),(0,o.kt)("h3",{id:"standalone-example"},"Standalone Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'# create the router, saving the enrollment token to a file\nziti edge create edge-router "router1" \\\n   --jwt-output-file=./router1.jwt\n\n# fetch the compose file for the ziti-router image\nwget https://get.openziti.io/dist/docker-images/ziti-router/compose.yml\n\nZITI_ENROLL_TOKEN="$(<./router1.jwt)" \\\nZITI_CTRL_ADVERTISED_ADDRESS=ctrl.127.21.71.0.sslip.io \\\nZITI_CTRL_ADVERTISED_PORT=1280 \\\nZITI_ROUTER_ADVERTISED_ADDRESS=router1.127.0.0.1.sslip.io \\\nZITI_ROUTER_PORT=3022 \\\n    docker compose up\n')),(0,o.kt)("h3",{id:"sidecar-example"},"Sidecar Example"),(0,o.kt)("p",null,"You can use this image as a sidecar container that provides Ziti DNS and TPROXY interception to another container. This\ncontrived example provides a web server that listens on port 8000 and a client that waits for the webserver to be\navailable. The client container shares a network interface with the router container and waits for the router to be\nhealthy before running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# fetch the compose file for the ziti-router image\nwget -O ./compose.router.yml https://get.openziti.io/dist/docker-images/ziti-router/compose.yml\n# fetch the router tproxy compose overrides files\nwget -O ./compose.tproxy.yml https://get.openziti.io/dist/docker-images/ziti-router/compose.override.yml\n# fetch the all-in-one quickstart compose file\nwget -O ./compose.quickstart.yml https://get.openziti.io/dock/all-in-one/compose.yml\n")),(0,o.kt)("p",null,"Patch the Compose project to use the quickstart network and provide a web server to test the hello service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"cat <<EOF >>./compose.tproxy.yml\n    # link the router to the quickstart network so it can reach the Ziti controller\n    networks:\n      - quickstart\n\n  # add a hello web server to use for a Ziti service target\n  hello:\n    image: openziti/hello-world\n    expose:\n      - 8000\n    networks:\n      - quickstart\n\n  # add a web client that waits for a healthy tproxy router\n  tproxy-demo-client:\n    image: busybox\n    network_mode: service:ziti-router\n    depends_on:\n      ziti-router:\n        condition: service_healthy\n    command: wget --output-document=- http://hello.internal/\nEOF\n")),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.tproxy.yml")," should look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"services:\n  ziti-router:\n    dns:\n      - 127.0.0.1\n      - 1.1.1.1\n    user: root\n    cap_add:\n      - NET_ADMIN\n    networks:\n      - quickstart\n\n  hello:\n    image: openziti/hello-world\n    expose:\n      - 8000\n    networks:\n      - quickstart\n\n  tproxy-demo-client:\n    image: busybox\n    network_mode: service:ziti-router\n    depends_on:\n      ziti-router:\n        condition: service_healthy\n    command: wget --output-document=- http://hello.internal/\n")),(0,o.kt)("p",null,"Define the Compose project files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"export COMPOSE_FILE=compose.router.yml:compose.tproxy.yml:compose.quickstart.yml\n")),(0,o.kt)("p",null,"Run the Ziti controller in the background with the all-in-one quickstart container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"docker compose up quickstart-check\n")),(0,o.kt)("p",null,"Start the hello web server listening on 8000."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"docker compose up hello --detach\n")),(0,o.kt)("p",null,"Log in to the Ziti controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ziti edge login 127.0.0.1:1280 -y -u admin -p admin\n")),(0,o.kt)("p",null,"Create a Ziti service for the hello web server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'ziti edge create config "hello-intercept-config" intercept.v1 \\\n  \'{"portRanges":[{"high":80,"low":80}],"addresses":["hello.internal"],"protocols":["tcp"]}\'\nziti edge create config "hello-host-config" host.v1 \\\n  \'{"address":"hello","port":8000,"forwardProtocol":true,"allowedProtocols":["tcp"]}\'\nziti edge create service "hello" \\\n  --configs "hello-intercept-config,hello-host-config" \\\n  --role-attributes \'hello.services\'\nziti edge create service-policy "hello-dial-policy" Dial \\\n  --semantic AnyOf \\\n  --service-roles \'#hello.services\' \\\n  --identity-roles \'#hello.clients\'\nziti edge create service-policy "hello-bind-policy" Bind \\\n  --semantic AnyOf \\\n  --service-roles \'#hello.services\' \\\n  --identity-roles \'#hello.servers\'\n')),(0,o.kt)("p",null,"Grant the quickstart router permission to bind (provide) the hello service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ziti edge update identity quickstart-router \\\n    --role-attributes=hello.servers\n")),(0,o.kt)("p",null,"Create a second Ziti router to use as a tproxy client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'ziti edge create edge-router "tproxy-router" \\\n   --jwt-output-file=./tproxy-router.jwt \\\n   --tunneler-enabled\n')),(0,o.kt)("p",null,"Grant the tproxy client permission to dial (consume) the hello service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ziti edge update identity tproxy-router \\\n    --role-attributes=hello.clients\n")),(0,o.kt)("p",null,"Simulate policies to check for authorization problems"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ziti edge policy-advisor services -q\n")),(0,o.kt)("p",null,"Run the demo client which triggers the run of the tproxy router because it is a dependency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'ZITI_ENROLL_TOKEN="$(<./tproxy-router.jwt)" \\\nZITI_ROUTER_MODE=tproxy \\\nZITI_CTRL_ADVERTISED_ADDRESS=quickstart \\\nZITI_CTRL_ADVERTISED_PORT=1280 \\\nZITI_ROUTER_PORT=3023 \\\nZITI_ROUTER_ADVERTISED_ADDRESS=ziti-router \\\n    docker compose up tproxy-demo-client\n')))}l.isMDXComponent=!0;const s={title:"Deploy the Router with Docker",sidebar_label:"Router"},c=void 0,p={unversionedId:"guides/deployments/docker/router",id:"guides/deployments/docker/router",title:"Deploy the Router with Docker",description:"",source:"@site/docs/guides/deployments/20-docker/20-router.mdx",sourceDirName:"guides/deployments/20-docker",slug:"/guides/deployments/docker/router",permalink:"/docs/guides/deployments/docker/router",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/20-docker/20-router.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Deploy the Router with Docker",sidebar_label:"Router"},sidebar:"docsSidebar",previous:{title:"Controller",permalink:"/docs/guides/deployments/docker/controller"},next:{title:"Console",permalink:"/docs/guides/deployments/docker/console"}},u={},d=[],m={toc:d},h="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"DockerRouterReadme"}))}k.isMDXComponent=!0}}]);