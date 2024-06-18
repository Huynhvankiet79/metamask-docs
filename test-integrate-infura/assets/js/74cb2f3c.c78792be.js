"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[18323],{13250:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=s(74848),a=s(28453),i=s(32545);const t={description:"Avalanche C-Chain quickstart guide",sidebar_position:2},c="Quickstart",l={id:"reference/avalanche-c-chain/quickstart",title:"Quickstart",description:"Avalanche C-Chain quickstart guide",source:"@site/services/reference/avalanche-c-chain/quickstart.md",sourceDirName:"reference/avalanche-c-chain",slug:"/reference/avalanche-c-chain/quickstart",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/avalanche-c-chain/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Avalanche C-Chain quickstart guide",sidebar_position:2},sidebar:"servicesSidebar",previous:{title:"Avalanche (C-Chain)",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/"},next:{title:"How to",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/how-to/"}},o={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Make calls",id:"make-calls",level:2},{value:"cURL",id:"curl",level:3},{value:"Node (JavaScript)",id:"node-javascript",level:3},{value:"Node Fetch",id:"node-fetch",level:4},{value:"Axios",id:"axios",level:4},{value:"Ethers",id:"ethers",level:4},{value:"Python",id:"python",level:3},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsx)(n.p,{children:"This quickstart guide will help you set up and make calls on Avalanche C-Chain using the Infura endpoints."}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(n.p,{children:"Don't have an Infura account? Sign up for our free plan and start using the Avalanche C-Chain network!"})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["Ensure you have an ",(0,r.jsx)(n.a,{href:"../../../../developer-tools/dashboard/get-started/create-api/",children:"API key"})," with the Avalanche C-Chain networked enabled."]}),"\n",(0,r.jsx)(n.h2,{id:"make-calls",children:"Make calls"}),"\n",(0,r.jsx)(n.h3,{id:"curl",children:"cURL"}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command in your terminal. Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"node-javascript",children:"Node (JavaScript)"}),"\n",(0,r.jsxs)(n.p,{children:["In these examples, you'll use ",(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})," as your package manager."]}),"\n",(0,r.jsx)(n.h4,{id:"node-fetch",children:"Node Fetch"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In your project folder, install the Node Fetch package using npm:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i node-fetch\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create your JavaScript file and copy the following code:"}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import fetch from \'node-fetch\';\n\nfetch("https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    jsonrpc: "2.0",\n    method: "eth_blockNumber",\n    params: [],\n    id: 1\n  })\n})\n.then(response =>\n  response.json()\n)\n.then(data => {\n  console.log(data);\n})\n.catch(error => {\n  console.error(error);\n});\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"axios",children:"Axios"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In your project folder, install the Axios package using npm:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i axios\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create your Javascript file and copy the following code:"}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"const axios = require('axios');\n\naxios.post('https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY', {\n  jsonrpc: '2.0',\n  method: 'eth_blockNumber',\n  params: [],\n  id: 1\n})\n.then(response => {\n  console.log(response.data);\n})\n.catch(error => {\n  console.error(error);\n});\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ethers",children:"Ethers"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In your project folder, install the ethers package using npm:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install ethers\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create your Javascript file and copy the following code:"}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"const ethers = require('ethers');\n\nconst provider = new ethers.providers.JsonRpcProvider('https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY');\n\nprovider.getBlockNumber()\n.then(blockNumber => {\n  console.log(blockNumber);\n})\n.catch(error => {\n  console.error(error);\n});\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In your project folder, install the ",(0,r.jsx)(n.code,{children:"requests"})," library:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install requests\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create your Python file and copy the following code:"}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="index.py"',children:'import requests\nimport json\n\nurl = \'https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY\'\n\npayload = {\n    "jsonrpc": "2.0",\n    "method": "eth_blockNumber",\n    "params": [],\n    "id": 1\n}\n\nheaders = {\'content-type\': \'application/json\'}\n\nresponse = requests.post(url, data=json.dumps(payload), headers=headers).json()\n\nprint(response)\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python index.py\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(n.p,{children:"Now that you have successfully made a call to Avalanche C-Chain, you can explore more functionalities and APIs provided\nby Infura. Here are some suggestions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Explore other Avalanche C-Chain APIs"}),": Infura supports a wide range of APIs. You can find more information in the\n",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/reference/avalanche-c-chain/json-rpc-methods/",children:"JSON-RPC API method documentation"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Try out different networks"}),": Infura supports multiple networks including Ethereum, Linea, Polygon, Optimism, and more."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Monitor your usage"}),": Keep an eye on your usage on the ",(0,r.jsx)(n.a,{href:"../../../../developer-tools/dashboard/how-to/dashboard-stats/",children:"Infura dashboard"})," to ensure you're not hitting your rate limits."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Remember, the Infura community is here to help. If you have any questions or run into any issues, check out the\n",(0,r.jsx)(n.a,{href:"https://community.infura.io/",children:"Infura community"})," for help and answers to common questions."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},32545:(e,n,s)=>{s.d(n,{A:()=>c});s(96540);var r=s(28774);const a="banner_ava2",i="button_BPnc";var t=s(74848);const c=e=>{let{children:n}=e;return(0,t.jsxs)("div",{className:a,children:[n,(0,t.jsx)(r.A,{to:"https://app.infura.io/register",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsxs)("div",{className:`${i} margin-top--xs`,children:["Sign up\xa0",(0,t.jsx)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",children:(0,t.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})})]})}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(96540);const a={},i=r.createContext(a);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);