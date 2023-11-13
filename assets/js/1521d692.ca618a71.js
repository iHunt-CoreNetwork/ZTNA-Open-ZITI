"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7085],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>g});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var a=r.createContext({}),d=function(e){var t=r.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(i),b=n,g=u["".concat(a,".").concat(b)]||u[b]||p[b]||l;return i?r.createElement(g,o(o({ref:t},s),{},{components:i})):r.createElement(g,o({ref:t},s))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,o=new Array(l);o[0]=b;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var d=2;d<l;d++)o[d]=i[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}b.displayName="MDXCreateElement"},9454:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=i(87462),n=(i(67294),i(3905));const l={authors:"dovholuknf"},o="Wildcard DNS Cheatsheet",c={permalink:"/blog/wildcard-dns/cheatsheet",source:"@site/blog/wildcard-dns/cheatsheet.md",title:"Wildcard DNS Cheatsheet",description:"",date:"2023-11-13T22:09:50.000Z",formattedDate:"November 13, 2023",tags:[],readingTime:1.71,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Golang Aha! Moments",permalink:"/blog/golang-aha/article"},nextItem:{title:"Zitification",permalink:"/blog/zitification"}},a={authorsImageUrls:[void 0]},d=[],s={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'# ------------- start docker \ndocker-compose up\n\n# access the docker controller to create the necessary overlay\ndocker exec -it docker_ziti-controller_1 bash\n\n# ------------- log into the ziti cli\nzitiLogin\n\n# ------------- make at least one router to be public \nziti edge update edge-router ziti-edge-router -a "public"\n\n# ------------- allow all identities to use any edge router with the attribute "public"\nziti edge delete edge-router-policy all-endpoints-public-routers \nziti edge create edge-router-policy all-endpoints-public-routers --edge-router-roles "#public" --identity-roles "#all"\n\n# ------------- allows all edge-routers to access all services\nziti edge delete service-edge-router-policy all-routers-all-services\nziti edge create service-edge-router-policy all-routers-all-services --edge-router-roles "#all" --service-roles "#all"\n\nziti edge delete identity zititunneller-blue\nziti edge create identity device zititunneller-blue -o blue.jwt\nziti edge enroll blue.jwt\n\n# ------------- create a client - probably won\'t commit\nziti edge create identity device zdewclint -o zdewclint.jwt\n\n# from outside docker:\ndocker cp docker_ziti-controller_1:/openziti/zdewclint.jwt /mnt/v/temp/\n\n\n# attach a wholly different docker container with NET_ADMIN priv\n# so we can make a tun and provide access to the __blue__ network\ndocker run --cap-add=NET_ADMIN --device /dev/net/tun --name ziti-tunneler-blue --user root --network docker_zitiblue -v docker_ziti-fs:/openziti --rm -it openziti/quickstart /bin/bash\n\n# ------------- zititunneller-blue\napt install wget unzip\nwget https://github.com/openziti/ziti-tunnel-sdk-c/releases/latest/download/ziti-edge-tunnel-Linux_x86_64.zip\nunzip ziti-edge-tunnel-Linux_x86_64.zip\nclear\n./ziti-edge-tunnel run -i blue.json\n\n\nziti edge delete config "basic.dial"\nziti edge create config "basic.dial" intercept.v1 \'{"protocols":["tcp"],"addresses":["simple.web.test"], "portRanges":[{"low":80, "high":80}]}\'\n\nziti edge delete config "basic.bind"\nziti edge create config "basic.bind" host.v1      \'{"protocol":"tcp", "address":"web-test-blue","port":8000}\'\n\nziti edge delete service "basic.web.test.service"\nziti edge create service "basic.web.test.service" --configs "basic.bind,basic.dial"\n\nziti edge delete service-policy basic.web.test.service.bind.blue\nziti edge create service-policy basic.web.test.service.bind.blue Bind --service-roles "@basic.web.test.service" --identity-roles "@zititunneller-blue"\n\nziti edge delete service-policy basic.web.test.service.dial.zdew\nziti edge create service-policy basic.web.test.service.dial.zdew Dial --service-roles "@basic.web.test.service" --identity-roles "@zdewclint"\n\n\n\n\nziti edge delete config "wildcard.dial"\nziti edge create config "wildcard.dial" intercept.v1 \'{"protocols":["tcp"],"addresses":["*.blue"], "portRanges":[{"low":8000, "high":8000}]}\'\n\nziti edge delete config "wildcard.bind"\nziti edge create config "wildcard.bind" host.v1      \'{"forwardProtocol":true, "allowedProtocols":["tcp","udp"], "forwardAddress":true, "allowedAddresses":["*.blue"], "forwardPort":true, "allowedPortRanges":[ {"low":1,"high":32768}] }\'\n\nziti edge delete service "wildcard.web.test.service"\nziti edge create service "wildcard.web.test.service" --configs "wildcard.bind,wildcard.dial"\n\nziti edge delete service-policy wildcard.web.test.service.bind.blue\nziti edge create service-policy wildcard.web.test.service.bind.blue Bind --service-roles "@wildcard.web.test.service" --identity-roles "@zititunneller-blue"\n\nziti edge delete service-policy wildcard.web.test.service.dial.zdew\nziti edge create service-policy wildcard.web.test.service.dial.zdew Dial --service-roles "@wildcard.web.test.service" --identity-roles "@zdewclint"\n')))}p.isMDXComponent=!0}}]);