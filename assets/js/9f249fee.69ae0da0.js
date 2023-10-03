"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},l="Troubleshooting",a={unversionedId:"reference/tunnelers/linux/linux-tunnel-troubleshooting",id:"reference/tunnelers/linux/linux-tunnel-troubleshooting",title:"Troubleshooting",description:"Increase log level",source:"@site/docs/reference/tunnelers/linux/linux-tunnel-troubleshooting.md",sourceDirName:"reference/tunnelers/linux",slug:"/reference/tunnelers/linux/linux-tunnel-troubleshooting",permalink:"/docs/reference/tunnelers/linux/linux-tunnel-troubleshooting",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/linux/linux-tunnel-troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Options and Modes",permalink:"/docs/reference/tunnelers/linux/linux-tunnel-options"},next:{title:"Deployments",permalink:"/docs/reference/deployments/"}},s={},u=[{value:"Increase log level",id:"increase-log-level",level:2},{value:"Systemd service won&#39;t start or keeps restarting",id:"systemd-service-wont-start-or-keeps-restarting",level:2},{value:"Intercepting or hosting not working",id:"intercepting-or-hosting-not-working",level:2},{value:"Process keeps crashing",id:"process-keeps-crashing",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"increase-log-level"},"Increase log level"),(0,i.kt)("p",null,"Set the log level to DEBUG to identify the activity that is occurring at the same time as the problem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'# set the logLevel to "debug" in /var/lib/ziti/config.json\nsudo -u ziti ziti-edge-tunnel set_log_level --loglevel DEBUG\n')),(0,i.kt)("p",null,"The tunneler obeys the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/ziti/config.json"),". The initial value may be set with ",(0,i.kt)("inlineCode",{parentName:"p"},"run\n--verbose 4"),", but setting this option on subsequent runs has no effect on log level."),(0,i.kt)("p",null,"Create a log file from the current systemd service invocation to share with collaborators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(set -euxo pipefail; \nZITI_VERSION=$(/opt/openziti/bin/ziti-edge-tunnel version); \njournalctl _SYSTEMD_INVOCATION_ID=$(\n  systemctl show -p InvocationID --value ziti-edge-tunnel-default.service) -l --no-pager \\\n  | tee /tmp/ziti-edge-tunnel-single-${ZITI_VERSION#v}.log \\\n  | gzip > /tmp/ziti-edge-tunnel-single-${ZITI_VERSION#v}.log.gz;\n)\n")),(0,i.kt)("h2",{id:"systemd-service-wont-start-or-keeps-restarting"},"Systemd service won't start or keeps restarting"),(0,i.kt)("p",null,"Reload the systemd service unit definitions to rule out a stale definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl daemon-reload\n")),(0,i.kt)("p",null,"Inspect the service unit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl cat ziti-edge-tunnel.service\n")),(0,i.kt)("p",null,"Check the service status for an error message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl status ziti-edge-tunnel.service\n")),(0,i.kt)("p",null,"Monitor the service logs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sudo journalctl -u ziti-edge-tunnel.service\n")),(0,i.kt)("h2",{id:"intercepting-or-hosting-not-working"},"Intercepting or hosting not working"),(0,i.kt)("p",null,"Inspect the identity and router info for a running tunneler process. This creates a file named like ",(0,i.kt)("inlineCode",{parentName:"p"},"{{identity name}}.ziti"),"\nfor each loaded identity. Each file summarizes the available services and router connections for the identity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sudo -u ziti ziti-edge-tunnel dump -d /tmp/ziti-dump-dir/\n")),(0,i.kt)("p",null,"Find tunneler's nameserver IP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ resolvectl --interface=ziti0 dns\nLink 19 (tun0): 100.64.0.2\n")),(0,i.kt)("p",null,"Query the Ziti nameserver to find the intercept IP address for a service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ dig +noall +answer my.ziti.service.example.com @100.64.0.2\n my.ziti.service.example.com. 60 IN    A       100.64.0.3\n")),(0,i.kt)("p",null,"The tunneler provides end-to-end TCP handshake. Test the service's ability to accept connections even if it does not\nprovide a greeting or banner as shown in the OpenSSH server example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# wait up to 3 seconds for a TCP handshake on port 443\n$ ncat -vzw3 100.64.0.3 443\nNcat: Connected to 100.64.0.3:443.\nNcat: 0 bytes sent, 0 bytes received in 0.08 seconds.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# wait up to 3 seconds for an OpenSSH server greeting on port 22\n$ ncat -vw3 100.64.0.3 22\nSSH-2.0-OpenSSH_7.4\n")),(0,i.kt)("h2",{id:"process-keeps-crashing"},"Process keeps crashing"),(0,i.kt)("p",null,"A crash may be caused by a segmentation fault. If saving a Corefile is enabled, Linux will create a core dump file\naccording to this pattern file: ",(0,i.kt)("inlineCode",{parentName:"p"},"/proc/sys/kernel/core_pattern"),". Ubuntu configures this to use\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.ubuntu.com/Apport"},"Apport"),". Read more about ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Core_dump"},"core dumps"),"."),(0,i.kt)("p",null,"Please raise ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-tunnel-sdk-c/issues/"},"a GitHub issue")," if the tunneler crashes."))}d.isMDXComponent=!0}}]);