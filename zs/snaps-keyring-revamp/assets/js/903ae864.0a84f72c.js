"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(u,p(p({ref:t},d),{},{components:n})):r.createElement(u,p({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={},p="Class: SnapRpcSender",l={unversionedId:"reference/keyring-api/classes/SnapRpcSender",id:"reference/keyring-api/classes/SnapRpcSender",title:"Class: SnapRpcSender",description:"Implementation of the Sender interface that can be used to send requests",source:"@site/snaps/reference/keyring-api/classes/SnapRpcSender.md",sourceDirName:"reference/keyring-api/classes",slug:"/reference/keyring-api/classes/SnapRpcSender",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/classes/SnapRpcSender",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/classes/SnapRpcSender.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Class: MethodNotSupportedError",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/classes/MethodNotSupportedError"},next:{title:"Type alias: ApproveRequestRequest",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/ApproveRequestRequest"}},s={},o=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new SnapRpcSender(origin, provider)",id:"new-snaprpcsenderorigin-provider",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"#origin",id:"origin",level:3},{value:"Source",id:"source-1",level:4},{value:"#provider",id:"provider",level:3},{value:"Source",id:"source-2",level:4},{value:"Methods",id:"methods",level:2},{value:"send()",id:"send",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Source",id:"source-3",level:4}],d={toc:o},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-snaprpcsender"},"Class: SnapRpcSender"),(0,a.kt)("p",null,"Implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sender")," interface that can be used to send requests\nto a snap through the snap JSON-RPC API."),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/Sender"},(0,a.kt)("inlineCode",{parentName:"a"},"Sender")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"new-snaprpcsenderorigin-provider"},"new SnapRpcSender(origin, provider)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new SnapRpcSender(origin, provider): SnapRpcSender\n")),(0,a.kt)("p",null,"Create a new instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SnapRpcSender"),"."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"origin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The caller's origin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"provider")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MetaMaskInpageProvider")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"MetaMaskInpageProvider")," instance to use.")))),(0,a.kt)("h4",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/KeyringSnapRpcClient.ts#L23"},"external/keyring-api/src/KeyringSnapRpcClient.ts:23")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"origin"},"#origin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"private #origin: string;\n")),(0,a.kt)("h4",{id:"source-1"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/KeyringSnapRpcClient.ts#L13"},"external/keyring-api/src/KeyringSnapRpcClient.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"provider"},"#provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"private #provider: MetaMaskInpageProvider;\n")),(0,a.kt)("h4",{id:"source-2"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/KeyringSnapRpcClient.ts#L15"},"external/keyring-api/src/KeyringSnapRpcClient.ts:15")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"send"},"send()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"send(request): Promise<Json>\n")),(0,a.kt)("p",null,"Send a request to the snap and return the response."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Json"),"[] ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Json"),">",";   }"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The JSON-RPC request to send to the snap.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request.id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request.jsonrpc")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"')),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request.method")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request.params"),"?"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Json"),"[] ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Json"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A promise that resolves to the response of the request."),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,"Sender.send"),(0,a.kt)("h4",{id:"source-3"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/KeyringSnapRpcClient.ts#L34"},"external/keyring-api/src/KeyringSnapRpcClient.ts:34")))}c.isMDXComponent=!0}}]);