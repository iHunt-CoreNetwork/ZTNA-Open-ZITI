"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4891],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return i?n.createElement(h,a(a({ref:t},u),{},{components:i})):n.createElement(h,a({ref:t},u))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5452:(e,t,i)=>{i.d(t,{ZP:()=>a});var n=i(7462),o=(i(7294),i(3905));const r={toc:[{value:"PKI Troubleshooting",id:"pki-troubleshooting",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Define the verifyCertAgainstPool Function",id:"define-the-verifycertagainstpool-function",level:4},{value:"Validating the PKI",id:"validating-the-pki",level:3},{value:"Success",id:"success",level:4},{value:"Failure",id:"failure",level:4},{value:"Ziti Edge Router to Controller",id:"ziti-edge-router-to-controller",level:3},{value:"Variables to Establish Manually",id:"variables-to-establish-manually",level:4},{value:"Variables - Copy/Paste",id:"variables---copypaste",level:4},{value:"Commands to Verify PKI Configuration",id:"commands-to-verify-pki-configuration",level:4},{value:"Ziti Client to Controller - API",id:"ziti-client-to-controller---api",level:3},{value:"Variables to Establish Manually",id:"variables-to-establish-manually-1",level:4},{value:"Variables - Copy/Paste",id:"variables---copypaste-1",level:4},{value:"Commands to Verify PKI Configuration",id:"commands-to-verify-pki-configuration-1",level:4},{value:"Ziti Client to Ziti Edge Router - Data",id:"ziti-client-to-ziti-edge-router---data",level:3},{value:"Variables to Establish Manually",id:"variables-to-establish-manually-2",level:4},{value:"Variables - Copy/Paste",id:"variables---copypaste-2",level:4},{value:"Commands to Verify PKI Configuration",id:"commands-to-verify-pki-configuration-2",level:4}]};function a(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pki-troubleshooting"},"PKI Troubleshooting"),(0,o.kt)("p",null,"Configuring a Ziti Network's PKI can be confusing. Validating a single side of a mutual TLS connection is\nstraightforward it becomes tedious to ensure all the certificates and cas in use are valid when you have a fully\nconfigured Ziti Network.  It's the goal of this page to make diagnosing PKI issues eaiser. This guide will also use the\npaths you will find in the Ziti Edge - Developer Edition. Change paths accordingly."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The following steps are ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bash_(Unix_shell)"},"bash-based")," functions and use the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"openssl"),", ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/"},"ruby"),"\ncommands. If you don't have bash, openssl and ruby - this page is not for you! Do your best to follow along with the\nscripts and guidance herein or just make sure bash, openssl, ruby, and jq are installed. All of which are widely\navailable on linux/MacOS/Windows."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," commands are not strictly required. They are used to make it easy for you to copy/paste these\ncommands. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby")," command is used to translate yaml into json while the ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," command is used to pull the specific\nvalues out of the given files. You can certainly do the same manually (without ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jq"),") if you choose."),(0,o.kt)("h4",{id:"define-the-verifycertagainstpool-function"},"Define the verifyCertAgainstPool Function"),(0,o.kt)("p",null,"In your bash prompt copy and paste these two functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function yaml2json()\n{\n    ruby -ryaml -rjson -e \'puts JSON.pretty_generate(YAML.load(ARGF))\' $*\n}\n\nfunction verifyCertAgainstPool()\n{\n    if [[ "" == "$1" ]]\n    then\n        echo "Usage: verifyCertAgainstPool [cert to test] [ca pool to use]"\n        return 1\n    fi\n    \n    if [[ "" == "$2" ]]\n    then\n        echo "Usage: verifyCertAgainstPool [cert to test] [ca pool to use]"\n        return 1\n    fi\n\n    echo "    Verifying that this certificate:"\n    echo "        - $1"\n    echo "    is valid for this ca pool:"\n    echo "        - $2"\n    echo ""\n    openssl verify -partial_chain -CAfile "$2" "$1"\n    if [ $? -eq 0 ]; then\n        echo ""\n        echo "============      SUCCESS!      ============"\n    else\n        echo ""\n        echo "============ FAILED TO VALIDATE ============"\n    fi\n}\n')),(0,o.kt)("h3",{id:"validating-the-pki"},"Validating the PKI"),(0,o.kt)("p",null,"Every connection in a Ziti Network is mutally authenticated via X509 certificates. It is easiest to first identify the\ntwo components trying to communicate to isolate and minimize the configuration and files that need to be inspected.\nBelow you will find sections relevant to each of the pieces of Ziti which connect."),(0,o.kt)("p",null,"Each section will refer to a bash variable that is expected to be established before running the command. This variable\nis intended to make it easier for you to simply copy/paste the command and determine if the configuration is valid or\nnot."),(0,o.kt)("p",null,"Using the provided bash function above - you will see one of two results:"),(0,o.kt)("h4",{id:"success"},"Success"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"verifyCertAgainstPool /path/to/cert-to-test.cert /path/to/capool.pem\n    Verifying that this certificate:\n        - /path/to/cert-to-test.cert\n    is valid for this ca pool:\n        - /path/to/capool.pem\n\n/path/to/cert-to-test.cert: OK\n\n============      SUCCESS!      ============\n")),(0,o.kt)("h4",{id:"failure"},"Failure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"verifyCertAgainstPool /path/to/cert-to-test.cert /path/to/capool.pem\n    Verifying that this certificate:\n        - /path/to/cert-to-test.cert\n    is valid for this ca pool:\n        - /path/to/capool.pem\n\nC = US, ST = NC, L = Charlotte, O = NetFoundry, OU = Ziti, CN = 87f8cee9-b288-49f1-ab90-b664af29e17a\nerror 20 at 0 depth lookup: unable to get local issuer certificate\nerror /path/to/cert-to-test.cert: verification failed\n\n============ FAILED TO VALIDATE ============\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ziti-edge-router-to-controller"},"Ziti Edge Router to Controller"),(0,o.kt)("h4",{id:"variables-to-establish-manually"},"Variables to Establish Manually"),(0,o.kt)("p",null,"These two variables represent the Ziti Edge Router configuration file and the Controller configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"controller_config_file=~/.config/ziti/ziti-controller/ziti_controller.yml\nedge_router_config_file=~/.config/ziti/ziti-router/ziti_router.yml\n")),(0,o.kt)("h4",{id:"variables---copypaste"},"Variables - Copy/Paste"),(0,o.kt)("p",null,"These commands extract the files specified in the configuration and store them into the assigned variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"edge_router_cert=$(yaml2json $edge_router_config_file | jq -j .identity.cert)\nsigning_cert=$(yaml2json $controller_config_file | jq -j .edge.enrollment.signingCert.cert)\ncontroller_cert=$(yaml2json $controller_config_file | jq -j .identity.cert)\nedge_router_ca=$(yaml2json $edge_router_config_file | jq -j .identity.ca)\n")),(0,o.kt)("h4",{id:"commands-to-verify-pki-configuration"},"Commands to Verify PKI Configuration"),(0,o.kt)("p",null,"Both of these commands should report SUCCESS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"verifyCertAgainstPool $edge_router_cert $signing_cert\nverifyCertAgainstPool $controller_cert $edge_router_ca\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ziti-client-to-controller---api"},"Ziti Client to Controller - API"),(0,o.kt)("h4",{id:"variables-to-establish-manually-1"},"Variables to Establish Manually"),(0,o.kt)("p",null,"These two variables represent the identity file in json for a Ziti client and the Controller configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"identity_file=/path/to/enrolled-identity.json\ncontroller_config_file=~/.config/ziti/ziti-controller/ziti_controller.yml\n")),(0,o.kt)("h4",{id:"variables---copypaste-1"},"Variables - Copy/Paste"),(0,o.kt)("p",null,"These commands will extract the cert and ca from the enrolled identity file and put it into a file in the /tmp folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'jq -j .id.cert $identity_file | cut -d ":" -f2 > /tmp/identity.cert\njq -j .id.ca $identity_file | cut -d ":" -f2 > /tmp/identity.ca\n')),(0,o.kt)("p",null,"These commands extract the files specified in the configuration and store them into the assigned variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'controller_cert=$(yaml2json $controller_config_file | jq -j .identity.cert)\nsigning_cert=$(yaml2json $controller_config_file | jq -j .edge.enrollment.signingCert.cert)\n\ncontroller_api_server_cert=$(yaml2json $controller_config_file | jq -j .edge.api.identity.server_cert)\nif [[ "null" == "$controller_api_server_cert" ]]; then controller_api_server_cert=$(yaml2json $controller_config_file | jq -j .identity.server_cert); fi\n')),(0,o.kt)("h4",{id:"commands-to-verify-pki-configuration-1"},"Commands to Verify PKI Configuration"),(0,o.kt)("p",null,"Both of these commands should report SUCCESS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"verifyCertAgainstPool /tmp/identity.cert $signing_cert\nverifyCertAgainstPool $controller_api_server_cert /tmp/identity.ca\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ziti-client-to-ziti-edge-router---data"},"Ziti Client to Ziti Edge Router - Data"),(0,o.kt)("h4",{id:"variables-to-establish-manually-2"},"Variables to Establish Manually"),(0,o.kt)("p",null,"These two variables represent the identity file in json for a Ziti client and the Controller configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"identity_file=/path/to/enrolled-identity.json\nedge_router_config_file=~/.config/ziti/ziti-router/ziti_router.yml\n")),(0,o.kt)("h4",{id:"variables---copypaste-2"},"Variables - Copy/Paste"),(0,o.kt)("p",null,"This command will extract the ca from the enrolled identity file and put it into a file in the /tmp folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'jq -j .id.ca $identity_file | cut -d ":" -f2 > /tmp/identity.ca\n')),(0,o.kt)("p",null,"This command extracts the file specified in the configuration and stores it into the assigned variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"edge_router_cert=$(yaml2json $edge_router_config_file | jq -j .identity.cert)\n")),(0,o.kt)("h4",{id:"commands-to-verify-pki-configuration-2"},"Commands to Verify PKI Configuration"),(0,o.kt)("p",null,"The following command should report SUCCESS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"verifyCertAgainstPool $edge_router_cert /tmp/identity.ca\n")))}a.isMDXComponent=!0},7415:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=i(7462),o=(i(7294),i(3905)),r=i(5452);const a={},l="Troubleshooting",s={unversionedId:"manage/troubleshooting/troubleshooting",id:"manage/troubleshooting/troubleshooting",title:"Troubleshooting",description:"",source:"@site/docs/manage/troubleshooting/troubleshooting.mdx",sourceDirName:"manage/troubleshooting",slug:"/manage/troubleshooting/",permalink:"/docusaurus/docs/manage/troubleshooting/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/manage/troubleshooting/troubleshooting.mdx",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Ziti Router",permalink:"/docusaurus/docs/manage/router-overview"},next:{title:"Circuit Create Error Codes",permalink:"/docusaurus/docs/manage/troubleshooting/circuit-create-error-codes"}},c={},u=[],d={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"This is where troubleshooting information will be added. Right now the biggest issue people have had is during initial\nsetup of a Ziti Network and with PKI configuration. As additional troubleshooting needs become apparent this page will\nbe updated."),(0,o.kt)(r.ZP,{mdxType:"PkiTroubleshootingMd"}))}p.isMDXComponent=!0}}]);