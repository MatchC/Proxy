
// env.js 全局
function _0x27dc(){const _0x1a08d5=['usableScore','isNode','\x0a=============\x20用户CK有效性验证\x20=============\x0a','msg','barkKey','wait','application/json','获取签到Cookie成功🎉','7188dVwEql','round','✅目前共','✅check\x20success!','1112BdBrbG','index','ckStatus','join','notice','./sendNotify','method','3049300cHRKCh','heytea_data','5715180ptPUkL','getdata','signin','未找到CK','headers','共找到','3176236qOVTOk','1343822WAJHOm','setdata','❌未检测到ck，请添加环境变量','env','finally','indexOf','bark_key','map','getRandomTime','5904440PmXzdp','length','code','个账号','authorization','🔷账号','\x20>>\x20Start\x20work','notifyMsg','point','data','✅签到成功！获得','6zeQrbr','\x20>>\x20Start\x20check\x20CK','79540xKynoa','done','803mqChUa','1HCrnfO','token','❌账号','push','score','catch','name','check','message','https://vip.heytea.com/api/service-member/vip/task/member','OPTIONS','随机延迟','all','keys','错误获取签到Cookie失败','log','\x20>>\x20check\x20ck\x20error!'];_0x27dc=function(){return _0x1a08d5;};return _0x27dc();}const _0x258ea8=_0x4b8f;(function(_0x58e1c9,_0x4635a5){const _0xb7cbe5=_0x4b8f,_0x507c67=_0x58e1c9();while(!![]){try{const _0x24f25c=parseInt(_0xb7cbe5(0x20e))/0x1*(-parseInt(_0xb7cbe5(0x1f5))/0x2)+parseInt(_0xb7cbe5(0x227))/0x3*(-parseInt(_0xb7cbe5(0x22b))/0x4)+parseInt(_0xb7cbe5(0x1ec))/0x5+-parseInt(_0xb7cbe5(0x209))/0x6*(-parseInt(_0xb7cbe5(0x1f4))/0x7)+parseInt(_0xb7cbe5(0x1fe))/0x8+parseInt(_0xb7cbe5(0x1ee))/0x9+-parseInt(_0xb7cbe5(0x20b))/0xa*(parseInt(_0xb7cbe5(0x20d))/0xb);if(_0x24f25c===_0x4635a5)break;else _0x507c67['push'](_0x507c67['shift']());}catch(_0xc00171){_0x507c67['push'](_0x507c67['shift']());}}}(_0x27dc,0x7e79a));const $=new Env('喜茶Go'),ckName=_0x258ea8(0x1ed),Notify=0x1,notify=$['isNode']()?require(_0x258ea8(0x230)):'';function _0x4b8f(_0x562139,_0x4940a2){const _0x27dcc7=_0x27dc();return _0x4b8f=function(_0x4b8f57,_0x4f9161){_0x4b8f57=_0x4b8f57-0x1ec;let _0x3a45e3=_0x27dcc7[_0x4b8f57];return _0x3a45e3;},_0x4b8f(_0x562139,_0x4940a2);}let envSplitor=['@'],userCookie=($[_0x258ea8(0x220)]()?process[_0x258ea8(0x1f8)][ckName]:$[_0x258ea8(0x1ef)](ckName))||'',userList=[],userIdx=0x0,userCount=0x0;$[_0x258ea8(0x205)]=[],$[_0x258ea8(0x223)]=($['isNode']()?process[_0x258ea8(0x1f8)]['bark_key']:$[_0x258ea8(0x1ef)](_0x258ea8(0x1fb)))||'';async function main(){const _0x2ffddc=_0x258ea8;await getNotice(),console[_0x2ffddc(0x21d)](_0x2ffddc(0x221));let _0x54136e=[];for(let _0x21707d of userList){console['log']('🔷账号'+_0x21707d[_0x2ffddc(0x22c)]+_0x2ffddc(0x20a)),_0x54136e['push'](await _0x21707d[_0x2ffddc(0x215)]()),await $[_0x2ffddc(0x224)](_0x21707d['getRandomTime']());}await Promise[_0x2ffddc(0x21a)](_0x54136e),console[_0x2ffddc(0x21d)]('\x0a==================\x20任务\x20==================\x0a'),_0x54136e=[];for(let _0x47df2 of userList){_0x47df2[_0x2ffddc(0x22d)]?(DoubleLog(_0x2ffddc(0x203)+_0x47df2[_0x2ffddc(0x22c)]+_0x2ffddc(0x204)),console[_0x2ffddc(0x21d)](_0x2ffddc(0x219)+_0x47df2[_0x2ffddc(0x1fd)]()+'ms'),_0x54136e[_0x2ffddc(0x211)](await _0x47df2[_0x2ffddc(0x1f0)]()),await $[_0x2ffddc(0x224)](_0x47df2[_0x2ffddc(0x1fd)]()),_0x54136e[_0x2ffddc(0x211)](await _0x47df2[_0x2ffddc(0x206)]()),await $[_0x2ffddc(0x224)](_0x47df2['getRandomTime']())):$[_0x2ffddc(0x205)][_0x2ffddc(0x211)](_0x2ffddc(0x210)+_0x47df2['index']+'\x20>>\x20Check\x20ck\x20error!');}await Promise[_0x2ffddc(0x21a)](_0x54136e);}class UserInfo{constructor(_0x462c6f){const _0x14a1ec=_0x258ea8;this[_0x14a1ec(0x22c)]=++userIdx,this[_0x14a1ec(0x20f)]=_0x462c6f,this[_0x14a1ec(0x22d)]=!![],this[_0x14a1ec(0x1f2)]={'Authorization':this[_0x14a1ec(0x20f)],'Content-Type':_0x14a1ec(0x225)};}[_0x258ea8(0x1fd)](){return randomInt(0x3e8,0xbb8);}async[_0x258ea8(0x1f0)](){const _0x33a01e=_0x258ea8;try{const _0x28d068={'url':'https://vip.heytea.com/api/service-member/vip/task/award/114','headers':{'Authorization':this['token'],'Content-Type':_0x33a01e(0x225)},'body':'{}'};let _0x2a99ec=await httpRequest(_0x28d068);_0x2a99ec?.[_0x33a01e(0x200)]==0x0?DoubleLog(_0x33a01e(0x208)+_0x2a99ec?.[_0x33a01e(0x207)]?.[_0x33a01e(0x212)]+'积分'):DoubleLog('🔶'+_0x2a99ec[_0x33a01e(0x216)]);}catch(_0xc15147){console[_0x33a01e(0x21d)](_0xc15147);}}async[_0x258ea8(0x206)](){const _0x153a20=_0x258ea8;let _0x4bec83={'url':_0x153a20(0x217),'headers':this[_0x153a20(0x1f2)]},_0x4ac5dd=await httpRequest(_0x4bec83);_0x4ac5dd?.[_0x153a20(0x200)]==0x0?DoubleLog(_0x153a20(0x229)+_0x4ac5dd?.[_0x153a20(0x207)]?.[_0x153a20(0x21f)]+'积分'):console[_0x153a20(0x21d)](_0x4ac5dd[_0x153a20(0x216)]);}async['check'](){const _0x5288cd=_0x258ea8;let _0x34c3f4={'url':_0x5288cd(0x217),'headers':this[_0x5288cd(0x1f2)]},_0x54f226=await httpRequest(_0x34c3f4);_0x54f226?.[_0x5288cd(0x200)]==0x0?console['log'](_0x5288cd(0x22a)):(this['ckStatus']=![],console[_0x5288cd(0x21d)](_0x5288cd(0x210)+this[_0x5288cd(0x22c)]+_0x5288cd(0x21e)));}}async function getCookie(){const _0x4f737d=_0x258ea8;if($request&&$request[_0x4f737d(0x231)]!=_0x4f737d(0x218)){const _0x10e60d=$request[_0x4f737d(0x1f2)]['Authorization']||$request[_0x4f737d(0x1f2)][_0x4f737d(0x202)];_0x10e60d?($[_0x4f737d(0x1f6)](_0x10e60d,ckName),$[_0x4f737d(0x222)]($['name'],'',_0x4f737d(0x226))):$[_0x4f737d(0x222)]($[_0x4f737d(0x214)],'',_0x4f737d(0x21c));}}async function getNotice(){const _0x1b183e=_0x258ea8;try{const _0x5f1adb=['https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json','https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json'];for(const _0xae7f25 of _0x5f1adb){const _0x88b712={'url':_0xae7f25,'headers':{'User-Agent':''}},_0xb16055=await httpRequest(_0x88b712);if(_0xb16055)console[_0x1b183e(0x21d)](_0xb16055[_0x1b183e(0x22f)]);}}catch(_0x36e369){console[_0x1b183e(0x21d)](_0x36e369);}}!(async()=>{const _0x280277=_0x258ea8;if(typeof $request!='undefined'){await getCookie();return;}if(!await checkEnv())throw new Error(_0x280277(0x1f7));;userList[_0x280277(0x1ff)]>0x0&&await main();})()[_0x258ea8(0x213)](_0x3cce32=>$['notifyMsg'][_0x258ea8(0x211)](_0x3cce32[_0x258ea8(0x216)]||_0x3cce32))[_0x258ea8(0x1f9)](async()=>{const _0x2053d9=_0x258ea8;$[_0x2053d9(0x223)]&&await BarkNotify($,$[_0x2053d9(0x223)],$[_0x2053d9(0x214)],$[_0x2053d9(0x205)][_0x2053d9(0x22e)]('\x0a'));;await SendMsg($[_0x2053d9(0x205)][_0x2053d9(0x22e)]('\x0a')),$[_0x2053d9(0x20c)]();});function DoubleLog(_0x12a005){const _0x2e224f=_0x258ea8;$[_0x2e224f(0x220)]()?_0x12a005&&(console[_0x2e224f(0x21d)](''+_0x12a005),$['notifyMsg'][_0x2e224f(0x211)](''+_0x12a005)):(console['log'](''+_0x12a005),$[_0x2e224f(0x205)]['push'](''+_0x12a005));}function toParams(_0x4ab4c0){const _0x5a31f0=_0x258ea8;var _0x568be5=Object[_0x5a31f0(0x21b)](_0x4ab4c0)[_0x5a31f0(0x1fc)](function(_0x5a3c9b){return encodeURIComponent(_0x5a3c9b)+'='+encodeURIComponent(_0x4ab4c0[_0x5a3c9b]);})[_0x5a31f0(0x22e)]('&');return _0x568be5;}async function checkEnv(){const _0x28f1cc=_0x258ea8;if(userCookie){let _0x38c414=envSplitor[0x0];for(let _0x5833d3 of envSplitor)if(userCookie[_0x28f1cc(0x1fa)](_0x5833d3)>-0x1){_0x38c414=_0x5833d3;break;}for(let _0x4742ca of userCookie['split'](_0x38c414))_0x4742ca&&userList[_0x28f1cc(0x211)](new UserInfo(_0x4742ca));userCount=userList[_0x28f1cc(0x1ff)];}else{console['log'](_0x28f1cc(0x1f1));return;}return console['log'](_0x28f1cc(0x1f3)+userCount+_0x28f1cc(0x201)),!![];}function randomInt(_0x25ce06,_0x4122e7){const _0xf8b109=_0x258ea8;return Math[_0xf8b109(0x228)](Math['random']()*(_0x4122e7-_0x25ce06)+_0x25ce06);}async function SendMsg(_0x189716){const _0xfe8e9f=_0x258ea8;if(!_0x189716)return;Notify>0x0?$[_0xfe8e9f(0x220)]()?await notify['sendNotify']($[_0xfe8e9f(0x214)],_0x189716):$['msg']($[_0xfe8e9f(0x214)],'',_0x189716):console[_0xfe8e9f(0x21d)](_0x189716);}

