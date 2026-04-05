var Td=Object.defineProperty;var Ed=(r,e,t)=>e in r?Td(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var L=(r,e,t)=>Ed(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const dr={GER:"德国",USA:"美国",USSR:"苏联",UK:"英国"},ru={MEDIUM:"中型",HEAVY:"重型",TD:"坦歼"},pi=["GER","USA","USSR","UK"],Ad={"75mm炮":{caliber:"75mm炮",speed:82,mass:6.8,penetration:110,damage:38,gravityScale:1,trailColor:"#ffd08a"},"75mm长管炮":{caliber:"75mm长管炮",speed:96,mass:6.6,penetration:150,damage:44,gravityScale:.95,trailColor:"#ffe0a6"},"76mm炮":{caliber:"76mm炮",speed:88,mass:7.3,penetration:124,damage:40,gravityScale:1,trailColor:"#ffe7b3"},"85mm炮":{caliber:"85mm炮",speed:84,mass:9.2,penetration:142,damage:48,gravityScale:1.04,trailColor:"#ffd36b"},"88mm炮":{caliber:"88mm炮",speed:92,mass:10.2,penetration:165,damage:56,gravityScale:1.02,trailColor:"#ffd974"},"88mm长管炮":{caliber:"88mm长管炮",speed:104,mass:10.4,penetration:198,damage:60,gravityScale:.98,trailColor:"#fff0c7"},"90mm炮":{caliber:"90mm炮",speed:94,mass:10.9,penetration:176,damage:58,gravityScale:1,trailColor:"#ffe79a"},"122mm炮":{caliber:"122mm炮",speed:74,mass:25,penetration:190,damage:72,gravityScale:1.12,trailColor:"#ffbf66"},"17磅炮(76mm)":{caliber:"17磅炮(76mm)",speed:102,mass:7.7,penetration:171,damage:54,gravityScale:.96,trailColor:"#fff1b5"}},Ja=[{id:"panzer-iv",name:"Panzer IV",nation:"GER",class:"MEDIUM",firepower:3,armor:3,mobility:4,gunCaliber:"75mm炮",gunPenetration:110,frontalArmor:80,turretArmor:50,hp:122,mass:25,reloadSeconds:2.5,scoreValue:100},{id:"panther",name:"Panther",nation:"GER",class:"MEDIUM",firepower:4,armor:4,mobility:4,gunCaliber:"75mm长管炮",gunPenetration:150,frontalArmor:110,turretArmor:100,hp:138,mass:45,reloadSeconds:2.8,scoreValue:150},{id:"tiger-i",name:"Tiger I",nation:"GER",class:"HEAVY",firepower:5,armor:5,mobility:2,gunCaliber:"88mm炮",gunPenetration:165,frontalArmor:120,turretArmor:110,hp:170,mass:57,reloadSeconds:3.2,scoreValue:220},{id:"tiger-ii",name:"Tiger II",nation:"GER",class:"HEAVY",firepower:5,armor:5,mobility:2,gunCaliber:"88mm长管炮",gunPenetration:198,frontalArmor:150,turretArmor:180,hp:182,mass:69,reloadSeconds:3.5,scoreValue:260},{id:"m4-sherman",name:"M4 Sherman",nation:"USA",class:"MEDIUM",firepower:3,armor:3,mobility:4,gunCaliber:"75mm炮",gunPenetration:110,frontalArmor:75,turretArmor:76,hp:126,mass:30,reloadSeconds:2.4,scoreValue:100},{id:"m26-pershing",name:"M26 Pershing",nation:"USA",class:"HEAVY",firepower:4,armor:4,mobility:3,gunCaliber:"90mm炮",gunPenetration:176,frontalArmor:102,turretArmor:102,hp:156,mass:41,reloadSeconds:3.1,scoreValue:180},{id:"m36-jackson",name:"M36 Jackson",nation:"USA",class:"TD",firepower:5,armor:3,mobility:3,gunCaliber:"90mm炮",gunPenetration:176,frontalArmor:75,turretArmor:32,hp:118,mass:30,reloadSeconds:2.9,scoreValue:170},{id:"t34-76",name:"T-34/76",nation:"USSR",class:"MEDIUM",firepower:3,armor:4,mobility:4,gunCaliber:"76mm炮",gunPenetration:124,frontalArmor:90,turretArmor:70,hp:128,mass:26,reloadSeconds:2.4,scoreValue:110},{id:"t34-85",name:"T-34/85",nation:"USSR",class:"MEDIUM",firepower:4,armor:4,mobility:4,gunCaliber:"85mm炮",gunPenetration:142,frontalArmor:90,turretArmor:90,hp:138,mass:32,reloadSeconds:2.7,scoreValue:145},{id:"kv-1",name:"KV-1",nation:"USSR",class:"HEAVY",firepower:4,armor:5,mobility:2,gunCaliber:"76mm炮",gunPenetration:124,frontalArmor:115,turretArmor:95,hp:168,mass:47,reloadSeconds:3,scoreValue:190},{id:"is-2",name:"IS-2",nation:"USSR",class:"HEAVY",firepower:5,armor:5,mobility:3,gunCaliber:"122mm炮",gunPenetration:190,frontalArmor:120,turretArmor:100,hp:176,mass:46,reloadSeconds:3.9,scoreValue:240},{id:"cromwell",name:"Cromwell",nation:"UK",class:"MEDIUM",firepower:3,armor:3,mobility:5,gunCaliber:"75mm炮",gunPenetration:110,frontalArmor:76,turretArmor:76,hp:120,mass:28,reloadSeconds:2.2,scoreValue:105},{id:"churchill",name:"Churchill",nation:"UK",class:"HEAVY",firepower:3,armor:4,mobility:2,gunCaliber:"75mm炮",gunPenetration:110,frontalArmor:102,turretArmor:89,hp:166,mass:40,reloadSeconds:3,scoreValue:165},{id:"firefly",name:"Firefly",nation:"UK",class:"MEDIUM",firepower:5,armor:3,mobility:3,gunCaliber:"17磅炮(76mm)",gunPenetration:171,frontalArmor:76,turretArmor:89,hp:134,mass:33,reloadSeconds:2.9,scoreValue:175}],Ki=new Map(Ja.map(r=>[r.id,r]));function gi(r){return Ja.filter(e=>e.nation===r)}function Rd(r){const e=Ad[r];if(!e)throw new Error(`Unknown ammo caliber: ${r}`);return e}class Mn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Mn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],y=i[3],_=i[4],x=i[5],C=i[6],T=i[7],R=i[8];return s[0]=o*v+a*y+l*C,s[1]=o*m+a*_+l*T,s[2]=o*p+a*x+l*R,s[3]=c*v+h*y+u*C,s[4]=c*m+h*_+u*T,s[5]=c*p+h*x+u*R,s[6]=d*v+f*y+g*C,s[7]=d*m+f*_+g*T,s[8]=d*p+f*x+g*R,t}scale(e,t){t===void 0&&(t=new Mn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*f;while(--h)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Mn);const t=3,n=6,i=Cd;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[t+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,u)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,u=t*l,d=n*a,f=n*l,g=i*l,v=s*o,m=s*a,p=s*l,y=this.elements;return y[3*0+0]=1-(d+g),y[3*0+1]=h-p,y[3*0+2]=u+m,y[3*1+0]=h+p,y[3*1+1]=1-(c+g),y[3*1+2]=f-v,y[3*2+0]=u-m,y[3*2+1]=f+v,y[3*2+2]=1-(c+d),this}transpose(e){e===void 0&&(e=new Mn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Cd=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Mn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Pd,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Ld;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Tl),Tl.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Pd=new M,Ld=new M,Tl=new M;class on{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,El),c=El),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new on().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=Al,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Al,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(g<0||f>g)}}const El=new M,Al=[new M,new M,new M,new M,new M,new M,new M,new M];class Rl{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ou{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}let en=class Di{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Id,i=Dd;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Di);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-s*l,t.y=i*h+o*l+s*a-n*c,t.z=s*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-s*c,t}inverse(e){e===void 0&&(e=new Di);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Di),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,f=-o*n-a*i-l*s;return t.x=h*c+f*-o+u*-l-d*-a,t.y=u*c+f*-a+d*-o-h*-l,t.z=d*c+f*-l+h*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new Di(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Di);const i=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,f,g,v,m;return f=i*l+s*c+o*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),g=Math.sin(d),v=Math.sin((1-t)*d)/g,m=Math.sin(t*d)/g):(v=1-t,m=t),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*h,n.w=v*a+m*u,n}integrate(e,t,n,i){i===void 0&&(i=new Di);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}};const Id=new M,Dd=new M,Nd={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class fe{constructor(e){e===void 0&&(e={}),this.id=fe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}fe.idCounter=0;fe.types=Nd;class Je{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new en,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Je.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Je.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(Cl),Cl.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Cl=new en;class ir extends fe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ir.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new M,o=new M;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,l,c){const h=new M;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>d&&(d=v,u=g)}const f=[];for(let g=0;g<n.faces[u].length;g++){const v=n.vertices[n.faces[u][g]],m=new M;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}u>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,o,a,l){const c=new M,h=new M,u=new M,d=new M,f=new M,g=new M;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const y=m.testSepAxis(c,e,t,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let y=0;y<p;y++){const _=a?a[y]:y;c.copy(m.faceNormals[_]),n.vmult(c,c);const x=m.testSepAxis(c,e,t,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],h);const y=m.testSepAxis(h,e,t,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}else{const p=l?l.length:e.faces.length;for(let y=0;y<p;y++){const _=l?l[y]:y;h.copy(e.faceNormals[_]),s.vmult(h,h);const x=m.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],d);for(let y=0;y!==e.uniqueEdges.length;y++)if(s.vmult(e.uniqueEdges[y],f),d.cross(f,g),!g.almostZero()){g.normalize();const _=m.testSepAxis(g,e,t,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;ir.project(a,e,n,i,Po),ir.project(t,e,s,o,Lo);const l=Po[0],c=Po[1],h=Lo[0],u=Lo[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const l=new M,c=new M,h=new M,u=new M,d=new M,f=new M,g=new M,v=new M,m=this,p=[],y=i,_=p;let x=-1,C=Number.MAX_VALUE;for(let w=0;w<m.faces.length;w++){l.copy(m.faceNormals[w]),n.vmult(l,l);const B=l.dot(e);B<C&&(C=B,x=w)}if(x<0)return;const T=m.faces[x];T.connectedFaces=[];for(let w=0;w<m.faces.length;w++)for(let B=0;B<m.faces[w].length;B++)T.indexOf(m.faces[w][B])!==-1&&w!==x&&T.connectedFaces.indexOf(w)===-1&&T.connectedFaces.push(w);const R=T.length;for(let w=0;w<R;w++){const B=m.vertices[T[w]],H=m.vertices[T[(w+1)%R]];B.vsub(H,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[x]),n.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(B),n.vmult(f,f),t.vadd(f,f);const F=T.connectedFaces[w];g.copy(this.faceNormals[F]);const I=this.getPlaneConstantOfFace(F);v.copy(g),n.vmult(v,v);const D=I-v.dot(t);for(this.clipFaceAgainstPlane(y,_,v,D);y.length;)y.shift();for(;_.length;)y.push(_.shift())}g.copy(this.faceNormals[x]);const O=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const S=O-v.dot(t);for(let w=0;w<y.length;w++){let B=v.dot(y[w])+S;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=o){const H=y[w];if(B<=1e-6){const F={point:H,normal:v,depth:B};a.push(F)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,s<0)if(o<0){const u=new M;u.copy(c),t.push(u)}else{const u=new M;l.lerp(c,s/(s-o),u),t.push(u)}else if(o<0){const u=new M;l.lerp(c,s/(s-o),u),t.push(u),t.push(c)}l=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new M;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new M;e.vsub(l,c);const h=a.dot(c),u=new M;s.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,a=Ud;let l=0,c=0;const h=Fd,u=e.vertices;h.setZero(),Je.vectorToLocalFrame(n,i,t,a),Je.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const g=u[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Po=[],Lo=[];new M;const Ud=new M,Fd=new M;class Xi extends fe{constructor(e){super({type:fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new ir({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),Xi.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ai.set(s[o][0],s[o][1],s[o][2]),t.vmult(ai,ai),e.vadd(ai,ai),n(ai.x,ai.y,ai.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;En[0].set(s.x,s.y,s.z),En[1].set(-s.x,s.y,s.z),En[2].set(-s.x,-s.y,s.z),En[3].set(-s.x,-s.y,-s.z),En[4].set(s.x,-s.y,-s.z),En[5].set(s.x,s.y,-s.z),En[6].set(-s.x,s.y,-s.z),En[7].set(s.x,-s.y,s.z);const o=En[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=En[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const ai=new M,En=[new M,new M,new M,new M,new M,new M,new M,new M],el={DYNAMIC:1,STATIC:2,KINEMATIC:4},tl={AWAKE:0,SLEEPY:1,SLEEPING:2};class ue extends ou{constructor(e){e===void 0&&(e={}),super(),this.id=ue.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ue.STATIC:ue.DYNAMIC,typeof e.type==typeof ue.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ue.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new en,this.initQuaternion=new en,this.previousQuaternion=new en,this.interpolatedQuaternion=new en,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new Mn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new Mn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new on,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ue.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ue.SLEEPING&&this.dispatchEvent(ue.wakeupEvent)}sleep(){this.sleepState=ue.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ue.AWAKE&&n<i?(this.sleepState=ue.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ue.sleepyEvent)):t===ue.SLEEPY&&n>i?this.wakeUp():t===ue.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ue.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ue.SLEEPING||this.type===ue.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,s=new en;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Od,o=Bd,a=this.quaternion,l=this.aabb,c=kd;for(let h=0;h!==i;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=zd,i=Hd;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;this.sleepState===ue.SLEEPING&&this.wakeUp();const n=Vd;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;const n=Gd,i=Wd;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ue.DYNAMIC&&(this.sleepState===ue.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;this.sleepState===ue.SLEEPING&&this.wakeUp();const n=t,i=qd;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Xd;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;const n=Yd,i=jd;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=$d;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Xi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ue.DYNAMIC||this.type===ue.KINEMATIC)||this.sleepState===ue.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*e;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const g=u.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,y=l.z*v.z;s.x+=e*(g[0]*m+g[1]*p+g[2]*y),s.y+=e*(g[3]*m+g[4]*p+g[5]*y),s.z+=e*(g[6]*m+g[7]*p+g[8]*y),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ue.idCounter=0;ue.COLLIDE_EVENT_NAME="collide";ue.DYNAMIC=el.DYNAMIC;ue.STATIC=el.STATIC;ue.KINEMATIC=el.KINEMATIC;ue.AWAKE=tl.AWAKE;ue.SLEEPY=tl.SLEEPY;ue.SLEEPING=tl.SLEEPING;ue.wakeupEvent={type:"wakeup"};ue.sleepyEvent={type:"sleepy"};ue.sleepEvent={type:"sleep"};const Od=new M,Bd=new en,kd=new on,zd=new Mn,Hd=new Mn;new Mn;const Vd=new M,Gd=new M,Wd=new M,qd=new M,Xd=new M,Yd=new M,jd=new M,$d=new M;class Kd{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ue.STATIC||e.sleepState===ue.SLEEPING)&&(t.type&ue.STATIC||t.sleepState===ue.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Zd;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Qd,i=Jd,s=ef,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Zd=new M;new M;new en;new M;const Qd={keys:[]},Jd=[],ef=[];new M;new M;new M;class tf extends Kd{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class _i{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let au,lu,cu,hu,uu,du,fu;const nl={CLOSEST:1,ANY:2,ALL:4};au=fe.types.SPHERE;lu=fe.types.PLANE;cu=fe.types.BOX;hu=fe.types.CYLINDER;uu=fe.types.CONVEXPOLYHEDRON;du=fe.types.HEIGHTFIELD;fu=fe.types.TRIMESH;let Dn=class Cn{get[au](){return this._intersectSphere}get[lu](){return this._intersectPlane}get[cu](){return this._intersectBox}get[hu](){return this._intersectConvex}get[uu](){return this._intersectConvex}get[du](){return this._intersectHeightfield}get[fu](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Cn.ANY,this.result=new _i,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Cn.ANY,this.result=t.result||new _i,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Pl),Io.length=0,e.broadphase.aabbQuery(e,Pl,Io),this.intersectBodies(Io),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=nf,s=sf;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(yf(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);const h=new M;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new M,v=new M,m=new M;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=rf;o.from.copy(this.from),o.to.copy(this.to),Je.pointToLocalFrame(n,t,o.from,o.from),Je.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=of;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new on;o.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,d),!!d.overlapsRay(o)){if(e.getConvexTrianglePillar(f,g,!1),Je.pointToWorldFrame(n,t,e.pillarOffset,xr),this._intersectConvex(e.pillarConvex,t,xr,i,s,Ll),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),Je.pointToWorldFrame(n,t,e.pillarOffset,xr),this._intersectConvex(e.pillarConvex,t,xr,i,s,Ll)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,f=af,g=lf;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const v=(-h-Math.sqrt(d))/(2*c),m=(-h+Math.sqrt(d))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=cf,l=Il,c=o&&o.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,y=this.result;for(let _=0;!y.shouldStop&&_<p;_++){const x=c?c[_]:_,C=h[x],T=d[x],R=t,O=n;l.copy(u[C[0]]),R.vmult(l,l),l.vadd(O,l),l.vsub(g,l),R.vmult(T,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const w=a.dot(l)/S;if(!(w<0)){f.scale(w,Qt),Qt.vadd(g,Qt),gn.copy(u[C[0]]),R.vmult(gn,gn),O.vadd(gn,gn);for(let B=1;!y.shouldStop&&B<C.length-1;B++){An.copy(u[C[B]]),Rn.copy(u[C[B+1]]),R.vmult(An,An),R.vmult(Rn,Rn),O.vadd(An,An),O.vadd(Rn,Rn);const H=Qt.distanceTo(g);!(Cn.pointInTriangle(Qt,gn,An,Rn)||Cn.pointInTriangle(Qt,An,gn,Rn))||H>m||this.reportIntersection(a,Qt,s,i,x)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=hf,l=gf,c=vf,h=Il,u=uf,d=df,f=ff,g=mf,v=pf,m=e.indices;e.vertices;const p=this.from,y=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(t),Je.vectorToLocalFrame(n,t,_,u),Je.pointToLocalFrame(n,t,p,d),Je.pointToLocalFrame(n,t,y,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,u),u.normalize();const x=d.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let C=0,T=l.length;!this.result.shouldStop&&C!==T;C++){const R=l[C];e.getNormal(R,a),e.getVertex(m[R*3],gn),gn.vsub(d,h);const O=u.dot(a),S=a.dot(h)/O;if(S<0)continue;u.scale(S,Qt),Qt.vadd(d,Qt),e.getVertex(m[R*3+1],An),e.getVertex(m[R*3+2],Rn);const w=Qt.distanceSquared(d);!(Cn.pointInTriangle(Qt,An,gn,Rn)||Cn.pointInTriangle(Qt,gn,An,Rn))||w>x||(Je.vectorToWorldFrame(t,a,v),Je.pointToWorldFrame(n,t,Qt,g),this.reportIntersection(v,g,s,i,R))}l.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Cn.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case Cn.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case Cn.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Oi),n.vsub(t,Vs),e.vsub(t,Do);const s=Oi.dot(Oi),o=Oi.dot(Vs),a=Oi.dot(Do),l=Vs.dot(Vs),c=Vs.dot(Do);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}};Dn.CLOSEST=nl.CLOSEST;Dn.ANY=nl.ANY;Dn.ALL=nl.ALL;const Pl=new on,Io=[],Vs=new M,Do=new M,nf=new M,sf=new en,Qt=new M,gn=new M,An=new M,Rn=new M;new M;new _i;const Ll={faceList:[0]},xr=new M,rf=new Dn,of=[],af=new M,lf=new M,cf=new M;new M;new M;const Il=new M,hf=new M,uf=new M,df=new M,ff=new M,pf=new M,mf=new M;new on;const gf=[],vf=new Je,Oi=new M,Mr=new M;function yf(r,e,t){t.vsub(r,Oi);const n=Oi.dot(e);return e.scale(n,Mr),Mr.vadd(r,Mr),t.distanceTo(Mr)}class _f{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Dl{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class fr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=fr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Dl,this.jacobianElementB=new Dl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Nl),a.scale(h,Ul),n.invInertiaWorldSolve.vmult(o,Fl),i.invInertiaWorldSolve.vmult(l,Ol),e.multiplyVectors(Nl,Fl)+t.multiplyVectors(Ul,Ol)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(e.rotational,Sr),c+=Sr.dot(e.rotational),l.vmult(t.rotational,Sr),c+=Sr.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=xf;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}fr.idCounter=0;const Nl=new M,Ul=new M,Fl=new M,Ol=new M,Sr=new M,xf=new M;class Mf extends fr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Sf,c=bf,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=wf,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const y=p.dot(g),_=this.restitution+1,x=_*d.dot(p)-_*h.dot(p)+f.dot(c)-u.dot(l),C=this.computeGiMf();return-y*t-x*n-e*C}getImpactVelocityAlongNormal(){const e=Tf,t=Ef,n=Af,i=Rf,s=Cf;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Sf=new M,bf=new M,wf=new M,Tf=new M,Ef=new M,Af=new M,Rf=new M,Cf=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Bl extends fr{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Pf,o=Lf,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const Pf=new M,Lf=new M;class mo{constructor(e,t,n){n=_f.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=mo.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}mo.idCounter=0;let pu=class mu{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=mu.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};pu.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Dn;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;let If=class extends fe{constructor(){super({type:fe.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new M),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){zn.set(0,0,1),t.vmult(zn,zn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),zn.x===1?i.x=e.x:zn.x===-1&&(n.x=e.x),zn.y===1?i.y=e.y:zn.y===-1&&(n.y=e.y),zn.z===1?i.z=e.z:zn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}};const zn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new on;new M;new on;new M;new M;new M;new M;new M;new M;new M;new on;new M;new Je;new on;class Df{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Nf extends Df{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let u,d,f,g,v,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=Ff,y=Of,_=Uf;p.length=a,y.length=a,_.length=a;for(let x=0;x!==a;x++){const C=o[x];_[x]=0,y[x]=C.computeB(h),p[x]=1/C.computeC()}if(a!==0){for(let T=0;T!==c;T++){const R=l[T],O=R.vlambda,S=R.wlambda;O.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){const R=o[T];u=y[T],d=p[T],m=_[T],v=R.computeGWlambda(),f=d*(u-v-R.eps*m),m+f<R.minForce?f=R.minForce-m:m+f>R.maxForce&&(f=R.maxForce-m),_[T]+=f,g+=f>0?f:-f,R.addToWlambda(f)}if(g*g<s)break}for(let T=0;T!==c;T++){const R=l[T],O=R.velocity,S=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),O.vadd(R.vlambda,O),R.wlambda.vmul(R.angularFactor,R.wlambda),S.vadd(R.wlambda,S)}let x=o.length;const C=1/h;for(;x--;)o[x].multiplier=_[x]*C}return n}}const Uf=[],Ff=[],Of=[];class Bf{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class kf extends Bf{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const dt={sphereSphere:fe.types.SPHERE,spherePlane:fe.types.SPHERE|fe.types.PLANE,boxBox:fe.types.BOX|fe.types.BOX,sphereBox:fe.types.SPHERE|fe.types.BOX,planeBox:fe.types.PLANE|fe.types.BOX,convexConvex:fe.types.CONVEXPOLYHEDRON,sphereConvex:fe.types.SPHERE|fe.types.CONVEXPOLYHEDRON,planeConvex:fe.types.PLANE|fe.types.CONVEXPOLYHEDRON,boxConvex:fe.types.BOX|fe.types.CONVEXPOLYHEDRON,sphereHeightfield:fe.types.SPHERE|fe.types.HEIGHTFIELD,boxHeightfield:fe.types.BOX|fe.types.HEIGHTFIELD,convexHeightfield:fe.types.CONVEXPOLYHEDRON|fe.types.HEIGHTFIELD,sphereParticle:fe.types.PARTICLE|fe.types.SPHERE,planeParticle:fe.types.PLANE|fe.types.PARTICLE,boxParticle:fe.types.BOX|fe.types.PARTICLE,convexParticle:fe.types.PARTICLE|fe.types.CONVEXPOLYHEDRON,cylinderCylinder:fe.types.CYLINDER,sphereCylinder:fe.types.SPHERE|fe.types.CYLINDER,planeCylinder:fe.types.PLANE|fe.types.CYLINDER,boxCylinder:fe.types.BOX|fe.types.CYLINDER,convexCylinder:fe.types.CONVEXPOLYHEDRON|fe.types.CYLINDER,heightfieldCylinder:fe.types.HEIGHTFIELD|fe.types.CYLINDER,particleCylinder:fe.types.PARTICLE|fe.types.CYLINDER,sphereTrimesh:fe.types.SPHERE|fe.types.TRIMESH,planeTrimesh:fe.types.PLANE|fe.types.TRIMESH};class zf{get[dt.sphereSphere](){return this.sphereSphere}get[dt.spherePlane](){return this.spherePlane}get[dt.boxBox](){return this.boxBox}get[dt.sphereBox](){return this.sphereBox}get[dt.planeBox](){return this.planeBox}get[dt.convexConvex](){return this.convexConvex}get[dt.sphereConvex](){return this.sphereConvex}get[dt.planeConvex](){return this.planeConvex}get[dt.boxConvex](){return this.boxConvex}get[dt.sphereHeightfield](){return this.sphereHeightfield}get[dt.boxHeightfield](){return this.boxHeightfield}get[dt.convexHeightfield](){return this.convexHeightfield}get[dt.sphereParticle](){return this.sphereParticle}get[dt.planeParticle](){return this.planeParticle}get[dt.boxParticle](){return this.boxParticle}get[dt.convexParticle](){return this.convexParticle}get[dt.cylinderCylinder](){return this.convexConvex}get[dt.sphereCylinder](){return this.sphereConvex}get[dt.planeCylinder](){return this.planeConvex}get[dt.boxCylinder](){return this.boxConvex}get[dt.convexCylinder](){return this.convexConvex}get[dt.heightfieldCylinder](){return this.heightfieldCylinder}get[dt.particleCylinder](){return this.particleCylinder}get[dt.sphereTrimesh](){return this.sphereTrimesh}get[dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new kf,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Mf(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new Bl(n,i,d*f),m=g.length?g.pop():new Bl(n,i,d*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-d*f,v.maxForce=m.maxForce=d*f,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ei.setZero(),Qi.setZero(),Ji.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Ei.vadd(t.ni,Ei),Qi.vadd(t.ri,Qi),Ji.vadd(t.rj,Ji)):(Ei.vsub(t.ni,Ei),Qi.vadd(t.rj,Qi),Ji.vadd(t.ri,Ji));const o=1/e;Qi.scale(o,n.ri),Ji.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ei.normalize(),Ei.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Gf,c=Wf,h=Hf,u=Vf;for(let d=0,f=e.length;d!==f;d++){const g=e[d],v=t[d];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&ue.KINEMATIC&&v.type&ue.STATIC||g.type&ue.STATIC&&v.type&ue.KINEMATIC||g.type&ue.KINEMATIC&&v.type&ue.KINEMATIC;for(let y=0;y<g.shapes.length;y++){g.quaternion.mult(g.shapeOrientations[y],l),g.quaternion.vmult(g.shapeOffsets[y],h),h.vadd(g.position,h);const _=g.shapes[y];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],u),u.vadd(v.position,u);const C=v.shapes[x];if(!(_.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+C.boundingSphereRadius)continue;let T=null;_.material&&C.material&&(T=n.getContactMaterial(_.material,C.material)||null),this.currentContactMaterial=T||m||n.defaultContactMaterial;const R=_.type|C.type,O=this[R];if(O){let S=!1;_.type<C.type?S=O.call(this,_,C,h,u,l,c,g,v,_,C,p):S=O.call(this,C,_,u,h,c,l,v,g,_,C,p),S&&p&&(n.shapeOverlapKeeper.set(_.id,C.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(e,t,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,e,t,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,br),d.ni.scale(d.ni.dot(br),kl),br.vsub(kl,d.rj),-br.dot(d.ni)<=e.radius){if(u)return!0;const f=d.ri,g=d.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}sphereBox(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool,f=gp;n.vsub(i,wr),t.getSideNormals(f,o);const g=e.radius;let v=!1;const m=yp,p=_p,y=xp;let _=null,x=0,C=0,T=0,R=null;for(let N=0,Z=f.length;N!==Z&&v===!1;N++){const V=fp;V.copy(f[N]);const Y=V.length();V.normalize();const Q=wr.dot(V);if(Q<Y+g&&Q>0){const ee=pp,K=mp;ee.copy(f[(N+1)%3]),K.copy(f[(N+2)%3]);const $=ee.length(),J=K.length();ee.normalize(),K.normalize();const ce=wr.dot(ee),ve=wr.dot(K);if(ce<$&&ce>-$&&ve<J&&ve>-J){const ye=Math.abs(Q-Y-g);if((R===null||ye<R)&&(R=ye,C=ce,T=ve,_=Y,m.copy(V),p.copy(ee),y.copy(K),x++,u))return!0}}}if(x){v=!0;const N=this.createContactEquation(a,l,e,t,c,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(_,m),p.scale(C,p),m.vadd(p,m),y.scale(T,y),m.vadd(y,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let O=d.get();const S=vp;for(let N=0;N!==2&&!v;N++)for(let Z=0;Z!==2&&!v;Z++)for(let V=0;V!==2&&!v;V++)if(O.set(0,0,0),N?O.vadd(f[0],O):O.vsub(f[0],O),Z?O.vadd(f[1],O):O.vsub(f[1],O),V?O.vadd(f[2],O):O.vsub(f[2],O),i.vadd(O,S),S.vsub(n,S),S.lengthSquared()<g*g){if(u)return!0;v=!0;const Y=this.createContactEquation(a,l,e,t,c,h);Y.ri.copy(S),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(O),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}d.release(O),O=null;const w=d.get(),B=d.get(),H=d.get(),F=d.get(),I=d.get(),D=f.length;for(let N=0;N!==D&&!v;N++)for(let Z=0;Z!==D&&!v;Z++)if(N%3!==Z%3){f[Z].cross(f[N],w),w.normalize(),f[N].vadd(f[Z],B),H.copy(n),H.vsub(B,H),H.vsub(i,H);const V=H.dot(w);w.scale(V,F);let Y=0;for(;Y===N%3||Y===Z%3;)Y++;I.copy(n),I.vsub(F,I),I.vsub(B,I),I.vsub(i,I);const Q=Math.abs(V),ee=I.length();if(Q<f[Y].length()&&ee<g){if(u)return!0;v=!0;const K=this.createContactEquation(a,l,e,t,c,h);B.vadd(F,K.rj),K.rj.copy(K.rj),I.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(n,K.ri),K.ri.normalize(),K.ri.scale(g,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}d.release(w,B,H,F,I)}planeBox(e,t,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}convexConvex(e,t,n,i,s,o,a,l,c,h,u,d,f){const g=Up;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,d,f)){const v=[],m=Fp;e.clipAgainstHull(n,s,t,i,o,g,-100,100,v);let p=0;for(let y=0;y!==v.length;y++){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,h),x=_.ri,C=_.rj;g.negate(_.ni),v[y].normal.negate(m),m.scale(v[y].depth,m),v[y].point.vadd(m,x),C.copy(v[y].point),x.vsub(n,x),C.vsub(i,C),x.vadd(n,x),x.vsub(a.position,x),C.vadd(i,C),C.vsub(l.position,C),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,Mp);const f=t.faceNormals,g=t.faces,v=t.vertices,m=e.radius;let p=!1;for(let y=0;y!==v.length;y++){const _=v[y],x=Tp;o.vmult(_,x),i.vadd(x,x);const C=wp;if(x.vsub(n,C),C.lengthSquared()<m*m){if(u)return!0;p=!0;const T=this.createContactEquation(a,l,e,t,c,h);T.ri.copy(C),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),x.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let y=0,_=g.length;y!==_&&p===!1;y++){const x=f[y],C=g[y],T=Ep;o.vmult(x,T);const R=Ap;o.vmult(v[C[0]],R),R.vadd(i,R);const O=Rp;T.scale(-m,O),n.vadd(O,O);const S=Cp;O.vsub(R,S);const w=S.dot(T),B=Pp;if(n.vsub(R,B),w<0&&B.dot(T)>0){const H=[];for(let F=0,I=C.length;F!==I;F++){const D=d.get();o.vmult(v[C[F]],D),i.vadd(D,D),H.push(D)}if(dp(H,T,n)){if(u)return!0;p=!0;const F=this.createContactEquation(a,l,e,t,c,h);T.scale(-m,F.ri),T.negate(F.ni);const I=d.get();T.scale(-w,I);const D=d.get();T.scale(-m,D),n.vsub(i,F.rj),F.rj.vadd(D,F.rj),F.rj.vadd(I,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),d.release(I),d.release(D),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let N=0,Z=H.length;N!==Z;N++)d.release(H[N]);return}else for(let F=0;F!==C.length;F++){const I=d.get(),D=d.get();o.vmult(v[C[(F+1)%C.length]],I),o.vmult(v[C[(F+2)%C.length]],D),i.vadd(I,I),i.vadd(D,D);const N=Sp;D.vsub(I,N);const Z=bp;N.unit(Z);const V=d.get(),Y=d.get();n.vsub(I,Y);const Q=Y.dot(Z);Z.scale(Q,V),V.vadd(I,V);const ee=d.get();if(V.vsub(n,ee),Q>0&&Q*Q<N.lengthSquared()&&ee.lengthSquared()<m*m){if(u)return!0;const K=this.createContactEquation(a,l,e,t,c,h);V.vsub(i,K.rj),V.vsub(n,K.ni),K.ni.normalize(),K.ni.scale(m,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let $=0,J=H.length;$!==J;$++)d.release(H[$]);d.release(I),d.release(D),d.release(V),d.release(ee),d.release(Y);return}d.release(I),d.release(D),d.release(V),d.release(ee),d.release(Y)}for(let F=0,I=H.length;F!==I;F++)d.release(H[F])}}}planeConvex(e,t,n,i,s,o,a,l,c,h,u){const d=Lp,f=Ip;f.set(0,0,1),s.vmult(f,f);let g=0;const v=Dp;for(let m=0;m!==t.vertices.length;m++)if(d.copy(t.vertices[m]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,v),f.dot(v)<=0){if(u)return!0;const y=this.createContactEquation(a,l,e,t,c,h),_=Np;f.scale(f.dot(v),_),d.vsub(_,_),_.vsub(n,y.ri),y.ni.copy(f),d.vsub(i,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(i,y.rj),y.rj.vsub(l.position,y.rj),this.result.push(y),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}sphereHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=e.radius,g=t.elementSize,v=jp,m=Yp;Je.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,y=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(y<0||x<0||p>d.length||_>d[0].length)return;p<0&&(p=0),y<0&&(y=0),_<0&&(_=0),x<0&&(x=0),p>=d.length&&(p=d.length-1),y>=d.length&&(y=d.length-1),x>=d[0].length&&(x=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const C=[];t.getRectMinMax(p,_,y,x,C);const T=C[0],R=C[1];if(m.z-f>R||m.z+f<T)return;const O=this.result;for(let S=p;S<y;S++)for(let w=_;w<x;w++){const B=O.length;let H=!1;if(t.getConvexTrianglePillar(S,w,!1),Je.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.sphereConvex(e,t.pillarConvex,n,v,s,o,a,l,e,t,u)),u&&H||(t.getConvexTrianglePillar(S,w,!0),Je.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.sphereConvex(e,t.pillarConvex,n,v,s,o,a,l,e,t,u)),u&&H))return!0;if(O.length-B>2)return}}boxHeightfield(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=t.elementSize,g=e.boundingSphereRadius,v=qp,m=Xp,p=Wp;Je.pointToLocalFrame(i,o,n,p);let y=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,C=Math.ceil((p.y+g)/f)+1;if(_<0||C<0||y>d.length||x>d[0].length)return;y<0&&(y=0),_<0&&(_=0),x<0&&(x=0),C<0&&(C=0),y>=d.length&&(y=d.length-1),_>=d.length&&(_=d.length-1),C>=d[0].length&&(C=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const T=[];t.getRectMinMax(y,x,_,C,T);const R=T[0],O=T[1];if(!(p.z-g>O||p.z+g<R))for(let S=y;S<_;S++)for(let w=x;w<C;w++){let B=!1;if(t.getConvexTrianglePillar(S,w,!1),Je.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,v,s,o,a,l,null,null,u,m,null)),u&&B||(t.getConvexTrianglePillar(S,w,!0),Je.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,v,s,o,a,l,null,null,u,m,null)),u&&B))return!0}}sphereParticle(e,t,n,i,s,o,a,l,c,h,u){const d=zp;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const g=this.createContactEquation(l,a,t,e,c,h);d.normalize(),g.rj.copy(d),g.rj.scale(e.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,l,c,h,u){const d=Op;d.set(0,0,1),a.quaternion.vmult(d,d);const f=Bp;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(l,a,t,e,c,h);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=kp;d.scale(d.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexParticle(e,t,n,i,s,o,a,l,c,h,u){let d=-1;const f=Vp,g=Gp;let v=null;const m=Hp;if(m.copy(i),m.vsub(n,m),s.conjugate(zl),zl.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,y=e.faces.length;p!==y;p++){const _=[e.worldVertices[e.faces[p][0]]],x=e.worldFaceNormals[p];i.vsub(_[0],Hl);const C=-x.dot(Hl);if(v===null||Math.abs(C)<Math.abs(v)){if(u)return!0;v=C,d=p,f.copy(x)}}if(d!==-1){const p=this.createContactEquation(l,a,t,e,c,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const y=p.ri,_=p.rj;y.vadd(i,y),y.vsub(l.position,y),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(t,e,i,n,o,s,l,a,c,h,u)}particleCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexParticle(t,e,i,n,o,s,l,a,c,h,u)}sphereTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=Qf,f=Jf,g=ep,v=tp,m=np,p=ip,y=ap,_=Zf,x=$f,C=lp;Je.pointToLocalFrame(i,o,n,m);const T=e.radius;y.lowerBound.set(m.x-T,m.y-T,m.z-T),y.upperBound.set(m.x+T,m.y+T,m.z+T),t.getTrianglesInAABB(y,C);const R=Kf,O=e.radius*e.radius;for(let F=0;F<C.length;F++)for(let I=0;I<3;I++)if(t.getVertex(t.indices[C[F]*3+I],R),R.vsub(m,x),x.lengthSquared()<=O){if(_.copy(R),Je.pointToWorldFrame(i,o,_,R),R.vsub(n,x),u)return!0;let D=this.createContactEquation(a,l,e,t,c,h);D.ni.copy(x),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(R),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let F=0;F<C.length;F++)for(let I=0;I<3;I++){t.getVertex(t.indices[C[F]*3+I],d),t.getVertex(t.indices[C[F]*3+(I+1)%3],f),f.vsub(d,g),m.vsub(f,p);const D=p.dot(g);m.vsub(d,p);let N=p.dot(g);if(N>0&&D<0&&(m.vsub(d,p),v.copy(g),v.normalize(),N=p.dot(v),v.scale(N,p),p.vadd(d,p),p.distanceTo(m)<e.radius)){if(u)return!0;const V=this.createContactEquation(a,l,e,t,c,h);p.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),Je.pointToWorldFrame(i,o,p,p),p.vsub(l.position,V.rj),Je.vectorToWorldFrame(o,V.ni,V.ni),Je.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const S=sp,w=rp,B=op,H=jf;for(let F=0,I=C.length;F!==I;F++){t.getTriangleVertices(C[F],S,w,B),t.getNormal(C[F],H),m.vsub(S,p);let D=p.dot(H);if(H.scale(D,p),m.vsub(p,p),D=p.distanceTo(m),Dn.pointInTriangle(p,S,w,B)&&D<e.radius){if(u)return!0;let N=this.createContactEquation(a,l,e,t,c,h);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),Je.pointToWorldFrame(i,o,p,p),p.vsub(l.position,N.rj),Je.vectorToWorldFrame(o,N.ni,N.ni),Je.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}C.length=0}planeTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=new M,f=qf;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,d);const v=new M;v.copy(d),Je.pointToWorldFrame(i,o,v,d);const m=Xf;if(d.vsub(n,m),f.dot(m)<=0){if(u)return!0;const y=this.createContactEquation(a,l,e,t,c,h);y.ni.copy(f);const _=Yf;f.scale(m.dot(f),_),d.vsub(_,_),y.ri.copy(_),y.ri.vsub(a.position,y.ri),y.rj.copy(d),y.rj.vsub(l.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}}const Ei=new M,Qi=new M,Ji=new M,Hf=new M,Vf=new M,Gf=new en,Wf=new en,qf=new M,Xf=new M,Yf=new M,jf=new M,$f=new M;new M;const Kf=new M,Zf=new M,Qf=new M,Jf=new M,ep=new M,tp=new M,np=new M,ip=new M,sp=new M,rp=new M,op=new M,ap=new on,lp=[],br=new M,kl=new M,cp=new M,hp=new M,up=new M;function dp(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=cp;r[(s+1)%i].vsub(o,a);const l=hp;a.cross(e,l);const c=up;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const wr=new M,fp=new M,pp=new M,mp=new M,gp=[new M,new M,new M,new M,new M,new M],vp=new M,yp=new M,_p=new M,xp=new M,Mp=new M,Sp=new M,bp=new M,wp=new M,Tp=new M,Ep=new M,Ap=new M,Rp=new M,Cp=new M,Pp=new M;new M;new M;const Lp=new M,Ip=new M,Dp=new M,Np=new M,Up=new M,Fp=new M,Op=new M,Bp=new M,kp=new M,zp=new M,zl=new en,Hp=new M;new M;const Vp=new M,Hl=new M,Gp=new M,Wp=new M,qp=new M,Xp=[0],Yp=new M,jp=new M;class Vl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Gl(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Gl(t,h)}}}function Gl(r,e){r.push((e&4294901760)>>16,e&65535)}const No=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class $p{constructor(){this.data={keys:[]}}get(e,t){const n=No(e,t);return this.data[n]}set(e,t,n){const i=No(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=No(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Kp extends ou{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new tf,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Nf,this.constraints=[],this.narrowphase=new zf(this),this.collisionMatrix=new Rl,this.collisionMatrixPrevious=new Rl,this.bodyOverlapKeeper=new Vl,this.shapeOverlapKeeper=new Vl,this.contactmaterials=[],this.contactMaterialTable=new $p,this.defaultMaterial=new pu("default"),this.defaultContactMaterial=new mo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof _i?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Dn.ALL,n.from=e,n.to=t,n.callback=i,Uo.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Dn.ANY,n.from=e,n.to=t,n.result=i,Uo.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Dn.CLOSEST,n.from=e,n.to=t,n.result=i,Uo.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ue&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Tt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Tt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Tt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=tm,i=nm,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=ue.DYNAMIC;let d=-1/0;const f=this.constraints,g=em;l.length();const v=l.x,m=l.y,p=l.z;let y=0;for(c&&(d=Tt.now()),y=0;y!==s;y++){const F=o[y];if(F.type===u){const I=F.force,D=F.mass;I.x+=D*v,I.y+=D*m,I.z+=D*p}}for(let F=0,I=this.subsystems.length;F!==I;F++)this.subsystems[F].update();c&&(d=Tt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Tt.now()-d);let _=f.length;for(y=0;y!==_;y++){const F=f[y];if(!F.collideConnected)for(let I=n.length-1;I>=0;I-=1)(F.bodyA===n[I]&&F.bodyB===i[I]||F.bodyB===n[I]&&F.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(d=Tt.now());const x=Jp,C=t.length;for(y=0;y!==C;y++)x.push(t[y]);t.length=0;const T=this.frictionEquations.length;for(y=0;y!==T;y++)g.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,x,this.frictionEquations,g),c&&(h.narrowphase=Tt.now()-d),c&&(d=Tt.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);const R=t.length;for(let F=0;F!==R;F++){const I=t[F],D=I.bi,N=I.bj,Z=I.si,V=I.sj;let Y;if(D.material&&N.material?Y=this.getContactMaterial(D.material,N.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,D.material&&N.material&&(D.material.friction>=0&&N.material.friction>=0&&D.material.friction*N.material.friction,D.material.restitution>=0&&N.material.restitution>=0&&(I.restitution=D.material.restitution*N.material.restitution)),a.addEquation(I),D.allowSleep&&D.type===ue.DYNAMIC&&D.sleepState===ue.SLEEPING&&N.sleepState===ue.AWAKE&&N.type!==ue.STATIC){const Q=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ee=N.sleepSpeedLimit**2;Q>=ee*2&&(D.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ue.DYNAMIC&&N.sleepState===ue.SLEEPING&&D.sleepState===ue.AWAKE&&D.type!==ue.STATIC){const Q=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),ee=D.sleepSpeedLimit**2;Q>=ee*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,N,!0),this.collisionMatrixPrevious.get(D,N)||(Gs.body=N,Gs.contact=I,D.dispatchEvent(Gs),Gs.body=D,N.dispatchEvent(Gs)),this.bodyOverlapKeeper.set(D.id,N.id),this.shapeOverlapKeeper.set(Z.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Tt.now()-d,d=Tt.now()),y=0;y!==s;y++){const F=o[y];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(_=f.length,y=0;y!==_;y++){const F=f[y];F.update();for(let I=0,D=F.equations.length;I!==D;I++){const N=F.equations[I];a.addEquation(N)}}a.solve(e,this),c&&(h.solve=Tt.now()-d),a.removeAllEquations();const O=Math.pow;for(y=0;y!==s;y++){const F=o[y];if(F.type&u){const I=O(1-F.linearDamping,e),D=F.velocity;D.scale(I,D);const N=F.angularVelocity;if(N){const Z=O(1-F.angularDamping,e);N.scale(Z,N)}}}this.dispatchEvent(Qp),c&&(d=Tt.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(y=0;y!==s;y++)o[y].integrate(e,w,B);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Tt.now()-d),this.stepnumber+=1,this.dispatchEvent(Zp);let H=!0;if(this.allowSleep)for(H=!1,y=0;y!==s;y++){const F=o[y];F.sleepTick(this.time),F.sleepState!==ue.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Hn,Vn),e){for(let s=0,o=Hn.length;s<o;s+=2)Ws.bodyA=this.getBodyById(Hn[s]),Ws.bodyB=this.getBodyById(Hn[s+1]),this.dispatchEvent(Ws);Ws.bodyA=Ws.bodyB=null}if(t){for(let s=0,o=Vn.length;s<o;s+=2)qs.bodyA=this.getBodyById(Vn[s]),qs.bodyB=this.getBodyById(Vn[s+1]),this.dispatchEvent(qs);qs.bodyA=qs.bodyB=null}Hn.length=Vn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Hn,Vn),n){for(let s=0,o=Hn.length;s<o;s+=2){const a=this.getShapeById(Hn[s]),l=this.getShapeById(Hn[s+1]);Gn.shapeA=a,Gn.shapeB=l,a&&(Gn.bodyA=a.body),l&&(Gn.bodyB=l.body),this.dispatchEvent(Gn)}Gn.bodyA=Gn.bodyB=Gn.shapeA=Gn.shapeB=null}if(i){for(let s=0,o=Vn.length;s<o;s+=2){const a=this.getShapeById(Vn[s]),l=this.getShapeById(Vn[s+1]);Wn.shapeA=a,Wn.shapeB=l,a&&(Wn.bodyA=a.body),l&&(Wn.bodyB=l.body),this.dispatchEvent(Wn)}Wn.bodyA=Wn.bodyB=Wn.shapeA=Wn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new on;const Uo=new Dn,Tt=globalThis.performance||{};if(!Tt.now){let r=Date.now();Tt.timing&&Tt.timing.navigationStart&&(r=Tt.timing.navigationStart),Tt.now=()=>Date.now()-r}new M;const Zp={type:"postStep"},Qp={type:"preStep"},Gs={type:ue.COLLIDE_EVENT_NAME,body:null,contact:null},Jp=[],em=[],tm=[],nm=[],Hn=[],Vn=[],Ws={type:"beginContact",bodyA:null,bodyB:null},qs={type:"endContact",bodyA:null,bodyB:null},Gn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Wn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="160",im=0,Wl=1,sm=2,gu=1,rm=2,Zn=3,ii=0,Zt=1,tn=2,Nn=0,xs=1,Da=2,ql=3,Xl=4,om=5,Bi=100,am=101,lm=102,Yl=103,jl=104,cm=200,hm=201,um=202,dm=203,Na=204,Ua=205,fm=206,pm=207,mm=208,gm=209,vm=210,ym=211,_m=212,xm=213,Mm=214,Sm=0,bm=1,wm=2,so=3,Tm=4,Em=5,Am=6,Rm=7,vu=0,Cm=1,Pm=2,xi=0,yu=1,_u=2,xu=3,sl=4,Lm=5,Mu=6,$l="attached",Im="detached",Su=300,ws=301,Ts=302,Fa=303,Oa=304,go=306,mn=1e3,dn=1001,ro=1002,wt=1003,Ba=1004,to=1005,Jt=1006,bu=1007,Si=1008,Mi=1009,Dm=1010,Nm=1011,rl=1012,wu=1013,vi=1014,Jn=1015,Un=1016,Tu=1017,Eu=1018,zi=1020,Um=1021,fn=1023,Fm=1024,Om=1025,Hi=1026,Es=1027,Bm=1028,Au=1029,km=1030,Ru=1031,Cu=1033,Fo=33776,Oo=33777,Bo=33778,ko=33779,Kl=35840,Zl=35841,Ql=35842,Jl=35843,Pu=36196,ec=37492,tc=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,zo=36492,gc=36494,vc=36495,zm=36283,yc=36284,_c=36285,xc=36286,cr=2300,As=2301,Ho=2302,Mc=2400,Sc=2401,bc=2402,Hm=2500,Vm=0,Lu=1,ka=2,Iu=3e3,Vi=3001,Gm=3200,Du=3201,Nu=0,Wm=1,Dt="",ut="srgb",Ut="srgb-linear",ol="display-p3",vo="display-p3-linear",oo="linear",ht="srgb",ao="rec709",lo="p3",es=7680,wc=519,qm=512,Xm=513,Ym=514,Uu=515,jm=516,$m=517,Km=518,Zm=519,za=35044,Qm=35048,Tc="300 es",Ha=1035,ei=2e3,co=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ec=1234567;const sr=Math.PI/180,Rs=180/Math.PI;function Sn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function zt(r,e,t){return Math.max(e,Math.min(t,r))}function al(r,e){return(r%e+e)%e}function Jm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function eg(r,e,t){return r!==e?(t-r)/(e-r):0}function rr(r,e,t){return(1-t)*r+t*e}function tg(r,e,t,n){return rr(r,e,1-Math.exp(-t*n))}function ng(r,e=1){return e-Math.abs(al(r,e*2)-e)}function ig(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function sg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function rg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function og(r,e){return r+Math.random()*(e-r)}function ag(r){return r*(.5-Math.random())}function lg(r){r!==void 0&&(Ec=r);let e=Ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cg(r){return r*sr}function hg(r){return r*Rs}function Va(r){return(r&r-1)===0&&r!==0}function ug(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const z={DEG2RAD:sr,RAD2DEG:Rs,generateUUID:Sn,clamp:zt,euclideanModulo:al,mapLinear:Jm,inverseLerp:eg,lerp:rr,damp:tg,pingpong:ng,smoothstep:ig,smootherstep:sg,randInt:rg,randFloat:og,randFloatSpread:ag,seededRandom:lg,degToRad:cg,radToDeg:hg,isPowerOfTwo:Va,ceilPowerOfTwo:ug,floorPowerOfTwo:ho,setQuaternionFromProperEuler:dg,normalize:rt,denormalize:Ln};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],_=i[4],x=i[7],C=i[2],T=i[5],R=i[8];return s[0]=o*v+a*y+l*C,s[3]=o*m+a*_+l*T,s[6]=o*p+a*x+l*R,s[1]=c*v+h*y+u*C,s[4]=c*m+h*_+u*T,s[7]=c*p+h*x+u*R,s[2]=d*v+f*y+g*C,s[5]=d*m+f*_+g*T,s[8]=d*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new qe;function Fu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fg(){const r=hr("canvas");return r.style.display="block",r}const Ac={};function or(r){r in Ac||(Ac[r]=!0,console.warn(r))}const Rc=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cc=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[Ut]:{transfer:oo,primaries:ao,toReference:r=>r,fromReference:r=>r},[ut]:{transfer:ht,primaries:ao,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vo]:{transfer:oo,primaries:lo,toReference:r=>r.applyMatrix3(Cc),fromReference:r=>r.applyMatrix3(Rc)},[ol]:{transfer:ht,primaries:lo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Cc),fromReference:r=>r.applyMatrix3(Rc).convertLinearToSRGB()}},pg=new Set([Ut,vo]),et={enabled:!0,_workingColorSpace:Ut,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!pg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Tr[e].toReference,i=Tr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Tr[r].primaries},getTransfer:function(r){return r===Dt?oo:Tr[r].transfer}};function Ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ts;class Ou{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=hr("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mg=0;class Bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wo(i[o].image)):s.push(Wo(i[o]))}else s=Wo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ou.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gg=0;class Nt extends Ns{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=dn,i=dn,s=Jt,o=Si,a=fn,l=Mi,c=Nt.DEFAULT_ANISOTROPY,h=Dt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Sn(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vi?ut:Dt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Vi:Iu}set encoding(e){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vi?ut:Dt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Su;Nt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,C=(p+1)/2,T=(h+d)/4,R=(u+v)/4,O=(g+m)/4;return _>x&&_>C?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=R/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=O/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=R/s,i=O/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vg extends Ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vi?ut:Dt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends vg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ku extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yg extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,p*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new E,Pc=new bi;class bn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Ar.subVectors(this.max,Xs),ns.subVectors(e.a,Xs),is.subVectors(e.b,Xs),ss.subVectors(e.c,Xs),li.subVectors(is,ns),ci.subVectors(ss,is),Ai.subVectors(ns,ss);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ai.z,Ai.y,li.z,0,-li.x,ci.z,0,-ci.x,Ai.z,0,-Ai.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ai.y,Ai.x,0];return!Xo(t,ns,is,ss,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,ns,is,ss,Ar))?!1:(Rr.crossVectors(li,ci),t=[Rr.x,Rr.y,Rr.z],Xo(t,ns,is,ss,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new E,new E,new E,new E,new E,new E,new E,new E],vn=new E,Er=new bn,ns=new E,is=new E,ss=new E,li=new E,ci=new E,Ai=new E,Xs=new E,Ar=new E,Rr=new E,Ri=new E;function Xo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ri.fromArray(r,s);const a=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _g=new bn,Ys=new E,Yo=new E;class On{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_g.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Yo)),this.expandByPoint(Ys.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new E,jo=new E,Cr=new E,hi=new E,$o=new E,Pr=new E,Ko=new E;class yo{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=hi.dot(this.direction),l=-hi.dot(Cr),c=hi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(jo).addScaledVector(Cr,d),f}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,s){$o.subVectors(t,e),Pr.subVectors(n,e),Ko.crossVectors($o,Pr);let o=this.direction.dot(Ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Pr.crossVectors(hi,Pr));if(l<0)return null;const c=a*this.direction.dot($o.cross(hi));if(c<0||l+c>o)return null;const h=-a*hi.dot(Ko);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,g,v,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,v,m)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xg,e,Mg)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ui.crossVectors(n,sn),ui.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ui.crossVectors(n,sn)),ui.normalize(),Lr.crossVectors(sn,ui),i[0]=ui.x,i[4]=Lr.x,i[8]=sn.x,i[1]=ui.y,i[5]=Lr.y,i[9]=sn.y,i[2]=ui.z,i[6]=Lr.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],x=n[11],C=n[15],T=i[0],R=i[4],O=i[8],S=i[12],w=i[1],B=i[5],H=i[9],F=i[13],I=i[2],D=i[6],N=i[10],Z=i[14],V=i[3],Y=i[7],Q=i[11],ee=i[15];return s[0]=o*T+a*w+l*I+c*V,s[4]=o*R+a*B+l*D+c*Y,s[8]=o*O+a*H+l*N+c*Q,s[12]=o*S+a*F+l*Z+c*ee,s[1]=h*T+u*w+d*I+f*V,s[5]=h*R+u*B+d*D+f*Y,s[9]=h*O+u*H+d*N+f*Q,s[13]=h*S+u*F+d*Z+f*ee,s[2]=g*T+v*w+m*I+p*V,s[6]=g*R+v*B+m*D+p*Y,s[10]=g*O+v*H+m*N+p*Q,s[14]=g*S+v*F+m*Z+p*ee,s[3]=y*T+_*w+x*I+C*V,s[7]=y*R+_*B+x*D+C*Y,s[11]=y*O+_*H+x*N+C*Q,s[15]=y*S+_*F+x*Z+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,_=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,C=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,T=t*y+n*_+i*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(v*d*s-u*m*s-v*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=_*R,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=x*R,e[9]=(g*u*s-h*v*s-g*n*f+t*v*f+h*n*p-t*u*p)*R,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*p+t*a*p)*R,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=C*R,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*m+t*u*m)*R,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,v=o*h,m=o*u,p=a*u,y=l*c,_=l*h,x=l*u,C=n.x,T=n.y,R=n.z;return i[0]=(1-(v+p))*C,i[1]=(f+x)*C,i[2]=(g-_)*C,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+_)*R,i[9]=(m-y)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=rs.set(i[0],i[1],i[2]).length();const o=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/s,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ei){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===ei)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===co)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ei){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,f=(n+i)*h;let g,v;if(a===ei)g=(o+s)*u,v=-2*u;else if(a===co)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new E,yn=new Xe,xg=new E(0,0,0),Mg=new E(1,1,1),ui=new E,Lr=new E,sn=new E,Lc=new Xe,Ic=new bi;class _o{constructor(e=0,t=0,n=0,i=_o.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_o.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sg=0;const Dc=new E,os=new bi,Yn=new Xe,Ir=new E,js=new E,bg=new E,wg=new bi,Nc=new E(1,0,0),Uc=new E(0,1,0),Fc=new E(0,0,1),Tg={type:"added"},Eg={type:"removed"};class $e extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const e=new E,t=new _o,n=new bi,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new qe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(js,Ir,this.up):Yn.lookAt(Ir,js,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Yn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new E(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new E,jn=new E,Zo=new E,$n=new E,as=new E,ls=new E,Oc=new E,Qo=new E,Jo=new E,ea=new E;let Dr=!1;class xn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),jn.subVectors(n,t),Zo.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(jn),l=_n.dot(Zo),c=jn.dot(jn),h=jn.dot(Zo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,n,i,s,o,a,l){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),jn.subVectors(e,t),_n.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),_n.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;as.subVectors(i,n),ls.subVectors(s,n),Qo.subVectors(e,n);const l=as.dot(Qo),c=ls.dot(Qo);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,i);const h=as.dot(Jo),u=ls.dot(Jo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(as,o);ea.subVectors(e,s);const f=as.dot(ea),g=ls.dot(ea);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ls,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Oc.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Oc,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=al(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ta(o,s,e+1/3),this.g=ta(o,s,e),this.b=ta(o,s,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=Hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return et.fromWorkingColorSpace(kt.copy(this),e),Math.round(zt(kt.r*255,0,255))*65536+Math.round(zt(kt.g*255,0,255))*256+Math.round(zt(kt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=ut){et.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Nr);const n=rr(di.h,Nr.h,t),i=rr(di.s,Nr.s,t),s=rr(di.l,Nr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new ge;ge.NAMES=Hu;let Ag=0;class Fn extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=xs,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Ua,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ft extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new E,Ur=new be;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),e}}class Vu extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gu extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rg=0;const ln=new Xe,na=new $e,cs=new E,rn=new bn,$s=new bn,Lt=new E;class Gt extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?Gu:Vu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(rn.min,$s.min),rn.expandByPoint(Lt),Lt.addVectors(rn.max,$s.max),rn.expandByPoint(Lt)):(rn.expandByPoint($s.min),rn.expandByPoint($s.max))}rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Lt.add(cs)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new E,h[w]=new E;const u=new E,d=new E,f=new E,g=new be,v=new be,m=new be,p=new E,y=new E;function _(w,B,H){u.fromArray(i,w*3),d.fromArray(i,B*3),f.fromArray(i,H*3),g.fromArray(o,w*2),v.fromArray(o,B*2),m.fromArray(o,H*2),d.sub(u),f.sub(u),v.sub(g),m.sub(g);const F=1/(v.x*m.y-m.x*v.y);isFinite(F)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(F),y.copy(f).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(F),c[w].add(p),c[B].add(p),c[H].add(p),h[w].add(y),h[B].add(y),h[H].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let w=0,B=x.length;w<B;++w){const H=x[w],F=H.start,I=H.count;for(let D=F,N=F+I;D<N;D+=3)_(n[D+0],n[D+1],n[D+2])}const C=new E,T=new E,R=new E,O=new E;function S(w){R.fromArray(s,w*3),O.copy(R);const B=c[w];C.copy(B),C.sub(R.multiplyScalar(R.dot(B))).normalize(),T.crossVectors(O,B);const F=T.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=F}for(let w=0,B=x.length;w<B;++w){const H=x[w],F=H.start,I=H.count;for(let D=F,N=F+I;D<N;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new Xe,Ci=new yo,Fr=new On,kc=new E,hs=new E,us=new E,ds=new E,ia=new E,Or=new E,Br=new be,kr=new be,zr=new be,zc=new E,Hc=new E,Vc=new E,Hr=new E,Vr=new E;class Ve extends $e{constructor(e=new Gt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ia.fromBufferAttribute(u,e),o?Or.addScaledVector(ia,h):Or.addScaledVector(ia.sub(t),h))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Fr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Fr,kc)===null||Ci.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const T=a.getX(x),R=a.getX(x+1),O=a.getX(x+2);i=Gr(this,p,e,n,c,h,u,T,R,O),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);i=Gr(this,o,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const T=x,R=x+1,O=x+2;i=Gr(this,p,e,n,c,h,u,T,R,O),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,x=m+2;i=Gr(this,o,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Cg(r,e,t,n,i,s,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ii,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:r}}function Gr(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,hs),r.getVertexPosition(l,us),r.getVertexPosition(c,ds);const h=Cg(r,e,t,n,hs,us,ds,Hr);if(h){i&&(Br.fromBufferAttribute(i,a),kr.fromBufferAttribute(i,l),zr.fromBufferAttribute(i,c),h.uv=xn.getInterpolation(Hr,hs,us,ds,Br,kr,zr,new be)),s&&(Br.fromBufferAttribute(s,a),kr.fromBufferAttribute(s,l),zr.fromBufferAttribute(s,c),h.uv1=xn.getInterpolation(Hr,hs,us,ds,Br,kr,zr,new be),h.uv2=h.uv1),o&&(zc.fromBufferAttribute(o,a),Hc.fromBufferAttribute(o,l),Vc.fromBufferAttribute(o,c),h.normal=xn.getInterpolation(Hr,hs,us,ds,zc,Hc,Vc,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new E,materialIndex:0};xn.getNormal(hs,us,ds,u.normal),h.face=u}return h}class $t extends Gt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(v,m,p,y,_,x,C,T,R,O,S){const w=x/R,B=C/O,H=x/2,F=C/2,I=T/2,D=R+1,N=O+1;let Z=0,V=0;const Y=new E;for(let Q=0;Q<N;Q++){const ee=Q*B-F;for(let K=0;K<D;K++){const $=K*w-H;Y[v]=$*y,Y[m]=ee*_,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(K/R),u.push(1-Q/O),Z+=1}}for(let Q=0;Q<O;Q++)for(let ee=0;ee<R;ee++){const K=d+ee+D*Q,$=d+ee+D*(Q+1),J=d+(ee+1)+D*(Q+1),ce=d+(ee+1)+D*Q;l.push(K,$,ce),l.push($,J,ce),V+=6}a.addGroup(f,V,S),f+=V,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=Cs(r[t]);for(const i in n)e[i]=n[i]}return e}function Pg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wu(r){return r.getRenderTarget()===null?r.outputColorSpace:et.workingColorSpace}const Yi={clone:Cs,merge:jt};var Lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qu extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends qu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ps=1;class Dg extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(fs,ps,e,t);i.layers=this.layers,this.add(i);const s=new Kt(fs,ps,e,t);s.layers=this.layers,this.add(s);const o=new Kt(fs,ps,e,t);o.layers=this.layers,this.add(o);const a=new Kt(fs,ps,e,t);a.layers=this.layers,this.add(a);const l=new Kt(fs,ps,e,t);l.layers=this.layers,this.add(l);const c=new Kt(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xu extends Nt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ng extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vi?ut:Dt),this.texture=new Xu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Nn});s.uniforms.tEquirect.value=t;const o=new Ve(i,s),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Jt),new Dg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const sa=new E,Ug=new E,Fg=new qe;class Ni{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sa.subVectors(n,t).cross(Ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fg.getNormalMatrix(e),i=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new On,Wr=new E;class ll{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+y).normalize(),n[3].setComponents(l-o,d-h,m-g,x-y).normalize(),n[4].setComponents(l-a,d-u,m-v,x-_).normalize(),t===ei)n[5].setComponents(l+a,d+u,m+v,x+_).normalize();else if(t===co)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wr.x=i.normal.x>0?e.max.x:e.min.x,Wr.y=i.normal.y>0?e.max.y:e.min.y,Wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Og(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),f.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];t?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Gi extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let _=0;_<c;_++){const x=_*u-s;g.push(x,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const _=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),T=y+1+c*p;f.push(_,x,T),f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
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
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,g0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,B0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,J0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
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
#endif`,av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lv=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
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
}`,Wv=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,qv=`#define DISTANCE
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
}`,Xv=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zv=`#include <common>
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
}`,Qv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jv=`#define LAMBERT
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
}`,ey=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ty=`#define MATCAP
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
}`,ny=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,iy=`#define NORMAL
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
}`,sy=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ry=`#define PHONG
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
}`,oy=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ay=`#define STANDARD
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
}`,ly=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cy=`#define TOON
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
}`,hy=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uy=`uniform float size;
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
}`,dy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,py=`uniform vec3 color;
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
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,gy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Be={alphahash_fragment:Bg,alphahash_pars_fragment:kg,alphamap_fragment:zg,alphamap_pars_fragment:Hg,alphatest_fragment:Vg,alphatest_pars_fragment:Gg,aomap_fragment:Wg,aomap_pars_fragment:qg,batching_pars_vertex:Xg,batching_vertex:Yg,begin_vertex:jg,beginnormal_vertex:$g,bsdfs:Kg,iridescence_fragment:Zg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:h0,displacementmap_vertex:u0,emissivemap_fragment:d0,emissivemap_pars_fragment:f0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:v0,envmap_pars_fragment:y0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:L0,envmap_vertex:x0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:b0,fog_pars_fragment:w0,gradientmap_pars_fragment:T0,lightmap_fragment:E0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:I0,lights_toon_pars_fragment:D0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:k0,lights_fragment_end:z0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:W0,map_fragment:q0,map_pars_fragment:X0,map_particle_fragment:Y0,map_particle_pars_fragment:j0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:K0,morphcolor_vertex:Z0,morphnormal_vertex:Q0,morphtarget_pars_vertex:J0,morphtarget_vertex:ev,normal_fragment_begin:tv,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:sv,normal_vertex:rv,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:av,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:hv,opaque_fragment:uv,packing:dv,premultiplied_alpha_fragment:fv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:gv,roughnessmap_fragment:vv,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:_v,shadowmap_pars_vertex:xv,shadowmap_vertex:Mv,shadowmask_pars_fragment:Sv,skinbase_vertex:bv,skinning_pars_vertex:wv,skinning_vertex:Tv,skinnormal_vertex:Ev,specularmap_fragment:Av,specularmap_pars_fragment:Rv,tonemapping_fragment:Cv,tonemapping_pars_fragment:Pv,transmission_fragment:Lv,transmission_pars_fragment:Iv,uv_pars_fragment:Dv,uv_pars_vertex:Nv,uv_vertex:Uv,worldpos_vertex:Fv,background_vert:Ov,background_frag:Bv,backgroundCube_vert:kv,backgroundCube_frag:zv,cube_vert:Hv,cube_frag:Vv,depth_vert:Gv,depth_frag:Wv,distanceRGBA_vert:qv,distanceRGBA_frag:Xv,equirect_vert:Yv,equirect_frag:jv,linedashed_vert:$v,linedashed_frag:Kv,meshbasic_vert:Zv,meshbasic_frag:Qv,meshlambert_vert:Jv,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:ry,meshphong_frag:oy,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:hy,points_vert:uy,points_frag:dy,shadow_vert:fy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},oe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Pn={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Pn.physical={uniforms:jt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const qr={r:0,b:0,g:0};function vy(r,e,t,n,i,s,o){const a=new ge(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),y=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===go)?(h===void 0&&(h=new Ve(new $t(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Cs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=et.getTransfer(_.colorSpace)!==ht,(u!==_||d!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ve(new Gi(2,2),new Ht({name:"BackgroundMaterial",uniforms:Cs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=et.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(qr,Wu(r)),n.buffers.color.setClear(qr.r,qr.g,qr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function yy(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(I,D,N,Z,V){let Y=!1;if(o){const Q=v(Z,N,D);c!==Q&&(c=Q,f(c.object)),Y=p(I,Z,N,V),Y&&y(I,Z,N,V)}else{const Q=D.wireframe===!0;(c.geometry!==Z.id||c.program!==N.id||c.wireframe!==Q)&&(c.geometry=Z.id,c.program=N.id,c.wireframe=Q,Y=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,O(I,D,N,Z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,D,N){const Z=N.wireframe===!0;let V=a[I.id];V===void 0&&(V={},a[I.id]=V);let Y=V[D.id];Y===void 0&&(Y={},V[D.id]=Y);let Q=Y[Z];return Q===void 0&&(Q=m(d()),Y[Z]=Q),Q}function m(I){const D=[],N=[],Z=[];for(let V=0;V<i;V++)D[V]=0,N[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:Z,object:I,attributes:{},index:null}}function p(I,D,N,Z){const V=c.attributes,Y=D.attributes;let Q=0;const ee=N.getAttributes();for(const K in ee)if(ee[K].location>=0){const J=V[K];let ce=Y[K];if(ce===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Z}function y(I,D,N,Z){const V={},Y=D.attributes;let Q=0;const ee=N.getAttributes();for(const K in ee)if(ee[K].location>=0){let J=Y[K];J===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),V[K]=ce,Q++}c.attributes=V,c.attributesNum=Q,c.index=Z}function _(){const I=c.newAttributes;for(let D=0,N=I.length;D<N;D++)I[D]=0}function x(I){C(I,0)}function C(I,D){const N=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;N[I]=1,Z[I]===0&&(r.enableVertexAttribArray(I),Z[I]=1),V[I]!==D&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),V[I]=D)}function T(){const I=c.newAttributes,D=c.enabledAttributes;for(let N=0,Z=D.length;N<Z;N++)D[N]!==I[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function R(I,D,N,Z,V,Y,Q){Q===!0?r.vertexAttribIPointer(I,D,N,V,Y):r.vertexAttribPointer(I,D,N,Z,V,Y)}function O(I,D,N,Z){if(n.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=Z.attributes,Y=N.getAttributes(),Q=D.defaultAttributeValues;for(const ee in Y){const K=Y[ee];if(K.location>=0){let $=V[ee];if($===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const J=$.normalized,ce=$.itemSize,ve=t.get($);if(ve===void 0)continue;const ye=ve.buffer,Ne=ve.type,Fe=ve.bytesPerElement,Re=n.isWebGL2===!0&&(Ne===r.INT||Ne===r.UNSIGNED_INT||$.gpuType===wu);if($.isInterleavedBufferAttribute){const Qe=$.data,G=Qe.stride,Wt=$.offset;if(Qe.isInstancedInterleavedBuffer){for(let we=0;we<K.locationSize;we++)C(K.location+we,Qe.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let we=0;we<K.locationSize;we++)x(K.location+we);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let we=0;we<K.locationSize;we++)R(K.location+we,ce/K.locationSize,Ne,J,G*Fe,(Wt+ce/K.locationSize*we)*Fe,Re)}else{if($.isInstancedBufferAttribute){for(let Qe=0;Qe<K.locationSize;Qe++)C(K.location+Qe,$.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Qe=0;Qe<K.locationSize;Qe++)x(K.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Qe=0;Qe<K.locationSize;Qe++)R(K.location+Qe,ce/K.locationSize,Ne,J,ce*Fe,ce/K.locationSize*Qe*Fe,Re)}}else if(Q!==void 0){const J=Q[ee];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(K.location,J);break;case 3:r.vertexAttrib3fv(K.location,J);break;case 4:r.vertexAttrib4fv(K.location,J);break;default:r.vertexAttrib1fv(K.location,J)}}}}T()}function S(){H();for(const I in a){const D=a[I];for(const N in D){const Z=D[N];for(const V in Z)g(Z[V].object),delete Z[V];delete D[N]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;const D=a[I.id];for(const N in D){const Z=D[N];for(const V in Z)g(Z[V].object),delete Z[V];delete D[N]}delete a[I.id]}function B(I){for(const D in a){const N=a[D];if(N[I.id]===void 0)continue;const Z=N[I.id];for(const V in Z)g(Z[V].object),delete Z[V];delete N[I.id]}}function H(){F(),h=!0,c!==l&&(c=l,f(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function _y(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function xy(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,x=o||e.has("OES_texture_float"),C=_&&x,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:T}}function My(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ni,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,_=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,_,f);for(let C=0;C!==_;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Sy(r){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=ws:a===Oa&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ng(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xo extends qu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,Gc=[.125,.215,.35,.446,.526,.582],ki=20,ra=new xo,Wc=new ge;let oa=null,aa=0,la=0;const Ui=(1+Math.sqrt(5))/2,ms=1/Ui,qc=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Ui,ms),new E(0,Ui,-ms),new E(ms,0,Ui),new E(-ms,0,Ui),new E(Ui,ms,0),new E(-Ui,ms,0)];class Ga{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,la),e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Un,format:fn,colorSpace:Ut,depthBuffer:!1},i=Xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=by(s)),this._blurMaterial=wy(s,e,t)}return i}_compileMaterial(e){const t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,i){const a=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wc),h.toneMapping=xi,h.autoClear=!1;const f=new ft({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Ve(new $t,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Wc),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Xr(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=qc[(i-1)%qc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ve(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ki-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let y=0;for(let R=0;R<ki;++R){const O=R/v,S=Math.exp(-O*O/2);p.push(S),R===0?y+=S:R<m&&(y+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],C=3*x*(i>_-vs?i-_+vs:0),T=4*(this._cubeSize-x);Xr(t,C,T,3*x,2*x),l.setRenderTarget(t),l.render(u,ra)}}function by(r){const e=[],t=[],n=[];let i=r;const s=r-vs+1+Gc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-vs?l=Gc[o-r+vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,O=T>2?0:-1,S=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];y.set(S,v*g*T),_.set(d,m*g*T);const w=[T,T,T,T,T,T];x.set(w,p*g*T)}const C=new Gt;C.setAttribute("position",new Vt(y,v)),C.setAttribute("uv",new Vt(_,m)),C.setAttribute("faceIndex",new Vt(x,p)),e.push(C),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xc(r,e,t){const n=new pn(r,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wy(r,e,t){const n=new Float32Array(ki),i=new E(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Yc(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function jc(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function Ty(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Oa,h=l===ws||l===Ts;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ga(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ga(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ey(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ay(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const C=y[_+0],T=y[_+1],R=y[_+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const C=_+0,T=_+1,R=_+2;d.push(C,T,T,R,R,C)}}else return;const m=new(Fu(d)?Gu:Vu)(d,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ry(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){r.drawElements(s,g,a,f*l),t.update(g,s,1)}function u(f,g,v){if(v===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,v),t.update(g,s,v)}function d(f,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,v);let p=0;for(let y=0;y<v;y++)p+=g[y];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Cy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Py(r,e){return r[0]-e[0]}function Ly(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Iy(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==v){let D=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var f=D;m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),C===!0&&(S=3);let w=h.attributes.position.count*S,B=1;w>e.maxTextureSize&&(B=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const H=new Float32Array(w*B*4*v),F=new ku(H,w,B,v);F.type=Jn,F.needsUpdate=!0;const I=S*4;for(let N=0;N<v;N++){const Z=T[N],V=R[N],Y=O[N],Q=w*B*4*N;for(let ee=0;ee<Z.count;ee++){const K=ee*I;_===!0&&(o.fromBufferAttribute(Z,ee),H[Q+K+0]=o.x,H[Q+K+1]=o.y,H[Q+K+2]=o.z,H[Q+K+3]=0),x===!0&&(o.fromBufferAttribute(V,ee),H[Q+K+4]=o.x,H[Q+K+5]=o.y,H[Q+K+6]=o.z,H[Q+K+7]=0),C===!0&&(o.fromBufferAttribute(Y,ee),H[Q+K+8]=o.x,H[Q+K+9]=o.y,H[Q+K+10]=o.z,H[Q+K+11]=Y.itemSize===4?o.w:1)}}m={count:v,texture:F,size:new be(w,B)},s.set(h,m),h.addEventListener("dispose",D)}let p=0;for(let _=0;_<d.length;_++)p+=d[_];const y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[h.id]=v}for(let x=0;x<g;x++){const C=v[x];C[0]=x,C[1]=d[x]}v.sort(Ly);for(let x=0;x<8;x++)x<g&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Py);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const C=a[x],T=C[0],R=C[1];T!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+x)!==m[T]&&h.setAttribute("morphTarget"+x,m[T]),p&&h.getAttribute("morphNormal"+x)!==p[T]&&h.setAttribute("morphNormal"+x,p[T]),i[x]=R,y+=R):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Dy(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ju extends Nt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Hi,h!==Hi&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=vi),n===void 0&&h===Es&&(n=zi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $u=new Nt,Ku=new ju(1,1);Ku.compareFunction=Uu;const Zu=new ku,Qu=new yg,Ju=new Xu,$c=[],Kc=[],Zc=new Float32Array(16),Qc=new Float32Array(9),Jc=new Float32Array(4);function Us(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=$c[i];if(s===void 0&&(s=new Float32Array(i),$c[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Mo(r,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ny(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function Fy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function By(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Jc.set(n),r.uniformMatrix2fv(this.addr,!1,Jc),At(t,n)}}function ky(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Qc.set(n),r.uniformMatrix3fv(this.addr,!1,Qc),At(t,n)}}function zy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Zc.set(n),r.uniformMatrix4fv(this.addr,!1,Zc),At(t,n)}}function Hy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function Gy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function Wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function qy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function Yy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function jy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function $y(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Ku:$u;t.setTexture2D(e||s,i)}function Ky(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qu,i)}function Zy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ju,i)}function Qy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function Jy(r){switch(r){case 5126:return Ny;case 35664:return Uy;case 35665:return Fy;case 35666:return Oy;case 35674:return By;case 35675:return ky;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return qy;case 36294:return Xy;case 36295:return Yy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Qy}}function e_(r,e){r.uniform1fv(this.addr,e)}function t_(r,e){const t=Us(e,this.size,2);r.uniform2fv(this.addr,t)}function n_(r,e){const t=Us(e,this.size,3);r.uniform3fv(this.addr,t)}function i_(r,e){const t=Us(e,this.size,4);r.uniform4fv(this.addr,t)}function s_(r,e){const t=Us(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function r_(r,e){const t=Us(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function o_(r,e){const t=Us(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function a_(r,e){r.uniform1iv(this.addr,e)}function l_(r,e){r.uniform2iv(this.addr,e)}function c_(r,e){r.uniform3iv(this.addr,e)}function h_(r,e){r.uniform4iv(this.addr,e)}function u_(r,e){r.uniform1uiv(this.addr,e)}function d_(r,e){r.uniform2uiv(this.addr,e)}function f_(r,e){r.uniform3uiv(this.addr,e)}function p_(r,e){r.uniform4uiv(this.addr,e)}function m_(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$u,s[o])}function g_(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qu,s[o])}function v_(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ju,s[o])}function y_(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zu,s[o])}function __(r){switch(r){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return y_}}class x_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jy(t.type)}}class M_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}}class S_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function eh(r,e){r.seq.push(e),r.map[e.id]=e}function b_(r,e,t){const n=r.name,i=n.length;for(ca.lastIndex=0;;){const s=ca.exec(n),o=ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){eh(t,c===void 0?new x_(a,r,e):new M_(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new S_(a),eh(t,u)),t=u}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);b_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function th(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const w_=37297;let T_=0;function E_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function A_(r){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(r);let n;switch(e===t?n="":e===lo&&t===ao?n="LinearDisplayP3ToLinearSRGB":e===ao&&t===lo&&(n="LinearSRGBToLinearDisplayP3"),r){case Ut:case vo:return[n,"LinearTransferOETF"];case ut:case ol:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function nh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+E_(r.getShaderSource(e),o)}else return i}function R_(r,e){const t=A_(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function C_(r,e){let t;switch(e){case yu:t="Linear";break;case _u:t="Reinhard";break;case xu:t="OptimizedCineon";break;case sl:t="ACESFilmic";break;case Mu:t="AgX";break;case Lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function P_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function L_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function I_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ys(r){return r!==""}function ih(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(r){return r.replace(N_,F_)}const U_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F_(r,e){let t=Be[e];if(t===void 0){const n=U_.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(r){return r.replace(O_,B_)}function B_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function oh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===rm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function z_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Ts:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function V_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vu:e="ENVMAP_BLENDING_MULTIPLY";break;case Cm:e="ENVMAP_BLENDING_MIX";break;case Pm:e="ENVMAP_BLENDING_ADD";break}return e}function G_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function W_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=k_(t),c=z_(t),h=H_(t),u=V_(t),d=G_(t),f=t.isWebGL2?"":P_(t),g=L_(t),v=I_(s),m=i.createProgram();let p,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ys).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ys).join(`
`),y.length>0&&(y+=`
`)):(p=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),y=[f,oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Be.tonemapping_pars_fragment:"",t.toneMapping!==xi?C_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,R_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),o=Wa(o),o=ih(o,t),o=sh(o,t),a=Wa(a),a=ih(a,t),a=sh(a,t),o=rh(o),a=rh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const x=_+p+o,C=_+y+a,T=th(i,i.VERTEX_SHADER,x),R=th(i,i.FRAGMENT_SHADER,C);i.attachShader(m,T),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(H){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(T).trim(),D=i.getShaderInfoLog(R).trim();let N=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,R);else{const V=nh(i,T,"vertex"),Y=nh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+V+`
`+Y)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||D==="")&&(Z=!1);Z&&(H.diagnostics={runnable:N,programLog:F,vertexShader:{log:I,prefix:p},fragmentShader:{log:D,prefix:y}})}i.deleteShader(T),i.deleteShader(R),S=new no(i,m),w=D_(i,m)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,w_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let q_=0;class X_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y_(e),t.set(e,n)),n}}class Y_{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}}function j_(r,e,t,n,i,s,o){const a=new zu,l=new X_,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,w,B,H,F){const I=H.fog,D=F.geometry,N=S.isMeshStandardMaterial?H.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),V=Z&&Z.mapping===go?Z.image.height:null,Y=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ee=Q!==void 0?Q.length:0;let K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let $,J,ce,ve;if(Y){const qt=Pn[Y];$=qt.vertexShader,J=qt.fragmentShader}else $=S.vertexShader,J=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const ye=r.getRenderTarget(),Ne=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,Re=!!S.map,Qe=!!S.matcap,G=!!Z,Wt=!!S.aoMap,we=!!S.lightMap,Ie=!!S.bumpMap,_e=!!S.normalMap,mt=!!S.displacementMap,ke=!!S.emissiveMap,P=!!S.metalnessMap,b=!!S.roughnessMap,q=S.anisotropy>0,ie=S.clearcoat>0,ne=S.iridescence>0,se=S.sheen>0,xe=S.transmission>0,he=q&&!!S.anisotropyMap,pe=ie&&!!S.clearcoatMap,Ae=ie&&!!S.clearcoatNormalMap,ze=ie&&!!S.clearcoatRoughnessMap,te=ne&&!!S.iridescenceMap,st=ne&&!!S.iridescenceThicknessMap,Ye=se&&!!S.sheenColorMap,Le=se&&!!S.sheenRoughnessMap,Se=!!S.specularMap,me=!!S.specularColorMap,Oe=!!S.specularIntensityMap,tt=xe&&!!S.transmissionMap,vt=xe&&!!S.thicknessMap,Ge=!!S.gradientMap,re=!!S.alphaMap,U=S.alphaTest>0,ae=!!S.alphaHash,le=!!S.extensions,Ce=!!D.attributes.uv1,Te=!!D.attributes.uv2,at=!!D.attributes.uv3;let lt=xi;return S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(lt=r.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:J,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Fe,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ut,map:Re,matcap:Qe,envMap:G,envMapMode:G&&Z.mapping,envMapCubeUVHeight:V,aoMap:Wt,lightMap:we,bumpMap:Ie,normalMap:_e,displacementMap:d&&mt,emissiveMap:ke,normalMapObjectSpace:_e&&S.normalMapType===Wm,normalMapTangentSpace:_e&&S.normalMapType===Nu,metalnessMap:P,roughnessMap:b,anisotropy:q,anisotropyMap:he,clearcoat:ie,clearcoatMap:pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ze,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:st,sheen:se,sheenColorMap:Ye,sheenRoughnessMap:Le,specularMap:Se,specularColorMap:me,specularIntensityMap:Oe,transmission:xe,transmissionMap:tt,thicknessMap:vt,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===xs,alphaMap:re,alphaTest:U,alphaHash:ae,combine:S.combine,mapUv:Re&&v(S.map.channel),aoMapUv:Wt&&v(S.aoMap.channel),lightMapUv:we&&v(S.lightMap.channel),bumpMapUv:Ie&&v(S.bumpMap.channel),normalMapUv:_e&&v(S.normalMap.channel),displacementMapUv:mt&&v(S.displacementMap.channel),emissiveMapUv:ke&&v(S.emissiveMap.channel),metalnessMapUv:P&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:he&&v(S.anisotropyMap.channel),clearcoatMapUv:pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(S.sheenRoughnessMap.channel),specularMapUv:Se&&v(S.specularMap.channel),specularColorMapUv:me&&v(S.specularColorMap.channel),specularIntensityMapUv:Oe&&v(S.specularIntensityMap.channel),transmissionMapUv:tt&&v(S.transmissionMap.channel),thicknessMapUv:vt&&v(S.thicknessMap.channel),alphaMapUv:re&&v(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_e||q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Te,vertexUv3s:at,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Re||re),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(y(w,S),_(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const w=g[S.type];let B;if(w){const H=Pn[w];B=Yi.clone(H.uniforms)}else B=S.uniforms;return B}function C(S,w){let B;for(let H=0,F=c.length;H<F;H++){const I=c[H];if(I.cacheKey===w){B=I,++B.usedTimes;break}}return B===void 0&&(B=new W_(r,w,S,s),c.push(B)),B}function T(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:O}}function $_(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function K_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ah(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||K_),n.length>1&&n.sort(d||ah),i.length>1&&i.sort(d||ah)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Z_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new lh,r.set(n,[o])):i>=s.length?(o=new lh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Q_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ge};break;case"SpotLight":t={position:new E,direction:new E,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function J_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ex=0;function tx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nx(r,e){const t=new Q_,n=J_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new E);const s=new E,o=new Xe,a=new Xe;function l(h,u){let d=0,f=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let v=0,m=0,p=0,y=0,_=0,x=0,C=0,T=0,R=0,O=0,S=0;h.sort(tx);const w=u===!0?Math.PI:1;for(let H=0,F=h.length;H<F;H++){const I=h[H],D=I.color,N=I.intensity,Z=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=D.r*N*w,f+=D.g*N*w,g+=D.b*N*w;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],N);S++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const Q=I.shadow,ee=n.get(I);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.directionalShadow[v]=ee,i.directionalShadowMap[v]=V,i.directionalShadowMatrix[v]=I.shadow.matrix,x++}i.directional[v]=Y,v++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(D).multiplyScalar(N*w),Y.distance=Z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[p]=Y;const Q=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,Q.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[p]=Q.matrix,I.castShadow){const ee=n.get(I);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=V,T++}p++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(D).multiplyScalar(N),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=Y,y++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*w),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const Q=I.shadow,ee=n.get(I);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=I.shadow.matrix,C++}i.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(N*w),Y.groundColor.copy(I.groundColor).multiplyScalar(N*w),i.hemi[_]=Y,_++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==y||B.hemiLength!==_||B.numDirectionalShadows!==x||B.numPointShadows!==C||B.numSpotShadows!==T||B.numSpotMaps!==R||B.numLightProbes!==S)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+R-O,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=S,B.directionalLength=v,B.pointLength=m,B.spotLength=p,B.rectAreaLength=y,B.hemiLength=_,B.numDirectionalShadows=x,B.numPointShadows=C,B.numSpotShadows=T,B.numSpotMaps=R,B.numLightProbes=S,i.version=ex++)}function c(h,u){let d=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const x=h[y];if(x.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),d++}else if(x.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function ch(r,e){const t=new nx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ix(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ch(r,e),t.set(s,[l])):o>=a.length?(l=new ch(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ed extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`;function ax(r,e,t){let n=new ll;const i=new be,s=new be,o=new ot,a=new ed({depthPacking:Du}),l=new sx,c={},h=t.maxTextureSize,u={[ii]:Zt,[Zt]:ii,[tn]:tn},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let p=this.type;this.render=function(T,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=r.getRenderTarget(),w=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Nn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=p!==Zn&&this.type===Zn,I=p===Zn&&this.type!==Zn;for(let D=0,N=T.length;D<N;D++){const Z=T[D],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Y=V.getFrameExtents();if(i.multiply(Y),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,V.mapSize.y=s.y)),V.map===null||F===!0||I===!0){const ee=this.type!==Zn?{minFilter:wt,magFilter:wt}:{};V.map!==null&&V.map.dispose(),V.map=new pn(i.x,i.y,ee),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const Q=V.getViewportCount();for(let ee=0;ee<Q;ee++){const K=V.getViewport(ee);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),H.viewport(o),V.updateMatrices(Z,ee),n=V.getFrustum(),x(R,O,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Zn&&y(V,O),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,w,B)};function y(T,R){const O=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,O,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,O,f,v,null)}function _(T,R,O,S){let w=null;const B=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)w=B;else if(w=O.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=w.uuid,F=R.uuid;let I=c[H];I===void 0&&(I={},c[H]=I);let D=I[F];D===void 0&&(D=w.clone(),I[F]=D,R.addEventListener("dispose",C)),w=D}if(w.visible=R.visible,w.wireframe=R.wireframe,S===Zn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=r.properties.get(w);H.light=O}return w}function x(T,R,O,S,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const F=e.update(T),I=T.material;if(Array.isArray(I)){const D=F.groups;for(let N=0,Z=D.length;N<Z;N++){const V=D[N],Y=I[V.materialIndex];if(Y&&Y.visible){const Q=_(T,Y,S,w);T.onBeforeShadow(r,T,R,O,F,Q,V),r.renderBufferDirect(O,null,F,Q,T,V),T.onAfterShadow(r,T,R,O,F,Q,V)}}}else if(I.visible){const D=_(T,I,S,w);T.onBeforeShadow(r,T,R,O,F,D,null),r.renderBufferDirect(O,null,F,D,T,null),T.onAfterShadow(r,T,R,O,F,D,null)}}const H=T.children;for(let F=0,I=H.length;F<I;F++)x(H[F],R,O,S,w)}function C(T){T.target.removeEventListener("dispose",C);for(const O in c){const S=c[O],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function lx(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const ae=new ot;let le=null;const Ce=new ot(0,0,0,0);return{setMask:function(Te){le!==Te&&!U&&(r.colorMask(Te,Te,Te,Te),le=Te)},setLocked:function(Te){U=Te},setClear:function(Te,at,lt,Ct,qt){qt===!0&&(Te*=Ct,at*=Ct,lt*=Ct),ae.set(Te,at,lt,Ct),Ce.equals(ae)===!1&&(r.clearColor(Te,at,lt,Ct),Ce.copy(ae))},reset:function(){U=!1,le=null,Ce.set(-1,0,0,0)}}}function s(){let U=!1,ae=null,le=null,Ce=null;return{setTest:function(Te){Te?Fe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!U&&(r.depthMask(Te),ae=Te)},setFunc:function(Te){if(le!==Te){switch(Te){case Sm:r.depthFunc(r.NEVER);break;case bm:r.depthFunc(r.ALWAYS);break;case wm:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case Tm:r.depthFunc(r.EQUAL);break;case Em:r.depthFunc(r.GEQUAL);break;case Am:r.depthFunc(r.GREATER);break;case Rm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=Te}},setLocked:function(Te){U=Te},setClear:function(Te){Ce!==Te&&(r.clearDepth(Te),Ce=Te)},reset:function(){U=!1,ae=null,le=null,Ce=null}}}function o(){let U=!1,ae=null,le=null,Ce=null,Te=null,at=null,lt=null,Ct=null,qt=null;return{setTest:function(ct){U||(ct?Fe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(ct){ae!==ct&&!U&&(r.stencilMask(ct),ae=ct)},setFunc:function(ct,Xt,Tn){(le!==ct||Ce!==Xt||Te!==Tn)&&(r.stencilFunc(ct,Xt,Tn),le=ct,Ce=Xt,Te=Tn)},setOp:function(ct,Xt,Tn){(at!==ct||lt!==Xt||Ct!==Tn)&&(r.stencilOp(ct,Xt,Tn),at=ct,lt=Xt,Ct=Tn)},setLocked:function(ct){U=ct},setClear:function(ct){qt!==ct&&(r.clearStencil(ct),qt=ct)},reset:function(){U=!1,ae=null,le=null,Ce=null,Te=null,at=null,lt=null,Ct=null,qt=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,C=null,T=null,R=null,O=null,S=new ge(0,0,0),w=0,B=!1,H=null,F=null,I=null,D=null,N=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=Y>=2);let ee=null,K={};const $=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),ce=new ot().fromArray($),ve=new ot().fromArray(J);function ye(U,ae,le,Ce){const Te=new Uint8Array(4),at=r.createTexture();r.bindTexture(U,at),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<le;lt++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(ae+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return at}const Ne={};Ne[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Ne[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ne[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(r.DEPTH_TEST),l.setFunc(so),ke(!1),P(Wl),Fe(r.CULL_FACE),_e(Nn);function Fe(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Re(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function Qe(U,ae){return f[U]!==ae?(r.bindFramebuffer(U,ae),f[U]=ae,n&&(U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ae),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function G(U,ae){let le=v,Ce=!1;if(U)if(le=g.get(ae),le===void 0&&(le=[],g.set(ae,le)),U.isWebGLMultipleRenderTargets){const Te=U.texture;if(le.length!==Te.length||le[0]!==r.COLOR_ATTACHMENT0){for(let at=0,lt=Te.length;at<lt;at++)le[at]=r.COLOR_ATTACHMENT0+at;le.length=Te.length,Ce=!0}}else le[0]!==r.COLOR_ATTACHMENT0&&(le[0]=r.COLOR_ATTACHMENT0,Ce=!0);else le[0]!==r.BACK&&(le[0]=r.BACK,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Wt(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const we={[Bi]:r.FUNC_ADD,[am]:r.FUNC_SUBTRACT,[lm]:r.FUNC_REVERSE_SUBTRACT};if(n)we[Yl]=r.MIN,we[jl]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(we[Yl]=U.MIN_EXT,we[jl]=U.MAX_EXT)}const Ie={[cm]:r.ZERO,[hm]:r.ONE,[um]:r.SRC_COLOR,[Na]:r.SRC_ALPHA,[vm]:r.SRC_ALPHA_SATURATE,[mm]:r.DST_COLOR,[fm]:r.DST_ALPHA,[dm]:r.ONE_MINUS_SRC_COLOR,[Ua]:r.ONE_MINUS_SRC_ALPHA,[gm]:r.ONE_MINUS_DST_COLOR,[pm]:r.ONE_MINUS_DST_ALPHA,[ym]:r.CONSTANT_COLOR,[_m]:r.ONE_MINUS_CONSTANT_COLOR,[xm]:r.CONSTANT_ALPHA,[Mm]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(U,ae,le,Ce,Te,at,lt,Ct,qt,ct){if(U===Nn){p===!0&&(Re(r.BLEND),p=!1);return}if(p===!1&&(Fe(r.BLEND),p=!0),U!==om){if(U!==y||ct!==B){if((_!==Bi||T!==Bi)&&(r.blendEquation(r.FUNC_ADD),_=Bi,T=Bi),ct)switch(U){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Da:r.blendFunc(r.ONE,r.ONE);break;case ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Da:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,C=null,R=null,O=null,S.set(0,0,0),w=0,y=U,B=ct}return}Te=Te||ae,at=at||le,lt=lt||Ce,(ae!==_||Te!==T)&&(r.blendEquationSeparate(we[ae],we[Te]),_=ae,T=Te),(le!==x||Ce!==C||at!==R||lt!==O)&&(r.blendFuncSeparate(Ie[le],Ie[Ce],Ie[at],Ie[lt]),x=le,C=Ce,R=at,O=lt),(Ct.equals(S)===!1||qt!==w)&&(r.blendColor(Ct.r,Ct.g,Ct.b,qt),S.copy(Ct),w=qt),y=U,B=!1}function mt(U,ae){U.side===tn?Re(r.CULL_FACE):Fe(r.CULL_FACE);let le=U.side===Zt;ae&&(le=!le),ke(le),U.blending===xs&&U.transparent===!1?_e(Nn):_e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ce=U.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Fe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){H!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),H=U)}function P(U){U!==im?(Fe(r.CULL_FACE),U!==F&&(U===Wl?r.cullFace(r.BACK):U===sm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),F=U}function b(U){U!==I&&(V&&r.lineWidth(U),I=U)}function q(U,ae,le){U?(Fe(r.POLYGON_OFFSET_FILL),(D!==ae||N!==le)&&(r.polygonOffset(ae,le),D=ae,N=le)):Re(r.POLYGON_OFFSET_FILL)}function ie(U){U?Fe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function ne(U){U===void 0&&(U=r.TEXTURE0+Z-1),ee!==U&&(r.activeTexture(U),ee=U)}function se(U,ae,le){le===void 0&&(ee===null?le=r.TEXTURE0+Z-1:le=ee);let Ce=K[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},K[le]=Ce),(Ce.type!==U||Ce.texture!==ae)&&(ee!==le&&(r.activeTexture(le),ee=le),r.bindTexture(U,ae||Ne[U]),Ce.type=U,Ce.texture=ae)}function xe(){const U=K[ee];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){ce.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function tt(U){ve.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ve.copy(U))}function vt(U,ae){let le=u.get(ae);le===void 0&&(le=new WeakMap,u.set(ae,le));let Ce=le.get(U);Ce===void 0&&(Ce=r.getUniformBlockIndex(ae,U.name),le.set(U,Ce))}function Ge(U,ae){const Ce=u.get(ae).get(U);h.get(ae)!==Ce&&(r.uniformBlockBinding(ae,Ce,U.__bindingPointIndex),h.set(ae,Ce))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ee=null,K={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,C=null,T=null,R=null,O=null,S=new ge(0,0,0),w=0,B=!1,H=null,F=null,I=null,D=null,N=null,ce.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Re,bindFramebuffer:Qe,drawBuffers:G,useProgram:Wt,setBlending:_e,setMaterial:mt,setFlipSided:ke,setCullFace:P,setLineWidth:b,setPolygonOffset:q,setScissorTest:ie,activeTexture:ne,bindTexture:se,unbindTexture:xe,compressedTexImage2D:he,compressedTexImage3D:pe,texImage2D:Se,texImage3D:me,updateUBOMapping:vt,uniformBlockBinding:Ge,texStorage2D:Ye,texStorage3D:Le,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:te,compressedTexSubImage3D:st,scissor:Oe,viewport:tt,reset:re}}function cx(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):hr("canvas")}function v(P,b,q,ie){let ne=1;if((P.width>ie||P.height>ie)&&(ne=ie/Math.max(P.width,P.height)),ne<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const se=b?ho:Math.floor,xe=se(ne*P.width),he=se(ne*P.height);u===void 0&&(u=g(xe,he));const pe=q?g(xe,he):u;return pe.width=xe,pe.height=he,pe.getContext("2d").drawImage(P,0,0,xe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+xe+"x"+he+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return Va(P.width)&&Va(P.height)}function p(P){return a?!1:P.wrapS!==dn||P.wrapT!==dn||P.minFilter!==wt&&P.minFilter!==Jt}function y(P,b){return P.generateMipmaps&&b&&P.minFilter!==wt&&P.minFilter!==Jt}function _(P){r.generateMipmap(P)}function x(P,b,q,ie,ne=!1){if(a===!1)return b;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=b;if(b===r.RED&&(q===r.FLOAT&&(se=r.R32F),q===r.HALF_FLOAT&&(se=r.R16F),q===r.UNSIGNED_BYTE&&(se=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(se=r.R8UI),q===r.UNSIGNED_SHORT&&(se=r.R16UI),q===r.UNSIGNED_INT&&(se=r.R32UI),q===r.BYTE&&(se=r.R8I),q===r.SHORT&&(se=r.R16I),q===r.INT&&(se=r.R32I)),b===r.RG&&(q===r.FLOAT&&(se=r.RG32F),q===r.HALF_FLOAT&&(se=r.RG16F),q===r.UNSIGNED_BYTE&&(se=r.RG8)),b===r.RGBA){const xe=ne?oo:et.getTransfer(ie);q===r.FLOAT&&(se=r.RGBA32F),q===r.HALF_FLOAT&&(se=r.RGBA16F),q===r.UNSIGNED_BYTE&&(se=xe===ht?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(P,b,q){return y(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==wt&&P.minFilter!==Jt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){return P===wt||P===Ba||P===to?r.NEAREST:r.LINEAR}function R(P){const b=P.target;b.removeEventListener("dispose",R),S(b),b.isVideoTexture&&h.delete(b)}function O(P){const b=P.target;b.removeEventListener("dispose",O),B(b)}function S(P){const b=n.get(P);if(b.__webglInit===void 0)return;const q=P.source,ie=d.get(q);if(ie){const ne=ie[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(P),Object.keys(ie).length===0&&d.delete(q)}n.remove(P)}function w(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const q=P.source,ie=d.get(q);delete ie[b.__cacheKey],o.memory.textures--}function B(P){const b=P.texture,q=n.get(P),ie=n.get(b);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let se=0;se<q.__webglFramebuffer[ne].length;se++)r.deleteFramebuffer(q.__webglFramebuffer[ne][se]);else r.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)r.deleteFramebuffer(q.__webglFramebuffer[ne]);else r.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ne=0,se=b.length;ne<se;ne++){const xe=n.get(b[ne]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(b[ne])}n.remove(b),n.remove(P)}let H=0;function F(){H=0}function I(){const P=H;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),H+=1,P}function D(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function N(P,b){const q=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(q,P,b);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function Z(P,b){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ce(q,P,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function V(P,b){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ce(q,P,b);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function Y(P,b){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ve(q,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const Q={[mn]:r.REPEAT,[dn]:r.CLAMP_TO_EDGE,[ro]:r.MIRRORED_REPEAT},ee={[wt]:r.NEAREST,[Ba]:r.NEAREST_MIPMAP_NEAREST,[to]:r.NEAREST_MIPMAP_LINEAR,[Jt]:r.LINEAR,[bu]:r.LINEAR_MIPMAP_NEAREST,[Si]:r.LINEAR_MIPMAP_LINEAR},K={[qm]:r.NEVER,[Zm]:r.ALWAYS,[Xm]:r.LESS,[Uu]:r.LEQUAL,[Ym]:r.EQUAL,[Km]:r.GEQUAL,[jm]:r.GREATER,[$m]:r.NOTEQUAL};function $(P,b,q){if(q?(r.texParameteri(P,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ee[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ee[b.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==dn||b.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,T(b.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==wt&&b.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===wt||b.minFilter!==to&&b.minFilter!==Si||b.type===Jn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Un&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function J(P,b){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));const ie=b.source;let ne=d.get(ie);ne===void 0&&(ne={},d.set(ie,ne));const se=D(b);if(se!==P.__cacheKey){ne[se]===void 0&&(ne[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[se].usedTimes++;const xe=ne[P.__cacheKey];xe!==void 0&&(ne[P.__cacheKey].usedTimes--,xe.usedTimes===0&&w(b)),P.__cacheKey=se,P.__webglTexture=ne[se].texture}return q}function ce(P,b,q){let ie=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=r.TEXTURE_3D);const ne=J(P,b),se=b.source;t.bindTexture(ie,P.__webglTexture,r.TEXTURE0+q);const xe=n.get(se);if(se.version!==xe.__version||ne===!0){t.activeTexture(r.TEXTURE0+q);const he=et.getPrimaries(et.workingColorSpace),pe=b.colorSpace===Dt?null:et.getPrimaries(b.colorSpace),Ae=b.colorSpace===Dt||he===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=p(b)&&m(b.image)===!1;let te=v(b.image,ze,!1,i.maxTextureSize);te=ke(b,te);const st=m(te)||a,Ye=s.convert(b.format,b.colorSpace);let Le=s.convert(b.type),Se=x(b.internalFormat,Ye,Le,b.colorSpace,b.isVideoTexture);$(ie,b,st);let me;const Oe=b.mipmaps,tt=a&&b.isVideoTexture!==!0&&Se!==Pu,vt=xe.__version===void 0||ne===!0,Ge=C(b,te,st);if(b.isDepthTexture)Se=r.DEPTH_COMPONENT,a?b.type===Jn?Se=r.DEPTH_COMPONENT32F:b.type===vi?Se=r.DEPTH_COMPONENT24:b.type===zi?Se=r.DEPTH24_STENCIL8:Se=r.DEPTH_COMPONENT16:b.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Hi&&Se===r.DEPTH_COMPONENT&&b.type!==rl&&b.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=vi,Le=s.convert(b.type)),b.format===Es&&Se===r.DEPTH_COMPONENT&&(Se=r.DEPTH_STENCIL,b.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=zi,Le=s.convert(b.type))),vt&&(tt?t.texStorage2D(r.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,Se,te.width,te.height,0,Ye,Le,null));else if(b.isDataTexture)if(Oe.length>0&&st){tt&&vt&&t.texStorage2D(r.TEXTURE_2D,Ge,Se,Oe[0].width,Oe[0].height);for(let re=0,U=Oe.length;re<U;re++)me=Oe[re],tt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,Ye,Le,me.data):t.texImage2D(r.TEXTURE_2D,re,Se,me.width,me.height,0,Ye,Le,me.data);b.generateMipmaps=!1}else tt?(vt&&t.texStorage2D(r.TEXTURE_2D,Ge,Se,te.width,te.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,te.width,te.height,Ye,Le,te.data)):t.texImage2D(r.TEXTURE_2D,0,Se,te.width,te.height,0,Ye,Le,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,Se,Oe[0].width,Oe[0].height,te.depth);for(let re=0,U=Oe.length;re<U;re++)me=Oe[re],b.format!==fn?Ye!==null?tt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,Ye,me.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Se,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,Ye,Le,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Se,me.width,me.height,te.depth,0,Ye,Le,me.data)}else{tt&&vt&&t.texStorage2D(r.TEXTURE_2D,Ge,Se,Oe[0].width,Oe[0].height);for(let re=0,U=Oe.length;re<U;re++)me=Oe[re],b.format!==fn?Ye!==null?tt?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,Ye,me.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,Ye,Le,me.data):t.texImage2D(r.TEXTURE_2D,re,Se,me.width,me.height,0,Ye,Le,me.data)}else if(b.isDataArrayTexture)tt?(vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,Se,te.width,te.height,te.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ye,Le,te.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,Ye,Le,te.data);else if(b.isData3DTexture)tt?(vt&&t.texStorage3D(r.TEXTURE_3D,Ge,Se,te.width,te.height,te.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ye,Le,te.data)):t.texImage3D(r.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,Ye,Le,te.data);else if(b.isFramebufferTexture){if(vt)if(tt)t.texStorage2D(r.TEXTURE_2D,Ge,Se,te.width,te.height);else{let re=te.width,U=te.height;for(let ae=0;ae<Ge;ae++)t.texImage2D(r.TEXTURE_2D,ae,Se,re,U,0,Ye,Le,null),re>>=1,U>>=1}}else if(Oe.length>0&&st){tt&&vt&&t.texStorage2D(r.TEXTURE_2D,Ge,Se,Oe[0].width,Oe[0].height);for(let re=0,U=Oe.length;re<U;re++)me=Oe[re],tt?t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ye,Le,me):t.texImage2D(r.TEXTURE_2D,re,Se,Ye,Le,me);b.generateMipmaps=!1}else tt?(vt&&t.texStorage2D(r.TEXTURE_2D,Ge,Se,te.width,te.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ye,Le,te)):t.texImage2D(r.TEXTURE_2D,0,Se,Ye,Le,te);y(b,st)&&_(ie),xe.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ve(P,b,q){if(b.image.length!==6)return;const ie=J(P,b),ne=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);const se=n.get(ne);if(ne.version!==se.__version||ie===!0){t.activeTexture(r.TEXTURE0+q);const xe=et.getPrimaries(et.workingColorSpace),he=b.colorSpace===Dt?null:et.getPrimaries(b.colorSpace),pe=b.colorSpace===Dt||xe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,te=[];for(let re=0;re<6;re++)!Ae&&!ze?te[re]=v(b.image[re],!1,!0,i.maxCubemapSize):te[re]=ze?b.image[re].image:b.image[re],te[re]=ke(b,te[re]);const st=te[0],Ye=m(st)||a,Le=s.convert(b.format,b.colorSpace),Se=s.convert(b.type),me=x(b.internalFormat,Le,Se,b.colorSpace),Oe=a&&b.isVideoTexture!==!0,tt=se.__version===void 0||ie===!0;let vt=C(b,st,Ye);$(r.TEXTURE_CUBE_MAP,b,Ye);let Ge;if(Ae){Oe&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,vt,me,st.width,st.height);for(let re=0;re<6;re++){Ge=te[re].mipmaps;for(let U=0;U<Ge.length;U++){const ae=Ge[U];b.format!==fn?Le!==null?Oe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,0,0,ae.width,ae.height,Le,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,0,0,ae.width,ae.height,Le,Se,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,me,ae.width,ae.height,0,Le,Se,ae.data)}}}else{Ge=b.mipmaps,Oe&&tt&&(Ge.length>0&&vt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,vt,me,te[0].width,te[0].height));for(let re=0;re<6;re++)if(ze){Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,te[re].width,te[re].height,Le,Se,te[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,te[re].width,te[re].height,0,Le,Se,te[re].data);for(let U=0;U<Ge.length;U++){const le=Ge[U].image[re].image;Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,0,0,le.width,le.height,Le,Se,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,me,le.width,le.height,0,Le,Se,le.data)}}else{Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,Se,te[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,Le,Se,te[re]);for(let U=0;U<Ge.length;U++){const ae=Ge[U];Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,0,0,Le,Se,ae.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,me,Le,Se,ae.image[re])}}}y(b,Ye)&&_(r.TEXTURE_CUBE_MAP),se.__version=ne.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ye(P,b,q,ie,ne,se){const xe=s.convert(q.format,q.colorSpace),he=s.convert(q.type),pe=x(q.internalFormat,xe,he,q.colorSpace);if(!n.get(b).__hasExternalTextures){const ze=Math.max(1,b.width>>se),te=Math.max(1,b.height>>se);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,pe,ze,te,b.depth,0,xe,he,null):t.texImage2D(ne,se,pe,ze,te,0,xe,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),_e(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,0,Ie(b)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(P,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let ie=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(q||_e(b)){const ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Jn?ie=r.DEPTH_COMPONENT32F:ne.type===vi&&(ie=r.DEPTH_COMPONENT24));const se=Ie(b);_e(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,ie,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,se,ie,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const ie=Ie(b);q&&_e(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,b.width,b.height):_e(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const ie=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0;ne<ie.length;ne++){const se=ie[ne],xe=s.convert(se.format,se.colorSpace),he=s.convert(se.type),pe=x(se.internalFormat,xe,he,se.colorSpace),Ae=Ie(b);q&&_e(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,pe,b.width,b.height):_e(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,pe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,ne=Ie(b);if(b.depthTexture.format===Hi)_e(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Es)_e(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Re(P){const b=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Fe(b.__webglFramebuffer,P)}else if(q){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]=r.createRenderbuffer(),Ne(b.__webglDepthbuffer[ie],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),Ne(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(P,b,q){const ie=n.get(P);b!==void 0&&ye(ie.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Re(P)}function G(P){const b=P.texture,q=n.get(P),ie=n.get(b);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=b.version,o.memory.textures++);const ne=P.isWebGLCubeRenderTarget===!0,se=P.isWebGLMultipleRenderTargets===!0,xe=m(P)||a;if(ne){q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[he]=[];for(let pe=0;pe<b.mipmaps.length;pe++)q.__webglFramebuffer[he][pe]=r.createFramebuffer()}else q.__webglFramebuffer[he]=r.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)q.__webglFramebuffer[he]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(se)if(i.drawBuffers){const he=P.texture;for(let pe=0,Ae=he.length;pe<Ae;pe++){const ze=n.get(he[pe]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&_e(P)===!1){const he=se?b:[b];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const Ae=he[pe];q.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[pe]);const ze=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),st=x(Ae.internalFormat,ze,te,Ae.colorSpace,P.isXRRenderTarget===!0),Ye=Ie(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,st,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,q.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),$(r.TEXTURE_CUBE_MAP,b,xe);for(let he=0;he<6;he++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)ye(q.__webglFramebuffer[he][pe],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else ye(q.__webglFramebuffer[he],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(b,xe)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const he=P.texture;for(let pe=0,Ae=he.length;pe<Ae;pe++){const ze=he[pe],te=n.get(ze);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),$(r.TEXTURE_2D,ze,xe),ye(q.__webglFramebuffer,P,ze,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),y(ze,xe)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?he=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),$(he,b,xe),a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)ye(q.__webglFramebuffer[pe],P,b,r.COLOR_ATTACHMENT0,he,pe);else ye(q.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,he,0);y(b,xe)&&_(he),t.unbindTexture()}P.depthBuffer&&Re(P)}function Wt(P){const b=m(P)||a,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,ne=q.length;ie<ne;ie++){const se=q[ie];if(y(se,b)){const xe=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=n.get(se).__webglTexture;t.bindTexture(xe,he),_(xe),t.unbindTexture()}}}function we(P){if(a&&P.samples>0&&_e(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,ie=P.height;let ne=r.COLOR_BUFFER_BIT;const se=[],xe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(P),pe=P.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ae=0;Ae<b.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){se.push(r.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&se.push(xe);const ze=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ze===!1&&(P.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]),ze===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[xe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[xe])),pe){const te=n.get(b[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,q,ie,0,0,q,ie,ne,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<b.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const ze=n.get(b[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ie(P){return Math.min(i.maxSamples,P.samples)}function _e(P){const b=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function mt(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function ke(P,b){const q=P.colorSpace,ie=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ha||q!==Ut&&q!==Dt&&(et.getTransfer(q)===ht?a===!1?e.has("EXT_sRGB")===!0&&ie===fn?(P.format=Ha,P.minFilter=Jt,P.generateMipmaps=!1):b=Ou.sRGBToLinear(b):(ie!==fn||ne!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Qe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=_e}function hx(r,e,t){const n=t.isWebGL2;function i(s,o=Dt){let a;const l=et.getTransfer(o);if(s===Mi)return r.UNSIGNED_BYTE;if(s===Tu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Eu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Dm)return r.BYTE;if(s===Nm)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===wu)return r.INT;if(s===vi)return r.UNSIGNED_INT;if(s===Jn)return r.FLOAT;if(s===Un)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Um)return r.ALPHA;if(s===fn)return r.RGBA;if(s===Fm)return r.LUMINANCE;if(s===Om)return r.LUMINANCE_ALPHA;if(s===Hi)return r.DEPTH_COMPONENT;if(s===Es)return r.DEPTH_STENCIL;if(s===Ha)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Bm)return r.RED;if(s===Au)return r.RED_INTEGER;if(s===km)return r.RG;if(s===Ru)return r.RG_INTEGER;if(s===Cu)return r.RGBA_INTEGER;if(s===Fo||s===Oo||s===Bo||s===ko)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kl||s===Zl||s===Ql||s===Jl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ec||s===tc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ec)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===tc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nc||s===ic||s===sc||s===rc||s===oc||s===ac||s===lc||s===cc||s===hc||s===uc||s===dc||s===fc||s===pc||s===mc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===nc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ic)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ac)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mc)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zo||s===gc||s===vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zo)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zm||s===yc||s===_c||s===xc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===zo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===yc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_c)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ux extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class It extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dx={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fx extends Ns{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const y=[],_=[],x=new be;let C=null;const T=new Kt;T.layers.enable(1),T.viewport=new ot;const R=new Kt;R.layers.enable(2),R.viewport=new ot;const O=[T,R],S=new ux;S.layers.enable(1),S.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=y[$];return J===void 0&&(J=new ha,y[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=y[$];return J===void 0&&(J=new ha,y[$]=J),J.getGripSpace()},this.getHand=function($){let J=y[$];return J===void 0&&(J=new ha,y[$]=J),J.getHandSpace()};function H($){const J=_.indexOf($.inputSource);if(J===-1)return;const ce=y[J];ce!==void 0&&(ce.update($.inputSource,$.frame,c||o),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",I);for(let $=0;$<y.length;$++){const J=_[$];J!==null&&(_[$]=null,y[$].disconnect(J))}w=null,B=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",F),i.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new pn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,ce=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?Es:Hi,ce=v.stencil?zi:vi);const ye={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new pn(d.textureWidth,d.textureHeight,{format:fn,type:Mi,depthTexture:new ju(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ne=e.properties.get(p);Ne.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I($){for(let J=0;J<$.removed.length;J++){const ce=$.removed[J],ve=_.indexOf(ce);ve>=0&&(_[ve]=null,y[ve].disconnect(ce))}for(let J=0;J<$.added.length;J++){const ce=$.added[J];let ve=_.indexOf(ce);if(ve===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=_.length){_.push(ce),ve=Ne;break}else if(_[Ne]===null){_[Ne]=ce,ve=Ne;break}if(ve===-1)break}const ye=y[ve];ye&&ye.connect(ce)}}const D=new E,N=new E;function Z($,J,ce){D.setFromMatrixPosition(J.matrixWorld),N.setFromMatrixPosition(ce.matrixWorld);const ve=D.distanceTo(N),ye=J.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,Fe=ye[14]/(ye[10]-1),Re=ye[14]/(ye[10]+1),Qe=(ye[9]+1)/ye[5],G=(ye[9]-1)/ye[5],Wt=(ye[8]-1)/ye[0],we=(Ne[8]+1)/Ne[0],Ie=Fe*Wt,_e=Fe*we,mt=ve/(-Wt+we),ke=mt*-Wt;J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const P=Fe+mt,b=Re+mt,q=Ie-ke,ie=_e+(ve-ke),ne=Qe*Re/b*P,se=G*Re/b*P;$.projectionMatrix.makePerspective(q,ie,ne,se,P,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function V($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;S.near=R.near=T.near=$.near,S.far=R.far=T.far=$.far,(w!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,B=S.far);const J=$.parent,ce=S.cameras;V(S,J);for(let ve=0;ve<ce.length;ve++)V(ce[ve],J);ce.length===2?Z(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),Y($,S,J)};function Y($,J,ce){ce===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)};let Q=null;function ee($,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ve=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let ye=0;ye<ce.length;ye++){const Ne=ce[ye];let Fe=null;if(f!==null)Fe=f.getViewport(Ne);else{const Qe=u.getViewSubImage(d,Ne);Fe=Qe.viewport,ye===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let Re=O[ye];Re===void 0&&(Re=new Kt,Re.layers.enable(ye),Re.viewport=new ot,O[ye]=Re),Re.matrix.fromArray(Ne.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ne.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ye===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(Re)}}for(let ce=0;ce<y.length;ce++){const ve=_[ce],ye=y[ce];ve!==null&&ye!==void 0&&ye.update(ve,J,c||o)}Q&&Q($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const K=new Yu;K.setAnimationLoop(ee),this.setAnimationLoop=function($){Q=$},this.dispose=function(){}}}function px(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mx(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(y,C);const T=e.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){const _=u();y.__bindingPointIndex=_;const x=r.createBuffer(),C=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,R=x.length;T<R;T++){const O=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,w=O.length;S<w;S++){const B=O[S];if(f(B,T,S,C)===!0){const H=B.__offset,F=Array.isArray(B.value)?B.value:[B.value];let I=0;for(let D=0;D<F.length;D++){const N=F[D],Z=v(N);typeof N=="number"||typeof N=="boolean"?(B.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,H+I,B.__data)):N.isMatrix3?(B.__data[0]=N.elements[0],B.__data[1]=N.elements[1],B.__data[2]=N.elements[2],B.__data[3]=0,B.__data[4]=N.elements[3],B.__data[5]=N.elements[4],B.__data[6]=N.elements[5],B.__data[7]=0,B.__data[8]=N.elements[6],B.__data[9]=N.elements[7],B.__data[10]=N.elements[8],B.__data[11]=0):(N.toArray(B.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,_,x,C){const T=y.value,R=_+"_"+x;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const O=C[R];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return C[R]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(y){const _=y.uniforms;let x=0;const C=16;for(let R=0,O=_.length;R<O;R++){const S=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,B=S.length;w<B;w++){const H=S[w],F=Array.isArray(H.value)?H.value:[H.value];for(let I=0,D=F.length;I<D;I++){const N=F[I],Z=v(N),V=x%C;V!==0&&C-V<Z.boundary&&(x+=C-V),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=Z.storage}}}const T=x%C;return T>0&&(x+=C-T),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class td{constructor(e={}){const{canvas:t=fg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const _=this;let x=!1,C=0,T=0,R=null,O=-1,S=null;const w=new ot,B=new ot;let H=null;const F=new ge(0);let I=0,D=t.width,N=t.height,Z=1,V=null,Y=null;const Q=new ot(0,0,D,N),ee=new ot(0,0,D,N);let K=!1;const $=new ll;let J=!1,ce=!1,ve=null;const ye=new Xe,Ne=new be,Fe=new E,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return R===null?Z:1}let G=n;function Wt(A,k){for(let X=0;X<A.length;X++){const j=A[X],W=t.getContext(j,k);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ae,!1),G===null){const k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),G=Wt(k,A),G===null)throw Wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,Ie,_e,mt,ke,P,b,q,ie,ne,se,xe,he,pe,Ae,ze,te,st,Ye,Le,Se,me,Oe,tt;function vt(){we=new Ey(G),Ie=new xy(G,we,e),we.init(Ie),me=new hx(G,we,Ie),_e=new lx(G,we,Ie),mt=new Cy(G),ke=new $_,P=new cx(G,we,_e,ke,Ie,me,mt),b=new Sy(_),q=new Ty(_),ie=new Og(G,Ie),Oe=new yy(G,we,ie,Ie),ne=new Ay(G,ie,mt,Oe),se=new Dy(G,ne,ie,mt),Ye=new Iy(G,Ie,P),ze=new My(ke),xe=new j_(_,b,q,we,Ie,Oe,ze),he=new px(_,ke),pe=new Z_,Ae=new ix(we,Ie),st=new vy(_,b,q,_e,se,d,l),te=new ax(_,se,Ie),tt=new mx(G,mt,Ie,_e),Le=new _y(G,we,mt,Ie),Se=new Ry(G,we,mt,Ie),mt.programs=xe.programs,_.capabilities=Ie,_.extensions=we,_.properties=ke,_.renderLists=pe,_.shadowMap=te,_.state=_e,_.info=mt}vt();const Ge=new fx(_,G);this.xr=Ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(D,N,!1))},this.getSize=function(A){return A.set(D,N)},this.setSize=function(A,k,X=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,N=k,t.width=Math.floor(A*Z),t.height=Math.floor(k*Z),X===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(D*Z,N*Z).floor()},this.setDrawingBufferSize=function(A,k,X){D=A,N=k,Z=X,t.width=Math.floor(A*X),t.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,k,X,j){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,k,X,j),_e.viewport(w.copy(Q).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,k,X,j){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,k,X,j),_e.scissor(B.copy(ee).multiplyScalar(Z).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(A){_e.setScissorTest(K=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(A=!0,k=!0,X=!0){let j=0;if(A){let W=!1;if(R!==null){const de=R.texture.format;W=de===Cu||de===Ru||de===Au}if(W){const de=R.texture.type,Me=de===Mi||de===vi||de===rl||de===zi||de===Tu||de===Eu,Ee=st.getClearColor(),Pe=st.getClearAlpha(),He=Ee.r,De=Ee.g,Ue=Ee.b;Me?(f[0]=He,f[1]=De,f[2]=Ue,f[3]=Pe,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=He,g[1]=De,g[2]=Ue,g[3]=Pe,G.clearBufferiv(G.COLOR,0,g))}else j|=G.COLOR_BUFFER_BIT}k&&(j|=G.DEPTH_BUFFER_BIT),X&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),pe.dispose(),Ae.dispose(),ke.dispose(),b.dispose(),q.dispose(),se.dispose(),Oe.dispose(),tt.dispose(),xe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",qt),Ge.removeEventListener("sessionend",ct),ve&&(ve.dispose(),ve=null),Xt.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=mt.autoReset,k=te.enabled,X=te.autoUpdate,j=te.needsUpdate,W=te.type;vt(),mt.autoReset=A,te.enabled=k,te.autoUpdate=X,te.needsUpdate=j,te.type=W}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const k=A.target;k.removeEventListener("dispose",le),Ce(k)}function Ce(A){Te(A),ke.remove(A)}function Te(A){const k=ke.get(A).programs;k!==void 0&&(k.forEach(function(X){xe.releaseProgram(X)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,j,W,de){k===null&&(k=Re);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ee=Md(A,k,X,j,W);_e.setMaterial(j,Me);let Pe=X.index,He=1;if(j.wireframe===!0){if(Pe=ne.getWireframeAttribute(X),Pe===void 0)return;He=2}const De=X.drawRange,Ue=X.attributes.position;let _t=De.start*He,nn=(De.start+De.count)*He;de!==null&&(_t=Math.max(_t,de.start*He),nn=Math.min(nn,(de.start+de.count)*He)),Pe!==null?(_t=Math.max(_t,0),nn=Math.min(nn,Pe.count)):Ue!=null&&(_t=Math.max(_t,0),nn=Math.min(nn,Ue.count));const Pt=nn-_t;if(Pt<0||Pt===1/0)return;Oe.setup(W,j,Ee,X,Pe);let kn,gt=Le;if(Pe!==null&&(kn=ie.get(Pe),gt=Se,gt.setIndex(kn)),W.isMesh)j.wireframe===!0?(_e.setLineWidth(j.wireframeLinewidth*Qe()),gt.setMode(G.LINES)):gt.setMode(G.TRIANGLES);else if(W.isLine){let We=j.linewidth;We===void 0&&(We=1),_e.setLineWidth(We*Qe()),W.isLineSegments?gt.setMode(G.LINES):W.isLineLoop?gt.setMode(G.LINE_LOOP):gt.setMode(G.LINE_STRIP)}else W.isPoints?gt.setMode(G.POINTS):W.isSprite&&gt.setMode(G.TRIANGLES);if(W.isBatchedMesh)gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)gt.renderInstances(_t,Pt,W.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Eo=Math.min(X.instanceCount,We);gt.renderInstances(_t,Pt,Eo)}else gt.render(_t,Pt)};function at(A,k,X){A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=Zt,A.needsUpdate=!0,_r(A,k,X),A.side=ii,A.needsUpdate=!0,_r(A,k,X),A.side=tn):_r(A,k,X)}this.compile=function(A,k,X=null){X===null&&(X=A),m=Ae.get(X),m.init(),y.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(_._useLegacyLights);const j=new Set;return A.traverse(function(W){const de=W.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ee=de[Me];at(Ee,X,W),j.add(Ee)}else at(de,X,W),j.add(de)}),y.pop(),m=null,j},this.compileAsync=function(A,k,X=null){const j=this.compile(A,k,X);return new Promise(W=>{function de(){if(j.forEach(function(Me){ke.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){W(A);return}setTimeout(de,10)}we.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let lt=null;function Ct(A){lt&&lt(A)}function qt(){Xt.stop()}function ct(){Xt.start()}const Xt=new Yu;Xt.setAnimationLoop(Ct),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(A){lt=A,Ge.setAnimationLoop(A),A===null?Xt.stop():Xt.start()},Ge.addEventListener("sessionstart",qt),Ge.addEventListener("sessionend",ct),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(k),k=Ge.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,R),m=Ae.get(A,y.length),m.init(),y.push(m),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(ye),ce=this.localClippingEnabled,J=ze.init(this.clippingPlanes,ce),v=pe.get(A,p.length),v.init(),p.push(v),Tn(A,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(V,Y),this.info.render.frame++,J===!0&&ze.beginShadows();const X=m.state.shadowsArray;if(te.render(X,A,k),J===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(v,A),m.setupLights(_._useLegacyLights),k.isArrayCamera){const j=k.cameras;for(let W=0,de=j.length;W<de;W++){const Me=j[W];_l(v,A,Me,Me.viewport)}}else _l(v,A,k);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,k),Oe.resetDefaultState(),O=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Tn(A,k,X,j){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){j&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const Me=se.update(A),Ee=A.material;Ee.visible&&v.push(A,Me,Ee,X,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const Me=se.update(A),Ee=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Fe.copy(Me.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Ee)){const Pe=Me.groups;for(let He=0,De=Pe.length;He<De;He++){const Ue=Pe[He],_t=Ee[Ue.materialIndex];_t&&_t.visible&&v.push(A,Me,_t,X,Fe.z,Ue)}}else Ee.visible&&v.push(A,Me,Ee,X,Fe.z,null)}}const de=A.children;for(let Me=0,Ee=de.length;Me<Ee;Me++)Tn(de[Me],k,X,j)}function _l(A,k,X,j){const W=A.opaque,de=A.transmissive,Me=A.transparent;m.setupLightsView(X),J===!0&&ze.setGlobalState(_.clippingPlanes,X),de.length>0&&xd(W,de,k,X),j&&_e.viewport(w.copy(j)),W.length>0&&yr(W,k,X),de.length>0&&yr(de,k,X),Me.length>0&&yr(Me,k,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function xd(A,k,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const de=Ie.isWebGL2;ve===null&&(ve=new pn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Un:Mi,minFilter:Si,samples:de?4:0})),_.getDrawingBufferSize(Ne),de?ve.setSize(Ne.x,Ne.y):ve.setSize(ho(Ne.x),ho(Ne.y));const Me=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(F),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Ee=_.toneMapping;_.toneMapping=xi,yr(A,X,j),P.updateMultisampleRenderTarget(ve),P.updateRenderTargetMipmap(ve);let Pe=!1;for(let He=0,De=k.length;He<De;He++){const Ue=k[He],_t=Ue.object,nn=Ue.geometry,Pt=Ue.material,kn=Ue.group;if(Pt.side===tn&&_t.layers.test(j.layers)){const gt=Pt.side;Pt.side=Zt,Pt.needsUpdate=!0,xl(_t,X,j,nn,Pt,kn),Pt.side=gt,Pt.needsUpdate=!0,Pe=!0}}Pe===!0&&(P.updateMultisampleRenderTarget(ve),P.updateRenderTargetMipmap(ve)),_.setRenderTarget(Me),_.setClearColor(F,I),_.toneMapping=Ee}function yr(A,k,X){const j=k.isScene===!0?k.overrideMaterial:null;for(let W=0,de=A.length;W<de;W++){const Me=A[W],Ee=Me.object,Pe=Me.geometry,He=j===null?Me.material:j,De=Me.group;Ee.layers.test(X.layers)&&xl(Ee,k,X,Pe,He,De)}}function xl(A,k,X,j,W,de){A.onBeforeRender(_,k,X,j,W,de),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(_,k,X,j,A,de),W.transparent===!0&&W.side===tn&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,_.renderBufferDirect(X,k,j,W,A,de),W.side=ii,W.needsUpdate=!0,_.renderBufferDirect(X,k,j,W,A,de),W.side=tn):_.renderBufferDirect(X,k,j,W,A,de),A.onAfterRender(_,k,X,j,W,de)}function _r(A,k,X){k.isScene!==!0&&(k=Re);const j=ke.get(A),W=m.state.lights,de=m.state.shadowsArray,Me=W.state.version,Ee=xe.getParameters(A,W.state,de,k,X),Pe=xe.getProgramCacheKey(Ee);let He=j.programs;j.environment=A.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(A.isMeshStandardMaterial?q:b).get(A.envMap||j.environment),He===void 0&&(A.addEventListener("dispose",le),He=new Map,j.programs=He);let De=He.get(Pe);if(De!==void 0){if(j.currentProgram===De&&j.lightsStateVersion===Me)return Sl(A,Ee),De}else Ee.uniforms=xe.getUniforms(A),A.onBuild(X,Ee,_),A.onBeforeCompile(Ee,_),De=xe.acquireProgram(Ee,Pe),He.set(Pe,De),j.uniforms=Ee.uniforms;const Ue=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Sl(A,Ee),j.needsLights=bd(A),j.lightsStateVersion=Me,j.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMap.value=W.state.directionalShadowMap,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotShadowMap.value=W.state.spotShadowMap,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMap.value=W.state.pointShadowMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=De,j.uniformsList=null,De}function Ml(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=no.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Sl(A,k){const X=ke.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Md(A,k,X,j,W){k.isScene!==!0&&(k=Re),P.resetTextureUnits();const de=k.fog,Me=j.isMeshStandardMaterial?k.environment:null,Ee=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ut,Pe=(j.isMeshStandardMaterial?q:b).get(j.envMap||Me),He=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!X.morphAttributes.position,_t=!!X.morphAttributes.normal,nn=!!X.morphAttributes.color;let Pt=xi;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const kn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=kn!==void 0?kn.length:0,We=ke.get(j),Eo=m.state.lights;if(J===!0&&(ce===!0||A!==S)){const an=A===S&&j.id===O;ze.setState(j,A,an)}let yt=!1;j.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Eo.state.version||We.outputColorSpace!==Ee||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==Pe||j.fog===!0&&We.fog!==de||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ze.numPlanes||We.numIntersection!==ze.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==De||We.morphTargets!==Ue||We.morphNormals!==_t||We.morphColors!==nn||We.toneMapping!==Pt||Ie.isWebGL2===!0&&We.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,We.__version=j.version);let wi=We.currentProgram;yt===!0&&(wi=_r(j,k,W));let bl=!1,Hs=!1,Ao=!1;const Ot=wi.getUniforms(),Ti=We.uniforms;if(_e.useProgram(wi.program)&&(bl=!0,Hs=!0,Ao=!0),j.id!==O&&(O=j.id,Hs=!0),bl||S!==A){Ot.setValue(G,"projectionMatrix",A.projectionMatrix),Ot.setValue(G,"viewMatrix",A.matrixWorldInverse);const an=Ot.map.cameraPosition;an!==void 0&&an.setValue(G,Fe.setFromMatrixPosition(A.matrixWorld)),Ie.logarithmicDepthBuffer&&Ot.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ot.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Hs=!0,Ao=!0)}if(W.isSkinnedMesh){Ot.setOptional(G,W,"bindMatrix"),Ot.setOptional(G,W,"bindMatrixInverse");const an=W.skeleton;an&&(Ie.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Ot.setValue(G,"boneTexture",an.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ot.setOptional(G,W,"batchingTexture"),Ot.setValue(G,"batchingTexture",W._matricesTexture,P));const Ro=X.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&Ie.isWebGL2===!0)&&Ye.update(W,X,wi),(Hs||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Ot.setValue(G,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ti.envMap.value=Pe,Ti.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Hs&&(Ot.setValue(G,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Sd(Ti,Ao),de&&j.fog===!0&&he.refreshFogUniforms(Ti,de),he.refreshMaterialUniforms(Ti,j,Z,N,ve),no.upload(G,Ml(We),Ti,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(no.upload(G,Ml(We),Ti,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ot.setValue(G,"center",W.center),Ot.setValue(G,"modelViewMatrix",W.modelViewMatrix),Ot.setValue(G,"normalMatrix",W.normalMatrix),Ot.setValue(G,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const an=j.uniformsGroups;for(let Co=0,wd=an.length;Co<wd;Co++)if(Ie.isWebGL2){const wl=an[Co];tt.update(wl,wi),tt.bind(wl,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function Sd(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function bd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,k,X){ke.get(A.texture).__webglTexture=k,ke.get(A.depthTexture).__webglTexture=X;const j=ke.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const X=ke.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){R=A,C=k,T=X;let j=!0,W=null,de=!1,Me=!1;if(A){const Pe=ke.get(A);Pe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(G.FRAMEBUFFER,null),j=!1):Pe.__webglFramebuffer===void 0?P.setupRenderTarget(A):Pe.__hasExternalTextures&&P.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const De=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[k])?W=De[k][X]:W=De[k],de=!0):Ie.isWebGL2&&A.samples>0&&P.useMultisampledRTT(A)===!1?W=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[X]:W=De,w.copy(A.viewport),B.copy(A.scissor),H=A.scissorTest}else w.copy(Q).multiplyScalar(Z).floor(),B.copy(ee).multiplyScalar(Z).floor(),H=K;if(_e.bindFramebuffer(G.FRAMEBUFFER,W)&&Ie.drawBuffers&&j&&_e.drawBuffers(A,W),_e.viewport(w),_e.scissor(B),_e.setScissorTest(H),de){const Pe=ke.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,X)}else if(Me){const Pe=ke.get(A.texture),He=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.__webglTexture,X||0,He)}O=-1},this.readRenderTargetPixels=function(A,k,X,j,W,de,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){_e.bindFramebuffer(G.FRAMEBUFFER,Ee);try{const Pe=A.texture,He=Pe.format,De=Pe.type;if(He!==fn&&me.convert(He)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===Un&&(we.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&we.has("EXT_color_buffer_float"));if(De!==Mi&&me.convert(De)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Jn&&(Ie.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-j&&X>=0&&X<=A.height-W&&G.readPixels(k,X,j,W,me.convert(He),me.convert(De),de)}finally{const Pe=R!==null?ke.get(R).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,k,X=0){const j=Math.pow(2,-X),W=Math.floor(k.image.width*j),de=Math.floor(k.image.height*j);P.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,A.x,A.y,W,de),_e.unbindTexture()},this.copyTextureToTexture=function(A,k,X,j=0){const W=k.image.width,de=k.image.height,Me=me.convert(X.format),Ee=me.convert(X.type);P.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,j,A.x,A.y,W,de,Me,Ee,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,j,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Me,k.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,j,A.x,A.y,Me,Ee,k.image),j===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,k,X,j,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,Pe=me.convert(j.format),He=me.convert(j.type);let De;if(j.isData3DTexture)P.setTexture3D(j,0),De=G.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)P.setTexture2DArray(j,0),De=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Ue=G.getParameter(G.UNPACK_ROW_LENGTH),_t=G.getParameter(G.UNPACK_IMAGE_HEIGHT),nn=G.getParameter(G.UNPACK_SKIP_PIXELS),Pt=G.getParameter(G.UNPACK_SKIP_ROWS),kn=G.getParameter(G.UNPACK_SKIP_IMAGES),gt=X.isCompressedTexture?X.mipmaps[W]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,gt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(De,W,k.x,k.y,k.z,de,Me,Ee,Pe,He,gt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(De,W,k.x,k.y,k.z,de,Me,Ee,Pe,gt.data)):G.texSubImage3D(De,W,k.x,k.y,k.z,de,Me,Ee,Pe,He,gt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ue),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_t),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,kn),W===0&&j.generateMipmaps&&G.generateMipmap(De),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,_e.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ol?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===vo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Vi:Iu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vi?ut:Ut}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gx extends td{}gx.prototype.isWebGL1Renderer=!0;class hl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new hl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nd extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new E;class ul{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hh=new E,uh=new ot,dh=new ot,yx=new E,fh=new Xe,Yr=new E,ua=new On,ph=new Xe,da=new yo;class _x extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$l,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),e.ray.intersectsSphere(ua)!==!1&&(ph.copy(i).invert(),da.copy(e.ray).applyMatrix4(ph),!(this.boundingBox!==null&&da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,da)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Im?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;uh.fromBufferAttribute(i.attributes.skinIndex,e),dh.fromBufferAttribute(i.attributes.skinWeight,e),hh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=dh.getComponent(s);if(o!==0){const a=uh.getComponent(s);fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yx.copy(hh).applyMatrix4(fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class id extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xx extends Nt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=wt,h=wt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new Xe,Mx=new Xe;class dl{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Mx;mh.multiplyMatrices(a,t[s]),mh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xx(t,e,e,fn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new id),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class qa extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new Xe,gh=new Xe,jr=[],vh=new bn,Sx=new Xe,Ks=new Ve,Zs=new On;class Xa extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),vh.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Zs.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),e.ray.intersectsSphere(Zs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),gh.multiplyMatrices(n,gs),Ks.matrixWorld=gh,Ks.raycast(e,jr);for(let o=0,a=jr.length;o<a;o++){const l=jr[o];l.instanceId=s,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yh=new E,_h=new E,xh=new Xe,fa=new yo,$r=new On;class So extends $e{constructor(e=new Gt,t=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)yh.fromBufferAttribute(t,i-1),_h.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yh.distanceTo(_h);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;xh.copy(i).invert(),fa.copy(e.ray).applyMatrix4(xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new E,h=new E,u=new E,d=new E,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=p,x=y-1;_<x;_+=f){const C=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),fa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let _=p,x=y-1;_<x;_+=f){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),fa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Mh=new E,Sh=new E;class bx extends So{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Mh.fromBufferAttribute(t,i),Sh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mh.distanceTo(Sh);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wx extends So{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sd extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bh=new Xe,Ya=new yo,Kr=new On,Zr=new E;class Tx extends $e{constructor(e=new Gt,t=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;bh.copy(i).invert(),Ya.copy(e.ray).applyMatrix4(bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Zr.fromBufferAttribute(u,m),wh(Zr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Zr.fromBufferAttribute(u,g),wh(Zr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wh(r,e,t,n,i,s,o){const a=Ya.distanceSqToPoint(r);if(a<t){const l=new E;Ya.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Wi extends Nt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new E,h=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fs extends Gt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function y(){const x=new E,C=new E;let T=0;const R=(t-e)/n;for(let O=0;O<=s;O++){const S=[],w=O/s,B=w*(t-e)+e;for(let H=0;H<=i;H++){const F=H/i,I=F*l+a,D=Math.sin(I),N=Math.cos(I);C.x=B*D,C.y=-w*n+m,C.z=B*N,u.push(C.x,C.y,C.z),x.set(D,R,N).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-w),S.push(g++)}v.push(S)}for(let O=0;O<i;O++)for(let S=0;S<s;S++){const w=v[S][O],B=v[S+1][O],H=v[S+1][O+1],F=v[S][O+1];h.push(w,B,F),h.push(B,H,F),T+=6}c.addGroup(p,T,0),p+=T}function _(x){const C=g,T=new be,R=new E;let O=0;const S=x===!0?e:t,w=x===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const B=g;for(let H=0;H<=i;H++){const I=H/i*l+a,D=Math.cos(I),N=Math.sin(I);R.x=S*N,R.y=m*w,R.z=S*D,u.push(R.x,R.y,R.z),d.push(0,w,0),T.x=D*.5+.5,T.y=N*.5*w+.5,f.push(T.x,T.y),g++}for(let H=0;H<i;H++){const F=C+H,I=B+H;x===!0?h.push(I,I+1,F):h.push(I+1,I,F),O+=3}c.addGroup(p,O,x===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar extends Fs{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends Gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(i+T*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+T*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+x,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],x=h[p][y],C=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(_,x,T),(p!==n-1||l<Math.PI)&&f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fl extends Gt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ex extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nt extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Qr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ax(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Rx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Th(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function rd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class mr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cx extends mr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:s=e,a=2*t-n;break;case bc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:o=e,l=2*n-t;break;case bc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+y*o[c+C]+_*o[l+C]+x*o[u+C];return s}}class Px extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class Lx extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ax(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=As;class Os extends Bn{}Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=cr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class od extends Bn{}od.prototype.ValueTypeName="color";class Ps extends Bn{}Ps.prototype.ValueTypeName="number";class Ix extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)bi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ji extends Bn{InterpolantFactoryMethodLinear(e){return new Ix(this.times,this.values,this.getValueSize(),e)}}ji.prototype.ValueTypeName="quaternion";ji.prototype.DefaultInterpolation=As;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Bn{}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=cr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Bn{}Ls.prototype.ValueTypeName="vector";class Dx{constructor(e,t=-1,n,i=Hm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ux(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Rx(l);l=Th(l,1,h),c=Th(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];rd(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const _=d[g];m.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new Ps(".morphTargetInfluence["+v+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ls,f+".position",d,"pos",i),n(ji,f+".quaternion",d,"rot",i),n(Ls,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Nx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return od;case"quaternion":return ji;case"bool":case"boolean":return Os;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ux(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nx(r.type);if(r.times===void 0){const t=[],n=[];rd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const yi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Fx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ox=new Fx;class ks{constructor(e){this.manager=e!==void 0?e:Ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Bx extends Error{constructor(e,t){super(e),this.response=t}}class ad extends ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=yi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Kn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,R=h.length;T<R;T++){const O=h[T];O.onProgress&&O.onProgress(C)}p.enqueue(x),y()}})}}});return new Response(m)}else throw new Bx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{yi.add(e,c);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kx extends ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=hr("img");function l(){h(),yi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class zx extends ks{constructor(e){super(e)}load(e,t,n,i){const s=new Nt,o=new kx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gr extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Hx extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pa=new Xe,Eh=new E,Ah=new E;class pl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vx extends pl{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gx extends gr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Vx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rh=new Xe,Qs=new E,ma=new E;class Wx extends pl{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qs),ma.copy(n.position),ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ma),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh)}}class qx extends gr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xx extends pl{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ld extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Xx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yx extends gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jx extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),yi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});yi.add(e,l),s.manager.itemStart(e)}}class cd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ch();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ch(){return(typeof performance>"u"?Date:performance).now()}const ml="\\[\\]\\.:\\/",$x=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",Kx="[^"+ml.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",gl),Qx=/(WCOD+)?/.source.replace("WCOD",Kx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),eM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),tM=new RegExp("^"+Zx+Qx+Jx+eM+"$"),nM=["material","materials","bones","map"];class iM{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($x,"")}static parseTrackName(e){const t=tM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);nM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=iM;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);const Fi={playerTankId:"panther",battlefieldId:"factory",weatherId:"clear",modeId:"classic"},In={classic:{id:"classic",label:"经典模式",description:"保护中央基地，歼灭所有进攻坦克。",objective:"基地守住且敌军清零即获胜。",accent:"linear-gradient(135deg, rgba(250, 204, 21, 0.28), rgba(180, 83, 9, 0.12))"},survival:{id:"survival",label:"生存模式",description:"无限波敌人持续进攻，坚持越久得分越高。",objective:"波数不断提高，目标是刷新生存记录。",accent:"linear-gradient(135deg, rgba(248, 113, 113, 0.28), rgba(127, 29, 29, 0.12))"},annihilation:{id:"annihilation",label:"歼灭模式",description:"在倒计时内击毁固定数量目标。",objective:"180 秒内击毁 12 辆敌军载具。",accent:"linear-gradient(135deg, rgba(96, 165, 250, 0.26), rgba(30, 64, 175, 0.12))",timeLimit:180,killTarget:12}},ja={factory:{preview:"linear-gradient(160deg, rgba(75, 85, 99, 0.92), rgba(31, 41, 55, 0.96)), radial-gradient(circle at 78% 22%, rgba(251, 191, 36, 0.28), transparent 24%)",highlights:["高密度掩体","适合巷战","建筑可破坏"]},city:{preview:"linear-gradient(160deg, rgba(88, 28, 36, 0.9), rgba(30, 41, 59, 0.96)), radial-gradient(circle at 25% 18%, rgba(248, 113, 113, 0.24), transparent 24%)",highlights:["街道火线长","废墟遮挡多","适合伏击"]},countryside:{preview:"linear-gradient(160deg, rgba(39, 74, 52, 0.92), rgba(24, 34, 30, 0.96)), radial-gradient(circle at 70% 26%, rgba(190, 242, 100, 0.22), transparent 24%)",highlights:["机动空间大","地形起伏","适合侧袭"]}},hd={clear:{preview:"linear-gradient(180deg, rgba(125, 163, 205, 0.94), rgba(77, 102, 118, 0.9) 58%, rgba(59, 74, 58, 0.95))",summary:"能见度最佳，远距离交火更稳定。"},rain:{preview:"linear-gradient(180deg, rgba(82, 101, 119, 0.94), rgba(57, 68, 79, 0.92) 54%, rgba(44, 49, 55, 0.96))",summary:"地面湿滑、雾化增强，移动射击更难。"},fog:{preview:"linear-gradient(180deg, rgba(159, 166, 164, 0.94), rgba(114, 121, 119, 0.92) 52%, rgba(76, 83, 80, 0.96))",summary:"视距显著缩短，近距离遭遇战更频繁。"},dusk:{preview:"linear-gradient(180deg, rgba(207, 125, 72, 0.94), rgba(110, 78, 85, 0.92) 54%, rgba(49, 56, 63, 0.96))",summary:"逆光与暖色雾层并存，轮廓识别更吃经验。"}};var Ss=(r=>(r.POV="POV",r.ThirdPerson="THIRD_PERSON",r.TopDown="TOP_DOWN",r))(Ss||{});class sM{constructor(e){L(this,"camera");L(this,"mode","THIRD_PERSON");L(this,"transitionTime",1);L(this,"shakeTime",0);L(this,"shakeIntensity",0);L(this,"currentPosition",new E(0,5,-10));L(this,"currentLookAt",new E);L(this,"desiredPosition",new E);L(this,"desiredLookAt",new E);L(this,"tempPosition",new E);L(this,"tempLook",new E);L(this,"turretLook",new E);L(this,"shakeOffset",new E);L(this,"tacticalFocus",new E);L(this,"tacticalOffset",new E);L(this,"tacticalBlend",0);this.camera=new Kt(65,e,.1,450),this.camera.position.copy(this.currentPosition)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}cycleMode(){return this.mode==="POV"?this.mode="THIRD_PERSON":this.mode==="THIRD_PERSON"?this.mode="TOP_DOWN":this.mode="POV",this.transitionTime=0,this.mode}setMode(e){this.mode!==e&&(this.mode=e,this.transitionTime=0)}getMode(){return this.mode}setTopDownFocus(e){this.tacticalFocus.copy(e),this.tacticalBlend=1,this.setMode("TOP_DOWN")}applyShake(e,t=.24){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeTime=Math.max(this.shakeTime,t)}update(e,t,n){this.mode==="POV"?this.setPovTargets(t.tank.povAnchor,t):this.mode==="THIRD_PERSON"?this.setObjectTargets(t.tank.chaseAnchor,t.tank.root,n):this.setTopTargets(t.tank.topAnchor,t.tank.root,t,e),this.transitionTime=Math.min(1,this.transitionTime+e/.3);const i=z.smoothstep(this.transitionTime,0,1),s=1-Math.pow(.001,e*4);this.currentPosition.lerp(this.tempPosition.copy(this.currentPosition).lerp(this.desiredPosition,i),s),this.currentLookAt.lerp(this.tempLook.copy(this.currentLookAt).lerp(this.desiredLookAt,i),s),this.camera.position.copy(this.currentPosition),this.shakeTime>0&&(this.shakeTime=Math.max(0,this.shakeTime-e),this.shakeOffset.set((Math.random()-.5)*this.shakeIntensity,(Math.random()-.5)*this.shakeIntensity*.6,(Math.random()-.5)*this.shakeIntensity),this.camera.position.add(this.shakeOffset),this.shakeIntensity=Math.max(0,this.shakeIntensity-e*5)),this.camera.lookAt(this.currentLookAt)}setPovTargets(e,t){e.getWorldPosition(this.desiredPosition),t.getMuzzleWorldDirection(this.turretLook).multiplyScalar(45).add(this.desiredPosition),this.desiredLookAt.copy(this.turretLook)}setObjectTargets(e,t,n){if(e.getWorldPosition(this.desiredPosition),n){this.desiredLookAt.copy(n);return}t.getWorldPosition(this.desiredLookAt),this.desiredLookAt.y+=1.6}setTopTargets(e,t,n,i){e.getWorldPosition(this.desiredPosition),t.getWorldPosition(this.desiredLookAt),this.tacticalBlend>.001&&(n.getPosition(this.tempLook),this.tacticalOffset.copy(this.tacticalFocus).sub(this.tempLook).multiplyScalar(this.tacticalBlend),this.desiredPosition.add(this.tacticalOffset),this.desiredLookAt.add(this.tacticalOffset)),this.tacticalBlend=Math.max(0,this.tacticalBlend-i*(this.mode==="TOP_DOWN"?.12:.45))}}const rM=6,Ph=3.2,oM=2.4;class aM{constructor(e,t,n,i={}){L(this,"tank");L(this,"body");L(this,"definition");L(this,"yaw",0);L(this,"turretYaw",0);L(this,"gunPitch",-.08);L(this,"destroyed",!1);L(this,"reloadRemaining",0);L(this,"bodyHalfExtents");L(this,"forwardVector",new E);L(this,"maxForwardSpeed");L(this,"maxReverseSpeed");L(this,"forwardSpeed",0);L(this,"turnVelocity",0);L(this,"engineLoad",0);L(this,"slipRatio",0);L(this,"suspensionTravel",0);L(this,"currentTerrain","grass");L(this,"mobilityMultiplier",1);L(this,"reloadMultiplier",1);L(this,"drivePhase","stopped");var a;this.tank=t,this.definition=n,this.yaw=i.yaw??0;const s=this.getMassPenalty();this.maxForwardSpeed=(5.1+this.definition.mobility*1.95-s*.45)*rM,this.maxReverseSpeed=this.maxForwardSpeed*.52,this.bodyHalfExtents=new M(t.profile.collisionHalfExtents.x,t.profile.collisionHalfExtents.y,t.profile.collisionHalfExtents.z);const o=((a=i.position)==null?void 0:a.clone())??new M(0,0,0);o.y=this.getRideHeight(),this.body=new ue({mass:n.mass,shape:new Xi(this.bodyHalfExtents),linearDamping:.55,angularDamping:.95,position:o}),this.body.angularFactor.set(0,0,0),this.body.linearFactor.set(1,0,1),this.body.quaternion.setFromEuler(0,this.yaw,0,"YZX"),e.addBody(this.body),this.tank.updateAnimation(0,{leftTrackSpeed:0,rightTrackSpeed:0,pitch:0,roll:0,speedRatio:0,heave:0}),this.syncVisuals()}update(e,t,n,i,s={trackBroken:!1,gunDamaged:!1,engineFire:!1}){if(this.reloadRemaining=Math.max(0,this.reloadRemaining-e),this.currentTerrain=i.type,this.tank.applyDamageState(s,e),this.destroyed){this.forwardSpeed=0,this.turnVelocity=0,this.body.velocity.setZero(),this.tank.updateAnimation(e,{leftTrackSpeed:0,rightTrackSpeed:0,pitch:0,roll:0,speedRatio:0,heave:0}),this.syncVisuals();return}const o=this.forwardSpeed,a=s.trackBroken?0:z.clamp(t.throttle,-1,1),l=z.clamp(t.turn,-1,1),c=z.clamp(i.traction*(s.trackBroken?.15:1),.12,1),h=i.speedMultiplier*(s.engineFire?.88:1),u=Math.abs(a),d=a>=0?this.maxForwardSpeed:this.maxReverseSpeed,f=z.clamp(Math.abs(o)/Math.max(d*h*this.mobilityMultiplier,.001),0,1);let g=u>.08&&Math.abs(o)>.4&&Math.sign(a)!==Math.sign(o);this.drivePhase=this.resolveDrivePhase(u,f,g);const v=this.getEngineTarget(u,this.drivePhase),m=this.getEngineRamp(this.drivePhase,v>this.engineLoad);this.engineLoad=z.damp(this.engineLoad,v,m,e);const p=this.getEngineCurve(this.drivePhase),y=Math.sign(a)*d*this.getTargetSpeedRatio(u,this.drivePhase)*h*p*this.mobilityMultiplier,_=this.getAccelerationResponse(this.drivePhase,g)*z.lerp(.45,1.1,c),x=this.getBrakeResponse(i,o)*(Math.abs(a)<.08||Math.sign(a)!==Math.sign(o)?1:.58);if(Math.abs(a)>.04){const V=g&&Math.abs(this.forwardSpeed)>.18?0:y;this.forwardSpeed=z.damp(this.forwardSpeed,V,g?x*1.1:_,e),g=V===0}else this.forwardSpeed=z.damp(this.forwardSpeed,0,x,e);const C=z.clamp(Math.abs(this.forwardSpeed)/Math.max(this.maxForwardSpeed,.001),0,1);this.slipRatio=z.damp(this.slipRatio,z.clamp((1-c)*(.45+C*.6)+i.roughness*.22,0,.85),6.2,e);const T=z.lerp(.58,1.02,C)*z.lerp(.55,1,c),R=z.lerp(.5,.1,C),O=l*this.getTurnRate()*this.mobilityMultiplier*(T+R)*z.lerp(.78,1,c);this.turnVelocity=z.damp(this.turnVelocity,O,this.getSteeringResponse()*z.lerp(.55,1,c),e),Math.abs(l)<.02&&(this.turnVelocity=z.damp(this.turnVelocity,0,this.getSteeringResponse()*.88,e));const S=this.forwardSpeed<-.18?-.72:1;this.yaw-=this.turnVelocity*S*e,this.forwardVector.set(Math.sin(this.yaw),0,Math.cos(this.yaw));const B=new E(-this.forwardVector.z,0,this.forwardVector.x).multiplyScalar(this.slipRatio*this.forwardSpeed*.22);this.body.velocity.x=this.forwardVector.x*this.forwardSpeed+B.x,this.body.velocity.z=this.forwardVector.z*this.forwardSpeed+B.z,this.suspensionTravel=z.damp(this.suspensionTravel,z.clamp(Math.sin(this.engineLoad*Math.PI+this.body.position.x*.08+this.body.position.z*.06)*i.suspension*(.04+C*.06),-.14,.16),8.4,e),this.body.position.y=this.getRideHeight()+i.groundHeight+this.suspensionTravel,this.body.quaternion.setFromEuler(0,this.yaw,0,"YZX");const H=s.gunDamaged?.012:0;this.turretYaw+=z.clamp(n.yaw+z.randFloatSpread(H),-.08,.08),this.gunPitch=z.clamp(this.gunPitch+z.clamp(n.pitch+z.randFloatSpread(H*.6),-.05,.05),-.34,.2);const F=z.clamp(this.turnVelocity/Math.max(this.getTurnRate(),.001),-1,1),I=this.forwardSpeed/this.maxForwardSpeed,D=(this.forwardSpeed-o)/Math.max(e,.001),N=z.clamp(i.slopePitch-D*.018,-.14,.14),Z=z.clamp(i.slopeRoll+this.turnVelocity*(.04+C*.035)+this.slipRatio*l*.04,-.14,.14);this.tank.updateAnimation(e,{leftTrackSpeed:z.clamp(I-F*.72+this.slipRatio*.28,-1.35,1.35),rightTrackSpeed:z.clamp(I+F*.72-this.slipRatio*.28,-1.35,1.35),pitch:N,roll:Z,speedRatio:C,heave:this.suspensionTravel}),this.syncVisuals()}canFire(){return!this.destroyed&&this.reloadRemaining<=0}markFired(){this.reloadRemaining=this.definition.reloadSeconds*this.reloadMultiplier,this.tank.triggerShotFeedback()}getReloadProgress(){return this.definition.reloadSeconds<=0?1:1-this.reloadRemaining/this.definition.reloadSeconds}getPosition(e){return e.set(this.body.position.x,this.body.position.y,this.body.position.z)}getPredictedPosition(e,t){return t.set(this.body.position.x+this.body.velocity.x*e,this.body.position.y+this.body.velocity.y*e,this.body.position.z+this.body.velocity.z*e)}getFacingDirection(e){return e.set(Math.sin(this.yaw),0,Math.cos(this.yaw)).normalize()}getUpDirection(e){return e.set(0,1,0)}getTurretDirection(e){return e.set(Math.sin(this.yaw+this.turretYaw)*Math.cos(this.gunPitch),Math.sin(this.gunPitch),Math.cos(this.yaw+this.turretYaw)*Math.cos(this.gunPitch)),e.normalize()}getMuzzleWorldPosition(e){return this.tank.muzzleAnchor.getWorldPosition(e)}getMuzzleWorldDirection(e){return this.tank.muzzleAnchor.getWorldDirection(e),e.normalize()}worldToLocalPoint(e,t){return t.copy(e),this.tank.root.worldToLocal(t)}getCurrentSpeed(){return Math.hypot(this.body.velocity.x,this.body.velocity.z)}getNormalizedSpeed(){return z.clamp(this.getCurrentSpeed()/Math.max(this.maxForwardSpeed*this.mobilityMultiplier,.001),0,1)}getEngineLoad(){return this.engineLoad}getSlipRatio(){return this.slipRatio}getTerrainType(){return this.currentTerrain}getHullYaw(){return this.yaw}getTurretYaw(){return this.yaw+this.turretYaw}getGunPitch(){return this.gunPitch}getRideHeight(){return this.bodyHalfExtents.y}getReloadRemaining(){return this.reloadRemaining}setMobilityMultiplier(e){this.mobilityMultiplier=Math.max(.5,e)}setReloadMultiplier(e){this.reloadMultiplier=Math.max(.3,e)}disableCombat(){this.destroyed=!0,this.forwardSpeed=0,this.turnVelocity=0,this.drivePhase="stopped",this.body.velocity.setZero(),this.body.angularVelocity.setZero(),this.body.type=ue.STATIC,this.body.collisionResponse=!1,this.body.updateMassProperties()}resolveDrivePhase(e,t,n){return e<.04?"stopped":n||t<.04?"starting":"driving"}getTargetSpeedRatio(e,t){return t==="stopped"?0:t==="starting"?.2+Math.pow(e,1.5)*.3:.5+Math.pow(e,1.2)*.5}getEngineTarget(e,t){return t==="stopped"?0:t==="starting"?.3+e*.2:.5+e*.25}getEngineRamp(e,t){return t?e==="starting"?1.5+this.definition.mobility*.2:1.5+this.definition.mobility*.15:2.6}getEngineCurve(e){return e==="stopped"?Math.max(.08,this.engineLoad*.14):e==="starting"?.35+Math.pow(this.engineLoad,1.5)*.5:.7+Math.pow(this.engineLoad,1.1)*.3}getTurnRate(){return .7+this.definition.mobility*.24-this.getMassPenalty()*.1}getBrakeResponse(e,t){const n=z.lerp(.9,.48,z.clamp(Math.abs(t)/this.maxForwardSpeed,0,1));return Math.max(.6,this.getCoastResponse()*e.braking*n)}getMassPenalty(){return z.clamp((this.definition.mass-25)/45,0,1)}getAccelerationResponse(e,t){const n=this.getMassPenalty();return t?(z.lerp(6.4,4.1,n)+this.definition.mobility*.15)*Ph:e==="stopped"?this.getCoastResponse():(z.lerp(4,2.2,n)+this.definition.mobility*.18)*Ph}getCoastResponse(){return z.lerp(3.3,1.7,this.getMassPenalty())*oM}getSteeringResponse(){return z.lerp(7.4,4.4,this.getMassPenalty())+this.definition.mobility*.14}syncVisuals(){this.tank.root.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.tank.root.rotation.set(0,this.yaw,0),this.tank.turretPivot.rotation.y=this.turretYaw,this.tank.gunPivot.rotation.x=this.gunPitch}}class lM{constructor(e){L(this,"keys",new Set);L(this,"lookDelta",{x:0,y:0});L(this,"virtualDrive",{x:0,y:0});L(this,"fireQueued",!1);L(this,"viewQueued",!1);L(this,"nationQueued",!1);L(this,"pauseQueued",!1);L(this,"supportQueued",!1);L(this,"reticleQueued",!1);this.target=e,this.bindEvents()}destroy(){document.exitPointerLock()}getDriveInput(){const e=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),t=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0);return{throttle:this.clamp(e+this.virtualDrive.y),turn:this.clamp(t+this.virtualDrive.x)}}consumeLookDelta(){const e={...this.lookDelta};return this.lookDelta.x=0,this.lookDelta.y=0,e}consumeViewToggle(){return this.viewQueued?(this.viewQueued=!1,!0):!1}consumeFire(){return this.fireQueued?(this.fireQueued=!1,!0):!1}consumeNationToggle(){return this.nationQueued?(this.nationQueued=!1,!0):!1}consumePauseToggle(){return this.pauseQueued?(this.pauseQueued=!1,!0):!1}consumeSupport(){return this.supportQueued?(this.supportQueued=!1,!0):!1}consumeReticleToggle(){return this.reticleQueued?(this.reticleQueued=!1,!0):!1}setVirtualDrive(e,t){this.virtualDrive.x=this.clamp(e),this.virtualDrive.y=this.clamp(t)}queueViewToggle(){this.viewQueued=!0}queueFire(){this.fireQueued=!0}bindEvents(){window.addEventListener("keydown",e=>{this.keys.add(e.code),e.code==="KeyV"&&(this.viewQueued=!0),e.code==="Space"&&(this.fireQueued=!0),e.code==="KeyN"&&(this.nationQueued=!0),e.code==="Escape"&&(this.pauseQueued=!0),e.code==="KeyB"&&(this.supportQueued=!0),e.code==="KeyH"&&!e.repeat&&(this.reticleQueued=!0)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),this.target.addEventListener("click",()=>{window.matchMedia("(pointer:fine)").matches&&this.target.requestPointerLock()}),window.addEventListener("mousemove",e=>{document.pointerLockElement===this.target&&(this.lookDelta.x+=e.movementX,this.lookDelta.y+=e.movementY)}),window.addEventListener("mousedown",e=>{const t=e.target;t instanceof HTMLElement&&t.closest("button, #selection-screen")||document.pointerLockElement===this.target&&(this.fireQueued=!0)})}clamp(e){return Math.max(-1,Math.min(1,e))}}function cM(r,e,t){return r.id==="tiger-i"?uM(e,t):r.id==="panther"?dM(e,t):r.id==="t34-85"?fM(e,t):r.id==="m4-sherman"?pM(e,t):hM(e,t)}function hM(r,e){return{hull:[Ke(r.hullWidth,r.hullHeight,r.hullDepth,e.hull,{y:r.hullCenterY}),Ke(r.cabinWidth,r.cabinHeight,r.cabinDepth,e.hull,{y:r.cabinCenterY,z:r.cabinOffsetZ}),...vr(r,e.trackLeft,e.trackRight)],turret:[Ke(r.turretWidth,r.turretHeight,r.turretDepth,e.hull,{y:r.turretCenterY})],gun:[xt(r.gunWidth*.56,r.gunLength,e.gun,{y:0,z:r.gunLength/2+.22,rotateX:Math.PI/2})]}}function uM(r,e){return{hull:[Ke(4.35,1.05,6.2,e.hull,{y:-.08}),Ke(3.78,.48,2.7,e.hull,{y:.54,z:-.46}),Ke(4.1,.28,1.28,e.detail,{y:.34,z:2.68,rotateX:-.2}),Ke(.42,.36,2.2,e.detail,{x:-2.38,y:.26,z:-1.1}),Ke(.42,.36,2.2,e.detail,{x:2.38,y:.26,z:-1.1}),xt(.18,.92,e.detail,{x:-.8,y:.36,z:-3.04,rotateZ:Math.PI/2}),xt(.18,.92,e.detail,{x:.8,y:.36,z:-3.04,rotateZ:Math.PI/2}),...vr(r,e.trackLeft,e.trackRight)],turret:[Ke(2.88,.92,3.14,e.hull,{y:.24}),Ke(2.18,.44,1.1,e.hull,{y:.72,z:-.24}),xt(.28,.72,e.detail,{y:.2,z:1.78,rotateX:Math.PI/2}),xt(.18,.22,e.detail,{x:.58,y:.86,z:-.56})],gun:[xt(.18,4.48,e.gun,{z:2.44,rotateX:Math.PI/2}),xt(.12,.7,e.detail,{z:4.48,rotateX:Math.PI/2}),Ke(.74,.56,.54,e.detail,{z:.18})]}}function dM(r,e){return{hull:[Ke(4.1,.84,5.92,e.hull,{y:-.16}),Ke(4.04,.4,1.5,e.hull,{y:.36,z:2.58,rotateX:-.4}),Ke(3.02,.58,2.52,e.hull,{y:.46,z:-.58}),Ke(.32,.48,3.14,e.detail,{x:-2.22,y:.22,z:-.4,rotateZ:-.16}),Ke(.32,.48,3.14,e.detail,{x:2.22,y:.22,z:-.4,rotateZ:.16}),xt(.16,.76,e.detail,{x:-.72,y:.34,z:-2.94,rotateZ:Math.PI/2}),xt(.16,.76,e.detail,{x:.72,y:.34,z:-2.94,rotateZ:Math.PI/2}),...vr(r,e.trackLeft,e.trackRight,.08)],turret:[Ke(2.34,.76,2.72,e.hull,{y:.18,z:.08,rotateY:.08}),Ke(1.86,.42,1.28,e.hull,{y:.62,z:-.28}),Ke(.72,.54,.62,e.detail,{y:.22,z:1.56})],gun:[xt(.15,4.88,e.gun,{z:2.66,rotateX:Math.PI/2}),xt(.11,.76,e.detail,{z:4.82,rotateX:Math.PI/2}),Ke(.76,.54,.58,e.detail,{z:.14})]}}function fM(r,e){return{hull:[Ke(3.68,.76,5.26,e.hull,{y:-.18}),Ke(3.66,.42,1.48,e.hull,{y:.28,z:2.24,rotateX:-.52}),Ke(2.88,.58,2.32,e.hull,{y:.42,z:-.54,rotateX:.08}),Ke(.24,.42,3.24,e.detail,{x:-1.92,y:.08,z:-.12,rotateZ:-.18}),Ke(.24,.42,3.24,e.detail,{x:1.92,y:.08,z:-.12,rotateZ:.18}),...vr(r,e.trackLeft,e.trackRight,-.02)],turret:[xt(1.16,1.04,e.hull,{y:.22}),xt(.66,.46,e.hull,{y:.66,z:-.18}),Ke(.74,.48,.56,e.detail,{y:.18,z:1.12})],gun:[xt(.15,4.12,e.gun,{z:2.16,rotateX:Math.PI/2}),xt(.11,.5,e.detail,{z:4.08,rotateX:Math.PI/2}),Ke(.72,.46,.52,e.detail,{z:.1})]}}function pM(r,e){return{hull:[Ke(3.76,.86,5.38,e.hull,{y:-.14}),Ke(3.1,.52,2.5,e.hull,{y:.44,z:-.34}),Ke(3.42,.36,1.34,e.hull,{y:.28,z:2.24,rotateX:-.34}),xt(.22,3.12,e.detail,{y:.3,z:-2.22,rotateZ:Math.PI/2}),Ke(.42,.26,1.18,e.detail,{x:-1.86,y:.2,z:1.48}),Ke(.42,.26,1.18,e.detail,{x:1.86,y:.2,z:1.48}),...vr(r,e.trackLeft,e.trackRight)],turret:[xt(1.18,.9,e.hull,{y:.22}),xt(.72,.38,e.hull,{y:.62,z:-.22}),xt(.16,.26,e.detail,{x:-.42,y:.86,z:-.34})],gun:[xt(.14,3.86,e.gun,{z:1.96,rotateX:Math.PI/2}),xt(.12,.46,e.detail,{z:3.84,rotateX:Math.PI/2}),Ke(.66,.44,.48,e.detail,{z:.06})]}}function vr(r,e,t,n=0){return[Ke(r.trackWidth,r.trackHeight,r.trackDepth,e,{x:-(r.hullWidth/2+.16-n),y:r.trackCenterY,z:0}),Ke(r.trackWidth,r.trackHeight,r.trackDepth,t,{x:r.hullWidth/2+.16-n,y:r.trackCenterY,z:0})]}function Ke(r,e,t,n,i){const s=new Ve(new $t(r,e,t),n);return s.castShadow=!0,s.receiveShadow=!0,ud(s,i),s}function xt(r,e,t,n){const i=new Ve(new Fs(r,r*.92,e,z.clamp(Math.round(r*40),10,18)),t);return i.castShadow=!0,i.receiveShadow=!0,ud(i,n),i}function ud(r,e){r.position.set(e.x??0,e.y??0,e.z??0),r.rotation.set(e.rotateX??0,e.rotateY??0,e.rotateZ??0)}const mM={MEDIUM:{hullWidth:3.8,hullHeight:.92,hullDepth:5.4,hullCenterY:-.12,trackWidth:.64,trackHeight:.68,trackDepth:5.7,trackCenterY:-.48,turretWidth:2.38,turretHeight:.78,turretDepth:2.72,turretCenterY:.2,cabinWidth:2.7,cabinHeight:.6,cabinDepth:2.8,cabinCenterY:.48,cabinOffsetZ:-.24,gunLength:3.8,gunWidth:.28,muzzleOffset:3.9,collisionHalfExtents:{x:1.96,y:.82,z:2.86},turretPivot:new E(0,.46,.28),gunPivot:new E(0,.14,.78),povAnchor:new E(0,.2,.34),chaseOffset:new E(0,5.4,-8.6),topHeight:30,nameAnchorY:2.45,markerY:1.5,shadowScale:new E(3.25,1,4.45)},HEAVY:{hullWidth:4.4,hullHeight:1.04,hullDepth:6.1,hullCenterY:-.08,trackWidth:.78,trackHeight:.74,trackDepth:6.35,trackCenterY:-.55,turretWidth:2.82,turretHeight:.88,turretDepth:3.12,turretCenterY:.22,cabinWidth:3.1,cabinHeight:.68,cabinDepth:3.25,cabinCenterY:.6,cabinOffsetZ:-.3,gunLength:4.35,gunWidth:.34,muzzleOffset:4.55,collisionHalfExtents:{x:2.26,y:.92,z:3.2},turretPivot:new E(0,.56,.22),gunPivot:new E(0,.16,.86),povAnchor:new E(0,.22,.4),chaseOffset:new E(0,5.9,-9.5),topHeight:33,nameAnchorY:2.7,markerY:1.65,shadowScale:new E(3.6,1,4.9)},TD:{hullWidth:4,hullHeight:.84,hullDepth:5.6,hullCenterY:-.16,trackWidth:.7,trackHeight:.64,trackDepth:5.86,trackCenterY:-.42,turretWidth:2.26,turretHeight:.64,turretDepth:2.94,turretCenterY:.12,cabinWidth:2.96,cabinHeight:.56,cabinDepth:3.18,cabinCenterY:.34,cabinOffsetZ:-.14,gunLength:4.5,gunWidth:.28,muzzleOffset:4.75,collisionHalfExtents:{x:2.04,y:.74,z:2.98},turretPivot:new E(0,.34,.42),gunPivot:new E(0,.06,.96),povAnchor:new E(0,.16,.34),chaseOffset:new E(0,5.2,-8.9),topHeight:29,nameAnchorY:2.2,markerY:.95,shadowScale:new E(3.1,1,4.55)}},Lh=new E(1,5.5,1);function gM(r){return mM[r]}class vM{constructor(e,t,n){L(this,"root",new It);L(this,"turretPivot",new $e);L(this,"gunPivot",new $e);L(this,"muzzleAnchor",new $e);L(this,"povAnchor",new $e);L(this,"chaseAnchor",new $e);L(this,"topAnchor",new $e);L(this,"nameAnchor",new $e);L(this,"definition");L(this,"profile");L(this,"motionPivot",new $e);L(this,"hullGroup",new It);L(this,"turretGroup",new It);L(this,"gunMount",new $e);L(this,"impactMarkRoot",new $e);L(this,"wreckMaterials");L(this,"teamMarker");L(this,"leftTrackTexture",Dh());L(this,"rightTrackTexture",Dh());L(this,"visualMaterials");L(this,"surface");L(this,"usingExternalModel",!1);L(this,"leftTrackOffset",0);L(this,"rightTrackOffset",0);L(this,"motionClock",Math.random()*Math.PI*2);L(this,"smoothedPitch",0);L(this,"smoothedRoll",0);L(this,"recoilTime",Number.POSITIVE_INFINITY);L(this,"shakeTime",0);L(this,"destroyed",!1);L(this,"destroyedPitch",0);L(this,"destroyedRoll",0);L(this,"smoothedHeave",0);L(this,"gunDamage",0);L(this,"trackDamage",0);L(this,"engineHeat",0);L(this,"turretLaunchTime",Number.POSITIVE_INFINITY);L(this,"turretLaunchVelocity",new E);L(this,"turretLaunchOffset",new E);L(this,"turretSpin",0);this.definition=e,this.profile=gM(e.class),this.surface=t,this.applyTextureQuality(this.surface);const i=new nt({map:t.albedo,normalMap:t.normal,roughnessMap:t.roughness,metalnessMap:t.metalness,roughness:.88,metalness:.26}),s=Ih(this.leftTrackTexture),o=Ih(this.rightTrackTexture),a=new nt({map:t.albedo,normalMap:t.normal,roughnessMap:t.roughness,metalnessMap:t.metalness,roughness:.72,metalness:.36}),l=new nt({color:"#525447",roughness:.82,metalness:.24});this.visualMaterials={hull:i,trackLeft:s,trackRight:o,gun:a,detail:l},this.wreckMaterials=[i,a,s,o,l],this.teamMarker=new Ve(new qi(.32,16),new ft({color:n,transparent:!0,opacity:.6,depthWrite:!1})),this.teamMarker.rotation.x=-Math.PI/2,this.teamMarker.position.set(0,this.profile.markerY,0);const c=new Ve(new qi(1,28),new ft({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=-this.profile.collisionHalfExtents.y+.04,c.scale.copy(this.profile.shadowScale),this.root.name="tank-root",this.motionPivot.name="tank-motion-pivot",this.hullGroup.name="tank-hull-group",this.turretGroup.name="tank-turret-group",this.gunMount.name="tank-gun-mount",this.root.add(c,this.motionPivot),this.motionPivot.add(this.hullGroup),this.turretPivot.position.copy(this.profile.turretPivot),this.gunPivot.position.copy(this.profile.gunPivot),this.muzzleAnchor.position.set(0,0,this.profile.muzzleOffset),this.povAnchor.position.copy(this.profile.povAnchor),this.chaseAnchor.position.copy(this.profile.chaseOffset),this.topAnchor.position.set(0,this.profile.topHeight,0),this.nameAnchor.position.set(0,this.profile.nameAnchorY,0),this.applyFallbackVisual(),this.gunPivot.add(this.gunMount,this.muzzleAnchor,this.povAnchor),this.turretGroup.add(this.gunPivot),this.turretPivot.add(this.turretGroup),this.motionPivot.add(this.impactMarkRoot),this.motionPivot.add(this.turretPivot,this.chaseAnchor,this.topAnchor,this.nameAnchor),n&&this.motionPivot.add(this.teamMarker)}get hasExternalModel(){return this.usingExternalModel}setCamouflage(e){const t=new Set;[this.surface.albedo,this.surface.normal,this.surface.roughness,this.surface.metalness].forEach(n=>t.add(n)),this.applyTextureQuality(e),this.visualMaterials.hull.map=e.albedo,this.visualMaterials.hull.normalMap=e.normal,this.visualMaterials.hull.roughnessMap=e.roughness,this.visualMaterials.hull.metalnessMap=e.metalness,this.visualMaterials.hull.needsUpdate=!0,this.visualMaterials.gun.map=e.albedo,this.visualMaterials.gun.normalMap=e.normal,this.visualMaterials.gun.roughnessMap=e.roughness,this.visualMaterials.gun.metalnessMap=e.metalness,this.visualMaterials.gun.needsUpdate=!0,t.forEach(n=>n.dispose()),this.surface.dispose(),this.surface=e}applyExternalModel(e){this.clearGroup(this.hullGroup),this.clearGroup(this.turretGroup),this.clearGroup(this.gunMount),this.skinExternalMeshes(e.hull),this.skinExternalMeshes(e.turret),this.skinExternalMeshes(e.gun),this.hullGroup.add(e.hull),this.turretGroup.add(e.turret,this.gunPivot),this.gunMount.add(e.gun),this.usingExternalModel=!0}triggerShotFeedback(){this.recoilTime=0,this.shakeTime=.12}updateAnimation(e,t){this.motionClock+=e,this.leftTrackOffset=Nh(this.leftTrackOffset-t.leftTrackSpeed*e*1.45),this.rightTrackOffset=Nh(this.rightTrackOffset-t.rightTrackSpeed*e*1.45),this.leftTrackTexture.offset.y=this.leftTrackOffset,this.rightTrackTexture.offset.y=this.rightTrackOffset,this.smoothedPitch=z.damp(this.smoothedPitch,t.pitch,7.5,e),this.smoothedRoll=z.damp(this.smoothedRoll,t.roll,7.5,e),this.smoothedHeave=z.damp(this.smoothedHeave,t.heave,8.5,e),Number.isFinite(this.recoilTime)&&(this.recoilTime+=e),this.shakeTime=Math.max(0,this.shakeTime-e);const n=this.getRecoilDistance(),i=this.destroyed?0:this.shakeTime/.12,s=this.destroyed||t.speedRatio<.08?0:Math.sin(this.motionClock*(7.5+t.speedRatio*5.5))*t.speedRatio*.028;Number.isFinite(this.turretLaunchTime)?(this.turretLaunchTime+=e,this.turretLaunchVelocity.y-=8.6*e,this.turretLaunchOffset.addScaledVector(this.turretLaunchVelocity,e),this.turretPivot.position.copy(this.profile.turretPivot).add(this.turretLaunchOffset),this.turretPivot.rotation.y+=this.turretSpin*e,this.turretPivot.rotation.z+=this.turretSpin*.28*e):this.turretPivot.position.copy(this.profile.turretPivot),this.motionPivot.position.set(Math.sin(this.motionClock*62)*i*.02,s+this.smoothedHeave+Math.cos(this.motionClock*74)*i*.016,Math.sin(this.motionClock*52)*i*.014),this.motionPivot.rotation.set(this.smoothedPitch+this.destroyedPitch+Math.sin(this.motionClock*58)*i*.01,0,this.smoothedRoll+this.destroyedRoll+Math.cos(this.motionClock*49)*i*.012),this.gunMount.position.z=-n,this.gunMount.rotation.z=this.gunDamage*.12,this.gunMount.rotation.x=-this.gunDamage*.04,this.visualMaterials.trackLeft.emissive.setScalar(this.trackDamage*.08),this.visualMaterials.trackRight.emissive.setScalar(this.trackDamage*.08),this.visualMaterials.hull.emissive.setRGB(this.engineHeat*.1,this.engineHeat*.04,this.engineHeat*.02)}setDestroyedVisual(e=!1){this.destroyed=!0,this.destroyedPitch=.09+Math.random()*.06,this.destroyedRoll=(Math.random()-.5)*.26,this.wreckMaterials.forEach(n=>{n.color.multiplyScalar(.48),n.emissive.set("#160000"),n.emissiveIntensity=.28,n.needsUpdate=!0}),this.turretPivot.rotation.z=(Math.random()-.5)*.18,this.turretPivot.rotation.y+=(Math.random()-.5)*.32,this.gunPivot.rotation.x-=.06,e&&(this.turretLaunchTime=0,this.turretLaunchOffset.set(0,0,0),this.turretLaunchVelocity.set((Math.random()-.5)*5,8.5+Math.random()*2.2,-4-Math.random()*3),this.turretSpin=(Math.random()-.5)*7);const t=this.teamMarker.material;t instanceof ft&&(t.opacity=.22)}dispose(){this.surface.dispose(),this.leftTrackTexture.dispose(),this.rightTrackTexture.dispose(),this.wreckMaterials.forEach(e=>e.dispose()),this.disposeGroupGeometries(this.hullGroup),this.disposeGroupGeometries(this.turretGroup),this.disposeGroupGeometries(this.impactMarkRoot)}applyDamageState(e,t){this.trackDamage=z.damp(this.trackDamage,e.trackBroken?1:0,8,t),this.gunDamage=z.damp(this.gunDamage,e.gunDamaged?1:0,8,t),this.engineHeat=z.damp(this.engineHeat,e.engineFire?1:0,4,t)}addArmorDeformation(e,t){const n=new Ve(new qi(z.lerp(.12,.34,t),18),new ft({color:t>.6?"#1c160f":"#30261f",transparent:!0,opacity:.82}));n.position.copy(e),n.lookAt(e.clone().multiplyScalar(2)),n.position.add(e.clone().normalize().multiplyScalar(.05)),this.impactMarkRoot.add(n),this.gunMount.position.x+=z.clamp(e.x*t*.015,-.04,.04)}applyFallbackVisual(){const e=cM(this.definition,this.profile,this.visualMaterials);e.hull.forEach(t=>this.hullGroup.add(t)),e.turret.forEach(t=>this.turretGroup.add(t)),e.gun.forEach(t=>this.gunMount.add(t)),this.usingExternalModel=!1}getRecoilDistance(){if(!Number.isFinite(this.recoilTime))return 0;const e=.15,t=.3,n=z.clamp(this.profile.gunLength*.08,.22,.42);return this.recoilTime<=e?z.lerp(0,n,this.recoilTime/e):this.recoilTime<=e+t?z.lerp(n,0,(this.recoilTime-e)/t):(this.recoilTime=Number.POSITIVE_INFINITY,0)}clearGroup(e){for(;e.children.length>0;){const t=e.children.pop();t&&t.removeFromParent()}}skinExternalMeshes(e){e.traverse(t=>{if(!(t instanceof Ve))return;t.castShadow=!0,t.receiveShadow=!0;const n=t.name.toLowerCase();n.includes("track")||n.includes("wheel")?t.material=this.resolveTrackMaterial(t):n.includes("gun")||n.includes("barrel")||n.includes("cannon")?t.material=this.visualMaterials.gun:n.includes("detail")||n.includes("tool")||n.includes("exhaust")?t.material=this.visualMaterials.detail:t.material=this.visualMaterials.hull})}resolveTrackMaterial(e){const t=e.name.toLowerCase();return t.includes("left")||t.includes("_l")||t.endsWith(".l")?this.visualMaterials.trackLeft:t.includes("right")||t.includes("_r")||t.endsWith(".r")?this.visualMaterials.trackRight:e.position.x<=0?this.visualMaterials.trackLeft:this.visualMaterials.trackRight}applyTextureQuality(e){[e.albedo,e.normal,e.roughness,e.metalness,e.damage,e.marking].forEach(t=>{t.anisotropy=Math.max(t.anisotropy,8)})}disposeGroupGeometries(e){e.traverse(t=>{t instanceof Ve&&t.geometry.dispose()})}}function Ih(r){return r.wrapS=mn,r.wrapT=mn,r.repeat.set(Lh.x,Lh.y),new nt({color:"#2f322e",metalness:.52,roughness:.82,map:r})}function Dh(){const r=document.createElement("canvas");r.width=96,r.height=256;const e=r.getContext("2d");if(!e){const n=new Wi(r);return n.needsUpdate=!0,n}e.fillStyle="#2f322e",e.fillRect(0,0,r.width,r.height),e.fillStyle="#3d413b";for(let n=0;n<r.height;n+=28)e.fillRect(12,n,r.width-24,16),e.fillStyle=n%56===0?"#5e6257":"#4a4d45",e.fillRect(20,n+6,r.width-40,4),e.fillStyle="#3d413b";e.fillStyle="rgba(110, 96, 76, 0.28)";for(let n=0;n<24;n+=1)e.fillRect(8+Math.random()*(r.width-24),Math.random()*r.height,6+Math.random()*12,2+Math.random()*8);const t=new Wi(r);return t.needsUpdate=!0,t}function Nh(r){return(r%1+1)%1}const yM=new E(0,-9.82,0),_M=10;class Uh{constructor({ammo:e,origin:t,direction:n,ownerBodyId:i}){L(this,"mesh");L(this,"trail");L(this,"ammo");L(this,"ownerBodyId");L(this,"velocity",new E);L(this,"history",[]);L(this,"previousPosition",new E);L(this,"life",4.4);L(this,"active",!0);this.ammo=e,this.ownerBodyId=i;const s=z.clamp(e.mass/10,.75,1.55);this.mesh=new Ve(new pr(.12*s,12,12),new nt({color:"#ffe4b2",emissive:e.trailColor,emissiveIntensity:2.4,metalness:.35,roughness:.2})),this.mesh.position.copy(t),this.mesh.castShadow=!0,this.trail=new So(new Gt,new uo({color:e.trailColor,transparent:!0,opacity:.82})),this.velocity.copy(n).multiplyScalar(e.speed),this.previousPosition.copy(t);for(let o=0;o<_M;o+=1)this.history.push(t.clone());this.syncTrail()}get isActive(){return this.active}get position(){return this.mesh.position}update(e,t){if(!this.active)return null;if(this.life-=e,this.life<=0)return this.active=!1,null;this.previousPosition.copy(this.mesh.position),this.velocity.addScaledVector(yM,this.ammo.gravityScale*e);const n=this.mesh.position.clone().addScaledVector(this.velocity,e),i=new M(this.previousPosition.x,this.previousPosition.y,this.previousPosition.z),s=new M(n.x,n.y,n.z),o=new _i;return t.raycastClosest(i,s,{},o)&&o.body&&o.body.id!==this.ownerBodyId?(this.mesh.position.set(o.hitPointWorld.x,o.hitPointWorld.y,o.hitPointWorld.z),this.recordHistory(),this.syncTrail(),this.active=!1,{body:o.body,point:new E(o.hitPointWorld.x,o.hitPointWorld.y,o.hitPointWorld.z),normal:new E(o.hitNormalWorld.x,o.hitNormalWorld.y,o.hitNormalWorld.z).normalize()}):(this.mesh.position.copy(n),this.recordHistory(),this.syncTrail(),this.mesh.position.y<-1.5&&(this.active=!1),null)}destroy(){this.active=!1,this.mesh.geometry.dispose();const e=this.mesh.material;e instanceof nt&&e.dispose(),this.trail.geometry.dispose();const t=this.trail.material;t instanceof uo&&t.dispose()}recordHistory(){this.history.pop(),this.history.unshift(this.mesh.position.clone())}syncTrail(){const e=this.history.flatMap(t=>[t.x,t.y,t.z]);this.trail.geometry.setAttribute("position",new pt(e,3)),this.trail.geometry.attributes.position.needsUpdate=!0}}const xM={GER:["#6d744a","#96713d","#3b4a2a"],USA:["#56683f","#7b6a44","#384028"],UK:["#435537","#776143","#202920"],USSR:["#53683c","#766147","#dad9d1"]},MM={GER:{symbol:"cross",code:"331"},USA:{symbol:"star",code:"A12"},UK:{symbol:"roundel",code:"B07"},USSR:{symbol:"red-star",code:"214"}};class SM{static generate(e,t,n=1024){const i=this.createCanvas(n),s=this.createCanvas(n),o=this.createCanvas(n),a=this.createCanvas(n),l=this.createCanvas(n),c=this.createCanvas(n),h=this.getContext(i),u=this.getContext(s),d=this.getContext(o),f=this.getContext(a),g=this.getContext(l),v=this.getContext(c);this.paintAlbedo(h,e,t,n),this.paintMarkings(u,e,t,n),this.paintDamage(d,n),h.drawImage(s,0,0),h.globalAlpha=.48,h.drawImage(o,0,0),h.globalAlpha=1,this.paintNormal(f,n),this.paintRoughness(g,n),this.paintMetalness(v,n);const m={albedo:this.makeTexture(i,ut),normal:this.makeTexture(a,Dt),roughness:this.makeTexture(l,Dt),metalness:this.makeTexture(c,Dt),damage:this.makeTexture(o,Dt),marking:this.makeTexture(s,ut)};return{...m,dispose(){Object.values(m).forEach(p=>p.dispose())}}}static paintAlbedo(e,t,n,i){const s=xM[t];e.fillStyle=s[0],e.fillRect(0,0,i,i);for(let a=0;a<26;a+=1){const l=s[a%(s.length-1)+1];this.drawBlob(e,i,l,.14+Math.random()*.08)}for(let a=0;a<10;a+=1){const l=2+Math.random()*6;e.strokeStyle=`rgba(14, 18, 20, ${.08+Math.random()*.08})`,e.lineWidth=l,e.beginPath(),e.moveTo(Math.random()*i,Math.random()*i),e.lineTo(Math.random()*i,Math.random()*i),e.stroke()}for(let a=0;a<360;a+=1)e.fillStyle="rgba(255,255,255,0.035)",e.fillRect(Math.random()*i,Math.random()*i,2+Math.random()*6,1+Math.random()*4);const o=n.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6);e.save(),e.globalAlpha=.08,e.fillStyle="#f6f1dd",e.font=`600 ${Math.floor(i*.16)}px sans-serif`,e.rotate(-.16),e.fillText(o,i*.12,i*.5),e.restore()}static paintMarkings(e,t,n,i){const s=MM[t],o=[`${s.code}-${n.slice(-2).toUpperCase()}`,`${n.replace(/-/g," ").toUpperCase().slice(0,10)}`];e.save(),e.fillStyle=t==="USSR"?"#d14a43":"rgba(241, 237, 226, 0.88)",e.strokeStyle="rgba(35, 26, 12, 0.28)",e.lineWidth=4,this.drawInsignia(e,s.symbol,i*.18,i*.24,i*.11),this.drawInsignia(e,s.symbol,i*.82,i*.72,i*.11),e.restore(),e.save(),e.fillStyle="rgba(245, 238, 215, 0.85)",e.font=`700 ${Math.floor(i*.09)}px sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(o[0],i*.25,i*.72),e.fillText(o[1],i*.72,i*.22),e.restore()}static paintDamage(e,t){e.clearRect(0,0,t,t);for(let n=0;n<180;n+=1){const i=Math.random()*t,s=Math.random()*t,o=12+Math.random()*44;e.strokeStyle=`rgba(33, 24, 18, ${.05+Math.random()*.18})`,e.lineWidth=1+Math.random()*2,e.beginPath(),e.moveTo(i,s),e.lineTo(i+Math.random()*o,s+(Math.random()-.5)*12),e.stroke()}for(let n=0;n<42;n+=1){const i=8+Math.random()*24,s=e.createRadialGradient(Math.random()*t,Math.random()*t,i*.1,Math.random()*t,Math.random()*t,i);s.addColorStop(0,"rgba(54, 45, 39, 0.24)"),s.addColorStop(1,"rgba(54, 45, 39, 0)"),e.fillStyle=s,e.fillRect(0,0,t,t)}}static paintNormal(e,t){e.fillStyle="rgb(128, 128, 255)",e.fillRect(0,0,t,t);for(let n=0;n<20;n+=1){const i=Math.random()*t,s=Math.random()*t,o=t*(.06+Math.random()*.16),a=4+Math.random()*10;e.fillStyle=`rgb(${118+Math.random()*22}, ${118+Math.random()*22}, 255)`,e.fillRect(i,s,o,a),e.fillStyle="rgba(140, 140, 255, 0.8)",e.fillRect(i,s+a,o,2)}for(let n=0;n<240;n+=1){const i=Math.random()*t,s=Math.random()*t;e.fillStyle="rgb(132, 132, 255)",e.beginPath(),e.arc(i,s,1+Math.random()*2.4,0,Math.PI*2),e.fill()}}static paintRoughness(e,t){e.fillStyle="rgb(180, 180, 180)",e.fillRect(0,0,t,t);for(let n=0;n<380;n+=1){const i=118+Math.floor(Math.random()*80);e.fillStyle=`rgb(${i}, ${i}, ${i})`,e.fillRect(Math.random()*t,Math.random()*t,3+Math.random()*10,3+Math.random()*10)}}static paintMetalness(e,t){e.fillStyle="rgb(58, 58, 58)",e.fillRect(0,0,t,t);for(let n=0;n<32;n+=1){const i=90+Math.floor(Math.random()*80);e.fillStyle=`rgb(${i}, ${i}, ${i})`,e.fillRect(Math.random()*t,Math.random()*t,t*(.04+Math.random()*.1),8+Math.random()*16)}}static drawInsignia(e,t,n,i,s){if(t==="cross"){e.fillRect(n-s*.12,i-s*.5,s*.24,s),e.fillRect(n-s*.5,i-s*.12,s,s*.24);return}if(t==="star"||t==="red-star"){this.drawStar(e,n,i,s,s*.42,5);return}e.beginPath(),e.arc(n,i,s*.54,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,i,s*.3,0,Math.PI*2),e.fill()}static drawStar(e,t,n,i,s,o){e.beginPath();for(let a=0;a<o*2;a+=1){const l=Math.PI*a/o-Math.PI/2,c=a%2===0?i:s,h=t+Math.cos(l)*c,u=n+Math.sin(l)*c;a===0?e.moveTo(h,u):e.lineTo(h,u)}e.closePath(),e.fill()}static drawBlob(e,t,n,i){const s=Math.random()*t,o=Math.random()*t,a=t*i;e.fillStyle=n,e.beginPath();for(let l=0;l<=7;l+=1){const c=Math.PI*2*l/7,h=a*(.7+Math.random()*.6),u=s+Math.cos(c)*h,d=o+Math.sin(c)*h;l===0?e.moveTo(u,d):e.quadraticCurveTo(s+Math.cos(c-.35)*h,o+Math.sin(c-.35)*h,u,d)}e.closePath(),e.fill()}static makeTexture(e,t){const n=new Wi(e);return n.wrapS=mn,n.wrapT=mn,n.repeat.set(1,1),n.generateMipmaps=!0,n.minFilter=Si,n.colorSpace=t,n.needsUpdate=!0,n}static createCanvas(e){const t=document.createElement("canvas");return t.width=e,t.height=e,t}static getContext(e){const t=e.getContext("2d");if(!t)throw new Error("Unable to create camouflage canvas.");return t}}function Fh(r,e){if(e===Vm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ka||e===Lu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ka)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class bM extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new HM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=lr.extractUrlBase(e);o=lr.resolveURL(c,this.path)}else o=lr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ad(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dd){try{o[je.KHR_BINARY_GLTF]=new VM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new tS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new EM;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new GM(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new WM;break;case je.KHR_MESH_QUANTIZATION:o[u]=new qM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function wM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TM{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ut);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ld(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qx(h),c.distance=u;break;case"spot":c=new Gx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class EM{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ut))}return Promise.all(i)}}class AM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class RM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(s)}}class CM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class PM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ut)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class LM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class IM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(a[0],a[1],a[2],Ut),Promise.all(s)}}class DM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class NM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ut)),Promise.all(s)}}class UM{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class FM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class OM{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class BM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zM{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class HM{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Xe,m=new E,p=new bi,y=new E(1,1,1),_=new Xa(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,v.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const C=l[x];_.instanceColor=new qa(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);$e.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const dd="glTF",Js=12,Oh={JSON:1313821514,BIN:5130562};class VM{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Js,s=new DataView(e,Js);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Oh.JSON){const c=new Uint8Array(e,Js+o,a);this.content=n.decode(c)}else if(l===Oh.BIN){const c=Js+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=$a[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=$a[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=bs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},a,c,Ut,d)})})}}class WM{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qM{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class fd extends mr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,y=1-m,_=p-d+u;for(let x=0;x!==a;x++){const C=o[v+x+a],T=o[v+x+l]*h,R=o[g+x+a],O=o[g+x]*h;s[x]=y*C+_*T+m*R+p*O}return s}}const XM=new bi;class YM extends fd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return XM.fromArray(s).normalize().toArray(s),s}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bh={9728:wt,9729:Jt,9984:Ba,9985:bu,9986:to,9987:Si},kh={33071:dn,33648:ro,10497:mn},ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$a={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jM={CUBICSPLINE:void 0,LINEAR:As,STEP:cr},va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $M(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),r.DefaultMaterial}function Li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ZM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QM(r){let e;const t=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ya(t.attributes):e=r.indices+":"+ya(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ya(r.targets[n]);return e}function ya(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ka(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const eS=new Xe;class tS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new zx(this.options.manager):this.textureLoader=new jx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ad(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Li(s,a,i),mi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(lr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ga[i.type],a=bs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Vt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ga[i.type],c=bs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(y);_||(v=new c(a,p*f,i.count*f/h),_=new vx(v,f/h),t.cache.add(y,_)),m=new ul(_,l,d%f/h,g)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),m=new Vt(v,l,g);if(i.sparse!==void 0){const p=ga.SCALAR,y=bs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new y(o[1],_,i.sparse.count*p),T=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let R=0,O=C.length;R<O;R++){const S=C[R];if(m.setX(S,T[R*l]),l>=2&&m.setY(S,T[R*l+1]),l>=3&&m.setZ(S,T[R*l+2]),l>=4&&m.setW(S,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Bh[d.magFilter]||Jt,h.minFilter=Bh[d.minFilter]||Si,h.wrapS=kh[d.wrapS]||mn,h.wrapT=kh[d.wrapT]||mn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Nt(v);m.needsUpdate=!0,d(m)}),t.load(lr.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||JM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sd,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new uo,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ge(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ut),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=tn);const h=s.alphaMode||va.OPAQUE;if(h===va.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===va.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ft&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ft&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ft){const u=s.emissiveFactor;a.emissive=new ge().setRGB(u[0],u[1],u[2],Ut)}return s.emissiveTexture!==void 0&&o!==ft&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ut)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),mi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Li(i,u,s),u})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return zh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=QM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=zh(new Gt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?$M(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=o[f];let p;const y=c[f];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new _x(v,y):new Ve(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?p.geometry=Fh(p.geometry,Lu):m.mode===hn.TRIANGLE_FAN&&(p.geometry=Fh(p.geometry,ka));else if(m.mode===hn.LINES)p=new bx(v,y);else if(m.mode===hn.LINE_STRIP)p=new So(v,y);else if(m.mode===hn.LINE_LOOP)p=new wx(v,y);else if(m.mode===hn.POINTS)p=new Tx(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ZM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),mi(p,s),m.extensions&&Li(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Li(i,u[0],s),u[0];const d=new It;s.extensions&&Li(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(z.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Xe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let y=0,_=d.length;y<_;y++){const x=d[y],C=f[y],T=g[y],R=v[y],O=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,C,T,R,O);if(S)for(let w=0;w<S.length;w++)p.push(S[w])}return new Dx(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,eS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new id:c.length>1?h=new It:c.length===1?h=c[0]:h=new $e,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),mi(h,s),s.extensions&&Li(n,h,s),s.matrix!==void 0){const u=new Xe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new It;n.name&&(s.name=i.createUniqueName(n.name)),mi(s,n),n.extensions&&Li(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Fn||d instanceof Nt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];fi[s.path]===fi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(fi[s.path]){case fi.weights:c=Ps;break;case fi.rotation:c=ji;break;case fi.position:case fi.scale:c=Ls;break;default:switch(n.itemSize){case 1:c=Ps;break;case 2:case 3:default:c=Ls;break}break}const h=i.interpolation!==void 0?jM[i.interpolation]:As,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+fi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ka(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ji?YM:fd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nS(r,e,t){const n=e.attributes,i=new bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const h=Ka(bs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new E,l=new E;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Ka(bs[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new On;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function zh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=$a[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return et.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),mi(r,e),nS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?KM(r,e.targets,t):r})}const _a={hull:["hull","body","chassis","lower","base"],turret:["turret","tower","mantlet"],gun:["gun","barrel","cannon","main_gun"]},Hh={"tiger-i":{path:"/models/tanks/tiger-i.glb",scale:1,offset:new E(0,-.85,0),rotationY:Math.PI,nodes:{hull:["hull","chassis","body"],turret:["turret"],gun:["gun","barrel","cannon"]}},panther:{path:"/models/tanks/panther.glb",scale:1,offset:new E(0,-.8,0),rotationY:Math.PI,nodes:{hull:["hull","chassis","body"],turret:["turret"],gun:["gun","barrel"]}},"t34-85":{path:"/models/tanks/t34-85.glb",scale:1,offset:new E(0,-.72,0),rotationY:Math.PI,nodes:{hull:["hull","body"],turret:["turret"],gun:["gun","barrel"]}},"m4-sherman":{path:"/models/tanks/m4-sherman.glb",scale:1,offset:new E(0,-.76,0),rotationY:Math.PI,nodes:{hull:["hull","body"],turret:["turret"],gun:["gun","barrel"]}}};class iS{constructor(){L(this,"loader",new bM);L(this,"cache",new Map);L(this,"pendingLoads",new Set)}hasModel(e){return!!Hh[e]}isLoading(e){return this.pendingLoads.has(e)}async loadTankModel(e,t){const n=Hh[e];if(!n)return null;let i=this.cache.get(e);i||(this.pendingLoads.add(e),i=this.loader.loadAsync(n.path).then(o=>this.processTankModel(o.scene,n,t)).catch(o=>(console.warn(`[ModelLoader] Failed to load ${e} from ${n.path}`,o),null)).finally(()=>{this.pendingLoads.delete(e)}),this.cache.set(e,i));const s=await i;return s?{hull:s.hull.clone(!0),turret:s.turret.clone(!0),gun:s.gun.clone(!0)}:null}async waitForIdle(){await Promise.all(this.cache.values())}processTankModel(e,t,n){var m,p,y;const i=e.clone(!0);i.rotation.y+=t.rotationY,i.scale.setScalar(t.scale),i.position.add(t.offset),this.prepareSketchfabScene(i);const s=new It;s.add(i);const o=this.findNode(i,((m=t.nodes)==null?void 0:m.hull)??_a.hull),a=this.findNode(i,((p=t.nodes)==null?void 0:p.turret)??_a.turret),l=this.findNode(i,((y=t.nodes)==null?void 0:y.gun)??_a.gun);if(!o||!a||!l)return null;const c=new bn().setFromObject(i),h=new E,u=new E;c.getSize(h),c.getCenter(u);const d=(n.hullWidth+n.trackWidth*2.2)/Math.max(h.x,.001),f=(n.hullDepth+.65)/Math.max(h.z,.001),g=n.collisionHalfExtents.y*2.15/Math.max(h.y,.001),v=z.clamp(Math.min(d,f,g),.01,20);return s.scale.multiplyScalar(v),s.position.sub(u.multiplyScalar(v)),s.position.y+=n.collisionHalfExtents.y,s.updateWorldMatrix(!0,!0),{hull:this.cloneWithWorldTransform(o),turret:this.cloneWithWorldTransform(a),gun:this.cloneWithWorldTransform(l)}}prepareSketchfabScene(e){e.traverse(t=>{if(!(t instanceof Ve))return;t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1,(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i instanceof nt&&(i.metalness=Math.min(i.metalness??.18,.35),i.roughness=Math.max(i.roughness??.85,.45))})})}findNode(e,t){const n=t.map(s=>s.toLowerCase());let i=null;return e.traverse(s=>{if(i||!s.name)return;const o=s.name.toLowerCase();n.some(a=>o.includes(a))&&(i=s)}),i}cloneWithWorldTransform(e){const t=e.clone(!0);return e.updateWorldMatrix(!0,!1),e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t}}const io=(r,e)=>{const t=e.x-r.x,n=e.y-r.y;return Math.sqrt(t*t+n*n)},sS=(r,e)=>{const t=e.x-r.x,n=e.y-r.y;return oS(Math.atan2(n,t))},rS=(r,e,t)=>{const n={x:0,y:0};return t=Za(t),n.x=r.x-e*Math.cos(t),n.y=r.y-e*Math.sin(t),n},Za=r=>r*(Math.PI/180),oS=r=>r*(180/Math.PI),aS=r=>isNaN(r.buttons)?r.pressure!==0:r.buttons!==0,xa=new Map,Vh=r=>{xa.has(r)&&clearTimeout(xa.get(r)),xa.set(r,setTimeout(r,100))},fo=(r,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],r.addEventListener?r.addEventListener(i,t,!1):r.attachEvent&&r.attachEvent(i,t)},Gh=(r,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],r.removeEventListener?r.removeEventListener(i,t):r.detachEvent&&r.detachEvent(i,t)},pd=r=>(r.preventDefault(),r.type.match(/^touch/)?r.changedTouches:r),Wh=()=>{const r=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:r,y:e}},qh=(r,e)=>{e.top||e.right||e.bottom||e.left?(r.style.top=e.top,r.style.right=e.right,r.style.bottom=e.bottom,r.style.left=e.left):(r.style.left=e.x+"px",r.style.top=e.y+"px")},vl=(r,e,t)=>{const n=md(r);for(let i in n)if(n.hasOwnProperty(i))if(typeof e=="string")n[i]=e+" "+t;else{let s="";for(let o=0,a=e.length;o<a;o+=1)s+=e[o]+" "+t+", ";n[i]=s.slice(0,-2)}return n},lS=(r,e)=>{const t=md(r);for(let n in t)t.hasOwnProperty(n)&&(t[n]=e);return t},md=r=>{const e={};return e[r]="",["webkit","Moz","o"].forEach(function(n){e[n+r.charAt(0).toUpperCase()+r.slice(1)]=""}),e},Ma=(r,e)=>{for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r},cS=(r,e)=>{const t={};for(let n in r)r.hasOwnProperty(n)&&e.hasOwnProperty(n)?t[n]=e[n]:r.hasOwnProperty(n)&&(t[n]=r[n]);return t},Qa=(r,e)=>{if(r.length)for(let t=0,n=r.length;t<n;t+=1)e(r[t]);else e(r)},hS=(r,e,t)=>({x:Math.min(Math.max(r.x,e.x-t),e.x+t),y:Math.min(Math.max(r.y,e.y-t),e.y+t)});var uS="ontouchstart"in window,dS=!!window.PointerEvent,fS=!!window.MSPointerEvent,er={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},_s,ur={};dS?_s=er.pointer:fS?_s=er.MSPointer:uS?(_s=er.touch,ur=er.mouse):_s=er.mouse;function oi(){}oi.prototype.on=function(r,e){var t=this,n=r.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]=t._handlers_[i]||[],t._handlers_[i].push(e);return t};oi.prototype.off=function(r,e){var t=this;return t._handlers_=t._handlers_||{},r===void 0?t._handlers_={}:e===void 0?t._handlers_[r]=null:t._handlers_[r]&&t._handlers_[r].indexOf(e)>=0&&t._handlers_[r].splice(t._handlers_[r].indexOf(e),1),t};oi.prototype.trigger=function(r,e){var t=this,n=r.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]&&t._handlers_[i].length&&t._handlers_[i].forEach(function(o){o.call(t,{type:i,target:t},e)})};oi.prototype.config=function(r){var e=this;e.options=e.defaults||{},r&&(e.options=cS(e.options,r))};oi.prototype.bindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},fo(r,_s[e],t._domHandlers_[e]),ur[e]&&fo(r,ur[e],t._domHandlers_[e]),t};oi.prototype.unbindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},Gh(r,_s[e],t._domHandlers_[e]),ur[e]&&Gh(r,ur[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function Rt(r,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=r,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Rt.id,Rt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Rt.prototype=new oi;Rt.constructor=Rt;Rt.id=0;Rt.prototype.buildEl=function(r){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Rt.prototype.stylize=function(){if(this.options.dataOnly)return this;var r=this.options.fadeTime+"ms",e=lS("borderRadius","50%"),t=vl("transition","opacity",r),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Ma(n.el,t),this.options.shape==="circle"&&Ma(n.back,e),Ma(n.front,e),this.applyStyles(n),this};Rt.prototype.applyStyles=function(r){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in r[e])this.ui[e].style[t]=r[e][t];return this};Rt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Rt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Rt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Rt.prototype.show=function(r){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof r=="function"&&r.call(this)},e.options.fadeTime)),e};Rt.prototype.hide=function(r){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof r=="function"&&r.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,n={};n.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,n.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(r,n)}return e};Rt.prototype.setPosition=function(r,e){var t=this;t.frontPosition={x:e.x,y:e.y};var n=t.options.fadeTime+"ms",i={};i.front=vl("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(i),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof r=="function"&&r.call(t),t.restCallback()},t.options.fadeTime)};Rt.prototype.restCallback=function(){var r=this,e={};e.front=vl("transition","none",""),r.applyStyles(e),r.trigger("rested",r.instance)};Rt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Rt.prototype.computeDirection=function(r){var e=r.angle.radian,t=Math.PI/4,n=Math.PI/2,i,s,o;if(e>t&&e<t*3&&!r.lockX?i="up":e>-t&&e<=t&&!r.lockY?i="left":e>-t*3&&e<=-t&&!r.lockX?i="down":r.lockY||(i="right"),r.lockY||(e>-n&&e<n?s="left":s="right"),r.lockX||(e>0?o="up":o="down"),r.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:s,y:o,angle:i},r.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return r;(!c.x||!c.y)&&this.trigger("plain",r),c.x||this.trigger("plain:"+s,r),c.y||this.trigger("plain:"+o,r),c.angle||this.trigger("dir dir:"+i,r)}else this.resetDirection();return r};function Mt(r,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=r,t.id=Mt.id,Mt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const n=getComputedStyle(t.options.zone.parentElement);return n&&n.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}Mt.prototype=new oi;Mt.constructor=Mt;Mt.id=0;Mt.prototype.prepareNipples=function(){var r=this,e=r.nipples;e.on=r.on.bind(r),e.off=r.off.bind(r),e.options=r.options,e.destroy=r.destroy.bind(r),e.ids=r.ids,e.id=r.id,e.processOnMove=r.processOnMove.bind(r),e.processOnEnd=r.processOnEnd.bind(r),e.get=function(t){if(t===void 0)return e[0];for(var n=0,i=e.length;n<i;n+=1)if(e[n].identifier===t)return e[n];return!1}};Mt.prototype.bindings=function(){var r=this;r.bindEvt(r.options.zone,"start"),r.options.zone.style.touchAction="none",r.options.zone.style.msTouchAction="none"};Mt.prototype.begin=function(){var r=this,e=r.options;if(e.mode==="static"){var t=r.createNipple(e.position,r.manager.getIdentifier());t.add(),r.idles.push(t)}};Mt.prototype.createNipple=function(r,e){var t=this,n=t.manager.scroll,i={},s=t.options,o={x:t.parentIsFlex?n.x:n.x+t.box.left,y:t.parentIsFlex?n.y:n.y+t.box.top};if(r.x&&r.y)i={x:r.x-o.x,y:r.y-o.y};else if(r.top||r.right||r.bottom||r.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=r.top,a.style.right=r.right,a.style.bottom=r.bottom,a.style.left=r.left,a.style.position="absolute",s.zone.appendChild(a);var l=a.getBoundingClientRect();s.zone.removeChild(a),i=r,r={x:l.left+n.x,y:l.top+n.y}}var c=new Rt(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:r,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(qh(c.ui.el,i),qh(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};Mt.prototype.updateBox=function(){var r=this;r.box=r.options.zone.getBoundingClientRect()};Mt.prototype.bindNipple=function(r){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};Mt.prototype.pressureFn=function(r,e,t){var n=this,i=0;clearInterval(n.pressureIntervals[t]),n.pressureIntervals[t]=setInterval((function(){var s=r.force||r.pressure||r.webkitForce||0;s!==i&&(e.trigger("pressure",s),n.trigger("pressure "+e.identifier+":pressure",s),i=s)}).bind(n),100)};Mt.prototype.onstart=function(r){var e=this,t=e.options,n=r;r=pd(r),e.updateBox();var i=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[r[0]];a.identifier=o,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return Qa(r,i),e.manager.bindDocument(),!1};Mt.prototype.processOnStart=function(r){var e=this,t=e.options,n,i=e.manager.getIdentifier(r),s=r.force||r.pressure||r.webkitForce||0,o={x:r.pageX,y:r.pageY},a=e.getOrCreate(i,o);a.identifier!==i&&e.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(h){h.trigger("start",h),e.trigger("start "+h.id+":start",h),h.show(),s>0&&e.pressureFn(r,h,h.identifier),e.processOnMove(r)};if((n=e.idles.indexOf(a))>=0&&e.idles.splice(n,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var c=io(o,a.position);if(c<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(r);return}}return a};Mt.prototype.getOrCreate=function(r,e){var t=this,n=t.options,i;return/(semi|static)/.test(n.mode)?(i=t.idles[0],i?(t.idles.splice(0,1),i):n.mode==="semi"?t.createNipple(e,r):(console.warn("Coudln't find the needed nipple."),!1)):(i=t.createNipple(e,r),i)};Mt.prototype.processOnMove=function(r){var e=this,t=e.options,n=e.manager.getIdentifier(r),i=e.nipples.get(n),s=e.manager.scroll;if(!aS(r)){this.processOnEnd(r);return}if(!i){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(t.dynamicPage){var o=i.el.getBoundingClientRect();i.position={x:s.x+o.left,y:s.y+o.top}}i.identifier=n;var a=i.options.size/2,l={x:r.pageX,y:r.pageY};t.lockX&&(l.y=i.position.y),t.lockY&&(l.x=i.position.x);var c=io(l,i.position),h=sS(l,i.position),u=Za(h),d=c/a,f={distance:c,position:l},g,v;if(i.options.shape==="circle"?(g=Math.min(c,a),v=rS(i.position,g,h)):(v=hS(l,i.position,a),g=io(v,i.position)),t.follow){if(c>a){let _=l.x-v.x,x=l.y-v.y;i.position.x+=_,i.position.y+=x,i.el.style.top=i.position.y-(e.box.top+s.y)+"px",i.el.style.left=i.position.x-(e.box.left+s.x)+"px",c=io(l,i.position)}}else l=v,c=g;var m=l.x-i.position.x,p=l.y-i.position.y;i.frontPosition={x:m,y:p},t.dataOnly||(i.ui.front.style.transform="translate("+m+"px,"+p+"px)");var y={identifier:i.identifier,position:l,force:d,pressure:r.force||r.pressure||r.webkitForce||0,distance:c,angle:{radian:u,degree:h},vector:{x:m/a,y:-p/a},raw:f,instance:i,lockX:t.lockX,lockY:t.lockY};y=i.computeDirection(y),y.angle={radian:Za(180-h),degree:180-h},i.trigger("move",y),e.trigger("move "+i.id+":move",y)};Mt.prototype.processOnEnd=function(r){var e=this,t=e.options,n=e.manager.getIdentifier(r),i=e.nipples.get(n),s=e.manager.removeIdentifier(i.identifier);i&&(t.dataOnly||i.hide(function(){t.mode==="dynamic"&&(i.trigger("removed",i),e.trigger("removed "+i.id+":removed",i),e.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(e.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),e.trigger("end "+i.id+":end",i),e.ids.indexOf(i.identifier)>=0&&e.ids.splice(e.ids.indexOf(i.identifier),1),e.actives.indexOf(i)>=0&&e.actives.splice(e.actives.indexOf(i),1),/(semi|static)/.test(t.mode)?e.idles.push(i):e.nipples.indexOf(i)>=0&&e.nipples.splice(e.nipples.indexOf(i),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};Mt.prototype.onDestroyed=function(r,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};Mt.prototype.destroy=function(){var r=this;r.unbindEvt(r.options.zone,"start"),r.nipples.forEach(function(t){t.destroy()});for(var e in r.pressureIntervals)r.pressureIntervals.hasOwnProperty(e)&&clearInterval(r.pressureIntervals[e]);r.trigger("destroyed",r.nipples),r.manager.unbindDocument(),r.off()};function Ft(r){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Wh(),e.config(r),e.prepareCollections();var t=function(){var i;e.collections.forEach(function(s){s.forEach(function(o){i=o.el.getBoundingClientRect(),o.position={x:e.scroll.x+i.left,y:e.scroll.y+i.top}})})};fo(window,"resize",function(){Vh(t)});var n=function(){e.scroll=Wh()};return fo(window,"scroll",function(){Vh(n)}),e.collections}Ft.prototype=new oi;Ft.constructor=Ft;Ft.prototype.prepareCollections=function(){var r=this;r.collections.create=r.create.bind(r),r.collections.on=r.on.bind(r),r.collections.off=r.off.bind(r),r.collections.destroy=r.destroy.bind(r),r.collections.get=function(e){var t;return r.collections.every(function(n){return t=n.get(e),!t}),t}};Ft.prototype.create=function(r){return this.createCollection(r)};Ft.prototype.createCollection=function(r){var e=this,t=new Mt(e,r);return e.bindCollection(t),e.collections.push(t),t};Ft.prototype.bindCollection=function(r){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};Ft.prototype.bindDocument=function(){var r=this;r.binded||(r.bindEvt(document,"move").bindEvt(document,"end"),r.binded=!0)};Ft.prototype.unbindDocument=function(r){var e=this;(!Object.keys(e.ids).length||r===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};Ft.prototype.getIdentifier=function(r){var e;return r?(e=r.identifier===void 0?r.pointerId:r.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};Ft.prototype.removeIdentifier=function(r){var e={};for(var t in this.ids)if(this.ids[t]===r){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};Ft.prototype.onmove=function(r){var e=this;return e.onAny("move",r),!1};Ft.prototype.onend=function(r){var e=this;return e.onAny("end",r),!1};Ft.prototype.oncancel=function(r){var e=this;return e.onAny("end",r),!1};Ft.prototype.onAny=function(r,e){var t=this,n,i="processOn"+r.charAt(0).toUpperCase()+r.slice(1);e=pd(e);var s=function(a,l,c){c.ids.indexOf(l)>=0&&(c[i](a),a._found_=!0)},o=function(a){n=t.getIdentifier(a),Qa(t.collections,s.bind(null,a,n)),a._found_||t.removeIdentifier(n)};return Qa(e,o),!1};Ft.prototype.destroy=function(){var r=this;r.unbindDocument(!0),r.ids={},r.index=0,r.collections.forEach(function(e){e.destroy()}),r.off()};Ft.prototype.onDestroyed=function(r,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Xh=new Ft,pS={create:function(r){return Xh.create(r)},factory:Xh};class mS{constructor(e,t){L(this,"joystick",null);L(this,"root",document.querySelector("#mobile-controls"));L(this,"joystickZone",document.querySelector("#joystick-zone"));L(this,"fireButton",document.querySelector("#fire-button"));L(this,"viewButton",document.querySelector("#view-button"));this.inputController=e,this.onUiAction=t}initialize(){!this.root||!this.joystickZone||!this.fireButton||!this.viewButton||!(window.matchMedia("(max-width: 900px)").matches||navigator.maxTouchPoints>0)||(this.root.classList.add("is-active"),this.joystick=pS.create({zone:this.joystickZone,mode:"static",position:{left:"50%",top:"50%"},color:"white",size:120}),this.joystick.on("move",(t,n)=>{const i=n.vector??{x:0,y:0};this.inputController.setVirtualDrive(i.x,-i.y)}),this.joystick.on("end",()=>{this.inputController.setVirtualDrive(0,0)}),this.bindButton(this.fireButton,()=>this.inputController.queueFire()),this.bindButton(this.viewButton,()=>this.inputController.queueViewToggle()))}destroy(){var e;(e=this.joystick)==null||e.destroy()}bindButton(e,t){const n=i=>{var s;i.preventDefault(),(s=this.onUiAction)==null||s.call(this),t()};e.addEventListener("touchstart",n,{passive:!1}),e.addEventListener("mousedown",n)}}const gS={front:1,side:1.15,rear:1.35,top:1.5};class vS{constructor(){L(this,"incomingDirection",new E);L(this,"forwardDirection",new E);L(this,"upDirection",new E);L(this,"localHitPoint",new E)}resolveHit(e,t,n,i){const s=this.getHitZone(t.controller,e,n,i),o=this.getArmorThickness(t.definition,s,this.localHitPoint);this.incomingDirection.copy(e.velocity).normalize().multiplyScalar(-1);const a=Math.max(.1,Math.abs(i.clone().normalize().dot(this.incomingDirection))),l=z.radToDeg(Math.acos(z.clamp(a,-1,1))),c=o/a,h=s!=="top"&&l>70?z.clamp((l-70)/16,.12,.82):0,u=h>0&&Math.random()<h,d=e.ammo.penetration,f=d/c,g=!u&&f>=.92,v=g?Math.round(e.ammo.damage*z.clamp(f,.88,1.55)*gS[s]):0,m=g?this.getModuleDamage(s,this.localHitPoint,f):null;return t.hp=Math.max(0,t.hp-v),{zone:s,impactAngle:l,effectiveArmor:c,armorThickness:o,penetration:d,damage:v,penetrated:g,ricochet:u,destroyed:t.hp<=0,remainingHp:t.hp,deformation:z.clamp(e.ammo.mass/22*(g?1.05:.55),.16,.92),localHitPoint:this.localHitPoint.clone(),moduleHit:m}}getHitZone(e,t,n,i){if(e.worldToLocalPoint(n,this.localHitPoint),e.getUpDirection(this.upDirection),Math.abs(i.dot(this.upDirection))>.72||this.localHitPoint.y>1.95)return"top";e.getFacingDirection(this.forwardDirection);const s=this.forwardDirection.dot(t.velocity.clone().normalize());return s<-.45?"front":s>.45?"rear":"side"}getArmorThickness(e,t,n){return t==="top"?Math.max(18,e.turretArmor*.28):t==="rear"?Math.max(25,e.frontalArmor*.46):t==="side"?Math.max(32,e.frontalArmor*.64):n.y>1.7?e.turretArmor:e.frontalArmor}getModuleDamage(e,t,n){const i=z.clamp((n-.78)*.9,.2,1);return Math.abs(t.x)>1.35&&t.y<.32?{module:"track",severity:i}:t.y>.78&&t.z>1.2?{module:"gun",severity:z.clamp(i*.9,.2,1)}:e==="rear"||t.z<-1.45?{module:"engine",severity:z.clamp(i*.82,.2,1)}:t.y>.68&&Math.abs(t.x)<.78?{module:"ammo",severity:z.clamp(i*1.08,.24,1)}:null}}class bo extends Ve{constructor(){const e=bo.SkyShader,t=new Ht({name:e.name,uniforms:Yi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Zt,depthWrite:!1});super(new $t(1,1,1),t),this.isSky=!0}}bo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new E},up:{value:new E(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const $i={clear:{label:"晴空",fogColor:"#7c8e9f",fogNear:90,fogFar:220,ambientColor:"#ddd2be",ambientIntensity:1.18,hemiSky:"#b7d7f4",hemiGround:"#62533c",hemiIntensity:.84,sunColor:"#fff3d7",sunIntensity:2.1,sunHeight:.78,sunAzimuth:.16,wetness:.06,rainStrength:0,mistStrength:.05,exposure:1.05},rain:{label:"暴雨",fogColor:"#627281",fogNear:72,fogFar:168,ambientColor:"#aab5bf",ambientIntensity:.92,hemiSky:"#92a9c2",hemiGround:"#3f3a32",hemiIntensity:.68,sunColor:"#d7e6ff",sunIntensity:1.3,sunHeight:.58,sunAzimuth:.26,wetness:.88,rainStrength:1,mistStrength:.3,exposure:.9},fog:{label:"浓雾",fogColor:"#8d9491",fogNear:34,fogFar:110,ambientColor:"#d7d7cf",ambientIntensity:1.02,hemiSky:"#d8dfdf",hemiGround:"#5d5546",hemiIntensity:.6,sunColor:"#f5f1de",sunIntensity:1.1,sunHeight:.46,sunAzimuth:.18,wetness:.34,rainStrength:0,mistStrength:.92,exposure:.88},dusk:{label:"黄昏",fogColor:"#665e63",fogNear:64,fogFar:170,ambientColor:"#8b7680",ambientIntensity:.74,hemiSky:"#d79863",hemiGround:"#413830",hemiIntensity:.54,sunColor:"#ffb568",sunIntensity:1.75,sunHeight:.34,sunAzimuth:.08,wetness:.12,rainStrength:0,mistStrength:.18,exposure:.96}},zs=[{id:"factory",label:"废弃工厂",description:"厂房、仓库、烟囱和围墙组成的钢铁战场。",playerSpawn:new E(-52,0,-18),enemySpawns:[{position:new E(42,0,-8),yaw:Math.PI*.95},{position:new E(32,0,22),yaw:Math.PI*1.05},{position:new E(-8,0,38),yaw:Math.PI},{position:new E(12,0,-42),yaw:Math.PI*.7},{position:new E(-28,0,44),yaw:Math.PI*1.22},{position:new E(56,0,30),yaw:Math.PI*1.15}],structures:[Yh("factory-hall-west",-8,0,0,22,10,34,0),Yh("factory-hall-east",26,0,-6,18,8,26,Math.PI*.06),xS("factory-warehouse-north",18,0,32,18,7,16,Math.PI*.2),Ii("factory-wall-south",-2,0,-34,34,4.4,2.2,0),Ii("factory-wall-east",50,0,10,2.4,4.2,30,0),jh("factory-chimney-a",-20,0,18,4,20,4),jh("factory-chimney-b",42,0,-22,4.6,24,4.6),Jr("factory-wreck-a",-28,0,-4,5.4,2.2,2.4,Math.PI*.4),Ii("factory-gate-1",-32,0,28,16,3.2,1.2,Math.PI*.08),Ii("factory-gate-2",8,0,18,12,3,1.2,Math.PI*.5)],terrainZones:[cn("road",-6,0,0,88,.2,20,1.12,1,1.08,.22,.08),cn("yard",24,0,-2,44,.2,34,.95,.88,.88,.44,.28),cn("rubble",18,0,28,30,.2,24,.82,.72,.84,.82,.36),cn("grass",-44,0,26,34,.2,42,.9,.84,.84,.38,0)]},{id:"city",label:"城市废墟",description:"坍塌街区、街道残骸和燃烧路口。",playerSpawn:new E(-48,0,12),enemySpawns:[{position:new E(36,0,26),yaw:Math.PI*1.08},{position:new E(28,0,-18),yaw:Math.PI*.88},{position:new E(-6,0,-42),yaw:Math.PI*.62},{position:new E(6,0,44),yaw:Math.PI*1.25},{position:new E(52,0,2),yaw:Math.PI},{position:new E(-22,0,38),yaw:Math.PI*1.3}],structures:[Sa("city-ruin-a",-10,0,24,18,8,14,Math.PI*.08),Sa("city-ruin-b",14,0,-24,20,9,16,Math.PI*.12),Sa("city-ruin-c",34,0,20,14,7,12,Math.PI*.42),ba("city-wall-a",-28,0,-6,20,4.2,1.8,Math.PI*.5),ba("city-wall-b",4,0,10,24,4,1.8,0),ba("city-wall-c",30,0,44,18,3.8,1.4,0),Jr("city-wreck-bus",6,0,-2,6.8,2.6,2.5,Math.PI*.52),Jr("city-car-hulk",24,0,6,4.2,1.8,2.2,Math.PI*.28),Ii("city-barricade-a",-16,0,-28,12,2.8,2.2,Math.PI*.14),Ii("city-barricade-b",42,0,-8,10,2.8,2,Math.PI*.62)],terrainZones:[cn("road",0,0,0,108,.2,18,1.15,.94,1.12,.18,.05),cn("road",14,0,0,18,.2,104,1.15,.96,1.08,.18,.05),cn("rubble",-8,0,24,44,.2,34,.76,.66,.82,.92,.18),cn("rubble",24,0,-18,36,.2,32,.8,.68,.86,.86,.2)]},{id:"countryside",label:"乡村战场",description:"农舍、谷仓、树林和篱笆线交错的机动区域。",playerSpawn:new E(-54,0,-20),enemySpawns:[{position:new E(38,0,-18),yaw:Math.PI*.98},{position:new E(18,0,34),yaw:Math.PI*1.1},{position:new E(-4,0,46),yaw:Math.PI*1.22},{position:new E(36,0,18),yaw:Math.PI*.9},{position:new E(52,0,4),yaw:Math.PI*1.02},{position:new E(-24,0,28),yaw:Math.PI*1.28}],structures:[MS("country-house",-6,0,2,14,6.4,10,Math.PI*.08),SS("country-barn",18,0,-8,16,7.2,12,Math.PI*.14),wa("country-fence-a",-24,0,14,18,1.5,1,Math.PI*.1),wa("country-fence-b",4,0,24,24,1.5,1,Math.PI*.5),wa("country-fence-c",32,0,10,18,1.5,1,Math.PI*.26),bS("country-shed",34,0,-26,7.5,3.2,6,Math.PI*.2),Jr("country-wreck-a",-16,0,-18,4.6,1.8,2.2,Math.PI*.36),Ii("country-stone-wall",24,0,30,20,2.3,1.6,Math.PI*.06)],terrainZones:[cn("road",-12,0,-10,108,.2,14,1.12,.95,1.06,.2,0),cn("mud",18,0,16,34,.2,30,.72,.58,.64,.92,0),cn("grass",10,0,-24,52,.2,32,.88,.8,.8,.46,0),cn("yard",-6,0,2,24,.2,18,.92,.84,.88,.4,.24)]}];function yS(r){const e=zs.find(t=>t.id===r);if(!e)throw new Error(`Unknown battlefield: ${r}`);return e}function _S(r){const e=$i[r];if(!e)throw new Error(`Unknown weather: ${r}`);return e}function cn(r,e,t,n,i,s,o,a,l,c,h,u=0,d=!1){return{type:r,center:new E(e,t,n),size:new E(i,s,o),speedMultiplier:a,traction:l,braking:c,suspension:z.lerp(.45,1.25,h),roughness:h,enclosure:u,interior:d}}function wn(r,e,t,n,i,s,o,a,l=0,c=!0,h=!1,u=90,d=110,f=0){return{id:r,type:e,position:new E(t,n,i),size:new E(s,o,a),yaw:l,destructible:c,collapsible:h,penetrationResistance:u,durability:d,enclosure:f}}function Yh(r,e,t,n,i,s,o,a=0){return wn(r,"factory-wall",e,t,n,i,s,o,a,!0,!0,86,140,.38)}function xS(r,e,t,n,i,s,o,a=0){return wn(r,"warehouse",e,t,n,i,s,o,a,!0,!0,96,150,.42)}function jh(r,e,t,n,i,s,o){return wn(r,"chimney",e,t,n,i,s,o,0,!0,!0,132,180,0)}function Sa(r,e,t,n,i,s,o,a=0){return wn(r,"ruin-block",e,t,n,i,s,o,a,!0,!0,82,110,.24)}function ba(r,e,t,n,i,s,o,a=0){return wn(r,"street-wall",e,t,n,i,s,o,a,!0,!1,76,86,.18)}function MS(r,e,t,n,i,s,o,a=0){return wn(r,"farmhouse",e,t,n,i,s,o,a,!0,!0,78,90,.45)}function SS(r,e,t,n,i,s,o,a=0){return wn(r,"barn",e,t,n,i,s,o,a,!0,!0,72,96,.35)}function wa(r,e,t,n,i,s,o,a=0){return wn(r,"fence",e,t,n,i,s,o,a,!0,!1,36,42,0)}function Ii(r,e,t,n,i,s,o,a=0){return wn(r,"street-wall",e,t,n,i,s,o,a,!0,!1,70,80,.08)}function Jr(r,e,t,n,i,s,o,a=0){return wn(r,"wreck",e,t,n,i,s,o,a,!0,!1,40,52,0)}function bS(r,e,t,n,i,s,o,a=0){return wn(r,"shed",e,t,n,i,s,o,a,!0,!0,58,60,.18)}const tr=180,$h=220,wS=45e4;class TS{constructor(e,t,n,i){L(this,"root",new It);L(this,"environmentObjects",new It);L(this,"effectObjects",new It);L(this,"vegetationRoot",new It);L(this,"bodies",[]);L(this,"bodyToStructure",new Map);L(this,"structures",[]);L(this,"debris",[]);L(this,"createdMeshes",[]);L(this,"allocatedTextures",[]);L(this,"registeredMaterials",new Set);L(this,"tempObject",new $e);L(this,"sky",new bo);L(this,"pmremGenerator");L(this,"ambientLight",new Yx("#d7d0c1",1.2));L(this,"hemiLight",new Hx("#9ec7ef","#5a4a32",.8));L(this,"sunLight",new ld("#fff2cf",2));L(this,"shaftGroup",new It);L(this,"rainStates",[]);L(this,"rainMesh");L(this,"rainMaterial");L(this,"mistLayer");L(this,"battlefieldDefinition");L(this,"weatherState");L(this,"environmentTexture",null);L(this,"groundBody",null);L(this,"time",Math.random()*100);L(this,"rainDrift",Math.random()*Math.PI*2);this.scene=e,this.world=t,this.pmremGenerator=new Ga(n),this.root.name="environment-root",this.environmentObjects.name="environment-objects",this.effectObjects.name="environment-effects",this.vegetationRoot.name="vegetation-root",this.battlefieldDefinition=yS(i.battlefieldId);const s=_S(i.weatherId);this.weatherState={id:i.weatherId,...s},this.scene.add(this.root),this.root.add(this.environmentObjects,this.vegetationRoot,this.effectObjects,this.shaftGroup),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=180,this.sunLight.shadow.camera.left=-80,this.sunLight.shadow.camera.right=80,this.sunLight.shadow.camera.top=80,this.sunLight.shadow.camera.bottom=-80,this.scene.add(this.ambientLight,this.hemiLight,this.sunLight),this.createSky(),this.applyAtmosphere(n),this.createGround(),this.createStructures(),this.createVegetation(),this.createVolumeLight(),this.rainMaterial=new ft({color:"#d5e6ff",transparent:!0,opacity:0,depthWrite:!1}),this.rainMesh=new Xa(new $t(.04,2.6,.04),this.rainMaterial,$h),this.rainMesh.instanceMatrix.setUsage(Qm),this.rainMesh.frustumCulled=!1,this.effectObjects.add(this.rainMesh);for(let o=0;o<$h;o+=1)this.rainStates.push({offset:new E(z.randFloatSpread(40),Math.random()*32,z.randFloatSpread(40)),velocity:24+Math.random()*10});this.mistLayer=new Ve(new Gi(240,240,1,1),new ft({color:"#dbe2eb",transparent:!0,opacity:0,depthWrite:!1,side:tn})),this.mistLayer.rotation.x=-Math.PI/2,this.mistLayer.position.y=.35,this.effectObjects.add(this.mistLayer),this.registerMesh(this.mistLayer)}getBattlefieldState(){return{id:this.battlefieldDefinition.id,label:this.battlefieldDefinition.label,description:this.battlefieldDefinition.description,worldExtents:tr,playerSpawn:this.battlefieldDefinition.playerSpawn.clone(),enemySpawns:this.battlefieldDefinition.enemySpawns.map(e=>({position:e.position.clone(),yaw:e.yaw})),structures:this.battlefieldDefinition.structures.map(e=>({type:e.type,position:e.position.clone(),size:e.size.clone(),yaw:e.yaw??0})),terrainZones:this.battlefieldDefinition.terrainZones.map(e=>({type:e.type,center:e.center.clone(),size:e.size.clone()}))}}getWeatherState(){return{...this.weatherState}}sampleTerrain(e){const t=this.sampleGroundHeight(e.x,e.z),n=this.sampleGroundHeight(e.x+1.4,e.z)-this.sampleGroundHeight(e.x-1.4,e.z),i=this.sampleGroundHeight(e.x,e.z+1.4)-this.sampleGroundHeight(e.x,e.z-1.4),s={type:"grass",groundHeight:t,slopePitch:z.clamp(i*.22,-.16,.16),slopeRoll:z.clamp(-n*.22,-.16,.16),speedMultiplier:.92,traction:.84,braking:.82,suspension:.64,roughness:.42,enclosure:0,interior:!1,wetness:this.weatherState.wetness};return this.battlefieldDefinition.terrainZones.forEach(o=>{const a=this.getZoneInfluence(o,e);a<=0||(s.type=o.type,s.speedMultiplier=z.lerp(s.speedMultiplier,o.speedMultiplier,a),s.traction=z.lerp(s.traction,o.traction,a),s.braking=z.lerp(s.braking,o.braking,a),s.suspension=z.lerp(s.suspension,o.suspension,a),s.roughness=z.lerp(s.roughness,o.roughness,a),s.enclosure=Math.max(s.enclosure,(o.enclosure??0)*a),s.interior=s.interior||!!(o.interior&&a>.55))}),this.structures.forEach(o=>{if(o.collapsed||o.definition.enclosure===void 0)return;const a=this.worldToStructureLocal(o,e);Math.abs(a.x)<=o.definition.size.x*.52&&Math.abs(a.z)<=o.definition.size.z*.52&&e.y<=o.definition.size.y+.8&&(s.enclosure=Math.max(s.enclosure,o.definition.enclosure??.2),s.interior=s.interior||(o.definition.enclosure??0)>.3)}),this.weatherState.id==="rain"&&(s.traction*=.88,s.braking*=.86),s}getAmbientAudioState(e){const t=this.sampleTerrain(e);return{enclosure:t.enclosure,interior:t.interior,weather:this.weatherState.id,wetness:t.wetness}}handleStructureHit(e,t,n,i,s){const o=this.bodyToStructure.get(e.id);if(!o||!o.definition.destructible||o.collapsed)return null;const a=o.definition.penetrationResistance??80,l=i>=a*.92,h=Math.max(8,s*(l?1.15:.55)+Math.max(0,i-a)*.12);o.durability=Math.max(0,o.durability-h),o.scaleFactor=z.clamp(o.durability/o.maxDurability,0,1);const u=o.root.worldToLocal(t.clone());this.spawnImpactMark(o,u),this.applyStructuralDamage(o,u),this.rebuildStructureBody(o);let d=!1;return(o.scaleFactor<=.08||o.definition.collapsible&&o.scaleFactor<=.22)&&(d=!0,this.collapseStructure(o,n)),{handled:!0,penetrated:l,destroyed:d,damageApplied:h,coverLoss:1-o.scaleFactor,message:d?"掩体坍塌":l?"墙体击穿":"结构受损"}}update(e,t,n){this.time+=e,this.rainDrift+=e*.18,n.toneMappingExposure=z.damp(n.toneMappingExposure,this.weatherState.exposure,2.2,e),this.updateAtmosphere(e),this.updateRain(e,t),this.updateMist(e,t),this.updateDebris(e)}dispose(){var e;this.root.removeFromParent(),this.scene.remove(this.ambientLight,this.hemiLight,this.sunLight),this.createdMeshes.forEach(t=>{t.geometry.dispose()}),this.registeredMaterials.forEach(t=>t.dispose()),this.allocatedTextures.forEach(t=>t.dispose()),this.bodies.forEach(t=>this.world.removeBody(t)),this.debris.forEach(t=>{this.world.removeBody(t.body),t.mesh.geometry.dispose()}),(e=this.environmentTexture)==null||e.texture.dispose(),this.pmremGenerator.dispose(),this.rainMesh.geometry.dispose()}createSky(){this.sky.scale.setScalar(wS),this.root.add(this.sky)}applyAtmosphere(e){const t=this.sky.material.uniforms;t.turbidity.value=z.lerp(6.4,10.5,this.weatherState.mistStrength),t.rayleigh.value=z.lerp(2.8,1.05,this.weatherState.wetness),t.mieCoefficient.value=z.lerp(.012,.05,this.weatherState.mistStrength),t.mieDirectionalG.value=z.lerp(.82,.96,this.weatherState.mistStrength),t.sunPosition.value.setFromSphericalCoords(1,Math.PI*(1-this.weatherState.sunHeight*.48),this.weatherState.sunAzimuth*Math.PI*2),this.scene.background=new ge(this.weatherState.fogColor),this.scene.fog=new hl(this.weatherState.fogColor,this.weatherState.fogNear,this.weatherState.fogFar),this.scene.environment=null,this.ambientLight.color.set(this.weatherState.ambientColor),this.ambientLight.intensity=this.weatherState.ambientIntensity,this.hemiLight.color.set(this.weatherState.hemiSky),this.hemiLight.groundColor.set(this.weatherState.hemiGround),this.hemiLight.intensity=this.weatherState.hemiIntensity,this.sunLight.color.set(this.weatherState.sunColor),this.sunLight.intensity=this.weatherState.sunIntensity;const n=new nd;n.add(this.sky.clone()),this.environmentTexture=this.pmremGenerator.fromScene(n),this.scene.environment=this.environmentTexture.texture,e.shadowMap.enabled=!0}updateAtmosphere(e){const t=this.time*.028,n=Math.sin(this.weatherState.sunAzimuth*Math.PI*2+t)*52,i=22+this.weatherState.sunHeight*20+Math.sin(this.time*.18)*1.2,s=Math.cos(this.weatherState.sunAzimuth*Math.PI*2+t)*34;this.sunLight.position.set(n,i,s),this.shaftGroup.position.set(n*.28,12,s*.28),this.shaftGroup.rotation.y=this.time*.06;const o=this.mistLayer.material;if(o instanceof ft){const c=z.clamp(this.weatherState.mistStrength*.22,0,.24);o.opacity=z.damp(o.opacity,c,3.2,e),o.color.lerp(new ge(this.weatherState.fogColor),e*.25)}const a=this.weatherState.rainStrength>0?.28:0;this.rainMaterial.opacity=z.damp(this.rainMaterial.opacity,a,4.2,e);const l=this.scene.fog;l&&(l.near=z.damp(l.near,this.weatherState.fogNear,2,e),l.far=z.damp(l.far,this.weatherState.fogFar,2,e))}createGround(){const e=new Gi(360,360,92,92),t=e.attributes.position,n=[];for(let c=0;c<t.count;c+=1){const h=t.getX(c),u=t.getY(c),d=this.sampleGroundHeight(h,u);t.setZ(c,d);const f=this.sampleTerrain(new E(h,0,u)),g=this.getGroundColor(f.type,d);n.push(g.r,g.g,g.b)}e.setAttribute("color",new Vt(new Float32Array(n),3)),e.computeVertexNormals(),e.rotateX(-Math.PI/2);const{albedo:i,normal:s,roughness:o}=this.createGroundTextures(),a=new nt({map:i,normalMap:s,roughnessMap:o,roughness:1,metalness:z.lerp(.04,.18,this.weatherState.wetness),vertexColors:!0}),l=new Ve(e,a);l.receiveShadow=!0,this.registerMesh(l),this.environmentObjects.add(l),this.groundBody=new ue({mass:0,shape:new If}),this.groundBody.quaternion.setFromEuler(-Math.PI/2,0,0),this.world.addBody(this.groundBody),this.bodies.push(this.groundBody),this.createRoadPatches()}createRoadPatches(){const e=new nt({color:new ge().setHSL(.08,.12,z.lerp(.3,.38,this.weatherState.wetness)),roughness:z.lerp(.98,.28,this.weatherState.wetness),metalness:z.lerp(.02,.12,this.weatherState.wetness)});this.battlefieldDefinition.terrainZones.filter(t=>t.type==="road").forEach(t=>{const n=new Ve(new Gi(t.size.x,t.size.z),e);n.rotation.x=-Math.PI/2,n.position.set(t.center.x,this.sampleGroundHeight(t.center.x,t.center.z)+.02,t.center.z),this.registerMesh(n),this.environmentObjects.add(n)})}createStructures(){this.battlefieldDefinition.structures.forEach(e=>{const t=this.buildStructure(e);this.structures.push(t),this.environmentObjects.add(t.root),t.body&&(this.world.addBody(t.body),this.bodies.push(t.body),this.bodyToStructure.set(t.body.id,t))})}buildStructure(e){const t=new It;t.position.set(e.position.x,this.sampleGroundHeight(e.position.x,e.position.z),e.position.z),t.rotation.y=e.yaw??0;const n=this.createStructureShell(e);t.add(n);const i={definition:e,root:t,shell:n,body:null,marks:[],durability:e.durability??100,maxDurability:e.durability??100,scaleFactor:1,collapsed:!1};return i.body=this.createStructureBody(i,1),i}createStructureShell(e){const t=e.size;let n=new $t(t.x,t.y,t.z),i=new nt({color:"#7c6f5d",roughness:.92,metalness:.06});e.type==="chimney"?(n=new Fs(t.x*.44,t.x*.6,t.y,12),i=new nt({color:"#6e6258",roughness:.95,metalness:.04})):e.type==="wreck"?(n=new $t(t.x,t.y,t.z),i=new nt({color:"#544d43",roughness:.84,metalness:.24})):e.type==="fence"&&(n=new $t(t.x,t.y,t.z),i=new nt({color:"#7c6a4f",roughness:.98,metalness:.02}));const s=new Ve(n,i);if(s.position.y=t.y*.5,s.castShadow=!0,s.receiveShadow=!0,this.registerMesh(s),e.type==="factory-wall"||e.type==="warehouse"){const o=new Ve(new $t(t.x*.96,Math.max(.3,t.y*.08),t.z*.96),new nt({color:"#43484c",roughness:.68,metalness:.26}));o.position.y=t.y+t.y*.04,o.castShadow=!0,o.receiveShadow=!0,s.add(o),this.registerMesh(o)}if(e.type==="farmhouse"||e.type==="barn"||e.type==="shed"){const o=new Ve(new ar(Math.max(t.x,t.z)*.46,t.y*.55,4),new nt({color:e.type==="barn"?"#724a34":"#5b3f31",roughness:.82,metalness:.06}));o.rotation.y=Math.PI*.25,o.position.y=t.y+t.y*.18,o.castShadow=!0,s.add(o),this.registerMesh(o)}if(e.type==="ruin-block"||e.type==="street-wall")for(let o=0;o<3;o+=1){const a=new Ve(new $t(t.x*.18,t.y*z.randFloat(.25,.45),t.z*.2),new nt({color:"#655a4f",roughness:1,metalness:.02}));a.position.set(z.randFloatSpread(t.x*.65),t.y*z.randFloat(.18,.52),z.randFloatSpread(t.z*.65)),s.add(a),this.registerMesh(a)}if(e.type==="wreck"){const o=new Ve(new pr(Math.max(t.y*.5,.8),12,12),new nt({color:"#65574d",roughness:.74,metalness:.34}));o.scale.set(1.2,.65,1.1),o.position.set(0,t.y*.62,0),s.add(o),this.registerMesh(o)}return s}createStructureBody(e,t){const n=e.definition.size.clone();return n.x*=Math.max(.2,t),n.y*=Math.max(.22,z.lerp(.45,1,t)),n.z*=Math.max(.2,z.lerp(.55,1,t)),new ue({mass:0,shape:new Xi(new M(n.x*.5,n.y*.5,n.z*.5)),position:new M(e.root.position.x,e.root.position.y+n.y*.5,e.root.position.z),quaternion:new en().setFromEuler(0,e.definition.yaw??0,0,"YZX")})}rebuildStructureBody(e){!e.body||e.collapsed||(this.world.removeBody(e.body),this.bodyToStructure.delete(e.body.id),e.body=this.createStructureBody(e,Math.max(.12,e.scaleFactor)),this.world.addBody(e.body),this.bodyToStructure.set(e.body.id,e))}applyStructuralDamage(e,t){const n=1-e.scaleFactor;e.shell.scale.set(z.lerp(1,.62,n*.72),z.lerp(1,.48,n),z.lerp(1,.7,n*.8)),e.shell.position.y=e.definition.size.y*.5*e.shell.scale.y,e.shell.rotation.z=z.clamp(t.x/Math.max(e.definition.size.x,1)*n*.18,-.12,.12),e.shell.rotation.x=z.clamp(-t.z/Math.max(e.definition.size.z,1)*n*.16,-.12,.12);const i=e.shell.material;i instanceof nt&&i.color.lerp(new ge("#4d443b"),n*.18)}collapseStructure(e,t){if(e.collapsed)return;e.collapsed=!0,e.shell.visible=!1,e.body&&(this.world.removeBody(e.body),this.bodyToStructure.delete(e.body.id),e.body=null);const n=Math.max(3,Math.round(e.definition.size.x/6));for(let i=0;i<n;i+=1){const s=new Ve(new $t(e.definition.size.x/n,Math.max(.9,e.definition.size.y*.32),Math.max(.9,e.definition.size.z*.45)),new nt({color:"#5d5449",roughness:.96,metalness:.08}));s.castShadow=!0,s.receiveShadow=!0,this.registerMesh(s),this.effectObjects.add(s);const o=new ue({mass:18+Math.random()*10,shape:new Xi(new M(e.definition.size.x/n*.5,Math.max(.45,e.definition.size.y*.16),Math.max(.45,e.definition.size.z*.22))),position:new M(e.root.position.x+z.randFloatSpread(e.definition.size.x*.4),e.root.position.y+e.definition.size.y*z.randFloat(.35,.7),e.root.position.z+z.randFloatSpread(e.definition.size.z*.4))}),a=t.clone().multiplyScalar(4+Math.random()*5);o.velocity.set(a.x+z.randFloatSpread(2),4+Math.random()*3,a.z+z.randFloatSpread(2)),o.angularVelocity.set(z.randFloatSpread(5),z.randFloatSpread(5),z.randFloatSpread(5)),this.world.addBody(o),this.debris.push({body:o,mesh:s,life:8+Math.random()*4})}}spawnImpactMark(e,t){const n=new Ve(new qi(.45+Math.random()*.3,18),new ft({color:"#1c1c1a",transparent:!0,opacity:.72,depthWrite:!1}));if(n.position.copy(t.clone().normalize().multiplyScalar(0)),n.position.set(t.x,t.y,t.z),n.lookAt(t.clone().multiplyScalar(2)),n.rotateY(Math.random()*Math.PI*2),n.position.add(t.clone().normalize().multiplyScalar(.06)),e.shell.add(n),this.registerMesh(n),e.marks.push(n),e.marks.length>8){const i=e.marks.shift();i&&i.removeFromParent()}}createVegetation(){const e=new nt({color:"#798654",roughness:1,metalness:.02}),t=new Xa(new ar(.16,1.2,6),e,180),n=new bn(new E(-tr,0,-tr),new E(tr,0,tr));for(let i=0;i<180;i+=1){const s=z.randFloat(n.min.x,n.max.x),o=z.randFloat(n.min.z,n.max.z);Math.hypot(s,o)<14||this.isNearStructure(s,o,10)?this.tempObject.position.set(400+i,-20,400+i):(this.tempObject.position.set(s,this.sampleGroundHeight(s,o)+.58,o),this.tempObject.scale.setScalar(.7+Math.random()*1.8),this.tempObject.rotation.y=Math.random()*Math.PI*2),this.tempObject.updateMatrix(),t.setMatrixAt(i,this.tempObject.matrix)}t.castShadow=!0,t.receiveShadow=!0,this.registerMesh(t),this.vegetationRoot.add(t)}createVolumeLight(){for(let e=0;e<3;e+=1){const t=new Ve(new ar(5+e*2,24,18,1,!0),new ft({color:e===0?"#ffe7b3":"#f4d7aa",transparent:!0,opacity:z.lerp(.05,.14,1-this.weatherState.mistStrength),depthWrite:!1,side:tn}));t.rotation.x=Math.PI,t.position.set(e*4,10+e*2,-e*5),this.shaftGroup.add(t),this.registerMesh(t)}}updateRain(e,t){if(this.weatherState.rainStrength<=.01)return;const n=Math.sin(this.rainDrift)*2.4,i=Math.cos(this.rainDrift*.72)*1.6;this.rainStates.forEach((s,o)=>{s.offset.y-=s.velocity*e,s.offset.x+=n*e*.55,s.offset.z+=i*e*.55,s.offset.y<-4&&(s.offset.y=28+Math.random()*10,s.offset.x=z.randFloatSpread(40),s.offset.z=z.randFloatSpread(40)),this.tempObject.position.copy(t).add(s.offset),this.tempObject.position.y=Math.max(this.tempObject.position.y,this.sampleGroundHeight(this.tempObject.position.x,this.tempObject.position.z)+1.2),this.tempObject.rotation.y=Math.atan2(n,i),this.tempObject.scale.set(1,.7+this.weatherState.rainStrength*.45,1),this.tempObject.updateMatrix(),this.rainMesh.setMatrixAt(o,this.tempObject.matrix)}),this.rainMesh.instanceMatrix.needsUpdate=!0}updateMist(e,t){this.mistLayer.position.x=z.damp(this.mistLayer.position.x,t.x,1.4,e),this.mistLayer.position.z=z.damp(this.mistLayer.position.z,t.z,1.4,e),this.mistLayer.rotation.z=Math.sin(this.time*.05)*.03}updateDebris(e){for(let t=this.debris.length-1;t>=0;t-=1){const n=this.debris[t];n.life-=e,n.mesh.position.set(n.body.position.x,n.body.position.y,n.body.position.z),n.mesh.quaternion.set(n.body.quaternion.x,n.body.quaternion.y,n.body.quaternion.z,n.body.quaternion.w),n.life<=0&&(this.world.removeBody(n.body),n.mesh.removeFromParent(),this.debris.splice(t,1))}}createGroundTextures(){const t=document.createElement("canvas"),n=document.createElement("canvas"),i=document.createElement("canvas");[t,n,i].forEach(u=>{u.width=512,u.height=512});const s=t.getContext("2d"),o=n.getContext("2d"),a=i.getContext("2d");if(!s||!o||!a)throw new Error("Unable to create environment textures.");s.fillStyle="#6b7848",s.fillRect(0,0,512,512),a.fillStyle=`rgb(${Math.round(z.lerp(214,110,this.weatherState.wetness))},${Math.round(z.lerp(214,110,this.weatherState.wetness))},${Math.round(z.lerp(214,110,this.weatherState.wetness))})`,a.fillRect(0,0,512,512),o.fillStyle="rgb(128,128,255)",o.fillRect(0,0,512,512);for(let u=0;u<1800;u+=1){const d=Math.random()*512,f=Math.random()*512,g=1+Math.random()*5.5,v=.08+Math.random()*.12;s.fillStyle=`rgba(${84+Math.random()*80}, ${78+Math.random()*70}, ${48+Math.random()*50}, ${v})`,s.beginPath(),s.arc(d,f,g,0,Math.PI*2),s.fill(),a.fillStyle=`rgba(${80+Math.random()*80}, ${80+Math.random()*80}, ${80+Math.random()*80}, ${.18+Math.random()*.2})`,a.beginPath(),a.arc(d,f,g*.8,0,Math.PI*2),a.fill()}const l=new Wi(t),c=new Wi(n),h=new Wi(i);return[l,c,h].forEach(u=>{u.wrapS=mn,u.wrapT=mn,u.repeat.set(12,12),this.allocatedTextures.push(u)}),l.colorSpace=ut,c.colorSpace=Dt,h.colorSpace=Dt,{albedo:l,normal:c,roughness:h}}getZoneInfluence(e,t){const n=Math.abs(t.x-e.center.x)/Math.max(e.size.x*.5,.001),i=Math.abs(t.z-e.center.z)/Math.max(e.size.z*.5,.001),s=Math.max(n,i);return s>=1?0:1-z.smoothstep(s,.6,1)}worldToStructureLocal(e,t){return e.root.worldToLocal(t.clone())}isNearStructure(e,t,n){return this.battlefieldDefinition.structures.some(i=>{const s=e-i.position.x,o=t-i.position.z;return Math.abs(s)<i.size.x*.6+n&&Math.abs(o)<i.size.z*.6+n})}sampleGroundHeight(e,t){const n=Math.min(1,Math.hypot(e,t)/150),i=Math.sin(e*.052)*.2*n+Math.cos(t*.074)*.24*n+Math.sin((e+t)*.032)*.12,s=this.battlefieldDefinition.id==="city"?Math.sin(e*.012)*.06:this.battlefieldDefinition.id==="factory"?Math.cos(t*.018)*.08:Math.sin((e-t)*.016)*.14;return i+s}getGroundColor(e,t){const n=this.weatherState.wetness;return e==="road"?new ge().setHSL(.08,.08,z.lerp(.26,.34,1-n)):e==="rubble"?new ge().setHSL(.1,.12,z.lerp(.22,.36,(t+.8)*.45)):e==="mud"?new ge().setHSL(.09,.34,z.lerp(.18,.28,1-n)):e==="yard"?new ge().setHSL(.12,.18,.32):new ge().setHSL(.22,z.lerp(.28,.18,n),z.lerp(.24,.42,(t+.6)*.45))}registerMesh(e){this.createdMeshes.push(e);const t=e.material;Array.isArray(t)?t.forEach(n=>{(n instanceof nt||n instanceof ft)&&this.registeredMaterials.add(n)}):(t instanceof nt||t instanceof ft)&&this.registeredMaterials.add(t)}}class ES{constructor(e){L(this,"particles",[]);L(this,"sphereGeometry",new pr(1,10,10));L(this,"debrisGeometry",new $t(1,1,1));this.scene=e}spawnMuzzleFlash(e,t,n){this.addParticle(e,t.clone().multiplyScalar(3.8),n,.12,.18,.42,5,0,.6);for(let i=0;i<4;i+=1)this.addParticle(e,t.clone().multiplyScalar(2.2+Math.random()*2.4).add(new E((Math.random()-.5)*1.8,(Math.random()-.5)*1.2,(Math.random()-.5)*1.8)),"#ffd996",.15,.08,.2,4,0,.9)}spawnImpact(e,t,n){const i=n?10:5;for(let s=0;s<i;s+=1){const o=t.clone().multiplyScalar(4.5+Math.random()*5).add(new E((Math.random()-.5)*(n?5.1:4),Math.random()*(n?3.1:2.6),(Math.random()-.5)*(n?5.1:4)));this.addParticle(e,o,n?"#ffbd59":"#dce6ff",.24+Math.random()*.22,.08,n?.34:.25,4.4,5.5,1.4)}this.addParticle(e,new E((Math.random()-.5)*1.4,1.4+Math.random()*1.4,(Math.random()-.5)*1.4),n?"#72665f":"#8d9081",n?.72:.6,n?.28:.22,n?.94:.8,1.2,.4,.5),n&&this.spawnDamageSparks(e,.55)}spawnTrackDust(e,t,n){if(n<.18)return;const i=new E(-t.z,0,t.x).multiplyScalar(1.6),s=e.clone().add(i).add(new E(0,-.3,0)),o=e.clone().sub(i).add(new E(0,-.3,0)),a=.9+n*1.4;[s,o].forEach(l=>{this.addParticle(l,new E((Math.random()-.5)*.9,a,(Math.random()-.5)*.9),"#9a8e6f",.55,.2+n*.06,.9,1.5,.15,.2)})}spawnEngineSmoke(e,t){this.addParticle(e,new E((Math.random()-.5)*.45,.45+t*.85,(Math.random()-.5)*.45),"#4f5258",.9+t*.45,.18+t*.04,.95,1.1,.05,.25)}spawnDamageSmoke(e,t){this.addParticle(e,new E((Math.random()-.5)*.65,.65+t*1.1,(Math.random()-.5)*.65),t>.7?"#2b2a29":"#57514b",.95+t*.65,.22+t*.08,1.05+t*.4,1.1,.08,.22)}spawnDamageSparks(e,t){const n=Math.max(3,Math.round(4+t*6));for(let i=0;i<n;i+=1)this.addParticle(e,new E((Math.random()-.5)*(2.8+t*2.4),1.2+Math.random()*(1.4+t*1.6),(Math.random()-.5)*(2.8+t*2.4)),i%2===0?"#ffb347":"#ffd89b",.2+Math.random()*.16,.06,.18,4.8,5.8,1.8)}spawnExplosion(e,t=1){const n=Math.max(10,Math.round(12*t)),i=Math.max(6,Math.round(7*t));for(let s=0;s<n;s+=1)this.addParticle(e,new E((Math.random()-.5)*(5.6+t*2.4),1.6+Math.random()*(4.2+t*1.8),(Math.random()-.5)*(5.6+t*2.4)),s<n*.45?"#ff9c52":"#5e554c",s<n*.45?.55+t*.08:1.04+t*.18,s<n*.45?.24:.32,s<n*.45?.92+t*.1:1.18,1.4,s<n*.45?1.05:.45,1.2);for(let s=0;s<i;s+=1)this.addParticle(e,new E((Math.random()-.5)*(4.8+t*1.8),1.8+Math.random()*(2.6+t*.9),(Math.random()-.5)*(4.8+t*1.8)),"#50483f",1.1+t*.35,.12+t*.04,.08,1.4,5.6,2,!0);this.spawnDamageSmoke(e,Math.min(1.15,.7+t*.25))}update(e){for(let t=this.particles.length-1;t>=0;t-=1){const n=this.particles[t];if(n.life-=e,n.life<=0){this.disposeParticle(n),this.particles.splice(t,1);continue}const i=1-n.life/n.maxLife;n.mesh.position.addScaledVector(n.velocity,e),n.velocity.multiplyScalar(Math.max(0,1-n.drag*e)),n.velocity.y-=n.gravity*e,n.mesh.scale.setScalar(n.baseScale+n.growRate*i),n.mesh.rotation.x+=n.spin*e,n.mesh.rotation.y+=n.spin*.7*e;const s=n.mesh.material;(s instanceof ft||s instanceof nt)&&(s.opacity=Math.max(0,1-i))}}dispose(){this.particles.splice(0).forEach(e=>this.disposeParticle(e)),this.sphereGeometry.dispose(),this.debrisGeometry.dispose()}addParticle(e,t,n,i,s,o,a,l,c,h=!1){const u=new ft({color:n,transparent:!0,opacity:1}),d=new Ve(h?this.debrisGeometry:this.sphereGeometry,u);d.position.copy(e),d.scale.setScalar(s),d.castShadow=!1,d.receiveShadow=!1,this.scene.add(d),this.particles.push({mesh:d,velocity:t,life:i,maxLife:i,baseScale:s,growRate:o,drag:a,gravity:l,spin:c})}disposeParticle(e){this.scene.remove(e.mesh);const t=e.mesh.material;(t instanceof ft||t instanceof nt)&&t.dispose()}}const gd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const AS=new xo(-1,1,1,-1,0,1);class RS extends Gt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const CS=new RS;class wo{constructor(e){this._mesh=new Ve(CS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,AS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vd extends Zi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yi.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kh extends Zi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class PS extends Zi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class LS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vd(gd),this.copyPass.material.blending=Nn,this.clock=new cd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kh!==void 0&&(o instanceof Kh?n=!0:o instanceof PS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const IS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class DS extends Zi{constructor(){super();const e=IS;this.uniforms=Yi.clone(e.uniforms),this.material=new Ex({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new wo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class NS extends Zi{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const US={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Is extends Zi{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,o,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new pn(s,o,{type:Un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new pn(s,o,{type:Un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=US;this.highPassUniforms=Yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new be(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=gd;this.copyUniforms=Yi.clone(h.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Da,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new ft,this.fsQuad=new wo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Is.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Is.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Is.BlurDirectionX=new be(1,0);Is.BlurDirectionY=new be(0,1);const FS={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class OS extends Zi{constructor(e,t,n){super(),this.scene=e,this.camera=t;const i=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new pn(1,1,{minFilter:wt,magFilter:wt,type:Un}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new ed,this.materialDepth.depthPacking=Du,this.materialDepth.blending=Nn;const a=FS,l=Yi.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=i,l.aspect.value=t.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new Ht({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new wo(this.materialBokeh),this._oldClearColor=new ge}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const i=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const BS={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new be(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};class kS{constructor(e,t,n,i){L(this,"composer");L(this,"bloomPass");L(this,"dofPass");L(this,"fxaaPass");L(this,"outputPass");e.outputColorSpace=ut,e.toneMapping=sl,e.toneMappingExposure=i?1:1.08,this.composer=new LS(e),this.composer.addPass(new NS(t,n.camera)),this.bloomPass=new Is(new be(window.innerWidth,window.innerHeight),i?.3:.52,.7,.72),this.composer.addPass(this.bloomPass),this.dofPass=new OS(t,n.camera,{focus:18,aperture:i?3e-5:6e-5,maxblur:i?.0025:.004}),this.composer.addPass(this.dofPass),this.fxaaPass=new vd(BS),this.composer.addPass(this.fxaaPass),this.outputPass=new DS,this.composer.addPass(this.outputPass),this.resize(window.innerWidth,window.innerHeight,Math.min(window.devicePixelRatio,2))}resize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloomPass.setSize(e,t),this.fxaaPass.material.uniforms.resolution.value.set(1/(e*n),1/(t*n))}updateCameraMode(e){var i;const t=e===Ss.POV?12:e===Ss.ThirdPerson?20:34,n=this.dofPass.materialBokeh;(i=n==null?void 0:n.uniforms)!=null&&i.focus&&(n.uniforms.focus.value=t)}render(e){this.composer.render(e)}}const Zh=Math.PI*2*44,Ta=.08,zS=36,HS=220,Qh=24,Jh=4;var iu;class VS{constructor(e,t){L(this,"renderer");L(this,"scene",new nd);L(this,"world",new Kp);L(this,"clock",new cd);L(this,"cameraController");L(this,"inputController");L(this,"mobileControls");L(this,"damageSystem",new vS);L(this,"modelLoader",new iS);L(this,"particleSystem");L(this,"environmentSystem");L(this,"postProcessing");L(this,"projectiles",[]);L(this,"actors",[]);L(this,"enemies",[]);L(this,"enemyRoster");L(this,"bodyToActor",new Map);L(this,"floatingTexts",[]);L(this,"killFeedEntries",[]);L(this,"nameplates",[]);L(this,"scheduledStrikes",[]);L(this,"tmpDirection",new E);L(this,"tmpPosition",new E);L(this,"tmpPositionB",new E);L(this,"tmpVector",new E);L(this,"tmpVectorB",new E);L(this,"screenPoint",new be);L(this,"viewLabel",document.querySelector("#view-label"));L(this,"viewLabelMobile",document.querySelector("#view-label-mobile"));L(this,"tankLabel",document.querySelector("#tank-label"));L(this,"tankLabelMobile",document.querySelector("#tank-label-mobile"));L(this,"nationLabel",document.querySelector("#nation-label"));L(this,"sceneLabel",document.querySelector("#scene-label"));L(this,"weatherLabel",document.querySelector("#weather-label"));L(this,"missionLabel",document.querySelector("#mission-label"));L(this,"objectiveLabel",document.querySelector("#objective-label"));L(this,"modeDetailLine",document.querySelector("#mode-detail-line"));L(this,"scoreLabel",document.querySelector("#score-label"));L(this,"killLabel",document.querySelector("#kill-label"));L(this,"enemyCountLabel",document.querySelector("#enemy-count-label"));L(this,"statusLine",document.querySelector("#status-line"));L(this,"hpFill",document.querySelector("#hp-fill"));L(this,"hpValue",document.querySelector("#hp-value"));L(this,"reloadFill",document.querySelector("#reload-fill"));L(this,"reloadValue",document.querySelector("#reload-value"));L(this,"supportFill",document.querySelector("#support-fill"));L(this,"supportValue",document.querySelector("#support-value"));L(this,"buffList",document.querySelector("#buff-list"));L(this,"damageVignette",document.querySelector("#damage-vignette"));L(this,"hitFlash",document.querySelector("#hit-flash"));L(this,"centerMessage",document.querySelector("#center-message"));L(this,"floatingTextRoot",document.querySelector("#floating-texts"));L(this,"killFeedRoot",document.querySelector("#kill-feed"));L(this,"nameplateRoot",document.querySelector("#nameplates"));L(this,"reticle",document.querySelector("#reticle"));L(this,"reloadRing",document.querySelector("#reload-ring"));L(this,"rangeIndicator",document.querySelector("#range-indicator"));L(this,"ammoIndicator",document.querySelector("#ammo-indicator"));L(this,"hitIndicator",document.querySelector("#hit-indicator"));L(this,"reticleToggleButton",document.querySelector("#reticle-toggle-button"));L(this,"reticleToggleLabel",document.querySelector("#reticle-toggle-label"));L(this,"minimapCanvas",document.querySelector("#minimap-canvas"));L(this,"minimapContext",((iu=this.minimapCanvas)==null?void 0:iu.getContext("2d"))??null);L(this,"pauseScreen",document.querySelector("#pause-screen"));L(this,"pauseTitle",document.querySelector("#pause-title"));L(this,"pauseDescription",document.querySelector("#pause-description"));L(this,"pauseScore",document.querySelector("#pause-score"));L(this,"pauseKills",document.querySelector("#pause-kills"));L(this,"pauseProgress",document.querySelector("#pause-progress"));L(this,"resumeButton",document.querySelector("#resume-button"));L(this,"restartButton",document.querySelector("#restart-button"));L(this,"returnButton",document.querySelector("#return-button"));L(this,"isMobile",window.matchMedia("(max-width: 900px), (pointer: coarse)").matches);L(this,"resumeAudioFromInteraction",()=>{this.options.audioSystem.resume()});L(this,"battlefieldState");L(this,"weatherState");L(this,"player");L(this,"playerBuffs",{speedTimer:0,reloadTimer:0,apShots:0,heShots:0,invincibleTimer:0});L(this,"resizeHandler",()=>{const e=Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(e),this.renderer.setSize(window.innerWidth,window.innerHeight),this.cameraController.resize(window.innerWidth,window.innerHeight),this.postProcessing.resize(window.innerWidth,window.innerHeight,e)});L(this,"handleMinimapClick",e=>{if(!this.minimapCanvas)return;const t=this.minimapCanvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,i=(e.clientY-t.top)/t.height,s=(n-.5)*this.battlefieldState.worldExtents*2,o=-(i-.5)*this.battlefieldState.worldExtents*2,a=new E(s,0,o);this.cameraController.setTopDownFocus(a),this.options.audioSystem.playUiClick(),this.refreshHud()});L(this,"animationFrame",0);L(this,"phase","running");L(this,"score",0);L(this,"kills",0);L(this,"damageOverlay",0);L(this,"hitFlashTime",0);L(this,"centerMessageTime",0);L(this,"slowMotionTime",0);L(this,"slowMotionScale",.42);L(this,"timeScale",1);L(this,"elapsedTime",0);L(this,"wave",1);L(this,"waveCooldown",0);L(this,"supportCooldown",0);L(this,"supportNoticeTimer",0);L(this,"airRaidCooldown",18+Math.random()*10);L(this,"killChainCount",0);L(this,"killChainTimer",0);L(this,"nextEnemyCursor",0);L(this,"totalEnemySpawns",0);L(this,"aimPrediction",null);L(this,"missionBase",null);L(this,"reticleVisible",!0);L(this,"animate",()=>{this.animationFrame=requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.033);if(this.inputController.consumePauseToggle()&&(this.phase==="running"?this.setPaused(!0):this.phase==="paused"&&this.setPaused(!1)),this.phase!=="running"){this.updateEffects(e),this.updateHud(),this.updateAimPrediction(),this.renderMinimap(),this.postProcessing.render(e);return}this.elapsedTime+=e,this.updatePlayerBuffs(e),this.updateMission(e),this.updateScheduledStrikes(e),this.slowMotionTime=Math.max(0,this.slowMotionTime-e);const t=this.slowMotionTime>0?this.slowMotionScale:1;this.timeScale=z.damp(this.timeScale,t,6.5,e);const n=e*this.timeScale;this.inputController.consumeViewToggle()&&(this.cameraController.cycleMode(),this.postProcessing.updateCameraMode(this.cameraController.getMode()),this.refreshHud(),this.options.audioSystem.playUiClick()),this.inputController.consumeSupport()&&this.triggerPlayerSupport(),this.inputController.consumeReticleToggle()&&(this.toggleReticleVisibility(),this.options.audioSystem.playUiClick()),this.updatePlayer(n),this.updateEnemyAi(n),this.world.step(1/60,n,3),this.actors.forEach(i=>i.controller.syncVisuals()),this.updateProjectiles(n),this.aimPrediction=this.buildAimPrediction(),this.cameraController.update(n,this.player.controller,this.aimPrediction.impactPoint),this.environmentSystem.update(n,this.player.controller.getPosition(this.tmpPosition.clone()),this.renderer),this.updateModuleDamage(n),this.updateSpatialAudio(),this.emitVehicleEffects(n),this.particleSystem.update(n),this.updateEffects(n),this.updateHud(),this.renderAimPrediction(),this.updateNameplates(),this.renderMinimap(),this.postProcessing.render(n)});var i;this.canvas=e,this.options=t,this.renderer=new td({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.world.gravity.set(0,-9.82,0),this.world.defaultContactMaterial.friction=.52,this.cameraController=new sM(window.innerWidth/window.innerHeight),this.inputController=new lM(this.canvas),this.mobileControls=new mS(this.inputController,()=>{this.options.audioSystem.resume(),this.options.audioSystem.playUiClick()}),this.particleSystem=new ES(this.scene),this.environmentSystem=new TS(this.scene,this.world,this.renderer,{battlefieldId:this.options.battlefieldId,weatherId:this.options.weatherId}),this.battlefieldState=this.environmentSystem.getBattlefieldState(),this.weatherState=this.environmentSystem.getWeatherState(),this.postProcessing=new kS(this.renderer,this.scene,this.cameraController,this.isMobile),this.postProcessing.updateCameraMode(this.cameraController.getMode());const n=Ki.get(t.playerTankId);if(!n)throw new Error(`Unknown player tank: ${t.playerTankId}`);this.enemyRoster=Ja.filter(s=>s.id!==n.id),this.setupScene(),this.player=this.createTankActor(n,"player",this.battlefieldState.playerSpawn.clone(),0),this.setupMission(),this.mobileControls.initialize(),this.bindEvents(),this.applyReticleVisibility(),this.refreshHud(),this.refreshBuffPanel(),this.refreshPauseOverlay(),this.updateAimPrediction(),this.cameraController.update(0,this.player.controller,((i=this.aimPrediction)==null?void 0:i.impactPoint)??null),this.updateAimPrediction(),this.renderMinimap()}start(){this.clock.start(),this.animate()}destroy(){var e;cancelAnimationFrame(this.animationFrame),window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("keydown",this.resumeAudioFromInteraction),window.removeEventListener("pointerdown",this.resumeAudioFromInteraction),(e=this.minimapCanvas)==null||e.removeEventListener("click",this.handleMinimapClick),this.mobileControls.destroy(),this.inputController.destroy(),this.resumeButton&&(this.resumeButton.onclick=null),this.restartButton&&(this.restartButton.onclick=null),this.returnButton&&(this.returnButton.onclick=null),this.reticleToggleButton&&(this.reticleToggleButton.onclick=null),this.projectiles.forEach(({projectile:t})=>{this.scene.remove(t.mesh,t.trail),t.destroy()}),this.actors.forEach(t=>{this.scene.remove(t.tank.root),this.world.removeBody(t.controller.body),t.tank.dispose()}),this.missionBase&&(this.scene.remove(this.missionBase.root),this.world.removeBody(this.missionBase.body)),this.environmentSystem.dispose(),this.particleSystem.dispose(),this.nameplates.forEach(({root:t})=>t.remove()),this.killFeedEntries.forEach(({element:t})=>t.remove()),this.floatingTexts.forEach(({element:t})=>t.remove()),this.renderer.dispose()}bindEvents(){var e;window.addEventListener("resize",this.resizeHandler),window.addEventListener("keydown",this.resumeAudioFromInteraction),window.addEventListener("pointerdown",this.resumeAudioFromInteraction),(e=this.minimapCanvas)==null||e.addEventListener("click",this.handleMinimapClick),this.resumeButton&&(this.resumeButton.onclick=()=>{this.phase==="paused"&&this.setPaused(!1)}),this.restartButton&&(this.restartButton.onclick=()=>{this.options.onRestart(this.getSessionConfig())}),this.returnButton&&(this.returnButton.onclick=()=>{this.options.onReturnToMenu({session:this.getSessionConfig(),summary:this.buildReturnSummary()})}),this.reticleToggleButton&&(this.reticleToggleButton.onclick=()=>{this.toggleReticleVisibility(),this.options.audioSystem.playUiClick()})}setupScene(){this.scene.backgroundBlurriness=.12}setupMission(){if(this.options.modeId==="classic"){this.missionBase=this.createMissionBase(),this.spawnEnemyBatch(this.battlefieldState.enemySpawns.length);return}if(this.options.modeId==="survival"){this.wave=1,this.spawnEnemyBatch(Jh);return}this.spawnEnemyBatch(Math.min(5,this.getRemainingAnnihilationSpawns()))}createMissionBase(){const e=this.environmentSystem.sampleTerrain(new E(0,0,0)),t=new E(0,e.groundHeight+.18,0),n=new It;n.position.copy(t);const i=new Ve(new Fs(2.6,3.1,.8,24),new nt({color:"#6e6557",roughness:.86,metalness:.14}));i.receiveShadow=!0,i.castShadow=!0,n.add(i);const s=new Ve(new qi(1.8,40),new ft({map:this.createBaseBadgeTexture(),transparent:!0,side:tn}));s.rotation.x=-Math.PI/2,s.position.y=.46,n.add(s);const o=new Ve(new fl(2.02,.12,12,48),new nt({color:"#d7b46a",emissive:"#7c4a14",emissiveIntensity:.35,roughness:.3,metalness:.85}));o.rotation.x=Math.PI/2,o.position.y=.52,n.add(o);const a=new Ve(new Gi(1.9,.8),new ft({map:this.createBaseBadgeTexture(),transparent:!0,side:tn}));a.position.set(0,1.6,0),n.add(a),this.scene.add(n);const l=new ue({mass:0,shape:new Xi(new M(2.6,1.3,2.6)),position:new M(t.x,t.y+.8,t.z)});return this.world.addBody(l),{root:n,body:l,hp:260,maxHp:260,destroyed:!1,position:t}}createBaseBadgeTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(!t)throw new Error("Unable to create base badge canvas.");t.clearRect(0,0,256,256),t.fillStyle="#20140f",t.beginPath(),t.arc(128,128,120,0,Math.PI*2),t.fill(),t.fillStyle="#f5d281",t.beginPath(),t.arc(128,128,108,0,Math.PI*2),t.fill(),t.fillStyle="#4a2c1b",t.beginPath(),t.arc(128,128,88,0,Math.PI*2),t.fill(),t.fillStyle="#f8e2aa",t.font="bold 42px sans-serif",t.textAlign="center",t.fillText("BASE",128,112),t.font="bold 58px sans-serif",t.fillText("鹰",128,172);const n=new Wi(e);return n.needsUpdate=!0,n}createTankActor(e,t,n,i){const s=new vM(e,SM.generate(e.nation,e.id),t==="player"?"#7fe38a":"#ff6b6b");this.scene.add(s.root);const o=new aM(this.world,s,e,{position:new M(n.x,0,n.z),yaw:i}),a={id:`${t}-${e.id}-${this.actors.length}`,team:t,tank:s,controller:o,definition:e,hp:e.hp,destroyed:!1,dustTimer:Math.random()*.2,smokeTimer:Math.random()*.35,damageSmokeTimer:Math.random()*.2,damageSparkTimer:Math.random()*.35,damagePulse:0,modules:{trackBroken:!1,gunDamaged:!1,engineFire:!1,ammoRackHit:!1},engineFireTick:.7,terrainSample:null};return t==="enemy"&&(a.ai={home:n.clone(),patrolTarget:n.clone(),retargetTimer:0,fireCooldownBias:Math.random()*.45}),this.actors.push(a),this.bodyToActor.set(o.body.id,a),t==="enemy"&&(this.enemies.push(a),this.pickPatrolTarget(a),this.createNameplate(a)),this.modelLoader.hasModel(e.id)&&this.loadTankModel(a),a}async loadTankModel(e){const t=await this.modelLoader.loadTankModel(e.definition.id,e.tank.profile);t&&e.tank.applyExternalModel(t)}createNameplate(e){if(!this.nameplateRoot)return;const t=document.createElement("div");t.className="nameplate",t.innerHTML=`
      <div class="nameplate__title">${e.definition.name}</div>
      <div class="nameplate__bar"><div class="nameplate__fill"></div></div>
      <div class="nameplate__value">HP ${e.hp}</div>
    `;const n=t.querySelector(".nameplate__fill"),i=t.querySelector(".nameplate__value");if(!n||!i){t.remove();return}this.nameplateRoot.appendChild(t),this.nameplates.push({actor:e,root:t,fill:n,value:i})}spawnEnemyBatch(e){for(let t=0;t<e;t+=1)this.spawnEnemyAt(t)}spawnEnemyAt(e){const t=this.enemyRoster[this.nextEnemyCursor%this.enemyRoster.length],n=this.battlefieldState.enemySpawns[(this.totalEnemySpawns+e)%this.battlefieldState.enemySpawns.length];this.nextEnemyCursor+=1,this.totalEnemySpawns+=1,this.createTankActor(t,"enemy",n.position.clone(),n.yaw)}updatePlayer(e){const t=this.player.destroyed?{throttle:0,turn:0}:this.inputController.getDriveInput(),n=this.player.destroyed?{x:0,y:0}:this.inputController.consumeLookDelta(),i={yaw:-n.x*.0032,pitch:-n.y*.0018},s=this.sampleActorTerrain(this.player);this.player.controller.update(e,t,i,s,this.player.modules),!this.player.destroyed&&this.inputController.consumeFire()&&this.tryFire(this.player)}updateEnemyAi(e){this.enemies.forEach(t=>{const n=this.sampleActorTerrain(t);if(!t.ai||t.destroyed){t.controller.update(e,{throttle:0,turn:0},{yaw:0,pitch:0},n,t.modules);return}const i=t.controller.getPosition(this.tmpPositionB),s=this.getEnemyTargetPoint(t),o=this.tmpVector.copy(s).sub(i),a=o.length(),l=this.hasLineOfSightToPoint(t,s),c={throttle:0,turn:0},h={yaw:0,pitch:0};if(l&&a<86){const u=Math.atan2(o.x,o.z),d=z.euclideanModulo(u-t.controller.getHullYaw()+Math.PI,Math.PI*2)-Math.PI;c.turn=z.clamp(-d*1.08,-1,1),a>28?c.throttle=.72:a<18?c.throttle=-.34:c.throttle=.08;const f=this.getEnemyAimError(t,s,a);h.yaw=z.clamp(f.yaw,-.04,.04),h.pitch=z.clamp(f.pitch,-.024,.024),t.ai.fireCooldownBias=Math.max(0,t.ai.fireCooldownBias-e);const g=t.controller.getNormalizedSpeed()*.018,v=.025+g,m=.02+g*.75;t.ai.fireCooldownBias<=0&&a<72&&Math.abs(f.yaw)<v&&Math.abs(f.pitch)<m&&(this.tryFire(t),t.ai.fireCooldownBias=.85+Math.random()*.5)}else{t.ai.retargetTimer-=e,(t.ai.retargetTimer<=0||i.distanceTo(t.ai.patrolTarget)<5)&&(this.options.modeId==="classic"&&this.missionBase&&!this.missionBase.destroyed?(t.ai.patrolTarget.copy(this.missionBase.position),t.ai.retargetTimer=3.6):this.pickPatrolTarget(t));const u=this.tmpVector.copy(t.ai.patrolTarget).sub(i),d=Math.atan2(u.x,u.z),f=z.euclideanModulo(d-t.controller.getHullYaw()+Math.PI,Math.PI*2)-Math.PI;c.turn=z.clamp(-f*1.15,-.7,.7),c.throttle=u.length()>5?.55:0;const g=z.euclideanModulo(t.controller.getHullYaw()-t.controller.getTurretYaw()+Math.PI,Math.PI*2)-Math.PI;h.yaw=z.clamp(g*.08,-.02,.02),h.pitch=z.clamp(-t.controller.getGunPitch()*.08,-.01,.01)}t.controller.update(e,c,h,n,t.modules)})}getEnemyTargetPoint(e){return this.options.modeId==="classic"&&this.missionBase&&!this.missionBase.destroyed&&(this.player.destroyed||!this.hasLineOfSight(e,this.player))?this.tmpPosition.copy(this.missionBase.position).add(new E(0,1.2,0)):this.player.controller.getPosition(this.tmpPosition).add(new E(0,1.15,0))}getEnemyAimError(e,t,n){const i=e.controller.getMuzzleWorldPosition(this.tmpVectorB),s=this.tmpDirection.copy(t).sub(i).normalize(),o=z.clamp(z.mapLinear(n,10,80,.002,.024)+e.controller.getNormalizedSpeed()*.022,.002,.028);s.add(new E(z.randFloatSpread(o),z.randFloatSpread(o*.55),z.randFloatSpread(o))).normalize();const a=Math.atan2(s.x,s.z),l=Math.asin(z.clamp(s.y,-1,1)),c=z.euclideanModulo(a-e.controller.getTurretYaw()+Math.PI,Math.PI*2)-Math.PI,h=l-e.controller.getGunPitch();return{yaw:c,pitch:h}}sampleActorTerrain(e){const t=this.environmentSystem.sampleTerrain(e.controller.getPosition(this.tmpVector.clone()));return e.terrainSample=t,t}updateMission(e){var t;if(this.killChainTimer>0&&(this.killChainTimer=Math.max(0,this.killChainTimer-e),this.killChainTimer===0&&(this.killChainCount=0)),this.supportCooldown>0&&(this.supportCooldown=Math.max(0,this.supportCooldown-e)),this.supportNoticeTimer>0&&(this.supportNoticeTimer=Math.max(0,this.supportNoticeTimer-e)),this.options.modeId==="survival"&&(this.enemies.filter(i=>!i.destroyed).length===0?(this.waveCooldown=Math.max(0,this.waveCooldown-e),this.waveCooldown===0&&(this.wave+=1,this.waveCooldown=2.6,this.showBattleMessage(`第 ${this.wave} 波`,"info"),this.spawnEnemyBatch(Math.min(this.battlefieldState.enemySpawns.length,Jh+this.wave-1)))):this.waveCooldown=2.6),this.options.modeId==="annihilation"){const n=In.annihilation,i=this.getRemainingAnnihilationSpawns(),s=this.enemies.filter(o=>!o.destroyed).length;i>0&&s<4&&this.spawnEnemyBatch(Math.min(4-s,i)),this.elapsedTime>=n.timeLimit&&this.finishBattle("defeat","歼灭超时"),this.kills>=n.killTarget&&this.finishBattle("victory","歼灭完成")}this.options.modeId==="classic"&&((t=this.missionBase)!=null&&t.destroyed&&this.finishBattle("defeat","基地被摧毁"),this.enemies.every(n=>n.destroyed)&&this.finishBattle("victory","基地守住")),this.options.modeId!=="classic"&&(this.airRaidCooldown=Math.max(0,this.airRaidCooldown-e),this.airRaidCooldown===0&&(this.scheduleEnemyAirRaid(),this.airRaidCooldown=26+Math.random()*18)),this.player.destroyed&&this.finishBattle("defeat","你的坦克被击毁")}getRemainingAnnihilationSpawns(){return Math.max(0,In.annihilation.killTarget-this.totalEnemySpawns)}updatePlayerBuffs(e){this.playerBuffs.speedTimer=Math.max(0,this.playerBuffs.speedTimer-e),this.playerBuffs.reloadTimer=Math.max(0,this.playerBuffs.reloadTimer-e),this.playerBuffs.invincibleTimer=Math.max(0,this.playerBuffs.invincibleTimer-e),this.player.controller.setMobilityMultiplier(this.playerBuffs.speedTimer>0?1.1:1),this.player.controller.setReloadMultiplier(this.playerBuffs.reloadTimer>0?.8:1)}updateScheduledStrikes(e){for(let t=this.scheduledStrikes.length-1;t>=0;t-=1){const n=this.scheduledStrikes[t];n.delay-=e,!(n.delay>0)&&(this.triggerStrike(n),this.scheduledStrikes.splice(t,1))}}scheduleEnemyAirRaid(){var n;const t=(this.player.destroyed?((n=this.missionBase)==null?void 0:n.position.clone())??new E:this.player.controller.getPosition(this.tmpVector).clone()).clone().add(new E(z.randFloatSpread(10),0,z.randFloatSpread(10)));for(let i=0;i<5;i+=1)this.scheduledStrikes.push({delay:1+i*.28,position:t.clone().add(new E(z.randFloatSpread(8),0,z.randFloatSpread(8))),radius:4.4,damage:36,ownerTeam:"enemy",label:i===0?"空袭来袭":"空袭",shake:.38});this.showBattleMessage("空袭警报","destroyed")}triggerPlayerSupport(){if(this.supportCooldown>0||!this.aimPrediction){this.showBattleMessage(this.supportCooldown>0?`支援冷却 ${this.supportCooldown.toFixed(1)}s`:"未锁定支援目标","info");return}const e=this.aimPrediction.impactPoint.clone();for(let t=0;t<5;t+=1)this.scheduledStrikes.push({delay:.7+t*.24,position:e.clone().add(new E(z.randFloatSpread(6),0,z.randFloatSpread(6))),radius:4,damage:44,ownerTeam:"player",label:t===0?"炮击支援":"支援炮击",shake:.34});this.supportCooldown=Qh,this.supportNoticeTimer=1.4,this.showBattleMessage("炮击支援已呼叫","hit")}triggerStrike(e){const t=e.position.clone();t.y=this.environmentSystem.sampleTerrain(t).groundHeight+.4,this.particleSystem.spawnExplosion(t,e.ownerTeam==="player"?1.12:1.25),this.options.audioSystem.playExplosion(t,1.05),this.applyAreaDamage(e.ownerTeam,t,e.radius,e.damage),this.cameraController.applyShake(e.shake,.18),e.label&&e.ownerTeam==="enemy"&&this.showBattleMessage(e.label,"destroyed")}applyAreaDamage(e,t,n,i){this.actors.forEach(s=>{if(s.destroyed||s.team===e)return;const o=s.controller.getPosition(this.tmpPosition).distanceTo(t);if(o>n)return;const a=1-o/n,l=Math.max(10,Math.round(i*a));if(s===this.player&&this.playerBuffs.invincibleTimer>0){this.spawnFloatingText("无敌",t.clone().add(new E(0,1.1,0)),"info");return}s.hp=Math.max(0,s.hp-l),s.damagePulse=Math.max(s.damagePulse,.78),this.spawnFloatingText(`-${l}`,t.clone().add(new E(0,1.1,0)),"damage"),s.hp<=0&&this.destroyActor(s,e==="player"?this.player:s,t.clone(),e==="player")}),this.missionBase&&!this.missionBase.destroyed&&e==="enemy"&&this.missionBase.position.distanceTo(t)<=n+2&&this.damageMissionBase(Math.round(i*.7),t)}updateModuleDamage(e){this.actors.forEach(t=>{t.destroyed||!t.modules.engineFire||(t.engineFireTick-=e,t.engineFireTick<=0&&(t.engineFireTick=.68,t.hp=Math.max(0,t.hp-4),t.damagePulse=Math.max(t.damagePulse,.44),this.spawnFloatingText("-4",t.controller.getPosition(this.tmpVector.clone()).add(new E(0,1.1,0)),"damage"),t.hp<=0&&this.destroyActor(t,t===this.player?t:this.player,t.controller.getPosition(this.tmpPosition.clone()),!1)))})}emitVehicleEffects(e){this.actors.forEach(t=>{const n=t.controller.getNormalizedSpeed(),i=1-t.hp/t.definition.hp;if(t.dustTimer-=e,t.smokeTimer-=e,t.damageSmokeTimer-=e,t.damageSparkTimer-=e,t.damagePulse=Math.max(0,t.damagePulse-e*.55),!t.destroyed&&n>.18&&t.dustTimer<=0){const s=t.controller.getPosition(this.tmpPosition).clone(),o=t.controller.getFacingDirection(this.tmpDirection).clone(),a=t.controller.getTerrainType()==="road"?n*.45:n;this.particleSystem.spawnTrackDust(s,o,a),t.dustTimer=z.lerp(.26,.08,Math.max(a,.2))}if((t.destroyed||n>.1||t.modules.engineFire)&&t.smokeTimer<=0){const s=t.controller.getPosition(this.tmpPositionB).clone().add(t.controller.getFacingDirection(this.tmpVector).clone().multiplyScalar(-2)).add(new E(0,.5,0)),o=t.destroyed?1:t.modules.engineFire?.9:.25+n*.38;this.particleSystem.spawnEngineSmoke(s,o),t.smokeTimer=t.destroyed||t.modules.engineFire?.14:z.lerp(.42,.18,n)}if((t.destroyed||i>.24||t.damagePulse>.24)&&t.damageSmokeTimer<=0){const s=t.controller.getPosition(this.tmpPosition).clone().add(t.controller.getFacingDirection(this.tmpDirection).clone().multiplyScalar(-1.35)).add(new E((Math.random()-.5)*.35,.9+i*.55,(Math.random()-.5)*.35)),o=t.destroyed?1:z.clamp(i*1.15+t.damagePulse*.4,.25,.9);this.particleSystem.spawnDamageSmoke(s,o),t.damageSmokeTimer=t.destroyed?.12:z.lerp(.52,.2,o)}if((t.destroyed||i>.42||t.damagePulse>.42)&&t.damageSparkTimer<=0){const s=t.controller.getPosition(this.tmpPositionB).clone().add(new E((Math.random()-.5)*.45,.82,(Math.random()-.5)*.45)),o=t.destroyed?.95:z.clamp(i+t.damagePulse*.65,.3,.85);this.particleSystem.spawnDamageSparks(s,o),t.damageSparkTimer=t.destroyed?.18:z.lerp(.72,.26,o)}})}updateSpatialAudio(){const e=this.environmentSystem.getAmbientAudioState(this.player.controller.getPosition(this.tmpVector.clone()));this.options.audioSystem.update(this.cameraController.camera.position,this.actors.map(t=>({id:t.id,team:t.team,position:t.controller.getPosition(this.tmpPosition.clone()),speedRatio:t.controller.getNormalizedSpeed(),engineLoad:t.controller.getEngineLoad(),slipRatio:t.controller.getSlipRatio(),terrainType:t.controller.getTerrainType(),destroyed:t.destroyed})),e)}hasLineOfSight(e,t){var a;const n=e.controller.getMuzzleWorldPosition(this.tmpPosition).add(e.controller.getMuzzleWorldDirection(this.tmpDirection).multiplyScalar(.8)),i=t.controller.getPosition(this.tmpPositionB).clone(),s=new _i;return!!(this.world.raycastClosest(new M(n.x,n.y,n.z),new M(i.x,i.y+1,i.z),{},s)&&((a=s.body)==null?void 0:a.id)===t.controller.body.id)}hasLineOfSightToPoint(e,t){const n=e.controller.getMuzzleWorldPosition(this.tmpPosition).add(e.controller.getMuzzleWorldDirection(this.tmpDirection).multiplyScalar(.8)),i=new _i;return!this.world.raycastClosest(new M(n.x,n.y,n.z),new M(t.x,t.y,t.z),{},i)||!i.body?!1:this.missionBase&&i.body.id===this.missionBase.body.id?!0:this.bodyToActor.has(i.body.id)}pickPatrolTarget(e){if(!e.ai)return;const t=Math.random()*Math.PI*2,n=10+Math.random()*16;e.ai.patrolTarget.set(e.ai.home.x+Math.cos(t)*n,e.ai.home.y,e.ai.home.z+Math.sin(t)*n),e.ai.retargetTimer=5+Math.random()*4}tryFire(e){if(!e.controller.canFire())return;const t=this.getAmmoPackage(e,!0),n=e.controller.getMuzzleWorldDirection(this.tmpDirection).clone();e.modules.gunDamaged&&n.add(new E(z.randFloatSpread(.05),z.randFloatSpread(.03),z.randFloatSpread(.05))).normalize();const i=e.controller.getMuzzleWorldPosition(this.tmpPosition).clone().addScaledVector(n,.7),s=new Uh({ammo:t.ammo,origin:i,direction:n,ownerBodyId:e.controller.body.id});this.scene.add(s.mesh,s.trail),this.projectiles.push({owner:e,projectile:s,whizPlayed:!1,specialAmmo:t.kind}),e.controller.markFired(),this.options.audioSystem.playShot(e.definition.gunCaliber,i,e.team),this.particleSystem.spawnMuzzleFlash(i,n,s.ammo.trailColor),e.team==="player"&&this.cameraController.getMode()===Ss.POV&&this.cameraController.applyShake(.28,.12)}getAmmoPackage(e,t){const n={...Rd(e.definition.gunCaliber)};return e.team!=="player"?{ammo:n,kind:"standard"}:this.playerBuffs.heShots>0?(t&&(this.playerBuffs.heShots=Math.max(0,this.playerBuffs.heShots-1)),{ammo:{...n,damage:Math.round(n.damage*1.12),trailColor:"#ffb45d"},kind:"he"}):this.playerBuffs.apShots>0?(t&&(this.playerBuffs.apShots=Math.max(0,this.playerBuffs.apShots-1)),{ammo:{...n,penetration:Math.round(n.penetration*1.3),trailColor:"#dbeafe"},kind:"ap"}):{ammo:n,kind:"standard"}}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t-=1){const n=this.projectiles[t],i=n.projectile.update(e,this.world);!n.whizPlayed&&n.owner.team!=="player"&&n.projectile.position.distanceTo(this.cameraController.camera.position)<7&&(n.whizPlayed=!0,this.options.audioSystem.playShellWhiz(n.projectile.position.clone(),z.clamp(n.projectile.velocity.length()/120,.5,1.2))),i&&this.handleProjectileHit(n.owner,n.projectile,n.specialAmmo,i.body,i.point,i.normal),n.projectile.isActive||(this.scene.remove(n.projectile.mesh,n.projectile.trail),n.projectile.destroy(),this.projectiles.splice(t,1))}}handleProjectileHit(e,t,n,i,s,o){var c;const a=this.bodyToActor.get(i.id);if(!a&&this.missionBase&&i.id===this.missionBase.body.id){this.particleSystem.spawnImpact(s,o,!0),this.options.audioSystem.playArmorHit(s,!0),this.damageMissionBase(Math.round(t.ammo.damage*.9),s);return}if(!a){const h=this.environmentSystem.handleStructureHit(i,s,t.velocity.clone().normalize(),t.ammo.penetration,t.ammo.damage);this.particleSystem.spawnImpact(s,o,!!(h!=null&&h.penetrated)),this.options.audioSystem.playArmorHit(s,!!(h!=null&&h.penetrated)),h!=null&&h.penetrated&&(this.spawnStructurePenetrationShot(e,t,s,n),e.team==="player"&&this.showBattleMessage(h.message??"墙体击穿","hit")),e.team==="player"&&n==="he"&&this.applyAreaDamage("player",s,3,Math.round(t.ammo.damage*.92));return}if(a.destroyed||a.team===e.team){this.particleSystem.spawnImpact(s,o,!1),this.options.audioSystem.playArmorHit(s,!1);return}if(a===this.player&&this.playerBuffs.invincibleTimer>0){this.particleSystem.spawnImpact(s,o,!1),this.spawnFloatingText("无敌",s,"info");return}const l=this.damageSystem.resolveHit(t,a,s,o);if(l.ricochet){this.showBattleMessage("跳弹","ricochet"),this.spawnFloatingText("跳弹",s,"ricochet"),this.particleSystem.spawnImpact(s,o,!1),this.options.audioSystem.playRicochet(s);return}if(this.particleSystem.spawnImpact(s,o,l.penetrated),this.options.audioSystem.playArmorHit(s,l.penetrated),l.penetrated){a.damagePulse=Math.max(a.damagePulse,l.destroyed?1:.78),a.damageSmokeTimer=0,a.damageSparkTimer=0,a.tank.addArmorDeformation(l.localHitPoint,l.deformation),this.spawnFloatingText(`-${l.damage}`,s,"damage"),l.moduleHit&&this.applyModuleDamage(a,l.moduleHit.module,l.moduleHit.severity,s),e.team==="player"&&(this.hitFlashTime=.18),a.team==="player"&&(this.damageOverlay=.85,this.cameraController.applyShake(.48,.22));const h=a.modules.ammoRackHit&&((c=l.moduleHit)==null?void 0:c.module)==="ammo";if(n==="he"&&e.team==="player"&&this.applyAreaDamage("player",s,3,Math.round(t.ammo.damage*.88)),l.destroyed||h)this.destroyActor(a,e,s,h),this.showBattleMessage("击毁","destroyed"),this.spawnFloatingText("击毁",s,"destroyed"),e.team==="player"&&this.triggerSlowMotion(h?.32:.22,h?.34:.52);else if(e.team==="player"){const u=l.zone==="rear"?"暴击 后部":l.zone==="side"?"暴击 侧面":`命中 ${l.zone}`;this.showBattleMessage(u,"hit")}}else e.team==="player"&&(this.showBattleMessage("未击穿","info"),this.spawnFloatingText("未击穿",s,"info"))}damageMissionBase(e,t){!this.missionBase||this.missionBase.destroyed||(this.missionBase.hp=Math.max(0,this.missionBase.hp-e),this.spawnFloatingText(`基地 -${e}`,t.clone().add(new E(0,1.2,0)),"destroyed"),this.missionBase.hp<=0&&(this.missionBase.destroyed=!0,this.particleSystem.spawnExplosion(this.missionBase.position.clone().add(new E(0,1,0)),1.8),this.options.audioSystem.playExplosion(this.missionBase.position.clone(),1.25),this.showBattleMessage("基地被摧毁","destroyed")))}destroyActor(e,t,n,i=!1){if(e.destroyed)return;if(e.destroyed=!0,e.damagePulse=1,e.damageSmokeTimer=0,e.damageSparkTimer=0,e.modules.engineFire=!1,e.controller.disableCombat(),e.tank.setDestroyedVisual(i),this.bodyToActor.delete(e.controller.body.id),t.team==="player"&&e.team==="enemy"){const o=this.registerKillChain();this.score+=e.definition.scoreValue+o,this.kills+=1,this.grantRandomReward()}e.team==="player"&&this.showBattleMessage("载具被击毁","destroyed");const s=e.controller.getPosition(this.tmpPosition).clone().add(new E(0,1.05,0));this.particleSystem.spawnExplosion(n,i?1.65:1.35),this.particleSystem.spawnExplosion(s,i?1.15:.95),this.options.audioSystem.playExplosion(n,e.team==="player"?1.15:i?1.2:1),this.addKillFeed(t,e)}registerKillChain(){return this.killChainCount+=1,this.killChainTimer=4,this.killChainCount===1?(this.showBattleMessage("击毁！","hit"),0):this.killChainCount===2?(this.showBattleMessage("双杀！","destroyed"),50):this.killChainCount>=3?(this.playerBuffs.invincibleTimer=5,this.showBattleMessage("三连杀！无敌启动","destroyed"),120):0}grantRandomReward(){const e=Math.random();if(e<.2){const t=Math.round(this.player.definition.hp*.2);this.player.hp=Math.min(this.player.definition.hp,this.player.hp+t),this.showBattleMessage("奖励: 血量恢复 +20%","hit");return}if(e<.4){this.playerBuffs.speedTimer=30,this.showBattleMessage("奖励: 机动提升 30s","hit");return}if(e<.6){this.playerBuffs.reloadTimer=30,this.showBattleMessage("奖励: 装填加速 30s","hit");return}if(e<.8){this.playerBuffs.apShots=5,this.playerBuffs.heShots=0,this.showBattleMessage("奖励: 高级穿甲弹 x5","hit");return}this.playerBuffs.heShots=3,this.playerBuffs.apShots=0,this.showBattleMessage("奖励: 高爆弹 x3","hit")}applyModuleDamage(e,t,n,i){if(t==="track"&&!e.modules.trackBroken&&n>.32){e.modules.trackBroken=!0,this.spawnFloatingText("履带断裂",i,"info"),e.team==="player"&&this.showBattleMessage("履带断裂","destroyed");return}if(t==="gun"&&!e.modules.gunDamaged&&n>.28){e.modules.gunDamaged=!0,this.spawnFloatingText("炮管受损",i,"info");return}if(t==="engine"&&!e.modules.engineFire&&n>.24){e.modules.engineFire=!0,e.engineFireTick=.58,this.spawnFloatingText("发动机起火",i,"destroyed");return}t==="ammo"&&n>.34&&(e.modules.ammoRackHit=!0,this.spawnFloatingText("弹药架命中",i,"destroyed"))}spawnStructurePenetrationShot(e,t,n,i){const s=t.velocity.clone().normalize(),o=new Uh({ammo:{...t.ammo,penetration:t.ammo.penetration*.72,damage:t.ammo.damage*.74,speed:t.ammo.speed*.86},origin:n.clone().addScaledVector(s,1),direction:s,ownerBodyId:e.controller.body.id});this.scene.add(o.mesh,o.trail),this.projectiles.push({owner:e,projectile:o,whizPlayed:!0,specialAmmo:i})}triggerSlowMotion(e,t){this.slowMotionTime=Math.max(this.slowMotionTime,e),this.slowMotionScale=t}updateEffects(e){this.damageOverlay=Math.max(0,this.damageOverlay-e*1.85),this.hitFlashTime=Math.max(0,this.hitFlashTime-e*3.2),this.centerMessageTime=Math.max(0,this.centerMessageTime-e),this.damageVignette&&(this.damageVignette.style.opacity=`${this.damageOverlay}`),this.hitFlash&&(this.hitFlash.style.opacity=`${this.hitFlashTime}`),this.centerMessage&&(this.centerMessage.style.opacity=this.centerMessageTime>0?"1":"0");for(let t=this.floatingTexts.length-1;t>=0;t-=1){const n=this.floatingTexts[t];if(n.life-=e,n.worldPosition.y+=n.velocity*e,n.life<=0){n.element.remove(),this.floatingTexts.splice(t,1);continue}this.projectWorldToScreen(n.worldPosition,this.screenPoint),n.element.style.transform=`translate(${this.screenPoint.x}px, ${this.screenPoint.y}px)`,n.element.style.opacity=`${Math.min(1,n.life*1.8)}`}for(let t=this.killFeedEntries.length-1;t>=0;t-=1){const n=this.killFeedEntries[t];if(n.life-=e,n.life<=0){n.element.remove(),this.killFeedEntries.splice(t,1);continue}n.element.style.opacity=`${Math.min(1,n.life*1.6)}`}}updateNameplates(){this.nameplates.forEach(e=>{const n=e.actor.tank.nameAnchor.getWorldPosition(this.tmpVector).clone().project(this.cameraController.camera);if(n.z<-1||n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1){e.root.style.opacity="0";return}this.screenPoint.set((n.x+1)*.5*window.innerWidth,(-n.y+1)*.5*window.innerHeight),e.root.style.opacity="1",e.root.style.transform=`translate(${this.screenPoint.x}px, ${this.screenPoint.y}px)`,e.fill.style.width=`${e.actor.hp/e.actor.definition.hp*100}%`,e.value.textContent=e.actor.destroyed?"击毁":`HP ${Math.round(e.actor.hp)}`,e.root.classList.toggle("is-destroyed",e.actor.destroyed)})}updateAimPrediction(){this.aimPrediction=this.buildAimPrediction(),this.renderAimPrediction()}buildAimPrediction(){const e=this.getAmmoPackage(this.player,!1),t=this.player.controller.getMuzzleWorldPosition(this.tmpPosition).clone(),n=this.player.controller.getMuzzleWorldDirection(this.tmpDirection).clone(),i=new E(0,-9.82*e.ammo.gravityScale,0),s=n.clone().multiplyScalar(e.ammo.speed),o=t.clone().addScaledVector(n,.7);let a=o.clone(),l=a.clone(),c=null,h=!1,u=0;for(let d=0;d<zS;d+=1){s.addScaledVector(i,Ta);const f=a.clone().addScaledVector(s,Ta);u+=Ta;const g=this.findLeadAimTargetHit(a,f,u),v=new _i,p=this.world.raycastClosest(new M(a.x,a.y,a.z),new M(f.x,f.y,f.z),{},v)&&v.body&&v.body.id!==this.player.controller.body.id?{point:new E(v.hitPointWorld.x,v.hitPointWorld.y,v.hitPointWorld.z),actor:this.bodyToActor.get(v.body.id)??null}:null;if(g){const y=p?a.distanceTo(p.point):Number.POSITIVE_INFINITY;if(g.distance<=y+.05){l=g.point,c=g.actor,h=!0;break}}if(p){l=p.point,c=p.actor,h=!!(c&&c.team==="enemy"&&!c.destroyed);break}if(l=f.clone(),a=f,f.y<=0||f.distanceTo(o)>HS)break}return{impactPoint:l,distance:o.distanceTo(l),targetActor:c,canHit:h}}renderAimPrediction(){var n;if(!this.aimPrediction)return;this.rangeIndicator&&(this.rangeIndicator.textContent=`${this.aimPrediction.distance.toFixed(0)} m`);const e=this.getAmmoPackage(this.player,!1);this.ammoIndicator&&(this.ammoIndicator.textContent=this.getAmmoStatusText(e.kind,e.ammo.caliber));const t=!!(this.aimPrediction.canHit&&this.aimPrediction.targetActor&&this.aimPrediction.targetActor.team==="enemy"&&!this.aimPrediction.targetActor.destroyed);(n=this.reticle)==null||n.classList.toggle("is-hostile",t),this.hitIndicator&&(this.hitIndicator.textContent=t?"可命中":"预测落点")}findLeadAimTargetHit(e,t,n){let i=null;return this.enemies.forEach(s=>{if(s.destroyed)return;const o=s.controller.getPredictedPosition(n,new E);o.y+=s.tank.profile.collisionHalfExtents.y*.85;const a=this.getSegmentSphereHit(e,t,o,this.getAimTargetRadius(s));if(!a)return;const l=e.distanceTo(a);(!i||l<i.distance)&&(i={actor:s,point:a,distance:l})}),i}getAimTargetRadius(e){return z.clamp(Math.max(e.tank.profile.collisionHalfExtents.x,e.tank.profile.collisionHalfExtents.z)*.58,1.25,2.1)}getSegmentSphereHit(e,t,n,i){const s=t.clone().sub(e),o=e.clone().sub(n),a=s.dot(s);if(a<=1e-6)return null;const l=2*o.dot(s),c=o.dot(o)-i*i,h=l*l-4*a*c;if(h<0)return null;const u=Math.sqrt(h),d=(-l-u)/(2*a),f=(-l+u)/(2*a),g=d>=0&&d<=1?d:f>=0&&f<=1?f:null;return g===null?null:e.clone().addScaledVector(s,g)}renderMinimap(){if(!this.minimapCanvas||!this.minimapContext)return;const e=this.minimapCanvas,t=this.minimapContext,n=e.width,i=this.battlefieldState.worldExtents,s=n/(i*2);t.clearRect(0,0,n,n),t.fillStyle="#10181d",t.fillRect(0,0,n,n),t.strokeStyle="rgba(255,255,255,0.08)",t.lineWidth=1;for(let l=0;l<=6;l+=1){const c=n/6*l;t.beginPath(),t.moveTo(c,0),t.lineTo(c,n),t.stroke(),t.beginPath(),t.moveTo(0,c),t.lineTo(n,c),t.stroke()}if(this.battlefieldState.structures.forEach(l=>{const c=n/2+l.position.x*s,h=n/2-l.position.z*s;t.save(),t.translate(c,h),t.rotate(-l.yaw),t.fillStyle="rgba(203, 213, 225, 0.16)",t.strokeStyle="rgba(226, 232, 240, 0.22)",t.fillRect(-l.size.x*s/2,-l.size.z*s/2,l.size.x*s,l.size.z*s),t.strokeRect(-l.size.x*s/2,-l.size.z*s/2,l.size.x*s,l.size.z*s),t.restore()}),this.missionBase){const l=this.worldToMinimap(this.missionBase.position,n,s);t.strokeStyle="#f59e0b",t.lineWidth=2,t.beginPath(),t.arc(l.x,l.y,10,0,Math.PI*2),t.stroke(),t.fillStyle="#fde68a",t.fillRect(l.x-3,l.y-3,6,6)}const o=this.worldToMinimap(this.player.controller.getPosition(this.tmpPosition),n,s);t.fillStyle="#5ee26d",t.beginPath(),t.arc(o.x,o.y,5,0,Math.PI*2),t.fill();const a=this.player.controller.getFacingDirection(this.tmpDirection);t.strokeStyle="#86efac",t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(o.x+a.x*12,o.y-a.z*12),t.stroke(),this.enemies.forEach(l=>{if(l.destroyed)return;const c=this.worldToMinimap(l.controller.getPosition(this.tmpPositionB),n,s);t.fillStyle="#ef4444",t.beginPath(),t.arc(c.x,c.y,4.5,0,Math.PI*2),t.fill()})}worldToMinimap(e,t,n){return{x:t/2+e.x*n,y:t/2-e.z*n}}spawnFloatingText(e,t,n){if(!this.floatingTextRoot)return;const i=document.createElement("div");i.className=`floating-text is-${n}`,i.textContent=e,this.floatingTextRoot.appendChild(i),this.floatingTexts.push({element:i,worldPosition:t.clone(),velocity:1.35,life:.95})}showBattleMessage(e,t){this.centerMessage&&(this.centerMessage.textContent=e,this.centerMessage.dataset.tone=t,this.centerMessageTime=1.05)}addKillFeed(e,t){if(!this.killFeedRoot)return;const n=document.createElement("div"),i=e.team==="player"?"你":e.definition.name,s=t.team==="player"?"你":t.definition.name,o=e.team==="player"?"player":"enemy";n.className=`kill-feed__entry is-${o}`,n.textContent=`${i} 击毁 ${s}`,this.killFeedRoot.prepend(n),this.killFeedEntries.push({element:n,life:4.2})}projectWorldToScreen(e,t){const n=e.clone().project(this.cameraController.camera);return t.set((n.x+1)*.5*window.innerWidth,(-n.y+1)*.5*window.innerHeight),t}refreshHud(){const e=this.getCameraModeLabel(this.cameraController.getMode());this.viewLabel&&(this.viewLabel.textContent=e),this.viewLabelMobile&&(this.viewLabelMobile.textContent=e),this.tankLabel&&(this.tankLabel.textContent=this.player.definition.name),this.tankLabelMobile&&(this.tankLabelMobile.textContent=this.player.definition.name),this.nationLabel&&(this.nationLabel.textContent=dr[this.player.definition.nation]),this.sceneLabel&&(this.sceneLabel.textContent=this.battlefieldState.label),this.weatherLabel&&(this.weatherLabel.textContent=this.weatherState.label),this.missionLabel&&(this.missionLabel.textContent=In[this.options.modeId].label),this.objectiveLabel&&(this.objectiveLabel.textContent=this.getObjectiveText()),this.applyReticleVisibility()}updateHud(){var n;this.refreshHud(),this.refreshBuffPanel(),this.refreshPauseOverlay(),this.scoreLabel&&(this.scoreLabel.textContent=`${this.score}`),this.killLabel&&(this.killLabel.textContent=`${this.kills}`);const e=this.enemies.filter(i=>!i.destroyed).length;this.enemyCountLabel&&(this.enemyCountLabel.textContent=`${e}`),this.hpFill&&(this.hpFill.style.width=`${this.player.hp/this.player.definition.hp*100}%`),this.hpValue&&(this.hpValue.textContent=`${Math.round(this.player.hp)} / ${this.player.definition.hp}`);const t=this.player.controller.getReloadProgress();if(this.reloadFill&&(this.reloadFill.style.width=`${t*100}%`),this.reloadValue&&(this.reloadValue.textContent=t>=1?"炮弹就绪":`${this.player.controller.getReloadRemaining().toFixed(1)}s`),this.reloadRing&&(this.reloadRing.style.strokeDasharray=`${Zh}`,this.reloadRing.style.strokeDashoffset=`${Zh*(1-t)}`),(n=this.reticle)==null||n.classList.toggle("is-ready",t>=1),this.supportFill){const i=1-Math.min(this.supportCooldown/Qh,1);this.supportFill.style.width=`${i*100}%`}if(this.supportValue&&(this.supportValue.textContent=this.supportCooldown>0?`${this.supportCooldown.toFixed(1)}s`:"可呼叫"),this.modeDetailLine&&(this.modeDetailLine.textContent=this.getModeDetailText(e)),this.statusLine){const i=Math.round(this.player.controller.getCurrentSpeed()*3.2),s=t>=1?"炮弹就绪":"装填中",o=[this.player.modules.trackBroken?"履带断裂":null,this.player.modules.gunDamaged?"炮管受损":null,this.player.modules.engineFire?"发动机起火":null,this.playerBuffs.invincibleTimer>0?"无敌":null].filter(Boolean).join(" / ");this.statusLine.textContent=this.player.destroyed?`状态: 载具已击毁 | ${this.battlefieldState.label} ${this.weatherState.label}`:`状态: ${s} | 车速 ${i} km/h | 地形 ${this.getTerrainLabel(this.player.controller.getTerrainType())} | ${this.battlefieldState.label} ${this.weatherState.label}${o?` | ${o}`:""}`}}getAmmoStatusText(e,t){return e==="he"?`高爆弹 · ${this.playerBuffs.heShots} 发`:e==="ap"?`高级穿甲弹 · ${this.playerBuffs.apShots} 发`:`标准穿甲弹 · ${t}`}toggleReticleVisibility(){this.reticleVisible=!this.reticleVisible,this.applyReticleVisibility()}applyReticleVisibility(){this.reticle&&(this.reticle.hidden=!this.reticleVisible),this.reticleToggleButton&&this.reticleToggleButton.setAttribute("aria-pressed",this.reticleVisible?"true":"false"),this.reticleToggleLabel&&(this.reticleToggleLabel.textContent=this.reticleVisible?"开启":"关闭")}refreshBuffPanel(){if(!this.buffList)return;const e=[];this.playerBuffs.speedTimer>0&&e.push(`机动强化 ${this.playerBuffs.speedTimer.toFixed(0)}s`),this.playerBuffs.reloadTimer>0&&e.push(`装填加速 ${this.playerBuffs.reloadTimer.toFixed(0)}s`),this.playerBuffs.apShots>0&&e.push(`高级穿甲弹 ${this.playerBuffs.apShots} 发`),this.playerBuffs.heShots>0&&e.push(`高爆弹 ${this.playerBuffs.heShots} 发`),this.playerBuffs.invincibleTimer>0&&e.push(`无敌 ${this.playerBuffs.invincibleTimer.toFixed(0)}s`),this.buffList.innerHTML=e.length?e.map(t=>`<div class="buff-pill">${t}</div>`).join(""):'<div class="buff-pill is-empty">暂无增益</div>'}refreshPauseOverlay(){if(!this.pauseScreen)return;const e=this.phase==="paused"||this.phase==="victory"||this.phase==="defeat";this.pauseScreen.classList.toggle("is-hidden",!e),this.pauseTitle&&(this.pauseTitle.textContent=this.phase==="victory"?"任务完成":this.phase==="defeat"?"任务失败":"已暂停"),this.pauseDescription&&(this.pauseDescription.textContent=this.phase==="victory"?this.getObjectiveText():this.phase==="defeat"?this.buildReturnSummary().detail:"战斗进程已冻结，可继续、重新开始或返回主界面。"),this.pauseScore&&(this.pauseScore.textContent=`${this.score}`),this.pauseKills&&(this.pauseKills.textContent=`${this.kills}`),this.pauseProgress&&(this.pauseProgress.textContent=this.buildReturnSummary().detail),this.resumeButton&&(this.resumeButton.hidden=this.phase!=="paused")}setPaused(e){this.phase==="victory"||this.phase==="defeat"||(this.phase=e?"paused":"running",e&&document.exitPointerLock(),this.refreshPauseOverlay())}finishBattle(e,t){this.phase==="victory"||this.phase==="defeat"||(this.phase=e,document.exitPointerLock(),this.showBattleMessage(t,e==="victory"?"hit":"destroyed"),this.refreshPauseOverlay())}buildReturnSummary(){return{resultLabel:this.phase==="victory"?"任务完成":this.phase==="defeat"?"任务失败":this.phase==="paused"?"战斗已暂停":"战斗进行中",score:this.score,kills:this.kills,detail:this.getModeDetailText(this.enemies.filter(t=>!t.destroyed).length)}}getSessionConfig(){return{playerTankId:this.options.playerTankId??Fi.playerTankId,battlefieldId:this.options.battlefieldId,weatherId:this.options.weatherId,modeId:this.options.modeId}}getObjectiveText(){return this.options.modeId==="classic"?"守住基地并歼灭所有敌军":this.options.modeId==="survival"?"坚持更久并撑过更多波次":"限时完成目标歼灭数"}getModeDetailText(e){if(this.options.modeId==="classic")return`基地 HP ${this.missionBase?Math.max(0,Math.round(this.missionBase.hp)):0} | 敌军剩余 ${e}`;if(this.options.modeId==="survival")return`第 ${this.wave} 波 | 生存 ${this.elapsedTime.toFixed(0)}s | 敌军 ${e}`;const t=In.annihilation.killTarget,n=Math.max(0,In.annihilation.timeLimit-this.elapsedTime);return`已击毁 ${this.kills}/${t} | 倒计时 ${n.toFixed(0)}s`}getCameraModeLabel(e){return e===Ss.POV?"炮手视角":e===Ss.TopDown?"战术俯视":"第三人称"}getTerrainLabel(e){return e==="road"?"公路":e==="mud"?"泥地":e==="rubble"?"废墟":e==="yard"?"院落":"草地"}}const eo={idle:{frequency:34,filter:180,gain:.08,waveform:"triangle"},low:{frequency:46,filter:240,gain:.1,waveform:"sawtooth"},medium:{frequency:60,filter:340,gain:.14,waveform:"sawtooth"},high:{frequency:78,filter:480,gain:.18,waveform:"square"}};class GS{constructor(){L(this,"audioContext",null);L(this,"masterBus",null);L(this,"compressor",null);L(this,"environmentFilter",null);L(this,"noiseBuffer",null);L(this,"listenerPosition",new E);L(this,"channels",new Map)}resume(){const e=this.getContext();e&&e.state==="suspended"&&e.resume()}update(e,t,n){this.listenerPosition.copy(e);const i=this.getContext();if(!i||!this.masterBus)return;n&&this.updateEnvironment(i,n);const s=new Set;t.forEach(o=>{if(s.add(o.id),o.destroyed){this.removeChannel(o.id);return}const a=this.getOrCreateChannel(o.id);a&&this.updateChannel(i,a,o)}),Array.from(this.channels.keys()).forEach(o=>{s.has(o)||this.removeChannel(o)})}playShot(e,t,n){const i=this.getContext();if(!i)return;const s=this.getShotProfile(e),o=n==="player"?1:.86,a=this.createPositionalGain(t,s.gain*o),l=i.currentTime;if(!a)return;const c=i.createOscillator(),h=i.createOscillator(),u=this.createNoiseSource(!1),d=i.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(840,l),d.Q.value=.9;const f=i.createGain(),g=i.createGain(),v=i.createGain();c.type="sawtooth",c.frequency.setValueAtTime(s.bodyFrequency,l),c.frequency.exponentialRampToValueAtTime(Math.max(24,s.bodyFrequency*.42),l+s.duration),h.type="triangle",h.frequency.setValueAtTime(s.crackFrequency,l),h.frequency.exponentialRampToValueAtTime(Math.max(180,s.crackFrequency*.36),l+s.duration*.45),f.gain.setValueAtTime(.001,l),f.gain.exponentialRampToValueAtTime(.85,l+.01),f.gain.exponentialRampToValueAtTime(1e-4,l+s.duration),g.gain.setValueAtTime(.6,l),g.gain.exponentialRampToValueAtTime(1e-4,l+s.duration*.34),v.gain.setValueAtTime(.42,l),v.gain.exponentialRampToValueAtTime(1e-4,l+s.duration*.52),c.connect(f),h.connect(g),u.connect(d),d.connect(v),f.connect(a),g.connect(a),v.connect(a),c.start(l),h.start(l),u.start(l),c.stop(l+s.duration),h.stop(l+s.duration*.46),u.stop(l+s.duration*.55)}playArmorHit(e,t){const n=this.getContext();if(!n)return;const i=this.createPositionalGain(e,t?.22:.18),s=n.currentTime;if(!i)return;const o=n.createOscillator(),a=n.createGain(),l=this.createNoiseSource(!1),c=n.createBiquadFilter(),h=n.createGain();o.type=t?"square":"triangle",o.frequency.setValueAtTime(t?420:540,s),o.frequency.exponentialRampToValueAtTime(t?110:180,s+(t?.12:.08)),a.gain.setValueAtTime(.24,s),a.gain.exponentialRampToValueAtTime(1e-4,s+(t?.14:.09)),c.type="bandpass",c.frequency.setValueAtTime(t?1200:1800,s),h.gain.setValueAtTime(.12,s),h.gain.exponentialRampToValueAtTime(1e-4,s+.06),o.connect(a),a.connect(i),l.connect(c),c.connect(h),h.connect(i),o.start(s),l.start(s),o.stop(s+.16),l.stop(s+.07)}playRicochet(e){const t=this.getContext();if(!t)return;const n=this.createPositionalGain(e,.18),i=t.currentTime;if(!n)return;const s=t.createOscillator(),o=t.createGain();s.type="triangle",s.frequency.setValueAtTime(1200,i),s.frequency.exponentialRampToValueAtTime(260,i+.12),o.gain.setValueAtTime(.14,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.12),s.connect(o),o.connect(n),s.start(i),s.stop(i+.14)}playExplosion(e,t=1){const n=this.getContext();if(!n)return;const i=this.createPositionalGain(e,.34*t),s=n.currentTime;if(!i)return;const o=n.createOscillator(),a=n.createGain(),l=this.createNoiseSource(!1),c=n.createBiquadFilter(),h=n.createGain();o.type="sawtooth",o.frequency.setValueAtTime(84,s),o.frequency.exponentialRampToValueAtTime(28,s+.45),a.gain.setValueAtTime(.001,s),a.gain.exponentialRampToValueAtTime(.65,s+.02),a.gain.exponentialRampToValueAtTime(1e-4,s+.46),c.type="lowpass",c.frequency.setValueAtTime(900,s),h.gain.setValueAtTime(.38,s),h.gain.exponentialRampToValueAtTime(1e-4,s+.42),o.connect(a),a.connect(i),l.connect(c),c.connect(h),h.connect(i),o.start(s),l.start(s),o.stop(s+.5),l.stop(s+.44)}playShellWhiz(e,t=1){const n=this.getContext();if(!n)return;const i=this.createPositionalGain(e,.12+t*.08),s=n.currentTime;if(!i)return;const o=n.createOscillator(),a=n.createGain();o.type="sine",o.frequency.setValueAtTime(1400+t*300,s),o.frequency.exponentialRampToValueAtTime(320,s+.18),a.gain.setValueAtTime(.14,s),a.gain.exponentialRampToValueAtTime(1e-4,s+.18),o.connect(a),a.connect(i),o.start(s),o.stop(s+.2)}playUiClick(){const e=this.getContext();if(!e||!this.masterBus)return;const t=e.createOscillator(),n=e.createGain(),i=e.currentTime;t.type="triangle",t.frequency.setValueAtTime(680,i),t.frequency.exponentialRampToValueAtTime(980,i+.04),n.gain.setValueAtTime(.035,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.05),t.connect(n),n.connect(this.masterBus),t.start(i),t.stop(i+.06)}destroy(){this.channels.forEach((e,t)=>this.removeChannel(t)),this.audioContext&&this.audioContext.close(),this.audioContext=null,this.masterBus=null,this.compressor=null,this.noiseBuffer=null}updateChannel(e,t,n){const i=z.clamp(n.speedRatio,0,1),s=z.clamp(n.engineLoad*.88,0,1),o=Math.max(i,s),a=this.resolveEngineBand(o),l=eo[a],c=e.currentTime,h=this.getDistanceAttenuation(n.position,n.team),u=this.getTerrainNoise(n.terrainType),d=h*l.gain*(.28+n.engineLoad*.72),f=h*Math.max(0,i-.06)*(.16+n.slipRatio*.18+u*.14),g=1+o*.48+n.engineLoad*.24;if(t.band!==a&&(t.engineOscillator.type=l.waveform,t.band=a),t.engineOscillator.frequency.cancelScheduledValues(c),t.engineOscillator.frequency.linearRampToValueAtTime(l.frequency*g,c+.12),t.engineFilter.frequency.cancelScheduledValues(c),t.engineFilter.frequency.linearRampToValueAtTime(l.filter*(.88+o*.42),c+.14),t.engineGain.gain.cancelScheduledValues(c),t.engineGain.gain.linearRampToValueAtTime(d,c+.16),t.trackFilter.frequency.cancelScheduledValues(c),t.trackFilter.frequency.linearRampToValueAtTime(180+i*420+n.slipRatio*120+u*90,c+.12),t.trackGain.gain.cancelScheduledValues(c),t.trackGain.gain.linearRampToValueAtTime(f,c+.12),t.master.gain.cancelScheduledValues(c),t.master.gain.linearRampToValueAtTime(.92,c+.12),t.panner){const v=n.position.x-this.listenerPosition.x,m=n.position.z-this.listenerPosition.z,p=z.clamp(v/Math.max(18,Math.abs(m)+10),-.95,.95);t.panner.pan.cancelScheduledValues(c),t.panner.pan.linearRampToValueAtTime(p,c+.12)}}getOrCreateChannel(e){const t=this.channels.get(e);if(t)return t;const n=this.getContext();if(!n||!this.masterBus||!this.noiseBuffer)return null;const i=n.createGain(),s=n.createOscillator(),o=n.createBiquadFilter(),a=n.createGain(),l=this.createNoiseSource(!0),c=n.createBiquadFilter(),h=n.createGain(),u=typeof StereoPannerNode>"u"?null:new StereoPannerNode(n,{pan:0});i.gain.value=0,o.type="lowpass",a.gain.value=0,c.type="bandpass",c.Q.value=.75,h.gain.value=0,s.connect(o),o.connect(a),a.connect(i),l.connect(c),c.connect(h),h.connect(i),u?(i.connect(u),u.connect(this.masterBus)):i.connect(this.masterBus);const d={master:i,engineOscillator:s,engineFilter:o,engineGain:a,trackSource:l,trackFilter:c,trackGain:h,panner:u,band:"idle"};return s.type=eo.idle.waveform,s.frequency.value=eo.idle.frequency,o.frequency.value=eo.idle.filter,c.frequency.value=180,s.start(),l.start(),this.channels.set(e,d),d}createPositionalGain(e,t){const n=this.getContext();if(!n||!this.masterBus)return null;const i=n.createGain();return i.gain.value=t*this.getDistanceAttenuation(e,"enemy",1),i.connect(this.masterBus),i}resolveEngineBand(e){return e<.08?"idle":e<.34?"low":e<.68?"medium":"high"}getDistanceAttenuation(e,t,n=0){const i=e.distanceTo(this.listenerPosition),s=t==="player"?42:78,o=t==="player"?.9:.72,a=Math.pow(Math.max(0,1-i/s),2);return z.clamp((a+n*.06)*o,0,1)}getTerrainNoise(e){return e==="mud"||e==="rubble"?1:e==="grass"||e==="yard"?.55:.2}getShotProfile(e){const t=Number.parseInt(e,10);return t>=115?{bodyFrequency:72,crackFrequency:420,duration:.42,gain:.42}:t>=88?{bodyFrequency:88,crackFrequency:520,duration:.34,gain:.34}:{bodyFrequency:102,crackFrequency:640,duration:.28,gain:.26}}createNoiseSource(e){const t=this.getContext();if(!t||!this.noiseBuffer)throw new Error("Audio noise buffer was requested before initialization.");const n=t.createBufferSource();return n.buffer=this.noiseBuffer,n.loop=e,n}removeChannel(e){const t=this.channels.get(e);t&&(t.engineOscillator.stop(),t.trackSource.stop(),t.master.disconnect(),this.channels.delete(e))}getContext(){return typeof AudioContext>"u"?null:(this.audioContext||(this.audioContext=new AudioContext,this.compressor=this.audioContext.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=18,this.compressor.ratio.value=4,this.compressor.attack.value=.006,this.compressor.release.value=.22,this.masterBus=this.audioContext.createGain(),this.masterBus.gain.value=.85,this.environmentFilter=this.audioContext.createBiquadFilter(),this.environmentFilter.type="lowpass",this.environmentFilter.frequency.value=16e3,this.masterBus.connect(this.environmentFilter),this.environmentFilter.connect(this.compressor),this.compressor.connect(this.audioContext.destination),this.noiseBuffer=this.createNoiseBuffer(this.audioContext)),this.audioContext)}createNoiseBuffer(e){const t=e.createBuffer(1,e.sampleRate*2,e.sampleRate),n=t.getChannelData(0);for(let i=0;i<n.length;i+=1)n[i]=(Math.random()*2-1)*.9;return t}updateEnvironment(e,t){if(!this.environmentFilter||!this.masterBus)return;const n=e.currentTime,i=t.interior?2200+(1-t.enclosure)*2200:7e3+(1-t.wetness)*5e3;this.environmentFilter.frequency.cancelScheduledValues(n),this.environmentFilter.frequency.linearRampToValueAtTime(i,n+.16),this.masterBus.gain.cancelScheduledValues(n),this.masterBus.gain.linearRampToValueAtTime(t.interior?.76:.85-t.wetness*.06,n+.18)}}const To={selection:"tank-battle-phase5.selection",progress:"tank-battle-phase5.progress"},yd=document.querySelector("#game-canvas"),ti=document.querySelector("#selection-screen"),Ea=document.querySelector("#nation-tabs"),Aa=document.querySelector("#tank-grid"),Ra=document.querySelector("#battlefield-grid"),Ca=document.querySelector("#weather-grid"),Pa=document.querySelector("#mode-grid"),eu=document.querySelector("#selection-hint"),tu=document.querySelector("#selection-summary"),nu=document.querySelector("#selection-briefing"),nr=document.querySelector("#last-progress"),La=document.querySelector("#launch-button");if(!yd)throw new Error("Canvas element #game-canvas was not found.");const WS=yd,po=new GS;let un=null,bt="GER",Ze=XS(),Qn=YS();function Ia(r,e){return`
    <div class="tank-card__stat">
      <span>${r}</span>
      <div class="tank-card__bar">
        <i style="width:${e*20}%"></i>
      </div>
      <strong>${e}/5</strong>
    </div>
  `}function qS(r){return`
    <span>${ru[r.class]}</span>
    <span>${r.gunCaliber}</span>
    <span>穿深 ${r.gunPenetration}</span>
    <span>装填 ${r.reloadSeconds.toFixed(1)}s</span>
    <span>HP ${r.hp}</span>
    <span>${dr[r.nation]}</span>
  `}function ni(){po.resume(),po.playUiClick()}function XS(){try{const r=window.localStorage.getItem(To.selection);if(!r)return{...Fi};const e=JSON.parse(r);return{playerTankId:e.playerTankId&&Ki.has(e.playerTankId)?e.playerTankId:Fi.playerTankId,battlefieldId:rb(e.battlefieldId)?e.battlefieldId:Fi.battlefieldId,weatherId:ob(e.weatherId)?e.weatherId:Fi.weatherId,modeId:e.modeId&&e.modeId in In?e.modeId:Fi.modeId}}catch{return{...Fi}}}function Ds(){window.localStorage.setItem(To.selection,JSON.stringify(Ze))}function YS(){try{const r=window.localStorage.getItem(To.progress);return r?JSON.parse(r):null}catch{return null}}function jS(r){const e=zs.find(o=>o.id===r.session.battlefieldId),t=$i[r.session.weatherId],n=Ki.get(r.session.playerTankId),i=In[r.session.modeId];if(!e||!t||!n||!i)return;const s={timestamp:new Date().toISOString(),tankName:n.name,battlefieldLabel:e.label,weatherLabel:t.label,modeLabel:i.label,statusLabel:r.summary.resultLabel,score:r.summary.score,kills:r.summary.kills,detail:r.summary.detail};window.localStorage.setItem(To.progress,JSON.stringify(s)),Qn=s}function $S(){ti==null||ti.classList.remove("is-hidden")}function KS(){ti==null||ti.classList.add("is-hidden")}function yl(r=Ze){ni(),Ze={...r},Ds(),un==null||un.destroy(),un=new VS(WS,{...Ze,audioSystem:po,onRestart:e=>yl(e),onReturnToMenu:e=>{var t;jS(e),un==null||un.destroy(),un=null,Ze={...e.session},bt=((t=Ki.get(Ze.playerTankId))==null?void 0:t.nation)??bt,Ds(),si(),$S()}}),un.start(),KS()}function _d(r){const e=Ki.get(r);e&&(Ze.playerTankId=r,bt=e.nation,Ds(),si())}function ZS(){Ea&&(Ea.innerHTML="",pi.forEach(r=>{const e=document.createElement("button");e.type="button",e.className=`nation-tab${r===bt?" is-active":""}`,e.innerHTML=`
      <span class="nation-tab__label">${dr[r]}</span>
      <span class="nation-tab__count">${gi(r).length} 辆</span>
    `,e.addEventListener("click",()=>{var n;bt=r;const t=gi(bt);t.some(i=>i.id===Ze.playerTankId)||(Ze.playerTankId=((n=t[0])==null?void 0:n.id)??Ze.playerTankId),ni(),si()}),Ea.appendChild(e)}))}function QS(r){if(!tu)return;const e=Ki.get(Ze.playerTankId)??r[0],t=zs.find(a=>a.id===Ze.battlefieldId),n=$i[Ze.weatherId],i=In[Ze.modeId],s=r.reduce((a,l)=>({firepower:a.firepower+l.firepower,armor:a.armor+l.armor,mobility:a.mobility+l.mobility}),{firepower:0,armor:0,mobility:0}),o=Math.max(1,r.length);tu.innerHTML=`
    <div class="selection-summary__nation">${dr[bt]}</div>
    <div class="selection-summary__headline">${(e==null?void 0:e.name)??"未选择坦克"}</div>
    <div class="selection-summary__meta">${(t==null?void 0:t.label)??""} · ${(n==null?void 0:n.label)??""} · ${i.label}</div>
    <div class="selection-summary__stats">
      <div><span>平均火力</span><strong>${(s.firepower/o).toFixed(1)}</strong></div>
      <div><span>平均装甲</span><strong>${(s.armor/o).toFixed(1)}</strong></div>
      <div><span>平均机动</span><strong>${(s.mobility/o).toFixed(1)}</strong></div>
    </div>
  `}function JS(){if(!nu)return;const r=zs.find(s=>s.id===Ze.battlefieldId),e=ja[Ze.battlefieldId],t=$i[Ze.weatherId],n=hd[Ze.weatherId],i=In[Ze.modeId];nu.innerHTML=`
    <div class="selection-summary__nation">Mission Briefing</div>
    <div class="selection-summary__headline">${i.label}</div>
    <div class="selection-briefing__text">${i.description}</div>
    <div class="selection-briefing__cards">
      <div class="selection-briefing__card">
        <span>战场</span>
        <strong>${(r==null?void 0:r.label)??""}</strong>
        <div class="selection-briefing__text">${(r==null?void 0:r.description)??""}</div>
      </div>
      <div class="selection-briefing__card">
        <span>天气</span>
        <strong>${t.label}</strong>
        <div class="selection-briefing__text">${n.summary}</div>
      </div>
      <div class="selection-briefing__card">
        <span>目标</span>
        <strong>${i.objective}</strong>
        <div class="selection-briefing__text">${e.highlights.join(" · ")}</div>
      </div>
    </div>
  `}function eb(){if(!nr)return;if(!Qn){nr.className="last-progress is-empty",nr.innerHTML=`
      <div class="selection-summary__nation">Last Sortie</div>
      <div class="selection-summary__headline">暂无保存记录</div>
      <div class="last-progress__empty">从暂停菜单返回主界面时，会在这里显示最近一次战斗摘要。</div>
    `;return}const r=new Intl.DateTimeFormat("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(Qn.timestamp));nr.className="last-progress",nr.innerHTML=`
    <div class="selection-summary__nation">Last Sortie</div>
    <div class="selection-summary__headline">${Qn.statusLabel}</div>
    <div class="selection-summary__meta">${r} · ${Qn.tankName}</div>
    <div class="last-progress__cards">
      <div class="last-progress__card">
        <span>战场</span>
        <strong>${Qn.battlefieldLabel}</strong>
      </div>
      <div class="last-progress__card">
        <span>得分 / 击毁</span>
        <strong>${Qn.score} / ${Qn.kills}</strong>
      </div>
      <div class="last-progress__card">
        <span>摘要</span>
        <strong>${Qn.detail}</strong>
      </div>
    </div>
  `}function tb(){if(!Aa)return;const r=gi(bt);Aa.innerHTML="",r.forEach((e,t)=>{const n=document.createElement("button");n.type="button",n.className=`tank-card${e.id===Ze.playerTankId?" is-active":""}`,n.innerHTML=`
      <div class="tank-card__header">
        <div>
          <div class="tank-card__name">${e.name}</div>
          <div class="tank-card__meta">${ru[e.class]} · ${e.gunCaliber}</div>
        </div>
        <div class="tank-card__hotkey">${t+1}</div>
      </div>
      <div class="tank-card__body">
        ${Ia("火力",e.firepower)}
        ${Ia("装甲",e.armor)}
        ${Ia("机动",e.mobility)}
      </div>
      <div class="tank-card__specs">${qS(e)}</div>
      <div class="tank-card__footer">
        <span>正面装甲 ${e.frontalArmor}mm</span>
        <span>炮塔装甲 ${e.turretArmor}mm</span>
      </div>
    `,n.addEventListener("click",()=>{ni(),_d(e.id)}),Aa.appendChild(n)}),QS(r),eu&&(eu.textContent=`当前国家: ${dr[bt]}，按 1-${r.length} 选择坦克，左右方向键切换国家，回车进入战场`)}function nb(){Ra&&(Ra.innerHTML="",zs.forEach(r=>{const e=document.createElement("button");e.type="button",e.className=`selection-option${r.id===Ze.battlefieldId?" is-active":""}`,e.innerHTML=`
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${r.label}</div>
          <div class="selection-option__meta">${r.description}</div>
        </div>
        <div class="selection-option__tag">地图</div>
      </div>
      <div class="selection-option__preview" style="background:${ja[r.id].preview}"></div>
      <div class="selection-option__chips">
        ${ja[r.id].highlights.map(t=>`<span>${t}</span>`).join("")}
      </div>
    `,e.addEventListener("click",()=>{Ze.battlefieldId=r.id,ni(),Ds(),si()}),Ra.appendChild(e)}))}function ib(){Ca&&(Ca.innerHTML="",Object.keys($i).forEach(r=>{const e=$i[r],t=hd[r],n=document.createElement("button");n.type="button",n.className=`selection-option${r===Ze.weatherId?" is-active":""}`,n.innerHTML=`
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${e.label}</div>
          <div class="selection-option__meta">${t.summary}</div>
        </div>
        <div class="selection-option__tag">天气</div>
      </div>
      <div class="selection-option__preview" style="background:${t.preview}"></div>
      <div class="selection-option__chips">
        <span>雾强 ${e.mistStrength.toFixed(2)}</span>
        <span>湿度 ${e.wetness.toFixed(2)}</span>
        <span>曝光 ${e.exposure.toFixed(2)}</span>
      </div>
    `,n.addEventListener("click",()=>{Ze.weatherId=r,ni(),Ds(),si()}),Ca.appendChild(n)}))}function sb(){Pa&&(Pa.innerHTML="",Object.values(In).forEach(r=>{const e=document.createElement("button");e.type="button",e.className=`selection-option${r.id===Ze.modeId?" is-active":""}`,e.innerHTML=`
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${r.label}</div>
          <div class="selection-option__meta">${r.description}</div>
        </div>
        <div class="selection-option__tag">模式</div>
      </div>
      <div class="selection-option__preview" style="background:${r.accent}"></div>
      <div class="selection-option__chips">
        <span>${r.objective}</span>
        ${r.timeLimit?`<span>${r.timeLimit}s 限时</span>`:""}
        ${r.killTarget?`<span>${r.killTarget} 辆目标</span>`:""}
      </div>
    `,e.addEventListener("click",()=>{Ze.modeId=r.id,ni(),Ds(),si()}),Pa.appendChild(e)}))}function si(){ZS(),tb(),nb(),ib(),sb(),JS(),eb()}function rb(r){return typeof r=="string"&&zs.some(e=>e.id===r)}function ob(r){return typeof r=="string"&&r in $i}La==null||La.addEventListener("click",()=>{yl(Ze)});window.addEventListener("keydown",r=>{var n,i;if(ti!=null&&ti.classList.contains("is-hidden"))return;const e=gi(bt),t=Number(r.key);if(Number.isInteger(t)&&t>=1&&t<=9){const s=e[t-1];s&&(ni(),_d(s.id))}if(r.code==="Enter"&&yl(Ze),r.code==="ArrowLeft"){const s=pi.indexOf(bt);bt=pi[(s+pi.length-1)%pi.length],gi(bt).some(o=>o.id===Ze.playerTankId)||(Ze.playerTankId=((n=gi(bt)[0])==null?void 0:n.id)??Ze.playerTankId),ni(),si()}if(r.code==="ArrowRight"){const s=pi.indexOf(bt);bt=pi[(s+1)%pi.length],gi(bt).some(o=>o.id===Ze.playerTankId)||(Ze.playerTankId=((i=gi(bt)[0])==null?void 0:i.id)??Ze.playerTankId),ni(),si()}});window.addEventListener("beforeunload",()=>{un==null||un.destroy(),po.destroy()});var su;bt=((su=Ki.get(Ze.playerTankId))==null?void 0:su.nation)??bt;si();
