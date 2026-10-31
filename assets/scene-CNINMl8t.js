import{g as R0}from"./index--lSJYb7-.js";const Ou="180",C0=0,vf=1,P0=2,Nd=1,Fd=2,Ti=3,Ai=0,Tn=1,mn=2,Zi=0,Ms=1,ms=2,xf=3,Mf=4,L0=5,Mr=100,D0=101,I0=102,U0=103,N0=104,F0=200,O0=201,B0=202,z0=203,Wl=204,Xl=205,k0=206,H0=207,G0=208,V0=209,W0=210,X0=211,q0=212,Y0=213,Z0=214,ql=0,Yl=1,Zl=2,Es=3,Jl=4,$l=5,Kl=6,jl=7,Od=0,J0=1,$0=2,Ji=0,K0=1,j0=2,Q0=3,Bd=4,tm=5,em=6,nm=7,zd=300,ws=301,Ts=302,Ql=303,tu=304,Mc=306,eu=1e3,Tr=1001,nu=1002,zn=1003,im=1004,Pa=1005,ci=1006,al=1007,br=1008,hi=1009,kd=1010,Hd=1011,Lo=1012,Bu=1013,Ar=1014,li=1015,ko=1016,zu=1017,ku=1018,Do=1020,Gd=35902,Vd=35899,Wd=1021,Xd=1022,jn=1023,Io=1026,Uo=1027,Hu=1028,Gu=1029,qd=1030,Vu=1031,Wu=1033,lc=33776,uc=33777,hc=33778,fc=33779,iu=35840,ru=35841,su=35842,ou=35843,au=36196,cu=37492,lu=37496,uu=37808,hu=37809,fu=37810,du=37811,pu=37812,mu=37813,gu=37814,_u=37815,vu=37816,xu=37817,Mu=37818,yu=37819,Su=37820,Eu=37821,wu=36492,Tu=36494,bu=36495,Au=36283,Ru=36284,Cu=36285,Pu=36286,rm=3200,Yd=3201,Zd=0,sm=1,qi="",Dn="srgb",bs="srgb-linear",mc="linear",Pe="srgb",Zr=7680,yf=519,om=512,am=513,cm=514,Jd=515,lm=516,um=517,hm=518,fm=519,Sf=35044,Ef="300 es",ui=2e3,gc=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wf=1234567;const ys=Math.PI/180,No=180/Math.PI;function Cr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Xu(i,t){return(i%t+t)%t}function dm(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function pm(i,t,e){return i!==t?(e-i)/(t-i):0}function Ao(i,t,e){return(1-e)*i+e*t}function mm(i,t,e,n){return Ao(i,t,1-Math.exp(-e*n))}function gm(i,t=1){return t-Math.abs(Xu(i,t*2)-t)}function _m(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mm(i,t){return i+Math.random()*(t-i)}function ym(i){return i*(.5-Math.random())}function Sm(i){i!==void 0&&(wf=i);let t=wf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Em(i){return i*ys}function wm(i){return i*No}function Tm(i){return(i&i-1)===0&&i!==0}function bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Am(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rm(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),u=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*u);break;case"YZY":i.set(l*f,a*h,l*d,a*u);break;case"ZXZ":i.set(l*d,l*f,a*h,a*u);break;case"XZX":i.set(a*h,l*x,l*m,a*u);break;case"YXY":i.set(l*m,a*h,l*x,a*u);break;case"ZYZ":i.set(l*x,l*m,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xi={DEG2RAD:ys,RAD2DEG:No,generateUUID:Cr,clamp:me,euclideanModulo:Xu,mapLinear:dm,inverseLerp:pm,lerp:Ao,damp:mm,pingpong:gm,smoothstep:_m,smootherstep:vm,randInt:xm,randFloat:Mm,randFloatSpread:ym,seededRandom:Sm,degToRad:Em,radToDeg:wm,isPowerOfTwo:Tm,ceilPowerOfTwo:bm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Rm,normalize:yn,denormalize:ds};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],S=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=S;return}if(d!==S||l!==f||u!==m||h!==x){let _=1-a;const p=l*f+u*m+h*x+d*S,R=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const F=Math.sqrt(A),P=Math.atan2(F,p*R);_=Math.sin(_*P)/F,a=Math.sin(a*P)/F}const E=a*R;if(l=l*_+f*E,u=u*_+m*E,h=h*_+x*E,d=d*_+S*E,_===1-a){const F=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=F,u*=F,h*=F,d*=F}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return t[e]=a*x+h*d+l*m-u*f,t[e+1]=l*x+h*f+u*d-a*m,t[e+2]=u*x+h*m+a*f-l*d,t[e+3]=h*x-a*d-l*f-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*h*d+u*m*x,this._y=u*m*d-f*h*x,this._z=u*h*x+f*m*d,this._w=u*h*d-f*m*x;break;case"YXZ":this._x=f*h*d+u*m*x,this._y=u*m*d-f*h*x,this._z=u*h*x-f*m*d,this._w=u*h*d+f*m*x;break;case"ZXY":this._x=f*h*d-u*m*x,this._y=u*m*d+f*h*x,this._z=u*h*x+f*m*d,this._w=u*h*d-f*m*x;break;case"ZYX":this._x=f*h*d-u*m*x,this._y=u*m*d+f*h*x,this._z=u*h*x-f*m*d,this._w=u*h*d+f*m*x;break;case"YZX":this._x=f*h*d+u*m*x,this._y=u*m*d+f*h*x,this._z=u*h*x-f*m*d,this._w=u*h*d-f*m*x;break;case"XZY":this._x=f*h*d-u*m*x,this._y=u*m*d-f*h*x,this._z=u*h*x+f*m*d,this._w=u*h*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-n*u,this._z=s*h+o*u+n*l-r*a,this._w=o*h-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*u+o*d-a*h,this.y=n+l*h+a*u-s*d,this.z=r+l*d+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new b,Tf=new Ps;class le{constructor(t,e,n,r,s,o,a,l,u){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u)}set(t,e,n,r,s,o,a,l,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],m=n[5],x=n[8],S=r[0],_=r[3],p=r[6],R=r[1],A=r[4],E=r[7],F=r[2],P=r[5],D=r[8];return s[0]=o*S+a*R+l*F,s[3]=o*_+a*A+l*P,s[6]=o*p+a*E+l*D,s[1]=u*S+h*R+d*F,s[4]=u*_+h*A+d*P,s[7]=u*p+h*E+d*D,s[2]=f*S+m*R+x*F,s[5]=f*_+m*A+x*P,s[8]=f*p+m*E+x*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*s*h+n*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],d=h*o-a*u,f=a*l-h*s,m=u*s-o*l,x=e*d+n*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=d*S,t[1]=(r*u-h*n)*S,t[2]=(a*n-r*o)*S,t[3]=f*S,t[4]=(h*e-r*l)*S,t[5]=(r*s-a*e)*S,t[6]=m*S,t[7]=(n*l-u*e)*S,t[8]=(o*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new le;function $d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _c(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){const i=_c("canvas");return i.style.display="block",i}const bf={};function Fo(i){i in bf||(bf[i]=!0,console.warn(i))}function Pm(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Af=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lm(){const i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pe&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pe&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qi?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:t,whitePoint:n,transfer:mc,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),i}const Me=Lm();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jr;class Dm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jr===void 0&&(Jr=_c("canvas")),Jr.width=t.width,Jr.height=t.height;const r=Jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Jr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_c("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Im=0;class qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ul(r[o].image)):s.push(ul(r[o]))}else s=ul(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Um=0;const hl=new b;class gn extends Cs{constructor(t=gn.DEFAULT_IMAGE,e=gn.DEFAULT_MAPPING,n=Tr,r=Tr,s=ci,o=br,a=jn,l=hi,u=gn.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Cr(),this.name="",this.source=new qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eu:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case nu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eu:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case nu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=zd;gn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,r=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],h=l[4],d=l[8],f=l[1],m=l[5],x=l[9],S=l[2],_=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(x+_)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(u+1)/2,E=(m+1)/2,F=(p+1)/2,P=(h+f)/4,D=(d+S)/4,L=(x+_)/4;return A>E&&A>F?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=P/n,s=D/n):E>F?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=L/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=D/s,r=L/s),this.set(n,r,s,e),this}let R=Math.sqrt((_-x)*(_-x)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(d-S)/R,this.z=(f-h)/R,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nm extends Cs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new gn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new qu(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Nm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kd extends gn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends gn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),La.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(t.matrixWorld),this.union(La)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),Da.subVectors(this.max,go),$r.subVectors(t.a,go),Kr.subVectors(t.b,go),jr.subVectors(t.c,go),zi.subVectors(Kr,$r),ki.subVectors(jr,Kr),hr.subVectors($r,jr);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-hr.z,hr.y,zi.z,0,-zi.x,ki.z,0,-ki.x,hr.z,0,-hr.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-hr.y,hr.x,0];return!fl(e,$r,Kr,jr,Da)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,$r,Kr,jr,Da))?!1:(Ia.crossVectors(zi,ki),e=[Ia.x,Ia.y,Ia.z],fl(e,$r,Kr,jr,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mi=[new b,new b,new b,new b,new b,new b,new b,new b],Jn=new b,La=new Pr,$r=new b,Kr=new b,jr=new b,zi=new b,ki=new b,hr=new b,go=new b,Da=new b,Ia=new b,fr=new b;function fl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fr.fromArray(i,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=t.dot(fr),u=e.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const Om=new Pr,_o=new b,dl=new b;class Ki{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Om.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(_o,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(dl)),this.expandByPoint(_o.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const yi=new b,pl=new b,Ua=new b,Hi=new b,ml=new b,Na=new b,gl=new b;class yc{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){pl.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(pl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ua),a=Hi.dot(this.direction),l=-Hi.dot(Ua),u=Hi.lengthSq(),h=Math.abs(1-o*o);let d,f,m,x;if(h>0)if(d=o*l-a,f=o*a-l,x=s*h,d>=0)if(f>=-x)if(f<=x){const S=1/h;d*=S,f*=S,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pl).addScaledVector(Ua,f),m}intersectSphere(t,e){yi.subVectors(t.center,this.origin);const n=yi.dot(this.direction),r=yi.dot(yi)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,r,s){ml.subVectors(e,t),Na.subVectors(n,t),gl.crossVectors(ml,Na);let o=this.direction.dot(gl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);const l=a*this.direction.dot(Na.crossVectors(Hi,Na));if(l<0)return null;const u=a*this.direction.dot(ml.cross(Hi));if(u<0||l+u>o)return null;const h=-a*Hi.dot(gl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,r,s,o,a,l,u,h,d,f,m,x,S,_){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u,h,d,f,m,x,S,_)}set(t,e,n,r,s,o,a,l,u,h,d,f,m,x,S,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=h,p[10]=d,p[14]=f,p[3]=m,p[7]=x,p[11]=S,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Qr.setFromMatrixColumn(t,0).length(),s=1/Qr.setFromMatrixColumn(t,1).length(),o=1/Qr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,m=o*d,x=a*h,S=a*d;e[0]=l*h,e[4]=-l*d,e[8]=u,e[1]=m+x*u,e[5]=f-S*u,e[9]=-a*l,e[2]=S-f*u,e[6]=x+m*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,x=u*h,S=u*d;e[0]=f+S*a,e[4]=x*a-m,e[8]=o*u,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-x,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,x=u*h,S=u*d;e[0]=f-S*a,e[4]=-o*d,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*d,x=a*h,S=a*d;e[0]=l*h,e[4]=x*u-m,e[8]=f*u+S,e[1]=l*d,e[5]=S*u+f,e[9]=m*u-x,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*u,x=a*l,S=a*u;e[0]=l*h,e[4]=S-f*d,e[8]=x*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=m*d+x,e[10]=f-S*d}else if(t.order==="XZY"){const f=o*l,m=o*u,x=a*l,S=a*u;e[0]=l*h,e[4]=-d,e[8]=u*h,e[1]=f*d+S,e[5]=o*h,e[9]=m*d-x,e[2]=x*d-m,e[6]=a*h,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bm,t,zm)}lookAt(t,e,n){const r=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Gi.crossVectors(n,On),Gi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Gi.crossVectors(n,On)),Gi.normalize(),Fa.crossVectors(On,Gi),r[0]=Gi.x,r[4]=Fa.x,r[8]=On.x,r[1]=Gi.y,r[5]=Fa.y,r[9]=On.y,r[2]=Gi.z,r[6]=Fa.z,r[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],m=n[13],x=n[2],S=n[6],_=n[10],p=n[14],R=n[3],A=n[7],E=n[11],F=n[15],P=r[0],D=r[4],L=r[8],v=r[12],M=r[1],I=r[5],V=r[9],X=r[13],$=r[2],tt=r[6],j=r[10],ht=r[14],Z=r[3],mt=r[7],Lt=r[11],Ot=r[15];return s[0]=o*P+a*M+l*$+u*Z,s[4]=o*D+a*I+l*tt+u*mt,s[8]=o*L+a*V+l*j+u*Lt,s[12]=o*v+a*X+l*ht+u*Ot,s[1]=h*P+d*M+f*$+m*Z,s[5]=h*D+d*I+f*tt+m*mt,s[9]=h*L+d*V+f*j+m*Lt,s[13]=h*v+d*X+f*ht+m*Ot,s[2]=x*P+S*M+_*$+p*Z,s[6]=x*D+S*I+_*tt+p*mt,s[10]=x*L+S*V+_*j+p*Lt,s[14]=x*v+S*X+_*ht+p*Ot,s[3]=R*P+A*M+E*$+F*Z,s[7]=R*D+A*I+E*tt+F*mt,s[11]=R*L+A*V+E*j+F*Lt,s[15]=R*v+A*X+E*ht+F*Ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],h=t[2],d=t[6],f=t[10],m=t[14],x=t[3],S=t[7],_=t[11],p=t[15];return x*(+s*l*d-r*u*d-s*a*f+n*u*f+r*a*m-n*l*m)+S*(+e*l*m-e*u*f+s*o*f-r*o*m+r*u*h-s*l*h)+_*(+e*u*d-e*a*m-s*o*d+n*o*m+s*a*h-n*u*h)+p*(-r*a*h-e*l*d+e*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],d=t[9],f=t[10],m=t[11],x=t[12],S=t[13],_=t[14],p=t[15],R=d*_*u-S*f*u+S*l*m-a*_*m-d*l*p+a*f*p,A=x*f*u-h*_*u-x*l*m+o*_*m+h*l*p-o*f*p,E=h*S*u-x*d*u+x*a*m-o*S*m-h*a*p+o*d*p,F=x*d*l-h*S*l-x*a*f+o*S*f+h*a*_-o*d*_,P=e*R+n*A+r*E+s*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=R*D,t[1]=(S*f*s-d*_*s-S*r*m+n*_*m+d*r*p-n*f*p)*D,t[2]=(a*_*s-S*l*s+S*r*u-n*_*u-a*r*p+n*l*p)*D,t[3]=(d*l*s-a*f*s-d*r*u+n*f*u+a*r*m-n*l*m)*D,t[4]=A*D,t[5]=(h*_*s-x*f*s+x*r*m-e*_*m-h*r*p+e*f*p)*D,t[6]=(x*l*s-o*_*s-x*r*u+e*_*u+o*r*p-e*l*p)*D,t[7]=(o*f*s-h*l*s+h*r*u-e*f*u-o*r*m+e*l*m)*D,t[8]=E*D,t[9]=(x*d*s-h*S*s-x*n*m+e*S*m+h*n*p-e*d*p)*D,t[10]=(o*S*s-x*a*s+x*n*u-e*S*u-o*n*p+e*a*p)*D,t[11]=(h*a*s-o*d*s-h*n*u+e*d*u+o*n*m-e*a*m)*D,t[12]=F*D,t[13]=(h*S*r-x*d*r+x*n*f-e*S*f-h*n*_+e*d*_)*D,t[14]=(x*a*r-o*S*r-x*n*l+e*S*l+o*n*_-e*a*_)*D,t[15]=(o*d*r-h*a*r+h*n*l-e*d*l-o*n*f+e*a*f)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+n,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,h=o+o,d=a+a,f=s*u,m=s*h,x=s*d,S=o*h,_=o*d,p=a*d,R=l*u,A=l*h,E=l*d,F=n.x,P=n.y,D=n.z;return r[0]=(1-(S+p))*F,r[1]=(m+E)*F,r[2]=(x-A)*F,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(f+p))*P,r[6]=(_+R)*P,r[7]=0,r[8]=(x+A)*D,r[9]=(_-R)*D,r[10]=(1-(f+S))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],$n.copy(this);const u=1/s,h=1/o,d=1/a;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,e.setFromRotationMatrix($n),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ui,l=!1){const u=this.elements,h=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),m=(n+r)/(n-r);let x,S;if(l)x=s/(o-s),S=o*s/(o-s);else if(a===ui)x=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===gc)x=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ui,l=!1){const u=this.elements,h=2/(e-t),d=2/(n-r),f=-(e+t)/(e-t),m=-(n+r)/(n-r);let x,S;if(l)x=1/(o-s),S=o/(o-s);else if(a===ui)x=-2/(o-s),S=-(o+s)/(o-s);else if(a===gc)x=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qr=new b,$n=new be,Bm=new b(0,0,0),zm=new b(1,1,1),Gi=new b,Fa=new b,On=new b,Cf=new be,Pf=new Ps;class fi{constructor(t=0,e=0,n=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let km=0;const Lf=new b,ts=new Ps,Si=new be,Oa=new b,vo=new b,Hm=new b,Gm=new Ps,Df=new b(1,0,0),If=new b(0,1,0),Uf=new b(0,0,1),Nf={type:"added"},Vm={type:"removed"},es={type:"childadded",child:null},_l={type:"childremoved",child:null};class We extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new b,e=new fi,n=new Ps,r=new b(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new le}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Df,t)}rotateY(t){return this.rotateOnAxis(If,t)}rotateZ(t){return this.rotateOnAxis(Uf,t)}translateOnAxis(t,e){return Lf.copy(t).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Df,t)}translateY(t){return this.translateOnAxis(If,t)}translateZ(t){return this.translateOnAxis(Uf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(vo,Oa,this.up):Si.lookAt(Oa,vo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(Si),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nf),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vm),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nf),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}We.DEFAULT_UP=new b(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new b,Ei=new b,vl=new b,wi=new b,ns=new b,is=new b,Ff=new b,xl=new b,Ml=new b,yl=new b,Sl=new Le,El=new Le,wl=new Le;class Vn{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Kn.subVectors(t,e),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Kn.subVectors(r,e),Ei.subVectors(n,e),vl.subVectors(t,e);const o=Kn.dot(Kn),a=Kn.dot(Ei),l=Kn.dot(vl),u=Ei.dot(Ei),h=Ei.dot(vl),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(u*l-a*h)*f,x=(o*h-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Sl.setScalar(0),El.setScalar(0),wl.setScalar(0),Sl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,n),wl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Sl,s.x),o.addScaledVector(El,s.y),o.addScaledVector(wl,s.z),o}static isFrontFacing(t,e,n,r){return Kn.subVectors(n,e),Ei.subVectors(t,e),Kn.cross(Ei).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;ns.subVectors(r,n),is.subVectors(s,n),xl.subVectors(t,n);const l=ns.dot(xl),u=is.dot(xl);if(l<=0&&u<=0)return e.copy(n);Ml.subVectors(t,r);const h=ns.dot(Ml),d=is.dot(Ml);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ns,o);yl.subVectors(t,s);const m=ns.dot(yl),x=is.dot(yl);if(x>=0&&m<=x)return e.copy(s);const S=m*u-l*x;if(S<=0&&u>=0&&x<=0)return a=u/(u-x),e.copy(n).addScaledVector(is,a);const _=h*x-m*d;if(_<=0&&d-h>=0&&m-x>=0)return Ff.subVectors(s,r),a=(d-h)/(d-h+(m-x)),e.copy(r).addScaledVector(Ff,a);const p=1/(_+S+f);return o=S*p,a=f*p,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Me.workingColorSpace){if(t=Xu(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Tl(o,s,t+1/3),this.g=Tl(o,s,t),this.b=Tl(o,s,t-1/3)}return Me.colorSpaceToWorking(this,r),this}setStyle(t,e=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Me.workingToColorSpace(pn.copy(this),t),Math.round(me(pn.r*255,0,255))*65536+Math.round(me(pn.g*255,0,255))*256+Math.round(me(pn.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,s=pn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Dn){Me.workingToColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,r=pn.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Ba);const n=Ao(Vi.h,Ba.h,e),r=Ao(Vi.s,Ba.s,e),s=Ao(Vi.l,Ba.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new jt;jt.NAMES=jd;let Wm=0;class ji extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Ms,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oi extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new b,za=new dt;let Xm=0;class Wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sf,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)za.fromBufferAttribute(this,e),za.applyMatrix3(t),this.setXY(e,za.x,za.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sf&&(t.usage=this.usage),t}}class Qd extends Wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tp extends Wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qm=0;const Hn=new be,bl=new We,rs=new b,Bn=new Pr,xo=new Pr,nn=new b;class we extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($d(t)?tp:Qd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Bn.min,xo.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,xo.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(xo.min),Bn.expandByPoint(xo.max))}Bn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)nn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(nn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)nn.fromBufferAttribute(a,u),l&&(rs.fromBufferAttribute(t,u),nn.add(rs)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new b,l[L]=new b;const u=new b,h=new b,d=new b,f=new dt,m=new dt,x=new dt,S=new b,_=new b;function p(L,v,M){u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,v),x.fromBufferAttribute(s,M),h.sub(u),d.sub(u),m.sub(f),x.sub(f);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(I),_.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(I),a[L].add(S),a[v].add(S),a[M].add(S),l[L].add(_),l[v].add(_),l[M].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let L=0,v=R.length;L<v;++L){const M=R[L],I=M.start,V=M.count;for(let X=I,$=I+V;X<$;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const A=new b,E=new b,F=new b,P=new b;function D(L){F.fromBufferAttribute(r,L),P.copy(F);const v=a[L];A.copy(v),A.sub(F.multiplyScalar(F.dot(v))).normalize(),E.crossVectors(P,v);const I=E.dot(l[L])<0?-1:1;o.setXYZW(L,A.x,A.y,A.z,I)}for(let L=0,v=R.length;L<v;++L){const M=R[L],I=M.start,V=M.count;for(let X=I,$=I+V;X<$;X+=3)D(t.getX(X+0)),D(t.getX(X+1)),D(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new b,s=new b,o=new b,a=new b,l=new b,u=new b,h=new b,d=new b;if(t)for(let f=0,m=t.count;f<m;f+=3){const x=t.getX(f+0),S=t.getX(f+1),_=t.getX(f+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,_),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),a.add(h),l.add(h),u.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let m=0,x=0;for(let S=0,_=l.length;S<_;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*h;for(let p=0;p<h;p++)f[x++]=u[m++]}return new Wn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Of=new be,dr=new yc,ka=new Ki,Bf=new b,Ha=new b,Ga=new b,Va=new b,Al=new b,Wa=new b,zf=new b,Xa=new b;class At extends We{constructor(t=new we,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],d=s[l];h!==0&&(Al.fromBufferAttribute(d,t),o?Wa.addScaledVector(Al,h):Wa.addScaledVector(Al.sub(e),h))}e.add(Wa)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),dr.copy(t.ray).recast(t.near),!(ka.containsPoint(dr.origin)===!1&&(dr.intersectSphere(ka,Bf)===null||dr.origin.distanceToSquared(Bf)>(t.far-t.near)**2))&&(Of.copy(s).invert(),dr.copy(t.ray).applyMatrix4(Of),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,dr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){const _=f[x],p=o[_.materialIndex],R=Math.max(_.start,m.start),A=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let E=R,F=A;E<F;E+=3){const P=a.getX(E),D=a.getX(E+1),L=a.getX(E+2);r=qa(this,p,t,n,u,h,d,P,D,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let _=x,p=S;_<p;_+=3){const R=a.getX(_),A=a.getX(_+1),E=a.getX(_+2);r=qa(this,o,t,n,u,h,d,R,A,E),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){const _=f[x],p=o[_.materialIndex],R=Math.max(_.start,m.start),A=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let E=R,F=A;E<F;E+=3){const P=E,D=E+1,L=E+2;r=qa(this,p,t,n,u,h,d,P,D,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let _=x,p=S;_<p;_+=3){const R=_,A=_+1,E=_+2;r=qa(this,o,t,n,u,h,d,R,A,E),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function Ym(i,t,e,n,r,s,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Ai,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Xa);return u<e.near||u>e.far?null:{distance:u,point:Xa.clone(),object:i}}function qa(i,t,e,n,r,s,o,a,l,u){i.getVertexPosition(a,Ha),i.getVertexPosition(l,Ga),i.getVertexPosition(u,Va);const h=Ym(i,t,e,n,Ha,Ga,Va,zf);if(h){const d=new b;Vn.getBarycoord(zf,Ha,Ga,Va,d),r&&(h.uv=Vn.getInterpolatedAttribute(r,a,l,u,d,new dt)),s&&(h.uv1=Vn.getInterpolatedAttribute(s,a,l,u,d,new dt)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,l,u,d,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new b,materialIndex:0};Vn.getNormal(Ha,Ga,Va,f.normal),h.face=f,h.barycoord=d}return h}class pe extends we{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function x(S,_,p,R,A,E,F,P,D,L,v){const M=E/D,I=F/L,V=E/2,X=F/2,$=P/2,tt=D+1,j=L+1;let ht=0,Z=0;const mt=new b;for(let Lt=0;Lt<j;Lt++){const Ot=Lt*I-X;for(let te=0;te<tt;te++){const Qt=te*M-V;mt[S]=Qt*R,mt[_]=Ot*A,mt[p]=$,u.push(mt.x,mt.y,mt.z),mt[S]=0,mt[_]=0,mt[p]=P>0?1:-1,h.push(mt.x,mt.y,mt.z),d.push(te/D),d.push(1-Lt/L),ht+=1}}for(let Lt=0;Lt<L;Lt++)for(let Ot=0;Ot<D;Ot++){const te=f+Ot+tt*Lt,Qt=f+Ot+tt*(Lt+1),de=f+(Ot+1)+tt*(Lt+1),ae=f+(Ot+1)+tt*Lt;l.push(te,Qt,ae),l.push(Qt,de,ae),Z+=6}a.addGroup(m,Z,v),m+=Z,f+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=As(i[e]);for(const r in n)t[r]=n[r]}return t}function Zm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ep(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const Jm={clone:As,merge:Sn};var $m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class np extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new b,kf=new dt,Hf=new dt;class Gn extends np{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return No*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,kf,Hf),e.subVectors(Hf,kf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,os=1;class jm extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(ss,os,t,e);r.layers=this.layers,this.add(r);const s=new Gn(ss,os,t,e);s.layers=this.layers,this.add(s);const o=new Gn(ss,os,t,e);o.layers=this.layers,this.add(o);const a=new Gn(ss,os,t,e);a.layers=this.layers,this.add(a);const l=new Gn(ss,os,t,e);l.layers=this.layers,this.add(l);const u=new Gn(ss,os,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ip extends gn{constructor(t=[],e=ws,n,r,s,o,a,l,u,h){super(t,e,n,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qm extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ip(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pe(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Zi});s.uniforms.tEquirect.value=e;const o=new At(r,s),a=e.minFilter;return e.minFilter===br&&(e.minFilter=ci),new jm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class _e extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const S of t.hand.values()){const _=e.getJointPose(S,n),p=this._getHandJoint(u,S);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new Zu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eg extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ng extends gn{constructor(t=null,e=1,n=1,r,s,o,a,l,u=zn,h=zn,d,f){super(null,o,a,l,u,h,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gf extends Wn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new be,Vf=new be,Ya=[],Wf=new Pr,ig=new be,Mo=new At,yo=new Ki;class cs extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ig)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Wf.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Wf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),yo.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(yo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(n),t.ray.intersectsSphere(yo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,as),Vf.multiplyMatrices(n,as),Mo.matrixWorld=Vf,Mo.raycast(t,Ya);for(let o=0,a=Ya.length;o<a;o++){const l=Ya[o];l.instanceId=s,l.object=this,e.push(l)}Ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ng(new Float32Array(r*this.count),r,this.count,Hu,li));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cl=new b,rg=new b,sg=new le;class vr{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Cl.subVectors(n,e).cross(rg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sg.getNormalMatrix(t),r=this.coplanarPoint(Cl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Ki,og=new dt(.5,.5),Za=new b;class Ju{constructor(t=new vr,e=new vr,n=new vr,r=new vr,s=new vr,o=new vr){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],u=s[3],h=s[4],d=s[5],f=s[6],m=s[7],x=s[8],S=s[9],_=s[10],p=s[11],R=s[12],A=s[13],E=s[14],F=s[15];if(r[0].setComponents(u-o,m-h,p-x,F-R).normalize(),r[1].setComponents(u+o,m+h,p+x,F+R).normalize(),r[2].setComponents(u+a,m+d,p+S,F+A).normalize(),r[3].setComponents(u-a,m-d,p-S,F-A).normalize(),n)r[4].setComponents(l,f,_,E).normalize(),r[5].setComponents(u-l,m-f,p-_,F-E).normalize();else if(r[4].setComponents(u-l,m-f,p-_,F-E).normalize(),e===ui)r[5].setComponents(u+l,m+f,p+_,F+E).normalize();else if(e===gc)r[5].setComponents(l,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);const e=og.distanceTo(t.center);return pr.radius=.7071067811865476+e,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Za.x=r.normal.x>0?t.max.x:t.min.x,Za.y=r.normal.y>0?t.max.y:t.min.y,Za.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gs extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vc=new b,xc=new b,Xf=new be,So=new yc,Ja=new Ki,Pl=new b,qf=new b;class dc extends We{constructor(t=new we,e=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)vc.fromBufferAttribute(e,r-1),xc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=vc.distanceTo(xc);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,t.ray.intersectsSphere(Ja)===!1)return;Xf.copy(r).invert(),So.copy(t.ray).applyMatrix4(Xf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let S=m,_=x-1;S<_;S+=u){const p=h.getX(S),R=h.getX(S+1),A=$a(this,t,So,l,p,R,S);A&&e.push(A)}if(this.isLineLoop){const S=h.getX(x-1),_=h.getX(m),p=$a(this,t,So,l,S,_,x-1);p&&e.push(p)}}else{const m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let S=m,_=x-1;S<_;S+=u){const p=$a(this,t,So,l,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){const S=$a(this,t,So,l,x-1,m,x-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $a(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(vc.fromBufferAttribute(a,r),xc.fromBufferAttribute(a,s),e.distanceSqToSegment(vc,xc,Pl,qf)>n)return;Pl.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Pl);if(!(u<t.near||u>t.far))return{distance:u,point:qf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Yf=new b,Zf=new b;class ls extends dc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Yf.fromBufferAttribute(e,r),Zf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Yf.distanceTo(Zf);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rp extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jf=new be,Lu=new yc,Ka=new Ki,ja=new b;class us extends We{constructor(t=new we,e=new rp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=s,t.ray.intersectsSphere(Ka)===!1)return;Jf.copy(r).invert(),Lu.copy(t.ray).applyMatrix4(Jf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,S=m;x<S;x++){const _=u.getX(x);ja.fromBufferAttribute(d,_),$f(ja,_,l,r,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,S=m;x<S;x++)ja.fromBufferAttribute(d,x),$f(ja,x,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $f(i,t,e,n,r,s,o){const a=Lu.distanceSqToPoint(i);if(a<e){const l=new b;Lu.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Kf extends gn{constructor(t,e,n,r,s,o,a,l,u){super(t,e,n,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sp extends gn{constructor(t,e,n=Ar,r,s,o,a=zn,l=zn,u,h=Io,d=1){if(h!==Io&&h!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,r,s,o,a,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class op extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _s extends we{constructor(t=1,e=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:r,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],u=[],h=e/2,d=Math.PI/2*t,f=e,m=2*d+f,x=n*2+s,S=r+1,_=new b,p=new b;for(let R=0;R<=x;R++){let A=0,E=0,F=0,P=0;if(R<=n){const v=R/n,M=v*Math.PI/2;E=-h-t*Math.cos(M),F=t*Math.sin(M),P=-t*Math.cos(M),A=v*d}else if(R<=n+s){const v=(R-n)/s;E=-h+v*e,F=t,P=0,A=d+v*f}else{const v=(R-n-s)/n,M=v*Math.PI/2;E=h+t*Math.sin(M),F=t*Math.cos(M),P=t*Math.sin(M),A=d+f+v*d}const D=Math.max(0,Math.min(1,A/m));let L=0;R===0?L=.5/r:R===x&&(L=-.5/r);for(let v=0;v<=r;v++){const M=v/r,I=M*Math.PI*2,V=Math.sin(I),X=Math.cos(I);p.x=-F*X,p.y=E,p.z=F*V,a.push(p.x,p.y,p.z),_.set(-F*X,P,F*V),_.normalize(),l.push(_.x,_.y,_.z),u.push(M+L,D)}if(R>0){const v=(R-1)*S;for(let M=0;M<r;M++){const I=v+M,V=v+M+1,X=R*S+M,$=R*S+M+1;o.push(I,V,X),o.push(V,$,X)}}}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class yr extends we{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],u=new b,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*r;u.x=t*Math.cos(m),u.y=t*Math.sin(m),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class an extends we{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let x=0;const S=[],_=n/2;let p=0;R(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(m,2));function R(){const E=new b,F=new b;let P=0;const D=(e-t)/n;for(let L=0;L<=s;L++){const v=[],M=L/s,I=M*(e-t)+t;for(let V=0;V<=r;V++){const X=V/r,$=X*l+a,tt=Math.sin($),j=Math.cos($);F.x=I*tt,F.y=-M*n+_,F.z=I*j,d.push(F.x,F.y,F.z),E.set(tt,D,j).normalize(),f.push(E.x,E.y,E.z),m.push(X,1-M),v.push(x++)}S.push(v)}for(let L=0;L<r;L++)for(let v=0;v<s;v++){const M=S[v][L],I=S[v+1][L],V=S[v+1][L+1],X=S[v][L+1];(t>0||v!==0)&&(h.push(M,I,X),P+=3),(e>0||v!==s-1)&&(h.push(I,V,X),P+=3)}u.addGroup(p,P,0),p+=P}function A(E){const F=x,P=new dt,D=new b;let L=0;const v=E===!0?t:e,M=E===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,_*M,0),f.push(0,M,0),m.push(.5,.5),x++;const I=x;for(let V=0;V<=r;V++){const $=V/r*l+a,tt=Math.cos($),j=Math.sin($);D.x=v*j,D.y=_*M,D.z=v*tt,d.push(D.x,D.y,D.z),f.push(0,M,0),P.x=tt*.5+.5,P.y=j*.5*M+.5,m.push(P.x,P.y),x++}for(let V=0;V<r;V++){const X=F+V,$=I+V;E===!0?h.push($,$+1,X):h.push($+1,$,X),L+=3}u.addGroup(p,L,E===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class En extends an{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new En(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $u extends we{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),u(n),h(),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(s.slice(),3)),this.setAttribute("uv",new ce(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(R){const A=new b,E=new b,F=new b;for(let P=0;P<e.length;P+=3)m(e[P+0],A),m(e[P+1],E),m(e[P+2],F),l(A,E,F,R)}function l(R,A,E,F){const P=F+1,D=[];for(let L=0;L<=P;L++){D[L]=[];const v=R.clone().lerp(E,L/P),M=A.clone().lerp(E,L/P),I=P-L;for(let V=0;V<=I;V++)V===0&&L===P?D[L][V]=v:D[L][V]=v.clone().lerp(M,V/I)}for(let L=0;L<P;L++)for(let v=0;v<2*(P-L)-1;v++){const M=Math.floor(v/2);v%2===0?(f(D[L][M+1]),f(D[L+1][M]),f(D[L][M])):(f(D[L][M+1]),f(D[L+1][M+1]),f(D[L+1][M]))}}function u(R){const A=new b;for(let E=0;E<s.length;E+=3)A.x=s[E+0],A.y=s[E+1],A.z=s[E+2],A.normalize().multiplyScalar(R),s[E+0]=A.x,s[E+1]=A.y,s[E+2]=A.z}function h(){const R=new b;for(let A=0;A<s.length;A+=3){R.x=s[A+0],R.y=s[A+1],R.z=s[A+2];const E=_(R)/2/Math.PI+.5,F=p(R)/Math.PI+.5;o.push(E,1-F)}x(),d()}function d(){for(let R=0;R<o.length;R+=6){const A=o[R+0],E=o[R+2],F=o[R+4],P=Math.max(A,E,F),D=Math.min(A,E,F);P>.9&&D<.1&&(A<.2&&(o[R+0]+=1),E<.2&&(o[R+2]+=1),F<.2&&(o[R+4]+=1))}}function f(R){s.push(R.x,R.y,R.z)}function m(R,A){const E=R*3;A.x=t[E+0],A.y=t[E+1],A.z=t[E+2]}function x(){const R=new b,A=new b,E=new b,F=new b,P=new dt,D=new dt,L=new dt;for(let v=0,M=0;v<s.length;v+=9,M+=6){R.set(s[v+0],s[v+1],s[v+2]),A.set(s[v+3],s[v+4],s[v+5]),E.set(s[v+6],s[v+7],s[v+8]),P.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),F.copy(R).add(A).add(E).divideScalar(3);const I=_(F);S(P,M+0,R,I),S(D,M+2,A,I),S(L,M+4,E,I)}}function S(R,A,E,F){F<0&&R.x===1&&(o[A]=R.x-1),E.x===0&&E.z===0&&(o[A]=F/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function p(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $u(t.vertices,t.indices,t.radius,t.details)}}const Qa=new b,tc=new b,Ll=new b,ec=new Vn;class nc extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(ys*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],h=["a","b","c"],d=new Array(3),f={},m=[];for(let x=0;x<l;x+=3){o?(u[0]=o.getX(x),u[1]=o.getX(x+1),u[2]=o.getX(x+2)):(u[0]=x,u[1]=x+1,u[2]=x+2);const{a:S,b:_,c:p}=ec;if(S.fromBufferAttribute(a,u[0]),_.fromBufferAttribute(a,u[1]),p.fromBufferAttribute(a,u[2]),ec.getNormal(Ll),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let R=0;R<3;R++){const A=(R+1)%3,E=d[R],F=d[A],P=ec[h[R]],D=ec[h[A]],L=`${E}_${F}`,v=`${F}_${E}`;v in f&&f[v]?(Ll.dot(f[v].normal)<=s&&(m.push(P.x,P.y,P.z),m.push(D.x,D.y,D.z)),f[v]=null):L in f||(f[L]={index0:u[R],index1:u[A],normal:Ll.clone()})}}for(const x in f)if(f[x]){const{index0:S,index1:_}=f[x];Qa.fromBufferAttribute(a,S),tc.fromBufferAttribute(a,_),m.push(Qa.x,Qa.y,Qa.z),m.push(tc.x,tc.y,tc.z)}this.setAttribute("position",new ce(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=n[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,m=(o-h)/f;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new dt:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new b,r=[],s=[],o=[],a=new b,l=new be;for(let m=0;m<=t;m++){const x=m/t;r[m]=this.getTangentAt(x,new b)}s[0]=new b,o[0]=new b;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(me(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(me(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ku extends di{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=u-this.aY;l=f*h-m*d+this.aX,u=f*d+m*h+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ag extends Ku{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ju(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,h,d){let f=(o-s)/u-(a-s)/(u+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,m*=h,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const ic=new b,Dl=new ju,Il=new ju,Ul=new ju;class cg extends di{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new b){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,h;this.closed||a>0?u=r[(a-1)%s]:(ic.subVectors(r[0],r[1]).add(r[0]),u=ic);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ic.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ic),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(d),m),S=Math.pow(d.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(h),m);S<1e-4&&(S=1),x<1e-4&&(x=S),_<1e-4&&(_=S),Dl.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,x,S,_),Il.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,x,S,_),Ul.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,x,S,_)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),Il.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),Ul.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(Dl.calc(l),Il.calc(l),Ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new b().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jf(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function lg(i,t){const e=1-i;return e*e*t}function ug(i,t){return 2*(1-i)*i*t}function hg(i,t){return i*i*t}function Ro(i,t,e,n){return lg(i,t)+ug(i,e)+hg(i,n)}function fg(i,t){const e=1-i;return e*e*e*t}function dg(i,t){const e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function Co(i,t,e,n,r){return fg(i,t)+dg(i,e)+pg(i,n)+mg(i,r)}class ap extends di{constructor(t=new dt,e=new dt,n=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Co(t,r.x,s.x,o.x,a.x),Co(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends di{constructor(t=new b,e=new b,n=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new b){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Co(t,r.x,s.x,o.x,a.x),Co(t,r.y,s.y,o.y,a.y),Co(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cp extends di{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends di{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lp extends di{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ro(t,r.x,s.x,o.x),Ro(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vg extends di{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ro(t,r.x,s.x,o.x),Ro(t,r.y,s.y,o.y),Ro(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(jf(a,l.x,u.x,h.x,d.x),jf(a,l.y,u.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new dt().fromArray(r))}return this}}var Du=Object.freeze({__proto__:null,ArcCurve:ag,CatmullRomCurve3:cg,CubicBezierCurve:ap,CubicBezierCurve3:gg,EllipseCurve:Ku,LineCurve:cp,LineCurve3:_g,QuadraticBezierCurve:lp,QuadraticBezierCurve3:vg,SplineCurve:up});class xg extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Du[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Du[r.type]().fromJSON(r))}return this}}class Po extends xg{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cp(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new lp(this.currentPoint.clone(),new dt(t,e),new dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new ap(this.currentPoint.clone(),new dt(t,e),new dt(n,r),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new up(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+u,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const u=new Ku(t,e,n,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ps extends Po{constructor(t){super(t),this.uuid=Cr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Po().fromJSON(r))}return this}}function Mg(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=hp(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(n&&(s=Tg(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=e;f<r;f+=e){const m=i[f],x=i[f+1];m<a&&(a=m),x<l&&(l=x),m>h&&(h=m),x>d&&(d=x)}u=Math.max(h-a,d-l),u=u!==0?32767/u:0}return Oo(s,o,e,a,l,u,0),o}function hp(i,t,e,n,r){let s;if(r===Fg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Qf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Qf(o/n|0,i[o],i[o+1],s);return s&&Rs(s,s.next)&&(zo(s),s=s.next),s}function Rr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rs(e,e.next)||ke(e.prev,e,e.next)===0)){if(zo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Pg(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,u=i.next;if(s?Sg(i,n,r,s):yg(i)){t.push(l.i,i.i,u.i),zo(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Eg(Rr(i),t),Oo(i,t,e,n,r,s,2)):o===2&&wg(i,t,e,n,r,s):Oo(Rr(i),t,e,n,r,s,1);break}}}function yg(i){const t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,u=n.y,h=Math.min(r,s,o),d=Math.min(a,l,u),f=Math.max(r,s,o),m=Math.max(a,l,u);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=d&&x.y<=m&&To(r,a,s,l,o,u,x.x,x.y)&&ke(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Sg(i,t,e,n){const r=i.prev,s=i,o=i.next;if(ke(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,h=r.y,d=s.y,f=o.y,m=Math.min(a,l,u),x=Math.min(h,d,f),S=Math.max(a,l,u),_=Math.max(h,d,f),p=Iu(m,x,t,e,n),R=Iu(S,_,t,e,n);let A=i.prevZ,E=i.nextZ;for(;A&&A.z>=p&&E&&E.z<=R;){if(A.x>=m&&A.x<=S&&A.y>=x&&A.y<=_&&A!==r&&A!==o&&To(a,h,l,d,u,f,A.x,A.y)&&ke(A.prev,A,A.next)>=0||(A=A.prevZ,E.x>=m&&E.x<=S&&E.y>=x&&E.y<=_&&E!==r&&E!==o&&To(a,h,l,d,u,f,E.x,E.y)&&ke(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;A&&A.z>=p;){if(A.x>=m&&A.x<=S&&A.y>=x&&A.y<=_&&A!==r&&A!==o&&To(a,h,l,d,u,f,A.x,A.y)&&ke(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;E&&E.z<=R;){if(E.x>=m&&E.x<=S&&E.y>=x&&E.y<=_&&E!==r&&E!==o&&To(a,h,l,d,u,f,E.x,E.y)&&ke(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Eg(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Rs(n,r)&&dp(n,e,e.next,r)&&Bo(n,r)&&Bo(r,n)&&(t.push(n.i,e.i,r.i),zo(e),zo(e.next),e=i=r),e=e.next}while(e!==i);return Rr(e)}function wg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ig(o,a)){let l=pp(o,a);o=Rr(o,o.next),l=Rr(l,l.next),Oo(o,t,e,n,r,s,0),Oo(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Tg(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,u=hp(i,a,l,n,!1);u===u.next&&(u.steiner=!0),r.push(Dg(u))}r.sort(bg);for(let s=0;s<r.length;s++)e=Ag(r[s],e);return e}function bg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Ag(i,t){const e=Rg(i,t);if(!e)return t;const n=pp(e,i);return Rr(n,n.next),Rr(e,e.next)}function Rg(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Rs(i,e))return e;do{if(Rs(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,u=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&fp(r<u?n:s,r,l,u,r<u?s:n,r,e.x,e.y)){const d=Math.abs(r-e.y)/(n-e.x);Bo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Cg(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Cg(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function Pg(i,t,e,n){let r=i;do r.z===0&&(r.z=Iu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Lg(r)}function Lg(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let u=0;u<e&&(a++,o=o.nextZ,!!o);u++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Iu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fp(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function To(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&fp(i,t,e,n,r,s,o,a)}function Ig(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ug(i,t)&&(Bo(i,t)&&Bo(t,i)&&Ng(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||Rs(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rs(i,t){return i.x===t.x&&i.y===t.y}function dp(i,t,e,n){const r=sc(ke(i,t,e)),s=sc(ke(i,t,n)),o=sc(ke(e,n,i)),a=sc(ke(e,n,t));return!!(r!==s&&o!==a||r===0&&rc(i,e,t)||s===0&&rc(i,n,t)||o===0&&rc(e,i,n)||a===0&&rc(e,t,n))}function rc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sc(i){return i>0?1:i<0?-1:0}function Ug(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bo(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function Ng(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pp(i,t){const e=Uu(i.i,i.x,i.y),n=Uu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Qf(i,t,e,n){const r=Uu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Og{static triangulate(t,e,n=2){return Mg(t,e,n)}}class vs{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return vs.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];td(t),ed(n,t);let o=t.length;e.forEach(td);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,ed(n,e[l]);const a=Og.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function td(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ed(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Sr extends we{constructor(t=new ps([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const u=t[a];o(u)}this.setAttribute("position",new ce(r,3)),this.setAttribute("uv",new ce(s,2)),this.computeVertexNormals();function o(a){const l=[],u=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Bg;let A,E=!1,F,P,D,L;p&&(A=p.getSpacedPoints(h),E=!0,f=!1,F=p.computeFrenetFrames(h,!1),P=new b,D=new b,L=new b),f||(_=0,m=0,x=0,S=0);const v=a.extractPoints(u);let M=v.shape;const I=v.holes;if(!vs.isClockWise(M)){M=M.reverse();for(let at=0,rt=I.length;at<rt;at++){const et=I[at];vs.isClockWise(et)&&(I[at]=et.reverse())}}function X(at){const et=10000000000000001e-36;let K=at[0];for(let St=1;St<=at.length;St++){const ft=St%at.length,yt=at[ft],ee=yt.x-K.x,Jt=yt.y-K.y,C=ee*ee+Jt*Jt,y=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(K.x),Math.abs(K.y)),G=et*y*y;if(C<=G){at.splice(ft,1),St--;continue}K=yt}}X(M),I.forEach(X);const $=I.length,tt=M;for(let at=0;at<$;at++){const rt=I[at];M=M.concat(rt)}function j(at,rt,et){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(rt,et)}const ht=M.length;function Z(at,rt,et){let K,St,ft;const yt=at.x-rt.x,ee=at.y-rt.y,Jt=et.x-at.x,C=et.y-at.y,y=yt*yt+ee*ee,G=yt*C-ee*Jt;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(y),ct=Math.sqrt(Jt*Jt+C*C),Q=rt.x-ee/J,kt=rt.y+yt/J,xt=et.x-C/ct,zt=et.y+Jt/ct,Ht=((xt-Q)*C-(zt-kt)*Jt)/(yt*C-ee*Jt);K=Q+yt*Ht-at.x,St=kt+ee*Ht-at.y;const gt=K*K+St*St;if(gt<=2)return new dt(K,St);ft=Math.sqrt(gt/2)}else{let J=!1;yt>Number.EPSILON?Jt>Number.EPSILON&&(J=!0):yt<-Number.EPSILON?Jt<-Number.EPSILON&&(J=!0):Math.sign(ee)===Math.sign(C)&&(J=!0),J?(K=-ee,St=yt,ft=Math.sqrt(y)):(K=yt,St=ee,ft=Math.sqrt(y/2))}return new dt(K/ft,St/ft)}const mt=[];for(let at=0,rt=tt.length,et=rt-1,K=at+1;at<rt;at++,et++,K++)et===rt&&(et=0),K===rt&&(K=0),mt[at]=Z(tt[at],tt[et],tt[K]);const Lt=[];let Ot,te=mt.concat();for(let at=0,rt=$;at<rt;at++){const et=I[at];Ot=[];for(let K=0,St=et.length,ft=St-1,yt=K+1;K<St;K++,ft++,yt++)ft===St&&(ft=0),yt===St&&(yt=0),Ot[K]=Z(et[K],et[ft],et[yt]);Lt.push(Ot),te=te.concat(Ot)}let Qt;if(_===0)Qt=vs.triangulateShape(tt,I);else{const at=[],rt=[];for(let et=0;et<_;et++){const K=et/_,St=m*Math.cos(K*Math.PI/2),ft=x*Math.sin(K*Math.PI/2)+S;for(let yt=0,ee=tt.length;yt<ee;yt++){const Jt=j(tt[yt],mt[yt],ft);Dt(Jt.x,Jt.y,-St),K===0&&at.push(Jt)}for(let yt=0,ee=$;yt<ee;yt++){const Jt=I[yt];Ot=Lt[yt];const C=[];for(let y=0,G=Jt.length;y<G;y++){const J=j(Jt[y],Ot[y],ft);Dt(J.x,J.y,-St),K===0&&C.push(J)}K===0&&rt.push(C)}}Qt=vs.triangulateShape(at,rt)}const de=Qt.length,ae=x+S;for(let at=0;at<ht;at++){const rt=f?j(M[at],te[at],ae):M[at];E?(D.copy(F.normals[0]).multiplyScalar(rt.x),P.copy(F.binormals[0]).multiplyScalar(rt.y),L.copy(A[0]).add(D).add(P),Dt(L.x,L.y,L.z)):Dt(rt.x,rt.y,0)}for(let at=1;at<=h;at++)for(let rt=0;rt<ht;rt++){const et=f?j(M[rt],te[rt],ae):M[rt];E?(D.copy(F.normals[at]).multiplyScalar(et.x),P.copy(F.binormals[at]).multiplyScalar(et.y),L.copy(A[at]).add(D).add(P),Dt(L.x,L.y,L.z)):Dt(et.x,et.y,d/h*at)}for(let at=_-1;at>=0;at--){const rt=at/_,et=m*Math.cos(rt*Math.PI/2),K=x*Math.sin(rt*Math.PI/2)+S;for(let St=0,ft=tt.length;St<ft;St++){const yt=j(tt[St],mt[St],K);Dt(yt.x,yt.y,d+et)}for(let St=0,ft=I.length;St<ft;St++){const yt=I[St];Ot=Lt[St];for(let ee=0,Jt=yt.length;ee<Jt;ee++){const C=j(yt[ee],Ot[ee],K);E?Dt(C.x,C.y+A[h-1].y,A[h-1].x+et):Dt(C.x,C.y,d+et)}}}it(),ut();function it(){const at=r.length/3;if(f){let rt=0,et=ht*rt;for(let K=0;K<de;K++){const St=Qt[K];Nt(St[2]+et,St[1]+et,St[0]+et)}rt=h+_*2,et=ht*rt;for(let K=0;K<de;K++){const St=Qt[K];Nt(St[0]+et,St[1]+et,St[2]+et)}}else{for(let rt=0;rt<de;rt++){const et=Qt[rt];Nt(et[2],et[1],et[0])}for(let rt=0;rt<de;rt++){const et=Qt[rt];Nt(et[0]+ht*h,et[1]+ht*h,et[2]+ht*h)}}n.addGroup(at,r.length/3-at,0)}function ut(){const at=r.length/3;let rt=0;wt(tt,rt),rt+=tt.length;for(let et=0,K=I.length;et<K;et++){const St=I[et];wt(St,rt),rt+=St.length}n.addGroup(at,r.length/3-at,1)}function wt(at,rt){let et=at.length;for(;--et>=0;){const K=et;let St=et-1;St<0&&(St=at.length-1);for(let ft=0,yt=h+_*2;ft<yt;ft++){const ee=ht*ft,Jt=ht*(ft+1),C=rt+K+ee,y=rt+St+ee,G=rt+St+Jt,J=rt+K+Jt;re(C,y,G,J)}}}function Dt(at,rt,et){l.push(at),l.push(rt),l.push(et)}function Nt(at,rt,et){ye(at),ye(rt),ye(et);const K=r.length/3,St=R.generateTopUV(n,r,K-3,K-2,K-1);N(St[0]),N(St[1]),N(St[2])}function re(at,rt,et,K){ye(at),ye(rt),ye(K),ye(rt),ye(et),ye(K);const St=r.length/3,ft=R.generateSideWallUV(n,r,St-6,St-3,St-2,St-1);N(ft[0]),N(ft[1]),N(ft[3]),N(ft[1]),N(ft[2]),N(ft[3])}function ye(at){r.push(l[at*3+0]),r.push(l[at*3+1]),r.push(l[at*3+2])}function N(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Du[r.type]().fromJSON(r)),new Sr(n,t.options)}}const Bg={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],u=t[r*3],h=t[r*3+1];return[new dt(s,o),new dt(a,l),new dt(u,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],u=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[r*3],m=t[r*3+1],x=t[r*3+2],S=t[s*3],_=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new dt(o,1-l),new dt(u,1-d),new dt(f,1-x),new dt(S,1-p)]:[new dt(a,1-l),new dt(h,1-d),new dt(m,1-x),new dt(_,1-p)]}};function zg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class on extends $u{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new on(t.radius,t.detail)}}class rn extends we{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),u=a+1,h=l+1,d=t/a,f=e/l,m=[],x=[],S=[],_=[];for(let p=0;p<h;p++){const R=p*f-o;for(let A=0;A<u;A++){const E=A*d-s;x.push(E,-R,0),S.push(0,0,1),_.push(A/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const A=R+u*p,E=R+u*(p+1),F=R+1+u*(p+1),P=R+1+u*p;m.push(A,E,P),m.push(E,F,P)}this.setIndex(m),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(S,3)),this.setAttribute("uv",new ce(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qu extends we{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],u=[],h=[];let d=t;const f=(e-t)/r,m=new b,x=new dt;for(let S=0;S<=r;S++){for(let _=0;_<=n;_++){const p=s+_/n*o;m.x=d*Math.cos(p),m.y=d*Math.sin(p),l.push(m.x,m.y,m.z),u.push(0,0,1),x.x=(m.x/e+1)/2,x.y=(m.y/e+1)/2,h.push(x.x,x.y)}d+=f}for(let S=0;S<r;S++){const _=S*(n+1);for(let p=0;p<n;p++){const R=p+_,A=R,E=R+n+1,F=R+n+2,P=R+1;a.push(A,E,P),a.push(E,F,P)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class je extends we{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new b,f=new b,m=[],x=[],S=[],_=[];for(let p=0;p<=n;p++){const R=[],A=p/n;let E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let F=0;F<=e;F++){const P=F/e;d.x=-t*Math.cos(r+P*s)*Math.sin(o+A*a),d.y=t*Math.cos(o+A*a),d.z=t*Math.sin(r+P*s)*Math.sin(o+A*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),_.push(P+E,1-A),R.push(u++)}h.push(R)}for(let p=0;p<n;p++)for(let R=0;R<e;R++){const A=h[p][R+1],E=h[p][R],F=h[p+1][R],P=h[p+1][R+1];(p!==0||o>0)&&m.push(A,E,P),(p!==n-1||l<Math.PI)&&m.push(E,F,P)}this.setIndex(m),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(S,3)),this.setAttribute("uv",new ce(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Er extends we{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],u=[],h=new b,d=new b,f=new b;for(let m=0;m<=n;m++)for(let x=0;x<=r;x++){const S=x/r*s,_=m/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(S),d.y=(t+e*Math.cos(_))*Math.sin(S),d.z=e*Math.sin(_),a.push(d.x,d.y,d.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),u.push(x/r),u.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=r;x++){const S=(r+1)*m+x-1,_=(r+1)*(m-1)+x-1,p=(r+1)*(m-1)+x,R=(r+1)*m+x;o.push(S,_,R),o.push(_,p,R)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kg extends ji{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Pn extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mp extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hg extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gg extends gs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class th extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vg extends th{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Nl=new be,nd=new b,id=new b;class gp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ju,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(nd),id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(id),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rd=new be,Eo=new b,Fl=new b;class Wg extends gp{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Eo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Eo),Fl.copy(n.position),Fl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fl),n.updateMatrixWorld(),r.makeTranslation(-Eo.x,-Eo.y,-Eo.z),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd,n.coordinateSystem,n.reversedDepth)}}class sd extends th{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Wg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class eh extends np{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xg extends gp{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class od extends th{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Xg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qg extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ad=new be;class Yg{constructor(t,e,n=0,r=1/0){this.ray=new yc(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ad.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ad),this}intersectObject(t,e=!0,n=[]){return Nu(t,this,n,e),n.sort(cd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Nu(t[r],this,n,e);return n.sort(cd),n}}function cd(i,t){return i.distance-t.distance}function Nu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Nu(s[o],t,e,!0)}}function ld(i,t,e,n){const r=Zg(n);switch(e){case Wd:return i*t;case Hu:return i*t/r.components*r.byteLength;case Gu:return i*t/r.components*r.byteLength;case qd:return i*t*2/r.components*r.byteLength;case Vu:return i*t*2/r.components*r.byteLength;case Xd:return i*t*3/r.components*r.byteLength;case jn:return i*t*4/r.components*r.byteLength;case Wu:return i*t*4/r.components*r.byteLength;case lc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ru:case ou:return Math.max(i,16)*Math.max(t,8)/4;case iu:case su:return Math.max(i,8)*Math.max(t,8)/2;case au:case cu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case du:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _u:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Su:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wu:case Tu:case bu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Au:case Ru:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cu:case Pu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(i){switch(i){case hi:case kd:return{byteLength:1,components:1};case Lo:case Hd:case ko:return{byteLength:2,components:1};case zu:case ku:return{byteLength:2,components:4};case Ar:case Bu:case li:return{byteLength:4,components:1};case Gd:case Vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ou);function _p(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Jg(i){const t=new WeakMap;function e(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,h),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,u){const h=l.array,d=l.updateRanges;if(i.bindBuffer(u,a),d.length===0)i.bufferSubData(u,0,h);else{d.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<d.length;m++){const x=d[f],S=d[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,d[f]=S)}d.length=f+1;for(let m=0,x=d.length;m<x;m++){const S=d[m];i.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n_=`#ifdef USE_AOMAP
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
#endif`,i_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r_=`#ifdef USE_BATCHING
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
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l_=`#ifdef USE_IRIDESCENCE
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
#endif`,u_=`#ifdef USE_BUMPMAP
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,M_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y_=`vec3 transformedNormal = objectNormal;
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
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O_=`#ifdef USE_GRADIENTMAP
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
}`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
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
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y_=`PhysicalMaterial material;
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
#endif`,Z_=`struct PhysicalMaterial {
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
}`,J_=`
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sv=`#if defined( USE_POINTS_UV )
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
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vv=`#ifdef USE_NORMALMAP
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
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uv=`float getShadowMask() {
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
}`,Nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$v=`uniform sampler2D t2D;
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,rx=`#define DISTANCE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,ux=`uniform vec3 diffuse;
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
}`,hx=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,px=`#define MATCAP
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
}`,mx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,vx=`#define PHONG
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
}`,xx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,Sx=`#define TOON
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
}`,Ex=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,bx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:$g,alphahash_pars_fragment:Kg,alphamap_fragment:jg,alphamap_pars_fragment:Qg,alphatest_fragment:t_,alphatest_pars_fragment:e_,aomap_fragment:n_,aomap_pars_fragment:i_,batching_pars_vertex:r_,batching_vertex:s_,begin_vertex:o_,beginnormal_vertex:a_,bsdfs:c_,iridescence_fragment:l_,bumpmap_pars_fragment:u_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:p_,color_fragment:m_,color_pars_fragment:g_,color_pars_vertex:__,color_vertex:v_,common:x_,cube_uv_reflection_fragment:M_,defaultnormal_vertex:y_,displacementmap_pars_vertex:S_,displacementmap_vertex:E_,emissivemap_fragment:w_,emissivemap_pars_fragment:T_,colorspace_fragment:b_,colorspace_pars_fragment:A_,envmap_fragment:R_,envmap_common_pars_fragment:C_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:G_,envmap_vertex:D_,fog_vertex:I_,fog_pars_vertex:U_,fog_fragment:N_,fog_pars_fragment:F_,gradientmap_pars_fragment:O_,lightmap_pars_fragment:B_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:k_,lights_pars_begin:H_,lights_toon_fragment:V_,lights_toon_pars_fragment:W_,lights_phong_fragment:X_,lights_phong_pars_fragment:q_,lights_physical_fragment:Y_,lights_physical_pars_fragment:Z_,lights_fragment_begin:J_,lights_fragment_maps:$_,lights_fragment_end:K_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:Q_,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:ev,map_fragment:nv,map_pars_fragment:iv,map_particle_fragment:rv,map_particle_pars_fragment:sv,metalnessmap_fragment:ov,metalnessmap_pars_fragment:av,morphinstance_vertex:cv,morphcolor_vertex:lv,morphnormal_vertex:uv,morphtarget_pars_vertex:hv,morphtarget_vertex:fv,normal_fragment_begin:dv,normal_fragment_maps:pv,normal_pars_fragment:mv,normal_pars_vertex:gv,normal_vertex:_v,normalmap_pars_fragment:vv,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:Mv,clearcoat_pars_fragment:yv,iridescence_pars_fragment:Sv,opaque_fragment:Ev,packing:wv,premultiplied_alpha_fragment:Tv,project_vertex:bv,dithering_fragment:Av,dithering_pars_fragment:Rv,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Pv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Iv,shadowmask_pars_fragment:Uv,skinbase_vertex:Nv,skinning_pars_vertex:Fv,skinning_vertex:Ov,skinnormal_vertex:Bv,specularmap_fragment:zv,specularmap_pars_fragment:kv,tonemapping_fragment:Hv,tonemapping_pars_fragment:Gv,transmission_fragment:Vv,transmission_pars_fragment:Wv,uv_pars_fragment:Xv,uv_pars_vertex:qv,uv_vertex:Yv,worldpos_vertex:Zv,background_vert:Jv,background_frag:$v,backgroundCube_vert:Kv,backgroundCube_frag:jv,cube_vert:Qv,cube_frag:tx,depth_vert:ex,depth_frag:nx,distanceRGBA_vert:ix,distanceRGBA_frag:rx,equirect_vert:sx,equirect_frag:ox,linedashed_vert:ax,linedashed_frag:cx,meshbasic_vert:lx,meshbasic_frag:ux,meshlambert_vert:hx,meshlambert_frag:fx,meshmatcap_vert:dx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:_x,meshphong_frag:vx,meshphysical_vert:xx,meshphysical_frag:Mx,meshtoon_vert:yx,meshtoon_frag:Sx,points_vert:Ex,points_frag:wx,shadow_vert:Tx,shadow_frag:bx,sprite_vert:Ax,sprite_frag:Rx},Ct={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ai={basic:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Sn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Sn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Sn([Ct.points,Ct.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Sn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Sn([Ct.common,Ct.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Sn([Ct.sprite,Ct.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Sn([Ct.common,Ct.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Sn([Ct.lights,Ct.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ai.physical={uniforms:Sn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const oc={r:0,b:0,g:0},mr=new fi,Cx=new be;function Px(i,t,e,n,r,s,o){const a=new jt(0);let l=s===!0?0:1,u,h,d=null,f=0,m=null;function x(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function S(A){let E=!1;const F=x(A);F===null?p(a,l):F&&F.isColor&&(p(F,1),E=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(A,E){const F=x(E);F&&(F.isCubeTexture||F.mapping===Mc)?(h===void 0&&(h=new At(new pe(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:As(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),mr.copy(E.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),h.material.uniforms.envMap.value=F,h.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(mr)),h.material.toneMapped=Me.getTransfer(F.colorSpace)!==Pe,(d!==F||f!==F.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=F,f=F.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(u===void 0&&(u=new At(new rn(2,2),new wn({name:"BackgroundMaterial",uniforms:As(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=F,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Me.getTransfer(F.colorSpace)!==Pe,F.matrixAutoUpdate===!0&&F.updateMatrix(),u.material.uniforms.uvTransform.value.copy(F.matrix),(d!==F||f!==F.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=F,f=F.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function p(A,E){A.getRGB(oc,ep(i)),n.buffers.color.setClear(oc.r,oc.g,oc.b,E,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:S,addToRenderList:_,dispose:R}}function Lx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(M,I,V,X,$){let tt=!1;const j=d(X,V,I);s!==j&&(s=j,u(s.object)),tt=m(M,X,V,$),tt&&x(M,X,V,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,E(M,I,V,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,I,V){const X=V.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let tt=$[I.id];tt===void 0&&(tt={},$[I.id]=tt);let j=tt[X];return j===void 0&&(j=f(l()),tt[X]=j),j}function f(M){const I=[],V=[],X=[];for(let $=0;$<e;$++)I[$]=0,V[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:X,object:M,attributes:{},index:null}}function m(M,I,V,X){const $=s.attributes,tt=I.attributes;let j=0;const ht=V.getAttributes();for(const Z in ht)if(ht[Z].location>=0){const Lt=$[Z];let Ot=tt[Z];if(Ot===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Ot=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Ot=M.instanceColor)),Lt===void 0||Lt.attribute!==Ot||Ot&&Lt.data!==Ot.data)return!0;j++}return s.attributesNum!==j||s.index!==X}function x(M,I,V,X){const $={},tt=I.attributes;let j=0;const ht=V.getAttributes();for(const Z in ht)if(ht[Z].location>=0){let Lt=tt[Z];Lt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Lt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Lt=M.instanceColor));const Ot={};Ot.attribute=Lt,Lt&&Lt.data&&(Ot.data=Lt.data),$[Z]=Ot,j++}s.attributes=$,s.attributesNum=j,s.index=X}function S(){const M=s.newAttributes;for(let I=0,V=M.length;I<V;I++)M[I]=0}function _(M){p(M,0)}function p(M,I){const V=s.newAttributes,X=s.enabledAttributes,$=s.attributeDivisors;V[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),$[M]!==I&&(i.vertexAttribDivisor(M,I),$[M]=I)}function R(){const M=s.newAttributes,I=s.enabledAttributes;for(let V=0,X=I.length;V<X;V++)I[V]!==M[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function A(M,I,V,X,$,tt,j){j===!0?i.vertexAttribIPointer(M,I,V,$,tt):i.vertexAttribPointer(M,I,V,X,$,tt)}function E(M,I,V,X){S();const $=X.attributes,tt=V.getAttributes(),j=I.defaultAttributeValues;for(const ht in tt){const Z=tt[ht];if(Z.location>=0){let mt=$[ht];if(mt===void 0&&(ht==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),ht==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),mt!==void 0){const Lt=mt.normalized,Ot=mt.itemSize,te=t.get(mt);if(te===void 0)continue;const Qt=te.buffer,de=te.type,ae=te.bytesPerElement,it=de===i.INT||de===i.UNSIGNED_INT||mt.gpuType===Bu;if(mt.isInterleavedBufferAttribute){const ut=mt.data,wt=ut.stride,Dt=mt.offset;if(ut.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Z.locationSize;Nt++)p(Z.location+Nt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Nt=0;Nt<Z.locationSize;Nt++)_(Z.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Nt=0;Nt<Z.locationSize;Nt++)A(Z.location+Nt,Ot/Z.locationSize,de,Lt,wt*ae,(Dt+Ot/Z.locationSize*Nt)*ae,it)}else{if(mt.isInstancedBufferAttribute){for(let ut=0;ut<Z.locationSize;ut++)p(Z.location+ut,mt.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ut=0;ut<Z.locationSize;ut++)_(Z.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let ut=0;ut<Z.locationSize;ut++)A(Z.location+ut,Ot/Z.locationSize,de,Lt,Ot*ae,Ot/Z.locationSize*ut*ae,it)}}else if(j!==void 0){const Lt=j[ht];if(Lt!==void 0)switch(Lt.length){case 2:i.vertexAttrib2fv(Z.location,Lt);break;case 3:i.vertexAttrib3fv(Z.location,Lt);break;case 4:i.vertexAttrib4fv(Z.location,Lt);break;default:i.vertexAttrib1fv(Z.location,Lt)}}}}R()}function F(){L();for(const M in n){const I=n[M];for(const V in I){const X=I[V];for(const $ in X)h(X[$].object),delete X[$];delete I[V]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const V in I){const X=I[V];for(const $ in X)h(X[$].object),delete X[$];delete I[V]}delete n[M.id]}function D(M){for(const I in n){const V=n[I];if(V[M.id]===void 0)continue;const X=V[M.id];for(const $ in X)h(X[$].object),delete X[$];delete V[M.id]}}function L(){v(),o=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:v,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:_,disableUnusedAttributes:R}}function Dx(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function a(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x];e.update(m,n,1)}function l(u,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<u.length;x++)o(u[x],h[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let x=0;for(let S=0;S<d;S++)x+=h[S]*f[S];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ix(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const L=D===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==hi&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==li&&!L)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=x>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:F,maxSamples:P}}function Ux(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new vr,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,S=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||x===null||x.length===0||s&&!_)s?h(null):u();else{const R=s?0:n,A=R*4;let E=p.clippingState||null;l.value=E,E=h(x,f,A,m);for(let F=0;F!==A;++F)E[F]=e[F];p.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,x){const S=d!==null?d.length:0;let _=null;if(S!==0){if(_=l.value,x!==!0||_===null){const p=m+S*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<p)&&(_=new Float32Array(p));for(let A=0,E=m;A!==S;++A,E+=4)o.copy(d[A]).applyMatrix4(R,a),o.normal.toArray(_,E),_[E+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,_}}function Nx(i){let t=new WeakMap;function e(o,a){return a===Ql?o.mapping=ws:a===tu&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ql||a===tu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Qm(l.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const xs=4,ud=[.125,.215,.35,.446,.526,.582],wr=20,Ol=new eh,hd=new jt;let Bl=null,zl=0,kl=0,Hl=!1;const xr=(1+Math.sqrt(5))/2,hs=1/xr,fd=[new b(-xr,hs,0),new b(xr,hs,0),new b(-hs,0,xr),new b(hs,0,xr),new b(0,xr,-hs),new b(0,xr,hs),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Fx=new b;class dd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Fx}=s;Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,zl,kl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,ac(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:ko,format:jn,colorSpace:bs,depthBuffer:!1},r=pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ox(s)),this._blurMaterial=Bx(s,t,e)}return r}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Ol)}_sceneToCubeUV(t,e,n,r,s){const l=new Gn(90,1,e,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(hd),d.toneMapping=Ji,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const S=new oi({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new At(new pe,S);let p=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,p=!0):(S.color.copy(hd),p=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):E===1?(l.up.set(0,0,u[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const F=this._cubeSize;ac(r,E*F,A>2?F:0,F,F),d.setRenderTarget(r),p&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ws||t.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ac(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ol)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fd[(r-s-1)%fd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new At(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),S=s/x,_=isFinite(s)?1+Math.floor(h*S):wr;_>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${wr}`);const p=[];let R=0;for(let D=0;D<wr;++D){const L=D/S,v=Math.exp(-L*L/2);p.push(v),D===0?R+=v:D<_&&(R+=2*v)}for(let D=0;D<p.length;D++)p[D]=p[D]/R;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=x,f.mipInt.value=A-n;const E=this._sizeLods[r],F=3*E*(r>A-xs?r-A+xs:0),P=4*(this._cubeSize-E);ac(e,F,P,3*E,2*E),l.setRenderTarget(e),l.render(d,Ol)}}function Ox(i){const t=[],e=[],n=[];let r=i;const s=i-xs+1+ud.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-xs?l=ud[o-i+xs-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,S=3,_=2,p=1,R=new Float32Array(S*x*m),A=new Float32Array(_*x*m),E=new Float32Array(p*x*m);for(let P=0;P<m;P++){const D=P%3*2/3-1,L=P>2?0:-1,v=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];R.set(v,S*x*P),A.set(f,_*x*P);const M=[P,P,P,P,P,P];E.set(M,p*x*P)}const F=new we;F.setAttribute("position",new Wn(R,S)),F.setAttribute("uv",new Wn(A,_)),F.setAttribute("faceIndex",new Wn(E,p)),t.push(F),r>xs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pd(i,t,e){const n=new $i(i,t,e);return n.texture.mapping=Mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ac(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Bx(i,t,e){const n=new Float32Array(wr),r=new b(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function md(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function gd(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function zx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ql||l===tu,h=l===ws||l===Ts;if(u||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new dd(i)),d=u?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new dd(i)),d=u?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Fo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hx(i,t,e,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function u(d){const f=[],m=d.index,x=d.attributes.position;let S=0;if(m!==null){const R=m.array;S=m.version;for(let A=0,E=R.length;A<E;A+=3){const F=R[A+0],P=R[A+1],D=R[A+2];f.push(F,P,P,D,D,F)}}else if(x!==void 0){const R=x.array;S=x.version;for(let A=0,E=R.length/3-1;A<E;A+=3){const F=A+0,P=A+1,D=A+2;f.push(F,P,P,D,D,F)}}else return;const _=new($d(f)?tp:Qd)(f,1);_.version=S;const p=s.get(d);p&&t.remove(p),s.set(d,_)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Gx(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*o),e.update(m,n,1)}function u(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,s,f*o,x),e.update(m,n,x))}function h(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,x);let _=0;for(let p=0;p<x;p++)_+=m[p];e.update(_,n,1)}function d(f,m,x,S){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)u(f[p]/o,m[p],S[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,S,0,x);let p=0;for(let R=0;R<x;R++)p+=m[R]*S[R];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Wx(i,t,e){const n=new WeakMap,r=new Le;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let A=0;m===!0&&(A=1),x===!0&&(A=2),S===!0&&(A=3);let E=a.attributes.position.count*A,F=1;E>t.maxTextureSize&&(F=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const P=new Float32Array(E*F*4*d),D=new Kd(P,E,F,d);D.type=li,D.needsUpdate=!0;const L=A*4;for(let M=0;M<d;M++){const I=_[M],V=p[M],X=R[M],$=E*F*4*M;for(let tt=0;tt<I.count;tt++){const j=tt*L;m===!0&&(r.fromBufferAttribute(I,tt),P[$+j+0]=r.x,P[$+j+1]=r.y,P[$+j+2]=r.z,P[$+j+3]=0),x===!0&&(r.fromBufferAttribute(V,tt),P[$+j+4]=r.x,P[$+j+5]=r.y,P[$+j+6]=r.z,P[$+j+7]=0),S===!0&&(r.fromBufferAttribute(X,tt),P[$+j+8]=r.x,P[$+j+9]=r.y,P[$+j+10]=r.z,P[$+j+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:D,size:new dt(E,F)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let S=0;S<u.length;S++)m+=u[S];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Xx(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const vp=new gn,_d=new sp(1,1),xp=new Kd,Mp=new Fm,yp=new ip,vd=[],xd=[],Md=new Float32Array(16),yd=new Float32Array(9),Sd=new Float32Array(4);function Ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=vd[r];if(s===void 0&&(s=new Float32Array(r),vd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sc(i,t){let e=xd[t];e===void 0&&(e=new Int32Array(t),xd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function Zx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function Jx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function $x(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),tn(e,n)}}function Kx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;yd.set(n),i.uniformMatrix3fv(this.addr,!1,yd),tn(e,n)}}function jx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),tn(e,n)}}function Qx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function eM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function nM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function iM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function sM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function oM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function aM(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_d.compareFunction=Jd,s=_d):s=vp,e.setTexture2D(t||s,r)}function cM(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Mp,r)}function lM(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||yp,r)}function uM(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||xp,r)}function hM(i){switch(i){case 5126:return qx;case 35664:return Yx;case 35665:return Zx;case 35666:return Jx;case 35674:return $x;case 35675:return Kx;case 35676:return jx;case 5124:case 35670:return Qx;case 35667:case 35671:return tM;case 35668:case 35672:return eM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(i,t){i.uniform1fv(this.addr,t)}function dM(i,t){const e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function pM(i,t){const e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function mM(i,t){const e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function gM(i,t){const e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _M(i,t){const e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vM(i,t){const e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xM(i,t){i.uniform1iv(this.addr,t)}function MM(i,t){i.uniform2iv(this.addr,t)}function yM(i,t){i.uniform3iv(this.addr,t)}function SM(i,t){i.uniform4iv(this.addr,t)}function EM(i,t){i.uniform1uiv(this.addr,t)}function wM(i,t){i.uniform2uiv(this.addr,t)}function TM(i,t){i.uniform3uiv(this.addr,t)}function bM(i,t){i.uniform4uiv(this.addr,t)}function AM(i,t,e){const n=this.cache,r=t.length,s=Sc(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vp,s[o])}function RM(i,t,e){const n=this.cache,r=t.length,s=Sc(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Mp,s[o])}function CM(i,t,e){const n=this.cache,r=t.length,s=Sc(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||yp,s[o])}function PM(i,t,e){const n=this.cache,r=t.length,s=Sc(e,r);Qe(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||xp,s[o])}function LM(i){switch(i){case 5126:return fM;case 35664:return dM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return MM;case 35668:case 35672:return yM;case 35669:case 35673:return SM;case 5125:return EM;case 36294:return wM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hM(e.type)}}class IM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LM(e.type)}}class UM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function Ed(i,t){i.seq.push(t),i.map[t.id]=t}function NM(i,t,e){const n=i.name,r=n.length;for(Gl.lastIndex=0;;){const s=Gl.exec(n),o=Gl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ed(e,u===void 0?new DM(a,i,t):new IM(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new UM(a),Ed(e,d)),e=d}}}class pc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);NM(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function wd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const FM=37297;let OM=0;function BM(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Td=new le;function zM(i){Me._getMatrix(Td,Me.workingColorSpace,i);const t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case mc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+BM(i.getShaderSource(t),a)}else return s}function kM(i,t){const e=zM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function HM(i,t){let e;switch(t){case K0:e="Linear";break;case j0:e="Reinhard";break;case Q0:e="Cineon";break;case Bd:e="ACESFilmic";break;case em:e="AgX";break;case nm:e="Neutral";break;case tm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cc=new b;function GM(){Me.getLuminanceCoefficients(cc);const i=cc.x.toFixed(4),t=cc.y.toFixed(4),e=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function WM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function XM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bo(i){return i!==""}function Ad(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(i){return i.replace(qM,ZM)}const YM=new Map;function ZM(i,t){let e=ue[t];if(e===void 0){const n=YM.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fu(e)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(i){return i.replace(JM,$M)}function $M(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function KM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function jM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ts:t="ENVMAP_TYPE_CUBE";break;case Mc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QM(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ts&&(t="ENVMAP_MODE_REFRACTION"),t}function t1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Od:t="ENVMAP_BLENDING_MULTIPLY";break;case J0:t="ENVMAP_BLENDING_MIX";break;case $0:t="ENVMAP_BLENDING_ADD";break}return t}function e1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n1(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=KM(e),u=jM(e),h=QM(e),d=t1(e),f=e1(e),m=VM(e),x=WM(s),S=r.createProgram();let _,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(_=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?ue.tonemapping_pars_fragment:"",e.toneMapping!==Ji?HM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,kM("linearToOutputTexel",e.outputColorSpace),GM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=Fu(o),o=Ad(o,e),o=Rd(o,e),a=Fu(a),a=Ad(a,e),a=Rd(a,e),o=Cd(o),a=Cd(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=R+_+o,E=R+p+a,F=wd(r,r.VERTEX_SHADER,A),P=wd(r,r.FRAGMENT_SHADER,E);r.attachShader(S,F),r.attachShader(S,P),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function D(I){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",X=r.getShaderInfoLog(F)||"",$=r.getShaderInfoLog(P)||"",tt=V.trim(),j=X.trim(),ht=$.trim();let Z=!0,mt=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,F,P);else{const Lt=bd(r,F,"vertex"),Ot=bd(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+tt+`
`+Lt+`
`+Ot)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(j===""||ht==="")&&(mt=!1);mt&&(I.diagnostics={runnable:Z,programLog:tt,vertexShader:{log:j,prefix:_},fragmentShader:{log:ht,prefix:p}})}r.deleteShader(F),r.deleteShader(P),L=new pc(r,S),v=XM(r,S)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,FM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OM++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=P,this}let i1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new s1(t),e.set(t,n)),n}}class s1{constructor(t){this.id=i1++,this.code=t,this.usedTimes=0}}function o1(i,t,e,n,r,s,o){const a=new Yu,l=new r1,u=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(v){return u.add(v),v===0?"uv":`uv${v}`}function _(v,M,I,V,X){const $=V.fog,tt=X.geometry,j=v.isMeshStandardMaterial?V.environment:null,ht=(v.isMeshStandardMaterial?e:t).get(v.envMap||j),Z=ht&&ht.mapping===Mc?ht.image.height:null,mt=x[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const Lt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0;let te=0;tt.morphAttributes.position!==void 0&&(te=1),tt.morphAttributes.normal!==void 0&&(te=2),tt.morphAttributes.color!==void 0&&(te=3);let Qt,de,ae,it;if(mt){const he=ai[mt];Qt=he.vertexShader,de=he.fragmentShader}else Qt=v.vertexShader,de=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),it=l.getFragmentShaderID(v);const ut=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Dt=X.isInstancedMesh===!0,Nt=X.isBatchedMesh===!0,re=!!v.map,ye=!!v.matcap,N=!!ht,at=!!v.aoMap,rt=!!v.lightMap,et=!!v.bumpMap,K=!!v.normalMap,St=!!v.displacementMap,ft=!!v.emissiveMap,yt=!!v.metalnessMap,ee=!!v.roughnessMap,Jt=v.anisotropy>0,C=v.clearcoat>0,y=v.dispersion>0,G=v.iridescence>0,J=v.sheen>0,ct=v.transmission>0,Q=Jt&&!!v.anisotropyMap,kt=C&&!!v.clearcoatMap,xt=C&&!!v.clearcoatNormalMap,zt=C&&!!v.clearcoatRoughnessMap,Ht=G&&!!v.iridescenceMap,gt=G&&!!v.iridescenceThicknessMap,Pt=J&&!!v.sheenColorMap,Mt=J&&!!v.sheenRoughnessMap,Ut=!!v.specularMap,Tt=!!v.specularColorMap,$t=!!v.specularIntensityMap,B=ct&&!!v.transmissionMap,lt=ct&&!!v.thicknessMap,vt=!!v.gradientMap,It=!!v.alphaMap,pt=v.alphaTest>0,ot=!!v.alphaHash,Ft=!!v.extensions;let Kt=Ji;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Kt=i.toneMapping);const se={shaderID:mt,shaderType:v.type,shaderName:v.name,vertexShader:Qt,fragmentShader:de,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:it,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&X._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&X.instanceColor!==null,instancingMorph:Dt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:bs,alphaToCoverage:!!v.alphaToCoverage,map:re,matcap:ye,envMap:N,envMapMode:N&&ht.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:rt,bumpMap:et,normalMap:K,displacementMap:f&&St,emissiveMap:ft,normalMapObjectSpace:K&&v.normalMapType===sm,normalMapTangentSpace:K&&v.normalMapType===Zd,metalnessMap:yt,roughnessMap:ee,anisotropy:Jt,anisotropyMap:Q,clearcoat:C,clearcoatMap:kt,clearcoatNormalMap:xt,clearcoatRoughnessMap:zt,dispersion:y,iridescence:G,iridescenceMap:Ht,iridescenceThicknessMap:gt,sheen:J,sheenColorMap:Pt,sheenRoughnessMap:Mt,specularMap:Ut,specularColorMap:Tt,specularIntensityMap:$t,transmission:ct,transmissionMap:B,thicknessMap:lt,gradientMap:vt,opaque:v.transparent===!1&&v.blending===Ms&&v.alphaToCoverage===!1,alphaMap:It,alphaTest:pt,alphaHash:ot,combine:v.combine,mapUv:re&&S(v.map.channel),aoMapUv:at&&S(v.aoMap.channel),lightMapUv:rt&&S(v.lightMap.channel),bumpMapUv:et&&S(v.bumpMap.channel),normalMapUv:K&&S(v.normalMap.channel),displacementMapUv:St&&S(v.displacementMap.channel),emissiveMapUv:ft&&S(v.emissiveMap.channel),metalnessMapUv:yt&&S(v.metalnessMap.channel),roughnessMapUv:ee&&S(v.roughnessMap.channel),anisotropyMapUv:Q&&S(v.anisotropyMap.channel),clearcoatMapUv:kt&&S(v.clearcoatMap.channel),clearcoatNormalMapUv:xt&&S(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&S(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&S(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&S(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&S(v.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&S(v.sheenRoughnessMap.channel),specularMapUv:Ut&&S(v.specularMap.channel),specularColorMapUv:Tt&&S(v.specularColorMap.channel),specularIntensityMapUv:$t&&S(v.specularIntensityMap.channel),transmissionMapUv:B&&S(v.transmissionMap.channel),thicknessMapUv:lt&&S(v.thicknessMap.channel),alphaMapUv:It&&S(v.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(K||Jt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!tt.attributes.uv&&(re||It),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:X.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:re&&v.map.isVideoTexture===!0&&Me.getTransfer(v.map.colorSpace)===Pe,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&Me.getTransfer(v.emissiveMap.colorSpace)===Pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ft&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&v.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=u.has(1),se.vertexUv2s=u.has(2),se.vertexUv3s=u.has(3),u.clear(),se}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)M.push(I),M.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(R(M,v),A(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function R(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function A(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function E(v){const M=x[v.type];let I;if(M){const V=ai[M];I=Jm.clone(V.uniforms)}else I=v.uniforms;return I}function F(v,M){let I;for(let V=0,X=h.length;V<X;V++){const $=h[V];if($.cacheKey===M){I=$,++I.usedTimes;break}}return I===void 0&&(I=new n1(i,M,v,s),h.push(I)),I}function P(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function D(v){l.remove(v)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:F,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:L}}function a1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function c1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ld(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dd(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,f,m,x,S,_){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:S,group:_},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=S,p.group=_),t++,p}function a(d,f,m,x,S,_){const p=o(d,f,m,x,S,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(d,f,m,x,S,_){const p=o(d,f,m,x,S,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function u(d,f){e.length>1&&e.sort(d||c1),n.length>1&&n.sort(f||Ld),r.length>1&&r.sort(f||Ld)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function l1(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Dd,i.set(n,[o])):r>=s.length?(o=new Dd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function u1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new jt};break;case"SpotLight":e={position:new b,direction:new b,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function h1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let f1=0;function d1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p1(i){const t=new u1,e=h1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new b);const r=new b,s=new be,o=new be;function a(u){let h=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,x=0,S=0,_=0,p=0,R=0,A=0,E=0,F=0,P=0,D=0;u.sort(d1);for(let v=0,M=u.length;v<M;v++){const I=u[v],V=I.color,X=I.intensity,$=I.distance,tt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*X,d+=V.g*X,f+=V.b*X;else if(I.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(I.sh.coefficients[j],X);D++}else if(I.isDirectionalLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ht=I.shadow,Z=e.get(I);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=I.shadow.matrix,R++}n.directional[m]=j,m++}else if(I.isSpotLight){const j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(V).multiplyScalar(X),j.distance=$,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,n.spot[S]=j;const ht=I.shadow;if(I.map&&(n.spotLightMap[F]=I.map,F++,ht.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[S]=ht.matrix,I.castShadow){const Z=e.get(I);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=tt,E++}S++}else if(I.isRectAreaLight){const j=t.get(I);j.color.copy(V).multiplyScalar(X),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),n.rectArea[_]=j,_++}else if(I.isPointLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const ht=I.shadow,Z=e.get(I);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,Z.shadowCameraNear=ht.camera.near,Z.shadowCameraFar=ht.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=tt,n.pointShadowMatrix[x]=I.shadow.matrix,A++}n.point[x]=j,x++}else if(I.isHemisphereLight){const j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(X),j.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[p]=j,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==x||L.spotLength!==S||L.rectAreaLength!==_||L.hemiLength!==p||L.numDirectionalShadows!==R||L.numPointShadows!==A||L.numSpotShadows!==E||L.numSpotMaps!==F||L.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=_,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+F-P,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,L.directionalLength=m,L.pointLength=x,L.spotLength=S,L.rectAreaLength=_,L.hemiLength=p,L.numDirectionalShadows=R,L.numPointShadows=A,L.numSpotShadows=E,L.numSpotMaps=F,L.numLightProbes=D,n.version=f1++)}function l(u,h){let d=0,f=0,m=0,x=0,S=0;const _=h.matrixWorldInverse;for(let p=0,R=u.length;p<R;p++){const A=u[p];if(A.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),d++}else if(A.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),m++}else if(A.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),o.identity(),s.copy(A.matrixWorld),s.premultiply(_),o.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),f++}else if(A.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(_),S++}}}return{setup:a,setupView:l,state:n}}function Id(i){const t=new p1(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function m1(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Id(i),t.set(r,[a])):s>=o.length?(a=new Id(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
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
}`;function v1(i,t,e){let n=new Ju;const r=new dt,s=new dt,o=new Le,a=new mp({depthPacking:Yd}),l=new Hg,u={},h=e.maxTextureSize,d={[Ai]:Tn,[Tn]:Ai,[mn]:mn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:g1,fragmentShader:_1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new we;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new At(x,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(P,D,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const v=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Zi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=p!==Ti&&this.type===Ti,$=p===Ti&&this.type!==Ti;for(let tt=0,j=P.length;tt<j;tt++){const ht=P[tt],Z=ht.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const mt=Z.getFrameExtents();if(r.multiply(mt),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/mt.x),r.x=s.x*mt.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/mt.y),r.y=s.y*mt.y,Z.mapSize.y=s.y)),Z.map===null||X===!0||$===!0){const Ot=this.type!==Ti?{minFilter:zn,magFilter:zn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new $i(r.x,r.y,Ot),Z.map.texture.name=ht.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const Lt=Z.getViewportCount();for(let Ot=0;Ot<Lt;Ot++){const te=Z.getViewport(Ot);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),V.viewport(o),Z.updateMatrices(ht,Ot),n=Z.getFrustum(),E(D,L,Z.camera,ht,this.type)}Z.isPointLightShadow!==!0&&this.type===Ti&&R(Z,L),Z.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(v,M,I)};function R(P,D){const L=t.update(S);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $i(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,L,f,S,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,L,m,S,null)}function A(P,D,L,v){let M=null;const I=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const V=M.uuid,X=D.uuid;let $=u[V];$===void 0&&($={},u[V]=$);let tt=$[X];tt===void 0&&(tt=M.clone(),$[X]=tt,D.addEventListener("dispose",F)),M=tt}if(M.visible=D.visible,M.wireframe=D.wireframe,v===Ti?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:d[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=L}return M}function E(P,D,L,v,M){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Ti)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const X=t.update(P),$=P.material;if(Array.isArray($)){const tt=X.groups;for(let j=0,ht=tt.length;j<ht;j++){const Z=tt[j],mt=$[Z.materialIndex];if(mt&&mt.visible){const Lt=A(P,mt,v,M);P.onBeforeShadow(i,P,D,L,X,Lt,Z),i.renderBufferDirect(L,null,X,Lt,P,Z),P.onAfterShadow(i,P,D,L,X,Lt,Z)}}}else if($.visible){const tt=A(P,$,v,M);P.onBeforeShadow(i,P,D,L,X,tt,null),i.renderBufferDirect(L,null,X,tt,P,null),P.onAfterShadow(i,P,D,L,X,tt,null)}}const V=P.children;for(let X=0,$=V.length;X<$;X++)E(V[X],D,L,v,M)}function F(P){P.target.removeEventListener("dispose",F);for(const L in u){const v=u[L],M=P.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const x1={[ql]:Yl,[Zl]:Kl,[Jl]:jl,[Es]:$l,[Yl]:ql,[Kl]:Zl,[jl]:Jl,[$l]:Es};function M1(i,t){function e(){let B=!1;const lt=new Le;let vt=null;const It=new Le(0,0,0,0);return{setMask:function(pt){vt!==pt&&!B&&(i.colorMask(pt,pt,pt,pt),vt=pt)},setLocked:function(pt){B=pt},setClear:function(pt,ot,Ft,Kt,se){se===!0&&(pt*=Kt,ot*=Kt,Ft*=Kt),lt.set(pt,ot,Ft,Kt),It.equals(lt)===!1&&(i.clearColor(pt,ot,Ft,Kt),It.copy(lt))},reset:function(){B=!1,vt=null,It.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,vt=null,It=null,pt=null;return{setReversed:function(ot){if(lt!==ot){const Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),lt=ot;const Kt=pt;pt=null,this.setClear(Kt)}},getReversed:function(){return lt},setTest:function(ot){ot?ut(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ot){vt!==ot&&!B&&(i.depthMask(ot),vt=ot)},setFunc:function(ot){if(lt&&(ot=x1[ot]),It!==ot){switch(ot){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case Zl:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Jl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=ot}},setLocked:function(ot){B=ot},setClear:function(ot){pt!==ot&&(lt&&(ot=1-ot),i.clearDepth(ot),pt=ot)},reset:function(){B=!1,vt=null,It=null,pt=null,lt=!1}}}function r(){let B=!1,lt=null,vt=null,It=null,pt=null,ot=null,Ft=null,Kt=null,se=null;return{setTest:function(he){B||(he?ut(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(he){lt!==he&&!B&&(i.stencilMask(he),lt=he)},setFunc:function(he,bn,_n){(vt!==he||It!==bn||pt!==_n)&&(i.stencilFunc(he,bn,_n),vt=he,It=bn,pt=_n)},setOp:function(he,bn,_n){(ot!==he||Ft!==bn||Kt!==_n)&&(i.stencilOp(he,bn,_n),ot=he,Ft=bn,Kt=_n)},setLocked:function(he){B=he},setClear:function(he){se!==he&&(i.clearStencil(he),se=he)},reset:function(){B=!1,lt=null,vt=null,It=null,pt=null,ot=null,Ft=null,Kt=null,se=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,m=[],x=null,S=!1,_=null,p=null,R=null,A=null,E=null,F=null,P=null,D=new jt(0,0,0),L=0,v=!1,M=null,I=null,V=null,X=null,$=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ht=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=ht>=1):Z.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=ht>=2);let mt=null,Lt={};const Ot=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Qt=new Le().fromArray(Ot),de=new Le().fromArray(te);function ae(B,lt,vt,It){const pt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(B,ot),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<vt;Ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ot}const it={};it[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(Es),et(!1),K(vf),ut(i.CULL_FACE),at(Zi);function ut(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function wt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Dt(B,lt){return d[B]!==lt?(i.bindFramebuffer(B,lt),d[B]=lt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Nt(B,lt){let vt=m,It=!1;if(B){vt=f.get(lt),vt===void 0&&(vt=[],f.set(lt,vt));const pt=B.textures;if(vt.length!==pt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ft=pt.length;ot<Ft;ot++)vt[ot]=i.COLOR_ATTACHMENT0+ot;vt.length=pt.length,It=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,It=!0);It&&i.drawBuffers(vt)}function re(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const ye={[Mr]:i.FUNC_ADD,[D0]:i.FUNC_SUBTRACT,[I0]:i.FUNC_REVERSE_SUBTRACT};ye[U0]=i.MIN,ye[N0]=i.MAX;const N={[F0]:i.ZERO,[O0]:i.ONE,[B0]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[W0]:i.SRC_ALPHA_SATURATE,[G0]:i.DST_COLOR,[k0]:i.DST_ALPHA,[z0]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[V0]:i.ONE_MINUS_DST_COLOR,[H0]:i.ONE_MINUS_DST_ALPHA,[X0]:i.CONSTANT_COLOR,[q0]:i.ONE_MINUS_CONSTANT_COLOR,[Y0]:i.CONSTANT_ALPHA,[Z0]:i.ONE_MINUS_CONSTANT_ALPHA};function at(B,lt,vt,It,pt,ot,Ft,Kt,se,he){if(B===Zi){S===!0&&(wt(i.BLEND),S=!1);return}if(S===!1&&(ut(i.BLEND),S=!0),B!==L0){if(B!==_||he!==v){if((p!==Mr||E!==Mr)&&(i.blendEquation(i.FUNC_ADD),p=Mr,E=Mr),he)switch(B){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.ONE,i.ONE);break;case xf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,A=null,F=null,P=null,D.set(0,0,0),L=0,_=B,v=he}return}pt=pt||lt,ot=ot||vt,Ft=Ft||It,(lt!==p||pt!==E)&&(i.blendEquationSeparate(ye[lt],ye[pt]),p=lt,E=pt),(vt!==R||It!==A||ot!==F||Ft!==P)&&(i.blendFuncSeparate(N[vt],N[It],N[ot],N[Ft]),R=vt,A=It,F=ot,P=Ft),(Kt.equals(D)===!1||se!==L)&&(i.blendColor(Kt.r,Kt.g,Kt.b,se),D.copy(Kt),L=se),_=B,v=!1}function rt(B,lt){B.side===mn?wt(i.CULL_FACE):ut(i.CULL_FACE);let vt=B.side===Tn;lt&&(vt=!vt),et(vt),B.blending===Ms&&B.transparent===!1?at(Zi):at(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const It=B.stencilWrite;a.setTest(It),It&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ft(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function K(B){B!==C0?(ut(i.CULL_FACE),B!==I&&(B===vf?i.cullFace(i.BACK):B===P0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),I=B}function St(B){B!==V&&(j&&i.lineWidth(B),V=B)}function ft(B,lt,vt){B?(ut(i.POLYGON_OFFSET_FILL),(X!==lt||$!==vt)&&(i.polygonOffset(lt,vt),X=lt,$=vt)):wt(i.POLYGON_OFFSET_FILL)}function yt(B){B?ut(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function ee(B){B===void 0&&(B=i.TEXTURE0+tt-1),mt!==B&&(i.activeTexture(B),mt=B)}function Jt(B,lt,vt){vt===void 0&&(mt===null?vt=i.TEXTURE0+tt-1:vt=mt);let It=Lt[vt];It===void 0&&(It={type:void 0,texture:void 0},Lt[vt]=It),(It.type!==B||It.texture!==lt)&&(mt!==vt&&(i.activeTexture(vt),mt=vt),i.bindTexture(B,lt||it[B]),It.type=B,It.texture=lt)}function C(){const B=Lt[mt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(B){Qt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Qt.copy(B))}function Mt(B){de.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function Ut(B,lt){let vt=u.get(lt);vt===void 0&&(vt=new WeakMap,u.set(lt,vt));let It=vt.get(B);It===void 0&&(It=i.getUniformBlockIndex(lt,B.name),vt.set(B,It))}function Tt(B,lt){const It=u.get(lt).get(B);l.get(lt)!==It&&(i.uniformBlockBinding(lt,It,B.__bindingPointIndex),l.set(lt,It))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,Lt={},d={},f=new WeakMap,m=[],x=null,S=!1,_=null,p=null,R=null,A=null,E=null,F=null,P=null,D=new jt(0,0,0),L=0,v=!1,M=null,I=null,V=null,X=null,$=null,Qt.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:wt,bindFramebuffer:Dt,drawBuffers:Nt,useProgram:re,setBlending:at,setMaterial:rt,setFlipSided:et,setCullFace:K,setLineWidth:St,setPolygonOffset:ft,setScissorTest:yt,activeTexture:ee,bindTexture:Jt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:G,texImage2D:Ht,texImage3D:gt,updateUBOMapping:Ut,uniformBlockBinding:Tt,texStorage2D:xt,texStorage3D:zt,texSubImage2D:J,texSubImage3D:ct,compressedTexSubImage2D:Q,compressedTexSubImage3D:kt,scissor:Pt,viewport:Mt,reset:$t}}function y1(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return m?new OffscreenCanvas(C,y):_c("canvas")}function S(C,y,G){let J=1;const ct=Jt(C);if((ct.width>G||ct.height>G)&&(J=G/Math.max(ct.width,ct.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(J*ct.width),kt=Math.floor(J*ct.height);d===void 0&&(d=x(Q,kt));const xt=y?x(Q,kt):d;return xt.width=Q,xt.height=kt,xt.getContext("2d").drawImage(C,0,0,Q,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Q+"x"+kt+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function _(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,y,G,J,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=y;if(y===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),y===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),y===i.RGBA){const kt=ct?mc:Me.getTransfer(J);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=kt===Pe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function E(C,y){let G;return C?y===null||y===Ar||y===Do?G=i.DEPTH24_STENCIL8:y===li?G=i.DEPTH32F_STENCIL8:y===Lo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ar||y===Do?G=i.DEPTH_COMPONENT24:y===li?G=i.DEPTH_COMPONENT32F:y===Lo&&(G=i.DEPTH_COMPONENT16),G}function F(C,y){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==ci?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){const y=C.target;y.removeEventListener("dispose",P),L(y),y.isVideoTexture&&h.delete(y)}function D(C){const y=C.target;y.removeEventListener("dispose",D),M(y)}function L(C){const y=n.get(C);if(y.__webglInit===void 0)return;const G=C.source,J=f.get(G);if(J){const ct=J[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&v(C),Object.keys(J).length===0&&f.delete(G)}n.remove(C)}function v(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const G=C.source,J=f.get(G);delete J[y.__cacheKey],o.memory.textures--}function M(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ct=0;ct<y.__webglFramebuffer[J].length;ct++)i.deleteFramebuffer(y.__webglFramebuffer[J][ct]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=C.textures;for(let J=0,ct=G.length;J<ct;J++){const Q=n.get(G[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(C)}let I=0;function V(){I=0}function X(){const C=I;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function $(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function tt(C,y){const G=n.get(C);if(C.isVideoTexture&&yt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(G,C,y);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function j(C,y){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){it(G,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function ht(C,y){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){it(G,C,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function Z(C,y){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ut(G,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const mt={[eu]:i.REPEAT,[Tr]:i.CLAMP_TO_EDGE,[nu]:i.MIRRORED_REPEAT},Lt={[zn]:i.NEAREST,[im]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[al]:i.LINEAR_MIPMAP_NEAREST,[br]:i.LINEAR_MIPMAP_LINEAR},Ot={[om]:i.NEVER,[fm]:i.ALWAYS,[am]:i.LESS,[Jd]:i.LEQUAL,[cm]:i.EQUAL,[hm]:i.GEQUAL,[lm]:i.GREATER,[um]:i.NOTEQUAL};function te(C,y){if(y.type===li&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ci||y.magFilter===al||y.magFilter===Pa||y.magFilter===br||y.minFilter===ci||y.minFilter===al||y.minFilter===Pa||y.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,mt[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,mt[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,mt[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Lt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Lt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn||y.minFilter!==Pa&&y.minFilter!==br||y.type===li&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(C,y){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));const J=y.source;let ct=f.get(J);ct===void 0&&(ct={},f.set(J,ct));const Q=$(y);if(Q!==C.__cacheKey){ct[Q]===void 0&&(ct[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ct[Q].usedTimes++;const kt=ct[C.__cacheKey];kt!==void 0&&(ct[C.__cacheKey].usedTimes--,kt.usedTimes===0&&v(y)),C.__cacheKey=Q,C.__webglTexture=ct[Q].texture}return G}function de(C,y,G){return Math.floor(Math.floor(C/G)/y)}function ae(C,y,G,J){const Q=C.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,J,y.data);else{Q.sort((gt,Pt)=>gt.start-Pt.start);let kt=0;for(let gt=1;gt<Q.length;gt++){const Pt=Q[kt],Mt=Q[gt],Ut=Pt.start+Pt.count,Tt=de(Mt.start,y.width,4),$t=de(Pt.start,y.width,4);Mt.start<=Ut+1&&Tt===$t&&de(Mt.start+Mt.count-1,y.width,4)===Tt?Pt.count=Math.max(Pt.count,Mt.start+Mt.count-Pt.start):(++kt,Q[kt]=Mt)}Q.length=kt+1;const xt=i.getParameter(i.UNPACK_ROW_LENGTH),zt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ht=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let gt=0,Pt=Q.length;gt<Pt;gt++){const Mt=Q[gt],Ut=Math.floor(Mt.start/4),Tt=Math.ceil(Mt.count/4),$t=Ut%y.width,B=Math.floor(Ut/y.width),lt=Tt,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,$t,B,lt,vt,G,J,y.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ht)}}function it(C,y,G){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);const ct=Qt(C,y),Q=y.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+G);const kt=n.get(Q);if(Q.version!==kt.__version||ct===!0){e.activeTexture(i.TEXTURE0+G);const xt=Me.getPrimaries(Me.workingColorSpace),zt=y.colorSpace===qi?null:Me.getPrimaries(y.colorSpace),Ht=y.colorSpace===qi||xt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let gt=S(y.image,!1,r.maxTextureSize);gt=ee(y,gt);const Pt=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type);let Ut=A(y.internalFormat,Pt,Mt,y.colorSpace,y.isVideoTexture);te(J,y);let Tt;const $t=y.mipmaps,B=y.isVideoTexture!==!0,lt=kt.__version===void 0||ct===!0,vt=Q.dataReady,It=F(y,gt);if(y.isDepthTexture)Ut=E(y.format===Uo,y.type),lt&&(B?e.texStorage2D(i.TEXTURE_2D,1,Ut,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,gt.width,gt.height,0,Pt,Mt,null));else if(y.isDataTexture)if($t.length>0){B&&lt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,$t[0].width,$t[0].height);for(let pt=0,ot=$t.length;pt<ot;pt++)Tt=$t[pt],B?vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Pt,Mt,Tt.data):e.texImage2D(i.TEXTURE_2D,pt,Ut,Tt.width,Tt.height,0,Pt,Mt,Tt.data);y.generateMipmaps=!1}else B?(lt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,gt.width,gt.height),vt&&ae(y,gt,Pt,Mt)):e.texImage2D(i.TEXTURE_2D,0,Ut,gt.width,gt.height,0,Pt,Mt,gt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){B&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,$t[0].width,$t[0].height,gt.depth);for(let pt=0,ot=$t.length;pt<ot;pt++)if(Tt=$t[pt],y.format!==jn)if(Pt!==null)if(B){if(vt)if(y.layerUpdates.size>0){const Ft=ld(Tt.width,Tt.height,y.format,y.type);for(const Kt of y.layerUpdates){const se=Tt.data.subarray(Kt*Ft/Tt.data.BYTES_PER_ELEMENT,(Kt+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Kt,Tt.width,Tt.height,1,Pt,se)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,gt.depth,Pt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Ut,Tt.width,Tt.height,gt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,gt.depth,Pt,Mt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Ut,Tt.width,Tt.height,gt.depth,0,Pt,Mt,Tt.data)}else{B&&lt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,$t[0].width,$t[0].height);for(let pt=0,ot=$t.length;pt<ot;pt++)Tt=$t[pt],y.format!==jn?Pt!==null?B?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Pt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Pt,Mt,Tt.data):e.texImage2D(i.TEXTURE_2D,pt,Ut,Tt.width,Tt.height,0,Pt,Mt,Tt.data)}else if(y.isDataArrayTexture)if(B){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,gt.width,gt.height,gt.depth),vt)if(y.layerUpdates.size>0){const pt=ld(gt.width,gt.height,y.format,y.type);for(const ot of y.layerUpdates){const Ft=gt.data.subarray(ot*pt/gt.data.BYTES_PER_ELEMENT,(ot+1)*pt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,gt.width,gt.height,1,Pt,Mt,Ft)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Mt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,gt.width,gt.height,gt.depth,0,Pt,Mt,gt.data);else if(y.isData3DTexture)B?(lt&&e.texStorage3D(i.TEXTURE_3D,It,Ut,gt.width,gt.height,gt.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Mt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,gt.width,gt.height,gt.depth,0,Pt,Mt,gt.data);else if(y.isFramebufferTexture){if(lt)if(B)e.texStorage2D(i.TEXTURE_2D,It,Ut,gt.width,gt.height);else{let pt=gt.width,ot=gt.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Ut,pt,ot,0,Pt,Mt,null),pt>>=1,ot>>=1}}else if($t.length>0){if(B&&lt){const pt=Jt($t[0]);e.texStorage2D(i.TEXTURE_2D,It,Ut,pt.width,pt.height)}for(let pt=0,ot=$t.length;pt<ot;pt++)Tt=$t[pt],B?vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Pt,Mt,Tt):e.texImage2D(i.TEXTURE_2D,pt,Ut,Pt,Mt,Tt);y.generateMipmaps=!1}else if(B){if(lt){const pt=Jt(gt);e.texStorage2D(i.TEXTURE_2D,It,Ut,pt.width,pt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Mt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,Pt,Mt,gt);_(y)&&p(J),kt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ut(C,y,G){if(y.image.length!==6)return;const J=Qt(C,y),ct=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const Q=n.get(ct);if(ct.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const kt=Me.getPrimaries(Me.workingColorSpace),xt=y.colorSpace===qi?null:Me.getPrimaries(y.colorSpace),zt=y.colorSpace===qi||kt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Ht=y.isCompressedTexture||y.image[0].isCompressedTexture,gt=y.image[0]&&y.image[0].isDataTexture,Pt=[];for(let ot=0;ot<6;ot++)!Ht&&!gt?Pt[ot]=S(y.image[ot],!0,r.maxCubemapSize):Pt[ot]=gt?y.image[ot].image:y.image[ot],Pt[ot]=ee(y,Pt[ot]);const Mt=Pt[0],Ut=s.convert(y.format,y.colorSpace),Tt=s.convert(y.type),$t=A(y.internalFormat,Ut,Tt,y.colorSpace),B=y.isVideoTexture!==!0,lt=Q.__version===void 0||J===!0,vt=ct.dataReady;let It=F(y,Mt);te(i.TEXTURE_CUBE_MAP,y);let pt;if(Ht){B&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,$t,Mt.width,Mt.height);for(let ot=0;ot<6;ot++){pt=Pt[ot].mipmaps;for(let Ft=0;Ft<pt.length;Ft++){const Kt=pt[Ft];y.format!==jn?Ut!==null?B?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,Kt.width,Kt.height,Ut,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,$t,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,Kt.width,Kt.height,Ut,Tt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,$t,Kt.width,Kt.height,0,Ut,Tt,Kt.data)}}}else{if(pt=y.mipmaps,B&&lt){pt.length>0&&It++;const ot=Jt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,$t,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(gt){B?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Pt[ot].width,Pt[ot].height,Ut,Tt,Pt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,Pt[ot].width,Pt[ot].height,0,Ut,Tt,Pt[ot].data);for(let Ft=0;Ft<pt.length;Ft++){const se=pt[Ft].image[ot].image;B?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,se.width,se.height,Ut,Tt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,$t,se.width,se.height,0,Ut,Tt,se.data)}}else{B?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ut,Tt,Pt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,Ut,Tt,Pt[ot]);for(let Ft=0;Ft<pt.length;Ft++){const Kt=pt[Ft];B?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,Ut,Tt,Kt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,$t,Ut,Tt,Kt.image[ot])}}}_(y)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function wt(C,y,G,J,ct,Q){const kt=s.convert(G.format,G.colorSpace),xt=s.convert(G.type),zt=A(G.internalFormat,kt,xt,G.colorSpace),Ht=n.get(y),gt=n.get(G);if(gt.__renderTarget=y,!Ht.__hasExternalTextures){const Pt=Math.max(1,y.width>>Q),Mt=Math.max(1,y.height>>Q);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,Q,zt,Pt,Mt,y.depth,0,kt,xt,null):e.texImage2D(ct,Q,zt,Pt,Mt,0,kt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ft(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ct,gt.__webglTexture,0,St(y)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ct,gt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(C,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const J=y.depthTexture,ct=J&&J.isDepthTexture?J.type:null,Q=E(y.stencilBuffer,ct),kt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=St(y);ft(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,Q,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,C)}else{const J=y.textures;for(let ct=0;ct<J.length;ct++){const Q=J[ct],kt=s.convert(Q.format,Q.colorSpace),xt=s.convert(Q.type),zt=A(Q.internalFormat,kt,xt,Q.colorSpace),Ht=St(y);G&&ft(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,zt,y.width,y.height):ft(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,zt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,zt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt(y.depthTexture,0);const ct=J.__webglTexture,Q=St(y);if(y.depthTexture.format===Io)ft(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(y.depthTexture.format===Uo)ft(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function re(C){const y=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",ct)};J.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=J}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?Nt(y.__webglFramebuffer[0],C):Nt(y.__webglFramebuffer,C)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),Dt(y.__webglDepthbuffer[J],C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Q)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Dt(y.__webglDepthbuffer,C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(C,y,G){const J=n.get(C);y!==void 0&&wt(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&re(C)}function N(C){const y=C.texture,G=n.get(C),J=n.get(y);C.addEventListener("dispose",D);const ct=C.textures,Q=C.isWebGLCubeRenderTarget===!0,kt=ct.length>1;if(kt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[xt]=[];for(let zt=0;zt<y.mipmaps.length;zt++)G.__webglFramebuffer[xt][zt]=i.createFramebuffer()}else G.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)G.__webglFramebuffer[xt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(kt)for(let xt=0,zt=ct.length;xt<zt;xt++){const Ht=n.get(ct[xt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ft(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let xt=0;xt<ct.length;xt++){const zt=ct[xt];G.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[xt]);const Ht=s.convert(zt.format,zt.colorSpace),gt=s.convert(zt.type),Pt=A(zt.internalFormat,Ht,gt,zt.colorSpace,C.isXRRenderTarget===!0),Mt=St(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Pt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,G.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),te(i.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let zt=0;zt<y.mipmaps.length;zt++)wt(G.__webglFramebuffer[xt][zt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt);else wt(G.__webglFramebuffer[xt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);_(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let xt=0,zt=ct.length;xt<zt;xt++){const Ht=ct[xt],gt=n.get(Ht);let Pt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,gt.__webglTexture),te(Pt,Ht),wt(G.__webglFramebuffer,C,Ht,i.COLOR_ATTACHMENT0+xt,Pt,0),_(Ht)&&p(Pt)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,J.__webglTexture),te(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let zt=0;zt<y.mipmaps.length;zt++)wt(G.__webglFramebuffer[zt],C,y,i.COLOR_ATTACHMENT0,xt,zt);else wt(G.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,xt,0);_(y)&&p(xt),e.unbindTexture()}C.depthBuffer&&re(C)}function at(C){const y=C.textures;for(let G=0,J=y.length;G<J;G++){const ct=y[G];if(_(ct)){const Q=R(C),kt=n.get(ct).__webglTexture;e.bindTexture(Q,kt),p(Q),e.unbindTexture()}}}const rt=[],et=[];function K(C){if(C.samples>0){if(ft(C)===!1){const y=C.textures,G=C.width,J=C.height;let ct=i.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(C),xt=y.length>1;if(xt)for(let Ht=0;Ht<y.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const zt=C.texture.mipmaps;zt&&zt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Ht=0;Ht<y.length;Ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Ht]);const gt=n.get(y[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,ct,i.NEAREST),l===!0&&(rt.length=0,et.length=0,rt.push(i.COLOR_ATTACHMENT0+Ht),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rt.push(Q),et.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Ht=0;Ht<y.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Ht]);const gt=n.get(y[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function St(C){return Math.min(r.maxSamples,C.samples)}function ft(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function yt(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ee(C,y){const G=C.colorSpace,J=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==bs&&G!==qi&&(Me.getTransfer(G)===Pe?(J!==jn||ct!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function Jt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=tt,this.setTexture2DArray=j,this.setTexture3D=ht,this.setTextureCube=Z,this.rebindTextures=ye,this.setupRenderTarget=N,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ft}function S1(i,t){function e(n,r=qi){let s;const o=Me.getTransfer(r);if(n===hi)return i.UNSIGNED_BYTE;if(n===zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ku)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kd)return i.BYTE;if(n===Hd)return i.SHORT;if(n===Lo)return i.UNSIGNED_SHORT;if(n===Bu)return i.INT;if(n===Ar)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===ko)return i.HALF_FLOAT;if(n===Wd)return i.ALPHA;if(n===Xd)return i.RGB;if(n===jn)return i.RGBA;if(n===Io)return i.DEPTH_COMPONENT;if(n===Uo)return i.DEPTH_STENCIL;if(n===Hu)return i.RED;if(n===Gu)return i.RED_INTEGER;if(n===qd)return i.RG;if(n===Vu)return i.RG_INTEGER;if(n===Wu)return i.RGBA_INTEGER;if(n===lc||n===uc||n===hc||n===fc)if(o===Pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===ru||n===su||n===ou)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===cu||n===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===cu)return o===Pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===Mu||n===yu||n===Su||n===Eu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===du)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wu||n===Tu||n===bu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===wu)return o===Pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Ru||n===Cu||n===Pu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Au)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Do?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class T1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new op(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:E1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b1 extends Cs{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",_=new T1,p={},R=e.getContextAttributes();let A=null,E=null;const F=[],P=[],D=new dt;let L=null;const v=new Gn;v.viewport=new Le;const M=new Gn;M.viewport=new Le;const I=[v,M],V=new qg;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=F[it];return ut===void 0&&(ut=new Rl,F[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=F[it];return ut===void 0&&(ut=new Rl,F[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=F[it];return ut===void 0&&(ut=new Rl,F[it]=ut),ut.getHandSpace()};function tt(it){const ut=P.indexOf(it.inputSource);if(ut===-1)return;const wt=F[ut];wt!==void 0&&(wt.update(it.inputSource,it.frame,u||o),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function j(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ht);for(let it=0;it<F.length;it++){const ut=P[it];ut!==null&&(P[it]=null,F[it].disconnect(ut))}X=null,$=null,_.reset();for(const it in p)delete p[it];t.setRenderTarget(A),m=null,f=null,d=null,r=null,E=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ht),R.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Dt=null,Nt=null;R.depth&&(Nt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=R.stencil?Uo:Io,Dt=R.stencil?Do:Ar);const re={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(re),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new $i(f.textureWidth,f.textureHeight,{format:jn,type:hi,depthTexture:new sp(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const wt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,wt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new $i(m.framebufferWidth,m.framebufferHeight,{format:jn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ht(it){for(let ut=0;ut<it.removed.length;ut++){const wt=it.removed[ut],Dt=P.indexOf(wt);Dt>=0&&(P[Dt]=null,F[Dt].disconnect(wt))}for(let ut=0;ut<it.added.length;ut++){const wt=it.added[ut];let Dt=P.indexOf(wt);if(Dt===-1){for(let re=0;re<F.length;re++)if(re>=P.length){P.push(wt),Dt=re;break}else if(P[re]===null){P[re]=wt,Dt=re;break}if(Dt===-1)break}const Nt=F[Dt];Nt&&Nt.connect(wt)}}const Z=new b,mt=new b;function Lt(it,ut,wt){Z.setFromMatrixPosition(ut.matrixWorld),mt.setFromMatrixPosition(wt.matrixWorld);const Dt=Z.distanceTo(mt),Nt=ut.projectionMatrix.elements,re=wt.projectionMatrix.elements,ye=Nt[14]/(Nt[10]-1),N=Nt[14]/(Nt[10]+1),at=(Nt[9]+1)/Nt[5],rt=(Nt[9]-1)/Nt[5],et=(Nt[8]-1)/Nt[0],K=(re[8]+1)/re[0],St=ye*et,ft=ye*K,yt=Dt/(-et+K),ee=yt*-et;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ee),it.translateZ(yt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Nt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Jt=ye+yt,C=N+yt,y=St-ee,G=ft+(Dt-ee),J=at*N/C*Jt,ct=rt*N/C*Jt;it.projectionMatrix.makePerspective(y,G,J,ct,Jt,C),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Ot(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let ut=it.near,wt=it.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),V.near=M.near=v.near=ut,V.far=M.far=v.far=wt,(X!==V.near||$!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),X=V.near,$=V.far),V.layers.mask=it.layers.mask|6,v.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const Dt=it.parent,Nt=V.cameras;Ot(V,Dt);for(let re=0;re<Nt.length;re++)Ot(Nt[re],Dt);Nt.length===2?Lt(V,v,M):V.projectionMatrix.copy(v.projectionMatrix),te(it,V,Dt)};function te(it,ut,wt){wt===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=No*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(it){return p[it]};let Qt=null;function de(it,ut){if(h=ut.getViewerPose(u||o),x=ut,h!==null){const wt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let Dt=!1;wt.length!==V.cameras.length&&(V.cameras.length=0,Dt=!0);for(let N=0;N<wt.length;N++){const at=wt[N];let rt=null;if(m!==null)rt=m.getViewport(at);else{const K=d.getViewSubImage(f,at);rt=K.viewport,N===0&&(t.setRenderTargetTextures(E,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(E))}let et=I[N];et===void 0&&(et=new Gn,et.layers.enable(N),et.viewport=new Le,I[N]=et),et.matrix.fromArray(at.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(at.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(rt.x,rt.y,rt.width,rt.height),N===0&&(V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Dt===!0&&V.cameras.push(et)}const Nt=r.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const N=d.getDepthInformation(wt[0]);N&&N.isValid&&N.texture&&_.init(N,r.renderState)}if(Nt&&Nt.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let N=0;N<wt.length;N++){const at=wt[N].camera;if(at){let rt=p[at];rt||(rt=new op,p[at]=rt);const et=d.getCameraImage(at);rt.sourceTexture=et}}}}for(let wt=0;wt<F.length;wt++){const Dt=P[wt],Nt=F[wt];Dt!==null&&Nt!==void 0&&Nt.update(Dt,ut,u||o)}Qt&&Qt(it,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),x=null}const ae=new _p;ae.setAnimationLoop(de),this.setAnimationLoop=function(it){Qt=it},this.dispose=function(){}}}const gr=new fi,A1=new be;function R1(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,ep(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,R,A,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),d(_,p)):p.isMeshPhongMaterial?(s(_,p),h(_,p)):p.isMeshStandardMaterial?(s(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,E)):p.isMeshMatcapMaterial?(s(_,p),x(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),S(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,R,A):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Tn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Tn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const R=t.get(p),A=R.envMap,E=R.envMapRotation;A&&(_.envMap.value=A,gr.copy(E),gr.x*=-1,gr.y*=-1,gr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),_.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(gr)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,R,A){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*R,_.scale.value=A*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,R){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,p){p.matcap&&(_.matcap.value=p.matcap)}function S(_,p){const R=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function C1(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const E=A.program;n.uniformBlockBinding(R,E)}function u(R,A){let E=r[R.id];E===void 0&&(x(R),E=h(R),r[R.id]=E,R.addEventListener("dispose",_));const F=A.program;n.updateUBOMapping(R,F);const P=t.render.frame;s[R.id]!==P&&(f(R),s[R.id]=P)}function h(R){const A=d();R.__bindingPointIndex=A;const E=i.createBuffer(),F=R.__size,P=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const A=r[R.id],E=R.uniforms,F=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let P=0,D=E.length;P<D;P++){const L=Array.isArray(E[P])?E[P]:[E[P]];for(let v=0,M=L.length;v<M;v++){const I=L[v];if(m(I,P,v,F)===!0){const V=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let tt=0;tt<X.length;tt++){const j=X[tt],ht=S(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,V+$,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,$),$+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,A,E,F){const P=R.value,D=A+"_"+E;if(F[D]===void 0)return typeof P=="number"||typeof P=="boolean"?F[D]=P:F[D]=P.clone(),!0;{const L=F[D];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return F[D]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function x(R){const A=R.uniforms;let E=0;const F=16;for(let D=0,L=A.length;D<L;D++){const v=Array.isArray(A[D])?A[D]:[A[D]];for(let M=0,I=v.length;M<I;M++){const V=v[M],X=Array.isArray(V.value)?V.value:[V.value];for(let $=0,tt=X.length;$<tt;$++){const j=X[$],ht=S(j),Z=E%F,mt=Z%ht.boundary,Lt=Z+mt;E+=mt,Lt!==0&&F-Lt<ht.storage&&(E+=F-Lt),V.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=ht.storage}}}const P=E%F;return P>0&&(E+=F-P),R.__size=E,R.__cache={},this}function S(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function _(R){const A=R.target;A.removeEventListener("dispose",_);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function p(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class P1{constructor(t={}){const{canvas:e=Cm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=new Uint32Array(4),S=new Int32Array(4);let _=null,p=null;const R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let F=!1;this._outputColorSpace=Dn;let P=0,D=0,L=null,v=-1,M=null;const I=new Le,V=new Le;let X=null;const $=new jt(0);let tt=0,j=e.width,ht=e.height,Z=1,mt=null,Lt=null;const Ot=new Le(0,0,j,ht),te=new Le(0,0,j,ht);let Qt=!1;const de=new Ju;let ae=!1,it=!1;const ut=new be,wt=new b,Dt=new Le,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function ye(){return L===null?Z:1}let N=n;function at(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ou}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){const k="webgl2";if(N=at(k,T),N===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let rt,et,K,St,ft,yt,ee,Jt,C,y,G,J,ct,Q,kt,xt,zt,Ht,gt,Pt,Mt,Ut,Tt,$t;function B(){rt=new kx(N),rt.init(),Ut=new S1(N,rt),et=new Ix(N,rt,t,Ut),K=new M1(N,rt),et.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),St=new Vx(N),ft=new a1,yt=new y1(N,rt,K,ft,et,Ut,St),ee=new Nx(E),Jt=new zx(E),C=new Jg(N),Tt=new Lx(N,C),y=new Hx(N,C,St,Tt),G=new Xx(N,y,C,St),gt=new Wx(N,et,yt),xt=new Ux(ft),J=new o1(E,ee,Jt,rt,et,Tt,xt),ct=new R1(E,ft),Q=new l1,kt=new m1(rt),Ht=new Px(E,ee,Jt,K,G,m,l),zt=new v1(E,G,et),$t=new C1(N,St,et,K),Pt=new Dx(N,rt,St),Mt=new Gx(N,rt,St),St.programs=J.programs,E.capabilities=et,E.extensions=rt,E.properties=ft,E.renderLists=Q,E.shadowMap=zt,E.state=K,E.info=St}B();const lt=new b1(E,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(j,ht,!1))},this.getSize=function(T){return T.set(j,ht)},this.setSize=function(T,k,Y=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,ht=k,e.width=Math.floor(T*Z),e.height=Math.floor(k*Z),Y===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(j*Z,ht*Z).floor()},this.setDrawingBufferSize=function(T,k,Y){j=T,ht=k,Z=Y,e.width=Math.floor(T*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Ot)},this.setViewport=function(T,k,Y,q){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,k,Y,q),K.viewport(I.copy(Ot).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,k,Y,q){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,k,Y,q),K.scissor(V.copy(te).multiplyScalar(Z).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(T){K.setScissorTest(Qt=T)},this.setOpaqueSort=function(T){mt=T},this.setTransparentSort=function(T){Lt=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Y=!0){let q=0;if(T){let H=!1;if(L!==null){const _t=L.texture.format;H=_t===Wu||_t===Vu||_t===Gu}if(H){const _t=L.texture.type,Rt=_t===hi||_t===Ar||_t===Lo||_t===Do||_t===zu||_t===ku,Bt=Ht.getClearColor(),bt=Ht.getClearAlpha(),Vt=Bt.r,Wt=Bt.g,qt=Bt.b;Rt?(x[0]=Vt,x[1]=Wt,x[2]=qt,x[3]=bt,N.clearBufferuiv(N.COLOR,0,x)):(S[0]=Vt,S[1]=Wt,S[2]=qt,S[3]=bt,N.clearBufferiv(N.COLOR,0,S))}else q|=N.COLOR_BUFFER_BIT}k&&(q|=N.DEPTH_BUFFER_BIT),Y&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Ht.dispose(),Q.dispose(),kt.dispose(),ft.dispose(),ee.dispose(),Jt.dispose(),G.dispose(),Tt.dispose(),$t.dispose(),J.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",_n),lt.removeEventListener("sessionend",Qi),In.stop()};function vt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const T=St.autoReset,k=zt.enabled,Y=zt.autoUpdate,q=zt.needsUpdate,H=zt.type;B(),St.autoReset=T,zt.enabled=k,zt.autoUpdate=Y,zt.needsUpdate=q,zt.type=H}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ot(T){const k=T.target;k.removeEventListener("dispose",ot),Ft(k)}function Ft(T){Kt(T),ft.remove(T)}function Kt(T){const k=ft.get(T).programs;k!==void 0&&(k.forEach(function(Y){J.releaseProgram(Y)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,q,H,_t){k===null&&(k=Nt);const Rt=H.isMesh&&H.matrixWorld.determinant()<0,Bt=Ds(T,k,Y,q,H);K.setMaterial(q,Rt);let bt=Y.index,Vt=1;if(q.wireframe===!0){if(bt=y.getWireframeAttribute(Y),bt===void 0)return;Vt=2}const Wt=Y.drawRange,qt=Y.attributes.position;let ne=Wt.start*Vt,Se=(Wt.start+Wt.count)*Vt;_t!==null&&(ne=Math.max(ne,_t.start*Vt),Se=Math.min(Se,(_t.start+_t.count)*Vt)),bt!==null?(ne=Math.max(ne,0),Se=Math.min(Se,bt.count)):qt!=null&&(ne=Math.max(ne,0),Se=Math.min(Se,qt.count));const De=Se-ne;if(De<0||De===1/0)return;Tt.setup(H,q,Bt,Y,bt);let Ee,xe=Pt;if(bt!==null&&(Ee=C.get(bt),xe=Mt,xe.setIndex(Ee)),H.isMesh)q.wireframe===!0?(K.setLineWidth(q.wireframeLinewidth*ye()),xe.setMode(N.LINES)):xe.setMode(N.TRIANGLES);else if(H.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),K.setLineWidth(Xt*ye()),H.isLineSegments?xe.setMode(N.LINES):H.isLineLoop?xe.setMode(N.LINE_LOOP):xe.setMode(N.LINE_STRIP)}else H.isPoints?xe.setMode(N.POINTS):H.isSprite&&xe.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xt=H._multiDrawStarts,Re=H._multiDrawCounts,fe=H._multiDrawCount,en=bt?C.get(bt).bytesPerElement:1,Xn=ft.get(q).currentProgram.getUniforms();for(let ln=0;ln<fe;ln++)Xn.setValue(N,"_gl_DrawID",ln),xe.render(Xt[ln]/en,Re[ln])}else if(H.isInstancedMesh)xe.renderInstances(ne,De,H.count);else if(Y.isInstancedBufferGeometry){const Xt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Re=Math.min(Y.instanceCount,Xt);xe.renderInstances(ne,De,Re)}else xe.render(ne,De)};function se(T,k,Y){T.transparent===!0&&T.side===mn&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,ve(T,k,Y),T.side=Ai,T.needsUpdate=!0,ve(T,k,Y),T.side=mn):ve(T,k,Y)}this.compile=function(T,k,Y=null){Y===null&&(Y=T),p=kt.get(Y),p.init(k),A.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==Y&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let Rt=0;Rt<_t.length;Rt++){const Bt=_t[Rt];se(Bt,Y,H),q.add(Bt)}else se(_t,Y,H),q.add(_t)}),p=A.pop(),q},this.compileAsync=function(T,k,Y=null){const q=this.compile(T,k,Y);return new Promise(H=>{function _t(){if(q.forEach(function(Rt){ft.get(Rt).currentProgram.isReady()&&q.delete(Rt)}),q.size===0){H(T);return}setTimeout(_t,10)}rt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let he=null;function bn(T){he&&he(T)}function _n(){In.stop()}function Qi(){In.start()}const In=new _p;In.setAnimationLoop(bn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(T){he=T,lt.setAnimationLoop(T),T===null?In.stop():In.start()},lt.addEventListener("sessionstart",_n),lt.addEventListener("sessionend",Qi),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,k,L),p=kt.get(T,A.length),p.init(k),A.push(p),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),de.setFromProjectionMatrix(ut,ui,k.reversedDepth),it=this.localClippingEnabled,ae=xt.init(this.clippingPlanes,it),_=Q.get(T,R.length),_.init(),R.push(_),lt.enabled===!0&&lt.isPresenting===!0){const _t=E.xr.getDepthSensingMesh();_t!==null&&Ri(_t,k,-1/0,E.sortObjects)}Ri(T,k,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(mt,Lt),re=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,re&&Ht.addToRenderList(_,T),this.info.render.frame++,ae===!0&&xt.beginShadows();const Y=p.state.shadowsArray;zt.render(Y,T,k),ae===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,H=_.transmissive;if(p.setupLights(),k.isArrayCamera){const _t=k.cameras;if(H.length>0)for(let Rt=0,Bt=_t.length;Rt<Bt;Rt++){const bt=_t[Rt];Qn(q,H,T,bt)}re&&Ht.render(T);for(let Rt=0,Bt=_t.length;Rt<Bt;Rt++){const bt=_t[Rt];vn(_,T,bt,bt.viewport)}}else H.length>0&&Qn(q,H,T,k),re&&Ht.render(T),vn(_,T,k);L!==null&&D===0&&(yt.updateMultisampleRenderTarget(L),yt.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(E,T,k),Tt.resetDefaultState(),v=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],ae===!0&&xt.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Ri(T,k,Y,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||de.intersectsSprite(T)){q&&Dt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const Rt=G.update(T),Bt=T.material;Bt.visible&&_.push(T,Rt,Bt,Y,Dt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||de.intersectsObject(T))){const Rt=G.update(T),Bt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Dt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Dt.copy(Rt.boundingSphere.center)),Dt.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(Bt)){const bt=Rt.groups;for(let Vt=0,Wt=bt.length;Vt<Wt;Vt++){const qt=bt[Vt],ne=Bt[qt.materialIndex];ne&&ne.visible&&_.push(T,Rt,ne,Y,Dt.z,qt)}}else Bt.visible&&_.push(T,Rt,Bt,Y,Dt.z,null)}}const _t=T.children;for(let Rt=0,Bt=_t.length;Rt<Bt;Rt++)Ri(_t[Rt],k,Y,q)}function vn(T,k,Y,q){const H=T.opaque,_t=T.transmissive,Rt=T.transparent;p.setupLightsView(Y),ae===!0&&xt.setGlobalState(E.clippingPlanes,Y),q&&K.viewport(I.copy(q)),H.length>0&&kn(H,k,Y),_t.length>0&&kn(_t,k,Y),Rt.length>0&&kn(Rt,k,Y),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Qn(T,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new $i(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?ko:hi,minFilter:br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const _t=p.state.transmissionRenderTarget[q.id],Rt=q.viewport||I;_t.setSize(Rt.z*E.transmissionResolutionScale,Rt.w*E.transmissionResolutionScale);const Bt=E.getRenderTarget(),bt=E.getActiveCubeFace(),Vt=E.getActiveMipmapLevel();E.setRenderTarget(_t),E.getClearColor($),tt=E.getClearAlpha(),tt<1&&E.setClearColor(16777215,.5),E.clear(),re&&Ht.render(Y);const Wt=E.toneMapping;E.toneMapping=Ji;const qt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ae===!0&&xt.setGlobalState(E.clippingPlanes,q),kn(T,Y,q),yt.updateMultisampleRenderTarget(_t),yt.updateRenderTargetMipmap(_t),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Se=0,De=k.length;Se<De;Se++){const Ee=k[Se],xe=Ee.object,Xt=Ee.geometry,Re=Ee.material,fe=Ee.group;if(Re.side===mn&&xe.layers.test(q.layers)){const en=Re.side;Re.side=Tn,Re.needsUpdate=!0,sn(xe,Y,q,Xt,Re,fe),Re.side=en,Re.needsUpdate=!0,ne=!0}}ne===!0&&(yt.updateMultisampleRenderTarget(_t),yt.updateRenderTargetMipmap(_t))}E.setRenderTarget(Bt,bt,Vt),E.setClearColor($,tt),qt!==void 0&&(q.viewport=qt),E.toneMapping=Wt}function kn(T,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,_t=T.length;H<_t;H++){const Rt=T[H],Bt=Rt.object,bt=Rt.geometry,Vt=Rt.group;let Wt=Rt.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),Bt.layers.test(Y.layers)&&sn(Bt,k,Y,bt,Wt,Vt)}}function sn(T,k,Y,q,H,_t){T.onBeforeRender(E,k,Y,q,H,_t),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(E,k,Y,q,T,_t),H.transparent===!0&&H.side===mn&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,E.renderBufferDirect(Y,k,q,H,T,_t),H.side=Ai,H.needsUpdate=!0,E.renderBufferDirect(Y,k,q,H,T,_t),H.side=mn):E.renderBufferDirect(Y,k,q,H,T,_t),T.onAfterRender(E,k,Y,q,H,_t)}function ve(T,k,Y){k.isScene!==!0&&(k=Nt);const q=ft.get(T),H=p.state.lights,_t=p.state.shadowsArray,Rt=H.state.version,Bt=J.getParameters(T,H.state,_t,k,Y),bt=J.getProgramCacheKey(Bt);let Vt=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?Jt:ee).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",ot),Vt=new Map,q.programs=Vt);let Wt=Vt.get(bt);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===Rt)return cn(T,Bt),Wt}else Bt.uniforms=J.getUniforms(T),T.onBeforeCompile(Bt,E),Wt=J.acquireProgram(Bt,bt),Vt.set(bt,Wt),q.uniforms=Bt.uniforms;const qt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=xt.uniform),cn(T,Bt),q.needsLights=ti(T),q.lightsStateVersion=Rt,q.needsLights&&(qt.ambientLightColor.value=H.state.ambient,qt.lightProbe.value=H.state.probe,qt.directionalLights.value=H.state.directional,qt.directionalLightShadows.value=H.state.directionalShadow,qt.spotLights.value=H.state.spot,qt.spotLightShadows.value=H.state.spotShadow,qt.rectAreaLights.value=H.state.rectArea,qt.ltc_1.value=H.state.rectAreaLTC1,qt.ltc_2.value=H.state.rectAreaLTC2,qt.pointLights.value=H.state.point,qt.pointLightShadows.value=H.state.pointShadow,qt.hemisphereLights.value=H.state.hemi,qt.directionalShadowMap.value=H.state.directionalShadowMap,qt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qt.spotShadowMap.value=H.state.spotShadowMap,qt.spotLightMatrix.value=H.state.spotLightMatrix,qt.spotLightMap.value=H.state.spotLightMap,qt.pointShadowMap.value=H.state.pointShadowMap,qt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function Ye(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=pc.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function cn(T,k){const Y=ft.get(T);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Ds(T,k,Y,q,H){k.isScene!==!0&&(k=Nt),yt.resetTextureUnits();const _t=k.fog,Rt=q.isMeshStandardMaterial?k.environment:null,Bt=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:bs,bt=(q.isMeshStandardMaterial?Jt:ee).get(q.envMap||Rt),Vt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qt=!!Y.morphAttributes.position,ne=!!Y.morphAttributes.normal,Se=!!Y.morphAttributes.color;let De=Ji;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(De=E.toneMapping);const Ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=Ee!==void 0?Ee.length:0,Xt=ft.get(q),Re=p.state.lights;if(ae===!0&&(it===!0||T!==M)){const Ze=T===M&&q.id===v;xt.setState(q,T,Ze)}let fe=!1;q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Re.state.version||Xt.outputColorSpace!==Bt||H.isBatchedMesh&&Xt.batching===!1||!H.isBatchedMesh&&Xt.batching===!0||H.isBatchedMesh&&Xt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xt.instancing===!1||!H.isInstancedMesh&&Xt.instancing===!0||H.isSkinnedMesh&&Xt.skinning===!1||!H.isSkinnedMesh&&Xt.skinning===!0||H.isInstancedMesh&&Xt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xt.instancingMorph===!1&&H.morphTexture!==null||Xt.envMap!==bt||q.fog===!0&&Xt.fog!==_t||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==xt.numPlanes||Xt.numIntersection!==xt.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==Wt||Xt.morphTargets!==qt||Xt.morphNormals!==ne||Xt.morphColors!==Se||Xt.toneMapping!==De||Xt.morphTargetsCount!==xe)&&(fe=!0):(fe=!0,Xt.__version=q.version);let en=Xt.currentProgram;fe===!0&&(en=ve(q,k,H));let Xn=!1,ln=!1,pi=!1;const Ce=en.getUniforms(),Oe=Xt.uniforms;if(K.useProgram(en.program)&&(Xn=!0,ln=!0,pi=!0),q.id!==v&&(v=q.id,ln=!0),Xn||M!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ce.setValue(N,"projectionMatrix",T.projectionMatrix),Ce.setValue(N,"viewMatrix",T.matrixWorldInverse);const Je=Ce.map.cameraPosition;Je!==void 0&&Je.setValue(N,wt.setFromMatrixPosition(T.matrixWorld)),et.logarithmicDepthBuffer&&Ce.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ce.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ln=!0,pi=!0)}if(H.isSkinnedMesh){Ce.setOptional(N,H,"bindMatrix"),Ce.setOptional(N,H,"bindMatrixInverse");const Ze=H.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ce.setValue(N,"boneTexture",Ze.boneTexture,yt))}H.isBatchedMesh&&(Ce.setOptional(N,H,"batchingTexture"),Ce.setValue(N,"batchingTexture",H._matricesTexture,yt),Ce.setOptional(N,H,"batchingIdTexture"),Ce.setValue(N,"batchingIdTexture",H._indirectTexture,yt),Ce.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(N,"batchingColorTexture",H._colorsTexture,yt));const un=Y.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&gt.update(H,Y,en),(ln||Xt.receiveShadow!==H.receiveShadow)&&(Xt.receiveShadow=H.receiveShadow,Ce.setValue(N,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Oe.envMap.value=bt,Oe.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Oe.envMapIntensity.value=k.environmentIntensity),ln&&(Ce.setValue(N,"toneMappingExposure",E.toneMappingExposure),Xt.needsLights&&Is(Oe,pi),_t&&q.fog===!0&&ct.refreshFogUniforms(Oe,_t),ct.refreshMaterialUniforms(Oe,q,Z,ht,p.state.transmissionRenderTarget[T.id]),pc.upload(N,Ye(Xt),Oe,yt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(pc.upload(N,Ye(Xt),Oe,yt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ce.setValue(N,"center",H.center),Ce.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(N,"normalMatrix",H.normalMatrix),Ce.setValue(N,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ze=q.uniformsGroups;for(let Je=0,tr=Ze.length;Je<tr;Je++){const qn=Ze[Je];$t.update(qn,en),$t.bind(qn,en)}}return en}function Is(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ti(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,k,Y){const q=ft.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ft.get(T.texture).__webglTexture=k,ft.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Y=ft.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Fe=N.createFramebuffer();this.setRenderTarget=function(T,k=0,Y=0){L=T,P=k,D=Y;let q=!0,H=null,_t=!1,Rt=!1;if(T){const bt=ft.get(T);if(bt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(bt.__webglFramebuffer===void 0)yt.setupRenderTarget(T);else if(bt.__hasExternalTextures)yt.rebindTextures(T,ft.get(T.texture).__webglTexture,ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const qt=T.depthTexture;if(bt.__boundDepthTexture!==qt){if(qt!==null&&ft.has(qt)&&(T.width!==qt.image.width||T.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(T)}}const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Rt=!0);const Wt=ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?H=Wt[k][Y]:H=Wt[k],_t=!0):T.samples>0&&yt.useMultisampledRTT(T)===!1?H=ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?H=Wt[Y]:H=Wt,I.copy(T.viewport),V.copy(T.scissor),X=T.scissorTest}else I.copy(Ot).multiplyScalar(Z).floor(),V.copy(te).multiplyScalar(Z).floor(),X=Qt;if(Y!==0&&(H=Fe),K.bindFramebuffer(N.FRAMEBUFFER,H)&&q&&K.drawBuffers(T,H),K.viewport(I),K.scissor(V),K.setScissorTest(X),_t){const bt=ft.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,Y)}else if(Rt){const bt=k;for(let Vt=0;Vt<T.textures.length;Vt++){const Wt=ft.get(T.textures[Vt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,Y,bt)}}else if(T!==null&&Y!==0){const bt=ft.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(T,k,Y,q,H,_t,Rt,Bt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt]),bt){K.bindFramebuffer(N.FRAMEBUFFER,bt);try{const Vt=T.textures[Bt],Wt=Vt.format,qt=Vt.type;if(!et.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&Y>=0&&Y<=T.height-H&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt),N.readPixels(k,Y,q,H,Ut.convert(Wt),Ut.convert(qt),_t))}finally{const Vt=L!==null?ft.get(L).__webglFramebuffer:null;K.bindFramebuffer(N.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,k,Y,q,H,_t,Rt,Bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt]),bt)if(k>=0&&k<=T.width-q&&Y>=0&&Y<=T.height-H){K.bindFramebuffer(N.FRAMEBUFFER,bt);const Vt=T.textures[Bt],Wt=Vt.format,qt=Vt.type;if(!et.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.bufferData(N.PIXEL_PACK_BUFFER,_t.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt),N.readPixels(k,Y,q,H,Ut.convert(Wt),Ut.convert(qt),0);const Se=L!==null?ft.get(L).__webglFramebuffer:null;K.bindFramebuffer(N.FRAMEBUFFER,Se);const De=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Pm(N,De,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_t),N.deleteBuffer(ne),N.deleteSync(De),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Y=0){const q=Math.pow(2,-Y),H=Math.floor(T.image.width*q),_t=Math.floor(T.image.height*q),Rt=k!==null?k.x:0,Bt=k!==null?k.y:0;yt.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Rt,Bt,H,_t),K.unbindTexture()};const Ie=N.createFramebuffer(),Lr=N.createFramebuffer();this.copyTextureToTexture=function(T,k,Y=null,q=null,H=0,_t=null){_t===null&&(H!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=H,H=0):_t=0);let Rt,Bt,bt,Vt,Wt,qt,ne,Se,De;const Ee=T.isCompressedTexture?T.mipmaps[_t]:T.image;if(Y!==null)Rt=Y.max.x-Y.min.x,Bt=Y.max.y-Y.min.y,bt=Y.isBox3?Y.max.z-Y.min.z:1,Vt=Y.min.x,Wt=Y.min.y,qt=Y.isBox3?Y.min.z:0;else{const un=Math.pow(2,-H);Rt=Math.floor(Ee.width*un),Bt=Math.floor(Ee.height*un),T.isDataArrayTexture?bt=Ee.depth:T.isData3DTexture?bt=Math.floor(Ee.depth*un):bt=1,Vt=0,Wt=0,qt=0}q!==null?(ne=q.x,Se=q.y,De=q.z):(ne=0,Se=0,De=0);const xe=Ut.convert(k.format),Xt=Ut.convert(k.type);let Re;k.isData3DTexture?(yt.setTexture3D(k,0),Re=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(yt.setTexture2DArray(k,0),Re=N.TEXTURE_2D_ARRAY):(yt.setTexture2D(k,0),Re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const fe=N.getParameter(N.UNPACK_ROW_LENGTH),en=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=N.getParameter(N.UNPACK_SKIP_PIXELS),ln=N.getParameter(N.UNPACK_SKIP_ROWS),pi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ee.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ee.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Wt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qt);const Ce=T.isDataArrayTexture||T.isData3DTexture,Oe=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const un=ft.get(T),Ze=ft.get(k),Je=ft.get(un.__renderTarget),tr=ft.get(Ze.__renderTarget);K.bindFramebuffer(N.READ_FRAMEBUFFER,Je.__webglFramebuffer),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let qn=0;qn<bt;qn++)Ce&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.get(T).__webglTexture,H,qt+qn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.get(k).__webglTexture,_t,De+qn)),N.blitFramebuffer(Vt,Wt,Rt,Bt,ne,Se,Rt,Bt,N.DEPTH_BUFFER_BIT,N.NEAREST);K.bindFramebuffer(N.READ_FRAMEBUFFER,null),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||ft.has(T)){const un=ft.get(T),Ze=ft.get(k);K.bindFramebuffer(N.READ_FRAMEBUFFER,Ie),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,Lr);for(let Je=0;Je<bt;Je++)Ce?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,un.__webglTexture,H,qt+Je):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,un.__webglTexture,H),Oe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.__webglTexture,_t,De+Je):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ze.__webglTexture,_t),H!==0?N.blitFramebuffer(Vt,Wt,Rt,Bt,ne,Se,Rt,Bt,N.COLOR_BUFFER_BIT,N.NEAREST):Oe?N.copyTexSubImage3D(Re,_t,ne,Se,De+Je,Vt,Wt,Rt,Bt):N.copyTexSubImage2D(Re,_t,ne,Se,Vt,Wt,Rt,Bt);K.bindFramebuffer(N.READ_FRAMEBUFFER,null),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Oe?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Re,_t,ne,Se,De,Rt,Bt,bt,xe,Xt,Ee.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,_t,ne,Se,De,Rt,Bt,bt,xe,Ee.data):N.texSubImage3D(Re,_t,ne,Se,De,Rt,Bt,bt,xe,Xt,Ee):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_t,ne,Se,Rt,Bt,xe,Xt,Ee.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_t,ne,Se,Ee.width,Ee.height,xe,Ee.data):N.texSubImage2D(N.TEXTURE_2D,_t,ne,Se,Rt,Bt,xe,Xt,Ee);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,en),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ln),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pi),_t===0&&k.generateMipmaps&&N.generateMipmap(Re),K.unbindTexture()},this.initRenderTarget=function(T){ft.get(T).__webglFramebuffer===void 0&&yt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?yt.setTextureCube(T,0):T.isData3DTexture?yt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?yt.setTexture2DArray(T,0):yt.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){P=0,D=0,L=null,K.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}function _r(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new we;let u=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(d.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in d.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m])}if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,m,h),u+=m}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const m=i[f].index;for(let x=0;x<m.count;++x)d.push(m.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in s){const d=Ud(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const m=[];for(let S=0;S<o[h].length;++S)m.push(o[h][S][f]);const x=Ud(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Ud(i){let t,e,n,r=-1,s=0;for(let u=0;u<i.length;++u){const h=i[u];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Wn(o,e,n);let l=0;for(let u=0;u<i.length;++u){const h=i[u];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,m=h.count;f<m;f++)for(let x=0;x<e;x++){const S=h.getComponent(f,x);a.setComponent(f+d,x,S)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}async function fs(){const i=globalThis.scheduler;i?.yield?await i.yield():await new Promise(t=>setTimeout(t,0))}function wo(i){const t=performance.now();return performance.mark(`notebook:${i}:start`),()=>{performance.measure(`notebook:${i}`,{start:t,end:performance.now()}),performance.mark(`notebook:${i}:end`)}}const Ln=(i,t,e)=>Xi.smoothstep(e,i,t),Ae=Xi.lerp;function Vl(i,t){i.opacity=t;const e=t<.995;i.transparent!==e&&(i.transparent=e,i.needsUpdate=!0),i.depthWrite=t>.92,i.visible=t>.003}let Yi=73;function Zt(){return Yi=Yi*16807%2147483647,(Yi-1)/2147483646}async function I1(i,t,e="full",n=e==="low"?"light":"full"){const r=i.dataset.detail,s={};try{return await L1(i,t,e,n,s)}catch(o){const a=s.renderer;throw a&&(a.domElement.remove(),a.dispose(),a.forceContextLoss()),r===void 0?delete i.dataset.detail:i.dataset.detail=r,o}}async function L1(i,t,e,n,r){const s=wo("scene-construction");let o=wo("construction:renderer");const a=async c=>{o(),await fs(),o=wo(`construction:${c}`)};Yi=73;const l=e==="low",u=new eg,h=new P1({alpha:!0,antialias:!0,powerPreference:"low-power"});r.renderer=h,h.debug.checkShaderErrors=!0,i.dataset.detail=e,h.setClearColor(16448504,0),h.shadowMap.enabled=!0,h.shadowMap.type=Fd,h.shadowMap.autoUpdate=!1,h.toneMapping=Bd,h.toneMappingExposure=1.2,h.domElement.setAttribute("aria-hidden","true"),i.appendChild(h.domElement);const d=new eh(-10,10,10,-10,.1,100),f=new _e;u.add(f);const m=new Vg(16251903,8622195,2.5);u.add(m);const x=new od(16773076,3.3);x.position.set(-6,15,8),x.castShadow=!0,x.shadow.mapSize.set(2048,2048),x.shadow.camera.left=-12,x.shadow.camera.right=12,x.shadow.camera.top=12,x.shadow.camera.bottom=-12,x.shadow.normalBias=.025,x.shadow.bias=-15e-5,x.shadow.radius=4,x.shadow.camera.far=50,u.add(x);const S=new od(14084351,.7);S.position.set(8,6,-6),u.add(S);const _=new kg({opacity:0}),p=new At(new rn(80,80),_);p.rotation.x=-Math.PI/2,p.position.y=-.27,p.receiveShadow=!0,u.add(p);const R={stone:15130055,light:15854039,trim:13220512,wood:11041102,dark:5007457,soil:7237712,leaf:8493395,leafLight:10926448,leafDark:5141841,grass:10663810,flower:15185763,coral:13533797,glass:10996417,ochre:15185763,terracotta:13533797,sandstone:14198908,sandstoneDark:12158297,signGreen:6265710},A=new Map,E=[],F=["leaf","leafLight","leafDark","grass","flower","coral"],P=new We,D=(c,g=0)=>{const w=Math.sin(c*127.1+g*311.7)*43758.5453;return w-Math.floor(w)};function L(c,g,w,U,O,z=[0,0,0],W=!0){P.position.set(g,w,U),P.rotation.set(...z),P.scale.set(1,1,1),P.updateMatrix(),c.applyMatrix4(P.matrix),W&&E.push(new nc(c,26));const nt=c.index?c.toNonIndexed():c;nt!==c&&c.dispose(),A.has(O)||A.set(O,[]),A.get(O).push(nt)}function v(c,g,w,U,O,z,W="stone",nt=!0){L(new pe(U,O,z),c,g,w,W,[0,0,0],nt)}function M(c,g,w,U,O,z="stone",W=U,nt=!0){L(new an(W,U,O,12),c,g,w,z,[0,0,0],nt)}function I(c,g,w,U="wood",O=!0){const z=g.clone().sub(c),W=new an(w*.68,w,z.length(),7);W.applyQuaternion(new Ps().setFromUnitVectors(new b(0,1,0),z.normalize()));const nt=c.clone().add(g).multiplyScalar(.5);L(W,nt.x,nt.y,nt.z,U,[0,0,0],O)}function V(c,g,w,U,O="x"){const z=Math.ceil(U/.5);for(let W=0;W<=z;W++){const nt=-U/2+U*W/z;v(c+(O==="x"?nt:0),g+.28,w+(O==="z"?nt:0),.035,.55,.035,"dark")}v(c,g+.56,w,O==="x"?U:.045,.045,O==="z"?U:.045,"wood")}function X(c,g,w,U,O){v(c,g+.13,w,U,.26,O,"light"),v(c,g+.27,w,U-.1,.035,O-.1,"soil",!1);for(let z=0;z<Math.ceil(U*O*11);z++){const W=c+(Zt()-.5)*(U-.14),nt=w+(Zt()-.5)*(O-.14);L(new on(.1+Zt()*.12,0),W,g+.34+Zt()*.09,nt,Zt()>.5?"leaf":"leafLight",[Zt(),Zt(),0],!1)}}function $(c,g,w,U){I(new b(c,g,w),new b(c+.05*U,g+U*1.05,w),U*.055);for(let O=0;O<5;O++){const z=O*2.4,W=Math.cos(z)*U*.35,nt=Math.sin(z)*U*.35;I(new b(c,g+U*.55,w),new b(c+W,g+U*(1.02+O*.04),w+nt),U*.023)}for(let O=0;O<14;O++){const z=O*2.4,W=U*(.12+Zt()*.38),nt=c+Math.cos(z)*W,st=w+Math.sin(z)*W,Et=g+U*(1.02+Zt()*.43),Gt=new on(U*(.25+Zt()*.16),l?0:1);Gt.scale(1,.75+Zt()*.35,1),L(Gt,nt,Et,st,["leaf","leafLight","leafDark"][O%3],[Zt(),Zt(),Zt()],!1)}for(let O=0;O<3;O++){const z=[];for(let Et=0;Et<=30;Et++){const Gt=Et/30*Math.PI*2,Yt=U*(.47+Math.sin(Gt*7+O)*.03);z.push(new b(c+Math.cos(Gt)*Yt,g+U*1.2+Math.sin(Gt)*Yt*(O===2?.5:1),w+(O-1)*U*.18))}const W=new we().setFromPoints(z),nt=W.getAttribute("position"),st=[];for(let Et=0;Et<nt.count-1;Et++)st.push(nt.getX(Et),nt.getY(Et),nt.getZ(Et),nt.getX(Et+1),nt.getY(Et+1),nt.getZ(Et+1));E.push(new we().setAttribute("position",new ce(st,3))),W.dispose()}}function tt(c,g,w,U,O,z,W=0){const nt=new ps,st=U/2;nt.moveTo(-st,0),nt.lineTo(-st,O-st),nt.absarc(0,O-st,st,Math.PI,0,!0),nt.lineTo(st,0),nt.lineTo(st-.18,0),nt.lineTo(st-.18,O-st),nt.absarc(0,O-st,st-.18,0,Math.PI,!1),nt.lineTo(-st+.18,0),nt.closePath(),L(new Sr(nt,{depth:z,bevelEnabled:!1,curveSegments:12}),c,g,w,"light",[0,W,0])}function j(c,g,w,U,O,z=1){for(let W=0;W<O;W++)v(c,g+W*.13,w-W*.22*z,U,.14,.26,"light")}await a("terraces"),v(0,-.03,0,10.8,.38,8.7,"stone"),v(-3.85,.23,.2,3.2,.28,5.3,"light"),v(3.5,.32,-.3,3.2,.46,5.2,"light"),v(.05,.24,-2.1,3.2,.46,3.9,"light"),v(.4,.25,3.05,4.9,.42,1.8,"light");for(let c=-5;c<5.3;c+=.44)v(c,.172,4.3,.025,.014,.18,"trim",!1);const ht=[[-5.4,5.4,-4.35,4.35,.16],[-5.45,-2.25,-2.45,2.85,.37],[1.9,5.1,-2.9,2.3,.55],[-1.55,1.65,-4.05,-.15,.47],[-2.05,2.85,2.15,3.95,.46]],Z=(c,g)=>Math.max(...ht.filter(([w,U,O,z])=>c>=w&&c<=U&&g>=O&&g<=z).map(w=>w[4]));v(.01,.315,1.965,1.25,.31,3.93,"light"),v(-1.7075,.315,2.61,2.185,.31,.8,"light"),v(.675,.355,1.965,.08,.39,4.01,"stone"),v(-.655,.355,1.065,.08,.39,2.21,"stone"),v(-.655,.355,3.51,.08,.39,.92,"stone");for(const c of[-.04,3.97])v(.01,.355,c,1.41,.39,.08,"stone");for(const c of[2.17,3.05])v(-1.7475,.355,c,2.185,.39,.08,"stone");v(-2.84,.355,2.61,.08,.39,.96,"stone");for(const c of[2.37,2.61,2.85])v(-1.9,.5,c,.22,.06,.18,"light");for(const c of[-1.13,1.13])for(const g of[-2.9,-.7])v(c,1.57,g,.3,2.55,.3,"stone");for(const c of[-.74,.74])tt(c,.36,-.5,1.38,2.55,.18);v(0,2.92,-1.8,3.1,.26,3.1,"light"),v(.13,3.14,-1.86,2.85,.13,2.85,"trim");for(const c of[-.92,1.02])for(const g of[-2.75,-1.05])v(c,4.05,g,.2,1.9,.2,"stone");v(.08,5.04,-1.9,2.75,.23,2.65,"light"),v(.08,3.95,-2.85,1.8,1.8,.13,"stone"),v(-.78,.75,-.42,.4,.04,.5,"wood");for(const c of[-.95,-.61])for(const g of[-.64,-.2])v(c,.6,g,.03,.27,.03,"wood");if(v(-.78,.78,-.47,.36,.02,.36,"light"),!l){for(let c=0;c<4;c++)for(let g=0;g<4;g++)(c+g)%2&&v(-.915+c*.09,.792,-.605+g*.09,.09,.006,.09,"dark",!1);for(const[c,g,w]of[[-.87,-.56,"ochre"],[-.69,-.56,"ochre"],[-.78,-.38,"terracotta"],[-.69,-.38,"terracotta"]])M(c,.815,g,.026,.045,w);L(new pe(.045,.045,.045),-.88,.792,-.23,"light",[0,.4,0]),L(new pe(.045,.045,.045),-.74,.792,-.22,"light",[0,-.3,0])}v(.08,4.12,-2.77,1.4,.8,.02,"dark");for(const c of[3.7,4.54])v(.08,c,-2.76,1.5,.05,.04,"wood");for(const c of[-.65,.81])v(c,4.12,-2.76,.05,.89,.04,"wood");v(.25,3.63,-2.42,.72,.04,.34,"wood");for(const c of[-.08,.58])v(c,3.41,-2.42,.03,.4,.3,"dark");if(!l){for(let c=0;c<5;c++)L(new pe(.17,.007,.23),.42,3.655+c*.008,-2.42,"light",[0,(D(c,9)-.5)*.35,0],c===4);M(.02,3.66,-2.5,.05,.02,"dark"),I(new b(.02,3.66,-2.5),new b(.06,3.92,-2.45),.012,"dark"),M(.08,3.9,-2.42,.1,.09,"ochre",.04)}const mt=6.02,Lt=[-1.15,.05,1.25],Ot=[-3.1,-1.62];X(.06,5.19,-2.86,2.4,.34);for(const c of Lt)for(const g of Ot)if(M(c,(5.16+mt)/2,g,.042,mt-5.16,"stone",.036),!l){for(let w=0;w<2;w++){let U=new b(c+.05,5.17,g);for(let O=1;O<=14;O++){const z=O*.62+w*Math.PI+c*2+g,W=.05+Math.sin(O*1.3+w)*.012,nt=new b(c+Math.cos(z)*W,5.17+O/14*(mt-5.1),g+Math.sin(z)*W);I(U,nt,.021-O*7e-4,"wood",!1),U=nt}}for(let w=0;w<3;w++){const U=w*2.1+c+g*1.7;I(new b(c,mt+.1,g),new b(Xi.clamp(c+Math.cos(U)*.4,-1.2,1.3),mt+.17,Xi.clamp(g+Math.sin(U)*.4,-3.15,-1.62)),.013,"wood",!1)}}for(const c of Ot)v(.05,mt+.04,c,2.68,.07,.06,"trim");for(let c=0;c<13;c++)v(-1.2+c*.205,mt+.1,-2.36,.035,.05,1.86,"trim");for(const c of[-2.85,-2.36,-1.87])v(.05,mt+.14,c,2.7,.025,.03,"trim",!1);for(let c=0;c<(l?80:230);c++){const g=-1.28+D(c,1)*2.68,w=-3.22+D(c,2)*1.62;L(new on((.07+D(c,3)*.07)*(l?1.6:1),0).scale(1,.5,1),g,mt+.17+D(c,4)*.05,w,["leafLight","leaf","leafLight","leafDark"][c%4],[0,D(c,6)*3,(D(c,5)-.5)*.4],!1)}for(let c=0;c<(l?0:22);c++){const g=c<14,w=g?-1.2+c*.185+(D(c,11)-.5)*.1:1.33,U=g?-1.6:-3+(c-14)*.2,O=1+Math.floor(D(c,12)*4);for(let z=0;z<O;z++)L(new on(.05-z*.006,0).scale(1,.8,1),w+Math.sin(z*1.7+c)*.02,mt+.05-z*.075,U+Math.cos(z+c)*.02,z%2?"leaf":"leafLight",[z,c,0],!1)}for(let c=0;c<(l?0:10);c++){const g=.12+D(c,9)*.08;L(new En(.03,g,5).rotateX(Math.PI),-1+D(c,7)*2.1,mt+.07-g/2,-3+D(c,8)*1.3,c%3?"coral":"flower",[0,D(c,10)*3,0],!1)}function te(c,g,w,U){const O=Math.cos(w),z=Math.sin(w);for(const[W,nt,st,Et,Gt,Yt,Te]of U)L(new pe(W,nt,st),c+Et*O+Yt*z,5.16+Gt,g-Et*z+Yt*O,Te,[0,w,0],Te==="wood")}const Qt={x:-.45,z:-2.05},de={x:.45,z:-1,yaw:-.6};te(Qt.x,Qt.z,0,[[.92,.14,.34,0,.1,0,"wood"],[.42,.06,.28,-.215,.2,.02,"light"],[.42,.06,.28,.215,.2,.02,"light"],[.92,.26,.06,0,.28,-.15,"wood"],[.4,.17,.06,-.215,.31,-.105,"light"],[.4,.17,.06,.215,.31,-.105,"light"],[.06,.12,.34,-.46,.24,0,"wood"],[.06,.12,.34,.46,.24,0,"wood"]]),te(de.x,de.z,de.yaw,[[.36,.14,.34,0,.1,0,"wood"],[.28,.06,.28,0,.2,.02,"light"],[.36,.26,.06,0,.28,-.15,"wood"],[.28,.17,.06,0,.31,-.105,"light"],[.05,.12,.34,-.155,.24,0,"wood"],[.05,.12,.34,.155,.24,0,"wood"]]);const ae={x:-.3,z:-.88};v(ae.x,5.32,ae.z,.42,.035,.27,"wood");for(const c of[-.17,.17])for(const g of[-.1,.1])v(ae.x+c,5.235,ae.z+g,.035,.15,.035,"wood");function it(c,g,w){const U=w*1.3;M(c,5.16+U/2,g,w*.75,U,"terracotta",w);for(let O=0;O<(l?3:6);O++){const z=O*2.4+c*5;L(new on(w*(.5+D(O,c+g)*.25),0),c+Math.cos(z)*w*.45,5.16+U+w*.35+D(O,g)*w*.3,g+Math.sin(z)*w*.45,O%2?"leaf":"leafLight",[z,O,0],!1),L(new on(w*.28,0),c+Math.cos(z+1)*w*.6,5.16+U+w*.75+D(O,c)*w*.25,g+Math.sin(z+1)*w*.6,O%3?"coral":"flower",[0,0,0],!1)}}const ut=[[-.95,-1.45,.09],[.25,-1.45,.08],[1.05,-1.48,.085]];if(ut.forEach(([c,g,w])=>it(c,g,w)),it(-1.12,-.78,.11),it(1.2,-2.6,.1),it(ae.x+.08,ae.z,.045),!l){for(const c of[-1.6,-.66])I(new b(1.32,5.16,c),new b(1.32,5.82,c),.022,"dark"),v(1.32,5.8,c,.03,.03,.16,"wood");I(new b(1.32,5.79,-1.6),new b(1.32,5.79,-.66),.006,"light",!1),M(1,5.22,-.72,.13,.12,"wood",.15),M(1,5.285,-.72,.12,.012,"light",.12,!1),I(new b(Qt.x,mt,-1.62),new b(Qt.x,5.8,-1.62),.005,"dark",!1),M(Qt.x,5.795,-1.62,.012,.03,"dark",.045),M(Qt.x,5.72,-1.62,.032,.12,"glass",.032),M(Qt.x,5.65,-1.62,.045,.02,"dark")}V(-.91,3.12,-.46,.58),V(1.02,3.12,-.46,.76),M(.01,3.27,-1.95,.2,.13,"light");for(const c of[-.18,.2])v(c,3.23,-1.09,.04,.05,1.32,"light");X(-1.19,3.15,-1.65,.42,1.7),X(1.26,3.15,-2.25,.4,.5),X(1.3,3.15,-.85,.32,.5),await a("observatory");const wt=-3.55,Dt=.2;M(wt,.62,Dt,1.47,.2,"light"),L(new Er(1.25,.15,5,52),wt,2.42,Dt,"light",[Math.PI/2,0,0]);for(let c=0;c<10;c++){const g=c/10*Math.PI*2,w=wt+Math.cos(g)*1.25,U=Dt+Math.sin(g)*1.25;M(w,1.5,U,.09,1.8,"stone")}M(wt,.81,Dt,1.09,.13,"dark"),M(wt,.9,Dt,.87,.1,"glass");const Nt=1.53,re=.36,ye=.56;M(wt,1.06,Dt,.44,.22,"light"),M(wt,1.195,Dt,.42,.05,"wood"),M(wt,Nt,Dt,re-.07,ye,"dark");for(const c of[Nt-.295,Nt+.295])M(wt,c,Dt,re+.02,.03,"dark");M(wt,Nt+.335,Dt,.07,.05,"ochre",.05);const N=2,at=.48,rt=new b(wt+Math.sin(N)*(re+at),Nt-.06,Dt+Math.cos(N)*(re+at));v(rt.x,(.95+rt.y)/2,rt.z,.05,rt.y-.95,.05,"dark"),v(rt.x,rt.y,rt.z,.07,.07,.07,"ochre");const et=new b(-3.2,1.03,.8);v(et.x,et.y,et.z,.26,.16,.2,"dark"),v(et.x,1.07,et.z+.102,.18,.025,.006,"glass",!1);const K=new b(-2.92,1.52,1.07),St=[new b(wt+.22,.97,Dt+.37),new b(et.x-.05,.97,et.z-.1),new b(et.x+.13,.97,et.z+.02),new b(-2.97,.9,1),new b(K.x,.9,K.z)];for(let c=0;c<St.length-1;c++)I(St[c],St[c+1],.016,"dark",!1);v(K.x,1.1,K.z,.05,.44,.05,"dark");const ft=1.2;L(new pe(.5,.14,.07),K.x,ft,K.z,"dark",[0,.75,0]),L(new pe(.22,.05,.02).translate(0,0,.025),K.x,ft-.1,K.z,"light",[0,.75,0]),L(new an(.2,.2,.035,24).rotateX(Math.PI/2).rotateY(.75),K.x,K.y,K.z,"light");for(let c=0;c<(l?0:7);c++){const g=-Math.PI/2+c/6*Math.PI;L(new pe(.012,c%3?.035:.055,.008).rotateZ(-g).translate(Math.sin(g)*.15,Math.cos(g)*.15,.021).rotateY(.75),K.x,K.y,K.z,"dark",[0,0,0],!1)}for(const[c,g]of l?[]:[[-3.52,.86],[-3.78,.7]])v(c,1.01,g,.025,.12,.025,"dark"),L(new pe(.17,.11,.015),c,1.12,g,"dark",[0,.75,0]),L(new rn(.14,.085),c+Math.sin(.75)*.009,1.12,g+Math.cos(.75)*.009,"glass",[0,.75,0],!1),I(new b(et.x-.13,.97,et.z),new b(c,.97,g),.01,"dark",!1);$(-4.4,Z(-4.4,-1.9),-1.9,.8),X(-5,Z(-5,1.7),1.7,.55,1.1),j(-3.55,.3,2.24,1.3,4),await a("reading-room"),v(3.33,.73,-.75,2.6,.28,3.3,"trim");const yt=2.84,ee=Math.tan(.09),Jt=1.69,C=c=>yt+Math.abs(c)*ee,y=c=>C(c)+.07,G=c=>y(c)+.04+.2*(1-(1-Math.min(c/.6,1))**2);function J(c,g,w,U,O=!0){const z=new ps(c.map(([W,nt])=>new dt(W,nt)));L(new Sr(z,{depth:g,bevelEnabled:!1}).translate(0,0,-g/2),w,0,-.75,U,[0,-Math.PI/2,0],O)}const ct=(c,g,w,U=16)=>Array.from({length:U+1},(O,z)=>{const W=c+(g-c)*z/U;return[W,w(Math.abs(W))]});for(const c of[-1,1]){J([[0,yt],[c*1.75,C(1.75)],[c*1.75,C(1.75)+.07],[0,yt+.07]],2.9,3.33,"terracotta"),J([...ct(0,c*Jt,y,1),...ct(c*Jt,0,G)],2.76,3.33,"light");const g=(w,U)=>E.push(new we().setAttribute("position",new ce([...w.toArray(),...U.toArray()],3)));g(new b(1.95,G(.6),-.75+c*.6),new b(4.71,G(.6),-.75+c*.6));for(let w=0;w<(l?0:21);w++){if(D(w,c+20)<.12)continue;const U=.5+D(w,c+21)*.3,O=.72+U/2,z=2.13+w*.12;g(new b(z,G(.72)+.007,-.75+c*.72),new b(z,G(.72+U)+.007,-.75+c*(.72+U))),L(new pe(.024,.006,U),z,G(O)+.004,-.75+c*O,"dark",[-c*.09,0,0],!1)}}L(new an(.08,.08,2.9,12).rotateZ(Math.PI/2),3.33,yt+.02,-.75,"terracotta");const Q=G(Jt);J([...ct(.04,Jt,c=>G(c)+.002),[1.756,Q+.002],[1.756,Q+.01],...ct(Jt,.04,c=>G(c)+.01)],.06,3.87,"ochre",!1),v(3.87,Q-.17,1.01,.06,.36,.008,"ochre",!1);for(const c of[2.18,4.48])for(const g of[-2.18,.62]){const w=C(g+.75);v(c,(.7+w)/2,g,.22,w-.7,.22,"stone")}const kt=C(1.45);v(3.33,(.75+kt)/2,-2.2,2.5,kt-.75,.17,"stone");for(const c of[.92,2.47])v(3.33,c,-1.985,2.34,.05,.26,"wood");for(let c=0,g=2.2;g<4.38;c++){const w=Math.min(.11+D(c)*.1,4.44-g),U=1+D(c,1)*.47,O=.17+D(c,2)*.07;v(g+w/2,.945+U/2,-2.115+O/2,w,U,O,["wood","trim","dark"][c%3]),g+=w+.012}v(4.39,1.78,-.78,.04,1.82,2.54,"stone");for(const c of[-2.04,.48])v(4.515,1.78,c,.25,1.82,.04,"wood");for(const c of[.9,1.79,2.67])v(4.515,c,-.78,.25,.04,2.5,"wood");for(const[c,g]of[[0,.92],[1,1.81]])for(let w=0,U=-2.02;U<.42;w++){const O=w+c*50;if(D(O,8)>.9){U+=.1;continue}const z=Math.min(.07+D(O,5)*.08,.46-U),W=.5+D(O,6)*.3,nt=.17+D(O,7)*.05;v(4.62-nt/2,g+W/2,U+z/2,nt,W,z,["wood","trim","dark","terracotta","light","ochre"][w%6]),U+=z+.008}v(3.25,1.36,.05,1.7,.1,.7,"wood");for(const c of[2.7,3.8])v(c,1.03,.05,.07,.65,.55,"dark");v(3.25,1.43,-.03,.14,.04,.11,"dark"),L(new pe(.15,.28,.022),3.25,1.58,-.07,"dark",[-.22,0,0]),L(new rn(.12,.24),3.25,1.58+.013*Math.sin(.22),-.07+.013*Math.cos(.22),"glass",[-.22,0,0],!1);for(const[c,g]of[[2.8,"ochre"],[3.7,"terracotta"]])M(c,1.43,.02,.07,.04,"dark"),L(new je(.075,14,10).scale(1,.85,1),c,1.5,.02,g,[0,0,0],!1);const xt=3.96,zt=.1;if(v(xt,1.42,zt,.25,.014,.17,"dark"),L(new pe(.25,.16,.01),xt,1.5,zt-.1,"dark",[-.2,0,0]),L(new rn(.22,.13),xt,1.5+.006*Math.sin(.2),zt-.1+.006*Math.cos(.2),"glass",[-.2,0,0],!1),!l)for(let c=0;c<9;c++){const g=.02+.07*Math.abs(Math.sin(c*1.7+.4));L(new rn(.012,g),xt-.088+c*.022,1.5+.008*Math.sin(.2),zt-.1+.008*Math.cos(.2),"ochre",[-.2,0,0],!1)}j(3.35,.34,1.6,1.8,4),await a("greenhouse"),v(-1.9,.65,-.3,.8,.14,.6,"wood");for(let c=0;c<8;c++)v(-2.25+c*.1,.74,-.3,.065,.04,.58,"light");V(-1.9,.74,-.62,.8),V(-1.9,.74,.02,.8);for(const c of[-.55,-.05])v(-1.6,.37,c,.06,.42,.06,"dark");v(1.82,3.15,-1.6,.74,.12,.62,"wood"),V(1.82,3.2,-1.93,.74),V(1.82,3.2,-1.28,.74),v(2.02,.585,3.11,1.75,.25,1.8,"light");for(const c of[1.26,2.78])for(const g of[2.34,3.88])v(c,1.28,g,.045,1.2,.045,"dark");for(const c of[2.34,3.88])I(new b(1.26,1.9,c),new b(2.02,2.47,c),.035,"dark"),I(new b(2.78,1.9,c),new b(2.02,2.47,c),.035,"dark");v(2.02,2.47,3.11,.055,.05,1.6,"dark");for(const c of[1.26,2.78])v(c,1.91,3.11,.04,.04,1.6,"dark"),v(c,1.2,3.11,.025,.025,1.6,"dark");X(1.55,.72,3.12,.43,1.28),v(2.43,1.1,3.12,.46,.04,1.3,"wood");for(const c of[2.24,2.62])for(const g of[2.52,3.72])v(c,.895,g,.035,.37,.035,"dark");for(const c of[2.72,3.12]){v(2.43,1.145,c,.34,.05,.34,"dark");for(let g=0;g<(l?0:3);g++)for(let w=0;w<3;w++)L(new En(.02,.07,4),2.33+g*.1,1.2,c-.1+w*.1,"grass",[0,D(g*3+w,c)*3,0],!1)}M(2.43,1.195,3.5,.065,.15,"trim"),I(new b(2.48,1.17,3.5),new b(2.62,1.3,3.5),.015,"trim"),L(new Er(.05,.009,4,12,Math.PI),2.4,1.27,3.5,"trim"),l||["light","ochre","terracotta","light"].forEach((c,g)=>L(new pe(.07,.1,.012),2.28+g*.1,1.17,3.72,c,[-.12,0,0])),v(3.05,.47,3.95,.05,.62,.05,"dark"),v(3.05,.88,3.95,.26,.2,.2,"terracotta"),L(new an(.1,.1,.26,14).rotateZ(Math.PI/2),3.05,.98,3.95,"terracotta"),v(3.05,.93,4.052,.13,.016,.006,"dark",!1);const Ht=new rn(.95,1.54);L(Ht,1.64,2.185,3.11,"glass",[-Math.PI/2,0,-.643],!1),L(new rn(.95,1.54),2.4,2.185,3.11,"glass",[-Math.PI/2,0,.643],!1),await a("planting"),[[-4.45,3.25,1.15],[-2.95,3.5,.75],[-1.66,3.5,1],[4.4,1.72,1.1],[4.62,3.42,.83],[-1.08,1.73,.9],[-3.5,-3.4,.83],[2.08,-3.53,.8]].forEach(([c,g,w])=>{const U=Z(c,g);X(c,U,g,.75,.72),$(c,U+.29,g,w)});for(const[c,g,w,U]of[[.22,-3.85,2.4,.37],[4.7,-2.65,.4,.45],[-5.1,-.95,.42,.9],[1.2,1.45,.6,.7]])X(c,Z(c,g),g,w,U);const Pt=(c,g)=>Math.hypot(c-wt,g-Dt)<1.6||[[-.85,.87,-.3,4.15],[-3.05,-.6,2,3.25],[2,4.7,-2.45,.95],[2.4,4.3,.8,1.75],[1.1,2.95,2.15,4.05],[-4.25,-2.85,1.45,2.4]].some(([w,U,O,z])=>c>w&&c<U&&g>O&&g<z);for(let c=0;c<90;c++){const g=(Zt()-.5)*10,w=(Zt()-.5)*8;if(Math.abs(g)<1.25||Math.abs(w)<.8||Pt(g,w)||l&&c%2)continue;const U=Z(g,w)+.1;L(new En(.05,.22,4),g,U,w,"grass",[0,Zt()*4,.2],!1),c%3===0&&L(new on(.065,0),g,U+.15,w,c%2?"flower":"coral",[0,0,0],!1)}v(-.98,.92,3.525,.3,.07,.75,"wood");for(const c of[3.25,3.8])v(-.98,.68,c,.24,.48,.05,"dark");M(4.36,1.4,.75,.027,1.6,"dark"),M(4.36,2.21,.75,.13,.19,"flower"),await a("mansourah");const Mt=6.7,Ut=-2.975;v(Mt,-.03,Ut,2.2,.38,2.75,"stone"),v(5.5,.13,Ut+.6,.3,.06,.46,"light");const Tt=(c,g,w,U)=>{const O=w*1.25,z=O-w,W=.3,nt=Math.acos(-z/O),st=O*Math.cos(W)-z,Et=[];for(let Gt=0;Gt<=8;Gt++){const Yt=Math.PI+W-Gt/8*(Math.PI+W-nt);Et.push([z+O*Math.cos(Yt),U+O*Math.sin(Yt)])}return[[-st,0],...Et,...Et.reverse().map(([Gt,Yt])=>[-Gt,Yt]),[st,0]].map(([Gt,Yt])=>new dt(c+Gt,g+Yt))},$t=Mt+.2,B=Ut+.05,lt=.16,vt=4,It=B+.5,pt=new ps([new dt(-.36,0),...Tt(0,0,.24,.95),new dt(.36,0),new dt(.36,vt-.1),new dt(.2,vt),new dt(.02,vt-.06),new dt(-.18,vt+.03),new dt(-.36,vt-.05)]);for(const c of[-.15,0,.15])pt.holes.push(new Po(Tt(c,1.66,.055,.18)));for(const c of[-.11,.11])pt.holes.push(new Po(Tt(c,2.42,.07,.22)));L(new Sr(pt,{depth:.14,bevelEnabled:!1}),$t,lt,It-.14,"sandstone"),[[[.86,0],[.86,.45],[.7,.62],[.62,1.3],[.68,1.5],[.55,2.1],[.5,2.8],[.42,3.1],[.4,3.6],[.3,vt-.05],[0,vt-.1]],[[.8,0],[.8,.7],[.66,.9],[.66,1.6],[.52,1.9],[.56,2.5],[.44,3],[.38,3.5],[.26,vt-.08],[0,vt-.05]]].forEach((c,g)=>{const w=new ps([[0,0],...c].map(([U,O])=>new dt(U,O)));for(const U of[1.7,2.7])w.holes.push(new Po(Tt(.25,U,.06,.2)));L(new Sr(w,{depth:.14,bevelEnabled:!1}),g?$t-.5:$t+.36,lt,It,"sandstone",[0,Math.PI/2,0])}),v($t,lt+.14,B-.43,.72,.28,.14,"sandstone"),v($t-.25,lt+.25,B-.43,.22,.5,.14,"sandstone");const Ft=(c,g,w,U,O=.025)=>v($t+c,lt+g,It+O/2,w,U,O,"sandstoneDark");for(const c of[-.33,.33])Ft(c,.71,.045,1.42);Ft(0,1.42,.7,.045),Ft(0,1.52,.72,.06,.05),Ft(0,1.63,.5,.04,.12);for(const c of[-.29,.29])Ft(c,2.94,.04,1.24);for(const c of[2.32,3.56])Ft(0,c,.62,.04);for(let c=0;c<(l?0:5);c++)for(let g=0;g<4+c%2;g++)L(new pe(.08,.08,.02),$t-.18-c%2*.06+g*.12,lt+2.84+c*.14,It+.01,"sandstoneDark",[0,0,Math.PI/4],!1);for(let c=0;c<(l?0:9);c++)v($t-.32+c*.08,lt+3.76,It+.008,.07,.09,.016,c%2?"light":"dark",!1);v(Mt+.05,lt+.2,Ut-1.15,1.9,.4,.16,"sandstoneDark"),v(Mt-.8,lt+.32,Ut-1.1,.36,.64,.36,"sandstoneDark");for(let c=0;c<8;c++)c!==4&&c!==5&&v(Mt-.6+c*.22,lt+.46,Ut-1.15,.1,.12,.16,"sandstoneDark");for(const[c,g,w]of[[.75,-.55,.16],[-.25,-.6,.13],[.9,.4,.12],[-.45,-.25,.1]])L(new pe(w*1.4,w,w),Mt+c,lt+w/2,Ut+g,"sandstone",[0,D(c,g)*3,0]);const Kt=new b(Mt-.7,lt,Ut+.6);I(Kt,Kt.clone().add(new b(.07,.6,-.04)),.07),I(Kt.clone().add(new b(.04,.35,0)),Kt.clone().add(new b(-.2,.7,.1)),.035);for(let c=0;c<7;c++){const g=c*2.4,w=.12+D(c,7)*.2,U=new on(.17+D(c,8)*.08,l?0:1);U.scale(1,.7,1),L(U,Kt.x+Math.cos(g)*w,Kt.y+.72+D(c,9)*.22,Kt.z+Math.sin(g)*w,c%2?"leaf":"leafDark",[D(c,10),D(c,11),0],!1)}for(let c=0;c<(l?4:10);c++)L(new En(.05,.22,4),Mt-1+D(c,12)*2,lt+.1,Ut-.75+D(c,13)*1.6,"grass",[0,D(c,14)*4,.2],!1);await a("building-site");const se=Ut+2.95,he=.22;v(Mt,-.03,se,2.2,.38,2.75,"stone"),v(Mt,-.03,se+2.95,2.2,.38,2.75,"stone"),v(Mt-.5,.13,Ut+1.475,.46,.06,.3,"light"),v(Mt-.5,.13,se+1.475,.46,.06,.3,"light"),v(5.5,.13,se+.6,.3,.06,.46,"light"),v(Mt-.05,.19,se,1.5,.06,1.42,"trim");const bn=.12,_n=.24,Qi=(c,g,w,U,O)=>{for(let z=0;z<Math.max(...O);z++)for(let W=z%2?-_n/2:0;W<U;W+=_n){const nt=Math.max(W,0),st=Math.min(W+_n,U);if(z>=O[Math.floor((nt+st)/2/_n)])continue;const Et=(nt+st)/2;v(w==="x"?c+Et:c,he+bn*(z+.5),w==="z"?g+Et:g,w==="x"?st-nt:.14,bn,w==="z"?st-nt:.14,"light")}},In=Mt-.7,Ri=Mt+.6,vn=se-.6,Qn=se+.6;Qi(In,vn,"x",Ri-In,[9,9,8,8,7,6]),Qi(In,vn+.07,"z",Qn-vn-.07,[9,8,7,5,4]),Qi(Ri,vn+.07,"z",Qn-vn-.07,[7,6,4,3,2]),Qi(In,Qn,"x",Ri-In,[3,2,0,0,2,1]);const kn=Ri+.2;for(const c of[vn,se,Qn])for(const g of[kn-.08,kn+.08])I(new b(g,.16,c),new b(g,1.5,c),.014);for(const c of[.62,1.12]){v(kn,c,se,.24,.025,Qn-vn+.05,"wood");for(const g of[kn-.08,kn+.08])v(g,c+.3,se,.018,.018,Qn-vn,"dark")}I(new b(kn+.08,.2,vn),new b(kn+.08,1.1,Qn),.01,"dark");const sn=Mt-.88,ve=se-.85,Ye=3.1,cn=.08;v(sn,.21,ve,.3,.1,.3,"trim");for(const c of[-cn,cn])for(const g of[-cn,cn])I(new b(sn+c,.26,ve+g),new b(sn+c,Ye,ve+g),.016,"ochre");for(let c=.26,g=1;!l&&c<Ye-.1;c+=.28,g=-g)I(new b(sn-g*cn,c,ve+cn),new b(sn+g*cn,c+.28,ve+cn),.008,"ochre",!1),I(new b(sn+cn,c,ve-g*cn),new b(sn+cn,c+.28,ve+g*cn),.008,"ochre",!1);v(sn,Ye+.07,ve+cn+.08,.16,.14,.14,"light");const Ds=Mt+.55,Is=sn-.55;for(const c of[-.06,.06])I(new b(Is,Ye,ve+c),new b(Ds,Ye,ve+c),.014,"ochre");I(new b(sn+.05,Ye+.2,ve),new b(Ds-.2,Ye+.05,ve),.012,"ochre");for(let c=0;c<(l?0:8);c++){const g=sn+.05+c*.17,w=c/8;I(new b(g,Ye,ve),new b(g+.085,Ye+.2-w*.15,ve),.007,"ochre",!1)}I(new b(sn,Ye,ve),new b(sn,Ye+.6,ve),.016,"ochre");for(const c of[Ds-.1,Is+.05])I(new b(sn,Ye+.6,ve),new b(c,Ye+.03,ve),.005,"dark",!1);v(Is+.12,Ye-.05,ve,.2,.22,.2,"trim");const ti=Mt+.1;v(ti,Ye-.03,ve,.1,.05,.16,"dark"),I(new b(ti,Ye-.05,ve),new b(ti,1.95,ve),.004,"dark",!1),v(ti,1.9,ve,.06,.08,.06,"dark");for(const c of[-.12,.12])I(new b(ti,1.86,ve),new b(ti+c,1.7,ve),.004,"dark",!1);v(ti,1.68,ve,.3,.03,.26,"wood"),v(ti,1.76,ve,.26,.13,.22,"light"),v(Mt-.65,.18,se+1,.36,.04,.3,"wood");for(let c=0;c<2;c++)for(let g=0;g<2;g++)v(Mt-.65,.26+c*bn,se+.93+g*.15,.32,bn,.14,"light");L(new En(.3,.26,10),Mt+.55,.29,se+.98,"trim");for(const c of[Mt-.25,Mt+.15])v(c,.36,se+1.25,.03,.4,.03,"dark");for(let c=0;c<(l?0:6);c++)v(Mt-.29+c*.08+.04,.48,se+1.25,.08,.07,.025,c%2?"dark":"ochre",!1);const Fe=he+.42,Ie=vn+.3;v(Mt-.05,Fe,Ie,1.1,.05,.36,"wood");for(const c of[Mt-.55,Mt+.45])for(const g of[Ie-.13,Ie+.13])v(c,(he+Fe)/2,g,.04,Fe-he,.04,"dark");if(v(Mt-.05,he+.12,Ie,1,.025,.3,"wood",!1),v(Mt-.05,Fe+.36,vn+.085,.95,.42,.025,"wood"),!l)for(const[c,g]of[[-.35,.18],[-.22,.12],[.12,.2],[.3,.14]])v(Mt-.05+c,Fe+.42-g/2,vn+.105,.025,g,.02,"dark",!1);const Lr=Mt-.38;v(Lr,Fe+.04,Ie+.02,.12,.03,.1,"dark"),L(new pe(.13,.24,.018),Lr,Fe+.17,Ie-.01,"dark",[-.25,0,0]);const T=-.25,k=Ie-.01+.011*Math.cos(T),Y=Fe+.17+.011*Math.sin(-T);l?L(new rn(.11,.2),Lr,Y,k,"glass",[T,0,0],!1):["ochre","signGreen","terracotta","glass","sandstone","signGreen","terracotta","ochre","dark"].forEach((g,w)=>{const U=w%3-1,O=1-Math.floor(w/3);L(new rn(.034,.05),Lr+U*.036,Y+O*.052*Math.cos(T),k-O*.052*Math.sin(-T),g,[T,0,0],!1)});const q=Mt-.02;v(q-.08,Fe+.035,Ie+.06,.09,.015,.16,"dark"),v(q+.1,Fe+.06,Ie-.02,.1,.07,.1,"wood"),L(new En(.1,.2,12,1,!0),q+.1,Fe+.19,Ie+.02,"ochre",[.5,0,0]),I(new b(q-.04,Fe+.035,Ie+.06),new b(q+.06,Fe+.04,Ie+.01),.006,"dark",!1);const H=Mt+.3;if(v(H-.03,Fe+.05,Ie,.16,.05,.16,"terracotta"),v(H+.13,Fe+.04,Ie+.03,.07,.03,.07,"ochre"),!l)for(let c=0;c<4;c++)for(const g of[-1,1])v(H-.09+c*.04,Fe+.035,Ie+g*.09,.015,.01,.025,"light",!1);M(H+.05,Fe+.035,Ie+.13,.045,.02,"light"),v(H+.05,Fe+.06,Ie+.13,.012,.03,.012,"dark",!1),M(Mt+.05,he+.2,Ie+.45,.11,.035,"wood");for(const c of[.4,2.5,4.6])I(new b(Mt+.05,he+.19,Ie+.45),new b(Mt+.05+Math.cos(c)*.11,he,Ie+.45+Math.sin(c)*.11),.01,"dark",!1);const _t=new b(Mt+.48,Fe+.03,Ie-.1),Rt=new b(Mt+.44,Fe+.32,Ie-.05),Bt=new b(Mt+.3,Fe+.4,Ie+.02);I(_t,Rt,.008,"dark"),I(Rt,Bt,.008,"dark"),L(new En(.05,.07,10,1,!0),Bt.x,Bt.y-.02,Bt.z,"ochre",[0,0,.6]);const bt=Mt+.05,Vt=se+2.6,Wt=.16,qt=.72;v(bt,Wt+.09,Vt,.7,.18,.5,"light"),v(bt,Wt+.2,Vt,.6,.04,.4,"trim");const ne=new ps;ne.moveTo(0,0),ne.bezierCurveTo(-.05,.08,-.38,.26,-.38,.5),ne.bezierCurveTo(-.38,.68,-.24,.76,-.15,.76),ne.bezierCurveTo(-.07,.76,-.02,.71,0,.64),ne.bezierCurveTo(.02,.71,.07,.76,.15,.76),ne.bezierCurveTo(.24,.76,.38,.68,.38,.5),ne.bezierCurveTo(.38,.26,.05,.08,0,0);const Se=new Sr(ne,{depth:.12,bevelEnabled:!0,bevelThickness:.04,bevelSize:.035,bevelSegments:l?1:3,curveSegments:l?8:18});Se.translate(0,0,-.06),L(Se,bt,Wt+.25,Vt,"terracotta",[0,qt,0]);const De=Vt+.85,Ee=Wt+.38,xe=[[-.95,0],[-.55,0],[-.45,.06],[-.35,0],[-.25,0],[-.19,-.08],[-.1,.62],[-.01,-.18],[.06,0],[.22,0],[.34,.13],[.46,0],[.95,0]];for(let c=1;c<xe.length;c++){const[g,w]=xe[c-1],[U,O]=xe[c];I(new b(bt+g,Ee+w,De),new b(bt+U,Ee+O,De),.022,"signGreen",c===1),!l&&c<xe.length-1&&L(new je(.022,8,6),bt+U,Ee+O,De,"signGreen",[0,0,0],!1)}for(const c of[-.9,.9])v(bt+c,(Wt+Ee)/2,De,.05,Ee-Wt,.05,"dark");v(bt-.3,Wt+.16,Vt-.95,.6,.04,.16,"wood");for(const c of[-.55,-.05])v(bt+c,Wt+.08,Vt-.95,.04,.14,.12,"dark");M(bt+.62,Wt+.1,Vt-.85,.08,.16,"terracotta",.1),L(new on(.14,l?0:1).scale(1,1.2,1),bt+.62,Wt+.33,Vt-.85,"leaf",[0,0,0],!1),await a("geometry-batches");const Xt=[],Re=[];for(const[c,g]of A){const w=new Pn({color:R[c],roughness:.86,metalness:0,transparent:!0,opacity:0,side:c==="glass"?mn:Ai}),U=F.includes(c);U&&(w.onBeforeCompile=W=>{W.uniforms.uTime=Oe,W.uniforms.uLife=un,W.vertexShader=`uniform float uTime; uniform float uLife;
`+W.vertexShader,W.vertexShader=W.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*2.1 + position.z + uTime*.85)*.022*uLife; transformed.z += cos(position.x*1.6 + uTime*.7)*.018*uLife;`)}),await a(`merge-${c}`);const O=_r(g);g.forEach(W=>W.dispose());const z=new At(O,w);z.castShadow=c!=="glass",z.receiveShadow=!0,f.add(z),c!=="glass"&&Xt.push(z),Re.push({material:w,flora:U,glass:c==="glass",key:c})}const fe=new gs({color:7830397,transparent:!0,opacity:.26,depthWrite:!1}),en=new ls(_r(E),fe);E.forEach(c=>c.dispose()),f.add(en);const Xn=fe.clone();Xn.opacity=.06;const ln=new ls(en.geometry,Xn);ln.position.set(.019,.008,-.013),f.add(ln);const pi=new _e;f.add(pi);const Ce=new Gg({color:6917045,transparent:!0,opacity:0,dashSize:.16,gapSize:.12,depthWrite:!1});for(let c=-6;c<=6;c++)for(const g of["x","z"]){const w=g==="x"?[new b(-6,.04,c),new b(6,.04,c)]:[new b(c,.04,-5),new b(c,.04,5)],U=new dc(new we().setFromPoints(w),Ce);U.computeLineDistances(),pi.add(U)}for(const[c,g]of[[-1.55,-3.35],[1.55,-3.35],[-1.55,-.25],[1.55,-.25]]){const w=new dc(new we().setFromPoints([new b(c,0,g),new b(c,7.6,g)]),Ce);w.computeLineDistances(),pi.add(w)}const Oe={value:0},un={value:0},Ze=new wn({transparent:!0,depthWrite:!1,uniforms:{uTime:Oe,uOpacity:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float w=sin(vUv.y*92.-uTime*1.6+sin(vUv.x*24.)*1.4);float line=smoothstep(.9,1.,w);vec3 c=mix(vec3(.29,.56,.58),vec3(.70,.84,.77),vUv.x*.45+line*.4);gl_FragColor=vec4(c,uOpacity*.88);}"});function Je(c,g,w,U,O,z=!1){const W=new At(new rn(U,O),Ze);W.position.set(c,g,w),z||(W.rotation.x=-Math.PI/2),f.add(W)}Je(.01,.495,1.965,1.25,3.93),Je(-1.7075,.495,2.61,2.185,.8),Je(.01,3.213,-1.09,.34,1.32);const tr=new At(new yr(.17,20),Ze);tr.rotation.x=-Math.PI/2,tr.position.set(.01,3.34,-1.95),f.add(tr);const qn=new At(new pe(1.18,.3,.78),new Pn({color:R.light,transparent:!0,opacity:0}));qn.position.set(.01,3.06,-.04),f.add(qn),Je(.01,3.216,-.04,.96,.8);const Us={value:0},Sp=new wn({transparent:!0,side:mn,depthWrite:!1,uniforms:{uTime:Oe,uOpacity:Us},vertexShader:"uniform float uTime;varying vec2 vUv;void main(){vUv=uv;vec3 p=position;p.z+=sin(uv.y*13.+uTime*3.+uv.x*9.)*.014;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float streams=sin(vUv.x*58.+sin(vUv.y*8.+uTime*2.)*.7);float drops=sin(vUv.y*39.+uTime*5.8+sin(vUv.x*16.)*3.);float streak=smoothstep(.20,1.,streams)*.45+smoothstep(.65,1.,drops)*.22;vec3 water=mix(vec3(.27,.59,.63),vec3(.91,.98,.93),streak+pow(1.-vUv.y,7.)*.5);float edge=smoothstep(0.,.08,vUv.x)*smoothstep(0.,.08,1.-vUv.x);gl_FragColor=vec4(water,uOpacity*edge*.92);}"}),ih=new At(new rn(1.03,2.72,12,36),Sp);ih.position.set(.01,1.855,.37),f.add(ih);const Ep=new wn({transparent:!0,depthWrite:!1,uniforms:{uTime:Oe,uOpacity:Us},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float r=length((vUv-.5)*vec2(1.,1.35));float rings=smoothstep(.77,1.,sin(r*58.-uTime*3.));float fade=(1.-smoothstep(.23,.49,r));gl_FragColor=vec4(.86,.97,.92,(rings*.6+.12)*fade*uOpacity);}"}),Ec=new At(new rn(1.22,1.1),Ep);Ec.rotation.x=-Math.PI/2,Ec.position.set(.01,.505,.85),f.add(Ec);const rh=new we,sh=[];for(let c=0;c<44;c++)sh.push((Zt()-.5)*.95,Zt(),Zt());rh.setAttribute("position",new ce(sh,3));const wp=new wn({transparent:!0,depthWrite:!1,uniforms:{uTime:Oe,uOpacity:Us},vertexShader:"uniform float uTime;void main(){float t=fract(position.y+uTime*.5);vec3 p=vec3(.01+position.x*(1.+t*.25),.55+sin(t*3.14159)*.32,.39+position.z*.52+t*.25);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=2.4;}",fragmentShader:"uniform float uOpacity;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(.9,.99,.95,(1.-d*2.)*uOpacity*.8);}"});f.add(new us(rh,wp)),await a("drones");const Ho=[],Dr=[],wc=[];function er(c,g,w,U,O){c.translate(g,w,U),O.push(c.index?c.toNonIndexed():c),c.index&&c.dispose()}er(new je(.21,12,7).scale(1,.42,1.2),0,0,0,Ho),er(new pe(.12,.045,.13),0,.065,.04,Dr),er(new je(.055,8,6),0,-.02,.22,Dr);for(const c of[-.31,.31])for(const g of[-.29,.29]){const w=new pe(.4,.025,.035);w.rotateY(-Math.atan2(g,c)),er(w,c*.5,0,g*.5,Dr);const U=new Er(.15,.016,5,20);U.rotateX(Math.PI/2),er(U,c,.016,g,Ho),er(new an(.028,.028,.065,7),c,.025,g,Dr),er(new yr(.125,16).rotateX(-Math.PI/2),c,.051,g,wc)}const oh=_r(Ho),Tp=_r(Dr),bp=_r(wc);[...Ho,...Dr,...wc].forEach(c=>c.dispose());const Tc=new Pn({color:15919571,emissive:10466520,emissiveIntensity:0,roughness:.7,transparent:!0,opacity:0}),bc=new Pn({color:4811879,emissive:7311272,emissiveIntensity:0,roughness:.55,transparent:!0,opacity:0}),ah=new oi({color:7833464,side:mn,transparent:!0,opacity:0,depthWrite:!1}),Ac=new gs({color:5866413,transparent:!0,opacity:0}),Ap=new nc(oh,28),Go=new we;Go.setAttribute("position",new ce([-.42,.03,.39,.42,.03,.39,-.42,.03,-.39,.42,.03,-.39],3)),Go.setAttribute("aColor",new ce([1,.25,.2,.3,1,.45,1,1,1,1,1,1],3)),Go.setAttribute("aBlink",new ce([0,0,1,1],1));const ch={value:0},Rp=new wn({transparent:!0,depthWrite:!1,blending:ms,uniforms:{uTime:Oe,uOpacity:ch,uScale:{value:h.getPixelRatio()}},vertexShader:"uniform float uTime;uniform float uScale;attribute vec3 aColor;attribute float aBlink;varying vec3 vColor;varying float vOn;void main(){vColor=aColor;float k=fract(uTime*.8+modelMatrix[3][0]*.31);vOn=aBlink>.5?step(.86,k):.75+.25*sin(uTime*2.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=(aBlink>.5?13.:11.)*uScale;}",fragmentShader:"uniform float uOpacity;varying vec3 vColor;varying float vOn;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,1.6);gl_FragColor=vec4(mix(vColor,vec3(1.),smoothstep(.22,0.,d)*.7),a*vOn*uOpacity);}"}),Rc=[];for(let c=0;c<(l?1:3);c++){const g=new _e;g.add(new At(oh,Tc),new At(Tp,bc),new At(bp,ah),new ls(Ap,Ac),new us(Go,Rp)),f.add(g),Rc.push(g)}await a("room-details");const Cp=new Er(1,.045,3,48),Vo=[0,1,2].map(()=>new oi({color:16773316,transparent:!0,opacity:0,depthWrite:!1})),Pp=Vo.map(c=>{const g=new At(Cp,c);return g.rotation.x=Math.PI/2,g.position.set(3.25,1.418,-.02),f.add(g),g}),Cc=new sd(16761466,0,2.6,1.6);Cc.position.set(3.25,2.1,.1),f.add(Cc);const Ci=new Pn({color:3095352,roughness:.6,transparent:!0,opacity:0}),Wo=new _e;Wo.position.copy(K),Wo.rotation.y=.75,f.add(Wo);const Xo=new _e;Xo.position.z=.024,Xo.add(new At(new pe(.014,.15,.008).translate(0,.065,0),Ci)),Wo.add(Xo,new At(new an(.022,.022,.02,10).rotateX(Math.PI/2).translate(0,0,.025),Ci));let qo=-Math.PI/2;const Yo=l?.5:1,Zo=document.createElement("canvas");Zo.width=1024*Yo,Zo.height=256*Yo;const Lp=Zo.getContext("2d"),Ns=new Kf(Zo);Ns.colorSpace=Dn,Ns.anisotropy=4;const Pc=new Pn({map:Ns,roughness:.9,transparent:!0,opacity:0}),Jo=new _e;Jo.position.set(wt,Nt,Dt),f.add(Jo),Jo.add(new At(new an(re,re,ye,40,1,!0),Pc),new At(new pe(.02,ye,.012).translate(0,0,re+.004),Ci));const Fs=new _e;Fs.position.copy(rt),Fs.rotation.y=N-Math.PI/2,Fs.add(new At(new pe(at,.014,.014).translate(-at/2,0,0),Ci),new At(new pe(.022,.045,.022).translate(-at+.011,0,0),Ci)),f.add(Fs);const Ir=[];let Os=0,$o=-.2;function lh(){const c=Lp,g=1024,w=256;c.setTransform(Yo,0,0,Yo,0,0),c.fillStyle="#f6efdf",c.fillRect(0,0,g,w),c.strokeStyle="rgba(206, 130, 101, 0.35)",c.lineWidth=4,c.beginPath();for(let z=0;z<g;z+=64)c.moveTo(z,0),c.lineTo(z,w);for(let z=32;z<w;z+=32)c.moveTo(0,z),c.lineTo(g,z);c.stroke(),c.strokeStyle="#2f3b38",c.lineWidth=14,c.lineJoin="round",c.beginPath();let U=0,O=0;Ir.forEach((z,W)=>{const nt=(N-z.angle)/(Math.PI*2),st=(nt-Math.floor(nt))*g,Et=w/2-z.level/ye*w;W===0?c.moveTo(st,Et):(st<U&&(c.lineTo(st+g,Et),c.moveTo(U-g,O)),c.lineTo(st,Et)),U=st,O=Et}),c.stroke(),Ns.needsUpdate=!0}lh();const Ko=document.createElement("canvas");Ko.width=512,Ko.height=192;const Dp=Ko.getContext("2d"),Bs=new Kf(Ko);Bs.colorSpace=Dn,Bs.anisotropy=4;const jo=new Pn({map:Bs,roughness:.7,transparent:!0,opacity:0});function uh(c,g,w,U,O,z){const W=new rn(c,g),nt=W.attributes.uv;for(let st=0;st<nt.count;st++)nt.setXY(st,Ae(w,O,nt.getX(st)),Ae(U,z,nt.getY(st)));return W}const Qo=new _e;Qo.position.set(K.x,ft,K.z),Qo.rotation.y=.75,Qo.add(new At(uh(.48,.12,0,1/3,1,1).translate(0,0,.0365),jo),new At(uh(.2,.04,0,0,320/512,1/3).translate(0,-.1,.0365),jo)),f.add(Qo);let Pi=null,An=null,zs;const Ip=()=>zs===void 0||An===null!=(zs===null)||An!==null&&Math.abs(An-zs)>=5e-4;function hh(){const c=Dp;c.fillStyle="#e3dccb",c.fillRect(0,0,512,128),c.fillStyle="#f1e9d7",c.fillRect(0,128,320,64),c.textAlign="center",c.textBaseline="middle",c.fillStyle="#2f3b38",c.font='600 40px "Helvetica Neue", Arial, sans-serif',c.fillText("g CO₂e",160,162),c.beginPath(),c.arc(303,108,9,0,Math.PI*2),c.fill(),c.font='bold 96px "Helvetica Neue", Arial, sans-serif';const g=An===null?null:Math.min(Math.max(An,0),999.99)*100;let w=0;for(let U=0;U<5;U++){const O=4-U,z=18+O*94+(O>=3?16:0),W=10,nt=84,st=108;if(c.save(),c.beginPath(),c.rect(z,W,nt,st),c.clip(),c.fillStyle=U<2?"#7e3326":"#2f3b38",c.fillRect(z,W,nt,st),c.fillStyle="#fbf6ea",g===null)c.fillText("–",z+nt/2,W+st/2+4);else{const Gt=U===0?g%10:Math.floor(g/10**U)%10+w;w=Math.max(0,Gt-9);const Yt=Math.floor(Gt);for(let Te=Yt-1;Te<=Yt+2;Te++)c.fillText(String((Te%10+10)%10),z+nt/2,W+st/2+4+(Te-Gt)*st*.95)}const Et=c.createLinearGradient(0,W,0,W+st);Et.addColorStop(0,"rgba(0, 0, 0, 0.4)"),Et.addColorStop(.2,"rgba(0, 0, 0, 0)"),Et.addColorStop(.8,"rgba(0, 0, 0, 0)"),Et.addColorStop(1,"rgba(0, 0, 0, 0.4)"),c.fillStyle=Et,c.fillRect(z,W,nt,st),c.restore()}zs=An,Bs.needsUpdate=!0}hh();const Ur=new _e;Ur.visible=!1,f.add(Ur);const ta=new gs({color:3894074,transparent:!0,opacity:0,depthTest:!1}),ea=new oi({color:3894074,transparent:!0,opacity:0,depthWrite:!1,blending:ms}),na=new _e;na.add(new ls(new nc(new pe(1,1,1)),ta),new At(new pe(1,1,1),ea));const ia=new _e;ia.add(new ls(new nc(new an(1,1,1,48),30),ta),new At(new an(1,1,1,48),ea)),Ur.add(na,ia),Ur.traverse(c=>c.renderOrder=3);const Up=[[0,1.66,-1.75,2.75,2.4,2.75],[.08,4.05,-1.86,3,1.95,3],[wt,1.6,Dt,2.9,2,2.9],[.08,5.85,-1.9,2.95,1.5,2.85]];function Np(c){const[g,w,U,O,z,W]=Up[c];Ur.position.set(g,w,U),na.visible=c!==2,ia.visible=c===2,(c===2?ia:na).scale.set(c===2?O/2:O,z,c===2?W/2:W)}const fh={light:[8159365,2776218,9072462,3894074],dark:[9349826,9226482,14206630,10934171]};let ks=null,Nr=0;const Lc=new Pn({color:14248271,roughness:.6,transparent:!0,opacity:0}),ra=new _e;ra.position.set(3.185,.9,3.9),ra.add(new At(new pe(.012,.2,.012).translate(0,.1,0),Ci),new At(new pe(.008,.06,.085).translate(0,.17,.042),Lc)),f.add(ra);const dh=new Pn({color:16447212,roughness:.8,transparent:!0,opacity:0}),Fr=new At(new pe(.11,.075,.006),dh);Fr.visible=!1,f.add(Fr);let Hs="idle",Gs=0,mi=-1,ph=!1,Vs=0,Ws=null,sa=0,mh=0,oa=0;const Xs=(c,g,w)=>c<g?Math.min(g,c+w):Math.max(g,c-w);function Fp(){return Vs!==(Dc()?1:0)||sa!==(gh()?1:0)||Nr!==(ks===null?0:1)||Gs!==(Hs==="idle"?0:1)||mi>=0||Yr!==(fo?1:0)||oa>.01&&Pi!==null&&An!==null&&Math.abs(Pi-An)>=5e-4}const Dc=()=>ph||(Ws??-1)>=2,gh=()=>Dc()||Ws!==null;function Op(c,g,w,U){oa=g;const O=Cn||He;if(Vs=Xs(Vs,Dc()?1:0,He?1:c/.3),sa=Xs(sa,gh()?1:0,He?1:c/.3),O||(mh+=c),Pp.forEach((Et,Gt)=>{const Yt=(mh*.55+Gt/3)%1,Te=.06+Yt*.5;Et.scale.set(Te,Te,1),Vo[Gt].opacity=(1-Yt)*Vs*g*.9,Vo[Gt].visible=Vo[Gt].opacity>.01}),Cc.intensity=sa*g*2.4,!O){const Et=Ae(-Math.PI/2,Math.PI/2,Math.min(oo/8,1));qo=Ae(qo,Et,Math.min(c*3,1))}if(Xo.rotation.z=-qo,Ci.opacity=g,Ci.visible=g>.01,Pc.opacity=g,Pc.visible=g>.01,jo.opacity=g,jo.visible=g>.01,Pi===null||An===null||O?An=Pi:(An=Ae(An,Pi,Math.min(c*3,1)),Math.abs(Pi-An)<2e-4&&(An=Pi)),g>.01&&Ip()&&hh(),!O){const Et=Ae(-.2,.2,Math.sqrt(Math.min(oo/8,1)));$o=Ae($o,Et,Math.min(c*3,1)),Os-=c*.22*g}Jo.rotation.y=Os,Fs.rotation.z=-Math.asin(($o+Nt-rt.y)/at);const z=Ir[Ir.length-1];if(!z||z.angle-Os>=.066){for(Ir.push({angle:Os,level:$o});Ir[0].angle-Os>Math.PI*1.7;)Ir.shift();lh()}const W=Ue>=.6?2:Ue>=.28?1:0;Nr=Xs(Nr,ks===null?0:1,He?1:c/.25);const nt=Math.max(g,U)*w;Ur.visible=Nr*nt>.01;const st=(Ea?fh.dark:fh.light)[Ue>=.96?3:Ue>=.6?2:W];if(ta.color.setHex(st),ea.color.setHex(st),ta.opacity=Nr*nt*.95,ea.opacity=Nr*nt*.22,Yr=Xs(Yr,fo?1:0,He?1:c/.15),lf.opacity=Yr*g*.85,uf.opacity=Yr*g*.24,ur.visible=Yr*g>.01,Gs=Xs(Gs,Hs==="idle"?0:1,He?1:c/.35),ra.rotation.x=Ae(-Math.PI/2,0,1-(1-Gs)**2),Lc.opacity=g,Lc.visible=g>.01,mi>=0){mi=Math.min(1,mi+c/.8);const Et=mi,Gt=Math.min(Et/.7,1),Yt=Math.max(0,(Et-.7)/.3);Fr.position.set(3.05,Ae(1.45,.93,Gt*Gt),Ae(4.08,3.98,Yt)),Fr.rotation.set(0,0,(1-Gt)*.5),dh.opacity=g,Fr.visible=!0,mi>=1&&(mi=-1,Fr.visible=!1,Hs="idle")}}const _h=[],qs=new oi({color:13607508,side:mn,transparent:!0,opacity:0});for(let c=0;c<(l?0:5);c++){const g=new _e;for(const w of[-1,1]){const U=new At(new yr(.09,4),qs);U.position.x=w*.065,U.rotation.y=w*.3,g.add(U)}f.add(g),_h.push(g)}await a("lighting");const vh=[[4.36,2.21,.75],[3.3,1.7,-1.2],[-3.55,1.25,.2],[.05,1.6,-1.8],[2.02,1.3,3.11]],Bp=(l?[]:vh).map(([c,g,w])=>{const U=new sd(16758117,0,3.4,1.6);return U.position.set(c,g,w),f.add(U),U}),aa=new oi({color:16765578,transparent:!0,opacity:0,depthWrite:!1}),zp=new je(.075,10,8);vh.forEach(([c,g,w])=>{const U=new At(zp,aa);U.position.set(c,g+(c===4.36?0:.35),w),f.add(U)});const xh=new we,Mh=[];for(let c=0;c<(l?25:70);c++)Mh.push((Zt()-.5)*10,.7+Zt()*2.6,(Zt()-.5)*8);xh.setAttribute("position",new ce(Mh,3));const yh={value:0},kp=new wn({transparent:!0,depthWrite:!1,blending:ms,uniforms:{uTime:Oe,uOpacity:yh},vertexShader:"uniform float uTime;varying float vBlink;void main(){vec3 p=position;float s=position.x*1.7+position.z*2.3;p.x+=sin(uTime*.45+s)*.35;p.y+=sin(uTime*.7+s*1.3)*.22;p.z+=cos(uTime*.38+s)*.35;vBlink=smoothstep(.15,1.,sin(uTime*1.6+s*4.)*.5+.5);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=7.;}",fragmentShader:"uniform float uOpacity;varying float vBlink;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,2.);gl_FragColor=vec4(1.,.86,.48,a*vBlink*uOpacity);}"});f.add(new us(xh,kp));const ei=[],Ys=24,Sh=new Pn({color:9216864,roughness:1}),Zs=[9216864,7312469,10926448,5141841].map(c=>new Pn({color:c,roughness:1})),Hp=new an(.025,.035,.45,6),Gp=new on(.19,1),Js=new gs({transparent:!0,depthWrite:!1}),Vp=new we().setFromPoints([[0,0,0],[0,.62,0],[0,.3,0],[-.14,.5,.03],[0,.36,0],[.15,.56,-.04],[0,.44,0],[.04,.6,.13],[0,.48,0],[-.05,.62,-.12]].map(([c,g,w])=>new b(c,g,w)));function Ic(c,g=He||Cn){const w=new _e;w.userData.seed=Yi,w.add(new ls(Vp,Js));const U=new At(Hp,Sh);U.position.y=.23,U.castShadow=!0,w.add(U);const O=Math.floor(Zt()*Zs.length),z=2+Math.floor(Zt()*3);for(let W=0;W<z;W++){const nt=Zs[(O+W)%Zs.length],st=new At(Gp,nt);st.position.set((Zt()-.5)*.28,.42+Zt()*.18,(Zt()-.5)*.22),st.scale.setScalar(.75+Zt()*.5),st.castShadow=!0,w.add(st)}return w.position.copy(c),w.rotation.y=Zt()*Math.PI*2,w.userData.size=1.15+Zt()*.6,w.scale.setScalar(g?w.userData.size:.001),f.add(w),g||e0(c),ei.push({group:w,age:g?1:0,grown:g}),Ne(),ei.length}const Li=new Yg,Eh=new dt;await a("seasons");const wh={spring:{leaf:9417562,leafLight:15913950,leafDark:5933653,grass:11126918,flower:15908818,coral:16313585,plants:[10272866,15777744,12572542,5933653]},summer:{leaf:7312456,leafLight:9941854,leafDark:4156230,grass:9678190,flower:15776074,coral:14248271,plants:[7312456,9941854,5141841,4156230]},autumn:{leaf:13203247,leafLight:14722624,leafDark:6123071,grass:11904106,flower:14191162,coral:12076335,plants:[13795631,15052101,11027755,6123071]},winter:{leaf:14410721,leafLight:15922676,leafDark:5204572,grass:13818321,flower:15199467,coral:15199467,plants:[14936808,5204572,15922676,6125415]}},Th={spring:1,summer:1,autumn:.45,winter:0},Wp={spring:[16173787,16510707,15906250],summer:[],autumn:[13795631,15052101,11027755,12738346],winter:[16251386,15660021]};let $e="summer",nr=null;const Uc=new Pn({roughness:1,transparent:!0,opacity:0,side:mn});async function Xp(){const c={s:f.scale.clone(),r:f.rotation.y};f.scale.set(1,1,1),f.rotation.y=0,f.updateMatrixWorld(!0);const g=new b(0,-1,0),w=[];for(let z=0;z<(l?120:260)&&w.length<(l?80:170);z++){z&&z%8===0&&await fs(),Li.set(new b((Zt()-.5)*10.4,12,(Zt()-.5)*8.4),g);const W=Li.intersectObjects(Xt,!1)[0];W?.face&&W.face.normal.y>.7&&w.push(W.point.clone())}f.scale.copy(c.s),f.rotation.y=c.r,f.updateMatrixWorld(!0);const U=new cs(new yr(.05,7).rotateX(-Math.PI/2),Uc,w.length),O=new be;w.forEach((z,W)=>{P.position.set(z.x,z.y+.012,z.z),P.rotation.set(0,Zt()*Math.PI,0);const nt=.7+Zt()*.8;P.scale.set(nt*1.6,1,nt),P.updateMatrix(),O.copy(P.matrix),U.setMatrixAt(W,O),U.setColorAt(W,new jt(16777215))}),U.receiveShadow=!0,U.userData.total=w.length,f.add(U),nr=U}let ca=!1;function bh(){if(!nr)return;const c=Wp[ca?"winter":$e],g=new jt;for(let w=0;w<nr.userData.total;w++)g.setHex(c.length?c[w%c.length]:16777215),nr.setColorAt(w,g);nr.instanceColor.needsUpdate=!0,nr.count=Math.round(nr.userData.total*(ca||$e==="winter"||$e==="autumn"?1:$e==="spring"?.45:0))}const Ah=new we,Rh=[];for(let c=0;c<(l?30:70);c++)Rh.push((Zt()-.5)*11,Zt(),(Zt()-.5)*9);Ah.setAttribute("position",new ce(Rh,3));const Ch={value:0},Ph={value:12},Lh={value:new jt(13795631)},qp=new wn({transparent:!0,depthWrite:!1,uniforms:{uTime:Oe,uOpacity:Ch,uColor:Lh,uSize:Ph},vertexShader:"uniform float uTime;uniform float uSize;varying float vSpin;void main(){vec3 p=position;float t=fract(p.y+uTime*.045);p.y=6.8-t*6.6;p.x+=sin(uTime*.6+position.z*2.)*.45+t*1.2;p.z+=cos(uTime*.5+position.x)*.3;vSpin=uTime*2.+position.x*3.;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=uSize;}",fragmentShader:"uniform float uOpacity;uniform vec3 uColor;varying float vSpin;void main(){vec2 q=gl_PointCoord-.5;float c=cos(vSpin),s=sin(vSpin);q=mat2(c,-s,s,c)*q;q.x*=1.9*(.55+.45*abs(sin(vSpin*.7)));if(length(q)>.5)discard;gl_FragColor=vec4(uColor*(.85+.3*q.y),uOpacity);}"});f.add(new us(Ah,qp)),await a("animals");async function Dh(c,g){const w={s:f.scale.clone(),r:f.rotation.y};f.scale.set(1,1,1),f.rotation.y=0,f.updateMatrixWorld(!0);const U=new b(0,-1,0),O=[];for(let z=0;z<c*8&&O.length<c;z++){z&&z%8===0&&await fs(),Li.set(new b((Zt()-.5)*10.4,12,(Zt()-.5)*8.4),U);const W=Li.intersectObjects(Xt,!1)[0];W?.face&&W.face.normal.y>.7&&g(W.point)&&O.push(f.worldToLocal(W.point.clone()))}return f.scale.copy(w.s),f.rotation.y=w.r,f.updateMatrixWorld(!0),O}const Nc=c=>c.x>-.8&&c.x<.85&&c.z>-2.25&&c.z<4.35||c.x>-3.35&&c.x<.25&&c.z>2&&c.z<3.2,Fc=c=>c.x>-2.4&&c.x<-1.4&&c.z>-.75&&c.z<.15,Ih=c=>c.y<.75&&!Nc(c)&&!Fc(c);function Uh(c){return c.onBeforeCompile=g=>{g.uniforms.uTime=Oe,g.uniforms.uLife=un,g.vertexShader=`uniform float uTime; uniform float uLife;
`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*9. + uTime*1.1)*.012*uLife; transformed.z += cos(position.x*7. + uTime*.9)*.01*uLife;`)},c}const Oc=[],la=c=>(c.transparent=!0,c.opacity=0,Oc.push(c),c),hn=(c,g=.9)=>la(new Pn({color:c,roughness:g}));function $s(c,g,w,U,O=1,z=1,W=1){return c.scale(O,z,W).translate(g,w,U),c.index?c.toNonIndexed():c}const Bc=[7312456,4156230].map(c=>Uh(hn(c,.95))),zc=Uh(hn(14248271,.6)),Yp=_r([$s(new on(.17,0),0,.13,0),$s(new on(.13,0),.14,.09,.05),$s(new on(.12,0),-.13,.08,-.04),$s(new on(.11,0),.03,.22,.08)]),Zp=_r([[.08,.24,.12],[-.1,.17,.08],[.17,.15,.1],[0,.27,-.07],[-.16,.1,.06],[.12,.07,-.12]].map(([c,g,w])=>$s(new on(.03,0),c,g,w))),kc=await Dh(l?24:48,Ih),Nh=Bc.map(c=>new cs(Yp,c,kc.length)),Fh=new cs(Zp,zc,kc.length),Oh=[0,0];kc.forEach((c,g)=>{P.position.copy(c),P.rotation.set(0,Zt()*Math.PI*2,0),P.scale.setScalar(.65+Zt()*.6),P.updateMatrix();const w=g%2;Nh[w].setMatrixAt(Oh[w]++,P.matrix),Fh.setMatrixAt(g,P.matrix)}),Nh.forEach((c,g)=>{c.count=Oh[g],c.castShadow=!0,c.receiveShadow=!0,f.add(c)}),f.add(Fh);const Ks=la(new oi({color:3817808,side:mn})),Hc=new we().setFromPoints([new b(0,0,.05),new b(0,0,-.05),new b(.26,.02,-.03)]);Hc.computeVertexNormals();const Jp=Array.from({length:l?0:7},(c,g)=>{const w=new _e,U=new At(new En(.035,.18,5).rotateX(Math.PI/2),Ks),O=new At(Hc,Ks),z=new At(Hc,Ks);return z.scale.x=-1,w.add(U,O,z),w.userData={phase:g*.45+Zt()*.3,radius:5.2+Zt()*1.4,height:7+Zt()*1.2,flap:8+Zt()*3},f.add(w),w}),Bh=hn(15986402,.8),$p=hn(3103301,.5),Kp=hn(14916155,.6),jp=Array.from({length:l?0:3},(c,g)=>{const w=new _e,U=g===2?1:1.6,O=new At(new je(.1,10,7).scale(.85,.6,1.35),Bh),z=new At(new je(.055,9,7),$p);z.position.set(0,.1,.11);const W=new At(new pe(.035,.02,.05),Kp);W.position.set(0,.095,.17);const nt=new At(new En(.035,.08,4),Bh);return nt.position.set(0,.05,-.14),nt.rotation.x=-1.1,w.add(O,z,W,nt),[O,z].forEach(st=>st.castShadow=!0),w.children.forEach(st=>st.renderOrder=2),w.scale.setScalar(U),w.userData={phase:g*1.7,speed:.11+g*.015},f.add(w),w}),Di=hn(14268810),Gc=hn(15984335),Vc=hn(4863014),ua=l?[]:await Dh(70,Ih),Wc=Array.from({length:l?0:3},()=>{const c=new _e,g=new At(new je(.09,10,8).scale(.7,.7,1.3),Di);g.position.y=.12;const w=new At(new je(.05,9,7),Di);w.position.set(0,.175,.12);const U=new At(new En(.024,.07,6),Gc);U.position.set(0,.165,.175),U.rotation.x=Math.PI/2;const O=new At(new je(.009,6,4),Vc);O.position.set(0,.165,.21);const z=[-1,1].map(Yt=>{const Te=new At(new En(.04,.13,8),Di),oe=new At(new En(.028,.095,8).scale(1,1,.4),Gc);return oe.position.set(0,-.01,.022),Te.add(oe),Te.position.set(Yt*.055,.265,.105),Te.rotation.set(-.15,0,-Yt*.4),Te}),W=new _e,nt=new At(new _s(.032,.1,3,7),Di);nt.position.y=.08;const st=new At(new je(.033,7,5),Vc);st.position.y=.155,W.add(nt,st),W.position.set(0,.12,-.12),W.rotation.x=-2.1;const Et=[[-1,1],[1,1],[-1,-1],[1,-1]].map(([Yt,Te])=>{const oe=new At(new an(.011,.009,.085,5).translate(0,-.0425,0),Di);return oe.position.set(Yt*.035,.085,Te*.07),oe});c.add(g,w,U,O,...z,W,...Et),c.scale.setScalar(1.35),g.castShadow=!0;const Gt=ua[Math.floor(Zt()*ua.length)];return c.position.copy(Gt),c.userData={from:Gt.clone(),to:Gt.clone(),t:1,rest:Zt()*3,ear:z[0],tail:W,legs:Et},f.add(c),c});function Qp(c){const g=c.userData.to,w=ua.filter(U=>Math.abs(U.y-g.y)<.03&&U.distanceTo(g)>.4&&U.distanceTo(g)<1.8);w.length&&(c.userData.from=g.clone(),c.userData.to=w[Math.floor(Zt()*w.length)].clone(),c.userData.t=0)}let Or=null,zh=0;const Br=new b,t0=new b(0,-1,0);function ha(c,g){f.updateMatrixWorld();const w=Math.max(1,Math.ceil(c.distanceTo(g)/.15));for(let U=1;U<=w;U++){if(Br.lerpVectors(c,g,U/w),Nc(Br)||Fc(Br))return!1;Br.y=12,f.localToWorld(Br),Li.set(Br,t0);const O=Li.intersectObjects(Xt,!1)[0];if(!O?.face||O.face.normal.y<.7||Math.abs(f.worldToLocal(O.point).y-c.y)>.03)return!1}return!0}function e0(c){if(!Wc.length||Or||Cn||He||xn<zh||Di.opacity<.5)return;const g=Wc.filter(nt=>c.y-nt.position.y>-.05&&c.y-nt.position.y<.25&&nt.position.distanceTo(c)<3.5).sort((nt,st)=>nt.position.distanceTo(c)-st.position.distanceTo(c))[0];if(!g)return;const w=g.position.clone(),U=Math.atan2(w.x-c.x,w.z-c.z),O=new b;if(![0,.8,-.8,1.6,-1.6].some(nt=>(O.set(c.x+Math.sin(U+nt)*.3,w.y,c.z+Math.cos(U+nt)*.3),!Nc(O)&&!Fc(O)&&ha(O,O))))return;let W=ha(w,O)?[w,O]:null;if(!W){const st=ua.filter(Et=>Math.abs(Et.y-w.y)<.03).sort((Et,Gt)=>Et.distanceTo(w)+Et.distanceTo(O)-Gt.distanceTo(w)-Gt.distanceTo(O)).slice(0,6).find(Et=>ha(w,Et)&&ha(Et,O));st&&(W=[w,st.clone(),O])}W&&(Or={fennec:g,route:W,leg:0,t:0,phase:"notice",time:0,tree:c.clone()},zh=xn+20,Ge("visitor","notice"))}function n0(c){if(!Or)return;const g=Or,w=g.fennec,U=w.userData,O=U.legs,z=U.tail,W=U.ear;g.time+=c;const nt=Math.atan2(g.tree.x-w.position.x,g.tree.z-w.position.z);if(g.phase==="notice")w.rotation.y=eo(w.rotation.y,nt,c*5),W.rotation.x=-.45,O.forEach(st=>st.rotation.x=0),g.time>.7&&(g.phase="approach",g.time=0,Ge("visitor","approach"));else if(g.phase==="approach"){const st=g.route[g.leg],Et=g.route[g.leg+1],Gt=st.distanceTo(Et),Yt=Math.max(1,Math.round(Gt/.2));g.t=Math.min(1,g.t+c/(Yt*.26));const Te=g.t*Yt,oe=Te-Math.floor(Te);w.position.lerpVectors(st,Et,g.t),w.position.y=st.y+Math.abs(Math.sin(Math.PI*2*oe))*.02,w.rotation.y=eo(w.rotation.y,Math.atan2(Et.x-st.x,Et.z-st.z),c*8);const ge=Math.sin(Math.PI*2*oe)*.6;O.forEach((Ve,ze)=>Ve.rotation.x=ze===0||ze===3?ge:-ge),z.rotation.set(-1.75,0,0),g.t>=1&&(g.t=0,++g.leg>=g.route.length-1&&(g.phase="settle",g.time=0,Ge("visitor","settle")))}else w.position.y=g.route[g.route.length-1].y,w.rotation.y=eo(w.rotation.y,nt,c*3),O.forEach(st=>st.rotation.x=0),W.rotation.x=-.15+Math.max(0,Math.sin(xn*2))*.1,z.rotation.set(-2.1,Math.sin(xn*.6)*.3,0),g.time>6&&(U.from=w.position.clone(),U.to=w.position.clone(),U.t=1,U.rest=1+Zt()*2,Or=null,Ge("visitor","none"))}const fa=hn(13863756,.85),da=new _e,Xc=new At(new je(.1,12,8).scale(1.35,.7,1),fa),kh=new At(new je(.06,10,8),fa);kh.position.set(.13,.02,.03);const i0=[-1,1].map(c=>{const g=new At(new En(.022,.05,4),fa);return g.position.set(.14,.075,.03+c*.03),g}),pa=new At(new _s(.018,.16,2,6).rotateZ(Math.PI/2),fa);pa.position.set(-.12,-.03,.08),pa.rotation.y=.6,da.add(Xc,kh,...i0,pa),Xc.castShadow=!0,da.position.set(-.98,1.02,3.48),da.rotation.y=-Math.PI/2+.3,l||f.add(da);const qc=hn(14264703,.8),Hh=hn(12873807,.85),Gh=hn(4150624,.9),Vh=hn(3877409,.9),r0=hn(5007457,.8),s0=hn(15327176,.95),Yc=hn(8231567,.5),ma=(c,g,w)=>{const U=new At(new _s(c,g,2,7).translate(0,-g/2-c*.4,0),w);return U.castShadow=!0,U},Be=new _e,js=new _e;js.position.y=.3;const Qs=new _e,Wh=new At(new _s(.07,.12,2,8).scale(1.15,1,.8).translate(0,.13,0),Hh);Wh.castShadow=!0;const ga=new _e;ga.position.y=.27;const Xh=new At(new je(.06,10,8).translate(0,.06,0),qc),o0=new At(new je(.064,10,6,0,Math.PI*2,0,Math.PI*.55).rotateX(-.35).translate(0,.07,-.006),Vh);Xh.castShadow=!0,ga.add(Xh,o0);const Ii=[-1,1].map(c=>{const g=new _e;g.position.set(c*.09,.22,0);const w=new _e;w.position.y=-.12;const U=new _e;U.position.y=-.11;const O=new At(new je(.024,7,5),qc);return U.add(O),w.add(ma(.022,.08,qc),U),g.add(ma(.026,.08,Hh),w),Qs.add(g),{shoulder:g,elbow:w,hand:U}}),_a=[-1,1].map(c=>{const g=new _e;g.position.x=c*.043;const w=new _e;w.position.y=-.15;const U=new At(new pe(.05,.035,.09).translate(0,-.14,.02),Vh);return w.add(ma(.028,.1,Gh),U),g.add(ma(.033,.1,Gh),w),js.add(g),{hip:g,knee:w}});Qs.add(Wh,ga),js.add(Qs),Be.add(js),Be.scale.setScalar(1.2);const ir=new _e,qh=[-1,1].map(c=>{const g=new _e;return g.add(new At(new pe(.075,.006,.1).translate(c*.0375,0,0),r0),new At(new pe(.068,.012,.09).translate(c*.036,.009,0),s0)),ir.add(g),g}),ni=new _e,Zc=new We;Zc.position.set(0,.11,.17),ni.add(new At(new an(.05,.055,.1,10).translate(0,.05,0),Yc),new At(new an(.008,.013,.15,6).rotateX(1).translate(0,.08,.1),Yc),new At(new Er(.04,.007,4,10,Math.PI).translate(0,.1,0).rotateY(Math.PI/2),Yc),Zc),ni.traverse(c=>c.castShadow=!0);const va=new us(new we().setAttribute("position",new ce(new Array(24).fill(0),3)),la(new rp({color:12182252,size:3,sizeAttenuation:!1})));va.frustumCulled=!1;const Ui=new cs(new rn(.16,.2,1,2).translate(0,-.1,0).rotateY(Math.PI/2),la(new Pn({roughness:.95,side:mn})),4);[15854039,8364992,15185763,13533797].forEach((c,g)=>Ui.setColorAt(g,new jt(c))),Ui.castShadow=!0;const Jc=5.16,Yh=new At(new je(.05,8,6),aa);Yh.position.set(Qt.x,5.72,-1.62),l||f.add(Be,ir,ni,va,Ui,Yh);const $c=Math.PI-.5,Kc=ut.map(([c,g])=>[c-Math.sin($c)*.27,g-Math.cos($c)*.27,$c]),xa={read:[de.x-Math.sin(de.yaw)*.03,de.z-Math.cos(de.yaw)*.03,de.yaw],shelter:[Qt.x+.2,Qt.z-.02,0],sleep:[Qt.x+.38,Qt.z+.02,Math.PI/2],water:Kc[0],hang:[1.06,-1.1,Math.PI/2]},zr={stand:[0,0,.05,.05,-.1,-.1,0,0,0,0,.3,0,0],sit:[-.18,.32,-.75,-.75,-1.25,-1.25,-1.57,-1.57,1.35,1.35,.225,0,0],lie:[0,.1,-.45,-.55,-1.5,-1.4,.03,-.05,.08,.15,.3,-Math.PI/2,.29],water:[.22,.3,-.95,.1,-.25,-.15,0,0,0,0,.29,0,0],hang:[-.05,-.35,-2.7,-2.5,-.35,-.5,0,0,0,0,.3,0,0]};Be.rotation.order="YXZ";const fn=zr.stand.slice(),Rn=zr.stand.slice();let Ke="read",Ma=0,ii=0;const a0=()=>Xe>.5?"sleep":lo>.15?"shelter":ri<9.5||ri>=17&&ri<19?"water":ri<11.5&&co<.45?"hang":"read",c0=()=>co<.45&&lo<.05&&ri>=9.5&&ri<18.5,to=new b,Un=new b,rr=new b,l0=[-1.44,-1.21,-.98,-.75];Be.position.set(xa.read[0],Jc,xa.read[1]);function u0(c,g){const w=a0();w!==Ke&&(Ke=w,Ma=0),Ma+=c;const U=xn;Ke==="water"&&(xa.water=Kc[g?0:Math.floor(Ma/6)%Kc.length]);const[O,z,W]=xa[Ke];to.set(O,Be.position.y,z);const nt=Be.position.distanceTo(to);if(g||nt<.02)Be.position.copy(to),ii=0;else{const ie=Math.min(nt,c*.38),Fn=Math.atan2(to.x-Be.position.x,to.z-Be.position.z);Be.position.x+=Math.sin(Fn)*ie,Be.position.z+=Math.cos(Fn)*ie,Be.rotation.y=eo(Be.rotation.y,Fn,c*6),ii=1}ii||(Be.rotation.y=g?W:eo(Be.rotation.y,W,c*4));const st=!ii&&(Ke==="read"||Ke==="shelter"||Ke==="sleep"),Et=st&&Ke!=="sleep",Gt=ii?zr.stand:Ke==="sleep"?zr.lie:Et?zr.sit:zr[Ke];for(let ie=0;ie<Gt.length;ie++)Rn[ie]=Gt[ie];if(ii){const ie=Math.sin(U*9)*.55;Rn[6]=ie,Rn[7]=-ie,Rn[8]=Math.max(0,-ie)*.8,Rn[9]=Math.max(0,ie)*.8,Rn[2]=-ie*.6,Rn[3]=ie*.6,Rn[10]=.3+Math.abs(Math.cos(U*9))*.012}else if(Et)Rn[1]+=Math.sin(U*.6)*.05,Rn[4]-=Math.max(0,Math.sin(U*.45)-.92)*6;else if(Ke==="water")Rn[2]+=Math.sin(U*1.4)*.12;else if(Ke==="hang"){const ie=Math.sin(U*2.2);Rn[2]+=ie*.2,Rn[3]-=ie*.2}const Yt=g?1:Math.min(1,c*5);for(let ie=0;ie<fn.length;ie++)fn[ie]=Ae(fn[ie],Rn[ie],Yt);const Te=Ke==="sleep"&&!ii?Math.sin(U*1.3)*.03:Math.sin(U*2)*.01;Qs.rotation.x=fn[0],Qs.scale.set(1,1+Te,1+Te),ga.rotation.set(fn[1],0,Ke==="sleep"&&!ii?.3:0),Ii[0].shoulder.rotation.set(fn[2],0,-.08),Ii[1].shoulder.rotation.set(fn[3],0,.08),Ii[0].elbow.rotation.x=fn[4],Ii[1].elbow.rotation.x=fn[5],_a[0].hip.rotation.set(fn[6],0,.04),_a[1].hip.rotation.set(fn[7],0,-.04),_a[0].knee.rotation.x=fn[8],_a[1].knee.rotation.x=fn[9],js.position.y=fn[10],Be.rotation.x=fn[11],Be.position.y=Jc+fn[12],Be.updateMatrixWorld(!0),st?(Ii[0].hand.getWorldPosition(Un),Ii[1].hand.getWorldPosition(rr),f.worldToLocal(Un.add(rr).multiplyScalar(.5)),ir.position.copy(Un),ir.position.y+=Ke==="sleep"?.01:.03,ir.rotation.set(Ke==="sleep"?0:-.95,Be.rotation.y,0,"YXZ")):(ir.position.set(ae.x-.08,5.34,ae.z),ir.rotation.set(0,.4,0)),qh[0].rotation.z=Et?-.3:0,qh[1].rotation.z=Et?.3:Math.PI-.06;const oe=Ke==="water"&&!ii;oe?(Ii[0].hand.getWorldPosition(Un),f.worldToLocal(Un),ni.position.set(Un.x,Un.y-.13,Un.z),ni.rotation.set(.55+Math.sin(U*1.4)*.12,Be.rotation.y,0,"YXZ")):Ke==="water"?(Ii[0].hand.getWorldPosition(Un),f.worldToLocal(Un),ni.position.set(Un.x,Un.y-.13,Un.z),ni.rotation.set(0,Be.rotation.y,0,"YXZ")):(ni.position.set(-.72,Jc,-1.5),ni.rotation.set(0,-.6,0)),ni.updateMatrixWorld(!0);const ge=va.geometry.attributes.position;Zc.getWorldPosition(rr),f.worldToLocal(rr);const Ve=Be.rotation.y;for(let ie=0;ie<8;ie++){const Fn=(U*1.6+ie/8)%1;ge.setXYZ(ie,rr.x+Math.sin(Ve)*Fn*.06,rr.y-Fn*Fn*.32,rr.z+Math.cos(Ve)*Fn*.06)}ge.needsUpdate=!0,va.visible=oe&&!g;const ze=c0()?Ke==="hang"?g?4:ii?0:Math.min(4,Math.floor(Ma/2.5)+1):4:0;Ui.count=ze;for(let ie=0;ie<ze;ie++)P.position.set(1.32,5.785,l0[ie]),P.rotation.set(0,0,Math.sin(U*1.3+ie)*.12*(1-co)),P.scale.setScalar(1),P.updateMatrix(),Ui.setMatrixAt(ie,P.matrix);Ui.instanceMatrix.needsUpdate=!0,Ui.visible=ze>0}function eo(c,g,w){let U=(g-c+Math.PI)%(Math.PI*2)-Math.PI;return U<-Math.PI&&(U+=Math.PI*2),Math.abs(U)<=w?g:c+Math.sign(U)*w}const h0={spring:14268810,summer:14466182,autumn:13609592,winter:14994854};function f0(c,g){const w=1-Xe,U=1-Math.min(lo*1.4,1);if(Oc.forEach(z=>z.opacity=g),zc.opacity=g*Th[$e]*($e==="autumn"?2:1),Ks.opacity=g*w*U*($e==="winter"?.6:1)*(1-si*.7),Di.opacity=Gc.opacity=Vc.opacity=g*w*U,Oc.forEach(z=>z.visible=z.opacity>.01),g<=.01)return;const O=xn;Jp.forEach((z,W)=>{const nt=z.userData;$e==="winter"&&W>3?z.visible=!1:z.visible=Ks.visible;const st=O*.16+nt.phase;z.position.set(Math.cos(st)*nt.radius,nt.height+Math.sin(O*.7+W)*.25,Math.sin(st)*nt.radius*.8),z.rotation.set(0,-st,Math.sin(st)*.15);const Et=Math.sin(O*nt.flap+W)*.55;z.children[1].rotation.z=Et,z.children[2].rotation.z=-Et}),jp.forEach((z,W)=>{const nt=z.userData,st=O*nt.speed*(.25+.75*w),Et=2.3+Math.sin(st+nt.phase)*1.4,Gt=Math.cos(st+nt.phase),Yt=.01+Math.sin(st*2.3+W)*.28+(W-1)*.12;z.position.set(Yt,.505+Math.sin(O*2.2+W)*.008,Et),z.rotation.y=Gt>=0?0:Math.PI,z.rotation.z=Math.sin(O*1.7+W)*.05}),Wc.forEach(z=>{if(Or?.fennec===z)return;const W=z.userData,nt=W.legs,st=W.tail;if(W.t>=1){W.rest-=c,W.rest<=0&&(Qp(z),W.rest=1.5+Zt()*3.5),W.ear.rotation.x=-.15+Math.max(0,Math.sin(O*3+W.rest))*.25,nt.forEach(ze=>ze.rotation.x=0),st.rotation.set(-2.1,Math.sin(O*.8+W.rest)*.25,0);return}const Et=W.from,Gt=W.to,Yt=Et.distanceTo(Gt),Te=Math.max(1,Math.round(Yt/.2));W.t=Math.min(1,W.t+c/(Te*.26));const oe=W.t*Te,ge=oe-Math.floor(oe);z.position.lerpVectors(Et,Gt,W.t),z.position.y=Et.y+Math.abs(Math.sin(Math.PI*2*ge))*.02,z.rotation.y=Math.atan2(Gt.x-Et.x,Gt.z-Et.z);const Ve=Math.sin(Math.PI*2*ge)*.6;nt.forEach((ze,ie)=>ze.rotation.x=ie===0||ie===3?Ve:-Ve),st.rotation.set(-1.75,0,0)}),Xc.scale.y=1+Math.sin(O*1.6)*.04,pa.rotation.y=.6+Math.sin(O*.7)*.35}const d0=new jt(15660018),jc={leaf:.78,leafLight:.92,leafDark:.5,grass:.9,flower:.8,coral:.8},p0=[.82,.55,.92,.55];function Zh(){const c=wh[$e],g=(U,O,z)=>U.color.setHex(O).lerp(d0,z*Zn);Re.forEach(({material:U,key:O})=>{const z=c[O];z!==void 0&&g(U,z,jc[O]??0)}),Zs.forEach((U,O)=>g(U,c.plants[O],p0[O])),g(Bc[0],c.leaf,jc.leaf),g(Bc[1],c.leafDark,jc.leafDark);const w=Zn>.35;w!==ca&&(ca=w,bh())}function m0(){const c=wh[$e];Zh(),zc.color.setHex($e==="autumn"?12070954:c.flower),Di.color.setHex(h0[$e]),bh(),Lh.value.setHex($e==="spring"?16040917:13795631),Mn.stale=!0,Ne()}await a("renderer-state");let ya=0,Ue=0,Cn=!1,He=!1,Jh=!0,Ni=0,kr=0,no=0,sr=-1,xn=0,Fi=!1,$h=!1,io=!0;const Mn={progress:NaN,snow:NaN,fog:NaN,night:NaN,shadow:NaN,stale:!0},Qc=new Float64Array(19).fill(NaN);function ro(){!no&&!Fi&&$h&&(no=requestAnimationFrame(T0))}function Ne(){io=!0,ro()}const Kh=()=>{document.hidden||ro()};document.addEventListener("visibilitychange",Kh);let Hr=!1,jh=1;const Sa=[];function Qh(c){Hr=c==="light",h.setPixelRatio(Math.min(devicePixelRatio,Hr?1.25:1.6)),jh=Hr||l?1/0:2;const g=Hr?1024:2048;x.shadow.mapSize.x!==g&&(x.shadow.mapSize.set(g,g),x.shadow.map?.dispose(),x.shadow.map=null),Sa.forEach(w=>w.castShadow=!Hr),i.dataset.quality=c,Ne()}let Ea=!1,or=0,ri=13,Xe=0;const Gr=new b(0,2.4,0),tl=new b(0,2.4,0);let ar=0,so=0,Vr=.4,wa=.4,gi=new dt,Ta=new dt,Wr=1,ba=1;const _i=new dt(0,1),Xr=new dt(0,1);let qr=1,vi=1;const Oi=new dt,Nn=new dt;function tf(){const c=.15+.5*(vi-1);Nn.clampScalar(-c,c)}let oo=0,ef=0,el=0,nf=0,Aa=0,nl=0;const Yn=h.getContext(),cr=Yn.getExtension("EXT_disjoint_timer_query_webgl2"),lr=[];function g0(){if(!cr)return;const c=Yn.getParameter(cr.GPU_DISJOINT_EXT);for(;lr.length;){const g=lr[0];if(!c&&!Yn.getQueryParameter(g,Yn.QUERY_RESULT_AVAILABLE))break;if(lr.shift(),!c){const w=Yn.getQueryParameter(g,Yn.QUERY_RESULT)/1e6;nf+=w,Aa++,nl=Ae(nl||w,w,.1)}Yn.deleteQuery(g)}}let Ra=1,si=0,il=0;const ao=new Zu(15856366,30,60);let co=0,lo=0,Zn=0,uo=0;const rf=new IntersectionObserver(c=>{Jh=c[0].isIntersecting,Ne()},{rootMargin:"80px"});rf.observe(i);let Bi=1,xi=1;const sf=()=>{Bi=i.clientWidth,xi=i.clientHeight,h.setSize(Bi,xi),Ne()},of=new ResizeObserver(sf);of.observe(i),sf();const af=new jt(8751499),cf=new jt(4488378),_0=new jt(8094327),rl=new b,ho={wattch:new b(-3.65,2.65,.2),whisperbook:new b(3.35,3.55,-.65),about:new b($t,lt+vt,It),contact:new b(2.02,2.5,3.11),workshop:new b(6.65,1.45,-.25),bplog:new b(6.75,1.45,2.65)},v0={whisperbook:{at:new b(3.4,1.7,-.55),zoom:1.6},wattch:{at:new b(-3.4,1.45,.45),zoom:1.8},workshop:{at:new b(6.65,.75,-.2),zoom:2},bplog:{at:new b(6.75,.65,3),zoom:2}},x0={whisperbook:1.35,wattch:1.45,about:.9,contact:.55,workshop:1,bplog:1},lf=new oi({color:16765578,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}),uf=new oi({color:16765578,transparent:!0,opacity:0,depthWrite:!1,blending:ms}),ur=new _e;ur.add(new At(new Qu(.96,1,64).rotateX(-Math.PI/2),lf),new At(new yr(1,48).rotateX(-Math.PI/2),uf)),ur.traverse(c=>c.renderOrder=4),ur.visible=!1,f.add(ur);let fo=null,Yr=0;function M0(c){const g=ho[c],w=Z(g.x,g.z);ur.position.set(g.x,(Number.isFinite(w)?w:.16)+.03,g.z),ur.scale.setScalar(x0[c]??1)}const y0=new b(.55,2.4,-.55),po=new jt;function sl(){const c=Xi.clamp((ri-6)/14,0,1),g=Math.sin(c*Math.PI);Xe=Ln(19.2,21.5,ri)+(1-Ln(5,6.6,ri)),Xe=Xi.clamp(Xe,0,1),x.position.set(Ae(-9,9,c),8+g*8,Ae(9,6,g));const w=co*.6+lo*.25;Ra=(.35+.65*g)*(1-Xe*.7)*(1-w*.9),po.setHex(16751964).lerp(new jt(16773076),Ln(0,.55,g)),po.lerp(new jt(10466536),Xe),x.color.copy(po),x.intensity=(.9+2.4*g)*(1-Xe*.82)*(1-w*.7),po.lerp(new jt(14673388),w*.6),x.color.copy(po),m.intensity=(1.4+1.1*g)*(1-Xe*.55),m.color.setHex(16251903).lerp(new jt(7177405),Xe),m.groundColor.setHex(8622195).lerp(new jt(2831696),Xe),S.intensity=.7*(1-Xe*.6),Ne()}sl();const hf=c=>{c.preventDefault(),lr.length=0,i.dispatchEvent(new Event("garden-context-lost")),t.forEach(g=>{g.style.visibility="hidden",g.tabIndex=-1})},ff=()=>{i.dispatchEvent(new Event("garden-context-restored")),t.forEach(c=>c.style.visibility=""),Mn.stale=!0,Qc.fill(NaN),Ne()};h.domElement.addEventListener("webglcontextlost",hf),h.domElement.addEventListener("webglcontextrestored",ff);let Ca=!0,df=!1,pf=-1;const mo=new b,S0=new Float64Array(19);function E0(c){const g=S0;g[0]=Bi,g[1]=xi,g[2]=_i.x,g[3]=_i.y,g[4]=gi.x,g[5]=gi.y,g[6]=ar,g[7]=Vr,g[8]=qr,g[9]=Oi.x,g[10]=Oi.y,g[11]=Gr.x,g[12]=Gr.y,g[13]=Gr.z,g[14]=Ue,g[15]=c,g[16]=Ni,g[17]=h.getPixelRatio(),g[18]=Wr;let w=!1;for(let U=0;U<g.length;U++)g[U]!==Qc[U]&&(Qc[U]=g[U],w=!0);return w}function w0(){return Mn.stale||Mn.progress!==Ue||Mn.snow!==Zn||Mn.fog!==si||Mn.night!==Xe||Mn.shadow!==Ra}const mf={};function Ge(c,g){mf[c]!==g&&(mf[c]=g,i.dataset[c]=g)}let gf=0;function T0(c){if(no=0,Fi)return;if(!Jh||document.hidden){sr=-1;return}if(Hr&&sr>=0&&c-sr<1e3/30-4){ro();return}const g=sr<0?0:Math.min((c-sr)/1e3,.05);sr=c,or<1&&(or=He||Cn?1:Math.min(1,or+g/3.2),io=!0);const w=ei.some(oe=>oe.age<1),U=Math.abs(ya-Ue)>1e-4||Math.abs(kr-Ni)>1e-4||Math.abs(so-ar)>5e-4||Math.abs(wa-Vr)>5e-4||Math.abs(il-si)>.002||gi.distanceTo(Ta)>5e-4||Math.abs(ba-Wr)>5e-4||_i.distanceTo(Xr)>5e-4||Math.abs(vi-qr)>5e-4||Oi.distanceTo(Nn)>5e-4||Math.abs(uo-Zn)>.001||Fp()||w;if((Cn||Ue<.5)&&!U&&!io){sr=-1;return}ro(),(U||io||++gf>=jh)&&(gf=0,h.shadowMap.needsUpdate=!0),io=!1;const O=performance.now();Ca&&df&&(Ue=ya,ar=so,Vr=wa,Gr.copy(tl)),Ue=Ae(Ue,ya,He?1:Math.min(g*7,1)),Ni=Ae(Ni,kr,He?1:Math.min(g*4,1)),Cn||(xn+=g);const z=He?1:Math.min(g*3.2,1);Ca&&(gi.copy(Ta),Wr=ba,_i.copy(Xr)),ar=Ae(ar,so,z),Vr=Ae(Vr,wa,z),gi.lerp(Ta,z),Wr=Ae(Wr,ba,z),_i.lerp(Xr,z);const W=He?1:Math.min(g*14,1);qr=Ae(qr,vi,W),Oi.lerp(Nn,W),Gr.lerp(tl,z);const nt=or*or*(3-2*or);if(nt!==pf){pf=nt;const oe=en.geometry.attributes.position.count;en.geometry.setDrawRange(0,Math.floor(oe*nt/2)*2)}Oe.value=xn;const st=Ln(.69,.96,Ue);un.value=Cn?0:st;const Et=Ln(.07,.3,Ue),Gt=Ln(.35,.6,Ue);if(f.scale.setScalar(Ae(.77,1,Ln(0,.62,Ue))),f.scale.y*=Ae(.72,1,Ln(.1,.55,Ue)),f.rotation.y=Ni,Zn!==uo){const oe=uo-Zn;Zn=He||Cn?uo:Zn+Xi.clamp(oe,-g*.12,g*.3),Zh()}if(si=Ae(si,il,He?1:Math.min(g*1.5,1)),si>.002?(u.fog=ao,ao.near=Ae(30,9.5,si),ao.far=Ae(60,27,si)):u.fog=null,w0()){Mn.stale=!1,Mn.progress=Ue,Mn.snow=Zn,Mn.fog=si,Mn.night=Xe,Mn.shadow=Ra,Re.forEach(({material:ge,flora:Ve,glass:ze,key:ie})=>{const Fn=ie==="flower"||ie==="coral"?Th[$e]:1;Vl(ge,Ve?st*Fn:Gt*(ze?.38:1))}),Vl(Sh,Gt),Zs.forEach(ge=>Vl(ge,st)),fe.color.copy(af).lerp(cf,Et).lerp(_0,Gt),fe.opacity=Ae(Ea?.38:.21,Ea?.85:.6,Et)*(1-Gt*.92),Js.color.copy(fe.color),Js.opacity=fe.opacity*(1-Gt),Js.visible=Js.opacity>.003,Xn.opacity=.055*(1-Et),Ce.opacity=Ln(.06,.3,Ue)*(1-Ln(.45,.62,Ue))*.38,_.opacity=Gt*.15*Ra,qn.material.opacity=Gt,Ze.uniforms.uOpacity.value=Ln(.46,.63,Ue);const oe=Xe*Gt;Bp.forEach(ge=>ge.intensity=oe*2.6),aa.opacity=oe*.95,aa.visible=oe>.01,yh.value=Xe*st,qs.opacity=st*($e==="summer"||$e==="spring"?1-Zn:0),qs.visible=qs.opacity>.003,Uc.opacity=st,Uc.visible=st>.01,Ch.value=st*($e==="autumn"?.95:$e==="spring"?.85:0)*(1-si*.65)*(1-Zn),Us.value=Ln(.52,.64,Ue),Tc.opacity=st,bc.opacity=st,ah.opacity=st*.21,Tc.emissiveIntensity=Xe*.5,bc.emissiveIntensity=Xe*.35,ch.value=st*(.3+.7*Xe),Ac.opacity=Ln(.15,.3,Ue)*(1-st)*.46+st*Xe*.55}Rc.forEach((oe,ge)=>{const Ve=xn*.105*st+ge*2.08;oe.position.set(Math.cos(Ve)*(3.6+ge*.22),3.35+ge*.62+Math.sin(Ve*2+ge)*.22,Math.sin(Ve)*(2.95+ge*.2)),oe.rotation.set(Math.sin(Ve*2)*.055*st,-Ve+.5,Math.cos(Ve)*.075*st)}),Op(g,Gt,nt,Et),f0(Cn||He?0:g,st),!l&&st>.01&&u0(Cn||He?0:g,Cn||He),qs.visible&&_h.forEach((oe,ge)=>{oe.position.set(Math.cos(xn*.2+ge*1.9)*(2+ge*.25),1.5+Math.sin(xn*.4+ge)*.35+ge*.4,Math.sin(xn*.2+ge*1.9)*2),oe.rotation.y=xn*.2+ge,oe.children.forEach((Ve,ze)=>Ve.rotation.y=Math.sin(xn*8+ge)*.7*(ze===0?1:-1))});for(const oe of ei){if(oe.grown)continue;oe.age=He?1:Math.min(1,oe.age+g*1.6);const ge=oe.age,Ve=1+2.2*Math.pow(ge-1,3)+1.2*Math.pow(ge-1,2);oe.group.scale.setScalar(Math.max(.001,Ve*oe.group.userData.size)),oe.grown=oe.age>=1}if(n0(Cn||He?0:g),E0(nt)){const oe=Math.max(.05,_i.y-_i.x),ge=Bi/(xi*oe),ze=R0(ge)/2/(1+ar*Vr)/qr/Wr,ie=ze/oe;d.left=-ze*ge-(gi.x*ze+Oi.x*ze)*ge*2,d.right=ze*ge-(gi.x*ze+Oi.x*ze)*ge*2,d.top=(_i.x+_i.y)*ie-gi.y*ze*2+Oi.y*ie*2,d.bottom=d.top-2*ie,Ph.value=xi/(2*ie)*.2*h.getPixelRatio();const Fn=Ae(.69,.78,Ln(.3,1,Ue))-(1-nt)*.45;mo.copy(y0).lerp(Gr,ar),d.position.set(mo.x+Math.sin(Fn)*15,mo.y-2.4+Ae(14,12,Gt),mo.z+Math.cos(Fn)*15),d.lookAt(mo),d.updateProjectionMatrix(),d.updateMatrixWorld(),f.updateMatrixWorld();for(const ol of t)rl.copy(ho[ol.dataset.spot]).applyMatrix4(f.matrixWorld).project(d),ol.style.left=`${(rl.x*.5+.5)*Bi}px`,ol.style.top=`${(-rl.y*.5+.5)*xi}px`}g0();const Yt=cr&&lr.length<4?Yn.createQuery():null;Yt&&Yn.beginQuery(cr.TIME_ELAPSED_EXT,Yt);const Te=performance.now();h.render(u,d),Yt&&(Yn.endQuery(cr.TIME_ELAPSED_EXT),lr.push(Yt)),Ca&&(Ca=!1,performance.mark("notebook:first-render"),performance.measure("notebook:scene-to-first-render","notebook:scene-construction:start","notebook:first-render")),oo=Ae(oo||1,performance.now()-Te,.1),Ge("progress",Ue.toFixed(3)),Ge("drawCalls",String(h.info.render.calls)),Ge("triangles",String(h.info.render.triangles)),Ge("geometries",String(h.info.memory.geometries)),Ge("textures",String(h.info.memory.textures)),Ge("waterfall",Us.value.toFixed(2)),Ge("drones",String(Rc.length)),Ge("animationTime",xn.toFixed(3)),Ge("rotation",Ni.toFixed(3)),Ge("shift",gi.x.toFixed(3)),Ge("meter",((qo+Math.PI/2)/Math.PI).toFixed(3)),Ge("narrating",Vs.toFixed(2)),Ge("explaining",Ws===null?"none":String(Ws)),Ge("path",ks===null?"none":String(ks)),Ge("postbox",Hs),Ge("flag",Gs.toFixed(2)),Ge("hover",fo??"none"),ef+=performance.now()-O,el++}await a("ground-litter"),await Xp(),f.updateMatrixWorld(!0);const _f=new Ki;f.traverse(c=>{!(c instanceof At)||c instanceof cs||!c.castShadow||(c.geometry.boundingSphere??c.geometry.computeBoundingSphere(),_f.copy(c.geometry.boundingSphere).applyMatrix4(c.matrixWorld),_f.radius<.2&&Sa.push(c))}),Sa.push(Ui),i.dataset.smallCasters=String(Sa.length),Qh(n),o(),s(),$h=!0,ro();async function b0(){if(Fi)return;const c=wo("shader-warmup"),g=[h.compileAsync(u,d)];if(await fs(),Fi)return;const w=Re.map(({material:Yt})=>Yt).filter(Yt=>Yt.transparent&&!Yt.side);if(w.forEach(Yt=>Yt.transparent=!1),g.push(h.compileAsync(u,d)),w.forEach(Yt=>{Yt.transparent=!0,Yt.needsUpdate=!0}),await fs(),Fi)return;const U=u.fog;if(u.fog=ao,g.push(h.compileAsync(u,d)),u.fog=U,await fs(),Fi)return;const O=new mp({depthPacking:Yd,side:Tn}),z=new pe,W=new _e;W.add(new At(z,O),new cs(z,O,1));const nt=new $i(1,1),st=u.fog;u.fog=null,h.setRenderTarget(nt),g.push(h.compileAsync(W,d,u)),h.setRenderTarget(null),u.fog=st,await Promise.all(g),c(),nt.dispose(),z.dispose();const Et=[...h.info.programs??[]],Gt=()=>{const Yt=Et.pop();if(Fi)return;if(!Yt){performance.mark("notebook:shader-first-use-complete");return}const Te=wo("shader-first-use");Yt.getUniforms(),Te(),A0(Gt,{timeout:1e3})};Gt()}const A0=window.requestIdleCallback??(c=>setTimeout(c,200));return requestAnimationFrame(()=>b0().catch(c=>console.warn("Garden shader warm-up failed.",c))),{setNarrating(c){ph=c,Ne()},explain(c){Ws=c,Ne()},hover(c){c&&ho[c]?(fo=c,M0(c)):fo=null,Ne()},highlightPath(c){c!==null&&Np(c),ks=c,Ne()},setPostbox(c){c==="sent"&&(Cn||He||oa<.5?c="idle":mi=0),!(c==="idle"&&mi>=0)&&(Hs=c,Ne())},setProgress(c,g=!1){ya=c,He=g,Ne(),g&&(Ue=c)},setTheme(c){Ea=c,af.setHex(c?9419994:8751499),cf.setHex(c?12643071:4488378),Ce.color.setHex(c?7451620:6917045),Xn.color.setHex(c?9750761:7830397),Ac.color.setHex(c?12643071:5866413),h.toneMappingExposure=c?.95:1.2,Mn.stale=!0,Ne()},setMotion(c){Cn=c,Ne()},rotate(){kr+=Math.PI/6,Ne()},rotateBy(c){kr+=c,Ne()},plantAt(c,g){if(ei.length>=Ys)return Ys;Eh.set(c/Bi*2-1,-(g/xi)*2+1),Li.setFromCamera(Eh,d);const w=Li.intersectObjects(Xt,!1)[0];return!w?.face||w.face.normal.y<.7?-1:Ic(f.worldToLocal(w.point.clone()))},setSeason(c){$e=c,m0()},setFog(c,g){il=c,ao.color.setHex(g),Ne()},setTally(c){Pi=c;const g=zs??null;oa>.01&&(c===null!=(g===null)||c!==null&&Math.abs(c-g)>=5e-4)&&Ne()},setWeather(c,g,w=!1){co=c,lo=g,uo=w?Math.min(1,.55+g*.5):0,sl()},setHour(c){ri=c,sl()},frame(c,g){Xr.set(c,g),Ne()},zoomBy(c,g,w){const U=Xi.clamp(vi*c,1,4),O=U/vi;if(g!==void 0&&w!==void 0){const z=g/Bi-.5,W=w/xi-(Xr.x+Xr.y)/2;Nn.set(z-(z-Nn.x)*O,W-(W-Nn.y)*O)}else Nn.multiplyScalar(O);vi=U,tf(),Ne()},panBy(c,g){Nn.x+=c/Bi,Nn.y+=g/xi,tf(),Ne()},resetView(){vi=1,Nn.set(0,0),Ne()},focus(c,g=0,w=0,U=1){if(c&&ho[c]){const O=v0[c];tl.copy(O?.at??ho[c]).multiply(f.scale).applyAxisAngle(new b(0,1,0),Ni),so=1,wa=O?.zoom??.4}else so=0;Ta.set(g,w),ba=U,Ne()},stats(){return{triangles:h.info.render.triangles,calls:h.info.render.calls,ms:oo,gpuFrameMs:cr&&Aa?nl:null,cpuMs:ef,gpuMs:cr?Aa?nf/Aa*el:0:null,frames:el}},setQuality(c){Qh(c)},drawInto(c,g,w,U,O){h.render(u,d),c.drawImage(h.domElement,g,w,U,O)},snapshot(){return{rotation:kr,trees:ei.map(({group:c})=>({x:c.position.x,y:c.position.y,z:c.position.z,seed:c.userData.seed})),zoom:vi,pan:{x:Nn.x,y:Nn.y}}},restore(c){const g=Yi;for(const w of c.trees.slice(0,Ys-ei.length))Yi=w.seed,Ic(new b(w.x,w.y,w.z),!0);return Yi=g,Ni=kr=c.rotation,qr=vi=c.zoom,Oi.copy(Nn.set(c.pan.x,c.pan.y)),or=1,df=!0,Ne(),ei.length},plant(){if(ei.length>=Ys)return Ys;const c=ei.length%12;return Ic(new b(-4.3+c*.78+(Zt()-.5)*.2,.36,3.95))},dispose(){Fi=!0,cancelAnimationFrame(no),no=0,document.removeEventListener("visibilitychange",Kh),lr.forEach(w=>Yn.deleteQuery(w)),rf.disconnect(),of.disconnect(),h.domElement.removeEventListener("webglcontextlost",hf),h.domElement.removeEventListener("webglcontextrestored",ff);const c=new Set,g=new Set;u.traverse(w=>{(w instanceof At||w instanceof dc||w instanceof us)&&(c.add(w.geometry),(Array.isArray(w.material)?w.material:[w.material]).forEach(U=>g.add(U)))}),c.forEach(w=>w.dispose()),g.forEach(w=>w.dispose()),Ns.dispose(),Bs.dispose(),h.dispose(),h.domElement.remove()}}}export{I1 as createGarden};