/** ---------------------------------固定不动区域----------------------------------------- */
// prettier-ignore

//请求函数函数二次封装
function httpRequest(options, method) { typeof (method) === 'undefined' ? ('body' in options ? method = 'post' : method = 'get') : method = method; return new Promise((resolve) => { $[method](options, (err, resp, data) => { try { if (err) { console.log(`${method}请求失败`); $.logErr(err) } else { if (data) { typeof JSON.parse(data) == 'object' ? data = JSON.parse(data) : data = data; resolve(data) } else { console.log(`请求api返回数据为空，请检查自身原因`) } } } catch (e) { $.logErr(e, resp) } finally { resolve() } }) }) }
//Bark APP notify
async function BarkNotify(c, k, t, b) { for (let i = 0; i < 3; i++) { console.log(`🔷Bark notify >> Start push (${i + 1})`); const s = await new Promise((n) => { c.post({ url: 'https://api.day.app/push', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: t, body: b, device_key: k, ext_params: { group: t } }) }, (e, r, d) => r && r.status == 200 ? n(1) : n(d || e)) }); if (s === 1) { console.log('✅Push success!'); break } else { console.log(`❌Push failed! >> ${s.message || s}`) } } };
//From chavyleung's Env.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, a) => { s.call(this, t, (t, s, r) => { t ? a(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const a = this.getdata(t); if (a) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, a) => e(a)) }) } runScript(t, e) { return new Promise(s => { let a = this.getdata("@chavy_boxjs_userCfgs.httpapi"); a = a ? a.replace(/\n/g, "").trim() : a; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [i, o] = a.split("@"), n = { url: `http://${o}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": i, Accept: "*/*" }, timeout: r }; this.post(n, (t, e, a) => s(a)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e); if (!s && !a) return {}; { const a = s ? t : e; try { return JSON.parse(this.fs.readFileSync(a)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const a = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of a) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, a, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e), i = this.getval(a), o = a ? "null" === i ? null : i || "{}" : "{}"; try { const e = JSON.parse(o); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), a) } catch (e) { const i = {}; this.lodash_set(i, r, t), s = this.setval(JSON.stringify(i), a) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, a) => { !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o }, i, o) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: a, statusCode: r, headers: i, rawBody: o } = t, n = s.decode(o, this.encoding); e(null, { status: a, statusCode: r, headers: i, rawBody: o, body: n }, n) }, t => { const { message: a, response: r } = t; e(a, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, a) => { !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a) }); break; case "Quantumult X": t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o }, i, o) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let a = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...i } = t; this.got[s](r, i).then(t => { const { statusCode: s, statusCode: r, headers: i, rawBody: o } = t, n = a.decode(o, this.encoding); e(null, { status: s, statusCode: r, headers: i, rawBody: o, body: n }, n) }, t => { const { message: s, response: r } = t; e(s, r, r && a.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let a = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let a = t[s]; null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`) } return e = e.substring(0, e.length - 1), e } msg(e = t, s = "", a = "", r) { const i = t => { switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } case "Loon": { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } case "Quantumult X": { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, a = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": a } } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, a, i(r)); break; case "Quantumult X": $notify(e, s, a, i(r)); break; case "Node.js": }if (!this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), a && t.push(a), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, t.stack) } } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(t, e) }
