"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,v=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?i.createElement(v,a(a({ref:t},u),{},{components:n})):i.createElement(v,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={title:"Zero Trust Host Access"},a="Your First Service - Zero Trust Host Access",l={unversionedId:"quickstarts/services/ztha",id:"quickstarts/services/ztha",title:"Zero Trust Host Access",description:'This document will demonstrate how to successfully deploy and secure an existing, "brown field" application using OpenZiti. You want to',source:"@site/docs/quickstarts/services/ztha.md",sourceDirName:"quickstarts/services",slug:"/quickstarts/services/ztha",permalink:"/docusaurus/docs/quickstarts/services/ztha",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/quickstarts/services/ztha.md",tags:[],version:"current",frontMatter:{title:"Zero Trust Host Access"},sidebar:"rootSidebar",previous:{title:"Starting With Services",permalink:"/docusaurus/docs/quickstarts/services/"},next:{title:"Core Concepts",permalink:"/docusaurus/docs/core-concepts/"}},s={},c=[{value:"Solution Overview",id:"solution-overview",level:2},{value:"Simple HTTP Solution Overview - Before Ziti<br/>",id:"simple-http-solution-overview---before-ziti",level:3},{value:"Simple HTTP Solution - After Ziti",id:"simple-http-solution---after-ziti",level:3},{value:"Implementing the Service",id:"implementing-the-service",level:2},{value:"Prerequisite - OpenZiti Network",id:"prerequisite---openziti-network",level:3},{value:"Prerequisite - HTTP Server",id:"prerequisite---http-server",level:3},{value:"Prerequisite - HTTP Client Tunneller",id:"prerequisite---http-client-tunneller",level:3},{value:"Prerequisite - HTTP Server Tunneller",id:"prerequisite---http-server-tunneller",level:3},{value:"Configuring the Overlay - Overview",id:"configuring-the-overlay---overview",level:3},{value:"Configuring the Overlay Using Ziti CLI",id:"configuring-the-overlay-using-ziti-cli",level:3},{value:"HTTP Server IP/DNS",id:"http-server-ipdns",level:4},{value:"HTTP Server Identity",id:"http-server-identity",level:4},{value:"Configuring the Overlay Using Ziti Admin Console",id:"configuring-the-overlay-using-ziti-admin-console",level:3},{value:"Testing Everything Works",id:"testing-everything-works",level:3}],u={toc:c};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-service---zero-trust-host-access"},"Your First Service - Zero Trust Host Access"),(0,r.kt)("p",null,"This document will demonstrate how to successfully deploy and secure an existing, \"brown field\" application using OpenZiti. You want to\nsecure an application where you don't control the source or where you don't want to (or cannot) integrate an OpenZiti SDK into the\napplication. These sorts of services are often web-based, so we'll focus here at exposing a web server. It's important to keep in mind\nthat OpenZiti is a holistic zero trust networking solution. You can absolutely expose applications that are not web-based. For now, we'll start with a web server since that's a common need. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"solution-overview"},"Solution Overview"),(0,r.kt)("p",null,"Before we get into using OpenZiti, let's take a moment and review what the solution is like before we apply any zero trust networking\nprinciples. We will use some sort of http client, connect it over a network. The exact network does not matter. OpenZiti is applicable\nto any network be it host network, local network, the internet, private network, etc. "),(0,r.kt)("h3",{id:"simple-http-solution-overview---before-ziti"},"Simple HTTP Solution Overview - Before Ziti",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"before OpenZiti",src:n(6066).Z,width:"800",height:"316"})),(0,r.kt)("p",null,"The important aspect of this diagram is to notice that the HTTP server is provisioned on the ",(0,r.kt)("a",{parentName:"p",href:"/glossary/glossary#underlay"},"underlay"),"\nnetwork and requires a hole through the firewall to allow clients to connect."),(0,r.kt)("h3",{id:"simple-http-solution---after-ziti"},"Simple HTTP Solution - After Ziti"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"after OpenZiti",src:n(5463).Z,width:"800",height:"316"})),(0,r.kt)("p",null,"After OpenZiti, we can see that there is no longer an open firewall to allow access to the HTTP server. Instead, the HTTP client\nwill have its network requests intercepted by an OpenZiti tunneller. Once intercepted, the packets are then delivered to the OpenZiti\n",(0,r.kt)("a",{parentName:"p",href:"/glossary/glossary#network-overlay-overlay"},"overlay")," fabric which has the responsibility to deliver the intercepted packets to the\ntarget identity. Once delivered to the target identity, in this example, the traffic will offload back to the underlay network to be\nsent to the final destination: the HTTP Server."),(0,r.kt)("p",null,"With an understanding of what we are looking to accomplish in this guide, let's get into it!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"implementing-the-service"},"Implementing the Service"),(0,r.kt)("h3",{id:"prerequisite---openziti-network"},"Prerequisite - OpenZiti Network"),(0,r.kt)("p",null,"You will need an OpenZiti overlay network in place before you can complete this guide. If you do not have an\nOpenZiti overlay network provisioned yet, ",(0,r.kt)("a",{parentName:"p",href:"../network/"},"follow a quickstart")," and get a network up and running."),(0,r.kt)("h3",{id:"prerequisite---http-server"},"Prerequisite - HTTP Server"),(0,r.kt)("p",null,"You'll need an HTTP server which you plan to connect your HTTP client to. There are numerous ways to\nbring an HTTP server online but for this guide I have chosen to use docker and deploy a very simple HTTP application. The server will\nsimply print out the \"docker whale\" when it's connected to. (This guide will not teach you how to install docker, nor how to install an\nHTTP server which is listening)  If you are familiar with docker and wish to use the exact same example as shown here, simply run the\ncontainer with: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d --rm --name web-test -p 80:8000 crccheck/hello-world"),". "),(0,r.kt)("p",null,"Alternatively, if you have used the ",(0,r.kt)("a",{parentName:"p",href:"../network/local-docker-compose"},"docker-compose quickstart")," to provision your\nOpenZiti overlay network, you will have this HTTP server available to use immediately. "),(0,r.kt)("h3",{id:"prerequisite---http-client-tunneller"},"Prerequisite - HTTP Client Tunneller"),(0,r.kt)("p",null,"You will need to install an ",(0,r.kt)("a",{parentName:"p",href:"../../core-concepts/clients/tunnelers"},"OpenZiti tunneler")," on the machine which represents the HTTP client. Later on\nwe'll create an identity for this tunneller and use the identity to access the HTTP server. "),(0,r.kt)("h3",{id:"prerequisite---http-server-tunneller"},"Prerequisite - HTTP Server Tunneller"),(0,r.kt)("p",null,"You will need to install an ",(0,r.kt)("a",{parentName:"p",href:"../../core-concepts/clients/tunnelers"},"OpenZiti tunneler")," on the machine which represents the HTTP server. Later on\nwe'll create an identity for this tunneller and use the identity to access the HTTP server. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'If you used the docker-compose quickstart the "private" edge routers are configured as tunnelers and will not require you to deploy\nanother tunneler nor will you need to create another identity.')),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"prerequisite---cli"},"Prerequisite - CLI"),(0,r.kt)("p",{parentName:"blockquote"},"If you plan to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI tool, you will either need to download and get the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," executable on your path. If you have\nfollowed a quickstart, this will have been done for you and the executable will be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ziti/quickstart/$(hostname)/ziti-bin/"),".\nAlso, the .env file the quickstart emits can be used to put this folder on your path by simply sourcing that file. For example, if you\nfollowed either the ",(0,r.kt)("a",{parentName:"p",href:"../network/local-no-docker"},"Local - No Docker")," or\n",(0,r.kt)("a",{parentName:"p",href:"../network/hosted"},"Host Ziti Anywhere"),' quickstart, you should have a file that can be sourced. Here is an example of\nmy personal "Local - No Docker" result when sourcing that file:'),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ source ~/.ziti/quickstart/$(hostname)/$(hostname).env\n"))),(0,r.kt)("p",null,"adding /home/cd/.ziti/quickstart/sg3/ziti-bin/ziti-v0.25.6 to the path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nIf you are using a docker-based example you can exec into the controller where the `ziti` CLI tool will be available and this file will \nbe sourced for you as well. Here's an example when I use docker to exec into my controller locally:\n```text\n$ docker exec -it docker_ziti-controller_1 bash\n\nadding /openziti/ziti-bin to the path\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"configuring-the-overlay---overview"},"Configuring the Overlay - Overview"),(0,r.kt)("p",null,"With our overlay network ready and with two tunneling applications deployed and ready to be used, we can start to configure our solution."),(0,r.kt)("p",null,"Here is an overview of the steps we will follow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Create an identity for the HTTP client and assign an attribute "http-clients". We\'ll use this attribute when authorizing the clients to\naccess the HTTP service'),(0,r.kt)("li",{parentName:"ol"},"Create an identity for the HTTP server if you are not using an edge-router with the tunneling option enabled (see below). Also note\nthat if you are using the docker-compose quickstart or just plan to use an edge-router with tunneling enabled you can also skip this\nstep."),(0,r.kt)("li",{parentName:"ol"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"/docs/core-concepts/config-store/overview"},"intercept.v1 config"),". This config is used to instruct the client-side tunneler how\nto correctly intercept the targeted traffic and put it onto the overlay."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"/docs/core-concepts/config-store/overview"},"host.v1 config"),". This config is used instruct the server-side tunneler how to offload the\ntraffic from the overlay, back to the underlay."),(0,r.kt)("li",{parentName:"ol"},"Create a service to associate the two configs created previously into a service."),(0,r.kt)("li",{parentName:"ol"},'Create a service-policy to authorize "HTTP Clients" to "dial" the service representing the HTTP server.'),(0,r.kt)("li",{parentName:"ol"},'Create a service-policy to authorize the "HTTP Server" to "bind" the service representing the HTTP server.'),(0,r.kt)("li",{parentName:"ol"},"Start the server-side tunneller (unless using the docker-compose quickstart) with the HTTP server identity, providing access to the\nHTTP server."),(0,r.kt)("li",{parentName:"ol"},"Start the client-side tunneller using the HTTP client identity."),(0,r.kt)("li",{parentName:"ol"},"Access the HTTP server securely over the OpenZiti zero trust overlay")),(0,r.kt)("p",null,"We can do all these steps using the OpenZiti CLI tool: ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti"),". We can also accomplish this using the OpenZiti Admin Console. We'll\ndemonstrate doing it both ways now."),(0,r.kt)("h3",{id:"configuring-the-overlay-using-ziti-cli"},"Configuring the Overlay Using Ziti CLI"),(0,r.kt)("p",null,"Here you can find the steps necessary to configure your overlay network. You can copy/paste and run them all at once, or you can go\nslowly and run one command at a time to see how each command works. These commands are all based on a shell similar to bash. If you are\nnot using bash you'll need to adapt these scripts to your shell."),(0,r.kt)("h4",{id:"http-server-ipdns"},"HTTP Server IP/DNS"),(0,r.kt)("p",null,"Note that step 4 below requires you to have set the variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"http_server"),". This variable represents the location of the HTTP\nserver relative to the OpenZiti tunneler you're using. Look at the diagram above. You will want to supply the IP/FQDN of the server\nwhich runs the HTTP server that is relative to the tunneler. As an example, if you were to use the docker-compose quickstart and are\ngoing to reference the pre-deployed HTTP server that comes with it, you'd set ",(0,r.kt)("inlineCode",{parentName:"p"},"http_server")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"web-test-blue")," since that is a valid\nname of the container running the HTTP server."),(0,r.kt)("h4",{id:"http-server-identity"},"HTTP Server Identity"),(0,r.kt)("p",null,"Note that step 7 below requires you to have set the variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"http_server_id"),". All of the quickstarts provision an edge-router\nwith the tunneler option (",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),") enabled. This means that edge-router is configured to serve as a tunneller. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti edge list \nidentities")," to find the name of the identity associated to the router."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# login to your controller - replace the host/port with the correct value\nziti edge login localhost:1280\n\n# optional login: \n# if you\'re using docker and have exec\'ed into your controller using docker you should be able to run the alias `zitiLogin` to login\n# optional login:\n# if you\'ve sourced the .env file from a quickstart you should be able to run the alias `zitiLogin` to login\n\n# 1. Create an identity for the HTTP client and assign an attribute "http-clients". We\'ll use this attribute when authorizing the clients to\n#  access the HTTP service\nziti edge create identity user http-client -a \'http-clients\' -o http.client.jwt \n\n#2. Create an identity for the HTTP server if you are not using an edge-router with the tunneling option enabled\nziti edge create identity user http-server -o http.server.jwt\n\n#3. Create an intercept.v1 config. This config is used to instruct the client-side tunneler how to correctly intercept \n#   the targeted traffic and put it onto the overlay.\nziti edge create config http.intercept.v1 intercept.v1 \'{"protocols":["tcp"],"addresses":["http.ziti"], "portRanges":[{"low":80, "high":80}]}\'\n    \n#4. Create a host.v1 config. This config is used instruct the server-side tunneler how to offload the traffic from \n#   the overlay, back to the underlay.\nziti edge create config http.host.v1 host.v1 \'{"protocol":"tcp", "address":"\'"${http_server}"\'", "port":8000}\'\n    \n#5. Create a service to associate the two configs created previously into a service.\nziti edge create service http.svc --configs http.intercept.v1,http.host.v1\n\n#6. Create a service-policy to authorize "HTTP Clients" to "dial" the service representing the HTTP server.\nziti edge create service-policy http.policy.dial Dial --service-roles "@http.svc" --identity-roles \'#http-clients\'\n\n#7. Create a service-policy to authorize the "HTTP Server" to "bind" the service representing the HTTP server.\nziti edge create service-policy http.policy.bind Bind --service-roles \'@http.svc\' --identity-roles "@${http_server_id}"\n\n#8. Start the server-side tunneller (unless using the docker-compose quickstart) with the HTTP server identity.\n#   [optional] if you don\'t use an edge-router as your tunneler, you will need to download and run the tunneler for your OS\n#   if you are using a ziti-router, skip to step 9 below\n# \n#   This step is dependant on platform. For this demo we\'ll be using a virtual machine running linux and we\'ll be using the\n#   ziti-edge-tunnel binary. Copy the http.server.jwt from step 2 to the server machine. For the example we\'ll use /tmp/http.server.jwt\n#\n# enroll the server identity using ziti-edge-tunnel\n./ziti-edge-tunnel enroll --jwt /tmp/http.server.jwt --identity /tmp/http.server.json\n# run ziti-edge-tunnel for the client\nsudo ./ziti-edge-tunnel run -i /tmp/http.server.json\n\n#9. Start the client-side tunneller using the HTTP client identity.\n#   This step is dependant on platform. For this demo we\'ll be using a virtual machine running linux and we\'ll be using the\n#   ziti-edge-tunnel binary. Copy the http.client.jwt from step 1 to the client machine. For the example we\'ll use /tmp/http.client.jwt\n#\n# enroll the client identity using ziti-edge-tunnel\n./ziti-edge-tunnel enroll --jwt /tmp/http.client.jwt --identity /tmp/http.client.json\n# run ziti-edge-tunnel for the client\nsudo ./ziti-edge-tunnel run -i /tmp/http.client.json\n\n#10. Access the HTTP server securely over the OpenZiti zero trust overlay\ncurl http.ziti\n<pre>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</pre>\n')),(0,r.kt)("h3",{id:"configuring-the-overlay-using-ziti-admin-console"},"Configuring the Overlay Using Ziti Admin Console"),(0,r.kt)("p",null,"-- COMING SOON --"),(0,r.kt)("h3",{id:"testing-everything-works"},"Testing Everything Works"),(0,r.kt)("p",null,'Once you have set everything up As shown in the last step above - at this point you should be able to run a curl statement or use a\nbrowser to access "http.ziti".'))}h.isMDXComponent=!0},5463:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/after-openziti-e32f63744fb7c586d5ccff8e1e5ebe8f.png"},6066:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/before-openziti-ed68cd54ee514d33f38a8664b6cf3d78.png"}}]);