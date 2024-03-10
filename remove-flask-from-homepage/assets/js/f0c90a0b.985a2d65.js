"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),m=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,h=c["".concat(i,".").concat(u)]||c[u]||d[u]||r;return a?o.createElement(h,s(s({ref:t},p),{},{components:a})):o.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var m=2;m<r;m++)s[m]=a[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=a(87462),n=(a(67294),a(3905));const r={description:"Display custom modals using the JavaScript SDK.",sidebar_position:4,tags:["JavaScript SDK"]},s="Display custom modals",l={unversionedId:"how-to/display/custom-modals",id:"how-to/display/custom-modals",title:"Display custom modals",description:"Display custom modals using the JavaScript SDK.",source:"@site/wallet/how-to/display/custom-modals.md",sourceDirName:"how-to/display",slug:"/how-to/display/custom-modals",permalink:"/remove-flask-from-homepage/wallet/how-to/display/custom-modals",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/custom-modals.md",tags:[{label:"JavaScript SDK",permalink:"/remove-flask-from-homepage/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:4,frontMatter:{description:"Display custom modals using the JavaScript SDK.",sidebar_position:4,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Display a dapp icon",permalink:"/remove-flask-from-homepage/wallet/how-to/display/icon"},next:{title:"Add a network",permalink:"/remove-flask-from-homepage/wallet/how-to/add-network"}},i={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a custom modal component",id:"1-create-a-custom-modal-component",level:3},{value:"2. Implement custom modal logic",id:"2-implement-custom-modal-logic",level:3},{value:"3. Test your custom modal",id:"3-test-your-custom-modal",level:3},{value:"Example",id:"example",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"display-custom-modals"},"Display custom modals"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/concepts/sdk/"},"MetaMask SDK")," to display custom MetaMask modals."),(0,n.kt)("p",null,"When integrating a web dapp with MetaMask, you can enhance the user experience by customizing the\nlogic and user interface of the displayed modals, which initiate user interactions such as prompting\nthe user to install MetaMask.\nThis page describes how to create a custom modal in React, but you can adapt the implementation to\nother web frameworks such as Vue.js or pure HTML/JavaScript."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"MetaMask SDK set up in your JavaScript dapp.\nThis example uses the ",(0,n.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/how-to/use-sdk/javascript/react/"},"MetaMask React SDK"),"."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-create-a-custom-modal-component"},"1. Create a custom modal component"),(0,n.kt)("p",null,"Create a custom modal component that aligns with your dapp's design and functionality requirements."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nconst CustomModal = ({ onClose }) => (\n    <div className="modal">\n        <button onClick={onClose}>Close</button>\n    </div>\n);\n\nexport default CustomModal;\n')),(0,n.kt)("h3",{id:"2-implement-custom-modal-logic"},"2. Implement custom modal logic"),(0,n.kt)("p",null,"When initializing ",(0,n.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/how-to/use-sdk/javascript/react/#3-wrap-your-project-with-metamaskprovider"},(0,n.kt)("inlineCode",{parentName:"a"},"MetaMaskProvider")),",\nuse the ",(0,n.kt)("a",{parentName:"p",href:"/remove-flask-from-homepage/wallet/reference/sdk-js-options#modals"},(0,n.kt)("inlineCode",{parentName:"a"},"modals"))," SDK option to set up custom behavior\nfor scenarios such as when MetaMask isn't installed.\nFor example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskProvider } from "@metamask/sdk-react";\nimport CustomModal from "./CustomModal";\nimport ReactDOM from "react-dom";\n\nconst App = () => (\n    <MetaMaskProvider\n        sdkOptions={{\n            modals: {\n                install: ({ link }) => {\n                    let modalContainer = null;\n\n                    return {\n                        mount: () => {\n                            modalContainer = document.createElement("div");\n                            document.body.appendChild(modalContainer);\n\n                            ReactDOM.render(\n                                <CustomModal\n                                    onClose={() => {\n                                        ReactDOM.unmountComponentAtNode(\n                                            modalContainer\n                                        );\n                                        modalContainer.remove();\n                                    }}\n                                />,\n                                modalContainer\n                            );\n                        },\n                        unmount: () => {\n                            if (modalContainer) {\n                                ReactDOM.unmountComponentAtNode(modalContainer);\n                                modalContainer.remove();\n                            }\n                        },\n                    };\n                },\n            },\n        }}\n    >\n        {/* Other components */}\n    </MetaMaskProvider>\n);\n\nexport default App;\n')),(0,n.kt)("h3",{id:"3-test-your-custom-modal"},"3. Test your custom modal"),(0,n.kt)("p",null,"Test your dapp to ensure the custom modal operates as intended, especially in scenarios such as when\nMetaMask isn't installed."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom modal gif",src:a(5378).Z,width:"800",height:"360"}))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/react-with-custom-modal"},"example React dapp with a custom modal\nimplementation"),".\nThis example can serve as a starting point for understanding the approach, which you can then adapt\nto other web frameworks as needed."))}d.isMDXComponent=!0},5378:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/custom-modal-b06fd8cd12d48799411b83cb1d152460.gif"}}]);