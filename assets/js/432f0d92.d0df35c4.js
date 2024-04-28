"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={toc:[{value:"Contents",id:"contents",level:2},{value:"Conventions",id:"conventions",level:2},{value:"Configuring the OpenZiti Identity",id:"configuring-the-openziti-identity",level:3},{value:"Configuration with Environment Variable",id:"configuration-with-environment-variable",level:4},{value:"Configuration with Files from Mounted Volume",id:"configuration-with-files-from-mounted-volume",level:4},{value:"Use Case: Hosting OpenZiti Services",id:"use-case-hosting-openziti-services",level:2},{value:"Container Image <code>openziti/ziti-host</code>",id:"container-image-openzitiziti-host",level:3},{value:"Image Tags for <code>openziti/ziti-host</code>",id:"image-tags-for-openzitiziti-host",level:4},{value:"Dockerfile for <code>openziti/ziti-host</code>",id:"dockerfile-for-openzitiziti-host",level:4},{value:"Hosting an OpenZiti Service with <code>openziti/ziti-host</code>",id:"hosting-an-openziti-service-with-openzitiziti-host",level:4},{value:"Troubleshooting <code>openziti/ziti-host</code>",id:"troubleshooting-openzitiziti-host",level:4},{value:"Docker Compose Examples for <code>openziti/ziti-host</code>",id:"docker-compose-examples-for-openzitiziti-host",level:4},{value:"Kubernetes Deployments for <code>openziti/ziti-host</code>",id:"kubernetes-deployments-for-openzitiziti-host",level:4},{value:"Use Case: Intercepting Proxy and Nameserver",id:"use-case-intercepting-proxy-and-nameserver",level:2},{value:"Container Image <code>openziti/ziti-edge-tunnel</code>",id:"container-image-openzitiziti-edge-tunnel",level:3},{value:"Tags for <code>openziti/ziti-edge-tunnel</code>",id:"tags-for-openzitiziti-edge-tunnel",level:4},{value:"Dockerfile for <code>openziti/ziti-edge-tunnel</code>",id:"dockerfile-for-openzitiziti-edge-tunnel",level:4},{value:"Accessing OpenZiti Services with <code>openziti/ziti-edge-tunnel</code>",id:"accessing-openziti-services-with-openzitiziti-edge-tunnel",level:4},{value:"Troubleshooting <code>openziti/ziti-edge-tunnel</code>",id:"troubleshooting-openzitiziti-edge-tunnel",level:4},{value:"Docker Compose Examples for <code>openziti/ziti-edge-tunnel</code>",id:"docker-compose-examples-for-openzitiziti-edge-tunnel",level:4},{value:"Kubernetes Deployments for <code>openziti/ziti-edge-tunnel</code>",id:"kubernetes-deployments-for-openzitiziti-edge-tunnel",level:4}]},a="wrapper";function l(e){let{components:t,...l}=e;return(0,o.kt)(a,(0,i.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-the-openziti-tunneler-with-docker"},"Run The OpenZiti Tunneler with Docker"),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#conventions"},"Conventions")),(0,o.kt)("li",{parentName:"ul"},"Use cases:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-case-hosting-openziti-services"},"Hosting OpenZiti services")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-case-intercepting-proxy-and-nameserver"},"Connecting to OpenZiti services with an intercepting proxy"))))),(0,o.kt)("h2",{id:"conventions"},"Conventions"),(0,o.kt)("h3",{id:"configuring-the-openziti-identity"},"Configuring the OpenZiti Identity"),(0,o.kt)("p",null,"It is necessary to supply an identity enrollment token or an enrolled identity configuration JSON to the container as a volume-mounted file or as environment variables. The following variable, volumes, and files are common to both container images described below."),(0,o.kt)("h4",{id:"configuration-with-environment-variable"},"Configuration with Environment Variable"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZITI_IDENTITY_JSON"),": This is the identity represented as JSON. This variable overrides other methods of supplying the identity JSON. It is not advisable to mount a volume on the container filesystem when using this method because the identity is written to a temporary file and will cause an error if the file already exists.")),(0,o.kt)("h4",{id:"configuration-with-files-from-mounted-volume"},"Configuration with Files from Mounted Volume"),(0,o.kt)("p",null,"You may bind a host directory to the container filesystem in ",(0,o.kt)("inlineCode",{parentName:"p"},"/ziti-edge-tunnel")," to supply the token JWT file or configuration JSON file. If you provide a token JWT file, the entrypoint script will enroll the identity during container startup. The entrypoint script will write the identity configuration JSON file in the same directory with a filename like ",(0,o.kt)("inlineCode",{parentName:"p"},"${ZITI_IDENTITY_BASENAME}.json"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZITI_IDENTITY_BASENAME"),": the file basename (without the filename suffix) of the enrollment (.jwt) and identity (.json) files the tunneler will use"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZITI_ENROLL_TOKEN"),": Optionally, you may supply the enrollment token JWT as a string if ",(0,o.kt)("inlineCode",{parentName:"li"},"${ZITI_IDENTITY_BASENAME}.jwt")," is not mounted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZITI_IDENTITY_WAIT"),": Optionally, you may configure the container to wait max seconds for the JWT or JSON file to appear in the mounted volume")),(0,o.kt)("h2",{id:"use-case-hosting-openziti-services"},"Use Case: Hosting OpenZiti Services"),(0,o.kt)("p",null,"This use case involves deploying the OpenZiti tunneler as a reverse proxy to publish regular network servers to your OpenZiti Network. You may locate the published servers in a Docker bridge network (use network mode ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge"),") or the Docker host's network (use network mode ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),"). See ",(0,o.kt)("a",{parentName:"p",href:"https://openziti.io/docs/reference/tunnelers/linux/"},"the Linux tunneler doc")," for general info about the OpenZiti tunneler. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-host")," container image for this case."),(0,o.kt)("h3",{id:"container-image-openzitiziti-host"},"Container Image ",(0,o.kt)("inlineCode",{parentName:"h3"},"openziti/ziti-host")),(0,o.kt)("p",null,"This image runs ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run-host")," to invoke the hosting-only mode of the tunneler. The main difference from the parent image (",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-edge-tunnel"),') is the command argument and run-as user. This container runs as "nobody" and doesn\'t require special privileges.'),(0,o.kt)("h4",{id:"image-tags-for-openzitiziti-host"},"Image Tags for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-host")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-host")," image is published in Docker Hub and automatically updated with new releases. You may subscribe to ",(0,o.kt)("inlineCode",{parentName:"p"},":latest")," (default) or pin a version for stability e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},":0.19.11"),"."),(0,o.kt)("h4",{id:"dockerfile-for-openzitiziti-host"},"Dockerfile for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-host")),(0,o.kt)("p",null,"The Dockerfile for ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-host")," is ",(0,o.kt)("a",{target:"_blank",href:n(71213).Z},"./Dockerfile.ziti-host"),"."),(0,o.kt)("h4",{id:"hosting-an-openziti-service-with-openzitiziti-host"},"Hosting an OpenZiti Service with ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-host")),(0,o.kt)("p",null,"Publish servers that are reachable on the Docker host's network, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"tcp:localhost:54321"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# identity file on Docker host is mounted in container: /opt/openziti/etc/identities/my-ziti-identity.json\ndocker run \\\n  --name ziti-host \\\n  --rm \\\n  --network=host \\\n  --env ZITI_IDENTITY_BASENAME="my-ziti-identity" \\\n  --volume /opt/openziti/etc/identities:/ziti-edge-tunnel \\\n  openziti/ziti-host\n')),(0,o.kt)("p",null,"Publish servers inside the same Docker bridge network, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"tcp:my-docker-service:80"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# identity file on Docker host is stuffed in env var: /opt/openziti/etc/identities/my-ziti-identity.json\ndocker run \\\n  --name ziti-host \\\n  --rm \\\n  --network=my-docker-bridge \\\n  --env ZITI_IDENTITY_JSON="$(< /opt/openziti/etc/identities/my-ziti-identity.json)" \\\n  openziti/ziti-host\n')),(0,o.kt)("p",null,"This example uses ",(0,o.kt)("a",{target:"_blank",href:n(12452).Z},"the included Docker Compose project")," to illustrate publishing a server container to your OpenZiti Network."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an OpenZiti Config with type ",(0,o.kt)("inlineCode",{parentName:"p"},"intercept.v1"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "addresses": [\n        "hello-docker.ziti"\n    ],\n    "protocols": [\n        "tcp"\n    ],\n    "portRanges": [\n        {\n        "low": 80,\n        "high": 80\n        }\n    ]\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an OpenZiti Config with type ",(0,o.kt)("inlineCode",{parentName:"p"},"host.v1")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "port": 80,\n    "address": "hello",\n    "protocol": "tcp"\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a service associating the two configs with a role attribute like "#HelloServices."')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create an identity for your client tunneler named "MyClient" and load the identity.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create an identity named "DockerHost" and download the enrollment token in the same directory as ',(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),', i.e., "DockerHost.jwt."')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a Bind service policy assigning "#HelloServices" to be bound by "@DockerHost."')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a Dial service policy granting access to "#HelloServices" to your client tunneler\'s identity "@MyClient."')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the demo server"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up --detach hello\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the tunneler"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ZITI_IDENTITY_JSON="$(< /tmp/my-ziti-id.json)" docker-compose up --detach ziti-host\n# debug\nZITI_IDENTITY_JSON="$(< /tmp/my-ziti-id.json)" docker-compose run ziti-host run-host --verbose=4\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the demo server via your OpenZiti Network: ",(0,o.kt)("a",{parentName:"p",href:"http://hello-docker.ziti"},"http://hello-docker.ziti")))),(0,o.kt)("h4",{id:"troubleshooting-openzitiziti-host"},"Troubleshooting ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-host")),(0,o.kt)("p",null,"You may pass additional args by supplying the ",(0,o.kt)("inlineCode",{parentName:"p"},"run-host")," mode and args when the container is run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n  --name ziti-host \\\n  --rm \\\n  --network=my-docker-bridge \\\n  --env ZITI_IDENTITY_JSON="$(< /opt/openziti/etc/identities/my-ziti-identity.json)" \\\n  openziti/ziti-host \\\n    run-host --verbose=4\n')),(0,o.kt)("h4",{id:"docker-compose-examples-for-openzitiziti-host"},"Docker Compose Examples for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-host")),(0,o.kt)("p",null,"Get a single, enrolled identity configuration from an environment variable. You could define the variable with an ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the same directory as ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n    ziti-host:\n        image: openziti/ziti-host\n        environment:\n            - ZITI_IDENTITY_JSON\n')),(0,o.kt)("p",null,"Configure a single, enrolled identity from the host filesystem directory in the same directory as ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,o.kt)("p",null,"In this example, the file ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti_id.jwt")," exists and is used to enroll on the first run, producing ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti_id.json"),", the identity configuration file. Subsequent runs will use only the enrolled identity's JSON configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n    ziti-host:\n        image: openziti/ziti-host\n        volumes:\n            - .:/ziti-edge-tunnel\n        environment:\n            - ZITI_IDENTITY_BASENAME=ziti_id\n')),(0,o.kt)("p",null,"Configure all enrolled identities from a named volume."),(0,o.kt)("p",null,"This example loads all files named *.json from the mounted volume."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n    ziti-host:\n        image: openziti/ziti-host\n        volumes:\n            - ziti-identities:/ziti-edge-tunnel\nvolumes:\n    ziti-identities:\n')),(0,o.kt)("p",null,"Enroll a single identity with a token from an environment variable and store in a named volume."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n    ziti-host:\n        image: openziti/ziti-host\n        volumes:\n            - ziti-identity:/ziti-edge-tunnel\n        environment:\n            - ZITI_IDENTITY_BASENAME=ziti_id\n            - ZITI_ENROLL_TOKEN=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbSI6Im90dCIsImV4cCI6MTY3MDAwEFQ2NywiaXNzIjoiaHR0cHM6Ly83Y2U3ZTQyNC02YTkyLTRmZjItOTQ1OS1lYmJiYTMyMzQ2ZmEucHJvZHVjdGlvbi5uZXRmb3VuZHJ5LmlvOjQ0MyIsImp0aSI6ImQ0YjczZjFlLTRkOWEtNDk0ZC04NGQxLTQ2OWE1MGQyYzhmMCIsInN1YiI6ImdXdkQwaTd5RDkifQ.R5t2hoH0W1vJUn78_O8azoJ05FWLLSh6J3Q1XaDOidaYgDOWcLm7YiV99rymnjSjRC86IjNsAyZK678_D2dqyefR3VBI8LepamZ5jVSAcDFCF3Swk_jszcHDqcYs2YCucr6qrwsv8NTqEdUAJ8NVOiRaZbGhSuBvXTmWilCkCLcL7R4tXpIHakM_2WA4_tmwdbN8i7SGPPAB6pZOK_xDW10nBjg5Fe3Of_-53Gd-3swm9D3Yms1iIPBfMIQUWNzYaOCBa8UvGo8d9JjvJKgTlkMwZHL3hayzAuVEXoR1-LbA1t1Nhd8FgjvuL-YxN0XLaA3koL-FijL7ehWZoyUYPuO3xi63SQpbO-oDtX89jvGLMVercZBscXQsmCkDcj8OAnTb3Czb8HmsHgfydqvT6epUNFxFe_fSGz-CuGIuFBQwygfpBriGBnwVk8dnIJt7Wl75jPR8v-NImIIv1dKCI_ZajlsJ5l8D4OGnj76pBs3Wu7Hq1zxAbJ8HPJmi_ywTHAHVJVghifRTIR6_SyfeZGsHDY9s8YH5ErYvarBvMxwPCmjMMY3SKM_YOPG0u1c-KKByS3m7x7qia6P1ShWwGkbMmY722iFeVvoGN7SD51CkZiqWHClhBtdDv6_1K7y62KEmiX0D4YHXoikNqMCoPwa4yKyDRzoO8DKcAzaVRRg\nvolumes:\n    ziti-identity:\n')),(0,o.kt)("h4",{id:"kubernetes-deployments-for-openzitiziti-host"},"Kubernetes Deployments for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-host")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://openziti.io/docs/guides/kubernetes/workload-tunneling/"},"the workload tunneling guides for Kubernetes"),"."),(0,o.kt)("h2",{id:"use-case-intercepting-proxy-and-nameserver"},"Use Case: Intercepting Proxy and Nameserver"),(0,o.kt)("p",null,"This use case involves deploying the OpenZiti tunneler as an intercepting proxy with a built-in nameserver. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-edge-tunnel")," container image for this case."),(0,o.kt)("p",null,'The "run" mode requires elevated privileges to configure the OS with a DNS resolver and IP routes.'),(0,o.kt)("h3",{id:"container-image-openzitiziti-edge-tunnel"},"Container Image ",(0,o.kt)("inlineCode",{parentName:"h3"},"openziti/ziti-edge-tunnel")),(0,o.kt)("p",null,"This image runs ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run"),", the intercepting proxy mode of the tunneler. The Red Hat 8 Universal Base Image (UBI) is the base image of this container."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://openziti.io/docs/reference/tunnelers/linux/"},"the Linux tunneler doc")," for general info about the OpenZiti tunneler."),(0,o.kt)("h4",{id:"tags-for-openzitiziti-edge-tunnel"},"Tags for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-edge-tunnel")),(0,o.kt)("p",null,"The container image ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-edge-tunnel")," is published in Docker Hub and automatically updated with new releases. You may subscribe to ",(0,o.kt)("inlineCode",{parentName:"p"},":latest")," (default) or pin a version for stability, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},":0.19.11"),"."),(0,o.kt)("h4",{id:"dockerfile-for-openzitiziti-edge-tunnel"},"Dockerfile for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-edge-tunnel")),(0,o.kt)("p",null,"The Dockerfile for ",(0,o.kt)("inlineCode",{parentName:"p"},"openziti/ziti-edge-tunnel")," is ",(0,o.kt)("a",{target:"_blank",href:n(79280).Z},"./Dockerfile.base"),"."),(0,o.kt)("h4",{id:"accessing-openziti-services-with-openzitiziti-edge-tunnel"},"Accessing OpenZiti Services with ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-edge-tunnel")),(0,o.kt)("p",null,"Intercepting proxy ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," mode captures DNS names and layer-4 traffic that match authorized destinations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# current directory contains enrollment token file ziti_id.jwt\ndocker run \\\n    --name ziti-tun \\\n    --network host \\\n    --privileged \\\n    --volume ${PWD}:/ziti-edge-tunnel/ \\\n    --volume "/var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket" \\\n    --device "/dev/net/tun:/dev/net/tun" \\\n    --env ZITI_IDENTITY_BASENAME=ziti_id \\\n    openziti/ziti-edge-tunnel\n')),(0,o.kt)("h4",{id:"troubleshooting-openzitiziti-edge-tunnel"},"Troubleshooting ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-edge-tunnel")),(0,o.kt)("p",null,"You may pass additional args by supplying the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," mode followed by args when the container is run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n    --name ziti-edge-tunnel \\\n    --network host \\\n    --privileged \\\n    --volume ${PWD}:/ziti-edge-tunnel/ \\\n    --volume "/var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket" \\\n    --device "/dev/net/tun:/dev/net/tun" \\\n    --env ZITI_IDENTITY_BASENAME=ziti_id \\\n    openziti/ziti-edge-tunnel \\\n      run --verbose=4\n')),(0,o.kt)("h4",{id:"docker-compose-examples-for-openzitiziti-edge-tunnel"},"Docker Compose Examples for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-edge-tunnel")),(0,o.kt)("p",null,"This example uses ",(0,o.kt)("a",{target:"_blank",href:n(12452).Z},"the Docker Compose project")," included in this repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# enrolled identity file ziti_id.json is in the same directory as docker-compose.yml\nZITI_IDENTITY_BASENAME=ziti_id docker-compose run ziti-tun\n")),(0,o.kt)("p",null,"This example uses a single, enrolled identity configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti_id.json")," in the same directory as ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n    ziti-tun:\n        image: openziti/ziti-edge-tunnel\n        devices:\n            - /dev/net/tun:/dev/net/tun\n        volumes:\n            - .:/ziti-edge-tunnel\n            - /var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket\n        environment:\n            - ZITI_IDENTITY_BASENAME=ziti_id\n            - PFXLOG_NO_JSON=true              # suppress JSON logging\n        network_mode: host\n        privileged: true\n')),(0,o.kt)("h4",{id:"kubernetes-deployments-for-openzitiziti-edge-tunnel"},"Kubernetes Deployments for ",(0,o.kt)("inlineCode",{parentName:"h4"},"openziti/ziti-edge-tunnel")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://openziti.io/docs/guides/kubernetes/workload-tunneling/"},"the workload tunneling guides for Kubernetes"),"."))}l.isMDXComponent=!0;const s={title:"Containers",hide_table_of_contents:!1},p=void 0,d={unversionedId:"reference/tunnelers/linux/container/readme",id:"reference/tunnelers/linux/container/readme",title:"Containers",description:"",source:"@site/docs/reference/tunnelers/linux/container/readme.mdx",sourceDirName:"reference/tunnelers/linux/container",slug:"/reference/tunnelers/linux/container/",permalink:"/docs/reference/tunnelers/linux/container/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/linux/container/readme.mdx",tags:[],version:"current",frontMatter:{title:"Containers",hide_table_of_contents:!1},sidebar:"docsSidebar",previous:{title:"Linux Tunneler",permalink:"/docs/reference/tunnelers/linux/"},next:{title:"Options and Modes",permalink:"/docs/reference/tunnelers/linux/linux-tunnel-options"}},u={},c=[],m={toc:c},h="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"DockerMd"}))}k.isMDXComponent=!0},79280:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/Dockerfile-ab6ad6f3fd1855647db8eeb1e84c63fb.base"},71213:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/Dockerfile-58cc8db91eddd9b6b3f811202f50f0ba.ziti-host"},12452:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/docker-compose-b4bc2b4d984b155193b2f658f2b83452.yml"}}]);