"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[63532],{63653:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>W,contentTitle:()=>R,default:()=>Y,frontMatter:()=>O,metadata:()=>U,toc:()=>K});var s=t(74848),n=t(28453),r=t(96540);const l="https://app.infura.io",o={tx:"0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",addParam:"0xc94770007dda54cF92009BFF0dE90c06F603a09f"},i={tx:"0x353e7c277baa3538651fd7f64c8630598c446a4b663034cdca5b18027d3cdb5a",addParam:"0x1fc35B79FB11Ea7D4532dA128DfA9Db573C51b09"},c={tx:"0x005c8a894c0bb9f56c40dd257eaf84f2e7a14f7054f85fb323f34e690669f150",addParam:"0xc94770007dda54cF92009BFF0dE90c06F603a09f"},d={tx:"0xd95cc407bb84eed2625a7bede344c7cf11e68786758dc02c0f79af4111a594c8",addParam:"0x5fbe8dca1c3ee9efddeccb86ba455f02cef6466b"},p={tx:"0x210bdc45a5af5b33e82710b855aad75c1fbb903eaaf8f0c8b664e6709d216ed2",addParam:"0xc94770007dda54cF92009BFF0dE90c06F603a09f"},u="infura.io",h="dev.infura.org",m="infura.io",g="info",C="error",x="success",f={mainnet:{label:"mainnet",value:"mainnet",urlType:u},mainnetDev:{label:"mainnet",value:"mainnet",urlType:h},testnet:{label:"testnet",value:"testnet",urlType:u},sepolia:{label:"sepolia",value:"sepolia",urlType:u},fuji:{label:"fuji",value:"fuji",urlType:h},alfajores:{label:"alfajores",value:"alfajores",urlType:h},mumbai:{label:"mumbai",value:"mumbai",urlType:u},gasEthereum:{label:"ethereum",value:"1",urlType:m},gasPolygon:{label:"polygon",value:"137",urlType:m},gasFilecoinMainnet:{label:"FilecoinMainnet",value:"314",urlType:m},gasMumbai:{label:"mumbai",value:"80001",urlType:m},gasAvalanche:{label:"avalanche",value:"43114",urlType:m},gasFantom:{label:"fantom",value:"250",urlType:m},gasCronos:{label:"cronos",value:"25",urlType:m},gasArbitrumOne:{label:"ArbitrumOne",value:"42161",urlType:m},gasArbitrumNova:{label:"ArbitrumNova",value:"42170",urlType:m}},v={L1:{methods:[{label:"eth_blockNumber",value:"eth_blockNumber",params:{sepolia:[],fuji:[],alfajores:[],testnet:[],mainnet:[]}},{label:"eth_chainId",value:"eth_chainId",params:{sepolia:[],fuji:[],alfajores:[],testnet:[],mainnet:[]}},{label:"eth_gasPrice",value:"eth_gasPrice",params:{sepolia:[],fuji:[],alfajores:[],testnet:[],mainnet:[]}},{label:"eth_getBalance",value:"eth_getBalance",params:{sepolia:[i.addParam,"latest"],fuji:[d.addParam,"latest"],alfajores:[p.addParam,"latest"],testnet:[c.addParam,"latest"],mainnet:[o.addParam,"latest"]}},{label:"eth_getBlockByNumber",value:"eth_getBlockByNumber",params:{sepolia:["latest",!1],fuji:["latest",!1],alfajores:["latest",!1],testnet:["latest",!1],mainnet:["latest",!1]}},{label:"eth_getBlockTransactionCountByHash",value:"eth_getBlockTransactionCountByHash",params:{sepolia:[i.tx],fuji:[d.tx],alfajores:[p.tx],testnet:[c.tx],mainnet:[o.tx]}},{label:"eth_getBlockTransactionCountByNumber",value:"eth_getBlockTransactionCountByNumber",params:{sepolia:["latest"],fuji:["latest"],alfajores:["latest"],testnet:["latest"],mainnet:["latest"]}},{label:"eth_getCode",value:"eth_getCode",params:{sepolia:[i.addParam,"latest"],fuji:[d.addParam,"latest"],alfajores:[p.addParam,"latest"],testnet:[c.addParam,"latest"],mainnet:[o.addParam,"latest"]}},{label:"eth_getTransactionByBlockHashAndIndex",value:"eth_getTransactionByBlockHashAndIndex",params:{sepolia:[i.addParam,"0x0"],fuji:[d.addParam,"0x0"],alfajores:[p.addParam,"0x0"],testnet:[c.addParam,"0x0"],mainnet:[o.addParam,"0x0"]}},{label:"eth_getTransactionByHash",value:"eth_getTransactionByHash",params:{sepolia:[i.tx],fuji:[d.tx],alfajores:[p.tx],testnet:[c.tx],mainnet:[o.tx]}},{label:"eth_getTransactionCount",value:"eth_getTransactionCount",params:{sepolia:[i.addParam,"latest"],fuji:[d.addParam,"latest"],alfajores:[p.addParam,"latest"],testnet:[c.addParam,"latest"],mainnet:[o.addParam,"latest"]}},{label:"eth_maxPriorityFeePerGas",value:"eth_maxPriorityFeePerGas",params:{sepolia:[],fuji:[],alfajores:[],testnet:[],mainnet:[]}},{label:"eth_getTransactionReceipt",value:"eth_getTransactionReceipt",params:{sepolia:[i.tx],fuji:[d.tx],alfajores:[p.tx],testnet:[c.tx],mainnet:[o.tx]}},{label:"eth_getUncleByBlockHashAndIndex",value:"eth_getUncleByBlockHashAndIndex",params:{sepolia:[i.tx,"0x0"],fuji:[d.tx,"0x0"],alfajores:[p.tx,"0x0"],testnet:[c.tx,"0x0"],mainnet:[o.tx,"0x0"]}},{label:"eth_getUncleCountByBlockHash",value:"eth_getUncleCountByBlockHash",params:{sepolia:[i.tx],fuji:[d.tx],alfajores:[p.tx],testnet:[c.tx],mainnet:[o.tx]}},{label:"eth_getUncleCountByBlockNumber",value:"eth_getUncleCountByBlockNumber",params:{sepolia:["earliest"],fuji:["earliest"],alfajores:["earliest"],testnet:["earliest"],mainnet:["earliest"]}},{label:"eth_syncing",value:"eth_syncing",params:{sepolia:[],fuji:[],alfajores:[],testnet:[],mainnet:[]}}]},L2:{methods:[{label:"get_suggested_gas_prices",value:"suggestedGasFees",params:{}},{label:"get_base_fee_percentile",value:"baseFeePercentile",params:{}},{label:"get_busy_threshold",value:"busyThreshold",params:{}},{label:"get_base_fee_history",value:"baseFeeHistory",params:{}}]}},b="palm",w="gas.api",y=[{label:"Ethereum",value:"ethereum",complexEndpoint:!1,networksTypes:[f.mainnet,f.sepolia]},{label:"Linea",value:"linea",complexEndpoint:!0,networksTypes:[f.mainnet]},{label:"Palm",value:b,complexEndpoint:!0,networksTypes:[f.mainnet,f.testnet]},{label:"Polygon",value:"polygon",complexEndpoint:!0,networksTypes:[f.mainnet,f.mumbai]},{label:"Gas API",value:w,disabled:!1,complexEndpoint:!1,isExpansion:!0,networksTypes:[f.gasEthereum,f.gasPolygon,f.gasFilecoinMainnet,f.gasMumbai,f.gasAvalanche,f.gasFantom,f.gasCronos,f.gasArbitrumOne,f.gasArbitrumNova]},{label:"Aurora",value:"aurora",complexEndpoint:!0,networksTypes:[f.mainnet,f.testnet]},{label:"Arbitrum",value:"arbitrum",complexEndpoint:!0,networksTypes:[f.mainnet]},{label:"Optimism",value:"optimism",complexEndpoint:!0,networksTypes:[f.mainnet]}],j={netName:y[0],netType:y[0].networksTypes[0],netMethod:v.L1.methods[0],apiKey:{label:"",value:"ID",private:""}},k={credentials:"include",method:"GET",mode:"cors",cache:"no-cache",headers:(()=>{let e=new Headers;return e.append("pragma","no-cache"),e.append("cache-control","no-cache"),e})()};function T(){const[e,a]=(0,r.useState)(void 0),[t,s]=(0,r.useState)(!0),[n,o]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{s(!0);try{const e=await fetch(`${l}/api/me`,k),t=await e.json();if(t?.data){a(t.data);const e=t.data.id,s=await fetch(`${l}/api/v1/users/${e}/projects`,k);if(s.ok){const e=await s.json(),a=e?.result?.projects,t=[];a&&Object.keys(a).forEach((e=>{t.push(a[e])})),o([...t])}}t?.error&&(a(void 0),o([]))}catch(e){a(void 0),o([])}finally{s(!1)}})()}),[]),{user:e,keys:n,loading:t}}const H=e=>{let{name:a,classes:t}=e;return(0,s.jsx)("span",{className:t,children:(()=>{switch(a){case"key":return(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M10.75 4.5C10.75 4.09375 11.0625 3.75 11.5 3.75C11.9062 3.75 12.25 4.09375 12.25 4.5C12.25 4.9375 11.9062 5.25 11.5 5.25C11.0625 5.25 10.75 4.9375 10.75 4.5ZM10.5 11C10.1875 11 9.90625 11 9.625 10.9375L8.75 11.7812C8.625 11.9375 8.4375 12 8.25 12H7V13.25C7 13.6875 6.65625 14 6.25 14H5V15.25C5 15.6875 4.65625 16 4.25 16H0.75C0.3125 16 0 15.6875 0 15.25V12.25C0 12.0625 0.0625 11.875 0.21875 11.7188L5.125 6.8125C5.03125 6.375 5 5.96875 5 5.5C5 2.46875 7.4375 0 10.5 0C13.5312 0 16 2.46875 16 5.5C16 8.5625 13.5312 11 10.5 11ZM10.5 10C12.9688 10 15 8 15 5.5C15 3.03125 12.9688 1 10.5 1C8 1 6 3.03125 6 5.5C6 5.875 6.03125 6.21875 6.09375 6.5625L6.25 7.125L1 12.375V15H4V13H6V11H8.125L9.28125 9.875L9.78125 9.96875C10 10 10.25 10 10.5 10Z",fill:"currentColor"})});case"network":return(0,s.jsx)("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M5 2C5 0.90625 5.875 0 7 0C8.09375 0 9 0.90625 9 2C9 2.625 8.71875 3.15625 8.28125 3.53125L9.5 6.15625C9.8125 6.0625 10.1562 6 10.5 6C11.4688 6 12.375 6.4375 13 7.09375L16.1562 4.8125C16.0312 4.5625 16 4.3125 16 4C16 2.90625 16.875 2 18 2C19.0938 2 20 2.90625 20 4C20 5.125 19.0938 6 18 6C17.5312 6 17.0938 5.875 16.7812 5.59375L13.5938 7.90625C13.8438 8.375 14 8.9375 14 9.5C14 10 13.875 10.4375 13.7188 10.875L16.5938 12.5938C16.9375 12.2188 17.4375 12 18 12C19.0938 12 20 12.9062 20 14C20 15.125 19.0938 16 18 16C16.875 16 16 15.125 16 14C16 13.8125 16 13.625 16.0625 13.4375L13.1875 11.7188C12.5625 12.5 11.5938 13 10.5 13C8.71875 13 7.25 11.7188 7.03125 10H3.90625C3.6875 10.875 2.90625 11.5 2 11.5C0.875 11.5 0 10.625 0 9.5C0 8.40625 0.875 7.5 2 7.5C2.90625 7.5 3.6875 8.15625 3.90625 9H7.03125C7.15625 8 7.75 7.125 8.59375 6.5625L7.40625 3.96875C7.25 4 7.125 4 7 4C5.875 4 5 3.125 5 2ZM7 3C7.53125 3 8 2.5625 8 2C8 1.46875 7.53125 1 7 1C6.4375 1 6 1.46875 6 2C6 2.5625 6.4375 3 7 3ZM18 5C18.5312 5 19 4.5625 19 4C19 3.46875 18.5312 3 18 3C17.4375 3 17 3.46875 17 4C17 4.5625 17.4375 5 18 5ZM18 13C17.4375 13 17 13.4688 17 14C17 14.5625 17.4375 15 18 15C18.5312 15 19 14.5625 19 14C19 13.4688 18.5312 13 18 13ZM2 10.5C2.53125 10.5 3 10.0625 3 9.5C3 8.96875 2.53125 8.5 2 8.5C1.4375 8.5 1 8.96875 1 9.5C1 10.0625 1.4375 10.5 2 10.5ZM10.5 12C11.875 12 13 10.9062 13 9.5C13 8.125 11.875 7 10.5 7C9.09375 7 8 8.125 8 9.5C8 10.9062 9.09375 12 10.5 12Z",fill:"currentColor"})});case"method":return(0,s.jsx)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14 0C15.0938 0 16 0.90625 16 2V4C16 5.125 15.0938 6 14 6H2C0.875 6 0 5.125 0 4V2C0 0.90625 0.875 0 2 0H14ZM15 4V2C15 1.46875 14.5312 1 14 1H2C1.4375 1 1 1.46875 1 2V4C1 4.5625 1.4375 5 2 5H14C14.5312 5 15 4.5625 15 4ZM13 2.25C13.4062 2.25 13.75 2.59375 13.75 3C13.75 3.4375 13.4062 3.75 13 3.75C12.5625 3.75 12.25 3.4375 12.25 3C12.25 2.59375 12.5625 2.25 13 2.25ZM10 2.25C10.4062 2.25 10.75 2.59375 10.75 3C10.75 3.4375 10.4062 3.75 10 3.75C9.5625 3.75 9.25 3.4375 9.25 3C9.25 2.59375 9.5625 2.25 10 2.25ZM14 8C15.0938 8 16 8.90625 16 10V12C16 13.125 15.0938 14 14 14H2C0.875 14 0 13.125 0 12V10C0 8.90625 0.875 8 2 8H14ZM15 12V10C15 9.46875 14.5312 9 14 9H2C1.4375 9 1 9.46875 1 10V12C1 12.5625 1.4375 13 2 13H14C14.5312 13 15 12.5625 15 12ZM13 10.25C13.4062 10.25 13.75 10.5938 13.75 11C13.75 11.4375 13.4062 11.75 13 11.75C12.5625 11.75 12.25 11.4375 12.25 11C12.25 10.5938 12.5625 10.25 13 10.25ZM10 10.25C10.4062 10.25 10.75 10.5938 10.75 11C10.75 11.4375 10.4062 11.75 10 11.75C9.5625 11.75 9.25 11.4375 9.25 11C9.25 10.5938 9.5625 10.25 10 10.25Z",fill:"currentColor"})});case"type":return(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12.75 0C13.4375 0 14 0.5625 14 1.25V2.75C14 3.46875 13.4375 4 12.75 4H12.5V10H12.75C13.4375 10 14 10.5625 14 11.25V12.75C14 13.4688 13.4375 14 12.75 14H11.25C10.5312 14 10 13.4688 10 12.75V12.5H4V12.75C4 13.4688 3.4375 14 2.75 14H1.25C0.53125 14 0 13.4688 0 12.75V11.25C0 10.5625 0.53125 10 1.25 10H1.5V4H1.25C0.53125 4 0 3.46875 0 2.75V1.25C0 0.5625 0.53125 0 1.25 0H2.75C3.4375 0 4 0.5625 4 1.25V1.5H10V1.25C10 0.5625 10.5312 0 11.25 0H12.75ZM12.75 1H11.25C11.0938 1 11 1.125 11 1.25V2.75C11 2.90625 11.0938 3 11.25 3H12.75C12.875 3 13 2.90625 13 2.75V1.25C13 1.125 12.875 1 12.75 1ZM2.5 10H2.75C3.4375 10 4 10.5625 4 11.25V11.5H10V11.25C10 10.5625 10.5312 10 11.25 10H11.5V4H11.25C10.5312 4 10 3.46875 10 2.75V2.5H4V2.75C4 3.46875 3.4375 4 2.75 4H2.5V10ZM1 11.25V12.75C1 12.9062 1.09375 13 1.25 13H2.75C2.875 13 3 12.9062 3 12.75V11.25C3 11.125 2.875 11 2.75 11H1.25C1.09375 11 1 11.125 1 11.25ZM11 11.25V12.75C11 12.9062 11.0938 13 11.25 13H12.75C12.875 13 13 12.9062 13 12.75V11.25C13 11.125 12.875 11 12.75 11H11.25C11.0938 11 11 11.125 11 11.25ZM1 1.25V2.75C1 2.90625 1.09375 3 1.25 3H2.75C2.875 3 3 2.90625 3 2.75V1.25C3 1.125 2.875 1 2.75 1H1.25C1.09375 1 1 1.125 1 1.25Z",fill:"currentColor"})});case"arrow-right":return(0,s.jsx)("svg",{width:"15",height:"13",viewBox:"0 0 15 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M13.8438 7.34375L8.65625 12.8438C8.5625 12.9688 8.40625 13 8.28125 13C8.15625 13 8.03125 12.9688 7.9375 12.875C7.71875 12.6875 7.71875 12.375 7.90625 12.1875L12.2812 7.5H0.5C0.21875 7.5 0 7.28125 0 7.03125C0 6.78125 0.21875 6.5 0.5 6.5H12.2812L7.90625 1.84375C7.71875 1.65625 7.71875 1.34375 7.9375 1.15625C8.15625 0.96875 8.46875 0.96875 8.65625 1.1875L13.8438 6.6875C14.0312 6.875 14.0312 7.15625 13.8438 7.34375Z",fill:"#FF5833"})});case"alert-error":return(0,s.jsx)("svg",{width:"22",height:"25",viewBox:"0 0 22 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M15.8281 11.2656C15.9688 11.5938 16.1562 11.875 16.2969 12.1562C17.6562 14.6875 16.9531 17.8281 14.7031 19.375C14.5625 19.4688 14.4219 19.5156 14.2812 19.5156C14.0469 19.5156 13.8125 19.4219 13.625 19.2344C13.3906 18.8594 13.4844 18.3906 13.8125 18.1562C15.4531 17.0312 15.9219 14.8281 15.0312 12.9531L13.3438 14.9219C13.2031 15.0625 12.9688 15.1562 12.7344 15.1562C12.5 15.1562 12.3125 15.0625 12.1719 14.875C11.0469 13.4688 9.54688 11.5 8.70312 10.4688C7.15625 12.3438 6.5 13.4688 6.5 14.6406C6.5 15.0625 6.125 15.3906 5.75 15.3906C5.32812 15.3906 5 15.0625 5 14.6406C5 12.7188 6.21875 11.0781 8.14062 8.78125C8.28125 8.64062 8.46875 8.54688 8.70312 8.5C8.89062 8.5 9.125 8.59375 9.26562 8.78125C9.5 9.0625 11.7031 11.875 12.7812 13.2344L14.6094 11.1719C14.75 10.9844 14.9844 10.8906 15.2188 10.9375C15.4531 10.9375 15.6875 11.0781 15.8281 11.2656ZM15.8281 3.48438C19.1562 6.57812 21.5 11.5938 21.5 14.1719C21.5 20.125 16.7656 25 11 25C5.1875 25 0.5 20.125 0.5 14.125C0.5 10.75 3.64062 5.3125 8.04688 1.23438C8.32812 0.953125 8.75 0.953125 9.03125 1.23438C10.4844 2.54688 11.7969 4 12.875 5.45312C13.4844 4.75 14.1406 4.09375 14.7969 3.48438C15.0781 3.20312 15.5469 3.20312 15.8281 3.48438ZM11 23.5C15.9219 23.5 20 19.3281 20 14.125C20 12.1094 17.9844 7.84375 15.3125 5.125C14.6562 5.78125 14.0469 6.4375 13.4375 7.1875C13.2969 7.32812 13.1094 7.46875 12.8281 7.46875C12.5938 7.42188 12.4062 7.32812 12.2656 7.14062C11.1875 5.6875 9.92188 4.1875 8.5625 2.82812C4.76562 6.57812 2 11.3594 2 14.1719C2 19.3281 6.03125 23.5 11 23.5Z",fill:"currentColor"})});case"alert-success":return(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M11.0156 15.5625C10.7344 15.8438 10.2188 15.8438 9.9375 15.5625L6.9375 12.5625C6.65625 12.2812 6.65625 11.7656 6.9375 11.4844C7.21875 11.2031 7.73438 11.2031 8.01562 11.4844L10.5 13.9688L15.9375 8.48438C16.2188 8.20312 16.7344 8.20312 17.0156 8.48438C17.2969 8.76562 17.2969 9.28125 17.0156 9.5625L11.0156 15.5625ZM24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12C0 5.39062 5.34375 0 12 0C18.6094 0 24 5.39062 24 12ZM12 1.5C6.1875 1.5 1.5 6.23438 1.5 12C1.5 17.8125 6.1875 22.5 12 22.5C17.7656 22.5 22.5 17.8125 22.5 12C22.5 6.23438 17.7656 1.5 12 1.5Z",fill:"currentColor"})});case"alert-info":return(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12 0C18.6094 0 24 5.39062 24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12C0 5.39062 5.34375 0 12 0ZM12 22.5C17.7656 22.5 22.5 17.8125 22.5 12C22.5 6.23438 17.7656 1.5 12 1.5C6.1875 1.5 1.5 6.23438 1.5 12C1.5 17.8125 6.1875 22.5 12 22.5ZM12 8.625C11.3438 8.625 10.875 8.15625 10.875 7.5C10.875 6.89062 11.3438 6.375 12 6.375C12.6094 6.375 13.125 6.89062 13.125 7.5C13.125 8.15625 12.6094 8.625 12 8.625ZM14.25 16.5C14.625 16.5 15 16.875 15 17.25C15 17.6719 14.625 18 14.25 18H9.75C9.32812 18 9 17.6719 9 17.25C9 16.875 9.32812 16.5 9.75 16.5H11.25V12H10.5C10.0781 12 9.75 11.6719 9.75 11.25C9.75 10.875 10.0781 10.5 10.5 10.5H12C12.375 10.5 12.75 10.875 12.75 11.25V16.5H14.25Z",fill:"currentColor"})});case"angle-right":return(0,s.jsx)("svg",{width:"9",height:"15",viewBox:"0 0 9 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1.33337 15C1.05212 15 0.802124 14.9062 0.614624 14.7188C0.208374 14.3438 0.208374 13.6875 0.614624 13.3125L5.89587 8L0.614624 2.71875C0.208374 2.34375 0.208374 1.6875 0.614624 1.3125C0.989624 0.90625 1.64587 0.90625 2.02087 1.3125L8.02087 7.3125C8.42712 7.6875 8.42712 8.34375 8.02087 8.71875L2.02087 14.7188C1.83337 14.9062 1.58337 15 1.33337 15Z",fill:"currentColor"})});case"angle-line-right":return(0,s.jsx)("svg",{width:"15",height:"13",viewBox:"0 0 15 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z",fill:"currentColor"})});default:return null}})()})};var P=t(28774),N=t(21432);const M=e=>{let{url:a="{network}",id:t="{ID}",method:n="method",params:o=[],logged:i=!1,hideFooter:c=!1,response:d,isExpansionNetwork:p=!1}=e;const u=(0,r.useMemo)((()=>{const e=0===o.length?"":o.map((e=>"boolean"==typeof e?`${e}`:`"${e}"`));return p?`curl -X 'GET' \\\n'https://${a}'`:`curl https://${a}/v3/${t} \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "jsonrpc": "2.0",\n    "method": "${n}",\n    "params": [${0===o.length?"":e}],\n    "id": 1\n  }'`}),[a,t,n,o,p]);return(0,s.jsxs)("div",{className:"terminal-wrapper",children:[(0,s.jsx)(N.A,{language:"cURL",children:u}),!c&&(0,s.jsxs)("div",{style:{marginTop:"-20px"},children:[i&&(0,s.jsx)("div",{className:"code-terminal-footer",children:d&&(0,s.jsx)("pre",{style:{backgroundColor:"#292A35"},children:d})}),(0,s.jsx)("div",{className:"code-terminal-footer bg-light-gray",children:i?(0,s.jsx)("div",{className:"btn-row",children:(0,s.jsxs)("button",{className:"submit-btn",type:"submit",children:[(0,s.jsx)("span",{children:"Send Request"}),(0,s.jsx)(H,{name:"arrow-right"})]})}):(0,s.jsxs)("p",{className:"description-row",children:[(0,s.jsx)(P.A,{target:"_blank",to:`${l}/login`,rel:"noreferrer",children:"Sign in"})," ","or"," ",(0,s.jsx)(P.A,{target:"_blank",to:`${l}/register`,rel:"noreferrer",children:"create an account"})," ","and reload the page to edit real requests"]})})]})]})};var A=t(78941);const B=e=>{let{keysOptions:a=[],initValues:t,onChange:n}=e;const l=(e,a)=>{n(e,a)},o=(0,r.useMemo)((()=>{const e=[...v.L1.methods],a=[...v.L2.methods];let s={types:[],methods:e};if(t?.netName?.networksTypes&&(s.types=t.netName.networksTypes),t?.netName?.value===b){const a=e.filter((e=>"eth_maxPriorityFeePerGas"!==e.value));s.methods=[...a]}return t?.netName?.value===w&&(s.methods=[...a]),s}),[t.netName]),[i,c]=(0,r.useState)([o.methods[0]]);return(0,r.useEffect)((()=>{const e=i.length>0?i[0]:o.methods[0];l(e,"netMethod")}),[i,o]),(0,s.jsxs)("div",{className:"flex-row",children:[(0,s.jsx)("div",{className:"flex-col w-lg-25",children:(0,s.jsxs)("div",{className:"select-wrap",children:[(0,s.jsx)(H,{name:"key",classes:"select-icon"}),(0,s.jsx)(A.Ay,{className:"custom-select",placeholder:"Key name",values:[t.apiKey],searchable:!1,options:a,onChange:e=>l(e[0],"apiKey")})]})}),(0,s.jsx)("div",{className:"flex-col w-lg-25",children:(0,s.jsxs)("div",{className:"select-wrap",children:[(0,s.jsx)(H,{name:"network",classes:"select-icon"}),(0,s.jsx)(A.Ay,{className:"custom-select",placeholder:"Select network",values:[t.netName],searchable:!1,options:y,onChange:e=>{const a=e[0];l(a,"netName"),l(a.networksTypes[0],"netType"),a.value===w?c([v.L2.methods[0]]):c([v.L1.methods[0]])}})]})}),(0,s.jsx)("div",{className:"flex-col w-lg-25",children:(0,s.jsxs)("div",{className:"select-wrap",children:[(0,s.jsx)(H,{name:"type",classes:"select-icon"}),(0,s.jsx)(A.Ay,{className:"custom-select",placeholder:"Select type",values:[t.netType],searchable:!1,options:o.types,onChange:e=>l(e[0],"netType")})]})}),(0,s.jsx)("div",{className:"flex-col w-lg-25",children:(0,s.jsxs)("div",{className:"select-wrap",children:[(0,s.jsx)(H,{name:"method",classes:"select-icon"}),(0,s.jsx)(A.Ay,{className:"custom-select",placeholder:"Select method",values:i,options:o.methods,onChange:e=>{c(e)},onDropdownClose:()=>{0===i.length&&c([o.methods[0]])}})]})})]})},_={opened:!1,type:g,title:"",description:""},I={opened:!0,type:C,title:"Request failed",description:(0,s.jsxs)(s.Fragment,{children:["Please try again. If the problem persists contact our"," ",(0,s.jsx)(P.A,{to:"https://support.infura.io/hc/en-us",children:"support team"})]})},L={opened:!0,type:x,title:"Request sent!",description:(0,s.jsxs)(s.Fragment,{children:["Your request has been sent to the network endpoint you selected which returned a response with the requested information. Let\u2019s see how it performed in ",(0,s.jsx)(P.A,{to:`${l}/dashboard/stats`,children:"stats"})," or dive into ",(0,s.jsx)(P.A,{to:"https://docs.infura.io/dashboard-stats",children:"stats docs"}),"."]})},$={opened:!0,type:g,title:"Connect API key",description:(0,s.jsx)(s.Fragment,{children:"Select an API key, a network name, network type, and the method from the dropdowns below then click \u201cSend Request\u201d to send the request."})},E={opened:!0,type:g,title:"No API keys created",description:(0,s.jsxs)(s.Fragment,{children:["You don\u2019t have any API Keys yet."," ",(0,s.jsx)(P.A,{to:`${l}/dashboard`,children:"Create an API key"})," to access your keys and send requests."]})},V={opened:!0,type:C,title:"Access Denied",description:(0,s.jsxs)(s.Fragment,{children:["The API key selected is not authorized for this specific product. To enable access, please add this product to your API key through the"," ",(0,s.jsx)(P.A,{to:`${l}/dashboard`,children:"Infura Dashboard"})]})},F=e=>{let{opened:a,type:t,title:n,description:r}=e;if(!a)return null;return(0,s.jsxs)("div",{className:`message-box ${t}`,children:[(0,s.jsxs)("div",{className:"message-box-heading",children:[(()=>{switch(t){case C:return(0,s.jsx)(H,{name:"alert-error"});case x:return(0,s.jsx)(H,{name:"alert-success"});default:return(0,s.jsx)(H,{name:"alert-info"})}})(),(0,s.jsx)("strong",{children:n})]}),(0,s.jsx)("div",{className:"message-box-body",children:r})]})};var Z=t(51107);const S=()=>{const{user:e,keys:a,loading:t}=T(),[n,l]=(0,r.useState)({..._}),[o,i]=(0,r.useState)({...j}),[c,d]=(0,r.useState)(void 0),p=(e,a)=>{i((t=>{const s={...t};return s[a]=e,s}))},u=(0,r.useMemo)((()=>a.length>0?(p({label:a[0].name,value:a[0].id,private:a[0].private||""},"apiKey"),a.map((e=>({label:e.name,value:e.id,private:e?.private||""})))):[]),[a]),h=(0,r.useMemo)((()=>{const s=e&&0===a.length&&!t;return s&&l({...E}),e&&!s&&l({...$}),s}),[e,a,t]),m=(0,r.useMemo)((()=>{const{netName:e,netType:a,netMethod:t,apiKey:s}=o;let n=a.value,r=t.params.mainnet;return e.complexEndpoint&&(n=`${e.value}-${a.value}`),t.params[a.value]&&(r=t.params[a.value]),e.isExpansion?{url:`${e.value}.${a.urlType}/v3/${s.value}/networks/${a.value}/${t.value}`,params:[],isExpansionNetwork:!0}:{url:`${n}.${a.urlType}`,params:r,isExpansionNetwork:!1}}),[o]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:async a=>{a.preventDefault(),l({..._});const{apiKey:t,netMethod:s}=o;let n=`https://${m.url}/v3/${t.value}`,r={method:"POST","Content-Type":"application/json",body:JSON.stringify({jsonrpc:"2.0",method:s.value,params:m.params,id:1})};m.isExpansionNetwork&&(n=`https://${m.url}`,r={method:"GET"}),(e=>{let{type:a,clickUrl:t,clickText:s,location:n,userId:r}=e;window.analytics&&window.analytics.track(`CTA ${a} Clicked`,{...t&&{click_url:t},...s&&{click_text:s},...n&&{location:n},...r&&{user_id:r}})})({type:"Submit Button",clickText:"Send Request",location:"https://docs.infura.io/",userId:e.id});try{const e=await fetch(n,r);if(e.ok){const a=await e.json();l({...L}),d(JSON.stringify(a,null,2))}else 401===e.status?l({...V}):l({...I}),d(void 0)}catch{l({...I}),d(void 0)}},className:"terminal-form",children:[(0,s.jsx)(F,{opened:n.opened,type:n.type,title:n.title,description:n.description}),(0,s.jsx)(Z.A,{as:"h3",className:"code-terminal-heading",children:"Connect to a network"}),u.length>0&&(0,s.jsx)(B,{keysOptions:u,initValues:o,onChange:p}),(0,s.jsx)(M,{url:m.url,id:o.apiKey.value,method:o.netMethod.value,params:m.params,logged:!!e,hideFooter:h||t,response:c,isExpansionNetwork:m.isExpansionNetwork})]})})},q="/img/logos",D=[{name:"Arbitrum",href:"/api/networks/arbitrum",logo:`${q}/logo-arbitrum.svg`},{name:"Avalanche",href:"/api/networks/avalanche-c-chain",logo:`${q}/logo-avalanche.svg`},{name:"Base",href:"/api/networks/base",logo:`${q}/logo-base.svg`},{name:"Blast",href:"/api/networks/blast",logo:`${q}/logo-blast.svg`},{name:"Celo",href:"/api/networks/celo",logo:`${q}/logo-celo.svg`},{name:"IPFS",href:"/api/networks/ipfs",logo:`${q}/logo-ipfs.svg`},{name:"Ethereum",href:"/api/networks/ethereum",logo:`${q}/logo-eth.svg`},{name:"Linea",href:"/api/networks/linea",logo:`${q}/logo-linea.svg`},{name:"Mantle",href:"/api/networks/mantle",logo:`${q}/logo-mantle.svg`},{name:"Optimism",href:"/api/networks/optimism",logo:`${q}/logo-opt.svg`},{name:"Palm",href:"/api/networks/palm",logo:`${q}/logo-palm.svg`},{name:"Polygon",href:"/api/networks/polygon-pos",logo:`${q}/logo-polygon.svg`},{name:"Starknet",href:"/api/networks/starknet",logo:`${q}/logo-starknet.svg`}],G=()=>{const[e,a]=(0,r.useState)(!0),[t,n]=(0,r.useState)(!1),l=()=>{n(window.innerWidth<768)};(0,r.useEffect)((()=>{if(window)return n(window.innerWidth<768),window.addEventListener("resize",l,!1),()=>{window.removeEventListener("resize",l)}}),[]);const o=(a,n)=>{let{name:r,href:l,logo:o}=a;return(0,s.jsxs)(P.A,{className:"api-card transition-300 "+(e&&t?4===n?"opacity-30":3===n?"opacity-60":"":""),to:l,children:[(0,s.jsx)("div",{className:"logo-wrap",children:(0,s.jsx)("img",{src:o,alt:`${r} logo`})}),r,(0,s.jsxs)("span",{className:"icon-wrap",children:[(0,s.jsx)(H,{name:"angle-right",classes:"static-icon"}),(0,s.jsx)(H,{name:"angle-line-right",classes:"hover-icon"})]})]},r)};return(0,s.jsxs)("section",{className:"networks-section",children:[(0,s.jsx)("div",{className:"grid-row-wrap",children:D.map(((a,s)=>t?s<=4||!e?o(a,s):null:o(a,s)))}),t&&(0,s.jsxs)("div",{className:"show-more-less",onClick:()=>{a(!e)},children:[(0,s.jsx)("span",{className:"show-more-less-icon",children:e?"+":"\u2013"}),"show ",e?"more":"less"," networks"]})]})},O={description:"Your guide to Web3 development."},R="Infura APIs",U={id:"api/index",title:"Infura APIs",description:"Your guide to Web3 development.",source:"@site/services/api/index.mdx",sourceDirName:"api",slug:"/api/",permalink:"/test-integrate-infura/services/api/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/index.mdx",tags:[],version:"current",frontMatter:{description:"Your guide to Web3 development."},sidebar:"servicesSidebar",previous:{title:"Introduction",permalink:"/test-integrate-infura/services/"},next:{title:"Getting started",permalink:"/test-integrate-infura/services/api/getting-started"}},W={},K=[{value:"Features",id:"features",level:2},{value:"Browse by network",id:"browse-by-network",level:2},{value:"Try out an Infura endpoint",id:"try-out-an-infura-endpoint",level:2}];function z(e){const a={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Head:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"infura-apis",children:"Infura APIs"}),"\n",(0,s.jsx)(a.p,{children:"Infura is a managed service that provides secure and reliable access to a variety of blockchain networks, removing\nthe complexities of managing blockchain infrastructure, and allowing developers to focus on building innovative Web3\napplications."}),"\n",(0,s.jsx)(a.p,{children:"Infura serves as a crucial bridge connecting applications to blockchain networks, providing developers with robust APIs\nto interact with the blockchain, deploy and manage smart contracts, and much more.\nWhether you're building a decentralized application (Dapp), a crypto wallet, or an exchange, Infura provides the essential\ninfrastructure and tools to create high-quality, reliable Web3 applications."}),"\n",(0,s.jsx)(a.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(a.p,{children:"Infura offers a robust set of features designed to enhance the development, deployment, and management of dapps. These features\ninclude:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Broad access to major networks"})," - Infura supports the major networks, allowing you to take advantage of Ethereums's smart\ncontracts, IPFS's distributed file system, or high performing layer 2 networks."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Failover support for APIs"})," - Currently available on select networks for customers on Growth or Custom plans; if an Infura API\nendpoint becomes unavailable for any reason, requests can be forwarded to a partner to fulfill the request.\nThis ensures that your application remains up and running, providing uninterrupted service to your users."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Archive data querying"})," - ",(0,s.jsx)(a.a,{href:"/test-integrate-infura/services/api/networks/ethereum/concepts/archive-data",children:"Access historical state data"})," at any given\nblock height. This is an invaluable feature for those who need to perform deep analyses of past transactions, contract\nstates, or balances. With this feature, developers can build applications that are not only data-rich but also comprehensive."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Expansion APIs"})," -\n",(0,s.jsx)(a.a,{href:"../api/infura-expansion-apis/gas-api/",children:"Access Infura's multi-chain Gas API"}),". Use the Gas API used by the MetaMask wallet to analyze and\noptimize gas costs on EIP-1559 compatible chains."]}),"\n"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("meta",{httpEquiv:"cache-control",content:"no-cache"}),(0,s.jsx)("meta",{httpEquiv:"expires",content:"0"}),(0,s.jsx)("meta",{httpEquiv:"pragma",content:"no-cache"})]}),"\n",(0,s.jsx)(a.h2,{id:"browse-by-network",children:"Browse by network"}),"\n",(0,s.jsx)(a.p,{children:"Infura provides flexibility and interoperabiity to Web3 applications by allowing access to multiple networks. Click below\nto explore the supported networks."}),"\n",(0,s.jsx)(G,{}),"\n",(0,s.jsx)(a.h2,{id:"try-out-an-infura-endpoint",children:"Try out an Infura endpoint"}),"\n",(0,s.jsx)(a.p,{children:"Interact with the live terminal below and start testing Infura's core capabilities"}),"\n",(0,s.jsx)(S,{})]})}function Y(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(z,{...e})}):z(e)}}}]);