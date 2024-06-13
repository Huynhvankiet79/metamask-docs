"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1343],{2061:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(74848),s=a(28453),r=a(40267),l=a(19365);const o={sidebar_position:6,description:"Call an action when your Snap is installed or updated."},i="Lifecycle hooks",c={id:"features/lifecycle-hooks",title:"Lifecycle hooks",description:"Call an action when your Snap is installed or updated.",source:"@site/snaps/features/lifecycle-hooks.md",sourceDirName:"features",slug:"/features/lifecycle-hooks",permalink:"/zs/snaps-jsx/snaps/features/lifecycle-hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/lifecycle-hooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Call an action when your Snap is installed or updated."},sidebar:"snapsSidebar",previous:{title:"Data storage",permalink:"/zs/snaps-jsx/snaps/features/data-storage"},next:{title:"Localization",permalink:"/zs/snaps-jsx/snaps/features/localization"}},u={},d=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to implement lifecycle hooks",id:"1-request-permission-to-implement-lifecycle-hooks",level:3},{value:"2. Run an action on installation",id:"2-run-an-action-on-installation",level:3},{value:"3. Run an action on update",id:"3-run-an-action-on-update",level:3},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lifecycle-hooks",children:"Lifecycle hooks"}),"\n",(0,t.jsx)(n.p,{children:"You can implement lifecycle hooks to automatically run an action, such as displaying a dialog or\nnotification, when a user installs or updates your Snap."}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-request-permission-to-implement-lifecycle-hooks",children:"1. Request permission to implement lifecycle hooks"}),"\n",(0,t.jsxs)(n.p,{children:["Request the ",(0,t.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/permissions#endowmentlifecycle-hooks",children:(0,t.jsx)(n.code,{children:"endowment:lifecycle-hooks"})}),"\npermission.\nAdd the following to your Snap's manifest file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:lifecycle-hooks": {}\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-run-an-action-on-installation",children:"2. Run an action on installation"}),"\n",(0,t.jsxs)(n.p,{children:["To run an action when a user installs your Snap, expose the\n",(0,t.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#oninstall",children:(0,t.jsx)(n.code,{children:"onInstall"})})," entry point and implement the action.\nFor example, you can use ",(0,t.jsx)(n.code,{children:"onInstall"})," to perform any initialization that is required upon installation."]}),"\n",(0,t.jsxs)(n.p,{children:["The following example displays an ",(0,t.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/dialogs#display-an-alert-dialog",children:"alert dialog"})," upon installation:"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"JSX",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="index.tsx"',children:'import type { OnInstallHandler } from "@metamask/snaps-sdk";\nimport { Box, Heading, Text } from \'@metamask/snaps-sdk/jsx\';\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: (\n        <Box>\n          <Heading>Installation successful</Heading>\n          <Text>\n            To use this Snap, visit the companion dapp at <a href="https://metamask.io">metamask.io</a>.\n          </Text>\n        </Box>\n      ),\n    },\n  });\n};\n'})})}),(0,t.jsx)(l.A,{value:"Functions",deprecated:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnInstallHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Installation successful"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"3-run-an-action-on-update",children:"3. Run an action on update"}),"\n",(0,t.jsxs)(n.p,{children:["To run an action when a user updates your Snap, expose the\n",(0,t.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onupdate",children:(0,t.jsx)(n.code,{children:"onUpdate"})})," entry point and implement the action.\nFor example, you can use ",(0,t.jsx)(n.code,{children:"onUpdate"})," to perform any migrations that are required upon update."]}),"\n",(0,t.jsxs)(n.p,{children:["The following example displays an ",(0,t.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/dialogs#display-an-alert-dialog",children:"alert dialog"})," upon update:"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"JSX",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="index.tsx"',children:'import type { OnUpdateHandler } from "@metamask/snaps-sdk";\nimport { Box, Heading, Text } from \'@metamask/snaps-sdk/jsx\';\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: (\n        <Box>\n          <Heading>Update successful</Heading>\n          <Text>New features added in this version:</Text>\n          <Text>Added a dialog that appears when updating.</Text>\n        </Box>\n      ),\n    },\n  });\n};\n'})})}),(0,t.jsx)(l.A,{value:"Functions",deprecated:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnUpdateHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Update successful"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/lifecycle-hooks",children:(0,t.jsx)(n.code,{children:"@metamask/lifecycle-hooks-example-snap"})}),"\npackage for a full example of implementing lifecycle hooks."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var t=a(18215);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:a,children:n})}},40267:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(96540),s=a(20053),r=a(23104),l=a(56347),o=a(205),i=a(57485),c=a(31682),u=a(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=p(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:a,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),y=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=a(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb",flaskOnly:"flaskOnly_bhbK",deprecated:"deprecated_lQ7v"};var g=a(74848),b=a(96763);function k(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:o}=e;b.log(o);const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),s=o[a].value;s!==t&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e),a={...n,tabValues:n.tabValues.map(((n,a)=>({...n,attributes:{...n.attributes,className:(0,s.A)(n.attributes?.className,{[y.flaskOnly]:e.children[a]?.props.flaskOnly,[y.deprecated]:e.children[a]?.props.deprecated})}})))};return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,g.jsx)(k,{...a,...e}),(0,g.jsx)(v,{...a,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},20053:(e,n,a)=>{function t(e){var n,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(a=t(e[n]))&&(s&&(s+=" "),s+=a);else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}a.d(n,{A:()=>s});const s=function(){for(var e,n,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(n=t(e))&&(s&&(s+=" "),s+=n);return s}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var t=a(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);