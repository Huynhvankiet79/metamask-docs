"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>M});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),i=n(6550),l=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??d;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(2389);const g="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),l(a))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},s,{className:(0,o.Z)("tabs__item",k,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function M(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},2056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={title:"Use the onboarding library",description:"Simplify the MetaMask onboarding experience for your users."},l="Use the MetaMask onboarding library",u={unversionedId:"how-to/use-onboarding-library",id:"how-to/use-onboarding-library",title:"Use the onboarding library",description:"Simplify the MetaMask onboarding experience for your users.",source:"@site/wallet/how-to/use-onboarding-library.md",sourceDirName:"how-to",slug:"/how-to/use-onboarding-library",permalink:"/709-react-dapp-part-2/wallet/how-to/use-onboarding-library",draft:!1,tags:[],version:"current",frontMatter:{title:"Use the onboarding library",description:"Simplify the MetaMask onboarding experience for your users."},sidebar:"walletSidebar",previous:{title:"Set an icon",permalink:"/709-react-dapp-part-2/wallet/how-to/set-icon"},next:{title:"Migrate the provider API",permalink:"/709-react-dapp-part-2/wallet/how-to/migrate-api"}},c={},d=[{value:"Steps",id:"steps",level:2},{value:"Example",id:"example",level:2}],p={toc:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-the-metamask-onboarding-library"},"Use the MetaMask onboarding library"),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using ",(0,r.kt)("a",{parentName:"p",href:"/709-react-dapp-part-2/wallet/how-to/use-sdk/"},"MetaMask SDK"),", which incorporates the functionality of the\nMetaMask onboarding library.\nYou don't need to set up the onboarding library if you use the SDK.")),(0,r.kt)("p",null,"Sending users away from your dapp to install MetaMask presents challenges.\nYou must inform the user to return to your dapp and refresh their browser after the installation.\nYour dapp detects the user's newly installed MetaMask extension only after that refresh."),(0,r.kt)("p",null,"You can use MetaMask's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"onboarding library")," to\nimprove and simplify the onboarding experience.\nThe library exposes an API to initiate the onboarding process."),(0,r.kt)("p",null,"During the onboarding process, the library registers your dapp as the origin of the onboarding request.\nMetaMask checks for this origin after the user completes the onboarding flow.\nIf it finds an origin, the final confirmation button of the MetaMask onboarding flow indicates that\nthe user will be redirected back to your dapp."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"@metamask/onboarding"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the library or include it in your page:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// As an ES6 module\nimport MetaMaskOnboarding from '@metamask/onboarding';\n// Or as an ES5 module\nconst MetaMaskOnboarding = require('@metamask/onboarding');\n")),(0,r.kt)("p",{parentName:"li"},"Alternatively, you can include the prebuilt ES5 bundle that ships with the library:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./metamask-onboarding.bundle.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new instance of the onboarding library:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const onboarding = new MetaMaskOnboarding();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the onboarding process in response to a user event (for example, a button click):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"onboarding.startOnboarding();\n")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following are example ways to use the onboarding library in various frameworks:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"React",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import MetaMaskOnboarding from '@metamask/onboarding';\nimport React from 'react';\n\nconst ONBOARD_TEXT = 'Click here to install MetaMask!';\nconst CONNECT_TEXT = 'Connect';\nconst CONNECTED_TEXT = 'Connected';\n\nexport function OnboardingButton() {\n  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);\n  const [isDisabled, setDisabled] = React.useState(false);\n  const [accounts, setAccounts] = React.useState([]);\n  const onboarding = React.useRef();\n\n  React.useEffect(() => {\n    if (!onboarding.current) {\n      onboarding.current = new MetaMaskOnboarding();\n    }\n  }, []);\n\n  React.useEffect(() => {\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      if (accounts.length > 0) {\n        setButtonText(CONNECTED_TEXT);\n        setDisabled(true);\n        onboarding.current.stopOnboarding();\n      } else {\n        setButtonText(CONNECT_TEXT);\n        setDisabled(false);\n      }\n    }\n  }, [accounts]);\n\n  React.useEffect(() => {\n    function handleNewAccounts(newAccounts) {\n      setAccounts(newAccounts);\n    }\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      window.ethereum\n        .request({ method: 'eth_requestAccounts' })\n        .then(handleNewAccounts);\n      window.ethereum.on('accountsChanged', handleNewAccounts);\n      return () => {\n        window.ethereum.removeListener('accountsChanged', handleNewAccounts);\n      };\n    }\n  }, []);\n\n  const onClick = () => {\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      window.ethereum\n        .request({ method: 'eth_requestAccounts' })\n        .then((newAccounts) => setAccounts(newAccounts));\n    } else {\n      onboarding.current.startOnboarding();\n    }\n  };\n  return (\n    <button disabled={isDisabled} onClick={onClick}>\n      {buttonText}\n    </button>\n  );\n}\n"))),(0,r.kt)(s.Z,{label:"TypeScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"The onboarding library ships with MetaMask's TypeScript types.\nModify the React example as follows to get type safety:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"-const onboarding = React.useRef();\n+const onboarding = React.useRef<MetaMaskOnboarding>();\n")),(0,r.kt)("p",null,"This gives you editor auto-completion for the methods exposed by the library, and\nhelpful documentation:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4448075/85584481-ccc7ec00-b604-11ea-9b74-49c76ee0bf22.png",alt:"Editor Highlighting"}))),(0,r.kt)(s.Z,{label:"Vanilla JavaScript and HTML",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en-CA\">\n  <head>\n    <title>MetaMask Onboarding Example</title>\n    <meta charset=\"UTF-8\" />\n  </head>\n  <body>\n    <h1>Sample Dapp</h1>\n    <button id=\"onboard\">Loading...</button>\n    <script src=\"./metamask-onboarding.bundle.js\"><\/script>\n    <script>\n      window.addEventListener('DOMContentLoaded', () => {\n        const onboarding = new MetaMaskOnboarding();\n        const onboardButton = document.getElementById('onboard');\n        let accounts;\n\n        const updateButton = () => {\n          if (!MetaMaskOnboarding.isMetaMaskInstalled()) {\n            onboardButton.innerText = 'Click here to install MetaMask!';\n            onboardButton.onclick = () => {\n              onboardButton.innerText = 'Onboarding in progress';\n              onboardButton.disabled = true;\n              onboarding.startOnboarding();\n            };\n          } else if (accounts && accounts.length > 0) {\n            onboardButton.innerText = 'Connected';\n            onboardButton.disabled = true;\n            onboarding.stopOnboarding();\n          } else {\n            onboardButton.innerText = 'Connect';\n            onboardButton.onclick = async () => {\n              await window.ethereum.request({\n                method: 'eth_requestAccounts',\n              });\n            };\n          }\n        };\n\n        updateButton();\n        if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n          window.ethereum.on('accountsChanged', (newAccounts) => {\n            accounts = newAccounts;\n            updateButton();\n          });\n        }\n      });\n    <\/script>\n  </body>\n</html>\n")))))}b.isMDXComponent=!0}}]);