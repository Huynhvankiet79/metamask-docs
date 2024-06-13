"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[79627],{84607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(74848),r=t(28453),s=t(11470),i=t(19365);const o={description:"Retrieve and display ERC-721 and ERC-1155 tokens."},c="Retrieve and display ERC-721 and ERC-1155 tokens",l={id:"tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens",title:"Retrieve and display ERC-721 and ERC-1155 tokens",description:"Retrieve and display ERC-721 and ERC-1155 tokens.",source:"@site/services/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens.md",sourceDirName:"tutorials/ethereum",slug:"/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens",permalink:"/test-integrate-infura/services/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens.md",tags:[],version:"current",frontMatter:{description:"Retrieve and display ERC-721 and ERC-1155 tokens."},sidebar:"servicesSidebar",previous:{title:"Monitor transfers using Python",permalink:"/test-integrate-infura/services/tutorials/ethereum/monitor-transfers-using-python"},next:{title:"Retrieve the balance of an ERC-20 token",permalink:"/test-integrate-infura/services/tutorials/ethereum/retrieve-the-balance-of-an-erc-20-token"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a project directory",id:"1-create-a-project-directory",level:3},{value:"2. Install required packages",id:"2-install-required-packages",level:3},{value:"3. Set up the script",id:"3-set-up-the-script",level:3},{value:"4. Set the ABI",id:"4-set-the-abi",level:3},{value:"5. Request the metadata",id:"5-request-the-metadata",level:3},{value:"6. Display the token",id:"6-display-the-token",level:3},{value:"Access IPFS",id:"access-ipfs",level:4},{value:"Update request for metadata",id:"update-request-for-metadata",level:4},{value:"7. Run the script",id:"7-run-the-script",level:3},{value:"Complete code overview",id:"complete-code-overview",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"retrieve-and-display-erc-721-and-erc-1155-tokens",children:"Retrieve and display ERC-721 and ERC-1155 tokens"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, you'll retrieve and display ERC-721 and ERC-1155 tokens using the Web3 JavaScript library."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/get-started/infura",children:"Ethereum project"})," on Infura"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js installed"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(n.h3,{id:"1-create-a-project-directory",children:"1. Create a project directory"}),"\n",(0,a.jsx)(n.p,{children:"Create a new directory for your project. This can be done from the command line:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir retrieveBalance\n"})}),"\n",(0,a.jsx)(n.p,{children:"Change into the new directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd retrieveBalance\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-install-required-packages",children:"2. Install required packages"}),"\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.code,{children:"web3"})," package in the project directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install web3\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This example has been written for web3js v4.x. It may not work for earlier versions."})}),"\n",(0,a.jsx)(n.h3,{id:"3-set-up-the-script",children:"3. Set up the script"}),"\n",(0,a.jsxs)(n.p,{children:["Create a file called ",(0,a.jsx)(n.code,{children:"retrieveBalance.js"}),". At the top of file, add the following lines to import the web3.js library and connect to the Infura HTTPS endpoint:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const { Web3 } = require("web3");\n\nconst web3 = new Web3(\n  new Web3.providers.HttpProvider(\n    "https://mainnet.infura.io/v3/<YOUR_API_KEY>"\n  )\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"<YOUR_API_KEY>"})," with your Infura API key."]}),"\n",(0,a.jsx)(n.h3,{id:"4-set-the-abi",children:"4. Set the ABI"}),"\n",(0,a.jsxs)(n.p,{children:["For ERC-721 NFTs, use the ",(0,a.jsx)(n.code,{children:"tokenURI"})," function, which is part of the ERC-721 standard. This function retrieves a token\u2019s metadata so you can view it. For ERC-1155, use the ",(0,a.jsx)(n.code,{children:"uri"})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["Note the ",(0,a.jsx)(n.code,{children:"tokenURI"})," and ",(0,a.jsx)(n.code,{children:"uri"})," methods are optional for contracts. However, these methods are the only standardized on-chain way of seeing NFT metadata without using a third-party API."]}),"\n",(0,a.jsx)(n.p,{children:"Define the ABI for the respective method by adding the following to the script:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"ERC-721",label:"ERC-721",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const tokenURIABI = [\n  {\n    inputs: [\n      {\n        internalType: "uint256",\n        name: "tokenId",\n        type: "uint256",\n      },\n    ],\n    name: "tokenURI",\n    outputs: [\n      {\n        internalType: "string",\n        name: "",\n        type: "string",\n      },\n    ],\n    stateMutability: "view",\n    type: "function",\n  },\n];\n'})})}),(0,a.jsx)(i.A,{value:"ERC-1155",label:"ERC-1155",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const uriABI = [\n  {\n    constant: true,\n    inputs: [\n      {\n        internalType: "uint256",\n        name: "_id",\n        type: "uint256",\n      },\n    ],\n    name: "uri",\n    outputs: [\n      {\n        internalType: "string",\n        name: "",\n        type: "string",\n      },\n    ],\n    payable: false,\n    stateMutability: "view",\n    type: "function",\n  },\n];\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"5-request-the-metadata",children:"5. Request the metadata"}),"\n",(0,a.jsx)(n.p,{children:"Define the ABI for the respective method by adding the following to the script:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"ERC-721",label:"ERC-721",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const tokenContract = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";\nconst tokenId = 101;\n'})})}),(0,a.jsx)(i.A,{value:"ERC-1155",label:"ERC-1155",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const tokenContract = "0x76be3b62873462d2142405439777e971754e8e77";\nconst tokenId = 10570;\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"tokenContract"})," is the address of the token contract, and ",(0,a.jsx)(n.code,{children:"tokenId"})," is the ID of the specific token to display."]}),"\n",(0,a.jsxs)(n.p,{children:["Define the contract using ",(0,a.jsx)(n.code,{children:"web3.eth.Contract()"}),", passing the ABI and contract address as parameters:"]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"ERC-721",label:"ERC-721",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const contract = new web3.eth.Contract(tokenURIABI, tokenContract);\n"})})}),(0,a.jsx)(i.A,{value:"ERC-1155",label:"ERC-1155",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const contract = new web3.eth.Contract(uriABI, tokenContract);\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Next, create an ",(0,a.jsx)(n.code,{children:"async"})," function that interacts with the smart contract."]}),"\n",(0,a.jsxs)(n.p,{children:["This calls the ABI function defined in ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens#4-set-the-abi",children:"step 4"}),"."]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"ERC-721",label:"ERC-721",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"async function getNFTMetadata() {\n  const result = await contract.methods.tokenURI(tokenId).call();\n\n  console.log(result); // ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/101\n}\n\ngetNFTMetadata();\n"})})}),(0,a.jsx)(i.A,{value:"ERC-1155",label:"ERC-1155",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"async function getNFTMetadata() {\n  const result = await contract.methods.uri(tokenId).call();\n\n  console.log(result); // https://nftdata.parallelnft.com/api/parallel-alpha/ipfs/QmSwnqTmpwvZH51Uv47opPUxGYx2nknYmGoKoRJQRMDcLL\n}\n\ngetNFTMetadata();\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"6-display-the-token",children:"6. Display the token"}),"\n",(0,a.jsx)(n.p,{children:"The ERC-1155 contract returns an HTTP URL , which you can directly enter into a browser. The ERC-721 contract returns an IPFS hash you can access using Infura."}),"\n",(0,a.jsx)(n.h4,{id:"access-ipfs",children:"Access IPFS"}),"\n",(0,a.jsxs)(n.p,{children:["In your Infura account, create a new IPFS project. ",(0,a.jsx)(n.a,{href:"../../network-apis/ipfs/how-to/access-ipfs-content/dedicated-gateways.md",children:"Enable your dedicated gateways"}),", and you can access IPFS using your unique subdomain."]}),"\n",(0,a.jsx)(n.p,{children:"In the script, add a function to combine the IPFS hash and your Infura subdomain endpoint:"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"ERC-721",label:"ERC-721",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'function addIPFSProxy(ipfsHash) {\n  const URL = "https://<YOUR_SUBDOMAIN>.infura-ipfs.io/ipfs/";\n  const hash = ipfsHash.replace(/^ipfs?:\\/\\//, "");\n  const ipfsURL = URL + hash;\n\n  console.log(ipfsURL); // https://<subdomain>.infura-ipfs.io/ipfs/<ipfsHash>\n  return ipfsURL;\n}\n'})})})}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"<YOUR_SUBDOMAIN>"})," with your Infura IPFS subdomain."]}),"\n",(0,a.jsx)(n.h4,{id:"update-request-for-metadata",children:"Update request for metadata"}),"\n",(0,a.jsxs)(n.p,{children:["Update the request for metadata to allow access to the IPFS hash through your Infura endpoint. In the ",(0,a.jsx)(n.code,{children:"getNFTMetadata"})," function defined in ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens#5-request-the-metadata",children:"step 5"}),", add the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"  const ipfsURL = addIPFSProxy(result);\n\n  const response = await fetch(ipfsURL);\n  const metadata = await response.json();\n  console.log(metadata); // Metadata in JSON\n\n  const image = addIPFSProxy(metadata.image);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Also add this line to the top of the file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:'const fetch = require("node-fetch");\n'})}),"\n",(0,a.jsx)(n.p,{children:"This returns the IPFS hash combined with our Infura endpoint, you can directly access in your browser to view the NFT."}),"\n",(0,a.jsx)(n.h3,{id:"7-run-the-script",children:"7. Run the script"}),"\n",(0,a.jsx)(n.p,{children:"Run the script using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node retrieveBalance.js\n"})}),"\n",(0,a.jsx)(n.h3,{id:"complete-code-overview",children:"Complete code overview"}),"\n",(0,a.jsxs)(n.p,{children:["Note some ERC-721 contracts return a regular HTTP URL, while some ERC-1155 contracts return an IPFS hash. You can add the IPFS code from ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens#6-display-the-token",children:"step 6"})," to an ERC-1155 contract that returns an IPFS hash."]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"ERC-721 with IPFS",label:"ERC-721 with IPFS",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const fetch = require("node-fetch");\nconst { Web3 } = require("web3");\n\nconst web3 = new Web3(\n  new Web3.providers.HttpProvider(\n    "https://mainnet.infura.io/v3/<YOUR_API_KEY>"\n  )\n);\n\nconst tokenURIABI = [\n  {\n    inputs: [\n      {\n        internalType: "uint256",\n        name: "tokenId",\n        type: "uint256",\n      },\n    ],\n    name: "tokenURI",\n    outputs: [\n      {\n        internalType: "string",\n        name: "",\n        type: "string",\n      },\n    ],\n    stateMutability: "view",\n    type: "function",\n  },\n];\n\nconst tokenContract = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"; // BAYC contract address\nconst tokenId = 101; // A token we\'d like to retrieve its metadata of\n\nconst contract = new web3.eth.Contract(tokenURIABI, tokenContract);\n\nasync function getNFTMetadata() {\n  const result = await contract.methods.tokenURI(tokenId).call();\n\n  console.log(result); // ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/101\n\n  const ipfsURL = addIPFSProxy(result);\n\n  const response = await fetch(ipfsURL);\n  const metadata = await response.json();\n  console.log(metadata); // Metadata in JSON\n\n  const image = addIPFSProxy(metadata.image);\n}\n\ngetNFTMetadata();\n\nfunction addIPFSProxy(ipfsHash) {\n  const URL = "https://<YOUR_SUBDOMAIN>.infura-ipfs.io/ipfs/";\n  const hash = ipfsHash.replace(/^ipfs?:\\/\\//, "");\n  const ipfsURL = URL + hash;\n\n  console.log(ipfsURL); // https://<subdomain>.infura-ipfs.io/ipfs/<ipfsHash>\n  return ipfsURL;\n}\n'})})}),(0,a.jsx)(i.A,{value:"ERC-1155 without IPFS",label:"ERC-1155 without IPFS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const { Web3 } = require("web3");\n\nconst web3 = new Web3(\n  new Web3.providers.HttpProvider(\n    "https://mainnet.infura.io/v3/<YOUR_API_KEY>"\n  )\n);\n\nconst uriABI = [\n  {\n    constant: true,\n    inputs: [\n      {\n        internalType: "uint256",\n        name: "_id",\n        type: "uint256",\n      },\n    ],\n    name: "uri",\n    outputs: [\n      {\n        internalType: "string",\n        name: "",\n        type: "string",\n      },\n    ],\n    payable: false,\n    stateMutability: "view",\n    type: "function",\n  },\n];\n\nconst tokenContract = "0x76be3b62873462d2142405439777e971754e8e77"; // Parallel contract address\nconst tokenId = 10570; // A token we\'d like to retrieve its metadata of\n\nconst contract = new web3.eth.Contract(uriABI, tokenContract);\n\nasync function getNFTMetadata() {\n  const result = await contract.methods.uri(tokenId).call();\n\n  console.log(result); // https://nftdata.parallelnft.com/api/parallel-alpha/ipfs/QmSwnqTmpwvZH51Uv47opPUxGYx2nknYmGoKoRJQRMDcLL\n}\n\ngetNFTMetadata();\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),s=t(23104),i=t(56347),o=t(205),c=t(57485),l=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,u]=f({queryString:t,groupId:r}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==a&&(l(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);