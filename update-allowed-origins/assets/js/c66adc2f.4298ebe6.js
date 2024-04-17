"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[296],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},4865:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(47751),s=a(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(c(t),s(n))},y=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:y,onClick:m},l,{className:(0,o.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function d(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function c(e){const t=(0,i.u)(e);return r.createElement("div",{className:(0,o.A)("tabs-container",p.tabList)},r.createElement(u,(0,n.A)({},e,t)),r.createElement(d,(0,n.A)({},e,t)))}function m(e){const t=(0,s.A)();return r.createElement(c,(0,n.A)({key:String(t)},e))}},47751:(e,t,a)=>{a.d(t,{u:()=>c});var n=a(96540),r=a(56347),o=a(57485),l=a(31682),i=a(89466);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const l=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,m]=d({queryString:a,groupId:r}),[y,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=c??y;return u({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),g(e)}),[m,g,o]),tabValues:o}}},36863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(4865),l=a(19365);const i={description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},s="About MetaMask SDK",p={unversionedId:"concepts/sdk/index",id:"concepts/sdk/index",title:"About MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk/index.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/",permalink:"/update-allowed-origins/wallet/concepts/sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/update-allowed-origins/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/update-allowed-origins/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/update-allowed-origins/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/update-allowed-origins/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"About the Wallet API",permalink:"/update-allowed-origins/wallet/concepts/wallet-api"},next:{title:"SDK connections",permalink:"/update-allowed-origins/wallet/concepts/sdk/connections"}},u={},d=[{value:"Benefits of MetaMask SDK",id:"benefits-of-metamask-sdk",level:2},{value:"User experience",id:"user-experience",level:2}],c={toc:d},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"about-metamask-sdk"},"About MetaMask SDK"),(0,r.yg)("p",null,"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK in existing dapps, and call any ",(0,r.yg)("a",{parentName:"p",href:"/update-allowed-origins/wallet/concepts/wallet-api"},"Wallet API")," methods from\nyour dapp.\nGet started ",(0,r.yg)("a",{parentName:"p",href:"/update-allowed-origins/wallet/how-to/use-sdk/"},"using the SDK"),"."),(0,r.yg)("h2",{id:"benefits-of-metamask-sdk"},"Benefits of MetaMask SDK"),(0,r.yg)("p",null,"MetaMask SDK enables your dapp to provide a seamless user experience for MetaMask users, from\nmultiple dapp platforms, without relying on third-party libraries.\nBy integrating your dapp using the SDK, millions of MetaMask Mobile users can connect to their\npreferred MetaMask client.\nThe SDK uses the ",(0,r.yg)("a",{parentName:"p",href:"/update-allowed-origins/wallet/concepts/wallet-api#ethereum-provider-api"},"MetaMask Ethereum provider"),", so existing\ndapps work out of the box with the SDK."),(0,r.yg)("p",null,"The following table outlines some of the features available when you integrate your dapp with\nMetaMask using the SDK.\nMost of these features are not available if you only integrate your dapp directly using the\n",(0,r.yg)("a",{parentName:"p",href:"/update-allowed-origins/wallet/concepts/wallet-api"},"Wallet API"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Feature"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Wallet API only"),(0,r.yg)("th",{parentName:"tr",align:"center"},"MetaMask SDK"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connect from a web dapp to the MetaMask extension"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connect from a web dapp to MetaMask Mobile"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connect from desktop, mobile, and gaming dapps to MetaMask Mobile"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Use custom RPC methods such as ",(0,r.yg)("a",{parentName:"td",href:"/update-allowed-origins/wallet/how-to/use-sdk/javascript/connect-and-sign"},(0,r.yg)("inlineCode",{parentName:"a"},"connectAndSign"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/update-allowed-origins/wallet/how-to/use-sdk/javascript/display-custom-modals"},"Display custom modals")," in MetaMask"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/update-allowed-origins/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"Make read-only requests")," using the Infura API"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/update-allowed-origins/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"Batch multiple RPC requests")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,r.yg)("h2",{id:"user-experience"},"User experience"),(0,r.yg)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Desktop browser",mdxType:"TabItem"},(0,r.yg)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,r.yg)("p",{align:"center"},(0,r.yg)("video",{width:"100%",controls:!0},(0,r.yg)("source",{src:"/sdk-desktop.mp4",type:"video/mp4"}))),(0,r.yg)("admonition",{title:"Get started",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Get started by ",(0,r.yg)("a",{parentName:"li",href:"/update-allowed-origins/wallet/how-to/use-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,r.yg)("li",{parentName:"ul"},"See the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,r.yg)(l.A,{value:"Mobile browser",mdxType:"TabItem"},(0,r.yg)("p",null,"When a user accesses your web dapp on a mobile browser, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.yg)("p",{align:"center"},(0,r.yg)("video",{width:"300",controls:!0},(0,r.yg)("source",{src:"/sdk-mobile-browser.mp4",type:"video/mp4"}))),(0,r.yg)("admonition",{title:"Get started",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Get started by ",(0,r.yg)("a",{parentName:"li",href:"/update-allowed-origins/wallet/how-to/use-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,r.yg)("li",{parentName:"ul"},"See the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,r.yg)(l.A,{value:"iOS",mdxType:"TabItem"},(0,r.yg)("p",null,"When a user accesses your iOS dapp, the SDK automatically deeplinks to MetaMask Mobile (or if the\nuser doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.yg)("p",{align:"center"},(0,r.yg)("video",{width:"300",controls:!0},(0,r.yg)("source",{src:"/sdk-ios.mp4",type:"video/mp4"}))),(0,r.yg)("admonition",{title:"Get started",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Get started by ",(0,r.yg)("a",{parentName:"li",href:"/update-allowed-origins/wallet/how-to/use-sdk/mobile/ios"},"setting up the SDK in your iOS dapp"),"."),(0,r.yg)("li",{parentName:"ul"},"See the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-ios-sdk"},"example iOS dapp")," in the iOS SDK GitHub\nrepository for advanced use cases.")))),(0,r.yg)(l.A,{value:"Android",mdxType:"TabItem"},(0,r.yg)("p",null,"When a user accesses your Android dapp, the SDK automatically deeplinks to MetaMask Mobile (or if\nthe user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.yg)("p",{align:"center"},(0,r.yg)("video",{width:"300",controls:!0},(0,r.yg)("source",{src:"/sdk-android.mp4",type:"video/mp4"}))),(0,r.yg)("admonition",{title:"Get started",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Get started by ",(0,r.yg)("a",{parentName:"li",href:"/update-allowed-origins/wallet/how-to/use-sdk/mobile/android"},"setting up the SDK in your Android dapp"),"."),(0,r.yg)("li",{parentName:"ul"},"See the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository and the ",(0,r.yg)("a",{parentName:"li",href:"/update-allowed-origins/wallet/concepts/sdk/android"},"Android SDK architecture")," for more information.")))),(0,r.yg)(l.A,{value:"Node.js",mdxType:"TabItem"},(0,r.yg)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,r.yg)("p",{align:"center"},(0,r.yg)("video",{width:"625",controls:!0},(0,r.yg)("source",{src:"/sdk-nodejs.mp4",type:"video/mp4"}))),(0,r.yg)("admonition",{title:"Get started",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Get started by ",(0,r.yg)("a",{parentName:"li",href:"/update-allowed-origins/wallet/how-to/use-sdk/javascript/nodejs"},"setting up the SDK in your Node.js dapp"),"."),(0,r.yg)("li",{parentName:"ul"},"See the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"example Node.js dapp"),"\nin the Node.js SDK GitHub repository for advanced use cases.")))),(0,r.yg)(l.A,{value:"Unity",mdxType:"TabItem"},(0,r.yg)("p",null,"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms, as demonstrated in the following screen recording."),(0,r.yg)("p",{align:"center"},(0,r.yg)("video",{width:"300",controls:!0},(0,r.yg)("source",{src:"/sdk-unity.mp4",type:"video/mp4"}))),(0,r.yg)("admonition",{title:"Get started",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Get started by ",(0,r.yg)("a",{parentName:"li",href:"/update-allowed-origins/wallet/how-to/use-sdk/gaming/unity/"},"setting up the SDK in your Unity game"),"."),(0,r.yg)("li",{parentName:"ul"},"See the ",(0,r.yg)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/decentralization/demo-game-dragon-crasher-with-metamask-sdk-infura-and-truffle-249789"},"Unity demo game with the SDK installed"),"\nfor advanced use cases."))))),(0,r.yg)("p",null,"You can read more about the ",(0,r.yg)("a",{parentName:"p",href:"/update-allowed-origins/wallet/concepts/sdk/connections"},"connection flow between the SDK and MetaMask"),"."))}y.isMDXComponent=!0}}]);