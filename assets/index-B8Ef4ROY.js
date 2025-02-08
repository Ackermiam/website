var vm=Object.defineProperty;var xm=(s,t,n)=>t in s?vm(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var pe=(s,t,n)=>xm(s,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jc(s){const t=Object.create(null);for(const n of s.split(","))t[n]=1;return n=>n in t}const mt={},ks=[],Gn=()=>{},ym=()=>!1,xa=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&(s.charCodeAt(2)>122||s.charCodeAt(2)<97),Zc=s=>s.startsWith("onUpdate:"),zt=Object.assign,Qc=(s,t)=>{const n=s.indexOf(t);n>-1&&s.splice(n,1)},Mm=Object.prototype.hasOwnProperty,at=(s,t)=>Mm.call(s,t),Ge=Array.isArray,zs=s=>ya(s)==="[object Map]",Zd=s=>ya(s)==="[object Set]",qe=s=>typeof s=="function",At=s=>typeof s=="string",Ui=s=>typeof s=="symbol",yt=s=>s!==null&&typeof s=="object",Qd=s=>(yt(s)||qe(s))&&qe(s.then)&&qe(s.catch),ef=Object.prototype.toString,ya=s=>ef.call(s),Sm=s=>ya(s).slice(8,-1),tf=s=>ya(s)==="[object Object]",eh=s=>At(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Lr=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=s=>{const t=Object.create(null);return n=>t[n]||(t[n]=s(n))},bm=/-(\w)/g,Ni=Ma(s=>s.replace(bm,(t,n)=>n?n.toUpperCase():"")),Em=/\B([A-Z])/g,as=Ma(s=>s.replace(Em,"-$1").toLowerCase()),nf=Ma(s=>s.charAt(0).toUpperCase()+s.slice(1)),Ha=Ma(s=>s?`on${nf(s)}`:""),Ii=(s,t)=>!Object.is(s,t),Va=(s,...t)=>{for(let n=0;n<s.length;n++)s[n](...t)},sf=(s,t,n,i=!1)=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Tm=s=>{const t=parseFloat(s);return isNaN(t)?s:t};let Yh;const Sa=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ys(s){if(Ge(s)){const t={};for(let n=0;n<s.length;n++){const i=s[n],r=At(i)?Rm(i):Ys(i);if(r)for(const o in r)t[o]=r[o]}return t}else if(At(s)||yt(s))return s}const Am=/;(?![^(]*\))/g,wm=/:([^]+)/,Cm=/\/\*[^]*?\*\//g;function Rm(s){const t={};return s.replace(Cm,"").split(Am).forEach(n=>{if(n){const i=n.split(wm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ba(s){let t="";if(At(s))t=s;else if(Ge(s))for(let n=0;n<s.length;n++){const i=ba(s[n]);i&&(t+=i+" ")}else if(yt(s))for(const n in s)s[n]&&(t+=n+" ");return t.trim()}const Pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lm=Jc(Pm);function rf(s){return!!s||s===""}const of=s=>!!(s&&s.__v_isRef===!0),th=s=>At(s)?s:s==null?"":Ge(s)||yt(s)&&(s.toString===ef||!qe(s.toString))?of(s)?th(s.value):JSON.stringify(s,af,2):String(s),af=(s,t)=>of(t)?af(s,t.value):zs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],o)=>(n[Ga(i,o)+" =>"]=r,n),{})}:Zd(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ga(n))}:Ui(t)?Ga(t):yt(t)&&!Ge(t)&&!tf(t)?String(t):t,Ga=(s,t="")=>{var n;return Ui(s)?`Symbol(${(n=s.description)!=null?n:t})`:s};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class Im{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!t&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ln;try{return ln=this,t()}finally{ln=n}}}on(){ln=this}off(){ln=this.parent}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Dm(){return ln}let pt;const Wa=new WeakSet;class lf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kh(this),uf(this);const t=pt,n=In;pt=this,In=!0;try{return this.fn()}finally{df(this),pt=t,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)sh(t);this.deps=this.depsTail=void 0,Kh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zl(this)&&this.run()}get dirty(){return zl(this)}}let cf=0,Ir,Dr;function hf(s,t=!1){if(s.flags|=8,t){s.next=Dr,Dr=s;return}s.next=Ir,Ir=s}function nh(){cf++}function ih(){if(--cf>0)return;if(Dr){let t=Dr;for(Dr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let s;for(;Ir;){let t=Ir;for(Ir=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){s||(s=i)}t=n}}if(s)throw s}function uf(s){for(let t=s.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function df(s){let t,n=s.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),sh(i),Nm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}s.deps=t,s.depsTail=n}function zl(s){for(let t=s.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ff(t.dep.computed)||t.dep.version!==t.version))return!0;return!!s._dirty}function ff(s){if(s.flags&4&&!(s.flags&16)||(s.flags&=-17,s.globalVersion===Vr))return;s.globalVersion=Vr;const t=s.dep;if(s.flags|=2,t.version>0&&!s.isSSR&&s.deps&&!zl(s)){s.flags&=-3;return}const n=pt,i=In;pt=s,In=!0;try{uf(s);const r=s.fn(s._value);(t.version===0||Ii(r,s._value))&&(s._value=r,t.version++)}catch(r){throw t.version++,r}finally{pt=n,In=i,df(s),s.flags&=-3}}function sh(s,t=!1){const{dep:n,prevSub:i,nextSub:r}=s;if(i&&(i.nextSub=r,s.prevSub=void 0),r&&(r.prevSub=i,s.nextSub=void 0),n.subs===s&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)sh(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Nm(s){const{prevDep:t,nextDep:n}=s;t&&(t.nextDep=n,s.prevDep=void 0),n&&(n.prevDep=t,s.nextDep=void 0)}let In=!0;const pf=[];function Fi(){pf.push(In),In=!1}function Oi(){const s=pf.pop();In=s===void 0?!0:s}function Kh(s){const{cleanup:t}=s;if(s.cleanup=void 0,t){const n=pt;pt=void 0;try{t()}finally{pt=n}}}let Vr=0;class Um{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rh{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!pt||!In||pt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pt)n=this.activeLink=new Um(pt,this),pt.deps?(n.prevDep=pt.depsTail,pt.depsTail.nextDep=n,pt.depsTail=n):pt.deps=pt.depsTail=n,mf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pt.depsTail,n.nextDep=void 0,pt.depsTail.nextDep=n,pt.depsTail=n,pt.deps===n&&(pt.deps=i)}return n}trigger(t){this.version++,Vr++,this.notify(t)}notify(t){nh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ih()}}}function mf(s){if(s.dep.sc++,s.sub.flags&4){const t=s.dep.computed;if(t&&!s.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)mf(i)}const n=s.dep.subs;n!==s&&(s.prevSub=n,n&&(n.nextSub=s)),s.dep.subs=s}}const Hl=new WeakMap,ns=Symbol(""),Vl=Symbol(""),Gr=Symbol("");function Ft(s,t,n){if(In&&pt){let i=Hl.get(s);i||Hl.set(s,i=new Map);let r=i.get(n);r||(i.set(n,r=new rh),r.map=i,r.key=n),r.track()}}function li(s,t,n,i,r,o){const a=Hl.get(s);if(!a){Vr++;return}const l=c=>{c&&c.trigger()};if(nh(),t==="clear")a.forEach(l);else{const c=Ge(s),h=c&&eh(n);if(c&&n==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===Gr||!Ui(f)&&f>=u)&&l(d)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Gr)),t){case"add":c?h&&l(a.get("length")):(l(a.get(ns)),zs(s)&&l(a.get(Vl)));break;case"delete":c||(l(a.get(ns)),zs(s)&&l(a.get(Vl)));break;case"set":zs(s)&&l(a.get(ns));break}}ih()}function ps(s){const t=ot(s);return t===s?t:(Ft(t,"iterate",Gr),yn(s)?t:t.map(Ot))}function Ea(s){return Ft(s=ot(s),"iterate",Gr),s}const Fm={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,Ot)},concat(...s){return ps(this).concat(...s.map(t=>Ge(t)?ps(t):t))},entries(){return Xa(this,"entries",s=>(s[1]=Ot(s[1]),s))},every(s,t){return Zn(this,"every",s,t,void 0,arguments)},filter(s,t){return Zn(this,"filter",s,t,n=>n.map(Ot),arguments)},find(s,t){return Zn(this,"find",s,t,Ot,arguments)},findIndex(s,t){return Zn(this,"findIndex",s,t,void 0,arguments)},findLast(s,t){return Zn(this,"findLast",s,t,Ot,arguments)},findLastIndex(s,t){return Zn(this,"findLastIndex",s,t,void 0,arguments)},forEach(s,t){return Zn(this,"forEach",s,t,void 0,arguments)},includes(...s){return $a(this,"includes",s)},indexOf(...s){return $a(this,"indexOf",s)},join(s){return ps(this).join(s)},lastIndexOf(...s){return $a(this,"lastIndexOf",s)},map(s,t){return Zn(this,"map",s,t,void 0,arguments)},pop(){return pr(this,"pop")},push(...s){return pr(this,"push",s)},reduce(s,...t){return Jh(this,"reduce",s,t)},reduceRight(s,...t){return Jh(this,"reduceRight",s,t)},shift(){return pr(this,"shift")},some(s,t){return Zn(this,"some",s,t,void 0,arguments)},splice(...s){return pr(this,"splice",s)},toReversed(){return ps(this).toReversed()},toSorted(s){return ps(this).toSorted(s)},toSpliced(...s){return ps(this).toSpliced(...s)},unshift(...s){return pr(this,"unshift",s)},values(){return Xa(this,"values",Ot)}};function Xa(s,t,n){const i=Ea(s),r=i[t]();return i!==s&&!yn(s)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const Om=Array.prototype;function Zn(s,t,n,i,r,o){const a=Ea(s),l=a!==s&&!yn(s),c=a[t];if(c!==Om[t]){const d=c.apply(s,o);return l?Ot(d):d}let h=n;a!==s&&(l?h=function(d,f){return n.call(this,Ot(d),f,s)}:n.length>2&&(h=function(d,f){return n.call(this,d,f,s)}));const u=c.call(a,h,i);return l&&r?r(u):u}function Jh(s,t,n,i){const r=Ea(s);let o=n;return r!==s&&(yn(s)?n.length>3&&(o=function(a,l,c){return n.call(this,a,l,c,s)}):o=function(a,l,c){return n.call(this,a,Ot(l),c,s)}),r[t](o,...i)}function $a(s,t,n){const i=ot(s);Ft(i,"iterate",Gr);const r=i[t](...n);return(r===-1||r===!1)&&ch(n[0])?(n[0]=ot(n[0]),i[t](...n)):r}function pr(s,t,n=[]){Fi(),nh();const i=ot(s)[t].apply(s,n);return ih(),Oi(),i}const Bm=Jc("__proto__,__v_isRef,__isVue"),gf=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Ui));function km(s){Ui(s)||(s=String(s));const t=ot(this);return Ft(t,"has",s),t.hasOwnProperty(s)}class _f{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?Ym:Mf:o?yf:xf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Ge(t);if(!r){let c;if(a&&(c=Fm[n]))return c;if(n==="hasOwnProperty")return km}const l=Reflect.get(t,n,kt(t)?t:i);return(Ui(n)?gf.has(n):Bm(n))||(r||Ft(t,"get",n),o)?l:kt(l)?a&&eh(n)?l:l.value:yt(l)?r?Sf(l):ah(l):l}}class vf extends _f{constructor(t=!1){super(!1,t)}set(t,n,i,r){let o=t[n];if(!this._isShallow){const c=is(o);if(!yn(i)&&!is(i)&&(o=ot(o),i=ot(i)),!Ge(t)&&kt(o)&&!kt(i))return c?!1:(o.value=i,!0)}const a=Ge(t)&&eh(n)?Number(n)<t.length:at(t,n),l=Reflect.set(t,n,i,kt(t)?t:r);return t===ot(r)&&(a?Ii(i,o)&&li(t,"set",n,i):li(t,"add",n,i)),l}deleteProperty(t,n){const i=at(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&li(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Ui(n)||!gf.has(n))&&Ft(t,"has",n),i}ownKeys(t){return Ft(t,"iterate",Ge(t)?"length":ns),Reflect.ownKeys(t)}}class zm extends _f{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Hm=new vf,Vm=new zm,Gm=new vf(!0);const Gl=s=>s,ho=s=>Reflect.getPrototypeOf(s);function Wm(s,t,n){return function(...i){const r=this.__v_raw,o=ot(r),a=zs(o),l=s==="entries"||s===Symbol.iterator&&a,c=s==="keys"&&a,h=r[s](...i),u=n?Gl:t?Wl:Ot;return!t&&Ft(o,"iterate",c?Vl:ns),{next(){const{value:d,done:f}=h.next();return f?{value:d,done:f}:{value:l?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function uo(s){return function(...t){return s==="delete"?!1:s==="clear"?void 0:this}}function Xm(s,t){const n={get(r){const o=this.__v_raw,a=ot(o),l=ot(r);s||(Ii(r,l)&&Ft(a,"get",r),Ft(a,"get",l));const{has:c}=ho(a),h=t?Gl:s?Wl:Ot;if(c.call(a,r))return h(o.get(r));if(c.call(a,l))return h(o.get(l));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!s&&Ft(ot(r),"iterate",ns),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,a=ot(o),l=ot(r);return s||(Ii(r,l)&&Ft(a,"has",r),Ft(a,"has",l)),r===l?o.has(r):o.has(r)||o.has(l)},forEach(r,o){const a=this,l=a.__v_raw,c=ot(l),h=t?Gl:s?Wl:Ot;return!s&&Ft(c,"iterate",ns),l.forEach((u,d)=>r.call(o,h(u),h(d),a))}};return zt(n,s?{add:uo("add"),set:uo("set"),delete:uo("delete"),clear:uo("clear")}:{add(r){!t&&!yn(r)&&!is(r)&&(r=ot(r));const o=ot(this);return ho(o).has.call(o,r)||(o.add(r),li(o,"add",r,r)),this},set(r,o){!t&&!yn(o)&&!is(o)&&(o=ot(o));const a=ot(this),{has:l,get:c}=ho(a);let h=l.call(a,r);h||(r=ot(r),h=l.call(a,r));const u=c.call(a,r);return a.set(r,o),h?Ii(o,u)&&li(a,"set",r,o):li(a,"add",r,o),this},delete(r){const o=ot(this),{has:a,get:l}=ho(o);let c=a.call(o,r);c||(r=ot(r),c=a.call(o,r)),l&&l.call(o,r);const h=o.delete(r);return c&&li(o,"delete",r,void 0),h},clear(){const r=ot(this),o=r.size!==0,a=r.clear();return o&&li(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Wm(r,s,t)}),n}function oh(s,t){const n=Xm(s,t);return(i,r,o)=>r==="__v_isReactive"?!s:r==="__v_isReadonly"?s:r==="__v_raw"?i:Reflect.get(at(n,r)&&r in i?n:i,r,o)}const $m={get:oh(!1,!1)},qm={get:oh(!1,!0)},jm={get:oh(!0,!1)};const xf=new WeakMap,yf=new WeakMap,Mf=new WeakMap,Ym=new WeakMap;function Km(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jm(s){return s.__v_skip||!Object.isExtensible(s)?0:Km(Sm(s))}function ah(s){return is(s)?s:lh(s,!1,Hm,$m,xf)}function Zm(s){return lh(s,!1,Gm,qm,yf)}function Sf(s){return lh(s,!0,Vm,jm,Mf)}function lh(s,t,n,i,r){if(!yt(s)||s.__v_raw&&!(t&&s.__v_isReactive))return s;const o=r.get(s);if(o)return o;const a=Jm(s);if(a===0)return s;const l=new Proxy(s,a===2?i:n);return r.set(s,l),l}function Hs(s){return is(s)?Hs(s.__v_raw):!!(s&&s.__v_isReactive)}function is(s){return!!(s&&s.__v_isReadonly)}function yn(s){return!!(s&&s.__v_isShallow)}function ch(s){return s?!!s.__v_raw:!1}function ot(s){const t=s&&s.__v_raw;return t?ot(t):s}function Qm(s){return!at(s,"__v_skip")&&Object.isExtensible(s)&&sf(s,"__v_skip",!0),s}const Ot=s=>yt(s)?ah(s):s,Wl=s=>yt(s)?Sf(s):s;function kt(s){return s?s.__v_isRef===!0:!1}function Xn(s){return eg(s,!1)}function eg(s,t){return kt(s)?s:new tg(s,t)}class tg{constructor(t,n){this.dep=new rh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ot(t),this._value=n?t:Ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||yn(t)||is(t);t=i?t:ot(t),Ii(t,n)&&(this._rawValue=t,this._value=i?t:Ot(t),this.dep.trigger())}}function Cn(s){return kt(s)?s.value:s}const ng={get:(s,t,n)=>t==="__v_raw"?s:Cn(Reflect.get(s,t,n)),set:(s,t,n,i)=>{const r=s[t];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(s,t,n,i)}};function bf(s){return Hs(s)?s:new Proxy(s,ng)}class ig{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return hf(this,!0),!0}get value(){const t=this.dep.track();return ff(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sg(s,t,n=!1){let i,r;return qe(s)?i=s:(i=s.get,r=s.set),new ig(i,r,n)}const fo={},oa=new WeakMap;let Ki;function rg(s,t=!1,n=Ki){if(n){let i=oa.get(n);i||oa.set(n,i=[]),i.push(s)}}function og(s,t,n=mt){const{immediate:i,deep:r,once:o,scheduler:a,augmentJob:l,call:c}=n,h=x=>r?x:yn(x)||r===!1||r===0?wi(x,1):wi(x);let u,d,f,p,_=!1,v=!1;if(kt(s)?(d=()=>s.value,_=yn(s)):Hs(s)?(d=()=>h(s),_=!0):Ge(s)?(v=!0,_=s.some(x=>Hs(x)||yn(x)),d=()=>s.map(x=>{if(kt(x))return x.value;if(Hs(x))return h(x);if(qe(x))return c?c(x,2):x()})):qe(s)?t?d=c?()=>c(s,2):s:d=()=>{if(f){Fi();try{f()}finally{Oi()}}const x=Ki;Ki=u;try{return c?c(s,3,[p]):s(p)}finally{Ki=x}}:d=Gn,t&&r){const x=d,L=r===!0?1/0:r;d=()=>wi(x(),L)}const g=Dm(),m=()=>{u.stop(),g&&g.active&&Qc(g.effects,u)};if(o&&t){const x=t;t=(...L)=>{x(...L),m()}}let T=v?new Array(s.length).fill(fo):fo;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const L=u.run();if(r||_||(v?L.some((I,P)=>Ii(I,T[P])):Ii(L,T))){f&&f();const I=Ki;Ki=u;try{const P=[L,T===fo?void 0:v&&T[0]===fo?[]:T,p];c?c(t,3,P):t(...P),T=L}finally{Ki=I}}}else u.run()};return l&&l(S),u=new lf(d),u.scheduler=a?()=>a(S,!1):S,p=x=>rg(x,!1,u),f=u.onStop=()=>{const x=oa.get(u);if(x){if(c)c(x,4);else for(const L of x)L();oa.delete(u)}},t?i?S(!0):T=u.run():a?a(S.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function wi(s,t=1/0,n){if(t<=0||!yt(s)||s.__v_skip||(n=n||new Set,n.has(s)))return s;if(n.add(s),t--,kt(s))wi(s.value,t,n);else if(Ge(s))for(let i=0;i<s.length;i++)wi(s[i],t,n);else if(Zd(s)||zs(s))s.forEach(i=>{wi(i,t,n)});else if(tf(s)){for(const i in s)wi(s[i],t,n);for(const i of Object.getOwnPropertySymbols(s))Object.prototype.propertyIsEnumerable.call(s,i)&&wi(s[i],t,n)}return s}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(s,t,n,i){try{return i?s(...i):s()}catch(r){Ta(r,t,n)}}function $n(s,t,n,i){if(qe(s)){const r=to(s,t,n,i);return r&&Qd(r)&&r.catch(o=>{Ta(o,t,n)}),r}if(Ge(s)){const r=[];for(let o=0;o<s.length;o++)r.push($n(s[o],t,n,i));return r}}function Ta(s,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||mt;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](s,c,h)===!1)return}l=l.parent}if(o){Fi(),to(o,null,10,[s,c,h]),Oi();return}}ag(s,n,r,i,a)}function ag(s,t,n,i=!0,r=!1){if(r)throw s;console.error(s)}const Xt=[];let On=-1;const Vs=[];let Ti=null,Is=0;const Ef=Promise.resolve();let aa=null;function lg(s){const t=aa||Ef;return s?t.then(this?s.bind(this):s):t}function cg(s){let t=On+1,n=Xt.length;for(;t<n;){const i=t+n>>>1,r=Xt[i],o=Wr(r);o<s||o===s&&r.flags&2?t=i+1:n=i}return t}function hh(s){if(!(s.flags&1)){const t=Wr(s),n=Xt[Xt.length-1];!n||!(s.flags&2)&&t>=Wr(n)?Xt.push(s):Xt.splice(cg(t),0,s),s.flags|=1,Tf()}}function Tf(){aa||(aa=Ef.then(wf))}function hg(s){Ge(s)?Vs.push(...s):Ti&&s.id===-1?Ti.splice(Is+1,0,s):s.flags&1||(Vs.push(s),s.flags|=1),Tf()}function Zh(s,t,n=On+1){for(;n<Xt.length;n++){const i=Xt[n];if(i&&i.flags&2){if(s&&i.id!==s.uid)continue;Xt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Af(s){if(Vs.length){const t=[...new Set(Vs)].sort((n,i)=>Wr(n)-Wr(i));if(Vs.length=0,Ti){Ti.push(...t);return}for(Ti=t,Is=0;Is<Ti.length;Is++){const n=Ti[Is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ti=null,Is=0}}const Wr=s=>s.id==null?s.flags&2?-1:1/0:s.id;function wf(s){try{for(On=0;On<Xt.length;On++){const t=Xt[On];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),to(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;On<Xt.length;On++){const t=Xt[On];t&&(t.flags&=-2)}On=-1,Xt.length=0,Af(),aa=null,(Xt.length||Vs.length)&&wf()}}let Vn=null,Cf=null;function la(s){const t=Vn;return Vn=s,Cf=s&&s.type.__scopeId||null,t}function ug(s,t=Vn,n){if(!t||s._n)return s;const i=(...r)=>{i._d&&au(-1);const o=la(t);let a;try{a=s(...r)}finally{la(o),i._d&&au(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function zi(s,t,n,i){const r=s.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){const l=r[a];o&&(l.oldValue=o[a].value);let c=l.dir[i];c&&(Fi(),$n(c,n,8,[s.el,l,s,t]),Oi())}}const dg=Symbol("_vte"),fg=s=>s.__isTeleport;function uh(s,t){s.shapeFlag&6&&s.component?(s.transition=t,uh(s.component.subTree,t)):s.shapeFlag&128?(s.ssContent.transition=t.clone(s.ssContent),s.ssFallback.transition=t.clone(s.ssFallback)):s.transition=t}/*! #__NO_SIDE_EFFECTS__ */function no(s,t){return qe(s)?zt({name:s.name},t,{setup:s}):s}function Rf(s){s.ids=[s.ids[0]+s.ids[2]+++"-",0,0]}function ca(s,t,n,i,r=!1){if(Ge(s)){s.forEach((_,v)=>ca(_,t&&(Ge(t)?t[v]:t),n,i,r));return}if(Nr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ca(s,t,n,i.component.subTree);return}const o=i.shapeFlag&4?ph(i.component):i.el,a=r?null:o,{i:l,r:c}=s,h=t&&t.r,u=l.refs===mt?l.refs={}:l.refs,d=l.setupState,f=ot(d),p=d===mt?()=>!1:_=>at(f,_);if(h!=null&&h!==c&&(At(h)?(u[h]=null,p(h)&&(d[h]=null)):kt(h)&&(h.value=null)),qe(c))to(c,l,12,[a,u]);else{const _=At(c),v=kt(c);if(_||v){const g=()=>{if(s.f){const m=_?p(c)?d[c]:u[c]:c.value;r?Ge(m)&&Qc(m,o):Ge(m)?m.includes(o)||m.push(o):_?(u[c]=[o],p(c)&&(d[c]=u[c])):(c.value=[o],s.k&&(u[s.k]=c.value))}else _?(u[c]=a,p(c)&&(d[c]=a)):v&&(c.value=a,s.k&&(u[s.k]=a))};a?(g.id=-1,an(g,n)):g()}}}Sa().requestIdleCallback;Sa().cancelIdleCallback;const Nr=s=>!!s.type.__asyncLoader,Pf=s=>s.type.__isKeepAlive;function pg(s,t){Lf(s,"a",t)}function mg(s,t){Lf(s,"da",t)}function Lf(s,t,n=qt){const i=s.__wdc||(s.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return s()});if(Aa(t,i,n),n){let r=n.parent;for(;r&&r.parent;)Pf(r.parent.vnode)&&gg(i,t,n,r),r=r.parent}}function gg(s,t,n,i){const r=Aa(t,s,i,!0);Df(()=>{Qc(i[t],r)},n)}function Aa(s,t,n=qt,i=!1){if(n){const r=n[s]||(n[s]=[]),o=t.__weh||(t.__weh=(...a)=>{Fi();const l=io(n),c=$n(t,n,s,a);return l(),Oi(),c});return i?r.unshift(o):r.push(o),o}}const gi=s=>(t,n=qt)=>{(!$r||s==="sp")&&Aa(s,(...i)=>t(...i),n)},_g=gi("bm"),If=gi("m"),vg=gi("bu"),xg=gi("u"),yg=gi("bum"),Df=gi("um"),Mg=gi("sp"),Sg=gi("rtg"),bg=gi("rtc");function Eg(s,t=qt){Aa("ec",s,t)}const Tg=Symbol.for("v-ndc");function Xl(s,t,n,i){let r;const o=n,a=Ge(s);if(a||At(s)){const l=a&&Hs(s);let c=!1;l&&(c=!yn(s),s=Ea(s)),r=new Array(s.length);for(let h=0,u=s.length;h<u;h++)r[h]=t(c?Ot(s[h]):s[h],h,void 0,o)}else if(typeof s=="number"){r=new Array(s);for(let l=0;l<s;l++)r[l]=t(l+1,l,void 0,o)}else if(yt(s))if(s[Symbol.iterator])r=Array.from(s,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(s);r=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const u=l[c];r[c]=t(s[u],u,c,o)}}else r=[];return r}const $l=s=>s?np(s)?ph(s):$l(s.parent):null,Ur=zt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>$l(s.parent),$root:s=>$l(s.root),$host:s=>s.ce,$emit:s=>s.emit,$options:s=>Uf(s),$forceUpdate:s=>s.f||(s.f=()=>{hh(s.update)}),$nextTick:s=>s.n||(s.n=lg.bind(s.proxy)),$watch:s=>qg.bind(s)}),qa=(s,t)=>s!==mt&&!s.__isScriptSetup&&at(s,t),Ag={get({_:s},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:a,type:l,appContext:c}=s;let h;if(t[0]!=="$"){const p=a[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(qa(i,t))return a[t]=1,i[t];if(r!==mt&&at(r,t))return a[t]=2,r[t];if((h=s.propsOptions[0])&&at(h,t))return a[t]=3,o[t];if(n!==mt&&at(n,t))return a[t]=4,n[t];ql&&(a[t]=0)}}const u=Ur[t];let d,f;if(u)return t==="$attrs"&&Ft(s.attrs,"get",""),u(s);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==mt&&at(n,t))return a[t]=4,n[t];if(f=c.config.globalProperties,at(f,t))return f[t]},set({_:s},t,n){const{data:i,setupState:r,ctx:o}=s;return qa(r,t)?(r[t]=n,!0):i!==mt&&at(i,t)?(i[t]=n,!0):at(s.props,t)||t[0]==="$"&&t.slice(1)in s?!1:(o[t]=n,!0)},has({_:{data:s,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:o}},a){let l;return!!n[a]||s!==mt&&at(s,a)||qa(t,a)||(l=o[0])&&at(l,a)||at(i,a)||at(Ur,a)||at(r.config.globalProperties,a)},defineProperty(s,t,n){return n.get!=null?s._.accessCache[t]=0:at(n,"value")&&this.set(s,t,n.value,null),Reflect.defineProperty(s,t,n)}};function Qh(s){return Ge(s)?s.reduce((t,n)=>(t[n]=null,t),{}):s}let ql=!0;function wg(s){const t=Uf(s),n=s.proxy,i=s.ctx;ql=!1,t.beforeCreate&&eu(t.beforeCreate,s,"bc");const{data:r,computed:o,methods:a,watch:l,provide:c,inject:h,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:v,deactivated:g,beforeDestroy:m,beforeUnmount:T,destroyed:S,unmounted:x,render:L,renderTracked:I,renderTriggered:P,errorCaptured:U,serverPrefetch:C,expose:E,inheritAttrs:N,components:Q,directives:X,filters:ee}=t;if(h&&Cg(h,i,null),a)for(const ie in a){const W=a[ie];qe(W)&&(i[ie]=W.bind(n))}if(r){const ie=r.call(n,n);yt(ie)&&(s.data=ah(ie))}if(ql=!0,o)for(const ie in o){const W=o[ie],me=qe(W)?W.bind(n,n):qe(W.get)?W.get.bind(n,n):Gn,ye=!qe(W)&&qe(W.set)?W.set.bind(n):Gn,be=f_({get:me,set:ye});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>be.value,set:Le=>be.value=Le})}if(l)for(const ie in l)Nf(l[ie],i,n,ie);if(c){const ie=qe(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(W=>{Ng(W,ie[W])})}u&&eu(u,s,"c");function Z(ie,W){Ge(W)?W.forEach(me=>ie(me.bind(n))):W&&ie(W.bind(n))}if(Z(_g,d),Z(If,f),Z(vg,p),Z(xg,_),Z(pg,v),Z(mg,g),Z(Eg,U),Z(bg,I),Z(Sg,P),Z(yg,T),Z(Df,x),Z(Mg,C),Ge(E))if(E.length){const ie=s.exposed||(s.exposed={});E.forEach(W=>{Object.defineProperty(ie,W,{get:()=>n[W],set:me=>n[W]=me})})}else s.exposed||(s.exposed={});L&&s.render===Gn&&(s.render=L),N!=null&&(s.inheritAttrs=N),Q&&(s.components=Q),X&&(s.directives=X),C&&Rf(s)}function Cg(s,t,n=Gn){Ge(s)&&(s=jl(s));for(const i in s){const r=s[i];let o;yt(r)?"default"in r?o=Xo(r.from||i,r.default,!0):o=Xo(r.from||i):o=Xo(r),kt(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function eu(s,t,n){$n(Ge(s)?s.map(i=>i.bind(t.proxy)):s.bind(t.proxy),t,n)}function Nf(s,t,n,i){let r=i.includes(".")?Yf(n,i):()=>n[i];if(At(s)){const o=t[s];qe(o)&&$o(r,o)}else if(qe(s))$o(r,s.bind(n));else if(yt(s))if(Ge(s))s.forEach(o=>Nf(o,t,n,i));else{const o=qe(s.handler)?s.handler.bind(n):t[s.handler];qe(o)&&$o(r,o,s)}}function Uf(s){const t=s.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=s.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!i?c=t:(c={},r.length&&r.forEach(h=>ha(c,h,a,!0)),ha(c,t,a)),yt(t)&&o.set(t,c),c}function ha(s,t,n,i=!1){const{mixins:r,extends:o}=t;o&&ha(s,o,n,!0),r&&r.forEach(a=>ha(s,a,n,!0));for(const a in t)if(!(i&&a==="expose")){const l=Rg[a]||n&&n[a];s[a]=l?l(s[a],t[a]):t[a]}return s}const Rg={data:tu,props:nu,emits:nu,methods:Cr,computed:Cr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Cr,directives:Cr,watch:Lg,provide:tu,inject:Pg};function tu(s,t){return t?s?function(){return zt(qe(s)?s.call(this,this):s,qe(t)?t.call(this,this):t)}:t:s}function Pg(s,t){return Cr(jl(s),jl(t))}function jl(s){if(Ge(s)){const t={};for(let n=0;n<s.length;n++)t[s[n]]=s[n];return t}return s}function Gt(s,t){return s?[...new Set([].concat(s,t))]:t}function Cr(s,t){return s?zt(Object.create(null),s,t):t}function nu(s,t){return s?Ge(s)&&Ge(t)?[...new Set([...s,...t])]:zt(Object.create(null),Qh(s),Qh(t??{})):t}function Lg(s,t){if(!s)return t;if(!t)return s;const n=zt(Object.create(null),s);for(const i in t)n[i]=Gt(s[i],t[i]);return n}function Ff(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ig=0;function Dg(s,t){return function(i,r=null){qe(i)||(i=zt({},i)),r!=null&&!yt(r)&&(r=null);const o=Ff(),a=new WeakSet,l=[];let c=!1;const h=o.app={_uid:Ig++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:p_,get config(){return o.config},set config(u){},use(u,...d){return a.has(u)||(u&&qe(u.install)?(a.add(u),u.install(h,...d)):qe(u)&&(a.add(u),u(h,...d))),h},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),h},component(u,d){return d?(o.components[u]=d,h):o.components[u]},directive(u,d){return d?(o.directives[u]=d,h):o.directives[u]},mount(u,d,f){if(!c){const p=h._ceVNode||jt(i,r);return p.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),s(p,u,f),c=!0,h._container=u,u.__vue_app__=h,ph(p.component)}},onUnmount(u){l.push(u)},unmount(){c&&($n(l,h._instance,16),s(null,h._container),delete h._container.__vue_app__)},provide(u,d){return o.provides[u]=d,h},runWithContext(u){const d=Gs;Gs=h;try{return u()}finally{Gs=d}}};return h}}let Gs=null;function Ng(s,t){if(qt){let n=qt.provides;const i=qt.parent&&qt.parent.provides;i===n&&(n=qt.provides=Object.create(i)),n[s]=t}}function Xo(s,t,n=!1){const i=qt||Vn;if(i||Gs){const r=Gs?Gs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&s in r)return r[s];if(arguments.length>1)return n&&qe(t)?t.call(i&&i.proxy):t}}const Of={},Bf=()=>Object.create(Of),kf=s=>Object.getPrototypeOf(s)===Of;function Ug(s,t,n,i=!1){const r={},o=Bf();s.propsDefaults=Object.create(null),zf(s,t,r,o);for(const a in s.propsOptions[0])a in r||(r[a]=void 0);n?s.props=i?r:Zm(r):s.type.props?s.props=r:s.props=o,s.attrs=o}function Fg(s,t,n,i){const{props:r,attrs:o,vnode:{patchFlag:a}}=s,l=ot(r),[c]=s.propsOptions;let h=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=s.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(wa(s.emitsOptions,f))continue;const p=t[f];if(c)if(at(o,f))p!==o[f]&&(o[f]=p,h=!0);else{const _=Ni(f);r[_]=Yl(c,l,_,p,s,!1)}else p!==o[f]&&(o[f]=p,h=!0)}}}else{zf(s,t,r,o)&&(h=!0);let u;for(const d in l)(!t||!at(t,d)&&((u=as(d))===d||!at(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Yl(c,l,d,void 0,s,!0)):delete r[d]);if(o!==l)for(const d in o)(!t||!at(t,d))&&(delete o[d],h=!0)}h&&li(s.attrs,"set","")}function zf(s,t,n,i){const[r,o]=s.propsOptions;let a=!1,l;if(t)for(let c in t){if(Lr(c))continue;const h=t[c];let u;r&&at(r,u=Ni(c))?!o||!o.includes(u)?n[u]=h:(l||(l={}))[u]=h:wa(s.emitsOptions,c)||(!(c in i)||h!==i[c])&&(i[c]=h,a=!0)}if(o){const c=ot(n),h=l||mt;for(let u=0;u<o.length;u++){const d=o[u];n[d]=Yl(r,c,d,h[d],s,!at(h,d))}}return a}function Yl(s,t,n,i,r,o){const a=s[n];if(a!=null){const l=at(a,"default");if(l&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&qe(c)){const{propsDefaults:h}=r;if(n in h)i=h[n];else{const u=io(r);i=h[n]=c.call(null,t),u()}}else i=c;r.ce&&r.ce._setProp(n,i)}a[0]&&(o&&!l?i=!1:a[1]&&(i===""||i===as(n))&&(i=!0))}return i}const Og=new WeakMap;function Hf(s,t,n=!1){const i=n?Og:t.propsCache,r=i.get(s);if(r)return r;const o=s.props,a={},l=[];let c=!1;if(!qe(s)){const u=d=>{c=!0;const[f,p]=Hf(d,t,!0);zt(a,f),p&&l.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),s.extends&&u(s.extends),s.mixins&&s.mixins.forEach(u)}if(!o&&!c)return yt(s)&&i.set(s,ks),ks;if(Ge(o))for(let u=0;u<o.length;u++){const d=Ni(o[u]);iu(d)&&(a[d]=mt)}else if(o)for(const u in o){const d=Ni(u);if(iu(d)){const f=o[u],p=a[d]=Ge(f)||qe(f)?{type:f}:zt({},f),_=p.type;let v=!1,g=!0;if(Ge(_))for(let m=0;m<_.length;++m){const T=_[m],S=qe(T)&&T.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(g=!1)}else v=qe(_)&&_.name==="Boolean";p[0]=v,p[1]=g,(v||at(p,"default"))&&l.push(d)}}const h=[a,l];return yt(s)&&i.set(s,h),h}function iu(s){return s[0]!=="$"&&!Lr(s)}const Vf=s=>s[0]==="_"||s==="$stable",dh=s=>Ge(s)?s.map(kn):[kn(s)],Bg=(s,t,n)=>{if(t._n)return t;const i=ug((...r)=>dh(t(...r)),n);return i._c=!1,i},Gf=(s,t,n)=>{const i=s._ctx;for(const r in s){if(Vf(r))continue;const o=s[r];if(qe(o))t[r]=Bg(r,o,i);else if(o!=null){const a=dh(o);t[r]=()=>a}}},Wf=(s,t)=>{const n=dh(t);s.slots.default=()=>n},Xf=(s,t,n)=>{for(const i in t)(n||i!=="_")&&(s[i]=t[i])},kg=(s,t,n)=>{const i=s.slots=Bf();if(s.vnode.shapeFlag&32){const r=t._;r?(Xf(i,t,n),n&&sf(i,"_",r,!0)):Gf(t,i)}else t&&Wf(s,t)},zg=(s,t,n)=>{const{vnode:i,slots:r}=s;let o=!0,a=mt;if(i.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Xf(r,t,n):(o=!t.$stable,Gf(t,r)),a=t}else t&&(Wf(s,t),a={default:1});if(o)for(const l in r)!Vf(l)&&a[l]==null&&delete r[l]},an=e_;function Hg(s){return Vg(s)}function Vg(s,t){const n=Sa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:a,createText:l,createComment:c,setText:h,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Gn,insertStaticContent:_}=s,v=(w,R,M,$=null,O=null,V=null,G=void 0,te=null,q=!!R.dynamicChildren)=>{if(w===R)return;w&&!mr(w,R)&&($=de(w),Le(w,O,V,!0),w=null),R.patchFlag===-2&&(q=!1,R.dynamicChildren=null);const{type:b,ref:y,shapeFlag:D}=R;switch(b){case Ca:g(w,R,M,$);break;case ss:m(w,R,M,$);break;case qo:w==null&&T(R,M,$,G);break;case gn:Q(w,R,M,$,O,V,G,te,q);break;default:D&1?L(w,R,M,$,O,V,G,te,q):D&6?X(w,R,M,$,O,V,G,te,q):(D&64||D&128)&&b.process(w,R,M,$,O,V,G,te,q,Ie)}y!=null&&O&&ca(y,w&&w.ref,V,R||w,!R)},g=(w,R,M,$)=>{if(w==null)i(R.el=l(R.children),M,$);else{const O=R.el=w.el;R.children!==w.children&&h(O,R.children)}},m=(w,R,M,$)=>{w==null?i(R.el=c(R.children||""),M,$):R.el=w.el},T=(w,R,M,$)=>{[w.el,w.anchor]=_(w.children,R,M,$,w.el,w.anchor)},S=({el:w,anchor:R},M,$)=>{let O;for(;w&&w!==R;)O=f(w),i(w,M,$),w=O;i(R,M,$)},x=({el:w,anchor:R})=>{let M;for(;w&&w!==R;)M=f(w),r(w),w=M;r(R)},L=(w,R,M,$,O,V,G,te,q)=>{R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),w==null?I(R,M,$,O,V,G,te,q):C(w,R,O,V,G,te,q)},I=(w,R,M,$,O,V,G,te)=>{let q,b;const{props:y,shapeFlag:D,transition:H,dirs:Y}=w;if(q=w.el=a(w.type,V,y&&y.is,y),D&8?u(q,w.children):D&16&&U(w.children,q,null,$,O,ja(w,V),G,te),Y&&zi(w,null,$,"created"),P(q,w,w.scopeId,G,$),y){for(const fe in y)fe!=="value"&&!Lr(fe)&&o(q,fe,null,y[fe],V,$);"value"in y&&o(q,"value",null,y.value,V),(b=y.onVnodeBeforeMount)&&Fn(b,$,w)}Y&&zi(w,null,$,"beforeMount");const j=Gg(O,H);j&&H.beforeEnter(q),i(q,R,M),((b=y&&y.onVnodeMounted)||j||Y)&&an(()=>{b&&Fn(b,$,w),j&&H.enter(q),Y&&zi(w,null,$,"mounted")},O)},P=(w,R,M,$,O)=>{if(M&&p(w,M),$)for(let V=0;V<$.length;V++)p(w,$[V]);if(O){let V=O.subTree;if(R===V||Jf(V.type)&&(V.ssContent===R||V.ssFallback===R)){const G=O.vnode;P(w,G,G.scopeId,G.slotScopeIds,O.parent)}}},U=(w,R,M,$,O,V,G,te,q=0)=>{for(let b=q;b<w.length;b++){const y=w[b]=te?Ai(w[b]):kn(w[b]);v(null,y,R,M,$,O,V,G,te)}},C=(w,R,M,$,O,V,G)=>{const te=R.el=w.el;let{patchFlag:q,dynamicChildren:b,dirs:y}=R;q|=w.patchFlag&16;const D=w.props||mt,H=R.props||mt;let Y;if(M&&Hi(M,!1),(Y=H.onVnodeBeforeUpdate)&&Fn(Y,M,R,w),y&&zi(R,w,M,"beforeUpdate"),M&&Hi(M,!0),(D.innerHTML&&H.innerHTML==null||D.textContent&&H.textContent==null)&&u(te,""),b?E(w.dynamicChildren,b,te,M,$,ja(R,O),V):G||W(w,R,te,null,M,$,ja(R,O),V,!1),q>0){if(q&16)N(te,D,H,M,O);else if(q&2&&D.class!==H.class&&o(te,"class",null,H.class,O),q&4&&o(te,"style",D.style,H.style,O),q&8){const j=R.dynamicProps;for(let fe=0;fe<j.length;fe++){const ae=j[fe],ge=D[ae],Ue=H[ae];(Ue!==ge||ae==="value")&&o(te,ae,ge,Ue,O,M)}}q&1&&w.children!==R.children&&u(te,R.children)}else!G&&b==null&&N(te,D,H,M,O);((Y=H.onVnodeUpdated)||y)&&an(()=>{Y&&Fn(Y,M,R,w),y&&zi(R,w,M,"updated")},$)},E=(w,R,M,$,O,V,G)=>{for(let te=0;te<R.length;te++){const q=w[te],b=R[te],y=q.el&&(q.type===gn||!mr(q,b)||q.shapeFlag&70)?d(q.el):M;v(q,b,y,null,$,O,V,G,!0)}},N=(w,R,M,$,O)=>{if(R!==M){if(R!==mt)for(const V in R)!Lr(V)&&!(V in M)&&o(w,V,R[V],null,O,$);for(const V in M){if(Lr(V))continue;const G=M[V],te=R[V];G!==te&&V!=="value"&&o(w,V,te,G,O,$)}"value"in M&&o(w,"value",R.value,M.value,O)}},Q=(w,R,M,$,O,V,G,te,q)=>{const b=R.el=w?w.el:l(""),y=R.anchor=w?w.anchor:l("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:Y}=R;Y&&(te=te?te.concat(Y):Y),w==null?(i(b,M,$),i(y,M,$),U(R.children||[],M,y,O,V,G,te,q)):D>0&&D&64&&H&&w.dynamicChildren?(E(w.dynamicChildren,H,M,O,V,G,te),(R.key!=null||O&&R===O.subTree)&&$f(w,R,!0)):W(w,R,M,y,O,V,G,te,q)},X=(w,R,M,$,O,V,G,te,q)=>{R.slotScopeIds=te,w==null?R.shapeFlag&512?O.ctx.activate(R,M,$,G,q):ee(R,M,$,O,V,G,q):se(w,R,q)},ee=(w,R,M,$,O,V,G)=>{const te=w.component=a_(w,$,O);if(Pf(w)&&(te.ctx.renderer=Ie),l_(te,!1,G),te.asyncDep){if(O&&O.registerDep(te,Z,G),!w.el){const q=te.subTree=jt(ss);m(null,q,R,M)}}else Z(te,w,R,M,O,V,G)},se=(w,R,M)=>{const $=R.component=w.component;if(Zg(w,R,M))if($.asyncDep&&!$.asyncResolved){ie($,R,M);return}else $.next=R,$.update();else R.el=w.el,$.vnode=R},Z=(w,R,M,$,O,V,G)=>{const te=()=>{if(w.isMounted){let{next:D,bu:H,u:Y,parent:j,vnode:fe}=w;{const xe=qf(w);if(xe){D&&(D.el=fe.el,ie(w,D,G)),xe.asyncDep.then(()=>{w.isUnmounted||te()});return}}let ae=D,ge;Hi(w,!1),D?(D.el=fe.el,ie(w,D,G)):D=fe,H&&Va(H),(ge=D.props&&D.props.onVnodeBeforeUpdate)&&Fn(ge,j,D,fe),Hi(w,!0);const Ue=ru(w),le=w.subTree;w.subTree=Ue,v(le,Ue,d(le.el),de(le),w,O,V),D.el=Ue.el,ae===null&&Qg(w,Ue.el),Y&&an(Y,O),(ge=D.props&&D.props.onVnodeUpdated)&&an(()=>Fn(ge,j,D,fe),O)}else{let D;const{el:H,props:Y}=R,{bm:j,m:fe,parent:ae,root:ge,type:Ue}=w,le=Nr(R);Hi(w,!1),j&&Va(j),!le&&(D=Y&&Y.onVnodeBeforeMount)&&Fn(D,ae,R),Hi(w,!0);{ge.ce&&ge.ce._injectChildStyle(Ue);const xe=w.subTree=ru(w);v(null,xe,M,$,w,O,V),R.el=xe.el}if(fe&&an(fe,O),!le&&(D=Y&&Y.onVnodeMounted)){const xe=R;an(()=>Fn(D,ae,xe),O)}(R.shapeFlag&256||ae&&Nr(ae.vnode)&&ae.vnode.shapeFlag&256)&&w.a&&an(w.a,O),w.isMounted=!0,R=M=$=null}};w.scope.on();const q=w.effect=new lf(te);w.scope.off();const b=w.update=q.run.bind(q),y=w.job=q.runIfDirty.bind(q);y.i=w,y.id=w.uid,q.scheduler=()=>hh(y),Hi(w,!0),b()},ie=(w,R,M)=>{R.component=w;const $=w.vnode.props;w.vnode=R,w.next=null,Fg(w,R.props,$,M),zg(w,R.children,M),Fi(),Zh(w),Oi()},W=(w,R,M,$,O,V,G,te,q=!1)=>{const b=w&&w.children,y=w?w.shapeFlag:0,D=R.children,{patchFlag:H,shapeFlag:Y}=R;if(H>0){if(H&128){ye(b,D,M,$,O,V,G,te,q);return}else if(H&256){me(b,D,M,$,O,V,G,te,q);return}}Y&8?(y&16&&Ae(b,O,V),D!==b&&u(M,D)):y&16?Y&16?ye(b,D,M,$,O,V,G,te,q):Ae(b,O,V,!0):(y&8&&u(M,""),Y&16&&U(D,M,$,O,V,G,te,q))},me=(w,R,M,$,O,V,G,te,q)=>{w=w||ks,R=R||ks;const b=w.length,y=R.length,D=Math.min(b,y);let H;for(H=0;H<D;H++){const Y=R[H]=q?Ai(R[H]):kn(R[H]);v(w[H],Y,M,null,O,V,G,te,q)}b>y?Ae(w,O,V,!0,!1,D):U(R,M,$,O,V,G,te,q,D)},ye=(w,R,M,$,O,V,G,te,q)=>{let b=0;const y=R.length;let D=w.length-1,H=y-1;for(;b<=D&&b<=H;){const Y=w[b],j=R[b]=q?Ai(R[b]):kn(R[b]);if(mr(Y,j))v(Y,j,M,null,O,V,G,te,q);else break;b++}for(;b<=D&&b<=H;){const Y=w[D],j=R[H]=q?Ai(R[H]):kn(R[H]);if(mr(Y,j))v(Y,j,M,null,O,V,G,te,q);else break;D--,H--}if(b>D){if(b<=H){const Y=H+1,j=Y<y?R[Y].el:$;for(;b<=H;)v(null,R[b]=q?Ai(R[b]):kn(R[b]),M,j,O,V,G,te,q),b++}}else if(b>H)for(;b<=D;)Le(w[b],O,V,!0),b++;else{const Y=b,j=b,fe=new Map;for(b=j;b<=H;b++){const _e=R[b]=q?Ai(R[b]):kn(R[b]);_e.key!=null&&fe.set(_e.key,b)}let ae,ge=0;const Ue=H-j+1;let le=!1,xe=0;const Pe=new Array(Ue);for(b=0;b<Ue;b++)Pe[b]=0;for(b=Y;b<=D;b++){const _e=w[b];if(ge>=Ue){Le(_e,O,V,!0);continue}let ke;if(_e.key!=null)ke=fe.get(_e.key);else for(ae=j;ae<=H;ae++)if(Pe[ae-j]===0&&mr(_e,R[ae])){ke=ae;break}ke===void 0?Le(_e,O,V,!0):(Pe[ke-j]=b+1,ke>=xe?xe=ke:le=!0,v(_e,R[ke],M,null,O,V,G,te,q),ge++)}const Oe=le?Wg(Pe):ks;for(ae=Oe.length-1,b=Ue-1;b>=0;b--){const _e=j+b,ke=R[_e],Ve=_e+1<y?R[_e+1].el:$;Pe[b]===0?v(null,ke,M,Ve,O,V,G,te,q):le&&(ae<0||b!==Oe[ae]?be(ke,M,Ve,2):ae--)}}},be=(w,R,M,$,O=null)=>{const{el:V,type:G,transition:te,children:q,shapeFlag:b}=w;if(b&6){be(w.component.subTree,R,M,$);return}if(b&128){w.suspense.move(R,M,$);return}if(b&64){G.move(w,R,M,Ie);return}if(G===gn){i(V,R,M);for(let D=0;D<q.length;D++)be(q[D],R,M,$);i(w.anchor,R,M);return}if(G===qo){S(w,R,M);return}if($!==2&&b&1&&te)if($===0)te.beforeEnter(V),i(V,R,M),an(()=>te.enter(V),O);else{const{leave:D,delayLeave:H,afterLeave:Y}=te,j=()=>i(V,R,M),fe=()=>{D(V,()=>{j(),Y&&Y()})};H?H(V,j,fe):fe()}else i(V,R,M)},Le=(w,R,M,$=!1,O=!1)=>{const{type:V,props:G,ref:te,children:q,dynamicChildren:b,shapeFlag:y,patchFlag:D,dirs:H,cacheIndex:Y}=w;if(D===-2&&(O=!1),te!=null&&ca(te,null,M,w,!0),Y!=null&&(R.renderCache[Y]=void 0),y&256){R.ctx.deactivate(w);return}const j=y&1&&H,fe=!Nr(w);let ae;if(fe&&(ae=G&&G.onVnodeBeforeUnmount)&&Fn(ae,R,w),y&6)ue(w.component,M,$);else{if(y&128){w.suspense.unmount(M,$);return}j&&zi(w,null,R,"beforeUnmount"),y&64?w.type.remove(w,R,M,Ie,$):b&&!b.hasOnce&&(V!==gn||D>0&&D&64)?Ae(b,R,M,!1,!0):(V===gn&&D&384||!O&&y&16)&&Ae(q,R,M),$&&et(w)}(fe&&(ae=G&&G.onVnodeUnmounted)||j)&&an(()=>{ae&&Fn(ae,R,w),j&&zi(w,null,R,"unmounted")},M)},et=w=>{const{type:R,el:M,anchor:$,transition:O}=w;if(R===gn){re(M,$);return}if(R===qo){x(w);return}const V=()=>{r(M),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(w.shapeFlag&1&&O&&!O.persisted){const{leave:G,delayLeave:te}=O,q=()=>G(M,V);te?te(w.el,V,q):q()}else V()},re=(w,R)=>{let M;for(;w!==R;)M=f(w),r(w),w=M;r(R)},ue=(w,R,M)=>{const{bum:$,scope:O,job:V,subTree:G,um:te,m:q,a:b}=w;su(q),su(b),$&&Va($),O.stop(),V&&(V.flags|=8,Le(G,w,R,M)),te&&an(te,R),an(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Ae=(w,R,M,$=!1,O=!1,V=0)=>{for(let G=V;G<w.length;G++)Le(w[G],R,M,$,O)},de=w=>{if(w.shapeFlag&6)return de(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=f(w.anchor||w.el),M=R&&R[dg];return M?f(M):R};let Re=!1;const Be=(w,R,M)=>{w==null?R._vnode&&Le(R._vnode,null,null,!0):v(R._vnode||null,w,R,null,null,null,M),R._vnode=w,Re||(Re=!0,Zh(),Af(),Re=!1)},Ie={p:v,um:Le,m:be,r:et,mt:ee,mc:U,pc:W,pbc:E,n:de,o:s};return{render:Be,hydrate:void 0,createApp:Dg(Be)}}function ja({type:s,props:t},n){return n==="svg"&&s==="foreignObject"||n==="mathml"&&s==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Hi({effect:s,job:t},n){n?(s.flags|=32,t.flags|=4):(s.flags&=-33,t.flags&=-5)}function Gg(s,t){return(!s||s&&!s.pendingBranch)&&t&&!t.persisted}function $f(s,t,n=!1){const i=s.children,r=t.children;if(Ge(i)&&Ge(r))for(let o=0;o<i.length;o++){const a=i[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=Ai(r[o]),l.el=a.el),!n&&l.patchFlag!==-2&&$f(a,l)),l.type===Ca&&(l.el=a.el)}}function Wg(s){const t=s.slice(),n=[0];let i,r,o,a,l;const c=s.length;for(i=0;i<c;i++){const h=s[i];if(h!==0){if(r=n[n.length-1],s[r]<h){t[i]=r,n.push(i);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,s[n[l]]<h?o=l+1:a=l;h<s[n[o]]&&(o>0&&(t[i]=n[o-1]),n[o]=i)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}function qf(s){const t=s.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qf(t)}function su(s){if(s)for(let t=0;t<s.length;t++)s[t].flags|=8}const Xg=Symbol.for("v-scx"),$g=()=>Xo(Xg);function $o(s,t,n){return jf(s,t,n)}function jf(s,t,n=mt){const{immediate:i,deep:r,flush:o,once:a}=n,l=zt({},n),c=t&&i||!t&&o!=="post";let h;if($r){if(o==="sync"){const p=$g();h=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=Gn,p.resume=Gn,p.pause=Gn,p}}const u=qt;l.call=(p,_,v)=>$n(p,u,_,v);let d=!1;o==="post"?l.scheduler=p=>{an(p,u&&u.suspense)}:o!=="sync"&&(d=!0,l.scheduler=(p,_)=>{_?p():hh(p)}),l.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=og(s,t,l);return $r&&(h?h.push(f):c&&f()),f}function qg(s,t,n){const i=this.proxy,r=At(s)?s.includes(".")?Yf(i,s):()=>i[s]:s.bind(i,i);let o;qe(t)?o=t:(o=t.handler,n=t);const a=io(this),l=jf(r,o.bind(i),n);return a(),l}function Yf(s,t){const n=t.split(".");return()=>{let i=s;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const jg=(s,t)=>t==="modelValue"||t==="model-value"?s.modelModifiers:s[`${t}Modifiers`]||s[`${Ni(t)}Modifiers`]||s[`${as(t)}Modifiers`];function Yg(s,t,...n){if(s.isUnmounted)return;const i=s.vnode.props||mt;let r=n;const o=t.startsWith("update:"),a=o&&jg(i,t.slice(7));a&&(a.trim&&(r=n.map(u=>At(u)?u.trim():u)),a.number&&(r=n.map(Tm)));let l,c=i[l=Ha(t)]||i[l=Ha(Ni(t))];!c&&o&&(c=i[l=Ha(as(t))]),c&&$n(c,s,6,r);const h=i[l+"Once"];if(h){if(!s.emitted)s.emitted={};else if(s.emitted[l])return;s.emitted[l]=!0,$n(h,s,6,r)}}function Kf(s,t,n=!1){const i=t.emitsCache,r=i.get(s);if(r!==void 0)return r;const o=s.emits;let a={},l=!1;if(!qe(s)){const c=h=>{const u=Kf(h,t,!0);u&&(l=!0,zt(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),s.extends&&c(s.extends),s.mixins&&s.mixins.forEach(c)}return!o&&!l?(yt(s)&&i.set(s,null),null):(Ge(o)?o.forEach(c=>a[c]=null):zt(a,o),yt(s)&&i.set(s,a),a)}function wa(s,t){return!s||!xa(t)?!1:(t=t.slice(2).replace(/Once$/,""),at(s,t[0].toLowerCase()+t.slice(1))||at(s,as(t))||at(s,t))}function ru(s){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:h,renderCache:u,props:d,data:f,setupState:p,ctx:_,inheritAttrs:v}=s,g=la(s);let m,T;try{if(n.shapeFlag&4){const x=r||i,L=x;m=kn(h.call(L,x,u,d,p,f,_)),T=l}else{const x=t;m=kn(x.length>1?x(d,{attrs:l,slots:a,emit:c}):x(d,null)),T=t.props?l:Kg(l)}}catch(x){Fr.length=0,Ta(x,s,1),m=jt(ss)}let S=m;if(T&&v!==!1){const x=Object.keys(T),{shapeFlag:L}=S;x.length&&L&7&&(o&&x.some(Zc)&&(T=Jg(T,o)),S=Ks(S,T,!1,!0))}return n.dirs&&(S=Ks(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&uh(S,n.transition),m=S,la(g),m}const Kg=s=>{let t;for(const n in s)(n==="class"||n==="style"||xa(n))&&((t||(t={}))[n]=s[n]);return t},Jg=(s,t)=>{const n={};for(const i in s)(!Zc(i)||!(i.slice(9)in t))&&(n[i]=s[i]);return n};function Zg(s,t,n){const{props:i,children:r,component:o}=s,{props:a,children:l,patchFlag:c}=t,h=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?ou(i,a,h):!!a;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==i[f]&&!wa(h,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?ou(i,a,h):!0:!!a;return!1}function ou(s,t,n){const i=Object.keys(t);if(i.length!==Object.keys(s).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(t[o]!==s[o]&&!wa(n,o))return!0}return!1}function Qg({vnode:s,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===s&&(i.el=s.el),i===s)(s=t.vnode).el=n,t=t.parent;else break}}const Jf=s=>s.__isSuspense;function e_(s,t){t&&t.pendingBranch?Ge(s)?t.effects.push(...s):t.effects.push(s):hg(s)}const gn=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),ss=Symbol.for("v-cmt"),qo=Symbol.for("v-stc"),Fr=[];let cn=null;function Qt(s=!1){Fr.push(cn=s?null:[])}function t_(){Fr.pop(),cn=Fr[Fr.length-1]||null}let Xr=1;function au(s,t=!1){Xr+=s,s<0&&cn&&t&&(cn.hasOnce=!0)}function Zf(s){return s.dynamicChildren=Xr>0?cn||ks:null,t_(),Xr>0&&cn&&cn.push(s),s}function _n(s,t,n,i,r,o){return Zf(Ye(s,t,n,i,r,o,!0))}function Qf(s,t,n,i,r){return Zf(jt(s,t,n,i,r,!0))}function ep(s){return s?s.__v_isVNode===!0:!1}function mr(s,t){return s.type===t.type&&s.key===t.key}const tp=({key:s})=>s??null,jo=({ref:s,ref_key:t,ref_for:n})=>(typeof s=="number"&&(s=""+s),s!=null?At(s)||kt(s)||qe(s)?{i:Vn,r:s,k:t,f:!!n}:s:null);function Ye(s,t=null,n=null,i=0,r=null,o=s===gn?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:s,props:t,key:t&&tp(t),ref:t&&jo(t),scopeId:Cf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vn};return l?(fh(c,n),o&128&&s.normalize(c)):n&&(c.shapeFlag|=At(n)?8:16),Xr>0&&!a&&cn&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&cn.push(c),c}const jt=n_;function n_(s,t=null,n=null,i=0,r=null,o=!1){if((!s||s===Tg)&&(s=ss),ep(s)){const l=Ks(s,t,!0);return n&&fh(l,n),Xr>0&&!o&&cn&&(l.shapeFlag&6?cn[cn.indexOf(s)]=l:cn.push(l)),l.patchFlag=-2,l}if(d_(s)&&(s=s.__vccOpts),t){t=i_(t);let{class:l,style:c}=t;l&&!At(l)&&(t.class=ba(l)),yt(c)&&(ch(c)&&!Ge(c)&&(c=zt({},c)),t.style=Ys(c))}const a=At(s)?1:Jf(s)?128:fg(s)?64:yt(s)?4:qe(s)?2:0;return Ye(s,t,n,i,r,a,o,!0)}function i_(s){return s?ch(s)||kf(s)?zt({},s):s:null}function Ks(s,t,n=!1,i=!1){const{props:r,ref:o,patchFlag:a,children:l,transition:c}=s,h=t?s_(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:s.type,props:h,key:h&&tp(h),ref:t&&t.ref?n&&o?Ge(o)?o.concat(jo(t)):[o,jo(t)]:jo(t):o,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:l,target:s.target,targetStart:s.targetStart,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:t&&s.type!==gn?a===-1?16:a|16:a,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:c,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Ks(s.ssContent),ssFallback:s.ssFallback&&Ks(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce};return c&&i&&uh(u,c.clone(u)),u}function Bn(s=" ",t=0){return jt(Ca,null,s,t)}function Ya(s,t){const n=jt(qo,null,s);return n.staticCount=t,n}function Yo(s="",t=!1){return t?(Qt(),Qf(ss,null,s)):jt(ss,null,s)}function kn(s){return s==null||typeof s=="boolean"?jt(ss):Ge(s)?jt(gn,null,s.slice()):ep(s)?Ai(s):jt(Ca,null,String(s))}function Ai(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Ks(s)}function fh(s,t){let n=0;const{shapeFlag:i}=s;if(t==null)t=null;else if(Ge(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),fh(s,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!kf(t)?t._ctx=Vn:r===3&&Vn&&(Vn.slots._===1?t._=1:(t._=2,s.patchFlag|=1024))}else qe(t)?(t={default:t,_ctx:Vn},n=32):(t=String(t),i&64?(n=16,t=[Bn(t)]):n=8);s.children=t,s.shapeFlag|=n}function s_(...s){const t={};for(let n=0;n<s.length;n++){const i=s[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=ba([t.class,i.class]));else if(r==="style")t.style=Ys([t.style,i.style]);else if(xa(r)){const o=t[r],a=i[r];a&&o!==a&&!(Ge(o)&&o.includes(a))&&(t[r]=o?[].concat(o,a):a)}else r!==""&&(t[r]=i[r])}return t}function Fn(s,t,n,i=null){$n(s,t,7,[n,i])}const r_=Ff();let o_=0;function a_(s,t,n){const i=s.type,r=(t?t.appContext:s.appContext)||r_,o={uid:o_++,vnode:s,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Im(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hf(i,r),emitsOptions:Kf(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Yg.bind(null,o),s.ce&&s.ce(o),o}let qt=null,ua,Kl;{const s=Sa(),t=(n,i)=>{let r;return(r=s[n])||(r=s[n]=[]),r.push(i),o=>{r.length>1?r.forEach(a=>a(o)):r[0](o)}};ua=t("__VUE_INSTANCE_SETTERS__",n=>qt=n),Kl=t("__VUE_SSR_SETTERS__",n=>$r=n)}const io=s=>{const t=qt;return ua(s),s.scope.on(),()=>{s.scope.off(),ua(t)}},lu=()=>{qt&&qt.scope.off(),ua(null)};function np(s){return s.vnode.shapeFlag&4}let $r=!1;function l_(s,t=!1,n=!1){t&&Kl(t);const{props:i,children:r}=s.vnode,o=np(s);Ug(s,i,o,t),kg(s,r,n);const a=o?c_(s,t):void 0;return t&&Kl(!1),a}function c_(s,t){const n=s.type;s.accessCache=Object.create(null),s.proxy=new Proxy(s.ctx,Ag);const{setup:i}=n;if(i){Fi();const r=s.setupContext=i.length>1?u_(s):null,o=io(s),a=to(i,s,0,[s.props,r]),l=Qd(a);if(Oi(),o(),(l||s.sp)&&!Nr(s)&&Rf(s),l){if(a.then(lu,lu),t)return a.then(c=>{cu(s,c)}).catch(c=>{Ta(c,s,0)});s.asyncDep=a}else cu(s,a)}else ip(s)}function cu(s,t,n){qe(t)?s.type.__ssrInlineRender?s.ssrRender=t:s.render=t:yt(t)&&(s.setupState=bf(t)),ip(s)}function ip(s,t,n){const i=s.type;s.render||(s.render=i.render||Gn);{const r=io(s);Fi();try{wg(s)}finally{Oi(),r()}}}const h_={get(s,t){return Ft(s,"get",""),s[t]}};function u_(s){const t=n=>{s.exposed=n||{}};return{attrs:new Proxy(s.attrs,h_),slots:s.slots,emit:s.emit,expose:t}}function ph(s){return s.exposed?s.exposeProxy||(s.exposeProxy=new Proxy(bf(Qm(s.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ur)return Ur[n](s)},has(t,n){return n in t||n in Ur}})):s.proxy}function d_(s){return qe(s)&&"__vccOpts"in s}const f_=(s,t)=>sg(s,t,$r),p_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jl;const hu=typeof window<"u"&&window.trustedTypes;if(hu)try{Jl=hu.createPolicy("vue",{createHTML:s=>s})}catch{}const sp=Jl?s=>Jl.createHTML(s):s=>s,m_="http://www.w3.org/2000/svg",g_="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,uu=oi&&oi.createElement("template"),__={insert:(s,t,n)=>{t.insertBefore(s,n||null)},remove:s=>{const t=s.parentNode;t&&t.removeChild(s)},createElement:(s,t,n,i)=>{const r=t==="svg"?oi.createElementNS(m_,s):t==="mathml"?oi.createElementNS(g_,s):n?oi.createElement(s,{is:n}):oi.createElement(s);return s==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:s=>oi.createTextNode(s),createComment:s=>oi.createComment(s),setText:(s,t)=>{s.nodeValue=t},setElementText:(s,t)=>{s.textContent=t},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>oi.querySelector(s),setScopeId(s,t){s.setAttribute(t,"")},insertStaticContent(s,t,n,i,r,o){const a=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{uu.innerHTML=sp(i==="svg"?`<svg>${s}</svg>`:i==="mathml"?`<math>${s}</math>`:s);const l=uu.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},v_=Symbol("_vtc");function x_(s,t,n){const i=s[v_];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?s.removeAttribute("class"):n?s.setAttribute("class",t):s.className=t}const du=Symbol("_vod"),y_=Symbol("_vsh"),M_=Symbol(""),S_=/(^|;)\s*display\s*:/;function b_(s,t,n){const i=s.style,r=At(n);let o=!1;if(n&&!r){if(t)if(At(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ko(i,l,"")}else for(const a in t)n[a]==null&&Ko(i,a,"");for(const a in n)a==="display"&&(o=!0),Ko(i,a,n[a])}else if(r){if(t!==n){const a=i[M_];a&&(n+=";"+a),i.cssText=n,o=S_.test(n)}}else t&&s.removeAttribute("style");du in s&&(s[du]=o?i.display:"",s[y_]&&(i.display="none"))}const fu=/\s*!important$/;function Ko(s,t,n){if(Ge(n))n.forEach(i=>Ko(s,t,i));else if(n==null&&(n=""),t.startsWith("--"))s.setProperty(t,n);else{const i=E_(s,t);fu.test(n)?s.setProperty(as(i),n.replace(fu,""),"important"):s[i]=n}}const pu=["Webkit","Moz","ms"],Ka={};function E_(s,t){const n=Ka[t];if(n)return n;let i=Ni(t);if(i!=="filter"&&i in s)return Ka[t]=i;i=nf(i);for(let r=0;r<pu.length;r++){const o=pu[r]+i;if(o in s)return Ka[t]=o}return t}const mu="http://www.w3.org/1999/xlink";function gu(s,t,n,i,r,o=Lm(t)){i&&t.startsWith("xlink:")?n==null?s.removeAttributeNS(mu,t.slice(6,t.length)):s.setAttributeNS(mu,t,n):n==null||o&&!rf(n)?s.removeAttribute(t):s.setAttribute(t,o?"":Ui(n)?String(n):n)}function _u(s,t,n,i,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(s[t]=t==="innerHTML"?sp(n):n);return}const o=s.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?s.getAttribute("value")||"":s.value,c=n==null?s.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in s))&&(s.value=c),n==null&&s.removeAttribute(t),s._value=n;return}let a=!1;if(n===""||n==null){const l=typeof s[t];l==="boolean"?n=rf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{s[t]=n}catch{}a&&s.removeAttribute(r||t)}function T_(s,t,n,i){s.addEventListener(t,n,i)}function A_(s,t,n,i){s.removeEventListener(t,n,i)}const vu=Symbol("_vei");function w_(s,t,n,i,r=null){const o=s[vu]||(s[vu]={}),a=o[t];if(i&&a)a.value=i;else{const[l,c]=C_(t);if(i){const h=o[t]=L_(i,r);T_(s,l,h,c)}else a&&(A_(s,l,a,c),o[t]=void 0)}}const xu=/(?:Once|Passive|Capture)$/;function C_(s){let t;if(xu.test(s)){t={};let i;for(;i=s.match(xu);)s=s.slice(0,s.length-i[0].length),t[i[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):as(s.slice(2)),t]}let Ja=0;const R_=Promise.resolve(),P_=()=>Ja||(R_.then(()=>Ja=0),Ja=Date.now());function L_(s,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;$n(I_(i,n.value),t,5,[i])};return n.value=s,n.attached=P_(),n}function I_(s,t){if(Ge(t)){const n=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{n.call(s),s._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const yu=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)>96&&s.charCodeAt(2)<123,D_=(s,t,n,i,r,o)=>{const a=r==="svg";t==="class"?x_(s,i,a):t==="style"?b_(s,n,i):xa(t)?Zc(t)||w_(s,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):N_(s,t,i,a))?(_u(s,t,i),!s.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gu(s,t,i,a,o,t!=="value")):s._isVueCE&&(/[A-Z]/.test(t)||!At(i))?_u(s,Ni(t),i,o,t):(t==="true-value"?s._trueValue=i:t==="false-value"&&(s._falseValue=i),gu(s,t,i,a))};function N_(s,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in s&&yu(t)&&qe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&s.tagName==="INPUT"||t==="type"&&s.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=s.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yu(t)&&At(n)?!1:t in s}const U_=zt({patchProp:D_},__);let Mu;function F_(){return Mu||(Mu=Hg(U_))}const O_=(...s)=>{const t=F_().createApp(...s),{mount:n}=t;return t.mount=i=>{const r=k_(i);if(!r)return;const o=t._component;!qe(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,B_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function B_(s){if(s instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&s instanceof MathMLElement)return"mathml"}function k_(s){return At(s)?document.querySelector(s):s}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="171",z_=0,Su=1,H_=2,rp=1,op=2,ri=3,pi=0,en=1,Hn=2,ui=0,Ws=1,Zl=2,bu=3,Eu=4,V_=5,Qi=100,G_=101,W_=102,X_=103,$_=104,q_=200,j_=201,Y_=202,K_=203,Ql=204,ec=205,J_=206,Z_=207,Q_=208,ev=209,tv=210,nv=211,iv=212,sv=213,rv=214,tc=0,nc=1,ic=2,Js=3,sc=4,rc=5,oc=6,ac=7,gh=0,ov=1,av=2,Di=0,ap=1,lp=2,cp=3,hp=4,lv=5,up=6,dp=7,Tu="attached",cv="detached",fp=300,Zs=301,Qs=302,lc=303,cc=304,Ra=306,Tt=1e3,Ri=1001,da=1002,Yt=1003,pp=1004,Rr=1005,hn=1006,Jo=1007,ci=1008,mi=1009,mp=1010,gp=1011,qr=1012,_h=1013,rs=1014,Ln=1015,di=1016,vh=1017,xh=1018,er=1020,_p=35902,vp=1021,xp=1022,vn=1023,yp=1024,Mp=1025,Xs=1026,tr=1027,yh=1028,Mh=1029,Sp=1030,Sh=1031,bh=1033,Zo=33776,Qo=33777,ea=33778,ta=33779,hc=35840,uc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,_c=37808,vc=37809,xc=37810,yc=37811,Mc=37812,Sc=37813,bc=37814,Ec=37815,Tc=37816,Ac=37817,wc=37818,Cc=37819,Rc=37820,Pc=37821,na=36492,Lc=36494,Ic=36495,bp=36283,Dc=36284,Nc=36285,Uc=36286,hv=2200,uv=2201,dv=2202,jr=2300,Yr=2301,Za=2302,Us=2400,Fs=2401,fa=2402,Eh=2500,fv=2501,pv=0,Ep=1,Fc=2,mv=3200,gv=3201,Pa=0,_v=1,Ci="",dt="srgb",Jt="srgb-linear",pa="linear",ht="srgb",ms=7680,Au=519,vv=512,xv=513,yv=514,Tp=515,Mv=516,Sv=517,bv=518,Ev=519,Oc=35044,wu="300 es",hi=2e3,ma=2001;class ls{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,t);t.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cu=1234567;const Or=Math.PI/180,nr=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[t&255]+Nt[t>>8&255]+"-"+Nt[t>>16&15|64]+Nt[t>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ke(s,t,n){return Math.max(t,Math.min(n,s))}function Th(s,t){return(s%t+t)%t}function Tv(s,t,n,i,r){return i+(s-t)*(r-i)/(n-t)}function Av(s,t,n){return s!==t?(n-s)/(t-s):0}function Br(s,t,n){return(1-n)*s+n*t}function wv(s,t,n,i){return Br(s,t,1-Math.exp(-n*i))}function Cv(s,t=1){return t-Math.abs(Th(s,t*2)-t)}function Rv(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function Pv(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function Lv(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Iv(s,t){return s+Math.random()*(t-s)}function Dv(s){return s*(.5-Math.random())}function Nv(s){s!==void 0&&(Cu=s);let t=Cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uv(s){return s*Or}function Fv(s){return s*nr}function Ov(s){return(s&s-1)===0&&s!==0}function Bv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zv(s,t,n,i,r){const o=Math.cos,a=Math.sin,l=o(n/2),c=a(n/2),h=o((t+i)/2),u=a((t+i)/2),d=o((t-i)/2),f=a((t-i)/2),p=o((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":s.set(l*u,c*d,c*f,l*h);break;case"YZY":s.set(c*f,l*u,c*d,l*h);break;case"ZXZ":s.set(c*d,c*f,l*u,l*h);break;case"XZX":s.set(l*u,c*_,c*p,l*h);break;case"YXY":s.set(c*p,l*u,c*_,l*h);break;case"ZYZ":s.set(c*_,c*p,l*u,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ut(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Hv={DEG2RAD:Or,RAD2DEG:nr,generateUUID:Mn,clamp:Ke,euclideanModulo:Th,mapLinear:Tv,inverseLerp:Av,lerp:Br,damp:wv,pingpong:Cv,smoothstep:Rv,smootherstep:Pv,randInt:Lv,randFloat:Iv,randFloatSpread:Dv,seededRandom:Nv,degToRad:Uv,radToDeg:Fv,isPowerOfTwo:Ov,ceilPowerOfTwo:Bv,floorPowerOfTwo:kv,setQuaternionFromProperEuler:zv,normalize:ut,denormalize:Rn};class ce{constructor(t=0,n=0){ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ke(this.x,t.x,n.x),this.y=Ke(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ke(this.x,t,n),this.y=Ke(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-t.x,a=this.y-t.y;return this.x=o*i-a*r+t.x,this.y=o*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(t,n,i,r,o,a,l,c,h){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,o,a,l,c,h)}set(t,n,i,r,o,a,l,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=l,u[3]=n,u[4]=o,u[5]=c,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,o=this.elements,a=i[0],l=i[3],c=i[6],h=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],g=r[3],m=r[6],T=r[1],S=r[4],x=r[7],L=r[2],I=r[5],P=r[8];return o[0]=a*v+l*T+c*L,o[3]=a*g+l*S+c*I,o[6]=a*m+l*x+c*P,o[1]=h*v+u*T+d*L,o[4]=h*g+u*S+d*I,o[7]=h*m+u*x+d*P,o[2]=f*v+p*T+_*L,o[5]=f*g+p*S+_*I,o[8]=f*m+p*x+_*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],a=t[4],l=t[5],c=t[6],h=t[7],u=t[8];return n*a*u-n*l*h-i*o*u+i*l*c+r*o*h-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],a=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=u*a-l*h,f=l*c-u*o,p=h*o-a*c,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(r*h-u*i)*v,t[2]=(l*i-r*a)*v,t[3]=f*v,t[4]=(u*n-r*c)*v,t[5]=(r*o-l*n)*v,t[6]=p*v,t[7]=(i*c-h*n)*v,t[8]=(a*n-i*o)*v,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,o,a,l){const c=Math.cos(o),h=Math.sin(o);return this.set(i*c,i*h,-i*(c*a+h*l)+a+t,-r*h,r*c,-r*(-h*a+c*l)+l+n,0,0,1),this}scale(t,n){return this.premultiply(Qa.makeScale(t,n)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,n){return this.premultiply(Qa.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new $e;function Ap(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vv(){const s=Kr("canvas");return s.style.display="block",s}const Ru={};function Ds(s){s in Ru||(Ru[s]=!0,console.warn(s))}function Gv(s,t,n){return new Promise(function(i,r){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function Wv(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xv(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $v(){const s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===ht&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?pa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Jt]:{primaries:t,whitePoint:i,transfer:pa,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:t,whitePoint:i,transfer:ht,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),s}const Ze=$v();function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class qv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gs===void 0&&(gs=Kr("canvas")),gs.width=t.width,gs.height=t.height;const i=gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Kr("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=fi(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fi(n[i]/255)*255):n[i]=fi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jv=0;class wp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(el(r[a].image)):o.push(el(r[a]))}else o=el(r);i.url=o}return n||(t.images[this.uuid]=i),i}}function el(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yv=0;class Lt extends ls{constructor(t=Lt.DEFAULT_IMAGE,n=Lt.DEFAULT_MAPPING,i=Ri,r=Ri,o=hn,a=ci,l=vn,c=mi,h=Lt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Mn(),this.name="",this.source=new wp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tt:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tt:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=fp;Lt.DEFAULT_ANISOTROPY=1;class it{constructor(t=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,o=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,o;const c=t.elements,h=c[0],u=c[4],d=c[8],f=c[1],p=c[5],_=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(h+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(h+1)/2,x=(p+1)/2,L=(m+1)/2,I=(u+f)/4,P=(d+v)/4,U=(_+g)/4;return S>x&&S>L?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=I/i,o=P/i):x>L?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=I/r,o=U/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=P/o,r=U/o),this.set(i,r,o,n),this}let T=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((h+p+m-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ke(this.x,t.x,n.x),this.y=Ke(this.y,t.y,n.y),this.z=Ke(this.z,t.z,n.z),this.w=Ke(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ke(this.x,t,n),this.y=Ke(this.y,t,n),this.z=Ke(this.z,t,n),this.w=Ke(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kv extends ls{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new it(0,0,t,n),this.scissorTest=!1,this.viewport=new it(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new wp(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Kv{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Cp extends Lt{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends Lt{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,o,a,l){let c=i[r+0],h=i[r+1],u=i[r+2],d=i[r+3];const f=o[a+0],p=o[a+1],_=o[a+2],v=o[a+3];if(l===0){t[n+0]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d;return}if(l===1){t[n+0]=f,t[n+1]=p,t[n+2]=_,t[n+3]=v;return}if(d!==v||c!==f||h!==p||u!==_){let g=1-l;const m=c*f+h*p+u*_+d*v,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const L=Math.sqrt(S),I=Math.atan2(L,m*T);g=Math.sin(g*I)/L,l=Math.sin(l*I)/L}const x=l*T;if(c=c*g+f*x,h=h*g+p*x,u=u*g+_*x,d=d*g+v*x,g===1-l){const L=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=L,h*=L,u*=L,d*=L}}t[n]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,r,o,a){const l=i[r],c=i[r+1],h=i[r+2],u=i[r+3],d=o[a],f=o[a+1],p=o[a+2],_=o[a+3];return t[n]=l*_+u*d+c*p-h*f,t[n+1]=c*_+u*f+h*d-l*p,t[n+2]=h*_+u*p+l*f-c*d,t[n+3]=u*_-l*d-c*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,o=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(i/2),u=l(r/2),d=l(o/2),f=c(i/2),p=c(r/2),_=c(o/2);switch(a){case"XYZ":this._x=f*u*d+h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d+f*p*_;break;case"YZX":this._x=f*u*d+h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d-f*p*_;break;case"XZY":this._x=f*u*d-h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],u=n[6],d=n[10],f=i+l+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-h)*p,this._z=(a-r)*p}else if(i>l&&i>d){const p=2*Math.sqrt(1+i-l-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+h)/p}else if(l>d){const p=2*Math.sqrt(1+l-i-d);this._w=(o-h)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-l);this._w=(a-r)/p,this._x=(o+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,o=t._z,a=t._w,l=n._x,c=n._y,h=n._z,u=n._w;return this._x=i*u+a*l+r*h-o*c,this._y=r*u+a*c+o*l-i*h,this._z=o*u+a*h+i*c-r*l,this._w=a*u-i*l-r*c-o*h,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,o=this._z,a=this._w;let l=a*t._w+i*t._x+r*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const c=1-l*l;if(c<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,l),d=Math.sin((1-n)*u)/h,f=Math.sin(n*u)/h;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Iu.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Iu.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,o=t.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,o=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*r-l*i),u=2*(l*n-o*r),d=2*(o*i-a*n);return this.x=n+c*h+a*d-l*u,this.y=i+c*u+l*h-o*d,this.z=r+c*d+o*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ke(this.x,t.x,n.x),this.y=Ke(this.y,t.y,n.y),this.z=Ke(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ke(this.x,t,n),this.y=Ke(this.y,t,n),this.z=Ke(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,o=t.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-o*l,this.y=o*a-i*c,this.z=i*l-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new F,Iu=new Nn;class _i{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(o,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const r=t.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),mo.subVectors(this.max,gr),_s.subVectors(t.a,gr),vs.subVectors(t.b,gr),xs.subVectors(t.c,gr),vi.subVectors(vs,_s),xi.subVectors(xs,vs),Vi.subVectors(_s,xs);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Vi.z,Vi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Vi.z,0,-Vi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Vi.y,Vi.x,0];return!nl(n,_s,vs,xs,mo)||(n=[1,0,0,0,1,0,0,0,1],!nl(n,_s,vs,xs,mo))?!1:(go.crossVectors(vi,xi),n=[go.x,go.y,go.z],nl(n,_s,vs,xs,mo))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new F,new F,new F,new F,new F,new F,new F,new F],Tn=new F,po=new _i,_s=new F,vs=new F,xs=new F,vi=new F,xi=new F,Vi=new F,gr=new F,mo=new F,go=new F,Gi=new F;function nl(s,t,n,i,r){for(let o=0,a=s.length-3;o<=a;o+=3){Gi.fromArray(s,o);const l=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),c=t.dot(Gi),h=n.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>l)return!1}return!0}const Zv=new _i,_r=new F,il=new F;class qn{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Zv.setFromPoints(t).getCenter(i);let r=0;for(let o=0,a=t.length;o<a;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const n=_r.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(il)),this.expandByPoint(_r.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new F,sl=new F,_o=new F,yi=new F,rl=new F,vo=new F,ol=new F;class so{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ei.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){sl.copy(t).add(n).multiplyScalar(.5),_o.copy(n).sub(t).normalize(),yi.copy(this.origin).sub(sl);const o=t.distanceTo(n)*.5,a=-this.direction.dot(_o),l=yi.dot(this.direction),c=-yi.dot(_o),h=yi.lengthSq(),u=Math.abs(1-a*a);let d,f,p,_;if(u>0)if(d=a*c-l,f=a*l-c,_=o*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+a*f+2*l)+f*(a*d+f+2*c)+h}else f=o,d=Math.max(0,-(a*f+l)),p=-d*d+f*(f+2*c)+h;else f=-o,d=Math.max(0,-(a*f+l)),p=-d*d+f*(f+2*c)+h;else f<=-_?(d=Math.max(0,-(-a*o+l)),f=d>0?-o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+h):f<=_?(d=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+h):(d=Math.max(0,-(a*o+l)),f=d>0?o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+h);else f=a>0?-o:o,d=Math.max(0,-(a*f+l)),p=-d*d+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sl).addScaledVector(_o,f),p}intersectSphere(t,n){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,o=t.radius*t.radius;if(r>o)return null;const a=Math.sqrt(o-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,o,a,l,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,r=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,r=(t.min.x-f.x)*h),u>=0?(o=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(o=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),d>=0?(l=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(l=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,n,i,r,o){rl.subVectors(n,t),vo.subVectors(i,t),ol.crossVectors(rl,vo);let a=this.direction.dot(ol),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;yi.subVectors(this.origin,t);const c=l*this.direction.dot(vo.crossVectors(yi,vo));if(c<0)return null;const h=l*this.direction.dot(rl.cross(yi));if(h<0||c+h>a)return null;const u=-l*yi.dot(ol);return u<0?null:this.at(u/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,n,i,r,o,a,l,c,h,u,d,f,p,_,v,g){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,o,a,l,c,h,u,d,f,p,_,v,g)}set(t,n,i,r,o,a,l,c,h,u,d,f,p,_,v,g){const m=this.elements;return m[0]=t,m[4]=n,m[8]=i,m[12]=r,m[1]=o,m[5]=a,m[9]=l,m[13]=c,m[2]=h,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/ys.setFromMatrixColumn(t,0).length(),o=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,o=t.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const f=a*u,p=a*d,_=l*u,v=l*d;n[0]=c*u,n[4]=-c*d,n[8]=h,n[1]=p+_*h,n[5]=f-v*h,n[9]=-l*c,n[2]=v-f*h,n[6]=_+p*h,n[10]=a*c}else if(t.order==="YXZ"){const f=c*u,p=c*d,_=h*u,v=h*d;n[0]=f+v*l,n[4]=_*l-p,n[8]=a*h,n[1]=a*d,n[5]=a*u,n[9]=-l,n[2]=p*l-_,n[6]=v+f*l,n[10]=a*c}else if(t.order==="ZXY"){const f=c*u,p=c*d,_=h*u,v=h*d;n[0]=f-v*l,n[4]=-a*d,n[8]=_+p*l,n[1]=p+_*l,n[5]=a*u,n[9]=v-f*l,n[2]=-a*h,n[6]=l,n[10]=a*c}else if(t.order==="ZYX"){const f=a*u,p=a*d,_=l*u,v=l*d;n[0]=c*u,n[4]=_*h-p,n[8]=f*h+v,n[1]=c*d,n[5]=v*h+f,n[9]=p*h-_,n[2]=-h,n[6]=l*c,n[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*h,_=l*c,v=l*h;n[0]=c*u,n[4]=v-f*d,n[8]=_*d+p,n[1]=d,n[5]=a*u,n[9]=-l*u,n[2]=-h*u,n[6]=p*d+_,n[10]=f-v*d}else if(t.order==="XZY"){const f=a*c,p=a*h,_=l*c,v=l*h;n[0]=c*u,n[4]=-d,n[8]=h*u,n[1]=f*d+v,n[5]=a*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=l*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qv,t,ex)}lookAt(t,n,i){const r=this.elements;return rn.subVectors(t,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Mi.crossVectors(i,rn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Mi.crossVectors(i,rn)),Mi.normalize(),xo.crossVectors(rn,Mi),r[0]=Mi.x,r[4]=xo.x,r[8]=rn.x,r[1]=Mi.y,r[5]=xo.y,r[9]=rn.y,r[2]=Mi.z,r[6]=xo.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,o=this.elements,a=i[0],l=i[4],c=i[8],h=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],g=i[10],m=i[14],T=i[3],S=i[7],x=i[11],L=i[15],I=r[0],P=r[4],U=r[8],C=r[12],E=r[1],N=r[5],Q=r[9],X=r[13],ee=r[2],se=r[6],Z=r[10],ie=r[14],W=r[3],me=r[7],ye=r[11],be=r[15];return o[0]=a*I+l*E+c*ee+h*W,o[4]=a*P+l*N+c*se+h*me,o[8]=a*U+l*Q+c*Z+h*ye,o[12]=a*C+l*X+c*ie+h*be,o[1]=u*I+d*E+f*ee+p*W,o[5]=u*P+d*N+f*se+p*me,o[9]=u*U+d*Q+f*Z+p*ye,o[13]=u*C+d*X+f*ie+p*be,o[2]=_*I+v*E+g*ee+m*W,o[6]=_*P+v*N+g*se+m*me,o[10]=_*U+v*Q+g*Z+m*ye,o[14]=_*C+v*X+g*ie+m*be,o[3]=T*I+S*E+x*ee+L*W,o[7]=T*P+S*N+x*se+L*me,o[11]=T*U+S*Q+x*Z+L*ye,o[15]=T*C+S*X+x*ie+L*be,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],o=t[12],a=t[1],l=t[5],c=t[9],h=t[13],u=t[2],d=t[6],f=t[10],p=t[14],_=t[3],v=t[7],g=t[11],m=t[15];return _*(+o*c*d-r*h*d-o*l*f+i*h*f+r*l*p-i*c*p)+v*(+n*c*p-n*h*f+o*a*f-r*a*p+r*h*u-o*c*u)+g*(+n*h*d-n*l*p-o*a*d+i*a*p+o*l*u-i*h*u)+m*(-r*l*u-n*c*d+n*l*f+r*a*d-i*a*f+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],a=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=t[9],f=t[10],p=t[11],_=t[12],v=t[13],g=t[14],m=t[15],T=d*g*h-v*f*h+v*c*p-l*g*p-d*c*m+l*f*m,S=_*f*h-u*g*h-_*c*p+a*g*p+u*c*m-a*f*m,x=u*v*h-_*d*h+_*l*p-a*v*p-u*l*m+a*d*m,L=_*d*c-u*v*c-_*l*f+a*v*f+u*l*g-a*d*g,I=n*T+i*S+r*x+o*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=T*P,t[1]=(v*f*o-d*g*o-v*r*p+i*g*p+d*r*m-i*f*m)*P,t[2]=(l*g*o-v*c*o+v*r*h-i*g*h-l*r*m+i*c*m)*P,t[3]=(d*c*o-l*f*o-d*r*h+i*f*h+l*r*p-i*c*p)*P,t[4]=S*P,t[5]=(u*g*o-_*f*o+_*r*p-n*g*p-u*r*m+n*f*m)*P,t[6]=(_*c*o-a*g*o-_*r*h+n*g*h+a*r*m-n*c*m)*P,t[7]=(a*f*o-u*c*o+u*r*h-n*f*h-a*r*p+n*c*p)*P,t[8]=x*P,t[9]=(_*d*o-u*v*o-_*i*p+n*v*p+u*i*m-n*d*m)*P,t[10]=(a*v*o-_*l*o+_*i*h-n*v*h-a*i*m+n*l*m)*P,t[11]=(u*l*o-a*d*o-u*i*h+n*d*h+a*i*p-n*l*p)*P,t[12]=L*P,t[13]=(u*v*r-_*d*r+_*i*f-n*v*f-u*i*g+n*d*g)*P,t[14]=(_*l*r-a*v*r-_*i*c+n*v*c+a*i*g-n*l*g)*P,t[15]=(a*d*r-u*l*r+u*i*c-n*d*c-a*i*f+n*l*f)*P,this}scale(t){const n=this.elements,i=t.x,r=t.y,o=t.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=t.x,l=t.y,c=t.z,h=o*a,u=o*l;return this.set(h*a+i,h*l-r*c,h*c+r*l,0,h*l+r*c,u*l+i,u*c-r*a,0,h*c-r*l,u*c+r*a,o*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,o,a){return this.set(1,i,o,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,o=n._x,a=n._y,l=n._z,c=n._w,h=o+o,u=a+a,d=l+l,f=o*h,p=o*u,_=o*d,v=a*u,g=a*d,m=l*d,T=c*h,S=c*u,x=c*d,L=i.x,I=i.y,P=i.z;return r[0]=(1-(v+m))*L,r[1]=(p+x)*L,r[2]=(_-S)*L,r[3]=0,r[4]=(p-x)*I,r[5]=(1-(f+m))*I,r[6]=(g+T)*I,r[7]=0,r[8]=(_+S)*P,r[9]=(g-T)*P,r[10]=(1-(f+v))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let o=ys.set(r[0],r[1],r[2]).length();const a=ys.set(r[4],r[5],r[6]).length(),l=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],An.copy(this);const h=1/o,u=1/a,d=1/l;return An.elements[0]*=h,An.elements[1]*=h,An.elements[2]*=h,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,n.setFromRotationMatrix(An),i.x=o,i.y=a,i.z=l,this}makePerspective(t,n,i,r,o,a,l=hi){const c=this.elements,h=2*o/(n-t),u=2*o/(i-r),d=(n+t)/(n-t),f=(i+r)/(i-r);let p,_;if(l===hi)p=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(l===ma)p=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,o,a,l=hi){const c=this.elements,h=1/(n-t),u=1/(i-r),d=1/(a-o),f=(n+t)*h,p=(i+r)*u;let _,v;if(l===hi)_=(a+o)*d,v=-2*d;else if(l===ma)_=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const ys=new F,An=new We,Qv=new F(0,0,0),ex=new F(1,1,1),Mi=new F,xo=new F,rn=new F,Du=new We,Nu=new Nn;class Un{constructor(t=0,n=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,o=r[0],a=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tx=0;const Uu=new F,Ms=new Nn,ti=new We,yo=new F,vr=new F,nx=new F,ix=new Nn,Fu=new F(1,0,0),Ou=new F(0,1,0),Bu=new F(0,0,1),ku={type:"added"},sx={type:"removed"},Ss={type:"childadded",child:null},al={type:"childremoved",child:null};class vt extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const t=new F,n=new Un,i=new Nn,r=new F(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new $e}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ms.setFromAxisAngle(t,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,n){return Ms.setFromAxisAngle(t,n),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(Fu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,n){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Fu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?yo.copy(t):yo.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(vr,yo,this.up):ti.lookAt(yo,vr,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(ti),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ku),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(sx),al.child=t,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ku),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,nx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));r.material=l}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(o(t.animations,c))}}if(n){const l=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(l){const c=[];for(const h in l){const u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new F(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new F,ni=new F,ll=new F,ii=new F,bs=new F,Es=new F,zu=new F,cl=new F,hl=new F,ul=new F,dl=new it,fl=new it,pl=new it;class Pn{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),wn.subVectors(t,n),r.cross(wn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,i,r,o){wn.subVectors(r,n),ni.subVectors(i,n),ll.subVectors(t,n);const a=wn.dot(wn),l=wn.dot(ni),c=wn.dot(ll),h=ni.dot(ni),u=ni.dot(ll),d=a*h-l*l;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(h*c-l*u)*f,_=(a*u-l*c)*f;return o.set(1-p-_,_,p)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,n,i,r,o,a,l,c){return this.getBarycoord(t,n,i,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(l,ii.z),c)}static getInterpolatedAttribute(t,n,i,r,o,a){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(t,n),fl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(dl,o.x),a.addScaledVector(fl,o.y),a.addScaledVector(pl,o.z),a}static isFrontFacing(t,n,i,r){return wn.subVectors(i,n),ni.subVectors(t,n),wn.cross(ni).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),wn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Pn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,o){return Pn.getInterpolation(t,this.a,this.b,this.c,n,i,r,o)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,o=this.c;let a,l;bs.subVectors(r,i),Es.subVectors(o,i),cl.subVectors(t,i);const c=bs.dot(cl),h=Es.dot(cl);if(c<=0&&h<=0)return n.copy(i);hl.subVectors(t,r);const u=bs.dot(hl),d=Es.dot(hl);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(bs,a);ul.subVectors(t,o);const p=bs.dot(ul),_=Es.dot(ul);if(_>=0&&p<=_)return n.copy(o);const v=p*h-c*_;if(v<=0&&h>=0&&_<=0)return l=h/(h-_),n.copy(i).addScaledVector(Es,l);const g=u*_-p*d;if(g<=0&&d-u>=0&&p-_>=0)return zu.subVectors(o,r),l=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(zu,l);const m=1/(g+v+f);return a=v*m,l=f*m,n.copy(i).addScaledVector(bs,a).addScaledVector(Es,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function ml(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class Ne{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=dt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=Ze.workingColorSpace){return this.r=t,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=Ze.workingColorSpace){if(t=Th(t,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=ml(a,o,t+1/3),this.g=ml(a,o,t),this.b=ml(a,o,t-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(t,n=dt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=dt){const i=Rp[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dt){return Ze.fromWorkingColorSpace(Ut.copy(this),t),Math.round(Ke(Ut.r*255,0,255))*65536+Math.round(Ke(Ut.g*255,0,255))*256+Math.round(Ke(Ut.b*255,0,255))}getHexString(t=dt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ut.copy(this),n);const i=Ut.r,r=Ut.g,o=Ut.b,a=Math.max(i,r,o),l=Math.min(i,r,o);let c,h;const u=(l+a)/2;if(l===a)c=0,h=0;else{const d=a-l;switch(h=u<=.5?d/(a+l):d/(2-a-l),a){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ut.copy(this),n),t.r=Ut.r,t.g=Ut.g,t.b=Ut.b,t}getStyle(t=dt){Ze.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,r=Ut.b;return t!==dt?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+n,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Si),t.getHSL(Mo);const i=Br(Si.h,Mo.h,n),r=Br(Si.s,Mo.s,n),o=Br(Si.l,Mo.l,n);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ne;Ne.NAMES=Rp;let rx=0;class Sn extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ws,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==ec&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(n){const o=r(t.textures),a=r(t.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pi extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Et=new F,So=new ce;class Kt{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)So.fromBufferAttribute(this,n),So.applyMatrix3(t),this.setXY(n,So.x,So.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(t),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(t),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(t),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(t),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ut(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Rn(n,this.array)),n}setX(t,n){return this.normalized&&(n=ut(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Rn(n,this.array)),n}setY(t,n){return this.normalized&&(n=ut(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Rn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ut(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Rn(n,this.array)),n}setW(t,n){return this.normalized&&(n=ut(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,o){return t*=this.itemSize,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array),o=ut(o,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}}class Pp extends Kt{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Lp extends Kt{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class wt extends Kt{constructor(t,n,i){super(new Float32Array(t),n,i)}}let ox=0;const fn=new We,gl=new vt,Ts=new F,on=new _i,xr=new _i,Pt=new F;class nn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ap(t)?Lp:Pp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $e().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,n,i){return fn.makeTranslation(t,n,i),this.applyMatrix4(fn),this}scale(t,n,i){return fn.makeScale(t,n,i),this.applyMatrix4(fn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const o=t[r];n.setXYZ(r,o.x,o.y,o.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];on.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),n)for(let o=0,a=n.length;o<a;o++){const l=n[o];xr.setFromBufferAttribute(l),this.morphTargetsRelative?(Pt.addVectors(on.min,xr.min),on.expandByPoint(Pt),Pt.addVectors(on.max,xr.max),on.expandByPoint(Pt)):(on.expandByPoint(xr.min),on.expandByPoint(xr.max))}on.getCenter(i);let r=0;for(let o=0,a=t.count;o<a;o++)Pt.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let o=0,a=n.length;o<a;o++){const l=n[o],c=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)Pt.fromBufferAttribute(l,h),c&&(Ts.fromBufferAttribute(t,h),Pt.add(Ts)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let U=0;U<i.count;U++)l[U]=new F,c[U]=new F;const h=new F,u=new F,d=new F,f=new ce,p=new ce,_=new ce,v=new F,g=new F;function m(U,C,E){h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,E),f.fromBufferAttribute(o,U),p.fromBufferAttribute(o,C),_.fromBufferAttribute(o,E),u.sub(h),d.sub(h),p.sub(f),_.sub(f);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(N),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),l[U].add(v),l[C].add(v),l[E].add(v),c[U].add(g),c[C].add(g),c[E].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,C=T.length;U<C;++U){const E=T[U],N=E.start,Q=E.count;for(let X=N,ee=N+Q;X<ee;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const S=new F,x=new F,L=new F,I=new F;function P(U){L.fromBufferAttribute(r,U),I.copy(L);const C=l[U];S.copy(C),S.sub(L.multiplyScalar(L.dot(C))).normalize(),x.crossVectors(I,C);const N=x.dot(c[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,N)}for(let U=0,C=T.length;U<C;++U){const E=T[U],N=E.start,Q=E.count;for(let X=N,ee=N+Q;X<ee;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F,d=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),u.subVectors(a,o),d.subVectors(r,o),u.cross(d),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,g),l.add(u),c.add(u),h.add(u),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Pt.fromBufferAttribute(t,n),Pt.normalize(),t.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function t(l,c){const h=l.array,u=l.itemSize,d=l.normalized,f=new h.constructor(c.length*u);let p=0,_=0;for(let v=0,g=c.length;v<g;v++){l.isInterleavedBufferAttribute?p=c[v]*l.data.stride+l.offset:p=c[v]*u;for(let m=0;m<u;m++)f[_++]=h[p++]}return new Kt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],h=t(c,i);n.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const c=[],h=o[l];for(let u=0,d=h.length;u<d;u++){const f=h[u],p=t(f,i);c.push(p)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,f=h.length;d<f;d++){const p=h[d];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(n))}const o=t.morphAttributes;for(const h in o){const u=[],d=o[h];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new We,Wi=new so,bo=new qn,Vu=new F,Eo=new F,To=new F,Ao=new F,_l=new F,wo=new F,Gu=new F,Co=new F;class gt extends vt{constructor(t=new nn,n=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(o&&l){wo.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const u=l[c],d=o[c];u!==0&&(_l.fromBufferAttribute(d,t),a?wo.addScaledVector(_l,u):wo.addScaledVector(_l.sub(n),u))}n.add(wo)}return n}raycast(t,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(o),Wi.copy(t.ray).recast(t.near),!(bo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(bo,Vu)===null||Wi.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Hu.copy(o).invert(),Wi.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Wi)))}_computeIntersections(t,n,i){let r;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,h=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=a[g.materialIndex],T=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=T,L=S;x<L;x+=3){const I=l.getX(x),P=l.getX(x+1),U=l.getX(x+2);r=Ro(this,m,t,i,h,u,d,I,P,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const T=l.getX(g),S=l.getX(g+1),x=l.getX(g+2);r=Ro(this,a,t,i,h,u,d,T,S,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=a[g.materialIndex],T=Math.max(g.start,p.start),S=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let x=T,L=S;x<L;x+=3){const I=x,P=x+1,U=x+2;r=Ro(this,m,t,i,h,u,d,I,P,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const T=g,S=g+1,x=g+2;r=Ro(this,a,t,i,h,u,d,T,S,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ax(s,t,n,i,r,o,a,l){let c;if(t.side===en?c=i.intersectTriangle(a,o,r,!0,l):c=i.intersectTriangle(r,o,a,t.side===pi,l),c===null)return null;Co.copy(l),Co.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo(Co);return h<n.near||h>n.far?null:{distance:h,point:Co.clone(),object:s}}function Ro(s,t,n,i,r,o,a,l,c,h){s.getVertexPosition(l,Eo),s.getVertexPosition(c,To),s.getVertexPosition(h,Ao);const u=ax(s,t,n,i,Eo,To,Ao,Gu);if(u){const d=new F;Pn.getBarycoord(Gu,Eo,To,Ao,d),r&&(u.uv=Pn.getInterpolatedAttribute(r,l,c,h,d,new ce)),o&&(u.uv1=Pn.getInterpolatedAttribute(o,l,c,h,d,new ce)),a&&(u.normal=Pn.getInterpolatedAttribute(a,l,c,h,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new F,materialIndex:0};Pn.getNormal(Eo,To,Ao,f.normal),u.face=f,u.barycoord=d}return u}class ro extends nn{constructor(t=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],h=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,t,a,o,0),_("z","y","x",1,-1,i,n,-t,a,o,1),_("x","z","y",1,1,t,i,n,r,a,2),_("x","z","y",1,-1,t,i,-n,r,a,3),_("x","y","z",1,-1,t,n,i,r,o,4),_("x","y","z",-1,-1,t,n,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(d,2));function _(v,g,m,T,S,x,L,I,P,U,C){const E=x/P,N=L/U,Q=x/2,X=L/2,ee=I/2,se=P+1,Z=U+1;let ie=0,W=0;const me=new F;for(let ye=0;ye<Z;ye++){const be=ye*N-X;for(let Le=0;Le<se;Le++){const et=Le*E-Q;me[v]=et*T,me[g]=be*S,me[m]=ee,h.push(me.x,me.y,me.z),me[v]=0,me[g]=0,me[m]=I>0?1:-1,u.push(me.x,me.y,me.z),d.push(Le/P),d.push(1-ye/U),ie+=1}}for(let ye=0;ye<U;ye++)for(let be=0;be<P;be++){const Le=f+be+se*ye,et=f+be+se*(ye+1),re=f+(be+1)+se*(ye+1),ue=f+(be+1)+se*ye;c.push(Le,et,ue),c.push(et,re,ue),W+=6}l.addGroup(p,W,C),p+=W,f+=ie}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(s){const t={};for(const n in s){t[n]={};for(const i in s[n]){const r=s[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Wt(s){const t={};for(let n=0;n<s.length;n++){const i=ir(s[n]);for(const r in i)t[r]=i[r]}return t}function lx(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function Ip(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ze.workingColorSpace}const sr={clone:ir,merge:Wt};var cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=lx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dp extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=hi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new F,Wu=new ce,Xu=new ce;class $t extends Dp{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,n){return this.getViewBounds(t,Wu,Xu),n.subVectors(Xu,Wu)}setViewOffset(t,n,i,r,o,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Or*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;o+=a.offsetX*r/c,n-=a.offsetY*i/h,r*=a.width/c,i*=a.height/h}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,ws=1;class ux extends vt{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(As,ws,t,n);r.layers=this.layers,this.add(r);const o=new $t(As,ws,t,n);o.layers=this.layers,this.add(o);const a=new $t(As,ws,t,n);a.layers=this.layers,this.add(a);const l=new $t(As,ws,t,n);l.layers=this.layers,this.add(l);const c=new $t(As,ws,t,n);c.layers=this.layers,this.add(c);const h=new $t(As,ws,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,l,c]=n;for(const h of n)this.remove(h);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,c,h,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,o),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,l),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,h),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Np extends Lt{constructor(t,n,i,r,o,a,l,c,h,u){t=t!==void 0?t:[],n=n!==void 0?n:Zs,super(t,n,i,r,o,a,l,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dx extends Dn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Np(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ro(5,5,5),o=new Bt({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:ui});o.uniforms.tEquirect.value=n;const a=new gt(r,o),l=n.minFilter;return n.minFilter===ci&&(n.minFilter=hn),new ux(1,10,this).update(t,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,r){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(o)}}class fx extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class px{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=n.array[i+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new F;class wh{constructor(t,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(t),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(t),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(t),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Rn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Rn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Rn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Rn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,n,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array),o=ut(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new Kt(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $u=new F,qu=new it,ju=new it,mx=new F,Yu=new We,Po=new F,vl=new qn,Ku=new We,xl=new so;class gx extends gt{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new _i),this.boundingBox.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Po),this.boundingBox.expandByPoint(Po)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Po),this.boundingSphere.expandByPoint(Po)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(r),t.ray.intersectsSphere(vl)!==!1&&(Ku.copy(r).invert(),xl.copy(t.ray).applyMatrix4(Ku),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,xl)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new it,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){t.fromBufferAttribute(n,i);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),n.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){const i=this.skeleton,r=this.geometry;qu.fromBufferAttribute(r.attributes.skinIndex,t),ju.fromBufferAttribute(r.attributes.skinWeight,t),$u.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let o=0;o<4;o++){const a=ju.getComponent(o);if(a!==0){const l=qu.getComponent(o);Yu.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),n.addScaledVector(mx.copy($u).applyMatrix4(Yu),a)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Up extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fp extends Lt{constructor(t=null,n=1,i=1,r,o,a,l,c,h=Yt,u=Yt,d,f){super(null,a,l,c,h,u,r,o,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=new We,_x=new We;class Ch{constructor(t=[],n=[]){this.uuid=Mn(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const i=new We;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const l=t[o]?t[o].matrixWorld:_x;Ju.multiplyMatrices(l,n[o]),Ju.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ch(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const i=new Fp(n,t,t,vn,Ln);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,r=t.bones.length;i<r;i++){const o=t.bones[i];let a=n[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Up),this.bones.push(a),this.boneInverses.push(new We().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,o=n.length;r<o;r++){const a=n[r];t.bones.push(a.uuid);const l=i[r];t.boneInverses.push(l.toArray())}return t}}class Bc extends Kt{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new We,Zu=new We,Lo=[],Qu=new _i,vx=new We,yr=new gt,Mr=new qn;class xx extends gt{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Bc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,vx)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Cs),Qu.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Qu)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Cs),Mr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Mr)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,a=t*o+1;for(let l=0;l<i.length;l++)i[l]=r[a+l]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),t.ray.intersectsSphere(Mr)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Cs),Zu.multiplyMatrices(i,Cs),yr.matrixWorld=Zu,yr.raycast(t,Lo);for(let a=0,l=Lo.length;a<l;a++){const c=Lo[a];c.instanceId=o,c.object=this,n.push(c)}Lo.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Bc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fp(new Float32Array(r*this.count),r,this.count,yh,Ln));const o=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const l=this.geometry.morphTargetsRelative?1:1-a,c=r*t;o[c]=l,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const yl=new F,yx=new F,Mx=new $e;class Ji{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=yl.subVectors(i,n).cross(yx.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(yl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Mx.getNormalMatrix(t),r=this.coplanarPoint(yl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new qn,Io=new F;class Rh{constructor(t=new Ji,n=new Ji,i=new Ji,r=new Ji,o=new Ji,a=new Ji){this.planes=[t,n,i,r,o,a]}set(t,n,i,r,o,a){const l=this.planes;return l[0].copy(t),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=hi){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],v=r[10],g=r[11],m=r[12],T=r[13],S=r[14],x=r[15];if(i[0].setComponents(c-o,f-h,g-p,x-m).normalize(),i[1].setComponents(c+o,f+h,g+p,x+m).normalize(),i[2].setComponents(c+a,f+u,g+_,x+T).normalize(),i[3].setComponents(c-a,f-u,g-_,x-T).normalize(),i[4].setComponents(c-l,f-d,g-v,x-S).normalize(),n===hi)i[5].setComponents(c+l,f+d,g+v,x+S).normalize();else if(n===ma)i[5].setComponents(l,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?t.max.x:t.min.x,Io.y=r.normal.y>0?t.max.y:t.min.y,Io.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Op extends Sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new F,_a=new F,ed=new We,Sr=new so,Do=new qn,Ml=new F,td=new F;class Ph extends vt{constructor(t=new nn,n=new Op){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)ga.fromBufferAttribute(n,r-1),_a.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ga.distanceTo(_a);t.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Do.radius+=o,t.ray.intersectsSphere(Do)===!1)return;ed.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(ed);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,g=_-1;v<g;v+=h){const m=u.getX(v),T=u.getX(v+1),S=No(this,t,Sr,c,m,T);S&&n.push(S)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(p),m=No(this,t,Sr,c,v,g);m&&n.push(m)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=p,g=_-1;v<g;v+=h){const m=No(this,t,Sr,c,v,v+1);m&&n.push(m)}if(this.isLineLoop){const v=No(this,t,Sr,c,_-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function No(s,t,n,i,r,o){const a=s.geometry.attributes.position;if(ga.fromBufferAttribute(a,r),_a.fromBufferAttribute(a,o),n.distanceSqToSegment(ga,_a,Ml,td)>i)return;Ml.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ml);if(!(c<t.near||c>t.far))return{distance:c,point:td.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const nd=new F,id=new F;class Sx extends Ph{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)nd.fromBufferAttribute(n,r),id.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nd.distanceTo(id);t.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bx extends Ph{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class Bp extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sd=new We,kc=new so,Uo=new qn,Fo=new F;class Ex extends vt{constructor(t=new nn,n=new Bp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=o,t.ray.intersectsSphere(Uo)===!1)return;sd.copy(r).invert(),kc.copy(t.ray).applyMatrix4(sd);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,v=p;_<v;_++){const g=h.getX(_);Fo.fromBufferAttribute(d,g),rd(Fo,g,c,r,t,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,v=p;_<v;_++)Fo.fromBufferAttribute(d,_),rd(Fo,_,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function rd(s,t,n,i,r,o,a){const l=kc.distanceSqToPoint(s);if(l<n){const c=new F;kc.closestPointToPoint(s,c),c.applyMatrix4(i);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class xn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class kp extends Lt{constructor(t,n,i,r,o,a,l,c,h,u=Xs){if(u!==Xs&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=rs),i===void 0&&u===tr&&(i=er),super(null,r,o,a,l,c,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=l!==void 0?l:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const i=this.getLengths();let r=0;const o=i.length;let a;n?a=n:a=t*i[o-1];let l=0,c=o-1,h;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),h=i[r]-a,h<0)l=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(o-1);const u=i[r],f=i[r+1]-u,p=(a-u)/f;return(r+p)/(o-1)}getTangent(t,n){let r=t-1e-4,o=t+1e-4;r<0&&(r=0),o>1&&(o=1);const a=this.getPoint(r),l=this.getPoint(o),c=n||(a.isVector2?new ce:new F);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,n){const i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){const i=new F,r=[],o=[],a=[],l=new F,c=new We;for(let p=0;p<=t;p++){const _=p/t;r[p]=this.getTangentAt(_,new F)}o[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=h&&(h=u,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),f<=h&&i.set(0,0,1),l.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],l),a[0].crossVectors(r[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),l.crossVectors(r[p-1],r[p]),l.length()>Number.EPSILON){l.normalize();const _=Math.acos(Ke(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(l,_))}a[p].crossVectors(r[p],o[p])}if(n===!0){let p=Math.acos(Ke(o[0].dot(o[t]),-1,1));p/=t,r[0].dot(l.crossVectors(o[0],o[t]))>0&&(p=-p);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],o[_])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lh extends jn{constructor(t=0,n=0,i=1,r=1,o=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,n=new ce){const i=n,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);const l=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=h-this.aY;c=f*u-p*d+this.aX,h=f*d+p*u+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tx extends Lh{constructor(t,n,i,r,o,a){super(t,n,i,i,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let s=0,t=0,n=0,i=0;function r(o,a,l,c){s=o,t=l,n=-3*o+3*a-2*l-c,i=2*o-2*a+l+c}return{initCatmullRom:function(o,a,l,c,h){r(a,l,h*(l-o),h*(c-a))},initNonuniformCatmullRom:function(o,a,l,c,h,u,d){let f=(a-o)/h-(l-o)/(h+u)+(l-a)/u,p=(l-a)/u-(c-a)/(u+d)+(c-l)/d;f*=u,p*=u,r(a,l,f,p)},calc:function(o){const a=o*o,l=a*o;return s+t*o+n*a+i*l}}}const Oo=new F,Sl=new Ih,bl=new Ih,El=new Ih;class Ax extends jn{constructor(t=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=r}getPoint(t,n=new F){const i=n,r=this.points,o=r.length,a=(o-(this.closed?0:1))*t;let l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:c===0&&l===o-1&&(l=o-2,c=1);let h,u;this.closed||l>0?h=r[(l-1)%o]:(Oo.subVectors(r[0],r[1]).add(r[0]),h=Oo);const d=r[l%o],f=r[(l+1)%o];if(this.closed||l+2<o?u=r[(l+2)%o]:(Oo.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Sl.initNonuniformCatmullRom(h.x,d.x,f.x,u.x,_,v,g),bl.initNonuniformCatmullRom(h.y,d.y,f.y,u.y,_,v,g),El.initNonuniformCatmullRom(h.z,d.z,f.z,u.z,_,v,g)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(h.x,d.x,f.x,u.x,this.tension),bl.initCatmullRom(h.y,d.y,f.y,u.y,this.tension),El.initCatmullRom(h.z,d.z,f.z,u.z,this.tension));return i.set(Sl.calc(c),bl.calc(c),El.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new F().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function od(s,t,n,i,r){const o=(i-t)*.5,a=(r-n)*.5,l=s*s,c=s*l;return(2*n-2*i+o+a)*c+(-3*n+3*i-2*o-a)*l+o*s+n}function wx(s,t){const n=1-s;return n*n*t}function Cx(s,t){return 2*(1-s)*s*t}function Rx(s,t){return s*s*t}function kr(s,t,n,i){return wx(s,t)+Cx(s,n)+Rx(s,i)}function Px(s,t){const n=1-s;return n*n*n*t}function Lx(s,t){const n=1-s;return 3*n*n*s*t}function Ix(s,t){return 3*(1-s)*s*s*t}function Dx(s,t){return s*s*s*t}function zr(s,t,n,i,r){return Px(s,t)+Lx(s,n)+Ix(s,i)+Dx(s,r)}class zp extends jn{constructor(t=new ce,n=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new ce){const i=n,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return i.set(zr(t,r.x,o.x,a.x,l.x),zr(t,r.y,o.y,a.y,l.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nx extends jn{constructor(t=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new F){const i=n,r=this.v0,o=this.v1,a=this.v2,l=this.v3;return i.set(zr(t,r.x,o.x,a.x,l.x),zr(t,r.y,o.y,a.y,l.y),zr(t,r.z,o.z,a.z,l.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hp extends jn{constructor(t=new ce,n=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new ce){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new ce){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ux extends jn{constructor(t=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new F){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vp extends jn{constructor(t=new ce,n=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new ce){const i=n,r=this.v0,o=this.v1,a=this.v2;return i.set(kr(t,r.x,o.x,a.x),kr(t,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fx extends jn{constructor(t=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new F){const i=n,r=this.v0,o=this.v1,a=this.v2;return i.set(kr(t,r.x,o.x,a.x),kr(t,r.y,o.y,a.y),kr(t,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gp extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new ce){const i=n,r=this.points,o=(r.length-1)*t,a=Math.floor(o),l=o-a,c=r[a===0?a:a-1],h=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(od(l,c.x,h.x,u.x,d.x),od(l,c.y,h.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new ce().fromArray(r))}return this}}var zc=Object.freeze({__proto__:null,ArcCurve:Tx,CatmullRomCurve3:Ax,CubicBezierCurve:zp,CubicBezierCurve3:Nx,EllipseCurve:Lh,LineCurve:Hp,LineCurve3:Ux,QuadraticBezierCurve:Vp,QuadraticBezierCurve3:Fx,SplineCurve:Gp});class Ox extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[i](n,t))}return this}getPoint(t,n){const i=t*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const a=r[o]-i,l=this.curves[o],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,n)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const a=o[r],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){const u=c[h];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(new zc[r.type]().fromJSON(r))}return this}}class Hc extends Ox{constructor(t){super(),this.type="Path",this.currentPoint=new ce,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const i=new Hp(this.currentPoint.clone(),new ce(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,r){const o=new Vp(this.currentPoint.clone(),new ce(t,n),new ce(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(t,n,i,r,o,a){const l=new zp(this.currentPoint.clone(),new ce(t,n),new ce(i,r),new ce(o,a));return this.curves.push(l),this.currentPoint.set(o,a),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),i=new Gp(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,r,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,n+c,i,r,o,a),this}absarc(t,n,i,r,o,a){return this.absellipse(t,n,i,i,r,o,a),this}ellipse(t,n,i,r,o,a,l,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,n+u,i,r,o,a,l,c),this}absellipse(t,n,i,r,o,a,l,c){const h=new Lh(t,n,i,r,o,a,l,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class va extends nn{constructor(t=1,n=1,i=1,r=32,o=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:c};const h=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],f=[],p=[];let _=0;const v=[],g=i/2;let m=0;T(),a===!1&&(t>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new wt(d,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(p,2));function T(){const x=new F,L=new F;let I=0;const P=(n-t)/i;for(let U=0;U<=o;U++){const C=[],E=U/o,N=E*(n-t)+t;for(let Q=0;Q<=r;Q++){const X=Q/r,ee=X*c+l,se=Math.sin(ee),Z=Math.cos(ee);L.x=N*se,L.y=-E*i+g,L.z=N*Z,d.push(L.x,L.y,L.z),x.set(se,P,Z).normalize(),f.push(x.x,x.y,x.z),p.push(X,1-E),C.push(_++)}v.push(C)}for(let U=0;U<r;U++)for(let C=0;C<o;C++){const E=v[C][U],N=v[C+1][U],Q=v[C+1][U+1],X=v[C][U+1];(t>0||C!==0)&&(u.push(E,N,X),I+=3),(n>0||C!==o-1)&&(u.push(N,Q,X),I+=3)}h.addGroup(m,I,0),m+=I}function S(x){const L=_,I=new ce,P=new F;let U=0;const C=x===!0?t:n,E=x===!0?1:-1;for(let Q=1;Q<=r;Q++)d.push(0,g*E,0),f.push(0,E,0),p.push(.5,.5),_++;const N=_;for(let Q=0;Q<=r;Q++){const ee=Q/r*c+l,se=Math.cos(ee),Z=Math.sin(ee);P.x=C*Z,P.y=g*E,P.z=C*se,d.push(P.x,P.y,P.z),f.push(0,E,0),I.x=se*.5+.5,I.y=Z*.5*E+.5,p.push(I.x,I.y),_++}for(let Q=0;Q<r;Q++){const X=L+Q,ee=N+Q;x===!0?u.push(ee,ee+1,X):u.push(ee+1,ee,X),U+=3}h.addGroup(m,U,x===!0?1:2),m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ia extends Hc{constructor(t){super(t),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(new Hc().fromJSON(r))}return this}}const Bx={triangulate:function(s,t,n=2){const i=t&&t.length,r=i?t[0]*n:s.length;let o=Wp(s,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,u,d,f,p;if(i&&(o=Gx(s,t,o,n)),s.length>80*n){l=h=s[0],c=u=s[1];for(let _=n;_<r;_+=n)d=s[_],f=s[_+1],d<l&&(l=d),f<c&&(c=f),d>h&&(h=d),f>u&&(u=f);p=Math.max(h-l,u-c),p=p!==0?32767/p:0}return Jr(o,a,n,l,c,p,0),a}};function Wp(s,t,n,i,r){let o,a;if(r===e0(s,t,n,i)>0)for(o=t;o<n;o+=i)a=ad(o,s[o],s[o+1],a);else for(o=n-i;o>=t;o-=i)a=ad(o,s[o],s[o+1],a);return a&&La(a,a.next)&&(Qr(a),a=a.next),a}function os(s,t){if(!s)return s;t||(t=s);let n=s,i;do if(i=!1,!n.steiner&&(La(n,n.next)||xt(n.prev,n,n.next)===0)){if(Qr(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Jr(s,t,n,i,r,o,a){if(!s)return;!a&&o&&jx(s,i,r,o);let l=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,o?zx(s,i,r,o):kx(s)){t.push(c.i/n|0),t.push(s.i/n|0),t.push(h.i/n|0),Qr(s),s=h.next,l=h.next;continue}if(s=h,s===l){a?a===1?(s=Hx(os(s),t,n),Jr(s,t,n,i,r,o,2)):a===2&&Vx(s,t,n,i,r,o):Jr(os(s),t,n,i,r,o,1);break}}}function kx(s){const t=s.prev,n=s,i=s.next;if(xt(t,n,i)>=0)return!1;const r=t.x,o=n.x,a=i.x,l=t.y,c=n.y,h=i.y,u=r<o?r<a?r:a:o<a?o:a,d=l<c?l<h?l:h:c<h?c:h,f=r>o?r>a?r:a:o>a?o:a,p=l>c?l>h?l:h:c>h?c:h;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=p&&Os(r,l,o,c,a,h,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function zx(s,t,n,i){const r=s.prev,o=s,a=s.next;if(xt(r,o,a)>=0)return!1;const l=r.x,c=o.x,h=a.x,u=r.y,d=o.y,f=a.y,p=l<c?l<h?l:h:c<h?c:h,_=u<d?u<f?u:f:d<f?d:f,v=l>c?l>h?l:h:c>h?c:h,g=u>d?u>f?u:f:d>f?d:f,m=Vc(p,_,t,n,i),T=Vc(v,g,t,n,i);let S=s.prevZ,x=s.nextZ;for(;S&&S.z>=m&&x&&x.z<=T;){if(S.x>=p&&S.x<=v&&S.y>=_&&S.y<=g&&S!==r&&S!==a&&Os(l,u,c,d,h,f,S.x,S.y)&&xt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=v&&x.y>=_&&x.y<=g&&x!==r&&x!==a&&Os(l,u,c,d,h,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=m;){if(S.x>=p&&S.x<=v&&S.y>=_&&S.y<=g&&S!==r&&S!==a&&Os(l,u,c,d,h,f,S.x,S.y)&&xt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=g&&x!==r&&x!==a&&Os(l,u,c,d,h,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Hx(s,t,n){let i=s;do{const r=i.prev,o=i.next.next;!La(r,o)&&Xp(r,i,i.next,o)&&Zr(r,o)&&Zr(o,r)&&(t.push(r.i/n|0),t.push(i.i/n|0),t.push(o.i/n|0),Qr(i),Qr(i.next),i=s=o),i=i.next}while(i!==s);return os(i)}function Vx(s,t,n,i,r,o){let a=s;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Jx(a,l)){let c=$p(a,l);a=os(a,a.next),c=os(c,c.next),Jr(a,t,n,i,r,o,0),Jr(c,t,n,i,r,o,0);return}l=l.next}a=a.next}while(a!==s)}function Gx(s,t,n,i){const r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;o++)l=t[o]*i,c=o<a-1?t[o+1]*i:s.length,h=Wp(s,l,c,i,!1),h===h.next&&(h.steiner=!0),r.push(Kx(h));for(r.sort(Wx),o=0;o<r.length;o++)n=Xx(r[o],n);return n}function Wx(s,t){return s.x-t.x}function Xx(s,t){const n=$x(s,t);if(!n)return t;const i=$p(n,s);return os(i,i.next),os(n,n.next)}function $x(s,t){let n=t,i=-1/0,r;const o=s.x,a=s.y;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){const f=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=o&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===o))return r}n=n.next}while(n!==t);if(!r)return null;const l=r,c=r.x,h=r.y;let u=1/0,d;n=r;do o>=n.x&&n.x>=c&&o!==n.x&&Os(a<h?o:i,a,c,h,a<h?i:o,a,n.x,n.y)&&(d=Math.abs(a-n.y)/(o-n.x),Zr(n,s)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&qx(r,n)))&&(r=n,u=d)),n=n.next;while(n!==l);return r}function qx(s,t){return xt(s.prev,s,t.prev)<0&&xt(t.next,s,s.next)<0}function jx(s,t,n,i){let r=s;do r.z===0&&(r.z=Vc(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==s);r.prevZ.nextZ=null,r.prevZ=null,Yx(r)}function Yx(s){let t,n,i,r,o,a,l,c,h=1;do{for(n=s,s=null,o=null,a=0;n;){for(a++,i=n,l=0,t=0;t<h&&(l++,i=i.nextZ,!!i);t++);for(c=h;l>0||c>0&&i;)l!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,l--):(r=i,i=i.nextZ,c--),o?o.nextZ=r:s=r,r.prevZ=o,o=r;n=i}o.nextZ=null,h*=2}while(a>1);return s}function Vc(s,t,n,i,r){return s=(s-n)*r|0,t=(t-i)*r|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Kx(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function Os(s,t,n,i,r,o,a,l){return(r-a)*(t-l)>=(s-a)*(o-l)&&(s-a)*(i-l)>=(n-a)*(t-l)&&(n-a)*(o-l)>=(r-a)*(i-l)}function Jx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Zx(s,t)&&(Zr(s,t)&&Zr(t,s)&&Qx(s,t)&&(xt(s.prev,s,t.prev)||xt(s,t.prev,t))||La(s,t)&&xt(s.prev,s,s.next)>0&&xt(t.prev,t,t.next)>0)}function xt(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function La(s,t){return s.x===t.x&&s.y===t.y}function Xp(s,t,n,i){const r=ko(xt(s,t,n)),o=ko(xt(s,t,i)),a=ko(xt(n,i,s)),l=ko(xt(n,i,t));return!!(r!==o&&a!==l||r===0&&Bo(s,n,t)||o===0&&Bo(s,i,t)||a===0&&Bo(n,s,i)||l===0&&Bo(n,t,i))}function Bo(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function ko(s){return s>0?1:s<0?-1:0}function Zx(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&Xp(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function Zr(s,t){return xt(s.prev,s,s.next)<0?xt(s,t,s.next)>=0&&xt(s,s.prev,t)>=0:xt(s,t,s.prev)<0||xt(s,s.next,t)<0}function Qx(s,t){let n=s,i=!1;const r=(s.x+t.x)/2,o=(s.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==s);return i}function $p(s,t){const n=new Gc(s.i,s.x,s.y),i=new Gc(t.i,t.x,t.y),r=s.next,o=t.prev;return s.next=t,t.prev=s,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function ad(s,t,n,i){const r=new Gc(s,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Gc(s,t,n){this.i=s,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function e0(s,t,n,i){let r=0;for(let o=t,a=n-i;o<n;o+=i)r+=(s[a]-s[o])*(s[o+1]+s[a+1]),a=o;return r}class qs{static area(t){const n=t.length;let i=0;for(let r=n-1,o=0;o<n;r=o++)i+=t[r].x*t[o].y-t[o].x*t[r].y;return i*.5}static isClockWise(t){return qs.area(t)<0}static triangulateShape(t,n){const i=[],r=[],o=[];ld(t),cd(i,t);let a=t.length;n.forEach(ld);for(let c=0;c<n.length;c++)r.push(a),a+=n[c].length,cd(i,n[c]);const l=Bx.triangulate(i,r);for(let c=0;c<l.length;c+=3)o.push(l.slice(c,c+3));return o}}function ld(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function cd(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class Dh extends nn{constructor(t=new ia([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const i=this,r=[],o=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];a(h)}this.setAttribute("position",new wt(r,3)),this.setAttribute("uv",new wt(o,2)),this.computeVertexNormals();function a(l){const c=[],h=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const m=n.extrudePath,T=n.UVGenerator!==void 0?n.UVGenerator:t0;let S,x=!1,L,I,P,U;m&&(S=m.getSpacedPoints(u),x=!0,f=!1,L=m.computeFrenetFrames(u,!1),I=new F,P=new F,U=new F),f||(g=0,p=0,_=0,v=0);const C=l.extractPoints(h);let E=C.shape;const N=C.holes;if(!qs.isClockWise(E)){E=E.reverse();for(let w=0,R=N.length;w<R;w++){const M=N[w];qs.isClockWise(M)&&(N[w]=M.reverse())}}const X=qs.triangulateShape(E,N),ee=E;for(let w=0,R=N.length;w<R;w++){const M=N[w];E=E.concat(M)}function se(w,R,M){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(R,M)}const Z=E.length,ie=X.length;function W(w,R,M){let $,O,V;const G=w.x-R.x,te=w.y-R.y,q=M.x-w.x,b=M.y-w.y,y=G*G+te*te,D=G*b-te*q;if(Math.abs(D)>Number.EPSILON){const H=Math.sqrt(y),Y=Math.sqrt(q*q+b*b),j=R.x-te/H,fe=R.y+G/H,ae=M.x-b/Y,ge=M.y+q/Y,Ue=((ae-j)*b-(ge-fe)*q)/(G*b-te*q);$=j+G*Ue-w.x,O=fe+te*Ue-w.y;const le=$*$+O*O;if(le<=2)return new ce($,O);V=Math.sqrt(le/2)}else{let H=!1;G>Number.EPSILON?q>Number.EPSILON&&(H=!0):G<-Number.EPSILON?q<-Number.EPSILON&&(H=!0):Math.sign(te)===Math.sign(b)&&(H=!0),H?($=-te,O=G,V=Math.sqrt(y)):($=G,O=te,V=Math.sqrt(y/2))}return new ce($/V,O/V)}const me=[];for(let w=0,R=ee.length,M=R-1,$=w+1;w<R;w++,M++,$++)M===R&&(M=0),$===R&&($=0),me[w]=W(ee[w],ee[M],ee[$]);const ye=[];let be,Le=me.concat();for(let w=0,R=N.length;w<R;w++){const M=N[w];be=[];for(let $=0,O=M.length,V=O-1,G=$+1;$<O;$++,V++,G++)V===O&&(V=0),G===O&&(G=0),be[$]=W(M[$],M[V],M[G]);ye.push(be),Le=Le.concat(be)}for(let w=0;w<g;w++){const R=w/g,M=p*Math.cos(R*Math.PI/2),$=_*Math.sin(R*Math.PI/2)+v;for(let O=0,V=ee.length;O<V;O++){const G=se(ee[O],me[O],$);de(G.x,G.y,-M)}for(let O=0,V=N.length;O<V;O++){const G=N[O];be=ye[O];for(let te=0,q=G.length;te<q;te++){const b=se(G[te],be[te],$);de(b.x,b.y,-M)}}}const et=_+v;for(let w=0;w<Z;w++){const R=f?se(E[w],Le[w],et):E[w];x?(P.copy(L.normals[0]).multiplyScalar(R.x),I.copy(L.binormals[0]).multiplyScalar(R.y),U.copy(S[0]).add(P).add(I),de(U.x,U.y,U.z)):de(R.x,R.y,0)}for(let w=1;w<=u;w++)for(let R=0;R<Z;R++){const M=f?se(E[R],Le[R],et):E[R];x?(P.copy(L.normals[w]).multiplyScalar(M.x),I.copy(L.binormals[w]).multiplyScalar(M.y),U.copy(S[w]).add(P).add(I),de(U.x,U.y,U.z)):de(M.x,M.y,d/u*w)}for(let w=g-1;w>=0;w--){const R=w/g,M=p*Math.cos(R*Math.PI/2),$=_*Math.sin(R*Math.PI/2)+v;for(let O=0,V=ee.length;O<V;O++){const G=se(ee[O],me[O],$);de(G.x,G.y,d+M)}for(let O=0,V=N.length;O<V;O++){const G=N[O];be=ye[O];for(let te=0,q=G.length;te<q;te++){const b=se(G[te],be[te],$);x?de(b.x,b.y+S[u-1].y,S[u-1].x+M):de(b.x,b.y,d+M)}}}re(),ue();function re(){const w=r.length/3;if(f){let R=0,M=Z*R;for(let $=0;$<ie;$++){const O=X[$];Re(O[2]+M,O[1]+M,O[0]+M)}R=u+g*2,M=Z*R;for(let $=0;$<ie;$++){const O=X[$];Re(O[0]+M,O[1]+M,O[2]+M)}}else{for(let R=0;R<ie;R++){const M=X[R];Re(M[2],M[1],M[0])}for(let R=0;R<ie;R++){const M=X[R];Re(M[0]+Z*u,M[1]+Z*u,M[2]+Z*u)}}i.addGroup(w,r.length/3-w,0)}function ue(){const w=r.length/3;let R=0;Ae(ee,R),R+=ee.length;for(let M=0,$=N.length;M<$;M++){const O=N[M];Ae(O,R),R+=O.length}i.addGroup(w,r.length/3-w,1)}function Ae(w,R){let M=w.length;for(;--M>=0;){const $=M;let O=M-1;O<0&&(O=w.length-1);for(let V=0,G=u+g*2;V<G;V++){const te=Z*V,q=Z*(V+1),b=R+$+te,y=R+O+te,D=R+O+q,H=R+$+q;Be(b,y,D,H)}}}function de(w,R,M){c.push(w),c.push(R),c.push(M)}function Re(w,R,M){Ie(w),Ie(R),Ie(M);const $=r.length/3,O=T.generateTopUV(i,r,$-3,$-2,$-1);Qe(O[0]),Qe(O[1]),Qe(O[2])}function Be(w,R,M,$){Ie(w),Ie(R),Ie($),Ie(R),Ie(M),Ie($);const O=r.length/3,V=T.generateSideWallUV(i,r,O-6,O-3,O-2,O-1);Qe(V[0]),Qe(V[1]),Qe(V[3]),Qe(V[1]),Qe(V[2]),Qe(V[3])}function Ie(w){r.push(c[w*3+0]),r.push(c[w*3+1]),r.push(c[w*3+2])}function Qe(w){o.push(w.x),o.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return n0(n,i,t)}static fromJSON(t,n){const i=[];for(let o=0,a=t.shapes.length;o<a;o++){const l=n[t.shapes[o]];i.push(l)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new zc[r.type]().fromJSON(r)),new Dh(i,t.options)}}const t0={generateTopUV:function(s,t,n,i,r){const o=t[n*3],a=t[n*3+1],l=t[i*3],c=t[i*3+1],h=t[r*3],u=t[r*3+1];return[new ce(o,a),new ce(l,c),new ce(h,u)]},generateSideWallUV:function(s,t,n,i,r,o){const a=t[n*3],l=t[n*3+1],c=t[n*3+2],h=t[i*3],u=t[i*3+1],d=t[i*3+2],f=t[r*3],p=t[r*3+1],_=t[r*3+2],v=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(l-u)<Math.abs(a-h)?[new ce(a,1-c),new ce(h,1-d),new ce(f,1-_),new ce(v,1-m)]:[new ce(l,1-c),new ce(u,1-d),new ce(p,1-_),new ce(g,1-m)]}};function n0(s,t,n){if(n.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){const o=s[i];n.shapes.push(o.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Ia extends nn{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const o=t/2,a=n/2,l=Math.floor(i),c=Math.floor(r),h=l+1,u=c+1,d=t/l,f=n/c,p=[],_=[],v=[],g=[];for(let m=0;m<u;m++){const T=m*f-a;for(let S=0;S<h;S++){const x=S*d-o;_.push(x,-T,0),v.push(0,0,1),g.push(S/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<l;T++){const S=T+h*m,x=T+h*(m+1),L=T+1+h*(m+1),I=T+1+h*m;p.push(S,x,I),p.push(x,L,I)}this.setIndex(p),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}class cr extends nn{constructor(t=1,n=32,i=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let h=0;const u=[],d=new F,f=new F,p=[],_=[],v=[],g=[];for(let m=0;m<=i;m++){const T=[],S=m/i;let x=0;m===0&&a===0?x=.5/n:m===i&&c===Math.PI&&(x=-.5/n);for(let L=0;L<=n;L++){const I=L/n;d.x=-t*Math.cos(r+I*o)*Math.sin(a+S*l),d.y=t*Math.cos(a+S*l),d.z=t*Math.sin(r+I*o)*Math.sin(a+S*l),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(I+x,1-S),T.push(h++)}u.push(T)}for(let m=0;m<i;m++)for(let T=0;T<n;T++){const S=u[m][T+1],x=u[m][T],L=u[m+1][T],I=u[m+1][T+1];(m!==0||a>0)&&p.push(S,x,I),(m!==i-1||c<Math.PI)&&p.push(x,L,I)}this.setIndex(p),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class i0 extends Bt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nh extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yn extends Nh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tn extends Sn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class s0 extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class r0 extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Da extends Sn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}function zo(s,t,n){return!s||!n&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function o0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function a0(s){function t(r,o){return s[r]-s[o]}const n=s.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i}function hd(s,t,n){const i=s.length,r=new s.constructor(i);for(let o=0,a=0;a!==i;++o){const l=n[o]*t;for(let c=0;c!==t;++c)r[a++]=s[l+c]}return r}function qp(s,t,n,i){let r=1,o=s[0];for(;o!==void 0&&o[i]===void 0;)o=s[r++];if(o===void 0)return;let a=o[i];if(a!==void 0)if(Array.isArray(a))do a=o[i],a!==void 0&&(t.push(o.time),n.push.apply(n,a)),o=s[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[i],a!==void 0&&(t.push(o.time),a.toArray(n,n.length)),o=s[r++];while(o!==void 0);else do a=o[i],a!==void 0&&(t.push(o.time),n.push(a)),o=s[r++];while(o!==void 0)}class oo{constructor(t,n,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],o=n[i-1];e:{t:{let a;n:{i:if(!(t<r)){for(let l=i+2;;){if(r===void 0){if(t<o)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(o=r,r=n[++i],t<r)break t}a=n.length;break n}if(!(t>=o)){const l=n[1];t<l&&(i=2,o=l);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=n[--i-1],t>=o)break t}a=i,i=0;break n}break e}for(;i<a;){const l=i+a>>>1;t<n[l]?a=l:i=l+1}if(r=n[i],o=n[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let a=0;a!==r;++a)n[a]=i[o+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class l0 extends oo{constructor(t,n,i,r){super(t,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Us,endingEnd:Us}}intervalChanged_(t,n,i){const r=this.parameterPositions;let o=t-2,a=t+1,l=r[o],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case Fs:o=t,l=2*n-i;break;case fa:o=r.length-2,l=n+r[o]-r[o+1];break;default:o=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Fs:a=t,c=2*i-n;break;case fa:a=1,c=i+r[1]-r[0];break;default:a=t-1,c=n}const h=(i-n)*.5,u=this.valueSize;this._weightPrev=h/(n-l),this._weightNext=h/(c-i),this._offsetPrev=o*u,this._offsetNext=a*u}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-n)/(r-n),v=_*_,g=v*_,m=-f*g+2*f*v-f*_,T=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,S=(-1-p)*g+(1.5+p)*v+.5*_,x=p*g-p*v;for(let L=0;L!==l;++L)o[L]=m*a[u+L]+T*a[h+L]+S*a[c+L]+x*a[d+L];return o}}class jp extends oo{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=(i-n)/(r-n),d=1-u;for(let f=0;f!==l;++f)o[f]=a[h+f]*d+a[c+f]*u;return o}}class c0 extends oo{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Kn{constructor(t,n,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zo(n,this.TimeBufferType),this.values=zo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:zo(t.times,Array),values:zo(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new c0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new l0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case jr:n=this.InterpolantFactoryMethodDiscrete;break;case Yr:n=this.InterpolantFactoryMethodLinear;break;case Za:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=t}return this}trim(t,n){const i=this.times,r=i.length;let o=0,a=r-1;for(;o!==r&&i[o]<t;)++o;for(;a!==-1&&i[a]>n;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);const l=this.getValueSize();this.times=i.slice(o,a),this.values=this.values.slice(o*l,a*l)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==o;l++){const c=i[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(r!==void 0&&o0(r))for(let l=0,c=r.length;l!==c;++l){const h=r[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){const t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Za,o=t.length-1;let a=1;for(let l=1;l<o;++l){let c=!1;const h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(r)c=!0;else{const d=l*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){const v=n[d+_];if(v!==n[f+_]||v!==n[p+_]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];const d=l*i,f=a*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++a}}if(o>0){t[a]=t[o];for(let l=o*i,c=a*i,h=0;h!==i;++h)n[c+h]=n[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){const t=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,t,n);return r.createInterpolant=this.createInterpolant,r}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Yr;class hr extends Kn{constructor(t,n,i){super(t,n,i)}}hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=jr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yp extends Kn{}Yp.prototype.ValueTypeName="color";class rr extends Kn{}rr.prototype.ValueTypeName="number";class h0 extends oo{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-n)/(r-n);let h=t*l;for(let u=h+l;h!==u;h+=4)Nn.slerpFlat(o,0,a,h-l,a,h,c);return o}}class or extends Kn{InterpolantFactoryMethodLinear(t){return new h0(this.times,this.values,this.getValueSize(),t)}}or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Kn{constructor(t,n,i){super(t,n,i)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=jr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Kn{}ar.prototype.ValueTypeName="vector";class Wc{constructor(t="",n=-1,i=[],r=Eh){this.name=t,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(t){const n=[],i=t.tracks,r=1/(t.fps||1);for(let a=0,l=i.length;a!==l;++a)n.push(d0(i[a]).scale(r));const o=new this(t.name,t.duration,n,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const n=[],i=t.tracks,r={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,a=i.length;o!==a;++o)n.push(Kn.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(t,n,i,r){const o=n.length,a=[];for(let l=0;l<o;l++){let c=[],h=[];c.push((l+o-1)%o,l,(l+1)%o),h.push(0,1,0);const u=a0(c);c=hd(c,1,u),h=hd(h,1,u),!r&&c[0]===0&&(c.push(o),h.push(h[0])),a.push(new rr(".morphTargetInfluences["+n[l].name+"]",c,h).scale(1/i))}return new this(t,-1,a)}static findByName(t,n){let i=t;if(!Array.isArray(t)){const r=t;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(t,n,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,c=t.length;l<c;l++){const h=t[l],u=h.name.match(o);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(h)}}const a=[];for(const l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],n,i));return a}static parseAnimation(t,n){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,_,v){if(p.length!==0){const g=[],m=[];qp(p,g,m,_),g.length!==0&&v.push(new d(f,g,m))}},r=[],o=t.name||"default",a=t.fps||30,l=t.blendMode;let c=t.length||-1;const h=t.hierarchy||[];for(let d=0;d<h.length;d++){const f=h[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)p[f[_].morphTargets[v]]=-1;for(const v in p){const g=[],m=[];for(let T=0;T!==f[_].morphTargets.length;++T){const S=f[_];g.push(S.time),m.push(S.morphTarget===v?1:0)}r.push(new rr(".morphTargetInfluence["+v+"]",g,m))}c=p.length*a}else{const p=".bones["+n[d].name+"]";i(ar,p+".position",f,"pos",r),i(or,p+".quaternion",f,"rot",r),i(ar,p+".scale",f,"scl",r)}}return r.length===0?null:new this(o,c,r,l)}resetDuration(){const t=this.tracks;let n=0;for(let i=0,r=t.length;i!==r;++i){const o=this.tracks[i];n=Math.max(n,o.times[o.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function u0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return ar;case"color":return Yp;case"quaternion":return or;case"bool":case"boolean":return hr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function d0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=u0(s.type);if(s.times===void 0){const n=[],i=[];qp(s.keys,n,i,"value"),s.times=n,s.values=i}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Li={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cs{constructor(t,n,i){const r=this;let o=!1,a=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){l++,o===!1&&r.onStart!==void 0&&r.onStart(u,a,l),o=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const p=h[d],_=h[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const f0=new cs;class hs{constructor(t){this.manager=t!==void 0?t:f0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,o){i.load(t,r,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class p0 extends Error{constructor(t,n){super(t),this.response=n}}class Uh extends hs{constructor(t){super(t)}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Li.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(o),this.manager.itemEnd(t)},0),o;if(si[t]!==void 0){si[t].push({onLoad:n,onProgress:i,onError:r});return}si[t]=[],si[t].push({onLoad:n,onProgress:i,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=si[t],d=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let v=0;const g=new ReadableStream({start(m){T();function T(){d.read().then(({done:S,value:x})=>{if(S)m.close();else{v+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let I=0,P=u.length;I<P;I++){const U=u[I];U.onProgress&&U.onProgress(L)}m.enqueue(x),T()}},S=>{m.error(S)})}}});return new Response(g)}else throw new p0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,l));case"json":return h.json();default:if(l===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return h.arrayBuffer().then(_=>p.decode(_))}}}).then(h=>{Li.add(t,h);const u=si[t];delete si[t];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{const u=si[t];if(u===void 0)throw this.manager.itemError(t),h;delete si[t];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class m0 extends hs{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=Li.get(t);if(a!==void 0)return o.manager.itemStart(t),setTimeout(function(){n&&n(a),o.manager.itemEnd(t)},0),a;const l=Kr("img");function c(){u(),Li.add(t,this),n&&n(this),o.manager.itemEnd(t)}function h(d){u(),r&&r(d),o.manager.itemError(t),o.manager.itemEnd(t)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(t),l.src=t,l}}class us extends hs{constructor(t){super(t)}load(t,n,i,r){const o=new Lt,a=new m0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){o.image=l,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class Fh extends vt{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Tl=new We,ud=new F,dd=new F;class Oh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;ud.setFromMatrixPosition(t.matrixWorld),n.position.copy(ud),dd.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(dd),n.updateMatrixWorld(),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g0 extends Oh{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const n=this.camera,i=nr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=t.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class _0 extends Fh{constructor(t,n,i=0,r=Math.PI/3,o=0,a=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new g0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const fd=new We,br=new F,Al=new F;class v0 extends Oh{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),br.setFromMatrixPosition(t.matrixWorld),i.position.copy(br),Al.copy(i.position),Al.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Al),i.updateMatrixWorld(),r.makeTranslation(-br.x,-br.y,-br.z),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}}class x0 extends Fh{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new v0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Na extends Dp{constructor(t=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-t,a=i+t,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class y0 extends Oh{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kp extends Fh{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let n="";for(let i=0,r=t.length;i<r;i++)n+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}class M0 extends hs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=Li.get(t);if(a!==void 0){if(o.manager.itemStart(t),a.then){a.then(h=>{n&&n(h),o.manager.itemEnd(t)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){n&&n(a),o.manager.itemEnd(t)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(t,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(h){return Li.add(t,h),n&&n(h),o.manager.itemEnd(t),h}).catch(function(h){r&&r(h),Li.remove(t),o.manager.itemError(t),o.manager.itemEnd(t)});Li.add(t,c),o.manager.itemStart(t)}}class S0 extends $t{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=pd();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function pd(){return performance.now()}class b0{constructor(t,n,i){this.binding=t,this.valueSize=i;let r,o,a;switch(n){case"quaternion":r=this._slerp,o=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,o=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,o=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=o,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,n){const i=this.buffer,r=this.valueSize,o=t*r+r;let a=this.cumulativeWeight;if(a===0){for(let l=0;l!==r;++l)i[o+l]=i[l];a=n}else{a+=n;const l=n/a;this._mixBufferRegion(i,o,0,l,r)}this.cumulativeWeight=a}accumulateAdditive(t){const n=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(n,r,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const n=this.valueSize,i=this.buffer,r=t*n+n,o=this.cumulativeWeight,a=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const c=n*this._origIndex;this._mixBufferRegion(i,r,c,1-o,n)}a>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*n,1,n);for(let c=n,h=n+n;c!==h;++c)if(i[c]!==i[c+n]){l.setValue(i,r);break}}saveOriginalState(){const t=this.binding,n=this.buffer,i=this.valueSize,r=i*this._origIndex;t.getValue(n,r);for(let o=i,a=r;o!==a;++o)n[o]=n[r+o%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,n=t+this.valueSize;for(let i=t;i<n;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,n=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[n+i]=this.buffer[t+i]}_select(t,n,i,r,o){if(r>=.5)for(let a=0;a!==o;++a)t[n+a]=t[i+a]}_slerp(t,n,i,r){Nn.slerpFlat(t,n,t,n,t,i,r)}_slerpAdditive(t,n,i,r,o){const a=this._workIndex*o;Nn.multiplyQuaternionsFlat(t,a,t,n,t,i),Nn.slerpFlat(t,n,t,n,t,a,r)}_lerp(t,n,i,r,o){const a=1-r;for(let l=0;l!==o;++l){const c=n+l;t[c]=t[c]*a+t[i+l]*r}}_lerpAdditive(t,n,i,r,o){for(let a=0;a!==o;++a){const l=n+a;t[l]=t[l]+t[i+a]*r}}}const Bh="\\[\\]\\.:\\/",E0=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",T0="[^"+Bh.replace("\\.","")+"]",A0=/((?:WC+[\/:])*)/.source.replace("WC",kh),w0=/(WCOD+)?/.source.replace("WCOD",T0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),R0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),P0=new RegExp("^"+A0+w0+C0+R0+"$"),L0=["material","materials","bones","map"];class I0{constructor(t,n,i){const r=i||lt.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,r)}getValue(t,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,n)}setValue(t,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}}class lt{constructor(t,n,i){this.path=n,this.parsedPath=i||lt.parseTrackName(n),this.node=lt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new lt.Composite(t,n,i):new lt(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E0,"")}static parseTrackName(t){const n=P0.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);L0.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(o){for(let a=0;a<o.length;a++){const l=o[a];if(l.name===n||l.uuid===n)return l;const c=i(l.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let o=n.propertyIndex;if(t||(t=lt.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const a=t[r];if(a===void 0){const h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=I0;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class D0{constructor(t,n,i=null,r=n.blendMode){this._mixer=t,this._clip=n,this._localRoot=i,this.blendMode=r;const o=n.tracks,a=o.length,l=new Array(a),c={endingStart:Us,endingEnd:Us};for(let h=0;h!==a;++h){const u=o[h].createInterpolant(null);l[h]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,n){return this.loop=t,this.repetitions=n,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,n,i){if(t.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,o=t._clip.duration,a=o/r,l=r/o;t.warp(1,a,n),this.warp(l,1,n)}return this}crossFadeTo(t,n,i){return t.crossFadeFrom(this,n,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,n,i){const r=this._mixer,o=r.time,a=this.timeScale;let l=this._timeScaleInterpolant;l===null&&(l=r._lendControlInterpolant(),this._timeScaleInterpolant=l);const c=l.parameterPositions,h=l.sampleValues;return c[0]=o,c[1]=o+i,h[0]=t/a,h[1]=n/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,n,i,r){if(!this.enabled){this._updateWeight(t);return}const o=this._startTime;if(o!==null){const c=(t-o)*i;c<0||i===0?n=0:(this._startTime=null,n=i*c)}n*=this._updateTimeScale(t);const a=this._updateTime(n),l=this._updateWeight(t);if(l>0){const c=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case fv:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),h[u].accumulateAdditive(l);break;case Eh:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),h[u].accumulate(r,l)}}}_updateWeight(t){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(t)[0];n*=r,t>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(t){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(t)[0];n*=r,t>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(t){const n=this._clip.duration,i=this.loop;let r=this.time+t,o=this._loopCount;const a=i===dv;if(t===0)return o===-1?r:a&&(o&1)===1?n-r:r;if(i===hv){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(o===-1&&(t>=0?(o=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=n||r<0){const l=Math.floor(r/n);r-=n*l,o+=Math.abs(l);const c=this.repetitions-o;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const h=t<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=o,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=r;if(a&&(o&1)===1)return n-r}return r}_setEndings(t,n,i){const r=this._interpolantSettings;i?(r.endingStart=Fs,r.endingEnd=Fs):(t?r.endingStart=this.zeroSlopeAtStart?Fs:Us:r.endingStart=fa,n?r.endingEnd=this.zeroSlopeAtEnd?Fs:Us:r.endingEnd=fa)}_scheduleFading(t,n,i){const r=this._mixer,o=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=o,c[0]=n,l[1]=o+t,c[1]=i,this}}const N0=new Float32Array(1);class U0 extends ls{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,n){const i=t._localRoot||this._root,r=t._clip.tracks,o=r.length,a=t._propertyBindings,l=t._interpolants,c=i.uuid,h=this._bindingsByRootAndName;let u=h[c];u===void 0&&(u={},h[c]=u);for(let d=0;d!==o;++d){const f=r[d],p=f.name;let _=u[p];if(_!==void 0)++_.referenceCount,a[d]=_;else{if(_=a[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,p));continue}const v=n&&n._propertyBindings[d].binding.parsedPath;_=new b0(lt.create(i,p,v),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,p),a[d]=_}l[d].resultBuffer=_.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,r=t._clip.uuid,o=this._actionsByClip[r];this._bindAction(t,o&&o.knownActions[0]),this._addInactiveAction(t,r,i)}const n=t._propertyBindings;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const n=t._propertyBindings;for(let i=0,r=n.length;i!==r;++i){const o=n[i];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const n=t._cacheIndex;return n!==null&&n<this._nActiveActions}_addInactiveAction(t,n,i){const r=this._actions,o=this._actionsByClip;let a=o[n];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,o[n]=a;else{const l=a.knownActions;t._byClipCacheIndex=l.length,l.push(t)}t._cacheIndex=r.length,r.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const n=this._actions,i=n[n.length-1],r=t._cacheIndex;i._cacheIndex=r,n[r]=i,n.pop(),t._cacheIndex=null;const o=t._clip.uuid,a=this._actionsByClip,l=a[o],c=l.knownActions,h=c[c.length-1],u=t._byClipCacheIndex;h._byClipCacheIndex=u,c[u]=h,c.pop(),t._byClipCacheIndex=null;const d=l.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],c.length===0&&delete a[o],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const n=t._propertyBindings;for(let i=0,r=n.length;i!==r;++i){const o=n[i];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(t){const n=this._actions,i=t._cacheIndex,r=this._nActiveActions++,o=n[r];t._cacheIndex=r,n[r]=t,o._cacheIndex=i,n[i]=o}_takeBackAction(t){const n=this._actions,i=t._cacheIndex,r=--this._nActiveActions,o=n[r];t._cacheIndex=r,n[r]=t,o._cacheIndex=i,n[i]=o}_addInactiveBinding(t,n,i){const r=this._bindingsByRootAndName,o=this._bindings;let a=r[n];a===void 0&&(a={},r[n]=a),a[i]=t,t._cacheIndex=o.length,o.push(t)}_removeInactiveBinding(t){const n=this._bindings,i=t.binding,r=i.rootNode.uuid,o=i.path,a=this._bindingsByRootAndName,l=a[r],c=n[n.length-1],h=t._cacheIndex;c._cacheIndex=h,n[h]=c,n.pop(),delete l[o],Object.keys(l).length===0&&delete a[r]}_lendBinding(t){const n=this._bindings,i=t._cacheIndex,r=this._nActiveBindings++,o=n[r];t._cacheIndex=r,n[r]=t,o._cacheIndex=i,n[i]=o}_takeBackBinding(t){const n=this._bindings,i=t._cacheIndex,r=--this._nActiveBindings,o=n[r];t._cacheIndex=r,n[r]=t,o._cacheIndex=i,n[i]=o}_lendControlInterpolant(){const t=this._controlInterpolants,n=this._nActiveControlInterpolants++;let i=t[n];return i===void 0&&(i=new jp(new Float32Array(2),new Float32Array(2),1,N0),i.__cacheIndex=n,t[n]=i),i}_takeBackControlInterpolant(t){const n=this._controlInterpolants,i=t.__cacheIndex,r=--this._nActiveControlInterpolants,o=n[r];t.__cacheIndex=r,n[r]=t,o.__cacheIndex=i,n[i]=o}clipAction(t,n,i){const r=n||this._root,o=r.uuid;let a=typeof t=="string"?Wc.findByName(r,t):t;const l=a!==null?a.uuid:t,c=this._actionsByClip[l];let h=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Eh),c!==void 0){const d=c.actionByRoot[o];if(d!==void 0&&d.blendMode===i)return d;h=c.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const u=new D0(this,a,n,i);return this._bindAction(u,h),this._addInactiveAction(u,l,o),u}existingAction(t,n){const i=n||this._root,r=i.uuid,o=typeof t=="string"?Wc.findByName(i,t):t,a=o?o.uuid:t,l=this._actionsByClip[a];return l!==void 0&&l.actionByRoot[r]||null}stopAllAction(){const t=this._actions,n=this._nActiveActions;for(let i=n-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const n=this._actions,i=this._nActiveActions,r=this.time+=t,o=Math.sign(t),a=this._accuIndex^=1;for(let h=0;h!==i;++h)n[h]._update(r,t,o,a);const l=this._bindings,c=this._nActiveBindings;for(let h=0;h!==c;++h)l[h].apply(a);return this}setTime(t){this.time=0;for(let n=0;n<this._actions.length;n++)this._actions[n].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const n=this._actions,i=t.uuid,r=this._actionsByClip,o=r[i];if(o!==void 0){const a=o.knownActions;for(let l=0,c=a.length;l!==c;++l){const h=a[l];this._deactivateAction(h);const u=h._cacheIndex,d=n[n.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,d._cacheIndex=u,n[u]=d,n.pop(),this._removeInactiveBindingsForAction(h)}delete r[i]}}uncacheRoot(t){const n=t.uuid,i=this._actionsByClip;for(const a in i){const l=i[a].actionByRoot,c=l[n];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,o=r[n];if(o!==void 0)for(const a in o){const l=o[a];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(t,n){const i=this.existingAction(t,n);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const md=new We;class F0{constructor(t,n,i=0,r=1/0){this.ray=new so(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return md.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(t,n=!0,i=[]){return Xc(t,this,i,n),i.sort(gd),i}intersectObjects(t,n=!0,i=[]){for(let r=0,o=t.length;r<o;r++)Xc(t[r],this,i,n);return i.sort(gd),i}}function gd(s,t){return s.distance-t.distance}function Xc(s,t,n,i){let r=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const o=s.children;for(let a=0,l=o.length;a<l;a++)Xc(o[a],t,n,!0)}}class O0{constructor(){this.type="ShapePath",this.color=new Ne,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new Hc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,i,r){return this.currentPath.quadraticCurveTo(t,n,i,r),this}bezierCurveTo(t,n,i,r,o,a){return this.currentPath.bezierCurveTo(t,n,i,r,o,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(m){const T=[];for(let S=0,x=m.length;S<x;S++){const L=m[S],I=new ia;I.curves=L.curves,T.push(I)}return T}function i(m,T){const S=T.length;let x=!1;for(let L=S-1,I=0;I<S;L=I++){let P=T[L],U=T[I],C=U.x-P.x,E=U.y-P.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(P=T[I],C=-C,U=T[L],E=-E),m.y<P.y||m.y>U.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const N=E*(m.x-P.x)-C*(m.y-P.y);if(N===0)return!0;if(N<0)continue;x=!x}}else{if(m.y!==P.y)continue;if(U.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=U.x)return!0}}return x}const r=qs.isClockWise,o=this.subPaths;if(o.length===0)return[];let a,l,c;const h=[];if(o.length===1)return l=o[0],c=new ia,c.curves=l.curves,h.push(c),h;let u=!r(o[0].getPoints());u=t?!u:u;const d=[],f=[];let p=[],_=0,v;f[_]=void 0,p[_]=[];for(let m=0,T=o.length;m<T;m++)l=o[m],v=l.getPoints(),a=r(v),a=t?!a:a,a?(!u&&f[_]&&_++,f[_]={s:new ia,p:v},f[_].s.curves=l.curves,u&&_++,p[_]=[]):p[_].push({h:l,p:v[0]});if(!f[0])return n(o);if(f.length>1){let m=!1,T=0;for(let S=0,x=f.length;S<x;S++)d[S]=[];for(let S=0,x=f.length;S<x;S++){const L=p[S];for(let I=0;I<L.length;I++){const P=L[I];let U=!0;for(let C=0;C<f.length;C++)i(P.p,f[C].p)&&(S!==C&&T++,U?(U=!1,d[C].push(P)):m=!0);U&&d[S].push(P)}}T>0&&m===!1&&(p=d)}let g;for(let m=0,T=f.length;m<T;m++){c=f[m].s,h.push(c),g=p[m];for(let S=0,x=g.length;S<x;S++)c.holes.push(g[S].h)}return h}}function _d(s,t,n,i){const r=B0(i);switch(n){case vp:return s*t;case yp:return s*t;case Mp:return s*t*2;case yh:return s*t/r.components*r.byteLength;case Mh:return s*t/r.components*r.byteLength;case Sp:return s*t*2/r.components*r.byteLength;case Sh:return s*t*2/r.components*r.byteLength;case xp:return s*t*3/r.components*r.byteLength;case vn:return s*t*4/r.components*r.byteLength;case bh:return s*t*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ea:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uc:case fc:return Math.max(s,16)*Math.max(t,8)/4;case hc:case dc:return Math.max(s,8)*Math.max(t,8)/2;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case na:case Lc:case Ic:return Math.ceil(s/4)*Math.ceil(t/4)*16;case bp:case Dc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Nc:case Uc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function B0(s){switch(s){case mi:case mp:return{byteLength:1,components:1};case qr:case gp:case di:return{byteLength:2,components:1};case vh:case xh:return{byteLength:2,components:4};case rs:case _h:case Ln:return{byteLength:4,components:1};case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zp(){let s=null,t=!1,n=null,i=null;function r(o,a){n(o,a),i=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){s=o}}}function k0(s){const t=new WeakMap;function n(l,c){const h=l.array,u=l.usage,d=h.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,h,u),l.onUploadCallback();let p;if(h instanceof Float32Array)p=s.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=s.SHORT;else if(h instanceof Uint32Array)p=s.UNSIGNED_INT;else if(h instanceof Int32Array)p=s.INT;else if(h instanceof Int8Array)p=s.BYTE;else if(h instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,h){const u=c.array,d=c.updateRanges;if(s.bindBuffer(h,l),d.length===0)s.bufferSubData(h,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];s.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(s.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,n(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,c),h.version=l.version}}return{get:r,remove:o,update:a}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
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
#endif`,ey=`#ifdef USE_BUMPMAP
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
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cy=`#define PI 3.141592653589793
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
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uy=`vec3 transformedNormal = objectNormal;
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
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,my=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wy=`#ifdef USE_GRADIENTMAP
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
}`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
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
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oy=`PhysicalMaterial material;
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
#endif`,By=`struct PhysicalMaterial {
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
}`,ky=`
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
#endif`,zy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yy=`#if defined( USE_POINTS_UV )
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
#endif`,Ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
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
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
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
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EM=`float getShadowMask() {
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
}`,TM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AM=`#ifdef USE_SKINNING
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
#endif`,wM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,RM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DM=`#ifdef USE_TRANSMISSION
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
#endif`,NM=`#ifdef USE_TRANSMISSION
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`#include <common>
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
}`,$M=`#if DEPTH_PACKING == 3200
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
}`,qM=`#define DISTANCE
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
}`,jM=`#define DISTANCE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`uniform float scale;
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
}`,ZM=`uniform vec3 diffuse;
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
}`,QM=`#include <common>
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#define LAMBERT
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define MATCAP
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
}`,sS=`#define MATCAP
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
}`,rS=`#define NORMAL
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
}`,oS=`#define NORMAL
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
}`,aS=`#define PHONG
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
}`,lS=`#define PHONG
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
}`,cS=`#define STANDARD
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
}`,hS=`#define STANDARD
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
}`,uS=`#define TOON
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
}`,dS=`#define TOON
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
}`,fS=`uniform float size;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 color;
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
}`,_S=`uniform float rotation;
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
}`,vS=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:z0,alphahash_pars_fragment:H0,alphamap_fragment:V0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:$0,aomap_pars_fragment:q0,batching_pars_vertex:j0,batching_vertex:Y0,begin_vertex:K0,beginnormal_vertex:J0,bsdfs:Z0,iridescence_fragment:Q0,bumpmap_pars_fragment:ey,clipping_planes_fragment:ty,clipping_planes_pars_fragment:ny,clipping_planes_pars_vertex:iy,clipping_planes_vertex:sy,color_fragment:ry,color_pars_fragment:oy,color_pars_vertex:ay,color_vertex:ly,common:cy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:uy,displacementmap_pars_vertex:dy,displacementmap_vertex:fy,emissivemap_fragment:py,emissivemap_pars_fragment:my,colorspace_fragment:gy,colorspace_pars_fragment:_y,envmap_fragment:vy,envmap_common_pars_fragment:xy,envmap_pars_fragment:yy,envmap_pars_vertex:My,envmap_physical_pars_fragment:Iy,envmap_vertex:Sy,fog_vertex:by,fog_pars_vertex:Ey,fog_fragment:Ty,fog_pars_fragment:Ay,gradientmap_pars_fragment:wy,lightmap_pars_fragment:Cy,lights_lambert_fragment:Ry,lights_lambert_pars_fragment:Py,lights_pars_begin:Ly,lights_toon_fragment:Dy,lights_toon_pars_fragment:Ny,lights_phong_fragment:Uy,lights_phong_pars_fragment:Fy,lights_physical_fragment:Oy,lights_physical_pars_fragment:By,lights_fragment_begin:ky,lights_fragment_maps:zy,lights_fragment_end:Hy,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Wy,logdepthbuf_vertex:Xy,map_fragment:$y,map_pars_fragment:qy,map_particle_fragment:jy,map_particle_pars_fragment:Yy,metalnessmap_fragment:Ky,metalnessmap_pars_fragment:Jy,morphinstance_vertex:Zy,morphcolor_vertex:Qy,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:sM,normal_pars_fragment:rM,normal_pars_vertex:oM,normal_vertex:aM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:uM,iridescence_pars_fragment:dM,opaque_fragment:fM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:_M,dithering_pars_fragment:vM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:yM,shadowmap_pars_fragment:MM,shadowmap_pars_vertex:SM,shadowmap_vertex:bM,shadowmask_pars_fragment:EM,skinbase_vertex:TM,skinning_pars_vertex:AM,skinning_vertex:wM,skinnormal_vertex:CM,specularmap_fragment:RM,specularmap_pars_fragment:PM,tonemapping_fragment:LM,tonemapping_pars_fragment:IM,transmission_fragment:DM,transmission_pars_fragment:NM,uv_pars_fragment:UM,uv_pars_vertex:FM,uv_vertex:OM,worldpos_vertex:BM,background_vert:kM,background_frag:zM,backgroundCube_vert:HM,backgroundCube_frag:VM,cube_vert:GM,cube_frag:WM,depth_vert:XM,depth_frag:$M,distanceRGBA_vert:qM,distanceRGBA_frag:jM,equirect_vert:YM,equirect_frag:KM,linedashed_vert:JM,linedashed_frag:ZM,meshbasic_vert:QM,meshbasic_frag:eS,meshlambert_vert:tS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:sS,meshnormal_vert:rS,meshnormal_frag:oS,meshphong_vert:aS,meshphong_frag:lS,meshphysical_vert:cS,meshphysical_frag:hS,meshtoon_vert:uS,meshtoon_frag:dS,points_vert:fS,points_frag:pS,shadow_vert:mS,shadow_frag:gS,sprite_vert:_S,sprite_frag:vS},ve={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},zn={basic:{uniforms:Wt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Wt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Wt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Wt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Wt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Wt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Wt([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Wt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Wt([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Wt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Wt([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Wt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Wt([ve.lights,ve.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};zn.physical={uniforms:Wt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ho={r:0,b:0,g:0},$i=new Un,xS=new We;function yS(s,t,n,i,r,o,a){const l=new Ne(0);let c=o===!0?0:1,h,u,d=null,f=0,p=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?n:t).get(x)),x}function v(S){let x=!1;const L=_(S);L===null?m(l,c):L&&L.isColor&&(m(L,1),x=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(S,x){const L=_(x);L&&(L.isCubeTexture||L.mapping===Ra)?(u===void 0&&(u=new gt(new ro(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ir(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xS.makeRotationFromEuler($i)),u.material.toneMapped=Ze.getTransfer(L.colorSpace)!==ht,(d!==L||f!==L.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,p=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new gt(new Ia(2,2),new Bt({name:"BackgroundMaterial",uniforms:ir(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(L.colorSpace)!==ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=L,f=L.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function m(S,x){S.getRGB(Ho,Ip(s)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,x,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return l},setClearColor:function(S,x=1){l.set(S),c=x,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(l,c)},render:v,addToRenderList:g,dispose:T}}function MS(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,a=!1;function l(E,N,Q,X,ee){let se=!1;const Z=d(X,Q,N);o!==Z&&(o=Z,h(o.object)),se=p(E,X,Q,ee),se&&_(E,X,Q,ee),ee!==null&&t.update(ee,s.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,x(E,N,Q,X),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function c(){return s.createVertexArray()}function h(E){return s.bindVertexArray(E)}function u(E){return s.deleteVertexArray(E)}function d(E,N,Q){const X=Q.wireframe===!0;let ee=i[E.id];ee===void 0&&(ee={},i[E.id]=ee);let se=ee[N.id];se===void 0&&(se={},ee[N.id]=se);let Z=se[X];return Z===void 0&&(Z=f(c()),se[X]=Z),Z}function f(E){const N=[],Q=[],X=[];for(let ee=0;ee<n;ee++)N[ee]=0,Q[ee]=0,X[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Q,attributeDivisors:X,object:E,attributes:{},index:null}}function p(E,N,Q,X){const ee=o.attributes,se=N.attributes;let Z=0;const ie=Q.getAttributes();for(const W in ie)if(ie[W].location>=0){const ye=ee[W];let be=se[W];if(be===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),ye===void 0||ye.attribute!==be||be&&ye.data!==be.data)return!0;Z++}return o.attributesNum!==Z||o.index!==X}function _(E,N,Q,X){const ee={},se=N.attributes;let Z=0;const ie=Q.getAttributes();for(const W in ie)if(ie[W].location>=0){let ye=se[W];ye===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor));const be={};be.attribute=ye,ye&&ye.data&&(be.data=ye.data),ee[W]=be,Z++}o.attributes=ee,o.attributesNum=Z,o.index=X}function v(){const E=o.newAttributes;for(let N=0,Q=E.length;N<Q;N++)E[N]=0}function g(E){m(E,0)}function m(E,N){const Q=o.newAttributes,X=o.enabledAttributes,ee=o.attributeDivisors;Q[E]=1,X[E]===0&&(s.enableVertexAttribArray(E),X[E]=1),ee[E]!==N&&(s.vertexAttribDivisor(E,N),ee[E]=N)}function T(){const E=o.newAttributes,N=o.enabledAttributes;for(let Q=0,X=N.length;Q<X;Q++)N[Q]!==E[Q]&&(s.disableVertexAttribArray(Q),N[Q]=0)}function S(E,N,Q,X,ee,se,Z){Z===!0?s.vertexAttribIPointer(E,N,Q,ee,se):s.vertexAttribPointer(E,N,Q,X,ee,se)}function x(E,N,Q,X){v();const ee=X.attributes,se=Q.getAttributes(),Z=N.defaultAttributeValues;for(const ie in se){const W=se[ie];if(W.location>=0){let me=ee[ie];if(me===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),me!==void 0){const ye=me.normalized,be=me.itemSize,Le=t.get(me);if(Le===void 0)continue;const et=Le.buffer,re=Le.type,ue=Le.bytesPerElement,Ae=re===s.INT||re===s.UNSIGNED_INT||me.gpuType===_h;if(me.isInterleavedBufferAttribute){const de=me.data,Re=de.stride,Be=me.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<W.locationSize;Ie++)m(W.location+Ie,de.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<W.locationSize;Ie++)g(W.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Ie=0;Ie<W.locationSize;Ie++)S(W.location+Ie,be/W.locationSize,re,ye,Re*ue,(Be+be/W.locationSize*Ie)*ue,Ae)}else{if(me.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)m(W.location+de,me.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<W.locationSize;de++)g(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,et);for(let de=0;de<W.locationSize;de++)S(W.location+de,be/W.locationSize,re,ye,be*ue,be/W.locationSize*de*ue,Ae)}}else if(Z!==void 0){const ye=Z[ie];if(ye!==void 0)switch(ye.length){case 2:s.vertexAttrib2fv(W.location,ye);break;case 3:s.vertexAttrib3fv(W.location,ye);break;case 4:s.vertexAttrib4fv(W.location,ye);break;default:s.vertexAttrib1fv(W.location,ye)}}}}T()}function L(){U();for(const E in i){const N=i[E];for(const Q in N){const X=N[Q];for(const ee in X)u(X[ee].object),delete X[ee];delete N[Q]}delete i[E]}}function I(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const Q in N){const X=N[Q];for(const ee in X)u(X[ee].object),delete X[ee];delete N[Q]}delete i[E.id]}function P(E){for(const N in i){const Q=i[N];if(Q[E.id]===void 0)continue;const X=Q[E.id];for(const ee in X)u(X[ee].object),delete X[ee];delete Q[E.id]}}function U(){C(),a=!0,o!==r&&(o=r,h(o.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:U,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function SS(s,t,n){let i;function r(h){i=h}function o(h,u){s.drawArrays(i,h,u),n.update(u,i,1)}function a(h,u,d){d!==0&&(s.drawArraysInstanced(i,h,u,d),n.update(u,i,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];n.update(p,i,1)}function c(h,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h.length;_++)a(h[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*f[v];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function bS(s,t,n,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==vn&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){const U=P===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==mi&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!U)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:I}}function ES(s){const t=this;let n=null,i=0,r=!1,o=!1;const a=new Ji,l=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!r||_===null||_.length===0||o&&!g)o?u(null):h();else{const T=o?0:i,S=T*4;let x=m.clippingState||null;c.value=x,x=u(_,f,S,p);for(let L=0;L!==S;++L)x[L]=n[L];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const m=p+v*4,T=f.matrixWorldInverse;l.getNormalMatrix(T),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,x=p;S!==v;++S,x+=4)a.copy(d[S]).applyMatrix4(T,l),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function TS(s){let t=new WeakMap;function n(a,l){return l===lc?a.mapping=Zs:l===cc&&(a.mapping=Qs),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===lc||l===cc)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new dx(c.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",r),n(h.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const Bs=4,vd=[.125,.215,.35,.446,.526,.582],es=20,wl=new Na,xd=new Ne;let Cl=null,Rl=0,Pl=0,Ll=!1;const Zi=(1+Math.sqrt(5))/2,Rs=1/Zi,yd=[new F(-Zi,Rs,0),new F(Zi,Rs,0),new F(-Rs,0,Zi),new F(Rs,0,Zi),new F(0,Zi,-Rs),new F(0,Zi,Rs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Md{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){Cl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cl,Rl,Pl),this._renderer.xr.enabled=Ll,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Zs||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:di,format:vn,colorSpace:Jt,depthBuffer:!1},r=Sd(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(t,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AS(o)),this._blurMaterial=wS(o,t,n)}return r}_compileMaterial(t){const n=new gt(this._lodPlanes[0],t);this._renderer.compile(n,wl)}_sceneToCubeUV(t,n,i,r){const l=new $t(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xd),u.toneMapping=Di,u.autoClear=!1;const p=new Pi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new gt(new ro,p);let v=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,v=!0):(p.color.copy(xd),v=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(l.up.set(0,c[m],0),l.lookAt(h[m],0,0)):T===1?(l.up.set(0,0,c[m]),l.lookAt(0,h[m],0)):(l.up.set(0,c[m],0),l.lookAt(0,0,h[m]));const S=this._cubeSize;Vo(r,T*S,m>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=g}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===Zs||t.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const c=this._cubeSize;Vo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,wl)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=yd[(r-o-1)%yd.length];this._blur(t,o-1,o,a,l)}n.autoClear=i}_blur(t,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",o),this._halfBlur(a,t,i,i,r,"longitudinal",o)}_halfBlur(t,n,i,r,o,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new gt(this._lodPlanes[r],h),f=h.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*es-1),v=o/_,g=isFinite(o)?1+Math.floor(u*v):es;g>es&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);const m=[];let T=0;for(let P=0;P<es;++P){const U=P/v,C=Math.exp(-U*U/2);m.push(C),P===0?T+=C:P<g&&(T+=2*C)}for(let P=0;P<m.length;P++)m[P]=m[P]/T;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const x=this._sizeLods[r],L=3*x*(r>S-Bs?r-S+Bs:0),I=4*(this._cubeSize-x);Vo(n,L,I,3*x,2*x),c.setRenderTarget(n),c.render(d,wl)}}function AS(s){const t=[],n=[],i=[];let r=s;const o=s-Bs+1+vd.length;for(let a=0;a<o;a++){const l=Math.pow(2,r);n.push(l);let c=1/l;a>s-Bs?c=vd[a-s+Bs-1]:a===0&&(c=0),i.push(c);const h=1/(l-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,g=2,m=1,T=new Float32Array(v*_*p),S=new Float32Array(g*_*p),x=new Float32Array(m*_*p);for(let I=0;I<p;I++){const P=I%3*2/3-1,U=I>2?0:-1,C=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];T.set(C,v*_*I),S.set(f,g*_*I);const E=[I,I,I,I,I,I];x.set(E,m*_*I)}const L=new nn;L.setAttribute("position",new Kt(T,v)),L.setAttribute("uv",new Kt(S,g)),L.setAttribute("faceIndex",new Kt(x,m)),t.push(L),r>Bs&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Sd(s,t,n){const i=new Dn(s,t,n);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(s,t,n,i,r){s.viewport.set(t,n,i,r),s.scissor.set(t,n,i,r)}function wS(s,t,n){const i=new Float32Array(es),r=new F(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zh(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function bd(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ed(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}function CS(s){let t=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,h=c===lc||c===cc,u=c===Zs||c===Qs;if(h||u){let d=t.get(l);const f=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return n===null&&(n=new Md(s)),d=h?n.fromEquirectangular(l,d):n.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const p=l.image;return h&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Md(s)),d=h?n.fromEquirectangular(l):n.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",o),d.texture):null}}}return l}function r(l){let c=0;const h=6;for(let u=0;u<h;u++)l[u]!==void 0&&c++;return c===h}function o(l){const c=l.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function RS(s){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ds("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PS(s,t,n,i){const r={},o=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function h(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let S=0,x=T.length;S<x;S+=3){const L=T[S+0],I=T[S+1],P=T[S+2];f.push(L,I,I,P,P,L)}}else if(_!==void 0){const T=_.array;v=_.version;for(let S=0,x=T.length/3-1;S<x;S+=3){const L=S+0,I=S+1,P=S+2;f.push(L,I,I,P,P,L)}}else return;const g=new(Ap(f)?Lp:Pp)(f,1);g.version=v;const m=o.get(d);m&&t.remove(m),o.set(d,g)}function u(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&h(d)}else h(d);return o.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function LS(s,t,n){let i;function r(f){i=f}let o,a;function l(f){o=f.type,a=f.bytesPerElement}function c(f,p){s.drawElements(i,p,o,f*a),n.update(p,i,1)}function h(f,p,_){_!==0&&(s.drawElementsInstanced(i,p,o,f*a,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];n.update(g,i,1)}function d(f,p,_,v){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)h(f[m]/a,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,v,0,_);let m=0;for(let T=0;T<_;T++)m+=p[T]*v[T];n.update(m,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function IS(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(n.calls++,a){case s.TRIANGLES:n.triangles+=l*(o/3);break;case s.LINES:n.lines+=l*(o/2);break;case s.LINE_STRIP:n.lines+=l*(o-1);break;case s.LINE_LOOP:n.lines+=l*o;break;case s.POINTS:n.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DS(s,t,n){const i=new WeakMap,r=new it;function o(a,l,c){const h=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(l);if(f===void 0||f.count!==d){let E=function(){U.dispose(),i.delete(l),l.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const _=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],T=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let L=l.attributes.position.count*x,I=1;L>t.maxTextureSize&&(I=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*I*4*d),U=new Cp(P,L,I,d);U.type=Ln,U.needsUpdate=!0;const C=x*4;for(let N=0;N<d;N++){const Q=m[N],X=T[N],ee=S[N],se=L*I*4*N;for(let Z=0;Z<Q.count;Z++){const ie=Z*C;_===!0&&(r.fromBufferAttribute(Q,Z),P[se+ie+0]=r.x,P[se+ie+1]=r.y,P[se+ie+2]=r.z,P[se+ie+3]=0),v===!0&&(r.fromBufferAttribute(X,Z),P[se+ie+4]=r.x,P[se+ie+5]=r.y,P[se+ie+6]=r.z,P[se+ie+7]=0),g===!0&&(r.fromBufferAttribute(ee,Z),P[se+ie+8]=r.x,P[se+ie+9]=r.y,P[se+ie+10]=r.z,P[se+ie+11]=ee.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new ce(L,I)},i.set(l,f),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<h.length;g++)_+=h[g];const v=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function NS(s,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const Qp=new Lt,Td=new kp(1,1),em=new Cp,tm=new Jv,nm=new Np,Ad=[],wd=[],Cd=new Float32Array(16),Rd=new Float32Array(9),Pd=new Float32Array(4);function dr(s,t,n){const i=s[0];if(i<=0||i>0)return s;const r=t*n;let o=Ad[r];if(o===void 0&&(o=new Float32Array(r),Ad[r]=o),t!==0){i.toArray(o,0);for(let a=1,l=0;a!==t;++a)l+=n,s[a].toArray(o,l)}return o}function Ct(s,t){if(s.length!==t.length)return!1;for(let n=0,i=s.length;n<i;n++)if(s[n]!==t[n])return!1;return!0}function Rt(s,t){for(let n=0,i=t.length;n<i;n++)s[n]=t[n]}function Ua(s,t){let n=wd[t];n===void 0&&(n=new Int32Array(t),wd[t]=n);for(let i=0;i!==t;++i)n[i]=s.allocateTextureUnit();return n}function US(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function FS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ct(n,t))return;s.uniform2fv(this.addr,t),Rt(n,t)}}function OS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ct(n,t))return;s.uniform3fv(this.addr,t),Rt(n,t)}}function BS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ct(n,t))return;s.uniform4fv(this.addr,t),Rt(n,t)}}function kS(s,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ct(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Rt(n,t)}else{if(Ct(n,i))return;Pd.set(i),s.uniformMatrix2fv(this.addr,!1,Pd),Rt(n,i)}}function zS(s,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ct(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Rt(n,t)}else{if(Ct(n,i))return;Rd.set(i),s.uniformMatrix3fv(this.addr,!1,Rd),Rt(n,i)}}function HS(s,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ct(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Rt(n,t)}else{if(Ct(n,i))return;Cd.set(i),s.uniformMatrix4fv(this.addr,!1,Cd),Rt(n,i)}}function VS(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function GS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ct(n,t))return;s.uniform2iv(this.addr,t),Rt(n,t)}}function WS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ct(n,t))return;s.uniform3iv(this.addr,t),Rt(n,t)}}function XS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ct(n,t))return;s.uniform4iv(this.addr,t),Rt(n,t)}}function $S(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function qS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ct(n,t))return;s.uniform2uiv(this.addr,t),Rt(n,t)}}function jS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ct(n,t))return;s.uniform3uiv(this.addr,t),Rt(n,t)}}function YS(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ct(n,t))return;s.uniform4uiv(this.addr,t),Rt(n,t)}}function KS(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let o;this.type===s.SAMPLER_2D_SHADOW?(Td.compareFunction=Tp,o=Td):o=Qp,n.setTexture2D(t||o,r)}function JS(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||tm,r)}function ZS(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||nm,r)}function QS(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||em,r)}function eb(s){switch(s){case 5126:return US;case 35664:return FS;case 35665:return OS;case 35666:return BS;case 35674:return kS;case 35675:return zS;case 35676:return HS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return $S;case 36294:return qS;case 36295:return jS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return QS}}function tb(s,t){s.uniform1fv(this.addr,t)}function nb(s,t){const n=dr(t,this.size,2);s.uniform2fv(this.addr,n)}function ib(s,t){const n=dr(t,this.size,3);s.uniform3fv(this.addr,n)}function sb(s,t){const n=dr(t,this.size,4);s.uniform4fv(this.addr,n)}function rb(s,t){const n=dr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function ob(s,t){const n=dr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function ab(s,t){const n=dr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function lb(s,t){s.uniform1iv(this.addr,t)}function cb(s,t){s.uniform2iv(this.addr,t)}function hb(s,t){s.uniform3iv(this.addr,t)}function ub(s,t){s.uniform4iv(this.addr,t)}function db(s,t){s.uniform1uiv(this.addr,t)}function fb(s,t){s.uniform2uiv(this.addr,t)}function pb(s,t){s.uniform3uiv(this.addr,t)}function mb(s,t){s.uniform4uiv(this.addr,t)}function gb(s,t,n){const i=this.cache,r=t.length,o=Ua(n,r);Ct(i,o)||(s.uniform1iv(this.addr,o),Rt(i,o));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||Qp,o[a])}function _b(s,t,n){const i=this.cache,r=t.length,o=Ua(n,r);Ct(i,o)||(s.uniform1iv(this.addr,o),Rt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||tm,o[a])}function vb(s,t,n){const i=this.cache,r=t.length,o=Ua(n,r);Ct(i,o)||(s.uniform1iv(this.addr,o),Rt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||nm,o[a])}function xb(s,t,n){const i=this.cache,r=t.length,o=Ua(n,r);Ct(i,o)||(s.uniform1iv(this.addr,o),Rt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||em,o[a])}function yb(s){switch(s){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return sb;case 35674:return rb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return hb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}class Mb{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eb(n.type)}}class Sb{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yb(n.type)}}class bb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const l=r[o];l.setValue(t,n[l.id],i)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function Ld(s,t){s.seq.push(t),s.map[t.id]=t}function Eb(s,t,n){const i=s.name,r=i.length;for(Il.lastIndex=0;;){const o=Il.exec(i),a=Il.lastIndex;let l=o[1];const c=o[2]==="]",h=o[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===r){Ld(n,h===void 0?new Mb(l,s,t):new Sb(l,s,t));break}else{let d=n.map[l];d===void 0&&(d=new bb(l),Ld(n,d)),n=d}}}class sa{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),a=t.getUniformLocation(n,o.name);Eb(o,a,this)}}setValue(t,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let o=0,a=n.length;o!==a;++o){const l=n[o],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,o=t.length;r!==o;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function Id(s,t,n){const i=s.createShader(t);return s.shaderSource(i,n),s.compileShader(i),i}const Tb=37297;let Ab=0;function wb(s,t){const n=s.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let a=r;a<o;a++){const l=a+1;i.push(`${l===t?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const Dd=new $e;function Cb(s){Ze._getMatrix(Dd,Ze.workingColorSpace,s);const t=`mat3( ${Dd.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(s)){case pa:return[t,"LinearTransferOETF"];case ht:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Nd(s,t,n){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+wb(s.getShaderSource(t),a)}else return r}function Rb(s,t){const n=Cb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Pb(s,t){let n;switch(t){case ap:n="Linear";break;case lp:n="Reinhard";break;case cp:n="Cineon";break;case hp:n="ACESFilmic";break;case up:n="AgX";break;case dp:n="Neutral";break;case lv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Go=new F;function Lb(){Ze.getLuminanceCoefficients(Go);const s=Go.x.toFixed(4),t=Go.y.toFixed(4),n=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ib(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Db(s){const t=[];for(const n in s){const i=s[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Nb(s,t){const n={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=s.getActiveAttrib(t,r),a=o.name;let l=1;o.type===s.FLOAT_MAT2&&(l=2),o.type===s.FLOAT_MAT3&&(l=3),o.type===s.FLOAT_MAT4&&(l=4),n[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:l}}return n}function Pr(s){return s!==""}function Ud(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(s){return s.replace(Ub,Ob)}const Fb=new Map;function Ob(s,t){let n=je[t];if(n===void 0){const i=Fb.get(t);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $c(n)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(s){return s.replace(Bb,kb)}function kb(s,t,n,i){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Bd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===op?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Hb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Qs:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vb(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Gb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gh:t="ENVMAP_BLENDING_MULTIPLY";break;case ov:t="ENVMAP_BLENDING_MIX";break;case av:t="ENVMAP_BLENDING_ADD";break}return t}function Wb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Xb(s,t,n,i){const r=s.getContext(),o=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=zb(n),h=Hb(n),u=Vb(n),d=Gb(n),f=Wb(n),p=Ib(n),_=Db(o),v=r.createProgram();let g,m,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Pr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(g=[Bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[Bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?je.tonemapping_pars_fragment:"",n.toneMapping!==Di?Pb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Rb("linearToOutputTexel",n.outputColorSpace),Lb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pr).join(`
`)),a=$c(a),a=Ud(a,n),a=Fd(a,n),l=$c(l),l=Ud(l,n),l=Fd(l,n),a=Od(a),l=Od(l),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=T+g+a,x=T+m+l,L=Id(r,r.VERTEX_SHADER,S),I=Id(r,r.FRAGMENT_SHADER,x);r.attachShader(v,L),r.attachShader(v,I),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(N){if(s.debug.checkShaderErrors){const Q=r.getProgramInfoLog(v).trim(),X=r.getShaderInfoLog(L).trim(),ee=r.getShaderInfoLog(I).trim();let se=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,v,L,I);else{const ie=Nd(r,L,"vertex"),W=Nd(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Q+`
`+ie+`
`+W)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(X===""||ee==="")&&(Z=!1);Z&&(N.diagnostics={runnable:se,programLog:Q,vertexShader:{log:X,prefix:g},fragmentShader:{log:ee,prefix:m}})}r.deleteShader(L),r.deleteShader(I),U=new sa(r,v),C=Nb(r,v)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,Tb)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ab++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=I,this}let $b=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new jb(t),n.set(t,i)),i}}class jb{constructor(t){this.id=$b++,this.code=t,this.usedTimes=0}}function Yb(s,t,n,i,r,o,a){const l=new Ah,c=new qb,h=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return h.add(C),C===0?"uv":`uv${C}`}function g(C,E,N,Q,X){const ee=Q.fog,se=X.geometry,Z=C.isMeshStandardMaterial?Q.environment:null,ie=(C.isMeshStandardMaterial?n:t).get(C.envMap||Z),W=ie&&ie.mapping===Ra?ie.image.height:null,me=_[C.type];C.precision!==null&&(p=r.getMaxPrecision(C.precision),p!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const ye=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,be=ye!==void 0?ye.length:0;let Le=0;se.morphAttributes.position!==void 0&&(Le=1),se.morphAttributes.normal!==void 0&&(Le=2),se.morphAttributes.color!==void 0&&(Le=3);let et,re,ue,Ae;if(me){const ct=zn[me];et=ct.vertexShader,re=ct.fragmentShader}else et=C.vertexShader,re=C.fragmentShader,c.update(C),ue=c.getVertexShaderID(C),Ae=c.getFragmentShaderID(C);const de=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Be=X.isInstancedMesh===!0,Ie=X.isBatchedMesh===!0,Qe=!!C.map,w=!!C.matcap,R=!!ie,M=!!C.aoMap,$=!!C.lightMap,O=!!C.bumpMap,V=!!C.normalMap,G=!!C.displacementMap,te=!!C.emissiveMap,q=!!C.metalnessMap,b=!!C.roughnessMap,y=C.anisotropy>0,D=C.clearcoat>0,H=C.dispersion>0,Y=C.iridescence>0,j=C.sheen>0,fe=C.transmission>0,ae=y&&!!C.anisotropyMap,ge=D&&!!C.clearcoatMap,Ue=D&&!!C.clearcoatNormalMap,le=D&&!!C.clearcoatRoughnessMap,xe=Y&&!!C.iridescenceMap,Pe=Y&&!!C.iridescenceThicknessMap,Oe=j&&!!C.sheenColorMap,_e=j&&!!C.sheenRoughnessMap,ke=!!C.specularMap,Ve=!!C.specularColorMap,ft=!!C.specularIntensityMap,B=fe&&!!C.transmissionMap,Me=fe&&!!C.thicknessMap,ne=!!C.gradientMap,oe=!!C.alphaMap,Te=C.alphaTest>0,Ee=!!C.alphaHash,Xe=!!C.extensions;let Mt=Di;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Mt=s.toneMapping);const Dt={shaderID:me,shaderType:C.type,shaderName:C.name,vertexShader:et,fragmentShader:re,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:Ae,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&X._colorsTexture!==null,instancing:Be,instancingColor:Be&&X.instanceColor!==null,instancingMorph:Be&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Jt,alphaToCoverage:!!C.alphaToCoverage,map:Qe,matcap:w,envMap:R,envMapMode:R&&ie.mapping,envMapCubeUVHeight:W,aoMap:M,lightMap:$,bumpMap:O,normalMap:V,displacementMap:f&&G,emissiveMap:te,normalMapObjectSpace:V&&C.normalMapType===_v,normalMapTangentSpace:V&&C.normalMapType===Pa,metalnessMap:q,roughnessMap:b,anisotropy:y,anisotropyMap:ae,clearcoat:D,clearcoatMap:ge,clearcoatNormalMap:Ue,clearcoatRoughnessMap:le,dispersion:H,iridescence:Y,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Oe,sheenRoughnessMap:_e,specularMap:ke,specularColorMap:Ve,specularIntensityMap:ft,transmission:fe,transmissionMap:B,thicknessMap:Me,gradientMap:ne,opaque:C.transparent===!1&&C.blending===Ws&&C.alphaToCoverage===!1,alphaMap:oe,alphaTest:Te,alphaHash:Ee,combine:C.combine,mapUv:Qe&&v(C.map.channel),aoMapUv:M&&v(C.aoMap.channel),lightMapUv:$&&v(C.lightMap.channel),bumpMapUv:O&&v(C.bumpMap.channel),normalMapUv:V&&v(C.normalMap.channel),displacementMapUv:G&&v(C.displacementMap.channel),emissiveMapUv:te&&v(C.emissiveMap.channel),metalnessMapUv:q&&v(C.metalnessMap.channel),roughnessMapUv:b&&v(C.roughnessMap.channel),anisotropyMapUv:ae&&v(C.anisotropyMap.channel),clearcoatMapUv:ge&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(C.sheenRoughnessMap.channel),specularMapUv:ke&&v(C.specularMap.channel),specularColorMapUv:Ve&&v(C.specularColorMap.channel),specularIntensityMapUv:ft&&v(C.specularIntensityMap.channel),transmissionMapUv:B&&v(C.transmissionMap.channel),thicknessMapUv:Me&&v(C.thicknessMap.channel),alphaMapUv:oe&&v(C.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(V||y),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!se.attributes.uv&&(Qe||oe),fog:!!ee,useFog:C.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Re,skinning:X.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Qe&&C.map.isVideoTexture===!0&&Ze.getTransfer(C.map.colorSpace)===ht,decodeVideoTextureEmissive:te&&C.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(C.emissiveMap.colorSpace)===ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hn,flipSided:C.side===en,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xe&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&C.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Dt.vertexUv1s=h.has(1),Dt.vertexUv2s=h.has(2),Dt.vertexUv3s=h.has(3),h.clear(),Dt}function m(C){const E=[];if(C.shaderID?E.push(C.shaderID):(E.push(C.customVertexShaderID),E.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)E.push(N),E.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(T(E,C),S(E,C),E.push(s.outputColorSpace)),E.push(C.customProgramCacheKey),E.join()}function T(C,E){C.push(E.precision),C.push(E.outputColorSpace),C.push(E.envMapMode),C.push(E.envMapCubeUVHeight),C.push(E.mapUv),C.push(E.alphaMapUv),C.push(E.lightMapUv),C.push(E.aoMapUv),C.push(E.bumpMapUv),C.push(E.normalMapUv),C.push(E.displacementMapUv),C.push(E.emissiveMapUv),C.push(E.metalnessMapUv),C.push(E.roughnessMapUv),C.push(E.anisotropyMapUv),C.push(E.clearcoatMapUv),C.push(E.clearcoatNormalMapUv),C.push(E.clearcoatRoughnessMapUv),C.push(E.iridescenceMapUv),C.push(E.iridescenceThicknessMapUv),C.push(E.sheenColorMapUv),C.push(E.sheenRoughnessMapUv),C.push(E.specularMapUv),C.push(E.specularColorMapUv),C.push(E.specularIntensityMapUv),C.push(E.transmissionMapUv),C.push(E.thicknessMapUv),C.push(E.combine),C.push(E.fogExp2),C.push(E.sizeAttenuation),C.push(E.morphTargetsCount),C.push(E.morphAttributeCount),C.push(E.numDirLights),C.push(E.numPointLights),C.push(E.numSpotLights),C.push(E.numSpotLightMaps),C.push(E.numHemiLights),C.push(E.numRectAreaLights),C.push(E.numDirLightShadows),C.push(E.numPointLightShadows),C.push(E.numSpotLightShadows),C.push(E.numSpotLightShadowsWithMaps),C.push(E.numLightProbes),C.push(E.shadowMapType),C.push(E.toneMapping),C.push(E.numClippingPlanes),C.push(E.numClipIntersection),C.push(E.depthPacking)}function S(C,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),C.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),C.push(l.mask)}function x(C){const E=_[C.type];let N;if(E){const Q=zn[E];N=sr.clone(Q.uniforms)}else N=C.uniforms;return N}function L(C,E){let N;for(let Q=0,X=u.length;Q<X;Q++){const ee=u[Q];if(ee.cacheKey===E){N=ee,++N.usedTimes;break}}return N===void 0&&(N=new Xb(s,E,C,o),u.push(N)),N}function I(C){if(--C.usedTimes===0){const E=u.indexOf(C);u[E]=u[u.length-1],u.pop(),C.destroy()}}function P(C){c.remove(C)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:L,releaseProgram:I,releaseShaderCache:P,programs:u,dispose:U}}function Kb(){let s=new WeakMap;function t(a){return s.has(a)}function n(a){let l=s.get(a);return l===void 0&&(l={},s.set(a,l)),l}function i(a){s.delete(a)}function r(a,l,c){s.get(a)[l]=c}function o(){s=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:o}}function Jb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function kd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function zd(){const s=[];let t=0;const n=[],i=[],r=[];function o(){t=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,_,v,g){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},s[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=g),t++,m}function l(d,f,p,_,v,g){const m=a(d,f,p,_,v,g);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):n.push(m)}function c(d,f,p,_,v,g){const m=a(d,f,p,_,v,g);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):n.unshift(m)}function h(d,f){n.length>1&&n.sort(d||Jb),i.length>1&&i.sort(f||kd),r.length>1&&r.sort(f||kd)}function u(){for(let d=t,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function Zb(){let s=new WeakMap;function t(i,r){const o=s.get(i);let a;return o===void 0?(a=new zd,s.set(i,[a])):r>=o.length?(a=new zd,o.push(a)):a=o[r],a}function n(){s=new WeakMap}return{get:t,dispose:n}}function Qb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new Ne};break;case"SpotLight":n={position:new F,direction:new F,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=n,n}}}function eE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let tE=0;function nE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function iE(s){const t=new Qb,n=eE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);const r=new F,o=new We,a=new We;function l(h){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,_=0,v=0,g=0,m=0,T=0,S=0,x=0,L=0,I=0,P=0;h.sort(nE);for(let C=0,E=h.length;C<E;C++){const N=h[C],Q=N.color,X=N.intensity,ee=N.distance,se=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=Q.r*X,d+=Q.g*X,f+=Q.b*X;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],X);P++}else if(N.isDirectionalLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ie=N.shadow,W=n.get(N);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=N.shadow.matrix,T++}i.directional[p]=Z,p++}else if(N.isSpotLight){const Z=t.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(Q).multiplyScalar(X),Z.distance=ee,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[v]=Z;const ie=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,ie.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[v]=ie.matrix,N.castShadow){const W=n.get(N);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=se,x++}v++}else if(N.isRectAreaLight){const Z=t.get(N);Z.color.copy(Q).multiplyScalar(X),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=Z,g++}else if(N.isPointLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const ie=N.shadow,W=n.get(N);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=N.shadow.matrix,S++}i.point[_]=Z,_++}else if(N.isHemisphereLight){const Z=t.get(N);Z.skyColor.copy(N.color).multiplyScalar(X),Z.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[m]=Z,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==T||U.numPointShadows!==S||U.numSpotShadows!==x||U.numSpotMaps!==L||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=T,U.numPointShadows=S,U.numSpotShadows=x,U.numSpotMaps=L,U.numLightProbes=P,i.version=tE++)}function c(h,u){let d=0,f=0,p=0,_=0,v=0;const g=u.matrixWorldInverse;for(let m=0,T=h.length;m<T;m++){const S=h[m];if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(S.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:l,setupView:c,state:i}}function Hd(s){const t=new iE(s),n=[],i=[];function r(u){h.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(){t.setup(n)}function c(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sE(s){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Hd(s),t.set(r,[l])):o>=a.length?(l=new Hd(s),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}const rE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
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
}`;function aE(s,t,n){let i=new Rh;const r=new ce,o=new ce,a=new it,l=new s0({depthPacking:gv}),c=new r0,h={},u=n.maxTextureSize,d={[pi]:en,[en]:pi,[Hn]:Hn},f=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:rE,fragmentShader:oE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rp;let m=this.type;this.render=function(I,P,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const C=s.getRenderTarget(),E=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ui),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const X=m!==ri&&this.type===ri,ee=m===ri&&this.type!==ri;for(let se=0,Z=I.length;se<Z;se++){const ie=I[se],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const me=W.getFrameExtents();if(r.multiply(me),o.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/me.x),r.x=o.x*me.x,W.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/me.y),r.y=o.y*me.y,W.mapSize.y=o.y)),W.map===null||X===!0||ee===!0){const be=this.type!==ri?{minFilter:Yt,magFilter:Yt}:{};W.map!==null&&W.map.dispose(),W.map=new Dn(r.x,r.y,be),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ye=W.getViewportCount();for(let be=0;be<ye;be++){const Le=W.getViewport(be);a.set(o.x*Le.x,o.y*Le.y,o.x*Le.z,o.y*Le.w),Q.viewport(a),W.updateMatrices(ie,be),i=W.getFrustum(),x(P,U,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===ri&&T(W,U),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(C,E,N)};function T(I,P){const U=t.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Dn(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,U,f,v,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,U,p,v,null)}function S(I,P,U,C){let E=null;const N=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)E=N;else if(E=U.isPointLight===!0?c:l,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=E.uuid,X=P.uuid;let ee=h[Q];ee===void 0&&(ee={},h[Q]=ee);let se=ee[X];se===void 0&&(se=E.clone(),ee[X]=se,P.addEventListener("dispose",L)),E=se}if(E.visible=P.visible,E.wireframe=P.wireframe,C===ri?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:d[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=s.properties.get(E);Q.light=U}return E}function x(I,P,U,C,E){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===ri)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const X=t.update(I),ee=I.material;if(Array.isArray(ee)){const se=X.groups;for(let Z=0,ie=se.length;Z<ie;Z++){const W=se[Z],me=ee[W.materialIndex];if(me&&me.visible){const ye=S(I,me,C,E);I.onBeforeShadow(s,I,P,U,X,ye,W),s.renderBufferDirect(U,null,X,ye,I,W),I.onAfterShadow(s,I,P,U,X,ye,W)}}}else if(ee.visible){const se=S(I,ee,C,E);I.onBeforeShadow(s,I,P,U,X,se,null),s.renderBufferDirect(U,null,X,se,I,null),I.onAfterShadow(s,I,P,U,X,se,null)}}const Q=I.children;for(let X=0,ee=Q.length;X<ee;X++)x(Q[X],P,U,C,E)}function L(I){I.target.removeEventListener("dispose",L);for(const U in h){const C=h[U],E=I.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}const lE={[tc]:nc,[ic]:oc,[sc]:ac,[Js]:rc,[nc]:tc,[oc]:ic,[ac]:sc,[rc]:Js};function cE(s,t){function n(){let B=!1;const Me=new it;let ne=null;const oe=new it(0,0,0,0);return{setMask:function(Te){ne!==Te&&!B&&(s.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){B=Te},setClear:function(Te,Ee,Xe,Mt,Dt){Dt===!0&&(Te*=Mt,Ee*=Mt,Xe*=Mt),Me.set(Te,Ee,Xe,Mt),oe.equals(Me)===!1&&(s.clearColor(Te,Ee,Xe,Mt),oe.copy(Me))},reset:function(){B=!1,ne=null,oe.set(-1,0,0,0)}}}function i(){let B=!1,Me=!1,ne=null,oe=null,Te=null;return{setReversed:function(Ee){if(Me!==Ee){const Xe=t.get("EXT_clip_control");Me?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Te;Te=null,this.setClear(Mt)}Me=Ee},getReversed:function(){return Me},setTest:function(Ee){Ee?de(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Ee){ne!==Ee&&!B&&(s.depthMask(Ee),ne=Ee)},setFunc:function(Ee){if(Me&&(Ee=lE[Ee]),oe!==Ee){switch(Ee){case tc:s.depthFunc(s.NEVER);break;case nc:s.depthFunc(s.ALWAYS);break;case ic:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case sc:s.depthFunc(s.EQUAL);break;case rc:s.depthFunc(s.GEQUAL);break;case oc:s.depthFunc(s.GREATER);break;case ac:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Ee}},setLocked:function(Ee){B=Ee},setClear:function(Ee){Te!==Ee&&(Me&&(Ee=1-Ee),s.clearDepth(Ee),Te=Ee)},reset:function(){B=!1,ne=null,oe=null,Te=null,Me=!1}}}function r(){let B=!1,Me=null,ne=null,oe=null,Te=null,Ee=null,Xe=null,Mt=null,Dt=null;return{setTest:function(ct){B||(ct?de(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(ct){Me!==ct&&!B&&(s.stencilMask(ct),Me=ct)},setFunc:function(ct,bn,Jn){(ne!==ct||oe!==bn||Te!==Jn)&&(s.stencilFunc(ct,bn,Jn),ne=ct,oe=bn,Te=Jn)},setOp:function(ct,bn,Jn){(Ee!==ct||Xe!==bn||Mt!==Jn)&&(s.stencilOp(ct,bn,Jn),Ee=ct,Xe=bn,Mt=Jn)},setLocked:function(ct){B=ct},setClear:function(ct){Dt!==ct&&(s.clearStencil(ct),Dt=ct)},reset:function(){B=!1,Me=null,ne=null,oe=null,Te=null,Ee=null,Xe=null,Mt=null,Dt=null}}}const o=new n,a=new i,l=new r,c=new WeakMap,h=new WeakMap;let u={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,T=null,S=null,x=null,L=null,I=null,P=new Ne(0,0,0),U=0,C=!1,E=null,N=null,Q=null,X=null,ee=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ie=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=ie>=2);let me=null,ye={};const be=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),et=new it().fromArray(be),re=new it().fromArray(Le);function ue(B,Me,ne,oe){const Te=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(B,Ee),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<ne;Xe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Me+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Ee}const Ae={};Ae[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),de(s.DEPTH_TEST),a.setFunc(Js),O(!1),V(Su),de(s.CULL_FACE),M(ui);function de(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function Re(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function Be(B,Me){return d[B]!==Me?(s.bindFramebuffer(B,Me),d[B]=Me,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Me),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ie(B,Me){let ne=p,oe=!1;if(B){ne=f.get(Me),ne===void 0&&(ne=[],f.set(Me,ne));const Te=B.textures;if(ne.length!==Te.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Xe=Te.length;Ee<Xe;Ee++)ne[Ee]=s.COLOR_ATTACHMENT0+Ee;ne.length=Te.length,oe=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,oe=!0);oe&&s.drawBuffers(ne)}function Qe(B){return _!==B?(s.useProgram(B),_=B,!0):!1}const w={[Qi]:s.FUNC_ADD,[G_]:s.FUNC_SUBTRACT,[W_]:s.FUNC_REVERSE_SUBTRACT};w[X_]=s.MIN,w[$_]=s.MAX;const R={[q_]:s.ZERO,[j_]:s.ONE,[Y_]:s.SRC_COLOR,[Ql]:s.SRC_ALPHA,[tv]:s.SRC_ALPHA_SATURATE,[Q_]:s.DST_COLOR,[J_]:s.DST_ALPHA,[K_]:s.ONE_MINUS_SRC_COLOR,[ec]:s.ONE_MINUS_SRC_ALPHA,[ev]:s.ONE_MINUS_DST_COLOR,[Z_]:s.ONE_MINUS_DST_ALPHA,[nv]:s.CONSTANT_COLOR,[iv]:s.ONE_MINUS_CONSTANT_COLOR,[sv]:s.CONSTANT_ALPHA,[rv]:s.ONE_MINUS_CONSTANT_ALPHA};function M(B,Me,ne,oe,Te,Ee,Xe,Mt,Dt,ct){if(B===ui){v===!0&&(Re(s.BLEND),v=!1);return}if(v===!1&&(de(s.BLEND),v=!0),B!==V_){if(B!==g||ct!==C){if((m!==Qi||x!==Qi)&&(s.blendEquation(s.FUNC_ADD),m=Qi,x=Qi),ct)switch(B){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zl:s.blendFunc(s.ONE,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,S=null,L=null,I=null,P.set(0,0,0),U=0,g=B,C=ct}return}Te=Te||Me,Ee=Ee||ne,Xe=Xe||oe,(Me!==m||Te!==x)&&(s.blendEquationSeparate(w[Me],w[Te]),m=Me,x=Te),(ne!==T||oe!==S||Ee!==L||Xe!==I)&&(s.blendFuncSeparate(R[ne],R[oe],R[Ee],R[Xe]),T=ne,S=oe,L=Ee,I=Xe),(Mt.equals(P)===!1||Dt!==U)&&(s.blendColor(Mt.r,Mt.g,Mt.b,Dt),P.copy(Mt),U=Dt),g=B,C=!1}function $(B,Me){B.side===Hn?Re(s.CULL_FACE):de(s.CULL_FACE);let ne=B.side===en;Me&&(ne=!ne),O(ne),B.blending===Ws&&B.transparent===!1?M(ui):M(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),o.setMask(B.colorWrite);const oe=B.stencilWrite;l.setTest(oe),oe&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),te(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function O(B){E!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),E=B)}function V(B){B!==z_?(de(s.CULL_FACE),B!==N&&(B===Su?s.cullFace(s.BACK):B===H_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),N=B}function G(B){B!==Q&&(Z&&s.lineWidth(B),Q=B)}function te(B,Me,ne){B?(de(s.POLYGON_OFFSET_FILL),(X!==Me||ee!==ne)&&(s.polygonOffset(Me,ne),X=Me,ee=ne)):Re(s.POLYGON_OFFSET_FILL)}function q(B){B?de(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function b(B){B===void 0&&(B=s.TEXTURE0+se-1),me!==B&&(s.activeTexture(B),me=B)}function y(B,Me,ne){ne===void 0&&(me===null?ne=s.TEXTURE0+se-1:ne=me);let oe=ye[ne];oe===void 0&&(oe={type:void 0,texture:void 0},ye[ne]=oe),(oe.type!==B||oe.texture!==Me)&&(me!==ne&&(s.activeTexture(ne),me=ne),s.bindTexture(B,Me||Ae[B]),oe.type=B,oe.texture=Me)}function D(){const B=ye[me];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function H(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){et.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),et.copy(B))}function _e(B){re.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function ke(B,Me){let ne=h.get(Me);ne===void 0&&(ne=new WeakMap,h.set(Me,ne));let oe=ne.get(B);oe===void 0&&(oe=s.getUniformBlockIndex(Me,B.name),ne.set(B,oe))}function Ve(B,Me){const oe=h.get(Me).get(B);c.get(Me)!==oe&&(s.uniformBlockBinding(Me,oe,B.__bindingPointIndex),c.set(Me,oe))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},me=null,ye={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,T=null,S=null,x=null,L=null,I=null,P=new Ne(0,0,0),U=0,C=!1,E=null,N=null,Q=null,X=null,ee=null,et.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:de,disable:Re,bindFramebuffer:Be,drawBuffers:Ie,useProgram:Qe,setBlending:M,setMaterial:$,setFlipSided:O,setCullFace:V,setLineWidth:G,setPolygonOffset:te,setScissorTest:q,activeTexture:b,bindTexture:y,unbindTexture:D,compressedTexImage2D:H,compressedTexImage3D:Y,texImage2D:xe,texImage3D:Pe,updateUBOMapping:ke,uniformBlockBinding:Ve,texStorage2D:Ue,texStorage3D:le,texSubImage2D:j,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Oe,viewport:_e,reset:ft}}function hE(s,t,n,i,r,o,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ce,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,y){return p?new OffscreenCanvas(b,y):Kr("canvas")}function v(b,y,D){let H=1;const Y=q(b);if((Y.width>D||Y.height>D)&&(H=D/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(H*Y.width),fe=Math.floor(H*Y.height);d===void 0&&(d=_(j,fe));const ae=y?_(j,fe):d;return ae.width=j,ae.height=fe,ae.getContext("2d").drawImage(b,0,0,j,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+j+"x"+fe+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function g(b){return b.generateMipmaps}function m(b){s.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(b,y,D,H,Y=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=y;if(y===s.RED&&(D===s.FLOAT&&(j=s.R32F),D===s.HALF_FLOAT&&(j=s.R16F),D===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.R8UI),D===s.UNSIGNED_SHORT&&(j=s.R16UI),D===s.UNSIGNED_INT&&(j=s.R32UI),D===s.BYTE&&(j=s.R8I),D===s.SHORT&&(j=s.R16I),D===s.INT&&(j=s.R32I)),y===s.RG&&(D===s.FLOAT&&(j=s.RG32F),D===s.HALF_FLOAT&&(j=s.RG16F),D===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.RG8UI),D===s.UNSIGNED_SHORT&&(j=s.RG16UI),D===s.UNSIGNED_INT&&(j=s.RG32UI),D===s.BYTE&&(j=s.RG8I),D===s.SHORT&&(j=s.RG16I),D===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.RGB8UI),D===s.UNSIGNED_SHORT&&(j=s.RGB16UI),D===s.UNSIGNED_INT&&(j=s.RGB32UI),D===s.BYTE&&(j=s.RGB8I),D===s.SHORT&&(j=s.RGB16I),D===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),D===s.UNSIGNED_INT&&(j=s.RGBA32UI),D===s.BYTE&&(j=s.RGBA8I),D===s.SHORT&&(j=s.RGBA16I),D===s.INT&&(j=s.RGBA32I)),y===s.RGB&&D===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),y===s.RGBA){const fe=Y?pa:Ze.getTransfer(H);D===s.FLOAT&&(j=s.RGBA32F),D===s.HALF_FLOAT&&(j=s.RGBA16F),D===s.UNSIGNED_BYTE&&(j=fe===ht?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(b,y){let D;return b?y===null||y===rs||y===er?D=s.DEPTH24_STENCIL8:y===Ln?D=s.DEPTH32F_STENCIL8:y===qr&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===rs||y===er?D=s.DEPTH_COMPONENT24:y===Ln?D=s.DEPTH_COMPONENT32F:y===qr&&(D=s.DEPTH_COMPONENT16),D}function L(b,y){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yt&&b.minFilter!==hn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function I(b){const y=b.target;y.removeEventListener("dispose",I),U(y),y.isVideoTexture&&u.delete(y)}function P(b){const y=b.target;y.removeEventListener("dispose",P),E(y)}function U(b){const y=i.get(b);if(y.__webglInit===void 0)return;const D=b.source,H=f.get(D);if(H){const Y=H[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(b),Object.keys(H).length===0&&f.delete(D)}i.remove(b)}function C(b){const y=i.get(b);s.deleteTexture(y.__webglTexture);const D=b.source,H=f.get(D);delete H[y.__cacheKey],a.memory.textures--}function E(b){const y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let Y=0;Y<y.__webglFramebuffer[H].length;Y++)s.deleteFramebuffer(y.__webglFramebuffer[H][Y]);else s.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)s.deleteFramebuffer(y.__webglFramebuffer[H]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const D=b.textures;for(let H=0,Y=D.length;H<Y;H++){const j=i.get(D[H]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(D[H])}i.remove(b)}let N=0;function Q(){N=0}function X(){const b=N;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),N+=1,b}function ee(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function se(b,y){const D=i.get(b);if(b.isVideoTexture&&G(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(D,b,y);return}}n.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+y)}function Z(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){re(D,b,y);return}n.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+y)}function ie(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){re(D,b,y);return}n.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+y)}function W(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ue(D,b,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+y)}const me={[Tt]:s.REPEAT,[Ri]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},ye={[Yt]:s.NEAREST,[pp]:s.NEAREST_MIPMAP_NEAREST,[Rr]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[Jo]:s.LINEAR_MIPMAP_NEAREST,[ci]:s.LINEAR_MIPMAP_LINEAR},be={[vv]:s.NEVER,[Ev]:s.ALWAYS,[xv]:s.LESS,[Tp]:s.LEQUAL,[yv]:s.EQUAL,[bv]:s.GEQUAL,[Mv]:s.GREATER,[Sv]:s.NOTEQUAL};function Le(b,y){if(y.type===Ln&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===hn||y.magFilter===Jo||y.magFilter===Rr||y.magFilter===ci||y.minFilter===hn||y.minFilter===Jo||y.minFilter===Rr||y.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,me[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,me[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,me[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ye[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Yt||y.minFilter!==Rr&&y.minFilter!==ci||y.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function et(b,y){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",I));const H=y.source;let Y=f.get(H);Y===void 0&&(Y={},f.set(H,Y));const j=ee(y);if(j!==b.__cacheKey){Y[j]===void 0&&(Y[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[j].usedTimes++;const fe=Y[b.__cacheKey];fe!==void 0&&(Y[b.__cacheKey].usedTimes--,fe.usedTimes===0&&C(y)),b.__cacheKey=j,b.__webglTexture=Y[j].texture}return D}function re(b,y,D){let H=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=s.TEXTURE_3D);const Y=et(b,y),j=y.source;n.bindTexture(H,b.__webglTexture,s.TEXTURE0+D);const fe=i.get(j);if(j.version!==fe.__version||Y===!0){n.activeTexture(s.TEXTURE0+D);const ae=Ze.getPrimaries(Ze.workingColorSpace),ge=y.colorSpace===Ci?null:Ze.getPrimaries(y.colorSpace),Ue=y.colorSpace===Ci||ae===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let le=v(y.image,!1,r.maxTextureSize);le=te(y,le);const xe=o.convert(y.format,y.colorSpace),Pe=o.convert(y.type);let Oe=S(y.internalFormat,xe,Pe,y.colorSpace,y.isVideoTexture);Le(H,y);let _e;const ke=y.mipmaps,Ve=y.isVideoTexture!==!0,ft=fe.__version===void 0||Y===!0,B=j.dataReady,Me=L(y,le);if(y.isDepthTexture)Oe=x(y.format===tr,y.type),ft&&(Ve?n.texStorage2D(s.TEXTURE_2D,1,Oe,le.width,le.height):n.texImage2D(s.TEXTURE_2D,0,Oe,le.width,le.height,0,xe,Pe,null));else if(y.isDataTexture)if(ke.length>0){Ve&&ft&&n.texStorage2D(s.TEXTURE_2D,Me,Oe,ke[0].width,ke[0].height);for(let ne=0,oe=ke.length;ne<oe;ne++)_e=ke[ne],Ve?B&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Pe,_e.data):n.texImage2D(s.TEXTURE_2D,ne,Oe,_e.width,_e.height,0,xe,Pe,_e.data);y.generateMipmaps=!1}else Ve?(ft&&n.texStorage2D(s.TEXTURE_2D,Me,Oe,le.width,le.height),B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,le.width,le.height,xe,Pe,le.data)):n.texImage2D(s.TEXTURE_2D,0,Oe,le.width,le.height,0,xe,Pe,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&ft&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Oe,ke[0].width,ke[0].height,le.depth);for(let ne=0,oe=ke.length;ne<oe;ne++)if(_e=ke[ne],y.format!==vn)if(xe!==null)if(Ve){if(B)if(y.layerUpdates.size>0){const Te=_d(_e.width,_e.height,y.format,y.type);for(const Ee of y.layerUpdates){const Xe=_e.data.subarray(Ee*Te/_e.data.BYTES_PER_ELEMENT,(Ee+1)*Te/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Ee,_e.width,_e.height,1,xe,Xe)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,le.depth,xe,_e.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Oe,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,le.depth,xe,Pe,_e.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ne,Oe,_e.width,_e.height,le.depth,0,xe,Pe,_e.data)}else{Ve&&ft&&n.texStorage2D(s.TEXTURE_2D,Me,Oe,ke[0].width,ke[0].height);for(let ne=0,oe=ke.length;ne<oe;ne++)_e=ke[ne],y.format!==vn?xe!==null?Ve?B&&n.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(s.TEXTURE_2D,ne,Oe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Pe,_e.data):n.texImage2D(s.TEXTURE_2D,ne,Oe,_e.width,_e.height,0,xe,Pe,_e.data)}else if(y.isDataArrayTexture)if(Ve){if(ft&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Oe,le.width,le.height,le.depth),B)if(y.layerUpdates.size>0){const ne=_d(le.width,le.height,y.format,y.type);for(const oe of y.layerUpdates){const Te=le.data.subarray(oe*ne/le.data.BYTES_PER_ELEMENT,(oe+1)*ne/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,xe,Pe,Te)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Pe,le.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,xe,Pe,le.data);else if(y.isData3DTexture)Ve?(ft&&n.texStorage3D(s.TEXTURE_3D,Me,Oe,le.width,le.height,le.depth),B&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Pe,le.data)):n.texImage3D(s.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,xe,Pe,le.data);else if(y.isFramebufferTexture){if(ft)if(Ve)n.texStorage2D(s.TEXTURE_2D,Me,Oe,le.width,le.height);else{let ne=le.width,oe=le.height;for(let Te=0;Te<Me;Te++)n.texImage2D(s.TEXTURE_2D,Te,Oe,ne,oe,0,xe,Pe,null),ne>>=1,oe>>=1}}else if(ke.length>0){if(Ve&&ft){const ne=q(ke[0]);n.texStorage2D(s.TEXTURE_2D,Me,Oe,ne.width,ne.height)}for(let ne=0,oe=ke.length;ne<oe;ne++)_e=ke[ne],Ve?B&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,xe,Pe,_e):n.texImage2D(s.TEXTURE_2D,ne,Oe,xe,Pe,_e);y.generateMipmaps=!1}else if(Ve){if(ft){const ne=q(le);n.texStorage2D(s.TEXTURE_2D,Me,Oe,ne.width,ne.height)}B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Pe,le)}else n.texImage2D(s.TEXTURE_2D,0,Oe,xe,Pe,le);g(y)&&m(H),fe.__version=j.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ue(b,y,D){if(y.image.length!==6)return;const H=et(b,y),Y=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+D);const j=i.get(Y);if(Y.version!==j.__version||H===!0){n.activeTexture(s.TEXTURE0+D);const fe=Ze.getPrimaries(Ze.workingColorSpace),ae=y.colorSpace===Ci?null:Ze.getPrimaries(y.colorSpace),ge=y.colorSpace===Ci||fe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Ue&&!le?xe[oe]=v(y.image[oe],!0,r.maxCubemapSize):xe[oe]=le?y.image[oe].image:y.image[oe],xe[oe]=te(y,xe[oe]);const Pe=xe[0],Oe=o.convert(y.format,y.colorSpace),_e=o.convert(y.type),ke=S(y.internalFormat,Oe,_e,y.colorSpace),Ve=y.isVideoTexture!==!0,ft=j.__version===void 0||H===!0,B=Y.dataReady;let Me=L(y,Pe);Le(s.TEXTURE_CUBE_MAP,y);let ne;if(Ue){Ve&&ft&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Me,ke,Pe.width,Pe.height);for(let oe=0;oe<6;oe++){ne=xe[oe].mipmaps;for(let Te=0;Te<ne.length;Te++){const Ee=ne[Te];y.format!==vn?Oe!==null?Ve?B&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ee.width,Ee.height,Oe,Ee.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ee.width,Ee.height,Oe,_e,Ee.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ke,Ee.width,Ee.height,0,Oe,_e,Ee.data)}}}else{if(ne=y.mipmaps,Ve&&ft){ne.length>0&&Me++;const oe=q(xe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Me,ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){Ve?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Oe,_e,xe[oe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,xe[oe].width,xe[oe].height,0,Oe,_e,xe[oe].data);for(let Te=0;Te<ne.length;Te++){const Xe=ne[Te].image[oe].image;Ve?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,Xe.width,Xe.height,Oe,_e,Xe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ke,Xe.width,Xe.height,0,Oe,_e,Xe.data)}}else{Ve?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Oe,_e,xe[oe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Oe,_e,xe[oe]);for(let Te=0;Te<ne.length;Te++){const Ee=ne[Te];Ve?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,Oe,_e,Ee.image[oe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ke,Oe,_e,Ee.image[oe])}}}g(y)&&m(s.TEXTURE_CUBE_MAP),j.__version=Y.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ae(b,y,D,H,Y,j){const fe=o.convert(D.format,D.colorSpace),ae=o.convert(D.type),ge=S(D.internalFormat,fe,ae,D.colorSpace),Ue=i.get(y),le=i.get(D);if(le.__renderTarget=y,!Ue.__hasExternalTextures){const xe=Math.max(1,y.width>>j),Pe=Math.max(1,y.height>>j);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?n.texImage3D(Y,j,ge,xe,Pe,y.depth,0,fe,ae,null):n.texImage2D(Y,j,ge,xe,Pe,0,fe,ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),V(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,Y,le.__webglTexture,0,O(y)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,Y,le.__webglTexture,j),n.bindFramebuffer(s.FRAMEBUFFER,null)}function de(b,y,D){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const H=y.depthTexture,Y=H&&H.isDepthTexture?H.type:null,j=x(y.stencilBuffer,Y),fe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=O(y);V(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,j,y.width,y.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,b)}else{const H=y.textures;for(let Y=0;Y<H.length;Y++){const j=H[Y],fe=o.convert(j.format,j.colorSpace),ae=o.convert(j.type),ge=S(j.internalFormat,fe,ae,j.colorSpace),Ue=O(y);D&&V(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ge,y.width,y.height):V(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,ge,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ge,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(y.depthTexture);H.__renderTarget=y,(!H.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),se(y.depthTexture,0);const Y=H.__webglTexture,j=O(y);if(y.depthTexture.format===Xs)V(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(y.depthTexture.format===tr)V(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(b){const y=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const H=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){const Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=H}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Re(y.__webglFramebuffer,b)}else if(D){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=s.createRenderbuffer(),de(y.__webglDepthbuffer[H],b,!1);else{const Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,j)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),de(y.__webglDepthbuffer,b,!1);else{const H=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,Y)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(b,y,D){const H=i.get(b);y!==void 0&&Ae(H.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Be(b)}function Qe(b){const y=b.texture,D=i.get(b),H=i.get(y);b.addEventListener("dispose",P);const Y=b.textures,j=b.isWebGLCubeRenderTarget===!0,fe=Y.length>1;if(fe||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=y.version,a.memory.textures++),j){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let ge=0;ge<y.mipmaps.length;ge++)D.__webglFramebuffer[ae][ge]=s.createFramebuffer()}else D.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)D.__webglFramebuffer[ae]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(fe)for(let ae=0,ge=Y.length;ae<ge;ae++){const Ue=i.get(Y[ae]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&V(b)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<Y.length;ae++){const ge=Y[ae];D.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Ue=o.convert(ge.format,ge.colorSpace),le=o.convert(ge.type),xe=S(ge.internalFormat,Ue,le,ge.colorSpace,b.isXRRenderTarget===!0),Pe=O(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,xe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),de(D.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){n.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Le(s.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Ae(D.__webglFramebuffer[ae][ge],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ge);else Ae(D.__webglFramebuffer[ae],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(y)&&m(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ae=0,ge=Y.length;ae<ge;ae++){const Ue=Y[ae],le=i.get(Ue);n.bindTexture(s.TEXTURE_2D,le.__webglTexture),Le(s.TEXTURE_2D,Ue),Ae(D.__webglFramebuffer,b,Ue,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),g(Ue)&&m(s.TEXTURE_2D)}n.unbindTexture()}else{let ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(ae,H.__webglTexture),Le(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Ae(D.__webglFramebuffer[ge],b,y,s.COLOR_ATTACHMENT0,ae,ge);else Ae(D.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,ae,0);g(y)&&m(ae),n.unbindTexture()}b.depthBuffer&&Be(b)}function w(b){const y=b.textures;for(let D=0,H=y.length;D<H;D++){const Y=y[D];if(g(Y)){const j=T(b),fe=i.get(Y).__webglTexture;n.bindTexture(j,fe),m(j),n.unbindTexture()}}}const R=[],M=[];function $(b){if(b.samples>0){if(V(b)===!1){const y=b.textures,D=b.width,H=b.height;let Y=s.COLOR_BUFFER_BIT;const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=i.get(b),ae=y.length>1;if(ae)for(let ge=0;ge<y.length;ge++)n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Ue=i.get(y[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,D,H,0,0,D,H,Y,s.NEAREST),c===!0&&(R.length=0,M.length=0,R.push(s.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(R.push(j),M.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,M)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let ge=0;ge<y.length;ge++){n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Ue=i.get(y[ge]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ue,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function O(b){return Math.min(r.maxSamples,b.samples)}function V(b){const y=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function G(b){const y=a.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function te(b,y){const D=b.colorSpace,H=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Jt&&D!==Ci&&(Ze.getTransfer(D)===ht?(H!==vn||Y!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}function q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=se,this.setTexture2DArray=Z,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Ie,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=V}function uE(s,t){function n(i,r=Ci){let o;const a=Ze.getTransfer(r);if(i===mi)return s.UNSIGNED_BYTE;if(i===vh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===_p)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===mp)return s.BYTE;if(i===gp)return s.SHORT;if(i===qr)return s.UNSIGNED_SHORT;if(i===_h)return s.INT;if(i===rs)return s.UNSIGNED_INT;if(i===Ln)return s.FLOAT;if(i===di)return s.HALF_FLOAT;if(i===vp)return s.ALPHA;if(i===xp)return s.RGB;if(i===vn)return s.RGBA;if(i===yp)return s.LUMINANCE;if(i===Mp)return s.LUMINANCE_ALPHA;if(i===Xs)return s.DEPTH_COMPONENT;if(i===tr)return s.DEPTH_STENCIL;if(i===yh)return s.RED;if(i===Mh)return s.RED_INTEGER;if(i===Sp)return s.RG;if(i===Sh)return s.RG_INTEGER;if(i===bh)return s.RGBA_INTEGER;if(i===Zo||i===Qo||i===ea||i===ta)if(a===ht)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===uc||i===dc||i===fc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===hc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pc||i===mc||i===gc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===pc||i===mc)return a===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===gc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===Tc||i===Ac||i===wc||i===Cc||i===Rc||i===Pc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===_c)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===Lc||i===Ic)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===na)return a===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bp||i===Dc||i===Nc||i===Uc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===na)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:n}}const dE={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,o=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const g=n.getJointPose(v,i),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;h.inputState.pinching&&f>p+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const fE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new Lt,o=t.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Bt({vertexShader:fE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gt(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends ls{constructor(t,n){super();const i=this;let r=null,o=1,a=null,l="local-floor",c=1,h=null,u=null,d=null,f=null,p=null,_=null;const v=new mE,g=n.getContextAttributes();let m=null,T=null;const S=[],x=[],L=new ce;let I=null;const P=new $t;P.viewport=new it;const U=new $t;U.viewport=new it;const C=[P,U],E=new S0;let N=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ue=S[re];return ue===void 0&&(ue=new Dl,S[re]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(re){let ue=S[re];return ue===void 0&&(ue=new Dl,S[re]=ue),ue.getGripSpace()},this.getHand=function(re){let ue=S[re];return ue===void 0&&(ue=new Dl,S[re]=ue),ue.getHandSpace()};function X(re){const ue=x.indexOf(re.inputSource);if(ue===-1)return;const Ae=S[ue];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,h||a),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",se);for(let re=0;re<S.length;re++){const ue=x[re];ue!==null&&(x[re]=null,S[re].disconnect(ue))}N=null,Q=null,v.reset(),t.setRenderTarget(m),p=null,f=null,d=null,r=null,T=null,et.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){l=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Dn(p.framebufferWidth,p.framebufferHeight,{format:vn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,Ae=null,de=null;g.depth&&(de=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?tr:Xs,Ae=g.stencil?er:rs);const Re={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:o};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Dn(f.textureWidth,f.textureHeight,{format:vn,type:mi,depthTexture:new kp(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(l),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function se(re){for(let ue=0;ue<re.removed.length;ue++){const Ae=re.removed[ue],de=x.indexOf(Ae);de>=0&&(x[de]=null,S[de].disconnect(Ae))}for(let ue=0;ue<re.added.length;ue++){const Ae=re.added[ue];let de=x.indexOf(Ae);if(de===-1){for(let Be=0;Be<S.length;Be++)if(Be>=x.length){x.push(Ae),de=Be;break}else if(x[Be]===null){x[Be]=Ae,de=Be;break}if(de===-1)break}const Re=S[de];Re&&Re.connect(Ae)}}const Z=new F,ie=new F;function W(re,ue,Ae){Z.setFromMatrixPosition(ue.matrixWorld),ie.setFromMatrixPosition(Ae.matrixWorld);const de=Z.distanceTo(ie),Re=ue.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,Ie=Re[14]/(Re[10]-1),Qe=Re[14]/(Re[10]+1),w=(Re[9]+1)/Re[5],R=(Re[9]-1)/Re[5],M=(Re[8]-1)/Re[0],$=(Be[8]+1)/Be[0],O=Ie*M,V=Ie*$,G=de/(-M+$),te=G*-M;if(ue.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(te),re.translateZ(G),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Re[10]===-1)re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const q=Ie+G,b=Qe+G,y=O-te,D=V+(de-te),H=w*Qe/b*q,Y=R*Qe/b*q;re.projectionMatrix.makePerspective(y,D,H,Y,q,b),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function me(re,ue){ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ue=re.near,Ae=re.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),E.near=U.near=P.near=ue,E.far=U.far=P.far=Ae,(N!==E.near||Q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,Q=E.far),P.layers.mask=re.layers.mask|2,U.layers.mask=re.layers.mask|4,E.layers.mask=P.layers.mask|U.layers.mask;const de=re.parent,Re=E.cameras;me(E,de);for(let Be=0;Be<Re.length;Be++)me(Re[Be],de);Re.length===2?W(E,P,U):E.projectionMatrix.copy(P.projectionMatrix),ye(re,E,de)};function ye(re,ue,Ae){Ae===null?re.matrix.copy(ue.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=nr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let be=null;function Le(re,ue){if(u=ue.getViewerPose(h||a),_=ue,u!==null){const Ae=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let de=!1;Ae.length!==E.cameras.length&&(E.cameras.length=0,de=!0);for(let Be=0;Be<Ae.length;Be++){const Ie=Ae[Be];let Qe=null;if(p!==null)Qe=p.getViewport(Ie);else{const R=d.getViewSubImage(f,Ie);Qe=R.viewport,Be===0&&(t.setRenderTargetTextures(T,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(T))}let w=C[Be];w===void 0&&(w=new $t,w.layers.enable(Be),w.viewport=new it,C[Be]=w),w.matrix.fromArray(Ie.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ie.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Be===0&&(E.matrix.copy(w.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),de===!0&&E.cameras.push(w)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Be=d.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&v.init(t,Be,r.renderState)}}for(let Ae=0;Ae<S.length;Ae++){const de=x[Ae],Re=S[Ae];de!==null&&Re!==void 0&&Re.update(de,ue,h||a)}be&&be(re,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const et=new Zp;et.setAnimationLoop(Le),this.setAnimationLoop=function(re){be=re},this.dispose=function(){}}}const qi=new Un,_E=new We;function vE(s,t){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ip(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,T,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),d(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,x)):m.isMeshMatcapMaterial?(o(g,m),_(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),v(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,T,S):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const T=t.get(m),S=T.envMap,x=T.envMapRotation;S&&(g.envMap.value=S,qi.copy(x),qi.x*=-1,qi.y*=-1,qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),g.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(qi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,T,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=S*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,T){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const T=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xE(s,t,n,i){let r={},o={},a=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const x=S.program;i.uniformBlockBinding(T,x)}function h(T,S){let x=r[T.id];x===void 0&&(_(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",g));const L=S.program;i.updateUBOMapping(T,L);const I=t.render.frame;o[T.id]!==I&&(f(T),o[T.id]=I)}function u(T){const S=d();T.__bindingPointIndex=S;const x=s.createBuffer(),L=T.__size,I=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function d(){for(let T=0;T<l;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=r[T.id],x=T.uniforms,L=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let I=0,P=x.length;I<P;I++){const U=Array.isArray(x[I])?x[I]:[x[I]];for(let C=0,E=U.length;C<E;C++){const N=U[C];if(p(N,I,C,L)===!0){const Q=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let ee=0;for(let se=0;se<X.length;se++){const Z=X[se],ie=v(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,Q+ee,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,ee),ee+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,S,x,L){const I=T.value,P=S+"_"+x;if(L[P]===void 0)return typeof I=="number"||typeof I=="boolean"?L[P]=I:L[P]=I.clone(),!0;{const U=L[P];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return L[P]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function _(T){const S=T.uniforms;let x=0;const L=16;for(let P=0,U=S.length;P<U;P++){const C=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,N=C.length;E<N;E++){const Q=C[E],X=Array.isArray(Q.value)?Q.value:[Q.value];for(let ee=0,se=X.length;ee<se;ee++){const Z=X[ee],ie=v(Z),W=x%L,me=W%ie.boundary,ye=W+me;x+=me,ye!==0&&L-ye<ie.storage&&(x+=L-ye),Q.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=x,x+=ie.storage}}}const I=x%L;return I>0&&(x+=L-I),T.__size=x,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function g(T){const S=T.target;S.removeEventListener("dispose",g);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function m(){for(const T in r)s.deleteBuffer(r[T]);a=[],r={},o={}}return{bind:c,update:h,dispose:m}}class yE{constructor(t={}){const{canvas:n=Vv(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const T=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=Di,this.toneMappingExposure=1;const x=this;let L=!1,I=0,P=0,U=null,C=-1,E=null;const N=new it,Q=new it;let X=null;const ee=new Ne(0);let se=0,Z=n.width,ie=n.height,W=1,me=null,ye=null;const be=new it(0,0,Z,ie),Le=new it(0,0,Z,ie);let et=!1;const re=new Rh;let ue=!1,Ae=!1;const de=new We,Re=new We,Be=new F,Ie=new it,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return U===null?W:1}let M=i;function $(A,k){return n.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mh}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),M===null){const k="webgl2";if(M=$(k,A),M===null)throw $(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let O,V,G,te,q,b,y,D,H,Y,j,fe,ae,ge,Ue,le,xe,Pe,Oe,_e,ke,Ve,ft,B;function Me(){O=new RS(M),O.init(),Ve=new uE(M,O),V=new bS(M,O,t,Ve),G=new cE(M,O),V.reverseDepthBuffer&&f&&G.buffers.depth.setReversed(!0),te=new IS(M),q=new Kb,b=new hE(M,O,G,q,V,Ve,te),y=new TS(x),D=new CS(x),H=new k0(M),ft=new MS(M,H),Y=new PS(M,H,te,ft),j=new NS(M,Y,H,te),Oe=new DS(M,V,b),le=new ES(q),fe=new Yb(x,y,D,O,V,ft,le),ae=new vE(x,q),ge=new Zb,Ue=new sE(O),Pe=new yS(x,y,D,G,j,p,c),xe=new aE(x,j,V),B=new xE(M,te,V,G),_e=new SS(M,O,te),ke=new LS(M,O,te),te.programs=fe.programs,x.capabilities=V,x.extensions=O,x.properties=q,x.renderLists=ge,x.shadowMap=xe,x.state=G,x.info=te}Me();const ne=new gE(x,M);this.xr=ne,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=O.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=O.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(Z,ie,!1))},this.getSize=function(A){return A.set(Z,ie)},this.setSize=function(A,k,K=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,ie=k,n.width=Math.floor(A*W),n.height=Math.floor(k*W),K===!0&&(n.style.width=A+"px",n.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Z*W,ie*W).floor()},this.setDrawingBufferSize=function(A,k,K){Z=A,ie=k,W=K,n.width=Math.floor(A*K),n.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,k,K,J){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,k,K,J),G.viewport(N.copy(be).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Le)},this.setScissor=function(A,k,K,J){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,k,K,J),G.scissor(Q.copy(Le).multiplyScalar(W).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){G.setScissorTest(et=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,k=!0,K=!0){let J=0;if(A){let z=!1;if(U!==null){const he=U.texture.format;z=he===bh||he===Sh||he===Mh}if(z){const he=U.texture.type,Se=he===mi||he===rs||he===qr||he===er||he===vh||he===xh,we=Pe.getClearColor(),Ce=Pe.getClearAlpha(),ze=we.r,He=we.g,De=we.b;Se?(_[0]=ze,_[1]=He,_[2]=De,_[3]=Ce,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=ze,v[1]=He,v[2]=De,v[3]=Ce,M.clearBufferiv(M.COLOR,0,v))}else J|=M.COLOR_BUFFER_BIT}k&&(J|=M.DEPTH_BUFFER_BIT),K&&(J|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Pe.dispose(),ge.dispose(),Ue.dispose(),q.dispose(),y.dispose(),D.dispose(),j.dispose(),ft.dispose(),B.dispose(),fe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Vh),ne.removeEventListener("sessionend",Gh),Bi.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=te.autoReset,k=xe.enabled,K=xe.autoUpdate,J=xe.needsUpdate,z=xe.type;Me(),te.autoReset=A,xe.enabled=k,xe.autoUpdate=K,xe.needsUpdate=J,xe.type=z}function Ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xe(A){const k=A.target;k.removeEventListener("dispose",Xe),Mt(k)}function Mt(A){Dt(A),q.remove(A)}function Dt(A){const k=q.get(A).programs;k!==void 0&&(k.forEach(function(K){fe.releaseProgram(K)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,J,z,he){k===null&&(k=Qe);const Se=z.isMesh&&z.matrixWorld.determinant()<0,we=fm(A,k,K,J,z);G.setMaterial(J,Se);let Ce=K.index,ze=1;if(J.wireframe===!0){if(Ce=Y.getWireframeAttribute(K),Ce===void 0)return;ze=2}const He=K.drawRange,De=K.attributes.position;let tt=He.start*ze,st=(He.start+He.count)*ze;he!==null&&(tt=Math.max(tt,he.start*ze),st=Math.min(st,(he.start+he.count)*ze)),Ce!==null?(tt=Math.max(tt,0),st=Math.min(st,Ce.count)):De!=null&&(tt=Math.max(tt,0),st=Math.min(st,De.count));const bt=st-tt;if(bt<0||bt===1/0)return;ft.setup(z,J,we,K,Ce);let St,nt=_e;if(Ce!==null&&(St=H.get(Ce),nt=ke,nt.setIndex(St)),z.isMesh)J.wireframe===!0?(G.setLineWidth(J.wireframeLinewidth*R()),nt.setMode(M.LINES)):nt.setMode(M.TRIANGLES);else if(z.isLine){let Fe=J.linewidth;Fe===void 0&&(Fe=1),G.setLineWidth(Fe*R()),z.isLineSegments?nt.setMode(M.LINES):z.isLineLoop?nt.setMode(M.LINE_LOOP):nt.setMode(M.LINE_STRIP)}else z.isPoints?nt.setMode(M.POINTS):z.isSprite&&nt.setMode(M.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,It=z._multiDrawCounts,rt=z._multiDrawCount,En=Ce?H.get(Ce).bytesPerElement:1,fs=q.get(J).currentProgram.getUniforms();for(let sn=0;sn<rt;sn++)fs.setValue(M,"_gl_DrawID",sn),nt.render(Fe[sn]/En,It[sn])}else if(z.isInstancedMesh)nt.renderInstances(tt,bt,z.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,It=Math.min(K.instanceCount,Fe);nt.renderInstances(tt,bt,It)}else nt.render(tt,bt)};function ct(A,k,K){A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,co(A,k,K),A.side=pi,A.needsUpdate=!0,co(A,k,K),A.side=Hn):co(A,k,K)}this.compile=function(A,k,K=null){K===null&&(K=A),m=Ue.get(K),m.init(k),S.push(m),K.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),A!==K&&A.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const J=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const we=he[Se];ct(we,K,z),J.add(we)}else ct(he,K,z),J.add(he)}),S.pop(),m=null,J},this.compileAsync=function(A,k,K=null){const J=this.compile(A,k,K);return new Promise(z=>{function he(){if(J.forEach(function(Se){q.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){z(A);return}setTimeout(he,10)}O.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let bn=null;function Jn(A){bn&&bn(A)}function Vh(){Bi.stop()}function Gh(){Bi.start()}const Bi=new Zp;Bi.setAnimationLoop(Jn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){bn=A,ne.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},ne.addEventListener("sessionstart",Vh),ne.addEventListener("sessionend",Gh),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,U),m=Ue.get(A,S.length),m.init(k),S.push(m),Re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(Re),Ae=this.localClippingEnabled,ue=le.init(this.clippingPlanes,Ae),g=ge.get(A,T.length),g.init(),T.push(g),ne.enabled===!0&&ne.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&ka(he,k,-1/0,x.sortObjects)}ka(A,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(me,ye),w=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,w&&Pe.addToRenderList(g,A),this.info.render.frame++,ue===!0&&le.beginShadows();const K=m.state.shadowsArray;xe.render(K,A,k),ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,z=g.transmissive;if(m.setupLights(),k.isArrayCamera){const he=k.cameras;if(z.length>0)for(let Se=0,we=he.length;Se<we;Se++){const Ce=he[Se];Xh(J,z,A,Ce)}w&&Pe.render(A);for(let Se=0,we=he.length;Se<we;Se++){const Ce=he[Se];Wh(g,A,Ce,Ce.viewport)}}else z.length>0&&Xh(J,z,A,k),w&&Pe.render(A),Wh(g,A,k);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(x,A,k),ft.resetDefaultState(),C=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],ue===!0&&le.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function ka(A,k,K,J){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){J&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const Se=j.update(A),we=A.material;we.visible&&g.push(A,Se,we,K,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const Se=j.update(A),we=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(we)){const Ce=Se.groups;for(let ze=0,He=Ce.length;ze<He;ze++){const De=Ce[ze],tt=we[De.materialIndex];tt&&tt.visible&&g.push(A,Se,tt,K,Ie.z,De)}}else we.visible&&g.push(A,Se,we,K,Ie.z,null)}}const he=A.children;for(let Se=0,we=he.length;Se<we;Se++)ka(he[Se],k,K,J)}function Wh(A,k,K,J){const z=A.opaque,he=A.transmissive,Se=A.transparent;m.setupLightsView(K),ue===!0&&le.setGlobalState(x.clippingPlanes,K),J&&G.viewport(N.copy(J)),z.length>0&&lo(z,k,K),he.length>0&&lo(he,k,K),Se.length>0&&lo(Se,k,K),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Xh(A,k,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Dn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?di:mi,minFilter:ci,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const he=m.state.transmissionRenderTarget[J.id],Se=J.viewport||N;he.setSize(Se.z,Se.w);const we=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(ee),se=x.getClearAlpha(),se<1&&x.setClearColor(16777215,.5),x.clear(),w&&Pe.render(K);const Ce=x.toneMapping;x.toneMapping=Di;const ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),ue===!0&&le.setGlobalState(x.clippingPlanes,J),lo(A,K,J),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he),O.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let De=0,tt=k.length;De<tt;De++){const st=k[De],bt=st.object,St=st.geometry,nt=st.material,Fe=st.group;if(nt.side===Hn&&bt.layers.test(J.layers)){const It=nt.side;nt.side=en,nt.needsUpdate=!0,$h(bt,K,J,St,nt,Fe),nt.side=It,nt.needsUpdate=!0,He=!0}}He===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he))}x.setRenderTarget(we),x.setClearColor(ee,se),ze!==void 0&&(J.viewport=ze),x.toneMapping=Ce}function lo(A,k,K){const J=k.isScene===!0?k.overrideMaterial:null;for(let z=0,he=A.length;z<he;z++){const Se=A[z],we=Se.object,Ce=Se.geometry,ze=J===null?Se.material:J,He=Se.group;we.layers.test(K.layers)&&$h(we,k,K,Ce,ze,He)}}function $h(A,k,K,J,z,he){A.onBeforeRender(x,k,K,J,z,he),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,k,K,J,A,he),z.transparent===!0&&z.side===Hn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,x.renderBufferDirect(K,k,J,z,A,he),z.side=pi,z.needsUpdate=!0,x.renderBufferDirect(K,k,J,z,A,he),z.side=Hn):x.renderBufferDirect(K,k,J,z,A,he),A.onAfterRender(x,k,K,J,z,he)}function co(A,k,K){k.isScene!==!0&&(k=Qe);const J=q.get(A),z=m.state.lights,he=m.state.shadowsArray,Se=z.state.version,we=fe.getParameters(A,z.state,he,k,K),Ce=fe.getProgramCacheKey(we);let ze=J.programs;J.environment=A.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(A.isMeshStandardMaterial?D:y).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Xe),ze=new Map,J.programs=ze);let He=ze.get(Ce);if(He!==void 0){if(J.currentProgram===He&&J.lightsStateVersion===Se)return jh(A,we),He}else we.uniforms=fe.getUniforms(A),A.onBeforeCompile(we,x),He=fe.acquireProgram(we,Ce),ze.set(Ce,He),J.uniforms=we.uniforms;const De=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=le.uniform),jh(A,we),J.needsLights=mm(A),J.lightsStateVersion=Se,J.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),J.currentProgram=He,J.uniformsList=null,He}function qh(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=sa.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function jh(A,k){const K=q.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function fm(A,k,K,J,z){k.isScene!==!0&&(k=Qe),b.resetTextureUnits();const he=k.fog,Se=J.isMeshStandardMaterial?k.environment:null,we=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Jt,Ce=(J.isMeshStandardMaterial?D:y).get(J.envMap||Se),ze=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),De=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,st=!!K.morphAttributes.color;let bt=Di;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(bt=x.toneMapping);const St=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,nt=St!==void 0?St.length:0,Fe=q.get(J),It=m.state.lights;if(ue===!0&&(Ae===!0||A!==E)){const Ht=A===E&&J.id===C;le.setState(J,A,Ht)}let rt=!1;J.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==It.state.version||Fe.outputColorSpace!==we||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Ce||J.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==le.numPlanes||Fe.numIntersection!==le.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==He||Fe.morphTargets!==De||Fe.morphNormals!==tt||Fe.morphColors!==st||Fe.toneMapping!==bt||Fe.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,Fe.__version=J.version);let En=Fe.currentProgram;rt===!0&&(En=co(J,k,z));let fs=!1,sn=!1,fr=!1;const _t=En.getUniforms(),un=Fe.uniforms;if(G.useProgram(En.program)&&(fs=!0,sn=!0,fr=!0),J.id!==C&&(C=J.id,sn=!0),fs||E!==A){G.buffers.depth.getReversed()?(de.copy(A.projectionMatrix),Wv(de),Xv(de),_t.setValue(M,"projectionMatrix",de)):_t.setValue(M,"projectionMatrix",A.projectionMatrix),_t.setValue(M,"viewMatrix",A.matrixWorldInverse);const Zt=_t.map.cameraPosition;Zt!==void 0&&Zt.setValue(M,Be.setFromMatrixPosition(A.matrixWorld)),V.logarithmicDepthBuffer&&_t.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&_t.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,sn=!0,fr=!0)}if(z.isSkinnedMesh){_t.setOptional(M,z,"bindMatrix"),_t.setOptional(M,z,"bindMatrixInverse");const Ht=z.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),_t.setValue(M,"boneTexture",Ht.boneTexture,b))}z.isBatchedMesh&&(_t.setOptional(M,z,"batchingTexture"),_t.setValue(M,"batchingTexture",z._matricesTexture,b),_t.setOptional(M,z,"batchingIdTexture"),_t.setValue(M,"batchingIdTexture",z._indirectTexture,b),_t.setOptional(M,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(M,"batchingColorTexture",z._colorsTexture,b));const dn=K.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Oe.update(z,K,En),(sn||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,_t.setValue(M,"receiveShadow",z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(un.envMap.value=Ce,un.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(un.envMapIntensity.value=k.environmentIntensity),sn&&(_t.setValue(M,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&pm(un,fr),he&&J.fog===!0&&ae.refreshFogUniforms(un,he),ae.refreshMaterialUniforms(un,J,W,ie,m.state.transmissionRenderTarget[A.id]),sa.upload(M,qh(Fe),un,b)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(sa.upload(M,qh(Fe),un,b),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&_t.setValue(M,"center",z.center),_t.setValue(M,"modelViewMatrix",z.modelViewMatrix),_t.setValue(M,"normalMatrix",z.normalMatrix),_t.setValue(M,"modelMatrix",z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ht=J.uniformsGroups;for(let Zt=0,za=Ht.length;Zt<za;Zt++){const ki=Ht[Zt];B.update(ki,En),B.bind(ki,En)}}return En}function pm(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function mm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,k,K){q.get(A.texture).__webglTexture=k,q.get(A.depthTexture).__webglTexture=K;const J=q.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const K=q.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,K=0){U=A,I=k,P=K;let J=!0,z=null,he=!1,Se=!1;if(A){const Ce=q.get(A);if(Ce.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(M.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ce.__hasExternalTextures)b.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Ce.__boundDepthTexture!==De){if(De!==null&&q.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const He=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[k])?z=He[k][K]:z=He[k],he=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?z=q.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[K]:z=He,N.copy(A.viewport),Q.copy(A.scissor),X=A.scissorTest}else N.copy(be).multiplyScalar(W).floor(),Q.copy(Le).multiplyScalar(W).floor(),X=et;if(G.bindFramebuffer(M.FRAMEBUFFER,z)&&J&&G.drawBuffers(A,z),G.viewport(N),G.scissor(Q),G.setScissorTest(X),he){const Ce=q.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,K)}else if(Se){const Ce=q.get(A.texture),ze=k||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ce.__webglTexture,K||0,ze)}C=-1},this.readRenderTargetPixels=function(A,k,K,J,z,he,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){G.bindFramebuffer(M.FRAMEBUFFER,we);try{const Ce=A.texture,ze=Ce.format,He=Ce.type;if(!V.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-J&&K>=0&&K<=A.height-z&&M.readPixels(k,K,J,z,Ve.convert(ze),Ve.convert(He),he)}finally{const Ce=U!==null?q.get(U).__webglFramebuffer:null;G.bindFramebuffer(M.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,k,K,J,z,he,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){const Ce=A.texture,ze=Ce.format,He=Ce.type;if(!V.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-J&&K>=0&&K<=A.height-z){G.bindFramebuffer(M.FRAMEBUFFER,we);const De=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,De),M.bufferData(M.PIXEL_PACK_BUFFER,he.byteLength,M.STREAM_READ),M.readPixels(k,K,J,z,Ve.convert(ze),Ve.convert(He),0);const tt=U!==null?q.get(U).__webglFramebuffer:null;G.bindFramebuffer(M.FRAMEBUFFER,tt);const st=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Gv(M,st,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,De),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,he),M.deleteBuffer(De),M.deleteSync(st),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,K=0){A.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-K),z=Math.floor(A.image.width*J),he=Math.floor(A.image.height*J),Se=k!==null?k.x:0,we=k!==null?k.y:0;b.setTexture2D(A,0),M.copyTexSubImage2D(M.TEXTURE_2D,K,0,0,Se,we,z,he),G.unbindTexture()};const gm=M.createFramebuffer(),_m=M.createFramebuffer();this.copyTextureToTexture=function(A,k,K=null,J=null,z=0,he=null){A.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],k=arguments[2],he=arguments[3]||0,K=null),he===null&&(z!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let Se,we,Ce,ze,He,De,tt,st,bt;const St=A.isCompressedTexture?A.mipmaps[he]:A.image;if(K!==null)Se=K.max.x-K.min.x,we=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,ze=K.min.x,He=K.min.y,De=K.isBox3?K.min.z:0;else{const dn=Math.pow(2,-z);Se=Math.floor(St.width*dn),we=Math.floor(St.height*dn),A.isDataArrayTexture?Ce=St.depth:A.isData3DTexture?Ce=Math.floor(St.depth*dn):Ce=1,ze=0,He=0,De=0}J!==null?(tt=J.x,st=J.y,bt=J.z):(tt=0,st=0,bt=0);const nt=Ve.convert(k.format),Fe=Ve.convert(k.type);let It;k.isData3DTexture?(b.setTexture3D(k,0),It=M.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(b.setTexture2DArray(k,0),It=M.TEXTURE_2D_ARRAY):(b.setTexture2D(k,0),It=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,k.unpackAlignment);const rt=M.getParameter(M.UNPACK_ROW_LENGTH),En=M.getParameter(M.UNPACK_IMAGE_HEIGHT),fs=M.getParameter(M.UNPACK_SKIP_PIXELS),sn=M.getParameter(M.UNPACK_SKIP_ROWS),fr=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,St.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,St.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ze),M.pixelStorei(M.UNPACK_SKIP_ROWS,He),M.pixelStorei(M.UNPACK_SKIP_IMAGES,De);const _t=A.isDataArrayTexture||A.isData3DTexture,un=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const dn=q.get(A),Ht=q.get(k),Zt=q.get(dn.__renderTarget),za=q.get(Ht.__renderTarget);G.bindFramebuffer(M.READ_FRAMEBUFFER,Zt.__webglFramebuffer),G.bindFramebuffer(M.DRAW_FRAMEBUFFER,za.__webglFramebuffer);for(let ki=0;ki<Ce;ki++)_t&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,q.get(A).__webglTexture,z,De+ki),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,q.get(k).__webglTexture,he,bt+ki)),M.blitFramebuffer(ze,He,Se,we,tt,st,Se,we,M.DEPTH_BUFFER_BIT,M.NEAREST);G.bindFramebuffer(M.READ_FRAMEBUFFER,null),G.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||q.has(A)){const dn=q.get(A),Ht=q.get(k);G.bindFramebuffer(M.READ_FRAMEBUFFER,gm),G.bindFramebuffer(M.DRAW_FRAMEBUFFER,_m);for(let Zt=0;Zt<Ce;Zt++)_t?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,dn.__webglTexture,z,De+Zt):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,dn.__webglTexture,z),un?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ht.__webglTexture,he,bt+Zt):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ht.__webglTexture,he),z!==0?M.blitFramebuffer(ze,He,Se,we,tt,st,Se,we,M.COLOR_BUFFER_BIT,M.NEAREST):un?M.copyTexSubImage3D(It,he,tt,st,bt+Zt,ze,He,Se,we):M.copyTexSubImage2D(It,he,tt,st,ze,He,Se,we);G.bindFramebuffer(M.READ_FRAMEBUFFER,null),G.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else un?A.isDataTexture||A.isData3DTexture?M.texSubImage3D(It,he,tt,st,bt,Se,we,Ce,nt,Fe,St.data):k.isCompressedArrayTexture?M.compressedTexSubImage3D(It,he,tt,st,bt,Se,we,Ce,nt,St.data):M.texSubImage3D(It,he,tt,st,bt,Se,we,Ce,nt,Fe,St):A.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,he,tt,st,Se,we,nt,Fe,St.data):A.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,he,tt,st,St.width,St.height,nt,St.data):M.texSubImage2D(M.TEXTURE_2D,he,tt,st,Se,we,nt,Fe,St);M.pixelStorei(M.UNPACK_ROW_LENGTH,rt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,En),M.pixelStorei(M.UNPACK_SKIP_PIXELS,fs),M.pixelStorei(M.UNPACK_SKIP_ROWS,sn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,fr),he===0&&k.generateMipmaps&&M.generateMipmap(It),G.unbindTexture()},this.copyTextureToTexture3D=function(A,k,K=null,J=null,z=0){return A.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,A=arguments[2],k=arguments[3],z=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,K,J,z)},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),G.unbindTexture()},this.resetState=function(){I=0,P=0,U=null,G.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function Vd(s,t){if(t===pv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Fc||t===Ep){let n=s.getIndex();if(n===null){const a=[],l=s.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);s.setIndex(a),n=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=n.count-2,r=[];if(t===Fc)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2))):(r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class ME extends hs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new AE(n)}),this.register(function(n){return new wE(n)}),this.register(function(n){return new FE(n)}),this.register(function(n){return new OE(n)}),this.register(function(n){return new BE(n)}),this.register(function(n){return new RE(n)}),this.register(function(n){return new PE(n)}),this.register(function(n){return new LE(n)}),this.register(function(n){return new IE(n)}),this.register(function(n){return new TE(n)}),this.register(function(n){return new DE(n)}),this.register(function(n){return new CE(n)}),this.register(function(n){return new UE(n)}),this.register(function(n){return new NE(n)}),this.register(function(n){return new bE(n)}),this.register(function(n){return new kE(n)}),this.register(function(n){return new zE(n)})}load(t,n,i,r){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=Hr.extractUrlBase(t);a=Hr.resolveURL(h,this.path)}else a=Hr.extractUrlBase(t);this.manager.itemStart(t);const l=function(h){r?r(h):console.error(h),o.manager.itemError(t),o.manager.itemEnd(t)},c=new Uh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){try{o.parse(h,a,function(u){n(u),o.manager.itemEnd(t)},l)}catch(u){l(u)}},i,l)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,i,r){let o;const a={},l={},c=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===im){try{a[Je.KHR_BINARY_GLTF]=new HE(t)}catch(d){r&&r(d);return}o=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new eT(o,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,a[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],f=o.extensionsRequired||[];switch(d){case Je.KHR_MATERIALS_UNLIT:a[d]=new EE;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[d]=new VE(o,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[d]=new GE;break;case Je.KHR_MESH_QUANTIZATION:a[d]=new WE;break;default:f.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(a),h.setPlugins(l),h.parse(i,r)}parseAsync(t,n){const i=this;return new Promise(function(r,o){i.parse(t,n,r,o)})}}function SE(){let s={};return{get:function(t){return s[t]},add:function(t,n){s[t]=n},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bE{constructor(t){this.parser=t,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const o=n[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const n=this.parser,i="light:"+t;let r=n.cache.get(i);if(r)return r;const o=n.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let h;const u=new Ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Jt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Kp(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new x0(u),h.distance=d;break;case"spot":h=new _0(u),h.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,ai(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=n.createUniqueName(c.name||"light_"+t),r=Promise.resolve(h),n.cache.add(i,r),r}getDependency(t,n){if(t==="light")return this._loadLight(n)}createNodeAttachment(t){const n=this,i=this.parser,o=i.json.nodes[t],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return i._getNodeRef(n.cache,l,c)})}}class EE{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Pi}extendParams(t,n,i){const r=[];t.color=new Ne(1,1,1),t.opacity=1;const o=n.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Jt),t.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(t,"map",o.baseColorTexture,dt))}return Promise.all(r)}}class TE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(n.emissiveIntensity=o),Promise.resolve()}}class AE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(i.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new ce(l,l)}return Promise.all(o)}}class wE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return n.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class CE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(i.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class RE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];n.sheenColor=new Ne(0,0,0),n.sheenRoughness=0,n.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;n.sheenColor.setRGB(l[0],l[1],l[2],Jt)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(i.assignTexture(n,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class PE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(i.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class LE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(i.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return n.attenuationColor=new Ne().setRGB(l[0],l[1],l[2],Jt),Promise.all(o)}}class IE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return n.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class DE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(i.assignTexture(n,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return n.specularColor=new Ne().setRGB(l[0],l[1],l[2],Jt),a.specularColorTexture!==void 0&&o.push(i.assignTexture(n,"specularColorMap",a.specularColorTexture,dt)),Promise.all(o)}}class NE{constructor(t){this.parser=t,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(i.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class UE{constructor(t){this.parser=t,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(i.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class FE{constructor(t){this.parser=t,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,o.source,a)}}class OE{constructor(t){this.parser=t,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const n=this.name,i=this.parser,r=i.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],l=r.images[a.source];let c=i.textureLoader;if(l.uri){const h=i.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class BE{constructor(t){this.parser=t,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const n=this.name,i=this.parser,r=i.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],l=r.images[a.source];let c=i.textureLoader;if(l.uri){const h=i.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class kE{constructor(t){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const n=this.parser.json,i=n.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){const c=r.byteOffset||0,h=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(l,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class zE{constructor(t){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const n=this.parser.json,i=n.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const h of r.primitives)if(h.mode!==mn.TRIANGLES&&h.mode!==mn.TRIANGLE_STRIP&&h.mode!==mn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=i.extensions[this.name].attributes,l=[],c={};for(const h in a)l.push(this.parser.getDependency("accessor",a[h]).then(u=>(c[h]=u,c[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(t)),Promise.all(l).then(h=>{const u=h.pop(),d=u.isGroup?u.children:[u],f=h[0].count,p=[];for(const _ of d){const v=new We,g=new F,m=new Nn,T=new F(1,1,1),S=new xx(_.geometry,_.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&T.fromBufferAttribute(c.SCALE,x),S.setMatrixAt(x,v.compose(g,m,T));for(const x in c)if(x==="_COLOR_0"){const L=c[x];S.instanceColor=new Bc(L.array,L.itemSize,L.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,c[x]);vt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const im="glTF",Er=12,Gd={JSON:1313821514,BIN:5130562};class HE{constructor(t){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,Er),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Er,o=new DataView(t,Er);let a=0;for(;a<r;){const l=o.getUint32(a,!0);a+=4;const c=o.getUint32(a,!0);if(a+=4,c===Gd.JSON){const h=new Uint8Array(t,Er+a,l);this.content=i.decode(h)}else if(c===Gd.BIN){const h=Er+a;this.body=t.slice(h,h+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class VE{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const i=this.json,r=this.dracoLoader,o=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,l={},c={},h={};for(const u in a){const d=qc[u]||u.toLowerCase();l[d]=a[u]}for(const u in t.attributes){const d=qc[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[t.attributes[u]],p=js[f.componentType];h[d]=p.name,c[d]=f.normalized===!0}}return n.getDependency("bufferView",o).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const _ in p.attributes){const v=p.attributes[_],g=c[_];g!==void 0&&(v.normalized=g)}d(p)},l,h,Jt,f)})})}}class GE{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return(n.texCoord===void 0||n.texCoord===t.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.texCoord!==void 0&&(t.channel=n.texCoord),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class WE{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class sm extends oo{constructor(t,n,i,r){super(t,n,i,r)}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r*3+r;for(let a=0;a!==r;a++)n[a]=i[o+a];return n}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,h=l*3,u=r-n,d=(i-n)/u,f=d*d,p=f*d,_=t*h,v=_-h,g=-2*p+3*f,m=p-f,T=1-g,S=m-f+d;for(let x=0;x!==l;x++){const L=a[v+x+l],I=a[v+x+c]*u,P=a[_+x+l],U=a[_+x]*u;o[x]=T*L+S*I+g*P+m*U}return o}}const XE=new Nn;class $E extends sm{interpolate_(t,n,i,r){const o=super.interpolate_(t,n,i,r);return XE.fromArray(o).normalize().toArray(o),o}}const mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wd={9728:Yt,9729:hn,9984:pp,9985:Jo,9986:Rr,9987:ci},Xd={33071:Ri,33648:da,10497:Tt},Nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qE={CUBICSPLINE:void 0,LINEAR:Yr,STEP:jr},Ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Nh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),s.DefaultMaterial}function ji(s,t,n){for(const i in n.extensions)s[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function ai(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function YE(s,t,n){let i=!1,r=!1,o=!1;for(let h=0,u=t.length;h<u;h++){const d=t[h];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(s);const a=[],l=[],c=[];for(let h=0,u=t.length;h<u;h++){const d=t[h];if(i){const f=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(r){const f=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):s.attributes.normal;l.push(f)}if(o){const f=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2];return i&&(s.morphAttributes.position=u),r&&(s.morphAttributes.normal=d),o&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function KE(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)s.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(s.morphTargetInfluences.length===n.length){s.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)s.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JE(s){let t;const n=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+Fl(n.attributes):t=s.indices+":"+Fl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,r=s.targets.length;i<r;i++)t+=":"+Fl(s.targets[i]);return t}function Fl(s){let t="";const n=Object.keys(s).sort();for(let i=0,r=n.length;i<r;i++)t+=n[i]+":"+s[n[i]]+";";return t}function jc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const QE=new We;class eT{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new SE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(l)===!0;const c=l.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,o=l.indexOf("Firefox")>-1,a=o?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&a<98?this.textureLoader=new us(this.options.manager):this.textureLoader=new M0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const l={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return ji(o,l,r),ai(l,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(const c of l.scenes)c.updateMatrixWorld();t(l)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=n.length;r<o;r++){const a=n[r].joints;for(let l=0,c=a.length;l<c;l++)t[a[l]].isBone=!0}for(let r=0,o=t.length;r<o;r++){const a=t[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,i){if(t.refs[n]<=1)return i;const r=i.clone(),o=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[h,u]of a.children.entries())o(u,l.children[h])};return o(i,r),r.name+="_instance_"+t.uses[n]++,r}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=t(n[i]);if(r)return r}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const o=t(n[r]);o&&i.push(o)}return i}getDependency(t,n){const i=t+":"+n;let r=this.cache.get(i);if(!r){switch(t){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(n)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,n)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(i,r)}return r}getDependencies(t){let n=this.cache.get(t);if(!n){const i=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(o,a){return i.getDependency(t,a)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,a){i.load(Hr.resolveURL(n.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,o=n.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(t){const n=this,i=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const a=Nl[r.type],l=js[r.componentType],c=r.normalized===!0,h=new l(r.count*a);return Promise.resolve(new Kt(h,a,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){const l=a[0],c=Nl[r.type],h=js[r.componentType],u=h.BYTES_PER_ELEMENT,d=u*c,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let v,g;if(p&&p!==d){const m=Math.floor(f/p),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let S=n.cache.get(T);S||(v=new h(l,m*p,r.count*p/u),S=new px(v,p/u),n.cache.add(T,S)),g=new wh(S,c,f%p/u,_)}else l===null?v=new h(r.count*c):v=new h(l,f,r.count*c),g=new Kt(v,c,_);if(r.sparse!==void 0){const m=Nl.SCALAR,T=js[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,L=new T(a[1],S,r.sparse.count*m),I=new h(a[2],x,r.sparse.count*c);l!==null&&(g=new Kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,U=L.length;P<U;P++){const C=L[P];if(g.setX(C,I[P*c]),c>=2&&g.setY(C,I[P*c+1]),c>=3&&g.setZ(C,I[P*c+2]),c>=4&&g.setW(C,I[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(t){const n=this.json,i=this.options,o=n.textures[t].source,a=n.images[o];let l=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(t,o,l)}loadTextureImage(t,n,i){const r=this,o=this.json,a=o.textures[t],l=o.images[n],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(n,i).then(function(u){u.flipY=!1,u.name=a.name||l.name||"",u.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(u.name=l.uri);const f=(o.samplers||{})[a.sampler]||{};return u.magFilter=Wd[f.magFilter]||hn,u.minFilter=Wd[f.minFilter]||ci,u.wrapS=Xd[f.wrapS]||Tt,u.wrapT=Xd[f.wrapT]||Tt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yt&&u.minFilter!==hn,r.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(t,n){const i=this,r=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const a=r.images[t],l=self.URL||self.webkitURL;let c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(d){h=!0;const f=new Blob([d],{type:a.mimeType});return c=l.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let _=f;n.isImageBitmapLoader===!0&&(_=function(v){const g=new Lt(v);g.needsUpdate=!0,f(g)}),n.load(Hr.resolveURL(d,o.path),_,void 0,p)})}).then(function(d){return h===!0&&l.revokeObjectURL(c),ai(d,a),d.userData.mimeType=a.mimeType||ZE(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[t]=u,u}assignTexture(t,n,i,r){const o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[Je.KHR_TEXTURE_TRANSFORM]){const l=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=o.associations.get(a);a=o.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),t[n]=a,a})}assignFinalMaterial(t){const n=t.geometry;let i=t.material;const r=n.attributes.tangent===void 0,o=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(t.isPoints){const l="PointsMaterial:"+i.uuid;let c=this.cache.get(l);c||(c=new Bp,Sn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(l,c)),i=c}else if(t.isLine){const l="LineBasicMaterial:"+i.uuid;let c=this.cache.get(l);c||(c=new Op,Sn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(l,c)),i=c}if(r||o||a){let l="ClonedMaterial:"+i.uuid+":";r&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=i.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return Nh}loadMaterial(t){const n=this,i=this.json,r=this.extensions,o=i.materials[t];let a;const l={},c=o.extensions||{},h=[];if(c[Je.KHR_MATERIALS_UNLIT]){const d=r[Je.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),h.push(d.extendParams(l,o,n))}else{const d=o.pbrMetallicRoughness||{};if(l.color=new Ne(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],Jt),l.opacity=f[3]}d.baseColorTexture!==void 0&&h.push(n.assignTexture(l,"map",d.baseColorTexture,dt)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(n.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),h.push(n.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,l)})))}o.doubleSided===!0&&(l.side=Hn);const u=o.alphaMode||Ul.OPAQUE;if(u===Ul.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,u===Ul.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==Pi&&(h.push(n.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new ce(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;l.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&a!==Pi&&(h.push(n.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==Pi){const d=o.emissiveFactor;l.emissive=new Ne().setRGB(d[0],d[1],d[2],Jt)}return o.emissiveTexture!==void 0&&a!==Pi&&h.push(n.assignTexture(l,"emissiveMap",o.emissiveTexture,dt)),Promise.all(h).then(function(){const d=new a(l);return o.name&&(d.name=o.name),ai(d,o),n.associations.set(d,{materials:t}),o.extensions&&ji(r,d,o),d})}createUniqueName(t){const n=lt.sanitizeNodeName(t||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(t){const n=this,i=this.extensions,r=this.primitiveCache;function o(l){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,n).then(function(c){return $d(c,l,n)})}const a=[];for(let l=0,c=t.length;l<c;l++){const h=t[l],u=JE(h),d=r[u];if(d)a.push(d.promise);else{let f;h.extensions&&h.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=o(h):f=$d(new nn,h,n),r[u]={primitive:h,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){const n=this,i=this.json,r=this.extensions,o=i.meshes[t],a=o.primitives,l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c].material===void 0?jE(this.cache):this.getDependency("material",a[c].material);l.push(u)}return l.push(n.loadGeometries(a)),Promise.all(l).then(function(c){const h=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let p=0,_=u.length;p<_;p++){const v=u[p],g=a[p];let m;const T=h[p];if(g.mode===mn.TRIANGLES||g.mode===mn.TRIANGLE_STRIP||g.mode===mn.TRIANGLE_FAN||g.mode===void 0)m=o.isSkinnedMesh===!0?new gx(v,T):new gt(v,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===mn.TRIANGLE_STRIP?m.geometry=Vd(m.geometry,Ep):g.mode===mn.TRIANGLE_FAN&&(m.geometry=Vd(m.geometry,Fc));else if(g.mode===mn.LINES)m=new Sx(v,T);else if(g.mode===mn.LINE_STRIP)m=new Ph(v,T);else if(g.mode===mn.LINE_LOOP)m=new bx(v,T);else if(g.mode===mn.POINTS)m=new Ex(v,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&KE(m,o),m.name=n.createUniqueName(o.name||"mesh_"+t),ai(m,o),g.extensions&&ji(r,m,g),n.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)n.associations.set(d[p],{meshes:t,primitives:p});if(d.length===1)return o.extensions&&ji(r,d[0],o),d[0];const f=new xn;o.extensions&&ji(r,f,o),n.associations.set(f,{meshes:t});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(t){let n;const i=this.json.cameras[t],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new $t(Hv.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new Na(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),ai(n,i),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],i=[];for(let r=0,o=n.joints.length;r<o;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),a=r,l=[],c=[];for(let h=0,u=a.length;h<u;h++){const d=a[h];if(d){l.push(d);const f=new We;o!==null&&f.fromArray(o.array,h*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[h])}return new Ch(l,c)})}loadAnimation(t){const n=this.json,i=this,r=n.animations[t],o=r.name?r.name:"animation_"+t,a=[],l=[],c=[],h=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],_=r.samplers[p.sampler],v=p.target,g=v.node,m=r.parameters!==void 0?r.parameters[_.input]:_.input,T=r.parameters!==void 0?r.parameters[_.output]:_.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",T)),h.push(_),u.push(v))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],_=d[2],v=d[3],g=d[4],m=[];for(let T=0,S=f.length;T<S;T++){const x=f[T],L=p[T],I=_[T],P=v[T],U=g[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const C=i._createAnimationTracks(x,L,I,P,U);if(C)for(let E=0;E<C.length;E++)m.push(C[E])}return new Wc(o,void 0,m)})}createNodeMesh(t){const n=this.json,i=this,r=n.nodes[t];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,h=r.weights.length;c<h;c++)l.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(t){const n=this.json,i=this,r=n.nodes[t],o=i._loadNodeShallow(t),a=[],l=r.children||[];for(let h=0,u=l.length;h<u;h++)a.push(i.getDependency("node",l[h]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(h){const u=h[0],d=h[1],f=h[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,QE)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(t){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=n.nodes[t],a=o.name?r.createUniqueName(o.name):"",l=[],c=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return c&&l.push(c),o.camera!==void 0&&l.push(r.getDependency("camera",o.camera).then(function(h){return r._getNodeRef(r.cameraCache,o.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){l.push(h)}),this.nodeCache[t]=Promise.all(l).then(function(h){let u;if(o.isBone===!0?u=new Up:h.length>1?u=new xn:h.length===1?u=h[0]:u=new vt,u!==h[0])for(let d=0,f=h.length;d<f;d++)u.add(h[d]);if(o.name&&(u.userData.name=o.name,u.name=a),ai(u,o),o.extensions&&ji(i,u,o),o.matrix!==void 0){const d=new We;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const n=this.extensions,i=this.json.scenes[t],r=this,o=new xn;i.name&&(o.name=r.createUniqueName(i.name)),ai(o,i),i.extensions&&ji(n,o,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(r.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let u=0,d=c.length;u<d;u++)o.add(c[u]);const h=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof Sn||f instanceof Lt)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=h(o),o})}_createAnimationTracks(t,n,i,r,o){const a=[],l=t.name?t.name:t.uuid,c=[];Ei[o.path]===Ei.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(l);let h;switch(Ei[o.path]){case Ei.weights:h=rr;break;case Ei.rotation:h=or;break;case Ei.position:case Ei.scale:h=ar;break;default:switch(i.itemSize){case 1:h=rr;break;case 2:case 3:default:h=ar;break}break}const u=r.interpolation!==void 0?qE[r.interpolation]:Yr,d=this._getArrayFromAccessor(i);for(let f=0,p=c.length;f<p;f++){const _=new h(c[f]+"."+Ei[o.path],n.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(t){let n=t.array;if(t.normalized){const i=jc(n.constructor),r=new Float32Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=n[o]*i;n=r}return n}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const r=this instanceof or?$E:sm;return new r(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tT(s,t,n){const i=t.attributes,r=new _i;if(i.POSITION!==void 0){const l=n.json.accessors[i.POSITION],c=l.min,h=l.max;if(c!==void 0&&h!==void 0){if(r.set(new F(c[0],c[1],c[2]),new F(h[0],h[1],h[2])),l.normalized){const u=jc(js[l.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const l=new F,c=new F;for(let h=0,u=o.length;h<u;h++){const d=o[h];if(d.POSITION!==void 0){const f=n.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const v=jc(js[f.componentType]);c.multiplyScalar(v)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}s.boundingBox=r;const a=new qn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=a}function $d(s,t,n){const i=t.attributes,r=[];function o(a,l){return n.getDependency("accessor",a).then(function(c){s.setAttribute(l,c)})}for(const a in i){const l=qc[a]||a.toLowerCase();l in s.attributes||r.push(o(i[a],l))}if(t.indices!==void 0&&!s.index){const a=n.getDependency("accessor",t.indices).then(function(l){s.setIndex(l)});r.push(a)}return Ze.workingColorSpace!==Jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),ai(s,t),tT(s,t,n),Promise.all(r).then(function(){return t.targets!==void 0?YE(s,t.targets,n):s})}class nT{constructor(t){pe(this,"mesh");pe(this,"loader");pe(this,"animation");pe(this,"mixer",null);pe(this,"engine");pe(this,"canMove",!0);this.loader=new ME,this.mesh=new vt,this.engine=t}tick(){if(this.mixer){const t=this.engine.delta;this.mixer.update(t)}this.canMove===!0&&this.moveBike()}async loadMesh(){const t=await this.loader.loadAsync("/website/models/bike.glb");this.mesh=t.scene,this.animation=t.animations,this.mesh.scale.set(.004,.004,.004),this.mesh.position.set(0,0,-2),this.mesh.rotation.y=Math.PI/2,this.engine.width<900&&this.mesh.scale.set(.003,.003,.003),t.animations.length>0&&(this.mixer=new U0(this.mesh),this.mixer.clipAction(t.animations[0]).play())}moveTransition(t,n,i){this.mesh.position.x=(1-i)*t.x+i*n.x,this.mesh.position.y=(1-i)*t.y+i*n.y}moveBike(){const t=this.engine.mousePos.x/this.engine.width*2-1,n=this.engine.mousePos.y/this.engine.height*1.2-1,i={x:t*1.5,y:this.engine.width<900?-n-1.3:-n-1.5};this.moveTransition(this.mesh.position,i,.05)}}const iT="/website/assets/moon-DMy4FmWn.png",sT="/website/assets/dispmoon-aEfAuUzc.png",rm="/website/assets/lavatexture-Cu3RcYR-.jpg",om="/website/assets/lavaemissive-E5eq8yx7.png",am="/website/assets/lavadisp-BUJJp_ii.png",lm="/website/assets/grasstexture-8Q4BD1BN.png",cm="/website/assets/grassedisp-S-G0LZn1.png",hm="/website/assets/snowtexture-CFg5Yx35.png",um="/website/assets/snowdisp-D8Qk-fEH.png";class rT{constructor(t){pe(this,"mesh");pe(this,"engine");pe(this,"textureLoader");pe(this,"texture");pe(this,"displacementTexture");pe(this,"loadingManager");pe(this,"allTextures");this.engine=t,this.loadingManager=new cs,this.textureLoader=new us(this.loadingManager),this.allTextures={lavatexture:this.textureLoader.load(rm),lavaemissive:this.textureLoader.load(om),lavadisp:this.textureLoader.load(am),grasstexture:this.textureLoader.load(lm),grassdisp:this.textureLoader.load(cm),snowtexture:this.textureLoader.load(hm),snowdisp:this.textureLoader.load(um)},this.texture=this.textureLoader.load(iT),this.texture.colorSpace=dt,this.displacementTexture=this.textureLoader.load(sT),this.texture.wrapT=Tt,this.texture.wrapS=Tt,this.texture.repeat=new ce(25,25);const n=new cr(18,50,30),i=new tn({color:16777215,map:this.texture,displacementMap:this.displacementTexture,displacementScale:1.2,emissive:2105376,specular:16706});this.mesh=new gt(n,i),this.mesh.position.y=-19.5,this.mesh.position.z=-10,this.mesh.rotation.z=Math.PI/2}tick(){this.rotateGlobe()}rotateGlobe(){this.mesh.rotation.x+=this.engine.delta/5}changeEmissive(t){const n=this.mesh.material,i=new tn({color:n.color,map:n.map,displacementMap:n.displacementMap,displacementScale:n.displacementScale,emissive:t,specular:n.specular});this.mesh.material=i}changeSkin(t){this.texture=this.allTextures[`${t}texture`],this.displacementTexture=this.allTextures[`${t}disp`],this.texture.colorSpace=dt,this.texture.wrapT=Tt,this.texture.wrapS=Tt,this.texture.repeat=new ce(25,25);const n=this.mesh.material,i=new tn({color:n.color,map:this.texture,displacementMap:this.displacementTexture,displacementScale:n.displacementScale,emissive:2105376,specular:n.specular});this.mesh.material=i,this.mesh.material.needsUpdate=!0}}class Fa extends hs{constructor(t){super(t)}load(t,n,i,r){const o=this,a=new Uh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){const c=o.parse(JSON.parse(l));n&&n(c)},i,r)}parse(t){return new oT(t)}}class oT{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,n=100){const i=[],r=aT(t,n,this.data);for(let o=0,a=r.length;o<a;o++)i.push(...r[o].toShapes());return i}}function aT(s,t,n){const i=Array.from(s),r=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,a=[];let l=0,c=0;for(let h=0;h<i.length;h++){const u=i[h];if(u===`
`)l=0,c-=o;else{const d=lT(u,r,l,c,n);l+=d.offsetX,a.push(d.path)}}return a}function lT(s,t,n,i,r){const o=r.glyphs[s]||r.glyphs["?"];if(!o){console.error('THREE.Font: character "'+s+'" does not exists in font family '+r.familyName+".");return}const a=new O0;let l,c,h,u,d,f,p,_;if(o.o){const v=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let g=0,m=v.length;g<m;)switch(v[g++]){case"m":l=v[g++]*t+n,c=v[g++]*t+i,a.moveTo(l,c);break;case"l":l=v[g++]*t+n,c=v[g++]*t+i,a.lineTo(l,c);break;case"q":h=v[g++]*t+n,u=v[g++]*t+i,d=v[g++]*t+n,f=v[g++]*t+i,a.quadraticCurveTo(d,f,h,u);break;case"b":h=v[g++]*t+n,u=v[g++]*t+i,d=v[g++]*t+n,f=v[g++]*t+i,p=v[g++]*t+n,_=v[g++]*t+i,a.bezierCurveTo(d,f,p,_,h,u);break}}return{offsetX:o.ha*t,path:a}}class ts extends Dh{constructor(t,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(t,n.size);n.depth===void 0&&n.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),n.depth=n.depth!==void 0?n.depth:n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}const cT=Xn(!0),Ol=Xn(!1),Yi=Xn(0),Ps=[{first:"Acker'",second:"Prod."},{first:"French",second:"Dev"},{first:"Web",second:"&3D"},{}],hT={lavaPlanet:!1,grassPlanet:!1,planet:!1},uT=Xn(""),Wo=Xn(!1),Ns=Xn(!1),Tr=Xn("Continue"),dT=new CustomEvent("nextText",{detail:"nexttext"}),fT=new CustomEvent("displayPlanets",{detail:"nexttext"});$o(Ns,async(s,t)=>{window.dispatchEvent(fT)});const ao=()=>{const s=r=>{Yi.value<Ps.length-1&&(t(),Tr.value="Continue"),(Yi.value===Ps.length-2||Yi.value===Ps.length-1&&Ns.value)&&(Tr.value="Call the Planets",Wo.value=!1,r.isBottom=!1),Yi.value===Ps.length-1&&(Tr.value="Click on one Planet",i()),Yi.value===Ps.length-1&&!Ns.value&&(Tr.value="Call the Planets",Wo.value=!1,r.isBottom=!1),Yi.value===3&&(Wo.value=!1,r.isBottom=!1)},t=()=>{window.dispatchEvent(dT)},n=()=>{Ol.value=!Ol.value},i=()=>{Ns.value=!Ns.value};return{steps:Ps,currentStep:Yi,showSummary:Ol,isLoading:cT,displayWorlds:Ns,worlds:hT,selectedWorld:uT,textToDisplay:Tr,displayInfos:Wo,nextText:t,handleSummary:n,handleDisplayWorlds:i,manageSteps:s}},{steps:Ar,currentStep:Ls}=ao();class pT{constructor(t){pe(this,"mesh");pe(this,"engine");pe(this,"textureLoader");pe(this,"loadingManager");pe(this,"animation");pe(this,"font");pe(this,"textMeshFirst");pe(this,"textMeshSecond");this.animation={smaller:!1,higher:!0,near:.3,far:-15},this.engine=t,this.loadingManager=new cs,this.textureLoader=new us(this.loadingManager),this.loadFont()}loadFont(){new Fa().load("/website/fonts/mewafont.json",n=>{this.font=n,this.createText()})}disposeText(){this.textMeshFirst.geometry.dispose(),this.textMeshSecond.geometry.dispose()}createText(){const t=this.textureLoader.load("/website/textures/4.png");t.colorSpace=dt;const n=new Da({matcap:t}),i=new ts(`${Ar[Ls.value].first}`,{font:this.font,size:this.engine.width<900?2:4,depth:.2,curveSegments:3,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});this.textMeshFirst=new gt(i,n),this.textMeshFirst.position.set(0,this.engine.width<900?2.2:4,-15),this.textMeshFirst.geometry.center(),this.textMeshFirst.rotation.x=-Math.PI*2.1;const r=new ts(`${Ar[Ls.value].second}`,{font:this.font,size:this.engine.width<900?2:4,depth:.2,curveSegments:3,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});this.textMeshSecond=new gt(r,n),this.textMeshSecond.position.set(0,this.engine.width<900?-.5:0,-15),this.textMeshSecond.geometry.center(),this.textMeshSecond.rotation.x=-Math.PI*2.1;const o=new xn;o.add(this.textMeshFirst,this.textMeshSecond),o.position.y=-10,this.mesh=o,this.engine.scene.add(this.mesh)}nextStep(){const t=new ts(`${Ar[Ls.value].first}`,{font:this.font,size:this.engine.width<900?2:4,depth:.2,curveSegments:3,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});this.textMeshFirst.geometry.dispose(),this.textMeshFirst.geometry=t,this.textMeshFirst.geometry.center();const n=new ts(`${Ar[Ls.value].second}`,{font:this.font,size:this.engine.width<900?2:4,depth:.2,curveSegments:3,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});this.textMeshSecond.geometry.dispose(),this.textMeshSecond.geometry=n,this.textMeshSecond.geometry.center(),this.handleText()}triggerNextStep(){Ls.value++,this.handleText(),Ls.value<Ar.length-1&&setTimeout(()=>{this.nextStep()},800)}handleText(){this.animation.smaller=!this.animation.smaller,this.animation.higher=!this.animation.higher}changeText(){if(this.animation.higher){const t=.95*this.mesh.position.y+.05*this.animation.near;this.mesh.position.y=t}if(this.animation.smaller){const t=.95*this.mesh.position.y+.05*this.animation.far;this.mesh.position.y=t}}tick(){this.changeText()}}class mT{constructor(t){pe(this,"mesh");pe(this,"engine");pe(this,"textureLoader");pe(this,"snowtexture");pe(this,"snowdisp");pe(this,"loadingManager");pe(this,"font");pe(this,"pos");pe(this,"textMesh");this.engine=t,this.pos={basicPos:0,static:!1},this.loadingManager=new cs,this.textureLoader=new us(this.loadingManager),this.snowtexture=this.textureLoader.load(hm),this.snowtexture.colorSpace=dt,this.snowdisp=this.textureLoader.load(um),this.snowtexture.wrapT=Tt,this.snowtexture.wrapS=Tt,this.snowtexture.repeat=new ce(2,2);const n=new cr(2,12,12),i=new tn({map:this.snowtexture,displacementMap:this.snowdisp,displacementScale:.5}),r=new xn,o=new gt(n,i);o.position.set(0,10,-35),r.add(o),this.mesh=r,this.mesh.position.y=-2,this.mesh.rotation.y=-2.5,this.loadFont()}loadFont(){new Fa().load("/website/fonts/mewafont.json",n=>{this.font=n,this.createText()})}createText(){const t=this.textureLoader.load("/website/textures/4.png");t.colorSpace=dt;const n=new Da({matcap:t}),i=new ts("Pro",{font:this.font,size:.8,depth:.2,curveSegments:3,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});this.textMesh=new gt(i,n),this.textMesh.geometry.center(),this.textMesh.position.set(0,7,-35),this.mesh.add(this.textMesh)}initialRotate(){this.mesh.rotation.y=(1-.03)*this.mesh.rotation.y+.03*this.pos.basicPos}rotate(){const t=Math.PI*2,n=this.engine.delta/4;Math.abs(this.mesh.rotation.y)>t?this.mesh.rotation.y=0:this.mesh.rotation.y+=n}changeEmissive(){const t=this.mesh.children[0].material,n=new tn({map:t.map,displacementMap:t.displacementMap,displacementScale:t.displacementScale,emissive:51});this.mesh.children[0].scale.set(1.05,1.05,1.05),this.mesh.children[0].material=n}withdrawEmissive(){const t=this.mesh.children[0].material,n=new tn({map:t.map,displacementMap:t.displacementMap,displacementScale:t.displacementScale,emissive:0});this.mesh.children[0].scale.set(1,1,1),this.mesh.children[0].material=n}handleStaticState(){this.pos.static=!this.pos.static}tick(){this.mesh.children[0].rotation.y+=this.engine.delta,this.pos.static&&this.initialRotate(),this.pos.static||this.rotate()}}class gT{constructor(t){pe(this,"mesh");pe(this,"engine");pe(this,"textureLoader");pe(this,"lavatexture");pe(this,"lavaemissive");pe(this,"lavadisp");pe(this,"loadingManager");pe(this,"font");pe(this,"pos");pe(this,"rotateAnim");pe(this,"textMesh");this.engine=t,this.pos={basicPos:0,static:!1},this.rotateAnim=!1,this.loadingManager=new cs,this.textureLoader=new us(this.loadingManager),this.lavatexture=this.textureLoader.load(rm),this.lavatexture.colorSpace=dt,this.lavadisp=this.textureLoader.load(am),this.lavaemissive=this.textureLoader.load(om),this.lavatexture.wrapT=Tt,this.lavatexture.wrapS=Tt,this.lavatexture.repeat=new ce(2,2);const n=new cr(2,12,12),i=new tn({map:this.lavatexture,displacementMap:this.lavadisp,displacementScale:.2,emissive:0}),r=new xn,o=new gt(n,i);o.position.set(-4,4,-35),r.add(o),this.mesh=r,this.mesh.position.y=-2,this.mesh.rotation.y=3,this.loadFont()}loadFont(){new Fa().load("/website/fonts/mewafont.json",n=>{this.font=n,this.createText()})}createText(){const t=this.textureLoader.load("/website/textures/7.png");t.colorSpace=dt;const n=new Da({matcap:t}),i=new ts("Stack",{font:this.font,size:.8,depth:.2,curveSegments:3,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});this.textMesh=new gt(i,n),this.textMesh.geometry.center(),this.textMesh.position.set(-4,1.2,-35),this.mesh.add(this.textMesh)}initialRotate(){this.mesh.rotation.y=(1-.03)*this.mesh.rotation.y-.03*this.pos.basicPos}rotate(){const t=Math.PI*2,n=this.engine.delta/5.5;Math.abs(this.mesh.rotation.y)>t?this.mesh.rotation.y=0:this.mesh.rotation.y-=n}handleStaticState(){this.pos.static=!this.pos.static}changeEmissive(){const t=this.mesh.children[0].material,n=new tn({map:t.map,displacementMap:t.displacementMap,displacementScale:t.displacementScale,emissive:3342336,specular:t.specular});this.mesh.children[0].scale.set(1.05,1.05,1.05),this.mesh.children[0].material=n,this.rotateAnim=!0}withdrawEmissive(){const t=this.mesh.children[0].material,n=new tn({map:t.map,displacementMap:t.displacementMap,displacementScale:t.displacementScale,emissive:0,specular:t.specular});this.mesh.children[0].scale.set(1,1,1),this.mesh.children[0].material=n,this.rotateAnim=!1}tick(){this.mesh.children[0].rotation.y-=this.engine.delta,this.pos.static&&this.initialRotate(),this.pos.static||this.rotate()}}class _T{constructor(t){pe(this,"mesh");pe(this,"engine");pe(this,"textureLoader");pe(this,"grasstexture");pe(this,"grassdisp");pe(this,"loadingManager");pe(this,"font");pe(this,"pos");pe(this,"textMesh");this.engine=t,this.pos={basicPos:0,static:!1},this.loadingManager=new cs,this.textureLoader=new us(this.loadingManager),this.grasstexture=this.textureLoader.load(lm),this.grasstexture.colorSpace=dt,this.grassdisp=this.textureLoader.load(cm),this.grasstexture.wrapT=Tt,this.grasstexture.wrapS=Tt,this.grasstexture.repeat=new ce(2,2);const n=new cr(2,12,12),i=new tn({map:this.grasstexture,displacementMap:this.grassdisp,displacementScale:.2,emissive:0}),r=new xn,o=new gt(n,i);o.position.set(4,4,-35),r.add(o),this.mesh=r,this.mesh.position.y=-2,this.mesh.rotation.y=1,this.loadFont()}loadFont(){new Fa().load("/website/fonts/mewafont.json",n=>{this.font=n,this.createText()})}createText(){const t=this.textureLoader.load("/website/textures/6.png");t.colorSpace=dt;const n=new Da({matcap:t}),i=new ts("Projects",{font:this.font,size:.8,depth:.2,curveSegments:3,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});this.textMesh=new gt(i,n),this.textMesh.geometry.center(),this.textMesh.position.set(4,1,-35),this.mesh.add(this.textMesh)}initialRotate(){this.mesh.rotation.y=(1-.03)*this.mesh.rotation.y+.03*this.pos.basicPos}rotate(){const t=Math.PI*2,n=this.engine.delta/5;Math.abs(this.mesh.rotation.y)>t?this.mesh.rotation.y=0:this.mesh.rotation.y-=n}handleStaticState(){this.pos.static=!this.pos.static}changeEmissive(){const t=this.mesh.children[0].material,n=new tn({map:t.map,displacementMap:t.displacementMap,displacementScale:t.displacementScale,emissive:13056});this.mesh.children[0].scale.set(1.05,1.05,1.05),this.mesh.children[0].material=n}withdrawEmissive(){const t=this.mesh.children[0].material,n=new tn({map:t.map,displacementMap:t.displacementMap,displacementScale:t.displacementScale,emissive:0});this.mesh.children[0].scale.set(1,1,1),this.mesh.children[0].material=n}tick(){this.mesh.children[0].rotation.y-=this.engine.delta,this.pos.static&&this.initialRotate(),this.pos.static||this.rotate()}}const vT="/website/assets/protexture-CnQBE5Vl.png",qd="/website/assets/stacktexture-BVX9uVKs.png",xT="/website/assets/projecttexture-FleiwLq7.png";class yT{constructor(t){pe(this,"mesh");pe(this,"engine");pe(this,"textureLoader");pe(this,"texture");pe(this,"loadingManager");pe(this,"pos");pe(this,"allTextures");this.engine=t,this.loadingManager=new cs,this.textureLoader=new us(this.loadingManager),this.pos={basicPos:20,bottomPos:0,isBottom:!1},this.allTextures={snowtexture:this.textureLoader.load(vT),lavatexture:this.textureLoader.load(qd),grasstexture:this.textureLoader.load(xT)},this.texture=this.textureLoader.load(qd),this.texture.colorSpace=dt,this.texture.wrapT=Tt,this.texture.wrapS=Tt,this.texture.repeat=new ce(this.engine.width<900?4:5,1);const n=new va(this.engine.width<900?4.5:7,this.engine.width<900?4.5:7,3.5,64,1,!0);n.openEnded=!0;const i=new va(this.engine.width<900?4.55:7.05,this.engine.width<900?4.55:7.05,.03,64,1,!0),r=new tn({map:this.texture,transparent:!0,specular:64511}),o=new tn({color:65502,emissive:64511}),a=new gt(n,r),l=new gt(i,o),c=new gt(i,o);a.position.set(0,2.5,-15),a.rotation.x=.1,l.rotation.x=.1,l.position.set(0,4.3,-14.9),c.rotation.x=.1,c.position.set(0,.71,-15.2);const h=new xn;h.add(l,c,a),this.mesh=h,this.mesh.position.y=20,this.mesh.rotation.z=.1,this.mesh.rotation.z=.1,this.mesh.rotation.z=.1}rotate(){this.mesh.children[0].rotation.y-=this.engine.delta/5,this.mesh.children[1].rotation.y-=this.engine.delta/5,this.mesh.children[2].rotation.y+=this.engine.delta/5}handlePosition(t,n){this.mesh.position.y=(1-n)*this.mesh.position.y+n*t}changeSkin(t){this.texture=this.allTextures[`${t}texture`],this.texture.colorSpace=dt,this.texture.wrapT=Tt,this.texture.wrapS=Tt,this.texture.repeat=new ce(this.engine.width<900?4:5,1);const n=this.mesh.children[2].material;n.map=this.texture,n.needsUpdate=!0}tick(){this.pos.isBottom?this.handlePosition(this.pos.bottomPos,.02):this.handlePosition(this.pos.basicPos,.01),this.rotate()}}class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const MT=new Na(-1,1,1,-1,0,1);class ST extends nn{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}}const bT=new ST;class Oa{constructor(t){this._mesh=new gt(bT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,MT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Yc extends ds{constructor(t,n){super(),this.textureID=n!==void 0?n:"tDiffuse",t instanceof Bt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=sr.clone(t.uniforms),this.material=new Bt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Oa(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ET={name:"RGBShiftShader",uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`},TT={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},dm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class jd extends ds{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){const r=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class AT extends ds{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wT{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const i=t.getSize(new ce);this._width=i.width,this._height=i.height,n=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yc(dm),this.copyPass.material.blending=ui,this.clock=new Jp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}jd!==void 0&&(a instanceof jd?i=!0:a instanceof AT&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class CT extends ds{constructor(t,n,i=null,r=null,o=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(t,n,i){const r=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const RT={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class lr extends ds{constructor(t,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new ce(t.x,t.y):new ce(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(o,a,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Dn(o,a,{type:di});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Dn(o,a,{type:di});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),a=Math.round(a/2)}const l=RT;this.highPassUniforms=sr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=dm;this.copyUniforms=sr.clone(u.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Zl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new Pi,this.fsQuad=new Oa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.invSize.value=new ce(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,n,i,r,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=lr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=lr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const n=[];for(let i=0;i<t;i++)n.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Bt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Bt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}lr.BlurDirectionX=new ce(1,0);lr.BlurDirectionY=new ce(0,1);const PT={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};class LT extends ds{constructor(t=.5,n=!1){super();const i=PT;this.uniforms=sr.clone(i.uniforms),this.material=new Bt({name:i.name,uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this.uniforms.intensity.value=t,this.uniforms.grayscale.value=n,this.fsQuad=new Oa(this.material)}render(t,n,i,r){this.uniforms.tDiffuse.value=i.texture,this.uniforms.time.value+=r,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const IT={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class DT extends ds{constructor(){super();const t=IT;this.uniforms=sr.clone(t.uniforms),this.material=new i0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Oa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ap?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===up?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}var ra={exports:{}},NT=ra.exports,Yd;function UT(){return Yd||(Yd=1,function(s,t){(function(n,i){s.exports=i()})(NT,function(){var n=function(){function i(p){return a.appendChild(p.dom),p}function r(p){for(var _=0;_<a.children.length;_++)a.children[_].style.display=_===p?"block":"none";o=p}var o=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(p){p.preventDefault(),r(++o%a.children.length)},!1);var l=(performance||Date).now(),c=l,h=0,u=i(new n.Panel("FPS","#0ff","#002")),d=i(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new n.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){l=(performance||Date).now()},end:function(){h++;var p=(performance||Date).now();if(d.update(p-l,200),p>c+1e3&&(u.update(1e3*h/(p-c),100),c=p,h=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){l=this.end()},domElement:a,setMode:r}};return n.Panel=function(i,r,o){var a=1/0,l=0,c=Math.round,h=c(window.devicePixelRatio||1),u=80*h,d=48*h,f=3*h,p=2*h,_=3*h,v=15*h,g=74*h,m=30*h,T=document.createElement("canvas");T.width=u,T.height=d,T.style.cssText="width:80px;height:48px";var S=T.getContext("2d");return S.font="bold "+9*h+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=o,S.fillRect(0,0,u,d),S.fillStyle=r,S.fillText(i,f,p),S.fillRect(_,v,g,m),S.fillStyle=o,S.globalAlpha=.9,S.fillRect(_,v,g,m),{dom:T,update:function(x,L){a=Math.min(a,x),l=Math.max(l,x),S.fillStyle=o,S.globalAlpha=1,S.fillRect(0,0,u,v),S.fillStyle=r,S.fillText(c(x)+" "+i+" ("+c(a)+"-"+c(l)+")",f,p),S.drawImage(T,_+h,v,g-h,m,_,v,g-h,m),S.fillRect(_+g-h,v,h,m),S.fillStyle=o,S.globalAlpha=.9,S.fillRect(_+g-h,v,h,c((1-x/L)*m))}}},n})}(ra)),ra.exports}UT();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Wn{constructor(t,n,i,r,o="div"){this.parent=t,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(o),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Wn.nextNameID=Wn.nextNameID||0,this.$name.id=`lil-gui-name-${++Wn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class FT extends Wn{constructor(t,n,i){super(t,n,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Kc(s){let t,n;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?"#"+n:!1}const OT={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Kc,toHexString:Kc},eo={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},BT={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,n=1){const i=eo.fromHexString(s);t[0]=(i>>16&255)/255*n,t[1]=(i>>8&255)/255*n,t[2]=(i&255)/255*n},toHexString([s,t,n],i=1){i=255/i;const r=s*i<<16^t*i<<8^n*i<<0;return eo.toHexString(r)}},kT={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,n=1){const i=eo.fromHexString(s);t.r=(i>>16&255)/255*n,t.g=(i>>8&255)/255*n,t.b=(i&255)/255*n},toHexString({r:s,g:t,b:n},i=1){i=255/i;const r=s*i<<16^t*i<<8^n*i<<0;return eo.toHexString(r)}},zT=[OT,eo,BT,kT];function HT(s){return zT.find(t=>t.match(s))}class VT extends Wn{constructor(t,n,i,r){super(t,n,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=HT(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Kc(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Bl extends Wn{constructor(t,n,i){super(t,n,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class GT extends Wn{constructor(t,n,i,r,o,a){super(t,n,i,"number"),this._initInput(),this.min(r),this.max(o);const l=a!==void 0;this.step(l?a:this._getImplicitStep(),l),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const n=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},i=T=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+T),this.$input.value=this.getValue())},r=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T)*-1))},o=T=>{this._inputFocused&&(T.preventDefault(),i(this._step*this._normalizeMouseWheel(T)))};let a=!1,l,c,h,u,d;const f=5,p=T=>{l=T.clientX,c=h=T.clientY,a=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",v)},_=T=>{if(a){const S=T.clientX-l,x=T.clientY-c;Math.abs(x)>f?(T.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>f&&v()}if(!a){const S=T.clientY-h;d-=S*this._step*this._arrowKeyMultiplier(T),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}h=T.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",v)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,T,S,x,L)=>(m-T)/(S-T)*(L-x)+x,n=m=>{const T=this.$slider.getBoundingClientRect();let S=t(m,T.left,T.right,this._min,this._max);this._snapClampSetValue(S)},i=m=>{this._setDraggingStyle(!0),n(m.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",o)},r=m=>{n(m.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",o)};let a=!1,l,c;const h=m=>{m.preventDefault(),this._setDraggingStyle(!0),n(m.touches[0].clientX),a=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(l=m.touches[0].clientX,c=m.touches[0].clientY,a=!0):h(m),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=m=>{if(a){const T=m.touches[0].clientX-l,S=m.touches[0].clientY-c;Math.abs(T)>Math.abs(S)?h(m):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else m.preventDefault(),n(m.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),_=400;let v;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const S=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${n}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),t-=n,t=Math.round(t/this._step)*this._step,t+=n,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class WT extends Wn{constructor(t,n,i,r){super(t,n,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(n=>{const i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?t:this._names[n],this}}class XT extends Wn{constructor(t,n,i){super(t,n,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var $T=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function qT(s){const t=document.createElement("style");t.innerHTML=s;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(t,n):document.head.appendChild(t)}let Kd=!1;class Hh{constructor({parent:t,autoPlace:n=t===void 0,container:i,width:r,title:o="Controls",closeFolders:a=!1,injectStyles:l=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Kd&&l&&(qT($T),Kd=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(t,n,i,r,o){if(Object(i)===i)return new WT(this,t,n,i);const a=t[n];switch(typeof a){case"number":return new GT(this,t,n,i,r,o);case"boolean":return new FT(this,t,n);case"string":return new XT(this,t,n);case"function":return new Bl(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,a)}addColor(t,n,i=1){return new VT(this,t,n,i)}addFolder(t){const n=new Hh({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(t,n=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Bl||i._name in t.controllers&&i.load(t.controllers[i._name])}),n&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Bl)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const i=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}const{worlds:pn,displayWorlds:jT,selectedWorld:wr,displayInfos:Jd,textToDisplay:YT,handleDisplayWorlds:KT}=ao();class JT{constructor(t){pe(this,"scene");pe(this,"renderer");pe(this,"camera");pe(this,"meshs");pe(this,"stats");pe(this,"ref");pe(this,"pixelRatio");pe(this,"animationFrameId",null);pe(this,"mousePos");pe(this,"mouseDirection");pe(this,"clock");pe(this,"delta");pe(this,"elapsedTime");pe(this,"sensitivity");pe(this,"composer");pe(this,"bike");pe(this,"globe");pe(this,"text");pe(this,"planets");pe(this,"lavaPlanet");pe(this,"grassPlanet");pe(this,"cylinder");pe(this,"width");pe(this,"height");pe(this,"raycaster");pe(this,"fov");pe(this,"light");const n=window.innerWidth,i=window.innerHeight;this.width=n,this.height=i,this.meshs=[],this.mousePos={x:n/3,y:i/1.5},this.ref=t,this.scene=new fx,this.fov={base:50,current:50,accel:170,isAccelerate:!1},this.camera=new $t(this.fov.base,n/i,.1,60),this.camera.position.set(0,0,3),this.camera.lookAt(0,0,0),this.clock=new Jp,this.elapsedTime=0,this.delta=0,this.sensitivity=.002,this.mouseDirection=new F(0,0,1),this.pixelRatio=Math.min(window.devicePixelRatio,window.innerWidth<768?1:2),this.renderer=new yE({antialias:!0}),this.composer=new wT(this.renderer),this.composer.renderTarget1.samples=8,this.composer.renderTarget2.samples=8,this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=op;const r=window.devicePixelRatio>1;this.composer.setSize(window.innerWidth,window.innerHeight),this.renderer.setSize(n,i,r);const o=new CT(this.scene,this.camera);this.composer.addPass(o);const a=new lr;a.strength=.28,a.radius=.4,this.composer.addPass(a);const l=new LT;l.uniforms.intensity.value=1,this.composer.addPass(l);const c=new Yc(ET);c.uniforms.amount.value=.003,c.uniforms.angle.value=5,this.composer.addPass(c);const h=new Yc(TT);h.uniforms.offset.value=1.4,this.composer.addPass(h);const u=new DT;this.composer.addPass(u),this.light=new Kp(16777215,2),this.light.position.set(7,40,13),this.scene.add(this.light),this.scene.add(this.light.target),t.appendChild(this.renderer.domElement);const d=new F0,f=new rT(this),p=new yT(this),_=new nT(this),v=new pT(this),g=new mT(this),m=new gT(this),T=new _T(this);(async()=>{await _.loadMesh(),this.bike=_,this.cylinder=p,this.globe=f,this.text=v,this.planets=g,this.lavaPlanet=m,this.grassPlanet=T,this.raycaster=d,this.meshs.push(this.bike,this.cylinder,this.globe,this.text,this.planets,this.lavaPlanet,this.grassPlanet)})().then(()=>{this.setup()})}tick(){this.composer.render(),this.delta=this.clock.getDelta(),this.elapsedTime=this.clock.getElapsedTime(),this.checkFov(),this.intersects(),this.tickChildren(),this.animationFrameId=requestAnimationFrame(()=>{this.tick()})}setup(){this.addChildren(),this.setupGUI(),this.setView(),this.registerEventListeners(),this.tick()}setupGUI(){var a,l,c,h,u;const t=new Hh({title:"Acker'tools",closeFolders:!0});t.addFolder("Environment");const n=t.addFolder("ShaderPP"),i=t.addFolder("Camera"),r=t.addFolder("Bike"),o=t.addFolder("Light");t.hide(),i.add(this.camera,"fov",20,140,.5).name("FOV").onChange(()=>{this.camera.updateProjectionMatrix()}),i.add(this.fov,"isAccelerate").name("activateSpeed").onChange(()=>{this.camera.updateProjectionMatrix()}),r.add((a=this.bike)==null?void 0:a.mesh.position,"x",-2,2,.05).name("Xpos Bike"),r.add((l=this.bike)==null?void 0:l.mesh.position,"y",-2,2,.05).name("Ypos Bike"),o.add((c=this.light)==null?void 0:c.position,"x",-6,50,.1).name("Xpos"),o.add((h=this.light)==null?void 0:h.position,"y",-6,50,.1).name("Ypos"),o.add((u=this.light)==null?void 0:u.position,"z",-6,50,.1).name("Zpos"),n.add(this.composer.passes[1],"strength",.1,5).name("Bloomstrength"),n.add(this.composer.passes[3].uniforms.amount,"value",.001,1.1).name("RGBstrength"),n.add(this.composer.passes[3].uniforms.angle,"value",.1,5).name("RGBangle"),n.add(this.composer.passes[4].uniforms.darkness,"value",.1,5).name("VignetteDarkness"),n.add(this.composer.passes[4].uniforms.offset,"value",.1,5).name("VignetteOffset"),window.addEventListener("keydown",d=>{d.key=="t"&&t.show(t._hidden)})}addChildren(){for(let t=0;t<this.meshs.length;t++)this.scene.add(this.meshs[t].mesh)}tickChildren(){for(let t=0;t<this.meshs.length;t++)this.meshs[t].tick(this)}lerpBloom(t,n,i){this.composer.passes[1].strength=(1-i)*t+i*n}lerpFOV(t,n,i){this.camera.fov=(1-i)*t+i*n,this.camera.updateProjectionMatrix()}checkFov(){this.fov.isAccelerate&&(this.lerpFOV(this.camera.fov,this.fov.accel,.03),this.lerpBloom(this.composer.passes[1].strength,1,.02),this.globe.mesh.rotation.x+=this.delta*2,this.camera.position.z=0,this.composer.passes[3].uniforms.amount.value=.008,this.composer.passes[3].uniforms.angle.value=1.8,setTimeout(()=>{this.globe.changeEmissive(3866666)},200)),this.fov.isAccelerate||(this.lerpFOV(this.camera.fov,this.fov.base,.03),this.lerpBloom(this.composer.passes[1].strength,.28,.02),this.globe.changeEmissive(2105376),this.camera.position.z=2,this.composer.passes[3].uniforms.amount.value=.003,this.composer.passes[3].uniforms.angle.value=5)}handleHyperspeed(){this.fov.isAccelerate=!this.fov.isAccelerate}setView(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.pixelRatio)}intersects(){const t=this.renderer.domElement.getBoundingClientRect(),n=this.mousePos.x-t.left,i=this.mousePos.y-t.top,r={x:n/t.width*2-1,y:-(i/t.height)*2+1};this.raycaster.setFromCamera(r,this.camera);const o=this.raycaster.intersectObject(this.lavaPlanet.mesh),a=this.raycaster.intersectObject(this.grassPlanet.mesh),l=this.raycaster.intersectObject(this.planets.mesh);o.length>0?pn.lavaPlanet||(this.lavaPlanet.changeEmissive(),pn.lavaPlanet=!0,wr.value="lava"):(this.lavaPlanet.withdrawEmissive(),pn.lavaPlanet=!1),a.length>0?pn.grassPlanet||(this.grassPlanet.changeEmissive(),pn.grassPlanet=!0,wr.value="grass"):(this.grassPlanet.withdrawEmissive(),pn.grassPlanet=!1),l.length>0?pn.planet||(this.planets.changeEmissive(),pn.planet=!0,wr.value="snow"):(this.planets.withdrawEmissive(),pn.planet=!1)}triggerClickPlanet(){jT.value&&(pn.planet||pn.lavaPlanet||pn.grassPlanet)&&(YT.value="Call the Planets",Jd.value=!1,this.cylinder.pos.isBottom=!1,this.cylinder.mesh.visible=!1,this.handleHyperspeed(),setTimeout(()=>{this.globe.changeSkin(wr.value),this.cylinder.changeSkin(wr.value)},1e3),KT(),setTimeout(()=>{this.handleHyperspeed(),Jd.value=!0,this.cylinder.pos.isBottom=!0,this.cylinder.mesh.visible=!0},3e3))}registerEventListeners(){window.onresize=()=>{this.setView()},window.addEventListener("pointermove",t=>{this.mousePos={x:t.clientX,y:t.clientY}}),window.addEventListener("pointerup",()=>{this.mousePos={x:e.clientX,y:e.clientY},this.triggerClickPlanet()}),window.addEventListener("scroll",()=>{this.globe.rotateGlobe()}),window.addEventListener("nextText",()=>{this.text.triggerNextStep()}),window.addEventListener("displayPlanets",()=>{this.planets.handleStaticState(),this.lavaPlanet.handleStaticState(),this.grassPlanet.handleStaticState()})}}const ZT={class:"Home"},QT=no({__name:"Home",setup(s){const{manageSteps:t,textToDisplay:n,displayInfos:i}=ao();let r;const o=Xn();return If(()=>{r=new JT(o.value)}),(a,l)=>(Qt(),_n("section",ZT,[Ye("div",{ref_key:"div",ref:o,class:"Scene"},null,512),Ye("button",{class:"ButtonContinue",onClick:l[0]||(l[0]=c=>Cn(t)(Cn(r).cylinder.pos))},th(Cn(n)),1),Ye("button",{style:{display:"none",position:"absolute","z-index":"10"},onClick:l[1]||(l[1]=()=>{i.value=!Cn(i)})}," test ")]))}}),Ba=(s,t)=>{const n=s.__vccOpts||s;for(const[i,r]of t)n[i]=r;return n},eA=Ba(QT,[["__scopeId","data-v-9125e618"]]),tA={class:"ContainerProjects"},nA=["href"],iA={key:0,id:"Smartphone_Approve_24",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},sA=no({__name:"Grid",props:{project:{}},setup(s){return(t,n)=>(Qt(),_n("div",tA,[(Qt(!0),_n(gn,null,Xl(t.project,(i,r)=>(Qt(),_n("a",{class:"ContainerProject",href:i.url,target:"_blank",rel:"noopener noreferrer",key:r,style:Ys({background:`url(${i.img})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"norepeat"})},[i.isPhoneComp?(Qt(),_n("svg",iA,n[0]||(n[0]=[Ye("rect",{width:"24",height:"24",stroke:"none",fill:"#ffffff",opacity:"0"},null,-1),Ye("g",{transform:"matrix(0.83 0 0 0.83 12 12)"},[Ye("path",{style:{stroke:"none","stroke-width":"1","stroke-dasharray":"none","stroke-linecap":"butt","stroke-dashoffset":"0","stroke-linejoin":"miter","stroke-miterlimit":"4",fill:"#00ffd0","fill-rule":"nonzero",opacity:"1"},transform:" translate(-16, -16)",d:"M 11 4 C 9.3550302 4 8 5.3550302 8 7 L 8 25 C 8 26.64497 9.3550302 28 11 28 L 21 28 C 22.64497 28 24 26.64497 24 25 L 24 7 C 24 5.3550302 22.64497 4 21 4 L 11 4 z M 11 6 L 21 6 C 21.56503 6 22 6.4349698 22 7 L 22 25 C 22 25.56503 21.56503 26 21 26 L 11 26 C 10.43497 26 10 25.56503 10 25 L 10 7 C 10 6.4349698 10.43497 6 11 6 z M 19.292969 11.292969 L 15 15.585938 L 12.707031 13.292969 L 11.292969 14.707031 L 15 18.414062 L 20.707031 12.707031 L 19.292969 11.292969 z M 14 23 L 14 25 L 18 25 L 18 23 L 14 23 z","stroke-linecap":"round"})],-1)]))):Yo("",!0)],12,nA))),128))]))}}),kl=Ba(sA,[["__scopeId","data-v-a13d8468"]]),rA={class:"SummaryContainer"},oA={class:"SummaryContent"},aA={class:"SummaryContentContainer"},lA=["src"],cA=["innerHTML"],hA={class:"SummaryContentContainer"},uA={class:"SummaryContentContainer"},dA={class:"Stack"},fA=["src"],pA={class:"SummaryContent"},mA={class:"SummaryContentContainer"},gA={class:"SummaryContentContainer"},_A=no({__name:"Summary",setup(s){const{showSummary:t}=ao(),n=Xn({x:0,y:0}),i=Xn({x:0,y:0});window.addEventListener("mousemove",u=>{n.value.x=u.clientX,n.value.y=u.clientY}),window.addEventListener("touchmove",u=>{n.value.x=u.touches[0].clientX,n.value.y=u.touches[0].clientY});const r=()=>{i.value.x=(1-.04)*i.value.x+.04*n.value.x,i.value.y=(1-.04)*i.value.y+.04*n.value.y,requestAnimationFrame(()=>{r()})},o=["/website/images/html.png","/website/images/css.png","/website/images/js.png","/website/images/ts.png","/website/images/vuejslogo.png","/website/images/nuxtlogo.png","/website/images/threelogo.jpg","/website/images/astrologo.jpg"],a=[{img:"/website/images/LogNes.jpg",description:"Création de pages événementielles (<em>Black Friday</em> 2022 & 2023, Collaboration <em>Pierre Hermé</em>, <em>Mory Sacko</em>), page de lancement de nouvelle machine (<em>Vertuo Pop</em>), <em>HomePage</em> modulaire 2024. <br> Création d'un <em>CMS</em> pour aider à la conception des pages. <br> Travail de fond sur la mise en place d'un design system complet. Conception côté B2C majoritairement, mais également en B2B ponctuellement"},{img:"/website/images/VtsLogo.PNG",description:"Conception d'outils pour <em>créer</em> des sites simples en Point&Click. <br> Elaboration de thèmes sélectionnables puis customisable grâce aux outils développés. <br> Créer la possibilité d'en générer une version totalement statique pour augmenter les performances."},{img:"/website/images/CerfLogo.jpg",description:"Création et gestion d'une grosse <em>flotte de site</em>. <br> Conception de maquettes complètes avec un gros focus sur <em>l'UI et l'accessibilité</em>. "}],l=[{img:"/website/images/project/nes.png"},{img:"/website/images/project/home.png"},{img:"/website/images/project/mory.png"},{img:"/website/images/project/ph.png"},{img:"/website/images/project/pop.png"},{img:"/website/images/project/zambia.png"}],c=[{img:"/website/images/project/fps.png",url:"https://ackermiam.github.io/lab-fps/",isPhoneComp:!1},{img:"/website/images/project/lab.png",url:"https://ackermiam.github.io/labyrinthe/",isPhoneComp:!0},{img:"/website/images/project/onroad.png",url:"https://ackermiam.github.io/on-road/",isPhoneComp:!0},{img:"/website/images/project/rpgame.png",url:"https://ackermiam.github.io/rp-game/",isPhoneComp:!0},{img:"/website/images/project/invade.png",url:"https://ackermiam.github.io/egirl-invaders/",isPhoneComp:!1}],h=[{img:"/website/images/project/nesport.png",url:"https://ackermiam.github.io/spaceportfolio/",isPhoneComp:!0},{img:"/website/images/project/mapedit.png",url:"https://ackermiam.github.io/map-editor/",isPhoneComp:!0},{img:"/website/images/project/horror.png",url:"https://ackermiam.github.io/horror-site/",isPhoneComp:!0},{img:"/website/images/project/portfolio.png",url:"https://ackermiam.github.io/portfolio/",isPhoneComp:!0}];return r(),(u,d)=>(Qt(),_n("section",{class:ba(["Summary",Cn(t)?"Summary--displayed":"Summary--hide"])},[Ye("div",rA,[d[10]||(d[10]=Ya('<div class="SummaryContent"><h2>Who am I ?</h2><p> Développeur <em>JavaScript/TypeScript</em>, <br><br> J&#39;aime créer des <em>interfaces web</em> en variant les designs, concevoir des <em>expériences 3D</em> uniques et amusantes qui vont de la présentation de produits jusqu&#39;à des <em>jeux</em> ! <br><br> Je souhaite à terme pouvoir créer des expériences en <em>réalité augmentée</em> pour smartphone, lunettes et casque de réalité virtuelle </p></div>',1)),Ye("div",oA,[d[5]||(d[5]=Ya("<h2>My Work</h2><p> Mon travail m&#39;a permis de voir et concevoir différentes choses au sein du <em>front-end</em> ! <br><br> Des interfaces soignées avec un <em>design system</em> millimétré, en passant par des <em>CMS</em> simples mais robustes faits-maison pour améliorer la productivité, des <em>pages de lancements</em> de nouveaux produits ou de <em>collaboration prestigieuses</em>. </p>",2)),Ye("div",aA,[d[0]||(d[0]=Ye("h5",null,"Worked with",-1)),Ye("div",null,[(Qt(),_n(gn,null,Xl(a,(f,p)=>Ye("div",{class:"StackProject",key:p},[Ye("img",{src:f.img,class:"ImagePro"},null,8,lA),Ye("span",{innerHTML:f.description},null,8,cA)])),64))])]),Ye("div",hA,[d[1]||(d[1]=Ye("h5",null,"Pro",-1)),d[2]||(d[2]=Ye("p",null,[Bn(" De la nouvelle "),Ye("em",null,"Homepage Nespresso"),Bn(", en passant par des "),Ye("em",null,"collaborations exclusives"),Bn(", voici mon travail quotidien depuis plusieurs années en étroite collaboration avec Nespresso ")],-1)),d[3]||(d[3]=Ye("span",null,"(Pas de lien, les pages changent régulièrement ainsi je vous évite de cliquer sur un lien obsolète)",-1)),jt(kl,{project:l})]),Ye("div",uA,[d[4]||(d[4]=Ye("h5",null,"My Stack",-1)),Ye("div",dA,[(Qt(),_n(gn,null,Xl(o,(f,p)=>Ye("img",{key:p,src:f,class:"ImageStack"},null,8,fA)),64))])])]),Ye("div",pA,[d[9]||(d[9]=Ye("h2",null,"Projects",-1)),Ye("div",mA,[d[6]||(d[6]=Ya("<h5>Games</h5><p> J&#39;ai commencé par les jeux <em>2D</em> avant de m&#39;embarquer dans les univers <em>3D</em>. <br>Ils sont classés du plus récent au plus ancien. <br> De la vue à la <em>1ère</em> personne, <em>3ème</em> personne, tour par tour, clin d&#39;oeil <em>rétro</em>, il y en a pour tous les goûts, et représentent l&#39;ensemble de mon apprentissage dans cet univers. </p><span>(L&#39;icône de téléphone verte indique que le contenu est compatible mobile)</span>",3)),jt(kl,{project:c})]),Ye("div",gA,[d[7]||(d[7]=Ye("h5",null,"Tests & tools",-1)),d[8]||(d[8]=Ye("p",null,[Bn(" Des tests de portfolios, des "),Ye("em",null,"outils"),Bn(", des projets "),Ye("em",null,"abandonnés"),Bn(", pas "),Ye("em",null,"optimisés"),Bn(", tout ce qu'on ne montre pas habituellement, c'est pourtant aussi dans ce genre de projets que l'on évolue ! ")],-1)),jt(kl,{project:h})])])]),Ye("div",{class:"Circle CircleRed",style:Ys({left:i.value.x+"px",top:i.value.y+"px"})},null,4),Ye("div",{class:"Circle CircleBlue",style:Ys({left:i.value.x-40+"px",top:i.value.y-40+"px"})},null,4)],2))}}),vA={class:"Loading"},xA=no({__name:"Loading",setup(s){return(t,n)=>(Qt(),_n("section",vA))}}),yA=Ba(xA,[["__scopeId","data-v-5fd0c066"]]),MA={class:"App"},SA={key:1,class:"Hidder"},bA=no({__name:"App",setup(s){const{showSummary:t,handleSummary:n,isLoading:i}=ao();return setTimeout(()=>{i.value=!1},2500),(r,o)=>(Qt(),_n("div",MA,[o[1]||(o[1]=Ye("div",{class:"TitleContainer"},[Ye("p",{class:"Title Title--first"},[Bn("Acker'"),Ye("br"),Bn("Prod.")])],-1)),Cn(i)?Yo("",!0):(Qt(),_n("button",{key:0,class:"Button",onClick:o[0]||(o[0]=a=>Cn(n)())},th(Cn(t)===!0?"3D version":"Summary"),1)),Cn(t)?(Qt(),_n("div",SA)):Yo("",!0),Cn(i)?(Qt(),Qf(yA,{key:2})):Yo("",!0),jt(eA),jt(_A)]))}}),EA=Ba(bA,[["__scopeId","data-v-38e985c5"]]);O_(EA).mount("#app");
