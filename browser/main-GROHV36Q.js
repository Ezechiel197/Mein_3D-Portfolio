import{$ as ii,$a as Xo,A as wr,Aa as Vo,B as hd,Ba as Dt,C as Er,Ca as gt,D as xi,Da as zo,E as pc,Ea as bs,F as dd,Fa as j,G as fd,Ga as ie,H as pd,Ha as Ue,I as Tn,J as md,K as Gt,Ka as Ho,L as Nt,La as yt,M as Ye,Ma as ri,N as qi,Na as Ad,O as gd,Oa as bc,P as Ct,Pa as wc,Q as mc,Qa as Oe,R as ut,Ra as $e,S as Ie,Sa as $t,T as _s,Ta as Cd,U as It,Ua as Lt,V as $i,Va as Go,W as gc,Wa as Ec,X as Tr,Xa as Wo,Y as vd,Ya as ws,Z as yd,Za as Rd,_ as Ar,_a as Tc,a as we,aa as vc,ab as Pd,b as kt,ba as xs,bb as Id,c as rd,ca as Ms,cb as Ac,d as Sr,da as Ze,db as Dd,e as sd,ea as xt,eb as Ld,f as od,fa as ko,fb as An,g as ad,ga as yc,gb as jo,h as cc,ha as _c,hb as qo,i as uc,ia as Cr,ib as Qt,j as wn,ja as _d,jb as Rr,k as un,ka as xc,l as yi,la as xd,m as fn,ma as Gn,mb as Bt,n as Be,na as Mc,nb as Od,o as ys,oa as Bo,ob as Cc,p as ld,pa as Sc,pb as Es,q as cd,qa as Md,qb as $o,r as st,ra as Ss,s as hc,sa as me,t as En,ta as tt,u as ud,ua as Sd,v as dc,va as bd,w as _i,wa as Wn,x as br,xa as wd,y as ji,ya as Ed,z as fc,za as Td}from"./chunk-EHDPKBTT.js";var As=class{},Jo=class{},Si=class i{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let r=t.slice(0,n),s=r.toLowerCase(),o=t.slice(n+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.setHeaderEntries(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new i;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...n),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Pc=class{encodeKey(e){return Nd(e)}encodeValue(e){return Nd(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function ag(i,e){let t=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],l=t.get(o)||[];l.push(a),t.set(o,l)}),t}var lg=/%(\d[a-f0-9])/gi,cg={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Nd(i){return encodeURIComponent(i).replace(lg,(e,t)=>cg[t]??e)}function Yo(i){return`${i}`}var Mi=class i{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Pc,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ag(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let n=e.fromObject[t],r=Array.isArray(n)?n.map(Yo):[Yo(n)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(s=>{t.push({param:n,value:s,op:"a"})}):t.push({param:n,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new i({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(Yo(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(Yo(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Ic=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function ug(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Fd(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Ud(i){return typeof Blob<"u"&&i instanceof Blob}function kd(i){return typeof FormData<"u"&&i instanceof FormData}function hg(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Ts=class i{constructor(e,t,n,r){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(ug(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new Si,this.context??=new Ic,!this.params)this.params=new Mi,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Fd(this.body)||Ud(this.body)||kd(this.body)||hg(this.body)?this.body:this.body instanceof Mi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||kd(this.body)?null:Ud(this.body)?this.body.type||null:Fd(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Mi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,s=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,a=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,u=e.params||this.params,h=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((d,m)=>d.set(m,e.setHeaders[m]),c)),e.setParams&&(u=Object.keys(e.setParams).reduce((d,m)=>d.set(m,e.setParams[m]),u)),new i(t,n,o,{params:u,headers:c,context:h,reportProgress:l,responseType:r,withCredentials:a,transferCache:s})}},Pr=function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i}(Pr||{}),Cs=class{constructor(e,t=Qo.Ok,n="OK"){this.headers=e.headers||new Si,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Dc=class i extends Cs{constructor(e={}){super(e),this.type=Pr.ResponseHeader}clone(e={}){return new i({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Ir=class i extends Cs{constructor(e={}){super(e),this.type=Pr.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new i({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Ko=class extends Cs{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Qo=function(i){return i[i.Continue=100]="Continue",i[i.SwitchingProtocols=101]="SwitchingProtocols",i[i.Processing=102]="Processing",i[i.EarlyHints=103]="EarlyHints",i[i.Ok=200]="Ok",i[i.Created=201]="Created",i[i.Accepted=202]="Accepted",i[i.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",i[i.NoContent=204]="NoContent",i[i.ResetContent=205]="ResetContent",i[i.PartialContent=206]="PartialContent",i[i.MultiStatus=207]="MultiStatus",i[i.AlreadyReported=208]="AlreadyReported",i[i.ImUsed=226]="ImUsed",i[i.MultipleChoices=300]="MultipleChoices",i[i.MovedPermanently=301]="MovedPermanently",i[i.Found=302]="Found",i[i.SeeOther=303]="SeeOther",i[i.NotModified=304]="NotModified",i[i.UseProxy=305]="UseProxy",i[i.Unused=306]="Unused",i[i.TemporaryRedirect=307]="TemporaryRedirect",i[i.PermanentRedirect=308]="PermanentRedirect",i[i.BadRequest=400]="BadRequest",i[i.Unauthorized=401]="Unauthorized",i[i.PaymentRequired=402]="PaymentRequired",i[i.Forbidden=403]="Forbidden",i[i.NotFound=404]="NotFound",i[i.MethodNotAllowed=405]="MethodNotAllowed",i[i.NotAcceptable=406]="NotAcceptable",i[i.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",i[i.RequestTimeout=408]="RequestTimeout",i[i.Conflict=409]="Conflict",i[i.Gone=410]="Gone",i[i.LengthRequired=411]="LengthRequired",i[i.PreconditionFailed=412]="PreconditionFailed",i[i.PayloadTooLarge=413]="PayloadTooLarge",i[i.UriTooLong=414]="UriTooLong",i[i.UnsupportedMediaType=415]="UnsupportedMediaType",i[i.RangeNotSatisfiable=416]="RangeNotSatisfiable",i[i.ExpectationFailed=417]="ExpectationFailed",i[i.ImATeapot=418]="ImATeapot",i[i.MisdirectedRequest=421]="MisdirectedRequest",i[i.UnprocessableEntity=422]="UnprocessableEntity",i[i.Locked=423]="Locked",i[i.FailedDependency=424]="FailedDependency",i[i.TooEarly=425]="TooEarly",i[i.UpgradeRequired=426]="UpgradeRequired",i[i.PreconditionRequired=428]="PreconditionRequired",i[i.TooManyRequests=429]="TooManyRequests",i[i.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",i[i.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",i[i.InternalServerError=500]="InternalServerError",i[i.NotImplemented=501]="NotImplemented",i[i.BadGateway=502]="BadGateway",i[i.ServiceUnavailable=503]="ServiceUnavailable",i[i.GatewayTimeout=504]="GatewayTimeout",i[i.HttpVersionNotSupported=505]="HttpVersionNotSupported",i[i.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",i[i.InsufficientStorage=507]="InsufficientStorage",i[i.LoopDetected=508]="LoopDetected",i[i.NotExtended=510]="NotExtended",i[i.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",i}(Qo||{});function Rc(i,e){return{body:e,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,transferCache:i.transferCache}}var Lc=(()=>{class i{constructor(t){this.handler=t}request(t,n,r={}){let s;if(t instanceof Ts)s=t;else{let l;r.headers instanceof Si?l=r.headers:l=new Si(r.headers);let c;r.params&&(r.params instanceof Mi?c=r.params:c=new Mi({fromObject:r.params})),s=new Ts(t,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let o=Be(s).pipe(ji(l=>this.handler.handle(l)));if(t instanceof Ts||r.observe==="events")return o;let a=o.pipe(_i(l=>l instanceof Ir));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(st(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(st(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(st(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(st(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new Mi().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,r={}){return this.request("PATCH",t,Rc(r,n))}post(t,n,r={}){return this.request("POST",t,Rc(r,n))}put(t,n,r={}){return this.request("PUT",t,Rc(r,n))}static{this.\u0275fac=function(n){return new(n||i)(ut(As))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})();function dg(i,e){return e(i)}function fg(i,e,t){return(n,r)=>ii(t,()=>e(n,s=>i(s,r)))}var $d=new Ct(""),Yd=new Ct(""),pg=new Ct("");var Bd=(()=>{class i extends As{constructor(t,n){super(),this.backend=t,this.injector=n,this.chain=null,this.pendingTasks=Ie(Vo);let r=Ie(pg,{optional:!0});this.backend=r??t}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get($d),...this.injector.get(Yd,[])]));this.chain=r.reduceRight((s,o)=>fg(s,o,this.injector),dg)}let n=this.pendingTasks.add();return this.chain(t,r=>this.backend.handle(r)).pipe(Er(()=>this.pendingTasks.remove(n)))}static{this.\u0275fac=function(n){return new(n||i)(ut(Jo),ut(Ar))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})();var mg=/^\)\]\}',?\n/;function gg(i){return"responseURL"in i&&i.responseURL?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):null}var Vd=(()=>{class i{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Nt(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?fn(n.\u0275loadImpl()):Be(null)).pipe(Tn(()=>new ad(s=>{let o=n.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((v,p)=>o.setRequestHeader(v,p.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let v=t.detectContentTypeHeader();v!==null&&o.setRequestHeader("Content-Type",v)}if(t.responseType){let v=t.responseType.toLowerCase();o.responseType=v!=="json"?v:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let v=o.statusText||"OK",p=new Si(o.getAllResponseHeaders()),f=gg(o)||t.url;return l=new Dc({headers:p,status:o.status,statusText:v,url:f}),l},u=()=>{let{headers:v,status:p,statusText:f,url:w}=c(),b=null;p!==Qo.NoContent&&(b=typeof o.response>"u"?o.responseText:o.response),p===0&&(p=b?Qo.Ok:0);let M=p>=200&&p<300;if(t.responseType==="json"&&typeof b=="string"){let I=b;b=b.replace(mg,"");try{b=b!==""?JSON.parse(b):null}catch(C){b=I,M&&(M=!1,b={error:C,text:b})}}M?(s.next(new Ir({body:b,headers:v,status:p,statusText:f,url:w||void 0})),s.complete()):s.error(new Ko({error:b,headers:v,status:p,statusText:f,url:w||void 0}))},h=v=>{let{url:p}=c(),f=new Ko({error:v,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});s.error(f)},d=!1,m=v=>{d||(s.next(c()),d=!0);let p={type:Pr.DownloadProgress,loaded:v.loaded};v.lengthComputable&&(p.total=v.total),t.responseType==="text"&&o.responseText&&(p.partialText=o.responseText),s.next(p)},g=v=>{let p={type:Pr.UploadProgress,loaded:v.loaded};v.lengthComputable&&(p.total=v.total),s.next(p)};return o.addEventListener("load",u),o.addEventListener("error",h),o.addEventListener("timeout",h),o.addEventListener("abort",h),t.reportProgress&&(o.addEventListener("progress",m),a!==null&&o.upload&&o.upload.addEventListener("progress",g)),o.send(a),s.next({type:Pr.Sent}),()=>{o.removeEventListener("error",h),o.removeEventListener("abort",h),o.removeEventListener("load",u),o.removeEventListener("timeout",h),t.reportProgress&&(o.removeEventListener("progress",m),a!==null&&o.upload&&o.upload.removeEventListener("progress",g)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(n){return new(n||i)(ut($o))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})(),Zd=new Ct(""),vg="XSRF-TOKEN",yg=new Ct("",{providedIn:"root",factory:()=>vg}),_g="X-XSRF-TOKEN",xg=new Ct("",{providedIn:"root",factory:()=>_g}),ea=class{},Mg=(()=>{class i{constructor(t,n,r){this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=qo(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(n){return new(n||i)(ut(An),ut(Gn),ut(yg))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})();function Sg(i,e){let t=i.url.toLowerCase();if(!Ie(Zd)||i.method==="GET"||i.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(i);let n=Ie(ea).getToken(),r=Ie(xg);return n!=null&&!i.headers.has(r)&&(i=i.clone({headers:i.headers.set(r,n)})),e(i)}function Jd(...i){let e=[Lc,Vd,Bd,{provide:As,useExisting:Bd},{provide:Jo,useExisting:Vd},{provide:$d,useValue:Sg,multi:!0},{provide:Zd,useValue:!0},{provide:ea,useClass:Mg}];for(let t of i)e.push(...t.\u0275providers);return Tr(e)}var zd="b",Hd="h",Gd="s",Wd="st",Xd="u",jd="rt",Zo=new Ct(""),bg=["GET","HEAD"];function wg(i,e){let h=Ie(Zo),{isCacheActive:t}=h,n=rd(h,["isCacheActive"]),{transferCache:r,method:s}=i;if(!t||s==="POST"&&!n.includePostRequests&&!r||s!=="POST"&&!bg.includes(s)||r===!1||n.filter?.(i)===!1)return e(i);let o=Ie(Bo),a=Tg(i),l=o.get(a,null),c=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(c=r.includeHeaders),l){let{[zd]:d,[jd]:m,[Hd]:g,[Gd]:v,[Wd]:p,[Xd]:f}=l,w=d;switch(m){case"arraybuffer":w=new TextEncoder().encode(d).buffer;break;case"blob":w=new Blob([d]);break}let b=new Si(g);return Be(new Ir({body:w,headers:b,status:v,statusText:p,url:f}))}let u=Es(Ie(Gn));return e(i).pipe(Gt(d=>{d instanceof Ir&&u&&o.set(a,{[zd]:d.body,[Hd]:Eg(d.headers,c),[Gd]:d.status,[Wd]:d.statusText,[Xd]:d.url||"",[jd]:i.responseType})}))}function Eg(i,e){if(!e)return{};let t={};for(let n of e){let r=i.getAll(n);r!==null&&(t[n]=r)}return t}function qd(i){return[...i.keys()].sort().map(e=>`${e}=${i.getAll(e)}`).join("&")}function Tg(i){let{params:e,method:t,responseType:n,url:r}=i,s=qd(e),o=i.serializeBody();o instanceof URLSearchParams?o=qd(o):typeof o!="string"&&(o="");let a=[t,n,r,o,s].join("|"),l=Ag(a);return l}function Ag(i){let e=0;for(let t of i)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Kd(i){return[{provide:Zo,useFactory:()=>(bd("NgHttpTransferCache"),we({isCacheActive:!0},i))},{provide:Yd,useValue:wg,multi:!0,deps:[Bo,Zo]},{provide:Wo,multi:!0,useFactory:()=>{let e=Ie(ws),t=Ie(Zo);return()=>{Rd(e).then(()=>{t.isCacheActive=!1})}}}]}var Fc=class extends Ld{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Uc=class i extends Fc{static makeCurrent(){Dd(new i)}onAndCancel(e,t,n){return e.addEventListener(t,n),()=>{e.removeEventListener(t,n)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Ig();return t==null?null:Dg(t)}resetBaseElement(){Rs=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return qo(document.cookie,e)}},Rs=null;function Ig(){return Rs=Rs||document.querySelector("base"),Rs?Rs.getAttribute("href"):null}function Dg(i){return new URL(i,document.baseURI).pathname}var Lg=(()=>{class i{build(){return new XMLHttpRequest}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})(),kc=new Ct(""),rf=(()=>{class i{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r){return this._findPluginFor(n).addEventListener(t,n,r)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new Nt(5101,!1);return this._eventNameToPlugin.set(t,n),n}static{this.\u0275fac=function(n){return new(n||i)(ut(kc),ut(Wn))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})(),ta=class{constructor(e){this._doc=e}},Oc="ng-app-id",sf=(()=>{class i{constructor(t,n,r,s={}){this.doc=t,this.appId=n,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Es(s),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(r=>r.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Oc}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(t,n){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=n,s.usage}return r.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let r=this.styleNodesInDOM,s=r?.get(n);if(s?.parentNode===t)return r.delete(n),s.removeAttribute(Oc),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=n,this.platformIsServer&&o.setAttribute(Oc,this.appId),t.appendChild(o),o}}addStyleToHost(t,n){let r=this.getStyleElement(t,n),s=this.styleRef,o=s.get(n)?.elements;o?o.push(r):s.set(n,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(n){return new(n||i)(ut(An),ut(xc),ut(Mc,8),ut(Gn))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})(),Nc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},zc=/%COMP%/g,of="%COMP%",Og=`_nghost-${of}`,Ng=`_ngcontent-${of}`,Fg=!0,Ug=new Ct("",{providedIn:"root",factory:()=>Fg});function kg(i){return Ng.replace(zc,i)}function Bg(i){return Og.replace(zc,i)}function af(i,e){return e.map(t=>t.replace(zc,i))}var Qd=(()=>{class i{constructor(t,n,r,s,o,a,l,c=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=Es(a),this.defaultRenderer=new Ps(t,o,l,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===_s.ShadowDom&&(n=kt(we({},n),{encapsulation:_s.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof na?r.applyToHost(t):r instanceof Is&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(n.encapsulation){case _s.Emulated:s=new na(l,c,n,this.appId,u,o,a,h);break;case _s.ShadowDom:return new Bc(l,c,t,n,o,a,this.nonce,h);default:s=new Is(l,c,n,u,o,a,h);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(n){return new(n||i)(ut(rf),ut(sf),ut(xc),ut(Ug),ut(An),ut(Gn),ut(Wn),ut(Mc))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})(),Ps=class{constructor(e,t,n,r){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Nc[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(ef(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(ef(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new Nt(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=Nc[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=Nc[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(Ss.DashCase|Ss.Important)?e.style.setProperty(t,n,r&Ss.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Ss.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n){if(typeof e=="string"&&(e=Ac().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(n))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function ef(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Bc=class extends Ps{constructor(e,t,n,r,s,o,a,l){super(e,s,o,l),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=af(r.id,r.styles);for(let u of c){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=u,this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Is=class extends Ps{constructor(e,t,n,r,s,o,a,l){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=l?af(l,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},na=class extends Is{constructor(e,t,n,r,s,o,a,l){let c=r+"-"+n.id;super(e,t,n,s,o,a,l,c),this.contentAttr=kg(c),this.hostAttr=Bg(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}},Vg=(()=>{class i extends ta{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r){return t.addEventListener(n,r,!1),()=>this.removeEventListener(t,n,r)}removeEventListener(t,n,r){return t.removeEventListener(n,r)}static{this.\u0275fac=function(n){return new(n||i)(ut(An))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})(),tf=["alt","control","meta","shift"],zg={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Hg={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Gg=(()=>{class i extends ta{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,n,r){let s=i.parseEventName(n),o=i.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ac().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),tf.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),o+=c+".")}),o+=s,n.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(t,n){let r=zg[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),tf.forEach(o=>{if(o!==r){let a=Hg[o];a(t)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(t,n,r){return s=>{i.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(n){return new(n||i)(ut(An))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac})}}return i})();function lf(i,e){return Pd(we({rootComponent:i},Wg(e)))}function Wg(i){return{appProviders:[...Yg,...i?.providers??[]],platformProviders:$g}}function Xg(){Uc.makeCurrent()}function jg(){return new _c}function qg(){return _d(document),document}var $g=[{provide:Gn,useValue:Od},{provide:xd,useValue:Xg,multi:!0},{provide:An,useFactory:qg,deps:[]}];var Yg=[{provide:yd,useValue:"root"},{provide:_c,useFactory:jg,deps:[]},{provide:kc,useClass:Vg,multi:!0,deps:[An,Wn,Gn]},{provide:kc,useClass:Gg,multi:!0,deps:[An]},Qd,sf,rf,{provide:Sd,useExisting:Qd},{provide:$o,useClass:Lg,deps:[]},[]];var cf=(()=>{class i{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(n){return new(n||i)(ut(An))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Vc=function(i){return i[i.NoHttpTransferCache=0]="NoHttpTransferCache",i[i.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",i}(Vc||{});function uf(...i){let e=[],t=new Set,n=t.has(Vc.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of i)t.add(s),r.length&&e.push(r);return Tr([[],Id(),t.has(Vc.NoHttpTransferCache)||n?[]:Kd({}),e])}var We="primary",js=Symbol("RouteTitle"),jc=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Fr(i){return new jc(i)}function n0(i,e,t){let n=t.path.split("/");if(n.length>i.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function i0(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;++t)if(!Xn(i[t],e[t]))return!1;return!0}function Xn(i,e){let t=i?qc(i):void 0,n=e?qc(e):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!gf(i[r],e[r]))return!1;return!0}function qc(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function gf(i,e){if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return!1;let t=[...i].sort(),n=[...e].sort();return t.every((r,s)=>n[s]===r)}else return i===e}function vf(i){return i.length>0?i[i.length-1]:null}function Ti(i){return ld(i)?i:Ec(i)?fn(Promise.resolve(i)):Be(i)}var r0={exact:_f,subset:xf},yf={exact:s0,subset:o0,ignored:()=>!0};function hf(i,e,t){return r0[t.paths](i.root,e.root,t.matrixParams)&&yf[t.queryParams](i.queryParams,e.queryParams)&&!(t.fragment==="exact"&&i.fragment!==e.fragment)}function s0(i,e){return Xn(i,e)}function _f(i,e,t){if(!Zi(i.segments,e.segments)||!sa(i.segments,e.segments,t)||i.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!i.children[n]||!_f(i.children[n],e.children[n],t))return!1;return!0}function o0(i,e){return Object.keys(e).length<=Object.keys(i).length&&Object.keys(e).every(t=>gf(i[t],e[t]))}function xf(i,e,t){return Mf(i,e,e.segments,t)}function Mf(i,e,t,n){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!Zi(r,t)||e.hasChildren()||!sa(r,t,n))}else if(i.segments.length===t.length){if(!Zi(i.segments,t)||!sa(i.segments,t,n))return!1;for(let r in e.children)if(!i.children[r]||!xf(i.children[r],e.children[r],n))return!1;return!0}else{let r=t.slice(0,i.segments.length),s=t.slice(i.segments.length);return!Zi(i.segments,r)||!sa(i.segments,r,n)||!i.children[We]?!1:Mf(i.children[We],e,s,n)}}function sa(i,e,t){return e.every((n,r)=>yf[t](i[r].parameters,n.parameters))}var wi=class{constructor(e=new ht([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Fr(this.queryParams),this._queryParamMap}toString(){return c0.serialize(this)}},ht=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return oa(this)}},Yi=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Fr(this.parameters),this._parameterMap}toString(){return bf(this)}};function a0(i,e){return Zi(i,e)&&i.every((t,n)=>Xn(t.parameters,e[n].parameters))}function Zi(i,e){return i.length!==e.length?!1:i.every((t,n)=>t.path===e[n].path)}function l0(i,e){let t=[];return Object.entries(i.children).forEach(([n,r])=>{n===We&&(t=t.concat(e(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==We&&(t=t.concat(e(r,n)))}),t}var _u=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:()=>new la,providedIn:"root"})}}return i})(),la=class{parse(e){let t=new Yc(e);return new wi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ds(e.root,!0)}`,n=d0(e.queryParams),r=typeof e.fragment=="string"?`#${u0(e.fragment)}`:"";return`${t}${n}${r}`}},c0=new la;function oa(i){return i.segments.map(e=>bf(e)).join("/")}function Ds(i,e){if(!i.hasChildren())return oa(i);if(e){let t=i.children[We]?Ds(i.children[We],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==We&&n.push(`${r}:${Ds(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=l0(i,(n,r)=>r===We?[Ds(i.children[We],!1)]:[`${r}:${Ds(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[We]!=null?`${oa(i)}/${t[0]}`:`${oa(i)}/(${t.join("//")})`}}function Sf(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ia(i){return Sf(i).replace(/%3B/gi,";")}function u0(i){return encodeURI(i)}function $c(i){return Sf(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function aa(i){return decodeURIComponent(i)}function df(i){return aa(i.replace(/\+/g,"%20"))}function bf(i){return`${$c(i.path)}${h0(i.parameters)}`}function h0(i){return Object.entries(i).map(([e,t])=>`;${$c(e)}=${$c(t)}`).join("")}function d0(i){let e=Object.entries(i).map(([t,n])=>Array.isArray(n)?n.map(r=>`${ia(t)}=${ia(r)}`).join("&"):`${ia(t)}=${ia(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var f0=/^[^\/()?;#]+/;function Hc(i){let e=i.match(f0);return e?e[0]:""}var p0=/^[^\/()?;=#]+/;function m0(i){let e=i.match(p0);return e?e[0]:""}var g0=/^[^=?&#]+/;function v0(i){let e=i.match(g0);return e?e[0]:""}var y0=/^[^&#]+/;function _0(i){let e=i.match(y0);return e?e[0]:""}var Yc=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ht([],{}):new ht([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[We]=new ht(e,t)),n}parseSegment(){let e=Hc(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Nt(4009,!1);return this.capture(e),new Yi(aa(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=m0(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=Hc(this.remaining);r&&(n=r,this.capture(n))}e[aa(t)]=aa(n)}parseQueryParam(e){let t=v0(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=_0(this.remaining);o&&(n=o,this.capture(n))}let r=df(t),s=df(n);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Hc(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new Nt(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=We);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[We]:new ht([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Nt(4011,!1)}};function wf(i){return i.segments.length>0?new ht([],{[We]:i}):i}function Ef(i){let e={};for(let[n,r]of Object.entries(i.children)){let s=Ef(r);if(n===We&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new ht(i.segments,e);return x0(t)}function x0(i){if(i.numberOfChildren===1&&i.children[We]){let e=i.children[We];return new ht(i.segments.concat(e.segments),e.children)}return i}function Ur(i){return i instanceof wi}function M0(i,e,t=null,n=null){let r=Tf(i);return Af(r,e,t,n)}function Tf(i){let e;function t(s){let o={};for(let l of s.children){let c=t(l);o[l.outlet]=c}let a=new ht(s.url,o);return s===i&&(e=a),a}let n=t(i.root),r=wf(n);return e??r}function Af(i,e,t,n){let r=i;for(;r.parent;)r=r.parent;if(e.length===0)return Gc(r,r,r,t,n);let s=S0(e);if(s.toRoot())return Gc(r,r,new ht([],{}),t,n);let o=b0(s,r,i),a=o.processChildren?Ns(o.segmentGroup,o.index,s.commands):Rf(o.segmentGroup,o.index,s.commands);return Gc(r,o.segmentGroup,a,t,n)}function ca(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function ks(i){return typeof i=="object"&&i!=null&&i.outlets}function Gc(i,e,t,n,r){let s={};n&&Object.entries(n).forEach(([l,c])=>{s[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let o;i===e?o=t:o=Cf(i,e,t);let a=wf(Ef(o));return new wi(a,s,r)}function Cf(i,e,t){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===e?n[r]=t:n[r]=Cf(s,e,t)}),new ht(i.segments,n)}var ua=class{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&ca(n[0]))throw new Nt(4003,!1);let r=n.find(ks);if(r&&r!==vf(n))throw new Nt(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function S0(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new ua(!0,0,i);let e=0,t=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ua(t,e,n)}var Or=class{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function b0(i,e,t){if(i.isAbsolute)return new Or(e,!0,0);if(!t)return new Or(e,!1,NaN);if(t.parent===null)return new Or(t,!0,0);let n=ca(i.commands[0])?0:1,r=t.segments.length-1+n;return w0(t,r,i.numberOfDoubleDots)}function w0(i,e,t){let n=i,r=e,s=t;for(;s>r;){if(s-=r,n=n.parent,!n)throw new Nt(4005,!1);r=n.segments.length}return new Or(n,!1,r-s)}function E0(i){return ks(i[0])?i[0].outlets:{[We]:i}}function Rf(i,e,t){if(i??=new ht([],{}),i.segments.length===0&&i.hasChildren())return Ns(i,e,t);let n=T0(i,e,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new ht(i.segments.slice(0,n.pathIndex),{});return s.children[We]=new ht(i.segments.slice(n.pathIndex),i.children),Ns(s,0,r)}else return n.match&&r.length===0?new ht(i.segments,{}):n.match&&!i.hasChildren()?Zc(i,e,t):n.match?Ns(i,0,r):Zc(i,e,t)}function Ns(i,e,t){if(t.length===0)return new ht(i.segments,{});{let n=E0(t),r={};if(Object.keys(n).some(s=>s!==We)&&i.children[We]&&i.numberOfChildren===1&&i.children[We].segments.length===0){let s=Ns(i.children[We],e,t);return new ht(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Rf(i.children[s],e,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new ht(i.segments,r)}}function T0(i,e,t){let n=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=t.length)return s;let o=i.segments[r],a=t[n];if(ks(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!pf(l,c,o))return s;n+=2}else{if(!pf(l,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Zc(i,e,t){let n=i.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(ks(s)){let l=A0(s.outlets);return new ht(n,l)}if(r===0&&ca(t[0])){let l=i.segments[e];n.push(new Yi(l.path,ff(t[0]))),r++;continue}let o=ks(s)?s.outlets[We]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&ca(a)?(n.push(new Yi(o,ff(a))),r+=2):(n.push(new Yi(o,{})),r++)}return new ht(n,{})}function A0(i){let e={};return Object.entries(i).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=Zc(new ht([],{}),0,n))}),e}function ff(i){let e={};return Object.entries(i).forEach(([t,n])=>e[t]=`${n}`),e}function pf(i,e,t){return i==t.path&&Xn(e,t.parameters)}var Fs="imperative",Zt=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(Zt||{}),Cn=class{constructor(e,t){this.id=e,this.url=t}},Bs=class extends Cn{constructor(e,t,n="imperative",r=null){super(e,t),this.type=Zt.NavigationStart,this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ji=class extends Cn{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n,this.type=Zt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},mn=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(mn||{}),Jc=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(Jc||{}),Ei=class extends Cn{constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r,this.type=Zt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ki=class extends Cn{constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r,this.type=Zt.NavigationSkipped}},Vs=class extends Cn{constructor(e,t,n,r){super(e,t),this.error=n,this.target=r,this.type=Zt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ha=class extends Cn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Zt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kc=class extends Cn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Zt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qc=class extends Cn{constructor(e,t,n,r,s){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s,this.type=Zt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},eu=class extends Cn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Zt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tu=class extends Cn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Zt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nu=class{constructor(e){this.route=e,this.type=Zt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},iu=class{constructor(e){this.route=e,this.type=Zt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ru=class{constructor(e){this.snapshot=e,this.type=Zt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},su=class{constructor(e){this.snapshot=e,this.type=Zt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ou=class{constructor(e){this.snapshot=e,this.type=Zt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},au=class{constructor(e){this.snapshot=e,this.type=Zt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var zs=class{},Hs=class{constructor(e){this.url=e}};var lu=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new va,this.attachRef=null}},va=(()=>{class i{constructor(){this.contexts=new Map}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new lu,this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),da=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=cu(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=cu(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=uu(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return uu(e,this._root).map(t=>t.value)}};function cu(i,e){if(i===e.value)return e;for(let t of e.children){let n=cu(i,t);if(n)return n}return null}function uu(i,e){if(i===e.value)return[e];for(let t of e.children){let n=uu(i,t);if(n.length)return n.unshift(e),n}return[]}var pn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Lr(i){let e={};return i&&i.children.forEach(t=>e[t.value.outlet]=t),e}var fa=class extends da{constructor(e,t){super(e),this.snapshot=t,Mu(this,e)}toString(){return this.snapshot.toString()}};function Pf(i){let e=C0(i),t=new un([new Yi("",{})]),n=new un({}),r=new un({}),s=new un({}),o=new un(""),a=new kr(t,n,s,o,r,We,i,e.root);return a.snapshot=e.root,new fa(new pn(a,[]),e)}function C0(i){let e={},t={},n={},r="",s=new Gs([],e,n,r,t,We,i,null,{});return new pa("",new pn(s,[]))}var kr=class{constructor(e,t,n,r,s,o,a,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(st(c=>c[js]))??Be(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(st(e=>Fr(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(st(e=>Fr(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function xu(i,e,t="emptyOnly"){let n,{routeConfig:r}=i;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:we(we({},e.params),i.params),data:we(we({},e.data),i.data),resolve:we(we(we(we({},i.data),e.data),r?.data),i._resolvedData)}:n={params:we({},i.params),data:we({},i.data),resolve:we(we({},i.data),i._resolvedData??{})},r&&Df(r)&&(n.resolve[js]=r.title),n}var Gs=class{get title(){return this.data?.[js]}constructor(e,t,n,r,s,o,a,l,c){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Fr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Fr(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},pa=class extends da{constructor(e,t){super(t),this.url=e,Mu(this,t)}toString(){return If(this._root)}};function Mu(i,e){e.value._routerState=i,e.children.forEach(t=>Mu(i,t))}function If(i){let e=i.children.length>0?` { ${i.children.map(If).join(", ")} } `:"";return`${i.value}${e}`}function Wc(i){if(i.snapshot){let e=i.snapshot,t=i._futureSnapshot;i.snapshot=t,Xn(e.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),Xn(e.params,t.params)||i.paramsSubject.next(t.params),i0(e.url,t.url)||i.urlSubject.next(t.url),Xn(e.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function hu(i,e){let t=Xn(i.params,e.params)&&a0(i.url,e.url),n=!i.parent!=!e.parent;return t&&!n&&(!i.parent||hu(i.parent,e.parent))}function Df(i){return typeof i.title=="string"||i.title===null}var Su=(()=>{class i{constructor(){this.activated=null,this._activatedRoute=null,this.name=We,this.activateEvents=new Cr,this.deactivateEvents=new Cr,this.attachEvents=new Cr,this.detachEvents=new Cr,this.parentContexts=Ie(va),this.location=Ie(wd),this.changeDetector=Ie(Xo),this.environmentInjector=Ie(Ar),this.inputBinder=Ie(bu,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Nt(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Nt(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Nt(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new Nt(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new du(t,a,r.injector);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:n??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=gc({type:i,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[vc]})}}return i})(),du=class i{__ngOutletInjector(e){return new i(this.route,this.childContexts,e)}constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===kr?this.route:e===va?this.childContexts:this.parent.get(e,t)}},bu=new Ct("");function R0(i,e,t){let n=Ws(i,e._root,t?t._root:void 0);return new fa(n,e)}function Ws(i,e,t){if(t&&i.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let r=P0(i,e,t);return new pn(n,r)}else{if(i.shouldAttach(e.value)){let s=i.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ws(i,a)),o}}let n=I0(e.value),r=e.children.map(s=>Ws(i,s));return new pn(n,r)}}function P0(i,e,t){return e.children.map(n=>{for(let r of t.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return Ws(i,n,r);return Ws(i,n)})}function I0(i){return new kr(new un(i.url),new un(i.params),new un(i.queryParams),new un(i.fragment),new un(i.data),i.outlet,i.component,i)}var Lf="ngNavigationCancelingError";function Of(i,e){let{redirectTo:t,navigationBehaviorOptions:n}=Ur(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Nf(!1,mn.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function Nf(i,e){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[Lf]=!0,t.cancellationCode=e,t}function D0(i){return Ff(i)&&Ur(i.url)}function Ff(i){return!!i&&i[Lf]}var L0=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=It({type:i,selectors:[["ng-component"]],standalone:!0,features:[Lt],decls:1,vars:0,template:function(n,r){n&1&&Ue(0,"router-outlet")},dependencies:[Su],encapsulation:2})}}return i})();function O0(i,e){return i.providers&&!i._injector&&(i._injector=Td(i.providers,e,`Route: ${i.path}`)),i._injector??e}function wu(i){let e=i.children&&i.children.map(wu),t=e?kt(we({},i),{children:e}):we({},i);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==We&&(t.component=L0),t}function jn(i){return i.outlet||We}function N0(i,e){let t=i.filter(n=>jn(n)===e);return t.push(...i.filter(n=>jn(n)!==e)),t}function qs(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let e=i.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var F0=(i,e,t,n)=>st(r=>(new fu(e,r.targetRouterState,r.currentRouterState,t,n).activate(i),r)),fu=class{constructor(e,t,n,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),Wc(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let r=Lr(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Lr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Lr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let r=Lr(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new au(s.value.snapshot))}),e.children.length&&this.forwardEvent(new su(e.value.snapshot))}activateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(Wc(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Wc(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=qs(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,n)}},ma=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Nr=class{constructor(e,t){this.component=e,this.route=t}};function U0(i,e,t){let n=i._root,r=e?e._root:null;return Ls(n,r,t,[n.value])}function k0(i){let e=i.routeConfig?i.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:i,guards:e}}function Vr(i,e){let t=Symbol(),n=e.get(i,t);return n===t?typeof i=="function"&&!gd(i)?i:e.get(i):n}function Ls(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Lr(e);return i.children.forEach(o=>{B0(o,s[o.value.outlet],t,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Us(a,t.getContext(o),r)),r}function B0(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=e?e.value:null,a=t?t.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let l=V0(o,s,s.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ma(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ls(i,e,a?a.children:null,n,r):Ls(i,e,t,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Nr(a.outlet.component,o))}else o&&Us(e,a,r),r.canActivateChecks.push(new ma(n)),s.component?Ls(i,null,a?a.children:null,n,r):Ls(i,null,t,n,r);return r}function V0(i,e,t){if(typeof t=="function")return t(i,e);switch(t){case"pathParamsChange":return!Zi(i.url,e.url);case"pathParamsOrQueryParamsChange":return!Zi(i.url,e.url)||!Xn(i.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!hu(i,e)||!Xn(i.queryParams,e.queryParams);case"paramsChange":default:return!hu(i,e)}}function Us(i,e,t){let n=Lr(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?e?Us(o,e.children.getContext(s),t):Us(o,null,t):Us(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Nr(e.outlet.component,r)):t.canDeactivateChecks.push(new Nr(null,r)):t.canDeactivateChecks.push(new Nr(null,r))}function $s(i){return typeof i=="function"}function z0(i){return typeof i=="boolean"}function H0(i){return i&&$s(i.canLoad)}function G0(i){return i&&$s(i.canActivate)}function W0(i){return i&&$s(i.canActivateChild)}function X0(i){return i&&$s(i.canDeactivate)}function j0(i){return i&&$s(i.canMatch)}function Uf(i){return i instanceof cd||i?.name==="EmptyError"}var ra=Symbol("INITIAL_VALUE");function Br(){return Tn(i=>hc(i.map(e=>e.pipe(wr(1),pd(ra)))).pipe(st(e=>{for(let t of e)if(t!==!0){if(t===ra)return ra;if(t===!1||t instanceof wi)return t}return!0}),_i(e=>e!==ra),wr(1)))}function q0(i,e){return En(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Be(kt(we({},t),{guardsResult:!0})):$0(o,n,r,i).pipe(En(a=>a&&z0(a)?Y0(n,s,i,e):Be(a)),st(a=>kt(we({},t),{guardsResult:a})))})}function $0(i,e,t,n){return fn(i).pipe(En(r=>ev(r.component,r.route,t,e,n)),xi(r=>r!==!0,!0))}function Y0(i,e,t,n){return fn(e).pipe(ji(r=>ud(J0(r.route.parent,n),Z0(r.route,n),Q0(i,r.path,t),K0(i,r.route,t))),xi(r=>r!==!0,!0))}function Z0(i,e){return i!==null&&e&&e(new ou(i)),Be(!0)}function J0(i,e){return i!==null&&e&&e(new ru(i)),Be(!0)}function K0(i,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return Be(!0);let r=n.map(s=>dc(()=>{let o=qs(e)??t,a=Vr(s,o),l=G0(a)?a.canActivate(e,i):ii(o,()=>a(e,i));return Ti(l).pipe(xi())}));return Be(r).pipe(Br())}function Q0(i,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>k0(o)).filter(o=>o!==null).map(o=>dc(()=>{let a=o.guards.map(l=>{let c=qs(o.node)??t,u=Vr(l,c),h=W0(u)?u.canActivateChild(n,i):ii(c,()=>u(n,i));return Ti(h).pipe(xi())});return Be(a).pipe(Br())}));return Be(s).pipe(Br())}function ev(i,e,t,n,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Be(!0);let o=s.map(a=>{let l=qs(e)??r,c=Vr(a,l),u=X0(c)?c.canDeactivate(i,e,t,n):ii(l,()=>c(i,e,t,n));return Ti(u).pipe(xi())});return Be(o).pipe(Br())}function tv(i,e,t,n){let r=e.canLoad;if(r===void 0||r.length===0)return Be(!0);let s=r.map(o=>{let a=Vr(o,i),l=H0(a)?a.canLoad(e,t):ii(i,()=>a(e,t));return Ti(l)});return Be(s).pipe(Br(),kf(n))}function kf(i){return od(Gt(e=>{if(Ur(e))throw Of(i,e)}),st(e=>e===!0))}function nv(i,e,t,n){let r=e.canMatch;if(!r||r.length===0)return Be(!0);let s=r.map(o=>{let a=Vr(o,i),l=j0(a)?a.canMatch(e,t):ii(i,()=>a(e,t));return Ti(l)});return Be(s).pipe(Br(),kf(n))}var Xs=class{constructor(e){this.segmentGroup=e||null}},ga=class extends Error{constructor(e){super(),this.urlTree=e}};function Dr(i){return ys(new Xs(i))}function iv(i){return ys(new Nt(4e3,!1))}function rv(i){return ys(Nf(!1,mn.GuardRejected))}var pu=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Be(n);if(r.numberOfChildren>1||!r.children[We])return iv(e.redirectTo);r=r.children[We]}}applyRedirectCommands(e,t,n){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t.startsWith("/"))throw new ga(r);return r}applyRedirectCreateUrlTree(e,t,n,r){let s=this.createSegmentGroup(e,t.root,n,r);return new wi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);n[r]=t[a]}else n[r]=s}),n}createSegmentGroup(e,t,n,r){let s=this.createSegments(e,t.segments,n,r),o={};return Object.entries(t.children).forEach(([a,l])=>{o[a]=this.createSegmentGroup(e,l,n,r)}),new ht(s,o)}createSegments(e,t,n,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,n))}findPosParam(e,t,n){let r=n[t.path.substring(1)];if(!r)throw new Nt(4001,!1);return r}findOrReturn(e,t){let n=0;for(let r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}},mu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function sv(i,e,t,n,r){let s=Eu(i,e,t);return s.matched?(n=O0(e,n),nv(n,e,t,r).pipe(st(o=>o===!0?s:we({},mu)))):Be(s)}function Eu(i,e,t){if(e.path==="**")return ov(t);if(e.path==="")return e.pathMatch==="full"&&(i.hasChildren()||t.length>0)?we({},mu):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||n0)(t,i,e);if(!r)return we({},mu);let s={};Object.entries(r.posParams??{}).forEach(([a,l])=>{s[a]=l.path});let o=r.consumed.length>0?we(we({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function ov(i){return{matched:!0,parameters:i.length>0?vf(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function mf(i,e,t,n){return t.length>0&&cv(i,t,n)?{segmentGroup:new ht(e,lv(n,new ht(t,i.children))),slicedSegments:[]}:t.length===0&&uv(i,t,n)?{segmentGroup:new ht(i.segments,av(i,t,n,i.children)),slicedSegments:t}:{segmentGroup:new ht(i.segments,i.children),slicedSegments:t}}function av(i,e,t,n){let r={};for(let s of t)if(ya(i,e,s)&&!n[jn(s)]){let o=new ht([],{});r[jn(s)]=o}return we(we({},n),r)}function lv(i,e){let t={};t[We]=e;for(let n of i)if(n.path===""&&jn(n)!==We){let r=new ht([],{});t[jn(n)]=r}return t}function cv(i,e,t){return t.some(n=>ya(i,e,n)&&jn(n)!==We)}function uv(i,e,t){return t.some(n=>ya(i,e,n))}function ya(i,e,t){return(i.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function hv(i,e,t,n){return jn(i)!==n&&(n===We||!ya(e,t,i))?!1:Eu(e,i,t).matched}function dv(i,e,t){return e.length===0&&!i.children[t]}var gu=class{};function fv(i,e,t,n,r,s,o="emptyOnly"){return new vu(i,e,t,n,r,o,s).recognize()}var pv=31,vu=class{constructor(e,t,n,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new pu(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Nt(4002,`'${e.segmentGroup}'`)}recognize(){let e=mf(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(st(t=>{let n=new Gs([],Object.freeze({}),Object.freeze(we({},this.urlTree.queryParams)),this.urlTree.fragment,{},We,this.rootComponentType,null,{}),r=new pn(n,t),s=new pa("",r),o=M0(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,We).pipe(br(n=>{if(n instanceof ga)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Xs?this.noMatchError(n):n}))}inheritParamsAndData(e,t){let n=e.value,r=xu(n,t,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,n))}processSegmentGroup(e,t,n,r){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n):this.processSegment(e,t,n,n.segments,r,!0).pipe(st(s=>s instanceof pn?[s]:[]))}processChildren(e,t,n){let r=[];for(let s of Object.keys(n.children))s==="primary"?r.unshift(s):r.push(s);return fn(r).pipe(ji(s=>{let o=n.children[s],a=N0(t,s);return this.processSegmentGroup(e,a,o,s)}),fd((s,o)=>(s.push(...o),s)),fc(null),dd(),En(s=>{if(s===null)return Dr(n);let o=Bf(s);return mv(o),Be(o)}))}processSegment(e,t,n,r,s,o){return fn(t).pipe(ji(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,n,r,s,o).pipe(br(l=>{if(l instanceof Xs)return Be(null);throw l}))),xi(a=>!!a),br(a=>{if(Uf(a))return dv(n,r,s)?Be(new gu):Dr(n);throw a}))}processSegmentAgainstRoute(e,t,n,r,s,o,a){return hv(n,r,s,o)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,n,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,n,s,o):Dr(r):Dr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,s,o){let{matched:a,consumedSegments:l,positionalParamSegments:c,remainingSegments:u}=Eu(t,r,s);if(!a)return Dr(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>pv&&(this.allowRedirects=!1));let h=this.applyRedirects.applyRedirectCommands(l,r.redirectTo,c);return this.applyRedirects.lineralizeSegments(r,h).pipe(En(d=>this.processSegment(e,n,t,d.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,n,r,s){let o=sv(t,n,r,e,this.urlSerializer);return n.path==="**"&&(t.children={}),o.pipe(Tn(a=>a.matched?(e=n._injector??e,this.getChildConfig(e,n,r).pipe(Tn(({routes:l})=>{let c=n._loadedInjector??e,{consumedSegments:u,remainingSegments:h,parameters:d}=a,m=new Gs(u,d,Object.freeze(we({},this.urlTree.queryParams)),this.urlTree.fragment,vv(n),jn(n),n.component??n._loadedComponent??null,n,yv(n)),{segmentGroup:g,slicedSegments:v}=mf(t,u,h,l);if(v.length===0&&g.hasChildren())return this.processChildren(c,l,g).pipe(st(f=>f===null?null:new pn(m,f)));if(l.length===0&&v.length===0)return Be(new pn(m,[]));let p=jn(n)===s;return this.processSegment(c,l,g,v,p?We:s,!0).pipe(st(f=>new pn(m,f instanceof pn?[f]:[])))}))):Dr(t)))}getChildConfig(e,t,n){return t.children?Be({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Be({routes:t._loadedRoutes,injector:t._loadedInjector}):tv(e,t,n,this.urlSerializer).pipe(En(r=>r?this.configLoader.loadChildren(e,t).pipe(Gt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):rv(t))):Be({routes:[],injector:e})}};function mv(i){i.sort((e,t)=>e.value.outlet===We?-1:t.value.outlet===We?1:e.value.outlet.localeCompare(t.value.outlet))}function gv(i){let e=i.value.routeConfig;return e&&e.path===""}function Bf(i){let e=[],t=new Set;for(let n of i){if(!gv(n)){e.push(n);continue}let r=e.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):e.push(n)}for(let n of t){let r=Bf(n.children);e.push(new pn(n.value,r))}return e.filter(n=>!t.has(n))}function vv(i){return i.data||{}}function yv(i){return i.resolve||{}}function _v(i,e,t,n,r,s){return En(o=>fv(i,e,t,n,o.extractedUrl,r,s).pipe(st(({state:a,tree:l})=>kt(we({},o),{targetSnapshot:a,urlAfterRedirects:l}))))}function xv(i,e){return En(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return Be(t);let s=new Set(r.map(l=>l.route)),o=new Set;for(let l of s)if(!o.has(l))for(let c of Vf(l))o.add(c);let a=0;return fn(o).pipe(ji(l=>s.has(l)?Mv(l,n,i,e):(l.data=xu(l,l.parent,i).resolve,Be(void 0))),Gt(()=>a++),pc(1),En(l=>a===o.size?Be(t):yi))})}function Vf(i){let e=i.children.map(t=>Vf(t)).flat();return[i,...e]}function Mv(i,e,t,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!Df(r)&&(s[js]=r.title),Sv(s,i,e,n).pipe(st(o=>(i._resolvedData=o,i.data=xu(i,i.parent,t).resolve,null)))}function Sv(i,e,t,n){let r=qc(i);if(r.length===0)return Be({});let s={};return fn(r).pipe(En(o=>bv(i[o],e,t,n).pipe(xi(),Gt(a=>{s[o]=a}))),pc(1),hd(s),br(o=>Uf(o)?yi:ys(o)))}function bv(i,e,t,n){let r=qs(e)??n,s=Vr(i,r),o=s.resolve?s.resolve(e,t):ii(r,()=>s(e,t));return Ti(o)}function Xc(i){return Tn(e=>{let t=i(e);return t?fn(t).pipe(st(()=>e)):Be(e)})}var zf=(()=>{class i{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===We);return n}getResolvedTitleForRoute(t){return t.data[js]}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:()=>Ie(wv),providedIn:"root"})}}return i})(),wv=(()=>{class i extends zf{constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static{this.\u0275fac=function(n){return new(n||i)(ut(cf))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Tu=new Ct("",{providedIn:"root",factory:()=>({})}),Au=new Ct(""),Ev=(()=>{class i{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=Ie(Tc)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Be(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=Ti(t.loadComponent()).pipe(st(Hf),Gt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Er(()=>{this.componentLoaders.delete(t)})),r=new uc(n,()=>new wn).pipe(cc());return this.componentLoaders.set(t,r),r}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Be({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=Tv(n,this.compiler,t,this.onLoadEndListener).pipe(Er(()=>{this.childrenLoaders.delete(n)})),o=new uc(s,()=>new wn).pipe(cc());return this.childrenLoaders.set(n,o),o}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Tv(i,e,t,n){return Ti(i.loadChildren()).pipe(st(Hf),En(r=>r instanceof Ed||Array.isArray(r)?Be(r):fn(e.compileModuleAsync(r))),st(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Au,[],{optional:!0,self:!0}).flat()),{routes:o.map(wu),injector:s}}))}function Av(i){return i&&typeof i=="object"&&"default"in i}function Hf(i){return Av(i)?i.default:i}var Cu=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:()=>Ie(Cv),providedIn:"root"})}}return i})(),Cv=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Rv=new Ct("");var Pv=(()=>{class i{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new wn,this.transitionAbortSubject=new wn,this.configLoader=Ie(Ev),this.environmentInjector=Ie(Ar),this.urlSerializer=Ie(_u),this.rootContexts=Ie(va),this.location=Ie(jo),this.inputBindingEnabled=Ie(bu,{optional:!0})!==null,this.titleStrategy=Ie(zf),this.options=Ie(Tu,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=Ie(Cu),this.createViewTransition=Ie(Rv,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Be(void 0),this.rootComponentType=null;let t=r=>this.events.next(new nu(r)),n=r=>this.events.next(new iu(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(kt(we(we({},this.transitions.value),t),{id:n}))}setupNavigations(t,n,r){return this.transitions=new un({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Fs,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(_i(s=>s.id!==0),st(s=>kt(we({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Tn(s=>{let o=!1,a=!1;return Be(s).pipe(Tn(l=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",mn.SupersededByNewNavigation),yi;this.currentTransition=s,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?kt(we({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&u!=="reload"){let h="";return this.events.next(new Ki(l.id,this.urlSerializer.serialize(l.rawUrl),h,Jc.IgnoredSameUrlNavigation)),l.resolve(null),yi}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Be(l).pipe(Tn(h=>{let d=this.transitions?.getValue();return this.events.next(new Bs(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),d!==this.transitions?.getValue()?yi:Promise.resolve(h)}),_v(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Gt(h=>{s.targetSnapshot=h.targetSnapshot,s.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=kt(we({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let d=new ha(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(d)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:d,source:m,restoredState:g,extras:v}=l,p=new Bs(h,this.urlSerializer.serialize(d),m,g);this.events.next(p);let f=Pf(this.rootComponentType).snapshot;return this.currentTransition=s=kt(we({},l),{targetSnapshot:f,urlAfterRedirects:d,extras:kt(we({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=d,Be(s)}else{let h="";return this.events.next(new Ki(l.id,this.urlSerializer.serialize(l.extractedUrl),h,Jc.IgnoredByUrlHandlingStrategy)),l.resolve(null),yi}}),Gt(l=>{let c=new Kc(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),st(l=>(this.currentTransition=s=kt(we({},l),{guards:U0(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),q0(this.environmentInjector,l=>this.events.next(l)),Gt(l=>{if(s.guardsResult=l.guardsResult,Ur(l.guardsResult))throw Of(this.urlSerializer,l.guardsResult);let c=new Qc(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),_i(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",mn.GuardRejected),!1)),Xc(l=>{if(l.guards.canActivateChecks.length)return Be(l).pipe(Gt(c=>{let u=new eu(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),Tn(c=>{let u=!1;return Be(c).pipe(xv(this.paramsInheritanceStrategy,this.environmentInjector),Gt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",mn.NoDataFromResolver)}}))}),Gt(c=>{let u=new tu(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),Xc(l=>{let c=u=>{let h=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(u.routeConfig).pipe(Gt(d=>{u.component=d}),st(()=>{})));for(let d of u.children)h.push(...c(d));return h};return hc(c(l.targetSnapshot.root)).pipe(fc(null),wr(1))}),Xc(()=>this.afterPreactivation()),Tn(()=>{let{currentSnapshot:l,targetSnapshot:c}=s,u=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return u?fn(u).pipe(st(()=>s)):Be(s)}),st(l=>{let c=R0(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=kt(we({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),Gt(()=>{this.events.next(new zs)}),F0(this.rootContexts,t.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),wr(1),Gt({next:l=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ji(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{o=!0}}),md(this.transitionAbortSubject.pipe(Gt(l=>{throw l}))),Er(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",mn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),br(l=>{if(a=!0,Ff(l))this.events.next(new Ei(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),D0(l)?this.events.next(new Hs(l.url)):s.resolve(!1);else{this.events.next(new Vs(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0));try{s.resolve(t.errorHandler(l))}catch(c){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(c)}}return yi}))}))}cancelNavigationTransition(t,n,r){let s=new Ei(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Iv(i){return i!==Fs}var Dv=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:()=>Ie(Lv),providedIn:"root"})}}return i})(),yu=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},Lv=(()=>{class i extends yu{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ko(i)))(r||i)}})()}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Gf=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:()=>Ie(Ov),providedIn:"root"})}}return i})(),Ov=(()=>{class i extends Gf{constructor(){super(...arguments),this.location=Ie(jo),this.urlSerializer=Ie(_u),this.options=Ie(Tu,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=Ie(Cu),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new wi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Pf(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&t(n.url,n.state)})}handleRouterEvent(t,n){if(t instanceof Bs)this.stateMemento=this.createStateMemento();else if(t instanceof Ki)this.rawUrlTree=n.initialUrl;else if(t instanceof ha){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(r,n)}}else t instanceof zs?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,n))):t instanceof Ei&&(t.code===mn.GuardRejected||t.code===mn.NoDataFromResolver)?this.restoreHistory(n):t instanceof Vs?this.restoreHistory(n,!0):t instanceof Ji&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,n){let r=this.urlSerializer.serialize(t);if(this.location.isCurrentPathEqualTo(r)||n.extras.replaceUrl){let s=this.browserPageId,o=we(we({},n.extras.state),this.generateNgRouterState(n.id,s));this.location.replaceState(r,"",o)}else{let s=we(we({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ko(i)))(r||i)}})()}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Os=function(i){return i[i.COMPLETE=0]="COMPLETE",i[i.FAILED=1]="FAILED",i[i.REDIRECTING=2]="REDIRECTING",i}(Os||{});function Nv(i,e){i.events.pipe(_i(t=>t instanceof Ji||t instanceof Ei||t instanceof Vs||t instanceof Ki),st(t=>t instanceof Ji||t instanceof Ki?Os.COMPLETE:(t instanceof Ei?t.code===mn.Redirect||t.code===mn.SupersededByNewNavigation:!1)?Os.REDIRECTING:Os.FAILED),_i(t=>t!==Os.REDIRECTING),wr(1)).subscribe(()=>{e()})}function Fv(i){throw i}var Uv={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},kv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},_a=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=Ie(Go),this.stateManager=Ie(Gf),this.options=Ie(Tu,{optional:!0})||{},this.pendingTasks=Ie(Vo),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=Ie(Pv),this.urlSerializer=Ie(_u),this.location=Ie(jo),this.urlHandlingStrategy=Ie(Cu),this._events=new wn,this.errorHandler=this.options.errorHandler||Fv,this.navigated=!1,this.routeReuseStrategy=Ie(Dv),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=Ie(Au,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!Ie(bu,{optional:!0}),this.eventsSubscription=new sd,this.isNgZoneEnabled=Ie(Wn)instanceof Wn&&Wn.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof Ei&&n.code!==mn.Redirect&&n.code!==mn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Ji)this.navigated=!0;else if(n instanceof Hs){let o=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),a={info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||Iv(r.source)};this.scheduleNavigation(o,Fs,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Vv(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Fs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",n)},0)})}navigateToSyncWithBrowser(t,n,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let l=we({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(wu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:o,u=null;switch(a){case"merge":u=we(we({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let d=r?r.snapshot:this.routerState.snapshot.root;h=Tf(d)}catch{(typeof t[0]!="string"||!t[0].startsWith("/"))&&(t=[]),h=this.currentUrlTree.root}return Af(h,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=Ur(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Fs,null,n)}navigate(t,n={skipLocationChange:!1}){return Bv(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=we({},Uv):n===!1?r=we({},kv):r=n,Ur(t))return hf(this.currentUrlTree,t,r);let s=this.parseUrl(t);return hf(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(t,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,l,c;o?(a=o.resolve,l=o.reject,c=o.promise):c=new Promise((h,d)=>{a=h,l=d});let u=this.pendingTasks.add();return Nv(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(h=>Promise.reject(h))}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Bv(i){for(let e=0;e<i.length;e++)if(i[e]==null)throw new Nt(4008,!1)}function Vv(i){return!(i instanceof zs)&&!(i instanceof Hs)}var zv=new Ct("");function Wf(i,...e){return Tr([{provide:Au,multi:!0,useValue:i},[],{provide:kr,useFactory:Hv,deps:[_a]},{provide:Wo,multi:!0,useFactory:Gv},e.map(t=>t.\u0275providers)])}function Hv(i){return i.routerState.root}function Gv(){let i=Ie(yc);return e=>{let t=i.get(ws);if(e!==t.components[0])return;let n=i.get(_a),r=i.get(Wv);i.get(Xv)===1&&n.initialNavigation(),i.get(jv,null,mc.Optional)?.setUpPreloading(),i.get(zv,null,mc.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Wv=new Ct("",{factory:()=>new wn}),Xv=new Ct("",{providedIn:"root",factory:()=>1});var jv=new Ct("");var $v={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Jw=kt(we({},$v),{"[class.ng-submitted]":"isSubmitted"});var Xf=new Ct("CallSetDisabledState",{providedIn:"root",factory:()=>Ru}),Ru="always";var Yv=new Ct("");var jf=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$i({type:i})}static{this.\u0275inj=qi({})}}return i})();var qf=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Xf,useValue:t.callSetDisabledState??Ru}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$i({type:i})}static{this.\u0275inj=qi({imports:[jf]})}}return i})(),$f=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Yv,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Xf,useValue:t.callSetDisabledState??Ru}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$i({type:i})}static{this.\u0275inj=qi({imports:[jf]})}}return i})();var en=(()=>{class i{constructor(){this.language=new un("de"),this.language$=this.language.asObservable()}toggleLanguage(){let t=this.language.value==="de"?"en":"de";this.language.next(t)}setLanguage(t){this.language.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Wt=(()=>{class i{constructor(){this.zoomRequestSource=new wn,this.cameraResetRequestSource=new wn,this.zoomRequest$=this.zoomRequestSource.asObservable(),this.cameraResetRequest$=this.cameraResetRequestSource.asObservable()}requestZoom(t){this.zoomRequestSource.next(t)}requestCameraReset(){this.cameraResetRequestSource.next()}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Zv(i,e){if(i&1&&(j(0,"div",22)(1,"span",23),Oe(2),ie(),Ue(3,"span",24),ie()),i&2){let t=e.$implicit;me(2),$e(t.icon),me(),gt("innerHTML",t.text,Sc)}}function Jv(i,e){if(i&1){let t=Ho();j(0,"div",1)(1,"div",2)(2,"button",3),yt("click",function(){xs(t);let r=ri();return Ms(r.goBack())}),Ze(),j(3,"svg",4),Ue(4,"line",5)(5,"polyline",6),ie()(),xt(),j(6,"h2",7),Oe(7),ie(),j(8,"div",8)(9,"button",9),yt("click",function(){xs(t);let r=ri();return Ms(r.toggleLanguage())}),Oe(10),ie()()(),j(11,"div",10)(12,"h3",11),Oe(13),ie(),Ue(14,"p",12),ie(),j(15,"div",13),Dt(16,Zv,4,2,"div",14),ie(),j(17,"footer",15)(18,"a",16),Ze(),j(19,"svg",17),Ue(20,"path",18),ie()(),xt(),j(21,"a",19),Ze(),j(22,"svg",17),Ue(23,"path",20)(24,"polyline",21),ie()()()()}if(i&2){let t=ri();me(7),$e(t.profileData[t.currentLanguage].title),me(3),$t(" ",t.currentLanguage==="de"?"EN":"DE"," "),me(3),$e(t.profileData[t.currentLanguage].greeting),me(),gt("innerHTML",t.profileData[t.currentLanguage].bio,Sc),me(2),gt("ngForOf",t.profileData[t.currentLanguage].highlights)}}var Yf=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.profileData={de:{title:"Profil",greeting:"Hallo! Ich bin Ezechiel Tonkeme.",bio:`Ich bin ein angehender Ingenieur im Masterstudium mit der Vertiefung 
            Robotik und Automation. Mein technischer Schwerpunkt liegt auf der Ent
            wicklung eingebetteter Systeme, der Regelungstechnik sowie der industriellen
             Automatisierung. Ich verf\xFCge \xFCber umfassende praktische Erfahrung 
            in der Programmierung mit C/C++, Python und MATLAB/Simulink sowie 
            in der Mikrocontrollerprogrammierung und der Entwicklung von Echtzeit
            systemen unter Verwendung von Feldbussystemen wie EtherCAT, PROFI
            NET und Modbus. Erg\xE4nzend hierzu besitze ich fundierte Kenntnisse in der 
            Schaltungssimulation mit LTSpice und PLECS sowie in der 3D-CAD-Konstruktion
           und Simulation mit AutoCAD, SolidWorks und ADAMS. Neben 
            der Arbeit mit ABB-Industrierobotern und anspruchsvollen Projekten in 
            der Signalverarbeitung und Datenkompression konnte ich meine Teamf\xE4higkeit
           bereits in der Automobilproduktion bei Mercedes-Benz sowie als 
            Dozent f\xFCr technische F\xE4cher unter Beweis stellen.`,highlights:[{icon:"\u{1F4BB}",text:"Fundierte Kenntnisse in <strong>C/C++</strong> und <strong>SPS-Programmierung</strong> f\xFCr robuste Softwarel\xF6sungen."},{icon:"\u{1F527}",text:"Erfahrung mit <strong>Git</strong>, <strong>Docker</strong> und agilen Methoden f\xFCr eine effiziente Entwicklung."},{icon:"\u{1F50C}",text:"Kenntnisse in <strong>IoT</strong>,UART,I\xB2C, SPI und Sensorintegration f\xFCr IoT-Anwendungen."},{icon:"\u{1F30D}",text:"Teamf\xE4hig und motiviert, in einem <strong>internationalen Umfeld</strong> zu wachsen."}]},en:{title:"Profile",greeting:"Hello! I'm Ezechiel Tonkeme.",bio:` I am a graduate engineer currently pursuing a Masters degree with a specialization in Robotics and Automation. My technical focus lies in embedded systems development, control engineering, and industrial automation. I have extensive hands-on experience in programming with C/C++, Python, and MATLAB/Simulink, as well as in microcontroller programming and real-time systems utilizing fieldbus protocols such as EtherCAT, PROFINET, and Modbus.

        Furthermore, I possess sound knowledge in circuit simulation using LTSpice and PLECS, as well as in 3D CAD design and simulation with AutoCAD, SolidWorks, and ADAMS. In addition to my work with ABB industrial robots and complex projects in signal processing and data compression, I have proven my ability to work effectively in teams within the automotive production environment at Mercedes-Benz and through my experience as a lecturer for technical subjects`,highlights:[{icon:"\u{1F4BB}",text:"Profound knowledge in <strong>C/C++</strong> and <strong>SPS-Programmcode</strong> for robust software solutions."},{icon:"\u{1F527}",text:"Experience with <strong>Git</strong>, <strong>Docker</strong>, and agile methodologies for efficient development."},{icon:"\u{1F50C}",text:"Knowledge in <strong>IoT</strong>, UART, I\xB2C, SPI, and sensor integration ."},{icon:"\u{1F30D}",text:"A team player, motivated to grow in an <strong>international environment</strong>."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt))}}static{this.\u0275cmp=It({type:i,selectors:[["app-profil"]],standalone:!0,features:[Lt],decls:1,vars:1,consts:[["class","profile-container",4,"ngIf"],[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"bio-section"],[1,"greeting"],[1,"bio",3,"innerHTML"],[1,"highlights"],["class","highlight-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"highlight-item"],[1,"icon"],[3,"innerHTML"]],template:function(n,r){n&1&&Dt(0,Jv,25,5,"div",0),n&2&&gt("ngIf",r.profileData)},dependencies:[Bt,Qt,Rr],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.bio-section[_ngcontent-%COMP%]{background-color:#0003;padding:20px;border-radius:8px;border:1px solid rgba(0,191,255,.5)}.greeting[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:500;margin-bottom:8px}.bio[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;color:#f0f0f0}.highlights[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}.highlight-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:12px;border:1px solid rgba(0,191,255,.5);transition:background-color .2s ease}.highlight-item[_ngcontent-%COMP%]:hover{background-color:#00bfff33}.icon[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]     strong{color:#00bfff;font-weight:700}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.greeting[_ngcontent-%COMP%]{font-size:1.3rem}.bio[_ngcontent-%COMP%]{font-size:1rem}}"]})}}return i})();function Kv(i,e){if(i&1&&(j(0,"a",24),Oe(1),ie()),i&2){let t=ri().$implicit;gt("href",t.href,Md),me(),$e(t.value)}}function Qv(i,e){if(i&1&&(j(0,"span",25),Oe(1),ie()),i&2){let t=ri().$implicit;me(),$e(t.value)}}function ey(i,e){if(i&1&&(j(0,"div",18)(1,"div",19),Oe(2),ie(),j(3,"div",20)(4,"span",21),Oe(5),ie(),Dt(6,Kv,2,2,"a",22),Oe(7," --> "),Dt(8,Qv,2,1,"span",23),ie()()),i&2){let t=e.$implicit;me(2),$e(t.icon),me(3),$e(t.text),me(),gt("ngIf",t.href),me(2),gt("ngIf",!t.href)}}var Zf=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.contactData={de:{title:"Kontaktdaten",items:[{icon:"\u{1F4E7}",text:"Email",value:"ezechiel146@gmail.com",href:"mailto:ezechiel146@gmail.com"},{icon:"\u{1F4DE}",text:"Telefon",value:"+49 157 53673269",href:"tel:+4915753673269"},{icon:"\u{1F4CD}",text:"Standort",value:"Gie\xDFen, Deutschland"},{icon:"\u{1F697}",text:"F\xFChrerschein",value:"Klasse B"},{icon:"\u{1F310}",text:"GitHub",value:"Mein Profil",href:"https://github.com/Ezechiel197"}]},en:{title:"Contact Data",items:[{icon:"\u{1F4E7}",text:"Email",value:"ezechiel146@gmail.com",href:"mailto:ezechiel146@gmail.com"},{icon:"\u{1F4DE}",text:"Phone",value:"+49 157 53673269",href:"tel:+4915753673269"},{icon:"\u{1F4CD}",text:"Location",value:"Gie\xDFen, Germany"},{icon:"\u{1F697}",text:"Driving License",value:"Class B"},{icon:"\u{1F310}",text:"GitHub",value:"My profil",href:"https://github.com/Ezechiel197"}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt))}}static{this.\u0275cmp=It({type:i,selectors:[["app-daten"]],standalone:!0,features:[Lt],decls:21,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"data-grid"],["class","data-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"data-item"],[1,"icon"],[1,"data-text"],[1,"data-label"],["target","_blank","class","data-value link",3,"href",4,"ngIf"],["class","data-value",4,"ngIf"],["target","_blank",1,"data-value","link",3,"href"],[1,"data-value"]],template:function(n,r){n&1&&(j(0,"div",0)(1,"div",1)(2,"button",2),yt("click",function(){return r.goBack()}),Ze(),j(3,"svg",3),Ue(4,"line",4)(5,"polyline",5),ie()(),xt(),j(6,"h2",6),Oe(7),ie(),j(8,"div",7)(9,"button",8),yt("click",function(){return r.toggleLanguage()}),Oe(10),ie()()(),j(11,"div",9),Dt(12,ey,9,4,"div",10),ie(),j(13,"footer",11)(14,"a",12),Ze(),j(15,"svg",13),Ue(16,"path",14),ie()(),xt(),j(17,"a",15),Ze(),j(18,"svg",13),Ue(19,"path",16)(20,"polyline",17),ie()()()()),n&2&&(me(7),$e(r.contactData[r.currentLanguage].title),me(3),$t(" ",r.currentLanguage==="de"?"EN":"DE"," "),me(2),gt("ngForOf",r.contactData[r.currentLanguage].items))},dependencies:[Bt,Qt,Rr],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.data-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:20px}.data-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:16px;border:1px solid rgba(0,191,255,.5)}.icon[_ngcontent-%COMP%]{font-size:1.8rem;color:#00bfff}.data-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.data-label[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:2px}.data-value[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.data-value.link[_ngcontent-%COMP%]{color:#f0f0f0;text-decoration:none;transition:color .2s ease}.data-value.link[_ngcontent-%COMP%]:hover{color:#00bfff;text-decoration:underline}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function ty(i,e){if(i&1&&(j(0,"div",21)(1,"span",22),Oe(2),ie(),j(3,"div",23),Ue(4,"div",24),ie()()),i&2){let t=e.$implicit;gt("title",t.description),me(2),$e(t.name),me(2),zo("width",t.level,"%")}}function ny(i,e){if(i&1&&(j(0,"div",17)(1,"h3",18),Oe(2),ie(),j(3,"div",19),Dt(4,ty,5,4,"div",20),ie()()),i&2){let t=e.$implicit;me(2),$e(t.name),me(2),gt("ngForOf",t.skills)}}var Jf=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.skillsData={de:{title:"Technische F\xE4higkeiten",categories:[{name:"Programmiersprachen",skills:[{name:"C/C++",level:100,description:"Umfassende Erfahrung in Systemprogrammierung und Embedded-Anwendungen."},{name:"SPS-Programmierung",level:100,description:"Automatisierung von Maschinenanlagen mit den Feldbussystemen EtherCAT, PROFINET und Modbus "},{name:"Python",level:70,description:" Automatisierung und Datenverarbeitung."}]},{name:"Tools & Technologien",skills:[{name:"Git & GitHub",level:90,description:"Effiziente Versionskontrolle und kollaborative Entwicklung."},{name:"SolidWorks, AutoCAD, Adams ",level:90,description:"3D-Konstruktion komplexer Baugruppen, Erstellung technischer Zeichnungen und computergest\xFCtzte Simulation von Mehrk\xF6rpersystemen."},{name:"LTSpice und Plecs",level:90,description:"Simulation und Analyse leistungselektronischer Schaltungen sowie thermische Modellierung von Halbleiterkomponenten."},{name:"Matlab/Simulink",level:100,description:"Modellierung komplexer dynamischer Systeme, Entwurf von Regelungsalgorithmen und Durchf\xFChrung physikalischer Simulationen."}]}]},en:{title:"Technical Skills",categories:[{name:"Programming Languages",skills:[{name:"C/C++",level:90,description:"Extensive experience in system programming and embedded applications."},{name:"SPS-Programmierung",level:100,description:"Automation of industrial machinery using EtherCAT, PROFINET and Modbus fieldbus systems"},{name:"Python",level:70,description:" Automation and Data Processing."}]},{name:"Tools & Technologies",skills:[{name:"Git & GitHub",level:90,description:"Efficient version control and collaborative development."},{name:"SolidWorks, AutoCAD, Adams ",level:90,description:"3D design of complex assemblies, creation of technical drawings, and multi-body dynamics simulation (MBD)"},{name:"LTSpice und Plecs",level:90,description:"Simulation and analysis of power electronic circuits and thermal modeling of semiconductor components."},{name:"Matlab/Simulink",level:100,description:"Modeling of complex dynamic systems, design of control algorithms, and execution of physical simulations."}]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt))}}static{this.\u0275cmp=It({type:i,selectors:[["app-skills"]],standalone:!0,features:[Lt],decls:20,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],["class","category-section",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"category-section"],[1,"category-title"],[1,"skills-grid"],["class","skill-item",3,"title",4,"ngFor","ngForOf"],[1,"skill-item",3,"title"],[1,"skill-name"],[1,"skill-bar-container"],[1,"skill-bar"]],template:function(n,r){n&1&&(j(0,"div",0)(1,"div",1)(2,"button",2),yt("click",function(){return r.goBack()}),Ze(),j(3,"svg",3),Ue(4,"line",4)(5,"polyline",5),ie()(),xt(),j(6,"h2",6),Oe(7),ie(),j(8,"div",7)(9,"button",8),yt("click",function(){return r.toggleLanguage()}),Oe(10),ie()()(),Dt(11,ny,5,2,"div",9),j(12,"footer",10)(13,"a",11),Ze(),j(14,"svg",12),Ue(15,"path",13),ie()(),xt(),j(16,"a",14),Ze(),j(17,"svg",12),Ue(18,"path",15)(19,"polyline",16),ie()()()()),n&2&&(me(7),$e(r.skillsData[r.currentLanguage].title),me(3),$t(" ",r.currentLanguage==="de"?"EN":"DE"," "),me(),gt("ngForOf",r.skillsData[r.currentLanguage].categories))},dependencies:[Bt,Qt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.category-section[_ngcontent-%COMP%]{padding-top:16px}.category-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:16px;color:#f0f0f0}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px}.skill-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.skill-name[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.skill-bar-container[_ngcontent-%COMP%]{width:100%;height:12px;background-color:#0000004d;border-radius:6px;overflow:hidden;border:1px solid #444}.skill-bar[_ngcontent-%COMP%]{height:100%;background-color:#00bfff;border-radius:6px;transition:width .5s ease-out}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.category-title[_ngcontent-%COMP%]{font-size:1.3rem}}"]})}}return i})();function iy(i,e){if(i&1&&(j(0,"div",18)(1,"div",19),Oe(2),ie(),j(3,"div",20),Oe(4),ie()()),i&2){let t=e.$implicit;gt("title",t.description),me(2),$e(t.icon),me(2),$e(t.name)}}var Kf=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.softSkillsData={de:{title:"Soziale Kompetenzen",items:[{icon:"\u{1F4D6}",name:"Lernbereitschaft",description:"Schnelle Aneignung neuer Technologien und Konzepte."},{icon:"\u{1F91D}",name:"Teamarbeit",description:"Effektive Zusammenarbeit in agilen und interdisziplin\xE4ren Teams."},{icon:"\u23F0",name:"Zeitmanagement",description:"Priorisierung von Aufgaben zur Einhaltung von Fristen."},{icon:"\u{1F4A1}",name:"Kritisches Denken",description:"Analytische Probleml\xF6sung und fundierte Entscheidungsfindung."},{icon:"\u{1F5E3}\uFE0F",name:"Effektive Kommunikation",description:"Klare Vermittlung komplexer technischer Informationen."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"\xDCbernahme von Verantwortung und Motivation des Teams."}]},en:{title:"Soft Skills",items:[{icon:"\u{1F4D6}",name:"Eagerness to Learn",description:"Rapid acquisition of new technologies and concepts."},{icon:"\u{1F91D}",name:"Teamwork",description:"Effective collaboration in agile and interdisciplinary teams."},{icon:"\u23F0",name:"Time Management",description:"Prioritizing tasks to meet deadlines effectively."},{icon:"\u{1F4A1}",name:"Critical Thinking",description:"Analytical problem-solving and informed decision-making."},{icon:"\u{1F5E3}\uFE0F",name:"Effective Communication",description:"Clearly conveying complex technical information."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"Taking responsibility and motivating the team."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt))}}static{this.\u0275cmp=It({type:i,selectors:[["app-softskills"]],standalone:!0,features:[Lt],decls:21,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"soft-skills-grid"],["class","soft-skill-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"soft-skill-card",3,"title"],[1,"icon"],[1,"skill-name"]],template:function(n,r){n&1&&(j(0,"div",0)(1,"div",1)(2,"button",2),yt("click",function(){return r.goBack()}),Ze(),j(3,"svg",3),Ue(4,"line",4)(5,"polyline",5),ie()(),xt(),j(6,"h2",6),Oe(7),ie(),j(8,"div",7)(9,"button",8),yt("click",function(){return r.toggleLanguage()}),Oe(10),ie()()(),j(11,"div",9),Dt(12,iy,5,3,"div",10),ie(),j(13,"footer",11)(14,"a",12),Ze(),j(15,"svg",13),Ue(16,"path",14),ie()(),xt(),j(17,"a",15),Ze(),j(18,"svg",13),Ue(19,"path",16)(20,"polyline",17),ie()()()()),n&2&&(me(7),$e(r.softSkillsData[r.currentLanguage].title),me(3),$t(" ",r.currentLanguage==="de"?"EN":"DE"," "),me(2),gt("ngForOf",r.softSkillsData[r.currentLanguage].items))},dependencies:[Bt,Qt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.soft-skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;padding-top:16px}.soft-skill-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center;transition:transform .2s ease,background-color .2s ease}.soft-skill-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);background-color:#00bfff1a}.soft-skill-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:12px;display:block}.soft-skill-card[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function ry(i,e){if(i&1&&(j(0,"div",18)(1,"div",19),Oe(2),ie(),j(3,"div",20),Oe(4),ie()()),i&2){let t=e.$implicit;gt("title",t.description),me(2),$e(t.name),me(2),$e(t.level)}}var Qf=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.languagesData={de:{title:"Sprachkenntnisse",items:[{name:"Franz\xF6sisch",level:"Muttersprache",description:"Vollst\xE4ndige Beherrschung in allen Kontexten."},{name:"Deutsch",level:"Verhandlungssicher",description:"C1 - Flie\xDFend in beruflichen und akademischen Umgebungen."},{name:"Englisch",level:"Gute Kenntnisse",description:"B2 - Selbstst\xE4ndige und effektive Kommunikation."}]},en:{title:"Languages",items:[{name:"French",level:"Native Speaker",description:" Complete proficiency in all contexts."},{name:"German",level:"Business Fluent",description:"C1 - Fluent in professional and academic environments."},{name:"English",level:"Proficient",description:"B2 - Independent and effective communication."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt))}}static{this.\u0275cmp=It({type:i,selectors:[["app-sprachen"]],standalone:!0,features:[Lt],decls:21,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"languages-grid"],["class","language-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"language-card",3,"title"],[1,"language-name"],[1,"language-level"]],template:function(n,r){n&1&&(j(0,"div",0)(1,"div",1)(2,"button",2),yt("click",function(){return r.goBack()}),Ze(),j(3,"svg",3),Ue(4,"line",4)(5,"polyline",5),ie()(),xt(),j(6,"h2",6),Oe(7),ie(),j(8,"div",7)(9,"button",8),yt("click",function(){return r.toggleLanguage()}),Oe(10),ie()()(),j(11,"div",9),Dt(12,ry,5,3,"div",10),ie(),j(13,"footer",11)(14,"a",12),Ze(),j(15,"svg",13),Ue(16,"path",14),ie()(),xt(),j(17,"a",15),Ze(),j(18,"svg",13),Ue(19,"path",16)(20,"polyline",17),ie()()()()),n&2&&(me(7),$e(r.languagesData[r.currentLanguage].title),me(3),$t(" ",r.currentLanguage==="de"?"EN":"DE"," "),me(2),gt("ngForOf",r.languagesData[r.currentLanguage].items))},dependencies:[Bt,Qt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.languages-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px;padding-top:16px}.language-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center}.language-name[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#f0f0f0}.language-level[_ngcontent-%COMP%]{font-size:1.1rem;color:#00bfff;margin-top:4px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function sy(i,e){if(i&1&&(j(0,"div",18),Ue(1,"div",19),j(2,"div",20)(3,"div",21),Oe(4),ie(),j(5,"h3",22),Oe(6),ie(),j(7,"p",23),Oe(8),ie(),j(9,"p",24),Oe(10),ie()()()),i&2){let t=e.$implicit;me(4),$e(t.date),me(2),$e(t.institution),me(2),$e(t.degree),me(2),$e(t.description)}}var ep=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.academicData={de:{title:"Akademische Laufbahn",timeline:[{degree:" Master of Science: Elektrotechnik mit der Vertiefung in Robotik und Automation",institution:"Technische Hochschule Mittelhessen (THM)",date:"Okt 2025 - Heute",description:"Praxisnahes Studium mit Fokus auf Software-Engineering, Embedded-System-Programmierung, Regelungstechnik mit MATLAB/Simulink, Automatisierungstechnik und Datenverarbeitung."},{degree:"Bachelor of Science: Physik und Technologie f\xFCr Raumfahrtanwendungen",institution:"Justus-Liebig-Universit\xE4t Gie\xDFen \u2014 JLU ",date:"Okt 2021 - Jun 2025",description:"Kernbereiche umfassen die Elektrotechnik, Systemtheorie und Regelungstechnik sowie spezialisierte Tutorien zur Raumfahrttechnologie."},{degree:"Deutsch-Sprachkurs (A1-C1) mit Telc-C1-Zertifikat",institution:"Mariaspring in Claustahl",date:"Sep 2019 - Aug 2021",description:"Intensivkurs zur Erlangung der sprachlichen Hochschulzugangsberechtigung f\xFCr Deutschland."},{degree:"Allgemeine Hochschulreife (Abitur)",institution:"Kolleg Anguissa - Jaunde",date:"Sep 2003 - Aug 2019",description:"Abschluss mit Leistungskursen in Mathematik, Physik und Informatik als solide Grundlage f\xFCr ein Ingenieurstudium."}]},en:{title:"Education",timeline:[{degree:" Master of Science: Electrical Engineering with a specialization in Robotics and Automation",institution:"Technische Hochschule Mittelhessen (THM)",date:"Okt 2025 - today",description:"Practice-oriented studies with a focus on software engineering, embedded systems programming, control engineering using MATLAB/Simulink, automation technology, and data processing. "},{degree:"Bachelor of Science: Aerospace Physics and Technology",institution:"Justus-Liebig-Universit\xE4t Gie\xDFen \u2014 JLU ",date:"Okt 2021 - Jun 2025",description:"Key areas of expertise include electrical engineering, systems theory, and control engineering, complemented by specialized space technology modules."},{degree:"German Language Course (A1-C1) with Telc-C1 Certificate",institution:"Mariaspring - Claustahl",date:"Sep 2019 - Aug 2021",description:"Intensive course to obtain the language proficiency required for university admission in Germany."},{degree:"General University Entrance Qualification (Abitur)",institution:"Kolleg Anguissa - Jaunde",date:"Sep 2003 - Aug 2019",description:"Graduated with advanced courses in Mathematics, Physics, and Computer Science, providing a strong foundation for engineering studies."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt))}}static{this.\u0275cmp=It({type:i,selectors:[["app-akademisch"]],standalone:!0,features:[Lt],decls:21,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(j(0,"div",0)(1,"div",1)(2,"button",2),yt("click",function(){return r.goBack()}),Ze(),j(3,"svg",3),Ue(4,"line",4)(5,"polyline",5),ie()(),xt(),j(6,"h2",6),Oe(7),ie(),j(8,"div",7)(9,"button",8),yt("click",function(){return r.toggleLanguage()}),Oe(10),ie()()(),j(11,"div",9),Dt(12,sy,11,4,"div",10),ie(),j(13,"footer",11)(14,"a",12),Ze(),j(15,"svg",13),Ue(16,"path",14),ie()(),xt(),j(17,"a",15),Ze(),j(18,"svg",13),Ue(19,"path",16)(20,"polyline",17),ie()()()()),n&2&&(me(7),$e(r.academicData[r.currentLanguage].title),me(3),$t(" ",r.currentLanguage==="de"?"EN":"DE"," "),me(2),gt("ngForOf",r.academicData[r.currentLanguage].timeline))},dependencies:[Bt,Qt],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();var tp=(()=>{class i{constructor(t){this.http=t,this.username="Ezechiel197",this.apiUrl=`https://api.github.com/users/${this.username}/repos`}getRepositories(){return this.http.get(`${this.apiUrl}?sort=updated&per_page=100`).pipe(st(t=>t.filter(n=>!n.fork).map(n=>({name:n.name.replace(/-/g," "),description:n.description||"No description available.",html_url:n.html_url,topics:n.topics&&n.topics.length>0?n.topics:[n.language].filter(r=>!!r),updated_at:n.updated_at,language:n.language}))))}static{this.\u0275fac=function(n){return new(n||i)(ut(Lc))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function ay(i,e){i&1&&(Ze(),j(0,"svg",24),Ue(1,"path",25)(2,"polyline",26)(3,"line",27),ie())}function ly(i,e){if(i&1&&(j(0,"span",28),Oe(1),ie()),i&2){let t=e.$implicit;me(),$e(t)}}function cy(i,e){if(i&1){let t=Ho();j(0,"div",18),yt("click",function(){let r=xs(t).$implicit,s=ri();return Ms(s.openProject(r.link))}),j(1,"h3",19),Oe(2),Dt(3,ay,4,0,"svg",20),ie(),j(4,"p",21),Oe(5),ie(),j(6,"div",22),Dt(7,ly,2,1,"span",23),ie()()}if(i&2){let t=e.$implicit;bs("clickable",!!t.link),me(2),$t(" ",t.name," "),me(),gt("ngIf",t.link),me(2),$e(t.description),me(2),gt("ngForOf",t.tags)}}var np=(()=>{class i{constructor(t,n,r){this.languageService=t,this.sceneControlService=n,this.githubService=r,this.currentLanguage="de",this.projectsData={de:{title:"Ausgew\xE4hlte Projekte",projects:[{name:"RTOS_Kernel_STM32",description:"Dieses Projekt implementiert einen funktionalen Echtzeit-Kernel auf einem STM32L4-Mikrocontroller. Der Kernel nutzt ein pr\xE4emptives Round-Robin-Scheduling-Verfahren mit konfigurierbaren Zeitscheiben (Time-Slicing). Er verwaltet Task-Zust\xE4nde (Running, Ready, Blocked) und stellt eine pr\xE4zise zeitliche Steuerung \xFCber einen dedizierten SysTick-Timer-Handler bereit. Wenn kein Anwendertask bereit ist, \xFCbernimmt automatisch ein vordefinierter Idle-Task die CPU-Kontrolle, um einen stabilen Systemzustand zu gew\xE4hrleisten.",tags:["C"]},{name:"Mein 3D-Portfolio",description:"Dieses interaktive 3D-Portfolio stellt eine innovative Verschmelzung moderner Webtechnologien dar, bei der ein robustes Angular-Frontend mit der grafischen Leistungsf\xE4higkeit von Three.js (WebGL) kombiniert wird. Anstelle eines klassischen Lebenslaufs bietet das Projekt eine dynamische, stilisiert generierte n\xE4chtliche Bahnhofsszene, die vollst\xE4ndig interaktiv erkundet werden kann. Zu den technischen Highlights geh\xF6ren eine benutzerdefinierte Maussteuerung, ein dynamisches Laden von Inhalten beim Klick auf interaktive Schilder sowie eine innovative Angular-zu-Three.js-Schnittstelle, die Angular-Komponenten via html2canvas als Texturen auf 3D-Objekten rendert. Erg\xE4nzt durch Server-Side Rendering (SSR) f\xFCr optimierte Ladezeiten und SEO sowie eine detailreiche Umgebung mit animierten Elementen und atmosph\xE4rischer Beleuchtung, demonstriert das Projekt tiefgehendes Know-how im Bereich der kreativen Frontendentwicklung und modernen Webarchitektur.",tags:["JavaScript","HTML","Angular"]},{name:"Intelligentes Druckregelsystem mit Raspberry Pi Pico",description:'Dieses Projekt umfasst die Entwicklung eines pr\xE4zisen Mess- und Steuerungssystems f\xFCr Gasdrucktests (z. B. Kaltgastriebwerke). Durch die Nutzung beider Kerne des RP2040 wird eine latenzfreie Modbus-RTU-Kommunikation bei gleichzeitiger Sicherheits\xFCberwachung gew\xE4hrleistet. Zu den Highlights z\xE4hlen eine energiesparende "Kick-and-Hold"-Ventilsteuerung per PWM, eine Hysterese-Regelung zur Schonung der Hardware sowie ein integrierter Watchdog-Failsafe-Mechanismus f\xFCr maximale Betriebssicherheit. Die Visualisierung erfolgt \xFCber ein ma\xDFgeschneidertes PySide6-Dashboard.',tags:["Embedded C","Synthesizer","Timers","Interrupts","Drucksensor"]},{name:"STM32-basierte Aufzugssteuerung (MCU)",description:"Entwicklung der zentralen Steuerungseinheit f\xFCr eine Aufzugssimulation auf Basis eines STM32-Mikrocontrollers. Das System koordiniert in Echtzeit Etagenrufe, Kabinenbewegung und T\xFCrzust\xE4nde mittels einer eventgesteuerten Architektur. Die Kommunikation mit Sensoren und Aktoren erfolgt \xFCber ein selbst implementiertes Modbus-RTU-Protokoll, w\xE4hrend eine UART-Schnittstelle die Anbindung an eine PC-Visualisierung erm\xF6glicht. Ein integriertes Terminal-Interface erlaubt zudem die dynamische Konfiguration von Systemparametern im laufenden Betrieb.",tags:["Embedded C","PWM","USART","Serial"]},{name:"Modellbasierte Aufzugssteuerung | MATLAB, Simulink & Stateflow",description:"In diesem Projekt wurde der vollst\xE4ndige Entwicklungszyklus einer 3-Etagen-Aufzugssteuerung abgebildet. Das System kombiniert die physikalische Modellierung der Kabinendynamik in Simulink mit einer komplexen, ereignisdiskreten Zustandslogik in Stateflow. \xDCber eine ma\xDFgeschneiderte MATLAB-App (GUI) k\xF6nnen Nutzer Hall- und Kabinenrufe t\xE4tigen, die in Echtzeit verarbeitet werden. Besondere Highlights sind die intelligente Priorisierung von Etagenrufen zur Wegeoptimierung sowie die Implementierung einer Sicherheitslogik mittels virtueller Endschalter.",tags:["MATLAB","Simulink","Stateflow"]},{name:"Simulation einer industriellen Mischanlage | CODESYS",description:"Entwicklung einer vollautomatisierten Mischanlage inklusive Prozesssimulation und HMI-Visualisierung. Die Steuerung basiert auf einer Zustandsmaschine (State Machine), die in Strukturierter Text (ST) umgesetzt wurde, w\xE4hrend die physikalische Simulation von F\xFCllstand und Temperatur mittels Funktionsplan (FUP) erfolgt. Das System umfasst einen sequenziellen Prozess (Bef\xFCllen, Heizen, Mischen, Entleeren) sowie eine sicherheitskritische Not-Aus-Logik. Die Bedienung und \xDCberwachung erfolgt \xFCber eine integrierte Visualisierung mit Echtzeit-Statusanzeigen.",tags:["CODESYS","TIA-Portal"]},{name:"Regelung mechatronischer Mehrgroessensysteme",description:"Nutzung des eingebauten 12-Bit-Analog-Digital-Wandlers (ADC) des AVR, um eine anliegende Spannung zu messen. Das Ergebnis wurde in Volt und als Prozentsatz umgerechnet und auf einem LCD-Display flimmerfrei (nur bei Wert\xE4nderung) angezeigt.",tags:["MATLAB","Simulink"]},{name:"Regelung eines elektromagnetischen Systems",description:`1. Elektromagnetisches Schwebesystem: Stabilisierung einer Metallkugel im Magnetfeld durch nichtlineare Modellierung und pr\xE4zise Stromsteuerung unter strikten Stellgr\xF6\xDFenbeschr\xE4nkungen. 
	 2. Ball-on-Beam System: Positionsregelung einer Kugel auf einer schwenkbaren Schiene. Dies beinhaltete die Linearisierung der Systemdynamik sowie den Entwurf von Zustandsreglern und Beobachtern, um anspruchsvolle Anforderungen an das \xDCberschwingverhalten (< 1%) und die Stabilit\xE4t zu erf\xFCllen.`,tags:["MATLAB","Simulink"]},{name:"Automatisierte Logo-Zeichnung mit ABB Industrierobotern (RAPID)",description:"Entwicklung eines dynamischen Steuerungsprogramms in der Programmiersprache RAPID f\xFCr einen ABB-Roboter (z. B. IRB 120). Das System zeichnet das THM-Logo basierend auf Benutzereingaben f\xFCr Skalierung und Farbe. Ein besonderes technisches Highlight ist die integrierte Bin\xE4rkodierung von Fachbereichsnummern direkt in die Grafik. Die Implementierung umfasst zudem ein automatisiertes Tool-Handling (Stiftwechsel) mit pr\xE4zise kalibrierten Tool Center Points (TCP) sowie effiziente Schraffur-Algorithmen zur Fl\xE4chenf\xFCllung.",tags:["RAPID"]},{name:"Datenerfassung und Analyse mit dem Red-Pitaya",description:"Entwicklung eines spezialisierten Python-Tools zur Analyse und Darstellung von radioaktiven Zerfallsdaten, optimiert f\xFCr Natrium-22 (Na-22) Histogramme. Das Skript erm\xF6glicht eine duale Achsen-Visualisierung, um Hardware-Spannungswerte direkt mit physikalischen Energieniveaus (keV) zu korrelieren. Durch den Einsatz von pandas und matplotlib bietet das Tool eine robuste Datenverarbeitung (CSV) sowie publikationsreife Grafiken f\xFCr die wissenschaftliche Auswertung der Spektroskopie-Messungen.",tags:["C/C++","Python"]},{name:"MVC-basierter Schaltkreis-Simulator fuer elektrische Filter",description:"Entwicklung eines Visualisierungstools zur Analyse von Einschwingvorg\xE4ngen und Gl\xE4ttungseffekten in elektrischen Netzwerken (L, RC, LC-Filter). Die Software basiert auf dem MVC-Entwurfsmuster und nutzt einen numerischen Solver f\xFCr die zugrunde liegenden Differentialgleichungen. Zu den technischen Highlights z\xE4hlen eine flimmerfreie Grafik-Engine mittels nativer Win32-GDI-Programmierung, ein dynamisches Koordinatensystem sowie ein striktes Speichermanagement (Rule of Three), um maximale Performance und Stabilit\xE4t zu gew\xE4hrleisten",tags:["C/C++"]}]},en:{title:"Featured Projects",projects:[{name:"RTOS_Kernel_STM32",description:"This repository contains a lightweight, custom preemptive Real-Time Operating System (RTOS) kernel tailored for ARM Cortex-M4 microcontrollers (STM32L4xx). The operating system implements a preemptive Round-Robin scheduling algorithm with configurable time slices. It handles distinct task states (Running, Ready, Blocked) and provides deterministic delay tracking via the SysTick timer. An integrated Idle task guarantees continuous and safe CPU execution even when all user application tasks are currently blocked.",tags:["C"]},{name:"Mein 3D-Portfolio",description:"This interactive 3D portfolio represents an innovative fusion of modern web technologies, combining a robust Angular frontend with the graphical capabilities of Three.js (WebGL). Instead of a traditional resume, the project features a dynamic, procedurally generated night train station scene that allows for fully interactive exploration. Technical highlights include custom mouse controls, dynamic content loading via interactive signs, and an innovative Angular-to-Three.js bridge that renders Angular components onto 3D objects as textures using html2canvas. Supported by Server-Side Rendering (SSR) for optimized loading performance and SEO, as well as a highly detailed environment with animated elements and atmospheric lighting, this project demonstrates deep expertise in creative frontend development and modern web architecture.",tags:["JavaScript","HTML","Angular"]},{name:"Intelligentes Druckregelsystem mit Raspberry Pi Pico",description:'This project focuses on a high-precision measurement and control system for testing environments like cold gas thrusters. Utilizing the RP2040  dual-core architecture, it separates high-speed Modbus RTU communication from safety-critical regulation logic. Key innovations include energy-efficient "Kick-and-Hold" PWM valve control, hysteresis-based regulation to prevent hardware wear, and a robust failsafe watchdog mechanism. The system features a custom-built PySide6 dashboard for real-time data visualization and monitoring.',tags:["AVR","Embedded C","Synthesizer","Timers","Interrupts"]},{name:"STM32-basierte Aufzugssteuerung (MCU)",description:"Firmware development for the central control unit of an elevator simulation using an STM32 microcontroller. The system manages real-time floor requests, motion control, and door states through an efficient event-driven architecture. Key technical features include a custom Modbus RTU implementation for peripheral communication and a UART-based link for PC visualization. An integrated terminal interface enables real-time parameter configuration, showcasing advanced skills in Embedded C and industrial protocols.",tags:["Embedded C","PWM","USART","Serial"]},{name:"Modellbasierte Aufzugssteuerung | MATLAB, Simulink & Stateflow",description:"This project demonstrates the full development cycle of a 3-floor elevator control system. It integrates physical cabin dynamics modeled in Simulink with complex discrete-event state logic designed in Stateflow. A custom-built MATLAB GUI serves as the human-machine interface, allowing real-time interaction through hall and car station buttons via set_param commands. Key features include an intelligent request prioritization queue for efficient pathfinding and robust safety logic utilizing virtual limit switches to ensure operational boundaries.",tags:["MATLAB","Simulink","Stateflow"]},{name:"Simulation einer industriellen Mischanlage | CODESYS",description:"Design and implementation of a fully automated mixing plant featuring a comprehensive process simulation and HMI. The core control logic is developed in Structured Text (ST) using a robust state machine, while the physical simulation of analog values (fill level, temperature) is handled via Function Block Diagrams (FBD). The project covers the entire sequence from component filling to thermal processing and includes an integrated Emergency Stop (E-Stop) safety function. Real-time monitoring and control are facilitated through a custom-built CODESYS visualization",tags:["CODESYS","TIA-Portal"]},{name:"Regelung mechatronischer Mehrgroessensysteme",description:" This project focuses on the modeling and controller design for complex mechatronic systems. The first part addresses the static and dynamic decoupling of a multi-input multi-output (MIMO) handling device to eliminate cross-axis interference. The second part involves the stabilization of an unstable inverted pendulum using discrete-time state-space control. By applying pole placement techniques, the system was stabilized to meet specific dynamic requirements. The design accounts for fixed sampling rates, ensuring the controller is optimized for implementation on real-world microcontrollers.",tags:["MATLAB","Simulink","Stateflow"]},{name:"Regelung eines elektromagnetischen Systems",description:`1. Electromagnetic Levitation System: Stabilizing a metal sphere in a magnetic field. Tasks included non-linear differential equation modeling and implementing current-limited control logic to maintain a stable hover position. 
	 2. Ball-on-Beam System: egulating a ball's position on a tilting track via servo-actuation. The project involved system linearization at the operating point and the design of state-space controllers and observers to achieve high precision with minimal overshoot (< 1%) and strict command limits.`,tags:["MATLAB","Simulink"]},{name:"Automatisierte Logo-Zeichnung mit ABB Industrierobotern (RAPID)",description:"Development of a dynamic control module in RAPID for an ABB industrial robot (e.g., IRB 120). The program renders the THM logo with user-defined scaling and color selection. A unique technical feature is the binary encoding of department numbers integrated into the drawing's matrix. The implementation covers automated tool handling (pen pickup/return) using calibrated Tool Center Points (TCP) and custom hatching algorithms for surface filling, ensuring a highly flexible and autonomous process.",tags:["RAPID"]},{name:"Datenerfassung und Analyse mit dem Red-Pitaya",description:"Developed a specialized Python-based tool for plotting and analyzing radioactive decay data, specifically tailored for Sodium-22 (Na-22) histograms. The script features a dual-axis visualization to correlate raw hardware voltage readings with physical energy levels (keV). Utilizing pandas and matplotlib, the tool ensures robust CSV data ingestion and generates publication-quality spectroscopy plots, facilitating precise calibration and isotope analysis..",tags:["C/C++","Python"]},{name:"MVC-basierter Schaltkreis-Simulator fuer elektrische Filter",description:"Developed a visual analysis tool for transient responses and ripple reduction in electrical networks (L, RC, and LC filters). The project follows a strict MVC architecture, utilizing a numerical ODE solver for circuit dynamics. Key technical features include a custom, flicker-free rendering engine built with the native Win32 GDI, dynamic coordinate scaling, and robust memory management (Rule of Three). The use of polymorphism for control strategies demonstrates advanced software engineering principles applied to electrical engineering problems.",tags:["C/C++"]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t}),this.loadGithubProjects()}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}loadGithubProjects(){this.githubService.getRepositories().subscribe({next:t=>{this.mergeProjects(t)},error:t=>console.error("Failed to load GitHub projects",t)})}mergeProjects(t){["de","en"].forEach(n=>{let r=this.projectsData[n].projects;t.forEach(s=>{let o=r.find(a=>a.name.toLowerCase().replace(/[^a-z0-9]/g,"")===s.name.toLowerCase().replace(/[^a-z0-9]/g,""));o?(o.link=s.html_url,o.updated_at=s.updated_at):r.push({name:s.name,description:s.description,tags:s.topics,link:s.html_url,updated_at:s.updated_at})}),this.projectsData[n].projects.sort((s,o)=>s.updated_at&&o.updated_at?new Date(o.updated_at).getTime()-new Date(s.updated_at).getTime():s.updated_at?-1:o.updated_at?1:0)})}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}openProject(t){t&&window.open(t,"_blank")}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt),tt(tp))}}static{this.\u0275cmp=It({type:i,selectors:[["app-projekte"]],standalone:!0,features:[Lt],decls:21,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"projects-grid"],["class","project-card",3,"clickable","click",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"project-card",3,"click"],[1,"project-name"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","class","link-icon",4,"ngIf"],[1,"project-description"],[1,"project-tags"],["class","tag",4,"ngFor","ngForOf"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"link-icon"],["d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"],["points","15 3 21 3 21 9"],["x1","10","y1","14","x2","21","y2","3"],[1,"tag"]],template:function(n,r){n&1&&(j(0,"div",0)(1,"div",1)(2,"button",2),yt("click",function(){return r.goBack()}),Ze(),j(3,"svg",3),Ue(4,"line",4)(5,"polyline",5),ie()(),xt(),j(6,"h2",6),Oe(7),ie(),j(8,"div",7)(9,"button",8),yt("click",function(){return r.toggleLanguage()}),Oe(10),ie()()(),j(11,"div",9),Dt(12,cy,8,6,"div",10),ie(),j(13,"footer",11)(14,"a",12),Ze(),j(15,"svg",13),Ue(16,"path",14),ie()(),xt(),j(17,"a",15),Ze(),j(18,"svg",13),Ue(19,"path",16)(20,"polyline",17),ie()()()()),n&2&&(me(7),$e(r.projectsData[r.currentLanguage].title),me(3),$t(" ",r.currentLanguage==="de"?"EN":"DE"," "),me(2),gt("ngForOf",r.projectsData[r.currentLanguage].projects))},dependencies:[Bt,Qt,Rr],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;padding-top:16px}.project-card[_ngcontent-%COMP%]{background:#0f0f0fb3;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:24px;transition:all .3s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 30px #0000001a}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-8px) scale(1.02);background:#191919cc;border-color:#00bfff80;box-shadow:0 10px 40px #00bfff33}.project-card.clickable[_ngcontent-%COMP%]{cursor:pointer}.project-card.clickable[_ngcontent-%COMP%]:hover{background:#1e1e1ed9}.project-name[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between}.link-icon[_ngcontent-%COMP%]{margin-left:8px;color:#00bfff;opacity:.6;transition:opacity .2s ease}.project-card[_ngcontent-%COMP%]:hover   .link-icon[_ngcontent-%COMP%]{opacity:1}.project-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;line-height:1.5;margin-bottom:12px}.project-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.tag[_ngcontent-%COMP%]{background-color:#00bfff33;color:#00bfff;padding:4px 8px;border-radius:4px;font-size:.8rem}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.project-name[_ngcontent-%COMP%]{font-size:1.2rem}}"]})}}return i})();function uy(i,e){if(i&1&&(j(0,"div",18),Ue(1,"div",19),j(2,"div",20)(3,"div",21),Oe(4),ie(),j(5,"h3",22),Oe(6),ie(),j(7,"p",23),Oe(8),ie(),j(9,"p",24),Oe(10),ie()()()),i&2){let t=e.$implicit;me(4),$e(t.date),me(2),Cd("",t.title," bei ",t.company,""),me(2),$e(t.location),me(2),$e(t.description)}}var ip=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.experienceData={de:{title:"Berufserfahrung",timeline:[{title:"Nachhilfe-Dozent",company:"GoStudent",location:"Online",date:"M\xE4rz 2022 - Laufend",description:"Nachhilfedozent f\xFCr den F\xE4cher Programmierung in C,C++ Mathe, Physik, Elektrotechnik und Franz\xF6sisch"},{title:"Forschung & Entwicklung im Bereich Embedded Systems",company:"Technische Hochschule Mittelhessen",location:"Gie\xDFen, Deutschland",date:"Oktober 2023 - Laufend",description:"Mitarbeit an einem Forschungsprojekt zur Entwicklung eines Microcontroller-basierten Remote-Labors. Meine Aufgaben umfassen die Implementierung, das Testen und die Optimierung von Embedded-Systemen, um eine zuverl\xE4ssige und performante Fernsteuerung der Laborumgebung zu gew\xE4hrleisten."},{title:"Praktikant",company:"Advanced Space Technologies (AST)",location:"Osterholz-Scharmbeck, Deutschland",date:"M\xE4rz 2024 - Juli 2024",description:"Ganzheitliche Entwicklung eines mobilen Messsystems: Von der Hardware-Integration via RS485 \xFCber die Embedded-Linux-Konfiguration bis hin zur Echtzeit-Visualisierung von Sensordaten."},{title:"Ferienjob",company:"Mercedes Benz",location:"Deutschland",date:"August 2023 - Oktober 2023",description:"Unterst\xFCtzung in der Automobilproduktion und Sicherstellung effizienter Abl\xE4ufe. Erfolgreiche Integration in ein Produktionsteam zur Optimierung von Arbeitsprozessen. Erfahrungen in der Teamarbeit gesammelt und zur Verbesserung der Produktionsprozesse beigetragen"}]},en:{title:"Work Experience",timeline:[{title:"Technical Tutor",company:"GoStudent",location:"Online",date:"March 2022 - Present",description:"Tutor for C/C++ programming, Mathematics, Physics, Electrical Engineering, and French language."},{title:"Research & Development in Embedded Systems",company:"THM - University of Applied Sciences",location:"Giessen, Germany",date:"October 2023 - Present",description:"Contributing to a research project focused on developing a microcontroller-based remote laboratory. My responsibilities include implementing, testing, and optimizing embedded systems to ensure reliable and high-performance remote control of the lab environment."},{title:"Engineering Intern",company:"Advanced Space Technologies (AST)",location:"Osterholz-Scharmbeck, Germany",date:"March 2024 - July 2024",description:"End-to-end development of a mobile measurement system: From hardware integration via RS485 and embedded Linux configuration to real-time sensor data visualization."},{title:"Summer Job",company:"Mercedes-Benz",location:"Germany",date:"August 2023 - October 2023",description:"Supported automotive production and ensured efficient workflows. Successfully integrated into a production team to optimize work processes. Gained hands-on experience in teamwork and contributed to the enhancement of manufacturing operations."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(tt(en),tt(Wt))}}static{this.\u0275cmp=It({type:i,selectors:[["app-erfahrung"]],standalone:!0,features:[Lt],decls:21,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Ezechiel197","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","mailto:ezechiel146@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(j(0,"div",0)(1,"div",1)(2,"button",2),yt("click",function(){return r.goBack()}),Ze(),j(3,"svg",3),Ue(4,"line",4)(5,"polyline",5),ie()(),xt(),j(6,"h2",6),Oe(7),ie(),j(8,"div",7)(9,"button",8),yt("click",function(){return r.toggleLanguage()}),Oe(10),ie()()(),j(11,"div",9),Dt(12,uy,11,5,"div",10),ie(),j(13,"footer",11)(14,"a",12),Ze(),j(15,"svg",13),Ue(16,"path",14),ie()(),xt(),j(17,"a",15),Ze(),j(18,"svg",13),Ue(19,"path",16)(20,"polyline",17),ie()()()()),n&2&&(me(7),$e(r.experienceData[r.currentLanguage].title),me(3),$t(" ",r.currentLanguage==="de"?"EN":"DE"," "),me(2),gt("ngForOf",r.experienceData[r.currentLanguage].timeline))},dependencies:[Bt,Qt],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();var rp=[{path:"",redirectTo:"profil",pathMatch:"full"},{path:"profil",component:Yf},{path:"daten",component:Zf},{path:"skills",component:Jf},{path:"softskills",component:Kf},{path:"sprachen",component:Qf},{path:"akademisch",component:ep},{path:"projekte",component:np},{path:"erfahrung",component:ip},{path:"screen",loadComponent:()=>import("./chunk-6W6HPSVH.js").then(i=>i.GiantScreenComponent)},{path:"**",redirectTo:"profil"}];var sp={providers:[Wf(rp),uf(),vd(qf,$f),Jd()]};var ul="177";var Rp=0,ph=1,Pp=2;var mh=1,hl=2,Kn=3,Pn=0,Kt=1,Dn=2,mi=0,ar=1,gh=2,vh=3,yh=4,Ip=5,Fi=100,Dp=101,Lp=102,Op=103,Np=104,Fp=200,Up=201,kp=202,Bp=203,Va=204,za=205,Vp=206,zp=207,Hp=208,Gp=209,Wp=210,Xp=211,jp=212,qp=213,$p=214,dl=0,fl=1,pl=2,lr=3,ml=4,gl=5,vl=6,yl=7,_h=0,Yp=1,Zp=2,gi=0,Jp=1,Kp=2,Qp=3,em=4,tm=5,nm=6,im=7;var nh=300,pr=301,mr=302,_l=303,xl=304,To=306,Ha=1e3,Ni=1001,Ga=1002,In=1003,rm=1004;var Ao=1005;var Bn=1006,Ml=1007;var Hi=1008;var Hn=1009,xh=1010,Mh=1011,cs=1012,Sl=1013,Gi=1014,Qn=1015,us=1016,bl=1017,wl=1018,hs=1020,Sh=35902,bh=1021,wh=1022,Ln=1023,es=1026,ds=1027,Eh=1028,El=1029,Th=1030,Tl=1031;var Al=1033,Co=33776,Ro=33777,Po=33778,Io=33779,Cl=35840,Rl=35841,Pl=35842,Il=35843,Dl=36196,Ll=37492,Ol=37496,Nl=37808,Fl=37809,Ul=37810,kl=37811,Bl=37812,Vl=37813,zl=37814,Hl=37815,Gl=37816,Wl=37817,Xl=37818,jl=37819,ql=37820,$l=37821,Do=36492,Yl=36494,Zl=36495,Ah=36283,Jl=36284,Kl=36285,Ql=36286;var to=2300,Wa=2301,Ba=2302,ih=2400,rh=2401,sh=2402;var sm=3200,om=3201;var Ch=0,am=1,vi="",yn="srgb",cr="srgb-linear",no="linear",mt="srgb";var or=7680;var oh=519,lm=512,cm=513,um=514,Rh=515,hm=516,dm=517,fm=518,pm=519,ah=35044;var Ph="300 es",$n=2e3,io=2001;var fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pu=Math.PI/180,ro=180/Math.PI;function Lo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function hy(i,e){return(i%e+e)%e}function Iu(i,e,t){return(1-t)*i+t*e}function Ys(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Je=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==m||u!==g){let p=1-a,f=l*d+c*m+u*g+h*v,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let I=Math.sqrt(b),C=Math.atan2(I,f*w);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}let M=a*w;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,h=h*p+v*M,p===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-a*m,e[t+2]=c*g+u*m+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Du=new L,op=new Yn,He=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],v=r[0],p=r[3],f=r[6],w=r[1],b=r[4],M=r[7],I=r[2],C=r[5],T=r[8];return s[0]=o*v+a*w+l*I,s[3]=o*p+a*b+l*C,s[6]=o*f+a*M+l*T,s[1]=c*v+u*w+h*I,s[4]=c*p+u*b+h*C,s[7]=c*f+u*M+h*T,s[2]=d*v+m*w+g*I,s[5]=d*p+m*b+g*C,s[8]=d*f+m*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*h+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lu.makeScale(e,t)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lu=new He;function Ih(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mm(){let i=ts("canvas");return i.style.display="block",i}var ap={};function ur(i){i in ap||(ap[i]=!0,console.warn(i))}function gm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function vm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ym(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var lp=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){let i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?no:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:e,whitePoint:n,transfer:no,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),i}var nt=dy();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zr,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=ts("canvas")),zr.width=e.width,zr.height=e.height;let r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fy=0,ns=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ou(r[o].image)):s.push(Ou(r[o]))}else s=Ou(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ou(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var py=0,Nu=new L,ei=(()=>{class i extends fi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Ni,s=Ni,o=Bn,a=Hi,l=Ln,c=Hn,u=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Lo(),this.name="",this.source=new ns(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nu).x}get height(){return this.source.getSize(Nu).y}get depth(){return this.source.getSize(Nu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=nh,i.DEFAULT_ANISOTROPY=1,i})(),pt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(m+1)/2,I=(f+1)/2,C=(u+d)/4,T=(h+v)/4,D=(g+p)/4;return b>M&&b>I?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=C/n,s=T/n):M>I?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=D/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=T/s,r=D/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new ei(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ns(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},so=class extends ei{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends ei{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ma.subVectors(this.max,Zs),Hr.subVectors(e.a,Zs),Gr.subVectors(e.b,Zs),Wr.subVectors(e.c,Zs),Ci.subVectors(Gr,Hr),Ri.subVectors(Wr,Gr),Qi.subVectors(Hr,Wr);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Qi.z,Qi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Qi.z,0,-Qi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Qi.y,Qi.x,0];return!Fu(t,Hr,Gr,Wr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!Fu(t,Hr,Gr,Wr,Ma))?!1:(Sa.crossVectors(Ci,Ri),t=[Sa.x,Sa.y,Sa.z],Fu(t,Hr,Gr,Wr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,xa=new Ui,Hr=new L,Gr=new L,Wr=new L,Ci=new L,Ri=new L,Qi=new L,Zs=new L,Ma=new L,Sa=new L,er=new L;function Fu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){er.fromArray(i,s);let a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var my=new Ui,Js=new L,Uu=new L,is=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):my.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Js,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Uu)),this.expandByPoint(Js.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ai=new L,ku=new L,ba=new L,Pi=new L,Bu=new L,wa=new L,Vu=new L,oo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ku.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(ku);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=Pi.dot(this.direction),l=-Pi.dot(ba),c=Pi.lengthSq(),u=Math.abs(1-o*o),h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ku).addScaledVector(ba,d),m}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){Bu.subVectors(t,e),wa.subVectors(n,e),Vu.crossVectors(Bu,wa);let o=this.direction.dot(Vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let l=a*this.direction.dot(wa.crossVectors(Pi,wa));if(l<0)return null;let c=a*this.direction.dot(Bu.cross(Pi));if(c<0||l+c>o)return null;let u=-a*Pi.dot(Vu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,d,m,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,m,g,v,p)}set(e,t,n,r,s,o,a,l,c,u,h,d,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,m=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gy,e,vy)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ii.crossVectors(n,gn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ii.crossVectors(n,gn)),Ii.normalize(),Ea.crossVectors(gn,Ii),r[0]=Ii.x,r[4]=Ea.x,r[8]=gn.x,r[1]=Ii.y,r[5]=Ea.y,r[9]=gn.y,r[2]=Ii.z,r[6]=Ea.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],w=n[3],b=n[7],M=n[11],I=n[15],C=r[0],T=r[4],D=r[8],S=r[12],x=r[1],R=r[5],V=r[9],U=r[13],X=r[2],W=r[6],z=r[10],Z=r[14],H=r[3],se=r[7],de=r[11],Ce=r[15];return s[0]=o*C+a*x+l*X+c*H,s[4]=o*T+a*R+l*W+c*se,s[8]=o*D+a*V+l*z+c*de,s[12]=o*S+a*U+l*Z+c*Ce,s[1]=u*C+h*x+d*X+m*H,s[5]=u*T+h*R+d*W+m*se,s[9]=u*D+h*V+d*z+m*de,s[13]=u*S+h*U+d*Z+m*Ce,s[2]=g*C+v*x+p*X+f*H,s[6]=g*T+v*R+p*W+f*se,s[10]=g*D+v*V+p*z+f*de,s[14]=g*S+v*U+p*Z+f*Ce,s[3]=w*C+b*x+M*X+I*H,s[7]=w*T+b*R+M*W+I*se,s[11]=w*D+b*V+M*z+I*de,s[15]=w*S+b*U+M*Z+I*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*m-n*l*m)+v*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],w=h*p*c-v*d*c+v*l*m-a*p*m-h*l*f+a*d*f,b=g*d*c-u*p*c-g*l*m+o*p*m+u*l*f-o*d*f,M=u*v*c-g*h*c+g*a*m-o*v*m-u*a*f+o*h*f,I=g*h*l-u*v*l-g*a*d+o*v*d+u*a*p-o*h*p,C=t*w+n*b+r*M+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=w*T,e[1]=(v*d*s-h*p*s-v*r*m+n*p*m+h*r*f-n*d*f)*T,e[2]=(a*p*s-v*l*s+v*r*c-n*p*c-a*r*f+n*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*m-n*l*m)*T,e[4]=b*T,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*f+t*d*f)*T,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*f-t*l*f)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*T,e[8]=M*T,e[9]=(g*h*s-u*v*s-g*n*m+t*v*m+u*n*f-t*h*f)*T,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*f+t*a*f)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*T,e[12]=I*T,e[13]=(u*v*r-g*h*r+g*n*d-t*v*d-u*n*p+t*h*p)*T,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*p-t*a*p)*T,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,g=s*h,v=o*u,p=o*h,f=a*h,w=l*c,b=l*u,M=l*h,I=n.x,C=n.y,T=n.z;return r[0]=(1-(v+f))*I,r[1]=(m+M)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+f))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(g+b)*T,r[9]=(p-w)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Xr.set(r[0],r[1],r[2]).length(),o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);let c=1/s,u=1/o,h=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=$n){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),m,g;if(a===$n)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===io)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=$n){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,m=(n+r)*u,g,v;if(a===$n)g=(o+s)*h,v=-2*h;else if(a===io)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xr=new L,Un=new wt,gy=new L(0,0,0),vy=new L(1,1,1),Ii=new L,Ea=new L,gn=new L,up=new wt,hp=new Yn,ki=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],m=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return up.makeRotationFromQuaternion(t),this.setFromRotationMatrix(up,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hp.setFromEuler(this),this.setFromQuaternion(hp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yy=0,dp=new L,jr=new Yn,li=new wt,Ta=new L,Ks=new L,_y=new L,xy=new Yn,fp=new L(1,0,0),pp=new L(0,1,0),mp=new L(0,0,1),gp={type:"added"},My={type:"removed"},qr={type:"childadded",child:null},zu={type:"childremoved",child:null},Jt=(()=>{class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,n=new ki,r=new Yn,s=new L(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new He}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return jr.setFromAxisAngle(t,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(t,n){return jr.setFromAxisAngle(t,n),this.quaternion.premultiply(jr),this}rotateX(t){return this.rotateOnAxis(fp,t)}rotateY(t){return this.rotateOnAxis(pp,t)}rotateZ(t){return this.rotateOnAxis(mp,t)}translateOnAxis(t,n){return dp.copy(t).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(fp,t)}translateY(t){return this.translateOnAxis(pp,t)}translateZ(t){return this.translateOnAxis(mp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Ta.copy(t):Ta.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ks,Ta,this.up):li.lookAt(Ta,Ks,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),jr.setFromRotationMatrix(li),this.quaternion.premultiply(jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gp),qr.child=t,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(My),zu.child=t,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gp),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,_y),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,xy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>kt(we({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>we({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let d=c[u];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),m=a(t.skeletons),g=a(t.animations),v=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new L(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),kn=new L,ci=new L,Hu=new L,ui=new L,$r=new L,Yr=new L,vp=new L,Gu=new L,Wu=new L,Xu=new L,ju=new pt,qu=new pt,$u=new pt,Oi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kn.subVectors(e,t),r.cross(kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kn.subVectors(r,t),ci.subVectors(n,t),Hu.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(ci),l=kn.dot(Hu),c=ci.dot(ci),u=ci.dot(Hu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return ju.setScalar(0),qu.setScalar(0),$u.setScalar(0),ju.fromBufferAttribute(e,t),qu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ju,s.x),o.addScaledVector(qu,s.y),o.addScaledVector($u,s.z),o}static isFrontFacing(e,t,n,r){return kn.subVectors(n,t),ci.subVectors(e,t),kn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),kn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;$r.subVectors(r,n),Yr.subVectors(s,n),Gu.subVectors(e,n);let l=$r.dot(Gu),c=Yr.dot(Gu);if(l<=0&&c<=0)return t.copy(n);Wu.subVectors(e,r);let u=$r.dot(Wu),h=Yr.dot(Wu);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector($r,o);Xu.subVectors(e,s);let m=$r.dot(Xu),g=Yr.dot(Xu);if(g>=0&&m<=g)return t.copy(s);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Yr,a);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return vp.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(vp,a);let f=1/(p+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector($r,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Yu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=hy(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Yu(o,s,e+1/3),this.g=Yu(o,s,e),this.b=Yu(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let n=_m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return nt.workingToColorSpace(nn.copy(this),e),Math.round(Qe(nn.r*255,0,255))*65536+Math.round(Qe(nn.g*255,0,255))*256+Math.round(Qe(nn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=yn){nt.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Aa);let n=Iu(Di.h,Aa.h,t),r=Iu(Di.s,Aa.s,t),s=Iu(Di.l,Aa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new et;et.NAMES=_m;var Sy=0,Bi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=ar,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=za,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new L,Ca=new Je,by=0,_n=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ah,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}};var ao=class extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lo=class extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Vt=class extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}},wy=0,Rn=new wt,Zu=new Jt,Zr=new L,vn=new Ui,Qs=new Ui,Xt=new L,Vn=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ih(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(vn.min,Qs.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,Qs.max),vn.expandByPoint(Xt)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),Xt.add(Zr)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new L,l[D]=new L;let c=new L,u=new L,h=new L,d=new Je,m=new Je,g=new Je,v=new L,p=new L;function f(D,S,x){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,D),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),m.sub(d),g.sub(d);let R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),a[D].add(v),a[S].add(v),a[x].add(v),l[D].add(p),l[S].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,S=w.length;D<S;++D){let x=w[D],R=x.start,V=x.count;for(let U=R,X=R+V;U<X;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new L,M=new L,I=new L,C=new L;function T(D){I.fromBufferAttribute(r,D),C.copy(I);let S=a[D];b.copy(S),b.sub(I.multiplyScalar(I.dot(S))).normalize(),M.crossVectors(C,S);let R=M.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,R)}for(let D=0,S=w.length;D<S;++D){let x=w[D],R=x.start,V=x.count;for(let U=R,X=R+V;U<X;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new _n(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yp=new wt,tr=new oo,Ra=new is,_p=new L,Pa=new L,Ia=new L,Da=new L,Ju=new L,La=new L,xp=new L,Oa=new L,ee=class extends Jt{constructor(e=new Vn,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Ju.fromBufferAttribute(h,e),o?La.addScaledVector(Ju,u):La.addScaledVector(Ju.sub(t),u))}t.add(La)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(Ra.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Ra,_p)===null||tr.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(yp.copy(s).invert(),tr.copy(e.ray).applyMatrix4(yp),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,I=b;M<I;M+=3){let C=a.getX(M),T=a.getX(M+1),D=a.getX(M+2);r=Na(this,f,e,n,c,u,h,C,T,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let w=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);r=Na(this,o,e,n,c,u,h,w,b,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,I=b;M<I;M+=3){let C=M,T=M+1,D=M+2;r=Na(this,f,e,n,c,u,h,C,T,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let w=p,b=p+1,M=p+2;r=Na(this,o,e,n,c,u,h,w,b,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Ey(i,e,t,n,r,s,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Pn,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:i}}function Na(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Pa),i.getVertexPosition(l,Ia),i.getVertexPosition(c,Da);let u=Ey(i,e,t,n,Pa,Ia,Da,xp);if(u){let h=new L;Oi.getBarycoord(xp,Pa,Ia,Da,h),r&&(u.uv=Oi.getInterpolatedAttribute(r,a,l,c,h,new Je)),s&&(u.uv1=Oi.getInterpolatedAttribute(s,a,l,c,h,new Je)),o&&(u.normal=Oi.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Oi.getNormal(Pa,Ia,Da,d.normal),u.face=d,u.barycoord=h}return u}var Ge=class i extends Vn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(h,2));function g(v,p,f,w,b,M,I,C,T,D,S){let x=M/T,R=I/D,V=M/2,U=I/2,X=C/2,W=T+1,z=D+1,Z=0,H=0,se=new L;for(let de=0;de<z;de++){let Ce=de*R-U;for(let qe=0;qe<W;qe++){let vt=qe*x-V;se[v]=vt*w,se[p]=Ce*b,se[f]=X,c.push(se.x,se.y,se.z),se[v]=0,se[p]=0,se[f]=C>0?1:-1,u.push(se.x,se.y,se.z),h.push(qe/T),h.push(1-de/D),Z+=1}}for(let de=0;de<D;de++)for(let Ce=0;Ce<T;Ce++){let qe=d+Ce+W*de,vt=d+Ce+W*(de+1),$=d+(Ce+1)+W*(de+1),re=d+(Ce+1)+W*de;l.push(qe,vt,re),l.push(vt,$,re),H+=6}a.addGroup(m,H,S),m+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=gr(i[t]);for(let r in n)e[r]=n[r]}return e}function Ty(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var xm={clone:gr,merge:on},Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ay,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},co=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new L,Mp=new Je,Sp=new Je,jt=class extends co{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Mp,Sp),t.subVectors(Sp,Mp)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jr=-90,Kr=1,$a=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new jt(Jr,Kr,e,t);r.layers=this.layers,this.add(r);let s=new jt(Jr,Kr,e,t);s.layers=this.layers,this.add(s);let o=new jt(Jr,Kr,e,t);o.layers=this.layers,this.add(o);let a=new jt(Jr,Kr,e,t);a.layers=this.layers,this.add(a);let l=new jt(Jr,Kr,e,t);l.layers=this.layers,this.add(l);let c=new jt(Jr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},uo=class extends ei{constructor(e=[],t=pr,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ge(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:mi});s.uniforms.tEquirect.value=t;let o=new ee(r,s),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Bn),new $a(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Mt=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ry={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ho=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ku=new L,Py=new L,Iy=new He,qn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ku.subVectors(n,t).cross(Py.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ku),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Iy.getNormalMatrix(e),r=this.coplanarPoint(Ku).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},nr=new is,Fa=new L,os=class{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,o=new qn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],w=r[13],b=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,p-m,M-f).normalize(),n[1].setComponents(l+s,d+c,p+m,M+f).normalize(),n[2].setComponents(l+o,d+u,p+g,M+w).normalize(),n[3].setComponents(l-o,d-u,p-g,M-w).normalize(),n[4].setComponents(l-a,d-h,p-v,M-b).normalize(),t===$n)n[5].setComponents(l+a,d+h,p+v,M+b).normalize();else if(t===io)n[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jn=class extends ei{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fo=class extends ei{constructor(e,t,n=Gi,r,s,o,a=In,l=In,c,u=es,h=1){if(u!==es&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var as=class i extends Vn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new L,u=new Je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let m=n+h/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rt=class i extends Vn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],m=[],g=0,v=[],p=n/2,f=0;w(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(m,2));function w(){let M=new L,I=new L,C=0,T=(t-e)/n;for(let D=0;D<=s;D++){let S=[],x=D/s,R=x*(t-e)+e;for(let V=0;V<=r;V++){let U=V/r,X=U*l+a,W=Math.sin(X),z=Math.cos(X);I.x=R*W,I.y=-x*n+p,I.z=R*z,h.push(I.x,I.y,I.z),M.set(W,T,z).normalize(),d.push(M.x,M.y,M.z),m.push(U,1-x),S.push(g++)}v.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){let x=v[S][D],R=v[S+1][D],V=v[S+1][D+1],U=v[S][D+1];(e>0||S!==0)&&(u.push(x,R,U),C+=3),(t>0||S!==s-1)&&(u.push(R,V,U),C+=3)}c.addGroup(f,C,0),f+=C}function b(M){let I=g,C=new Je,T=new L,D=0,S=M===!0?e:t,x=M===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,p*x,0),d.push(0,x,0),m.push(.5,.5),g++;let R=g;for(let V=0;V<=r;V++){let X=V/r*l+a,W=Math.cos(X),z=Math.sin(X);T.x=S*z,T.y=p*x,T.z=S*W,h.push(T.x,T.y,T.z),d.push(0,x,0),C.x=W*.5+.5,C.y=z*.5*x+.5,m.push(C.x,C.y),g++}for(let V=0;V<r;V++){let U=I+V,X=R+V;M===!0?u.push(X,X+1,U):u.push(X+1,X,U),D+=3}c.addGroup(f,D,M===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},po=class i extends Rt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sn=class i extends Vn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){let w=f*d-o;for(let b=0;b<c;b++){let M=b*h-s;g.push(M,-w,0),v.push(0,0,1),p.push(b/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let b=w+c*f,M=w+c*(f+1),I=w+1+c*(f+1),C=w+1+c*f;m.push(b,M,C),m.push(M,I,C)}this.setIndex(m),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zn=class i extends Vn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new L,d=new L,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){let w=[],b=f/n,M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let C=I/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(C+M,1-b),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let b=u[f][w+1],M=u[f][w],I=u[f+1][w],C=u[f+1][w+1];(f!==0||o>0)&&m.push(b,M,C),(f!==n-1||l<Math.PI)&&m.push(M,I,C)}this.setIndex(m),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ee=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Za=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ua(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ka=class extends hr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:s=e,a=2*t-n;break;case sh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:o=e,l=2*n-t;break;case sh:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,w=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-m)*p+(1.5+m)*v+.5*g,M=m*p-m*v;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+w*o[c+I]+b*o[l+I]+M*o[h+I];return s}},Qa=class extends hr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},el=class extends hr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Dy(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ba,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Wa;var Vi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=to;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};tl.prototype.ValueTypeName="color";var nl=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};nl.prototype.ValueTypeName="number";var il=class extends hr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Yn.slerpFlat(s,0,o,c-a,o,c,l);return s}},mo=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Mn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=to;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};rl.prototype.ValueTypeName="vector";var go={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},sl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},Mm=new sl,Oo=(()=>{class i{constructor(t){this.manager=t!==void 0?t:Mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let r=this;return new Promise(function(s,o){r.load(t,s,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})(),hi={},lh=class extends Error{constructor(e,t){super(e),this.response=t}},ol=class extends Oo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=go.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:r});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,v=0,p=new ReadableStream({start(f){w();function w(){h.read().then(({done:b,value:M})=>{if(b)f.close();else{v+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let C=0,T=u.length;C<T;C++){let D=u[C];D.onProgress&&D.onProgress(I)}f.enqueue(M),w()}},b=>{f.error(b)})}}});return new Response(p)}else throw new lh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{go.add(e,c);let u=hi[e];delete hi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var al=class extends Oo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=go.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ts("img");function l(){u(),go.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var vo=class extends Oo{constructor(e){super(e)}load(e,t,n,r){let s=new ei,o=new al(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},dr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yo=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qu=new wt,bp=new L,wp=new L,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(bp),wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wp),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ch=class extends _o{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ro*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ls=class extends dr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ep=new wt,eo=new L,eh=new L,uh=class extends _o{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),eh.copy(n.position),eh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eh),n.updateMatrixWorld(),r.makeTranslation(-eo.x,-eo.y,-eo.z),Ep.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ep)}},pi=class extends dr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xo=class extends co{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hh=class extends _o{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mo=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ka,So=class{static getContext(){return ka===void 0&&(ka=new(window.AudioContext||window.webkitAudioContext)),ka}static setContext(e){ka=e}},bo=class extends Oo{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new ol(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0);So.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}};var ll=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},cl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Tp(){return performance.now()}var ir=new L,th=new Yn,Ly=new L,rr=new L,sr=new L,wo=class extends Jt{constructor(){super(),this.type="AudioListener",this.context=So.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new cl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ir,th,Ly),rr.set(0,0,-1).applyQuaternion(th),sr.set(0,1,0).applyQuaternion(th),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ir.x,n),t.positionY.linearRampToValueAtTime(ir.y,n),t.positionZ.linearRampToValueAtTime(ir.z,n),t.forwardX.linearRampToValueAtTime(rr.x,n),t.forwardY.linearRampToValueAtTime(rr.y,n),t.forwardZ.linearRampToValueAtTime(rr.z,n),t.upX.linearRampToValueAtTime(sr.x,n),t.upY.linearRampToValueAtTime(sr.y,n),t.upZ.linearRampToValueAtTime(sr.z,n)}else t.setPosition(ir.x,ir.y,ir.z),t.setOrientation(rr.x,rr.y,rr.z,sr.x,sr.y,sr.z)}},fr=class extends Jt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};var Lh="\\[\\]\\.:\\/",Oy=new RegExp("["+Lh+"]","g"),Oh="[^"+Lh+"]",Ny="[^"+Lh.replace("\\.","")+"]",Fy=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Uy=/(WCOD+)?/.source.replace("WCOD",Ny),ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),Vy=new RegExp("^"+Fy+Uy+ky+By+"$"),zy=["material","materials","bones","map"],dh=class{constructor(e,t,n){let r=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Oy,"")}static parseTrackName(t){let n=Vy.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);zy.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=dh,i})();Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NE=new Float32Array(1);var Ap=new wt,Eo=class{constructor(e,t,n=0,r=1/0){this.ray=new oo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ap),this}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(Cp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fh(e[r],this,n,t);return n.sort(Cp),n}};function Cp(i,e){return i.distance-e.distance}function fh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)fh(s[o],e,t,!0)}}function Nh(i,e,t,n){let r=Hy(n);switch(t){case bh:return i*e;case Eh:return i*e/r.components*r.byteLength;case El:return i*e/r.components*r.byteLength;case Th:return i*e*2/r.components*r.byteLength;case Tl:return i*e*2/r.components*r.byteLength;case wh:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case Al:return i*e*4/r.components*r.byteLength;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Il:return Math.max(i,16)*Math.max(e,8)/4;case Cl:case Pl:return Math.max(i,8)*Math.max(e,8)/2;case Dl:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Do:case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ah:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hy(i){switch(i){case Hn:case xh:return{byteLength:1,components:1};case cs:case Mh:case us:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case Gi:case Sl:case Qn:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function Xm(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gy(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){let g=h[d],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){let v=h[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Wy,alphahash_pars_fragment:Xy,alphamap_fragment:jy,alphamap_pars_fragment:qy,alphatest_fragment:$y,alphatest_pars_fragment:Yy,aomap_fragment:Zy,aomap_pars_fragment:Jy,batching_pars_vertex:Ky,batching_vertex:Qy,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:h_,color_vertex:d_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:v_,emissivemap_fragment:y_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:b_,envmap_pars_fragment:w_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:F_,envmap_vertex:T_,fog_vertex:A_,fog_pars_vertex:C_,fog_fragment:R_,fog_pars_fragment:P_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:D_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:O_,lights_pars_begin:N_,lights_toon_fragment:U_,lights_toon_pars_fragment:k_,lights_phong_fragment:B_,lights_phong_pars_fragment:V_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:G_,lights_fragment_maps:W_,lights_fragment_end:X_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:Y_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:K_,map_particle_pars_fragment:Q_,metalnessmap_fragment:ex,metalnessmap_pars_fragment:tx,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:rx,morphtarget_pars_vertex:sx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:ux,normal_vertex:hx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:vx,packing:yx,premultiplied_alpha_fragment:_x,project_vertex:xx,dithering_fragment:Mx,dithering_pars_fragment:Sx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:Tx,shadowmap_vertex:Ax,shadowmask_pars_fragment:Cx,skinbase_vertex:Rx,skinning_pars_vertex:Px,skinning_vertex:Ix,skinnormal_vertex:Dx,specularmap_fragment:Lx,specularmap_pars_fragment:Ox,tonemapping_fragment:Nx,tonemapping_pars_fragment:Fx,transmission_fragment:Ux,transmission_pars_fragment:kx,uv_pars_fragment:Bx,uv_pars_vertex:Vx,uv_vertex:zx,worldpos_vertex:Hx,background_vert:Gx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:jx,cube_vert:qx,cube_frag:$x,depth_vert:Yx,depth_frag:Zx,distanceRGBA_vert:Jx,distanceRGBA_frag:Kx,equirect_vert:Qx,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:hM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:vM,points_frag:yM,shadow_vert:_M,shadow_frag:xM,sprite_vert:MM,sprite_frag:SM},ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ti={basic:{uniforms:on([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:on([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:on([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:on([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:on([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:on([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:on([ae.points,ae.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:on([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:on([ae.common,ae.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:on([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:on([ae.sprite,ae.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:on([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:on([ae.lights,ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ti.physical={uniforms:on([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var ec={r:0,b:0,g:0},vr=new ki,bM=new wt;function wM(i,e,t,n,r,s,o){let a=new et(0),l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1,I=g(b);I===null?f(a,l):I&&I.isColor&&(f(I,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,M){let I=g(M);I&&(I.isCubeTexture||I.mapping===To)?(u===void 0&&(u=new ee(new Ge(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:gr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vr.copy(M.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(vr)),u.material.toneMapped=nt.getTransfer(I.colorSpace)!==mt,(h!==I||d!==I.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ee(new sn(2,2),new xn({name:"BackgroundMaterial",uniforms:gr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=nt.getTransfer(I.colorSpace)!==mt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,M){b.getRGB(ec,Dh(i)),n.buffers.color.setClear(ec.r,ec.g,ec.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:v,addToRenderList:p,dispose:w}}function EM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(x,R,V,U,X){let W=!1,z=h(U,V,R);s!==z&&(s=z,c(s.object)),W=m(x,U,V,X),W&&g(x,U,V,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(x,R,V,U),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,R,V){let U=V.wireframe===!0,X=n[x.id];X===void 0&&(X={},n[x.id]=X);let W=X[R.id];W===void 0&&(W={},X[R.id]=W);let z=W[U];return z===void 0&&(z=d(l()),W[U]=z),z}function d(x){let R=[],V=[],U=[];for(let X=0;X<t;X++)R[X]=0,V[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:U,object:x,attributes:{},index:null}}function m(x,R,V,U){let X=s.attributes,W=R.attributes,z=0,Z=V.getAttributes();for(let H in Z)if(Z[H].location>=0){let de=X[H],Ce=W[H];if(Ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Ce=x.instanceColor)),de===void 0||de.attribute!==Ce||Ce&&de.data!==Ce.data)return!0;z++}return s.attributesNum!==z||s.index!==U}function g(x,R,V,U){let X={},W=R.attributes,z=0,Z=V.getAttributes();for(let H in Z)if(Z[H].location>=0){let de=W[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let Ce={};Ce.attribute=de,de&&de.data&&(Ce.data=de.data),X[H]=Ce,z++}s.attributes=X,s.attributesNum=z,s.index=U}function v(){let x=s.newAttributes;for(let R=0,V=x.length;R<V;R++)x[R]=0}function p(x){f(x,0)}function f(x,R){let V=s.newAttributes,U=s.enabledAttributes,X=s.attributeDivisors;V[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),X[x]!==R&&(i.vertexAttribDivisor(x,R),X[x]=R)}function w(){let x=s.newAttributes,R=s.enabledAttributes;for(let V=0,U=R.length;V<U;V++)R[V]!==x[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function b(x,R,V,U,X,W,z){z===!0?i.vertexAttribIPointer(x,R,V,X,W):i.vertexAttribPointer(x,R,V,U,X,W)}function M(x,R,V,U){v();let X=U.attributes,W=V.getAttributes(),z=R.defaultAttributeValues;for(let Z in W){let H=W[Z];if(H.location>=0){let se=X[Z];if(se===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let de=se.normalized,Ce=se.itemSize,qe=e.get(se);if(qe===void 0)continue;let vt=qe.buffer,$=qe.type,re=qe.bytesPerElement,be=$===i.INT||$===i.UNSIGNED_INT||se.gpuType===Sl;if(se.isInterleavedBufferAttribute){let he=se.data,Te=he.stride,ot=se.offset;if(he.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)f(H.location+Ne,he.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)p(H.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Ne=0;Ne<H.locationSize;Ne++)b(H.location+Ne,Ce/H.locationSize,$,de,Te*re,(ot+Ce/H.locationSize*Ne)*re,be)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)f(H.location+he,se.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<H.locationSize;he++)p(H.location+he);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let he=0;he<H.locationSize;he++)b(H.location+he,Ce/H.locationSize,$,de,Ce*re,Ce/H.locationSize*he*re,be)}}else if(z!==void 0){let de=z[Z];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(H.location,de);break;case 3:i.vertexAttrib3fv(H.location,de);break;case 4:i.vertexAttrib4fv(H.location,de);break;default:i.vertexAttrib1fv(H.location,de)}}}}w()}function I(){D();for(let x in n){let R=n[x];for(let V in R){let U=R[V];for(let X in U)u(U[X].object),delete U[X];delete R[V]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let V in R){let U=R[V];for(let X in U)u(U[X].object),delete U[X];delete R[V]}delete n[x.id]}function T(x){for(let R in n){let V=n[R];if(V[x.id]===void 0)continue;let U=V[x.id];for(let X in U)u(U[X].object),delete U[X];delete V[x.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function TM(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function l(c,u,h,d){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let D=T===us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Hn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:I,maxSamples:C}}function CM(i){let e=this,t=null,n=0,r=!1,s=!1,o=new qn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{let w=s?0:n,b=w*4,M=f.clippingState||null;l.value=M,M=u(g,d,b,m);for(let I=0;I!==b;++I)M[I]=t[I];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let v=h!==null?h.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let f=m+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,M=m;b!==v;++b,M+=4)o.copy(h[b]).applyMatrix4(w,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function RM(i){let e=new WeakMap;function t(o,a){return a===_l?o.mapping=pr:a===xl&&(o.mapping=mr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_l||a===xl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ya(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ps=4,Sm=[.125,.215,.35,.446,.526,.582],xr=20,Fh=new xo,bm=new et,Uh=null,kh=0,Bh=0,Vh=!1,_r=(1+Math.sqrt(5))/2,fs=1/_r,wm=[new L(-_r,fs,0),new L(_r,fs,0),new L(-fs,0,_r),new L(fs,0,_r),new L(0,_r,-fs),new L(0,_r,fs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],PM=new L,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=PM}=s;Uh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,kh,Bh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:us,format:Ln,colorSpace:cr,depthBuffer:!1},r=Em(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IM(s)),this._blurMaterial=DM(s,e,t)}return r}_compileMaterial(e){let t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,n,r,s){let l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(bm),h.toneMapping=gi,h.autoClear=!1;let g=new rn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new ee(new Ge,g),p=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,p=!0):(g.color.copy(bm),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let M=this._cubeSize;tc(r,b*M,w>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=m,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;tc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ee(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xr-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);let f=[],w=0;for(let T=0;T<xr;++T){let D=T/v,S=Math.exp(-D*D/2);f.push(S),T===0?w+=S:T<p&&(w+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let M=this._sizeLods[r],I=3*M*(r>b-ps?r-b+ps:0),C=4*(this._cubeSize-M);tc(t,I,C,3*M,2*M),l.setRenderTarget(t),l.render(h,Fh)}};function IM(i){let e=[],t=[],n=[],r=i,s=i-ps+1+Sm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ps?l=Sm[o-i+ps-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,p=2,f=1,w=new Float32Array(v*g*m),b=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let C=0;C<m;C++){let T=C%3*2/3-1,D=C>2?0:-1,S=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];w.set(S,v*g*C),b.set(d,p*g*C);let x=[C,C,C,C,C,C];M.set(x,f*g*C)}let I=new Vn;I.setAttribute("position",new _n(w,v)),I.setAttribute("uv",new _n(b,p)),I.setAttribute("faceIndex",new _n(M,f)),e.push(I),r>ps&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Em(i,e,t){let n=new Zn(i,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function DM(i,e,t){let n=new Float32Array(xr),r=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Tm(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Am(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_l||l===xl,u=l===pr||l===mr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ic(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new ic(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function OM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function NM(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER)}function c(h){let d=[],m=h.index,g=h.attributes.position,v=0;if(m!==null){let w=m.array;v=m.version;for(let b=0,M=w.length;b<M;b+=3){let I=w[b+0],C=w[b+1],T=w[b+2];d.push(I,C,C,T,T,I)}}else if(g!==void 0){let w=g.array;v=g.version;for(let b=0,M=w.length/3-1;b<M;b+=3){let I=b+0,C=b+1,T=b+2;d.push(I,C,C,T,T,I)}}else return;let p=new(Ih(d)?lo:ao)(d,1);p.version=v;let f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){let d=s.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function FM(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*o),t.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function h(d,m,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*v[w];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function UM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function kM(i,e,t){let n=new WeakMap,r=new pt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let I=a.attributes.position.count*M,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let T=new Float32Array(I*C*4*h),D=new so(T,I,C,h);D.type=Qn,D.needsUpdate=!0;let S=M*4;for(let R=0;R<h;R++){let V=f[R],U=w[R],X=b[R],W=I*C*4*R;for(let z=0;z<V.count;z++){let Z=z*S;g===!0&&(r.fromBufferAttribute(V,z),T[W+Z+0]=r.x,T[W+Z+1]=r.y,T[W+Z+2]=r.z,T[W+Z+3]=0),v===!0&&(r.fromBufferAttribute(U,z),T[W+Z+4]=r.x,T[W+Z+5]=r.y,T[W+Z+6]=r.z,T[W+Z+7]=0),p===!0&&(r.fromBufferAttribute(X,z),T[W+Z+8]=r.x,T[W+Z+9]=r.y,T[W+Z+10]=r.z,T[W+Z+11]=X.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new Je(I,C)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function BM(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var jm=new ei,Cm=new fo(1,1),qm=new so,$m=new qa,Ym=new uo,Rm=[],Pm=[],Im=new Float32Array(16),Dm=new Float32Array(9),Lm=new Float32Array(4);function gs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Rm[r];if(s===void 0&&(s=new Float32Array(r),Rm[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sc(i,e){let t=Pm[e];t===void 0&&(t=new Int32Array(e),Pm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function VM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function HM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function GM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function WM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Lm.set(n),i.uniformMatrix2fv(this.addr,!1,Lm),Ht(t,n)}}function XM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Dm.set(n),i.uniformMatrix3fv(this.addr,!1,Dm),Ht(t,n)}}function jM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Im.set(n),i.uniformMatrix4fv(this.addr,!1,Im),Ht(t,n)}}function qM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function YM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function ZM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function JM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function KM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function QM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function eS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function tS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Cm.compareFunction=Rh,s=Cm):s=jm,t.setTexture2D(e||s,r)}function nS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$m,r)}function iS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ym,r)}function rS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qm,r)}function sS(i){switch(i){case 5126:return VM;case 35664:return zM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return $M;case 35668:case 35672:return YM;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return KM;case 36295:return QM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function oS(i,e){i.uniform1fv(this.addr,e)}function aS(i,e){let t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function lS(i,e){let t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function cS(i,e){let t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function uS(i,e){let t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hS(i,e){let t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dS(i,e){let t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fS(i,e){i.uniform1iv(this.addr,e)}function pS(i,e){i.uniform2iv(this.addr,e)}function mS(i,e){i.uniform3iv(this.addr,e)}function gS(i,e){i.uniform4iv(this.addr,e)}function vS(i,e){i.uniform1uiv(this.addr,e)}function yS(i,e){i.uniform2uiv(this.addr,e)}function _S(i,e){i.uniform3uiv(this.addr,e)}function xS(i,e){i.uniform4uiv(this.addr,e)}function MS(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jm,s[o])}function SS(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$m,s[o])}function bS(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ym,s[o])}function wS(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||qm,s[o])}function ES(i){switch(i){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return hS;case 35676:return dS;case 5124:case 35670:return fS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return yS;case 36295:return _S;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return wS}}var Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sS(t.type)}},Gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ES(t.type)}},Wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},zh=/(\w+)(\])?(\[|\.)?/g;function Om(i,e){i.seq.push(e),i.map[e.id]=e}function TS(i,e,t){let n=i.name,r=n.length;for(zh.lastIndex=0;;){let s=zh.exec(n),o=zh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Om(t,c===void 0?new Hh(a,i,e):new Gh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Wh(a),Om(t,h)),t=h}}}var ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);TS(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Nm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var AS=37297,CS=0;function RS(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Fm=new He;function PS(i){nt._getMatrix(Fm,nt.workingColorSpace,i);let e=`mat3( ${Fm.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case no:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Um(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+RS(i.getShaderSource(e),o)}else return r}function IS(i,e){let t=PS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function DS(i,e){let t;switch(e){case Jp:t="Linear";break;case Kp:t="Reinhard";break;case Qp:t="Cineon";break;case em:t="ACESFilmic";break;case nm:t="AgX";break;case im:t="Neutral";break;case tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new L;function LS(){nt.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function NS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function No(i){return i!==""}function km(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var US=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(US,BS)}var kS=new Map;function BS(i,e){let t=je[e];if(t===void 0){let n=kS.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xh(t)}var VS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(i){return i.replace(VS,zS)}function zS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function GS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function XS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _h:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function jS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qS(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=HS(t),c=GS(t),u=WS(t),h=XS(t),d=jS(t),m=OS(t),g=NS(s),v=r.createProgram(),p,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(No).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(No).join(`
`),f.length>0&&(f+=`
`)):(p=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),f=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?je.tonemapping_pars_fragment:"",t.toneMapping!==gi?DS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,IS("linearToOutputTexel",t.outputColorSpace),LS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=Xh(o),o=km(o,t),o=Bm(o,t),a=Xh(a),a=km(a,t),a=Bm(a,t),o=Vm(o),a=Vm(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=w+p+o,M=w+f+a,I=Nm(r,r.VERTEX_SHADER,b),C=Nm(r,r.FRAGMENT_SHADER,M);r.attachShader(v,I),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(R){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(C).trim(),W=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,I,C);else{let Z=Um(r,I,"vertex"),H=Um(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+Z+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||X==="")&&(z=!1);z&&(R.diagnostics={runnable:W,programLog:V,vertexShader:{log:U,prefix:p},fragmentShader:{log:X,prefix:f}})}r.deleteShader(I),r.deleteShader(C),D=new ms(r,v),S=FS(r,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,AS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}var $S=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qh(e),t.set(e,n)),n}},qh=class{constructor(e){this.id=$S++,this.code=e,this.usedTimes=0}};function YS(i,e,t,n,r,s,o){let a=new rs,l=new jh,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,R,V,U){let X=V.fog,W=U.geometry,z=S.isMeshStandardMaterial?V.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),H=Z&&Z.mapping===To?Z.image.height:null,se=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ce=de!==void 0?de.length:0,qe=0;W.morphAttributes.position!==void 0&&(qe=1),W.morphAttributes.normal!==void 0&&(qe=2),W.morphAttributes.color!==void 0&&(qe=3);let vt,$,re,be;if(se){let dt=ti[se];vt=dt.vertexShader,$=dt.fragmentShader}else vt=S.vertexShader,$=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);let he=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),ot=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,Et=!!S.map,Tt=!!S.matcap,at=!!Z,A=!!S.aoMap,an=!!S.lightMap,lt=!!S.bumpMap,_t=!!S.normalMap,xe=!!S.displacementMap,it=!!S.emissiveMap,Re=!!S.metalnessMap,Xe=!!S.roughnessMap,Ut=S.anisotropy>0,E=S.clearcoat>0,y=S.dispersion>0,F=S.iridescence>0,q=S.sheen>0,J=S.transmission>0,G=Ut&&!!S.anisotropyMap,Me=E&&!!S.clearcoatMap,le=E&&!!S.clearcoatNormalMap,_e=E&&!!S.clearcoatRoughnessMap,Se=F&&!!S.iridescenceMap,K=F&&!!S.iridescenceThicknessMap,fe=q&&!!S.sheenColorMap,Le=q&&!!S.sheenRoughnessMap,De=!!S.specularMap,oe=!!S.specularColorMap,Ve=!!S.specularIntensityMap,P=J&&!!S.transmissionMap,ce=J&&!!S.thicknessMap,Q=!!S.gradientMap,ge=!!S.alphaMap,te=S.alphaTest>0,Y=!!S.alphaHash,ve=!!S.extensions,ze=gi;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ze=i.toneMapping);let St={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:vt,fragmentShader:$,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&U._colorsTexture!==null,instancing:ot,instancingColor:ot&&U.instanceColor!==null,instancingMorph:ot&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:cr,alphaToCoverage:!!S.alphaToCoverage,map:Et,matcap:Tt,envMap:at,envMapMode:at&&Z.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:an,bumpMap:lt,normalMap:_t,displacementMap:d&&xe,emissiveMap:it,normalMapObjectSpace:_t&&S.normalMapType===am,normalMapTangentSpace:_t&&S.normalMapType===Ch,metalnessMap:Re,roughnessMap:Xe,anisotropy:Ut,anisotropyMap:G,clearcoat:E,clearcoatMap:Me,clearcoatNormalMap:le,clearcoatRoughnessMap:_e,dispersion:y,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:K,sheen:q,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:De,specularColorMap:oe,specularIntensityMap:Ve,transmission:J,transmissionMap:P,thicknessMap:ce,gradientMap:Q,opaque:S.transparent===!1&&S.blending===ar&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:Y,combine:S.combine,mapUv:Et&&v(S.map.channel),aoMapUv:A&&v(S.aoMap.channel),lightMapUv:an&&v(S.lightMap.channel),bumpMapUv:lt&&v(S.bumpMap.channel),normalMapUv:_t&&v(S.normalMap.channel),displacementMapUv:xe&&v(S.displacementMap.channel),emissiveMapUv:it&&v(S.emissiveMap.channel),metalnessMapUv:Re&&v(S.metalnessMap.channel),roughnessMapUv:Xe&&v(S.roughnessMap.channel),anisotropyMapUv:G&&v(S.anisotropyMap.channel),clearcoatMapUv:Me&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(S.sheenRoughnessMap.channel),specularMapUv:De&&v(S.specularMap.channel),specularColorMapUv:oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ve&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:ce&&v(S.thicknessMap.channel),alphaMapUv:ge&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||Ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Et||ge),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Et&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dn,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)x.push(R),x.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(x,S),b(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function b(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let x=g[S.type],R;if(x){let V=ti[x];R=xm.clone(V.uniforms)}else R=S.uniforms;return R}function I(S,x){let R;for(let V=0,U=u.length;V<U;V++){let X=u[V];if(X.cacheKey===x){R=X,++R.usedTimes;break}}return R===void 0&&(R=new qS(i,x,S,s),u.push(R)),R}function C(S){if(--S.usedTimes===0){let x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:D}}function ZS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function JS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,m,g,v,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function a(h,d,m,g,v,p){let f=o(h,d,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,g,v,p){let f=o(h,d,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||JS),n.length>1&&n.sort(d||Hm),r.length>1&&r.sort(d||Hm)}function u(){for(let h=e,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function KS(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Gm,i.set(n,[o])):r>=s.length?(o=new Gm,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function QS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new et};break;case"SpotLight":t={position:new L,direction:new L,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function eb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tb=0;function nb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ib(i){let e=new QS,t=eb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let r=new L,s=new wt,o=new wt;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,w=0,b=0,M=0,I=0,C=0,T=0;c.sort(nb);for(let S=0,x=c.length;S<x;S++){let R=c[S],V=R.color,U=R.intensity,X=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*U,h+=V.g*U,d+=V.b*U;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],U);T++}else if(R.isDirectionalLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=R.shadow.matrix,w++}n.directional[m]=z,m++}else if(R.isSpotLight){let z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(V).multiplyScalar(U),z.distance=X,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[v]=z;let Z=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,Z.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=Z.matrix,R.castShadow){let H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=W,M++}v++}else if(R.isRectAreaLight){let z=e.get(R);z.color.copy(V).multiplyScalar(U),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=z,p++}else if(R.isPointLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let Z=R.shadow,H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=z,g++}else if(R.isHemisphereLight){let z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(U),z.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[f]=z,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==I||D.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=I,D.numLightProbes=T,n.version=tb++)}function l(c,u){let h=0,d=0,m=0,g=0,v=0,p=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let b=c[f];if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(b.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Wm(i){let e=new ib(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rb(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Wm(i),e.set(r,[a])):s>=o.length?(a=new Wm(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ab(i,e,t){let n=new os,r=new Je,s=new Je,o=new pt,a=new Za({depthPacking:om}),l=new Ja,c={},u=t.maxTextureSize,h={[Pn]:Kt,[Kt]:Pn,[Dn]:Dn},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:sb,fragmentShader:ob}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Vn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ee(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let f=this.type;this.render=function(C,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let U=f!==Kn&&this.type===Kn,X=f===Kn&&this.type!==Kn;for(let W=0,z=C.length;W<z;W++){let Z=C[W],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||U===!0||X===!0){let Ce=this.type!==Kn?{minFilter:In,magFilter:In}:{};H.map!==null&&H.map.dispose(),H.map=new Zn(r.x,r.y,Ce),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let de=H.getViewportCount();for(let Ce=0;Ce<de;Ce++){let qe=H.getViewport(Ce);o.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),V.viewport(o),H.updateMatrices(Z,Ce),n=H.getFrustum(),M(T,D,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Kn&&w(H,D),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,R)};function w(C,T){let D=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,D,m,v,null)}function b(C,T,D,S){let x=null,R=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let V=x.uuid,U=T.uuid,X=c[V];X===void 0&&(X={},c[V]=X);let W=X[U];W===void 0&&(W=x.clone(),X[U]=W,T.addEventListener("dispose",I)),x=W}if(x.visible=T.visible,x.wireframe=T.wireframe,S===Kn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let V=i.properties.get(x);V.light=D}return x}function M(C,T,D,S,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let U=e.update(C),X=C.material;if(Array.isArray(X)){let W=U.groups;for(let z=0,Z=W.length;z<Z;z++){let H=W[z],se=X[H.materialIndex];if(se&&se.visible){let de=b(C,se,S,x);C.onBeforeShadow(i,C,T,D,U,de,H),i.renderBufferDirect(D,null,U,de,C,H),C.onAfterShadow(i,C,T,D,U,de,H)}}}else if(X.visible){let W=b(C,X,S,x);C.onBeforeShadow(i,C,T,D,U,W,null),i.renderBufferDirect(D,null,U,W,C,null),C.onAfterShadow(i,C,T,D,U,W,null)}}let V=C.children;for(let U=0,X=V.length;U<X;U++)M(V[U],T,D,S,x)}function I(C){C.target.removeEventListener("dispose",I);for(let D in c){let S=c[D],x=C.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var lb={[dl]:fl,[pl]:vl,[ml]:yl,[lr]:gl,[fl]:dl,[vl]:pl,[yl]:ml,[gl]:lr};function cb(i,e){function t(){let P=!1,ce=new pt,Q=null,ge=new pt(0,0,0,0);return{setMask:function(te){Q!==te&&!P&&(i.colorMask(te,te,te,te),Q=te)},setLocked:function(te){P=te},setClear:function(te,Y,ve,ze,St){St===!0&&(te*=ze,Y*=ze,ve*=ze),ce.set(te,Y,ve,ze),ge.equals(ce)===!1&&(i.clearColor(te,Y,ve,ze),ge.copy(ce))},reset:function(){P=!1,Q=null,ge.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,Q=null,ge=null,te=null;return{setReversed:function(Y){if(ce!==Y){let ve=e.get("EXT_clip_control");Y?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ce=Y;let ze=te;te=null,this.setClear(ze)}},getReversed:function(){return ce},setTest:function(Y){Y?he(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Y){Q!==Y&&!P&&(i.depthMask(Y),Q=Y)},setFunc:function(Y){if(ce&&(Y=lb[Y]),ge!==Y){switch(Y){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Y}},setLocked:function(Y){P=Y},setClear:function(Y){te!==Y&&(ce&&(Y=1-Y),i.clearDepth(Y),te=Y)},reset:function(){P=!1,Q=null,ge=null,te=null,ce=!1}}}function r(){let P=!1,ce=null,Q=null,ge=null,te=null,Y=null,ve=null,ze=null,St=null;return{setTest:function(dt){P||(dt?he(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(dt){ce!==dt&&!P&&(i.stencilMask(dt),ce=dt)},setFunc:function(dt,On,ni){(Q!==dt||ge!==On||te!==ni)&&(i.stencilFunc(dt,On,ni),Q=dt,ge=On,te=ni)},setOp:function(dt,On,ni){(Y!==dt||ve!==On||ze!==ni)&&(i.stencilOp(dt,On,ni),Y=dt,ve=On,ze=ni)},setLocked:function(dt){P=dt},setClear:function(dt){St!==dt&&(i.clearStencil(dt),St=dt)},reset:function(){P=!1,ce=null,Q=null,ge=null,te=null,Y=null,ve=null,ze=null,St=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,b=null,M=null,I=null,C=null,T=new et(0,0,0),D=0,S=!1,x=null,R=null,V=null,U=null,X=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Z>=2);let se=null,de={},Ce=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),vt=new pt().fromArray(Ce),$=new pt().fromArray(qe);function re(P,ce,Q,ge){let te=new Uint8Array(4),Y=i.createTexture();i.bindTexture(P,Y),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<Q;ve++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ce+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Y}let be={};be[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(lr),lt(!1),_t(ph),he(i.CULL_FACE),A(mi);function he(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Te(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ot(P,ce){return h[P]!==ce?(i.bindFramebuffer(P,ce),h[P]=ce,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ne(P,ce){let Q=m,ge=!1;if(P){Q=d.get(ce),Q===void 0&&(Q=[],d.set(ce,Q));let te=P.textures;if(Q.length!==te.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ve=te.length;Y<ve;Y++)Q[Y]=i.COLOR_ATTACHMENT0+Y;Q.length=te.length,ge=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Q)}function Et(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let Tt={[Fi]:i.FUNC_ADD,[Dp]:i.FUNC_SUBTRACT,[Lp]:i.FUNC_REVERSE_SUBTRACT};Tt[Op]=i.MIN,Tt[Np]=i.MAX;let at={[Fp]:i.ZERO,[Up]:i.ONE,[kp]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[Wp]:i.SRC_ALPHA_SATURATE,[Hp]:i.DST_COLOR,[Vp]:i.DST_ALPHA,[Bp]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[Gp]:i.ONE_MINUS_DST_COLOR,[zp]:i.ONE_MINUS_DST_ALPHA,[Xp]:i.CONSTANT_COLOR,[jp]:i.ONE_MINUS_CONSTANT_COLOR,[qp]:i.CONSTANT_ALPHA,[$p]:i.ONE_MINUS_CONSTANT_ALPHA};function A(P,ce,Q,ge,te,Y,ve,ze,St,dt){if(P===mi){v===!0&&(Te(i.BLEND),v=!1);return}if(v===!1&&(he(i.BLEND),v=!0),P!==Ip){if(P!==p||dt!==S){if((f!==Fi||M!==Fi)&&(i.blendEquation(i.FUNC_ADD),f=Fi,M=Fi),dt)switch(P){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gh:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,b=null,I=null,C=null,T.set(0,0,0),D=0,p=P,S=dt}return}te=te||ce,Y=Y||Q,ve=ve||ge,(ce!==f||te!==M)&&(i.blendEquationSeparate(Tt[ce],Tt[te]),f=ce,M=te),(Q!==w||ge!==b||Y!==I||ve!==C)&&(i.blendFuncSeparate(at[Q],at[ge],at[Y],at[ve]),w=Q,b=ge,I=Y,C=ve),(ze.equals(T)===!1||St!==D)&&(i.blendColor(ze.r,ze.g,ze.b,St),T.copy(ze),D=St),p=P,S=!1}function an(P,ce){P.side===Dn?Te(i.CULL_FACE):he(i.CULL_FACE);let Q=P.side===Kt;ce&&(Q=!Q),lt(Q),P.blending===ar&&P.transparent===!1?A(mi):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let ge=P.stencilWrite;a.setTest(ge),ge&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),it(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function _t(P){P!==Rp?(he(i.CULL_FACE),P!==R&&(P===ph?i.cullFace(i.BACK):P===Pp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),R=P}function xe(P){P!==V&&(z&&i.lineWidth(P),V=P)}function it(P,ce,Q){P?(he(i.POLYGON_OFFSET_FILL),(U!==ce||X!==Q)&&(i.polygonOffset(ce,Q),U=ce,X=Q)):Te(i.POLYGON_OFFSET_FILL)}function Re(P){P?he(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Xe(P){P===void 0&&(P=i.TEXTURE0+W-1),se!==P&&(i.activeTexture(P),se=P)}function Ut(P,ce,Q){Q===void 0&&(se===null?Q=i.TEXTURE0+W-1:Q=se);let ge=de[Q];ge===void 0&&(ge={type:void 0,texture:void 0},de[Q]=ge),(ge.type!==P||ge.texture!==ce)&&(se!==Q&&(i.activeTexture(Q),se=Q),i.bindTexture(P,ce||be[P]),ge.type=P,ge.texture=ce)}function E(){let P=de[se];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(P){vt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),vt.copy(P))}function Le(P){$.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function De(P,ce){let Q=c.get(ce);Q===void 0&&(Q=new WeakMap,c.set(ce,Q));let ge=Q.get(P);ge===void 0&&(ge=i.getUniformBlockIndex(ce,P.name),Q.set(P,ge))}function oe(P,ce){let ge=c.get(ce).get(P);l.get(ce)!==ge&&(i.uniformBlockBinding(ce,ge,P.__bindingPointIndex),l.set(ce,ge))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,de={},h={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,b=null,M=null,I=null,C=null,T=new et(0,0,0),D=0,S=!1,x=null,R=null,V=null,U=null,X=null,vt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Te,bindFramebuffer:ot,drawBuffers:Ne,useProgram:Et,setBlending:A,setMaterial:an,setFlipSided:lt,setCullFace:_t,setLineWidth:xe,setPolygonOffset:it,setScissorTest:Re,activeTexture:Xe,bindTexture:Ut,unbindTexture:E,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Se,texImage3D:K,updateUBOMapping:De,uniformBlockBinding:oe,texStorage2D:le,texStorage3D:_e,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:Me,scissor:fe,viewport:Le,reset:Ve}}function ub(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return m?new OffscreenCanvas(E,y):ts("canvas")}function v(E,y,F){let q=1,J=Ut(E);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let G=Math.floor(q*J.width),Me=Math.floor(q*J.height);h===void 0&&(h=g(G,Me));let le=y?g(G,Me):h;return le.width=G,le.height=Me,le.getContext("2d").drawImage(E,0,0,G,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Me+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,y,F,q,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=y;if(y===i.RED&&(F===i.FLOAT&&(G=i.R32F),F===i.HALF_FLOAT&&(G=i.R16F),F===i.UNSIGNED_BYTE&&(G=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.R8UI),F===i.UNSIGNED_SHORT&&(G=i.R16UI),F===i.UNSIGNED_INT&&(G=i.R32UI),F===i.BYTE&&(G=i.R8I),F===i.SHORT&&(G=i.R16I),F===i.INT&&(G=i.R32I)),y===i.RG&&(F===i.FLOAT&&(G=i.RG32F),F===i.HALF_FLOAT&&(G=i.RG16F),F===i.UNSIGNED_BYTE&&(G=i.RG8)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RG8UI),F===i.UNSIGNED_SHORT&&(G=i.RG16UI),F===i.UNSIGNED_INT&&(G=i.RG32UI),F===i.BYTE&&(G=i.RG8I),F===i.SHORT&&(G=i.RG16I),F===i.INT&&(G=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGB8UI),F===i.UNSIGNED_SHORT&&(G=i.RGB16UI),F===i.UNSIGNED_INT&&(G=i.RGB32UI),F===i.BYTE&&(G=i.RGB8I),F===i.SHORT&&(G=i.RGB16I),F===i.INT&&(G=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),F===i.UNSIGNED_INT&&(G=i.RGBA32UI),F===i.BYTE&&(G=i.RGBA8I),F===i.SHORT&&(G=i.RGBA16I),F===i.INT&&(G=i.RGBA32I)),y===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),y===i.RGBA){let Me=J?no:nt.getTransfer(q);F===i.FLOAT&&(G=i.RGBA32F),F===i.HALF_FLOAT&&(G=i.RGBA16F),F===i.UNSIGNED_BYTE&&(G=Me===mt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(E,y){let F;return E?y===null||y===Gi||y===hs?F=i.DEPTH24_STENCIL8:y===Qn?F=i.DEPTH32F_STENCIL8:y===cs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===hs?F=i.DEPTH_COMPONENT24:y===Qn?F=i.DEPTH_COMPONENT32F:y===cs&&(F=i.DEPTH_COMPONENT16),F}function I(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==In&&E.minFilter!==Bn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){let y=E.target;y.removeEventListener("dispose",C),D(y),y.isVideoTexture&&u.delete(y)}function T(E){let y=E.target;y.removeEventListener("dispose",T),x(y)}function D(E){let y=n.get(E);if(y.__webglInit===void 0)return;let F=E.source,q=d.get(F);if(q){let J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(E),Object.keys(q).length===0&&d.delete(F)}n.remove(E)}function S(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let F=E.source,q=d.get(F);delete q[y.__cacheKey],o.memory.textures--}function x(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[q][J]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=E.textures;for(let q=0,J=F.length;q<J;q++){let G=n.get(F[q]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(F[q])}n.remove(E)}let R=0;function V(){R=0}function U(){let E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function X(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function W(E,y){let F=n.get(E);if(E.isVideoTexture&&Re(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(F,E,y);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function z(E,y){let F=n.get(E);if(E.version>0&&F.__version!==E.version){be(F,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function Z(E,y){let F=n.get(E);if(E.version>0&&F.__version!==E.version){be(F,E,y);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function H(E,y){let F=n.get(E);if(E.version>0&&F.__version!==E.version){he(F,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}let se={[Ha]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},de={[In]:i.NEAREST,[rm]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Ce={[lm]:i.NEVER,[pm]:i.ALWAYS,[cm]:i.LESS,[Rh]:i.LEQUAL,[um]:i.EQUAL,[fm]:i.GEQUAL,[hm]:i.GREATER,[dm]:i.NOTEQUAL};function qe(E,y){if(y.type===Qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bn||y.magFilter===Ml||y.magFilter===Ao||y.magFilter===Hi||y.minFilter===Bn||y.minFilter===Ml||y.minFilter===Ao||y.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,se[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,se[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,se[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,de[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==Ao&&y.minFilter!==Hi||y.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function vt(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",C));let q=y.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let G=X(y);if(G!==E.__cacheKey){J[G]===void 0&&(J[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[G].usedTimes++;let Me=J[E.__cacheKey];Me!==void 0&&(J[E.__cacheKey].usedTimes--,Me.usedTimes===0&&S(y)),E.__cacheKey=G,E.__webglTexture=J[G].texture}return F}function $(E,y,F){return Math.floor(Math.floor(E/F)/y)}function re(E,y,F,q){let G=E.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,F,q,y.data);else{G.sort((K,fe)=>K.start-fe.start);let Me=0;for(let K=1;K<G.length;K++){let fe=G[Me],Le=G[K],De=fe.start+fe.count,oe=$(Le.start,y.width,4),Ve=$(fe.start,y.width,4);Le.start<=De+1&&oe===Ve&&$(Le.start+Le.count-1,y.width,4)===oe?fe.count=Math.max(fe.count,Le.start+Le.count-fe.start):(++Me,G[Me]=Le)}G.length=Me+1;let le=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let K=0,fe=G.length;K<fe;K++){let Le=G[K],De=Math.floor(Le.start/4),oe=Math.ceil(Le.count/4),Ve=De%y.width,P=Math.floor(De/y.width),ce=oe,Q=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ve,P,ce,Q,F,q,y.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function be(E,y,F){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);let J=vt(E,y),G=y.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+F);let Me=n.get(G);if(G.version!==Me.__version||J===!0){t.activeTexture(i.TEXTURE0+F);let le=nt.getPrimaries(nt.workingColorSpace),_e=y.colorSpace===vi?null:nt.getPrimaries(y.colorSpace),Se=y.colorSpace===vi||le===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let K=v(y.image,!1,r.maxTextureSize);K=Xe(y,K);let fe=s.convert(y.format,y.colorSpace),Le=s.convert(y.type),De=b(y.internalFormat,fe,Le,y.colorSpace,y.isVideoTexture);qe(q,y);let oe,Ve=y.mipmaps,P=y.isVideoTexture!==!0,ce=Me.__version===void 0||J===!0,Q=G.dataReady,ge=I(y,K);if(y.isDepthTexture)De=M(y.format===ds,y.type),ce&&(P?t.texStorage2D(i.TEXTURE_2D,1,De,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,De,K.width,K.height,0,fe,Le,null));else if(y.isDataTexture)if(Ve.length>0){P&&ce&&t.texStorage2D(i.TEXTURE_2D,ge,De,Ve[0].width,Ve[0].height);for(let te=0,Y=Ve.length;te<Y;te++)oe=Ve[te],P?Q&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,oe.width,oe.height,fe,Le,oe.data):t.texImage2D(i.TEXTURE_2D,te,De,oe.width,oe.height,0,fe,Le,oe.data);y.generateMipmaps=!1}else P?(ce&&t.texStorage2D(i.TEXTURE_2D,ge,De,K.width,K.height),Q&&re(y,K,fe,Le)):t.texImage2D(i.TEXTURE_2D,0,De,K.width,K.height,0,fe,Le,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){P&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,De,Ve[0].width,Ve[0].height,K.depth);for(let te=0,Y=Ve.length;te<Y;te++)if(oe=Ve[te],y.format!==Ln)if(fe!==null)if(P){if(Q)if(y.layerUpdates.size>0){let ve=Nh(oe.width,oe.height,y.format,y.type);for(let ze of y.layerUpdates){let St=oe.data.subarray(ze*ve/oe.data.BYTES_PER_ELEMENT,(ze+1)*ve/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ze,oe.width,oe.height,1,fe,St)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,K.depth,fe,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,De,oe.width,oe.height,K.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?Q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,K.depth,fe,Le,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,De,oe.width,oe.height,K.depth,0,fe,Le,oe.data)}else{P&&ce&&t.texStorage2D(i.TEXTURE_2D,ge,De,Ve[0].width,Ve[0].height);for(let te=0,Y=Ve.length;te<Y;te++)oe=Ve[te],y.format!==Ln?fe!==null?P?Q&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,oe.width,oe.height,fe,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,De,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Q&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,oe.width,oe.height,fe,Le,oe.data):t.texImage2D(i.TEXTURE_2D,te,De,oe.width,oe.height,0,fe,Le,oe.data)}else if(y.isDataArrayTexture)if(P){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,De,K.width,K.height,K.depth),Q)if(y.layerUpdates.size>0){let te=Nh(K.width,K.height,y.format,y.type);for(let Y of y.layerUpdates){let ve=K.data.subarray(Y*te/K.data.BYTES_PER_ELEMENT,(Y+1)*te/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,K.width,K.height,1,fe,Le,ve)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,Le,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,K.width,K.height,K.depth,0,fe,Le,K.data);else if(y.isData3DTexture)P?(ce&&t.texStorage3D(i.TEXTURE_3D,ge,De,K.width,K.height,K.depth),Q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,Le,K.data)):t.texImage3D(i.TEXTURE_3D,0,De,K.width,K.height,K.depth,0,fe,Le,K.data);else if(y.isFramebufferTexture){if(ce)if(P)t.texStorage2D(i.TEXTURE_2D,ge,De,K.width,K.height);else{let te=K.width,Y=K.height;for(let ve=0;ve<ge;ve++)t.texImage2D(i.TEXTURE_2D,ve,De,te,Y,0,fe,Le,null),te>>=1,Y>>=1}}else if(Ve.length>0){if(P&&ce){let te=Ut(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ge,De,te.width,te.height)}for(let te=0,Y=Ve.length;te<Y;te++)oe=Ve[te],P?Q&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,Le,oe):t.texImage2D(i.TEXTURE_2D,te,De,fe,Le,oe);y.generateMipmaps=!1}else if(P){if(ce){let te=Ut(K);t.texStorage2D(i.TEXTURE_2D,ge,De,te.width,te.height)}Q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Le,K)}else t.texImage2D(i.TEXTURE_2D,0,De,fe,Le,K);p(y)&&f(q),Me.__version=G.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function he(E,y,F){if(y.image.length!==6)return;let q=vt(E,y),J=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let G=n.get(J);if(J.version!==G.__version||q===!0){t.activeTexture(i.TEXTURE0+F);let Me=nt.getPrimaries(nt.workingColorSpace),le=y.colorSpace===vi?null:nt.getPrimaries(y.colorSpace),_e=y.colorSpace===vi||Me===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Se=y.isCompressedTexture||y.image[0].isCompressedTexture,K=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!Se&&!K?fe[Y]=v(y.image[Y],!0,r.maxCubemapSize):fe[Y]=K?y.image[Y].image:y.image[Y],fe[Y]=Xe(y,fe[Y]);let Le=fe[0],De=s.convert(y.format,y.colorSpace),oe=s.convert(y.type),Ve=b(y.internalFormat,De,oe,y.colorSpace),P=y.isVideoTexture!==!0,ce=G.__version===void 0||q===!0,Q=J.dataReady,ge=I(y,Le);qe(i.TEXTURE_CUBE_MAP,y);let te;if(Se){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ve,Le.width,Le.height);for(let Y=0;Y<6;Y++){te=fe[Y].mipmaps;for(let ve=0;ve<te.length;ve++){let ze=te[ve];y.format!==Ln?De!==null?P?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,ze.width,ze.height,De,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,ze.width,ze.height,De,oe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Ve,ze.width,ze.height,0,De,oe,ze.data)}}}else{if(te=y.mipmaps,P&&ce){te.length>0&&ge++;let Y=Ut(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ve,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(K){P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,De,oe,fe[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,fe[Y].width,fe[Y].height,0,De,oe,fe[Y].data);for(let ve=0;ve<te.length;ve++){let St=te[ve].image[Y].image;P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,St.width,St.height,De,oe,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Ve,St.width,St.height,0,De,oe,St.data)}}else{P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,De,oe,fe[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,De,oe,fe[Y]);for(let ve=0;ve<te.length;ve++){let ze=te[ve];P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,De,oe,ze.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Ve,De,oe,ze.image[Y])}}}p(y)&&f(i.TEXTURE_CUBE_MAP),G.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Te(E,y,F,q,J,G){let Me=s.convert(F.format,F.colorSpace),le=s.convert(F.type),_e=b(F.internalFormat,Me,le,F.colorSpace),Se=n.get(y),K=n.get(F);if(K.__renderTarget=y,!Se.__hasExternalTextures){let fe=Math.max(1,y.width>>G),Le=Math.max(1,y.height>>G);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,G,_e,fe,Le,y.depth,0,Me,le,null):t.texImage2D(J,G,_e,fe,Le,0,Me,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),it(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,K.__webglTexture,0,xe(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,K.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(E,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,G=M(y.stencilBuffer,J),Me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=xe(y);it(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,G,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,G,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,G,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,E)}else{let q=y.textures;for(let J=0;J<q.length;J++){let G=q[J],Me=s.convert(G.format,G.colorSpace),le=s.convert(G.type),_e=b(G.internalFormat,Me,le,G.colorSpace),Se=xe(y);F&&it(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,_e,y.width,y.height):it(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);let J=q.__webglTexture,G=xe(y);if(y.depthTexture.format===es)it(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===ds)it(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Et(E){let y=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=E.texture.mipmaps;q&&q.length>0?Ne(y.__webglFramebuffer[0],E):Ne(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),ot(y.__webglDepthbuffer[q],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ot(y.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(E,y,F){let q=n.get(E);y!==void 0&&Te(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Et(E)}function at(E){let y=E.texture,F=n.get(E),q=n.get(y);E.addEventListener("dispose",T);let J=E.textures,G=E.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let _e=0;_e<y.mipmaps.length;_e++)F.__webglFramebuffer[le][_e]=i.createFramebuffer()}else F.__webglFramebuffer[le]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)F.__webglFramebuffer[le]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Me)for(let le=0,_e=J.length;le<_e;le++){let Se=n.get(J[le]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&it(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let _e=J[le];F.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[le]);let Se=s.convert(_e.format,_e.colorSpace),K=s.convert(_e.type),fe=b(_e.internalFormat,Se,K,_e.colorSpace,E.isXRRenderTarget===!0),Le=xe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,fe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,F.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),qe(i.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Te(F.__webglFramebuffer[le][_e],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e);else Te(F.__webglFramebuffer[le],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,_e=J.length;le<_e;le++){let Se=J[le],K=n.get(Se);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),qe(i.TEXTURE_2D,Se),Te(F.__webglFramebuffer,E,Se,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),p(Se)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,q.__webglTexture),qe(le,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Te(F.__webglFramebuffer[_e],E,y,i.COLOR_ATTACHMENT0,le,_e);else Te(F.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,le,0);p(y)&&f(le),t.unbindTexture()}E.depthBuffer&&Et(E)}function A(E){let y=E.textures;for(let F=0,q=y.length;F<q;F++){let J=y[F];if(p(J)){let G=w(E),Me=n.get(J).__webglTexture;t.bindTexture(G,Me),f(G),t.unbindTexture()}}}let an=[],lt=[];function _t(E){if(E.samples>0){if(it(E)===!1){let y=E.textures,F=E.width,q=E.height,J=i.COLOR_BUFFER_BIT,G=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(E),le=y.length>1;if(le)for(let Se=0;Se<y.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let _e=E.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let K=n.get(y[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,J,i.NEAREST),l===!0&&(an.length=0,lt.length=0,an.push(i.COLOR_ATTACHMENT0+Se),E.depthBuffer&&E.resolveDepthBuffer===!1&&(an.push(G),lt.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,an))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Se=0;Se<y.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let K=n.get(y[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function xe(E){return Math.min(r.maxSamples,E.samples)}function it(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(E){let y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Xe(E,y){let F=E.colorSpace,q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==cr&&F!==vi&&(nt.getTransfer(F)===mt?(q!==Ln||J!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Tt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=it}function hb(i,e){function t(n,r=vi){let s,o=nt.getTransfer(r);if(n===Hn)return i.UNSIGNED_BYTE;if(n===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===Sl)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===us)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===wh)return i.RGB;if(n===Ln)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Th)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Co||n===Ro||n===Po||n===Io)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Rl||n===Pl||n===Il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ll||n===Ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dl||n===Ll)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Fl||n===Ul||n===kl||n===Bl||n===Vl||n===zl||n===Hl||n===Gl||n===Wl||n===Xl||n===jl||n===ql||n===$l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Yl||n===Zl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Do)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===Jl||n===Kl||n===Ql)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Do)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new ei,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:db,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends fi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null,v=new $h,p=t.getContextAttributes(),f=null,w=null,b=[],M=[],I=new Je,C=null,T=new jt;T.viewport=new pt;let D=new jt;D.viewport=new pt;let S=[T,D],x=new ll,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=b[$];return re===void 0&&(re=new ss,b[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=b[$];return re===void 0&&(re=new ss,b[$]=re),re.getGripSpace()},this.getHand=function($){let re=b[$];return re===void 0&&(re=new ss,b[$]=re),re.getHandSpace()};function U($){let re=M.indexOf($.inputSource);if(re===-1)return;let be=b[re];be!==void 0&&(be.update($.inputSource,$.frame,c||o),be.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",W);for(let $=0;$<b.length;$++){let re=M[$];re!==null&&(M[$]=null,b[$].disconnect(re))}R=null,V=null,v.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,w=null,vt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function($){return Sr(this,null,function*(){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",X),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,he=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=p.stencil?ds:es,he=p.stencil?hs:Gi);let ot={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ot),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Zn(d.textureWidth,d.textureHeight,{format:Ln,type:Hn,depthTexture:new fo(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Ln,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W($){for(let re=0;re<$.removed.length;re++){let be=$.removed[re],he=M.indexOf(be);he>=0&&(M[he]=null,b[he].disconnect(be))}for(let re=0;re<$.added.length;re++){let be=$.added[re],he=M.indexOf(be);if(he===-1){for(let ot=0;ot<b.length;ot++)if(ot>=M.length){M.push(be),he=ot;break}else if(M[ot]===null){M[ot]=be,he=ot;break}if(he===-1)break}let Te=b[he];Te&&Te.connect(be)}}let z=new L,Z=new L;function H($,re,be){z.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);let he=z.distanceTo(Z),Te=re.projectionMatrix.elements,ot=be.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),Et=Te[14]/(Te[10]+1),Tt=(Te[9]+1)/Te[5],at=(Te[9]-1)/Te[5],A=(Te[8]-1)/Te[0],an=(ot[8]+1)/ot[0],lt=Ne*A,_t=Ne*an,xe=he/(-A+an),it=xe*-A;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Re=Ne+xe,Xe=Et+xe,Ut=lt-it,E=_t+(he-it),y=Tt*Et/Xe*Re,F=at*Et/Xe*Re;$.projectionMatrix.makePerspective(Ut,E,y,F,Re,Xe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function se($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let re=$.near,be=$.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(be=v.depthFar)),x.near=D.near=T.near=re,x.far=D.far=T.far=be,(R!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,V=x.far),T.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,x.layers.mask=T.layers.mask|D.layers.mask;let he=$.parent,Te=x.cameras;se(x,he);for(let ot=0;ot<Te.length;ot++)se(Te[ot],he);Te.length===2?H(x,T,D):x.projectionMatrix.copy(T.projectionMatrix),de($,x,he)};function de($,re,be){be===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ro*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Ce=null;function qe($,re){if(u=re.getViewerPose(c||o),g=re,u!==null){let be=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let he=!1;be.length!==x.cameras.length&&(x.cameras.length=0,he=!0);for(let Ne=0;Ne<be.length;Ne++){let Et=be[Ne],Tt=null;if(m!==null)Tt=m.getViewport(Et);else{let A=h.getViewSubImage(d,Et);Tt=A.viewport,Ne===0&&(e.setRenderTargetTextures(w,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(w))}let at=S[Ne];at===void 0&&(at=new jt,at.layers.enable(Ne),at.viewport=new pt,S[Ne]=at),at.matrix.fromArray(Et.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Et.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Ne===0&&(x.matrix.copy(at.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),he===!0&&x.cameras.push(at)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let Ne=h.getDepthInformation(be[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,r.renderState)}}for(let be=0;be<b.length;be++){let he=M[be],Te=b[be];he!==null&&Te!==void 0&&Te.update(he,re,c||o)}Ce&&Ce($,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let vt=new Xm;vt.setAnimationLoop(qe),this.setAnimationLoop=function($){Ce=$},this.dispose=function(){}}},yr=new ki,pb=new wt;function mb(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Dh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,w,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,w,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=e.get(f),b=w.envMap,M=w.envMapRotation;b&&(p.envMap.value=b,yr.copy(M),yr.x*=-1,yr.y*=-1,yr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),p.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(yr)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let w=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function gb(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let M=b.program;n.uniformBlockBinding(w,M)}function c(w,b){let M=r[w.id];M===void 0&&(g(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",p));let I=b.program;n.updateUBOMapping(w,I);let C=e.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function u(w){let b=h();w.__bindingPointIndex=b;let M=i.createBuffer(),I=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let b=r[w.id],M=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,T=M.length;C<T;C++){let D=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,x=D.length;S<x;S++){let R=D[S];if(m(R,C,S,I)===!0){let V=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],X=0;for(let W=0;W<U.length;W++){let z=U[W],Z=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+X,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,b,M,I){let C=w.value,T=b+"_"+M;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{let D=I[T];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[T]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(w){let b=w.uniforms,M=0,I=16;for(let T=0,D=b.length;T<D;T++){let S=Array.isArray(b[T])?b[T]:[b[T]];for(let x=0,R=S.length;x<R;x++){let V=S[x],U=Array.isArray(V.value)?V.value:[V.value];for(let X=0,W=U.length;X<W;X++){let z=U[X],Z=v(z),H=M%I,se=H%Z.boundary,de=H+se;M+=se,de!==0&&I-de<Z.storage&&(M+=I-de),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=Z.storage}}}let C=M%I;return C>0&&(M+=I-C),w.__size=M,w.__cache={},this}function v(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){let b=w.target;b.removeEventListener("dispose",p);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var rc=class{constructor(e={}){let{canvas:t=mm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),v=new Int32Array(4),p=null,f=null,w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,I=!1;this._outputColorSpace=yn;let C=0,T=0,D=null,S=-1,x=null,R=new pt,V=new pt,U=null,X=new et(0),W=0,z=t.width,Z=t.height,H=1,se=null,de=null,Ce=new pt(0,0,z,Z),qe=new pt(0,0,z,Z),vt=!1,$=new os,re=!1,be=!1,he=new wt,Te=new wt,ot=new L,Ne=new pt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function at(){return D===null?H:1}let A=n;function an(_,O){return t.getContext(_,O)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Y,!1),A===null){let O="webgl2";if(A=an(O,_),A===null)throw an(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let lt,_t,xe,it,Re,Xe,Ut,E,y,F,q,J,G,Me,le,_e,Se,K,fe,Le,De,oe,Ve,P;function ce(){lt=new OM(A),lt.init(),oe=new hb(A,lt),_t=new AM(A,lt,e,oe),xe=new cb(A,lt),_t.reverseDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),it=new UM(A),Re=new ZS,Xe=new ub(A,lt,xe,Re,_t,oe,it),Ut=new RM(M),E=new LM(M),y=new Gy(A),Ve=new EM(A,y),F=new NM(A,y,it,Ve),q=new BM(A,F,y,it),fe=new kM(A,_t,Xe),_e=new CM(Re),J=new YS(M,Ut,E,lt,_t,Ve,_e),G=new mb(M,Re),Me=new KS,le=new rb(lt),K=new wM(M,Ut,E,xe,q,m,l),Se=new ab(M,q,_t),P=new gb(A,it,_t,xe),Le=new TM(A,lt,it),De=new FM(A,lt,it),it.programs=J.programs,M.capabilities=_t,M.extensions=lt,M.properties=Re,M.renderLists=Me,M.shadowMap=Se,M.state=xe,M.info=it}ce();let Q=new Yh(M,A);this.xr=Q,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=lt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=lt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(z,Z,!1))},this.getSize=function(_){return _.set(z,Z)},this.setSize=function(_,O,k=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=_,Z=O,t.width=Math.floor(_*H),t.height=Math.floor(O*H),k===!0&&(t.style.width=_+"px",t.style.height=O+"px"),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(z*H,Z*H).floor()},this.setDrawingBufferSize=function(_,O,k){z=_,Z=O,H=k,t.width=Math.floor(_*k),t.height=Math.floor(O*k),this.setViewport(0,0,_,O)},this.getCurrentViewport=function(_){return _.copy(R)},this.getViewport=function(_){return _.copy(Ce)},this.setViewport=function(_,O,k,B){_.isVector4?Ce.set(_.x,_.y,_.z,_.w):Ce.set(_,O,k,B),xe.viewport(R.copy(Ce).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(qe)},this.setScissor=function(_,O,k,B){_.isVector4?qe.set(_.x,_.y,_.z,_.w):qe.set(_,O,k,B),xe.scissor(V.copy(qe).multiplyScalar(H).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(_){xe.setScissorTest(vt=_)},this.setOpaqueSort=function(_){se=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(_=!0,O=!0,k=!0){let B=0;if(_){let N=!1;if(D!==null){let ne=D.texture.format;N=ne===Al||ne===Tl||ne===El}if(N){let ne=D.texture.type,ue=ne===Hn||ne===Gi||ne===cs||ne===hs||ne===bl||ne===wl,ye=K.getClearColor(),pe=K.getClearAlpha(),Fe=ye.r,ke=ye.g,Ae=ye.b;ue?(g[0]=Fe,g[1]=ke,g[2]=Ae,g[3]=pe,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=Fe,v[1]=ke,v[2]=Ae,v[3]=pe,A.clearBufferiv(A.COLOR,0,v))}else B|=A.COLOR_BUFFER_BIT}O&&(B|=A.DEPTH_BUFFER_BIT),k&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),K.dispose(),Me.dispose(),le.dispose(),Re.dispose(),Ut.dispose(),E.dispose(),q.dispose(),Ve.dispose(),P.dispose(),J.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Jh),Q.removeEventListener("sessionend",Kh),Wi.stop()};function ge(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let _=it.autoReset,O=Se.enabled,k=Se.autoUpdate,B=Se.needsUpdate,N=Se.type;ce(),it.autoReset=_,Se.enabled=O,Se.autoUpdate=k,Se.needsUpdate=B,Se.type=N}function Y(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ve(_){let O=_.target;O.removeEventListener("dispose",ve),ze(O)}function ze(_){St(_),Re.remove(_)}function St(_){let O=Re.get(_).programs;O!==void 0&&(O.forEach(function(k){J.releaseProgram(k)}),_.isShaderMaterial&&J.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,k,B,N,ne){O===null&&(O=Et);let ue=N.isMesh&&N.matrixWorld.determinant()<0,ye=Qm(_,O,k,B,N);xe.setMaterial(B,ue);let pe=k.index,Fe=1;if(B.wireframe===!0){if(pe=F.getWireframeAttribute(k),pe===void 0)return;Fe=2}let ke=k.drawRange,Ae=k.attributes.position,Ke=ke.start*Fe,ft=(ke.start+ke.count)*Fe;ne!==null&&(Ke=Math.max(Ke,ne.start*Fe),ft=Math.min(ft,(ne.start+ne.count)*Fe)),pe!==null?(Ke=Math.max(Ke,0),ft=Math.min(ft,pe.count)):Ae!=null&&(Ke=Math.max(Ke,0),ft=Math.min(ft,Ae.count));let At=ft-Ke;if(At<0||At===1/0)return;Ve.setup(N,B,ye,k,pe);let Pt,rt=Le;if(pe!==null&&(Pt=y.get(pe),rt=De,rt.setIndex(Pt)),N.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*at()),rt.setMode(A.LINES)):rt.setMode(A.TRIANGLES);else if(N.isLine){let Pe=B.linewidth;Pe===void 0&&(Pe=1),xe.setLineWidth(Pe*at()),N.isLineSegments?rt.setMode(A.LINES):N.isLineLoop?rt.setMode(A.LINE_LOOP):rt.setMode(A.LINE_STRIP)}else N.isPoints?rt.setMode(A.POINTS):N.isSprite&&rt.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Pe=N._multiDrawStarts,qt=N._multiDrawCounts,ct=N._multiDrawCount,Nn=pe?y.get(pe).bytesPerElement:1,Mr=Re.get(B).currentProgram.getUniforms();for(let dn=0;dn<ct;dn++)Mr.setValue(A,"_gl_DrawID",dn),rt.render(Pe[dn]/Nn,qt[dn])}else if(N.isInstancedMesh)rt.renderInstances(Ke,At,N.count);else if(k.isInstancedBufferGeometry){let Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,qt=Math.min(k.instanceCount,Pe);rt.renderInstances(Ke,At,qt)}else rt.render(Ke,At)};function dt(_,O,k){_.transparent===!0&&_.side===Dn&&_.forceSinglePass===!1?(_.side=Kt,_.needsUpdate=!0,Uo(_,O,k),_.side=Pn,_.needsUpdate=!0,Uo(_,O,k),_.side=Dn):Uo(_,O,k)}this.compile=function(_,O,k=null){k===null&&(k=_),f=le.get(k),f.init(O),b.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),_!==k&&_.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let B=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ne=N.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){let ye=ne[ue];dt(ye,k,N),B.add(ye)}else dt(ne,k,N),B.add(ne)}),f=b.pop(),B},this.compileAsync=function(_,O,k=null){let B=this.compile(_,O,k);return new Promise(N=>{function ne(){if(B.forEach(function(ue){Re.get(ue).currentProgram.isReady()&&B.delete(ue)}),B.size===0){N(_);return}setTimeout(ne,10)}lt.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let On=null;function ni(_){On&&On(_)}function Jh(){Wi.stop()}function Kh(){Wi.start()}let Wi=new Xm;Wi.setAnimationLoop(ni),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(_){On=_,Q.setAnimationLoop(_),_===null?Wi.stop():Wi.start()},Q.addEventListener("sessionstart",Jh),Q.addEventListener("sessionend",Kh),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,O,D),f=le.get(_,b.length),f.init(O),b.push(f),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Te),be=this.localClippingEnabled,re=_e.init(this.clippingPlanes,be),p=Me.get(_,w.length),p.init(),w.push(p),Q.enabled===!0&&Q.isPresenting===!0){let ne=M.xr.getDepthSensingMesh();ne!==null&&ac(ne,O,-1/0,M.sortObjects)}ac(_,O,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(se,de),Tt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Tt&&K.addToRenderList(p,_),this.info.render.frame++,re===!0&&_e.beginShadows();let k=f.state.shadowsArray;Se.render(k,_,O),re===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=p.opaque,N=p.transmissive;if(f.setupLights(),O.isArrayCamera){let ne=O.cameras;if(N.length>0)for(let ue=0,ye=ne.length;ue<ye;ue++){let pe=ne[ue];ed(B,N,_,pe)}Tt&&K.render(_);for(let ue=0,ye=ne.length;ue<ye;ue++){let pe=ne[ue];Qh(p,_,pe,pe.viewport)}}else N.length>0&&ed(B,N,_,O),Tt&&K.render(_),Qh(p,_,O);D!==null&&T===0&&(Xe.updateMultisampleRenderTarget(D),Xe.updateRenderTargetMipmap(D)),_.isScene===!0&&_.onAfterRender(M,_,O),Ve.resetDefaultState(),S=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],re===!0&&_e.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function ac(_,O,k,B){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||$.intersectsSprite(_)){B&&Ne.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Te);let ue=q.update(_),ye=_.material;ye.visible&&p.push(_,ue,ye,k,Ne.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||$.intersectsObject(_))){let ue=q.update(_),ye=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ne.copy(_.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ne.copy(ue.boundingSphere.center)),Ne.applyMatrix4(_.matrixWorld).applyMatrix4(Te)),Array.isArray(ye)){let pe=ue.groups;for(let Fe=0,ke=pe.length;Fe<ke;Fe++){let Ae=pe[Fe],Ke=ye[Ae.materialIndex];Ke&&Ke.visible&&p.push(_,ue,Ke,k,Ne.z,Ae)}}else ye.visible&&p.push(_,ue,ye,k,Ne.z,null)}}let ne=_.children;for(let ue=0,ye=ne.length;ue<ye;ue++)ac(ne[ue],O,k,B)}function Qh(_,O,k,B){let N=_.opaque,ne=_.transmissive,ue=_.transparent;f.setupLightsView(k),re===!0&&_e.setGlobalState(M.clippingPlanes,k),B&&xe.viewport(R.copy(B)),N.length>0&&Fo(N,O,k),ne.length>0&&Fo(ne,O,k),ue.length>0&&Fo(ue,O,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ed(_,O,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Zn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?us:Hn,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let ne=f.state.transmissionRenderTarget[B.id],ue=B.viewport||R;ne.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);let ye=M.getRenderTarget();M.setRenderTarget(ne),M.getClearColor(X),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Tt&&K.render(k);let pe=M.toneMapping;M.toneMapping=gi;let Fe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),re===!0&&_e.setGlobalState(M.clippingPlanes,B),Fo(_,k,B),Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ae=0,Ke=O.length;Ae<Ke;Ae++){let ft=O[Ae],At=ft.object,Pt=ft.geometry,rt=ft.material,Pe=ft.group;if(rt.side===Dn&&At.layers.test(B.layers)){let qt=rt.side;rt.side=Kt,rt.needsUpdate=!0,td(At,k,B,Pt,rt,Pe),rt.side=qt,rt.needsUpdate=!0,ke=!0}}ke===!0&&(Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne))}M.setRenderTarget(ye),M.setClearColor(X,W),Fe!==void 0&&(B.viewport=Fe),M.toneMapping=pe}function Fo(_,O,k){let B=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ne=_.length;N<ne;N++){let ue=_[N],ye=ue.object,pe=ue.geometry,Fe=ue.group,ke=ue.material;ke.allowOverride===!0&&B!==null&&(ke=B),ye.layers.test(k.layers)&&td(ye,O,k,pe,ke,Fe)}}function td(_,O,k,B,N,ne){_.onBeforeRender(M,O,k,B,N,ne),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(M,O,k,B,_,ne),N.transparent===!0&&N.side===Dn&&N.forceSinglePass===!1?(N.side=Kt,N.needsUpdate=!0,M.renderBufferDirect(k,O,B,N,_,ne),N.side=Pn,N.needsUpdate=!0,M.renderBufferDirect(k,O,B,N,_,ne),N.side=Dn):M.renderBufferDirect(k,O,B,N,_,ne),_.onAfterRender(M,O,k,B,N,ne)}function Uo(_,O,k){O.isScene!==!0&&(O=Et);let B=Re.get(_),N=f.state.lights,ne=f.state.shadowsArray,ue=N.state.version,ye=J.getParameters(_,N.state,ne,O,k),pe=J.getProgramCacheKey(ye),Fe=B.programs;B.environment=_.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(_.isMeshStandardMaterial?E:Ut).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?O.environmentRotation:_.envMapRotation,Fe===void 0&&(_.addEventListener("dispose",ve),Fe=new Map,B.programs=Fe);let ke=Fe.get(pe);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===ue)return id(_,ye),ke}else ye.uniforms=J.getUniforms(_),_.onBeforeCompile(ye,M),ke=J.acquireProgram(ye,pe),Fe.set(pe,ke),B.uniforms=ye.uniforms;let Ae=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=_e.uniform),id(_,ye),B.needsLights=tg(_),B.lightsStateVersion=ue,B.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=ke,B.uniformsList=null,ke}function nd(_){if(_.uniformsList===null){let O=_.currentProgram.getUniforms();_.uniformsList=ms.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function id(_,O){let k=Re.get(_);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Qm(_,O,k,B,N){O.isScene!==!0&&(O=Et),Xe.resetTextureUnits();let ne=O.fog,ue=B.isMeshStandardMaterial?O.environment:null,ye=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:cr,pe=(B.isMeshStandardMaterial?E:Ut).get(B.envMap||ue),Fe=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ke=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,ft=!!k.morphAttributes.color,At=gi;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=M.toneMapping);let Pt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=Pt!==void 0?Pt.length:0,Pe=Re.get(B),qt=f.state.lights;if(re===!0&&(be===!0||_!==x)){let ln=_===x&&B.id===S;_e.setState(B,_,ln)}let ct=!1;B.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==qt.state.version||Pe.outputColorSpace!==ye||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==pe||B.fog===!0&&Pe.fog!==ne||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==_e.numPlanes||Pe.numIntersection!==_e.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==ke||Pe.morphTargets!==Ae||Pe.morphNormals!==Ke||Pe.morphColors!==ft||Pe.toneMapping!==At||Pe.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,Pe.__version=B.version);let Nn=Pe.currentProgram;ct===!0&&(Nn=Uo(B,O,N));let Mr=!1,dn=!1,vs=!1,bt=Nn.getUniforms(),Sn=Pe.uniforms;if(xe.useProgram(Nn.program)&&(Mr=!0,dn=!0,vs=!0),B.id!==S&&(S=B.id,dn=!0),Mr||x!==_){xe.buffers.depth.getReversed()?(he.copy(_.projectionMatrix),vm(he),ym(he),bt.setValue(A,"projectionMatrix",he)):bt.setValue(A,"projectionMatrix",_.projectionMatrix),bt.setValue(A,"viewMatrix",_.matrixWorldInverse);let cn=bt.map.cameraPosition;cn!==void 0&&cn.setValue(A,ot.setFromMatrixPosition(_.matrixWorld)),_t.logarithmicDepthBuffer&&bt.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&bt.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,dn=!0,vs=!0)}if(N.isSkinnedMesh){bt.setOptional(A,N,"bindMatrix"),bt.setOptional(A,N,"bindMatrixInverse");let ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),bt.setValue(A,"boneTexture",ln.boneTexture,Xe))}N.isBatchedMesh&&(bt.setOptional(A,N,"batchingTexture"),bt.setValue(A,"batchingTexture",N._matricesTexture,Xe),bt.setOptional(A,N,"batchingIdTexture"),bt.setValue(A,"batchingIdTexture",N._indirectTexture,Xe),bt.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&bt.setValue(A,"batchingColorTexture",N._colorsTexture,Xe));let bn=k.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&fe.update(N,k,Nn),(dn||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,bt.setValue(A,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Sn.envMap.value=pe,Sn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&(Sn.envMapIntensity.value=O.environmentIntensity),dn&&(bt.setValue(A,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&eg(Sn,vs),ne&&B.fog===!0&&G.refreshFogUniforms(Sn,ne),G.refreshMaterialUniforms(Sn,B,H,Z,f.state.transmissionRenderTarget[_.id]),ms.upload(A,nd(Pe),Sn,Xe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ms.upload(A,nd(Pe),Sn,Xe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&bt.setValue(A,"center",N.center),bt.setValue(A,"modelViewMatrix",N.modelViewMatrix),bt.setValue(A,"normalMatrix",N.normalMatrix),bt.setValue(A,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let ln=B.uniformsGroups;for(let cn=0,lc=ln.length;cn<lc;cn++){let Xi=ln[cn];P.update(Xi,Nn),P.bind(Xi,Nn)}}return Nn}function eg(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function tg(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,O,k){let B=Re.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Re.get(_.texture).__webglTexture=O,Re.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,O){let k=Re.get(_);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};let ng=A.createFramebuffer();this.setRenderTarget=function(_,O=0,k=0){D=_,C=O,T=k;let B=!0,N=null,ne=!1,ue=!1;if(_){let pe=Re.get(_);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(pe.__webglFramebuffer===void 0)Xe.setupRenderTarget(_);else if(pe.__hasExternalTextures)Xe.rebindTextures(_,Re.get(_.texture).__webglTexture,Re.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ae=_.depthTexture;if(pe.__boundDepthTexture!==Ae){if(Ae!==null&&Re.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(_)}}let Fe=_.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ue=!0);let ke=Re.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?N=ke[O][k]:N=ke[O],ne=!0):_.samples>0&&Xe.useMultisampledRTT(_)===!1?N=Re.get(_).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[k]:N=ke,R.copy(_.viewport),V.copy(_.scissor),U=_.scissorTest}else R.copy(Ce).multiplyScalar(H).floor(),V.copy(qe).multiplyScalar(H).floor(),U=vt;if(k!==0&&(N=ng),xe.bindFramebuffer(A.FRAMEBUFFER,N)&&B&&xe.drawBuffers(_,N),xe.viewport(R),xe.scissor(V),xe.setScissorTest(U),ne){let pe=Re.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,k)}else if(ue){let pe=Re.get(_.texture),Fe=O;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,pe.__webglTexture,k,Fe)}else if(_!==null&&k!==0){let pe=Re.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,pe.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(_,O,k,B,N,ne,ue,ye=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){xe.bindFramebuffer(A.FRAMEBUFFER,pe);try{let Fe=_.textures[ye],ke=Fe.format,Ae=Fe.type;if(!_t.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-B&&k>=0&&k<=_.height-N&&(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ye),A.readPixels(O,k,B,N,oe.convert(ke),oe.convert(Ae),ne))}finally{let Fe=D!==null?Re.get(D).__webglFramebuffer:null;xe.bindFramebuffer(A.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=function(_,O,k,B,N,ne,ue,ye=0){return Sr(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(O>=0&&O<=_.width-B&&k>=0&&k<=_.height-N){xe.bindFramebuffer(A.FRAMEBUFFER,pe);let Fe=_.textures[ye],ke=Fe.format,Ae=Fe.type;if(!_t.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.bufferData(A.PIXEL_PACK_BUFFER,ne.byteLength,A.STREAM_READ),_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ye),A.readPixels(O,k,B,N,oe.convert(ke),oe.convert(Ae),0);let ft=D!==null?Re.get(D).__webglFramebuffer:null;xe.bindFramebuffer(A.FRAMEBUFFER,ft);let At=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),yield gm(A,At,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ne),A.deleteBuffer(Ke),A.deleteSync(At),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,O=null,k=0){let B=Math.pow(2,-k),N=Math.floor(_.image.width*B),ne=Math.floor(_.image.height*B),ue=O!==null?O.x:0,ye=O!==null?O.y:0;Xe.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,ue,ye,N,ne),xe.unbindTexture()};let ig=A.createFramebuffer(),rg=A.createFramebuffer();this.copyTextureToTexture=function(_,O,k=null,B=null,N=0,ne=null){ne===null&&(N!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let ue,ye,pe,Fe,ke,Ae,Ke,ft,At,Pt=_.isCompressedTexture?_.mipmaps[ne]:_.image;if(k!==null)ue=k.max.x-k.min.x,ye=k.max.y-k.min.y,pe=k.isBox3?k.max.z-k.min.z:1,Fe=k.min.x,ke=k.min.y,Ae=k.isBox3?k.min.z:0;else{let bn=Math.pow(2,-N);ue=Math.floor(Pt.width*bn),ye=Math.floor(Pt.height*bn),_.isDataArrayTexture?pe=Pt.depth:_.isData3DTexture?pe=Math.floor(Pt.depth*bn):pe=1,Fe=0,ke=0,Ae=0}B!==null?(Ke=B.x,ft=B.y,At=B.z):(Ke=0,ft=0,At=0);let rt=oe.convert(O.format),Pe=oe.convert(O.type),qt;O.isData3DTexture?(Xe.setTexture3D(O,0),qt=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Xe.setTexture2DArray(O,0),qt=A.TEXTURE_2D_ARRAY):(Xe.setTexture2D(O,0),qt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);let ct=A.getParameter(A.UNPACK_ROW_LENGTH),Nn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Mr=A.getParameter(A.UNPACK_SKIP_PIXELS),dn=A.getParameter(A.UNPACK_SKIP_ROWS),vs=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Pt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,ke),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ae);let bt=_.isDataArrayTexture||_.isData3DTexture,Sn=O.isDataArrayTexture||O.isData3DTexture;if(_.isDepthTexture){let bn=Re.get(_),ln=Re.get(O),cn=Re.get(bn.__renderTarget),lc=Re.get(ln.__renderTarget);xe.bindFramebuffer(A.READ_FRAMEBUFFER,cn.__webglFramebuffer),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,lc.__webglFramebuffer);for(let Xi=0;Xi<pe;Xi++)bt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.get(_).__webglTexture,N,Ae+Xi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,ne,At+Xi)),A.blitFramebuffer(Fe,ke,ue,ye,Ke,ft,ue,ye,A.DEPTH_BUFFER_BIT,A.NEAREST);xe.bindFramebuffer(A.READ_FRAMEBUFFER,null),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||Re.has(_)){let bn=Re.get(_),ln=Re.get(O);xe.bindFramebuffer(A.READ_FRAMEBUFFER,ig),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,rg);for(let cn=0;cn<pe;cn++)bt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,bn.__webglTexture,N,Ae+cn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,bn.__webglTexture,N),Sn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,ne,At+cn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,ne),N!==0?A.blitFramebuffer(Fe,ke,ue,ye,Ke,ft,ue,ye,A.COLOR_BUFFER_BIT,A.NEAREST):Sn?A.copyTexSubImage3D(qt,ne,Ke,ft,At+cn,Fe,ke,ue,ye):A.copyTexSubImage2D(qt,ne,Ke,ft,Fe,ke,ue,ye);xe.bindFramebuffer(A.READ_FRAMEBUFFER,null),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Sn?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(qt,ne,Ke,ft,At,ue,ye,pe,rt,Pe,Pt.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(qt,ne,Ke,ft,At,ue,ye,pe,rt,Pt.data):A.texSubImage3D(qt,ne,Ke,ft,At,ue,ye,pe,rt,Pe,Pt):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ne,Ke,ft,ue,ye,rt,Pe,Pt.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ne,Ke,ft,Pt.width,Pt.height,rt,Pt.data):A.texSubImage2D(A.TEXTURE_2D,ne,Ke,ft,ue,ye,rt,Pe,Pt);A.pixelStorei(A.UNPACK_ROW_LENGTH,ct),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Nn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Mr),A.pixelStorei(A.UNPACK_SKIP_ROWS,dn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,vs),ne===0&&O.generateMipmaps&&A.generateMipmap(qt),xe.unbindTexture()},this.copyTextureToTexture3D=function(_,O,k=null,B=null,N=0){return ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,O,k,B,N)},this.initRenderTarget=function(_){Re.get(_).__webglFramebuffer===void 0&&Xe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Xe.setTextureCube(_,0):_.isData3DTexture?Xe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Xe.setTexture2DArray(_,0):Xe.setTexture2D(_,0),xe.unbindTexture()},this.resetState=function(){C=0,T=0,D=null,xe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var oc=(()=>{class i{constructor(){this.panelState=new wn,this.panelState$=this.panelState.asObservable()}updatePanelState(t){this.panelState.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var yb=["canvas"],Jm=(()=>{class i{constructor(t,n,r,s){this.platformId=t,this.router=n,this.sceneControlService=r,this.syncService=s,this.animationId=0,this.signPanels=[],this.selectedMenuItem=null,this.hoveredMenuItem=null,this.raycaster=new Eo,this.mouse=new Je,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.dragThreshold=5,this.initialPinchDistance=0,this.lastTap=0,this.touchStartPosition={x:0,y:0},this.initialCameraRadiusOnPinch=10,this.cameraTarget=new L(0,1.5,0),this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.isZooming=!1,this.zoomStartTime=0,this.zoomDuration=1e3,this.initialCameraPosition=new L,this.targetCameraPosition=new L,this.initialCameraTarget=new L,this.targetCameraTarget=new L,this.onMouseDown=o=>{this.isDragging=!0,this.canvasRef.nativeElement.style.cursor="grabbing",this.previousMousePosition={x:o.clientX,y:o.clientY}},this.onMouseUp=()=>{this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab"},this.onMouseLeave=()=>{if(this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab",this.hoveredMenuItem){let o=this.signPanels.find(a=>a.mesh===this.hoveredMenuItem);o&&this.hoveredMenuItem!==this.selectedMenuItem&&this.updateMenuItemTexture(this.hoveredMenuItem,o.text,!1,!1),this.hoveredMenuItem=null}},this.onMouseMove=o=>{if(this.isDragging)this.onMouseDrag(o);else{this.mouse.x=o.clientX/window.innerWidth*2-1,this.mouse.y=-(o.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let a=this.signPanels.map(c=>c.mesh),l=this.raycaster.intersectObjects(a,!0);if(l.length>0){this.canvasRef.nativeElement.style.cursor="pointer";let c=l[0].object;if(this.hoveredMenuItem!==c){if(this.hoveredMenuItem&&this.hoveredMenuItem!==this.selectedMenuItem){let u=this.signPanels.find(h=>h.mesh===this.hoveredMenuItem);u&&this.updateMenuItemTexture(this.hoveredMenuItem,u.text,!1,!1)}if(this.hoveredMenuItem=c,this.hoveredMenuItem!==this.selectedMenuItem){let u=this.signPanels.find(h=>h.mesh===this.hoveredMenuItem);u&&this.updateMenuItemTexture(this.hoveredMenuItem,u.text,!1,!0)}}}else if(this.canvasRef.nativeElement.style.cursor="grab",this.hoveredMenuItem){if(this.hoveredMenuItem!==this.selectedMenuItem){let c=this.signPanels.find(u=>u.mesh===this.hoveredMenuItem);c&&this.updateMenuItemTexture(this.hoveredMenuItem,c.text,!1,!1)}this.hoveredMenuItem=null}}},this.onMouseDrag=o=>{if(!this.isDragging)return;let a=o.clientX-this.previousMousePosition.x,l=o.clientY-this.previousMousePosition.y;this.cameraAzimuth-=a*.01,this.cameraPolar-=l*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:o.clientX,y:o.clientY},this.updateCameraPosition()},this.onClick=o=>{let a=Math.abs(o.clientX-this.previousMousePosition.x),l=Math.abs(o.clientY-this.previousMousePosition.y);if(a>this.dragThreshold||l>this.dragThreshold)return;this.mouse.x=o.clientX/window.innerWidth*2-1,this.mouse.y=-(o.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let c=this.signPanels.map(h=>h.mesh),u=this.raycaster.intersectObjects(c,!0);if(u.length>0){let h=u[0].object,d=this.signPanels.find(m=>m.mesh===h);if(d){if(this.selectedMenuItem!==d.mesh){if(this.selectedMenuItem){let m=this.signPanels.find(g=>g.mesh===this.selectedMenuItem);m&&this.updateMenuItemTexture(m.mesh,m.text,!1,!1)}this.selectedMenuItem=d.mesh,this.updateMenuItemTexture(d.mesh,d.text,!0,!1)}this.clickSound&&(this.clickSound.isPlaying&&this.clickSound.stop(),this.clickSound.play(),setTimeout(()=>{this.clickSound.isPlaying&&this.clickSound.stop()},2e3),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.setVolume(.2),this.clickSound.onEnded=()=>{this.ambientSound&&this.ambientSound.setVolume(.5)})),this.sceneControlService.requestZoom("screen"),this.router.navigate([`/${d.label.toLowerCase()}`])}}},this.onMouseWheel=o=>{o.preventDefault(),this.cameraRadius+=o.deltaY*.01,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),setTimeout(()=>{this.zoomSound.isPlaying&&this.zoomSound.stop()},3e3),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.setVolume(.2),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.setVolume(.5)}))},this.onTouchStart=o=>{o.preventDefault(),this.isDragging=!0;let a=o.touches;a.length===1?(this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.touchStartPosition={x:a[0].clientX,y:a[0].clientY}):a.length===2&&(this.initialPinchDistance=this.getPinchDistance(a),this.initialCameraRadiusOnPinch=this.cameraRadius)},this.onTouchMove=o=>{if(o.preventDefault(),!this.isDragging)return;let a=o.touches;if(a.length===1){let l=a[0].clientX-this.previousMousePosition.x,c=a[0].clientY-this.previousMousePosition.y;this.cameraAzimuth-=l*.01,this.cameraPolar-=c*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.updateCameraPosition()}else if(a.length===2){let l=this.getPinchDistance(a);if(this.initialPinchDistance>0){let c=l/this.initialPinchDistance;this.cameraRadius=this.initialCameraRadiusOnPinch/c,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),setTimeout(()=>{this.zoomSound.isPlaying&&this.zoomSound.stop()},3e3),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.setVolume(.2),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.setVolume(.5)}))}}},this.onTouchEnd=o=>{o.preventDefault(),this.isDragging=!1,this.initialPinchDistance=0;let a=new Date().getTime(),l=a-this.lastTap;if(l<300&&l>0)this.resetCamera();else if(o.changedTouches.length===1){let c=o.changedTouches[0],u=Math.abs(c.clientX-this.touchStartPosition.x),h=Math.abs(c.clientY-this.touchStartPosition.y);if(u<this.dragThreshold&&h<this.dragThreshold){let d=new MouseEvent("click",{clientX:c.clientX,clientY:c.clientY,bubbles:!0,cancelable:!0});this.onClick(d)}}this.lastTap=a},this.animate=()=>{if(this.animationId=requestAnimationFrame(this.animate),this.isZooming){let a=Date.now()-this.zoomStartTime,l=Math.min(a/this.zoomDuration,1),c=1-Math.pow(1-l,5);this.camera.position.lerpVectors(this.initialCameraPosition,this.targetCameraPosition,c),this.cameraTarget.lerpVectors(this.initialCameraTarget,this.targetCameraTarget,c),this.camera.lookAt(this.cameraTarget),l>=1&&(this.isZooming=!1)}this.animateLeaves(),this.renderer.render(this.scene,this.camera),this.syncPanel()},this.onWindowResize=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}}ngOnInit(){if(Cc(this.platformId)){this.initThree(),this.animate();let t=new bo;t.load("assets/audio/Tausend_year.mp3",r=>{this.ambientSound=new fr(this.listener),this.ambientSound.setBuffer(r),this.ambientSound.setLoop(!1),this.ambientSound.setVolume(.2);let s=7,o=18;this.ambientSound.offset=s,this.ambientSound.play(),setInterval(()=>{this.ambientSound.isPlaying&&this.ambientSound.stop(),this.ambientSound.offset=s,this.ambientSound.play()},o*1e3),this.ambientSound.play()}),t.load("assets/audio/Tausend_year.mp3",r=>{this.clickSound=new fr(this.listener),this.clickSound.setBuffer(r),this.clickSound.setVolume(.2)}),t.load("assets/audio/Tausend_year.mp3",r=>{this.zoomSound=new fr(this.listener),this.zoomSound.setBuffer(r),this.zoomSound.setVolume(.2)});let n=this.canvasRef.nativeElement;n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("mouseup",this.onMouseUp),n.addEventListener("mousemove",this.onMouseMove),n.addEventListener("click",this.onClick),n.addEventListener("mouseleave",this.onMouseLeave),n.addEventListener("wheel",this.onMouseWheel,{passive:!1}),n.addEventListener("touchstart",this.onTouchStart,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove,{passive:!1}),n.addEventListener("touchend",this.onTouchEnd,{passive:!1}),window.addEventListener("resize",this.onWindowResize),this.sceneControlService.zoomRequest$.subscribe(r=>{typeof r=="string"&&r==="screen"?this.zoomToScreen():r instanceof Jt&&this.zoomOnObject(r)}),this.sceneControlService.cameraResetRequest$.subscribe(()=>{if(this.resetCamera(),this.syncService.updatePanelState({visible:!1,transform:""}),this.selectedMenuItem){let r=this.signPanels.find(s=>s.mesh===this.selectedMenuItem);r&&this.updateMenuItemTexture(r.mesh,r.text,!1,!1),this.selectedMenuItem=null}})}}ngOnDestroy(){if(Cc(this.platformId)){cancelAnimationFrame(this.animationId);let t=this.canvasRef.nativeElement;this.ambientSound&&this.ambientSound.stop(),this.clickSound&&this.clickSound.stop(),this.zoomSound&&this.zoomSound.stop(),this.listener&&this.listener.context.close(),window.removeEventListener("resize",this.onWindowResize),t.removeEventListener("mousedown",this.onMouseDown),t.removeEventListener("mouseup",this.onMouseUp),t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("click",this.onClick),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("wheel",this.onMouseWheel),t.removeEventListener("touchstart",this.onTouchStart),t.removeEventListener("touchmove",this.onTouchMove),t.removeEventListener("touchend",this.onTouchEnd)}}zoomOnObject(t){if(this.isZooming)return;this.isZooming=!0,this.zoomStartTime=Date.now(),this.initialCameraPosition.copy(this.camera.position),this.initialCameraTarget.copy(this.cameraTarget);let n=new L;t.getWorldPosition(n),this.targetCameraTarget.copy(n);let r=new L(0,0,-4);r.applyQuaternion(t.quaternion),this.targetCameraPosition.copy(n).add(r)}zoomToScreen(){this.zoomOnObject(this.screenPanel)}resetCamera(){this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.cameraTarget.set(0,1.5,0),this.updateCameraPosition()}getPinchDistance(t){let n=t[0].clientX-t[1].clientX,r=t[0].clientY-t[1].clientY;return Math.sqrt(n*n+r*r)}updateCameraPosition(){let t=this.cameraTarget.x+this.cameraRadius*Math.sin(this.cameraPolar)*Math.sin(this.cameraAzimuth),n=this.cameraTarget.y+this.cameraRadius*Math.cos(this.cameraPolar),r=this.cameraTarget.z+this.cameraRadius*Math.sin(this.cameraPolar)*Math.cos(this.cameraAzimuth);this.camera.position.set(t,n,r),this.camera.lookAt(this.cameraTarget)}initThree(){this.signPanels=[];let t=this.canvasRef.nativeElement;this.scene=new ho,this.addSky(),this.addTrees(),this.addBahnhofLampPost(),this.camera=new jt(75,window.innerWidth/window.innerHeight,.1,1e3),this.listener=new wo,this.camera.add(this.listener),this.updateCameraPosition(),this.addTrainTracks(),this.addTrain(),this.addPlatformDetails(),this.addPlatformRoof(),this.renderer=new rc({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hl;let n=new yo(4210768,526368,1.3);this.scene.add(n);let r=new Mo(4214880,1.8);r.position.set(10,15,10),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,this.scene.add(r),this.addAwningLights(),this.addPlatformLights(),this.addStreetLights();let s=new ee(new sn(30,30),new Ee({color:3355460,emissive:34,emissiveIntensity:.5}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.createMainBuilding(),this.createScreenPanel(),this.addCharacters(),this.addMenuBoard(),this.addTableDetails(),this.addBusStop(),this.addBus()}syncPanel(){if(!this.screenPanel)return;let t=new L;this.screenPanel.getWorldPosition(t);let n=t.project(this.camera),r=(n.x*.5+.5)*this.canvasRef.nativeElement.clientWidth,s=(n.y*-.5+.5)*this.canvasRef.nativeElement.clientHeight;this.isZooming||this.camera.position.distanceTo(this.screenPanel.position)<5?n.z<1?this.syncService.updatePanelState({visible:!0,transform:`translate(-50%, -50%) translate(${r}px, ${s}px)`}):this.syncService.updatePanelState({visible:!1,transform:""}):this.syncService.updatePanelState({visible:!1,transform:""})}createScreenPanel(){let t=new sn(8,5),n=new rn({visible:!1});this.screenPanel=new ee(t,n),this.screenPanel.position.set(0,1.5,-2.04),this.scene.add(this.screenPanel)}addBus(){let t=new Mt,n=new Ee({color:21922,metalness:.7,roughness:.4}),r=new Ee({color:16777215,metalness:.2,roughness:.1,transparent:!0,opacity:.3}),s=new Ee({color:2236962,metalness:.1}),o=new ee(new Ge(8,2.5,2.2),n);o.position.y=1.5,o.castShadow=!1,t.add(o);let a=new Rt(.5,.5,.3,32);a.rotateX(Math.PI/2),[-2.5,2.5].forEach(w=>{[-1.1,1.1].forEach(b=>{let M=new ee(a,s);M.position.set(w,.5,b),t.add(M)})});let c=new ee(new Ge(6,1.2,.1),r);c.position.set(0,2,1.1),t.add(c);let u=c.clone();u.position.z=-1.1,t.add(u);let h=new ee(new Ge(.1,1.2,2),r);h.position.set(3.95,2,0),h.rotation.y=Math.PI/12,t.add(h),[-.8,.8].forEach(w=>{let b=new ee(new Rt(.2,.15,.1),new Ee({color:16777215,emissive:16777215,emissiveIntensity:1.5}));b.position.set(3.95,1,w),b.rotation.z=Math.PI/2,t.add(b);let M=new ls(16777215,4,20,Math.PI/5,.5,2);M.position.set(4,1,w),M.target.position.set(10,1,w),t.add(M),t.add(M.target)});let d=this.createBusNumberTexture(),m=new rn({map:d}),g=new ee(new sn(1,.4),m);g.position.set(4.01,2.5,0),g.rotation.y=Math.PI/2,t.add(g);let v=this.createRMVLogoTexture(),p=new rn({map:v,transparent:!0}),f=new ee(new sn(1.5,.5),p);f.position.set(-1,1.5,1.11),t.add(f),t.position.set(10,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusNumberTexture(){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle="black",n.fillRect(0,0,t.width,t.height),n.font='bold 45px "Courier New", Courier, monospace',n.fillStyle="#FFA500",n.textAlign="center",n.textBaseline="middle",n.fillText("801",t.width/2,t.height/2);let r=new Jn(t);return r.needsUpdate=!0,r}createRMVLogoTexture(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.fillStyle="#D9000D",n.fillRect(20,20,60,88),n.fillStyle="#009650",n.fillRect(90,20,60,88),n.fillStyle="#006AB3",n.fillRect(160,20,60,88),n.font="bold 80px sans-serif",n.fillStyle="black",n.textAlign="left",n.textBaseline="middle",n.fillText("RMV",250,t.height/2);let r=new Jn(t);return r.needsUpdate=!0,r}addBusStop(){let t=new Mt,n=new Ee({color:4473924,metalness:.9,roughness:.5}),r=new Ee({color:16777215,metalness:.1,roughness:.1,transparent:!0,opacity:.2}),s=new ee(new Ge(4,.1,2),n);s.position.y=2.5,s.castShadow=!0,t.add(s);let o=new ee(new Ge(4,2.4,.05),r);o.position.set(0,1.25,-.9),t.add(o);let a=new ee(new Ge(.05,2.4,2),r);a.position.set(-1.95,1.25,0),t.add(a);let l=16767129,c=new pi(l,3,8,2);c.position.set(0,2.4,-.4),c.castShadow=!0,t.add(c);let u=new ee(new Ge(1.5,.05,.2),new Ee({color:3355443,emissive:l,emissiveIntensity:1}));u.position.copy(c.position),t.add(u);let h=this.createBench();h.scale.set(.8,.8,.8),h.position.set(0,.2,-.5),t.add(h);let d=new ee(new Rt(.05,.05,3,16),n);d.position.set(2.5,1.5,0),d.castShadow=!0,t.add(d);let m=new as(.4,32),g=this.createBusSignTexture(),v=new rn({map:g}),p=new ee(m,v);p.position.set(2.5,3.2,0),t.add(p);let f=this.createBusSignTexture(!0),w=new rn({map:f}),b=new ee(m,w);b.position.copy(p.position),b.rotation.y=Math.PI,t.add(b),t.position.set(14,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusSignTexture(t=!1){let n=document.createElement("canvas");n.width=256,n.height=256;let r=n.getContext("2d");r.fillStyle="#FFD700",r.beginPath(),r.arc(128,128,128,0,Math.PI*2),r.fill(),r.strokeStyle="black",r.lineWidth=20,r.beginPath(),r.arc(128,128,118,0,Math.PI*2),r.stroke(),t&&(r.translate(n.width,0),r.scale(-1,1)),r.font="bold 150px sans-serif",r.fillStyle="black",r.textAlign="center",r.textBaseline="middle",r.fillText("H",128,128);let s=new Jn(n);return s.needsUpdate=!0,s}createMainBuilding(){let t=new Mt,n=new Ee({color:9132587}),r=new ee(new Ge(6,4,.1),n);r.position.set(0,2,-2),r.castShadow=!0,r.receiveShadow=!0,t.add(r);let s=new ee(new Ge(.1,4,4),n);s.position.set(3,2,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new ee(new po(4.5,2,4),new Ee({color:5967374}));o.rotation.y=Math.PI/4,o.position.y=5,o.castShadow=!0,t.add(o);let a=new ee(new sn(5.8,3.8),new Ee({color:13808780}));a.rotation.x=-Math.PI/2,a.position.y=.01,a.receiveShadow=!0,t.add(a);let l=new ee(new Ge(3,1,.8),new Ee({color:9127187}));l.position.set(0,.5,1.8),l.castShadow=!0,l.receiveShadow=!0,t.add(l);let c=6,u=1.5,h=.1,d=new Ge(c,h,u),m=new Ee({color:16777215,transparent:!0,opacity:.5,metalness:.2,roughness:.4}),g=new ee(d,m);g.position.set(0,3.2,2+u/2),g.rotation.x=Math.PI/10,g.castShadow=!0,g.receiveShadow=!0,t.add(g);let v=new Rt(.05,.05,3.2),p=new Ee({color:13421772,metalness:.9}),f=new ee(v,p);f.position.set(-c/2+.1,1.6,2.3),f.castShadow=!0,t.add(f);let w=new ee(v,p);w.position.set(c/2-.1,1.6,2.3),w.castShadow=!0,t.add(w);let b=new ee(new Rt(.7,.7,.1,16),new Ee({color:7032635}));b.position.set(0,1,0),b.castShadow=!0,b.receiveShadow=!0,t.add(b);let M=new Ee({color:6636321});[-.8,.8].forEach(W=>{let z=new ee(new Ge(.4,.4,.4),M);z.position.set(W,.2,0),z.castShadow=!0,z.receiveShadow=!0,t.add(z)});let I=new Rt(.05,.05,.3,16);[16711680,65280].forEach((W,z)=>{let Z=new ee(I,new Ee({color:W}));Z.position.set(z===0?-.2:.2,1.15,z===0?-.1:.2),Z.castShadow=!0,t.add(Z)});for(let W=0;W<5;W++){let z=new ee(new Ge(.05,.01,.01),new Ee({color:16776960}));z.position.set(-.1+W*.05,1.16,0),z.castShadow=!0,t.add(z)}let C=new ee(new Ge(.5,1.5,.3),new Ee({color:3355443}));C.position.set(2.7,1,1.6),C.castShadow=!0,t.add(C);let T=new Ee({color:8900331,transparent:!0,opacity:.5,roughness:.1,metalness:.9}),D=new Ee({color:4473924}),S=()=>{let W=new Mt,z=new ee(new sn(1,1.2),T);W.add(z);let Z=new ee(new Ge(1.1,.05,.1),D);Z.position.y=.6,W.add(Z);let H=Z.clone();H.position.y=-.6,W.add(H);let se=new ee(new Ge(.05,1.2,.1),D);se.position.x=-.5,W.add(se);let de=se.clone();return de.position.x=.5,W.add(de),W},x=S();x.position.set(-1.5,2.5,-1.95),t.add(x);let R=S();R.position.set(1.5,2.5,-1.95),t.add(R);let V=new Ee({color:6044193}),U=new ee(new Ge(.1,2,1),V);U.position.set(2.95,1,-.5),t.add(U);let X=new ee(new zn(.05,8,8),new Ee({color:16766720,metalness:1}));X.position.set(2.85,1,-.2),t.add(X),this.scene.add(t)}addCharacters(){let t=new Ee({color:2003199}),n=()=>{let o=new Mt,a=new ee(new Ge(.5,.8,.3),t);a.castShadow=!0,o.add(a);let l=new ee(new Ge(.3,.3,.3),t);return l.position.y=.6,l.castShadow=!0,o.add(l),o},r=n();r.position.set(-.8,.8,0),this.scene.add(r);let s=n();s.position.set(.8,.8,0),s.rotation.y=Math.PI,this.scene.add(s)}addMenuBoard(){let t=new Mt,n=new Ee({color:2236962,metalness:.9,roughness:.4}),r=new ee(new Rt(.8,.8,.05,32),n);r.castShadow=!0,t.add(r);let s=new ee(new Rt(.08,.08,1.5,16),n);s.position.y=.75,s.castShadow=!0,t.add(s);let o=new Mt;o.position.y=1.5+.9,o.rotation.x=-Math.PI/12,t.add(o);let a=new ee(new Ge(2.5,1.8,.08),n);a.castShadow=!0,o.add(a);let l=new Ee({color:0,emissive:1118481,emissiveIntensity:1.5}),c=new ee(new sn(2.4,1.7),l);c.position.z=.045,o.add(c);let u=[{label:"Profil",text:"About Me"},{label:"Daten",text:"Data"},{label:"Skills",text:"Skills"},{label:"SoftSkills",text:"Soft Skills"},{label:"Projekte",text:"Projects"},{label:"Akademisch",text:"Academic"},{label:"Sprachen",text:"Languages"},{label:"Erfahrung",text:"Experience"}],h=.18,d=.02,g=(u.length*(h+d)-d)/2-h/2;u.forEach((v,p)=>{let f=new sn(2.2,h),w=this.createMenuItemTexture(v.text,!1,!1),b=new rn({map:w,transparent:!0}),M=new ee(f,b),I=g-p*(h+d);M.position.set(0,I,.05),o.add(M),this.signPanels.push({mesh:M,label:v.label,text:v.text})}),t.position.set(4.3,0,2.2),t.scale.set(.8,.8,.8),this.scene.add(t)}createMenuItemTexture(t,n,r){let s=document.createElement("canvas");s.width=512,s.height=64;let o=s.getContext("2d"),a=n?"#00bfff":r?"#007acc":"#1a1a1a",l=n||r?"#ffffff":"#00bfff";o.fillStyle=a,o.fillRect(0,0,s.width,s.height),r&&!n&&(o.strokeStyle="#00bfff",o.lineWidth=8,o.strokeRect(0,0,s.width,s.height)),o.font="bold 40px sans-serif",o.fillStyle=l,o.textAlign="center",o.textBaseline="middle",o.fillText(t,s.width/2,s.height/2);let c=new Jn(s);return c.needsUpdate=!0,c}updateMenuItemTexture(t,n,r,s){let o=t.material;o.map=this.createMenuItemTexture(n,r,s)}addTableDetails(){let t=new Ee({color:15658734,roughness:.3}),n=new Rt(.08,.1,.15,16),r=new Ee({color:13421772,roughness:.3}),s=new Rt(.15,.15,.02,16),o=new ee(n,t);o.position.set(-.2,1.08,.1),this.scene.add(o);let a=new ee(s,r);a.position.set(.2,1.01,-.1),this.scene.add(a)}addAwningLights(){let t=new Mt,n=16767129,r=9,s=8,o=2,a=[-2,0,2];for(let l of a){let c=new pi(n,r,s,o);c.position.set(l,3,2.5),c.castShadow=!0,t.add(c);let u=new ee(new zn(.1,8,8),new Ee({color:5592405,emissive:n,emissiveIntensity:1}));u.position.copy(c.position),t.add(u)}this.scene.add(t)}addPlatformLights(){let t=new Mt,n=16767129,r=4,s=8,o=2,a=[-7,0,7];for(let l of a){let c=new pi(n,r,s,o);c.position.set(-12.5,3.2,l),c.castShadow=!0,t.add(c);let u=new ee(new Ge(.2,.1,.2),new Ee({color:3355443,emissive:n,emissiveIntensity:1}));u.position.copy(c.position),t.add(u)}this.scene.add(t)}addStreetLights(){let t=[new L(12,0,12),new L(12,0,-12),new L(-10,0,12),new L(-10,0,-12)],n=new Ee({color:3355443,metalness:.8}),r=new Ee({color:16777215,emissive:16767129,emissiveIntensity:2}),s=o=>{let a=new Mt,l=new Rt(.1,.15,4,16),c=new ee(l,n);c.position.y=2,c.castShadow=!0,a.add(c);let u=new Ge(1,.1,.1),h=new ee(u,n);h.position.set(.5,4,0),h.castShadow=!0,a.add(h);let d=new zn(.2,16,16),m=new ee(d,r);m.position.set(1,3.8,0),a.add(m);let g=new pi(16767129,7.5,15,2);g.position.copy(m.position),g.castShadow=!0,a.add(g),a.position.copy(o),a.rotation.y=Math.atan2(o.x,o.z)+Math.PI,this.scene.add(a)};t.forEach(o=>s(o))}addTrainTracks(){let t=new Mt,n=new Ge(3,.2,15),r=new Ee({color:8947848}),s=new ee(n,r);s.position.set(-12.5,.1,0),s.receiveShadow=!0,t.add(s);let o=new Ge(.2,.05,2),a=new Ee({color:7032635});for(let d=-15;d<15;d+=.8){let m=new ee(o,a);m.position.set(-14.5,.05,d),m.receiveShadow=!0,t.add(m)}let l=new Ge(.08,.08,30),c=new Ee({color:4473924,metalness:.8,roughness:.5}),u=new ee(l,c);u.position.set(-14.2,.12,0),u.castShadow=!0,t.add(u);let h=new ee(l,c);h.position.set(-14.8,.12,0),h.castShadow=!0,t.add(h),this.scene.add(t)}addTrain(){let t=new Mt;t.position.set(-14.5,.35,0),t.rotation.y=Math.PI/2;let n=14360358,r=new Ee({color:n,metalness:.8,roughness:.4}),s=new Ee({color:13421772,metalness:.6,roughness:.5}),o=new Ee({color:3355443,metalness:.9,roughness:.8}),a=new Ee({color:1118481,metalness:1,roughness:.2}),l=new Rt(.25,.25,1.2,16);l.rotateX(Math.PI/2);let c=new Mt,u=new ee(new Ge(4,1.2,1),r);u.position.y=.6,u.castShadow=!0,c.add(u);let h=this.createDBLogoTexture(),d=new rn({map:h,transparent:!0}),m=new ee(new sn(.8,.8),d);m.position.set(0,.7,.51),c.add(m);let g=new ee(new Ge(1.5,.8,1),new Ee({color:4473924}));g.position.set(-1.25,1.4,0),g.castShadow=!0,c.add(g);let v=new ee(new Ge(.05,.5,.8),a);v.position.set(-1.95,1.4,0),c.add(v);let p=new ee(new Rt(.15,.1,.1),new Ee({color:16777215,emissive:16777215,emissiveIntensity:2}));p.position.set(-2,.8,0),p.rotation.z=Math.PI/2,c.add(p);let f=new ls(16777215,5,20,Math.PI/6,.5,2);f.position.set(-2,.8,0),f.target.position.set(-10,.8,0),c.add(f),c.add(f.target);for(let T=0;T<2;T++){let D=new ee(l,o);D.position.set(-1+T*2,0,0),c.add(D)}c.position.x=-10,t.add(c);let w=5,b=1.1,M=1.4,I=.5,C=-10+4/2+I+w/2;for(let T=0;T<2;T++){let D=new Mt,S=new ee(new Ge(w,M,b),s);S.position.y=.7,S.castShadow=!0,D.add(S);for(let x=-1;x<=1;x+=2)for(let R=-1.5;R<=1.5;R+=1){let V=new ee(new Ge(.8,.5,.05),a);V.position.set(R,.9,b/2*x),D.add(V)}for(let x=0;x<2;x++){let R=new ee(l,o);R.position.set(-1.5+x*3,0,0),D.add(R)}D.position.x=C,t.add(D),C+=w+I}this.scene.add(t)}createDBLogoTexture(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.font="bold 180px sans-serif",n.fillStyle="#DB1F26",n.textAlign="center",n.textBaseline="middle",n.fillText("DB",t.width/2,t.height/2);let r=new Jn(t);return r.needsUpdate=!0,r}createBench(){let t=new Mt,n=new Ee({color:8411718}),r=new ee(new Ge(2,.1,.4),n);r.position.y=.5,r.castShadow=!0,t.add(r);let s=new ee(new Ge(2,.5,.1),n);s.position.set(0,.8,-.15),s.castShadow=!0,t.add(s);let o=new ee(new Ge(.1,.5,.4),n);o.position.set(-.9,.25,0),o.castShadow=!0,t.add(o);let a=o.clone();return a.position.x=.9,t.add(a),t}addPlatformDetails(){let t=this.createBench();t.position.set(-12.2,.2,-4),t.rotation.y=-Math.PI/2,this.scene.add(t);let n=this.createBench();n.position.set(-12.2,.2,4),n.rotation.y=-Math.PI/2,this.scene.add(n)}addPlatformRoof(){let t=new Mt,n=new Ee({color:6710886,metalness:.5}),r=new Ee({color:5592405,metalness:.8}),s=new ee(new Ge(4,.2,16),n);s.position.set(-12.5,3.5,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new Rt(.1,.1,3.3,16),a=[-6,0,6];for(let l of a){let c=new ee(o,r);c.position.set(-11.5,1.85,l),c.castShadow=!0,t.add(c);let u=new ee(o,r);u.position.set(-13.5,1.85,l),u.castShadow=!0,t.add(u)}this.scene.add(t)}addTrees(){let t=new Mt,n=new Rt(.1,.1,1),r=new Ee({color:9132587}),s=new zn(.5,8,8),o=new Ee({color:2263842});[[-5,.5,-5],[5,.5,-5],[5,.5,5]].forEach(l=>{let c=new ee(n,r);c.position.set(l[0],l[1]/2,l[2]);let u=new ee(s,o);u.position.set(l[0],l[1]+.5,l[2]),t.add(c),t.add(u)}),this.scene.add(t)}animateLeaves(){let t=Date.now()*.001;this.scene.traverse(n=>{if(n instanceof ee&&n.geometry instanceof zn&&!Array.isArray(n.material)){let r=n.material;r.color&&r.color.getHex()===2263842&&(n.position.x+=Math.sin(t+n.position.z)*.001,n.position.z+=Math.cos(t+n.position.x)*.001)}})}addSky(){let t=new zn(100,32,32),n=new xn({uniforms:{},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          gl_FragColor = vec4(mix(vec3(0.0, 0.0, 0.0), vec3(0.05, 0.0, 0.1), smoothstep(0.0, 0.5, h)), 1.0);
        }
      `,side:Kt,depthWrite:!1}),r=new ee(t,n);this.scene.add(r)}addBahnhofLampPost(){let t=new Mt,n=new ee(new Rt(.08,.08,5,16),new Ee({color:2236962,metalness:1}));n.position.y=2.5,t.add(n);let r=new vo().load("assets/clock-bahnhof.jpg"),s=new rn({map:r,side:Dn}),o=new ee(new as(.5,32),s);o.position.set(0,3.8,.48),t.add(o);let a=new ee(new Ge(.05,.05,.5),new Ee({color:4473924}));a.position.set(0,3.8,.25),t.add(a);let l=.5;[-.25,.25].forEach(d=>{let m=new ee(new Rt(.015,.015,l),new Ee({color:8947848}));m.rotation.z=Math.PI/2,m.position.set(d,4.6,0),t.add(m);let g=new ee(new Rt(.01,.01,.2),new Ee({color:3355443}));g.position.set(d+(d>0?l/2:-l/2),4.5,0),t.add(g);let v=new ee(new zn(.15,16,16),new Ee({color:16777164,emissive:16764040,emissiveIntensity:.9}));v.position.set(d+(d>0?l/2:-l/2),4.3,0),t.add(v);let p=new pi(16764040,.6,6);p.position.copy(v.position),t.add(p)});let c=["Profil","Daten","Skills","SoftSkills","Projekte","Akademisch","Sprachen","Erfahrung"],u=[Math.PI/2,Math.PI/3,-Math.PI/2,-Math.PI/3,0,Math.PI/4,-Math.PI/4,Math.PI],h=(d,m=!1)=>{let g=document.createElement("canvas");g.width=512,g.height=128;let v=g.getContext("2d");v.fillStyle="#ffffff",v.fillRect(0,0,g.width,g.height),v.font="bold 48px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillStyle="#000000",m&&(v.translate(g.width,0),v.scale(-1,1)),v.fillText(d,g.width/2,g.height/2);let p=new Jn(g);return p.needsUpdate=!0,p};c.forEach((d,m)=>{let g=new sn(1.4,.3),v=new rn({map:h(d),side:Pn}),p=new rn({map:h(d,!0),side:Pn}),f=new ee(g,v);f.position.set(0,3.3-m*.4,0),f.rotation.y=u[m],f.translateX(.7),t.add(f);let w=new ee(g,p);w.position.copy(f.position),w.rotation.copy(f.rotation),w.rotateY(Math.PI),t.add(w),this.signPanels.push({mesh:f,label:d,text:d})}),t.position.set(-5.5,0,5),this.scene.add(t)}static{this.\u0275fac=function(n){return new(n||i)(tt(Gn),tt(_a),tt(Wt),tt(oc))}}static{this.\u0275cmp=It({type:i,selectors:[["app-three-scene"]],viewQuery:function(n,r){if(n&1&&Ad(yb,7),n&2){let s;bc(s=wc())&&(r.canvasRef=s.first)}},standalone:!0,features:[Lt],decls:2,vars:0,consts:[["canvas",""],[2,"cursor","grab"]],template:function(n,r){n&1&&Ue(0,"canvas",1,0)},styles:["canvas[_ngcontent-%COMP%]{width:100%;height:100vh;display:block}"]})}}return i})();var Km=(()=>{class i{constructor(t){this.syncService=t,this.title="Ezechiel-portfolio",this.panelState={visible:!1,transform:""}}ngOnInit(){this.panelSub=this.syncService.panelState$.subscribe(t=>{this.panelState=t})}ngOnDestroy(){this.panelSub&&this.panelSub.unsubscribe()}static{this.\u0275fac=function(n){return new(n||i)(tt(oc))}}static{this.\u0275cmp=It({type:i,selectors:[["app-root"]],standalone:!0,features:[Lt],decls:12,vars:4,consts:[[1,"html-panel"],[1,"fixed","bottom-4","left-4","z-20","flex","space-x-4"],["href","https://github.com/Ezechiel197","target","_blank",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-github"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],[1,"fixed","bottom-4","right-4","z-20","flex","items-center","space-x-4"],["href","mailto:ezechiel146@gmail.com",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-mail"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"]],template:function(n,r){n&1&&(Ue(0,"app-three-scene"),j(1,"div",0),Ue(2,"router-outlet"),ie(),j(3,"div",1)(4,"a",2),Ze(),j(5,"svg",3),Ue(6,"path",4),ie()()(),xt(),j(7,"div",5)(8,"a",6),Ze(),j(9,"svg",7),Ue(10,"path",8)(11,"polyline",9),ie()()()),n&2&&(me(),zo("transform",r.panelState.transform),bs("visible",r.panelState.visible))},dependencies:[Bt,Su,Jm],styles:[".html-panel[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:800px;height:500px;background-color:#1a202ce6;border-radius:12px;box-shadow:0 10px 30px #00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);pointer-events:none;opacity:0;transition:opacity .4s ease,transform .4s ease;will-change:transform,opacity;z-index:10;overflow:hidden}.html-panel.visible[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}@media (max-width: 850px){.html-panel[_ngcontent-%COMP%]{width:95vw;height:80vh}}"]})}}return i})();lf(Km,sp).catch(i=>console.error(i));
