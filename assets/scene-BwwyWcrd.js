import{M as So}from"./index-Ekgxm41i.js";const Ku="180",Z0=0,kf=1,J0=2,ip=1,rp=2,Ui=3,Fi=0,An=1,vn=2,er=0,bs=1,ys=2,Hf=3,Gf=4,$0=5,Cr=100,K0=101,j0=102,Q0=103,tm=104,em=200,nm=201,im=202,rm=203,ru=204,su=205,sm=206,om=207,am=208,cm=209,lm=210,um=211,hm=212,fm=213,dm=214,ou=0,au=1,cu=2,Cs=3,lu=4,uu=5,hu=6,fu=7,sp=0,pm=1,mm=2,nr=0,gm=1,_m=2,vm=3,op=4,xm=5,Mm=6,ym=7,ap=300,Ps=301,Ls=302,du=303,pu=304,Lc=306,mu=1e3,Ur=1001,gu=1002,Bn=1003,Sm=1004,Ha=1005,vi=1006,yl=1007,Nr=1008,yi=1009,cp=1010,lp=1011,zo=1012,ju=1013,Fr=1014,xi=1015,Zo=1016,Qu=1017,th=1018,ko=1020,up=35902,hp=35899,fp=1021,dp=1022,ti=1023,Ho=1026,Go=1027,eh=1028,nh=1029,pp=1030,ih=1031,rh=1033,Mc=33776,yc=33777,Sc=33778,wc=33779,_u=35840,vu=35841,xu=35842,Mu=35843,yu=36196,Su=37492,wu=37496,Eu=37808,Tu=37809,bu=37810,Au=37811,Ru=37812,Cu=37813,Pu=37814,Lu=37815,Du=37816,Iu=37817,Uu=37818,Nu=37819,Fu=37820,Ou=37821,Bu=36492,zu=36494,ku=36495,Hu=36283,Gu=36284,Vu=36285,Wu=36286,wm=3200,mp=3201,gp=0,Em=1,Qi="",In="srgb",Ds="srgb-linear",bc="linear",De="srgb",ts=7680,Vf=519,Tm=512,bm=513,Am=514,_p=515,Rm=516,Cm=517,Pm=518,Lm=519,Wf=35044,Xf="300 es",Mi=2e3,Ac=2001;class Ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const As=Math.PI/180,Vo=180/Math.PI;function Br(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function Dm(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Im(i,t,e){return i!==t?(e-i)/(t-i):0}function No(i,t,e){return(1-e)*i+e*t}function Um(i,t,e,n){return No(i,t,1-Math.exp(-e*n))}function Nm(i,t=1){return t-Math.abs(sh(i,t*2)-t)}function Fm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Om(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zm(i,t){return i+Math.random()*(t-i)}function km(i){return i*(.5-Math.random())}function Hm(i){i!==void 0&&(qf=i);let t=qf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gm(i){return i*As}function Vm(i){return i*Vo}function Wm(i){return(i&i-1)===0&&i!==0}function Xm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ym(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),u=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),f=o((t-n)/2),p=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*u);break;case"YZY":i.set(l*f,a*h,l*d,a*u);break;case"ZXZ":i.set(l*d,l*f,a*h,a*u);break;case"XZX":i.set(a*h,l*x,l*p,a*u);break;case"YXY":i.set(l*p,a*h,l*x,a*u);break;case"ZYZ":i.set(l*x,l*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:As,RAD2DEG:Vo,generateUUID:Br,clamp:ge,euclideanModulo:sh,mapLinear:Dm,inverseLerp:Im,lerp:No,damp:Um,pingpong:Nm,smoothstep:Fm,smootherstep:Om,randInt:Bm,randFloat:zm,randFloatSpread:km,seededRandom:Hm,degToRad:Gm,radToDeg:Vm,isPowerOfTwo:Wm,ceilPowerOfTwo:Xm,floorPowerOfTwo:qm,setQuaternionFromProperEuler:Ym,normalize:wn,denormalize:xs};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],M=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=x,t[e+3]=M;return}if(d!==M||l!==f||u!==p||h!==x){let _=1-a;const m=l*f+u*p+h*x+d*M,R=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const F=Math.sqrt(A),P=Math.atan2(F,m*R);_=Math.sin(_*P)/F,a=Math.sin(a*P)/F}const w=a*R;if(l=l*_+f*w,u=u*_+p*w,h=h*_+x*w,d=d*_+M*w,_===1-a){const F=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=F,u*=F,h*=F,d*=F}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return t[e]=a*x+h*d+l*p-u*f,t[e+1]=l*x+h*f+u*d-a*p,t[e+2]=u*x+h*p+a*f-l*d,t[e+3]=h*x-a*d-l*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*h*d+u*p*x,this._y=u*p*d-f*h*x,this._z=u*h*x+f*p*d,this._w=u*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+u*p*x,this._y=u*p*d-f*h*x,this._z=u*h*x-f*p*d,this._w=u*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-u*p*x,this._y=u*p*d+f*h*x,this._z=u*h*x+f*p*d,this._w=u*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-u*p*x,this._y=u*p*d+f*h*x,this._z=u*h*x-f*p*d,this._w=u*h*d+f*p*x;break;case"YZX":this._x=f*h*d+u*p*x,this._y=u*p*d+f*h*x,this._z=u*h*x-f*p*d,this._w=u*h*d-f*p*x;break;case"XZY":this._x=f*h*d-u*p*x,this._y=u*p*d-f*h*x,this._z=u*h*x+f*p*d,this._w=u*h*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-n*u,this._z=s*h+o*u+n*l-r*a,this._w=o*h-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*u+o*d-a*h,this.y=n+l*h+a*u-s*d,this.z=r+l*d+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sl.copy(this).projectOnVector(t),this.sub(Sl)}reflect(t){return this.sub(Sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new b,Yf=new Fs;class ce{constructor(t,e,n,r,s,o,a,l,u){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u)}set(t,e,n,r,s,o,a,l,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],p=n[5],x=n[8],M=r[0],_=r[3],m=r[6],R=r[1],A=r[4],w=r[7],F=r[2],P=r[5],I=r[8];return s[0]=o*M+a*R+l*F,s[3]=o*_+a*A+l*P,s[6]=o*m+a*w+l*I,s[1]=u*M+h*R+d*F,s[4]=u*_+h*A+d*P,s[7]=u*m+h*w+d*I,s[2]=f*M+p*R+x*F,s[5]=f*_+p*A+x*P,s[8]=f*m+p*w+x*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*s*h+n*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],d=h*o-a*u,f=a*l-h*s,p=u*s-o*l,x=e*d+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=d*M,t[1]=(r*u-h*n)*M,t[2]=(a*n-r*o)*M,t[3]=f*M,t[4]=(h*e-r*l)*M,t[5]=(r*s-a*e)*M,t[6]=p*M,t[7]=(n*l-u*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wl.makeScale(t,e)),this}rotate(t){return this.premultiply(wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new ce;function vp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zm(){const i=Rc("canvas");return i.style.display="block",i}const Zf={};function Wo(i){i in Zf||(Zf[i]=!0,console.warn(i))}function Jm(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Jf=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$f=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $m(){const i={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===De&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===De&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?bc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ds]:{primaries:t,whitePoint:n,transfer:bc,toXYZ:Jf,fromXYZ:$f,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:t,whitePoint:n,transfer:De,toXYZ:Jf,fromXYZ:$f,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),i}const we=$m();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let es;class Km{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=Rc("canvas")),es.width=t.width,es.height=t.height;const r=es.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jm=0;class oh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(El(r[o].image)):s.push(El(r[o]))}else s=El(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Km.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qm=0;const Tl=new b;class xn extends Ns{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=Ur,r=Ur,s=vi,o=Nr,a=ti,l=yi,u=xn.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Br(),this.name="",this.source=new oh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mu:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case gu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mu:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case gu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=ap;xn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,r=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],h=l[4],d=l[8],f=l[1],p=l[5],x=l[9],M=l[2],_=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(x+_)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(u+1)/2,w=(p+1)/2,F=(m+1)/2,P=(h+f)/4,I=(d+M)/4,D=(x+_)/4;return A>w&&A>F?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=P/n,s=I/n):w>F?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=P/r,s=D/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=I/s,r=D/s),this.set(n,r,s,e),this}let R=Math.sqrt((_-x)*(_-x)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(d-M)/R,this.z=(f-h)/R,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tg extends Ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new xn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new oh(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends tg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xp extends xn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eg extends xn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(t.matrixWorld),this.union(Ga)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),Va.subVectors(this.max,wo),ns.subVectors(t.a,wo),is.subVectors(t.b,wo),rs.subVectors(t.c,wo),Yi.subVectors(is,ns),Zi.subVectors(rs,is),Mr.subVectors(ns,rs);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-Mr.z,Mr.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,Mr.z,0,-Mr.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-Mr.y,Mr.x,0];return!bl(e,ns,is,rs,Va)||(e=[1,0,0,0,1,0,0,0,1],!bl(e,ns,is,rs,Va))?!1:(Wa.crossVectors(Yi,Zi),e=[Wa.x,Wa.y,Wa.z],bl(e,ns,is,rs,Va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ci=[new b,new b,new b,new b,new b,new b,new b,new b],Kn=new b,Ga=new zr,ns=new b,is=new b,rs=new b,Yi=new b,Zi=new b,Mr=new b,wo=new b,Va=new b,Wa=new b,yr=new b;function bl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){yr.fromArray(i,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=t.dot(yr),u=e.dot(yr),h=n.dot(yr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const ng=new zr,Eo=new b,Al=new b;class rr{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ng.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);const e=Eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Eo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(Al)),this.expandByPoint(Eo.copy(t.center).sub(Al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Pi=new b,Rl=new b,Xa=new b,Ji=new b,Cl=new b,qa=new b,Pl=new b;class Dc{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Rl.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(Rl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Xa),a=Ji.dot(this.direction),l=-Ji.dot(Xa),u=Ji.lengthSq(),h=Math.abs(1-o*o);let d,f,p,x;if(h>0)if(d=o*l-a,f=o*a-l,x=s*h,d>=0)if(f>=-x)if(f<=x){const M=1/h;d*=M,f*=M,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Rl).addScaledVector(Xa,f),p}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),r=Pi.dot(Pi)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,r,s){Cl.subVectors(e,t),qa.subVectors(n,t),Pl.crossVectors(Cl,qa);let o=this.direction.dot(Pl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,t);const l=a*this.direction.dot(qa.crossVectors(Ji,qa));if(l<0)return null;const u=a*this.direction.dot(Cl.cross(Ji));if(u<0||l+u>o)return null;const h=-a*Ji.dot(Pl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,r,s,o,a,l,u,h,d,f,p,x,M,_){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u,h,d,f,p,x,M,_)}set(t,e,n,r,s,o,a,l,u,h,d,f,p,x,M,_){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=x,m[11]=M,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,p=o*d,x=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=u,e[1]=p+x*u,e[5]=f-M*u,e[9]=-a*l,e[2]=M-f*u,e[6]=x+p*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,x=u*h,M=u*d;e[0]=f+M*a,e[4]=x*a-p,e[8]=o*u,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,x=u*h,M=u*d;e[0]=f-M*a,e[4]=-o*d,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,x=a*h,M=a*d;e[0]=l*h,e[4]=x*u-p,e[8]=f*u+M,e[1]=l*d,e[5]=M*u+f,e[9]=p*u-x,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*u,x=a*l,M=a*u;e[0]=l*h,e[4]=M-f*d,e[8]=x*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=p*d+x,e[10]=f-M*d}else if(t.order==="XZY"){const f=o*l,p=o*u,x=a*l,M=a*u;e[0]=l*h,e[4]=-d,e[8]=u*h,e[1]=f*d+M,e[5]=o*h,e[9]=p*d-x,e[2]=x*d-p,e[6]=a*h,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ig,t,rg)}lookAt(t,e,n){const r=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),$i.crossVectors(n,Fn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),$i.crossVectors(n,Fn)),$i.normalize(),Ya.crossVectors(Fn,$i),r[0]=$i.x,r[4]=Ya.x,r[8]=Fn.x,r[1]=$i.y,r[5]=Ya.y,r[9]=Fn.y,r[2]=$i.z,r[6]=Ya.z,r[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],p=n[13],x=n[2],M=n[6],_=n[10],m=n[14],R=n[3],A=n[7],w=n[11],F=n[15],P=r[0],I=r[4],D=r[8],v=r[12],y=r[1],U=r[5],V=r[9],X=r[13],$=r[2],tt=r[6],j=r[10],ht=r[14],Z=r[3],gt=r[7],Pt=r[11],Ot=r[15];return s[0]=o*P+a*y+l*$+u*Z,s[4]=o*I+a*U+l*tt+u*gt,s[8]=o*D+a*V+l*j+u*Pt,s[12]=o*v+a*X+l*ht+u*Ot,s[1]=h*P+d*y+f*$+p*Z,s[5]=h*I+d*U+f*tt+p*gt,s[9]=h*D+d*V+f*j+p*Pt,s[13]=h*v+d*X+f*ht+p*Ot,s[2]=x*P+M*y+_*$+m*Z,s[6]=x*I+M*U+_*tt+m*gt,s[10]=x*D+M*V+_*j+m*Pt,s[14]=x*v+M*X+_*ht+m*Ot,s[3]=R*P+A*y+w*$+F*Z,s[7]=R*I+A*U+w*tt+F*gt,s[11]=R*D+A*V+w*j+F*Pt,s[15]=R*v+A*X+w*ht+F*Ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],h=t[2],d=t[6],f=t[10],p=t[14],x=t[3],M=t[7],_=t[11],m=t[15];return x*(+s*l*d-r*u*d-s*a*f+n*u*f+r*a*p-n*l*p)+M*(+e*l*p-e*u*f+s*o*f-r*o*p+r*u*h-s*l*h)+_*(+e*u*d-e*a*p-s*o*d+n*o*p+s*a*h-n*u*h)+m*(-r*a*h-e*l*d+e*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],d=t[9],f=t[10],p=t[11],x=t[12],M=t[13],_=t[14],m=t[15],R=d*_*u-M*f*u+M*l*p-a*_*p-d*l*m+a*f*m,A=x*f*u-h*_*u-x*l*p+o*_*p+h*l*m-o*f*m,w=h*M*u-x*d*u+x*a*p-o*M*p-h*a*m+o*d*m,F=x*d*l-h*M*l-x*a*f+o*M*f+h*a*_-o*d*_,P=e*R+n*A+r*w+s*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=R*I,t[1]=(M*f*s-d*_*s-M*r*p+n*_*p+d*r*m-n*f*m)*I,t[2]=(a*_*s-M*l*s+M*r*u-n*_*u-a*r*m+n*l*m)*I,t[3]=(d*l*s-a*f*s-d*r*u+n*f*u+a*r*p-n*l*p)*I,t[4]=A*I,t[5]=(h*_*s-x*f*s+x*r*p-e*_*p-h*r*m+e*f*m)*I,t[6]=(x*l*s-o*_*s-x*r*u+e*_*u+o*r*m-e*l*m)*I,t[7]=(o*f*s-h*l*s+h*r*u-e*f*u-o*r*p+e*l*p)*I,t[8]=w*I,t[9]=(x*d*s-h*M*s-x*n*p+e*M*p+h*n*m-e*d*m)*I,t[10]=(o*M*s-x*a*s+x*n*u-e*M*u-o*n*m+e*a*m)*I,t[11]=(h*a*s-o*d*s-h*n*u+e*d*u+o*n*p-e*a*p)*I,t[12]=F*I,t[13]=(h*M*r-x*d*r+x*n*f-e*M*f-h*n*_+e*d*_)*I,t[14]=(x*a*r-o*M*r-x*n*l+e*M*l+o*n*_-e*a*_)*I,t[15]=(o*d*r-h*a*r+h*n*l-e*d*l-o*n*f+e*a*f)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+n,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,h=o+o,d=a+a,f=s*u,p=s*h,x=s*d,M=o*h,_=o*d,m=a*d,R=l*u,A=l*h,w=l*d,F=n.x,P=n.y,I=n.z;return r[0]=(1-(M+m))*F,r[1]=(p+w)*F,r[2]=(x-A)*F,r[3]=0,r[4]=(p-w)*P,r[5]=(1-(f+m))*P,r[6]=(_+R)*P,r[7]=0,r[8]=(x+A)*I,r[9]=(_-R)*I,r[10]=(1-(f+M))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],jn.copy(this);const u=1/s,h=1/o,d=1/a;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,e.setFromRotationMatrix(jn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Mi,l=!1){const u=this.elements,h=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let x,M;if(l)x=s/(o-s),M=o*s/(o-s);else if(a===Mi)x=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Ac)x=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Mi,l=!1){const u=this.elements,h=2/(e-t),d=2/(n-r),f=-(e+t)/(e-t),p=-(n+r)/(n-r);let x,M;if(l)x=1/(o-s),M=o/(o-s);else if(a===Mi)x=-2/(o-s),M=-(o+s)/(o-s);else if(a===Ac)x=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new b,jn=new Re,ig=new b(0,0,0),rg=new b(1,1,1),$i=new b,Ya=new b,Fn=new b,Kf=new Re,jf=new Fs;class Si{constructor(t=0,e=0,n=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jf.setFromEuler(this),this.setFromQuaternion(jf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sg=0;const Qf=new b,os=new Fs,Li=new Re,Za=new b,To=new b,og=new b,ag=new Fs,td=new b(1,0,0),ed=new b(0,1,0),nd=new b(0,0,1),id={type:"added"},cg={type:"removed"},as={type:"childadded",child:null},Ll={type:"childremoved",child:null};class Xe extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new b,e=new Si,n=new Fs,r=new b(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new ce}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qf.copy(t).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Za.copy(t):Za.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(To,Za,this.up):Li.lookAt(Za,To,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),os.setFromRotationMatrix(Li),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cg),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Xe.DEFAULT_UP=new b(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new b,Di=new b,Dl=new b,Ii=new b,cs=new b,ls=new b,rd=new b,Il=new b,Ul=new b,Nl=new b,Fl=new Ie,Ol=new Ie,Bl=new Ie;class Wn{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Qn.subVectors(t,e),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Qn.subVectors(r,e),Di.subVectors(n,e),Dl.subVectors(t,e);const o=Qn.dot(Qn),a=Qn.dot(Di),l=Qn.dot(Dl),u=Di.dot(Di),h=Di.dot(Dl),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*h)*f,x=(o*h-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Fl.setScalar(0),Ol.setScalar(0),Bl.setScalar(0),Fl.fromBufferAttribute(t,e),Ol.fromBufferAttribute(t,n),Bl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Fl,s.x),o.addScaledVector(Ol,s.y),o.addScaledVector(Bl,s.z),o}static isFrontFacing(t,e,n,r){return Qn.subVectors(n,e),Di.subVectors(t,e),Qn.cross(Di).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Wn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;cs.subVectors(r,n),ls.subVectors(s,n),Il.subVectors(t,n);const l=cs.dot(Il),u=ls.dot(Il);if(l<=0&&u<=0)return e.copy(n);Ul.subVectors(t,r);const h=cs.dot(Ul),d=ls.dot(Ul);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(cs,o);Nl.subVectors(t,s);const p=cs.dot(Nl),x=ls.dot(Nl);if(x>=0&&p<=x)return e.copy(s);const M=p*u-l*x;if(M<=0&&u>=0&&x<=0)return a=u/(u-x),e.copy(n).addScaledVector(ls,a);const _=h*x-p*d;if(_<=0&&d-h>=0&&p-x>=0)return rd.subVectors(s,r),a=(d-h)/(d-h+(p-x)),e.copy(r).addScaledVector(rd,a);const m=1/(_+M+f);return o=M*m,a=f*m,e.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=we.workingColorSpace){if(t=sh(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=zl(o,s,t+1/3),this.g=zl(o,s,t),this.b=zl(o,s,t-1/3)}return we.colorSpaceToWorking(this,r),this}setStyle(t,e=In){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){const n=Mp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return we.workingToColorSpace(_n.copy(this),t),Math.round(ge(_n.r*255,0,255))*65536+Math.round(ge(_n.g*255,0,255))*256+Math.round(ge(_n.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,s=_n.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=In){we.workingToColorSpace(_n.copy(this),t);const e=_n.r,n=_n.g,r=_n.b;return t!==In?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(Ja);const n=No(Ki.h,Ja.h,e),r=No(Ki.s,Ja.s,e),s=No(Ki.l,Ja.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new te;te.NAMES=Mp;let lg=0;class sr extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=bs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=su,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ru&&(n.blendSrc=this.blendSrc),this.blendDst!==su&&(n.blendDst=this.blendDst),this.blendEquation!==Cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mi extends sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new b,$a=new pt;let ug=0;class Xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ug++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wf,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$a.fromBufferAttribute(this,e),$a.applyMatrix3(t),this.setXY(e,$a.x,$a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array),r=wn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wf&&(t.usage=this.usage),t}}class yp extends Xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sp extends Xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hg=0;const Gn=new Re,kl=new Xe,us=new b,On=new zr,bo=new zr,sn=new b;class Te extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vp(t)?Sp:yp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return kl.lookAt(t),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(On.min,bo.min),On.expandByPoint(sn),sn.addVectors(On.max,bo.max),On.expandByPoint(sn)):(On.expandByPoint(bo.min),On.expandByPoint(bo.max))}On.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)sn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(sn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)sn.fromBufferAttribute(a,u),l&&(us.fromBufferAttribute(t,u),sn.add(us)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new b,l[D]=new b;const u=new b,h=new b,d=new b,f=new pt,p=new pt,x=new pt,M=new b,_=new b;function m(D,v,y){u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,y),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,v),x.fromBufferAttribute(s,y),h.sub(u),d.sub(u),p.sub(f),x.sub(f);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(U),_.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(U),a[D].add(M),a[v].add(M),a[y].add(M),l[D].add(_),l[v].add(_),l[y].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let D=0,v=R.length;D<v;++D){const y=R[D],U=y.start,V=y.count;for(let X=U,$=U+V;X<$;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const A=new b,w=new b,F=new b,P=new b;function I(D){F.fromBufferAttribute(r,D),P.copy(F);const v=a[D];A.copy(v),A.sub(F.multiplyScalar(F.dot(v))).normalize(),w.crossVectors(P,v);const U=w.dot(l[D])<0?-1:1;o.setXYZW(D,A.x,A.y,A.z,U)}for(let D=0,v=R.length;D<v;++D){const y=R[D],U=y.start,V=y.count;for(let X=U,$=U+V;X<$;X+=3)I(t.getX(X+0)),I(t.getX(X+1)),I(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new b,s=new b,o=new b,a=new b,l=new b,u=new b,h=new b,d=new b;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),M=t.getX(f+1),_=t.getX(f+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,_),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),a.add(h),l.add(h),u.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let p=0,x=0;for(let M=0,_=l.length;M<_;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*h;for(let m=0;m<h;m++)f[x++]=u[p++]}return new Xn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sd=new Re,Sr=new Dc,Ka=new rr,od=new b,ja=new b,Qa=new b,tc=new b,Hl=new b,ec=new b,ad=new b,nc=new b;class bt extends Xe{constructor(t=new Te,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ec.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],d=s[l];h!==0&&(Hl.fromBufferAttribute(d,t),o?ec.addScaledVector(Hl,h):ec.addScaledVector(Hl.sub(e),h))}e.add(ec)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Sr.copy(t.ray).recast(t.near),!(Ka.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Ka,od)===null||Sr.origin.distanceToSquared(od)>(t.far-t.near)**2))&&(sd.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(sd),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){const _=f[x],m=o[_.materialIndex],R=Math.max(_.start,p.start),A=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let w=R,F=A;w<F;w+=3){const P=a.getX(w),I=a.getX(w+1),D=a.getX(w+2);r=ic(this,m,t,n,u,h,d,P,I,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let _=x,m=M;_<m;_+=3){const R=a.getX(_),A=a.getX(_+1),w=a.getX(_+2);r=ic(this,o,t,n,u,h,d,R,A,w),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){const _=f[x],m=o[_.materialIndex],R=Math.max(_.start,p.start),A=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let w=R,F=A;w<F;w+=3){const P=w,I=w+1,D=w+2;r=ic(this,m,t,n,u,h,d,P,I,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let _=x,m=M;_<m;_+=3){const R=_,A=_+1,w=_+2;r=ic(this,o,t,n,u,h,d,R,A,w),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function fg(i,t,e,n,r,s,o,a){let l;if(t.side===An?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Fi,a),l===null)return null;nc.copy(a),nc.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(nc);return u<e.near||u>e.far?null:{distance:u,point:nc.clone(),object:i}}function ic(i,t,e,n,r,s,o,a,l,u){i.getVertexPosition(a,ja),i.getVertexPosition(l,Qa),i.getVertexPosition(u,tc);const h=fg(i,t,e,n,ja,Qa,tc,ad);if(h){const d=new b;Wn.getBarycoord(ad,ja,Qa,tc,d),r&&(h.uv=Wn.getInterpolatedAttribute(r,a,l,u,d,new pt)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,a,l,u,d,new pt)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,u,d,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new b,materialIndex:0};Wn.getNormal(ja,Qa,tc,f.normal),h.face=f,h.barycoord=d}return h}class ue extends Te{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function x(M,_,m,R,A,w,F,P,I,D,v){const y=w/I,U=F/D,V=w/2,X=F/2,$=P/2,tt=I+1,j=D+1;let ht=0,Z=0;const gt=new b;for(let Pt=0;Pt<j;Pt++){const Ot=Pt*U-X;for(let ne=0;ne<tt;ne++){const ee=ne*y-V;gt[M]=ee*R,gt[_]=Ot*A,gt[m]=$,u.push(gt.x,gt.y,gt.z),gt[M]=0,gt[_]=0,gt[m]=P>0?1:-1,h.push(gt.x,gt.y,gt.z),d.push(ne/I),d.push(1-Pt/D),ht+=1}}for(let Pt=0;Pt<D;Pt++)for(let Ot=0;Ot<I;Ot++){const ne=f+Ot+tt*Pt,ee=f+Ot+tt*(Pt+1),pe=f+(Ot+1)+tt*(Pt+1),oe=f+(Ot+1)+tt*Pt;l.push(ne,ee,oe),l.push(ee,pe,oe),Z+=6}a.addGroup(p,Z,v),p+=Z,f+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function En(i){const t={};for(let e=0;e<i.length;e++){const n=Is(i[e]);for(const r in n)t[r]=n[r]}return t}function dg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const pg={clone:Is,merge:En};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ep extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new b,cd=new pt,ld=new pt;class Vn extends Ep{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,cd,ld),e.subVectors(ld,cd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,fs=1;class _g extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(hs,fs,t,e);r.layers=this.layers,this.add(r);const s=new Vn(hs,fs,t,e);s.layers=this.layers,this.add(s);const o=new Vn(hs,fs,t,e);o.layers=this.layers,this.add(o);const a=new Vn(hs,fs,t,e);a.layers=this.layers,this.add(a);const l=new Vn(hs,fs,t,e);l.layers=this.layers,this.add(l);const u=new Vn(hs,fs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Tp extends xn{constructor(t=[],e=Ps,n,r,s,o,a,l,u,h){super(t,e,n,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vg extends ir{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Tp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ue(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:er});s.uniforms.tEquirect.value=e;const o=new bt(r,s),a=e.minFilter;return e.minFilter===Nr&&(e.minFilter=vi),new _g(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class _e extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xg={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const M of t.hand.values()){const _=e.getJointPose(M,n),m=this._getHandJoint(u,M);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&f>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ch{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mg extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yg extends xn{constructor(t=null,e=1,n=1,r,s,o,a,l,u=Bn,h=Bn,d,f){super(null,o,a,l,u,h,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ud extends Xn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new Re,hd=new Re,rc=[],fd=new zr,Sg=new Re,Ao=new bt,Ro=new rr;class ps extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ud(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Sg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),fd.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(fd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ro.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),t.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ds),hd.multiplyMatrices(n,ds),Ao.matrixWorld=hd,Ao.raycast(t,rc);for(let o=0,a=rc.length;o<a;o++){const l=rc[o];l.instanceId=s,l.object=this,e.push(l)}rc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ud(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new yg(new Float32Array(r*this.count),r,this.count,eh,xi));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vl=new b,wg=new b,Eg=new ce;class Ar{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Vl.subVectors(n,e).cross(wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eg.getNormalMatrix(t),r=this.coplanarPoint(Vl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new rr,Tg=new pt(.5,.5),sc=new b;class lh{constructor(t=new Ar,e=new Ar,n=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],u=s[3],h=s[4],d=s[5],f=s[6],p=s[7],x=s[8],M=s[9],_=s[10],m=s[11],R=s[12],A=s[13],w=s[14],F=s[15];if(r[0].setComponents(u-o,p-h,m-x,F-R).normalize(),r[1].setComponents(u+o,p+h,m+x,F+R).normalize(),r[2].setComponents(u+a,p+d,m+M,F+A).normalize(),r[3].setComponents(u-a,p-d,m-M,F-A).normalize(),n)r[4].setComponents(l,f,_,w).normalize(),r[5].setComponents(u-l,p-f,m-_,F-w).normalize();else if(r[4].setComponents(u-l,p-f,m-_,F-w).normalize(),e===Mi)r[5].setComponents(u+l,p+f,m+_,F+w).normalize();else if(e===Ac)r[5].setComponents(l,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){wr.center.set(0,0,0);const e=Tg.distanceTo(t.center);return wr.radius=.7071067811865476+e,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(sc.x=r.normal.x>0?t.max.x:t.min.x,sc.y=r.normal.y>0?t.max.y:t.min.y,sc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ss extends sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cc=new b,Pc=new b,dd=new Re,Co=new Dc,oc=new rr,Wl=new b,pd=new b;class Ec extends Xe{constructor(t=new Te,e=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Cc.fromBufferAttribute(e,r-1),Pc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Cc.distanceTo(Pc);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(r),oc.radius+=s,t.ray.intersectsSphere(oc)===!1)return;dd.copy(r).invert(),Co.copy(t.ray).applyMatrix4(dd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let M=p,_=x-1;M<_;M+=u){const m=h.getX(M),R=h.getX(M+1),A=ac(this,t,Co,l,m,R,M);A&&e.push(A)}if(this.isLineLoop){const M=h.getX(x-1),_=h.getX(p),m=ac(this,t,Co,l,M,_,x-1);m&&e.push(m)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let M=p,_=x-1;M<_;M+=u){const m=ac(this,t,Co,l,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){const M=ac(this,t,Co,l,x-1,p,x-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ac(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Cc.fromBufferAttribute(a,r),Pc.fromBufferAttribute(a,s),e.distanceSqToSegment(Cc,Pc,Wl,pd)>n)return;Wl.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Wl);if(!(u<t.near||u>t.far))return{distance:u,point:pd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const md=new b,gd=new b;class ms extends Ec{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)md.fromBufferAttribute(e,r),gd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+md.distanceTo(gd);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bp extends sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _d=new Re,Xu=new Dc,cc=new rr,lc=new b;class gs extends Xe{constructor(t=new Te,e=new bp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),cc.radius+=s,t.ray.intersectsSphere(cc)===!1)return;_d.copy(r).invert(),Xu.copy(t.ray).applyMatrix4(_d);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,M=p;x<M;x++){const _=u.getX(x);lc.fromBufferAttribute(d,_),vd(lc,_,l,r,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,M=p;x<M;x++)lc.fromBufferAttribute(d,x),vd(lc,x,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vd(i,t,e,n,r,s,o){const a=Xu.distanceSqToPoint(i);if(a<e){const l=new b;Xu.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class xd extends xn{constructor(t,e,n,r,s,o,a,l,u){super(t,e,n,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ap extends xn{constructor(t,e,n=Fr,r,s,o,a=Bn,l=Bn,u,h=Ho,d=1){if(h!==Ho&&h!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,r,s,o,a,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rp extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ws extends Te{constructor(t=1,e=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:r,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],u=[],h=e/2,d=Math.PI/2*t,f=e,p=2*d+f,x=n*2+s,M=r+1,_=new b,m=new b;for(let R=0;R<=x;R++){let A=0,w=0,F=0,P=0;if(R<=n){const v=R/n,y=v*Math.PI/2;w=-h-t*Math.cos(y),F=t*Math.sin(y),P=-t*Math.cos(y),A=v*d}else if(R<=n+s){const v=(R-n)/s;w=-h+v*e,F=t,P=0,A=d+v*f}else{const v=(R-n-s)/n,y=v*Math.PI/2;w=h+t*Math.sin(y),F=t*Math.cos(y),P=t*Math.sin(y),A=d+f+v*d}const I=Math.max(0,Math.min(1,A/p));let D=0;R===0?D=.5/r:R===x&&(D=-.5/r);for(let v=0;v<=r;v++){const y=v/r,U=y*Math.PI*2,V=Math.sin(U),X=Math.cos(U);m.x=-F*X,m.y=w,m.z=F*V,a.push(m.x,m.y,m.z),_.set(-F*X,P,F*V),_.normalize(),l.push(_.x,_.y,_.z),u.push(y+D,I)}if(R>0){const v=(R-1)*M;for(let y=0;y<r;y++){const U=v+y,V=v+y+1,X=R*M+y,$=R*M+y+1;o.push(U,V,X),o.push(V,$,X)}}}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Pr extends Te{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],u=new b,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*r;u.x=t*Math.cos(p),u.y=t*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qe extends Te{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let x=0;const M=[],_=n/2;let m=0;R(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(p,2));function R(){const w=new b,F=new b;let P=0;const I=(e-t)/n;for(let D=0;D<=s;D++){const v=[],y=D/s,U=y*(e-t)+t;for(let V=0;V<=r;V++){const X=V/r,$=X*l+a,tt=Math.sin($),j=Math.cos($);F.x=U*tt,F.y=-y*n+_,F.z=U*j,d.push(F.x,F.y,F.z),w.set(tt,I,j).normalize(),f.push(w.x,w.y,w.z),p.push(X,1-y),v.push(x++)}M.push(v)}for(let D=0;D<r;D++)for(let v=0;v<s;v++){const y=M[v][D],U=M[v+1][D],V=M[v+1][D+1],X=M[v][D+1];(t>0||v!==0)&&(h.push(y,U,X),P+=3),(e>0||v!==s-1)&&(h.push(U,V,X),P+=3)}u.addGroup(m,P,0),m+=P}function A(w){const F=x,P=new pt,I=new b;let D=0;const v=w===!0?t:e,y=w===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,_*y,0),f.push(0,y,0),p.push(.5,.5),x++;const U=x;for(let V=0;V<=r;V++){const $=V/r*l+a,tt=Math.cos($),j=Math.sin($);I.x=v*j,I.y=_*y,I.z=v*tt,d.push(I.x,I.y,I.z),f.push(0,y,0),P.x=tt*.5+.5,P.y=j*.5*y+.5,p.push(P.x,P.y),x++}for(let V=0;V<r;V++){const X=F+V,$=U+V;w===!0?h.push($,$+1,X):h.push($+1,$,X),D+=3}u.addGroup(m,D,w===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tn extends Qe{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Tn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uh extends Te{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),u(n),h(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(R){const A=new b,w=new b,F=new b;for(let P=0;P<e.length;P+=3)p(e[P+0],A),p(e[P+1],w),p(e[P+2],F),l(A,w,F,R)}function l(R,A,w,F){const P=F+1,I=[];for(let D=0;D<=P;D++){I[D]=[];const v=R.clone().lerp(w,D/P),y=A.clone().lerp(w,D/P),U=P-D;for(let V=0;V<=U;V++)V===0&&D===P?I[D][V]=v:I[D][V]=v.clone().lerp(y,V/U)}for(let D=0;D<P;D++)for(let v=0;v<2*(P-D)-1;v++){const y=Math.floor(v/2);v%2===0?(f(I[D][y+1]),f(I[D+1][y]),f(I[D][y])):(f(I[D][y+1]),f(I[D+1][y+1]),f(I[D+1][y]))}}function u(R){const A=new b;for(let w=0;w<s.length;w+=3)A.x=s[w+0],A.y=s[w+1],A.z=s[w+2],A.normalize().multiplyScalar(R),s[w+0]=A.x,s[w+1]=A.y,s[w+2]=A.z}function h(){const R=new b;for(let A=0;A<s.length;A+=3){R.x=s[A+0],R.y=s[A+1],R.z=s[A+2];const w=_(R)/2/Math.PI+.5,F=m(R)/Math.PI+.5;o.push(w,1-F)}x(),d()}function d(){for(let R=0;R<o.length;R+=6){const A=o[R+0],w=o[R+2],F=o[R+4],P=Math.max(A,w,F),I=Math.min(A,w,F);P>.9&&I<.1&&(A<.2&&(o[R+0]+=1),w<.2&&(o[R+2]+=1),F<.2&&(o[R+4]+=1))}}function f(R){s.push(R.x,R.y,R.z)}function p(R,A){const w=R*3;A.x=t[w+0],A.y=t[w+1],A.z=t[w+2]}function x(){const R=new b,A=new b,w=new b,F=new b,P=new pt,I=new pt,D=new pt;for(let v=0,y=0;v<s.length;v+=9,y+=6){R.set(s[v+0],s[v+1],s[v+2]),A.set(s[v+3],s[v+4],s[v+5]),w.set(s[v+6],s[v+7],s[v+8]),P.set(o[y+0],o[y+1]),I.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),F.copy(R).add(A).add(w).divideScalar(3);const U=_(F);M(P,y+0,R,U),M(I,y+2,A,U),M(D,y+4,w,U)}}function M(R,A,w,F){F<0&&R.x===1&&(o[A]=R.x-1),w.x===0&&w.z===0&&(o[A]=F/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function m(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.vertices,t.indices,t.radius,t.details)}}const uc=new b,hc=new b,Xl=new b,fc=new Wn;class dc extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(As*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let x=0;x<l;x+=3){o?(u[0]=o.getX(x),u[1]=o.getX(x+1),u[2]=o.getX(x+2)):(u[0]=x,u[1]=x+1,u[2]=x+2);const{a:M,b:_,c:m}=fc;if(M.fromBufferAttribute(a,u[0]),_.fromBufferAttribute(a,u[1]),m.fromBufferAttribute(a,u[2]),fc.getNormal(Xl),d[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,d[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let R=0;R<3;R++){const A=(R+1)%3,w=d[R],F=d[A],P=fc[h[R]],I=fc[h[A]],D=`${w}_${F}`,v=`${F}_${w}`;v in f&&f[v]?(Xl.dot(f[v].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(I.x,I.y,I.z)),f[v]=null):D in f||(f[D]={index0:u[R],index1:u[A],normal:Xl.clone()})}}for(const x in f)if(f[x]){const{index0:M,index1:_}=f[x];uc.fromBufferAttribute(a,M),hc.fromBufferAttribute(a,_),p.push(uc.x,uc.y,uc.z),p.push(hc.x,hc.y,hc.z)}this.setAttribute("position",new ae(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=n[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new pt:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new b,r=[],s=[],o=[],a=new b,l=new Re;for(let p=0;p<=t;p++){const x=p/t;r[p]=this.getTangentAt(x,new b)}s[0]=new b,o[0]=new b;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(ge(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(ge(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hh extends wi{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*h-p*d+this.aX,u=f*d+p*h+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bg extends hh{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fh(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,h,d){let f=(o-s)/u-(a-s)/(u+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const pc=new b,ql=new fh,Yl=new fh,Zl=new fh;class Ag extends wi{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new b){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,h;this.closed||a>0?u=r[(a-1)%s]:(pc.subVectors(r[0],r[1]).add(r[0]),u=pc);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(pc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=pc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(h),p);M<1e-4&&(M=1),x<1e-4&&(x=M),_<1e-4&&(_=M),ql.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,x,M,_),Yl.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,x,M,_),Zl.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,x,M,_)}else this.curveType==="catmullrom"&&(ql.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),Yl.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),Zl.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(ql.calc(l),Yl.calc(l),Zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new b().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Md(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Rg(i,t){const e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Pg(i,t){return i*i*t}function Fo(i,t,e,n){return Rg(i,t)+Cg(i,e)+Pg(i,n)}function Lg(i,t){const e=1-i;return e*e*e*t}function Dg(i,t){const e=1-i;return 3*e*e*i*t}function Ig(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function Oo(i,t,e,n,r){return Lg(i,t)+Dg(i,e)+Ig(i,n)+Ug(i,r)}class Cp extends wi{constructor(t=new pt,e=new pt,n=new pt,r=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new pt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oo(t,r.x,s.x,o.x,a.x),Oo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ng extends wi{constructor(t=new b,e=new b,n=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new b){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oo(t,r.x,s.x,o.x,a.x),Oo(t,r.y,s.y,o.y,a.y),Oo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pp extends wi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fg extends wi{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends wi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Fo(t,r.x,s.x,o.x),Fo(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Og extends wi{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Fo(t,r.x,s.x,o.x),Fo(t,r.y,s.y,o.y),Fo(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Md(a,l.x,u.x,h.x,d.x),Md(a,l.y,u.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new pt().fromArray(r))}return this}}var qu=Object.freeze({__proto__:null,ArcCurve:bg,CatmullRomCurve3:Ag,CubicBezierCurve:Cp,CubicBezierCurve3:Ng,EllipseCurve:hh,LineCurve:Pp,LineCurve3:Fg,QuadraticBezierCurve:Lp,QuadraticBezierCurve3:Og,SplineCurve:Dp});class Bg extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new qu[r.type]().fromJSON(r))}return this}}class Bo extends Bg{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Lp(this.currentPoint.clone(),new pt(t,e),new pt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Cp(this.currentPoint.clone(),new pt(t,e),new pt(n,r),new pt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+u,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const u=new hh(t,e,n,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ms extends Bo{constructor(t){super(t),this.uuid=Br(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Bo().fromJSON(r))}return this}}function zg(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Ip(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(n&&(s=Wg(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=e;f<r;f+=e){const p=i[f],x=i[f+1];p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>d&&(d=x)}u=Math.max(h-a,d-l),u=u!==0?32767/u:0}return Xo(s,o,e,a,l,u,0),o}function Ip(i,t,e,n,r){let s;if(r===e_(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=yd(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=yd(o/n|0,i[o],i[o+1],s);return s&&Us(s,s.next)&&(Yo(s),s=s.next),s}function Or(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Us(e,e.next)||ze(e.prev,e,e.next)===0)){if(Yo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Jg(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,u=i.next;if(s?Hg(i,n,r,s):kg(i)){t.push(l.i,i.i,u.i),Yo(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Gg(Or(i),t),Xo(i,t,e,n,r,s,2)):o===2&&Vg(i,t,e,n,r,s):Xo(Or(i),t,e,n,r,s,1);break}}}function kg(i){const t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,u=n.y,h=Math.min(r,s,o),d=Math.min(a,l,u),f=Math.max(r,s,o),p=Math.max(a,l,u);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=d&&x.y<=p&&Io(r,a,s,l,o,u,x.x,x.y)&&ze(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Hg(i,t,e,n){const r=i.prev,s=i,o=i.next;if(ze(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,h=r.y,d=s.y,f=o.y,p=Math.min(a,l,u),x=Math.min(h,d,f),M=Math.max(a,l,u),_=Math.max(h,d,f),m=Yu(p,x,t,e,n),R=Yu(M,_,t,e,n);let A=i.prevZ,w=i.nextZ;for(;A&&A.z>=m&&w&&w.z<=R;){if(A.x>=p&&A.x<=M&&A.y>=x&&A.y<=_&&A!==r&&A!==o&&Io(a,h,l,d,u,f,A.x,A.y)&&ze(A.prev,A,A.next)>=0||(A=A.prevZ,w.x>=p&&w.x<=M&&w.y>=x&&w.y<=_&&w!==r&&w!==o&&Io(a,h,l,d,u,f,w.x,w.y)&&ze(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;A&&A.z>=m;){if(A.x>=p&&A.x<=M&&A.y>=x&&A.y<=_&&A!==r&&A!==o&&Io(a,h,l,d,u,f,A.x,A.y)&&ze(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;w&&w.z<=R;){if(w.x>=p&&w.x<=M&&w.y>=x&&w.y<=_&&w!==r&&w!==o&&Io(a,h,l,d,u,f,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Gg(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Us(n,r)&&Np(n,e,e.next,r)&&qo(n,r)&&qo(r,n)&&(t.push(n.i,e.i,r.i),Yo(e),Yo(e.next),e=i=r),e=e.next}while(e!==i);return Or(e)}function Vg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jg(o,a)){let l=Fp(o,a);o=Or(o,o.next),l=Or(l,l.next),Xo(o,t,e,n,r,s,0),Xo(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Wg(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,u=Ip(i,a,l,n,!1);u===u.next&&(u.steiner=!0),r.push(Kg(u))}r.sort(Xg);for(let s=0;s<r.length;s++)e=qg(r[s],e);return e}function Xg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function qg(i,t){const e=Yg(i,t);if(!e)return t;const n=Fp(e,i);return Or(n,n.next),Or(e,e.next)}function Yg(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Us(i,e))return e;do{if(Us(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,u=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Up(r<u?n:s,r,l,u,r<u?s:n,r,e.x,e.y)){const d=Math.abs(r-e.y)/(n-e.x);qo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Zg(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Zg(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function Jg(i,t,e,n){let r=i;do r.z===0&&(r.z=Yu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$g(r)}function $g(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let u=0;u<e&&(a++,o=o.nextZ,!!o);u++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Yu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Kg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Up(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Io(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Up(i,t,e,n,r,s,o,a)}function jg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qg(i,t)&&(qo(i,t)&&qo(t,i)&&t_(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||Us(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Us(i,t){return i.x===t.x&&i.y===t.y}function Np(i,t,e,n){const r=gc(ze(i,t,e)),s=gc(ze(i,t,n)),o=gc(ze(e,n,i)),a=gc(ze(e,n,t));return!!(r!==s&&o!==a||r===0&&mc(i,e,t)||s===0&&mc(i,n,t)||o===0&&mc(e,i,n)||a===0&&mc(e,t,n))}function mc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function gc(i){return i>0?1:i<0?-1:0}function Qg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Np(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qo(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function t_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fp(i,t){const e=Zu(i.i,i.x,i.y),n=Zu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function yd(i,t,e,n){const r=Zu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Yo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function e_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class n_{static triangulate(t,e,n=2){return zg(t,e,n)}}class Es{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Es.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Sd(t),wd(n,t);let o=t.length;e.forEach(Sd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,wd(n,e[l]);const a=n_.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Lr extends Te{constructor(t=new Ms([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const u=t[a];o(u)}this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(s,2)),this.computeVertexNormals();function o(a){const l=[],u=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:i_;let A,w=!1,F,P,I,D;m&&(A=m.getSpacedPoints(h),w=!0,f=!1,F=m.computeFrenetFrames(h,!1),P=new b,I=new b,D=new b),f||(_=0,p=0,x=0,M=0);const v=a.extractPoints(u);let y=v.shape;const U=v.holes;if(!Es.isClockWise(y)){y=y.reverse();for(let at=0,it=U.length;at<it;at++){const et=U[at];Es.isClockWise(et)&&(U[at]=et.reverse())}}function X(at){const et=10000000000000001e-36;let K=at[0];for(let wt=1;wt<=at.length;wt++){const ft=wt%at.length,St=at[ft],ie=St.x-K.x,Zt=St.y-K.y,C=ie*ie+Zt*Zt,S=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(K.x),Math.abs(K.y)),G=et*S*S;if(C<=G){at.splice(ft,1),wt--;continue}K=St}}X(y),U.forEach(X);const $=U.length,tt=y;for(let at=0;at<$;at++){const it=U[at];y=y.concat(it)}function j(at,it,et){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(it,et)}const ht=y.length;function Z(at,it,et){let K,wt,ft;const St=at.x-it.x,ie=at.y-it.y,Zt=et.x-at.x,C=et.y-at.y,S=St*St+ie*ie,G=St*C-ie*Zt;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(S),ct=Math.sqrt(Zt*Zt+C*C),Q=it.x-ie/J,kt=it.y+St/J,Mt=et.x-C/ct,zt=et.y+Zt/ct,Ht=((Mt-Q)*C-(zt-kt)*Zt)/(St*C-ie*Zt);K=Q+St*Ht-at.x,wt=kt+ie*Ht-at.y;const _t=K*K+wt*wt;if(_t<=2)return new pt(K,wt);ft=Math.sqrt(_t/2)}else{let J=!1;St>Number.EPSILON?Zt>Number.EPSILON&&(J=!0):St<-Number.EPSILON?Zt<-Number.EPSILON&&(J=!0):Math.sign(ie)===Math.sign(C)&&(J=!0),J?(K=-ie,wt=St,ft=Math.sqrt(S)):(K=St,wt=ie,ft=Math.sqrt(S/2))}return new pt(K/ft,wt/ft)}const gt=[];for(let at=0,it=tt.length,et=it-1,K=at+1;at<it;at++,et++,K++)et===it&&(et=0),K===it&&(K=0),gt[at]=Z(tt[at],tt[et],tt[K]);const Pt=[];let Ot,ne=gt.concat();for(let at=0,it=$;at<it;at++){const et=U[at];Ot=[];for(let K=0,wt=et.length,ft=wt-1,St=K+1;K<wt;K++,ft++,St++)ft===wt&&(ft=0),St===wt&&(St=0),Ot[K]=Z(et[K],et[ft],et[St]);Pt.push(Ot),ne=ne.concat(Ot)}let ee;if(_===0)ee=Es.triangulateShape(tt,U);else{const at=[],it=[];for(let et=0;et<_;et++){const K=et/_,wt=p*Math.cos(K*Math.PI/2),ft=x*Math.sin(K*Math.PI/2)+M;for(let St=0,ie=tt.length;St<ie;St++){const Zt=j(tt[St],gt[St],ft);Lt(Zt.x,Zt.y,-wt),K===0&&at.push(Zt)}for(let St=0,ie=$;St<ie;St++){const Zt=U[St];Ot=Pt[St];const C=[];for(let S=0,G=Zt.length;S<G;S++){const J=j(Zt[S],Ot[S],ft);Lt(J.x,J.y,-wt),K===0&&C.push(J)}K===0&&it.push(C)}}ee=Es.triangulateShape(at,it)}const pe=ee.length,oe=x+M;for(let at=0;at<ht;at++){const it=f?j(y[at],ne[at],oe):y[at];w?(I.copy(F.normals[0]).multiplyScalar(it.x),P.copy(F.binormals[0]).multiplyScalar(it.y),D.copy(A[0]).add(I).add(P),Lt(D.x,D.y,D.z)):Lt(it.x,it.y,0)}for(let at=1;at<=h;at++)for(let it=0;it<ht;it++){const et=f?j(y[it],ne[it],oe):y[it];w?(I.copy(F.normals[at]).multiplyScalar(et.x),P.copy(F.binormals[at]).multiplyScalar(et.y),D.copy(A[at]).add(I).add(P),Lt(D.x,D.y,D.z)):Lt(et.x,et.y,d/h*at)}for(let at=_-1;at>=0;at--){const it=at/_,et=p*Math.cos(it*Math.PI/2),K=x*Math.sin(it*Math.PI/2)+M;for(let wt=0,ft=tt.length;wt<ft;wt++){const St=j(tt[wt],gt[wt],K);Lt(St.x,St.y,d+et)}for(let wt=0,ft=U.length;wt<ft;wt++){const St=U[wt];Ot=Pt[wt];for(let ie=0,Zt=St.length;ie<Zt;ie++){const C=j(St[ie],Ot[ie],K);w?Lt(C.x,C.y+A[h-1].y,A[h-1].x+et):Lt(C.x,C.y,d+et)}}}nt(),ut();function nt(){const at=r.length/3;if(f){let it=0,et=ht*it;for(let K=0;K<pe;K++){const wt=ee[K];Nt(wt[2]+et,wt[1]+et,wt[0]+et)}it=h+_*2,et=ht*it;for(let K=0;K<pe;K++){const wt=ee[K];Nt(wt[0]+et,wt[1]+et,wt[2]+et)}}else{for(let it=0;it<pe;it++){const et=ee[it];Nt(et[2],et[1],et[0])}for(let it=0;it<pe;it++){const et=ee[it];Nt(et[0]+ht*h,et[1]+ht*h,et[2]+ht*h)}}n.addGroup(at,r.length/3-at,0)}function ut(){const at=r.length/3;let it=0;Et(tt,it),it+=tt.length;for(let et=0,K=U.length;et<K;et++){const wt=U[et];Et(wt,it),it+=wt.length}n.addGroup(at,r.length/3-at,1)}function Et(at,it){let et=at.length;for(;--et>=0;){const K=et;let wt=et-1;wt<0&&(wt=at.length-1);for(let ft=0,St=h+_*2;ft<St;ft++){const ie=ht*ft,Zt=ht*(ft+1),C=it+K+ie,S=it+wt+ie,G=it+wt+Zt,J=it+K+Zt;re(C,S,G,J)}}}function Lt(at,it,et){l.push(at),l.push(it),l.push(et)}function Nt(at,it,et){Ee(at),Ee(it),Ee(et);const K=r.length/3,wt=R.generateTopUV(n,r,K-3,K-2,K-1);N(wt[0]),N(wt[1]),N(wt[2])}function re(at,it,et,K){Ee(at),Ee(it),Ee(K),Ee(it),Ee(et),Ee(K);const wt=r.length/3,ft=R.generateSideWallUV(n,r,wt-6,wt-3,wt-2,wt-1);N(ft[0]),N(ft[1]),N(ft[3]),N(ft[1]),N(ft[2]),N(ft[3])}function Ee(at){r.push(l[at*3+0]),r.push(l[at*3+1]),r.push(l[at*3+2])}function N(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return r_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new qu[r.type]().fromJSON(r)),new Lr(n,t.options)}}const i_={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],u=t[r*3],h=t[r*3+1];return[new pt(s,o),new pt(a,l),new pt(u,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],u=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[r*3],p=t[r*3+1],x=t[r*3+2],M=t[s*3],_=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new pt(o,1-l),new pt(u,1-d),new pt(f,1-x),new pt(M,1-m)]:[new pt(a,1-l),new pt(h,1-d),new pt(p,1-x),new pt(_,1-m)]}};function r_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ln extends uh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ln(t.radius,t.detail)}}class on extends Te{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),u=a+1,h=l+1,d=t/a,f=e/l,p=[],x=[],M=[],_=[];for(let m=0;m<h;m++){const R=m*f-o;for(let A=0;A<u;A++){const w=A*d-s;x.push(w,-R,0),M.push(0,0,1),_.push(A/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<a;R++){const A=R+u*m,w=R+u*(m+1),F=R+1+u*(m+1),P=R+1+u*m;p.push(A,w,P),p.push(w,F,P)}this.setIndex(p),this.setAttribute("position",new ae(x,3)),this.setAttribute("normal",new ae(M,3)),this.setAttribute("uv",new ae(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}class dh extends Te{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],u=[],h=[];let d=t;const f=(e-t)/r,p=new b,x=new pt;for(let M=0;M<=r;M++){for(let _=0;_<=n;_++){const m=s+_/n*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),u.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}d+=f}for(let M=0;M<r;M++){const _=M*(n+1);for(let m=0;m<n;m++){const R=m+_,A=R,w=R+n+1,F=R+n+2,P=R+1;a.push(A,w,P),a.push(w,F,P)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class je extends Te{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new b,f=new b,p=[],x=[],M=[],_=[];for(let m=0;m<=n;m++){const R=[],A=m/n;let w=0;m===0&&o===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let F=0;F<=e;F++){const P=F/e;d.x=-t*Math.cos(r+P*s)*Math.sin(o+A*a),d.y=t*Math.cos(o+A*a),d.z=t*Math.sin(r+P*s)*Math.sin(o+A*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),_.push(P+w,1-A),R.push(u++)}h.push(R)}for(let m=0;m<n;m++)for(let R=0;R<e;R++){const A=h[m][R+1],w=h[m][R],F=h[m+1][R],P=h[m+1][R+1];(m!==0||o>0)&&p.push(A,w,P),(m!==n-1||l<Math.PI)&&p.push(w,F,P)}this.setIndex(p),this.setAttribute("position",new ae(x,3)),this.setAttribute("normal",new ae(M,3)),this.setAttribute("uv",new ae(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dr extends Te{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],u=[],h=new b,d=new b,f=new b;for(let p=0;p<=n;p++)for(let x=0;x<=r;x++){const M=x/r*s,_=p/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(M),d.y=(t+e*Math.cos(_))*Math.sin(M),d.z=e*Math.sin(_),a.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),u.push(x/r),u.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=r;x++){const M=(r+1)*p+x-1,_=(r+1)*(p-1)+x-1,m=(r+1)*(p-1)+x,R=(r+1)*p+x;o.push(M,_,R),o.push(_,m,R)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class s_ extends sr{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new te(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Ln extends sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gp,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Op extends sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o_ extends sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class a_ extends Ss{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class ph extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class c_ extends ph{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Jl=new Re,Ed=new b,Td=new b;class Bp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ed),Td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Td),e.updateMatrixWorld(),Jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bd=new Re,Po=new b,$l=new b;class l_ extends Bp{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Po.setFromMatrixPosition(t.matrixWorld),n.position.copy(Po),$l.copy(n.position),$l.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($l),n.updateMatrixWorld(),r.makeTranslation(-Po.x,-Po.y,-Po.z),bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd,n.coordinateSystem,n.reversedDepth)}}class Ad extends ph{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new l_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mh extends Ep{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class u_ extends Bp{constructor(){super(new mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rd extends ph{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new u_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class h_ extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Cd=new Re;class f_{constructor(t,e,n=0,r=1/0){this.ray=new Dc(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cd),this}intersectObject(t,e=!0,n=[]){return Ju(t,this,n,e),n.sort(Pd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ju(t[r],this,n,e);return n.sort(Pd),n}}function Pd(i,t){return i.distance-t.distance}function Ju(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Ju(s[o],t,e,!0)}}function Ld(i,t,e,n){const r=d_(n);switch(e){case fp:return i*t;case eh:return i*t/r.components*r.byteLength;case nh:return i*t/r.components*r.byteLength;case pp:return i*t*2/r.components*r.byteLength;case ih:return i*t*2/r.components*r.byteLength;case dp:return i*t*3/r.components*r.byteLength;case ti:return i*t*4/r.components*r.byteLength;case rh:return i*t*4/r.components*r.byteLength;case Mc:case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sc:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vu:case Mu:return Math.max(i,16)*Math.max(t,8)/4;case _u:case xu:return Math.max(i,8)*Math.max(t,8)/2;case yu:case Su:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Au:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Du:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bu:case zu:case ku:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hu:case Gu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vu:case Wu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d_(i){switch(i){case yi:case cp:return{byteLength:1,components:1};case zo:case lp:case Zo:return{byteLength:2,components:1};case Qu:case th:return{byteLength:2,components:4};case Fr:case ju:case xi:return{byteLength:4,components:1};case up:case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);function zp(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function p_(i){const t=new WeakMap;function e(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,u){const h=l.array,d=l.updateRanges;if(i.bindBuffer(u,a),d.length===0)i.bufferSubData(u,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],M=d[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const M=d[p];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
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
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
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
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w_=`#ifdef USE_BATCHING
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
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R_=`#ifdef USE_IRIDESCENCE
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
#endif`,C_=`#ifdef USE_BUMPMAP
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
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B_=`#define PI 3.141592653589793
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
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k_=`vec3 transformedNormal = objectNormal;
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
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ov=`uniform bool receiveShadow;
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
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#endif`,dv=`struct PhysicalMaterial {
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
}`,pv=`
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ev=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
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
#endif`,Bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qv=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
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
}`,yx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sx=`#define DISTANCE
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
}`,wx=`#define DISTANCE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define LAMBERT
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
}`,Dx=`#define MATCAP
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
}`,Ix=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Nx=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define STANDARD
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
}`,zx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:__,alphamap_pars_fragment:v_,alphatest_fragment:x_,alphatest_pars_fragment:M_,aomap_fragment:y_,aomap_pars_fragment:S_,batching_pars_vertex:w_,batching_vertex:E_,begin_vertex:T_,beginnormal_vertex:b_,bsdfs:A_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:I_,color_fragment:U_,color_pars_fragment:N_,color_pars_vertex:F_,color_vertex:O_,common:B_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:k_,displacementmap_pars_vertex:H_,displacementmap_vertex:G_,emissivemap_fragment:V_,emissivemap_pars_fragment:W_,colorspace_fragment:X_,colorspace_pars_fragment:q_,envmap_fragment:Y_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:J_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:av,envmap_vertex:K_,fog_vertex:j_,fog_pars_vertex:Q_,fog_fragment:tv,fog_pars_fragment:ev,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:sv,lights_pars_begin:ov,lights_toon_fragment:cv,lights_toon_pars_fragment:lv,lights_phong_fragment:uv,lights_phong_pars_fragment:hv,lights_physical_fragment:fv,lights_physical_pars_fragment:dv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:xv,logdepthbuf_vertex:Mv,map_fragment:yv,map_pars_fragment:Sv,map_particle_fragment:wv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:bv,morphinstance_vertex:Av,morphcolor_vertex:Rv,morphnormal_vertex:Cv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Lv,normal_fragment_begin:Dv,normal_fragment_maps:Iv,normal_pars_fragment:Uv,normal_pars_vertex:Nv,normal_vertex:Fv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Bv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:kv,iridescence_pars_fragment:Hv,opaque_fragment:Gv,packing:Vv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:Yv,roughnessmap_fragment:Zv,roughnessmap_pars_fragment:Jv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:Kv,shadowmap_vertex:jv,shadowmask_pars_fragment:Qv,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:rx,specularmap_pars_fragment:sx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:fx,worldpos_vertex:dx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:vx,cube_frag:xx,depth_vert:Mx,depth_frag:yx,distanceRGBA_vert:Sx,distanceRGBA_frag:wx,equirect_vert:Ex,equirect_frag:Tx,linedashed_vert:bx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Lx,meshmatcap_vert:Dx,meshmatcap_frag:Ix,meshnormal_vert:Ux,meshnormal_frag:Nx,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:Bx,meshphysical_frag:zx,meshtoon_vert:kx,meshtoon_frag:Hx,points_vert:Gx,points_frag:Vx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},Rt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},_i={basic:{uniforms:En([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:En([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new te(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:En([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:En([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:En([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new te(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:En([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:En([Rt.points,Rt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:En([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:En([Rt.common,Rt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:En([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:En([Rt.sprite,Rt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:En([Rt.common,Rt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:En([Rt.lights,Rt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};_i.physical={uniforms:En([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const _c={r:0,b:0,g:0},Er=new Si,Zx=new Re;function Jx(i,t,e,n,r,s,o){const a=new te(0);let l=s===!0?0:1,u,h,d=null,f=0,p=null;function x(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?e:t).get(w)),w}function M(A){let w=!1;const F=x(A);F===null?m(a,l):F&&F.isColor&&(m(F,1),w=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(A,w){const F=x(w);F&&(F.isCubeTexture||F.mapping===Lc)?(h===void 0&&(h=new bt(new ue(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Is(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Er.copy(w.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),h.material.uniforms.envMap.value=F,h.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(Er)),h.material.toneMapped=we.getTransfer(F.colorSpace)!==De,(d!==F||f!==F.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=F,f=F.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(u===void 0&&(u=new bt(new on(2,2),new bn({name:"BackgroundMaterial",uniforms:Is(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=F,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.toneMapped=we.getTransfer(F.colorSpace)!==De,F.matrixAutoUpdate===!0&&F.updateMatrix(),u.material.uniforms.uvTransform.value.copy(F.matrix),(d!==F||f!==F.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=F,f=F.version,p=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function m(A,w){A.getRGB(_c,wp(i)),n.buffers.color.setClear(_c.r,_c.g,_c.b,w,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),l=w,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:M,addToRenderList:_,dispose:R}}function $x(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(y,U,V,X,$){let tt=!1;const j=d(X,V,U);s!==j&&(s=j,u(s.object)),tt=p(y,X,V,$),tt&&x(y,X,V,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,w(y,U,V,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,U,V){const X=V.wireframe===!0;let $=n[y.id];$===void 0&&($={},n[y.id]=$);let tt=$[U.id];tt===void 0&&(tt={},$[U.id]=tt);let j=tt[X];return j===void 0&&(j=f(l()),tt[X]=j),j}function f(y){const U=[],V=[],X=[];for(let $=0;$<e;$++)U[$]=0,V[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:X,object:y,attributes:{},index:null}}function p(y,U,V,X){const $=s.attributes,tt=U.attributes;let j=0;const ht=V.getAttributes();for(const Z in ht)if(ht[Z].location>=0){const Pt=$[Z];let Ot=tt[Z];if(Ot===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Ot=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Ot=y.instanceColor)),Pt===void 0||Pt.attribute!==Ot||Ot&&Pt.data!==Ot.data)return!0;j++}return s.attributesNum!==j||s.index!==X}function x(y,U,V,X){const $={},tt=U.attributes;let j=0;const ht=V.getAttributes();for(const Z in ht)if(ht[Z].location>=0){let Pt=tt[Z];Pt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Pt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Pt=y.instanceColor));const Ot={};Ot.attribute=Pt,Pt&&Pt.data&&(Ot.data=Pt.data),$[Z]=Ot,j++}s.attributes=$,s.attributesNum=j,s.index=X}function M(){const y=s.newAttributes;for(let U=0,V=y.length;U<V;U++)y[U]=0}function _(y){m(y,0)}function m(y,U){const V=s.newAttributes,X=s.enabledAttributes,$=s.attributeDivisors;V[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),$[y]!==U&&(i.vertexAttribDivisor(y,U),$[y]=U)}function R(){const y=s.newAttributes,U=s.enabledAttributes;for(let V=0,X=U.length;V<X;V++)U[V]!==y[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function A(y,U,V,X,$,tt,j){j===!0?i.vertexAttribIPointer(y,U,V,$,tt):i.vertexAttribPointer(y,U,V,X,$,tt)}function w(y,U,V,X){M();const $=X.attributes,tt=V.getAttributes(),j=U.defaultAttributeValues;for(const ht in tt){const Z=tt[ht];if(Z.location>=0){let gt=$[ht];if(gt===void 0&&(ht==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),ht==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){const Pt=gt.normalized,Ot=gt.itemSize,ne=t.get(gt);if(ne===void 0)continue;const ee=ne.buffer,pe=ne.type,oe=ne.bytesPerElement,nt=pe===i.INT||pe===i.UNSIGNED_INT||gt.gpuType===ju;if(gt.isInterleavedBufferAttribute){const ut=gt.data,Et=ut.stride,Lt=gt.offset;if(ut.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Z.locationSize;Nt++)m(Z.location+Nt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Nt=0;Nt<Z.locationSize;Nt++)_(Z.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Nt=0;Nt<Z.locationSize;Nt++)A(Z.location+Nt,Ot/Z.locationSize,pe,Pt,Et*oe,(Lt+Ot/Z.locationSize*Nt)*oe,nt)}else{if(gt.isInstancedBufferAttribute){for(let ut=0;ut<Z.locationSize;ut++)m(Z.location+ut,gt.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ut=0;ut<Z.locationSize;ut++)_(Z.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ut=0;ut<Z.locationSize;ut++)A(Z.location+ut,Ot/Z.locationSize,pe,Pt,Ot*oe,Ot/Z.locationSize*ut*oe,nt)}}else if(j!==void 0){const Pt=j[ht];if(Pt!==void 0)switch(Pt.length){case 2:i.vertexAttrib2fv(Z.location,Pt);break;case 3:i.vertexAttrib3fv(Z.location,Pt);break;case 4:i.vertexAttrib4fv(Z.location,Pt);break;default:i.vertexAttrib1fv(Z.location,Pt)}}}}R()}function F(){D();for(const y in n){const U=n[y];for(const V in U){const X=U[V];for(const $ in X)h(X[$].object),delete X[$];delete U[V]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const U=n[y.id];for(const V in U){const X=U[V];for(const $ in X)h(X[$].object),delete X[$];delete U[V]}delete n[y.id]}function I(y){for(const U in n){const V=n[U];if(V[y.id]===void 0)continue;const X=V[y.id];for(const $ in X)h(X[$].object),delete X[$];delete V[y.id]}}function D(){v(),o=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:v,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:_,disableUnusedAttributes:R}}function Kx(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function a(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];e.update(p,n,1)}function l(u,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)o(u[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let x=0;for(let M=0;M<d;M++)x+=h[M]*f[M];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==ti&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==yi&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==xi&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=x>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:w,vertexTextures:F,maxSamples:P}}function Qx(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Ar,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,M=d.clipIntersection,_=d.clipShadows,m=i.get(d);if(!r||x===null||x.length===0||s&&!_)s?h(null):u();else{const R=s?0:n,A=R*4;let w=m.clippingState||null;l.value=w,w=h(x,f,A,p);for(let F=0;F!==A;++F)w[F]=e[F];m.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,x){const M=d!==null?d.length:0;let _=null;if(M!==0){if(_=l.value,x!==!0||_===null){const m=p+M*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<m)&&(_=new Float32Array(m));for(let A=0,w=p;A!==M;++A,w+=4)o.copy(d[A]).applyMatrix4(R,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}function t1(i){let t=new WeakMap;function e(o,a){return a===du?o.mapping=Ps:a===pu&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===du||a===pu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new vg(l.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ts=4,Dd=[.125,.215,.35,.446,.526,.582],Ir=20,Kl=new mh,Id=new te;let jl=null,Ql=0,tu=0,eu=!1;const Rr=(1+Math.sqrt(5))/2,_s=1/Rr,Ud=[new b(-Rr,_s,0),new b(Rr,_s,0),new b(-_s,0,Rr),new b(_s,0,Rr),new b(0,Rr,-_s),new b(0,Rr,_s),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],e1=new b;class Nd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=e1}=s;jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jl,Ql,tu),this._renderer.xr.enabled=eu,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Zo,format:ti,colorSpace:Ds,depthBuffer:!1},r=Fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n1(s)),this._blurMaterial=i1(s,t,e)}return r}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Kl)}_sceneToCubeUV(t,e,n,r,s){const l=new Vn(90,1,e,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Id),d.toneMapping=nr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const M=new mi({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),_=new bt(new ue,M);let m=!1;const R=t.background;R?R.isColor&&(M.color.copy(R),t.background=null,m=!0):(M.color.copy(Id),m=!0);for(let A=0;A<6;A++){const w=A%3;w===0?(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):w===1?(l.up.set(0,0,u[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const F=this._cubeSize;vc(r,w*F,A>2?F:0,F,F),d.setRenderTarget(r),m&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ps||t.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;vc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Kl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ud[(r-s-1)%Ud.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new bt(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),M=s/x,_=isFinite(s)?1+Math.floor(h*M):Ir;_>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ir}`);const m=[];let R=0;for(let I=0;I<Ir;++I){const D=I/M,v=Math.exp(-D*D/2);m.push(v),I===0?R+=v:I<_&&(R+=2*v)}for(let I=0;I<m.length;I++)m[I]=m[I]/R;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=x,f.mipInt.value=A-n;const w=this._sizeLods[r],F=3*w*(r>A-Ts?r-A+Ts:0),P=4*(this._cubeSize-w);vc(e,F,P,3*w,2*w),l.setRenderTarget(e),l.render(d,Kl)}}function n1(i){const t=[],e=[],n=[];let r=i;const s=i-Ts+1+Dd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ts?l=Dd[o-i+Ts-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,M=3,_=2,m=1,R=new Float32Array(M*x*p),A=new Float32Array(_*x*p),w=new Float32Array(m*x*p);for(let P=0;P<p;P++){const I=P%3*2/3-1,D=P>2?0:-1,v=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];R.set(v,M*x*P),A.set(f,_*x*P);const y=[P,P,P,P,P,P];w.set(y,m*x*P)}const F=new Te;F.setAttribute("position",new Xn(R,M)),F.setAttribute("uv",new Xn(A,_)),F.setAttribute("faceIndex",new Xn(w,m)),t.push(F),r>Ts&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fd(i,t,e){const n=new ir(i,t,e);return n.texture.mapping=Lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vc(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function i1(i,t,e){const n=new Float32Array(Ir),r=new b(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Od(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Bd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function r1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===du||l===pu,h=l===Ps||l===Ls;if(u||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Nd(i)),d=u?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Nd(i)),d=u?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function s1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Wo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function o1(i,t,e,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,x=d.attributes.position;let M=0;if(p!==null){const R=p.array;M=p.version;for(let A=0,w=R.length;A<w;A+=3){const F=R[A+0],P=R[A+1],I=R[A+2];f.push(F,P,P,I,I,F)}}else if(x!==void 0){const R=x.array;M=x.version;for(let A=0,w=R.length/3-1;A<w;A+=3){const F=A+0,P=A+1,I=A+2;f.push(F,P,P,I,I,F)}}else return;const _=new(vp(f)?Sp:yp)(f,1);_.version=M;const m=s.get(d);m&&t.remove(m),s.set(d,_)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function a1(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),e.update(p,n,1)}function u(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,f*o,x),e.update(p,n,x))}function h(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,x);let _=0;for(let m=0;m<x;m++)_+=p[m];e.update(_,n,1)}function d(f,p,x,M){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)u(f[m]/o,p[m],M[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,M,0,x);let m=0;for(let R=0;R<x;R++)m+=p[R]*M[R];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function c1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function l1(i,t,e){const n=new WeakMap,r=new Ie;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let v=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let A=0;p===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let w=a.attributes.position.count*A,F=1;w>t.maxTextureSize&&(F=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*F*4*d),I=new xp(P,w,F,d);I.type=xi,I.needsUpdate=!0;const D=A*4;for(let y=0;y<d;y++){const U=_[y],V=m[y],X=R[y],$=w*F*4*y;for(let tt=0;tt<U.count;tt++){const j=tt*D;p===!0&&(r.fromBufferAttribute(U,tt),P[$+j+0]=r.x,P[$+j+1]=r.y,P[$+j+2]=r.z,P[$+j+3]=0),x===!0&&(r.fromBufferAttribute(V,tt),P[$+j+4]=r.x,P[$+j+5]=r.y,P[$+j+6]=r.z,P[$+j+7]=0),M===!0&&(r.fromBufferAttribute(X,tt),P[$+j+8]=r.x,P[$+j+9]=r.y,P[$+j+10]=r.z,P[$+j+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new pt(w,F)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let M=0;M<u.length;M++)p+=u[M];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function u1(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const kp=new xn,zd=new Ap(1,1),Hp=new xp,Gp=new eg,Vp=new Tp,kd=[],Hd=[],Gd=new Float32Array(16),Vd=new Float32Array(9),Wd=new Float32Array(4);function Os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=kd[r];if(s===void 0&&(s=new Float32Array(r),kd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ic(i,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function f1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function d1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function p1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function m1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Wd.set(n),i.uniformMatrix2fv(this.addr,!1,Wd),en(e,n)}}function g1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Vd.set(n),i.uniformMatrix3fv(this.addr,!1,Vd),en(e,n)}}function _1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),en(e,n)}}function v1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function M1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function y1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function S1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function w1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function E1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function T1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function b1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=_p,s=zd):s=kp,e.setTexture2D(t||s,r)}function A1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gp,r)}function R1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Vp,r)}function C1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Hp,r)}function P1(i){switch(i){case 5126:return h1;case 35664:return f1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return M1;case 35669:case 35673:return y1;case 5125:return S1;case 36294:return w1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}function L1(i,t){i.uniform1fv(this.addr,t)}function D1(i,t){const e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function I1(i,t){const e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function U1(i,t){const e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function N1(i,t){const e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function F1(i,t){const e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function O1(i,t){const e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function B1(i,t){i.uniform1iv(this.addr,t)}function z1(i,t){i.uniform2iv(this.addr,t)}function k1(i,t){i.uniform3iv(this.addr,t)}function H1(i,t){i.uniform4iv(this.addr,t)}function G1(i,t){i.uniform1uiv(this.addr,t)}function V1(i,t){i.uniform2uiv(this.addr,t)}function W1(i,t){i.uniform3uiv(this.addr,t)}function X1(i,t){i.uniform4uiv(this.addr,t)}function q1(i,t,e){const n=this.cache,r=t.length,s=Ic(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||kp,s[o])}function Y1(i,t,e){const n=this.cache,r=t.length,s=Ic(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Gp,s[o])}function Z1(i,t,e){const n=this.cache,r=t.length,s=Ic(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Vp,s[o])}function J1(i,t,e){const n=this.cache,r=t.length,s=Ic(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Hp,s[o])}function $1(i){switch(i){case 5126:return L1;case 35664:return D1;case 35665:return I1;case 35666:return U1;case 35674:return N1;case 35675:return F1;case 35676:return O1;case 5124:case 35670:return B1;case 35667:case 35671:return z1;case 35668:case 35672:return k1;case 35669:case 35673:return H1;case 5125:return G1;case 36294:return V1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return J1}}class K1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P1(e.type)}}class j1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$1(e.type)}}class Q1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function Xd(i,t){i.seq.push(t),i.map[t.id]=t}function tM(i,t,e){const n=i.name,r=n.length;for(nu.lastIndex=0;;){const s=nu.exec(n),o=nu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Xd(e,u===void 0?new K1(a,i,t):new j1(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Q1(a),Xd(e,d)),e=d}}}class Tc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);tM(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function qd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const eM=37297;let nM=0;function iM(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yd=new ce;function rM(i){we._getMatrix(Yd,we.workingColorSpace,i);const t=`mat3( ${Yd.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case bc:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+iM(i.getShaderSource(t),a)}else return s}function sM(i,t){const e=rM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oM(i,t){let e;switch(t){case gm:e="Linear";break;case _m:e="Reinhard";break;case vm:e="Cineon";break;case op:e="ACESFilmic";break;case Mm:e="AgX";break;case ym:e="Neutral";break;case xm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xc=new b;function aM(){we.getLuminanceCoefficients(xc);const i=xc.x.toFixed(4),t=xc.y.toFixed(4),e=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function lM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Uo(i){return i!==""}function Jd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $d(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(hM,dM)}const fM=new Map;function dM(i,t){let e=he[t];if(e===void 0){const n=fM.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $u(e)}const pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(pM,mM)}function mM(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ip?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function _M(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:t="ENVMAP_TYPE_CUBE";break;case Lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vM(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ls&&(t="ENVMAP_MODE_REFRACTION"),t}function xM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sp:t="ENVMAP_BLENDING_MULTIPLY";break;case pm:t="ENVMAP_BLENDING_MIX";break;case mm:t="ENVMAP_BLENDING_ADD";break}return t}function MM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yM(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gM(e),u=_M(e),h=vM(e),d=xM(e),f=MM(e),p=cM(e),x=lM(s),M=r.createProgram();let _,m,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Uo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Uo).join(`
`),m.length>0&&(m+=`
`)):(_=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),m=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nr?"#define TONE_MAPPING":"",e.toneMapping!==nr?he.tonemapping_pars_fragment:"",e.toneMapping!==nr?oM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,sM("linearToOutputTexel",e.outputColorSpace),aM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Uo).join(`
`)),o=$u(o),o=Jd(o,e),o=$d(o,e),a=$u(a),a=Jd(a,e),a=$d(a,e),o=Kd(o),a=Kd(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=R+_+o,w=R+m+a,F=qd(r,r.VERTEX_SHADER,A),P=qd(r,r.FRAGMENT_SHADER,w);r.attachShader(M,F),r.attachShader(M,P),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(U){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(F)||"",$=r.getShaderInfoLog(P)||"",tt=V.trim(),j=X.trim(),ht=$.trim();let Z=!0,gt=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,F,P);else{const Pt=Zd(r,F,"vertex"),Ot=Zd(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+tt+`
`+Pt+`
`+Ot)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(j===""||ht==="")&&(gt=!1);gt&&(U.diagnostics={runnable:Z,programLog:tt,vertexShader:{log:j,prefix:_},fragmentShader:{log:ht,prefix:m}})}r.deleteShader(F),r.deleteShader(P),D=new Tc(r,M),v=uM(r,M)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,eM)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=P,this}let SM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new EM(t),e.set(t,n)),n}}class EM{constructor(t){this.id=SM++,this.code=t,this.usedTimes=0}}function TM(i,t,e,n,r,s,o){const a=new ah,l=new wM,u=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return u.add(v),v===0?"uv":`uv${v}`}function _(v,y,U,V,X){const $=V.fog,tt=X.geometry,j=v.isMeshStandardMaterial?V.environment:null,ht=(v.isMeshStandardMaterial?e:t).get(v.envMap||j),Z=ht&&ht.mapping===Lc?ht.image.height:null,gt=x[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const Pt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ot=Pt!==void 0?Pt.length:0;let ne=0;tt.morphAttributes.position!==void 0&&(ne=1),tt.morphAttributes.normal!==void 0&&(ne=2),tt.morphAttributes.color!==void 0&&(ne=3);let ee,pe,oe,nt;if(gt){const jt=_i[gt];ee=jt.vertexShader,pe=jt.fragmentShader}else ee=v.vertexShader,pe=v.fragmentShader,l.update(v),oe=l.getVertexShaderID(v),nt=l.getFragmentShaderID(v);const ut=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Lt=X.isInstancedMesh===!0,Nt=X.isBatchedMesh===!0,re=!!v.map,Ee=!!v.matcap,N=!!ht,at=!!v.aoMap,it=!!v.lightMap,et=!!v.bumpMap,K=!!v.normalMap,wt=!!v.displacementMap,ft=!!v.emissiveMap,St=!!v.metalnessMap,ie=!!v.roughnessMap,Zt=v.anisotropy>0,C=v.clearcoat>0,S=v.dispersion>0,G=v.iridescence>0,J=v.sheen>0,ct=v.transmission>0,Q=Zt&&!!v.anisotropyMap,kt=C&&!!v.clearcoatMap,Mt=C&&!!v.clearcoatNormalMap,zt=C&&!!v.clearcoatRoughnessMap,Ht=G&&!!v.iridescenceMap,_t=G&&!!v.iridescenceThicknessMap,Ct=J&&!!v.sheenColorMap,yt=J&&!!v.sheenRoughnessMap,Ut=!!v.specularMap,Tt=!!v.specularColorMap,Jt=!!v.specularIntensityMap,O=ct&&!!v.transmissionMap,lt=ct&&!!v.thicknessMap,xt=!!v.gradientMap,It=!!v.alphaMap,mt=v.alphaTest>0,st=!!v.alphaHash,Ft=!!v.extensions;let $t=nr;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&($t=i.toneMapping);const se={shaderID:gt,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:pe,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&X._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&X.instanceColor!==null,instancingMorph:Lt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ds,alphaToCoverage:!!v.alphaToCoverage,map:re,matcap:Ee,envMap:N,envMapMode:N&&ht.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:it,bumpMap:et,normalMap:K,displacementMap:f&&wt,emissiveMap:ft,normalMapObjectSpace:K&&v.normalMapType===Em,normalMapTangentSpace:K&&v.normalMapType===gp,metalnessMap:St,roughnessMap:ie,anisotropy:Zt,anisotropyMap:Q,clearcoat:C,clearcoatMap:kt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:zt,dispersion:S,iridescence:G,iridescenceMap:Ht,iridescenceThicknessMap:_t,sheen:J,sheenColorMap:Ct,sheenRoughnessMap:yt,specularMap:Ut,specularColorMap:Tt,specularIntensityMap:Jt,transmission:ct,transmissionMap:O,thicknessMap:lt,gradientMap:xt,opaque:v.transparent===!1&&v.blending===bs&&v.alphaToCoverage===!1,alphaMap:It,alphaTest:mt,alphaHash:st,combine:v.combine,mapUv:re&&M(v.map.channel),aoMapUv:at&&M(v.aoMap.channel),lightMapUv:it&&M(v.lightMap.channel),bumpMapUv:et&&M(v.bumpMap.channel),normalMapUv:K&&M(v.normalMap.channel),displacementMapUv:wt&&M(v.displacementMap.channel),emissiveMapUv:ft&&M(v.emissiveMap.channel),metalnessMapUv:St&&M(v.metalnessMap.channel),roughnessMapUv:ie&&M(v.roughnessMap.channel),anisotropyMapUv:Q&&M(v.anisotropyMap.channel),clearcoatMapUv:kt&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&M(v.sheenRoughnessMap.channel),specularMapUv:Ut&&M(v.specularMap.channel),specularColorMapUv:Tt&&M(v.specularColorMap.channel),specularIntensityMapUv:Jt&&M(v.specularIntensityMap.channel),transmissionMapUv:O&&M(v.transmissionMap.channel),thicknessMapUv:lt&&M(v.thicknessMap.channel),alphaMapUv:It&&M(v.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(K||Zt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!tt.attributes.uv&&(re||It),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:X.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:re&&v.map.isVideoTexture===!0&&we.getTransfer(v.map.colorSpace)===De,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&we.getTransfer(v.emissiveMap.colorSpace)===De,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vn,flipSided:v.side===An,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ft&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&v.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=u.has(1),se.vertexUv2s=u.has(2),se.vertexUv3s=u.has(3),u.clear(),se}function m(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)y.push(U),y.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(R(y,v),A(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function R(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function A(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function w(v){const y=x[v.type];let U;if(y){const V=_i[y];U=pg.clone(V.uniforms)}else U=v.uniforms;return U}function F(v,y){let U;for(let V=0,X=h.length;V<X;V++){const $=h[V];if($.cacheKey===y){U=$,++U.usedTimes;break}}return U===void 0&&(U=new yM(i,y,v,s),h.push(U)),U}function P(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:F,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:D}}function bM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function AM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tp(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,f,p,x,M,_){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:M,group:_},i[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=M,m.group=_),t++,m}function a(d,f,p,x,M,_){const m=o(d,f,p,x,M,_);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):e.push(m)}function l(d,f,p,x,M,_){const m=o(d,f,p,x,M,_);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function u(d,f){e.length>1&&e.sort(d||AM),n.length>1&&n.sort(f||Qd),r.length>1&&r.sort(f||Qd)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function RM(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new tp,i.set(n,[o])):r>=s.length?(o=new tp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function CM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new te};break;case"SpotLight":e={position:new b,direction:new b,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function PM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let LM=0;function DM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function IM(i){const t=new CM,e=PM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new b);const r=new b,s=new Re,o=new Re;function a(u){let h=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,x=0,M=0,_=0,m=0,R=0,A=0,w=0,F=0,P=0,I=0;u.sort(DM);for(let v=0,y=u.length;v<y;v++){const U=u[v],V=U.color,X=U.intensity,$=U.distance,tt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=V.r*X,d+=V.g*X,f+=V.b*X;else if(U.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(U.sh.coefficients[j],X);I++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ht=U.shadow,Z=e.get(U);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=U.shadow.matrix,R++}n.directional[p]=j,p++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(V).multiplyScalar(X),j.distance=$,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,n.spot[M]=j;const ht=U.shadow;if(U.map&&(n.spotLightMap[F]=U.map,F++,ht.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[M]=ht.matrix,U.castShadow){const Z=e.get(U);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.spotShadow[M]=Z,n.spotShadowMap[M]=tt,w++}M++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(V).multiplyScalar(X),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),n.rectArea[_]=j,_++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const ht=U.shadow,Z=e.get(U);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,Z.shadowCameraNear=ht.camera.near,Z.shadowCameraFar=ht.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=tt,n.pointShadowMatrix[x]=U.shadow.matrix,A++}n.point[x]=j,x++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(X),j.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[m]=j,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==M||D.rectAreaLength!==_||D.hemiLength!==m||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==w||D.numSpotMaps!==F||D.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=_,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=w+F-P,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,D.directionalLength=p,D.pointLength=x,D.spotLength=M,D.rectAreaLength=_,D.hemiLength=m,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=w,D.numSpotMaps=F,D.numLightProbes=I,n.version=LM++)}function l(u,h){let d=0,f=0,p=0,x=0,M=0;const _=h.matrixWorldInverse;for(let m=0,R=u.length;m<R;m++){const A=u[m];if(A.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),d++}else if(A.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),p++}else if(A.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),o.identity(),s.copy(A.matrixWorld),s.premultiply(_),o.extractRotation(s),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),f++}else if(A.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(_),M++}}}return{setup:a,setupView:l,state:n}}function ep(i){const t=new IM(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function UM(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new ep(i),t.set(r,[a])):s>=o.length?(a=new ep(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`;function OM(i,t,e){let n=new lh;const r=new pt,s=new pt,o=new Ie,a=new Op({depthPacking:mp}),l=new o_,u={},h=e.maxTextureSize,d={[Fi]:An,[An]:Fi,[vn]:vn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:NM,fragmentShader:FM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Te;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bt(x,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ip;let m=this.type;this.render=function(P,I,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const v=i.getRenderTarget(),y=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(er),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=m!==Ui&&this.type===Ui,$=m===Ui&&this.type!==Ui;for(let tt=0,j=P.length;tt<j;tt++){const ht=P[tt],Z=ht.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const gt=Z.getFrameExtents();if(r.multiply(gt),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/gt.x),r.x=s.x*gt.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/gt.y),r.y=s.y*gt.y,Z.mapSize.y=s.y)),Z.map===null||X===!0||$===!0){const Ot=this.type!==Ui?{minFilter:Bn,magFilter:Bn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ir(r.x,r.y,Ot),Z.map.texture.name=ht.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const Pt=Z.getViewportCount();for(let Ot=0;Ot<Pt;Ot++){const ne=Z.getViewport(Ot);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),V.viewport(o),Z.updateMatrices(ht,Ot),n=Z.getFrustum(),w(I,D,Z.camera,ht,this.type)}Z.isPointLightShadow!==!0&&this.type===Ui&&R(Z,D),Z.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(v,y,U)};function R(P,I){const D=t.update(M);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ir(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,D,f,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,D,p,M,null)}function A(P,I,D,v){let y=null;const U=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)y=U;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=y.uuid,X=I.uuid;let $=u[V];$===void 0&&($={},u[V]=$);let tt=$[X];tt===void 0&&(tt=y.clone(),$[X]=tt,I.addEventListener("dispose",F)),y=tt}if(y.visible=I.visible,y.wireframe=I.wireframe,v===Ui?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:d[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=D}return y}function w(P,I,D,v,y){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Ui)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const X=t.update(P),$=P.material;if(Array.isArray($)){const tt=X.groups;for(let j=0,ht=tt.length;j<ht;j++){const Z=tt[j],gt=$[Z.materialIndex];if(gt&&gt.visible){const Pt=A(P,gt,v,y);P.onBeforeShadow(i,P,I,D,X,Pt,Z),i.renderBufferDirect(D,null,X,Pt,P,Z),P.onAfterShadow(i,P,I,D,X,Pt,Z)}}}else if($.visible){const tt=A(P,$,v,y);P.onBeforeShadow(i,P,I,D,X,tt,null),i.renderBufferDirect(D,null,X,tt,P,null),P.onAfterShadow(i,P,I,D,X,tt,null)}}const V=P.children;for(let X=0,$=V.length;X<$;X++)w(V[X],I,D,v,y)}function F(P){P.target.removeEventListener("dispose",F);for(const D in u){const v=u[D],y=P.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const BM={[ou]:au,[cu]:hu,[lu]:fu,[Cs]:uu,[au]:ou,[hu]:cu,[fu]:lu,[uu]:Cs};function zM(i,t){function e(){let O=!1;const lt=new Ie;let xt=null;const It=new Ie(0,0,0,0);return{setMask:function(mt){xt!==mt&&!O&&(i.colorMask(mt,mt,mt,mt),xt=mt)},setLocked:function(mt){O=mt},setClear:function(mt,st,Ft,$t,se){se===!0&&(mt*=$t,st*=$t,Ft*=$t),lt.set(mt,st,Ft,$t),It.equals(lt)===!1&&(i.clearColor(mt,st,Ft,$t),It.copy(lt))},reset:function(){O=!1,xt=null,It.set(-1,0,0,0)}}}function n(){let O=!1,lt=!1,xt=null,It=null,mt=null;return{setReversed:function(st){if(lt!==st){const Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),lt=st;const $t=mt;mt=null,this.setClear($t)}},getReversed:function(){return lt},setTest:function(st){st?ut(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(st){xt!==st&&!O&&(i.depthMask(st),xt=st)},setFunc:function(st){if(lt&&(st=BM[st]),It!==st){switch(st){case ou:i.depthFunc(i.NEVER);break;case au:i.depthFunc(i.ALWAYS);break;case cu:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case lu:i.depthFunc(i.EQUAL);break;case uu:i.depthFunc(i.GEQUAL);break;case hu:i.depthFunc(i.GREATER);break;case fu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=st}},setLocked:function(st){O=st},setClear:function(st){mt!==st&&(lt&&(st=1-st),i.clearDepth(st),mt=st)},reset:function(){O=!1,xt=null,It=null,mt=null,lt=!1}}}function r(){let O=!1,lt=null,xt=null,It=null,mt=null,st=null,Ft=null,$t=null,se=null;return{setTest:function(jt){O||(jt?ut(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(jt){lt!==jt&&!O&&(i.stencilMask(jt),lt=jt)},setFunc:function(jt,Rn,Mn){(xt!==jt||It!==Rn||mt!==Mn)&&(i.stencilFunc(jt,Rn,Mn),xt=jt,It=Rn,mt=Mn)},setOp:function(jt,Rn,Mn){(st!==jt||Ft!==Rn||$t!==Mn)&&(i.stencilOp(jt,Rn,Mn),st=jt,Ft=Rn,$t=Mn)},setLocked:function(jt){O=jt},setClear:function(jt){se!==jt&&(i.clearStencil(jt),se=jt)},reset:function(){O=!1,lt=null,xt=null,It=null,mt=null,st=null,Ft=null,$t=null,se=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,p=[],x=null,M=!1,_=null,m=null,R=null,A=null,w=null,F=null,P=null,I=new te(0,0,0),D=0,v=!1,y=null,U=null,V=null,X=null,$=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ht=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=ht>=1):Z.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=ht>=2);let gt=null,Pt={};const Ot=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ee=new Ie().fromArray(Ot),pe=new Ie().fromArray(ne);function oe(O,lt,xt,It){const mt=new Uint8Array(4),st=i.createTexture();i.bindTexture(O,st),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<xt;Ft++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(lt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return st}const nt={};nt[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(Cs),et(!1),K(kf),ut(i.CULL_FACE),at(er);function ut(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Et(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Lt(O,lt){return d[O]!==lt?(i.bindFramebuffer(O,lt),d[O]=lt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Nt(O,lt){let xt=p,It=!1;if(O){xt=f.get(lt),xt===void 0&&(xt=[],f.set(lt,xt));const mt=O.textures;if(xt.length!==mt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ft=mt.length;st<Ft;st++)xt[st]=i.COLOR_ATTACHMENT0+st;xt.length=mt.length,It=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,It=!0);It&&i.drawBuffers(xt)}function re(O){return x!==O?(i.useProgram(O),x=O,!0):!1}const Ee={[Cr]:i.FUNC_ADD,[K0]:i.FUNC_SUBTRACT,[j0]:i.FUNC_REVERSE_SUBTRACT};Ee[Q0]=i.MIN,Ee[tm]=i.MAX;const N={[em]:i.ZERO,[nm]:i.ONE,[im]:i.SRC_COLOR,[ru]:i.SRC_ALPHA,[lm]:i.SRC_ALPHA_SATURATE,[am]:i.DST_COLOR,[sm]:i.DST_ALPHA,[rm]:i.ONE_MINUS_SRC_COLOR,[su]:i.ONE_MINUS_SRC_ALPHA,[cm]:i.ONE_MINUS_DST_COLOR,[om]:i.ONE_MINUS_DST_ALPHA,[um]:i.CONSTANT_COLOR,[hm]:i.ONE_MINUS_CONSTANT_COLOR,[fm]:i.CONSTANT_ALPHA,[dm]:i.ONE_MINUS_CONSTANT_ALPHA};function at(O,lt,xt,It,mt,st,Ft,$t,se,jt){if(O===er){M===!0&&(Et(i.BLEND),M=!1);return}if(M===!1&&(ut(i.BLEND),M=!0),O!==$0){if(O!==_||jt!==v){if((m!==Cr||w!==Cr)&&(i.blendEquation(i.FUNC_ADD),m=Cr,w=Cr),jt)switch(O){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,A=null,F=null,P=null,I.set(0,0,0),D=0,_=O,v=jt}return}mt=mt||lt,st=st||xt,Ft=Ft||It,(lt!==m||mt!==w)&&(i.blendEquationSeparate(Ee[lt],Ee[mt]),m=lt,w=mt),(xt!==R||It!==A||st!==F||Ft!==P)&&(i.blendFuncSeparate(N[xt],N[It],N[st],N[Ft]),R=xt,A=It,F=st,P=Ft),($t.equals(I)===!1||se!==D)&&(i.blendColor($t.r,$t.g,$t.b,se),I.copy($t),D=se),_=O,v=!1}function it(O,lt){O.side===vn?Et(i.CULL_FACE):ut(i.CULL_FACE);let xt=O.side===An;lt&&(xt=!xt),et(xt),O.blending===bs&&O.transparent===!1?at(er):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const It=O.stencilWrite;a.setTest(It),It&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function K(O){O!==Z0?(ut(i.CULL_FACE),O!==U&&(O===kf?i.cullFace(i.BACK):O===J0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),U=O}function wt(O){O!==V&&(j&&i.lineWidth(O),V=O)}function ft(O,lt,xt){O?(ut(i.POLYGON_OFFSET_FILL),(X!==lt||$!==xt)&&(i.polygonOffset(lt,xt),X=lt,$=xt)):Et(i.POLYGON_OFFSET_FILL)}function St(O){O?ut(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function ie(O){O===void 0&&(O=i.TEXTURE0+tt-1),gt!==O&&(i.activeTexture(O),gt=O)}function Zt(O,lt,xt){xt===void 0&&(gt===null?xt=i.TEXTURE0+tt-1:xt=gt);let It=Pt[xt];It===void 0&&(It={type:void 0,texture:void 0},Pt[xt]=It),(It.type!==O||It.texture!==lt)&&(gt!==xt&&(i.activeTexture(xt),gt=xt),i.bindTexture(O,lt||nt[O]),It.type=O,It.texture=lt)}function C(){const O=Pt[gt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(O){ee.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ee.copy(O))}function yt(O){pe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),pe.copy(O))}function Ut(O,lt){let xt=u.get(lt);xt===void 0&&(xt=new WeakMap,u.set(lt,xt));let It=xt.get(O);It===void 0&&(It=i.getUniformBlockIndex(lt,O.name),xt.set(O,It))}function Tt(O,lt){const It=u.get(lt).get(O);l.get(lt)!==It&&(i.uniformBlockBinding(lt,It,O.__bindingPointIndex),l.set(lt,It))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},gt=null,Pt={},d={},f=new WeakMap,p=[],x=null,M=!1,_=null,m=null,R=null,A=null,w=null,F=null,P=null,I=new te(0,0,0),D=0,v=!1,y=null,U=null,V=null,X=null,$=null,ee.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:Et,bindFramebuffer:Lt,drawBuffers:Nt,useProgram:re,setBlending:at,setMaterial:it,setFlipSided:et,setCullFace:K,setLineWidth:wt,setPolygonOffset:ft,setScissorTest:St,activeTexture:ie,bindTexture:Zt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ht,texImage3D:_t,updateUBOMapping:Ut,uniformBlockBinding:Tt,texStorage2D:Mt,texStorage3D:zt,texSubImage2D:J,texSubImage3D:ct,compressedTexSubImage2D:Q,compressedTexSubImage3D:kt,scissor:Ct,viewport:yt,reset:Jt}}function kM(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return p?new OffscreenCanvas(C,S):Rc("canvas")}function M(C,S,G){let J=1;const ct=Zt(C);if((ct.width>G||ct.height>G)&&(J=G/Math.max(ct.width,ct.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(J*ct.width),kt=Math.floor(J*ct.height);d===void 0&&(d=x(Q,kt));const Mt=S?x(Q,kt):d;return Mt.width=Q,Mt.height=kt,Mt.getContext("2d").drawImage(C,0,0,Q,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Q+"x"+kt+")."),Mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function _(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,S,G,J,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=S;if(S===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),S===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),S===i.RGBA){const kt=ct?bc:we.getTransfer(J);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=kt===De?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(C,S){let G;return C?S===null||S===Fr||S===ko?G=i.DEPTH24_STENCIL8:S===xi?G=i.DEPTH32F_STENCIL8:S===zo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fr||S===ko?G=i.DEPTH_COMPONENT24:S===xi?G=i.DEPTH_COMPONENT32F:S===zo&&(G=i.DEPTH_COMPONENT16),G}function F(C,S){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==vi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),D(S),S.isVideoTexture&&h.delete(S)}function I(C){const S=C.target;S.removeEventListener("dispose",I),y(S)}function D(C){const S=n.get(C);if(S.__webglInit===void 0)return;const G=C.source,J=f.get(G);if(J){const ct=J[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&v(C),Object.keys(J).length===0&&f.delete(G)}n.remove(C)}function v(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const G=C.source,J=f.get(G);delete J[S.__cacheKey],o.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ct=0;ct<S.__webglFramebuffer[J].length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[J][ct]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let J=0,ct=G.length;J<ct;J++){const Q=n.get(G[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(C)}let U=0;function V(){U=0}function X(){const C=U;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function $(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function tt(C,S){const G=n.get(C);if(C.isVideoTexture&&St(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(G,C,S);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function j(C,S){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){nt(G,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function ht(C,S){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){nt(G,C,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function Z(C,S){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ut(G,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const gt={[mu]:i.REPEAT,[Ur]:i.CLAMP_TO_EDGE,[gu]:i.MIRRORED_REPEAT},Pt={[Bn]:i.NEAREST,[Sm]:i.NEAREST_MIPMAP_NEAREST,[Ha]:i.NEAREST_MIPMAP_LINEAR,[vi]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[Nr]:i.LINEAR_MIPMAP_LINEAR},Ot={[Tm]:i.NEVER,[Lm]:i.ALWAYS,[bm]:i.LESS,[_p]:i.LEQUAL,[Am]:i.EQUAL,[Pm]:i.GEQUAL,[Rm]:i.GREATER,[Cm]:i.NOTEQUAL};function ne(C,S){if(S.type===xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===vi||S.magFilter===yl||S.magFilter===Ha||S.magFilter===Nr||S.minFilter===vi||S.minFilter===yl||S.minFilter===Ha||S.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,gt[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,gt[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,gt[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Pt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Pt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bn||S.minFilter!==Ha&&S.minFilter!==Nr||S.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ee(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const J=S.source;let ct=f.get(J);ct===void 0&&(ct={},f.set(J,ct));const Q=$(S);if(Q!==C.__cacheKey){ct[Q]===void 0&&(ct[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ct[Q].usedTimes++;const kt=ct[C.__cacheKey];kt!==void 0&&(ct[C.__cacheKey].usedTimes--,kt.usedTimes===0&&v(S)),C.__cacheKey=Q,C.__webglTexture=ct[Q].texture}return G}function pe(C,S,G){return Math.floor(Math.floor(C/G)/S)}function oe(C,S,G,J){const Q=C.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,J,S.data);else{Q.sort((_t,Ct)=>_t.start-Ct.start);let kt=0;for(let _t=1;_t<Q.length;_t++){const Ct=Q[kt],yt=Q[_t],Ut=Ct.start+Ct.count,Tt=pe(yt.start,S.width,4),Jt=pe(Ct.start,S.width,4);yt.start<=Ut+1&&Tt===Jt&&pe(yt.start+yt.count-1,S.width,4)===Tt?Ct.count=Math.max(Ct.count,yt.start+yt.count-Ct.start):(++kt,Q[kt]=yt)}Q.length=kt+1;const Mt=i.getParameter(i.UNPACK_ROW_LENGTH),zt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ht=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let _t=0,Ct=Q.length;_t<Ct;_t++){const yt=Q[_t],Ut=Math.floor(yt.start/4),Tt=Math.ceil(yt.count/4),Jt=Ut%S.width,O=Math.floor(Ut/S.width),lt=Tt,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Jt,O,lt,xt,G,J,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ht)}}function nt(C,S,G){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const ct=ee(C,S),Q=S.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+G);const kt=n.get(Q);if(Q.version!==kt.__version||ct===!0){e.activeTexture(i.TEXTURE0+G);const Mt=we.getPrimaries(we.workingColorSpace),zt=S.colorSpace===Qi?null:we.getPrimaries(S.colorSpace),Ht=S.colorSpace===Qi||Mt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let _t=M(S.image,!1,r.maxTextureSize);_t=ie(S,_t);const Ct=s.convert(S.format,S.colorSpace),yt=s.convert(S.type);let Ut=A(S.internalFormat,Ct,yt,S.colorSpace,S.isVideoTexture);ne(J,S);let Tt;const Jt=S.mipmaps,O=S.isVideoTexture!==!0,lt=kt.__version===void 0||ct===!0,xt=Q.dataReady,It=F(S,_t);if(S.isDepthTexture)Ut=w(S.format===Go,S.type),lt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Ut,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Ut,_t.width,_t.height,0,Ct,yt,null));else if(S.isDataTexture)if(Jt.length>0){O&&lt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,Jt[0].width,Jt[0].height);for(let mt=0,st=Jt.length;mt<st;mt++)Tt=Jt[mt],O?xt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Ct,yt,Tt.data):e.texImage2D(i.TEXTURE_2D,mt,Ut,Tt.width,Tt.height,0,Ct,yt,Tt.data);S.generateMipmaps=!1}else O?(lt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,_t.width,_t.height),xt&&oe(S,_t,Ct,yt)):e.texImage2D(i.TEXTURE_2D,0,Ut,_t.width,_t.height,0,Ct,yt,_t.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,Jt[0].width,Jt[0].height,_t.depth);for(let mt=0,st=Jt.length;mt<st;mt++)if(Tt=Jt[mt],S.format!==ti)if(Ct!==null)if(O){if(xt)if(S.layerUpdates.size>0){const Ft=Ld(Tt.width,Tt.height,S.format,S.type);for(const $t of S.layerUpdates){const se=Tt.data.subarray($t*Ft/Tt.data.BYTES_PER_ELEMENT,($t+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,$t,Tt.width,Tt.height,1,Ct,se)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,_t.depth,Ct,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Ut,Tt.width,Tt.height,_t.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,_t.depth,Ct,yt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Ut,Tt.width,Tt.height,_t.depth,0,Ct,yt,Tt.data)}else{O&&lt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,Jt[0].width,Jt[0].height);for(let mt=0,st=Jt.length;mt<st;mt++)Tt=Jt[mt],S.format!==ti?Ct!==null?O?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Ct,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?xt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Ct,yt,Tt.data):e.texImage2D(i.TEXTURE_2D,mt,Ut,Tt.width,Tt.height,0,Ct,yt,Tt.data)}else if(S.isDataArrayTexture)if(O){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,_t.width,_t.height,_t.depth),xt)if(S.layerUpdates.size>0){const mt=Ld(_t.width,_t.height,S.format,S.type);for(const st of S.layerUpdates){const Ft=_t.data.subarray(st*mt/_t.data.BYTES_PER_ELEMENT,(st+1)*mt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,_t.width,_t.height,1,Ct,yt,Ft)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Ct,yt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,_t.width,_t.height,_t.depth,0,Ct,yt,_t.data);else if(S.isData3DTexture)O?(lt&&e.texStorage3D(i.TEXTURE_3D,It,Ut,_t.width,_t.height,_t.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Ct,yt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,_t.width,_t.height,_t.depth,0,Ct,yt,_t.data);else if(S.isFramebufferTexture){if(lt)if(O)e.texStorage2D(i.TEXTURE_2D,It,Ut,_t.width,_t.height);else{let mt=_t.width,st=_t.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Ut,mt,st,0,Ct,yt,null),mt>>=1,st>>=1}}else if(Jt.length>0){if(O&&lt){const mt=Zt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,It,Ut,mt.width,mt.height)}for(let mt=0,st=Jt.length;mt<st;mt++)Tt=Jt[mt],O?xt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ct,yt,Tt):e.texImage2D(i.TEXTURE_2D,mt,Ut,Ct,yt,Tt);S.generateMipmaps=!1}else if(O){if(lt){const mt=Zt(_t);e.texStorage2D(i.TEXTURE_2D,It,Ut,mt.width,mt.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,yt,_t)}else e.texImage2D(i.TEXTURE_2D,0,Ut,Ct,yt,_t);_(S)&&m(J),kt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ut(C,S,G){if(S.image.length!==6)return;const J=ee(C,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const Q=n.get(ct);if(ct.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const kt=we.getPrimaries(we.workingColorSpace),Mt=S.colorSpace===Qi?null:we.getPrimaries(S.colorSpace),zt=S.colorSpace===Qi||kt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,Ct=[];for(let st=0;st<6;st++)!Ht&&!_t?Ct[st]=M(S.image[st],!0,r.maxCubemapSize):Ct[st]=_t?S.image[st].image:S.image[st],Ct[st]=ie(S,Ct[st]);const yt=Ct[0],Ut=s.convert(S.format,S.colorSpace),Tt=s.convert(S.type),Jt=A(S.internalFormat,Ut,Tt,S.colorSpace),O=S.isVideoTexture!==!0,lt=Q.__version===void 0||J===!0,xt=ct.dataReady;let It=F(S,yt);ne(i.TEXTURE_CUBE_MAP,S);let mt;if(Ht){O&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Jt,yt.width,yt.height);for(let st=0;st<6;st++){mt=Ct[st].mipmaps;for(let Ft=0;Ft<mt.length;Ft++){const $t=mt[Ft];S.format!==ti?Ut!==null?O?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,$t.width,$t.height,Ut,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Jt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,$t.width,$t.height,Ut,Tt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Jt,$t.width,$t.height,0,Ut,Tt,$t.data)}}}else{if(mt=S.mipmaps,O&&lt){mt.length>0&&It++;const st=Zt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Jt,st.width,st.height)}for(let st=0;st<6;st++)if(_t){O?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ct[st].width,Ct[st].height,Ut,Tt,Ct[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,Ct[st].width,Ct[st].height,0,Ut,Tt,Ct[st].data);for(let Ft=0;Ft<mt.length;Ft++){const se=mt[Ft].image[st].image;O?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,se.width,se.height,Ut,Tt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Jt,se.width,se.height,0,Ut,Tt,se.data)}}else{O?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,Tt,Ct[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,Ut,Tt,Ct[st]);for(let Ft=0;Ft<mt.length;Ft++){const $t=mt[Ft];O?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ut,Tt,$t.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Jt,Ut,Tt,$t.image[st])}}}_(S)&&m(i.TEXTURE_CUBE_MAP),Q.__version=ct.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Et(C,S,G,J,ct,Q){const kt=s.convert(G.format,G.colorSpace),Mt=s.convert(G.type),zt=A(G.internalFormat,kt,Mt,G.colorSpace),Ht=n.get(S),_t=n.get(G);if(_t.__renderTarget=S,!Ht.__hasExternalTextures){const Ct=Math.max(1,S.width>>Q),yt=Math.max(1,S.height>>Q);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,Q,zt,Ct,yt,S.depth,0,kt,Mt,null):e.texImage2D(ct,Q,zt,Ct,yt,0,kt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ft(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ct,_t.__webglTexture,0,wt(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ct,_t.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(C,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const J=S.depthTexture,ct=J&&J.isDepthTexture?J.type:null,Q=w(S.stencilBuffer,ct),kt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=wt(S);ft(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,Q,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,C)}else{const J=S.textures;for(let ct=0;ct<J.length;ct++){const Q=J[ct],kt=s.convert(Q.format,Q.colorSpace),Mt=s.convert(Q.type),zt=A(Q.internalFormat,kt,Mt,Q.colorSpace),Ht=wt(S);G&&ft(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,zt,S.width,S.height):ft(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,zt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,zt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt(S.depthTexture,0);const ct=J.__webglTexture,Q=wt(S);if(S.depthTexture.format===Ho)ft(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Go)ft(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function re(C){const S=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ct)};J.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?Nt(S.__webglFramebuffer[0],C):Nt(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),Lt(S.__webglDepthbuffer[J],C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Q)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Lt(S.__webglDepthbuffer,C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(C,S,G){const J=n.get(C);S!==void 0&&Et(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&re(C)}function N(C){const S=C.texture,G=n.get(C),J=n.get(S);C.addEventListener("dispose",I);const ct=C.textures,Q=C.isWebGLCubeRenderTarget===!0,kt=ct.length>1;if(kt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[Mt]=[];for(let zt=0;zt<S.mipmaps.length;zt++)G.__webglFramebuffer[Mt][zt]=i.createFramebuffer()}else G.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)G.__webglFramebuffer[Mt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(kt)for(let Mt=0,zt=ct.length;Mt<zt;Mt++){const Ht=n.get(ct[Mt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ft(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ct.length;Mt++){const zt=ct[Mt];G.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Mt]);const Ht=s.convert(zt.format,zt.colorSpace),_t=s.convert(zt.type),Ct=A(zt.internalFormat,Ht,_t,zt.colorSpace,C.isXRRenderTarget===!0),yt=wt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,Ct,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,G.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ne(i.TEXTURE_CUBE_MAP,S);for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let zt=0;zt<S.mipmaps.length;zt++)Et(G.__webglFramebuffer[Mt][zt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt);else Et(G.__webglFramebuffer[Mt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);_(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let Mt=0,zt=ct.length;Mt<zt;Mt++){const Ht=ct[Mt],_t=n.get(Ht);let Ct=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,_t.__webglTexture),ne(Ct,Ht),Et(G.__webglFramebuffer,C,Ht,i.COLOR_ATTACHMENT0+Mt,Ct,0),_(Ht)&&m(Ct)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,J.__webglTexture),ne(Mt,S),S.mipmaps&&S.mipmaps.length>0)for(let zt=0;zt<S.mipmaps.length;zt++)Et(G.__webglFramebuffer[zt],C,S,i.COLOR_ATTACHMENT0,Mt,zt);else Et(G.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,Mt,0);_(S)&&m(Mt),e.unbindTexture()}C.depthBuffer&&re(C)}function at(C){const S=C.textures;for(let G=0,J=S.length;G<J;G++){const ct=S[G];if(_(ct)){const Q=R(C),kt=n.get(ct).__webglTexture;e.bindTexture(Q,kt),m(Q),e.unbindTexture()}}}const it=[],et=[];function K(C){if(C.samples>0){if(ft(C)===!1){const S=C.textures,G=C.width,J=C.height;let ct=i.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(C),Mt=S.length>1;if(Mt)for(let Ht=0;Ht<S.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const zt=C.texture.mipmaps;zt&&zt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Ht=0;Ht<S.length;Ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Ht]);const _t=n.get(S[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,ct,i.NEAREST),l===!0&&(it.length=0,et.length=0,it.push(i.COLOR_ATTACHMENT0+Ht),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push(Q),et.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Ht=0;Ht<S.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Ht]);const _t=n.get(S[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,_t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function wt(C){return Math.min(r.maxSamples,C.samples)}function ft(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ie(C,S){const G=C.colorSpace,J=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Ds&&G!==Qi&&(we.getTransfer(G)===De?(J!==ti||ct!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=tt,this.setTexture2DArray=j,this.setTexture3D=ht,this.setTextureCube=Z,this.rebindTextures=Ee,this.setupRenderTarget=N,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ft}function HM(i,t){function e(n,r=Qi){let s;const o=we.getTransfer(r);if(n===yi)return i.UNSIGNED_BYTE;if(n===Qu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===th)return i.UNSIGNED_SHORT_5_5_5_1;if(n===up)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cp)return i.BYTE;if(n===lp)return i.SHORT;if(n===zo)return i.UNSIGNED_SHORT;if(n===ju)return i.INT;if(n===Fr)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===Zo)return i.HALF_FLOAT;if(n===fp)return i.ALPHA;if(n===dp)return i.RGB;if(n===ti)return i.RGBA;if(n===Ho)return i.DEPTH_COMPONENT;if(n===Go)return i.DEPTH_STENCIL;if(n===eh)return i.RED;if(n===nh)return i.RED_INTEGER;if(n===pp)return i.RG;if(n===ih)return i.RG_INTEGER;if(n===rh)return i.RGBA_INTEGER;if(n===Mc||n===yc||n===Sc||n===wc)if(o===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_u||n===vu||n===xu||n===Mu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yu||n===Su||n===wu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yu||n===Su)return o===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eu||n===Tu||n===bu||n===Au||n===Ru||n===Cu||n===Pu||n===Lu||n===Du||n===Iu||n===Uu||n===Nu||n===Fu||n===Ou)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Au)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fu)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ou)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bu||n===zu||n===ku)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Bu)return o===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hu||n===Gu||n===Vu||n===Wu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ko?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`;class WM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Rp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:GM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XM extends Ns{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",_=new WM,m={},R=e.getContextAttributes();let A=null,w=null;const F=[],P=[],I=new pt;let D=null;const v=new Vn;v.viewport=new Ie;const y=new Vn;y.viewport=new Ie;const U=[v,y],V=new h_;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=F[nt];return ut===void 0&&(ut=new Gl,F[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=F[nt];return ut===void 0&&(ut=new Gl,F[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=F[nt];return ut===void 0&&(ut=new Gl,F[nt]=ut),ut.getHandSpace()};function tt(nt){const ut=P.indexOf(nt.inputSource);if(ut===-1)return;const Et=F[ut];Et!==void 0&&(Et.update(nt.inputSource,nt.frame,u||o),Et.dispatchEvent({type:nt.type,data:nt.inputSource}))}function j(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ht);for(let nt=0;nt<F.length;nt++){const ut=P[nt];ut!==null&&(P[nt]=null,F[nt].disconnect(ut))}X=null,$=null,_.reset();for(const nt in m)delete m[nt];t.setRenderTarget(A),p=null,f=null,d=null,r=null,w=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ht),R.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Lt=null,Nt=null;R.depth&&(Nt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=R.stencil?Go:Ho,Lt=R.stencil?ko:Fr);const re={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(re),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ir(f.textureWidth,f.textureHeight,{format:ti,type:yi,depthTexture:new Ap(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Et={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ir(p.framebufferWidth,p.framebufferHeight,{format:ti,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ht(nt){for(let ut=0;ut<nt.removed.length;ut++){const Et=nt.removed[ut],Lt=P.indexOf(Et);Lt>=0&&(P[Lt]=null,F[Lt].disconnect(Et))}for(let ut=0;ut<nt.added.length;ut++){const Et=nt.added[ut];let Lt=P.indexOf(Et);if(Lt===-1){for(let re=0;re<F.length;re++)if(re>=P.length){P.push(Et),Lt=re;break}else if(P[re]===null){P[re]=Et,Lt=re;break}if(Lt===-1)break}const Nt=F[Lt];Nt&&Nt.connect(Et)}}const Z=new b,gt=new b;function Pt(nt,ut,Et){Z.setFromMatrixPosition(ut.matrixWorld),gt.setFromMatrixPosition(Et.matrixWorld);const Lt=Z.distanceTo(gt),Nt=ut.projectionMatrix.elements,re=Et.projectionMatrix.elements,Ee=Nt[14]/(Nt[10]-1),N=Nt[14]/(Nt[10]+1),at=(Nt[9]+1)/Nt[5],it=(Nt[9]-1)/Nt[5],et=(Nt[8]-1)/Nt[0],K=(re[8]+1)/re[0],wt=Ee*et,ft=Ee*K,St=Lt/(-et+K),ie=St*-et;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ie),nt.translateZ(St),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Nt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Zt=Ee+St,C=N+St,S=wt-ie,G=ft+(Lt-ie),J=at*N/C*Zt,ct=it*N/C*Zt;nt.projectionMatrix.makePerspective(S,G,J,ct,Zt,C),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Ot(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ut=nt.near,Et=nt.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),V.near=y.near=v.near=ut,V.far=y.far=v.far=Et,(X!==V.near||$!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),X=V.near,$=V.far),V.layers.mask=nt.layers.mask|6,v.layers.mask=V.layers.mask&3,y.layers.mask=V.layers.mask&5;const Lt=nt.parent,Nt=V.cameras;Ot(V,Lt);for(let re=0;re<Nt.length;re++)Ot(Nt[re],Lt);Nt.length===2?Pt(V,v,y):V.projectionMatrix.copy(v.projectionMatrix),ne(nt,V,Lt)};function ne(nt,ut,Et){Et===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(Et.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Vo*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(nt){return m[nt]};let ee=null;function pe(nt,ut){if(h=ut.getViewerPose(u||o),x=ut,h!==null){const Et=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let Lt=!1;Et.length!==V.cameras.length&&(V.cameras.length=0,Lt=!0);for(let N=0;N<Et.length;N++){const at=Et[N];let it=null;if(p!==null)it=p.getViewport(at);else{const K=d.getViewSubImage(f,at);it=K.viewport,N===0&&(t.setRenderTargetTextures(w,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(w))}let et=U[N];et===void 0&&(et=new Vn,et.layers.enable(N),et.viewport=new Ie,U[N]=et),et.matrix.fromArray(at.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(at.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(it.x,it.y,it.width,it.height),N===0&&(V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Lt===!0&&V.cameras.push(et)}const Nt=r.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const N=d.getDepthInformation(Et[0]);N&&N.isValid&&N.texture&&_.init(N,r.renderState)}if(Nt&&Nt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let N=0;N<Et.length;N++){const at=Et[N].camera;if(at){let it=m[at];it||(it=new Rp,m[at]=it);const et=d.getCameraImage(at);it.sourceTexture=et}}}}for(let Et=0;Et<F.length;Et++){const Lt=P[Et],Nt=F[Et];Lt!==null&&Nt!==void 0&&Nt.update(Lt,ut,u||o)}ee&&ee(nt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),x=null}const oe=new zp;oe.setAnimationLoop(pe),this.setAnimationLoop=function(nt){ee=nt},this.dispose=function(){}}}const Tr=new Si,qM=new Re;function YM(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,wp(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,R,A,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),d(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&p(_,m,w)):m.isMeshMatcapMaterial?(s(_,m),x(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),M(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,R,A):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===An&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===An&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const R=t.get(m),A=R.envMap,w=R.envMapRotation;A&&(_.envMap.value=A,Tr.copy(w),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),_.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Tr)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,R,A){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*R,_.scale.value=A*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,R){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,m){m.matcap&&(_.matcap.value=m.matcap)}function M(_,m){const R=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ZM(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const w=A.program;n.uniformBlockBinding(R,w)}function u(R,A){let w=r[R.id];w===void 0&&(x(R),w=h(R),r[R.id]=w,R.addEventListener("dispose",_));const F=A.program;n.updateUBOMapping(R,F);const P=t.render.frame;s[R.id]!==P&&(f(R),s[R.id]=P)}function h(R){const A=d();R.__bindingPointIndex=A;const w=i.createBuffer(),F=R.__size,P=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,F,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const A=r[R.id],w=R.uniforms,F=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let P=0,I=w.length;P<I;P++){const D=Array.isArray(w[P])?w[P]:[w[P]];for(let v=0,y=D.length;v<y;v++){const U=D[v];if(p(U,P,v,F)===!0){const V=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let tt=0;tt<X.length;tt++){const j=X[tt],ht=M(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,V+$,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,$),$+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,A,w,F){const P=R.value,I=A+"_"+w;if(F[I]===void 0)return typeof P=="number"||typeof P=="boolean"?F[I]=P:F[I]=P.clone(),!0;{const D=F[I];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return F[I]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function x(R){const A=R.uniforms;let w=0;const F=16;for(let I=0,D=A.length;I<D;I++){const v=Array.isArray(A[I])?A[I]:[A[I]];for(let y=0,U=v.length;y<U;y++){const V=v[y],X=Array.isArray(V.value)?V.value:[V.value];for(let $=0,tt=X.length;$<tt;$++){const j=X[$],ht=M(j),Z=w%F,gt=Z%ht.boundary,Pt=Z+gt;w+=gt,Pt!==0&&F-Pt<ht.storage&&(w+=F-Pt),V.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=ht.storage}}}const P=w%F;return P>0&&(w+=F-P),R.__size=w,R.__cache={},this}function M(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function _(R){const A=R.target;A.removeEventListener("dispose",_);const w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function m(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}class JM{constructor(t={}){const{canvas:e=Zm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),M=new Int32Array(4);let _=null,m=null;const R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=In;let P=0,I=0,D=null,v=-1,y=null;const U=new Ie,V=new Ie;let X=null;const $=new te(0);let tt=0,j=e.width,ht=e.height,Z=1,gt=null,Pt=null;const Ot=new Ie(0,0,j,ht),ne=new Ie(0,0,j,ht);let ee=!1;const pe=new lh;let oe=!1,nt=!1;const ut=new Re,Et=new b,Lt=new Ie,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ee(){return D===null?Z:1}let N=n;function at(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ku}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){const k="webgl2";if(N=at(k,T),N===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let it,et,K,wt,ft,St,ie,Zt,C,S,G,J,ct,Q,kt,Mt,zt,Ht,_t,Ct,yt,Ut,Tt,Jt;function O(){it=new s1(N),it.init(),Ut=new HM(N,it),et=new jx(N,it,t,Ut),K=new zM(N,it),et.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),wt=new c1(N),ft=new bM,St=new kM(N,it,K,ft,et,Ut,wt),ie=new t1(w),Zt=new r1(w),C=new p_(N),Tt=new $x(N,C),S=new o1(N,C,wt,Tt),G=new u1(N,S,C,wt),_t=new l1(N,et,St),Mt=new Qx(ft),J=new TM(w,ie,Zt,it,et,Tt,Mt),ct=new YM(w,ft),Q=new RM,kt=new UM(it),Ht=new Jx(w,ie,Zt,K,G,p,l),zt=new OM(w,G,et),Jt=new ZM(N,wt,et,K),Ct=new Kx(N,it,wt),yt=new a1(N,it,wt),wt.programs=J.programs,w.capabilities=et,w.extensions=it,w.properties=ft,w.renderLists=Q,w.shadowMap=zt,w.state=K,w.info=wt}O();const lt=new XM(w,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(j,ht,!1))},this.getSize=function(T){return T.set(j,ht)},this.setSize=function(T,k,Y=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,ht=k,e.width=Math.floor(T*Z),e.height=Math.floor(k*Z),Y===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(j*Z,ht*Z).floor()},this.setDrawingBufferSize=function(T,k,Y){j=T,ht=k,Z=Y,e.width=Math.floor(T*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Ot)},this.setViewport=function(T,k,Y,q){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,k,Y,q),K.viewport(U.copy(Ot).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,k,Y,q){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,k,Y,q),K.scissor(V.copy(ne).multiplyScalar(Z).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){K.setScissorTest(ee=T)},this.setOpaqueSort=function(T){gt=T},this.setTransparentSort=function(T){Pt=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Y=!0){let q=0;if(T){let H=!1;if(D!==null){const vt=D.texture.format;H=vt===rh||vt===ih||vt===nh}if(H){const vt=D.texture.type,At=vt===yi||vt===Fr||vt===zo||vt===ko||vt===Qu||vt===th,Bt=Ht.getClearColor(),Dt=Ht.getClearAlpha(),Xt=Bt.r,Kt=Bt.g,qt=Bt.b;At?(x[0]=Xt,x[1]=Kt,x[2]=qt,x[3]=Dt,N.clearBufferuiv(N.COLOR,0,x)):(M[0]=Xt,M[1]=Kt,M[2]=qt,M[3]=Dt,N.clearBufferiv(N.COLOR,0,M))}else q|=N.COLOR_BUFFER_BIT}k&&(q|=N.DEPTH_BUFFER_BIT),Y&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ht.dispose(),Q.dispose(),kt.dispose(),ft.dispose(),ie.dispose(),Zt.dispose(),G.dispose(),Tt.dispose(),Jt.dispose(),J.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Mn),lt.removeEventListener("sessionend",or),un.stop()};function xt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const T=wt.autoReset,k=zt.enabled,Y=zt.autoUpdate,q=zt.needsUpdate,H=zt.type;O(),wt.autoReset=T,zt.enabled=k,zt.autoUpdate=Y,zt.needsUpdate=q,zt.type=H}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const k=T.target;k.removeEventListener("dispose",st),Ft(k)}function Ft(T){$t(T),ft.remove(T)}function $t(T){const k=ft.get(T).programs;k!==void 0&&(k.forEach(function(Y){J.releaseProgram(Y)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,q,H,vt){k===null&&(k=Nt);const At=H.isMesh&&H.matrixWorld.determinant()<0,Bt=Bs(T,k,Y,q,H);K.setMaterial(q,At);let Dt=Y.index,Xt=1;if(q.wireframe===!0){if(Dt=S.getWireframeAttribute(Y),Dt===void 0)return;Xt=2}const Kt=Y.drawRange,qt=Y.attributes.position;let le=Kt.start*Xt,ve=(Kt.start+Kt.count)*Xt;vt!==null&&(le=Math.max(le,vt.start*Xt),ve=Math.min(ve,(vt.start+vt.count)*Xt)),Dt!==null?(le=Math.max(le,0),ve=Math.min(ve,Dt.count)):qt!=null&&(le=Math.max(le,0),ve=Math.min(ve,qt.count));const be=ve-le;if(be<0||be===1/0)return;Tt.setup(H,q,Bt,Y,Dt);let Pe,fe=Ct;if(Dt!==null&&(Pe=C.get(Dt),fe=yt,fe.setIndex(Pe)),H.isMesh)q.wireframe===!0?(K.setLineWidth(q.wireframeLinewidth*Ee()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(H.isLine){let Wt=q.linewidth;Wt===void 0&&(Wt=1),K.setLineWidth(Wt*Ee()),H.isLineSegments?fe.setMode(N.LINES):H.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else H.isPoints?fe.setMode(N.POINTS):H.isSprite&&fe.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))fe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Wt=H._multiDrawStarts,xe=H._multiDrawCounts,Me=H._multiDrawCount,ke=Dt?C.get(Dt).bytesPerElement:1,Ei=ft.get(q).currentProgram.getUniforms();for(let nn=0;nn<Me;nn++)Ei.setValue(N,"_gl_DrawID",nn),fe.render(Wt[nn]/ke,xe[nn])}else if(H.isInstancedMesh)fe.renderInstances(le,be,H.count);else if(Y.isInstancedBufferGeometry){const Wt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xe=Math.min(Y.instanceCount,Wt);fe.renderInstances(le,be,xe)}else fe.render(le,be)};function se(T,k,Y){T.transparent===!0&&T.side===vn&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,Se(T,k,Y),T.side=Fi,T.needsUpdate=!0,Se(T,k,Y),T.side=vn):Se(T,k,Y)}this.compile=function(T,k,Y=null){Y===null&&(Y=T),m=kt.get(Y),m.init(k),A.push(m),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==Y&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const vt=H.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){const Bt=vt[At];se(Bt,Y,H),q.add(Bt)}else se(vt,Y,H),q.add(vt)}),m=A.pop(),q},this.compileAsync=function(T,k,Y=null){const q=this.compile(T,k,Y);return new Promise(H=>{function vt(){if(q.forEach(function(At){ft.get(At).currentProgram.isReady()&&q.delete(At)}),q.size===0){H(T);return}setTimeout(vt,10)}it.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let jt=null;function Rn(T){jt&&jt(T)}function Mn(){un.stop()}function or(){un.start()}const un=new zp;un.setAnimationLoop(Rn),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(T){jt=T,lt.setAnimationLoop(T),T===null?un.stop():un.start()},lt.addEventListener("sessionstart",Mn),lt.addEventListener("sessionend",or),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,k,D),m=kt.get(T,A.length),m.init(k),A.push(m),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),pe.setFromProjectionMatrix(ut,Mi,k.reversedDepth),nt=this.localClippingEnabled,oe=Mt.init(this.clippingPlanes,nt),_=Q.get(T,R.length),_.init(),R.push(_),lt.enabled===!0&&lt.isPresenting===!0){const vt=w.xr.getDepthSensingMesh();vt!==null&&Oi(vt,k,-1/0,w.sortObjects)}Oi(T,k,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(gt,Pt),re=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,re&&Ht.addToRenderList(_,T),this.info.render.frame++,oe===!0&&Mt.beginShadows();const Y=m.state.shadowsArray;zt.render(Y,T,k),oe===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,H=_.transmissive;if(m.setupLights(),k.isArrayCamera){const vt=k.cameras;if(H.length>0)for(let At=0,Bt=vt.length;At<Bt;At++){const Dt=vt[At];qe(q,H,T,Dt)}re&&Ht.render(T);for(let At=0,Bt=vt.length;At<Bt;At++){const Dt=vt[At];yn(_,T,Dt,Dt.viewport)}}else H.length>0&&qe(q,H,T,k),re&&Ht.render(T),yn(_,T,k);D!==null&&I===0&&(St.updateMultisampleRenderTarget(D),St.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(w,T,k),Tt.resetDefaultState(),v=-1,y=null,A.pop(),A.length>0?(m=A[A.length-1],oe===!0&&Mt.setGlobalState(w.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Oi(T,k,Y,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||pe.intersectsSprite(T)){q&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const At=G.update(T),Bt=T.material;Bt.visible&&_.push(T,At,Bt,Y,Lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||pe.intersectsObject(T))){const At=G.update(T),Bt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Lt.copy(At.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(Bt)){const Dt=At.groups;for(let Xt=0,Kt=Dt.length;Xt<Kt;Xt++){const qt=Dt[Xt],le=Bt[qt.materialIndex];le&&le.visible&&_.push(T,At,le,Y,Lt.z,qt)}}else Bt.visible&&_.push(T,At,Bt,Y,Lt.z,null)}}const vt=T.children;for(let At=0,Bt=vt.length;At<Bt;At++)Oi(vt[At],k,Y,q)}function yn(T,k,Y,q){const H=T.opaque,vt=T.transmissive,At=T.transparent;m.setupLightsView(Y),oe===!0&&Mt.setGlobalState(w.clippingPlanes,Y),q&&K.viewport(U.copy(q)),H.length>0&&zn(H,k,Y),vt.length>0&&zn(vt,k,Y),At.length>0&&zn(At,k,Y),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function qe(T,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ir(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Zo:yi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const vt=m.state.transmissionRenderTarget[q.id],At=q.viewport||U;vt.setSize(At.z*w.transmissionResolutionScale,At.w*w.transmissionResolutionScale);const Bt=w.getRenderTarget(),Dt=w.getActiveCubeFace(),Xt=w.getActiveMipmapLevel();w.setRenderTarget(vt),w.getClearColor($),tt=w.getClearAlpha(),tt<1&&w.setClearColor(16777215,.5),w.clear(),re&&Ht.render(Y);const Kt=w.toneMapping;w.toneMapping=nr;const qt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),oe===!0&&Mt.setGlobalState(w.clippingPlanes,q),zn(T,Y,q),St.updateMultisampleRenderTarget(vt),St.updateRenderTargetMipmap(vt),it.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let ve=0,be=k.length;ve<be;ve++){const Pe=k[ve],fe=Pe.object,Wt=Pe.geometry,xe=Pe.material,Me=Pe.group;if(xe.side===vn&&fe.layers.test(q.layers)){const ke=xe.side;xe.side=An,xe.needsUpdate=!0,an(fe,Y,q,Wt,xe,Me),xe.side=ke,xe.needsUpdate=!0,le=!0}}le===!0&&(St.updateMultisampleRenderTarget(vt),St.updateRenderTargetMipmap(vt))}w.setRenderTarget(Bt,Dt,Xt),w.setClearColor($,tt),qt!==void 0&&(q.viewport=qt),w.toneMapping=Kt}function zn(T,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,vt=T.length;H<vt;H++){const At=T[H],Bt=At.object,Dt=At.geometry,Xt=At.group;let Kt=At.material;Kt.allowOverride===!0&&q!==null&&(Kt=q),Bt.layers.test(Y.layers)&&an(Bt,k,Y,Dt,Kt,Xt)}}function an(T,k,Y,q,H,vt){T.onBeforeRender(w,k,Y,q,H,vt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(w,k,Y,q,T,vt),H.transparent===!0&&H.side===vn&&H.forceSinglePass===!1?(H.side=An,H.needsUpdate=!0,w.renderBufferDirect(Y,k,q,H,T,vt),H.side=Fi,H.needsUpdate=!0,w.renderBufferDirect(Y,k,q,H,T,vt),H.side=vn):w.renderBufferDirect(Y,k,q,H,T,vt),T.onAfterRender(w,k,Y,q,H,vt)}function Se(T,k,Y){k.isScene!==!0&&(k=Nt);const q=ft.get(T),H=m.state.lights,vt=m.state.shadowsArray,At=H.state.version,Bt=J.getParameters(T,H.state,vt,k,Y),Dt=J.getProgramCacheKey(Bt);let Xt=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?Zt:ie).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",st),Xt=new Map,q.programs=Xt);let Kt=Xt.get(Dt);if(Kt!==void 0){if(q.currentProgram===Kt&&q.lightsStateVersion===At)return hn(T,Bt),Kt}else Bt.uniforms=J.getUniforms(T),T.onBeforeCompile(Bt,w),Kt=J.acquireProgram(Bt,Dt),Xt.set(Dt,Kt),q.uniforms=Bt.uniforms;const qt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Mt.uniform),hn(T,Bt),q.needsLights=ei(T),q.lightsStateVersion=At,q.needsLights&&(qt.ambientLightColor.value=H.state.ambient,qt.lightProbe.value=H.state.probe,qt.directionalLights.value=H.state.directional,qt.directionalLightShadows.value=H.state.directionalShadow,qt.spotLights.value=H.state.spot,qt.spotLightShadows.value=H.state.spotShadow,qt.rectAreaLights.value=H.state.rectArea,qt.ltc_1.value=H.state.rectAreaLTC1,qt.ltc_2.value=H.state.rectAreaLTC2,qt.pointLights.value=H.state.point,qt.pointLightShadows.value=H.state.pointShadow,qt.hemisphereLights.value=H.state.hemi,qt.directionalShadowMap.value=H.state.directionalShadowMap,qt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qt.spotShadowMap.value=H.state.spotShadowMap,qt.spotLightMatrix.value=H.state.spotLightMatrix,qt.spotLightMap.value=H.state.spotLightMap,qt.pointShadowMap.value=H.state.pointShadowMap,qt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Kt,q.uniformsList=null,Kt}function Ze(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Tc.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function hn(T,k){const Y=ft.get(T);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Bs(T,k,Y,q,H){k.isScene!==!0&&(k=Nt),St.resetTextureUnits();const vt=k.fog,At=q.isMeshStandardMaterial?k.environment:null,Bt=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ds,Dt=(q.isMeshStandardMaterial?Zt:ie).get(q.envMap||At),Xt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Kt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qt=!!Y.morphAttributes.position,le=!!Y.morphAttributes.normal,ve=!!Y.morphAttributes.color;let be=nr;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(be=w.toneMapping);const Pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=Pe!==void 0?Pe.length:0,Wt=ft.get(q),xe=m.state.lights;if(oe===!0&&(nt===!0||T!==y)){const He=T===y&&q.id===v;Mt.setState(q,T,He)}let Me=!1;q.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==xe.state.version||Wt.outputColorSpace!==Bt||H.isBatchedMesh&&Wt.batching===!1||!H.isBatchedMesh&&Wt.batching===!0||H.isBatchedMesh&&Wt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Wt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Wt.instancing===!1||!H.isInstancedMesh&&Wt.instancing===!0||H.isSkinnedMesh&&Wt.skinning===!1||!H.isSkinnedMesh&&Wt.skinning===!0||H.isInstancedMesh&&Wt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Wt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Wt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Wt.instancingMorph===!1&&H.morphTexture!==null||Wt.envMap!==Dt||q.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Mt.numPlanes||Wt.numIntersection!==Mt.numIntersection)||Wt.vertexAlphas!==Xt||Wt.vertexTangents!==Kt||Wt.morphTargets!==qt||Wt.morphNormals!==le||Wt.morphColors!==ve||Wt.toneMapping!==be||Wt.morphTargetsCount!==fe)&&(Me=!0):(Me=!0,Wt.__version=q.version);let ke=Wt.currentProgram;Me===!0&&(ke=Se(q,k,H));let Ei=!1,nn=!1,qn=!1;const Le=ke.getUniforms(),rn=Wt.uniforms;if(K.useProgram(ke.program)&&(Ei=!0,nn=!0,qn=!0),q.id!==v&&(v=q.id,nn=!0),Ei||y!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Le.setValue(N,"projectionMatrix",T.projectionMatrix),Le.setValue(N,"viewMatrix",T.matrixWorldInverse);const Je=Le.map.cameraPosition;Je!==void 0&&Je.setValue(N,Et.setFromMatrixPosition(T.matrixWorld)),et.logarithmicDepthBuffer&&Le.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Le.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,nn=!0,qn=!0)}if(H.isSkinnedMesh){Le.setOptional(N,H,"bindMatrix"),Le.setOptional(N,H,"bindMatrixInverse");const He=H.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Le.setValue(N,"boneTexture",He.boneTexture,St))}H.isBatchedMesh&&(Le.setOptional(N,H,"batchingTexture"),Le.setValue(N,"batchingTexture",H._matricesTexture,St),Le.setOptional(N,H,"batchingIdTexture"),Le.setValue(N,"batchingIdTexture",H._indirectTexture,St),Le.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Le.setValue(N,"batchingColorTexture",H._colorsTexture,St));const cn=Y.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&_t.update(H,Y,ke),(nn||Wt.receiveShadow!==H.receiveShadow)&&(Wt.receiveShadow=H.receiveShadow,Le.setValue(N,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(rn.envMap.value=Dt,rn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(rn.envMapIntensity.value=k.environmentIntensity),nn&&(Le.setValue(N,"toneMappingExposure",w.toneMappingExposure),Wt.needsLights&&zs(rn,qn),vt&&q.fog===!0&&ct.refreshFogUniforms(rn,vt),ct.refreshMaterialUniforms(rn,q,Z,ht,m.state.transmissionRenderTarget[T.id]),Tc.upload(N,Ze(Wt),rn,St)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Tc.upload(N,Ze(Wt),rn,St),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Le.setValue(N,"center",H.center),Le.setValue(N,"modelViewMatrix",H.modelViewMatrix),Le.setValue(N,"normalMatrix",H.normalMatrix),Le.setValue(N,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const He=q.uniformsGroups;for(let Je=0,Bi=He.length;Je<Bi;Je++){const ni=He[Je];Jt.update(ni,ke),Jt.bind(ni,ke)}}return ke}function zs(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ei(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,k,Y){const q=ft.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ft.get(T.texture).__webglTexture=k,ft.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Y=ft.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Oe=N.createFramebuffer();this.setRenderTarget=function(T,k=0,Y=0){D=T,P=k,I=Y;let q=!0,H=null,vt=!1,At=!1;if(T){const Dt=ft.get(T);if(Dt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(Dt.__webglFramebuffer===void 0)St.setupRenderTarget(T);else if(Dt.__hasExternalTextures)St.rebindTextures(T,ft.get(T.texture).__webglTexture,ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const qt=T.depthTexture;if(Dt.__boundDepthTexture!==qt){if(qt!==null&&ft.has(qt)&&(T.width!==qt.image.width||T.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(At=!0);const Kt=ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[k])?H=Kt[k][Y]:H=Kt[k],vt=!0):T.samples>0&&St.useMultisampledRTT(T)===!1?H=ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?H=Kt[Y]:H=Kt,U.copy(T.viewport),V.copy(T.scissor),X=T.scissorTest}else U.copy(Ot).multiplyScalar(Z).floor(),V.copy(ne).multiplyScalar(Z).floor(),X=ee;if(Y!==0&&(H=Oe),K.bindFramebuffer(N.FRAMEBUFFER,H)&&q&&K.drawBuffers(T,H),K.viewport(U),K.scissor(V),K.setScissorTest(X),vt){const Dt=ft.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,Y)}else if(At){const Dt=k;for(let Xt=0;Xt<T.textures.length;Xt++){const Kt=ft.get(T.textures[Xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Xt,Kt.__webglTexture,Y,Dt)}}else if(T!==null&&Y!==0){const Dt=ft.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dt.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(T,k,Y,q,H,vt,At,Bt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){K.bindFramebuffer(N.FRAMEBUFFER,Dt);try{const Xt=T.textures[Bt],Kt=Xt.format,qt=Xt.type;if(!et.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&Y>=0&&Y<=T.height-H&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt),N.readPixels(k,Y,q,H,Ut.convert(Kt),Ut.convert(qt),vt))}finally{const Xt=D!==null?ft.get(D).__webglFramebuffer:null;K.bindFramebuffer(N.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(T,k,Y,q,H,vt,At,Bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt)if(k>=0&&k<=T.width-q&&Y>=0&&Y<=T.height-H){K.bindFramebuffer(N.FRAMEBUFFER,Dt);const Xt=T.textures[Bt],Kt=Xt.format,qt=Xt.type;if(!et.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,le),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt),N.readPixels(k,Y,q,H,Ut.convert(Kt),Ut.convert(qt),0);const ve=D!==null?ft.get(D).__webglFramebuffer:null;K.bindFramebuffer(N.FRAMEBUFFER,ve);const be=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Jm(N,be,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,le),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.deleteBuffer(le),N.deleteSync(be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Y=0){const q=Math.pow(2,-Y),H=Math.floor(T.image.width*q),vt=Math.floor(T.image.height*q),At=k!==null?k.x:0,Bt=k!==null?k.y:0;St.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,At,Bt,H,vt),K.unbindTexture()};const Ue=N.createFramebuffer(),kr=N.createFramebuffer();this.copyTextureToTexture=function(T,k,Y=null,q=null,H=0,vt=null){vt===null&&(H!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=H,H=0):vt=0);let At,Bt,Dt,Xt,Kt,qt,le,ve,be;const Pe=T.isCompressedTexture?T.mipmaps[vt]:T.image;if(Y!==null)At=Y.max.x-Y.min.x,Bt=Y.max.y-Y.min.y,Dt=Y.isBox3?Y.max.z-Y.min.z:1,Xt=Y.min.x,Kt=Y.min.y,qt=Y.isBox3?Y.min.z:0;else{const cn=Math.pow(2,-H);At=Math.floor(Pe.width*cn),Bt=Math.floor(Pe.height*cn),T.isDataArrayTexture?Dt=Pe.depth:T.isData3DTexture?Dt=Math.floor(Pe.depth*cn):Dt=1,Xt=0,Kt=0,qt=0}q!==null?(le=q.x,ve=q.y,be=q.z):(le=0,ve=0,be=0);const fe=Ut.convert(k.format),Wt=Ut.convert(k.type);let xe;k.isData3DTexture?(St.setTexture3D(k,0),xe=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(St.setTexture2DArray(k,0),xe=N.TEXTURE_2D_ARRAY):(St.setTexture2D(k,0),xe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Me=N.getParameter(N.UNPACK_ROW_LENGTH),ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ei=N.getParameter(N.UNPACK_SKIP_PIXELS),nn=N.getParameter(N.UNPACK_SKIP_ROWS),qn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qt);const Le=T.isDataArrayTexture||T.isData3DTexture,rn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const cn=ft.get(T),He=ft.get(k),Je=ft.get(cn.__renderTarget),Bi=ft.get(He.__renderTarget);K.bindFramebuffer(N.READ_FRAMEBUFFER,Je.__webglFramebuffer),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let ni=0;ni<Dt;ni++)Le&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.get(T).__webglTexture,H,qt+ni),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.get(k).__webglTexture,vt,be+ni)),N.blitFramebuffer(Xt,Kt,At,Bt,le,ve,At,Bt,N.DEPTH_BUFFER_BIT,N.NEAREST);K.bindFramebuffer(N.READ_FRAMEBUFFER,null),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||ft.has(T)){const cn=ft.get(T),He=ft.get(k);K.bindFramebuffer(N.READ_FRAMEBUFFER,Ue),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,kr);for(let Je=0;Je<Dt;Je++)Le?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,cn.__webglTexture,H,qt+Je):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,cn.__webglTexture,H),rn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.__webglTexture,vt,be+Je):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,He.__webglTexture,vt),H!==0?N.blitFramebuffer(Xt,Kt,At,Bt,le,ve,At,Bt,N.COLOR_BUFFER_BIT,N.NEAREST):rn?N.copyTexSubImage3D(xe,vt,le,ve,be+Je,Xt,Kt,At,Bt):N.copyTexSubImage2D(xe,vt,le,ve,Xt,Kt,At,Bt);K.bindFramebuffer(N.READ_FRAMEBUFFER,null),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(xe,vt,le,ve,be,At,Bt,Dt,fe,Wt,Pe.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,vt,le,ve,be,At,Bt,Dt,fe,Pe.data):N.texSubImage3D(xe,vt,le,ve,be,At,Bt,Dt,fe,Wt,Pe):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,le,ve,At,Bt,fe,Wt,Pe.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,le,ve,Pe.width,Pe.height,fe,Pe.data):N.texSubImage2D(N.TEXTURE_2D,vt,le,ve,At,Bt,fe,Wt,Pe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Me),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ei),N.pixelStorei(N.UNPACK_SKIP_ROWS,nn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qn),vt===0&&k.generateMipmaps&&N.generateMipmap(xe),K.unbindTexture()},this.initRenderTarget=function(T){ft.get(T).__webglFramebuffer===void 0&&St.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?St.setTextureCube(T,0):T.isData3DTexture?St.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?St.setTexture2DArray(T,0):St.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,K.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}function br(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Te;let u=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,h),u+=p}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let x=0;x<p.count;++x)d.push(p.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in s){const d=np(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let M=0;M<o[h].length;++M)p.push(o[h][M][f]);const x=np(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function np(i){let t,e,n,r=-1,s=0;for(let u=0;u<i.length;++u){const h=i[u];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Xn(o,e,n);let l=0;for(let u=0;u<i.length;++u){const h=i[u];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,p=h.count;f<p;f++)for(let x=0;x<e;x++){const M=h.getComponent(f,x);a.setComponent(f+d,x,M)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}async function vs(){const i=globalThis.scheduler;i?.yield?await i.yield():await new Promise(t=>setTimeout(t,0))}function Lo(i){const t=performance.now();return performance.mark(`notebook:${i}:start`),()=>{performance.measure(`notebook:${i}`,{start:t,end:performance.now()}),performance.mark(`notebook:${i}:end`)}}function $M(i,t){return t<=760&&i>=.75?Math.max(12.8,14.6/i):i<.9?16.4/i:15.6}const Dn=(i,t,e)=>gi.smoothstep(e,i,t),Ce=gi.lerp;function iu(i,t){i.opacity=t;const e=t<.995;i.transparent!==e&&(i.transparent=e,i.needsUpdate=!0),i.depthWrite=t>.92,i.visible=t>.003}let tr=73;function Yt(){return tr=tr*16807%2147483647,(tr-1)/2147483646}const Do=6;function KM(i,t,e,n,r){const s=r.left+Do,o=e-r.right-Do,a=r.top+Do,l=n-r.bottom-Do,u=i.map(p=>{const[x,M]=t.get(p),_=p.hidden?0:p.offsetWidth,m=p.hidden?0:p.offsetHeight;return{h:p,w:_,ht:m,left:x-_/2,top:M-Do-m}}),h=u.filter(p=>p.w>0);for(const p of h)p.left=gi.clamp(p.left,s,Math.max(s,o-p.w)),p.top=gi.clamp(p.top,a,Math.max(a,l-p.ht));const d=(p,x)=>p>=a&&p+x.ht<=l,f=[];for(const p of h.sort((x,M)=>x.top-M.top)){for(let x=0;x<=f.length;x++){const M=f.find(w=>p.left<w.left+w.w+2&&w.left<p.left+p.w+2&&p.top<w.top+w.ht+2&&w.top<p.top+p.ht+2);if(!M)break;const _=M.top-p.ht-2,m=M.top+M.ht+2,[R,A]=p.top-_<=m-p.top?[_,m]:[m,_];p.top=d(R,p)||!d(A,p)?R:A}f.push(p)}for(const p of u)p.h.style.left=`${p.left}px`,p.h.style.top=`${p.top}px`}async function ty(i,t,e="full",n=e==="low"?"light":"full"){const r=i.dataset.detail,s={};try{return await jM(i,t,e,n,s)}catch(o){const a=s.renderer;throw a&&(a.domElement.remove(),a.dispose(),a.forceContextLoss()),r===void 0?delete i.dataset.detail:i.dataset.detail=r,o}}async function jM(i,t,e,n,r){const s=Lo("scene-construction");let o=Lo("construction:renderer");const a=async c=>{o(),await vs(),o=Lo(`construction:${c}`)};tr=73;const l=e==="low",u=new Mg,h=new JM({alpha:!0,antialias:!0,powerPreference:"low-power"});r.renderer=h,h.debug.checkShaderErrors=!0,i.dataset.detail=e,h.setClearColor(16448504,0),h.shadowMap.enabled=!0,h.shadowMap.type=rp,h.shadowMap.autoUpdate=!1,h.toneMapping=op,h.toneMappingExposure=1.2,h.domElement.setAttribute("aria-hidden","true"),i.appendChild(h.domElement);const d=new mh(-10,10,10,-10,.1,100),f=new _e;u.add(f);const p=new c_(16251903,8622195,2.5);u.add(p);const x=new Rd(16773076,3.3);x.position.set(-6,15,8),x.castShadow=!0,x.shadow.mapSize.set(2048,2048),x.shadow.camera.left=-12,x.shadow.camera.right=12,x.shadow.camera.top=12,x.shadow.camera.bottom=-12,x.shadow.normalBias=.025,x.shadow.bias=-15e-5,x.shadow.radius=4,x.shadow.camera.far=50,u.add(x);const M=new Rd(14084351,.7);M.position.set(8,6,-6),u.add(M);const _=new s_({opacity:0}),m=new bt(new on(80,80),_);m.rotation.x=-Math.PI/2,m.position.y=-.27,m.receiveShadow=!0,u.add(m);const R={stone:15130055,light:15854039,trim:13220512,wood:11041102,dark:5007457,soil:7237712,leaf:8493395,leafLight:10926448,leafDark:5141841,grass:10663810,flower:15185763,coral:13533797,glass:10996417,ochre:15185763,terracotta:13533797,sandstone:14198908,sandstoneDark:12158297,signGreen:6265710},A=new Map,w=[],F=["leaf","leafLight","leafDark","grass","flower","coral"],P=new Xe,I=(c,g=0)=>{const E=Math.sin(c*127.1+g*311.7)*43758.5453;return E-Math.floor(E)};function D(c,g,E,L,z,B=[0,0,0],W=!0){P.position.set(g,E,L),P.rotation.set(...B),P.scale.set(1,1,1),P.updateMatrix(),c.applyMatrix4(P.matrix),W&&w.push(new dc(c,26));const rt=c.index?c.toNonIndexed():c;rt!==c&&c.dispose(),A.has(z)||A.set(z,[]),A.get(z).push(rt)}function v(c,g,E,L,z,B,W="stone",rt=!0){D(new ue(L,z,B),c,g,E,W,[0,0,0],rt)}function y(c,g,E,L,z,B="stone",W=L,rt=!0){D(new Qe(W,L,z,12),c,g,E,B,[0,0,0],rt)}function U(c,g,E,L="wood",z=!0){const B=g.clone().sub(c),W=new Qe(E*.68,E,B.length(),7);W.applyQuaternion(new Fs().setFromUnitVectors(new b(0,1,0),B.normalize()));const rt=c.clone().add(g).multiplyScalar(.5);D(W,rt.x,rt.y,rt.z,L,[0,0,0],z)}function V(c,g,E,L,z="x"){const B=Math.ceil(L/.5);for(let W=0;W<=B;W++){const rt=-L/2+L*W/B;v(c+(z==="x"?rt:0),g+.28,E+(z==="z"?rt:0),.035,.55,.035,"dark")}v(c,g+.56,E,z==="x"?L:.045,.045,z==="z"?L:.045,"wood")}function X(c,g,E,L,z){v(c,g+.13,E,L,.26,z,"light"),v(c,g+.27,E,L-.1,.035,z-.1,"soil",!1);for(let B=0;B<Math.ceil(L*z*11);B++){const W=c+(Yt()-.5)*(L-.14),rt=E+(Yt()-.5)*(z-.14);D(new ln(.1+Yt()*.12,0),W,g+.34+Yt()*.09,rt,Yt()>.5?"leaf":"leafLight",[Yt(),Yt(),0],!1)}}function $(c,g,E,L){U(new b(c,g,E),new b(c+.05*L,g+L*1.05,E),L*.055);for(let z=0;z<5;z++){const B=z*2.4,W=Math.cos(B)*L*.35,rt=Math.sin(B)*L*.35;U(new b(c,g+L*.55,E),new b(c+W,g+L*(1.02+z*.04),E+rt),L*.023)}for(let z=0;z<14;z++){const B=z*2.4,W=L*(.12+Yt()*.38),rt=c+Math.cos(B)*W,ot=E+Math.sin(B)*W,dt=g+L*(1.02+Yt()*.43),Gt=new ln(L*(.25+Yt()*.16),l?0:1);Gt.scale(1,.75+Yt()*.35,1),D(Gt,rt,dt,ot,["leaf","leafLight","leafDark"][z%3],[Yt(),Yt(),Yt()],!1)}for(let z=0;z<3;z++){const B=[];for(let dt=0;dt<=30;dt++){const Gt=dt/30*Math.PI*2,Vt=L*(.47+Math.sin(Gt*7+z)*.03);B.push(new b(c+Math.cos(Gt)*Vt,g+L*1.2+Math.sin(Gt)*Vt*(z===2?.5:1),E+(z-1)*L*.18))}const W=new Te().setFromPoints(B),rt=W.getAttribute("position"),ot=[];for(let dt=0;dt<rt.count-1;dt++)ot.push(rt.getX(dt),rt.getY(dt),rt.getZ(dt),rt.getX(dt+1),rt.getY(dt+1),rt.getZ(dt+1));w.push(new Te().setAttribute("position",new ae(ot,3))),W.dispose()}}function tt(c,g,E,L,z,B,W=0){const rt=new Ms,ot=L/2;rt.moveTo(-ot,0),rt.lineTo(-ot,z-ot),rt.absarc(0,z-ot,ot,Math.PI,0,!0),rt.lineTo(ot,0),rt.lineTo(ot-.18,0),rt.lineTo(ot-.18,z-ot),rt.absarc(0,z-ot,ot-.18,0,Math.PI,!1),rt.lineTo(-ot+.18,0),rt.closePath(),D(new Lr(rt,{depth:B,bevelEnabled:!1,curveSegments:12}),c,g,E,"light",[0,W,0])}function j(c,g,E,L,z,B=1){for(let W=0;W<z;W++)v(c,g+W*.13,E-W*.22*B,L,.14,.26,"light")}await a("terraces"),v(0,-.03,0,10.8,.38,8.7,"stone"),v(-3.85,.23,.2,3.2,.28,5.3,"light"),v(3.5,.32,-.3,3.2,.46,5.2,"light"),v(.05,.24,-2.1,3.2,.46,3.9,"light"),v(.4,.25,3.05,4.9,.42,1.8,"light");for(let c=-5;c<5.3;c+=.44)v(c,.172,4.3,.025,.014,.18,"trim",!1);const ht=[[-5.4,5.4,-4.35,4.35,.16],[-5.45,-2.25,-2.45,2.85,.37],[1.9,5.1,-2.9,2.3,.55],[-1.55,1.65,-4.05,-.15,.47],[-2.05,2.85,2.15,3.95,.46]],Z=(c,g)=>Math.max(...ht.filter(([E,L,z,B])=>c>=E&&c<=L&&g>=z&&g<=B).map(E=>E[4]));v(.01,.315,1.965,1.25,.31,3.93,"light"),v(-1.7075,.315,2.61,2.185,.31,.8,"light"),v(.675,.355,1.965,.08,.39,4.01,"stone"),v(-.655,.355,1.065,.08,.39,2.21,"stone"),v(-.655,.355,3.51,.08,.39,.92,"stone");for(const c of[-.04,3.97])v(.01,.355,c,1.41,.39,.08,"stone");for(const c of[2.17,3.05])v(-1.7475,.355,c,2.185,.39,.08,"stone");v(-2.84,.355,2.61,.08,.39,.96,"stone");for(const c of[2.37,2.61,2.85])v(-1.9,.5,c,.22,.06,.18,"light");for(const c of[-1.13,1.13])for(const g of[-2.9,-.7])v(c,1.57,g,.3,2.55,.3,"stone");for(const c of[-.74,.74])tt(c,.36,-.5,1.38,2.55,.18);v(0,2.92,-1.8,3.1,.26,3.1,"light"),v(.13,3.14,-1.86,2.85,.13,2.85,"trim");for(const c of[-.92,1.02])for(const g of[-2.75,-1.05])v(c,4.05,g,.2,1.9,.2,"stone");v(.08,5.04,-1.9,2.75,.23,2.65,"light"),v(.08,3.95,-2.85,1.8,1.8,.13,"stone"),v(-.78,.75,-.42,.4,.04,.5,"wood");for(const c of[-.95,-.61])for(const g of[-.64,-.2])v(c,.6,g,.03,.27,.03,"wood");if(v(-.78,.78,-.47,.36,.02,.36,"light"),!l){for(let c=0;c<4;c++)for(let g=0;g<4;g++)(c+g)%2&&v(-.915+c*.09,.792,-.605+g*.09,.09,.006,.09,"dark",!1);for(const[c,g,E]of[[-.87,-.56,"ochre"],[-.69,-.56,"ochre"],[-.78,-.38,"terracotta"],[-.69,-.38,"terracotta"]])y(c,.815,g,.026,.045,E);D(new ue(.045,.045,.045),-.88,.792,-.23,"light",[0,.4,0]),D(new ue(.045,.045,.045),-.74,.792,-.22,"light",[0,-.3,0])}v(.08,4.12,-2.77,1.4,.8,.02,"dark");for(const c of[3.7,4.54])v(.08,c,-2.76,1.5,.05,.04,"wood");for(const c of[-.65,.81])v(c,4.12,-2.76,.05,.89,.04,"wood");v(.25,3.63,-2.42,.72,.04,.34,"wood");for(const c of[-.08,.58])v(c,3.41,-2.42,.03,.4,.3,"dark");if(!l){for(let c=0;c<5;c++)D(new ue(.17,.007,.23),.42,3.655+c*.008,-2.42,"light",[0,(I(c,9)-.5)*.35,0],c===4);y(.02,3.66,-2.5,.05,.02,"dark"),U(new b(.02,3.66,-2.5),new b(.06,3.92,-2.45),.012,"dark"),y(.08,3.9,-2.42,.1,.09,"ochre",.04)}const gt=6.02,Pt=[-1.15,.05,1.25],Ot=[-3.1,-1.62];X(.06,5.19,-2.86,2.4,.34);for(const c of Pt)for(const g of Ot)if(y(c,(5.16+gt)/2,g,.042,gt-5.16,"stone",.036),!l){for(let E=0;E<2;E++){let L=new b(c+.05,5.17,g);for(let z=1;z<=14;z++){const B=z*.62+E*Math.PI+c*2+g,W=.05+Math.sin(z*1.3+E)*.012,rt=new b(c+Math.cos(B)*W,5.17+z/14*(gt-5.1),g+Math.sin(B)*W);U(L,rt,.021-z*7e-4,"wood",!1),L=rt}}for(let E=0;E<3;E++){const L=E*2.1+c+g*1.7;U(new b(c,gt+.1,g),new b(gi.clamp(c+Math.cos(L)*.4,-1.2,1.3),gt+.17,gi.clamp(g+Math.sin(L)*.4,-3.15,-1.62)),.013,"wood",!1)}}for(const c of Ot)v(.05,gt+.04,c,2.68,.07,.06,"trim");for(let c=0;c<13;c++)v(-1.2+c*.205,gt+.1,-2.36,.035,.05,1.86,"trim");for(const c of[-2.85,-2.36,-1.87])v(.05,gt+.14,c,2.7,.025,.03,"trim",!1);for(let c=0;c<(l?80:230);c++){const g=-1.28+I(c,1)*2.68,E=-3.22+I(c,2)*1.62;D(new ln((.07+I(c,3)*.07)*(l?1.6:1),0).scale(1,.5,1),g,gt+.17+I(c,4)*.05,E,["leafLight","leaf","leafLight","leafDark"][c%4],[0,I(c,6)*3,(I(c,5)-.5)*.4],!1)}for(let c=0;c<(l?0:22);c++){const g=c<14,E=g?-1.2+c*.185+(I(c,11)-.5)*.1:1.33,L=g?-1.6:-3+(c-14)*.2,z=1+Math.floor(I(c,12)*4);for(let B=0;B<z;B++)D(new ln(.05-B*.006,0).scale(1,.8,1),E+Math.sin(B*1.7+c)*.02,gt+.05-B*.075,L+Math.cos(B+c)*.02,B%2?"leaf":"leafLight",[B,c,0],!1)}for(let c=0;c<(l?0:10);c++){const g=.12+I(c,9)*.08;D(new Tn(.03,g,5).rotateX(Math.PI),-1+I(c,7)*2.1,gt+.07-g/2,-3+I(c,8)*1.3,c%3?"coral":"flower",[0,I(c,10)*3,0],!1)}function ne(c,g,E,L){const z=Math.cos(E),B=Math.sin(E);for(const[W,rt,ot,dt,Gt,Vt,ye]of L)D(new ue(W,rt,ot),c+dt*z+Vt*B,5.16+Gt,g-dt*B+Vt*z,ye,[0,E,0],ye==="wood")}const ee={x:-.45,z:-2.05},pe={x:.45,z:-1,yaw:-.6};ne(ee.x,ee.z,0,[[.92,.14,.34,0,.1,0,"wood"],[.42,.06,.28,-.215,.2,.02,"light"],[.42,.06,.28,.215,.2,.02,"light"],[.92,.26,.06,0,.28,-.15,"wood"],[.4,.17,.06,-.215,.31,-.105,"light"],[.4,.17,.06,.215,.31,-.105,"light"],[.06,.12,.34,-.46,.24,0,"wood"],[.06,.12,.34,.46,.24,0,"wood"]]),ne(pe.x,pe.z,pe.yaw,[[.36,.14,.34,0,.1,0,"wood"],[.28,.06,.28,0,.2,.02,"light"],[.36,.26,.06,0,.28,-.15,"wood"],[.28,.17,.06,0,.31,-.105,"light"],[.05,.12,.34,-.155,.24,0,"wood"],[.05,.12,.34,.155,.24,0,"wood"]]);const oe={x:-.3,z:-.88};v(oe.x,5.32,oe.z,.42,.035,.27,"wood");for(const c of[-.17,.17])for(const g of[-.1,.1])v(oe.x+c,5.235,oe.z+g,.035,.15,.035,"wood");function nt(c,g,E){const L=E*1.3;y(c,5.16+L/2,g,E*.75,L,"terracotta",E);for(let z=0;z<(l?3:6);z++){const B=z*2.4+c*5;D(new ln(E*(.5+I(z,c+g)*.25),0),c+Math.cos(B)*E*.45,5.16+L+E*.35+I(z,g)*E*.3,g+Math.sin(B)*E*.45,z%2?"leaf":"leafLight",[B,z,0],!1),D(new ln(E*.28,0),c+Math.cos(B+1)*E*.6,5.16+L+E*.75+I(z,c)*E*.25,g+Math.sin(B+1)*E*.6,z%3?"coral":"flower",[0,0,0],!1)}}const ut=[[-.95,-1.45,.09],[.25,-1.45,.08],[1.05,-1.48,.085]];if(ut.forEach(([c,g,E])=>nt(c,g,E)),nt(-1.12,-.78,.11),nt(1.2,-2.6,.1),nt(oe.x+.08,oe.z,.045),!l){for(const c of[-1.6,-.66])U(new b(1.32,5.16,c),new b(1.32,5.82,c),.022,"dark"),v(1.32,5.8,c,.03,.03,.16,"wood");U(new b(1.32,5.79,-1.6),new b(1.32,5.79,-.66),.006,"light",!1),y(1,5.22,-.72,.13,.12,"wood",.15),y(1,5.285,-.72,.12,.012,"light",.12,!1),U(new b(ee.x,gt,-1.62),new b(ee.x,5.8,-1.62),.005,"dark",!1),y(ee.x,5.795,-1.62,.012,.03,"dark",.045),y(ee.x,5.72,-1.62,.032,.12,"glass",.032),y(ee.x,5.65,-1.62,.045,.02,"dark")}V(-.91,3.12,-.46,.58),V(1.02,3.12,-.46,.76),y(.01,3.27,-1.95,.2,.13,"light");for(const c of[-.18,.2])v(c,3.23,-1.09,.04,.05,1.32,"light");X(-1.19,3.15,-1.65,.42,1.7),X(1.26,3.15,-2.25,.4,.5),X(1.3,3.15,-.85,.32,.5),await a("observatory");const Et=-3.55,Lt=.2;y(Et,.62,Lt,1.47,.2,"light"),D(new Dr(1.25,.15,5,52),Et,2.42,Lt,"light",[Math.PI/2,0,0]);for(let c=0;c<10;c++){const g=c/10*Math.PI*2,E=Et+Math.cos(g)*1.25,L=Lt+Math.sin(g)*1.25;y(E,1.5,L,.09,1.8,"stone")}y(Et,.81,Lt,1.09,.13,"dark"),y(Et,.9,Lt,.87,.1,"glass");const Nt=1.53,re=.36,Ee=.56;y(Et,1.06,Lt,.44,.22,"light"),y(Et,1.195,Lt,.42,.05,"wood"),y(Et,Nt,Lt,re-.07,Ee,"dark");for(const c of[Nt-.295,Nt+.295])y(Et,c,Lt,re+.02,.03,"dark");y(Et,Nt+.335,Lt,.07,.05,"ochre",.05);const N=2,at=.48,it=new b(Et+Math.sin(N)*(re+at),Nt-.06,Lt+Math.cos(N)*(re+at));v(it.x,(.95+it.y)/2,it.z,.05,it.y-.95,.05,"dark"),v(it.x,it.y,it.z,.07,.07,.07,"ochre");const et=new b(-3.2,1.03,.8);v(et.x,et.y,et.z,.26,.16,.2,"dark"),v(et.x,1.07,et.z+.102,.18,.025,.006,"glass",!1);const K=new b(-2.92,1.52,1.07),wt=[new b(Et+.22,.97,Lt+.37),new b(et.x-.05,.97,et.z-.1),new b(et.x+.13,.97,et.z+.02),new b(-2.97,.9,1),new b(K.x,.9,K.z)];for(let c=0;c<wt.length-1;c++)U(wt[c],wt[c+1],.016,"dark",!1);v(K.x,1.1,K.z,.05,.44,.05,"dark");const ft=1.2;D(new ue(.5,.14,.07),K.x,ft,K.z,"dark",[0,.75,0]),D(new ue(.22,.05,.02).translate(0,0,.025),K.x,ft-.1,K.z,"light",[0,.75,0]),D(new Qe(.2,.2,.035,24).rotateX(Math.PI/2).rotateY(.75),K.x,K.y,K.z,"light");for(let c=0;c<(l?0:7);c++){const g=-Math.PI/2+c/6*Math.PI;D(new ue(.012,c%3?.035:.055,.008).rotateZ(-g).translate(Math.sin(g)*.15,Math.cos(g)*.15,.021).rotateY(.75),K.x,K.y,K.z,"dark",[0,0,0],!1)}for(const[c,g]of l?[]:[[-3.52,.86],[-3.78,.7]])v(c,1.01,g,.025,.12,.025,"dark"),D(new ue(.17,.11,.015),c,1.12,g,"dark",[0,.75,0]),D(new on(.14,.085),c+Math.sin(.75)*.009,1.12,g+Math.cos(.75)*.009,"glass",[0,.75,0],!1),U(new b(et.x-.13,.97,et.z),new b(c,.97,g),.01,"dark",!1);$(-4.4,Z(-4.4,-1.9),-1.9,.8),X(-5,Z(-5,1.7),1.7,.55,1.1),j(-3.55,.3,2.24,1.3,4),await a("reading-room"),v(3.33,.73,-.75,2.6,.28,3.3,"trim");const St=2.84,ie=Math.tan(.09),Zt=1.69,C=c=>St+Math.abs(c)*ie,S=c=>C(c)+.07,G=c=>S(c)+.04+.2*(1-(1-Math.min(c/.6,1))**2);function J(c,g,E,L,z=!0){const B=new Ms(c.map(([W,rt])=>new pt(W,rt)));D(new Lr(B,{depth:g,bevelEnabled:!1}).translate(0,0,-g/2),E,0,-.75,L,[0,-Math.PI/2,0],z)}const ct=(c,g,E,L=16)=>Array.from({length:L+1},(z,B)=>{const W=c+(g-c)*B/L;return[W,E(Math.abs(W))]});for(const c of[-1,1]){J([[0,St],[c*1.75,C(1.75)],[c*1.75,C(1.75)+.07],[0,St+.07]],2.9,3.33,"terracotta"),J([...ct(0,c*Zt,S,1),...ct(c*Zt,0,G)],2.76,3.33,"light");const g=(E,L)=>w.push(new Te().setAttribute("position",new ae([...E.toArray(),...L.toArray()],3)));g(new b(1.95,G(.6),-.75+c*.6),new b(4.71,G(.6),-.75+c*.6));for(let E=0;E<(l?0:21);E++){if(I(E,c+20)<.12)continue;const L=.5+I(E,c+21)*.3,z=.72+L/2,B=2.13+E*.12;g(new b(B,G(.72)+.007,-.75+c*.72),new b(B,G(.72+L)+.007,-.75+c*(.72+L))),D(new ue(.024,.006,L),B,G(z)+.004,-.75+c*z,"dark",[-c*.09,0,0],!1)}}D(new Qe(.08,.08,2.9,12).rotateZ(Math.PI/2),3.33,St+.02,-.75,"terracotta");const Q=G(Zt);J([...ct(.04,Zt,c=>G(c)+.002),[1.756,Q+.002],[1.756,Q+.01],...ct(Zt,.04,c=>G(c)+.01)],.06,3.87,"ochre",!1),v(3.87,Q-.17,1.01,.06,.36,.008,"ochre",!1);for(const c of[2.18,4.48])for(const g of[-2.18,.62]){const E=C(g+.75);v(c,(.7+E)/2,g,.22,E-.7,.22,"stone")}const kt=C(1.45);v(3.33,(.75+kt)/2,-2.2,2.5,kt-.75,.17,"stone");for(const c of[.92,2.47])v(3.33,c,-1.985,2.34,.05,.26,"wood");for(let c=0,g=2.2;g<4.38;c++){const E=Math.min(.11+I(c)*.1,4.44-g),L=1+I(c,1)*.47,z=.17+I(c,2)*.07;v(g+E/2,.945+L/2,-2.115+z/2,E,L,z,["wood","trim","dark"][c%3]),g+=E+.012}v(4.39,1.78,-.78,.04,1.82,2.54,"stone");for(const c of[-2.04,.48])v(4.515,1.78,c,.25,1.82,.04,"wood");for(const c of[.9,1.79,2.67])v(4.515,c,-.78,.25,.04,2.5,"wood");for(const[c,g]of[[0,.92],[1,1.81]])for(let E=0,L=-2.02;L<.42;E++){const z=E+c*50;if(I(z,8)>.9){L+=.1;continue}const B=Math.min(.07+I(z,5)*.08,.46-L),W=.5+I(z,6)*.3,rt=.17+I(z,7)*.05;v(4.62-rt/2,g+W/2,L+B/2,rt,W,B,["wood","trim","dark","terracotta","light","ochre"][E%6]),L+=B+.008}v(3.25,1.36,.05,1.7,.1,.7,"wood");for(const c of[2.7,3.8])v(c,1.03,.05,.07,.65,.55,"dark");v(3.25,1.43,-.03,.14,.04,.11,"dark"),D(new ue(.15,.28,.022),3.25,1.58,-.07,"dark",[-.22,0,0]),D(new on(.12,.24),3.25,1.58+.013*Math.sin(.22),-.07+.013*Math.cos(.22),"glass",[-.22,0,0],!1);for(const[c,g]of[[2.8,"ochre"],[3.7,"terracotta"]])y(c,1.43,.02,.07,.04,"dark"),D(new je(.075,14,10).scale(1,.85,1),c,1.5,.02,g,[0,0,0],!1);const Mt=3.96,zt=.1;if(v(Mt,1.42,zt,.25,.014,.17,"dark"),D(new ue(.25,.16,.01),Mt,1.5,zt-.1,"dark",[-.2,0,0]),D(new on(.22,.13),Mt,1.5+.006*Math.sin(.2),zt-.1+.006*Math.cos(.2),"glass",[-.2,0,0],!1),!l)for(let c=0;c<9;c++){const g=.02+.07*Math.abs(Math.sin(c*1.7+.4));D(new on(.012,g),Mt-.088+c*.022,1.5+.008*Math.sin(.2),zt-.1+.008*Math.cos(.2),"ochre",[-.2,0,0],!1)}j(3.35,.34,1.6,1.8,4),await a("greenhouse"),v(-1.9,.65,-.3,.8,.14,.6,"wood");for(let c=0;c<8;c++)v(-2.25+c*.1,.74,-.3,.065,.04,.58,"light");V(-1.9,.74,-.62,.8),V(-1.9,.74,.02,.8);for(const c of[-.55,-.05])v(-1.6,.37,c,.06,.42,.06,"dark");v(1.82,3.15,-1.6,.74,.12,.62,"wood"),V(1.82,3.2,-1.93,.74),V(1.82,3.2,-1.28,.74),v(2.02,.585,3.11,1.75,.25,1.8,"light");for(const c of[1.26,2.78])for(const g of[2.34,3.88])v(c,1.28,g,.045,1.2,.045,"dark");for(const c of[2.34,3.88])U(new b(1.26,1.9,c),new b(2.02,2.47,c),.035,"dark"),U(new b(2.78,1.9,c),new b(2.02,2.47,c),.035,"dark");v(2.02,2.47,3.11,.055,.05,1.6,"dark");for(const c of[1.26,2.78])v(c,1.91,3.11,.04,.04,1.6,"dark"),v(c,1.2,3.11,.025,.025,1.6,"dark");X(1.55,.72,3.12,.43,1.28),v(2.43,1.1,3.12,.46,.04,1.3,"wood");for(const c of[2.24,2.62])for(const g of[2.52,3.72])v(c,.895,g,.035,.37,.035,"dark");for(const c of[2.72,3.12]){v(2.43,1.145,c,.34,.05,.34,"dark");for(let g=0;g<(l?0:3);g++)for(let E=0;E<3;E++)D(new Tn(.02,.07,4),2.33+g*.1,1.2,c-.1+E*.1,"grass",[0,I(g*3+E,c)*3,0],!1)}y(2.43,1.195,3.5,.065,.15,"trim"),U(new b(2.48,1.17,3.5),new b(2.62,1.3,3.5),.015,"trim"),D(new Dr(.05,.009,4,12,Math.PI),2.4,1.27,3.5,"trim"),l||["light","ochre","terracotta","light"].forEach((c,g)=>D(new ue(.07,.1,.012),2.28+g*.1,1.17,3.72,c,[-.12,0,0])),v(3.05,.47,3.95,.05,.62,.05,"dark"),v(3.05,.88,3.95,.26,.2,.2,"terracotta"),D(new Qe(.1,.1,.26,14).rotateZ(Math.PI/2),3.05,.98,3.95,"terracotta"),v(3.05,.93,4.052,.13,.016,.006,"dark",!1);const Ht=new on(.95,1.54);D(Ht,1.64,2.185,3.11,"glass",[-Math.PI/2,0,-.643],!1),D(new on(.95,1.54),2.4,2.185,3.11,"glass",[-Math.PI/2,0,.643],!1),await a("planting"),[[-4.45,3.25,1.15],[-2.95,3.5,.75],[-1.66,3.5,1],[4.4,1.72,1.1],[4.62,3.42,.83],[-1.08,1.73,.9],[-3.5,-3.4,.83],[2.08,-3.53,.8]].forEach(([c,g,E])=>{const L=Z(c,g);X(c,L,g,.75,.72),$(c,L+.29,g,E)});for(const[c,g,E,L]of[[.22,-3.85,2.4,.37],[4.7,-2.65,.4,.45],[-5.1,-.95,.42,.9],[1.2,1.45,.6,.7]])X(c,Z(c,g),g,E,L);const Ct=(c,g)=>Math.hypot(c-Et,g-Lt)<1.6||[[-.85,.87,-.3,4.15],[-3.05,-.6,2,3.25],[2,4.7,-2.45,.95],[2.4,4.3,.8,1.75],[1.1,2.95,2.15,4.05],[-4.25,-2.85,1.45,2.4]].some(([E,L,z,B])=>c>E&&c<L&&g>z&&g<B);for(let c=0;c<90;c++){const g=(Yt()-.5)*10,E=(Yt()-.5)*8;if(Math.abs(g)<1.25||Math.abs(E)<.8||Ct(g,E)||l&&c%2)continue;const L=Z(g,E)+.1;D(new Tn(.05,.22,4),g,L,E,"grass",[0,Yt()*4,.2],!1),c%3===0&&D(new ln(.065,0),g,L+.15,E,c%2?"flower":"coral",[0,0,0],!1)}v(-.98,.92,3.525,.3,.07,.75,"wood");for(const c of[3.25,3.8])v(-.98,.68,c,.24,.48,.05,"dark");y(4.36,1.4,.75,.027,1.6,"dark"),y(4.36,2.21,.75,.13,.19,"flower"),await a("mansourah");const yt=6.7,Ut=-2.975;v(yt,-.03,Ut,2.2,.38,2.75,"stone"),v(5.5,.13,Ut+.6,.3,.06,.46,"light");const Tt=(c,g,E,L)=>{const z=E*1.25,B=z-E,W=.3,rt=Math.acos(-B/z),ot=z*Math.cos(W)-B,dt=[];for(let Gt=0;Gt<=8;Gt++){const Vt=Math.PI+W-Gt/8*(Math.PI+W-rt);dt.push([B+z*Math.cos(Vt),L+z*Math.sin(Vt)])}return[[-ot,0],...dt,...dt.reverse().map(([Gt,Vt])=>[-Gt,Vt]),[ot,0]].map(([Gt,Vt])=>new pt(c+Gt,g+Vt))},Jt=yt+.2,O=Ut+.05,lt=.16,xt=4,It=O+.5,mt=new Ms([new pt(-.36,0),...Tt(0,0,.24,.95),new pt(.36,0),new pt(.36,xt-.1),new pt(.2,xt),new pt(.02,xt-.06),new pt(-.18,xt+.03),new pt(-.36,xt-.05)]);for(const c of[-.15,0,.15])mt.holes.push(new Bo(Tt(c,1.66,.055,.18)));for(const c of[-.11,.11])mt.holes.push(new Bo(Tt(c,2.42,.07,.22)));D(new Lr(mt,{depth:.14,bevelEnabled:!1}),Jt,lt,It-.14,"sandstone"),[[[.86,0],[.86,.45],[.7,.62],[.62,1.3],[.68,1.5],[.55,2.1],[.5,2.8],[.42,3.1],[.4,3.6],[.3,xt-.05],[0,xt-.1]],[[.8,0],[.8,.7],[.66,.9],[.66,1.6],[.52,1.9],[.56,2.5],[.44,3],[.38,3.5],[.26,xt-.08],[0,xt-.05]]].forEach((c,g)=>{const E=new Ms([[0,0],...c].map(([L,z])=>new pt(L,z)));for(const L of[1.7,2.7])E.holes.push(new Bo(Tt(.25,L,.06,.2)));D(new Lr(E,{depth:.14,bevelEnabled:!1}),g?Jt-.5:Jt+.36,lt,It,"sandstone",[0,Math.PI/2,0])}),v(Jt,lt+.14,O-.43,.72,.28,.14,"sandstone"),v(Jt-.25,lt+.25,O-.43,.22,.5,.14,"sandstone");const Ft=(c,g,E,L,z=.025)=>v(Jt+c,lt+g,It+z/2,E,L,z,"sandstoneDark");for(const c of[-.33,.33])Ft(c,.71,.045,1.42);Ft(0,1.42,.7,.045),Ft(0,1.52,.72,.06,.05),Ft(0,1.63,.5,.04,.12);for(const c of[-.29,.29])Ft(c,2.94,.04,1.24);for(const c of[2.32,3.56])Ft(0,c,.62,.04);for(let c=0;c<(l?0:5);c++)for(let g=0;g<4+c%2;g++)D(new ue(.08,.08,.02),Jt-.18-c%2*.06+g*.12,lt+2.84+c*.14,It+.01,"sandstoneDark",[0,0,Math.PI/4],!1);for(let c=0;c<(l?0:9);c++)v(Jt-.32+c*.08,lt+3.76,It+.008,.07,.09,.016,c%2?"light":"dark",!1);v(yt+.05,lt+.2,Ut-1.15,1.9,.4,.16,"sandstoneDark"),v(yt-.8,lt+.32,Ut-1.1,.36,.64,.36,"sandstoneDark");for(let c=0;c<8;c++)c!==4&&c!==5&&v(yt-.6+c*.22,lt+.46,Ut-1.15,.1,.12,.16,"sandstoneDark");for(const[c,g,E]of[[.75,-.55,.16],[-.25,-.6,.13],[.9,.4,.12],[-.45,-.25,.1]])D(new ue(E*1.4,E,E),yt+c,lt+E/2,Ut+g,"sandstone",[0,I(c,g)*3,0]);const $t=new b(yt-.7,lt,Ut+.6);U($t,$t.clone().add(new b(.07,.6,-.04)),.07),U($t.clone().add(new b(.04,.35,0)),$t.clone().add(new b(-.2,.7,.1)),.035);for(let c=0;c<7;c++){const g=c*2.4,E=.12+I(c,7)*.2,L=new ln(.17+I(c,8)*.08,l?0:1);L.scale(1,.7,1),D(L,$t.x+Math.cos(g)*E,$t.y+.72+I(c,9)*.22,$t.z+Math.sin(g)*E,c%2?"leaf":"leafDark",[I(c,10),I(c,11),0],!1)}for(let c=0;c<(l?4:10);c++)D(new Tn(.05,.22,4),yt-1+I(c,12)*2,lt+.1,Ut-.75+I(c,13)*1.6,"grass",[0,I(c,14)*4,.2],!1);await a("building-site");const se=Ut+2.95,jt=.22;v(yt,-.03,se,2.2,.38,2.75,"stone"),v(yt,-.03,se+2.95,2.2,.38,2.75,"stone"),v(yt-.5,.13,Ut+1.475,.46,.06,.3,"light"),v(yt-.5,.13,se+1.475,.46,.06,.3,"light"),v(5.5,.13,se+.6,.3,.06,.46,"light"),v(yt-.05,.19,se,1.5,.06,1.42,"trim");const Rn=.12,Mn=.24,or=(c,g,E,L,z)=>{for(let B=0;B<Math.max(...z);B++)for(let W=B%2?-Mn/2:0;W<L;W+=Mn){const rt=Math.max(W,0),ot=Math.min(W+Mn,L);if(B>=z[Math.floor((rt+ot)/2/Mn)])continue;const dt=(rt+ot)/2;v(E==="x"?c+dt:c,jt+Rn*(B+.5),E==="z"?g+dt:g,E==="x"?ot-rt:.14,Rn,E==="z"?ot-rt:.14,"light")}},un=yt-.7,Oi=yt+.6,yn=se-.6,qe=se+.6;or(un,yn,"x",Oi-un,[9,9,8,8,7,6]),or(un,yn+.07,"z",qe-yn-.07,[9,8,7,5,4]),or(Oi,yn+.07,"z",qe-yn-.07,[7,6,4,3,2]),or(un,qe,"x",Oi-un,[3,2,0,0,2,1]);const zn=Oi+.2;for(const c of[yn,se,qe])for(const g of[zn-.08,zn+.08])U(new b(g,.16,c),new b(g,1.5,c),.014);for(const c of[.62,1.12]){v(zn,c,se,.24,.025,qe-yn+.05,"wood");for(const g of[zn-.08,zn+.08])v(g,c+.3,se,.018,.018,qe-yn,"dark")}U(new b(zn+.08,.2,yn),new b(zn+.08,1.1,qe),.01,"dark");const an=yt-.88,Se=se-.85,Ze=3.1,hn=.08;v(an,.21,Se,.3,.1,.3,"trim");for(const c of[-hn,hn])for(const g of[-hn,hn])U(new b(an+c,.26,Se+g),new b(an+c,Ze,Se+g),.016,"ochre");for(let c=.26,g=1;!l&&c<Ze-.1;c+=.28,g=-g)U(new b(an-g*hn,c,Se+hn),new b(an+g*hn,c+.28,Se+hn),.008,"ochre",!1),U(new b(an+hn,c,Se-g*hn),new b(an+hn,c+.28,Se+g*hn),.008,"ochre",!1);v(an,Ze+.07,Se+hn+.08,.16,.14,.14,"light");const Bs=yt+.55,zs=an-.55;for(const c of[-.06,.06])U(new b(zs,Ze,Se+c),new b(Bs,Ze,Se+c),.014,"ochre");U(new b(an+.05,Ze+.2,Se),new b(Bs-.2,Ze+.05,Se),.012,"ochre");for(let c=0;c<(l?0:8);c++){const g=an+.05+c*.17,E=c/8;U(new b(g,Ze,Se),new b(g+.085,Ze+.2-E*.15,Se),.007,"ochre",!1)}U(new b(an,Ze,Se),new b(an,Ze+.6,Se),.016,"ochre");for(const c of[Bs-.1,zs+.05])U(new b(an,Ze+.6,Se),new b(c,Ze+.03,Se),.005,"dark",!1);v(zs+.12,Ze-.05,Se,.2,.22,.2,"trim");const ei=yt+.1;v(ei,Ze-.03,Se,.1,.05,.16,"dark"),U(new b(ei,Ze-.05,Se),new b(ei,1.95,Se),.004,"dark",!1),v(ei,1.9,Se,.06,.08,.06,"dark");for(const c of[-.12,.12])U(new b(ei,1.86,Se),new b(ei+c,1.7,Se),.004,"dark",!1);v(ei,1.68,Se,.3,.03,.26,"wood"),v(ei,1.76,Se,.26,.13,.22,"light"),v(yt-.65,.18,se+1,.36,.04,.3,"wood");for(let c=0;c<2;c++)for(let g=0;g<2;g++)v(yt-.65,.26+c*Rn,se+.93+g*.15,.32,Rn,.14,"light");D(new Tn(.3,.26,10),yt+.55,.29,se+.98,"trim");for(const c of[yt-.25,yt+.15])v(c,.36,se+1.25,.03,.4,.03,"dark");for(let c=0;c<(l?0:6);c++)v(yt-.29+c*.08+.04,.48,se+1.25,.08,.07,.025,c%2?"dark":"ochre",!1);const Oe=jt+.42,Ue=yn+.3;v(yt-.05,Oe,Ue,1.1,.05,.36,"wood");for(const c of[yt-.55,yt+.45])for(const g of[Ue-.13,Ue+.13])v(c,(jt+Oe)/2,g,.04,Oe-jt,.04,"dark");if(v(yt-.05,jt+.12,Ue,1,.025,.3,"wood",!1),v(yt-.05,Oe+.36,yn+.085,.95,.42,.025,"wood"),!l)for(const[c,g]of[[-.35,.18],[-.22,.12],[.12,.2],[.3,.14]])v(yt-.05+c,Oe+.42-g/2,yn+.105,.025,g,.02,"dark",!1);const kr=yt-.38;v(kr,Oe+.04,Ue+.02,.12,.03,.1,"dark"),D(new ue(.13,.24,.018),kr,Oe+.17,Ue-.01,"dark",[-.25,0,0]);const T=-.25,k=Ue-.01+.011*Math.cos(T),Y=Oe+.17+.011*Math.sin(-T);l?D(new on(.11,.2),kr,Y,k,"glass",[T,0,0],!1):["ochre","signGreen","terracotta","glass","sandstone","signGreen","terracotta","ochre","dark"].forEach((g,E)=>{const L=E%3-1,z=1-Math.floor(E/3);D(new on(.034,.05),kr+L*.036,Y+z*.052*Math.cos(T),k-z*.052*Math.sin(-T),g,[T,0,0],!1)});const q=yt-.02;v(q-.08,Oe+.035,Ue+.06,.09,.015,.16,"dark"),v(q+.1,Oe+.06,Ue-.02,.1,.07,.1,"wood"),D(new Tn(.1,.2,12,1,!0),q+.1,Oe+.19,Ue+.02,"ochre",[.5,0,0]),U(new b(q-.04,Oe+.035,Ue+.06),new b(q+.06,Oe+.04,Ue+.01),.006,"dark",!1);const H=yt+.3;if(v(H-.03,Oe+.05,Ue,.16,.05,.16,"terracotta"),v(H+.13,Oe+.04,Ue+.03,.07,.03,.07,"ochre"),!l)for(let c=0;c<4;c++)for(const g of[-1,1])v(H-.09+c*.04,Oe+.035,Ue+g*.09,.015,.01,.025,"light",!1);y(H+.05,Oe+.035,Ue+.13,.045,.02,"light"),v(H+.05,Oe+.06,Ue+.13,.012,.03,.012,"dark",!1),y(yt+.05,jt+.2,Ue+.45,.11,.035,"wood");for(const c of[.4,2.5,4.6])U(new b(yt+.05,jt+.19,Ue+.45),new b(yt+.05+Math.cos(c)*.11,jt,Ue+.45+Math.sin(c)*.11),.01,"dark",!1);const vt=new b(yt+.48,Oe+.03,Ue-.1),At=new b(yt+.44,Oe+.32,Ue-.05),Bt=new b(yt+.3,Oe+.4,Ue+.02);U(vt,At,.008,"dark"),U(At,Bt,.008,"dark"),D(new Tn(.05,.07,10,1,!0),Bt.x,Bt.y-.02,Bt.z,"ochre",[0,0,.6]);const Dt=un+.5,Xt=un+.94;if(v(Dt,jt+.3,qe,.06,.6,.06,"dark"),v(Xt,jt+.5,qe,.06,1,.06,"dark"),v((Dt+Xt)/2,jt+.42,qe+.05,Xt-Dt+.06,.035,.035,"ochre"),!l)for(let c=0;c<3;c++)v(Dt+.09+c*.13,jt+.42,qe+.05,.05,.04,.04,"dark",!1);const Kt=Dt-.2,qt=qe+.2;v(Kt,.36,qt,.08,.4,.08,"trim"),D(new ue(.14,.02,.11),Kt,.58,qt,"dark",[.5,0,0]),D(new Qe(.04,.04,.015,12),Kt,.596,qt+.009,"terracotta",[.5,0,0],!1);const le=jt+.97;v(Xt+.21,le,qe,.48,.03,.03,"dark"),[[.1,.085],[.25,.06],[.37,.04]].forEach(([c,g])=>{const E=le-.07-g;D(new Qe(g,g,.022,14),Xt+c,E,qe,"ochre",[Math.PI/2,0,0]),l||U(new b(Xt+c,le,qe),new b(Xt+c,E+g,qe),.004,"dark",!1)});const ve=un+.27,be=qe-.21,Pe=jt+.56;if(v(ve-.16,jt+.45,be,.025,.9,.025,"dark"),v(ve+.16,jt+.28,be,.025,.56,.025,"dark"),v(ve,Pe,be,.34,.02,.02,"dark"),["terracotta","glass","ochre"].forEach((c,g)=>v(ve-.1+g*.1,Pe-.13,be,.085,.2,.03,c)),v(ve-.03,jt+.82,be+.02,.22,.13,.03,"light"),D(new ue(.05,.05,.03),ve-.08,jt+.75,be+.02,"light",[0,0,Math.PI/4],!1),!l)for(let c=0;c<3;c++)v(ve-.08+c*.05,jt+.82,be+.037,.02,.02,.005,"dark",!1);const fe=yt+.05,Wt=se+2.6,xe=.16,Me=.72;v(fe,xe+.09,Wt,.7,.18,.5,"light"),v(fe,xe+.2,Wt,.6,.04,.4,"trim");const ke=new Ms;ke.moveTo(0,0),ke.bezierCurveTo(-.05,.08,-.38,.26,-.38,.5),ke.bezierCurveTo(-.38,.68,-.24,.76,-.15,.76),ke.bezierCurveTo(-.07,.76,-.02,.71,0,.64),ke.bezierCurveTo(.02,.71,.07,.76,.15,.76),ke.bezierCurveTo(.24,.76,.38,.68,.38,.5),ke.bezierCurveTo(.38,.26,.05,.08,0,0);const Ei=new Lr(ke,{depth:.12,bevelEnabled:!0,bevelThickness:.04,bevelSize:.035,bevelSegments:l?1:3,curveSegments:l?8:18});Ei.translate(0,0,-.06),D(Ei,fe,xe+.25,Wt,"terracotta",[0,Me,0]);const nn=Wt+.85,qn=xe+.38,Le=[[-.95,0],[-.55,0],[-.45,.06],[-.35,0],[-.25,0],[-.19,-.08],[-.1,.62],[-.01,-.18],[.06,0],[.22,0],[.34,.13],[.46,0],[.95,0]];for(let c=1;c<Le.length;c++){const[g,E]=Le[c-1],[L,z]=Le[c];U(new b(fe+g,qn+E,nn),new b(fe+L,qn+z,nn),.022,"signGreen",c===1),!l&&c<Le.length-1&&D(new je(.022,8,6),fe+L,qn+z,nn,"signGreen",[0,0,0],!1)}for(const c of[-.9,.9])v(fe+c,(xe+qn)/2,nn,.05,qn-xe,.05,"dark");v(fe-.3,xe+.16,Wt-.95,.6,.04,.16,"wood");for(const c of[-.55,-.05])v(fe+c,xe+.08,Wt-.95,.04,.14,.12,"dark");y(fe+.62,xe+.1,Wt-.85,.08,.16,"terracotta",.1),D(new ln(.14,l?0:1).scale(1,1.2,1),fe+.62,xe+.33,Wt-.85,"leaf",[0,0,0],!1),await a("geometry-batches");const rn=[],cn=[];for(const[c,g]of A){const E=new Ln({color:R[c],roughness:.86,metalness:0,transparent:!0,opacity:0,side:c==="glass"?vn:Fi}),L=F.includes(c);L&&(E.onBeforeCompile=W=>{W.uniforms.uTime=ii,W.uniforms.uLife=Nc,W.vertexShader=`uniform float uTime; uniform float uLife;
`+W.vertexShader,W.vertexShader=W.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*2.1 + position.z + uTime*.85)*.022*uLife; transformed.z += cos(position.x*1.6 + uTime*.7)*.018*uLife;`)}),await a(`merge-${c}`);const z=br(g);g.forEach(W=>W.dispose());const B=new bt(z,E);B.castShadow=c!=="glass",B.receiveShadow=!0,f.add(B),c!=="glass"&&rn.push(B),cn.push({material:E,flora:L,glass:c==="glass",key:c})}const He=new Ss({color:7830397,transparent:!0,opacity:.26,depthWrite:!1}),Je=new ms(br(w),He);w.forEach(c=>c.dispose()),f.add(Je);const Bi=He.clone();Bi.opacity=.06;const ni=new ms(Je.geometry,Bi);ni.position.set(.019,.008,-.013),f.add(ni);const Uc=new _e;f.add(Uc);const Jo=new a_({color:6917045,transparent:!0,opacity:0,dashSize:.16,gapSize:.12,depthWrite:!1});for(let c=-6;c<=6;c++)for(const g of["x","z"]){const E=g==="x"?[new b(-6,.04,c),new b(6,.04,c)]:[new b(c,.04,-5),new b(c,.04,5)],L=new Ec(new Te().setFromPoints(E),Jo);L.computeLineDistances(),Uc.add(L)}for(const[c,g]of[[-1.55,-3.35],[1.55,-3.35],[-1.55,-.25],[1.55,-.25]]){const E=new Ec(new Te().setFromPoints([new b(c,0,g),new b(c,7.6,g)]),Jo);E.computeLineDistances(),Uc.add(E)}const ii={value:0},Nc={value:0},Fc=new bn({transparent:!0,depthWrite:!1,uniforms:{uTime:ii,uOpacity:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float w=sin(vUv.y*92.-uTime*1.6+sin(vUv.x*24.)*1.4);float line=smoothstep(.9,1.,w);vec3 c=mix(vec3(.29,.56,.58),vec3(.70,.84,.77),vUv.x*.45+line*.4);gl_FragColor=vec4(c,uOpacity*.88);}"});function $o(c,g,E,L,z,B=!1){const W=new bt(new on(L,z),Fc);W.position.set(c,g,E),B||(W.rotation.x=-Math.PI/2),f.add(W)}$o(.01,.495,1.965,1.25,3.93),$o(-1.7075,.495,2.61,2.185,.8),$o(.01,3.213,-1.09,.34,1.32);const Oc=new bt(new Pr(.17,20),Fc);Oc.rotation.x=-Math.PI/2,Oc.position.set(.01,3.34,-1.95),f.add(Oc);const Bc=new bt(new ue(1.18,.3,.78),new Ln({color:R.light,transparent:!0,opacity:0}));Bc.position.set(.01,3.06,-.04),f.add(Bc),$o(.01,3.216,-.04,.96,.8);const ks={value:0},Wp=new bn({transparent:!0,side:vn,depthWrite:!1,uniforms:{uTime:ii,uOpacity:ks},vertexShader:"uniform float uTime;varying vec2 vUv;void main(){vUv=uv;vec3 p=position;p.z+=sin(uv.y*13.+uTime*3.+uv.x*9.)*.014;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float streams=sin(vUv.x*58.+sin(vUv.y*8.+uTime*2.)*.7);float drops=sin(vUv.y*39.+uTime*5.8+sin(vUv.x*16.)*3.);float streak=smoothstep(.20,1.,streams)*.45+smoothstep(.65,1.,drops)*.22;vec3 water=mix(vec3(.27,.59,.63),vec3(.91,.98,.93),streak+pow(1.-vUv.y,7.)*.5);float edge=smoothstep(0.,.08,vUv.x)*smoothstep(0.,.08,1.-vUv.x);gl_FragColor=vec4(water,uOpacity*edge*.92);}"}),_h=new bt(new on(1.03,2.72,12,36),Wp);_h.position.set(.01,1.855,.37),f.add(_h);const Xp=new bn({transparent:!0,depthWrite:!1,uniforms:{uTime:ii,uOpacity:ks},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float r=length((vUv-.5)*vec2(1.,1.35));float rings=smoothstep(.77,1.,sin(r*58.-uTime*3.));float fade=(1.-smoothstep(.23,.49,r));gl_FragColor=vec4(.86,.97,.92,(rings*.6+.12)*fade*uOpacity);}"}),zc=new bt(new on(1.22,1.1),Xp);zc.rotation.x=-Math.PI/2,zc.position.set(.01,.505,.85),f.add(zc);const vh=new Te,xh=[];for(let c=0;c<44;c++)xh.push((Yt()-.5)*.95,Yt(),Yt());vh.setAttribute("position",new ae(xh,3));const qp=new bn({transparent:!0,depthWrite:!1,uniforms:{uTime:ii,uOpacity:ks},vertexShader:"uniform float uTime;void main(){float t=fract(position.y+uTime*.5);vec3 p=vec3(.01+position.x*(1.+t*.25),.55+sin(t*3.14159)*.32,.39+position.z*.52+t*.25);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=2.4;}",fragmentShader:"uniform float uOpacity;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(.9,.99,.95,(1.-d*2.)*uOpacity*.8);}"});f.add(new gs(vh,qp)),await a("drones");const Ko=[],Hr=[],kc=[];function ar(c,g,E,L,z){c.translate(g,E,L),z.push(c.index?c.toNonIndexed():c),c.index&&c.dispose()}ar(new je(.21,12,7).scale(1,.42,1.2),0,0,0,Ko),ar(new ue(.12,.045,.13),0,.065,.04,Hr),ar(new je(.055,8,6),0,-.02,.22,Hr);for(const c of[-.31,.31])for(const g of[-.29,.29]){const E=new ue(.4,.025,.035);E.rotateY(-Math.atan2(g,c)),ar(E,c*.5,0,g*.5,Hr);const L=new Dr(.15,.016,5,20);L.rotateX(Math.PI/2),ar(L,c,.016,g,Ko),ar(new Qe(.028,.028,.065,7),c,.025,g,Hr),ar(new Pr(.125,16).rotateX(-Math.PI/2),c,.051,g,kc)}const Mh=br(Ko),Yp=br(Hr),Zp=br(kc);[...Ko,...Hr,...kc].forEach(c=>c.dispose());const Hc=new Ln({color:15919571,emissive:10466520,emissiveIntensity:0,roughness:.7,transparent:!0,opacity:0}),Gc=new Ln({color:4811879,emissive:7311272,emissiveIntensity:0,roughness:.55,transparent:!0,opacity:0}),yh=new mi({color:7833464,side:vn,transparent:!0,opacity:0,depthWrite:!1}),Vc=new Ss({color:5866413,transparent:!0,opacity:0}),Jp=new dc(Mh,28),jo=new Te;jo.setAttribute("position",new ae([-.42,.03,.39,.42,.03,.39,-.42,.03,-.39,.42,.03,-.39],3)),jo.setAttribute("aColor",new ae([1,.25,.2,.3,1,.45,1,1,1,1,1,1],3)),jo.setAttribute("aBlink",new ae([0,0,1,1],1));const Sh={value:0},$p=new bn({transparent:!0,depthWrite:!1,blending:ys,uniforms:{uTime:ii,uOpacity:Sh,uScale:{value:h.getPixelRatio()}},vertexShader:"uniform float uTime;uniform float uScale;attribute vec3 aColor;attribute float aBlink;varying vec3 vColor;varying float vOn;void main(){vColor=aColor;float k=fract(uTime*.8+modelMatrix[3][0]*.31);vOn=aBlink>.5?step(.86,k):.75+.25*sin(uTime*2.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=(aBlink>.5?13.:11.)*uScale;}",fragmentShader:"uniform float uOpacity;varying vec3 vColor;varying float vOn;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,1.6);gl_FragColor=vec4(mix(vColor,vec3(1.),smoothstep(.22,0.,d)*.7),a*vOn*uOpacity);}"}),Wc=[];for(let c=0;c<(l?1:3);c++){const g=new _e;g.add(new bt(Mh,Hc),new bt(Yp,Gc),new bt(Zp,yh),new ms(Jp,Vc),new gs(jo,$p)),f.add(g),Wc.push(g)}await a("room-details");const Kp=new Dr(1,.045,3,48),Qo=[0,1,2].map(()=>new mi({color:16773316,transparent:!0,opacity:0,depthWrite:!1})),jp=Qo.map(c=>{const g=new bt(Kp,c);return g.rotation.x=Math.PI/2,g.position.set(3.25,1.418,-.02),f.add(g),g}),Xc=new Ad(16761466,0,2.6,1.6);Xc.position.set(3.25,2.1,.1),f.add(Xc);const zi=new Ln({color:3095352,roughness:.6,transparent:!0,opacity:0}),ta=new _e;ta.position.copy(K),ta.rotation.y=.75,f.add(ta);const ea=new _e;ea.position.z=.024,ea.add(new bt(new ue(.014,.15,.008).translate(0,.065,0),zi)),ta.add(ea,new bt(new Qe(.022,.022,.02,10).rotateX(Math.PI/2).translate(0,0,.025),zi));let na=-Math.PI/2;const ia=l?.5:1,ra=document.createElement("canvas");ra.width=1024*ia,ra.height=256*ia;const Qp=ra.getContext("2d"),Hs=new xd(ra);Hs.colorSpace=In,Hs.anisotropy=4;const qc=new Ln({map:Hs,roughness:.9,transparent:!0,opacity:0}),sa=new _e;sa.position.set(Et,Nt,Lt),f.add(sa),sa.add(new bt(new Qe(re,re,Ee,40,1,!0),qc),new bt(new ue(.02,Ee,.012).translate(0,0,re+.004),zi));const Gs=new _e;Gs.position.copy(it),Gs.rotation.y=N-Math.PI/2,Gs.add(new bt(new ue(at,.014,.014).translate(-at/2,0,0),zi),new bt(new ue(.022,.045,.022).translate(-at+.011,0,0),zi)),f.add(Gs);const Gr=[];let Vs=0,oa=-.2;function wh(){const c=Qp,g=1024,E=256;c.setTransform(ia,0,0,ia,0,0),c.fillStyle="#f6efdf",c.fillRect(0,0,g,E),c.strokeStyle="rgba(206, 130, 101, 0.35)",c.lineWidth=4,c.beginPath();for(let B=0;B<g;B+=64)c.moveTo(B,0),c.lineTo(B,E);for(let B=32;B<E;B+=32)c.moveTo(0,B),c.lineTo(g,B);c.stroke(),c.strokeStyle="#2f3b38",c.lineWidth=14,c.lineJoin="round",c.beginPath();let L=0,z=0;Gr.forEach((B,W)=>{const rt=(N-B.angle)/(Math.PI*2),ot=(rt-Math.floor(rt))*g,dt=E/2-B.level/Ee*E;W===0?c.moveTo(ot,dt):(ot<L&&(c.lineTo(ot+g,dt),c.moveTo(L-g,z)),c.lineTo(ot,dt)),L=ot,z=dt}),c.stroke(),Hs.needsUpdate=!0}wh();const aa=document.createElement("canvas");aa.width=512,aa.height=192;const t0=aa.getContext("2d"),Ws=new xd(aa);Ws.colorSpace=In,Ws.anisotropy=4;const ca=new Ln({map:Ws,roughness:.7,transparent:!0,opacity:0});function Eh(c,g,E,L,z,B){const W=new on(c,g),rt=W.attributes.uv;for(let ot=0;ot<rt.count;ot++)rt.setXY(ot,Ce(E,z,rt.getX(ot)),Ce(L,B,rt.getY(ot)));return W}const la=new _e;la.position.set(K.x,ft,K.z),la.rotation.y=.75,la.add(new bt(Eh(.48,.12,0,1/3,1,1).translate(0,0,.0365),ca),new bt(Eh(.2,.04,0,0,320/512,1/3).translate(0,-.1,.0365),ca)),f.add(la);let Vr=null,kn=null,ua;const e0=()=>ua===void 0||kn===null!=(ua===null)||kn!==null&&Math.abs(kn-ua)>=5e-4;function Th(){const c=t0;c.fillStyle="#e3dccb",c.fillRect(0,0,512,128),c.fillStyle="#f1e9d7",c.fillRect(0,128,320,64),c.textAlign="center",c.textBaseline="middle",c.fillStyle="#2f3b38",c.font='600 40px "Helvetica Neue", Arial, sans-serif',c.fillText("g CO₂e",160,162),c.beginPath(),c.arc(303,108,9,0,Math.PI*2),c.fill(),c.font='bold 96px "Helvetica Neue", Arial, sans-serif';const g=kn===null?null:Math.min(Math.max(kn,0),999.99)*100;let E=0;for(let L=0;L<5;L++){const z=4-L,B=18+z*94+(z>=3?16:0),W=10,rt=84,ot=108;if(c.save(),c.beginPath(),c.rect(B,W,rt,ot),c.clip(),c.fillStyle=L<2?"#7e3326":"#2f3b38",c.fillRect(B,W,rt,ot),c.fillStyle="#fbf6ea",g===null)c.fillText("–",B+rt/2,W+ot/2+4);else{const Gt=L===0?g%10:Math.floor(g/10**L)%10+E;E=Math.max(0,Gt-9);const Vt=Math.floor(Gt);for(let ye=Vt-1;ye<=Vt+2;ye++)c.fillText(String((ye%10+10)%10),B+rt/2,W+ot/2+4+(ye-Gt)*ot*.95)}const dt=c.createLinearGradient(0,W,0,W+ot);dt.addColorStop(0,"rgba(0, 0, 0, 0.4)"),dt.addColorStop(.2,"rgba(0, 0, 0, 0)"),dt.addColorStop(.8,"rgba(0, 0, 0, 0)"),dt.addColorStop(1,"rgba(0, 0, 0, 0.4)"),c.fillStyle=dt,c.fillRect(B,W,rt,ot),c.restore()}ua=kn,Ws.needsUpdate=!0}Th();const Wr=new _e;Wr.visible=!1,f.add(Wr);const ha=new Ss({color:3894074,transparent:!0,opacity:0,depthTest:!1}),fa=new mi({color:3894074,transparent:!0,opacity:0,depthWrite:!1,blending:ys}),da=new _e;da.add(new ms(new dc(new ue(1,1,1)),ha),new bt(new ue(1,1,1),fa));const pa=new _e;pa.add(new ms(new dc(new Qe(1,1,1,48),30),ha),new bt(new Qe(1,1,1,48),fa)),Wr.add(da,pa),Wr.traverse(c=>c.renderOrder=3);const n0=[[0,1.66,-1.75,2.75,2.4,2.75],[.08,4.05,-1.86,3,1.95,3],[Et,1.6,Lt,2.9,2,2.9],[.08,5.85,-1.9,2.95,1.5,2.85]];function i0(c){const[g,E,L,z,B,W]=n0[c];Wr.position.set(g,E,L),da.visible=c!==2,pa.visible=c===2,(c===2?pa:da).scale.set(c===2?z/2:z,B,c===2?W/2:W)}const bh={light:[8159365,2776218,9072462,3894074],dark:[9349826,9226482,14206630,10934171]};let Xs=null,Xr=0;const Yc=new Ln({color:14248271,roughness:.6,transparent:!0,opacity:0}),ma=new _e;ma.position.set(3.185,.9,3.9),ma.add(new bt(new ue(.012,.2,.012).translate(0,.1,0),zi),new bt(new ue(.008,.06,.085).translate(0,.17,.042),Yc)),f.add(ma);const Ah=new Ln({color:16447212,roughness:.8,transparent:!0,opacity:0}),qr=new bt(new ue(.11,.075,.006),Ah);qr.visible=!1,f.add(qr);let qs="idle",Ys=0,Ti=-1,Rh=!1,Zs=0,Js=null,ga=0,Ch=0,Ph=0;const $s=(c,g,E)=>c<g?Math.min(g,c+E):Math.max(g,c-E);function r0(){return Zs!==(Zc()?1:0)||ga!==(Lh()?1:0)||Xr!==(Xs===null?0:1)||Ys!==(qs==="idle"?0:1)||Ti>=0||Qr!==(xo?1:0)}const Zc=()=>Rh||(Js??-1)>=2,Lh=()=>Zc()||Js!==null;function s0(c,g,E,L){Ph=g;const z=Hn||Ge||!La;if(Zs=$s(Zs,Zc()?1:0,Ge?1:c/.3),ga=$s(ga,Lh()?1:0,Ge?1:c/.3),z||(Ch+=c),jp.forEach((dt,Gt)=>{const Vt=(Ch*.55+Gt/3)%1,ye=.06+Vt*.5;dt.scale.set(ye,ye,1),Qo[Gt].opacity=(1-Vt)*Zs*g*.9,Qo[Gt].visible=Qo[Gt].opacity>.01}),Xc.intensity=ga*g*2.4,!z){const dt=Ce(-Math.PI/2,Math.PI/2,Math.min(fo/8,1));na=Ce(na,dt,Math.min(c*3,1))}if(ea.rotation.z=-na,zi.opacity=g,zi.visible=g>.01,qc.opacity=g,qc.visible=g>.01,ca.opacity=g,ca.visible=g>.01,Vr===null||kn===null||z?kn=Vr:(kn=Ce(kn,Vr,Math.min(c*3,1)),Math.abs(Vr-kn)<2e-4&&(kn=Vr)),g>.01&&e0()&&Th(),!z){const dt=Ce(-.2,.2,Math.sqrt(Math.min(fo/8,1)));oa=Ce(oa,dt,Math.min(c*3,1)),Vs-=c*.22*g}sa.rotation.y=Vs,Gs.rotation.z=-Math.asin((oa+Nt-it.y)/at);const B=Gr[Gr.length-1];if(!B||B.angle-Vs>=.066){for(Gr.push({angle:Vs,level:oa});Gr[0].angle-Vs>Math.PI*1.7;)Gr.shift();wh()}const W=Ne>=.6?2:Ne>=.28?1:0;Xr=$s(Xr,Xs===null?0:1,Ge?1:c/.25);const rt=Math.max(g,L)*E;Wr.visible=Xr*rt>.01;const ot=(Fa?bh.dark:bh.light)[Ne>=.96?3:Ne>=.6?2:W];if(ha.color.setHex(ot),fa.color.setHex(ot),ha.opacity=Xr*rt*.95,fa.opacity=Xr*rt*.22,Qr=$s(Qr,xo?1:0,Ge?1:c/.15),Rf.opacity=Qr*g*.85,Cf.opacity=Qr*g*.24,xr.visible=Qr*g>.01,Ys=$s(Ys,qs==="idle"?0:1,Ge?1:c/.35),ma.rotation.x=Ce(-Math.PI/2,0,1-(1-Ys)**2),Yc.opacity=g,Yc.visible=g>.01,Ti>=0){Ti=Math.min(1,Ti+c/.8);const dt=Ti,Gt=Math.min(dt/.7,1),Vt=Math.max(0,(dt-.7)/.3);qr.position.set(3.05,Ce(1.45,.93,Gt*Gt),Ce(4.08,3.98,Vt)),qr.rotation.set(0,0,(1-Gt)*.5),Ah.opacity=g,qr.visible=!0,Ti>=1&&(Ti=-1,qr.visible=!1,qs="idle")}}const Dh=[],Ks=new mi({color:13607508,side:vn,transparent:!0,opacity:0});for(let c=0;c<(l?0:5);c++){const g=new _e;for(const E of[-1,1]){const L=new bt(new Pr(.09,4),Ks);L.position.x=E*.065,L.rotation.y=E*.3,g.add(L)}f.add(g),Dh.push(g)}await a("lighting");const Ih=[[4.36,2.21,.75],[3.3,1.7,-1.2],[-3.55,1.25,.2],[.05,1.6,-1.8],[2.02,1.3,3.11]],o0=(l?[]:Ih).map(([c,g,E])=>{const L=new Ad(16758117,0,3.4,1.6);return L.position.set(c,g,E),f.add(L),L}),_a=new mi({color:16765578,transparent:!0,opacity:0,depthWrite:!1}),a0=new je(.075,10,8);Ih.forEach(([c,g,E])=>{const L=new bt(a0,_a);L.position.set(c,g+(c===4.36?0:.35),E),f.add(L)});const Uh=new Te,Nh=[];for(let c=0;c<(l?25:70);c++)Nh.push((Yt()-.5)*10,.7+Yt()*2.6,(Yt()-.5)*8);Uh.setAttribute("position",new ae(Nh,3));const Fh={value:0},c0=new bn({transparent:!0,depthWrite:!1,blending:ys,uniforms:{uTime:ii,uOpacity:Fh},vertexShader:"uniform float uTime;varying float vBlink;void main(){vec3 p=position;float s=position.x*1.7+position.z*2.3;p.x+=sin(uTime*.45+s)*.35;p.y+=sin(uTime*.7+s*1.3)*.22;p.z+=cos(uTime*.38+s)*.35;vBlink=smoothstep(.15,1.,sin(uTime*1.6+s*4.)*.5+.5);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=7.;}",fragmentShader:"uniform float uOpacity;varying float vBlink;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,2.);gl_FragColor=vec4(1.,.86,.48,a*vBlink*uOpacity);}"});f.add(new gs(Uh,c0));const ri=[],Oh=new Ln({color:9216864,roughness:1}),js=[9216864,7312469,10926448,5141841].map(c=>new Ln({color:c,roughness:1})),l0=new Qe(.025,.035,.45,6),u0=new ln(.19,1),Qs=new Ss({transparent:!0,depthWrite:!1}),h0=new Te().setFromPoints([[0,0,0],[0,.62,0],[0,.3,0],[-.14,.5,.03],[0,.36,0],[.15,.56,-.04],[0,.44,0],[.04,.6,.13],[0,.48,0],[-.05,.62,-.12]].map(([c,g,E])=>new b(c,g,E)));function Jc(c,g=Ge||Hn){const E=new _e;E.userData.seed=tr,E.add(new ms(h0,Qs));const L=new bt(l0,Oh);L.position.y=.23,L.castShadow=!0,E.add(L);const z=Math.floor(Yt()*js.length),B=2+Math.floor(Yt()*3);for(let W=0;W<B;W++){const rt=js[(z+W)%js.length],ot=new bt(u0,rt);ot.position.set((Yt()-.5)*.28,.42+Yt()*.18,(Yt()-.5)*.22),ot.scale.setScalar(.75+Yt()*.5),ot.castShadow=!0,E.add(ot)}return E.position.copy(c),E.rotation.y=Yt()*Math.PI*2,E.userData.size=1.15+Yt()*.6,E.scale.setScalar(g?E.userData.size:.001),f.add(E),ri.push({group:E,age:g?1:0,grown:g}),Ae(),ri.length}const ki=new f_,Bh=new pt;await a("seasons");const zh={spring:{leaf:9417562,leafLight:15913950,leafDark:5933653,grass:11126918,flower:15908818,coral:16313585,plants:[10272866,15777744,12572542,5933653]},summer:{leaf:7312456,leafLight:9941854,leafDark:4156230,grass:9678190,flower:15776074,coral:14248271,plants:[7312456,9941854,5141841,4156230]},autumn:{leaf:13203247,leafLight:14722624,leafDark:6123071,grass:11904106,flower:14191162,coral:12076335,plants:[13795631,15052101,11027755,6123071]},winter:{leaf:14410721,leafLight:15922676,leafDark:5204572,grass:13818321,flower:15199467,coral:15199467,plants:[14936808,5204572,15922676,6125415]}},kh={spring:1,summer:1,autumn:.45,winter:0},f0={spring:[16173787,16510707,15906250],summer:[],autumn:[13795631,15052101,11027755,12738346],winter:[16251386,15660021]};let $e="summer",cr=null;const $c=new Ln({roughness:1,transparent:!0,opacity:0,side:vn});async function d0(){const c={s:f.scale.clone(),r:f.rotation.y};f.scale.set(1,1,1),f.rotation.y=0,f.updateMatrixWorld(!0);const g=new b(0,-1,0),E=[];for(let B=0;B<(l?120:260)&&E.length<(l?80:170);B++){B&&B%8===0&&await vs(),ki.set(new b((Yt()-.5)*10.4,12,(Yt()-.5)*8.4),g);const W=ki.intersectObjects(rn,!1)[0];W?.face&&W.face.normal.y>.7&&E.push(W.point.clone())}f.scale.copy(c.s),f.rotation.y=c.r,f.updateMatrixWorld(!0);const L=new ps(new Pr(.05,7).rotateX(-Math.PI/2),$c,E.length),z=new Re;E.forEach((B,W)=>{P.position.set(B.x,B.y+.012,B.z),P.rotation.set(0,Yt()*Math.PI,0);const rt=.7+Yt()*.8;P.scale.set(rt*1.6,1,rt),P.updateMatrix(),z.copy(P.matrix),L.setMatrixAt(W,z),L.setColorAt(W,new te(16777215))}),L.receiveShadow=!0,L.userData.total=E.length,f.add(L),cr=L}let va=!1;function Hh(){if(!cr)return;const c=f0[va?"winter":$e],g=new te;for(let E=0;E<cr.userData.total;E++)g.setHex(c.length?c[E%c.length]:16777215),cr.setColorAt(E,g);cr.instanceColor.needsUpdate=!0,cr.count=Math.round(cr.userData.total*(va||$e==="winter"||$e==="autumn"?1:$e==="spring"?.45:0))}const Gh=new Te,Vh=[];for(let c=0;c<(l?30:70);c++)Vh.push((Yt()-.5)*11,Yt(),(Yt()-.5)*9);Gh.setAttribute("position",new ae(Vh,3));const Wh={value:0},Xh={value:12},qh={value:new te(13795631)},p0=new bn({transparent:!0,depthWrite:!1,uniforms:{uTime:ii,uOpacity:Wh,uColor:qh,uSize:Xh},vertexShader:"uniform float uTime;uniform float uSize;varying float vSpin;void main(){vec3 p=position;float t=fract(p.y+uTime*.045);p.y=6.8-t*6.6;p.x+=sin(uTime*.6+position.z*2.)*.45+t*1.2;p.z+=cos(uTime*.5+position.x)*.3;vSpin=uTime*2.+position.x*3.;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=uSize;}",fragmentShader:"uniform float uOpacity;uniform vec3 uColor;varying float vSpin;void main(){vec2 q=gl_PointCoord-.5;float c=cos(vSpin),s=sin(vSpin);q=mat2(c,-s,s,c)*q;q.x*=1.9*(.55+.45*abs(sin(vSpin*.7)));if(length(q)>.5)discard;gl_FragColor=vec4(uColor*(.85+.3*q.y),uOpacity);}"});f.add(new gs(Gh,p0)),await a("animals");async function Yh(c,g){const E={s:f.scale.clone(),r:f.rotation.y};f.scale.set(1,1,1),f.rotation.y=0,f.updateMatrixWorld(!0);const L=new b(0,-1,0),z=[];for(let B=0;B<c*8&&z.length<c;B++){B&&B%8===0&&await vs(),ki.set(new b((Yt()-.5)*10.4,12,(Yt()-.5)*8.4),L);const W=ki.intersectObjects(rn,!1)[0];W?.face&&W.face.normal.y>.7&&g(W.point)&&z.push(f.worldToLocal(W.point.clone()))}return f.scale.copy(E.s),f.rotation.y=E.r,f.updateMatrixWorld(!0),z}const Kc=c=>c.x>-.8&&c.x<.85&&c.z>-2.25&&c.z<4.35||c.x>-3.35&&c.x<.25&&c.z>2&&c.z<3.2,jc=c=>c.x>-2.4&&c.x<-1.4&&c.z>-.75&&c.z<.15,Zh=c=>c.y<.75&&!Kc(c)&&!jc(c);function Jh(c){return c.onBeforeCompile=g=>{g.uniforms.uTime=ii,g.uniforms.uLife=Nc,g.vertexShader=`uniform float uTime; uniform float uLife;
`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*9. + uTime*1.1)*.012*uLife; transformed.z += cos(position.x*7. + uTime*.9)*.01*uLife;`)},c}const Qc=[],xa=c=>(c.transparent=!0,c.opacity=0,Qc.push(c),c),fn=(c,g=.9)=>xa(new Ln({color:c,roughness:g}));function to(c,g,E,L,z=1,B=1,W=1){return c.scale(z,B,W).translate(g,E,L),c.index?c.toNonIndexed():c}const tl=[7312456,4156230].map(c=>Jh(fn(c,.95))),el=Jh(fn(14248271,.6)),m0=br([to(new ln(.17,0),0,.13,0),to(new ln(.13,0),.14,.09,.05),to(new ln(.12,0),-.13,.08,-.04),to(new ln(.11,0),.03,.22,.08)]),g0=br([[.08,.24,.12],[-.1,.17,.08],[.17,.15,.1],[0,.27,-.07],[-.16,.1,.06],[.12,.07,-.12]].map(([c,g,E])=>to(new ln(.03,0),c,g,E))),nl=await Yh(l?24:48,Zh),$h=tl.map(c=>new ps(m0,c,nl.length)),Kh=new ps(g0,el,nl.length),jh=[0,0];nl.forEach((c,g)=>{P.position.copy(c),P.rotation.set(0,Yt()*Math.PI*2,0),P.scale.setScalar(.65+Yt()*.6),P.updateMatrix();const E=g%2;$h[E].setMatrixAt(jh[E]++,P.matrix),Kh.setMatrixAt(g,P.matrix)}),$h.forEach((c,g)=>{c.count=jh[g],c.castShadow=!0,c.receiveShadow=!0,f.add(c)}),f.add(Kh);const eo=xa(new mi({color:3817808,side:vn})),il=new Te().setFromPoints([new b(0,0,.05),new b(0,0,-.05),new b(.26,.02,-.03)]);il.computeVertexNormals();const _0=Array.from({length:l?0:7},(c,g)=>{const E=new _e,L=new bt(new Tn(.035,.18,5).rotateX(Math.PI/2),eo),z=new bt(il,eo),B=new bt(il,eo);return B.scale.x=-1,E.add(L,z,B),E.userData={phase:g*.45+Yt()*.3,radius:5.2+Yt()*1.4,height:7+Yt()*1.2,flap:8+Yt()*3},f.add(E),E}),Qh=fn(15986402,.8),v0=fn(3103301,.5),x0=fn(14916155,.6),M0=Array.from({length:l?0:3},(c,g)=>{const E=new _e,L=g===2?1:1.6,z=new bt(new je(.1,10,7).scale(.85,.6,1.35),Qh),B=new bt(new je(.055,9,7),v0);B.position.set(0,.1,.11);const W=new bt(new ue(.035,.02,.05),x0);W.position.set(0,.095,.17);const rt=new bt(new Tn(.035,.08,4),Qh);return rt.position.set(0,.05,-.14),rt.rotation.x=-1.1,E.add(z,B,W,rt),[z,B].forEach(ot=>ot.castShadow=!0),E.children.forEach(ot=>ot.renderOrder=2),E.scale.setScalar(L),E.userData={phase:g*1.7,speed:.11+g*.015},f.add(E),E}),si=fn(14268810),no=fn(15984335),rl=fn(4863014);si.emissive.setHex(9071688),no.emissive.setHex(9071688);const Ma=await Yh(l?40:70,Zh),sl=Array.from({length:3},()=>{const c=new _e,g=new bt(new je(.09,10,8).scale(.7,.7,1.3),si);g.position.y=.12;const E=new bt(new je(.05,9,7),si);E.position.set(0,.175,.12);const L=new bt(new Tn(.024,.07,6),no);L.position.set(0,.165,.175),L.rotation.x=Math.PI/2;const z=new bt(new je(.009,6,4),rl);z.position.set(0,.165,.21);const B=[-1,1].map(Vt=>{const ye=new bt(new Tn(.04,.13,8),si),pn=new bt(new Tn(.028,.095,8).scale(1,1,.4),no);return pn.position.set(0,-.01,.022),ye.add(pn),ye.position.set(Vt*.055,.265,.105),ye.rotation.set(-.15,0,-Vt*.4),ye}),W=new _e,rt=new bt(new ws(.032,.1,3,7),si);rt.position.y=.08;const ot=new bt(new je(.033,7,5),rl);ot.position.y=.155,W.add(rt,ot),W.position.set(0,.12,-.12),W.rotation.x=-2.1;const dt=[[-1,1],[1,1],[-1,-1],[1,-1]].map(([Vt,ye])=>{const pn=new bt(new Qe(.011,.009,.085,5).translate(0,-.0425,0),si);return pn.position.set(Vt*.035,.085,ye*.07),pn});c.add(g,E,L,z,...B,W,...dt),c.scale.setScalar(1.35),g.castShadow=!0;const Gt=Ma[Math.floor(Yt()*Ma.length)];return c.position.copy(Gt),c.userData={from:Gt.clone(),to:Gt.clone(),t:1,rest:Yt()*3,ear:B[0],tail:W,legs:dt},f.add(c),c});function y0(c){const g=c.userData.to,E=Ma.filter(L=>Math.abs(L.y-g.y)<.03&&L.distanceTo(g)>.4&&L.distanceTo(g)<1.8);E.length&&(c.userData.from=g.clone(),c.userData.to=E[Math.floor(Yt()*E.length)].clone(),c.userData.t=0)}let Un=null,tf=0;const Yr=new b,S0=new b(0,-1,0);function ya(c,g){f.updateMatrixWorld();const E=Math.max(1,Math.ceil(c.distanceTo(g)/.15));for(let L=1;L<=E;L++){if(Yr.lerpVectors(c,g,L/E),Kc(Yr)||jc(Yr))return!1;Yr.y=12,f.localToWorld(Yr),ki.set(Yr,S0);const z=ki.intersectObjects(rn,!1)[0];if(!z?.face||z.face.normal.y<.7||Math.abs(f.worldToLocal(z.point).y-c.y)>.03)return!1}return!0}function ef(c){const g=performance.now()/1e3;if(!sl.length||Un||Hn||Ge||g<tf||si.opacity<.5)return;const E=sl.filter(ot=>c.y-ot.position.y>-.05&&c.y-ot.position.y<.25&&ot.position.distanceTo(c)<3.5).sort((ot,dt)=>ot.position.distanceTo(c)-dt.position.distanceTo(c))[0];if(!E)return;const L=E.position.clone();L.y=E.userData.to.y;const z=Math.atan2(L.x-c.x,L.z-c.z),B=new b;if(![0,.8,-.8,1.6,-1.6].some(ot=>(B.set(c.x+Math.sin(z+ot)*.3,L.y,c.z+Math.cos(z+ot)*.3),!Kc(B)&&!jc(B)&&ya(B,B))))return;let rt=ya(L,B)?[L,B]:null;if(!rt){const dt=Ma.filter(Gt=>Math.abs(Gt.y-L.y)<.03).sort((Gt,Vt)=>Gt.distanceTo(L)+Gt.distanceTo(B)-Vt.distanceTo(L)-Vt.distanceTo(B)).slice(0,6).find(Gt=>ya(L,Gt)&&ya(Gt,B));dt&&(rt=[L,dt.clone(),B])}rt&&(Un={fennec:E,route:rt,leg:0,t:0,phase:"notice",time:0,tree:c.clone()},tf=g+20,Ve("visitor","notice"),Ae())}function nf(){if(!Un)return;const c=Un.fennec,g=c.userData;c.position.y=Un.route[Math.min(Un.leg,Un.route.length-1)].y,g.legs.forEach(E=>E.rotation.x=0),g.tail.rotation.set(-2.1,0,0),g.ear.rotation.x=-.15,g.from=c.position.clone(),g.to=c.position.clone(),g.t=1,g.rest=1+Yt()*2,Un=null,Ve("visitor","none")}function w0(c){if(!Un)return;if(Hn||Ge){nf();return}const g=Un,E=g.fennec,L=E.userData,z=L.legs,B=L.tail,W=L.ear;g.time+=c;const rt=Math.atan2(g.tree.x-E.position.x,g.tree.z-E.position.z);if(g.phase==="notice")E.position.y=g.route[0].y,E.rotation.y=oo(E.rotation.y,rt,c*5),W.rotation.x=-.45,z.forEach(ot=>ot.rotation.x=0),g.time>.7&&(g.phase="approach",g.time=0,Ve("visitor","approach"));else if(g.phase==="approach"){const ot=g.route[g.leg],dt=g.route[g.leg+1],Gt=ot.distanceTo(dt),Vt=Math.max(1,Math.round(Gt/.2));g.t=Math.min(1,g.t+c/(Vt*.26));const ye=g.t*Vt,pn=ye-Math.floor(ye);E.position.lerpVectors(ot,dt,g.t),E.position.y=ot.y+Math.abs(Math.sin(Math.PI*2*pn))*.02,E.rotation.y=oo(E.rotation.y,Math.atan2(dt.x-ot.x,dt.z-ot.z),c*8);const de=Math.sin(Math.PI*2*pn)*.6;z.forEach((me,Fe)=>me.rotation.x=Fe===0||Fe===3?de:-de),B.rotation.set(-1.75,0,0),g.t>=1&&(g.t=0,++g.leg>=g.route.length-1&&(g.phase="settle",g.time=0,Ve("visitor","settle")))}else E.position.y=g.route[g.route.length-1].y,E.rotation.y=oo(E.rotation.y,rt,c*3),z.forEach(ot=>ot.rotation.x=0),W.rotation.x=-.15+Math.max(0,Math.sin(g.time*2))*.1,B.rotation.set(-2.1,Math.sin(g.time*.6)*.3,0),g.time>6&&nf()}const Sa=fn(13863756,.85),wa=new _e,ol=new bt(new je(.1,12,8).scale(1.35,.7,1),Sa),rf=new bt(new je(.06,10,8),Sa);rf.position.set(.13,.02,.03);const E0=[-1,1].map(c=>{const g=new bt(new Tn(.022,.05,4),Sa);return g.position.set(.14,.075,.03+c*.03),g}),Ea=new bt(new ws(.018,.16,2,6).rotateZ(Math.PI/2),Sa);Ea.position.set(-.12,-.03,.08),Ea.rotation.y=.6,wa.add(ol,rf,...E0,Ea),ol.castShadow=!0,wa.position.set(-.98,1.02,3.48),wa.rotation.y=-Math.PI/2+.3,l||f.add(wa);const al=fn(14264703,.8),sf=fn(12873807,.85),of=fn(4150624,.9),af=fn(3877409,.9),T0=fn(5007457,.8),b0=fn(15327176,.95),cl=fn(8231567,.5),Ta=(c,g,E)=>{const L=new bt(new ws(c,g,2,7).translate(0,-g/2-c*.4,0),E);return L.castShadow=!0,L},Be=new _e,io=new _e;io.position.y=.3;const ro=new _e,cf=new bt(new ws(.07,.12,2,8).scale(1.15,1,.8).translate(0,.13,0),sf);cf.castShadow=!0;const ba=new _e;ba.position.y=.27;const lf=new bt(new je(.06,10,8).translate(0,.06,0),al),A0=new bt(new je(.064,10,6,0,Math.PI*2,0,Math.PI*.55).rotateX(-.35).translate(0,.07,-.006),af);lf.castShadow=!0,ba.add(lf,A0);const Hi=[-1,1].map(c=>{const g=new _e;g.position.set(c*.09,.22,0);const E=new _e;E.position.y=-.12;const L=new _e;L.position.y=-.11;const z=new bt(new je(.024,7,5),al);return L.add(z),E.add(Ta(.022,.08,al),L),g.add(Ta(.026,.08,sf),E),ro.add(g),{shoulder:g,elbow:E,hand:L}}),Aa=[-1,1].map(c=>{const g=new _e;g.position.x=c*.043;const E=new _e;E.position.y=-.15;const L=new bt(new ue(.05,.035,.09).translate(0,-.14,.02),af);return E.add(Ta(.028,.1,of),L),g.add(Ta(.033,.1,of),E),io.add(g),{hip:g,knee:E}});ro.add(cf,ba),io.add(ro),Be.add(io),Be.scale.setScalar(1.2);const lr=new _e,uf=[-1,1].map(c=>{const g=new _e;return g.add(new bt(new ue(.075,.006,.1).translate(c*.0375,0,0),T0),new bt(new ue(.068,.012,.09).translate(c*.036,.009,0),b0)),lr.add(g),g}),oi=new _e,ll=new Xe;ll.position.set(0,.11,.17),oi.add(new bt(new Qe(.05,.055,.1,10).translate(0,.05,0),cl),new bt(new Qe(.008,.013,.15,6).rotateX(1).translate(0,.08,.1),cl),new bt(new Dr(.04,.007,4,10,Math.PI).translate(0,.1,0).rotateY(Math.PI/2),cl),ll),oi.traverse(c=>c.castShadow=!0);const Ra=new gs(new Te().setAttribute("position",new ae(new Array(24).fill(0),3)),xa(new bp({color:12182252,size:3,sizeAttenuation:!1})));Ra.frustumCulled=!1;const Gi=new ps(new on(.16,.2,1,2).translate(0,-.1,0).rotateY(Math.PI/2),xa(new Ln({roughness:.95,side:vn})),4);[15854039,8364992,15185763,13533797].forEach((c,g)=>Gi.setColorAt(g,new te(c))),Gi.castShadow=!0;const ul=5.16,hf=new bt(new je(.05,8,6),_a);hf.position.set(ee.x,5.72,-1.62),l||f.add(Be,lr,oi,Ra,Gi,hf);const hl=Math.PI-.5,fl=ut.map(([c,g])=>[c-Math.sin(hl)*.27,g-Math.cos(hl)*.27,hl]),Ca={read:[pe.x-Math.sin(pe.yaw)*.03,pe.z-Math.cos(pe.yaw)*.03,pe.yaw],shelter:[ee.x+.2,ee.z-.02,0],sleep:[ee.x+.38,ee.z+.02,Math.PI/2],water:fl[0],hang:[1.06,-1.1,Math.PI/2]},Zr={stand:[0,0,.05,.05,-.1,-.1,0,0,0,0,.3,0,0],sit:[-.18,.32,-.75,-.75,-1.25,-1.25,-1.57,-1.57,1.35,1.35,.225,0,0],lie:[0,.1,-.45,-.55,-1.5,-1.4,.03,-.05,.08,.15,.3,-Math.PI/2,.29],water:[.22,.3,-.95,.1,-.25,-.15,0,0,0,0,.29,0,0],hang:[-.05,-.35,-2.7,-2.5,-.35,-.5,0,0,0,0,.3,0,0]};Be.rotation.order="YXZ";const dn=Zr.stand.slice(),Cn=Zr.stand.slice();let Ke="read",Pa=0,ai=0;const R0=()=>We>.5?"sleep":go>.15?"shelter":ci<9.5||ci>=17&&ci<19?"water":ci<11.5&&mo<.45?"hang":"read",C0=()=>mo<.45&&go<.05&&ci>=9.5&&ci<18.5,so=new b,Nn=new b,ur=new b,P0=[-1.44,-1.21,-.98,-.75];Be.position.set(Ca.read[0],ul,Ca.read[1]);function L0(c,g){const E=R0();E!==Ke&&(Ke=E,Pa=0),Pa+=c;const L=Yn;Ke==="water"&&(Ca.water=fl[g?0:Math.floor(Pa/6)%fl.length]);const[z,B,W]=Ca[Ke];so.set(z,Be.position.y,B);const rt=Be.position.distanceTo(so);if(g||rt<.02)Be.position.copy(so),ai=0;else{const Qt=Math.min(rt,c*.38),mn=Math.atan2(so.x-Be.position.x,so.z-Be.position.z);Be.position.x+=Math.sin(mn)*Qt,Be.position.z+=Math.cos(mn)*Qt,Be.rotation.y=oo(Be.rotation.y,mn,c*6),ai=1}ai||(Be.rotation.y=g?W:oo(Be.rotation.y,W,c*4));const ot=!ai&&(Ke==="read"||Ke==="shelter"||Ke==="sleep"),dt=ot&&Ke!=="sleep",Gt=ai?Zr.stand:Ke==="sleep"?Zr.lie:dt?Zr.sit:Zr[Ke];for(let Qt=0;Qt<Gt.length;Qt++)Cn[Qt]=Gt[Qt];if(ai){const Qt=Math.sin(L*9)*.55;Cn[6]=Qt,Cn[7]=-Qt,Cn[8]=Math.max(0,-Qt)*.8,Cn[9]=Math.max(0,Qt)*.8,Cn[2]=-Qt*.6,Cn[3]=Qt*.6,Cn[10]=.3+Math.abs(Math.cos(L*9))*.012}else if(dt)Cn[1]+=Math.sin(L*.6)*.05,Cn[4]-=Math.max(0,Math.sin(L*.45)-.92)*6;else if(Ke==="water")Cn[2]+=Math.sin(L*1.4)*.12;else if(Ke==="hang"){const Qt=Math.sin(L*2.2);Cn[2]+=Qt*.2,Cn[3]-=Qt*.2}const Vt=g?1:Math.min(1,c*5);for(let Qt=0;Qt<dn.length;Qt++)dn[Qt]=Ce(dn[Qt],Cn[Qt],Vt);const ye=Ke==="sleep"&&!ai?Math.sin(L*1.3)*.03:Math.sin(L*2)*.01;ro.rotation.x=dn[0],ro.scale.set(1,1+ye,1+ye),ba.rotation.set(dn[1],0,Ke==="sleep"&&!ai?.3:0),Hi[0].shoulder.rotation.set(dn[2],0,-.08),Hi[1].shoulder.rotation.set(dn[3],0,.08),Hi[0].elbow.rotation.x=dn[4],Hi[1].elbow.rotation.x=dn[5],Aa[0].hip.rotation.set(dn[6],0,.04),Aa[1].hip.rotation.set(dn[7],0,-.04),Aa[0].knee.rotation.x=dn[8],Aa[1].knee.rotation.x=dn[9],io.position.y=dn[10],Be.rotation.x=dn[11],Be.position.y=ul+dn[12],Be.updateMatrixWorld(!0),ot?(Hi[0].hand.getWorldPosition(Nn),Hi[1].hand.getWorldPosition(ur),f.worldToLocal(Nn.add(ur).multiplyScalar(.5)),lr.position.copy(Nn),lr.position.y+=Ke==="sleep"?.01:.03,lr.rotation.set(Ke==="sleep"?0:-.95,Be.rotation.y,0,"YXZ")):(lr.position.set(oe.x-.08,5.34,oe.z),lr.rotation.set(0,.4,0)),uf[0].rotation.z=dt?-.3:0,uf[1].rotation.z=dt?.3:Math.PI-.06;const pn=Ke==="water"&&!ai;pn?(Hi[0].hand.getWorldPosition(Nn),f.worldToLocal(Nn),oi.position.set(Nn.x,Nn.y-.13,Nn.z),oi.rotation.set(.55+Math.sin(L*1.4)*.12,Be.rotation.y,0,"YXZ")):Ke==="water"?(Hi[0].hand.getWorldPosition(Nn),f.worldToLocal(Nn),oi.position.set(Nn.x,Nn.y-.13,Nn.z),oi.rotation.set(0,Be.rotation.y,0,"YXZ")):(oi.position.set(-.72,ul,-1.5),oi.rotation.set(0,-.6,0)),oi.updateMatrixWorld(!0);const de=Ra.geometry.attributes.position;ll.getWorldPosition(ur),f.worldToLocal(ur);const me=Be.rotation.y;for(let Qt=0;Qt<8;Qt++){const mn=(L*1.6+Qt/8)%1;de.setXYZ(Qt,ur.x+Math.sin(me)*mn*.06,ur.y-mn*mn*.32,ur.z+Math.cos(me)*mn*.06)}de.needsUpdate=!0,Ra.visible=pn&&!g;const Fe=C0()?Ke==="hang"?g?4:ai?0:Math.min(4,Math.floor(Pa/2.5)+1):4:0;Gi.count=Fe;for(let Qt=0;Qt<Fe;Qt++)P.position.set(1.32,5.785,P0[Qt]),P.rotation.set(0,0,Math.sin(L*1.3+Qt)*.12*(1-mo)),P.scale.setScalar(1),P.updateMatrix(),Gi.setMatrixAt(Qt,P.matrix);Gi.instanceMatrix.needsUpdate=!0,Gi.visible=Fe>0}function oo(c,g,E){let L=(g-c+Math.PI)%(Math.PI*2)-Math.PI;return L<-Math.PI&&(L+=Math.PI*2),Math.abs(L)<=E?g:c+Math.sign(L)*E}const D0={spring:14268810,summer:14466182,autumn:13609592,winter:14994854};function I0(c,g){const E=1-We,L=1-Math.min(go*1.4,1);if(Qc.forEach(B=>B.opacity=g),el.opacity=g*kh[$e]*($e==="autumn"?2:1),eo.opacity=g*E*L*($e==="winter"?.6:1)*(1-fi*.7),si.opacity=no.opacity=rl.opacity=g*L,si.emissiveIntensity=no.emissiveIntensity=We*.3,Qc.forEach(B=>B.visible=B.opacity>.01),g<=.01)return;const z=Yn;_0.forEach((B,W)=>{const rt=B.userData;$e==="winter"&&W>3?B.visible=!1:B.visible=eo.visible;const ot=z*.16+rt.phase;B.position.set(Math.cos(ot)*rt.radius,rt.height+Math.sin(z*.7+W)*.25,Math.sin(ot)*rt.radius*.8),B.rotation.set(0,-ot,Math.sin(ot)*.15);const dt=Math.sin(z*rt.flap+W)*.55;B.children[1].rotation.z=dt,B.children[2].rotation.z=-dt}),M0.forEach((B,W)=>{const rt=B.userData,ot=z*rt.speed*(.25+.75*E),dt=2.3+Math.sin(ot+rt.phase)*1.4,Gt=Math.cos(ot+rt.phase),Vt=.01+Math.sin(ot*2.3+W)*.28+(W-1)*.12;B.position.set(Vt,.505+Math.sin(z*2.2+W)*.008,dt),B.rotation.y=Gt>=0?0:Math.PI,B.rotation.z=Math.sin(z*1.7+W)*.05}),sl.forEach(B=>{if(Un?.fennec===B)return;const W=B.userData,rt=W.legs,ot=W.tail;if(W.t>=1){W.rest-=c,W.rest<=0&&(y0(B),W.rest=1.5+Yt()*3.5),W.ear.rotation.x=-.15+Math.max(0,Math.sin(z*3+W.rest))*.25,rt.forEach(Fe=>Fe.rotation.x=0),ot.rotation.set(-2.1,Math.sin(z*.8+W.rest)*.25,0);return}const dt=W.from,Gt=W.to,Vt=dt.distanceTo(Gt),ye=Math.max(1,Math.round(Vt/.2));W.t=Math.min(1,W.t+c/(ye*.26));const pn=W.t*ye,de=pn-Math.floor(pn);B.position.lerpVectors(dt,Gt,W.t),B.position.y=dt.y+Math.abs(Math.sin(Math.PI*2*de))*.02,B.rotation.y=Math.atan2(Gt.x-dt.x,Gt.z-dt.z);const me=Math.sin(Math.PI*2*de)*.6;rt.forEach((Fe,Qt)=>Fe.rotation.x=Qt===0||Qt===3?me:-me),ot.rotation.set(-1.75,0,0)}),ol.scale.y=1+Math.sin(z*1.6)*.04,Ea.rotation.y=.6+Math.sin(z*.7)*.35}const U0=new te(15660018),dl={leaf:.78,leafLight:.92,leafDark:.5,grass:.9,flower:.8,coral:.8},N0=[.82,.55,.92,.55];function ff(){const c=zh[$e],g=(L,z,B)=>L.color.setHex(z).lerp(U0,B*$n);cn.forEach(({material:L,key:z})=>{const B=c[z];B!==void 0&&g(L,B,dl[z]??0)}),g(tl[0],c.leaf,dl.leaf),g(tl[1],c.leafDark,dl.leafDark),js.forEach((L,z)=>g(L,c.plants[z],N0[z]));const E=$n>.35;E!==va&&(va=E,Hh())}function F0(){const c=zh[$e];ff(),el.color.setHex($e==="autumn"?12070954:c.flower),si.color.setHex(D0[$e]),Hh(),qh.value.setHex($e==="spring"?16040917:13795631),Sn.stale=!0,Ae()}await a("renderer-state");let Jr=0,Ne=0,Hn=!1,Ge=!1,La=!0,pl=0,Vi=!1,df=!0,bi=0,hr=0,fr=0,Wi=-1,Yn=0,Ai=!1,ml=!1,$r=!0;const Sn={progress:NaN,snow:NaN,fog:NaN,night:NaN,shadow:NaN,stale:!0},Da=new Float64Array(19).fill(NaN);function ao(){!fr&&!Ai&&ml&&(fr=requestAnimationFrame(Of))}function Ae(){$r=!0,ao()}const Ia=new Set;let Ua=[];function pf(c,g){const E=Ce(.77,1,Dn(0,.62,c));return g.set(E,E*Ce(.72,1,Dn(.1,.55,c)),E)}const mf=()=>{document.hidden||ao()};document.addEventListener("visibilitychange",mf);let Kr=!1,gf=1;const Na=[];function _f(c){Kr=c==="light",h.setPixelRatio(Math.min(devicePixelRatio,Kr?1.25:1.6)),gf=Kr||l?1/0:2;const g=Kr?1024:2048;x.shadow.mapSize.x!==g&&(x.shadow.mapSize.set(g,g),x.shadow.map?.dispose(),x.shadow.map=null),Na.forEach(E=>E.castShadow=!Kr),i.dataset.quality=c,Ae()}let Fa=!1,Zn=0,ci=13,We=0;const Xi=new b(0,2.4,0),co=new b(0,2.4,0);let qi=0,jr=0,dr=.4,lo=.4,li=new pt,uo=new pt,pr=1,ho=1;const ui=new pt(0,1),mr=new pt(0,1);let gr=1,hi=1;const Ri=new pt,Pn=new pt;function vf(){const c=.15+.5*(hi-1);Pn.clampScalar(-c,c)}let fo=0,xf=0,gl=0,Mf=0,Oa=0,_l=0;const Jn=h.getContext(),_r=Jn.getExtension("EXT_disjoint_timer_query_webgl2"),vr=[];function O0(){if(!_r)return;const c=Jn.getParameter(_r.GPU_DISJOINT_EXT);for(;vr.length;){const g=vr[0];if(!c&&!Jn.getQueryParameter(g,Jn.QUERY_RESULT_AVAILABLE))break;if(vr.shift(),!c){const E=Jn.getQueryParameter(g,Jn.QUERY_RESULT)/1e6;Mf+=E,Oa++,_l=Ce(_l||E,E,.1)}Jn.deleteQuery(g)}}let Ba=1,fi=0,vl=0;const po=new ch(15856366,30,60);let mo=0,go=0,$n=0,_o=0;const yf=new IntersectionObserver(c=>{df=c[0].isIntersecting,Ae()},{rootMargin:"80px"});yf.observe(i);let di=1,pi=1;const Sf=()=>{di=i.clientWidth,pi=i.clientHeight,h.setSize(di,pi),Ae(),ml&&!Ai&&(cancelAnimationFrame(fr),fr=0,Wi=-1,Of(performance.now()))},wf=new ResizeObserver(Sf);wf.observe(i),Sf();const Ef=new te(6315865),Tf=new te(4488378),B0=new te(8094327),xl=new b,bf=new Map;let Af={top:0,right:0,bottom:0,left:0};const vo={wattch:new b(-3.65,2.65,.2),whisperbook:new b(3.35,3.55,-.65),about:new b(Jt,lt+xt,It),contact:new b(2.02,2.5,3.11),workshop:new b(6.65,1.45,-.25),bplog:new b(6.75,1.45,2.65)},z0={whisperbook:{at:new b(3.4,1.7,-.55),zoom:1.6},wattch:{at:new b(-3.4,1.45,.45),zoom:1.8},workshop:{at:new b(6.65,.75,-.2),zoom:2},bplog:{at:new b(6.75,.65,3),zoom:2}},k0={whisperbook:1.35,wattch:1.45,about:.9,contact:.55,workshop:1,bplog:1},Rf=new mi({color:16765578,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}),Cf=new mi({color:16765578,transparent:!0,opacity:0,depthWrite:!1,blending:ys}),xr=new _e;xr.add(new bt(new dh(.96,1,64).rotateX(-Math.PI/2),Rf),new bt(new Pr(1,48).rotateX(-Math.PI/2),Cf)),xr.traverse(c=>c.renderOrder=4),xr.visible=!1,f.add(xr);let xo=null,Qr=0;function H0(c){const g=vo[c],E=Z(g.x,g.z);xr.position.set(g.x,(Number.isFinite(E)?E:.16)+.03,g.z),xr.scale.setScalar(k0[c]??1)}const G0=new b(.55,2.4,-.55),Mo=new te;function Ml(){const c=gi.clamp((ci-6)/14,0,1),g=Math.sin(c*Math.PI);We=Dn(19.2,21.5,ci)+(1-Dn(5,6.6,ci)),We=gi.clamp(We,0,1),x.position.set(Ce(-9,9,c),8+g*8,Ce(9,6,g));const E=mo*.6+go*.25;Ba=(.35+.65*g)*(1-We*.7)*(1-E*.9),Mo.setHex(16751964).lerp(new te(16773076),Dn(0,.55,g)),Mo.lerp(new te(10466536),We),x.color.copy(Mo),x.intensity=(.9+2.4*g)*(1-We*.82)*(1-E*.7),Mo.lerp(new te(14673388),E*.6),x.color.copy(Mo),p.intensity=(1.4+1.1*g)*(1-We*.55),p.color.setHex(16251903).lerp(new te(7177405),We),p.groundColor.setHex(8622195).lerp(new te(2831696),We),M.intensity=.7*(1-We*.6),Ae()}Ml();const Pf=c=>{c.preventDefault(),vr.length=0,i.dispatchEvent(new Event("garden-context-lost")),t.forEach(g=>{g.style.visibility="hidden",g.tabIndex=-1})},Lf=()=>{i.dispatchEvent(new Event("garden-context-restored")),t.forEach(c=>c.style.visibility=""),Sn.stale=!0,Da.fill(NaN),Ae()};h.domElement.addEventListener("webglcontextlost",Pf),h.domElement.addEventListener("webglcontextrestored",Lf);let za=!0,Df=!1,If=-1;const yo=new b,V0=new Float64Array(19);function W0(c){const g=V0;g[0]=di,g[1]=pi,g[2]=ui.x,g[3]=ui.y,g[4]=li.x,g[5]=li.y,g[6]=qi,g[7]=dr,g[8]=gr,g[9]=Ri.x,g[10]=Ri.y,g[11]=Xi.x,g[12]=Xi.y,g[13]=Xi.z,g[14]=Ne,g[15]=c,g[16]=bi,g[17]=h.getPixelRatio(),g[18]=pr;let E=!1;for(let L=0;L<g.length;L++)g[L]!==Da[L]&&(Da[L]=g[L],E=!0);return E}function X0(){return Sn.stale||Sn.progress!==Ne||Sn.snow!==$n||Sn.fog!==fi||Sn.night!==We||Sn.shadow!==Ba}const Uf={};function Ve(c,g){Uf[c]!==g&&(Uf[c]=g,i.dataset[c]=g)}let Nf=0;function Ff(){return Math.abs(Jr-Ne)>1e-4||Math.abs(hr-bi)>1e-4||Math.abs(jr-qi)>5e-4||Math.abs(lo-dr)>5e-4||Xi.distanceTo(co)>5e-4||Math.abs(vl-fi)>.002||li.distanceTo(uo)>5e-4||Math.abs(ho-pr)>5e-4||ui.distanceTo(mr)>5e-4||Math.abs(hi-gr)>5e-4||Ri.distanceTo(Pn)>5e-4||Math.abs(_o-$n)>.001||r0()||ri.some(c=>c.age<1)||Un!==null}function Of(c){if(fr=0,Ai)return;if(!df||document.hidden){Wi=-1;return}const g=Ff(),E=Kr?30:pl&&!g&&!$r&&Zn>=1?pl:0;if(E&&Wi>=0&&c-Wi<1e3/E-4){ao();return}const L=Wi<0?0:Math.min((c-Wi)/1e3,.05);if(Wi=c,Zn<1&&(Zn=Ge||Hn?1:Math.min(1,Zn+L/3.2),$r=!0),g||Zn<1?Vi=!0:Vi&&(Vi=!1,Ia.forEach(de=>queueMicrotask(de))),(Hn||!La||Ne<.5)&&!g&&!$r){Wi=-1;return}ao(),(g||$r||++Nf>=gf)&&(Nf=0,h.shadowMap.needsUpdate=!0),$r=!1;const z=performance.now();za&&Df&&(Ne=Jr,qi=jr,dr=lo,Xi.copy(co)),Ne=Ce(Ne,Jr,Ge?1:Math.min(L*7,1)),bi=Ce(bi,hr,Ge?1:Math.min(L*4,1));const B=Hn||!La;B||(Yn+=L);const W=Ge?1:Math.min(L*3.2,1);za&&(li.copy(uo),pr=ho,ui.copy(mr)),qi=Ce(qi,jr,W),dr=Ce(dr,lo,W),li.lerp(uo,W),pr=Ce(pr,ho,W),ui.lerp(mr,W);const rt=Ge?1:Math.min(L*14,1);gr=Ce(gr,hi,rt),Ri.lerp(Pn,rt),Xi.lerp(co,W);const ot=Zn*Zn*(3-2*Zn);if(ot!==If){If=ot;const de=Je.geometry.attributes.position.count;Je.geometry.setDrawRange(0,Math.floor(de*ot/2)*2)}ii.value=Yn;const dt=Dn(.69,.96,Ne);Nc.value=Hn?0:dt;const Gt=Dn(.07,.3,Ne),Vt=Dn(.35,.6,Ne);if(pf(Ne,f.scale),f.rotation.y=bi,$n!==_o){const de=_o-$n;$n=Ge||Hn?_o:$n+gi.clamp(de,-L*.12,L*.3),ff()}if(fi=Ce(fi,vl,Ge?1:Math.min(L*1.5,1)),fi>.002?(u.fog=po,po.near=Ce(30,9.5,fi),po.far=Ce(60,27,fi)):u.fog=null,X0()){Sn.stale=!1,Sn.progress=Ne,Sn.snow=$n,Sn.fog=fi,Sn.night=We,Sn.shadow=Ba,cn.forEach(({material:me,flora:Fe,glass:Qt,key:mn})=>{const ka=mn==="flower"||mn==="coral"?kh[$e]:1;iu(me,Fe?dt*ka:Vt*(Qt?.38:1))}),iu(Oh,Vt),js.forEach(me=>iu(me,dt)),He.color.copy(Ef).lerp(Tf,Gt).lerp(B0,Vt),He.opacity=Ce(Fa?.38:.44,Fa?.85:.66,Gt)*(1-Vt*.92),Qs.color.copy(He.color),Qs.opacity=He.opacity*(1-Vt),Qs.visible=Qs.opacity>.003,Bi.opacity=.055*(1-Gt),Jo.opacity=Dn(.06,.3,Ne)*(1-Dn(.45,.62,Ne))*.38,_.opacity=Vt*.15*Ba,Bc.material.opacity=Vt,Fc.uniforms.uOpacity.value=Dn(.46,.63,Ne);const de=We*Vt;o0.forEach(me=>me.intensity=de*2.6),_a.opacity=de*.95,_a.visible=de>.01,Fh.value=We*dt,Ks.opacity=dt*($e==="summer"||$e==="spring"?1-$n:0),Ks.visible=Ks.opacity>.003,$c.opacity=dt,$c.visible=dt>.01,Wh.value=dt*($e==="autumn"?.95:$e==="spring"?.85:0)*(1-fi*.65)*(1-$n),ks.value=Dn(.52,.64,Ne),Hc.opacity=dt,Gc.opacity=dt,yh.opacity=dt*.21,Hc.emissiveIntensity=We*.5,Gc.emissiveIntensity=We*.35,Sh.value=dt*(.3+.7*We),Vc.opacity=Dn(.15,.3,Ne)*(1-dt)*.46+dt*We*.55}Wc.forEach((de,me)=>{const Fe=Yn*.105*dt+me*2.08;de.position.set(Math.cos(Fe)*(3.6+me*.22),3.35+me*.62+Math.sin(Fe*2+me)*.22,Math.sin(Fe)*(2.95+me*.2)),de.rotation.set(Math.sin(Fe*2)*.055*dt,-Fe+.5,Math.cos(Fe)*.075*dt)}),s0(L,Vt,ot,Gt),I0(B||Ge?0:L,dt),!l&&dt>.01&&L0(B||Ge?0:L,B||Ge),w0(L),Ks.visible&&Dh.forEach((de,me)=>{de.position.set(Math.cos(Yn*.2+me*1.9)*(2+me*.25),1.5+Math.sin(Yn*.4+me)*.35+me*.4,Math.sin(Yn*.2+me*1.9)*2),de.rotation.y=Yn*.2+me,de.children.forEach((Fe,Qt)=>Fe.rotation.y=Math.sin(Yn*8+me)*.7*(Qt===0?1:-1))});for(const de of ri){if(de.grown)continue;de.age=Ge?1:Math.min(1,de.age+L*1.6);const me=de.age,Fe=1+2.2*Math.pow(me-1,3)+1.2*Math.pow(me-1,2);de.group.scale.setScalar(Math.max(.001,Fe*de.group.userData.size)),de.grown=de.age>=1}if(W0(ot)){const de=Math.max(.05,ui.y-ui.x),me=di/(pi*de),Qt=$M(me,di)/2/(1+qi*dr)/gr/pr,mn=Qt/de;d.left=-Qt*me-(li.x*Qt+Ri.x*Qt)*me*2,d.right=Qt*me-(li.x*Qt+Ri.x*Qt)*me*2,d.top=(ui.x+ui.y)*mn-li.y*Qt*2+Ri.y*mn*2,d.bottom=d.top-2*mn,Xh.value=pi/(2*mn)*.2*h.getPixelRatio();const ka=Ce(.69,.78,Dn(.3,1,Ne))-(1-ot)*.45;yo.copy(G0).lerp(Xi,qi),d.position.set(yo.x+Math.sin(ka)*15,yo.y-2.4+Ce(14,12,Vt),yo.z+Math.cos(ka)*15),d.lookAt(yo),d.updateProjectionMatrix(),d.updateMatrixWorld(),f.updateMatrixWorld();for(const zf of t)xl.copy(vo[zf.dataset.spot]).applyMatrix4(f.matrixWorld).project(d),bf.set(zf,[(xl.x*.5+.5)*di,(-xl.y*.5+.5)*pi]);KM(t,bf,di,pi,Af)}O0();const ye=_r&&vr.length<4?Jn.createQuery():null;ye&&Jn.beginQuery(_r.TIME_ELAPSED_EXT,ye);const pn=performance.now();if(h.render(u,d),ye&&(Jn.endQuery(_r.TIME_ELAPSED_EXT),vr.push(ye)),za&&(za=!1,performance.mark("notebook:first-render"),performance.measure("notebook:scene-to-first-render","notebook:scene-construction:start","notebook:first-render")),fo=Ce(fo||1,performance.now()-pn,.1),Ve("progress",Ne.toFixed(3)),Ve("drawn",ot.toFixed(2)),Ve("drawCalls",String(h.info.render.calls)),Ve("triangles",String(h.info.render.triangles)),Ve("geometries",String(h.info.memory.geometries)),Ve("textures",String(h.info.memory.textures)),Ve("waterfall",ks.value.toFixed(2)),Ve("drones",String(Wc.length)),Ve("animationTime",Yn.toFixed(3)),Ve("rotation",bi.toFixed(3)),Ve("shift",li.x.toFixed(3)),Ve("meter",((na+Math.PI/2)/Math.PI).toFixed(3)),Ve("narrating",Zs.toFixed(2)),Ve("explaining",Js===null?"none":String(Js)),Ve("path",Xs===null?"none":String(Xs)),Ve("postbox",qs),Ve("flag",Ys.toFixed(2)),Ve("hover",xo??"none"),xf+=performance.now()-z,gl++,Ua.length){const de=Ua;Ua=[],de.forEach(me=>me())}}await a("ground-litter"),await d0(),f.updateMatrixWorld(!0);const Bf=new rr;f.traverse(c=>{!(c instanceof bt)||c instanceof ps||!c.castShadow||(c.geometry.boundingSphere??c.geometry.computeBoundingSphere(),Bf.copy(c.geometry.boundingSphere).applyMatrix4(c.matrixWorld),Bf.radius<.2&&Na.push(c))}),Na.push(Gi),i.dataset.smallCasters=String(Na.length),_f(n),o(),s(),ml=!0,ao();async function q0(){if(Ai)return;const c=Lo("shader-warmup"),g=[h.compileAsync(u,d)];if(await vs(),Ai)return;const E=cn.map(({material:Vt})=>Vt).filter(Vt=>Vt.transparent&&!Vt.side);if(E.forEach(Vt=>Vt.transparent=!1),g.push(h.compileAsync(u,d)),E.forEach(Vt=>{Vt.transparent=!0,Vt.needsUpdate=!0}),await vs(),Ai)return;const L=u.fog;if(u.fog=po,g.push(h.compileAsync(u,d)),u.fog=L,await vs(),Ai)return;const z=new Op({depthPacking:mp,side:An}),B=new ue,W=new _e;W.add(new bt(B,z),new ps(B,z,1));const rt=new ir(1,1),ot=u.fog;u.fog=null,h.setRenderTarget(rt),g.push(h.compileAsync(W,d,u)),h.setRenderTarget(null),u.fog=ot,await Promise.all(g),c(),rt.dispose(),B.dispose();const dt=[...h.info.programs??[]],Gt=()=>{const Vt=dt.pop();if(Ai)return;if(!Vt){performance.mark("notebook:shader-first-use-complete");return}const ye=Lo("shader-first-use");Vt.getUniforms(),ye(),Y0(Gt,{timeout:1e3})};Gt()}const Y0=window.requestIdleCallback??(c=>setTimeout(c,200));return requestAnimationFrame(()=>q0().catch(c=>console.warn("Garden shader warm-up failed.",c))),{setNarrating(c){Rh=c,Ae()},explain(c){Js=c,Ae()},hover(c){c&&vo[c]?(xo=c,H0(c)):xo=null,Ae()},highlightPath(c){c!==null&&i0(c),Xs=c,Ae()},setPostbox(c){c==="sent"&&(Hn||Ge||Ph<.5?c="idle":Ti=0),!(c==="idle"&&Ti>=0)&&(qs=c,Ae())},setProgress(c,g=!1){Jr=c,Ge=g,Vi=!0,Ae(),g&&(Ne=c)},setTheme(c){Fa=c,Ef.setHex(c?9419994:6315865),Tf.setHex(c?12643071:4488378),Jo.color.setHex(c?7451620:6917045),Bi.color.setHex(c?9750761:7830397),Vc.color.setHex(c?12643071:5866413),h.toneMappingExposure=c?.95:1.2,Sn.stale=!0,Ae()},setMotion(c){Hn!==c&&(Hn=c,Ae())},setAmbient(c){La=c,c&&Ae()},setFrameCap(c){pl=c&&c>0?c:0},snap(){Ne=Jr,bi=hr,qi=jr,dr=lo,Xi.copy(co),li.copy(uo),pr=ho,ui.copy(mr),gr=hi,Ri.copy(Pn),Vi=!0,Ae()},isSettled(){return!Vi&&!Ff()&&Zn>=1},onSettled(c){return Ia.add(c),()=>Ia.delete(c)},rotate(){hr+=Math.PI/6,Ae()},rotateBy(c){hr+=c,Ae()},plant(){if(ri.length>=So)return So;const c=ri.length%12,g=new b(-4.3+c*.78+(Yt()-.5)*.2,.36,3.95),E=Jc(g);return ef(g),E},plantAt(c,g){if(ri.length>=So)return So;Bh.set(c/di*2-1,-(g/pi)*2+1),ki.setFromCamera(Bh,d);const E=ki.intersectObjects(rn,!1)[0];if(!E?.face||E.face.normal.y<.7)return-1;const L=f.worldToLocal(E.point.clone()),z=Jc(L);return ef(L),z},trees(){return ri.length},setSeason(c){$e=c,F0()},setFog(c,g){vl=c,po.color.setHex(g),Ae()},setTally(c){Vr=c},setWeather(c,g,E=!1){mo=c,go=g,_o=E?Math.min(1,.55+g*.5):0,Ml()},setHour(c){ci=c,Ml()},frame(c,g){mr.set(c,g),Vi=!0,Ae()},zoomBy(c,g,E){const L=gi.clamp(hi*c,1,4),z=L/hi;if(g!==void 0&&E!==void 0){const B=g/di-.5,W=E/pi-(mr.x+mr.y)/2;Pn.set(B-(B-Pn.x)*z,W-(W-Pn.y)*z)}else Pn.multiplyScalar(z);hi=L,vf(),Ae()},panBy(c,g){Pn.x+=c/di,Pn.y+=g/pi,vf(),Ae()},resetView(){hi=1,Pn.set(0,0),Ae()},fenceLabels(c){Af=c,Da.fill(NaN),Ae()},focus(c,g=0,E=0,L=1){if(c&&vo[c]){const z=z0[c];co.copy(z?.at??vo[c]).multiply(pf(Jr,new b)).applyAxisAngle(new b(0,1,0),bi),jr=1,lo=z?.zoom??.4}else jr=0;uo.set(g,E),ho=L,Vi=!0,Ae()},stats(){return{triangles:h.info.render.triangles,calls:h.info.render.calls,ms:fo,gpuFrameMs:_r&&Oa?_l:null,cpuMs:xf,gpuMs:_r?Oa?Mf/Oa*gl:0:null,frames:gl,visiting:Un!==null}},setQuality(c){_f(c)},snapshot(){return{rotation:hr,trees:ri.map(({group:c})=>({x:c.position.x,y:c.position.y,z:c.position.z,seed:c.userData.seed})),zoom:hi,pan:{x:Pn.x,y:Pn.y}}},restore(c){const g=tr;for(const E of c.trees.slice(0,So-ri.length))tr=E.seed,Jc(new b(E.x,E.y,E.z),!0);tr=g,bi=hr=c.rotation,gr=hi=c.zoom,Ri.copy(Pn.set(c.pan.x,c.pan.y)),Zn=1,Df=!0,Ae()},skipDrawIn(){Zn=1,Ae()},drawInto(c,g,E,L,z){h.render(u,d),c.drawImage(h.domElement,g,E,L,z)},nextFrame(){return new Promise(c=>{Ua.push(c),Ae()})},dispose(){Ai=!0,Ia.clear(),cancelAnimationFrame(fr),fr=0,document.removeEventListener("visibilitychange",mf),vr.forEach(E=>Jn.deleteQuery(E)),yf.disconnect(),wf.disconnect(),h.domElement.removeEventListener("webglcontextlost",Pf),h.domElement.removeEventListener("webglcontextrestored",Lf);const c=new Set,g=new Set;u.traverse(E=>{(E instanceof bt||E instanceof Ec||E instanceof gs)&&(c.add(E.geometry),(Array.isArray(E.material)?E.material:[E.material]).forEach(L=>g.add(L)))}),c.forEach(E=>E.dispose()),g.forEach(E=>E.dispose()),Hs.dispose(),Ws.dispose(),h.dispose(),h.domElement.remove()}}}export{ty as createGarden};
