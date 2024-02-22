"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,m=u["".concat(o,".").concat(g)]||u[g]||f[g]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},42778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},s="Variable: EthUserOperationStruct",c={unversionedId:"reference/keyring-api/variables/EthUserOperationStruct",id:"reference/keyring-api/variables/EthUserOperationStruct",title:"Variable: EthUserOperationStruct",description:"Struct of a UserOperation as defined by ERC-4337.",source:"@site/snaps/reference/keyring-api/variables/EthUserOperationStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/EthUserOperationStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/EthUserOperationStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/EthUserOperationStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: EthUserOperationPatchStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/EthUserOperationPatchStruct"},next:{title:"Variable: ExportAccountRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/ExportAccountRequestStruct"}},o={},p=[{value:"See",id:"see",level:2},{value:"Source",id:"source",level:2}],l={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-ethuseroperationstruct"},"Variable: EthUserOperationStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const EthUserOperationStruct: Struct<{\n  callData: string;\n  callGasLimit: string;\n  initCode: string;\n  maxFeePerGas: string;\n  maxPriorityFeePerGas: string;\n  nonce: string;\n  paymasterAndData: string;\n  preVerificationGas: string;\n  sender: string;\n  signature: string;\n  verificationGasLimit: string;\n  }, {\n  callData: Struct<string, null>;\n  callGasLimit: Struct<string, null>;\n  initCode: Struct<string, null>;\n  maxFeePerGas: Struct<string, null>;\n  maxPriorityFeePerGas: Struct<string, null>;\n  nonce: Struct<string, null>;\n  paymasterAndData: Struct<string, null>;\n  preVerificationGas: Struct<string, null>;\n  sender: Struct<string, null>;\n  signature: Struct<string, null>;\n  verificationGasLimit: Struct<string, null>;\n  }>;\n")),(0,a.kt)("p",null,"Struct of a UserOperation as defined by ERC-4337."),(0,a.kt)("h2",{id:"see"},"See"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4337#definitions"},"https://eips.ethereum.org/EIPS/eip-4337#definitions")),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/eth/erc4337/types.ts#L10"},"external/keyring-api/src/eth/erc4337/types.ts:10")))}f.isMDXComponent=!0}}]);