(()=>{"use strict";var e,a,c,d,f,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,e=[],t.O=(a,c,d,f)=>{if(!c){var b=1/0;for(n=0;n<e.length;n++){c=e[n][0],d=e[n][1],f=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||b>=f)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(n--,1);var l=d();void 0!==l&&(a=l)}}return a}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[c,d,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(f,b),f},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({40:"8145e54e",53:"935f2afb",82:"bcd3ef34",106:"d744a15b",145:"68d41281",167:"486ba757",261:"reactPlayerKaltura",288:"dfccf318",368:"41f5386a",476:"29730451",793:"cdef7d1f",795:"63b87658",872:"a37313e4",941:"2ca6782d",1038:"c423245b",1145:"40d431ee",1321:"d2baf1b2",1342:"6bd0212d",1452:"389220b7",1507:"4dd0955d",1529:"8c744b17",1687:"8267a4cd",1799:"ce093305",1858:"86c686bd",2071:"fd6c27b9",2121:"reactPlayerFacebook",2124:"88fb5f9d",2177:"fd774138",2250:"4ecdda4a",2257:"95c87532",2274:"4efa9f2e",2419:"7c5954e6",2472:"ce634f1e",2546:"reactPlayerStreamable",2601:"09bd11f6",2644:"fd855559",2741:"c3be8443",2744:"f4fa537f",2794:"577b8b2a",2813:"d5f8208c",2841:"56abd40c",2928:"d2011f4f",2959:"0d1f1c53",2998:"909d3e79",3237:"1df93b7f",3414:"09070e4b",3520:"cc7fb5a4",3629:"c6757268",3647:"e7087fcf",3696:"015fe5e8",3743:"reactPlayerVimeo",3805:"91efdb01",3845:"fc9c3721",3899:"bb0a09d2",4151:"ff576332",4232:"7976d7e4",4257:"9cea254b",4283:"c66adc2f",4328:"573e544f",4359:"3d0ce9fc",4397:"3cc70d16",4439:"reactPlayerYouTube",4442:"ba7d2542",4467:"ab8b636d",4507:"129514b0",4646:"56d3cc0a",4657:"b099eb42",4667:"reactPlayerMixcloud",4717:"ef105518",4957:"2150471b",5015:"5eb549af",5209:"1a5cfe2b",5254:"ab1f7856",5412:"7d4adaa7",5413:"dfe67240",5473:"f5000f06",5576:"3d86cae6",5589:"37f92ba7",5677:"084f6b2d",5709:"8ec30cb2",5764:"66cf4c41",5774:"406cc3cd",5812:"f0c90a0b",5965:"2e39c2b3",6011:"reactPlayerFilePlayer",6125:"reactPlayerSoundCloud",6139:"391ef89b",6147:"c455d87c",6181:"8d63df11",6216:"reactPlayerTwitch",6250:"2b6d957d",6254:"05e0cb61",6325:"46731dd0",6423:"77a46a80",6487:"ad36dd7c",6528:"7c5a4f52",6570:"903ae864",6655:"70334ba8",6695:"198d1261",6749:"160f551f",6752:"be5df1d1",6754:"cfc76383",6854:"25dd8fd2",6942:"5806c6d0",7050:"11b7fc92",7129:"31f955cf",7185:"3406bc1f",7194:"01740467",7244:"150a15d5",7266:"5e56b9d4",7340:"ce260bbc",7416:"6483afbc",7440:"9edebb4e",7455:"27d52537",7596:"reactPlayerDailyMotion",7612:"72448035",7664:"reactPlayerPreview",7767:"149070b9",7918:"17896441",7920:"1a4e3797",8055:"reactPlayerWistia",8078:"d058e3e1",8114:"8d9a344b",8162:"50dc8f0c",8218:"3669837a",8301:"4ad67257",8358:"bf7ad130",8360:"95ed0894",8439:"3ba19fe4",8613:"8d4eac50",8669:"56aa118c",8742:"6ebf937c",8778:"b91521d0",8812:"f760ba82",8888:"reactPlayerVidyard",8931:"cf946124",9038:"cc6a76b5",9057:"94590018",9142:"e46f8151",9196:"e8fb5fdf",9408:"3dcb4053",9514:"1be78505",9565:"f3f094fb",9817:"14eb3368",9936:"6ec7c3a5",9978:"10737780"}[e]||e)+"."+{40:"bb539579",53:"f9d754bb",82:"b0ced9fa",106:"4ff485f4",145:"835f5a15",167:"0cebee72",261:"091ed2a3",288:"2fa9e364",368:"ae7e3fbc",476:"c6b65344",793:"bf058604",795:"1c4ff033",872:"3492dfa9",941:"8a9a52c4",1038:"de7e3007",1145:"96fd87af",1321:"0f7ebbb9",1342:"51ebf2f5",1426:"be64a7dc",1452:"ecd20260",1507:"5ada0f73",1529:"66c1659f",1687:"8a677c4f",1799:"55850cd8",1858:"a24a7ca9",2071:"2ddd3e07",2121:"697cc207",2124:"8c6f61e5",2177:"83334151",2250:"3a401744",2257:"dc2b44f3",2274:"90c0274e",2419:"4f011866",2472:"3555c223",2546:"4582143a",2601:"2a5c180f",2644:"0307cbee",2741:"81292796",2744:"e001b03d",2794:"c9840aef",2813:"79048531",2841:"1545276f",2928:"54aa55d9",2959:"698de894",2998:"f846d234",3237:"585d2316",3414:"c766ae4f",3520:"567199b3",3629:"375e6778",3647:"de5dd3a5",3696:"68df29b5",3743:"42a0d9c0",3805:"239b39a4",3845:"169e7258",3899:"2821256d",4151:"ae1b8c36",4232:"5ebf183f",4257:"25bd899f",4283:"9ca2184d",4328:"2e2f053d",4359:"c9b4fd32",4397:"4185f00d",4439:"a9b14741",4442:"ea828f08",4467:"89fe0009",4507:"8ab44d34",4646:"7f9b1cf6",4657:"5455053c",4667:"3aafbc0c",4717:"2e6dc14d",4957:"63f92c90",4972:"e49176b8",5015:"a816da7c",5209:"7f93821e",5254:"7b53abd6",5412:"ae65b643",5413:"9f9776b1",5473:"4b3a3b3c",5576:"c926d31c",5589:"49829119",5677:"f52ccf99",5709:"e4284d0b",5764:"6e7025fc",5774:"982e42ce",5812:"845d2534",5965:"aa8422dd",6011:"98545a61",6125:"bacff259",6139:"2c47a794",6147:"8b0dc96b",6181:"b4eae43f",6216:"d718da62",6250:"f80f6fe0",6254:"86bcc028",6316:"d9003c37",6325:"dafe925e",6423:"40511bf2",6487:"ca8a33e2",6528:"4f7799c6",6570:"3b5e90c1",6655:"270eb3c2",6695:"fd87f074",6749:"885d77c5",6752:"e32f5004",6754:"7c1561da",6760:"9c225b60",6854:"ef71bdb2",6942:"95cd827c",6945:"07888cb2",7050:"2efdf2b1",7129:"9ff4f11d",7185:"4d30f2dd",7194:"182deb34",7244:"1e40eb92",7266:"3bc21449",7340:"4fa945fc",7416:"4427f100",7440:"31f97373",7455:"c122dbe5",7596:"a49c1936",7612:"7e95f2c8",7664:"9db1cd05",7724:"df7eb109",7767:"7d209866",7918:"31a806e6",7920:"3b179cfe",8055:"508ea7c7",8078:"2217f213",8114:"8945502a",8162:"342d6798",8218:"250669d6",8301:"41240870",8358:"55105b80",8360:"0ade4ca7",8439:"39c814e8",8613:"d7478490",8669:"d657d635",8685:"19ce8911",8742:"d4a11cd1",8778:"d77c6b98",8812:"7ad137ba",8888:"1189c126",8894:"814fc599",8931:"3eef8aa5",9038:"b78a4ba4",9057:"31dc2a18",9142:"654d225b",9196:"34f6e010",9408:"fbd9cb74",9487:"e0727ae8",9514:"bf7c0fe3",9534:"1a0d5d62",9565:"5ebf8bbf",9701:"3bfec2d8",9817:"c055dbb0",9936:"835935ff",9978:"4e72b798",9984:"028e1aad"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="metamask-docs:",t.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=e),d[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/Snaps-allowedOrigins-documentation/",t.gca=function(e){return e={10737780:"9978",17896441:"7918",29730451:"476",72448035:"7612",94590018:"9057","8145e54e":"40","935f2afb":"53",bcd3ef34:"82",d744a15b:"106","68d41281":"145","486ba757":"167",reactPlayerKaltura:"261",dfccf318:"288","41f5386a":"368",cdef7d1f:"793","63b87658":"795",a37313e4:"872","2ca6782d":"941",c423245b:"1038","40d431ee":"1145",d2baf1b2:"1321","6bd0212d":"1342","389220b7":"1452","4dd0955d":"1507","8c744b17":"1529","8267a4cd":"1687",ce093305:"1799","86c686bd":"1858",fd6c27b9:"2071",reactPlayerFacebook:"2121","88fb5f9d":"2124",fd774138:"2177","4ecdda4a":"2250","95c87532":"2257","4efa9f2e":"2274","7c5954e6":"2419",ce634f1e:"2472",reactPlayerStreamable:"2546","09bd11f6":"2601",fd855559:"2644",c3be8443:"2741",f4fa537f:"2744","577b8b2a":"2794",d5f8208c:"2813","56abd40c":"2841",d2011f4f:"2928","0d1f1c53":"2959","909d3e79":"2998","1df93b7f":"3237","09070e4b":"3414",cc7fb5a4:"3520",c6757268:"3629",e7087fcf:"3647","015fe5e8":"3696",reactPlayerVimeo:"3743","91efdb01":"3805",fc9c3721:"3845",bb0a09d2:"3899",ff576332:"4151","7976d7e4":"4232","9cea254b":"4257",c66adc2f:"4283","573e544f":"4328","3d0ce9fc":"4359","3cc70d16":"4397",reactPlayerYouTube:"4439",ba7d2542:"4442",ab8b636d:"4467","129514b0":"4507","56d3cc0a":"4646",b099eb42:"4657",reactPlayerMixcloud:"4667",ef105518:"4717","2150471b":"4957","5eb549af":"5015","1a5cfe2b":"5209",ab1f7856:"5254","7d4adaa7":"5412",dfe67240:"5413",f5000f06:"5473","3d86cae6":"5576","37f92ba7":"5589","084f6b2d":"5677","8ec30cb2":"5709","66cf4c41":"5764","406cc3cd":"5774",f0c90a0b:"5812","2e39c2b3":"5965",reactPlayerFilePlayer:"6011",reactPlayerSoundCloud:"6125","391ef89b":"6139",c455d87c:"6147","8d63df11":"6181",reactPlayerTwitch:"6216","2b6d957d":"6250","05e0cb61":"6254","46731dd0":"6325","77a46a80":"6423",ad36dd7c:"6487","7c5a4f52":"6528","903ae864":"6570","70334ba8":"6655","198d1261":"6695","160f551f":"6749",be5df1d1:"6752",cfc76383:"6754","25dd8fd2":"6854","5806c6d0":"6942","11b7fc92":"7050","31f955cf":"7129","3406bc1f":"7185","01740467":"7194","150a15d5":"7244","5e56b9d4":"7266",ce260bbc:"7340","6483afbc":"7416","9edebb4e":"7440","27d52537":"7455",reactPlayerDailyMotion:"7596",reactPlayerPreview:"7664","149070b9":"7767","1a4e3797":"7920",reactPlayerWistia:"8055",d058e3e1:"8078","8d9a344b":"8114","50dc8f0c":"8162","3669837a":"8218","4ad67257":"8301",bf7ad130:"8358","95ed0894":"8360","3ba19fe4":"8439","8d4eac50":"8613","56aa118c":"8669","6ebf937c":"8742",b91521d0:"8778",f760ba82:"8812",reactPlayerVidyard:"8888",cf946124:"8931",cc6a76b5:"9038",e46f8151:"9142",e8fb5fdf:"9196","3dcb4053":"9408","1be78505":"9514",f3f094fb:"9565","14eb3368":"9817","6ec7c3a5":"9936"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var d=t.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,d[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,b=c[0],r=c[1],o=c[2],l=0;if(b.some((a=>0!==e[a]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var n=o(t)}for(a&&a(c);l<b.length;l++)f=b[l],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(n)},c=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();