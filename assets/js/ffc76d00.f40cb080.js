"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(a),d=r,y=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const i={authors:"andrewpmartinez"},o="Bootstrapping Trust",s={permalink:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography",source:"@site/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography.md",title:"Bootstrapping Trust",description:"Part 2: A Primer On Public-Key Cryptography",date:"2023-12-11T14:23:47.000Z",formattedDate:"December 11, 2023",tags:[],readingTime:7.63,hasTruncateMarker:!1,authors:[{name:"Andrew Martinez",title:"OpenZiti Maintainer",url:"https://github.com/andrewpmartinez",imageURL:"https://avatars.githubusercontent.com/u/199856?v=4",key:"andrewpmartinez"}],frontMatter:{authors:"andrewpmartinez"},prevItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-01.encryption-everywhere"},nextItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-03.certificates"}},l={authorsImageUrls:[void 0]},h=[{value:"Part 2: A Primer On Public-Key Cryptography",id:"part-2-a-primer-on-public-key-cryptography",level:2},{value:"Keys",id:"keys",level:3},{value:"Public Key Encryption",id:"public-key-encryption",level:4},{value:"Private Key Encryption",id:"private-key-encryption",level:4},{value:"Digital Signatures",id:"digital-signatures",level:3}],p={toc:h},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"part-2-a-primer-on-public-key-cryptography"},"Part 2: A Primer On Public-Key Cryptography"),(0,r.kt)("p",null,"If you have read through the entire series up to here, welcome! If you\nhave not, please consider reading the whole series:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-01.encryption-everywhere"},"Part 1: Encryption Everywhere")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"Part 2: A Primer On Public-Key Cryptography")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-03.certificates"},"Part 3: Certificates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"Part 4: Certificate Authorities & Chains Of Trust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-05.bootstrapping-trust"},"Part 5: Bootstrapping Trust"))),(0,r.kt)("p",null,"It isn't easy to talk about bootstrapping trust without covering the\nbasics of public-key cryptography. The reader may skip this article if\nthe concepts of encryption, signing, and public/private keys are\nfamiliar. However, if not, I implore that you bear the brunt of this\narticle as later parts will heavily rely on it."),(0,r.kt)("p",null,"If you wish, you can dive into the mathematics behind it to prove it to\nyourself, but I promise, no math here. When necessary, I will wave my\nhands at it, point into the distance, and let the reader journey out."),(0,r.kt)("h3",{id:"keys"},"Keys"),(0,r.kt)("p",null,'Keys are blobs of data containing rather large numbers. They can be\nstored anywhere data can be stored, but are commonly stored as files. A\nset of public and private keys is referred to as a "key set" or "key\npair."'),(0,r.kt)("p",null,'Within a key pair, there is only one private key and one public key. The\ntwo keys are mathematically entangled, given a particular function and\nits parameters. Today, those functions and parameters are generally\nelliptical curves and are the basis of a "trapdoor function." Trapdoor\nfunctions are attractive to the cryptographically inclined for two main\nreasons:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"they make it easy to encrypt with one key of a key pair and decrypt\nwith the other."),(0,r.kt)("li",{parentName:"ol"},"one key cannot be derived from the other")),(0,r.kt)("p",null,"Of the two keys, the private key is the most important. It must be kept\ntucked away from prying eyes and attackers. Some secure environments\nstore the private key in hardware such as\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hardware_security_module"},"Hardware Security Modules (HSMs)"),"\nor\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Trusted_Platform_Module"},"Trusted Platform Modules (TPMs)"),".\nMobile devices, such as laptops and smartphones, use hardware technology\nsimilar to TPMs. Apple has its Secure Enclave, and Android has its\nKeymaster Hardware Abstraction Layer. The goal of all of these pieces of\nhardware is to keep sensitive secrets (e.g., private keys) safe. The\nfact that an entire industry of embedded hardware has been developed to\nkeep private keys safe should tip the reader off to how important they\nare."),(0,r.kt)("p",null,"As stated above, these two keys have some impressive capabilities. It is\nnot possible to derive one from the other. This allows the public key to\nbe handed out freely without compromising the private key. Also, both\nkeys can generate encrypted data that only the other key can decrypt.\nMore clearly:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Anyone with the public key can encrypt data only the private key\nholder can decrypt"),(0,r.kt)("li",{parentName:"ol"},"Anyone with the public key can decrypt data from the private key\nholder")),(0,r.kt)("p",null,'Number one can succinctly be called "Public Key Encryption" and number\ntwo "Private Key Encryption." This article explores the merits of both.'),(0,r.kt)("h4",{id:"public-key-encryption"},"Public Key Encryption"),(0,r.kt)("p",null,'From the list above, number one is what most people think of as\n"encryption." It is "secure" as it allows anyone with the widely\navailable public key to send messages only the private key holder can\nread. This property ensures that communication from the public key\nholder to the private key holder is being read exclusively by the\nintended target.'),(0,r.kt)("p",null,"There is quite a bit of pressure to keep the private key extremely safe.\nWhoever holds the private key, has a guaranteed identity that is tied to\nand verifiable by the public key. It is verifiable because if one can\nuse the public key to encrypt data, only the private key holder can\ndecrypt it. This fact means that data can be encrypted and sent that\ncoordinates on an additional secret. Since only the private key holder\ncan decrypt the data to see this second level secret, future\ncommunication can use the new secret to encrypted and verify traffic in\nboth directions. This additional exchange is roughly how part of the TLS\nnegotiation works for HTTPs. TLS, and by proxy HTTPS, use other\ntechnologies and strategies to provide an incredible security\nproposition."),(0,r.kt)("h4",{id:"private-key-encryption"},"Private Key Encryption"),(0,r.kt)("p",null,"For private key encryption, the same principles apply as with public key\nencryption with the roles reversed. The private key encrypts data only\nthe public key can decrypt. On the surface, this seems absurd. When the\nserver encrypts data with its private key, the public key can decrypt\nit. The public key is not protected and expected to be widely available.\nIt seems as if private key encryption is nearly useless as everyone can\nread it!"),(0,r.kt)("p",null,'Except it isn\'t. Private key encryption verifies the identity of the\nprivate key holder. The public key cannot interact with anyone else.\nAdditionally, this property allows us to generate encrypted data that\ncould only have come from the private key holder. If that data happens\nto be small and describe another document, we call that a "digital\nsignature" or "signature" for short.'),(0,r.kt)("h3",{id:"digital-signatures"},"Digital Signatures"),(0,r.kt)("p",null,"Digital signatures are similar to handwritten ones used to sign legal\ndocuments and checkbooks, but with a significant advantage. They\nvalidate that a document has not been altered since it was signed. With\ntoday's computer's graphical abilities, the nefarious can forge images\nand handwritten signatures. That puts handwritten signatures at a\nsignificant disadvantage. So how does this work?"),(0,r.kt)("p",null,"The data that will be signed can be anything. What it represents is not\nimportant. It can be text, JSON, an image, a PDF, or anything at all!\nThat data is processed by a one-way\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function"},"cryptographic hashing algorithm"),",\nsuch as SHA-256. This process is idempotent, meaning running it\nrepeatedly on the same data, parameters, and hashing algorithm gives the\nsame result. The output of this process is a hash, a string of\ncharacters that uniquely identifies the input data. With sufficiently\nlarge input data, the hash is much shorter than the input data as the\nhash size is usually fixed length."),(0,r.kt)("p",null,"For example, here is the Ziti logo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ziti",src:a(93453).Z,width:"839",height:"839"})),(0,r.kt)("p",null,"This logo's file can be hashed using SHA-256 via the ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256sum")," command\ncommonly found on Linux."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$> sha256sum ziti.png\nc3a6681cc81f9c0fa44b3e2921495882c55f0a86c54cd60ee0fdc7d200ad26db  ziti.png\n")),(0,r.kt)("p",null,'That long string "c3a....6db" is the hash of that file! The string is 64\ncharacters long and is comprised of hex characters (a base 16 numbering\nsystem of 0-9 and a-f). Each character takes four bits to represent (4^2\n= 16). Since there are 64 characters at 4 bits each we have: 64 x 4 =\n256',"."," This is where SHA-256 gets its name. SHA-256 is a fixed-length\ncryptographic hashing algorithm who's output is 256 bits in length."),(0,r.kt)("p",null,'The hash itself is not encryption. It is "hashing." Hashing of this\nnature is not reversible while encryption is. For cryptographic hashing,\nit is impracticable to have two similar sets of data that have the same\nfunction that produces the same hash. In essence, the hash uniquely\nrepresents the data: all of it! Changing even a single character would\ngenerate a different hash.'),(0,r.kt)("p",null,"After hashing a data or document, the private key holder can encrypt the\nhash to generate a signature. This process provides the following truths\nwhen working with the signature:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the private key is the only key capable of producing its signature of\nthe data's hash"),(0,r.kt)("li",{parentName:"ul"},"the public key can validate the signature given the data and hashing\nalgorithm used")),(0,r.kt)("p",null,"Verifying a signature a straightforward process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the public key to decrypt the signature to reveal the original\nhash"),(0,r.kt)("li",{parentName:"ul"},"Use the hashing algorithm that was used initially on the data,\nrecreate the hash independently"),(0,r.kt)("li",{parentName:"ul"},"Compare the two hashes, and if they are the same the signature is\nvalid")),(0,r.kt)("p",null,"Signing data is incredibly powerful. It allows a private key holder to\nstate that data was approved by them and not altered. It is also\npublicly verifiable to anyone with the document, signature, and public\nkey. This allows many decentralized approaches to sharing data that can\nhave its source and content verified."),(0,r.kt)("p",null,"Bearer tokens are an example of the power of signatures. Bearer tokens\nare a document that is signed by a trusted authentication system and\ncontain data that provides information about the client presenting the\ntoken. Signing the token ensures that the content of the token has not\nbeen changed and has been endorsed by a trusted system. An example of a\nbearer token is a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"JSON Web Token (JWT)")),(0,r.kt)("p",null,"A JWT specifies the format of the bearer token as a header, payload, and\nsignature using JSON. A client can then present a JWT to any system\nwhich can then verify that the contents are valid and from a trusted\nidentity. As long as the signature is valid, the JWT can grant access to\nthe client presenting it based on whatever information is inside the\nJWT."),(0,r.kt)("h1",{id:"closing"},"Closing"),(0,r.kt)("p",null,"This article should have shed light on public-key cryptography by\nexplaining the roles of the public and private keys. It should have also\nprovided a glimpse at the power of encryption and digital signatures. In\n",(0,r.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-03.certificates"},"part three")," we will see how key pairs can\nbe combined with certificates!"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Written By: Andrew Martinez",(0,r.kt)("br",{parentName:"p"}),"\n","June 2020"))}u.isMDXComponent=!0},93453:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ziti-c5f4e9ffa46a5294f79389ed04b812ea.png"}}]);