import{g as wp}from"./index-CpDDzZuh.js";const ru="180",Tp=0,wh=1,bp=2,Gf=1,Vf=2,di=3,mi=0,gn=1,cn=2,Ii=0,ns=1,js=2,Th=3,bh=4,Ap=5,or=100,Rp=101,Cp=102,Pp=103,Lp=104,Dp=200,Ip=201,Up=202,Np=203,hc=204,fc=205,Fp=206,Op=207,Bp=208,zp=209,Hp=210,kp=211,Gp=212,Vp=213,Wp=214,dc=0,pc=1,mc=2,ss=3,gc=4,_c=5,vc=6,xc=7,Wf=0,Xp=1,qp=2,Ui=0,Yp=1,Zp=2,Jp=3,Xf=4,$p=5,Kp=6,jp=7,qf=300,os=301,as=302,Mc=303,yc=304,Ya=306,Sc=1e3,cr=1001,Ec=1002,Ln=1003,Qp=1004,na=1005,Qn=1006,Rl=1007,ur=1008,ni=1009,Yf=1010,Zf=1011,io=1012,su=1013,hr=1014,ti=1015,fo=1016,ou=1017,au=1018,ro=1020,Jf=35902,$f=35899,Kf=1021,jf=1022,qn=1023,so=1026,oo=1027,lu=1028,cu=1029,Qf=1030,uu=1031,hu=1033,Na=33776,Fa=33777,Oa=33778,Ba=33779,wc=35840,Tc=35841,bc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Lc=37808,Dc=37809,Ic=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,Hc=37817,kc=37818,Gc=37819,Vc=37820,Wc=37821,Xc=36492,qc=36494,Yc=36495,Zc=36283,Jc=36284,$c=36285,Kc=36286,t0=3200,td=3201,ed=0,e0=1,Di="",Tn="srgb",ls="srgb-linear",Ga="linear",Ae="srgb",Lr=7680,Ah=519,n0=512,i0=513,r0=514,nd=515,s0=516,o0=517,a0=518,l0=519,Rh=35044,Ch="300 es",ei=2e3,Va=2001;class hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const is=Math.PI/180,ao=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function fu(i,t){return(i%t+t)%t}function c0(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function u0(i,t,e){return i!==t?(e-i)/(t-i):0}function Qs(i,t,e){return(1-e)*i+e*t}function h0(i,t,e,n){return Qs(i,t,1-Math.exp(-e*n))}function f0(i,t=1){return t-Math.abs(fu(i,t*2)-t)}function d0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function p0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function m0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function g0(i,t){return i+Math.random()*(t-i)}function _0(i){return i*(.5-Math.random())}function v0(i){i!==void 0&&(Ph=i);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x0(i){return i*is}function M0(i){return i*ao}function y0(i){return(i&i-1)===0&&i!==0}function S0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function E0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function w0(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pi={DEG2RAD:is,RAD2DEG:ao,generateUUID:dr,clamp:le,euclideanModulo:fu,mapLinear:c0,inverseLerp:u0,lerp:Qs,damp:h0,pingpong:f0,smoothstep:d0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:_0,seededRandom:v0,degToRad:x0,radToDeg:M0,isPowerOfTwo:y0,ceilPowerOfTwo:S0,floorPowerOfTwo:E0,setQuaternionFromProperEuler:w0,normalize:dn,denormalize:Jr};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=y;return}if(f!==y||l!==d||c!==m||h!==_){let g=1-a;const p=l*d+c*m+h*_+f*y,R=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const D=Math.sqrt(b),C=Math.atan2(D,p*R);g=Math.sin(g*C)/D,a=Math.sin(a*C)/D}const M=a*R;if(l=l*g+d*M,c=c*g+m*M,h=h*g+_*M,f=f*g+y*M,g===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+h*f+l*m-c*d,t[e+1]=l*_+h*d+c*f-a*m,t[e+2]=c*_+h*m+a*d-l*f,t[e+3]=h*_-a*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),f=a(s/2),d=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"YZX":this._x=d*h*f+c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f-d*m*_;break;case"XZY":this._x=d*h*f-c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cl.copy(this).projectOnVector(t),this.sub(Cl)}reflect(t){return this.sub(Cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cl=new A,Lh=new fs;class re{constructor(t,e,n,r,s,o,a,l,c){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],_=n[8],y=r[0],g=r[3],p=r[6],R=r[1],b=r[4],M=r[7],D=r[2],C=r[5],T=r[8];return s[0]=o*y+a*R+l*D,s[3]=o*g+a*b+l*C,s[6]=o*p+a*M+l*T,s[1]=c*y+h*R+f*D,s[4]=c*g+h*b+f*C,s[7]=c*p+h*M+f*T,s[2]=d*y+m*R+_*D,s[5]=d*g+m*b+_*C,s[8]=d*p+m*M+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*s,m=c*s-o*l,_=e*f+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=f*y,t[1]=(r*c-h*n)*y,t[2]=(a*n-r*o)*y,t[3]=d*y,t[4]=(h*e-r*l)*y,t[5]=(r*s-a*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pl.makeScale(t,e)),this}rotate(t){return this.premultiply(Pl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pl=new re;function id(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function T0(){const i=Wa("canvas");return i.style.display="block",i}const Dh={};function lo(i){i in Dh||(Dh[i]=!0,console.warn(i))}function b0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ih=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){const i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ae&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?Ga:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:t,whitePoint:n,transfer:Ga,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}const _e=A0();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dr;class R0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Dr===void 0&&(Dr=Wa("canvas")),Dr.width=t.width,Dr.height=t.height;const r=Dr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Dr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let C0=0;class du{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=dr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ll(r[o].image)):s.push(Ll(r[o]))}else s=Ll(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?R0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P0=0;const Dl=new A;class un extends hs{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=cr,r=cr,s=Qn,o=ur,a=qn,l=ni,c=un.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=dr(),this.name="",this.source=new du(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sc:t.x=t.x-Math.floor(t.x);break;case cr:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sc:t.y=t.y-Math.floor(t.y);break;case cr:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=qf;un.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],_=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(m+1)/2,D=(p+1)/2,C=(h+d)/4,T=(f+y)/4,U=(_+g)/4;return b>M&&b>D?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=C/n,s=T/n):M>D?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=U/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=T/s,r=U/s),this.set(n,r,s,e),this}let R=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(g-_)/R,this.y=(f-y)/R,this.z=(d-h)/R,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends hs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new un(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new du(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends L0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rd extends un{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class D0 extends un{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),ra.subVectors(this.max,zs),Ir.subVectors(t.a,zs),Ur.subVectors(t.b,zs),Nr.subVectors(t.c,zs),wi.subVectors(Ur,Ir),Ti.subVectors(Nr,Ur),Ki.subVectors(Ir,Nr);let e=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Ki.z,Ki.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Ki.z,0,-Ki.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Ki.y,Ki.x,0];return!Il(e,Ir,Ur,Nr,ra)||(e=[1,0,0,0,1,0,0,0,1],!Il(e,Ir,Ur,Nr,ra))?!1:(sa.crossVectors(wi,Ti),e=[sa.x,sa.y,sa.z],Il(e,Ir,Ur,Nr,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const li=[new A,new A,new A,new A,new A,new A,new A,new A],Vn=new A,ia=new pr,Ir=new A,Ur=new A,Nr=new A,wi=new A,Ti=new A,Ki=new A,zs=new A,ra=new A,sa=new A,ji=new A;function Il(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ji.fromArray(i,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const I0=new pr,Hs=new A,Ul=new A;class mr{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):I0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);const e=Hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Hs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(Ul)),this.expandByPoint(Hs.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ci=new A,Nl=new A,oa=new A,bi=new A,Fl=new A,aa=new A,Ol=new A;class Za{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Nl.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Nl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=bi.dot(this.direction),l=-bi.dot(oa),c=bi.lengthSq(),h=Math.abs(1-o*o);let f,d,m,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const y=1/h;f*=y,d*=y,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nl).addScaledVector(oa,d),m}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,r,s){Fl.subVectors(e,t),aa.subVectors(n,t),Ol.crossVectors(Fl,aa);let o=this.direction.dot(Ol),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const l=a*this.direction.dot(aa.crossVectors(bi,aa));if(l<0)return null;const c=a*this.direction.dot(Fl.cross(bi));if(c<0||l+c>o)return null;const h=-a*bi.dot(Ol);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,r,s,o,a,l,c,h,f,d,m,_,y,g){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,f,d,m,_,y,g)}set(t,e,n,r,s,o,a,l,c,h,f,d,m,_,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=m,p[7]=_,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Fr.setFromMatrixColumn(t,0).length(),s=1/Fr.setFromMatrixColumn(t,1).length(),o=1/Fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*f,_=a*h,y=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*f,_=c*h,y=c*f;e[0]=d+y*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*f,_=c*h,y=c*f;e[0]=d-y*a,e[4]=-o*f,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*f,_=a*h,y=a*f;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+y,e[1]=l*f,e[5]=y*c+d,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=y-d*f,e[8]=_*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+_,e[10]=d-y*f}else if(t.order==="XZY"){const d=o*l,m=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+y,e[5]=o*h,e[9]=m*f-_,e[2]=_*f-m,e[6]=a*h,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U0,t,N0)}lookAt(t,e,n){const r=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ai.crossVectors(n,Rn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ai.crossVectors(n,Rn)),Ai.normalize(),la.crossVectors(Rn,Ai),r[0]=Ai.x,r[4]=la.x,r[8]=Rn.x,r[1]=Ai.y,r[5]=la.y,r[9]=Rn.y,r[2]=Ai.z,r[6]=la.z,r[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],_=n[2],y=n[6],g=n[10],p=n[14],R=n[3],b=n[7],M=n[11],D=n[15],C=r[0],T=r[4],U=r[8],S=r[12],E=r[1],N=r[5],V=r[9],Y=r[13],$=r[2],et=r[6],J=r[10],ct=r[14],K=r[3],Et=r[7],Ct=r[11],bt=r[15];return s[0]=o*C+a*E+l*$+c*K,s[4]=o*T+a*N+l*et+c*Et,s[8]=o*U+a*V+l*J+c*Ct,s[12]=o*S+a*Y+l*ct+c*bt,s[1]=h*C+f*E+d*$+m*K,s[5]=h*T+f*N+d*et+m*Et,s[9]=h*U+f*V+d*J+m*Ct,s[13]=h*S+f*Y+d*ct+m*bt,s[2]=_*C+y*E+g*$+p*K,s[6]=_*T+y*N+g*et+p*Et,s[10]=_*U+y*V+g*J+p*Ct,s[14]=_*S+y*Y+g*ct+p*bt,s[3]=R*C+b*E+M*$+D*K,s[7]=R*T+b*N+M*et+D*Et,s[11]=R*U+b*V+M*J+D*Ct,s[15]=R*S+b*Y+M*ct+D*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],_=t[3],y=t[7],g=t[11],p=t[15];return _*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*m-n*l*m)+y*(+e*l*m-e*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+g*(+e*c*f-e*a*m-s*o*f+n*o*m+s*a*h-n*c*h)+p*(-r*a*h-e*l*f+e*a*d+r*o*f-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],_=t[12],y=t[13],g=t[14],p=t[15],R=f*g*c-y*d*c+y*l*m-a*g*m-f*l*p+a*d*p,b=_*d*c-h*g*c-_*l*m+o*g*m+h*l*p-o*d*p,M=h*y*c-_*f*c+_*a*m-o*y*m-h*a*p+o*f*p,D=_*f*l-h*y*l-_*a*d+o*y*d+h*a*g-o*f*g,C=e*R+n*b+r*M+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=R*T,t[1]=(y*d*s-f*g*s-y*r*m+n*g*m+f*r*p-n*d*p)*T,t[2]=(a*g*s-y*l*s+y*r*c-n*g*c-a*r*p+n*l*p)*T,t[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*m-n*l*m)*T,t[4]=b*T,t[5]=(h*g*s-_*d*s+_*r*m-e*g*m-h*r*p+e*d*p)*T,t[6]=(_*l*s-o*g*s-_*r*c+e*g*c+o*r*p-e*l*p)*T,t[7]=(o*d*s-h*l*s+h*r*c-e*d*c-o*r*m+e*l*m)*T,t[8]=M*T,t[9]=(_*f*s-h*y*s-_*n*m+e*y*m+h*n*p-e*f*p)*T,t[10]=(o*y*s-_*a*s+_*n*c-e*y*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*m-e*a*m)*T,t[12]=D*T,t[13]=(h*y*r-_*f*r+_*n*d-e*y*d-h*n*g+e*f*g)*T,t[14]=(_*a*r-o*y*r-_*n*l+e*y*l+o*n*g-e*a*g)*T,t[15]=(o*f*r-h*a*r+h*n*l-e*f*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,d=s*c,m=s*h,_=s*f,y=o*h,g=o*f,p=a*f,R=l*c,b=l*h,M=l*f,D=n.x,C=n.y,T=n.z;return r[0]=(1-(y+p))*D,r[1]=(m+M)*D,r[2]=(_-b)*D,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+p))*C,r[6]=(g+R)*C,r[7]=0,r[8]=(_+b)*T,r[9]=(g-R)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Wn.copy(this);const c=1/s,h=1/o,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,e.setFromRotationMatrix(Wn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ei,l=!1){const c=this.elements,h=2*s/(e-t),f=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let _,y;if(l)_=s/(o-s),y=o*s/(o-s);else if(a===ei)_=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Va)_=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ei,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-r),d=-(e+t)/(e-t),m=-(n+r)/(n-r);let _,y;if(l)_=1/(o-s),y=o/(o-s);else if(a===ei)_=-2/(o-s),y=-(o+s)/(o-s);else if(a===Va)_=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fr=new A,Wn=new we,U0=new A(0,0,0),N0=new A(1,1,1),Ai=new A,la=new A,Rn=new A,Nh=new we,Fh=new fs;class ii{constructor(t=0,e=0,n=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let F0=0;const Oh=new A,Or=new fs,ui=new we,ca=new A,ks=new A,O0=new A,B0=new fs,Bh=new A(1,0,0),zh=new A(0,1,0),Hh=new A(0,0,1),kh={type:"added"},z0={type:"removed"},Br={type:"childadded",child:null},Bl={type:"childremoved",child:null};class Fe extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new A,e=new ii,n=new fs,r=new A(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new re}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(ks,ca,this.up):ui.lookAt(ca,ks,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ui),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),Br.child=t,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(z0),Bl.child=t,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),Br.child=t,this.dispatchEvent(Br),Br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,O0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,B0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Fe.DEFAULT_UP=new A(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new A,hi=new A,zl=new A,fi=new A,zr=new A,Hr=new A,Gh=new A,Hl=new A,kl=new A,Gl=new A,Vl=new Re,Wl=new Re,Xl=new Re;class Nn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Xn.subVectors(t,e),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Xn.subVectors(r,e),hi.subVectors(n,e),zl.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(hi),l=Xn.dot(zl),c=hi.dot(hi),h=hi.dot(zl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Vl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Vl.fromBufferAttribute(t,e),Wl.fromBufferAttribute(t,n),Xl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Vl,s.x),o.addScaledVector(Wl,s.y),o.addScaledVector(Xl,s.z),o}static isFrontFacing(t,e,n,r){return Xn.subVectors(n,e),hi.subVectors(t,e),Xn.cross(hi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Xn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,n),Hr.subVectors(s,n),Hl.subVectors(t,n);const l=zr.dot(Hl),c=Hr.dot(Hl);if(l<=0&&c<=0)return e.copy(n);kl.subVectors(t,r);const h=zr.dot(kl),f=Hr.dot(kl);if(h>=0&&f<=h)return e.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zr,o);Gl.subVectors(t,s);const m=zr.dot(Gl),_=Hr.dot(Gl);if(_>=0&&m<=_)return e.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Hr,a);const g=h*_-m*f;if(g<=0&&f-h>=0&&m-_>=0)return Gh.subVectors(s,r),a=(f-h)/(f-h+(m-_)),e.copy(r).addScaledVector(Gh,a);const p=1/(g+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(zr,o).addScaledVector(Hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ua={h:0,s:0,l:0};function ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=fu(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ql(o,s,t+1/3),this.g=ql(o,s,t),this.b=ql(o,s,t-1/3)}return _e.colorSpaceToWorking(this,r),this}setStyle(t,e=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){const n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return _e.workingToColorSpace(an.copy(this),t),Math.round(le(an.r*255,0,255))*65536+Math.round(le(an.g*255,0,255))*256+Math.round(le(an.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(an.copy(this),e);const n=an.r,r=an.g,s=an.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Tn){_e.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,r=an.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(ua);const n=Qs(Ri.h,ua.h,e),r=Qs(Ri.s,ua.s,e),s=Qs(Ri.l,ua.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Jt;Jt.NAMES=sd;let H0=0;class Fi extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=ns,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=fc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Li extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new A,ha=new ft;let k0=0;class Fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rh,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}}class od extends Fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ad extends Fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let G0=0;const In=new we,Yl=new Fe,kr=new A,Cn=new pr,Gs=new pr,$e=new A;class Ee extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(id(t)?ad:od)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Cn.min,Gs.min),Cn.expandByPoint($e),$e.addVectors(Cn.max,Gs.max),Cn.expandByPoint($e)):(Cn.expandByPoint(Gs.min),Cn.expandByPoint(Gs.max))}Cn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(t,c),$e.add(kr)),r=Math.max(r,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new A,l[U]=new A;const c=new A,h=new A,f=new A,d=new ft,m=new ft,_=new ft,y=new A,g=new A;function p(U,S,E){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,E),h.sub(c),f.sub(c),m.sub(d),_.sub(d);const N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(N),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(N),a[U].add(y),a[S].add(y),a[E].add(y),l[U].add(g),l[S].add(g),l[E].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,S=R.length;U<S;++U){const E=R[U],N=E.start,V=E.count;for(let Y=N,$=N+V;Y<$;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const b=new A,M=new A,D=new A,C=new A;function T(U){D.fromBufferAttribute(r,U),C.copy(D);const S=a[U];b.copy(S),b.sub(D.multiplyScalar(D.dot(S))).normalize(),M.crossVectors(C,S);const N=M.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,N)}for(let U=0,S=R.length;U<S;++U){const E=R[U],N=E.start,V=E.count;for(let Y=N,$=N+V;Y<$;Y+=3)T(t.getX(Y+0)),T(t.getX(Y+1)),T(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A,f=new A;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new Fn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new we,Qi=new Za,fa=new mr,Wh=new A,da=new A,pa=new A,ma=new A,Zl=new A,ga=new A,Xh=new A,_a=new A;class Pt extends Fe{constructor(t=new Ee,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Zl.fromBufferAttribute(f,t),o?ga.addScaledVector(Zl,h):ga.addScaledVector(Zl.sub(e),h))}e.add(ga)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),Qi.copy(t.ray).recast(t.near),!(fa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(fa,Wh)===null||Qi.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Vh.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const g=d[_],p=o[g.materialIndex],R=Math.max(g.start,m.start),b=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=R,D=b;M<D;M+=3){const C=a.getX(M),T=a.getX(M+1),U=a.getX(M+2);r=va(this,p,t,n,c,h,f,C,T,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=_,p=y;g<p;g+=3){const R=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);r=va(this,o,t,n,c,h,f,R,b,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const g=d[_],p=o[g.materialIndex],R=Math.max(g.start,m.start),b=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=R,D=b;M<D;M+=3){const C=M,T=M+1,U=M+2;r=va(this,p,t,n,c,h,f,C,T,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=_,p=y;g<p;g+=3){const R=g,b=g+1,M=g+2;r=va(this,o,t,n,c,h,f,R,b,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function V0(i,t,e,n,r,s,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===mi,a),l===null)return null;_a.copy(a),_a.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_a);return c<e.near||c>e.far?null:{distance:c,point:_a.clone(),object:i}}function va(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,da),i.getVertexPosition(l,pa),i.getVertexPosition(c,ma);const h=V0(i,t,e,n,da,pa,ma,Xh);if(h){const f=new A;Nn.getBarycoord(Xh,da,pa,ma,f),r&&(h.uv=Nn.getInterpolatedAttribute(r,a,l,c,f,new ft)),s&&(h.uv1=Nn.getInterpolatedAttribute(s,a,l,c,f,new ft)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,l,c,f,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};Nn.getNormal(da,pa,ma,d.normal),h.face=d,h.barycoord=f}return h}class fe extends Ee{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(f,2));function _(y,g,p,R,b,M,D,C,T,U,S){const E=M/T,N=D/U,V=M/2,Y=D/2,$=C/2,et=T+1,J=U+1;let ct=0,K=0;const Et=new A;for(let Ct=0;Ct<J;Ct++){const bt=Ct*N-Y;for(let qt=0;qt<et;qt++){const ee=qt*E-V;Et[y]=ee*R,Et[g]=bt*b,Et[p]=$,c.push(Et.x,Et.y,Et.z),Et[y]=0,Et[g]=0,Et[p]=C>0?1:-1,h.push(Et.x,Et.y,Et.z),f.push(qt/T),f.push(1-Ct/U),ct+=1}}for(let Ct=0;Ct<U;Ct++)for(let bt=0;bt<T;bt++){const qt=d+bt+et*Ct,ee=d+bt+et*(Ct+1),pe=d+(bt+1)+et*(Ct+1),ce=d+(bt+1)+et*Ct;l.push(qt,ee,ce),l.push(ee,pe,ce),K+=6}a.addGroup(m,K,S),m+=K,d+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const r in n)t[r]=n[r]}return t}function W0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ld(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const X0={clone:cs,merge:pn};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=W0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cd extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new A,qh=new ft,Yh=new ft;class Un extends cd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Yh),e.subVectors(Yh,qh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gr=-90,Vr=1;class Z0 extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(Gr,Vr,t,e);r.layers=this.layers,this.add(r);const s=new Un(Gr,Vr,t,e);s.layers=this.layers,this.add(s);const o=new Un(Gr,Vr,t,e);o.layers=this.layers,this.add(o);const a=new Un(Gr,Vr,t,e);a.layers=this.layers,this.add(a);const l=new Un(Gr,Vr,t,e);l.layers=this.layers,this.add(l);const c=new Un(Gr,Vr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ud extends un{constructor(t=[],e=os,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class J0 extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ud(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fe(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ii});s.uniforms.tEquirect.value=e;const o=new Pt(r,s),a=e.minFilter;return e.minFilter===ur&&(e.minFilter=Qn),new Z0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class he extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class mu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new mu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class K0 extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class j0 extends un{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Ln,h=Ln,f,d){super(null,o,a,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zh extends Fn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wr=new we,Jh=new we,xa=[],$h=new pr,Q0=new we,Vs=new Pt,Ws=new mr;class Xs extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Q0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wr),$h.copy(t.boundingBox).applyMatrix4(Wr),this.boundingBox.union($h)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wr),Ws.copy(t.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wr),Jh.multiplyMatrices(n,Wr),Vs.matrixWorld=Jh,Vs.raycast(t,xa);for(let o=0,a=xa.length;o<a;o++){const l=xa[o];l.instanceId=s,l.object=this,e.push(l)}xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new j0(new Float32Array(r*this.count),r,this.count,lu,ti));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $l=new A,tm=new A,em=new re;class rr{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=$l.subVectors(n,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($l),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||em.getNormalMatrix(t),r=this.coplanarPoint($l).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new mr,nm=new ft(.5,.5),Ma=new A;class gu{constructor(t=new rr,e=new rr,n=new rr,r=new rr,s=new rr,o=new rr){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],_=s[8],y=s[9],g=s[10],p=s[11],R=s[12],b=s[13],M=s[14],D=s[15];if(r[0].setComponents(c-o,m-h,p-_,D-R).normalize(),r[1].setComponents(c+o,m+h,p+_,D+R).normalize(),r[2].setComponents(c+a,m+f,p+y,D+b).normalize(),r[3].setComponents(c-a,m-f,p-y,D-b).normalize(),n)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,m-d,p-g,D-M).normalize();else if(r[4].setComponents(c-l,m-d,p-g,D-M).normalize(),e===ei)r[5].setComponents(c+l,m+d,p+g,D+M).normalize();else if(e===Va)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);const e=nm.distanceTo(t.center);return tr.radius=.7071067811865476+e,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ma.x=r.normal.x>0?t.max.x:t.min.x,Ma.y=r.normal.y>0?t.max.y:t.min.y,Ma.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $r extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xa=new A,qa=new A,Kh=new we,qs=new Za,ya=new mr,Kl=new A,jh=new A;class za extends Fe{constructor(t=new Ee,e=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Xa.fromBufferAttribute(e,r-1),qa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Xa.distanceTo(qa);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ya.radius+=s,t.ray.intersectsSphere(ya)===!1)return;Kh.copy(r).invert(),qs.copy(t.ray).applyMatrix4(Kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=m,g=_-1;y<g;y+=c){const p=h.getX(y),R=h.getX(y+1),b=Sa(this,t,qs,l,p,R,y);b&&e.push(b)}if(this.isLineLoop){const y=h.getX(_-1),g=h.getX(m),p=Sa(this,t,qs,l,y,g,_-1);p&&e.push(p)}}else{const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let y=m,g=_-1;y<g;y+=c){const p=Sa(this,t,qs,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=Sa(this,t,qs,l,_-1,m,_-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sa(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Xa.fromBufferAttribute(a,r),qa.fromBufferAttribute(a,s),e.distanceSqToSegment(Xa,qa,Kl,jh)>n)return;Kl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Kl);if(!(c<t.near||c>t.far))return{distance:c,point:jh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Qh=new A,tf=new A;class Xr extends za{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Qh.fromBufferAttribute(e,r),tf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qh.distanceTo(tf);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hd extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ef=new we,jc=new Za,Ea=new mr,wa=new A;class qr extends Fe{constructor(t=new Ee,e=new hd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,t.ray.intersectsSphere(Ea)===!1)return;ef.copy(r).invert(),jc.copy(t.ray).applyMatrix4(ef);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,y=m;_<y;_++){const g=c.getX(_);wa.fromBufferAttribute(f,g),nf(wa,g,l,r,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,y=m;_<y;_++)wa.fromBufferAttribute(f,_),nf(wa,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nf(i,t,e,n,r,s,o){const a=jc.distanceSqToPoint(i);if(a<e){const l=new A;jc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class rf extends un{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fd extends un{constructor(t,e,n=hr,r,s,o,a=Ln,l=Ln,c,h=so,f=1){if(h!==so&&h!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new du(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dd extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kr extends Ee{constructor(t=1,e=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:r,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,d=e,m=2*f+d,_=n*2+s,y=r+1,g=new A,p=new A;for(let R=0;R<=_;R++){let b=0,M=0,D=0,C=0;if(R<=n){const S=R/n,E=S*Math.PI/2;M=-h-t*Math.cos(E),D=t*Math.sin(E),C=-t*Math.cos(E),b=S*f}else if(R<=n+s){const S=(R-n)/s;M=-h+S*e,D=t,C=0,b=f+S*d}else{const S=(R-n-s)/n,E=S*Math.PI/2;M=h+t*Math.sin(E),D=t*Math.cos(E),C=t*Math.sin(E),b=f+d+S*f}const T=Math.max(0,Math.min(1,b/m));let U=0;R===0?U=.5/r:R===_&&(U=-.5/r);for(let S=0;S<=r;S++){const E=S/r,N=E*Math.PI*2,V=Math.sin(N),Y=Math.cos(N);p.x=-D*Y,p.y=M,p.z=D*V,a.push(p.x,p.y,p.z),g.set(-D*Y,C,D*V),g.normalize(),l.push(g.x,g.y,g.z),c.push(E+U,T)}if(R>0){const S=(R-1)*y;for(let E=0;E<r;E++){const N=S+E,V=S+E+1,Y=R*y+E,$=R*y+E+1;o.push(N,V,Y),o.push(V,$,Y)}}}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class jr extends Ee{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new A,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const m=n+f/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tn extends Ee{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let _=0;const y=[],g=n/2;let p=0;R(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(m,2));function R(){const M=new A,D=new A;let C=0;const T=(e-t)/n;for(let U=0;U<=s;U++){const S=[],E=U/s,N=E*(e-t)+t;for(let V=0;V<=r;V++){const Y=V/r,$=Y*l+a,et=Math.sin($),J=Math.cos($);D.x=N*et,D.y=-E*n+g,D.z=N*J,f.push(D.x,D.y,D.z),M.set(et,T,J).normalize(),d.push(M.x,M.y,M.z),m.push(Y,1-E),S.push(_++)}y.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){const E=y[S][U],N=y[S+1][U],V=y[S+1][U+1],Y=y[S][U+1];(t>0||S!==0)&&(h.push(E,N,Y),C+=3),(e>0||S!==s-1)&&(h.push(N,V,Y),C+=3)}c.addGroup(p,C,0),p+=C}function b(M){const D=_,C=new ft,T=new A;let U=0;const S=M===!0?t:e,E=M===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,g*E,0),d.push(0,E,0),m.push(.5,.5),_++;const N=_;for(let V=0;V<=r;V++){const $=V/r*l+a,et=Math.cos($),J=Math.sin($);T.x=S*J,T.y=g*E,T.z=S*et,f.push(T.x,T.y,T.z),d.push(0,E,0),C.x=et*.5+.5,C.y=J*.5*E+.5,m.push(C.x,C.y),_++}for(let V=0;V<r;V++){const Y=D+V,$=N+V;M===!0?h.push($,$+1,Y):h.push($+1,$,Y),U+=3}c.addGroup(p,U,M===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends tn{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _u extends Ee{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(R){const b=new A,M=new A,D=new A;for(let C=0;C<e.length;C+=3)m(e[C+0],b),m(e[C+1],M),m(e[C+2],D),l(b,M,D,R)}function l(R,b,M,D){const C=D+1,T=[];for(let U=0;U<=C;U++){T[U]=[];const S=R.clone().lerp(M,U/C),E=b.clone().lerp(M,U/C),N=C-U;for(let V=0;V<=N;V++)V===0&&U===C?T[U][V]=S:T[U][V]=S.clone().lerp(E,V/N)}for(let U=0;U<C;U++)for(let S=0;S<2*(C-U)-1;S++){const E=Math.floor(S/2);S%2===0?(d(T[U][E+1]),d(T[U+1][E]),d(T[U][E])):(d(T[U][E+1]),d(T[U+1][E+1]),d(T[U+1][E]))}}function c(R){const b=new A;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(R),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function h(){const R=new A;for(let b=0;b<s.length;b+=3){R.x=s[b+0],R.y=s[b+1],R.z=s[b+2];const M=g(R)/2/Math.PI+.5,D=p(R)/Math.PI+.5;o.push(M,1-D)}_(),f()}function f(){for(let R=0;R<o.length;R+=6){const b=o[R+0],M=o[R+2],D=o[R+4],C=Math.max(b,M,D),T=Math.min(b,M,D);C>.9&&T<.1&&(b<.2&&(o[R+0]+=1),M<.2&&(o[R+2]+=1),D<.2&&(o[R+4]+=1))}}function d(R){s.push(R.x,R.y,R.z)}function m(R,b){const M=R*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function _(){const R=new A,b=new A,M=new A,D=new A,C=new ft,T=new ft,U=new ft;for(let S=0,E=0;S<s.length;S+=9,E+=6){R.set(s[S+0],s[S+1],s[S+2]),b.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),C.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),U.set(o[E+4],o[E+5]),D.copy(R).add(b).add(M).divideScalar(3);const N=g(D);y(C,E+0,R,N),y(T,E+2,b,N),y(U,E+4,M,N)}}function y(R,b,M,D){D<0&&R.x===1&&(o[b]=R.x-1),M.x===0&&M.z===0&&(o[b]=D/2/Math.PI+.5)}function g(R){return Math.atan2(R.z,-R.x)}function p(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.vertices,t.indices,t.radius,t.details)}}const Ta=new A,ba=new A,jl=new A,Aa=new Nn;class Ra extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(is*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:g,c:p}=Aa;if(y.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Aa.getNormal(jl),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let R=0;R<3;R++){const b=(R+1)%3,M=f[R],D=f[b],C=Aa[h[R]],T=Aa[h[b]],U=`${M}_${D}`,S=`${D}_${M}`;S in d&&d[S]?(jl.dot(d[S].normal)<=s&&(m.push(C.x,C.y,C.z),m.push(T.x,T.y,T.z)),d[S]=null):U in d||(d[U]={index0:c[R],index1:c[b],normal:jl.clone()})}}for(const _ in d)if(d[_]){const{index0:y,index1:g}=d[_];Ta.fromBufferAttribute(a,y),ba.fromBufferAttribute(a,g),m.push(Ta.x,Ta.y,Ta.z),m.push(ba.x,ba.y,ba.z)}this.setAttribute("position",new ae(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ft:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new A,r=[],s=[],o=[],a=new A,l=new we;for(let m=0;m<=t;m++){const _=m/t;r[m]=this.getTangentAt(_,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(le(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(le(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vu extends ri{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*f+this.aX,c=d*f+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class im extends vu{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xu(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,m*=h,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Ca=new A,Ql=new xu,tc=new xu,ec=new xu;class rm extends ri{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new A){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Ca.subVectors(r[0],r[1]).add(r[0]),c=Ca);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ca.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(h),m);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),Ql.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,y,g),tc.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,y,g),ec.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,y,g)}else this.curveType==="catmullrom"&&(Ql.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),tc.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),ec.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Ql.calc(l),tc.calc(l),ec.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sf(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function sm(i,t){const e=1-i;return e*e*t}function om(i,t){return 2*(1-i)*i*t}function am(i,t){return i*i*t}function to(i,t,e,n){return sm(i,t)+om(i,e)+am(i,n)}function lm(i,t){const e=1-i;return e*e*e*t}function cm(i,t){const e=1-i;return 3*e*e*i*t}function um(i,t){return 3*(1-i)*i*i*t}function hm(i,t){return i*i*i*t}function eo(i,t,e,n,r){return lm(i,t)+cm(i,e)+um(i,n)+hm(i,r)}class pd extends ri{constructor(t=new ft,e=new ft,n=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(eo(t,r.x,s.x,o.x,a.x),eo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fm extends ri{constructor(t=new A,e=new A,n=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new A){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(eo(t,r.x,s.x,o.x,a.x),eo(t,r.y,s.y,o.y,a.y),eo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class md extends ri{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends ri{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends ri{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(to(t,r.x,s.x,o.x),to(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pm extends ri{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(to(t,r.x,s.x,o.x),to(t,r.y,s.y,o.y),to(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(sf(a,l.x,c.x,h.x,f.x),sf(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ft().fromArray(r))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:im,CatmullRomCurve3:rm,CubicBezierCurve:pd,CubicBezierCurve3:fm,EllipseCurve:vu,LineCurve:md,LineCurve3:dm,QuadraticBezierCurve:gd,QuadraticBezierCurve3:pm,SplineCurve:_d});class mm extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Qc[r.type]().fromJSON(r))}return this}}class no extends mm{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new md(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new gd(this.currentPoint.clone(),new ft(t,e),new ft(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new pd(this.currentPoint.clone(),new ft(t,e),new ft(n,r),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _d(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new vu(t,e,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Js extends no{constructor(t){super(t),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new no().fromJSON(r))}return this}}function gm(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=vd(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=ym(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=e;d<r;d+=e){const m=i[d],_=i[d+1];m<a&&(a=m),_<l&&(l=_),m>h&&(h=m),_>f&&(f=_)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return co(s,o,e,a,l,c,0),o}function vd(i,t,e,n,r){let s;if(r===Dm(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=of(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=of(o/n|0,i[o],i[o+1],s);return s&&us(s,s.next)&&(ho(s),s=s.next),s}function fr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(us(e,e.next)||Ue(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function co(i,t,e,n,r,s,o){if(!i)return;!o&&s&&bm(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?vm(i,n,r,s):_m(i)){t.push(l.i,i.i,c.i),ho(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=xm(fr(i),t),co(i,t,e,n,r,s,2)):o===2&&Mm(i,t,e,n,r,s):co(fr(i),t,e,n,r,s,1);break}}}function _m(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),f=Math.min(a,l,c),d=Math.max(r,s,o),m=Math.max(a,l,c);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=m&&$s(r,a,s,l,o,c,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function vm(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Ue(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,d=o.y,m=Math.min(a,l,c),_=Math.min(h,f,d),y=Math.max(a,l,c),g=Math.max(h,f,d),p=tu(m,_,t,e,n),R=tu(y,g,t,e,n);let b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=R;){if(b.x>=m&&b.x<=y&&b.y>=_&&b.y<=g&&b!==r&&b!==o&&$s(a,h,l,f,c,d,b.x,b.y)&&Ue(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=m&&M.x<=y&&M.y>=_&&M.y<=g&&M!==r&&M!==o&&$s(a,h,l,f,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=m&&b.x<=y&&b.y>=_&&b.y<=g&&b!==r&&b!==o&&$s(a,h,l,f,c,d,b.x,b.y)&&Ue(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=R;){if(M.x>=m&&M.x<=y&&M.y>=_&&M.y<=g&&M!==r&&M!==o&&$s(a,h,l,f,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function xm(i,t){let e=i;do{const n=e.prev,r=e.next.next;!us(n,r)&&Md(n,e,e.next,r)&&uo(n,r)&&uo(r,n)&&(t.push(n.i,e.i,r.i),ho(e),ho(e.next),e=i=r),e=e.next}while(e!==i);return fr(e)}function Mm(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cm(o,a)){let l=yd(o,a);o=fr(o,o.next),l=fr(l,l.next),co(o,t,e,n,r,s,0),co(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function ym(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=vd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Rm(c))}r.sort(Sm);for(let s=0;s<r.length;s++)e=Em(r[s],e);return e}function Sm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Em(i,t){const e=wm(i,t);if(!e)return t;const n=yd(e,i);return fr(n,n.next),fr(e,e.next)}function wm(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(us(i,e))return e;do{if(us(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&xd(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const f=Math.abs(r-e.y)/(n-e.x);uo(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Tm(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Tm(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function bm(i,t,e,n){let r=i;do r.z===0&&(r.z=tu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Am(r)}function Am(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function tu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function $s(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&xd(i,t,e,n,r,s,o,a)}function Cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pm(i,t)&&(uo(i,t)&&uo(t,i)&&Lm(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||us(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function us(i,t){return i.x===t.x&&i.y===t.y}function Md(i,t,e,n){const r=La(Ue(i,t,e)),s=La(Ue(i,t,n)),o=La(Ue(e,n,i)),a=La(Ue(e,n,t));return!!(r!==s&&o!==a||r===0&&Pa(i,e,t)||s===0&&Pa(i,n,t)||o===0&&Pa(e,i,n)||a===0&&Pa(e,t,n))}function Pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function La(i){return i>0?1:i<0?-1:0}function Pm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Md(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function uo(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Lm(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yd(i,t){const e=eu(i.i,i.x,i.y),n=eu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function of(i,t,e,n){const r=eu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dm(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Im{static triangulate(t,e,n=2){return gm(t,e,n)}}class Qr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Qr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];af(t),lf(n,t);let o=t.length;e.forEach(af);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,lf(n,e[l]);const a=Im.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function af(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ts extends Ee{constructor(t=new Js([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Um;let b,M=!1,D,C,T,U;p&&(b=p.getSpacedPoints(h),M=!0,d=!1,D=p.computeFrenetFrames(h,!1),C=new A,T=new A,U=new A),d||(g=0,m=0,_=0,y=0);const S=a.extractPoints(c);let E=S.shape;const N=S.holes;if(!Qr.isClockWise(E)){E=E.reverse();for(let st=0,tt=N.length;st<tt;st++){const it=N[st];Qr.isClockWise(it)&&(N[st]=it.reverse())}}function Y(st){const it=10000000000000001e-36;let nt=st[0];for(let xt=1;xt<=st.length;xt++){const dt=xt%st.length,gt=st[dt],$t=gt.x-nt.x,jt=gt.y-nt.y,P=$t*$t+jt*jt,x=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(nt.x),Math.abs(nt.y)),G=it*x*x;if(P<=G){st.splice(dt,1),xt--;continue}nt=gt}}Y(E),N.forEach(Y);const $=N.length,et=E;for(let st=0;st<$;st++){const tt=N[st];E=E.concat(tt)}function J(st,tt,it){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(tt,it)}const ct=E.length;function K(st,tt,it){let nt,xt,dt;const gt=st.x-tt.x,$t=st.y-tt.y,jt=it.x-st.x,P=it.y-st.y,x=gt*gt+$t*$t,G=gt*P-$t*jt;if(Math.abs(G)>Number.EPSILON){const Z=Math.sqrt(x),ut=Math.sqrt(jt*jt+P*P),Q=tt.x-$t/Z,Ht=tt.y+gt/Z,_t=it.x-P/ut,Mt=it.y+jt/ut,Dt=((_t-Q)*P-(Mt-Ht)*jt)/(gt*P-$t*jt);nt=Q+gt*Dt-st.x,xt=Ht+$t*Dt-st.y;const ht=nt*nt+xt*xt;if(ht<=2)return new ft(nt,xt);dt=Math.sqrt(ht/2)}else{let Z=!1;gt>Number.EPSILON?jt>Number.EPSILON&&(Z=!0):gt<-Number.EPSILON?jt<-Number.EPSILON&&(Z=!0):Math.sign($t)===Math.sign(P)&&(Z=!0),Z?(nt=-$t,xt=gt,dt=Math.sqrt(x)):(nt=gt,xt=$t,dt=Math.sqrt(x/2))}return new ft(nt/dt,xt/dt)}const Et=[];for(let st=0,tt=et.length,it=tt-1,nt=st+1;st<tt;st++,it++,nt++)it===tt&&(it=0),nt===tt&&(nt=0),Et[st]=K(et[st],et[it],et[nt]);const Ct=[];let bt,qt=Et.concat();for(let st=0,tt=$;st<tt;st++){const it=N[st];bt=[];for(let nt=0,xt=it.length,dt=xt-1,gt=nt+1;nt<xt;nt++,dt++,gt++)dt===xt&&(dt=0),gt===xt&&(gt=0),bt[nt]=K(it[nt],it[dt],it[gt]);Ct.push(bt),qt=qt.concat(bt)}let ee;if(g===0)ee=Qr.triangulateShape(et,N);else{const st=[],tt=[];for(let it=0;it<g;it++){const nt=it/g,xt=m*Math.cos(nt*Math.PI/2),dt=_*Math.sin(nt*Math.PI/2)+y;for(let gt=0,$t=et.length;gt<$t;gt++){const jt=J(et[gt],Et[gt],dt);zt(jt.x,jt.y,-xt),nt===0&&st.push(jt)}for(let gt=0,$t=$;gt<$t;gt++){const jt=N[gt];bt=Ct[gt];const P=[];for(let x=0,G=jt.length;x<G;x++){const Z=J(jt[x],bt[x],dt);zt(Z.x,Z.y,-xt),nt===0&&P.push(Z)}nt===0&&tt.push(P)}}ee=Qr.triangulateShape(st,tt)}const pe=ee.length,ce=_+y;for(let st=0;st<ct;st++){const tt=d?J(E[st],qt[st],ce):E[st];M?(T.copy(D.normals[0]).multiplyScalar(tt.x),C.copy(D.binormals[0]).multiplyScalar(tt.y),U.copy(b[0]).add(T).add(C),zt(U.x,U.y,U.z)):zt(tt.x,tt.y,0)}for(let st=1;st<=h;st++)for(let tt=0;tt<ct;tt++){const it=d?J(E[tt],qt[tt],ce):E[tt];M?(T.copy(D.normals[st]).multiplyScalar(it.x),C.copy(D.binormals[st]).multiplyScalar(it.y),U.copy(b[st]).add(T).add(C),zt(U.x,U.y,U.z)):zt(it.x,it.y,f/h*st)}for(let st=g-1;st>=0;st--){const tt=st/g,it=m*Math.cos(tt*Math.PI/2),nt=_*Math.sin(tt*Math.PI/2)+y;for(let xt=0,dt=et.length;xt<dt;xt++){const gt=J(et[xt],Et[xt],nt);zt(gt.x,gt.y,f+it)}for(let xt=0,dt=N.length;xt<dt;xt++){const gt=N[xt];bt=Ct[xt];for(let $t=0,jt=gt.length;$t<jt;$t++){const P=J(gt[$t],bt[$t],nt);M?zt(P.x,P.y+b[h-1].y,b[h-1].x+it):zt(P.x,P.y,f+it)}}}j(),rt();function j(){const st=r.length/3;if(d){let tt=0,it=ct*tt;for(let nt=0;nt<pe;nt++){const xt=ee[nt];Ot(xt[2]+it,xt[1]+it,xt[0]+it)}tt=h+g*2,it=ct*tt;for(let nt=0;nt<pe;nt++){const xt=ee[nt];Ot(xt[0]+it,xt[1]+it,xt[2]+it)}}else{for(let tt=0;tt<pe;tt++){const it=ee[tt];Ot(it[2],it[1],it[0])}for(let tt=0;tt<pe;tt++){const it=ee[tt];Ot(it[0]+ct*h,it[1]+ct*h,it[2]+ct*h)}}n.addGroup(st,r.length/3-st,0)}function rt(){const st=r.length/3;let tt=0;Lt(et,tt),tt+=et.length;for(let it=0,nt=N.length;it<nt;it++){const xt=N[it];Lt(xt,tt),tt+=xt.length}n.addGroup(st,r.length/3-st,1)}function Lt(st,tt){let it=st.length;for(;--it>=0;){const nt=it;let xt=it-1;xt<0&&(xt=st.length-1);for(let dt=0,gt=h+g*2;dt<gt;dt++){const $t=ct*dt,jt=ct*(dt+1),P=tt+nt+$t,x=tt+xt+$t,G=tt+xt+jt,Z=tt+nt+jt;ie(P,x,G,Z)}}}function zt(st,tt,it){l.push(st),l.push(tt),l.push(it)}function Ot(st,tt,it){ge(st),ge(tt),ge(it);const nt=r.length/3,xt=R.generateTopUV(n,r,nt-3,nt-2,nt-1);I(xt[0]),I(xt[1]),I(xt[2])}function ie(st,tt,it,nt){ge(st),ge(tt),ge(nt),ge(tt),ge(it),ge(nt);const xt=r.length/3,dt=R.generateSideWallUV(n,r,xt-6,xt-3,xt-2,xt-1);I(dt[0]),I(dt[1]),I(dt[3]),I(dt[1]),I(dt[2]),I(dt[3])}function ge(st){r.push(l[st*3+0]),r.push(l[st*3+1]),r.push(l[st*3+2])}function I(st){s.push(st.x),s.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nm(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Qc[r.type]().fromJSON(r)),new ts(n,t.options)}}const Um={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ft(s,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[r*3],m=t[r*3+1],_=t[r*3+2],y=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-f),new ft(d,1-_),new ft(y,1-p)]:[new ft(a,1-l),new ft(h,1-f),new ft(m,1-_),new ft(g,1-p)]}};function Nm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ln extends _u{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ln(t.radius,t.detail)}}class wn extends Ee{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,f=t/a,d=e/l,m=[],_=[],y=[],g=[];for(let p=0;p<h;p++){const R=p*d-o;for(let b=0;b<c;b++){const M=b*f-s;_.push(M,-R,0),y.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const b=R+c*p,M=R+c*(p+1),D=R+1+c*(p+1),C=R+1+c*p;m.push(b,M,C),m.push(M,D,C)}this.setIndex(m),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ke extends Ee{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new A,d=new A,m=[],_=[],y=[],g=[];for(let p=0;p<=n;p++){const R=[],b=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){const C=D/e;f.x=-t*Math.cos(r+C*s)*Math.sin(o+b*a),f.y=t*Math.cos(o+b*a),f.z=t*Math.sin(r+C*s)*Math.sin(o+b*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),g.push(C+M,1-b),R.push(c++)}h.push(R)}for(let p=0;p<n;p++)for(let R=0;R<e;R++){const b=h[p][R+1],M=h[p][R],D=h[p+1][R],C=h[p+1][R+1];(p!==0||o>0)&&m.push(b,M,C),(p!==n-1||l<Math.PI)&&m.push(M,D,C)}this.setIndex(m),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ar extends Ee{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new A,f=new A,d=new A;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const y=_/r*s,g=m/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,g=(r+1)*(m-1)+_-1,p=(r+1)*(m-1)+_,R=(r+1)*m+_;o.push(y,g,R),o.push(g,p,R)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fm extends Fi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Sn extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sd extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Om extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bm extends $r{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Mu extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zm extends Mu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const nc=new we,cf=new A,uf=new A;class Ed{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gu,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uf),e.updateMatrixWorld(),nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hf=new we,Ys=new A,ic=new A;class Hm extends Ed{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),ic.copy(n.position),ic.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ic),n.updateMatrixWorld(),r.makeTranslation(-Ys.x,-Ys.y,-Ys.z),hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf,n.coordinateSystem,n.reversedDepth)}}class ff extends Mu{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yu extends cd{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class km extends Ed{constructor(){super(new yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class df extends Mu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new km}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gm extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const pf=new we;class Vm{constructor(t,e,n=0,r=1/0){this.ray=new Za(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new pu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(t,e=!0,n=[]){return nu(t,this,n,e),n.sort(mf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)nu(t[r],this,n,e);return n.sort(mf),n}}function mf(i,t){return i.distance-t.distance}function nu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)nu(s[o],t,e,!0)}}function gf(i,t,e,n){const r=Wm(n);switch(e){case Kf:return i*t;case lu:return i*t/r.components*r.byteLength;case cu:return i*t/r.components*r.byteLength;case Qf:return i*t*2/r.components*r.byteLength;case uu:return i*t*2/r.components*r.byteLength;case jf:return i*t*3/r.components*r.byteLength;case qn:return i*t*4/r.components*r.byteLength;case hu:return i*t*4/r.components*r.byteLength;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Ac:return Math.max(i,16)*Math.max(t,8)/4;case wc:case bc:return Math.max(i,8)*Math.max(t,8)/2;case Rc:case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $c:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(i){switch(i){case ni:case Yf:return{byteLength:1,components:1};case io:case Zf:case fo:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case hr:case su:case ti:return{byteLength:4,components:1};case Jf:case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);function wd(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Xm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],y=f[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,f[d]=y)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const y=f[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mg=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_g=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
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
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Wg=`struct PhysicalMaterial {
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
}`,Xg=`
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e_=`#if defined( USE_POINTS_UV )
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
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
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
#endif`,m_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P_=`float getShadowMask() {
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
}`,L_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,N_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q_=`uniform sampler2D t2D;
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
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
}`,j_=`#if DEPTH_PACKING == 3200
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
}`,Q_=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#define LAMBERT
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,dv=`#define PHONG
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
}`,pv=`#define PHONG
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
}`,mv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
}`,_v=`#define TOON
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
}`,vv=`#define TOON
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
}`,xv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,Ev=`uniform float rotation;
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
}`,wv=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:Zm,alphamap_pars_fragment:Jm,alphatest_fragment:$m,alphatest_pars_fragment:Km,aomap_fragment:jm,aomap_pars_fragment:Qm,batching_pars_vertex:tg,batching_vertex:eg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:rg,iridescence_fragment:sg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:ug,color_fragment:hg,color_pars_fragment:fg,color_pars_vertex:dg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:Mg,emissivemap_pars_fragment:yg,colorspace_fragment:Sg,colorspace_pars_fragment:Eg,envmap_fragment:wg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:bg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Bg,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Pg,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Fg,lights_pars_begin:Og,lights_toon_fragment:zg,lights_toon_pars_fragment:Hg,lights_phong_fragment:kg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Kg,map_fragment:jg,map_pars_fragment:Qg,map_particle_fragment:t_,map_particle_pars_fragment:e_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:r_,morphcolor_vertex:s_,morphnormal_vertex:o_,morphtarget_pars_vertex:a_,morphtarget_vertex:l_,normal_fragment_begin:c_,normal_fragment_maps:u_,normal_pars_fragment:h_,normal_pars_vertex:f_,normal_vertex:d_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:__,iridescence_pars_fragment:v_,opaque_fragment:x_,packing:M_,premultiplied_alpha_fragment:y_,project_vertex:S_,dithering_fragment:E_,dithering_pars_fragment:w_,roughnessmap_fragment:T_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:R_,shadowmap_vertex:C_,shadowmask_pars_fragment:P_,skinbase_vertex:L_,skinning_pars_vertex:D_,skinning_vertex:I_,skinnormal_vertex:U_,specularmap_fragment:N_,specularmap_pars_fragment:F_,tonemapping_fragment:O_,tonemapping_pars_fragment:B_,transmission_fragment:z_,transmission_pars_fragment:H_,uv_pars_fragment:k_,uv_pars_vertex:G_,uv_vertex:V_,worldpos_vertex:W_,background_vert:X_,background_frag:q_,backgroundCube_vert:Y_,backgroundCube_frag:Z_,cube_vert:J_,cube_frag:$_,depth_vert:K_,depth_frag:j_,distanceRGBA_vert:Q_,distanceRGBA_frag:tv,equirect_vert:ev,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:rv,meshbasic_vert:sv,meshbasic_frag:ov,meshlambert_vert:av,meshlambert_frag:lv,meshmatcap_vert:cv,meshmatcap_frag:uv,meshnormal_vert:hv,meshnormal_frag:fv,meshphong_vert:dv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:_v,meshtoon_frag:vv,points_vert:xv,points_frag:Mv,shadow_vert:yv,shadow_frag:Sv,sprite_vert:Ev,sprite_frag:wv},Rt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},jn={basic:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:pn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:pn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:pn([Rt.points,Rt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:pn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:pn([Rt.common,Rt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:pn([Rt.sprite,Rt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:pn([Rt.common,Rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:pn([Rt.lights,Rt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};jn.physical={uniforms:pn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Da={r:0,b:0,g:0},er=new ii,Tv=new we;function bv(i,t,e,n,r,s,o){const a=new Jt(0);let l=s===!0?0:1,c,h,f=null,d=0,m=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function y(b){let M=!1;const D=_(b);D===null?p(a,l):D&&D.isColor&&(p(D,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,M){const D=_(M);D&&(D.isCubeTexture||D.mapping===Ya)?(h===void 0&&(h=new Pt(new fe(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:cs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),er.copy(M.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(er)),h.material.toneMapped=_e.getTransfer(D.colorSpace)!==Ae,(f!==D||d!==D.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=D,d=D.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Pt(new wn(2,2),new mn({name:"BackgroundMaterial",uniforms:cs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=_e.getTransfer(D.colorSpace)!==Ae,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=D,d=D.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Da,ld(i)),n.buffers.color.setClear(Da.r,Da.g,Da.b,M,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:y,addToRenderList:g,dispose:R}}function Av(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(E,N,V,Y,$){let et=!1;const J=f(Y,V,N);s!==J&&(s=J,c(s.object)),et=m(E,Y,V,$),et&&_(E,Y,V,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,M(E,N,V,Y),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,N,V){const Y=V.wireframe===!0;let $=n[E.id];$===void 0&&($={},n[E.id]=$);let et=$[N.id];et===void 0&&(et={},$[N.id]=et);let J=et[Y];return J===void 0&&(J=d(l()),et[Y]=J),J}function d(E){const N=[],V=[],Y=[];for(let $=0;$<e;$++)N[$]=0,V[$]=0,Y[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:Y,object:E,attributes:{},index:null}}function m(E,N,V,Y){const $=s.attributes,et=N.attributes;let J=0;const ct=V.getAttributes();for(const K in ct)if(ct[K].location>=0){const Ct=$[K];let bt=et[K];if(bt===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),Ct===void 0||Ct.attribute!==bt||bt&&Ct.data!==bt.data)return!0;J++}return s.attributesNum!==J||s.index!==Y}function _(E,N,V,Y){const $={},et=N.attributes;let J=0;const ct=V.getAttributes();for(const K in ct)if(ct[K].location>=0){let Ct=et[K];Ct===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(Ct=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(Ct=E.instanceColor));const bt={};bt.attribute=Ct,Ct&&Ct.data&&(bt.data=Ct.data),$[K]=bt,J++}s.attributes=$,s.attributesNum=J,s.index=Y}function y(){const E=s.newAttributes;for(let N=0,V=E.length;N<V;N++)E[N]=0}function g(E){p(E,0)}function p(E,N){const V=s.newAttributes,Y=s.enabledAttributes,$=s.attributeDivisors;V[E]=1,Y[E]===0&&(i.enableVertexAttribArray(E),Y[E]=1),$[E]!==N&&(i.vertexAttribDivisor(E,N),$[E]=N)}function R(){const E=s.newAttributes,N=s.enabledAttributes;for(let V=0,Y=N.length;V<Y;V++)N[V]!==E[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function b(E,N,V,Y,$,et,J){J===!0?i.vertexAttribIPointer(E,N,V,$,et):i.vertexAttribPointer(E,N,V,Y,$,et)}function M(E,N,V,Y){y();const $=Y.attributes,et=V.getAttributes(),J=N.defaultAttributeValues;for(const ct in et){const K=et[ct];if(K.location>=0){let Et=$[ct];if(Et===void 0&&(ct==="instanceMatrix"&&E.instanceMatrix&&(Et=E.instanceMatrix),ct==="instanceColor"&&E.instanceColor&&(Et=E.instanceColor)),Et!==void 0){const Ct=Et.normalized,bt=Et.itemSize,qt=t.get(Et);if(qt===void 0)continue;const ee=qt.buffer,pe=qt.type,ce=qt.bytesPerElement,j=pe===i.INT||pe===i.UNSIGNED_INT||Et.gpuType===su;if(Et.isInterleavedBufferAttribute){const rt=Et.data,Lt=rt.stride,zt=Et.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<K.locationSize;Ot++)p(K.location+Ot,rt.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<K.locationSize;Ot++)g(K.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ot=0;Ot<K.locationSize;Ot++)b(K.location+Ot,bt/K.locationSize,pe,Ct,Lt*ce,(zt+bt/K.locationSize*Ot)*ce,j)}else{if(Et.isInstancedBufferAttribute){for(let rt=0;rt<K.locationSize;rt++)p(K.location+rt,Et.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let rt=0;rt<K.locationSize;rt++)g(K.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let rt=0;rt<K.locationSize;rt++)b(K.location+rt,bt/K.locationSize,pe,Ct,bt*ce,bt/K.locationSize*rt*ce,j)}}else if(J!==void 0){const Ct=J[ct];if(Ct!==void 0)switch(Ct.length){case 2:i.vertexAttrib2fv(K.location,Ct);break;case 3:i.vertexAttrib3fv(K.location,Ct);break;case 4:i.vertexAttrib4fv(K.location,Ct);break;default:i.vertexAttrib1fv(K.location,Ct)}}}}R()}function D(){U();for(const E in n){const N=n[E];for(const V in N){const Y=N[V];for(const $ in Y)h(Y[$].object),delete Y[$];delete N[V]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const N=n[E.id];for(const V in N){const Y=N[V];for(const $ in Y)h(Y[$].object),delete Y[$];delete N[V]}delete n[E.id]}function T(E){for(const N in n){const V=n[N];if(V[E.id]===void 0)continue;const Y=V[E.id];for(const $ in Y)h(Y[$].object),delete Y[$];delete V[E.id]}}function U(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:R}}function Rv(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];e.update(m,n,1)}function l(c,h,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=h[y]*d[y];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const U=T===fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ti&&!U)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:D,maxSamples:C}}function Pv(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new rr,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||_===null||_.length===0||s&&!g)s?h(null):c();else{const R=s?0:n,b=R*4;let M=p.clippingState||null;l.value=M,M=h(_,d,b,m);for(let D=0;D!==b;++D)M[D]=e[D];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,_){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const p=m+y*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,M=m;b!==y;++b,M+=4)o.copy(f[b]).applyMatrix4(R,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Lv(i){let t=new WeakMap;function e(o,a){return a===Mc?o.mapping=os:a===yc&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mc||a===yc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const es=4,_f=[.125,.215,.35,.446,.526,.582],lr=20,rc=new yu,vf=new Jt;let sc=null,oc=0,ac=0,lc=!1;const sr=(1+Math.sqrt(5))/2,Yr=1/sr,xf=[new A(-sr,Yr,0),new A(sr,Yr,0),new A(-Yr,0,sr),new A(Yr,0,sr),new A(0,sr,-Yr),new A(0,sr,Yr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Dv=new A;class Mf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Dv}=s;sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sc,oc,ac),this._renderer.xr.enabled=lc,t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:fo,format:qn,colorSpace:ls,depthBuffer:!1},r=yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iv(s)),this._blurMaterial=Uv(s,t,e)}return r}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,rc)}_sceneToCubeUV(t,e,n,r,s){const l=new Un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(vf),f.toneMapping=Ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const y=new Li({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Pt(new fe,y);let p=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,p=!0):(y.color.copy(vf),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const D=this._cubeSize;Ia(r,M*D,b>2?D:0,D,D),f.setRenderTarget(r),p&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=d,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===os||t.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,rc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xf[(r-s-1)%xf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Pt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*lr-1),y=s/_,g=isFinite(s)?1+Math.floor(h*y):lr;g>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${lr}`);const p=[];let R=0;for(let T=0;T<lr;++T){const U=T/y,S=Math.exp(-U*U/2);p.push(S),T===0?R+=S:T<g&&(R+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/R;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const M=this._sizeLods[r],D=3*M*(r>b-es?r-b+es:0),C=4*(this._cubeSize-M);Ia(e,D,C,3*M,2*M),l.setRenderTarget(e),l.render(f,rc)}}function Iv(i){const t=[],e=[],n=[];let r=i;const s=i-es+1+_f.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-es?l=_f[o-i+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,y=3,g=2,p=1,R=new Float32Array(y*_*m),b=new Float32Array(g*_*m),M=new Float32Array(p*_*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,U=C>2?0:-1,S=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];R.set(S,y*_*C),b.set(d,g*_*C);const E=[C,C,C,C,C,C];M.set(E,p*_*C)}const D=new Ee;D.setAttribute("position",new Fn(R,y)),D.setAttribute("uv",new Fn(b,g)),D.setAttribute("faceIndex",new Fn(M,p)),t.push(D),r>es&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yf(i,t,e){const n=new Ni(i,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Uv(i,t,e){const n=new Float32Array(lr),r=new A(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Sf(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ef(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function Nv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mc||l===yc,h=l===os||l===as;if(c||h){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Mf(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Mf(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ov(i,t,e,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const R=m.array;y=m.version;for(let b=0,M=R.length;b<M;b+=3){const D=R[b+0],C=R[b+1],T=R[b+2];d.push(D,C,C,T,T,D)}}else if(_!==void 0){const R=_.array;y=_.version;for(let b=0,M=R.length/3-1;b<M;b+=3){const D=b+0,C=b+1,T=b+2;d.push(D,C,C,T,T,D)}}else return;const g=new(id(d)?ad:od)(d,1);g.version=y;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Bv(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,d*o,_),e.update(m,n,_))}function h(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];e.update(g,n,1)}function f(d,m,_,y){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,y,0,_);let p=0;for(let R=0;R<_;R++)p+=m[R]*y[R];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function zv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Hv(i,t,e){const n=new WeakMap,r=new Re;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),_===!0&&(b=2),y===!0&&(b=3);let M=a.attributes.position.count*b,D=1;M>t.maxTextureSize&&(D=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*D*4*f),T=new rd(C,M,D,f);T.type=ti,T.needsUpdate=!0;const U=b*4;for(let E=0;E<f;E++){const N=g[E],V=p[E],Y=R[E],$=M*D*4*E;for(let et=0;et<N.count;et++){const J=et*U;m===!0&&(r.fromBufferAttribute(N,et),C[$+J+0]=r.x,C[$+J+1]=r.y,C[$+J+2]=r.z,C[$+J+3]=0),_===!0&&(r.fromBufferAttribute(V,et),C[$+J+4]=r.x,C[$+J+5]=r.y,C[$+J+6]=r.z,C[$+J+7]=0),y===!0&&(r.fromBufferAttribute(Y,et),C[$+J+8]=r.x,C[$+J+9]=r.y,C[$+J+10]=r.z,C[$+J+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new ft(M,D)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function kv(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Td=new un,wf=new fd(1,1),bd=new rd,Ad=new D0,Rd=new ud,Tf=[],bf=[],Af=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Tf[r];if(s===void 0&&(s=new Float32Array(r),Tf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ja(i,t){let e=bf[t];e===void 0&&(e=new Int32Array(t),bf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function qv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Cf.set(n),i.uniformMatrix2fv(this.addr,!1,Cf),Xe(e,n)}}function Yv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Rf.set(n),i.uniformMatrix3fv(this.addr,!1,Rf),Xe(e,n)}}function Zv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Af.set(n),i.uniformMatrix4fv(this.addr,!1,Af),Xe(e,n)}}function Jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Qv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function ix(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wf.compareFunction=nd,s=wf):s=Td,e.setTexture2D(t||s,r)}function rx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ad,r)}function sx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Rd,r)}function ox(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||bd,r)}function ax(i){switch(i){case 5126:return Gv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return $v;case 35668:case 35672:return Kv;case 35669:case 35673:return jv;case 5125:return Qv;case 36294:return tx;case 36295:return ex;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(i,t){i.uniform1fv(this.addr,t)}function cx(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function ux(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function hx(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function fx(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dx(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function px(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mx(i,t){i.uniform1iv(this.addr,t)}function gx(i,t){i.uniform2iv(this.addr,t)}function _x(i,t){i.uniform3iv(this.addr,t)}function vx(i,t){i.uniform4iv(this.addr,t)}function xx(i,t){i.uniform1uiv(this.addr,t)}function Mx(i,t){i.uniform2uiv(this.addr,t)}function yx(i,t){i.uniform3uiv(this.addr,t)}function Sx(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){const n=this.cache,r=t.length,s=Ja(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Td,s[o])}function wx(i,t,e){const n=this.cache,r=t.length,s=Ja(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ad,s[o])}function Tx(i,t,e){const n=this.cache,r=t.length,s=Ja(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Rd,s[o])}function bx(i,t,e){const n=this.cache,r=t.length,s=Ja(e,r);We(n,s)||(i.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||bd,s[o])}function Ax(i){switch(i){case 5126:return lx;case 35664:return cx;case 35665:return ux;case 35666:return hx;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return _x;case 35669:case 35673:return vx;case 5125:return xx;case 36294:return Mx;case 36295:return yx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return bx}}class Rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ax(e.type)}}class Cx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ax(e.type)}}class Px{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function Pf(i,t){i.seq.push(t),i.map[t.id]=t}function Lx(i,t,e){const n=i.name,r=n.length;for(cc.lastIndex=0;;){const s=cc.exec(n),o=cc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pf(e,c===void 0?new Rx(a,i,t):new Cx(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Px(a),Pf(e,f)),e=f}}}class Ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Lx(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Lf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dx=37297;let Ix=0;function Ux(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Df=new re;function Nx(i){_e._getMatrix(Df,_e.workingColorSpace,i);const t=`mat3( ${Df.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Ga:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function If(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ux(i.getShaderSource(t),a)}else return s}function Fx(i,t){const e=Nx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ox(i,t){let e;switch(t){case Yp:e="Linear";break;case Zp:e="Reinhard";break;case Jp:e="Cineon";break;case Xf:e="ACESFilmic";break;case Kp:e="AgX";break;case jp:e="Neutral";break;case $p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ua=new A;function Bx(){_e.getLuminanceCoefficients(Ua);const i=Ua.x.toFixed(4),t=Ua.y.toFixed(4),e=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Hx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ks(i){return i!==""}function Uf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(i){return i.replace(Gx,Wx)}const Vx=new Map;function Wx(i,t){let e=se[t];if(e===void 0){const n=Vx.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return iu(e)}const Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(i){return i.replace(Xx,qx)}function qx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Of(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Yx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function Zx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function $x(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wf:t="ENVMAP_BLENDING_MULTIPLY";break;case Xp:t="ENVMAP_BLENDING_MIX";break;case qp:t="ENVMAP_BLENDING_ADD";break}return t}function Kx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Yx(e),c=Zx(e),h=Jx(e),f=$x(e),d=Kx(e),m=zx(e),_=Hx(s),y=r.createProgram();let g,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?se.tonemapping_pars_fragment:"",e.toneMapping!==Ui?Ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Fx("linearToOutputTexel",e.outputColorSpace),Bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=iu(o),o=Uf(o,e),o=Nf(o,e),a=iu(a),a=Uf(a,e),a=Nf(a,e),o=Ff(o),a=Ff(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=R+g+o,M=R+p+a,D=Lf(r,r.VERTEX_SHADER,b),C=Lf(r,r.FRAGMENT_SHADER,M);r.attachShader(y,D),r.attachShader(y,C),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(N){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(y)||"",Y=r.getShaderInfoLog(D)||"",$=r.getShaderInfoLog(C)||"",et=V.trim(),J=Y.trim(),ct=$.trim();let K=!0,Et=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,D,C);else{const Ct=If(r,D,"vertex"),bt=If(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+et+`
`+Ct+`
`+bt)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(J===""||ct==="")&&(Et=!1);Et&&(N.diagnostics={runnable:K,programLog:et,vertexShader:{log:J,prefix:g},fragmentShader:{log:ct,prefix:p}})}r.deleteShader(D),r.deleteShader(C),U=new Ha(r,y),S=kx(r,y)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,Dx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ix++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=C,this}let Qx=0;class tM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new eM(t),e.set(t,n)),n}}class eM{constructor(t){this.id=Qx++,this.code=t,this.usedTimes=0}}function nM(i,t,e,n,r,s,o){const a=new pu,l=new tM,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,E,N,V,Y){const $=V.fog,et=Y.geometry,J=S.isMeshStandardMaterial?V.environment:null,ct=(S.isMeshStandardMaterial?e:t).get(S.envMap||J),K=ct&&ct.mapping===Ya?ct.image.height:null,Et=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Ct=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,bt=Ct!==void 0?Ct.length:0;let qt=0;et.morphAttributes.position!==void 0&&(qt=1),et.morphAttributes.normal!==void 0&&(qt=2),et.morphAttributes.color!==void 0&&(qt=3);let ee,pe,ce,j;if(Et){const ue=jn[Et];ee=ue.vertexShader,pe=ue.fragmentShader}else ee=S.vertexShader,pe=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const rt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),zt=Y.isInstancedMesh===!0,Ot=Y.isBatchedMesh===!0,ie=!!S.map,ge=!!S.matcap,I=!!ct,st=!!S.aoMap,tt=!!S.lightMap,it=!!S.bumpMap,nt=!!S.normalMap,xt=!!S.displacementMap,dt=!!S.emissiveMap,gt=!!S.metalnessMap,$t=!!S.roughnessMap,jt=S.anisotropy>0,P=S.clearcoat>0,x=S.dispersion>0,G=S.iridescence>0,Z=S.sheen>0,ut=S.transmission>0,Q=jt&&!!S.anisotropyMap,Ht=P&&!!S.clearcoatMap,_t=P&&!!S.clearcoatNormalMap,Mt=P&&!!S.clearcoatRoughnessMap,Dt=G&&!!S.iridescenceMap,ht=G&&!!S.iridescenceThicknessMap,wt=Z&&!!S.sheenColorMap,Wt=Z&&!!S.sheenRoughnessMap,It=!!S.specularMap,St=!!S.specularColorMap,Qt=!!S.specularIntensityMap,O=ut&&!!S.transmissionMap,mt=ut&&!!S.thicknessMap,vt=!!S.gradientMap,Ut=!!S.alphaMap,lt=S.alphaTest>0,at=!!S.alphaHash,Bt=!!S.extensions;let te=Ui;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(te=i.toneMapping);const ve={shaderID:Et,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:pe,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&Y._colorsTexture!==null,instancing:zt,instancingColor:zt&&Y.instanceColor!==null,instancingMorph:zt&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ls,alphaToCoverage:!!S.alphaToCoverage,map:ie,matcap:ge,envMap:I,envMapMode:I&&ct.mapping,envMapCubeUVHeight:K,aoMap:st,lightMap:tt,bumpMap:it,normalMap:nt,displacementMap:d&&xt,emissiveMap:dt,normalMapObjectSpace:nt&&S.normalMapType===e0,normalMapTangentSpace:nt&&S.normalMapType===ed,metalnessMap:gt,roughnessMap:$t,anisotropy:jt,anisotropyMap:Q,clearcoat:P,clearcoatMap:Ht,clearcoatNormalMap:_t,clearcoatRoughnessMap:Mt,dispersion:x,iridescence:G,iridescenceMap:Dt,iridescenceThicknessMap:ht,sheen:Z,sheenColorMap:wt,sheenRoughnessMap:Wt,specularMap:It,specularColorMap:St,specularIntensityMap:Qt,transmission:ut,transmissionMap:O,thicknessMap:mt,gradientMap:vt,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:Ut,alphaTest:lt,alphaHash:at,combine:S.combine,mapUv:ie&&y(S.map.channel),aoMapUv:st&&y(S.aoMap.channel),lightMapUv:tt&&y(S.lightMap.channel),bumpMapUv:it&&y(S.bumpMap.channel),normalMapUv:nt&&y(S.normalMap.channel),displacementMapUv:xt&&y(S.displacementMap.channel),emissiveMapUv:dt&&y(S.emissiveMap.channel),metalnessMapUv:gt&&y(S.metalnessMap.channel),roughnessMapUv:$t&&y(S.roughnessMap.channel),anisotropyMapUv:Q&&y(S.anisotropyMap.channel),clearcoatMapUv:Ht&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:_t&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&y(S.sheenRoughnessMap.channel),specularMapUv:It&&y(S.specularMap.channel),specularColorMapUv:St&&y(S.specularColorMap.channel),specularIntensityMapUv:Qt&&y(S.specularIntensityMap.channel),transmissionMapUv:O&&y(S.transmissionMap.channel),thicknessMapUv:mt&&y(S.thicknessMap.channel),alphaMapUv:Ut&&y(S.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(nt||jt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!et.attributes.uv&&(ie||Ut),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Lt,skinning:Y.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:ie&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Ae,decodeVideoTextureEmissive:dt&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Bt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(R(E,S),b(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function R(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function b(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const E=_[S.type];let N;if(E){const V=jn[E];N=X0.clone(V.uniforms)}else N=S.uniforms;return N}function D(S,E){let N;for(let V=0,Y=h.length;V<Y;V++){const $=h[V];if($.cacheKey===E){N=$,++N.usedTimes;break}}return N===void 0&&(N=new jx(i,E,S,s),h.push(N)),N}function C(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:U}}function iM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function rM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zf(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,d,m,_,y,g){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=y,p.group=g),t++,p}function a(f,d,m,_,y,g){const p=o(f,d,m,_,y,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(f,d,m,_,y,g){const p=o(f,d,m,_,y,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||rM),n.length>1&&n.sort(d||Bf),r.length>1&&r.sort(d||Bf)}function h(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function sM(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new zf,i.set(n,[o])):r>=s.length?(o=new zf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function oM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Jt};break;case"SpotLight":e={position:new A,direction:new A,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function aM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lM=0;function cM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function uM(i){const t=new oM,e=aM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const r=new A,s=new we,o=new we;function a(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,y=0,g=0,p=0,R=0,b=0,M=0,D=0,C=0,T=0;c.sort(cM);for(let S=0,E=c.length;S<E;S++){const N=c[S],V=N.color,Y=N.intensity,$=N.distance,et=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*Y,f+=V.g*Y,d+=V.b*Y;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],Y);T++}else if(N.isDirectionalLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ct=N.shadow,K=e.get(N);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=N.shadow.matrix,R++}n.directional[m]=J,m++}else if(N.isSpotLight){const J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(V).multiplyScalar(Y),J.distance=$,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[y]=J;const ct=N.shadow;if(N.map&&(n.spotLightMap[D]=N.map,D++,ct.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[y]=ct.matrix,N.castShadow){const K=e.get(N);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=et,M++}y++}else if(N.isRectAreaLight){const J=t.get(N);J.color.copy(V).multiplyScalar(Y),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=J,g++}else if(N.isPointLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){const ct=N.shadow,K=e.get(N);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,K.shadowCameraNear=ct.camera.near,K.shadowCameraFar=ct.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=et,n.pointShadowMatrix[_]=N.shadow.matrix,b++}n.point[_]=J,_++}else if(N.isHemisphereLight){const J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(Y),J.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[p]=J,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==y||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==R||U.numPointShadows!==b||U.numSpotShadows!==M||U.numSpotMaps!==D||U.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,U.directionalLength=m,U.pointLength=_,U.spotLength=y,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=R,U.numPointShadows=b,U.numSpotShadows=M,U.numSpotMaps=D,U.numLightProbes=T,n.version=lM++)}function l(c,h){let f=0,d=0,m=0,_=0,y=0;const g=h.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(b.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(b.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Hf(i){const t=new uM(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function hM(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Hf(i),t.set(r,[a])):s>=o.length?(a=new Hf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dM=`uniform sampler2D shadow_pass;
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
}`;function pM(i,t,e){let n=new gu;const r=new ft,s=new ft,o=new Re,a=new Sd({depthPacking:td}),l=new Om,c={},h=e.maxTextureSize,f={[mi]:gn,[gn]:mi,[cn]:cn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:fM,fragmentShader:dM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ee;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let p=this.type;this.render=function(C,T,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ii),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=p!==di&&this.type===di,$=p===di&&this.type!==di;for(let et=0,J=C.length;et<J;et++){const ct=C[et],K=ct.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const Et=K.getFrameExtents();if(r.multiply(Et),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Et.x),r.x=s.x*Et.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Et.y),r.y=s.y*Et.y,K.mapSize.y=s.y)),K.map===null||Y===!0||$===!0){const bt=this.type!==di?{minFilter:Ln,magFilter:Ln}:{};K.map!==null&&K.map.dispose(),K.map=new Ni(r.x,r.y,bt),K.map.texture.name=ct.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const Ct=K.getViewportCount();for(let bt=0;bt<Ct;bt++){const qt=K.getViewport(bt);o.set(s.x*qt.x,s.y*qt.y,s.x*qt.z,s.y*qt.w),V.viewport(o),K.updateMatrices(ct,bt),n=K.getFrustum(),M(T,U,K.camera,ct,this.type)}K.isPointLightShadow!==!0&&this.type===di&&R(K,U),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,N)};function R(C,T){const U=t.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ni(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,U,d,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,U,m,y,null)}function b(C,T,U,S){let E=null;const N=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)E=N;else if(E=U.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const V=E.uuid,Y=T.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let et=$[Y];et===void 0&&(et=E.clone(),$[Y]=et,T.addEventListener("dispose",D)),E=et}if(E.visible=T.visible,E.wireframe=T.wireframe,S===di?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=i.properties.get(E);V.light=U}return E}function M(C,T,U,S,E){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===di)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const Y=t.update(C),$=C.material;if(Array.isArray($)){const et=Y.groups;for(let J=0,ct=et.length;J<ct;J++){const K=et[J],Et=$[K.materialIndex];if(Et&&Et.visible){const Ct=b(C,Et,S,E);C.onBeforeShadow(i,C,T,U,Y,Ct,K),i.renderBufferDirect(U,null,Y,Ct,C,K),C.onAfterShadow(i,C,T,U,Y,Ct,K)}}}else if($.visible){const et=b(C,$,S,E);C.onBeforeShadow(i,C,T,U,Y,et,null),i.renderBufferDirect(U,null,Y,et,C,null),C.onAfterShadow(i,C,T,U,Y,et,null)}}const V=C.children;for(let Y=0,$=V.length;Y<$;Y++)M(V[Y],T,U,S,E)}function D(C){C.target.removeEventListener("dispose",D);for(const U in c){const S=c[U],E=C.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const mM={[dc]:pc,[mc]:vc,[gc]:xc,[ss]:_c,[pc]:dc,[vc]:mc,[xc]:gc,[_c]:ss};function gM(i,t){function e(){let O=!1;const mt=new Re;let vt=null;const Ut=new Re(0,0,0,0);return{setMask:function(lt){vt!==lt&&!O&&(i.colorMask(lt,lt,lt,lt),vt=lt)},setLocked:function(lt){O=lt},setClear:function(lt,at,Bt,te,ve){ve===!0&&(lt*=te,at*=te,Bt*=te),mt.set(lt,at,Bt,te),Ut.equals(mt)===!1&&(i.clearColor(lt,at,Bt,te),Ut.copy(mt))},reset:function(){O=!1,vt=null,Ut.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,vt=null,Ut=null,lt=null;return{setReversed:function(at){if(mt!==at){const Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),mt=at;const te=lt;lt=null,this.setClear(te)}},getReversed:function(){return mt},setTest:function(at){at?rt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(at){vt!==at&&!O&&(i.depthMask(at),vt=at)},setFunc:function(at){if(mt&&(at=mM[at]),Ut!==at){switch(at){case dc:i.depthFunc(i.NEVER);break;case pc:i.depthFunc(i.ALWAYS);break;case mc:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case vc:i.depthFunc(i.GREATER);break;case xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ut=at}},setLocked:function(at){O=at},setClear:function(at){lt!==at&&(mt&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){O=!1,vt=null,Ut=null,lt=null,mt=!1}}}function r(){let O=!1,mt=null,vt=null,Ut=null,lt=null,at=null,Bt=null,te=null,ve=null;return{setTest:function(ue){O||(ue?rt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!O&&(i.stencilMask(ue),mt=ue)},setFunc:function(ue,_n,Oe){(vt!==ue||Ut!==_n||lt!==Oe)&&(i.stencilFunc(ue,_n,Oe),vt=ue,Ut=_n,lt=Oe)},setOp:function(ue,_n,Oe){(at!==ue||Bt!==_n||te!==Oe)&&(i.stencilOp(ue,_n,Oe),at=ue,Bt=_n,te=Oe)},setLocked:function(ue){O=ue},setClear:function(ue){ve!==ue&&(i.clearStencil(ue),ve=ue)},reset:function(){O=!1,mt=null,vt=null,Ut=null,lt=null,at=null,Bt=null,te=null,ve=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,m=[],_=null,y=!1,g=null,p=null,R=null,b=null,M=null,D=null,C=null,T=new Jt(0,0,0),U=0,S=!1,E=null,N=null,V=null,Y=null,$=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ct=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=ct>=1):K.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=ct>=2);let Et=null,Ct={};const bt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),ee=new Re().fromArray(bt),pe=new Re().fromArray(qt);function ce(O,mt,vt,Ut){const lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(O,at),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<vt;Bt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(mt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}const j={};j[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(ss),it(!1),nt(wh),rt(i.CULL_FACE),st(Ii);function rt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Lt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function zt(O,mt){return f[O]!==mt?(i.bindFramebuffer(O,mt),f[O]=mt,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ot(O,mt){let vt=m,Ut=!1;if(O){vt=d.get(mt),vt===void 0&&(vt=[],d.set(mt,vt));const lt=O.textures;if(vt.length!==lt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Bt=lt.length;at<Bt;at++)vt[at]=i.COLOR_ATTACHMENT0+at;vt.length=lt.length,Ut=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Ut=!0);Ut&&i.drawBuffers(vt)}function ie(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const ge={[or]:i.FUNC_ADD,[Rp]:i.FUNC_SUBTRACT,[Cp]:i.FUNC_REVERSE_SUBTRACT};ge[Pp]=i.MIN,ge[Lp]=i.MAX;const I={[Dp]:i.ZERO,[Ip]:i.ONE,[Up]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Hp]:i.SRC_ALPHA_SATURATE,[Bp]:i.DST_COLOR,[Fp]:i.DST_ALPHA,[Np]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[zp]:i.ONE_MINUS_DST_COLOR,[Op]:i.ONE_MINUS_DST_ALPHA,[kp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Vp]:i.CONSTANT_ALPHA,[Wp]:i.ONE_MINUS_CONSTANT_ALPHA};function st(O,mt,vt,Ut,lt,at,Bt,te,ve,ue){if(O===Ii){y===!0&&(Lt(i.BLEND),y=!1);return}if(y===!1&&(rt(i.BLEND),y=!0),O!==Ap){if(O!==g||ue!==S){if((p!==or||M!==or)&&(i.blendEquation(i.FUNC_ADD),p=or,M=or),ue)switch(O){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case js:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Th:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,b=null,D=null,C=null,T.set(0,0,0),U=0,g=O,S=ue}return}lt=lt||mt,at=at||vt,Bt=Bt||Ut,(mt!==p||lt!==M)&&(i.blendEquationSeparate(ge[mt],ge[lt]),p=mt,M=lt),(vt!==R||Ut!==b||at!==D||Bt!==C)&&(i.blendFuncSeparate(I[vt],I[Ut],I[at],I[Bt]),R=vt,b=Ut,D=at,C=Bt),(te.equals(T)===!1||ve!==U)&&(i.blendColor(te.r,te.g,te.b,ve),T.copy(te),U=ve),g=O,S=!1}function tt(O,mt){O.side===cn?Lt(i.CULL_FACE):rt(i.CULL_FACE);let vt=O.side===gn;mt&&(vt=!vt),it(vt),O.blending===ns&&O.transparent===!1?st(Ii):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ut=O.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){E!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),E=O)}function nt(O){O!==Tp?(rt(i.CULL_FACE),O!==N&&(O===wh?i.cullFace(i.BACK):O===bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),N=O}function xt(O){O!==V&&(J&&i.lineWidth(O),V=O)}function dt(O,mt,vt){O?(rt(i.POLYGON_OFFSET_FILL),(Y!==mt||$!==vt)&&(i.polygonOffset(mt,vt),Y=mt,$=vt)):Lt(i.POLYGON_OFFSET_FILL)}function gt(O){O?rt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function $t(O){O===void 0&&(O=i.TEXTURE0+et-1),Et!==O&&(i.activeTexture(O),Et=O)}function jt(O,mt,vt){vt===void 0&&(Et===null?vt=i.TEXTURE0+et-1:vt=Et);let Ut=Ct[vt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Ct[vt]=Ut),(Ut.type!==O||Ut.texture!==mt)&&(Et!==vt&&(i.activeTexture(vt),Et=vt),i.bindTexture(O,mt||j[O]),Ut.type=O,Ut.texture=mt)}function P(){const O=Ct[Et];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(O){ee.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ee.copy(O))}function Wt(O){pe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),pe.copy(O))}function It(O,mt){let vt=c.get(mt);vt===void 0&&(vt=new WeakMap,c.set(mt,vt));let Ut=vt.get(O);Ut===void 0&&(Ut=i.getUniformBlockIndex(mt,O.name),vt.set(O,Ut))}function St(O,mt){const Ut=c.get(mt).get(O);l.get(mt)!==Ut&&(i.uniformBlockBinding(mt,Ut,O.__bindingPointIndex),l.set(mt,Ut))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Et=null,Ct={},f={},d=new WeakMap,m=[],_=null,y=!1,g=null,p=null,R=null,b=null,M=null,D=null,C=null,T=new Jt(0,0,0),U=0,S=!1,E=null,N=null,V=null,Y=null,$=null,ee.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:Lt,bindFramebuffer:zt,drawBuffers:Ot,useProgram:ie,setBlending:st,setMaterial:tt,setFlipSided:it,setCullFace:nt,setLineWidth:xt,setPolygonOffset:dt,setScissorTest:gt,activeTexture:$t,bindTexture:jt,unbindTexture:P,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:Dt,texImage3D:ht,updateUBOMapping:It,uniformBlockBinding:St,texStorage2D:_t,texStorage3D:Mt,texSubImage2D:Z,texSubImage3D:ut,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ht,scissor:wt,viewport:Wt,reset:Qt}}function _M(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return m?new OffscreenCanvas(P,x):Wa("canvas")}function y(P,x,G){let Z=1;const ut=jt(P);if((ut.width>G||ut.height>G)&&(Z=G/Math.max(ut.width,ut.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(Z*ut.width),Ht=Math.floor(Z*ut.height);f===void 0&&(f=_(Q,Ht));const _t=x?_(Q,Ht):f;return _t.width=Q,_t.height=Ht,_t.getContext("2d").drawImage(P,0,0,Q,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+Q+"x"+Ht+")."),_t}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,x,G,Z,ut=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=x;if(x===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),x===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){const Ht=ut?Ga:_e.getTransfer(Z);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Ht===Ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(P,x){let G;return P?x===null||x===hr||x===ro?G=i.DEPTH24_STENCIL8:x===ti?G=i.DEPTH32F_STENCIL8:x===io&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hr||x===ro?G=i.DEPTH_COMPONENT24:x===ti?G=i.DEPTH_COMPONENT32F:x===io&&(G=i.DEPTH_COMPONENT16),G}function D(P,x){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==Qn?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function C(P){const x=P.target;x.removeEventListener("dispose",C),U(x),x.isVideoTexture&&h.delete(x)}function T(P){const x=P.target;x.removeEventListener("dispose",T),E(x)}function U(P){const x=n.get(P);if(x.__webglInit===void 0)return;const G=P.source,Z=d.get(G);if(Z){const ut=Z[x.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(P),Object.keys(Z).length===0&&d.delete(G)}n.remove(P)}function S(P){const x=n.get(P);i.deleteTexture(x.__webglTexture);const G=P.source,Z=d.get(G);delete Z[x.__cacheKey],o.memory.textures--}function E(P){const x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ut=0;ut<x.__webglFramebuffer[Z].length;ut++)i.deleteFramebuffer(x.__webglFramebuffer[Z][ut]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=P.textures;for(let Z=0,ut=G.length;Z<ut;Z++){const Q=n.get(G[Z]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(P)}let N=0;function V(){N=0}function Y(){const P=N;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function $(P){const x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function et(P,x){const G=n.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,P,x);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function J(P,x){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){j(G,P,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function ct(P,x){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){j(G,P,x);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function K(P,x){const G=n.get(P);if(P.version>0&&G.__version!==P.version){rt(G,P,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const Et={[Sc]:i.REPEAT,[cr]:i.CLAMP_TO_EDGE,[Ec]:i.MIRRORED_REPEAT},Ct={[Ln]:i.NEAREST,[Qp]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[ur]:i.LINEAR_MIPMAP_LINEAR},bt={[n0]:i.NEVER,[l0]:i.ALWAYS,[i0]:i.LESS,[nd]:i.LEQUAL,[r0]:i.EQUAL,[a0]:i.GEQUAL,[s0]:i.GREATER,[o0]:i.NOTEQUAL};function qt(P,x){if(x.type===ti&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qn||x.magFilter===Rl||x.magFilter===na||x.magFilter===ur||x.minFilter===Qn||x.minFilter===Rl||x.minFilter===na||x.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Et[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Et[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Et[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ct[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ct[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ln||x.minFilter!==na&&x.minFilter!==ur||x.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(P,x){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",C));const Z=x.source;let ut=d.get(Z);ut===void 0&&(ut={},d.set(Z,ut));const Q=$(x);if(Q!==P.__cacheKey){ut[Q]===void 0&&(ut[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ut[Q].usedTimes++;const Ht=ut[P.__cacheKey];Ht!==void 0&&(ut[P.__cacheKey].usedTimes--,Ht.usedTimes===0&&S(x)),P.__cacheKey=Q,P.__webglTexture=ut[Q].texture}return G}function pe(P,x,G){return Math.floor(Math.floor(P/G)/x)}function ce(P,x,G,Z){const Q=P.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,G,Z,x.data);else{Q.sort((ht,wt)=>ht.start-wt.start);let Ht=0;for(let ht=1;ht<Q.length;ht++){const wt=Q[Ht],Wt=Q[ht],It=wt.start+wt.count,St=pe(Wt.start,x.width,4),Qt=pe(wt.start,x.width,4);Wt.start<=It+1&&St===Qt&&pe(Wt.start+Wt.count-1,x.width,4)===St?wt.count=Math.max(wt.count,Wt.start+Wt.count-wt.start):(++Ht,Q[Ht]=Wt)}Q.length=Ht+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),Mt=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ht=0,wt=Q.length;ht<wt;ht++){const Wt=Q[ht],It=Math.floor(Wt.start/4),St=Math.ceil(Wt.count/4),Qt=It%x.width,O=Math.floor(It/x.width),mt=St,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Qt,O,mt,vt,G,Z,x.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function j(P,x,G){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const ut=ee(P,x),Q=x.source;e.bindTexture(Z,P.__webglTexture,i.TEXTURE0+G);const Ht=n.get(Q);if(Q.version!==Ht.__version||ut===!0){e.activeTexture(i.TEXTURE0+G);const _t=_e.getPrimaries(_e.workingColorSpace),Mt=x.colorSpace===Di?null:_e.getPrimaries(x.colorSpace),Dt=x.colorSpace===Di||_t===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ht=y(x.image,!1,r.maxTextureSize);ht=$t(x,ht);const wt=s.convert(x.format,x.colorSpace),Wt=s.convert(x.type);let It=b(x.internalFormat,wt,Wt,x.colorSpace,x.isVideoTexture);qt(Z,x);let St;const Qt=x.mipmaps,O=x.isVideoTexture!==!0,mt=Ht.__version===void 0||ut===!0,vt=Q.dataReady,Ut=D(x,ht);if(x.isDepthTexture)It=M(x.format===oo,x.type),mt&&(O?e.texStorage2D(i.TEXTURE_2D,1,It,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,It,ht.width,ht.height,0,wt,Wt,null));else if(x.isDataTexture)if(Qt.length>0){O&&mt&&e.texStorage2D(i.TEXTURE_2D,Ut,It,Qt[0].width,Qt[0].height);for(let lt=0,at=Qt.length;lt<at;lt++)St=Qt[lt],O?vt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,St.width,St.height,wt,Wt,St.data):e.texImage2D(i.TEXTURE_2D,lt,It,St.width,St.height,0,wt,Wt,St.data);x.generateMipmaps=!1}else O?(mt&&e.texStorage2D(i.TEXTURE_2D,Ut,It,ht.width,ht.height),vt&&ce(x,ht,wt,Wt)):e.texImage2D(i.TEXTURE_2D,0,It,ht.width,ht.height,0,wt,Wt,ht.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,It,Qt[0].width,Qt[0].height,ht.depth);for(let lt=0,at=Qt.length;lt<at;lt++)if(St=Qt[lt],x.format!==qn)if(wt!==null)if(O){if(vt)if(x.layerUpdates.size>0){const Bt=gf(St.width,St.height,x.format,x.type);for(const te of x.layerUpdates){const ve=St.data.subarray(te*Bt/St.data.BYTES_PER_ELEMENT,(te+1)*Bt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,te,St.width,St.height,1,wt,ve)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,St.width,St.height,ht.depth,wt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,It,St.width,St.height,ht.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,St.width,St.height,ht.depth,wt,Wt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,It,St.width,St.height,ht.depth,0,wt,Wt,St.data)}else{O&&mt&&e.texStorage2D(i.TEXTURE_2D,Ut,It,Qt[0].width,Qt[0].height);for(let lt=0,at=Qt.length;lt<at;lt++)St=Qt[lt],x.format!==qn?wt!==null?O?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,It,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?vt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,St.width,St.height,wt,Wt,St.data):e.texImage2D(i.TEXTURE_2D,lt,It,St.width,St.height,0,wt,Wt,St.data)}else if(x.isDataArrayTexture)if(O){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,It,ht.width,ht.height,ht.depth),vt)if(x.layerUpdates.size>0){const lt=gf(ht.width,ht.height,x.format,x.type);for(const at of x.layerUpdates){const Bt=ht.data.subarray(at*lt/ht.data.BYTES_PER_ELEMENT,(at+1)*lt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,wt,Wt,Bt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,wt,Wt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ht.width,ht.height,ht.depth,0,wt,Wt,ht.data);else if(x.isData3DTexture)O?(mt&&e.texStorage3D(i.TEXTURE_3D,Ut,It,ht.width,ht.height,ht.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,wt,Wt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,It,ht.width,ht.height,ht.depth,0,wt,Wt,ht.data);else if(x.isFramebufferTexture){if(mt)if(O)e.texStorage2D(i.TEXTURE_2D,Ut,It,ht.width,ht.height);else{let lt=ht.width,at=ht.height;for(let Bt=0;Bt<Ut;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,It,lt,at,0,wt,Wt,null),lt>>=1,at>>=1}}else if(Qt.length>0){if(O&&mt){const lt=jt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Ut,It,lt.width,lt.height)}for(let lt=0,at=Qt.length;lt<at;lt++)St=Qt[lt],O?vt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,wt,Wt,St):e.texImage2D(i.TEXTURE_2D,lt,It,wt,Wt,St);x.generateMipmaps=!1}else if(O){if(mt){const lt=jt(ht);e.texStorage2D(i.TEXTURE_2D,Ut,It,lt.width,lt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Wt,ht)}else e.texImage2D(i.TEXTURE_2D,0,It,wt,Wt,ht);g(x)&&p(Z),Ht.__version=Q.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function rt(P,x,G){if(x.image.length!==6)return;const Z=ee(P,x),ut=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const Q=n.get(ut);if(ut.version!==Q.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);const Ht=_e.getPrimaries(_e.workingColorSpace),_t=x.colorSpace===Di?null:_e.getPrimaries(x.colorSpace),Mt=x.colorSpace===Di||Ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Dt=x.isCompressedTexture||x.image[0].isCompressedTexture,ht=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let at=0;at<6;at++)!Dt&&!ht?wt[at]=y(x.image[at],!0,r.maxCubemapSize):wt[at]=ht?x.image[at].image:x.image[at],wt[at]=$t(x,wt[at]);const Wt=wt[0],It=s.convert(x.format,x.colorSpace),St=s.convert(x.type),Qt=b(x.internalFormat,It,St,x.colorSpace),O=x.isVideoTexture!==!0,mt=Q.__version===void 0||Z===!0,vt=ut.dataReady;let Ut=D(x,Wt);qt(i.TEXTURE_CUBE_MAP,x);let lt;if(Dt){O&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Qt,Wt.width,Wt.height);for(let at=0;at<6;at++){lt=wt[at].mipmaps;for(let Bt=0;Bt<lt.length;Bt++){const te=lt[Bt];x.format!==qn?It!==null?O?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,te.width,te.height,It,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,Qt,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,te.width,te.height,It,St,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,Qt,te.width,te.height,0,It,St,te.data)}}}else{if(lt=x.mipmaps,O&&mt){lt.length>0&&Ut++;const at=jt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Qt,at.width,at.height)}for(let at=0;at<6;at++)if(ht){O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,wt[at].width,wt[at].height,It,St,wt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,wt[at].width,wt[at].height,0,It,St,wt[at].data);for(let Bt=0;Bt<lt.length;Bt++){const ve=lt[Bt].image[at].image;O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,ve.width,ve.height,It,St,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,Qt,ve.width,ve.height,0,It,St,ve.data)}}else{O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,St,wt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,It,St,wt[at]);for(let Bt=0;Bt<lt.length;Bt++){const te=lt[Bt];O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,It,St,te.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,Qt,It,St,te.image[at])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ut.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Lt(P,x,G,Z,ut,Q){const Ht=s.convert(G.format,G.colorSpace),_t=s.convert(G.type),Mt=b(G.internalFormat,Ht,_t,G.colorSpace),Dt=n.get(x),ht=n.get(G);if(ht.__renderTarget=x,!Dt.__hasExternalTextures){const wt=Math.max(1,x.width>>Q),Wt=Math.max(1,x.height>>Q);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,Q,Mt,wt,Wt,x.depth,0,Ht,_t,null):e.texImage2D(ut,Q,Mt,wt,Wt,0,Ht,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),dt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ut,ht.__webglTexture,0,xt(x)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ut,ht.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(P,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){const Z=x.depthTexture,ut=Z&&Z.isDepthTexture?Z.type:null,Q=M(x.stencilBuffer,ut),Ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=xt(x);dt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Q,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,P)}else{const Z=x.textures;for(let ut=0;ut<Z.length;ut++){const Q=Z[ut],Ht=s.convert(Q.format,Q.colorSpace),_t=s.convert(Q.type),Mt=b(Q.internalFormat,Ht,_t,Q.colorSpace),Dt=xt(x);G&&dt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Mt,x.width,x.height):dt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,Mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(P,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),et(x.depthTexture,0);const ut=Z.__webglTexture,Q=xt(x);if(x.depthTexture.format===so)dt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(x.depthTexture.format===oo)dt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function ie(P){const x=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const ut=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ut)};Z.addEventListener("dispose",ut),x.__depthDisposeCallback=ut}x.__boundDepthTexture=Z}if(P.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?Ot(x.__webglFramebuffer[0],P):Ot(x.__webglFramebuffer,P)}else if(G){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),zt(x.__webglDepthbuffer[Z],P,!1);else{const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,Q)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),zt(x.__webglDepthbuffer,P,!1);else{const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,x,G){const Z=n.get(P);x!==void 0&&Lt(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ie(P)}function I(P){const x=P.texture,G=n.get(P),Z=n.get(x);P.addEventListener("dispose",T);const ut=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ht=ut.length>1;if(Ht||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[_t]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)G.__webglFramebuffer[_t][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let _t=0;_t<x.mipmaps.length;_t++)G.__webglFramebuffer[_t]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let _t=0,Mt=ut.length;_t<Mt;_t++){const Dt=n.get(ut[_t]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&dt(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _t=0;_t<ut.length;_t++){const Mt=ut[_t];G.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[_t]);const Dt=s.convert(Mt.format,Mt.colorSpace),ht=s.convert(Mt.type),wt=b(Mt.internalFormat,Dt,ht,Mt.colorSpace,P.isXRRenderTarget===!0),Wt=xt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,wt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,G.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),qt(i.TEXTURE_CUBE_MAP,x);for(let _t=0;_t<6;_t++)if(x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)Lt(G.__webglFramebuffer[_t][Mt],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt);else Lt(G.__webglFramebuffer[_t],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);g(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let _t=0,Mt=ut.length;_t<Mt;_t++){const Dt=ut[_t],ht=n.get(Dt);let wt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ht.__webglTexture),qt(wt,Dt),Lt(G.__webglFramebuffer,P,Dt,i.COLOR_ATTACHMENT0+_t,wt,0),g(Dt)&&p(wt)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Z.__webglTexture),qt(_t,x),x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)Lt(G.__webglFramebuffer[Mt],P,x,i.COLOR_ATTACHMENT0,_t,Mt);else Lt(G.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,_t,0);g(x)&&p(_t),e.unbindTexture()}P.depthBuffer&&ie(P)}function st(P){const x=P.textures;for(let G=0,Z=x.length;G<Z;G++){const ut=x[G];if(g(ut)){const Q=R(P),Ht=n.get(ut).__webglTexture;e.bindTexture(Q,Ht),p(Q),e.unbindTexture()}}}const tt=[],it=[];function nt(P){if(P.samples>0){if(dt(P)===!1){const x=P.textures,G=P.width,Z=P.height;let ut=i.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(P),_t=x.length>1;if(_t)for(let Dt=0;Dt<x.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const Mt=P.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Dt=0;Dt<x.length;Dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Dt]);const ht=n.get(x[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,ut,i.NEAREST),l===!0&&(tt.length=0,it.length=0,tt.push(i.COLOR_ATTACHMENT0+Dt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(tt.push(Q),it.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Dt=0;Dt<x.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Dt]);const ht=n.get(x[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function xt(P){return Math.min(r.maxSamples,P.samples)}function dt(P){const x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function gt(P){const x=o.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function $t(P,x){const G=P.colorSpace,Z=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ls&&G!==Di&&(_e.getTransfer(G)===Ae?(Z!==qn||ut!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.setTexture2D=et,this.setTexture2DArray=J,this.setTexture3D=ct,this.setTextureCube=K,this.rebindTextures=ge,this.setupRenderTarget=I,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=dt}function vM(i,t){function e(n,r=Di){let s;const o=_e.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===ou)return i.UNSIGNED_SHORT_4_4_4_4;if(n===au)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$f)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yf)return i.BYTE;if(n===Zf)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===su)return i.INT;if(n===hr)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===fo)return i.HALF_FLOAT;if(n===Kf)return i.ALPHA;if(n===jf)return i.RGB;if(n===qn)return i.RGBA;if(n===so)return i.DEPTH_COMPONENT;if(n===oo)return i.DEPTH_STENCIL;if(n===lu)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===Qf)return i.RG;if(n===uu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===Na||n===Fa||n===Oa||n===Ba)if(o===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Tc||n===bc||n===Ac)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Cc)return o===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===Ic||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===Hc||n===kc||n===Gc||n===Vc||n===Wc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===qc||n===Yc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Xc)return o===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===Jc||n===$c||n===Kc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ro?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MM=`
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

}`;class yM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new dd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mn({vertexShader:xM,fragmentShader:MM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SM extends hs{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",g=new yM,p={},R=e.getContextAttributes();let b=null,M=null;const D=[],C=[],T=new ft;let U=null;const S=new Un;S.viewport=new Re;const E=new Un;E.viewport=new Re;const N=[S,E],V=new Gm;let Y=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=D[j];return rt===void 0&&(rt=new Jl,D[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=D[j];return rt===void 0&&(rt=new Jl,D[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=D[j];return rt===void 0&&(rt=new Jl,D[j]=rt),rt.getHandSpace()};function et(j){const rt=C.indexOf(j.inputSource);if(rt===-1)return;const Lt=D[rt];Lt!==void 0&&(Lt.update(j.inputSource,j.frame,c||o),Lt.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){r.removeEventListener("select",et),r.removeEventListener("selectstart",et),r.removeEventListener("selectend",et),r.removeEventListener("squeeze",et),r.removeEventListener("squeezestart",et),r.removeEventListener("squeezeend",et),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ct);for(let j=0;j<D.length;j++){const rt=C[j];rt!==null&&(C[j]=null,D[j].disconnect(rt))}Y=null,$=null,g.reset();for(const j in p)delete p[j];t.setRenderTarget(b),m=null,d=null,f=null,r=null,M=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",et),r.addEventListener("selectstart",et),r.addEventListener("selectend",et),r.addEventListener("squeeze",et),r.addEventListener("squeezestart",et),r.addEventListener("squeezeend",et),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ct),R.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,zt=null,Ot=null;R.depth&&(Ot=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=R.stencil?oo:so,zt=R.stencil?ro:hr);const ie={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ie),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ni(d.textureWidth,d.textureHeight,{format:qn,type:ni,depthTexture:new fd(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Lt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Lt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Ni(m.framebufferWidth,m.framebufferHeight,{format:qn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ct(j){for(let rt=0;rt<j.removed.length;rt++){const Lt=j.removed[rt],zt=C.indexOf(Lt);zt>=0&&(C[zt]=null,D[zt].disconnect(Lt))}for(let rt=0;rt<j.added.length;rt++){const Lt=j.added[rt];let zt=C.indexOf(Lt);if(zt===-1){for(let ie=0;ie<D.length;ie++)if(ie>=C.length){C.push(Lt),zt=ie;break}else if(C[ie]===null){C[ie]=Lt,zt=ie;break}if(zt===-1)break}const Ot=D[zt];Ot&&Ot.connect(Lt)}}const K=new A,Et=new A;function Ct(j,rt,Lt){K.setFromMatrixPosition(rt.matrixWorld),Et.setFromMatrixPosition(Lt.matrixWorld);const zt=K.distanceTo(Et),Ot=rt.projectionMatrix.elements,ie=Lt.projectionMatrix.elements,ge=Ot[14]/(Ot[10]-1),I=Ot[14]/(Ot[10]+1),st=(Ot[9]+1)/Ot[5],tt=(Ot[9]-1)/Ot[5],it=(Ot[8]-1)/Ot[0],nt=(ie[8]+1)/ie[0],xt=ge*it,dt=ge*nt,gt=zt/(-it+nt),$t=gt*-it;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($t),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ot[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const jt=ge+gt,P=I+gt,x=xt-$t,G=dt+(zt-$t),Z=st*I/P*jt,ut=tt*I/P*jt;j.projectionMatrix.makePerspective(x,G,Z,ut,jt,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function bt(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let rt=j.near,Lt=j.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(Lt=g.depthFar)),V.near=E.near=S.near=rt,V.far=E.far=S.far=Lt,(Y!==V.near||$!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),Y=V.near,$=V.far),V.layers.mask=j.layers.mask|6,S.layers.mask=V.layers.mask&3,E.layers.mask=V.layers.mask&5;const zt=j.parent,Ot=V.cameras;bt(V,zt);for(let ie=0;ie<Ot.length;ie++)bt(Ot[ie],zt);Ot.length===2?Ct(V,S,E):V.projectionMatrix.copy(S.projectionMatrix),qt(j,V,zt)};function qt(j,rt,Lt){Lt===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(Lt.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ao*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(j){return p[j]};let ee=null;function pe(j,rt){if(h=rt.getViewerPose(c||o),_=rt,h!==null){const Lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let zt=!1;Lt.length!==V.cameras.length&&(V.cameras.length=0,zt=!0);for(let I=0;I<Lt.length;I++){const st=Lt[I];let tt=null;if(m!==null)tt=m.getViewport(st);else{const nt=f.getViewSubImage(d,st);tt=nt.viewport,I===0&&(t.setRenderTargetTextures(M,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(M))}let it=N[I];it===void 0&&(it=new Un,it.layers.enable(I),it.viewport=new Re,N[I]=it),it.matrix.fromArray(st.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(st.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(tt.x,tt.y,tt.width,tt.height),I===0&&(V.matrix.copy(it.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),zt===!0&&V.cameras.push(it)}const Ot=r.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const I=f.getDepthInformation(Lt[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(Ot&&Ot.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let I=0;I<Lt.length;I++){const st=Lt[I].camera;if(st){let tt=p[st];tt||(tt=new dd,p[st]=tt);const it=f.getCameraImage(st);tt.sourceTexture=it}}}}for(let Lt=0;Lt<D.length;Lt++){const zt=C[Lt],Ot=D[Lt];zt!==null&&Ot!==void 0&&Ot.update(zt,rt,c||o)}ee&&ee(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}const ce=new wd;ce.setAnimationLoop(pe),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}const nr=new ii,EM=new we;function wM(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ld(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,R,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,R,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===gn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===gn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const R=t.get(p),b=R.envMap,M=R.envMapRotation;b&&(g.envMap.value=b,nr.copy(M),nr.x*=-1,nr.y*=-1,nr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),g.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(nr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,R,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const R=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function TM(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,b){const M=b.program;n.uniformBlockBinding(R,M)}function c(R,b){let M=r[R.id];M===void 0&&(_(R),M=h(R),r[R.id]=M,R.addEventListener("dispose",g));const D=b.program;n.updateUBOMapping(R,D);const C=t.render.frame;s[R.id]!==C&&(d(R),s[R.id]=C)}function h(R){const b=f();R.__bindingPointIndex=b;const M=i.createBuffer(),D=R.__size,C=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const b=r[R.id],M=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,T=M.length;C<T;C++){const U=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,E=U.length;S<E;S++){const N=U[S];if(m(N,C,S,D)===!0){const V=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let et=0;et<Y.length;et++){const J=Y[et],ct=y(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+$,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,$),$+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,b,M,D){const C=R.value,T=b+"_"+M;if(D[T]===void 0)return typeof C=="number"||typeof C=="boolean"?D[T]=C:D[T]=C.clone(),!0;{const U=D[T];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return D[T]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(R){const b=R.uniforms;let M=0;const D=16;for(let T=0,U=b.length;T<U;T++){const S=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,N=S.length;E<N;E++){const V=S[E],Y=Array.isArray(V.value)?V.value:[V.value];for(let $=0,et=Y.length;$<et;$++){const J=Y[$],ct=y(J),K=M%D,Et=K%ct.boundary,Ct=K+Et;M+=Et,Ct!==0&&D-Ct<ct.storage&&(M+=D-Ct),V.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=ct.storage}}}const C=M%D;return C>0&&(M+=D-C),R.__size=M,R.__cache={},this}function y(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function g(R){const b=R.target;b.removeEventListener("dispose",g);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class bM{constructor(t={}){const{canvas:e=T0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),y=new Int32Array(4);let g=null,p=null;const R=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=Tn;let C=0,T=0,U=null,S=-1,E=null;const N=new Re,V=new Re;let Y=null;const $=new Jt(0);let et=0,J=e.width,ct=e.height,K=1,Et=null,Ct=null;const bt=new Re(0,0,J,ct),qt=new Re(0,0,J,ct);let ee=!1;const pe=new gu;let ce=!1,j=!1;const rt=new we,Lt=new A,zt=new Re,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function ge(){return U===null?K:1}let I=n;function st(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ru}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const B="webgl2";if(I=st(B,w),I===null)throw st(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,it,nt,xt,dt,gt,$t,jt,P,x,G,Z,ut,Q,Ht,_t,Mt,Dt,ht,wt,Wt,It,St,Qt;function O(){tt=new Fv(I),tt.init(),It=new vM(I,tt),it=new Cv(I,tt,t,It),nt=new gM(I,tt),it.reversedDepthBuffer&&d&&nt.buffers.depth.setReversed(!0),xt=new zv(I),dt=new iM,gt=new _M(I,tt,nt,dt,it,It,xt),$t=new Lv(M),jt=new Nv(M),P=new Xm(I),St=new Av(I,P),x=new Ov(I,P,xt,St),G=new kv(I,x,P,xt),ht=new Hv(I,it,gt),_t=new Pv(dt),Z=new nM(M,$t,jt,tt,it,St,_t),ut=new wM(M,dt),Q=new sM,Ht=new hM(tt),Dt=new bv(M,$t,jt,nt,G,m,l),Mt=new pM(M,G,it),Qt=new TM(I,xt,it,nt),wt=new Rv(I,tt,xt),Wt=new Bv(I,tt,xt),xt.programs=Z.programs,M.capabilities=it,M.extensions=tt,M.properties=dt,M.renderLists=Q,M.shadowMap=Mt,M.state=nt,M.info=xt}O();const mt=new SM(M,I);this.xr=mt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(J,ct,!1))},this.getSize=function(w){return w.set(J,ct)},this.setSize=function(w,B,W=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,ct=B,e.width=Math.floor(w*K),e.height=Math.floor(B*K),W===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(J*K,ct*K).floor()},this.setDrawingBufferSize=function(w,B,W){J=w,ct=B,K=W,e.width=Math.floor(w*W),e.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,B,W,q){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,B,W,q),nt.viewport(N.copy(bt).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,B,W,q){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,B,W,q),nt.scissor(V.copy(qt).multiplyScalar(K).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){nt.setScissorTest(ee=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){Ct=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,W=!0){let q=0;if(w){let H=!1;if(U!==null){const pt=U.texture.format;H=pt===hu||pt===uu||pt===cu}if(H){const pt=U.texture.type,At=pt===ni||pt===hr||pt===io||pt===ro||pt===ou||pt===au,Nt=Dt.getClearColor(),Ft=Dt.getClearAlpha(),Xt=Nt.r,Kt=Nt.g,kt=Nt.b;At?(_[0]=Xt,_[1]=Kt,_[2]=kt,_[3]=Ft,I.clearBufferuiv(I.COLOR,0,_)):(y[0]=Xt,y[1]=Kt,y[2]=kt,y[3]=Ft,I.clearBufferiv(I.COLOR,0,y))}else q|=I.COLOR_BUFFER_BIT}B&&(q|=I.DEPTH_BUFFER_BIT),W&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Dt.dispose(),Q.dispose(),Ht.dispose(),dt.dispose(),$t.dispose(),jt.dispose(),G.dispose(),St.dispose(),Qt.dispose(),Z.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Oe),mt.removeEventListener("sessionend",Yn),hn.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=xt.autoReset,B=Mt.enabled,W=Mt.autoUpdate,q=Mt.needsUpdate,H=Mt.type;O(),xt.autoReset=w,Mt.enabled=B,Mt.autoUpdate=W,Mt.needsUpdate=q,Mt.type=H}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const B=w.target;B.removeEventListener("dispose",at),Bt(B)}function Bt(w){te(w),dt.remove(w)}function te(w){const B=dt.get(w).programs;B!==void 0&&(B.forEach(function(W){Z.releaseProgram(W)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,q,H,pt){B===null&&(B=Ot);const At=H.isMesh&&H.matrixWorld.determinant()<0,Nt=_r(w,B,W,q,H);nt.setMaterial(q,At);let Ft=W.index,Xt=1;if(q.wireframe===!0){if(Ft=x.getWireframeAttribute(W),Ft===void 0)return;Xt=2}const Kt=W.drawRange,kt=W.attributes.position;let oe=Kt.start*Xt,xe=(Kt.start+Kt.count)*Xt;pt!==null&&(oe=Math.max(oe,pt.start*Xt),xe=Math.min(xe,(pt.start+pt.count)*Xt)),Ft!==null?(oe=Math.max(oe,0),xe=Math.min(xe,Ft.count)):kt!=null&&(oe=Math.max(oe,0),xe=Math.min(xe,kt.count));const Le=xe-oe;if(Le<0||Le===1/0)return;St.setup(H,q,Nt,W,Ft);let Se,me=wt;if(Ft!==null&&(Se=P.get(Ft),me=Wt,me.setIndex(Se)),H.isMesh)q.wireframe===!0?(nt.setLineWidth(q.wireframeLinewidth*ge()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(H.isLine){let Gt=q.linewidth;Gt===void 0&&(Gt=1),nt.setLineWidth(Gt*ge()),H.isLineSegments?me.setMode(I.LINES):H.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else H.isPoints?me.setMode(I.POINTS):H.isSprite&&me.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))me.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Gt=H._multiDrawStarts,Me=H._multiDrawCounts,de=H._multiDrawCount,fn=Ft?P.get(Ft).bytesPerElement:1,vi=dt.get(q).currentProgram.getUniforms();for(let je=0;je<de;je++)vi.setValue(I,"_gl_DrawID",je),me.render(Gt[je]/fn,Me[je])}else if(H.isInstancedMesh)me.renderInstances(oe,Le,H.count);else if(W.isInstancedBufferGeometry){const Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,Gt);me.renderInstances(oe,Le,Me)}else me.render(oe,Le)};function ve(w,B,W){w.transparent===!0&&w.side===cn&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,gi(w,B,W),w.side=mi,w.needsUpdate=!0,gi(w,B,W),w.side=cn):gi(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),p=Ht.get(W),p.init(B),b.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pt=H.material;if(pt)if(Array.isArray(pt))for(let At=0;At<pt.length;At++){const Nt=pt[At];ve(Nt,W,H),q.add(Nt)}else ve(pt,W,H),q.add(pt)}),p=b.pop(),q},this.compileAsync=function(w,B,W=null){const q=this.compile(w,B,W);return new Promise(H=>{function pt(){if(q.forEach(function(At){dt.get(At).currentProgram.isReady()&&q.delete(At)}),q.size===0){H(w);return}setTimeout(pt,10)}tt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ue=null;function _n(w){ue&&ue(w)}function Oe(){hn.stop()}function Yn(){hn.start()}const hn=new wd;hn.setAnimationLoop(_n),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(w){ue=w,mt.setAnimationLoop(w),w===null?hn.stop():hn.start()},mt.addEventListener("sessionstart",Oe),mt.addEventListener("sessionend",Yn),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(B),B=mt.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,B,U),p=Ht.get(w,b.length),p.init(B),b.push(p),rt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),pe.setFromProjectionMatrix(rt,ei,B.reversedDepth),j=this.localClippingEnabled,ce=_t.init(this.clippingPlanes,j),g=Q.get(w,R.length),g.init(),R.push(g),mt.enabled===!0&&mt.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&qe(pt,B,-1/0,M.sortObjects)}qe(w,B,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(Et,Ct),ie=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,ie&&Dt.addToRenderList(g,w),this.info.render.frame++,ce===!0&&_t.beginShadows();const W=p.state.shadowsArray;Mt.render(W,w,B),ce===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,H=g.transmissive;if(p.setupLights(),B.isArrayCamera){const pt=B.cameras;if(H.length>0)for(let At=0,Nt=pt.length;At<Nt;At++){const Ft=pt[At];He(q,H,w,Ft)}ie&&Dt.render(w);for(let At=0,Nt=pt.length;At<Nt;At++){const Ft=pt[At];ye(g,w,Ft,Ft.viewport)}}else H.length>0&&He(q,H,w,B),ie&&Dt.render(w),ye(g,w,B);U!==null&&T===0&&(gt.updateMultisampleRenderTarget(U),gt.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(M,w,B),St.resetDefaultState(),S=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],ce===!0&&_t.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function qe(w,B,W,q){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pe.intersectsSprite(w)){q&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rt);const At=G.update(w),Nt=w.material;Nt.visible&&g.push(w,At,Nt,W,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pe.intersectsObject(w))){const At=G.update(w),Nt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(rt)),Array.isArray(Nt)){const Ft=At.groups;for(let Xt=0,Kt=Ft.length;Xt<Kt;Xt++){const kt=Ft[Xt],oe=Nt[kt.materialIndex];oe&&oe.visible&&g.push(w,At,oe,W,zt.z,kt)}}else Nt.visible&&g.push(w,At,Nt,W,zt.z,null)}}const pt=w.children;for(let At=0,Nt=pt.length;At<Nt;At++)qe(pt[At],B,W,q)}function ye(w,B,W,q){const H=w.opaque,pt=w.transmissive,At=w.transparent;p.setupLightsView(W),ce===!0&&_t.setGlobalState(M.clippingPlanes,W),q&&nt.viewport(N.copy(q)),H.length>0&&Ye(H,B,W),pt.length>0&&Ye(pt,B,W),At.length>0&&Ye(At,B,W),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function He(w,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ni(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?fo:ni,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const pt=p.state.transmissionRenderTarget[q.id],At=q.viewport||N;pt.setSize(At.z*M.transmissionResolutionScale,At.w*M.transmissionResolutionScale);const Nt=M.getRenderTarget(),Ft=M.getActiveCubeFace(),Xt=M.getActiveMipmapLevel();M.setRenderTarget(pt),M.getClearColor($),et=M.getClearAlpha(),et<1&&M.setClearColor(16777215,.5),M.clear(),ie&&Dt.render(W);const Kt=M.toneMapping;M.toneMapping=Ui;const kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ce===!0&&_t.setGlobalState(M.clippingPlanes,q),Ye(w,W,q),gt.updateMultisampleRenderTarget(pt),gt.updateRenderTargetMipmap(pt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let xe=0,Le=B.length;xe<Le;xe++){const Se=B[xe],me=Se.object,Gt=Se.geometry,Me=Se.material,de=Se.group;if(Me.side===cn&&me.layers.test(q.layers)){const fn=Me.side;Me.side=gn,Me.needsUpdate=!0,gr(me,W,q,Gt,Me,de),Me.side=fn,Me.needsUpdate=!0,oe=!0}}oe===!0&&(gt.updateMultisampleRenderTarget(pt),gt.updateRenderTargetMipmap(pt))}M.setRenderTarget(Nt,Ft,Xt),M.setClearColor($,et),kt!==void 0&&(q.viewport=kt),M.toneMapping=Kt}function Ye(w,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,pt=w.length;H<pt;H++){const At=w[H],Nt=At.object,Ft=At.geometry,Xt=At.group;let Kt=At.material;Kt.allowOverride===!0&&q!==null&&(Kt=q),Nt.layers.test(W.layers)&&gr(Nt,B,W,Ft,Kt,Xt)}}function gr(w,B,W,q,H,pt){w.onBeforeRender(M,B,W,q,H,pt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(M,B,W,q,w,pt),H.transparent===!0&&H.side===cn&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,M.renderBufferDirect(W,B,q,H,w,pt),H.side=mi,H.needsUpdate=!0,M.renderBufferDirect(W,B,q,H,w,pt),H.side=cn):M.renderBufferDirect(W,B,q,H,w,pt),w.onAfterRender(M,B,W,q,H,pt)}function gi(w,B,W){B.isScene!==!0&&(B=Ot);const q=dt.get(w),H=p.state.lights,pt=p.state.shadowsArray,At=H.state.version,Nt=Z.getParameters(w,H.state,pt,B,W),Ft=Z.getProgramCacheKey(Nt);let Xt=q.programs;q.environment=w.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(w.isMeshStandardMaterial?jt:$t).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",at),Xt=new Map,q.programs=Xt);let Kt=Xt.get(Ft);if(Kt!==void 0){if(q.currentProgram===Kt&&q.lightsStateVersion===At)return Oi(w,Nt),Kt}else Nt.uniforms=Z.getUniforms(w),w.onBeforeCompile(Nt,M),Kt=Z.acquireProgram(Nt,Ft),Xt.set(Ft,Kt),q.uniforms=Nt.uniforms;const kt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=_t.uniform),Oi(w,Nt),q.needsLights=vr(w),q.lightsStateVersion=At,q.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Kt,q.uniformsList=null,Kt}function On(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Ha.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Oi(w,B){const W=dt.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function _r(w,B,W,q,H){B.isScene!==!0&&(B=Ot),gt.resetTextureUnits();const pt=B.fog,At=q.isMeshStandardMaterial?B.environment:null,Nt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ls,Ft=(q.isMeshStandardMaterial?jt:$t).get(q.envMap||At),Xt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,xe=!!W.morphAttributes.color;let Le=Ui;q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Le=M.toneMapping);const Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=Se!==void 0?Se.length:0,Gt=dt.get(q),Me=p.state.lights;if(ce===!0&&(j===!0||w!==E)){const Be=w===E&&q.id===S;_t.setState(q,w,Be)}let de=!1;q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Me.state.version||Gt.outputColorSpace!==Nt||H.isBatchedMesh&&Gt.batching===!1||!H.isBatchedMesh&&Gt.batching===!0||H.isBatchedMesh&&Gt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Gt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Gt.instancing===!1||!H.isInstancedMesh&&Gt.instancing===!0||H.isSkinnedMesh&&Gt.skinning===!1||!H.isSkinnedMesh&&Gt.skinning===!0||H.isInstancedMesh&&Gt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Gt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Gt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Gt.instancingMorph===!1&&H.morphTexture!==null||Gt.envMap!==Ft||q.fog===!0&&Gt.fog!==pt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==_t.numPlanes||Gt.numIntersection!==_t.numIntersection)||Gt.vertexAlphas!==Xt||Gt.vertexTangents!==Kt||Gt.morphTargets!==kt||Gt.morphNormals!==oe||Gt.morphColors!==xe||Gt.toneMapping!==Le||Gt.morphTargetsCount!==me)&&(de=!0):(de=!0,Gt.__version=q.version);let fn=Gt.currentProgram;de===!0&&(fn=gi(q,B,H));let vi=!1,je=!1,si=!1;const Ce=fn.getUniforms(),en=Gt.uniforms;if(nt.useProgram(fn.program)&&(vi=!0,je=!0,si=!0),q.id!==S&&(S=q.id,je=!0),vi||E!==w){nt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ce.setValue(I,"projectionMatrix",w.projectionMatrix),Ce.setValue(I,"viewMatrix",w.matrixWorldInverse);const Qe=Ce.map.cameraPosition;Qe!==void 0&&Qe.setValue(I,Lt.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&Ce.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ce.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,je=!0,si=!0)}if(H.isSkinnedMesh){Ce.setOptional(I,H,"bindMatrix"),Ce.setOptional(I,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Ce.setValue(I,"boneTexture",Be.boneTexture,gt))}H.isBatchedMesh&&(Ce.setOptional(I,H,"batchingTexture"),Ce.setValue(I,"batchingTexture",H._matricesTexture,gt),Ce.setOptional(I,H,"batchingIdTexture"),Ce.setValue(I,"batchingIdTexture",H._indirectTexture,gt),Ce.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(I,"batchingColorTexture",H._colorsTexture,gt));const vn=W.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ht.update(H,W,fn),(je||Gt.receiveShadow!==H.receiveShadow)&&(Gt.receiveShadow=H.receiveShadow,Ce.setValue(I,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(en.envMap.value=Ft,en.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),je&&(Ce.setValue(I,"toneMappingExposure",M.toneMappingExposure),Gt.needsLights&&_i(en,si),pt&&q.fog===!0&&ut.refreshFogUniforms(en,pt),ut.refreshMaterialUniforms(en,q,K,ct,p.state.transmissionRenderTarget[w.id]),Ha.upload(I,On(Gt),en,gt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ha.upload(I,On(Gt),en,gt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ce.setValue(I,"center",H.center),Ce.setValue(I,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(I,"normalMatrix",H.normalMatrix),Ce.setValue(I,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Be=q.uniformsGroups;for(let Qe=0,ms=Be.length;Qe<ms;Qe++){const Bn=Be[Qe];Qt.update(Bn,fn),Qt.bind(Bn,fn)}}return fn}function _i(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function vr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,B,W){const q=dt.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),dt.get(w.texture).__webglTexture=B,dt.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const W=dt.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const xr=I.createFramebuffer();this.setRenderTarget=function(w,B=0,W=0){U=w,C=B,T=W;let q=!0,H=null,pt=!1,At=!1;if(w){const Ft=dt.get(w);if(Ft.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Ft.__webglFramebuffer===void 0)gt.setupRenderTarget(w);else if(Ft.__hasExternalTextures)gt.rebindTextures(w,dt.get(w.texture).__webglTexture,dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const kt=w.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&dt.has(kt)&&(w.width!==kt.image.width||w.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(w)}}const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(At=!0);const Kt=dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[B])?H=Kt[B][W]:H=Kt[B],pt=!0):w.samples>0&&gt.useMultisampledRTT(w)===!1?H=dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?H=Kt[W]:H=Kt,N.copy(w.viewport),V.copy(w.scissor),Y=w.scissorTest}else N.copy(bt).multiplyScalar(K).floor(),V.copy(qt).multiplyScalar(K).floor(),Y=ee;if(W!==0&&(H=xr),nt.bindFramebuffer(I.FRAMEBUFFER,H)&&q&&nt.drawBuffers(w,H),nt.viewport(N),nt.scissor(V),nt.setScissorTest(Y),pt){const Ft=dt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ft.__webglTexture,W)}else if(At){const Ft=B;for(let Xt=0;Xt<w.textures.length;Xt++){const Kt=dt.get(w.textures[Xt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xt,Kt.__webglTexture,W,Ft)}}else if(w!==null&&W!==0){const Ft=dt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(w,B,W,q,H,pt,At,Nt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft){nt.bindFramebuffer(I.FRAMEBUFFER,Ft);try{const Xt=w.textures[Nt],Kt=Xt.format,kt=Xt.type;if(!it.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-q&&W>=0&&W<=w.height-H&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(B,W,q,H,It.convert(Kt),It.convert(kt),pt))}finally{const Xt=U!==null?dt.get(U).__webglFramebuffer:null;nt.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(w,B,W,q,H,pt,At,Nt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft)if(B>=0&&B<=w.width-q&&W>=0&&W<=w.height-H){nt.bindFramebuffer(I.FRAMEBUFFER,Ft);const Xt=w.textures[Nt],Kt=Xt.format,kt=Xt.type;if(!it.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,oe),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(B,W,q,H,It.convert(Kt),It.convert(kt),0);const xe=U!==null?dt.get(U).__webglFramebuffer:null;nt.bindFramebuffer(I.FRAMEBUFFER,xe);const Le=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await b0(I,Le,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,oe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(oe),I.deleteSync(Le),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,W=0){const q=Math.pow(2,-W),H=Math.floor(w.image.width*q),pt=Math.floor(w.image.height*q),At=B!==null?B.x:0,Nt=B!==null?B.y:0;gt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,At,Nt,H,pt),nt.unbindTexture()};const po=I.createFramebuffer(),ps=I.createFramebuffer();this.copyTextureToTexture=function(w,B,W=null,q=null,H=0,pt=null){pt===null&&(H!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=H,H=0):pt=0);let At,Nt,Ft,Xt,Kt,kt,oe,xe,Le;const Se=w.isCompressedTexture?w.mipmaps[pt]:w.image;if(W!==null)At=W.max.x-W.min.x,Nt=W.max.y-W.min.y,Ft=W.isBox3?W.max.z-W.min.z:1,Xt=W.min.x,Kt=W.min.y,kt=W.isBox3?W.min.z:0;else{const vn=Math.pow(2,-H);At=Math.floor(Se.width*vn),Nt=Math.floor(Se.height*vn),w.isDataArrayTexture?Ft=Se.depth:w.isData3DTexture?Ft=Math.floor(Se.depth*vn):Ft=1,Xt=0,Kt=0,kt=0}q!==null?(oe=q.x,xe=q.y,Le=q.z):(oe=0,xe=0,Le=0);const me=It.convert(B.format),Gt=It.convert(B.type);let Me;B.isData3DTexture?(gt.setTexture3D(B,0),Me=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(gt.setTexture2DArray(B,0),Me=I.TEXTURE_2D_ARRAY):(gt.setTexture2D(B,0),Me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const de=I.getParameter(I.UNPACK_ROW_LENGTH),fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vi=I.getParameter(I.UNPACK_SKIP_PIXELS),je=I.getParameter(I.UNPACK_SKIP_ROWS),si=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const Ce=w.isDataArrayTexture||w.isData3DTexture,en=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const vn=dt.get(w),Be=dt.get(B),Qe=dt.get(vn.__renderTarget),ms=dt.get(Be.__renderTarget);nt.bindFramebuffer(I.READ_FRAMEBUFFER,Qe.__webglFramebuffer),nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Bn=0;Bn<Ft;Bn++)Ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dt.get(w).__webglTexture,H,kt+Bn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dt.get(B).__webglTexture,pt,Le+Bn)),I.blitFramebuffer(Xt,Kt,At,Nt,oe,xe,At,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);nt.bindFramebuffer(I.READ_FRAMEBUFFER,null),nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||dt.has(w)){const vn=dt.get(w),Be=dt.get(B);nt.bindFramebuffer(I.READ_FRAMEBUFFER,po),nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ps);for(let Qe=0;Qe<Ft;Qe++)Ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,H,kt+Qe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,H),en?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,pt,Le+Qe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Be.__webglTexture,pt),H!==0?I.blitFramebuffer(Xt,Kt,At,Nt,oe,xe,At,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):en?I.copyTexSubImage3D(Me,pt,oe,xe,Le+Qe,Xt,Kt,At,Nt):I.copyTexSubImage2D(Me,pt,oe,xe,Xt,Kt,At,Nt);nt.bindFramebuffer(I.READ_FRAMEBUFFER,null),nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else en?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Me,pt,oe,xe,Le,At,Nt,Ft,me,Gt,Se.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,pt,oe,xe,Le,At,Nt,Ft,me,Se.data):I.texSubImage3D(Me,pt,oe,xe,Le,At,Nt,Ft,me,Gt,Se):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,oe,xe,At,Nt,me,Gt,Se.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,oe,xe,Se.width,Se.height,me,Se.data):I.texSubImage2D(I.TEXTURE_2D,pt,oe,xe,At,Nt,me,Gt,Se);I.pixelStorei(I.UNPACK_ROW_LENGTH,de),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vi),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,si),pt===0&&B.generateMipmaps&&I.generateMipmap(Me),nt.unbindTexture()},this.initRenderTarget=function(w){dt.get(w).__webglFramebuffer===void 0&&gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?gt.setTextureCube(w,0):w.isData3DTexture?gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?gt.setTexture2DArray(w,0):gt.setTexture2D(w,0),nt.unbindTexture()},this.resetState=function(){C=0,T=0,U=null,nt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}}function ir(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Ee;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(f.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m])}if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const f=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let _=0;_<m.count;++_)f.push(m.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(const h in s){const f=kf(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const m=[];for(let y=0;y<o[h].length;++y)m.push(o[h][y][d]);const _=kf(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function kf(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Fn(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let d=0,m=h.count;d<m;d++)for(let _=0;_<e;_++){const y=h.getComponent(d,_);a.setComponent(d+f,_,y)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}async function Zr(){const i=globalThis.scheduler;i?.yield?await i.yield():await new Promise(t=>setTimeout(t,0))}function Zs(i){const t=performance.now();return performance.mark(`notebook:${i}:start`),()=>{performance.measure(`notebook:${i}`,{start:t,end:performance.now()}),performance.mark(`notebook:${i}:end`)}}const En=(i,t,e)=>Pi.smoothstep(e,i,t),be=Pi.lerp;function uc(i,t){i.opacity=t;const e=t<.995;i.transparent!==e&&(i.transparent=e,i.needsUpdate=!0),i.depthWrite=t>.92,i.visible=t>.003}let ka=73;function Zt(){return ka=ka*16807%2147483647,(ka-1)/2147483646}async function RM(i,t,e="full"){const n=Zs("scene-construction");let r=Zs("construction:renderer");const s=async u=>{r(),await Zr(),r=Zs(`construction:${u}`)};ka=73;const o=e==="low",a=new K0,l=new bM({alpha:!0,antialias:!0,powerPreference:"low-power"});l.debug.checkShaderErrors=!0,l.setPixelRatio(Math.min(devicePixelRatio,e==="low"?1.25:1.6)),i.dataset.quality=e,l.setClearColor(16448504,0),l.shadowMap.enabled=!0,l.shadowMap.type=Vf,l.shadowMap.autoUpdate=!o,l.toneMapping=Xf,l.toneMappingExposure=1.2,l.domElement.setAttribute("aria-hidden","true"),i.appendChild(l.domElement);const c=new yu(-10,10,10,-10,.1,100),h=new he;a.add(h);const f=new zm(16251903,8622195,2.5);a.add(f);const d=new df(16773076,3.3);d.position.set(-6,15,8),d.castShadow=!0,d.shadow.mapSize.set(e==="low"?1024:2048,e==="low"?1024:2048),d.shadow.camera.left=-12,d.shadow.camera.right=12,d.shadow.camera.top=12,d.shadow.camera.bottom=-12,d.shadow.normalBias=.025,d.shadow.bias=-15e-5,d.shadow.radius=4,d.shadow.camera.far=50,a.add(d);const m=new df(14084351,.7);m.position.set(8,6,-6),a.add(m);const _=new Fm({opacity:0}),y=new Pt(new wn(80,80),_);y.rotation.x=-Math.PI/2,y.position.y=-.27,y.receiveShadow=!0,a.add(y);const g={stone:15130055,light:15854039,trim:13220512,wood:11041102,dark:5007457,soil:7237712,leaf:8493395,leafLight:10926448,leafDark:5141841,grass:10663810,flower:15185763,coral:13533797,glass:10996417,ochre:15185763,terracotta:13533797,sandstone:14198908,sandstoneDark:12158297},p=new Map,R=[],b=["leaf","leafLight","leafDark","grass","flower","coral"],M=new Fe,D=(u,v=0)=>{const L=Math.sin(u*127.1+v*311.7)*43758.5453;return L-Math.floor(L)};function C(u,v,L,F,k,z=[0,0,0],X=!0){M.position.set(v,L,F),M.rotation.set(...z),M.scale.set(1,1,1),M.updateMatrix(),u.applyMatrix4(M.matrix),X&&R.push(new Ra(u,26));const ot=u.index?u.toNonIndexed():u;ot!==u&&u.dispose(),p.has(k)||p.set(k,[]),p.get(k).push(ot)}function T(u,v,L,F,k,z,X="stone",ot=!0){C(new fe(F,k,z),u,v,L,X,[0,0,0],ot)}function U(u,v,L,F,k,z="stone",X=F,ot=!0){C(new tn(X,F,k,12),u,v,L,z,[0,0,0],ot)}function S(u,v,L,F="wood",k=!0){const z=v.clone().sub(u),X=new tn(L*.68,L,z.length(),7);X.applyQuaternion(new fs().setFromUnitVectors(new A(0,1,0),z.normalize()));const ot=u.clone().add(v).multiplyScalar(.5);C(X,ot.x,ot.y,ot.z,F,[0,0,0],k)}function E(u,v,L,F,k="x"){const z=Math.ceil(F/.5);for(let X=0;X<=z;X++){const ot=-F/2+F*X/z;T(u+(k==="x"?ot:0),v+.28,L+(k==="z"?ot:0),.035,.55,.035,"dark")}T(u,v+.56,L,k==="x"?F:.045,.045,k==="z"?F:.045,"wood")}function N(u,v,L,F,k){T(u,v+.13,L,F,.26,k,"light"),T(u,v+.27,L,F-.1,.035,k-.1,"soil",!1);for(let z=0;z<Math.ceil(F*k*11);z++){const X=u+(Zt()-.5)*(F-.14),ot=L+(Zt()-.5)*(k-.14);C(new ln(.1+Zt()*.12,0),X,v+.34+Zt()*.09,ot,Zt()>.5?"leaf":"leafLight",[Zt(),Zt(),0],!1)}}function V(u,v,L,F){S(new A(u,v,L),new A(u+.05*F,v+F*1.05,L),F*.055);for(let k=0;k<5;k++){const z=k*2.4,X=Math.cos(z)*F*.35,ot=Math.sin(z)*F*.35;S(new A(u,v+F*.55,L),new A(u+X,v+F*(1.02+k*.04),L+ot),F*.023)}for(let k=0;k<14;k++){const z=k*2.4,X=F*(.12+Zt()*.38),ot=u+Math.cos(z)*X,Tt=L+Math.sin(z)*X,yt=v+F*(1.02+Zt()*.43),Yt=new ln(F*(.25+Zt()*.16),o?0:1);Yt.scale(1,.75+Zt()*.35,1),C(Yt,ot,yt,Tt,["leaf","leafLight","leafDark"][k%3],[Zt(),Zt(),Zt()],!1)}for(let k=0;k<3;k++){const z=[];for(let yt=0;yt<=30;yt++){const Yt=yt/30*Math.PI*2,Vt=F*(.47+Math.sin(Yt*7+k)*.03);z.push(new A(u+Math.cos(Yt)*Vt,v+F*1.2+Math.sin(Yt)*Vt*(k===2?.5:1),L+(k-1)*F*.18))}const X=new Ee().setFromPoints(z),ot=X.getAttribute("position"),Tt=[];for(let yt=0;yt<ot.count-1;yt++)Tt.push(ot.getX(yt),ot.getY(yt),ot.getZ(yt),ot.getX(yt+1),ot.getY(yt+1),ot.getZ(yt+1));R.push(new Ee().setAttribute("position",new ae(Tt,3))),X.dispose()}}function Y(u,v,L,F,k,z,X=0){const ot=new Js,Tt=F/2;ot.moveTo(-Tt,0),ot.lineTo(-Tt,k-Tt),ot.absarc(0,k-Tt,Tt,Math.PI,0,!0),ot.lineTo(Tt,0),ot.lineTo(Tt-.18,0),ot.lineTo(Tt-.18,k-Tt),ot.absarc(0,k-Tt,Tt-.18,0,Math.PI,!1),ot.lineTo(-Tt+.18,0),ot.closePath(),C(new ts(ot,{depth:z,bevelEnabled:!1,curveSegments:12}),u,v,L,"light",[0,X,0])}function $(u,v,L,F,k,z=1){for(let X=0;X<k;X++)T(u,v+X*.13,L-X*.22*z,F,.14,.26,"light")}await s("terraces"),T(0,-.03,0,10.8,.38,8.7,"stone"),T(-3.85,.23,.2,3.2,.28,5.3,"light"),T(3.5,.32,-.3,3.2,.46,5.2,"light"),T(.05,.24,-2.1,3.2,.46,3.9,"light"),T(.4,.25,3.05,4.9,.42,1.8,"light");for(let u=-5;u<5.3;u+=.44)T(u,.172,4.3,.025,.014,.18,"trim",!1);const et=[[-5.4,5.4,-4.35,4.35,.16],[-5.45,-2.25,-2.45,2.85,.37],[1.9,5.1,-2.9,2.3,.55],[-1.55,1.65,-4.05,-.15,.47],[-2.05,2.85,2.15,3.95,.46]],J=(u,v)=>Math.max(...et.filter(([L,F,k,z])=>u>=L&&u<=F&&v>=k&&v<=z).map(L=>L[4]));T(.01,.315,1.965,1.25,.31,3.93,"light"),T(-1.7075,.315,2.61,2.185,.31,.8,"light"),T(.675,.355,1.965,.08,.39,4.01,"stone"),T(-.655,.355,1.065,.08,.39,2.21,"stone"),T(-.655,.355,3.51,.08,.39,.92,"stone");for(const u of[-.04,3.97])T(.01,.355,u,1.41,.39,.08,"stone");for(const u of[2.17,3.05])T(-1.7475,.355,u,2.185,.39,.08,"stone");T(-2.84,.355,2.61,.08,.39,.96,"stone");for(const u of[2.37,2.61,2.85])T(-1.9,.5,u,.22,.06,.18,"light");for(const u of[-1.13,1.13])for(const v of[-2.9,-.7])T(u,1.57,v,.3,2.55,.3,"stone");for(const u of[-.74,.74])Y(u,.36,-.5,1.38,2.55,.18);T(0,2.92,-1.8,3.1,.26,3.1,"light"),T(.13,3.14,-1.86,2.85,.13,2.85,"trim");for(const u of[-.92,1.02])for(const v of[-2.75,-1.05])T(u,4.05,v,.2,1.9,.2,"stone");T(.08,5.04,-1.9,2.75,.23,2.65,"light"),T(.08,3.95,-2.85,1.8,1.8,.13,"stone"),T(-.78,.75,-.42,.4,.04,.5,"wood");for(const u of[-.95,-.61])for(const v of[-.64,-.2])T(u,.6,v,.03,.27,.03,"wood");if(T(-.78,.78,-.47,.36,.02,.36,"light"),!o){for(let u=0;u<4;u++)for(let v=0;v<4;v++)(u+v)%2&&T(-.915+u*.09,.792,-.605+v*.09,.09,.006,.09,"dark",!1);for(const[u,v,L]of[[-.87,-.56,"ochre"],[-.69,-.56,"ochre"],[-.78,-.38,"terracotta"],[-.69,-.38,"terracotta"]])U(u,.815,v,.026,.045,L);C(new fe(.045,.045,.045),-.88,.792,-.23,"light",[0,.4,0]),C(new fe(.045,.045,.045),-.74,.792,-.22,"light",[0,-.3,0])}T(.08,4.12,-2.77,1.4,.8,.02,"dark");for(const u of[3.7,4.54])T(.08,u,-2.76,1.5,.05,.04,"wood");for(const u of[-.65,.81])T(u,4.12,-2.76,.05,.89,.04,"wood");T(.25,3.63,-2.42,.72,.04,.34,"wood");for(const u of[-.08,.58])T(u,3.41,-2.42,.03,.4,.3,"dark");if(!o){for(let u=0;u<5;u++)C(new fe(.17,.007,.23),.42,3.655+u*.008,-2.42,"light",[0,(D(u,9)-.5)*.35,0],u===4);U(.02,3.66,-2.5,.05,.02,"dark"),S(new A(.02,3.66,-2.5),new A(.06,3.92,-2.45),.012,"dark"),U(.08,3.9,-2.42,.1,.09,"ochre",.04)}const ct=6.02,K=[-1.15,.05,1.25],Et=[-3.1,-1.62];N(.06,5.19,-2.86,2.4,.34);for(const u of K)for(const v of Et)if(U(u,(5.16+ct)/2,v,.042,ct-5.16,"stone",.036),!o){for(let L=0;L<2;L++){let F=new A(u+.05,5.17,v);for(let k=1;k<=14;k++){const z=k*.62+L*Math.PI+u*2+v,X=.05+Math.sin(k*1.3+L)*.012,ot=new A(u+Math.cos(z)*X,5.17+k/14*(ct-5.1),v+Math.sin(z)*X);S(F,ot,.021-k*7e-4,"wood",!1),F=ot}}for(let L=0;L<3;L++){const F=L*2.1+u+v*1.7;S(new A(u,ct+.1,v),new A(Pi.clamp(u+Math.cos(F)*.4,-1.2,1.3),ct+.17,Pi.clamp(v+Math.sin(F)*.4,-3.15,-1.62)),.013,"wood",!1)}}for(const u of Et)T(.05,ct+.04,u,2.68,.07,.06,"trim");for(let u=0;u<13;u++)T(-1.2+u*.205,ct+.1,-2.36,.035,.05,1.86,"trim");for(const u of[-2.85,-2.36,-1.87])T(.05,ct+.14,u,2.7,.025,.03,"trim",!1);for(let u=0;u<(o?80:230);u++){const v=-1.28+D(u,1)*2.68,L=-3.22+D(u,2)*1.62;C(new ln((.07+D(u,3)*.07)*(o?1.6:1),0).scale(1,.5,1),v,ct+.17+D(u,4)*.05,L,["leafLight","leaf","leafLight","leafDark"][u%4],[0,D(u,6)*3,(D(u,5)-.5)*.4],!1)}for(let u=0;u<(o?0:22);u++){const v=u<14,L=v?-1.2+u*.185+(D(u,11)-.5)*.1:1.33,F=v?-1.6:-3+(u-14)*.2,k=1+Math.floor(D(u,12)*4);for(let z=0;z<k;z++)C(new ln(.05-z*.006,0).scale(1,.8,1),L+Math.sin(z*1.7+u)*.02,ct+.05-z*.075,F+Math.cos(z+u)*.02,z%2?"leaf":"leafLight",[z,u,0],!1)}for(let u=0;u<(o?0:10);u++){const v=.12+D(u,9)*.08;C(new Pn(.03,v,5).rotateX(Math.PI),-1+D(u,7)*2.1,ct+.07-v/2,-3+D(u,8)*1.3,u%3?"coral":"flower",[0,D(u,10)*3,0],!1)}function Ct(u,v,L,F){const k=Math.cos(L),z=Math.sin(L);for(const[X,ot,Tt,yt,Yt,Vt,Te]of F)C(new fe(X,ot,Tt),u+yt*k+Vt*z,5.16+Yt,v-yt*z+Vt*k,Te,[0,L,0],Te==="wood")}const bt={x:-.45,z:-2.05},qt={x:.45,z:-1,yaw:-.6};Ct(bt.x,bt.z,0,[[.92,.14,.34,0,.1,0,"wood"],[.42,.06,.28,-.215,.2,.02,"light"],[.42,.06,.28,.215,.2,.02,"light"],[.92,.26,.06,0,.28,-.15,"wood"],[.4,.17,.06,-.215,.31,-.105,"light"],[.4,.17,.06,.215,.31,-.105,"light"],[.06,.12,.34,-.46,.24,0,"wood"],[.06,.12,.34,.46,.24,0,"wood"]]),Ct(qt.x,qt.z,qt.yaw,[[.36,.14,.34,0,.1,0,"wood"],[.28,.06,.28,0,.2,.02,"light"],[.36,.26,.06,0,.28,-.15,"wood"],[.28,.17,.06,0,.31,-.105,"light"],[.05,.12,.34,-.155,.24,0,"wood"],[.05,.12,.34,.155,.24,0,"wood"]]);const ee={x:-.3,z:-.88};T(ee.x,5.32,ee.z,.42,.035,.27,"wood");for(const u of[-.17,.17])for(const v of[-.1,.1])T(ee.x+u,5.235,ee.z+v,.035,.15,.035,"wood");function pe(u,v,L){const F=L*1.3;U(u,5.16+F/2,v,L*.75,F,"terracotta",L);for(let k=0;k<(o?3:6);k++){const z=k*2.4+u*5;C(new ln(L*(.5+D(k,u+v)*.25),0),u+Math.cos(z)*L*.45,5.16+F+L*.35+D(k,v)*L*.3,v+Math.sin(z)*L*.45,k%2?"leaf":"leafLight",[z,k,0],!1),C(new ln(L*.28,0),u+Math.cos(z+1)*L*.6,5.16+F+L*.75+D(k,u)*L*.25,v+Math.sin(z+1)*L*.6,k%3?"coral":"flower",[0,0,0],!1)}}const ce=[[-.95,-1.45,.09],[.25,-1.45,.08],[1.05,-1.48,.085]];if(ce.forEach(([u,v,L])=>pe(u,v,L)),pe(-1.12,-.78,.11),pe(1.2,-2.6,.1),pe(ee.x+.08,ee.z,.045),!o){for(const u of[-1.6,-.66])S(new A(1.32,5.16,u),new A(1.32,5.82,u),.022,"dark"),T(1.32,5.8,u,.03,.03,.16,"wood");S(new A(1.32,5.79,-1.6),new A(1.32,5.79,-.66),.006,"light",!1),U(1,5.22,-.72,.13,.12,"wood",.15),U(1,5.285,-.72,.12,.012,"light",.12,!1),S(new A(bt.x,ct,-1.62),new A(bt.x,5.8,-1.62),.005,"dark",!1),U(bt.x,5.795,-1.62,.012,.03,"dark",.045),U(bt.x,5.72,-1.62,.032,.12,"glass",.032),U(bt.x,5.65,-1.62,.045,.02,"dark")}E(-.91,3.12,-.46,.58),E(1.02,3.12,-.46,.76),U(.01,3.27,-1.95,.2,.13,"light");for(const u of[-.18,.2])T(u,3.23,-1.09,.04,.05,1.32,"light");N(-1.19,3.15,-1.65,.42,1.7),N(1.26,3.15,-2.25,.4,.5),N(1.3,3.15,-.85,.32,.5),await s("observatory");const j=-3.55,rt=.2;U(j,.62,rt,1.47,.2,"light"),C(new ar(1.25,.15,5,52),j,2.42,rt,"light",[Math.PI/2,0,0]);for(let u=0;u<10;u++){const v=u/10*Math.PI*2,L=j+Math.cos(v)*1.25,F=rt+Math.sin(v)*1.25;U(L,1.5,F,.09,1.8,"stone")}U(j,.81,rt,1.09,.13,"dark"),U(j,.9,rt,.87,.1,"glass");const Lt=1.53,zt=.36,Ot=.56;U(j,1.06,rt,.44,.22,"light"),U(j,1.195,rt,.42,.05,"wood"),U(j,Lt,rt,zt-.07,Ot,"dark");for(const u of[Lt-.295,Lt+.295])U(j,u,rt,zt+.02,.03,"dark");U(j,Lt+.335,rt,.07,.05,"ochre",.05);const ie=2,ge=.48,I=new A(j+Math.sin(ie)*(zt+ge),Lt-.06,rt+Math.cos(ie)*(zt+ge));T(I.x,(.95+I.y)/2,I.z,.05,I.y-.95,.05,"dark"),T(I.x,I.y,I.z,.07,.07,.07,"ochre");const st=new A(-3.2,1.03,.8);T(st.x,st.y,st.z,.26,.16,.2,"dark"),T(st.x,1.07,st.z+.102,.18,.025,.006,"glass",!1);const tt=new A(-2.92,1.52,1.07),it=[new A(j+.22,.97,rt+.37),new A(st.x-.05,.97,st.z-.1),new A(st.x+.13,.97,st.z+.02),new A(-2.97,.9,1),new A(tt.x,.9,tt.z)];for(let u=0;u<it.length-1;u++)S(it[u],it[u+1],.016,"dark",!1);T(tt.x,1.1,tt.z,.05,.44,.05,"dark");const nt=1.2;C(new fe(.5,.14,.07),tt.x,nt,tt.z,"dark",[0,.75,0]),C(new fe(.22,.05,.02).translate(0,0,.025),tt.x,nt-.1,tt.z,"light",[0,.75,0]),C(new tn(.2,.2,.035,24).rotateX(Math.PI/2).rotateY(.75),tt.x,tt.y,tt.z,"light");for(let u=0;u<(o?0:7);u++){const v=-Math.PI/2+u/6*Math.PI;C(new fe(.012,u%3?.035:.055,.008).rotateZ(-v).translate(Math.sin(v)*.15,Math.cos(v)*.15,.021).rotateY(.75),tt.x,tt.y,tt.z,"dark",[0,0,0],!1)}for(const[u,v]of o?[]:[[-3.52,.86],[-3.78,.7]])T(u,1.01,v,.025,.12,.025,"dark"),C(new fe(.17,.11,.015),u,1.12,v,"dark",[0,.75,0]),C(new wn(.14,.085),u+Math.sin(.75)*.009,1.12,v+Math.cos(.75)*.009,"glass",[0,.75,0],!1),S(new A(st.x-.13,.97,st.z),new A(u,.97,v),.01,"dark",!1);V(-4.4,J(-4.4,-1.9),-1.9,.8),N(-5,J(-5,1.7),1.7,.55,1.1),$(-3.55,.3,2.24,1.3,4),await s("reading-room"),T(3.33,.73,-.75,2.6,.28,3.3,"trim");const xt=2.84,dt=Math.tan(.09),gt=1.69,$t=u=>xt+Math.abs(u)*dt,jt=u=>$t(u)+.07,P=u=>jt(u)+.04+.2*(1-(1-Math.min(u/.6,1))**2);function x(u,v,L,F,k=!0){const z=new Js(u.map(([X,ot])=>new ft(X,ot)));C(new ts(z,{depth:v,bevelEnabled:!1}).translate(0,0,-v/2),L,0,-.75,F,[0,-Math.PI/2,0],k)}const G=(u,v,L,F=16)=>Array.from({length:F+1},(k,z)=>{const X=u+(v-u)*z/F;return[X,L(Math.abs(X))]});for(const u of[-1,1]){x([[0,xt],[u*1.75,$t(1.75)],[u*1.75,$t(1.75)+.07],[0,xt+.07]],2.9,3.33,"terracotta"),x([...G(0,u*gt,jt,1),...G(u*gt,0,P)],2.76,3.33,"light");const v=(L,F)=>R.push(new Ee().setAttribute("position",new ae([...L.toArray(),...F.toArray()],3)));v(new A(1.95,P(.6),-.75+u*.6),new A(4.71,P(.6),-.75+u*.6));for(let L=0;L<(o?0:21);L++){if(D(L,u+20)<.12)continue;const F=.5+D(L,u+21)*.3,k=.72+F/2,z=2.13+L*.12;v(new A(z,P(.72)+.007,-.75+u*.72),new A(z,P(.72+F)+.007,-.75+u*(.72+F))),C(new fe(.024,.006,F),z,P(k)+.004,-.75+u*k,"dark",[-u*.09,0,0],!1)}}C(new tn(.08,.08,2.9,12).rotateZ(Math.PI/2),3.33,xt+.02,-.75,"terracotta");const Z=P(gt);x([...G(.04,gt,u=>P(u)+.002),[1.756,Z+.002],[1.756,Z+.01],...G(gt,.04,u=>P(u)+.01)],.06,3.87,"ochre",!1),T(3.87,Z-.17,1.01,.06,.36,.008,"ochre",!1);for(const u of[2.18,4.48])for(const v of[-2.18,.62]){const L=$t(v+.75);T(u,(.7+L)/2,v,.22,L-.7,.22,"stone")}const ut=$t(1.45);T(3.33,(.75+ut)/2,-2.2,2.5,ut-.75,.17,"stone");for(const u of[.92,2.47])T(3.33,u,-1.985,2.34,.05,.26,"wood");for(let u=0,v=2.2;v<4.38;u++){const L=Math.min(.11+D(u)*.1,4.44-v),F=1+D(u,1)*.47,k=.17+D(u,2)*.07;T(v+L/2,.945+F/2,-2.115+k/2,L,F,k,["wood","trim","dark"][u%3]),v+=L+.012}T(4.39,1.78,-.78,.04,1.82,2.54,"stone");for(const u of[-2.04,.48])T(4.515,1.78,u,.25,1.82,.04,"wood");for(const u of[.9,1.79,2.67])T(4.515,u,-.78,.25,.04,2.5,"wood");for(const[u,v]of[[0,.92],[1,1.81]])for(let L=0,F=-2.02;F<.42;L++){const k=L+u*50;if(D(k,8)>.9){F+=.1;continue}const z=Math.min(.07+D(k,5)*.08,.46-F),X=.5+D(k,6)*.3,ot=.17+D(k,7)*.05;T(4.62-ot/2,v+X/2,F+z/2,ot,X,z,["wood","trim","dark","terracotta","light","ochre"][L%6]),F+=z+.008}T(3.25,1.36,.05,1.7,.1,.7,"wood");for(const u of[2.7,3.8])T(u,1.03,.05,.07,.65,.55,"dark");T(3.25,1.43,-.03,.14,.04,.11,"dark"),C(new fe(.15,.28,.022),3.25,1.58,-.07,"dark",[-.22,0,0]),C(new wn(.12,.24),3.25,1.58+.013*Math.sin(.22),-.07+.013*Math.cos(.22),"glass",[-.22,0,0],!1);for(const[u,v]of[[2.8,"ochre"],[3.7,"terracotta"]])U(u,1.43,.02,.07,.04,"dark"),C(new Ke(.075,14,10).scale(1,.85,1),u,1.5,.02,v,[0,0,0],!1);$(3.35,.34,1.6,1.8,4),await s("greenhouse"),T(-1.9,.65,-.3,.8,.14,.6,"wood");for(let u=0;u<8;u++)T(-2.25+u*.1,.74,-.3,.065,.04,.58,"light");E(-1.9,.74,-.62,.8),E(-1.9,.74,.02,.8);for(const u of[-.55,-.05])T(-1.6,.37,u,.06,.42,.06,"dark");T(1.82,3.15,-1.6,.74,.12,.62,"wood"),E(1.82,3.2,-1.93,.74),E(1.82,3.2,-1.28,.74),T(2.02,.585,3.11,1.75,.25,1.8,"light");for(const u of[1.26,2.78])for(const v of[2.34,3.88])T(u,1.28,v,.045,1.2,.045,"dark");for(const u of[2.34,3.88])S(new A(1.26,1.9,u),new A(2.02,2.47,u),.035,"dark"),S(new A(2.78,1.9,u),new A(2.02,2.47,u),.035,"dark");T(2.02,2.47,3.11,.055,.05,1.6,"dark");for(const u of[1.26,2.78])T(u,1.91,3.11,.04,.04,1.6,"dark"),T(u,1.2,3.11,.025,.025,1.6,"dark");N(1.55,.72,3.12,.43,1.28),T(2.43,1.1,3.12,.46,.04,1.3,"wood");for(const u of[2.24,2.62])for(const v of[2.52,3.72])T(u,.895,v,.035,.37,.035,"dark");for(const u of[2.72,3.12]){T(2.43,1.145,u,.34,.05,.34,"dark");for(let v=0;v<(o?0:3);v++)for(let L=0;L<3;L++)C(new Pn(.02,.07,4),2.33+v*.1,1.2,u-.1+L*.1,"grass",[0,D(v*3+L,u)*3,0],!1)}U(2.43,1.195,3.5,.065,.15,"trim"),S(new A(2.48,1.17,3.5),new A(2.62,1.3,3.5),.015,"trim"),C(new ar(.05,.009,4,12,Math.PI),2.4,1.27,3.5,"trim"),o||["light","ochre","terracotta","light"].forEach((u,v)=>C(new fe(.07,.1,.012),2.28+v*.1,1.17,3.72,u,[-.12,0,0])),T(3.05,.47,3.95,.05,.62,.05,"dark"),T(3.05,.88,3.95,.26,.2,.2,"terracotta"),C(new tn(.1,.1,.26,14).rotateZ(Math.PI/2),3.05,.98,3.95,"terracotta"),T(3.05,.93,4.052,.13,.016,.006,"dark",!1);const Q=new wn(.95,1.54);C(Q,1.64,2.185,3.11,"glass",[-Math.PI/2,0,-.643],!1),C(new wn(.95,1.54),2.4,2.185,3.11,"glass",[-Math.PI/2,0,.643],!1),await s("planting"),[[-4.45,3.25,1.15],[-2.95,3.5,.75],[-1.66,3.5,1],[4.4,1.72,1.1],[4.62,3.42,.83],[-1.08,1.73,.9],[-3.5,-3.4,.83],[2.08,-3.53,.8]].forEach(([u,v,L])=>{const F=J(u,v);N(u,F,v,.75,.72),V(u,F+.29,v,L)});for(const[u,v,L,F]of[[.22,-3.85,2.4,.37],[4.7,-2.65,.4,.45],[-5.1,-.95,.42,.9],[1.2,1.45,.6,.7]])N(u,J(u,v),v,L,F);const _t=(u,v)=>Math.hypot(u-j,v-rt)<1.6||[[-.85,.87,-.3,4.15],[-3.05,-.6,2,3.25],[2,4.7,-2.45,.95],[2.4,4.3,.8,1.75],[1.1,2.95,2.15,4.05],[-4.25,-2.85,1.45,2.4]].some(([L,F,k,z])=>u>L&&u<F&&v>k&&v<z);for(let u=0;u<90;u++){const v=(Zt()-.5)*10,L=(Zt()-.5)*8;if(Math.abs(v)<1.25||Math.abs(L)<.8||_t(v,L)||o&&u%2)continue;const F=J(v,L)+.1;C(new Pn(.05,.22,4),v,F,L,"grass",[0,Zt()*4,.2],!1),u%3===0&&C(new ln(.065,0),v,F+.15,L,u%2?"flower":"coral",[0,0,0],!1)}T(-.98,.92,3.525,.3,.07,.75,"wood");for(const u of[3.25,3.8])T(-.98,.68,u,.24,.48,.05,"dark");U(4.36,1.4,.75,.027,1.6,"dark"),U(4.36,2.21,.75,.13,.19,"flower"),await s("mansourah");const Mt=6.7,Dt=-2.975;T(Mt,-.03,Dt,2.2,.38,2.75,"stone"),T(5.5,.13,Dt+.6,.3,.06,.46,"light");const ht=(u,v,L,F)=>{const k=L*1.25,z=k-L,X=.3,ot=Math.acos(-z/k),Tt=k*Math.cos(X)-z,yt=[];for(let Yt=0;Yt<=8;Yt++){const Vt=Math.PI+X-Yt/8*(Math.PI+X-ot);yt.push([z+k*Math.cos(Vt),F+k*Math.sin(Vt)])}return[[-Tt,0],...yt,...yt.reverse().map(([Yt,Vt])=>[-Yt,Vt]),[Tt,0]].map(([Yt,Vt])=>new ft(u+Yt,v+Vt))},wt=Mt+.2,Wt=Dt+.05,It=.16,St=4,Qt=Wt+.5,O=new Js([new ft(-.36,0),...ht(0,0,.24,.95),new ft(.36,0),new ft(.36,St-.1),new ft(.2,St),new ft(.02,St-.06),new ft(-.18,St+.03),new ft(-.36,St-.05)]);for(const u of[-.15,0,.15])O.holes.push(new no(ht(u,1.66,.055,.18)));for(const u of[-.11,.11])O.holes.push(new no(ht(u,2.42,.07,.22)));C(new ts(O,{depth:.14,bevelEnabled:!1}),wt,It,Qt-.14,"sandstone"),[[[.86,0],[.86,.45],[.7,.62],[.62,1.3],[.68,1.5],[.55,2.1],[.5,2.8],[.42,3.1],[.4,3.6],[.3,St-.05],[0,St-.1]],[[.8,0],[.8,.7],[.66,.9],[.66,1.6],[.52,1.9],[.56,2.5],[.44,3],[.38,3.5],[.26,St-.08],[0,St-.05]]].forEach((u,v)=>{const L=new Js([[0,0],...u].map(([F,k])=>new ft(F,k)));for(const F of[1.7,2.7])L.holes.push(new no(ht(.25,F,.06,.2)));C(new ts(L,{depth:.14,bevelEnabled:!1}),v?wt-.5:wt+.36,It,Qt,"sandstone",[0,Math.PI/2,0])}),T(wt,It+.14,Wt-.43,.72,.28,.14,"sandstone"),T(wt-.25,It+.25,Wt-.43,.22,.5,.14,"sandstone");const vt=(u,v,L,F,k=.025)=>T(wt+u,It+v,Qt+k/2,L,F,k,"sandstoneDark");for(const u of[-.33,.33])vt(u,.71,.045,1.42);vt(0,1.42,.7,.045),vt(0,1.52,.72,.06,.05),vt(0,1.63,.5,.04,.12);for(const u of[-.29,.29])vt(u,2.94,.04,1.24);for(const u of[2.32,3.56])vt(0,u,.62,.04);for(let u=0;u<(o?0:5);u++)for(let v=0;v<4+u%2;v++)C(new fe(.08,.08,.02),wt-.18-u%2*.06+v*.12,It+2.84+u*.14,Qt+.01,"sandstoneDark",[0,0,Math.PI/4],!1);for(let u=0;u<(o?0:9);u++)T(wt-.32+u*.08,It+3.76,Qt+.008,.07,.09,.016,u%2?"light":"dark",!1);T(Mt+.05,It+.2,Dt-1.15,1.9,.4,.16,"sandstoneDark"),T(Mt-.8,It+.32,Dt-1.1,.36,.64,.36,"sandstoneDark");for(let u=0;u<8;u++)u!==4&&u!==5&&T(Mt-.6+u*.22,It+.46,Dt-1.15,.1,.12,.16,"sandstoneDark");for(const[u,v,L]of[[.75,-.55,.16],[-.25,-.6,.13],[.9,.4,.12],[-.45,-.25,.1]])C(new fe(L*1.4,L,L),Mt+u,It+L/2,Dt+v,"sandstone",[0,D(u,v)*3,0]);const Ut=new A(Mt-.7,It,Dt+.6);S(Ut,Ut.clone().add(new A(.07,.6,-.04)),.07),S(Ut.clone().add(new A(.04,.35,0)),Ut.clone().add(new A(-.2,.7,.1)),.035);for(let u=0;u<7;u++){const v=u*2.4,L=.12+D(u,7)*.2,F=new ln(.17+D(u,8)*.08,o?0:1);F.scale(1,.7,1),C(F,Ut.x+Math.cos(v)*L,Ut.y+.72+D(u,9)*.22,Ut.z+Math.sin(v)*L,u%2?"leaf":"leafDark",[D(u,10),D(u,11),0],!1)}for(let u=0;u<(o?4:10);u++)C(new Pn(.05,.22,4),Mt-1+D(u,12)*2,It+.1,Dt-.75+D(u,13)*1.6,"grass",[0,D(u,14)*4,.2],!1);await s("building-site");const lt=Dt+2.95,at=.22;T(Mt,-.03,lt,2.2,.38,2.75,"stone"),T(Mt,-.03,lt+2.95,2.2,.38,2.75,"stone"),T(Mt-.5,.13,Dt+1.475,.46,.06,.3,"light"),T(Mt-.5,.13,lt+1.475,.46,.06,.3,"light"),T(5.5,.13,lt+.6,.3,.06,.46,"light"),T(Mt-.05,.19,lt,1.5,.06,1.42,"trim");const Bt=.12,te=.24,ve=(u,v,L,F,k)=>{for(let z=0;z<Math.max(...k);z++)for(let X=z%2?-te/2:0;X<F;X+=te){const ot=Math.max(X,0),Tt=Math.min(X+te,F);if(z>=k[Math.floor((ot+Tt)/2/te)])continue;const yt=(ot+Tt)/2;T(L==="x"?u+yt:u,at+Bt*(z+.5),L==="z"?v+yt:v,L==="x"?Tt-ot:.14,Bt,L==="z"?Tt-ot:.14,"light")}},ue=Mt-.7,_n=Mt+.6,Oe=lt-.6,Yn=lt+.6;ve(ue,Oe,"x",_n-ue,[9,9,8,8,7,6]),ve(ue,Oe+.07,"z",Yn-Oe-.07,[9,8,7,5,4]),ve(_n,Oe+.07,"z",Yn-Oe-.07,[7,6,4,3,2]),ve(ue,Yn,"x",_n-ue,[3,2,0,0,2,1]);const hn=_n+.2;for(const u of[Oe,lt,Yn])for(const v of[hn-.08,hn+.08])S(new A(v,.16,u),new A(v,1.5,u),.014);for(const u of[.62,1.12]){T(hn,u,lt,.24,.025,Yn-Oe+.05,"wood");for(const v of[hn-.08,hn+.08])T(v,u+.3,lt,.018,.018,Yn-Oe,"dark")}S(new A(hn+.08,.2,Oe),new A(hn+.08,1.1,Yn),.01,"dark");const qe=Mt-.88,ye=lt-.85,He=3.1,Ye=.08;T(qe,.21,ye,.3,.1,.3,"trim");for(const u of[-Ye,Ye])for(const v of[-Ye,Ye])S(new A(qe+u,.26,ye+v),new A(qe+u,He,ye+v),.016,"ochre");for(let u=.26,v=1;!o&&u<He-.1;u+=.28,v=-v)S(new A(qe-v*Ye,u,ye+Ye),new A(qe+v*Ye,u+.28,ye+Ye),.008,"ochre",!1),S(new A(qe+Ye,u,ye-v*Ye),new A(qe+Ye,u+.28,ye+v*Ye),.008,"ochre",!1);T(qe,He+.07,ye+Ye+.08,.16,.14,.14,"light");const gr=Mt+.55,gi=qe-.55;for(const u of[-.06,.06])S(new A(gi,He,ye+u),new A(gr,He,ye+u),.014,"ochre");S(new A(qe+.05,He+.2,ye),new A(gr-.2,He+.05,ye),.012,"ochre");for(let u=0;u<(o?0:8);u++){const v=qe+.05+u*.17,L=u/8;S(new A(v,He,ye),new A(v+.085,He+.2-L*.15,ye),.007,"ochre",!1)}S(new A(qe,He,ye),new A(qe,He+.6,ye),.016,"ochre");for(const u of[gr-.1,gi+.05])S(new A(qe,He+.6,ye),new A(u,He+.03,ye),.005,"dark",!1);T(gi+.12,He-.05,ye,.2,.22,.2,"trim");const On=Mt+.1;T(On,He-.03,ye,.1,.05,.16,"dark"),S(new A(On,He-.05,ye),new A(On,1.95,ye),.004,"dark",!1),T(On,1.9,ye,.06,.08,.06,"dark");for(const u of[-.12,.12])S(new A(On,1.86,ye),new A(On+u,1.7,ye),.004,"dark",!1);T(On,1.68,ye,.3,.03,.26,"wood"),T(On,1.76,ye,.26,.13,.22,"light"),T(Mt-.65,.18,lt+1,.36,.04,.3,"wood");for(let u=0;u<2;u++)for(let v=0;v<2;v++)T(Mt-.65,.26+u*Bt,lt+.93+v*.15,.32,Bt,.14,"light");C(new Pn(.3,.26,10),Mt+.55,.29,lt+.98,"trim");for(const u of[Mt-.25,Mt+.15])T(u,.36,lt+1.25,.03,.4,.03,"dark");for(let u=0;u<(o?0:6);u++)T(Mt-.29+u*.08+.04,.48,lt+1.25,.08,.07,.025,u%2?"dark":"ochre",!1);await s("geometry-batches");const Oi=[],_r=[];for(const[u,v]of p){const L=new Sn({color:g[u],roughness:.86,metalness:0,transparent:!0,opacity:0,side:u==="glass"?cn:mi}),F=b.includes(u);F&&(L.onBeforeCompile=X=>{X.uniforms.uTime=B,X.uniforms.uLife=W,X.vertexShader=`uniform float uTime; uniform float uLife;
`+X.vertexShader,X.vertexShader=X.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*2.1 + position.z + uTime*.85)*.022*uLife; transformed.z += cos(position.x*1.6 + uTime*.7)*.018*uLife;`)}),await s(`merge-${u}`);const k=ir(v);v.forEach(X=>X.dispose());const z=new Pt(k,L);z.castShadow=u!=="glass",z.receiveShadow=!0,h.add(z),u!=="glass"&&Oi.push(z),_r.push({material:L,flora:F,glass:u==="glass",key:u})}const _i=new $r({color:7830397,transparent:!0,opacity:.26,depthWrite:!1}),vr=new Xr(ir(R),_i);R.forEach(u=>u.dispose()),h.add(vr);const xr=_i.clone();xr.opacity=.06;const po=new Xr(vr.geometry,xr);po.position.set(.019,.008,-.013),h.add(po);const ps=new he;h.add(ps);const w=new Bm({color:6917045,transparent:!0,opacity:0,dashSize:.16,gapSize:.12,depthWrite:!1});for(let u=-6;u<=6;u++)for(const v of["x","z"]){const L=v==="x"?[new A(-6,.04,u),new A(6,.04,u)]:[new A(u,.04,-5),new A(u,.04,5)],F=new za(new Ee().setFromPoints(L),w);F.computeLineDistances(),ps.add(F)}for(const[u,v]of[[-1.55,-3.35],[1.55,-3.35],[-1.55,-.25],[1.55,-.25]]){const L=new za(new Ee().setFromPoints([new A(u,0,v),new A(u,7.6,v)]),w);L.computeLineDistances(),ps.add(L)}const B={value:0},W={value:0},q=new mn({transparent:!0,depthWrite:!1,uniforms:{uTime:B,uOpacity:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float w=sin(vUv.y*92.-uTime*1.6+sin(vUv.x*24.)*1.4);float line=smoothstep(.9,1.,w);vec3 c=mix(vec3(.29,.56,.58),vec3(.70,.84,.77),vUv.x*.45+line*.4);gl_FragColor=vec4(c,uOpacity*.88);}"});function H(u,v,L,F,k,z=!1){const X=new Pt(new wn(F,k),q);X.position.set(u,v,L),z||(X.rotation.x=-Math.PI/2),h.add(X)}H(.01,.495,1.965,1.25,3.93),H(-1.7075,.495,2.61,2.185,.8),H(.01,3.213,-1.09,.34,1.32);const pt=new Pt(new jr(.17,20),q);pt.rotation.x=-Math.PI/2,pt.position.set(.01,3.34,-1.95),h.add(pt);const At=new Pt(new fe(1.18,.3,.78),new Sn({color:g.light,transparent:!0,opacity:0}));At.position.set(.01,3.06,-.04),h.add(At),H(.01,3.216,-.04,.96,.8);const Nt={value:0},Ft=new mn({transparent:!0,side:cn,depthWrite:!1,uniforms:{uTime:B,uOpacity:Nt},vertexShader:"uniform float uTime;varying vec2 vUv;void main(){vUv=uv;vec3 p=position;p.z+=sin(uv.y*13.+uTime*3.+uv.x*9.)*.014;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float streams=sin(vUv.x*58.+sin(vUv.y*8.+uTime*2.)*.7);float drops=sin(vUv.y*39.+uTime*5.8+sin(vUv.x*16.)*3.);float streak=smoothstep(.20,1.,streams)*.45+smoothstep(.65,1.,drops)*.22;vec3 water=mix(vec3(.27,.59,.63),vec3(.91,.98,.93),streak+pow(1.-vUv.y,7.)*.5);float edge=smoothstep(0.,.08,vUv.x)*smoothstep(0.,.08,1.-vUv.x);gl_FragColor=vec4(water,uOpacity*edge*.92);}"}),Xt=new Pt(new wn(1.03,2.72,12,36),Ft);Xt.position.set(.01,1.855,.37),h.add(Xt);const Kt=new mn({transparent:!0,depthWrite:!1,uniforms:{uTime:B,uOpacity:Nt},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float r=length((vUv-.5)*vec2(1.,1.35));float rings=smoothstep(.77,1.,sin(r*58.-uTime*3.));float fade=(1.-smoothstep(.23,.49,r));gl_FragColor=vec4(.86,.97,.92,(rings*.6+.12)*fade*uOpacity);}"}),kt=new Pt(new wn(1.22,1.1),Kt);kt.rotation.x=-Math.PI/2,kt.position.set(.01,.505,.85),h.add(kt);const oe=new Ee,xe=[];for(let u=0;u<44;u++)xe.push((Zt()-.5)*.95,Zt(),Zt());oe.setAttribute("position",new ae(xe,3));const Le=new mn({transparent:!0,depthWrite:!1,uniforms:{uTime:B,uOpacity:Nt},vertexShader:"uniform float uTime;void main(){float t=fract(position.y+uTime*.5);vec3 p=vec3(.01+position.x*(1.+t*.25),.55+sin(t*3.14159)*.32,.39+position.z*.52+t*.25);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=2.4;}",fragmentShader:"uniform float uOpacity;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(.9,.99,.95,(1.-d*2.)*uOpacity*.8);}"});h.add(new qr(oe,Le)),await s("drones");const Se=[],me=[],Gt=[];function Me(u,v,L,F,k){u.translate(v,L,F),k.push(u.index?u.toNonIndexed():u),u.index&&u.dispose()}Me(new Ke(.21,12,7).scale(1,.42,1.2),0,0,0,Se),Me(new fe(.12,.045,.13),0,.065,.04,me),Me(new Ke(.055,8,6),0,-.02,.22,me);for(const u of[-.31,.31])for(const v of[-.29,.29]){const L=new fe(.4,.025,.035);L.rotateY(-Math.atan2(v,u)),Me(L,u*.5,0,v*.5,me);const F=new ar(.15,.016,5,20);F.rotateX(Math.PI/2),Me(F,u,.016,v,Se),Me(new tn(.028,.028,.065,7),u,.025,v,me),Me(new jr(.125,16).rotateX(-Math.PI/2),u,.051,v,Gt)}const de=ir(Se),fn=ir(me),vi=ir(Gt);[...Se,...me,...Gt].forEach(u=>u.dispose());const je=new Sn({color:15919571,emissive:10466520,emissiveIntensity:0,roughness:.7,transparent:!0,opacity:0}),si=new Sn({color:4811879,emissive:7311272,emissiveIntensity:0,roughness:.55,transparent:!0,opacity:0}),Ce=new Li({color:7833464,side:cn,transparent:!0,opacity:0,depthWrite:!1}),en=new $r({color:5866413,transparent:!0,opacity:0}),vn=new Ra(de,28),Be=new Ee;Be.setAttribute("position",new ae([-.42,.03,.39,.42,.03,.39,-.42,.03,-.39,.42,.03,-.39],3)),Be.setAttribute("aColor",new ae([1,.25,.2,.3,1,.45,1,1,1,1,1,1],3)),Be.setAttribute("aBlink",new ae([0,0,1,1],1));const Qe={value:0},ms=new mn({transparent:!0,depthWrite:!1,blending:js,uniforms:{uTime:B,uOpacity:Qe,uScale:{value:l.getPixelRatio()}},vertexShader:"uniform float uTime;uniform float uScale;attribute vec3 aColor;attribute float aBlink;varying vec3 vColor;varying float vOn;void main(){vColor=aColor;float k=fract(uTime*.8+modelMatrix[3][0]*.31);vOn=aBlink>.5?step(.86,k):.75+.25*sin(uTime*2.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=(aBlink>.5?13.:11.)*uScale;}",fragmentShader:"uniform float uOpacity;varying vec3 vColor;varying float vOn;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,1.6);gl_FragColor=vec4(mix(vColor,vec3(1.),smoothstep(.22,0.,d)*.7),a*vOn*uOpacity);}"}),Bn=[];for(let u=0;u<(o?1:3);u++){const v=new he;v.add(new Pt(de,je),new Pt(fn,si),new Pt(vi,Ce),new Xr(vn,en),new qr(Be,ms)),h.add(v),Bn.push(v)}await s("room-details");const Cd=new ar(1,.045,3,48),mo=[0,1,2].map(()=>new Li({color:16773316,transparent:!0,opacity:0,depthWrite:!1})),Pd=mo.map(u=>{const v=new Pt(Cd,u);return v.rotation.x=Math.PI/2,v.position.set(3.25,1.418,-.02),h.add(v),v}),$a=new ff(16761466,0,2.6,1.6);$a.position.set(3.25,2.1,.1),h.add($a);const xi=new Sn({color:3095352,roughness:.6,transparent:!0,opacity:0}),go=new he;go.position.copy(tt),go.rotation.y=.75,h.add(go);const _o=new he;_o.position.z=.024,_o.add(new Pt(new fe(.014,.15,.008).translate(0,.065,0),xi)),go.add(_o,new Pt(new tn(.022,.022,.02,10).rotateX(Math.PI/2).translate(0,0,.025),xi));let vo=-Math.PI/2;const xo=o?.5:1,Mo=document.createElement("canvas");Mo.width=1024*xo,Mo.height=256*xo;const Ld=Mo.getContext("2d"),gs=new rf(Mo);gs.colorSpace=Tn,gs.anisotropy=4;const Ka=new Sn({map:gs,roughness:.9,transparent:!0,opacity:0}),yo=new he;yo.position.set(j,Lt,rt),h.add(yo),yo.add(new Pt(new tn(zt,zt,Ot,40,1,!0),Ka),new Pt(new fe(.02,Ot,.012).translate(0,0,zt+.004),xi));const _s=new he;_s.position.copy(I),_s.rotation.y=ie-Math.PI/2,_s.add(new Pt(new fe(ge,.014,.014).translate(-ge/2,0,0),xi),new Pt(new fe(.022,.045,.022).translate(-ge+.011,0,0),xi)),h.add(_s);const Mr=[];let vs=0,So=-.2;function Eu(){const u=Ld,v=1024,L=256;u.setTransform(xo,0,0,xo,0,0),u.fillStyle="#f6efdf",u.fillRect(0,0,v,L),u.strokeStyle="rgba(206, 130, 101, 0.35)",u.lineWidth=4,u.beginPath();for(let z=0;z<v;z+=64)u.moveTo(z,0),u.lineTo(z,L);for(let z=32;z<L;z+=32)u.moveTo(0,z),u.lineTo(v,z);u.stroke(),u.strokeStyle="#2f3b38",u.lineWidth=14,u.lineJoin="round",u.beginPath();let F=0,k=0;Mr.forEach((z,X)=>{const ot=(ie-z.angle)/(Math.PI*2),Tt=(ot-Math.floor(ot))*v,yt=L/2-z.level/Ot*L;X===0?u.moveTo(Tt,yt):(Tt<F&&(u.lineTo(Tt+v,yt),u.moveTo(F-v,k)),u.lineTo(Tt,yt)),F=Tt,k=yt}),u.stroke(),gs.needsUpdate=!0}Eu();const Eo=document.createElement("canvas");Eo.width=512,Eo.height=192;const Dd=Eo.getContext("2d"),xs=new rf(Eo);xs.colorSpace=Tn,xs.anisotropy=4;const wo=new Sn({map:xs,roughness:.7,transparent:!0,opacity:0});function wu(u,v,L,F,k,z){const X=new wn(u,v),ot=X.attributes.uv;for(let Tt=0;Tt<ot.count;Tt++)ot.setXY(Tt,be(L,k,ot.getX(Tt)),be(F,z,ot.getY(Tt)));return X}const To=new he;To.position.set(tt.x,nt,tt.z),To.rotation.y=.75,To.add(new Pt(wu(.48,.12,0,1/3,1,1).translate(0,0,.0365),wo),new Pt(wu(.2,.04,0,0,320/512,1/3).translate(0,-.1,.0365),wo)),h.add(To);let Mi=null,xn=null,Ms;const Id=()=>Ms===void 0||xn===null!=(Ms===null)||xn!==null&&Math.abs(xn-Ms)>=5e-4;function Tu(){const u=Dd;u.fillStyle="#e3dccb",u.fillRect(0,0,512,128),u.fillStyle="#f1e9d7",u.fillRect(0,128,320,64),u.textAlign="center",u.textBaseline="middle",u.fillStyle="#2f3b38",u.font='600 40px "Helvetica Neue", Arial, sans-serif',u.fillText("g CO₂e",160,162),u.beginPath(),u.arc(303,108,9,0,Math.PI*2),u.fill(),u.font='bold 96px "Helvetica Neue", Arial, sans-serif';const v=xn===null?null:Math.min(Math.max(xn,0),999.99)*100;let L=0;for(let F=0;F<5;F++){const k=4-F,z=18+k*94+(k>=3?16:0),X=10,ot=84,Tt=108;if(u.save(),u.beginPath(),u.rect(z,X,ot,Tt),u.clip(),u.fillStyle=F<2?"#7e3326":"#2f3b38",u.fillRect(z,X,ot,Tt),u.fillStyle="#fbf6ea",v===null)u.fillText("–",z+ot/2,X+Tt/2+4);else{const Yt=F===0?v%10:Math.floor(v/10**F)%10+L;L=Math.max(0,Yt-9);const Vt=Math.floor(Yt);for(let Te=Vt-1;Te<=Vt+2;Te++)u.fillText(String((Te%10+10)%10),z+ot/2,X+Tt/2+4+(Te-Yt)*Tt*.95)}const yt=u.createLinearGradient(0,X,0,X+Tt);yt.addColorStop(0,"rgba(0, 0, 0, 0.4)"),yt.addColorStop(.2,"rgba(0, 0, 0, 0)"),yt.addColorStop(.8,"rgba(0, 0, 0, 0)"),yt.addColorStop(1,"rgba(0, 0, 0, 0.4)"),u.fillStyle=yt,u.fillRect(z,X,ot,Tt),u.restore()}Ms=xn,xs.needsUpdate=!0}Tu();const yr=new he;yr.visible=!1,h.add(yr);const bo=new $r({color:3894074,transparent:!0,opacity:0,depthTest:!1}),Ao=new Li({color:3894074,transparent:!0,opacity:0,depthWrite:!1,blending:js}),Ro=new he;Ro.add(new Xr(new Ra(new fe(1,1,1)),bo),new Pt(new fe(1,1,1),Ao));const Co=new he;Co.add(new Xr(new Ra(new tn(1,1,1,48),30),bo),new Pt(new tn(1,1,1,48),Ao)),yr.add(Ro,Co),yr.traverse(u=>u.renderOrder=3);const Ud=[[0,1.66,-1.75,2.75,2.4,2.75],[.08,4.05,-1.86,3,1.95,3],[j,1.6,rt,2.9,2,2.9],[.08,5.85,-1.9,2.95,1.5,2.85]];function Nd(u){const[v,L,F,k,z,X]=Ud[u];yr.position.set(v,L,F),Ro.visible=u!==2,Co.visible=u===2,(u===2?Co:Ro).scale.set(u===2?k/2:k,z,u===2?X/2:X)}const bu={light:[8159365,2776218,9072462,3894074],dark:[9349826,9226482,14206630,10934171]};let ys=null,Sr=0;const ja=new Sn({color:14248271,roughness:.6,transparent:!0,opacity:0}),Po=new he;Po.position.set(3.185,.9,3.9),Po.add(new Pt(new fe(.012,.2,.012).translate(0,.1,0),xi),new Pt(new fe(.008,.06,.085).translate(0,.17,.042),ja)),h.add(Po);const Au=new Sn({color:16447212,roughness:.8,transparent:!0,opacity:0}),Er=new Pt(new fe(.11,.075,.006),Au);Er.visible=!1,h.add(Er);let Ss="idle",Es=0,oi=-1,Qa=!1,wr=0,Ru=0,Lo=0;const tl=(u,v,L)=>u<v?Math.min(v,u+L):Math.max(v,u-L);function Fd(){return wr!==(Qa?1:0)||Sr!==(ys===null?0:1)||Es!==(Ss==="idle"?0:1)||oi>=0||Lo>.01&&Mi!==null&&xn!==null&&Math.abs(Mi-xn)>=5e-4}function Od(u,v,L,F){Lo=v;const k=An||Ve;if(wr=tl(wr,Qa?1:0,Ve?1:u/.3),k||(Ru+=u),Pd.forEach((yt,Yt)=>{const Vt=(Ru*.55+Yt/3)%1,Te=.06+Vt*.5;yt.scale.set(Te,Te,1),mo[Yt].opacity=(1-Vt)*wr*v*.9,mo[Yt].visible=mo[Yt].opacity>.01}),$a.intensity=wr*v*2.4,!k){const yt=be(-Math.PI/2,Math.PI/2,Math.min(Is/8,1));vo=be(vo,yt,Math.min(u*3,1))}if(_o.rotation.z=-vo,xi.opacity=v,xi.visible=v>.01,Ka.opacity=v,Ka.visible=v>.01,wo.opacity=v,wo.visible=v>.01,Mi===null||xn===null||k?xn=Mi:(xn=be(xn,Mi,Math.min(u*3,1)),Math.abs(Mi-xn)<2e-4&&(xn=Mi)),v>.01&&Id()&&Tu(),!k){const yt=be(-.2,.2,Math.sqrt(Math.min(Is/8,1)));So=be(So,yt,Math.min(u*3,1)),vs-=u*.22*v}yo.rotation.y=vs,_s.rotation.z=-Math.asin((So+Lt-I.y)/ge);const z=Mr[Mr.length-1];if(!z||z.angle-vs>=.066){for(Mr.push({angle:vs,level:So});Mr[0].angle-vs>Math.PI*1.7;)Mr.shift();Eu()}const X=Ne>=.6?2:Ne>=.28?1:0;Sr=tl(Sr,ys===null?0:1,Ve?1:u/.25);const ot=Math.max(v,F)*L;yr.visible=Sr*ot>.01;const Tt=(Yo?bu.dark:bu.light)[Ne>=.96?3:Ne>=.6?2:X];if(bo.color.setHex(Tt),Ao.color.setHex(Tt),bo.opacity=Sr*ot*.95,Ao.opacity=Sr*ot*.22,Es=tl(Es,Ss==="idle"?0:1,Ve?1:u/.35),Po.rotation.x=be(-Math.PI/2,0,1-(1-Es)**2),ja.opacity=v,ja.visible=v>.01,oi>=0){oi=Math.min(1,oi+u/.8);const yt=oi,Yt=Math.min(yt/.7,1),Vt=Math.max(0,(yt-.7)/.3);Er.position.set(3.05,be(1.45,.93,Yt*Yt),be(4.08,3.98,Vt)),Er.rotation.set(0,0,(1-Yt)*.5),Au.opacity=v,Er.visible=!0,oi>=1&&(oi=-1,Er.visible=!1,Ss="idle")}}const Cu=[],Pu=new Li({color:13607508,side:cn,transparent:!0,opacity:0});for(let u=0;u<(o?0:5);u++){const v=new he;for(const L of[-1,1]){const F=new Pt(new jr(.09,4),Pu);F.position.x=L*.065,F.rotation.y=L*.3,v.add(F)}h.add(v),Cu.push(v)}await s("lighting");const Lu=[[4.36,2.21,.75],[3.3,1.7,-1.2],[-3.55,1.25,.2],[.05,1.6,-1.8],[2.02,1.3,3.11]],Bd=(o?[]:Lu).map(([u,v,L])=>{const F=new ff(16758117,0,3.4,1.6);return F.position.set(u,v,L),h.add(F),F}),Do=new Li({color:16765578,transparent:!0,opacity:0,depthWrite:!1}),zd=new Ke(.075,10,8);Lu.forEach(([u,v,L])=>{const F=new Pt(zd,Do);F.position.set(u,v+(u===4.36?0:.35),L),h.add(F)});const Du=new Ee,Iu=[];for(let u=0;u<(o?25:70);u++)Iu.push((Zt()-.5)*10,.7+Zt()*2.6,(Zt()-.5)*8);Du.setAttribute("position",new ae(Iu,3));const Uu={value:0},Hd=new mn({transparent:!0,depthWrite:!1,blending:js,uniforms:{uTime:B,uOpacity:Uu},vertexShader:"uniform float uTime;varying float vBlink;void main(){vec3 p=position;float s=position.x*1.7+position.z*2.3;p.x+=sin(uTime*.45+s)*.35;p.y+=sin(uTime*.7+s*1.3)*.22;p.z+=cos(uTime*.38+s)*.35;vBlink=smoothstep(.15,1.,sin(uTime*1.6+s*4.)*.5+.5);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=7.;}",fragmentShader:"uniform float uOpacity;varying float vBlink;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,2.);gl_FragColor=vec4(1.,.86,.48,a*vBlink*uOpacity);}"});h.add(new qr(Du,Hd));const Bi=[],Nu=new Sn({color:9216864,roughness:1}),ws=[9216864,7312469,10926448,5141841].map(u=>new Sn({color:u,roughness:1})),kd=new tn(.025,.035,.45,6),Gd=new ln(.19,1),Ts=new $r({transparent:!0,depthWrite:!1}),Vd=new Ee().setFromPoints([[0,0,0],[0,.62,0],[0,.3,0],[-.14,.5,.03],[0,.36,0],[.15,.56,-.04],[0,.44,0],[.04,.6,.13],[0,.48,0],[-.05,.62,-.12]].map(([u,v,L])=>new A(u,v,L)));function Fu(u){const v=new he;v.add(new Xr(Vd,Ts));const L=new Pt(kd,Nu);L.position.y=.23,L.castShadow=!0,v.add(L);const F=Math.floor(Zt()*ws.length),k=2+Math.floor(Zt()*3);for(let z=0;z<k;z++){const X=ws[(F+z)%ws.length],ot=new Pt(Gd,X);ot.position.set((Zt()-.5)*.28,.42+Zt()*.18,(Zt()-.5)*.22),ot.scale.setScalar(.75+Zt()*.5),ot.castShadow=!0,v.add(ot)}return v.position.copy(u),v.rotation.y=Zt()*Math.PI*2,v.userData.size=1.15+Zt()*.6,v.scale.setScalar(Ve||An?v.userData.size:.001),h.add(v),Bi.push({group:v,age:Ve||An?1:0}),Ie=!0,Bi.length}const Tr=new Vm,Ou=new ft,Io=24;await s("seasons");const Bu={spring:{leaf:9417562,leafLight:15913950,leafDark:5933653,grass:11126918,flower:15908818,coral:16313585,plants:[10272866,15777744,12572542,5933653]},summer:{leaf:7312456,leafLight:9941854,leafDark:4156230,grass:9678190,flower:15776074,coral:14248271,plants:[7312456,9941854,5141841,4156230]},autumn:{leaf:13203247,leafLight:14722624,leafDark:6123071,grass:11904106,flower:14191162,coral:12076335,plants:[13795631,15052101,11027755,6123071]},winter:{leaf:14410721,leafLight:15922676,leafDark:5204572,grass:13818321,flower:15199467,coral:15199467,plants:[14936808,5204572,15922676,6125415]}},zu={spring:1,summer:1,autumn:.45,winter:0},Wd={spring:[16173787,16510707,15906250],summer:[],autumn:[13795631,15052101,11027755,12738346],winter:[16251386,15660021]};let ke="summer",zi=null;const el=new Sn({roughness:1,transparent:!0,opacity:0,side:cn});async function Xd(){const u={s:h.scale.clone(),r:h.rotation.y};h.scale.set(1,1,1),h.rotation.y=0,h.updateMatrixWorld(!0);const v=new A(0,-1,0),L=[];for(let z=0;z<(o?120:260)&&L.length<(o?80:170);z++){z&&z%8===0&&await Zr(),Tr.set(new A((Zt()-.5)*10.4,12,(Zt()-.5)*8.4),v);const X=Tr.intersectObjects(Oi,!1)[0];X?.face&&X.face.normal.y>.7&&L.push(X.point.clone())}h.scale.copy(u.s),h.rotation.y=u.r,h.updateMatrixWorld(!0);const F=new Xs(new jr(.05,7).rotateX(-Math.PI/2),el,L.length),k=new we;L.forEach((z,X)=>{M.position.set(z.x,z.y+.012,z.z),M.rotation.set(0,Zt()*Math.PI,0);const ot=.7+Zt()*.8;M.scale.set(ot*1.6,1,ot),M.updateMatrix(),k.copy(M.matrix),F.setMatrixAt(X,k),F.setColorAt(X,new Jt(16777215))}),F.receiveShadow=!0,F.userData.total=L.length,h.add(F),zi=F}let Uo=!1;function Hu(){if(!zi)return;const u=Wd[Uo?"winter":ke],v=new Jt;for(let L=0;L<zi.userData.total;L++)v.setHex(u.length?u[L%u.length]:16777215),zi.setColorAt(L,v);zi.instanceColor.needsUpdate=!0,zi.count=Math.round(zi.userData.total*(Uo||ke==="winter"||ke==="autumn"?1:ke==="spring"?.45:0))}const ku=new Ee,Gu=[];for(let u=0;u<(o?30:70);u++)Gu.push((Zt()-.5)*11,Zt(),(Zt()-.5)*9);ku.setAttribute("position",new ae(Gu,3));const Vu={value:0},Wu={value:12},Xu={value:new Jt(13795631)},qd=new mn({transparent:!0,depthWrite:!1,uniforms:{uTime:B,uOpacity:Vu,uColor:Xu,uSize:Wu},vertexShader:"uniform float uTime;uniform float uSize;varying float vSpin;void main(){vec3 p=position;float t=fract(p.y+uTime*.045);p.y=6.8-t*6.6;p.x+=sin(uTime*.6+position.z*2.)*.45+t*1.2;p.z+=cos(uTime*.5+position.x)*.3;vSpin=uTime*2.+position.x*3.;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=uSize;}",fragmentShader:"uniform float uOpacity;uniform vec3 uColor;varying float vSpin;void main(){vec2 q=gl_PointCoord-.5;float c=cos(vSpin),s=sin(vSpin);q=mat2(c,-s,s,c)*q;q.x*=1.9*(.55+.45*abs(sin(vSpin*.7)));if(length(q)>.5)discard;gl_FragColor=vec4(uColor*(.85+.3*q.y),uOpacity);}"});h.add(new qr(ku,qd)),await s("animals");async function qu(u,v){const L={s:h.scale.clone(),r:h.rotation.y};h.scale.set(1,1,1),h.rotation.y=0,h.updateMatrixWorld(!0);const F=new A(0,-1,0),k=[];for(let z=0;z<u*8&&k.length<u;z++){z&&z%8===0&&await Zr(),Tr.set(new A((Zt()-.5)*10.4,12,(Zt()-.5)*8.4),F);const X=Tr.intersectObjects(Oi,!1)[0];X?.face&&X.face.normal.y>.7&&v(X.point)&&k.push(h.worldToLocal(X.point.clone()))}return h.scale.copy(L.s),h.rotation.y=L.r,h.updateMatrixWorld(!0),k}const Yd=u=>u.x>-.8&&u.x<.85&&u.z>-2.25&&u.z<4.35||u.x>-3.35&&u.x<.25&&u.z>2&&u.z<3.2,Zd=u=>u.x>-2.4&&u.x<-1.4&&u.z>-.75&&u.z<.15,Yu=u=>u.y<.75&&!Yd(u)&&!Zd(u);function Zu(u){return u.onBeforeCompile=v=>{v.uniforms.uTime=B,v.uniforms.uLife=W,v.vertexShader=`uniform float uTime; uniform float uLife;
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*9. + uTime*1.1)*.012*uLife; transformed.z += cos(position.x*7. + uTime*.9)*.01*uLife;`)},u}const nl=[],No=u=>(u.transparent=!0,u.opacity=0,nl.push(u),u),nn=(u,v=.9)=>No(new Sn({color:u,roughness:v}));function bs(u,v,L,F,k=1,z=1,X=1){return u.scale(k,z,X).translate(v,L,F),u.index?u.toNonIndexed():u}const il=[7312456,4156230].map(u=>Zu(nn(u,.95))),rl=Zu(nn(14248271,.6)),Jd=ir([bs(new ln(.17,0),0,.13,0),bs(new ln(.13,0),.14,.09,.05),bs(new ln(.12,0),-.13,.08,-.04),bs(new ln(.11,0),.03,.22,.08)]),$d=ir([[.08,.24,.12],[-.1,.17,.08],[.17,.15,.1],[0,.27,-.07],[-.16,.1,.06],[.12,.07,-.12]].map(([u,v,L])=>bs(new ln(.03,0),u,v,L))),sl=await qu(o?24:48,Yu),Ju=il.map(u=>new Xs(Jd,u,sl.length)),$u=new Xs($d,rl,sl.length),Ku=[0,0];sl.forEach((u,v)=>{M.position.copy(u),M.rotation.set(0,Zt()*Math.PI*2,0),M.scale.setScalar(.65+Zt()*.6),M.updateMatrix();const L=v%2;Ju[L].setMatrixAt(Ku[L]++,M.matrix),$u.setMatrixAt(v,M.matrix)}),Ju.forEach((u,v)=>{u.count=Ku[v],u.castShadow=!0,u.receiveShadow=!0,h.add(u)}),h.add($u);const As=No(new Li({color:3817808,side:cn})),ol=new Ee().setFromPoints([new A(0,0,.05),new A(0,0,-.05),new A(.26,.02,-.03)]);ol.computeVertexNormals();const Kd=Array.from({length:o?0:7},(u,v)=>{const L=new he,F=new Pt(new Pn(.035,.18,5).rotateX(Math.PI/2),As),k=new Pt(ol,As),z=new Pt(ol,As);return z.scale.x=-1,L.add(F,k,z),L.userData={phase:v*.45+Zt()*.3,radius:5.2+Zt()*1.4,height:7+Zt()*1.2,flap:8+Zt()*3},h.add(L),L}),ju=nn(15986402,.8),jd=nn(3103301,.5),Qd=nn(14916155,.6),tp=Array.from({length:o?0:3},(u,v)=>{const L=new he,F=v===2?1:1.6,k=new Pt(new Ke(.1,10,7).scale(.85,.6,1.35),ju),z=new Pt(new Ke(.055,9,7),jd);z.position.set(0,.1,.11);const X=new Pt(new fe(.035,.02,.05),Qd);X.position.set(0,.095,.17);const ot=new Pt(new Pn(.035,.08,4),ju);return ot.position.set(0,.05,-.14),ot.rotation.x=-1.1,L.add(k,z,X,ot),[k,z].forEach(Tt=>Tt.castShadow=!0),L.children.forEach(Tt=>Tt.renderOrder=2),L.scale.setScalar(F),L.userData={phase:v*1.7,speed:.11+v*.015},h.add(L),L}),Hi=nn(14268810),al=nn(15984335),ll=nn(4863014),cl=o?[]:await qu(70,Yu),ep=Array.from({length:o?0:3},()=>{const u=new he,v=new Pt(new Ke(.09,10,8).scale(.7,.7,1.3),Hi);v.position.y=.12;const L=new Pt(new Ke(.05,9,7),Hi);L.position.set(0,.175,.12);const F=new Pt(new Pn(.024,.07,6),al);F.position.set(0,.165,.175),F.rotation.x=Math.PI/2;const k=new Pt(new Ke(.009,6,4),ll);k.position.set(0,.165,.21);const z=[-1,1].map(Vt=>{const Te=new Pt(new Pn(.04,.13,8),Hi),yn=new Pt(new Pn(.028,.095,8).scale(1,1,.4),al);return yn.position.set(0,-.01,.022),Te.add(yn),Te.position.set(Vt*.055,.265,.105),Te.rotation.set(-.15,0,-Vt*.4),Te}),X=new he,ot=new Pt(new Kr(.032,.1,3,7),Hi);ot.position.y=.08;const Tt=new Pt(new Ke(.033,7,5),ll);Tt.position.y=.155,X.add(ot,Tt),X.position.set(0,.12,-.12),X.rotation.x=-2.1;const yt=[[-1,1],[1,1],[-1,-1],[1,-1]].map(([Vt,Te])=>{const yn=new Pt(new tn(.011,.009,.085,5).translate(0,-.0425,0),Hi);return yn.position.set(Vt*.035,.085,Te*.07),yn});u.add(v,L,F,k,...z,X,...yt),u.scale.setScalar(1.35),v.castShadow=!0;const Yt=cl[Math.floor(Zt()*cl.length)];return u.position.copy(Yt),u.userData={from:Yt.clone(),to:Yt.clone(),t:1,rest:Zt()*3,ear:z[0],tail:X,legs:yt},h.add(u),u});function np(u){const v=u.userData.to,L=cl.filter(F=>Math.abs(F.y-v.y)<.03&&F.distanceTo(v)>.4&&F.distanceTo(v)<1.8);L.length&&(u.userData.from=v.clone(),u.userData.to=L[Math.floor(Zt()*L.length)].clone(),u.userData.t=0)}const Fo=nn(13863756,.85),Oo=new he,ul=new Pt(new Ke(.1,12,8).scale(1.35,.7,1),Fo),Qu=new Pt(new Ke(.06,10,8),Fo);Qu.position.set(.13,.02,.03);const ip=[-1,1].map(u=>{const v=new Pt(new Pn(.022,.05,4),Fo);return v.position.set(.14,.075,.03+u*.03),v}),Bo=new Pt(new Kr(.018,.16,2,6).rotateZ(Math.PI/2),Fo);Bo.position.set(-.12,-.03,.08),Bo.rotation.y=.6,Oo.add(ul,Qu,...ip,Bo),ul.castShadow=!0,Oo.position.set(-.98,1.02,3.48),Oo.rotation.y=-Math.PI/2+.3,o||h.add(Oo);const hl=nn(14264703,.8),th=nn(12873807,.85),eh=nn(4150624,.9),nh=nn(3877409,.9),rp=nn(5007457,.8),sp=nn(15327176,.95),fl=nn(8231567,.5),zo=(u,v,L)=>{const F=new Pt(new Kr(u,v,2,7).translate(0,-v/2-u*.4,0),L);return F.castShadow=!0,F},De=new he,Rs=new he;Rs.position.y=.3;const Cs=new he,ih=new Pt(new Kr(.07,.12,2,8).scale(1.15,1,.8).translate(0,.13,0),th);ih.castShadow=!0;const Ho=new he;Ho.position.y=.27;const rh=new Pt(new Ke(.06,10,8).translate(0,.06,0),hl),op=new Pt(new Ke(.064,10,6,0,Math.PI*2,0,Math.PI*.55).rotateX(-.35).translate(0,.07,-.006),nh);rh.castShadow=!0,Ho.add(rh,op);const yi=[-1,1].map(u=>{const v=new he;v.position.set(u*.09,.22,0);const L=new he;L.position.y=-.12;const F=new he;F.position.y=-.11;const k=new Pt(new Ke(.024,7,5),hl);return F.add(k),L.add(zo(.022,.08,hl),F),v.add(zo(.026,.08,th),L),Cs.add(v),{shoulder:v,elbow:L,hand:F}}),ko=[-1,1].map(u=>{const v=new he;v.position.x=u*.043;const L=new he;L.position.y=-.15;const F=new Pt(new fe(.05,.035,.09).translate(0,-.14,.02),nh);return L.add(zo(.028,.1,eh),F),v.add(zo(.033,.1,eh),L),Rs.add(v),{hip:v,knee:L}});Cs.add(ih,Ho),Rs.add(Cs),De.add(Rs),De.scale.setScalar(1.2);const ki=new he,sh=[-1,1].map(u=>{const v=new he;return v.add(new Pt(new fe(.075,.006,.1).translate(u*.0375,0,0),rp),new Pt(new fe(.068,.012,.09).translate(u*.036,.009,0),sp)),ki.add(v),v}),Zn=new he,dl=new Fe;dl.position.set(0,.11,.17),Zn.add(new Pt(new tn(.05,.055,.1,10).translate(0,.05,0),fl),new Pt(new tn(.008,.013,.15,6).rotateX(1).translate(0,.08,.1),fl),new Pt(new ar(.04,.007,4,10,Math.PI).translate(0,.1,0).rotateY(Math.PI/2),fl),dl),Zn.traverse(u=>u.castShadow=!0);const Go=new qr(new Ee().setAttribute("position",new ae(new Array(24).fill(0),3)),No(new hd({color:12182252,size:3,sizeAttenuation:!1})));Go.frustumCulled=!1;const Gi=new Xs(new wn(.16,.2,1,2).translate(0,-.1,0).rotateY(Math.PI/2),No(new Sn({roughness:.95,side:cn})),4);[15854039,8364992,15185763,13533797].forEach((u,v)=>Gi.setColorAt(v,new Jt(u))),Gi.castShadow=!0;const pl=5.16,oh=new Pt(new Ke(.05,8,6),Do);oh.position.set(bt.x,5.72,-1.62),o||h.add(De,ki,Zn,Go,Gi,oh);const ml=Math.PI-.5,gl=ce.map(([u,v])=>[u-Math.sin(ml)*.27,v-Math.cos(ml)*.27,ml]),Vo={read:[qt.x-Math.sin(qt.yaw)*.03,qt.z-Math.cos(qt.yaw)*.03,qt.yaw],shelter:[bt.x+.2,bt.z-.02,0],sleep:[bt.x+.38,bt.z+.02,Math.PI/2],water:gl[0],hang:[1.06,-1.1,Math.PI/2]},br={stand:[0,0,.05,.05,-.1,-.1,0,0,0,0,.3,0,0],sit:[-.18,.32,-.75,-.75,-1.25,-1.25,-1.57,-1.57,1.35,1.35,.225,0,0],lie:[0,.1,-.45,-.55,-1.5,-1.4,.03,-.05,.08,.15,.3,-Math.PI/2,.29],water:[.22,.3,-.95,.1,-.25,-.15,0,0,0,0,.29,0,0],hang:[-.05,-.35,-2.7,-2.5,-.35,-.5,0,0,0,0,.3,0,0]};De.rotation.order="YXZ";const rn=br.stand.slice(),Mn=br.stand.slice();let Ge="read",Wo=0,Jn=0;const ap=()=>Ze>.5?"sleep":Fs>.15?"shelter":$n<9.5||$n>=17&&$n<19?"water":$n<11.5&&Ns<.45?"hang":"read",lp=()=>Ns<.45&&Fs<.05&&$n>=9.5&&$n<18.5,Ps=new A,bn=new A,Vi=new A,cp=[-1.44,-1.21,-.98,-.75];De.position.set(Vo.read[0],pl,Vo.read[1]);function up(u,v){const L=ap();L!==Ge&&(Ge=L,Wo=0),Wo+=u;const F=zn;Ge==="water"&&(Vo.water=gl[v?0:Math.floor(Wo/6)%gl.length]);const[k,z,X]=Vo[Ge];Ps.set(k,De.position.y,z);const ot=De.position.distanceTo(Ps);if(v||ot<.02)De.position.copy(Ps),Jn=0;else{const ne=Math.min(ot,u*.38),Gn=Math.atan2(Ps.x-De.position.x,Ps.z-De.position.z);De.position.x+=Math.sin(Gn)*ne,De.position.z+=Math.cos(Gn)*ne,De.rotation.y=ah(De.rotation.y,Gn,u*6),Jn=1}Jn||(De.rotation.y=v?X:ah(De.rotation.y,X,u*4));const Tt=!Jn&&(Ge==="read"||Ge==="shelter"||Ge==="sleep"),yt=Tt&&Ge!=="sleep",Yt=Jn?br.stand:Ge==="sleep"?br.lie:yt?br.sit:br[Ge];for(let ne=0;ne<Yt.length;ne++)Mn[ne]=Yt[ne];if(Jn){const ne=Math.sin(F*9)*.55;Mn[6]=ne,Mn[7]=-ne,Mn[8]=Math.max(0,-ne)*.8,Mn[9]=Math.max(0,ne)*.8,Mn[2]=-ne*.6,Mn[3]=ne*.6,Mn[10]=.3+Math.abs(Math.cos(F*9))*.012}else if(yt)Mn[1]+=Math.sin(F*.6)*.05,Mn[4]-=Math.max(0,Math.sin(F*.45)-.92)*6;else if(Ge==="water")Mn[2]+=Math.sin(F*1.4)*.12;else if(Ge==="hang"){const ne=Math.sin(F*2.2);Mn[2]+=ne*.2,Mn[3]-=ne*.2}const Vt=v?1:Math.min(1,u*5);for(let ne=0;ne<rn.length;ne++)rn[ne]=be(rn[ne],Mn[ne],Vt);const Te=Ge==="sleep"&&!Jn?Math.sin(F*1.3)*.03:Math.sin(F*2)*.01;Cs.rotation.x=rn[0],Cs.scale.set(1,1+Te,1+Te),Ho.rotation.set(rn[1],0,Ge==="sleep"&&!Jn?.3:0),yi[0].shoulder.rotation.set(rn[2],0,-.08),yi[1].shoulder.rotation.set(rn[3],0,.08),yi[0].elbow.rotation.x=rn[4],yi[1].elbow.rotation.x=rn[5],ko[0].hip.rotation.set(rn[6],0,.04),ko[1].hip.rotation.set(rn[7],0,-.04),ko[0].knee.rotation.x=rn[8],ko[1].knee.rotation.x=rn[9],Rs.position.y=rn[10],De.rotation.x=rn[11],De.position.y=pl+rn[12],De.updateMatrixWorld(!0),Tt?(yi[0].hand.getWorldPosition(bn),yi[1].hand.getWorldPosition(Vi),h.worldToLocal(bn.add(Vi).multiplyScalar(.5)),ki.position.copy(bn),ki.position.y+=Ge==="sleep"?.01:.03,ki.rotation.set(Ge==="sleep"?0:-.95,De.rotation.y,0,"YXZ")):(ki.position.set(ee.x-.08,5.34,ee.z),ki.rotation.set(0,.4,0)),sh[0].rotation.z=yt?-.3:0,sh[1].rotation.z=yt?.3:Math.PI-.06;const yn=Ge==="water"&&!Jn;yn?(yi[0].hand.getWorldPosition(bn),h.worldToLocal(bn),Zn.position.set(bn.x,bn.y-.13,bn.z),Zn.rotation.set(.55+Math.sin(F*1.4)*.12,De.rotation.y,0,"YXZ")):Ge==="water"?(yi[0].hand.getWorldPosition(bn),h.worldToLocal(bn),Zn.position.set(bn.x,bn.y-.13,bn.z),Zn.rotation.set(0,De.rotation.y,0,"YXZ")):(Zn.position.set(-.72,pl,-1.5),Zn.rotation.set(0,-.6,0)),Zn.updateMatrixWorld(!0);const kn=Go.geometry.attributes.position;dl.getWorldPosition(Vi),h.worldToLocal(Vi);const Pr=De.rotation.y;for(let ne=0;ne<8;ne++){const Gn=(F*1.6+ne/8)%1;kn.setXYZ(ne,Vi.x+Math.sin(Pr)*Gn*.06,Vi.y-Gn*Gn*.32,Vi.z+Math.cos(Pr)*Gn*.06)}kn.needsUpdate=!0,Go.visible=yn&&!v;const sn=lp()?Ge==="hang"?v?4:Jn?0:Math.min(4,Math.floor(Wo/2.5)+1):4:0;Gi.count=sn;for(let ne=0;ne<sn;ne++)M.position.set(1.32,5.785,cp[ne]),M.rotation.set(0,0,Math.sin(F*1.3+ne)*.12*(1-Ns)),M.scale.setScalar(1),M.updateMatrix(),Gi.setMatrixAt(ne,M.matrix);Gi.instanceMatrix.needsUpdate=!0,Gi.visible=sn>0}function ah(u,v,L){let F=(v-u+Math.PI)%(Math.PI*2)-Math.PI;return F<-Math.PI&&(F+=Math.PI*2),Math.abs(F)<=L?v:u+Math.sign(F)*L}const hp={spring:14268810,summer:14466182,autumn:13609592,winter:14994854};function fp(u,v){const L=1-Ze,F=1-Math.min(Fs*1.4,1);nl.forEach(z=>z.opacity=v),rl.opacity=v*zu[ke]*(ke==="autumn"?2:1),As.opacity=v*L*F*(ke==="winter"?.6:1)*(1-Si*.7),Hi.opacity=al.opacity=ll.opacity=v*L*F,nl.forEach(z=>z.visible=z.opacity>.01);const k=zn;Kd.forEach((z,X)=>{const ot=z.userData;ke==="winter"&&X>3?z.visible=!1:z.visible=As.visible;const Tt=k*.16+ot.phase;z.position.set(Math.cos(Tt)*ot.radius,ot.height+Math.sin(k*.7+X)*.25,Math.sin(Tt)*ot.radius*.8),z.rotation.set(0,-Tt,Math.sin(Tt)*.15);const yt=Math.sin(k*ot.flap+X)*.55;z.children[1].rotation.z=yt,z.children[2].rotation.z=-yt}),tp.forEach((z,X)=>{const ot=z.userData,Tt=k*ot.speed*(.25+.75*L),yt=2.3+Math.sin(Tt+ot.phase)*1.4,Yt=Math.cos(Tt+ot.phase),Vt=.01+Math.sin(Tt*2.3+X)*.28+(X-1)*.12;z.position.set(Vt,.505+Math.sin(k*2.2+X)*.008,yt),z.rotation.y=Yt>=0?0:Math.PI,z.rotation.z=Math.sin(k*1.7+X)*.05}),ep.forEach(z=>{const X=z.userData,ot=X.legs,Tt=X.tail;if(X.t>=1){X.rest-=u,X.rest<=0&&(np(z),X.rest=1.5+Zt()*3.5),X.ear.rotation.x=-.15+Math.max(0,Math.sin(k*3+X.rest))*.25,ot.forEach(sn=>sn.rotation.x=0),Tt.rotation.set(-2.1,Math.sin(k*.8+X.rest)*.25,0);return}const yt=X.from,Yt=X.to,Vt=yt.distanceTo(Yt),Te=Math.max(1,Math.round(Vt/.2));X.t=Math.min(1,X.t+u/(Te*.26));const yn=X.t*Te,kn=yn-Math.floor(yn);z.position.lerpVectors(yt,Yt,X.t),z.position.y=yt.y+Math.abs(Math.sin(Math.PI*2*kn))*.02,z.rotation.y=Math.atan2(Yt.x-yt.x,Yt.z-yt.z);const Pr=Math.sin(Math.PI*2*kn)*.6;ot.forEach((sn,ne)=>sn.rotation.x=ne===0||ne===3?Pr:-Pr),Tt.rotation.set(-1.75,0,0)}),ul.scale.y=1+Math.sin(k*1.6)*.04,Bo.rotation.y=.6+Math.sin(k*.7)*.35}const dp=new Jt(15660018),_l={leaf:.78,leafLight:.92,leafDark:.5,grass:.9,flower:.8,coral:.8},pp=[.82,.55,.92,.55];function lh(){const u=Bu[ke],v=(F,k,z)=>F.color.setHex(k).lerp(dp,z*ai);_r.forEach(({material:F,key:k})=>{const z=u[k];z!==void 0&&v(F,z,_l[k]??0)}),ws.forEach((F,k)=>v(F,u.plants[k],pp[k])),v(il[0],u.leaf,_l.leaf),v(il[1],u.leafDark,_l.leafDark);const L=ai>.35;L!==Uo&&(Uo=L,Hu())}function mp(){const u=Bu[ke];lh(),rl.color.setHex(ke==="autumn"?12070954:u.flower),Hi.color.setHex(hp[ke]),Hu(),Xu.value.setHex(ke==="spring"?16040917:13795631),Ie=!0}await s("renderer-state");let vl=0,Ne=0,An=!1,Ve=!1,ch=!0,Ar=0,Xo=0,xl=0,qo=0,zn=0,Wi=!1,Ie=!0,Yo=!1,Rr=0,$n=13,Ze=0;const uh=new A(0,2.4,0),hh=new A(0,2.4,0);let Ls=0,Zo=0,Jo=.4,Ml=.4,Xi=new ft,$o=new ft;const qi=new ft(0,1),Cr=new ft(0,1);let Ko=1,Yi=1;const Ds=new ft,Kn=new ft;function fh(){const u=.15+.5*(Yi-1);Kn.clampScalar(-u,u)}let Is=0,dh=0,yl=0,ph=0,jo=0,Sl=0;const Hn=l.getContext(),Zi=Hn.getExtension("EXT_disjoint_timer_query_webgl2"),Ji=[];function gp(){if(!Zi)return;const u=Hn.getParameter(Zi.GPU_DISJOINT_EXT);for(;Ji.length;){const v=Ji[0];if(!u&&!Hn.getQueryParameter(v,Hn.QUERY_RESULT_AVAILABLE))break;if(Ji.shift(),!u){const L=Hn.getQueryParameter(v,Hn.QUERY_RESULT)/1e6;ph+=L,jo++,Sl=be(Sl||L,L,.1)}Hn.deleteQuery(v)}}let mh=1,Si=0,El=0;const Us=new mu(15856366,30,60);let Ns=0,Fs=0,ai=0,Os=0;const gh=new IntersectionObserver(u=>{ch=u[0].isIntersecting,Ie=!0},{rootMargin:"80px"});gh.observe(i);let $i=1,Ei=1;const _h=()=>{$i=i.clientWidth,Ei=i.clientHeight,l.setSize($i,Ei),Ie=!0},vh=new ResizeObserver(_h);vh.observe(i),_h();const xh=new Jt(8751499),Mh=new Jt(4488378),_p=new Jt(8094327),wl=new A,Tl={wattch:new A(-3.65,2.65,.2),whisperbook:new A(3.35,3.55,-.65),about:new A(wt,It+St,Qt),contact:new A(2.02,2.5,3.11)},vp={whisperbook:{at:new A(3.4,1.7,-.55),zoom:1.6},wattch:{at:new A(-3.4,1.45,.45),zoom:1.8}},xp=new A(.55,2.4,-.55),Bs=new Jt;function bl(){const u=Pi.clamp(($n-6)/14,0,1),v=Math.sin(u*Math.PI);Ze=En(19.2,21.5,$n)+(1-En(5,6.6,$n)),Ze=Pi.clamp(Ze,0,1),d.position.set(be(-9,9,u),8+v*8,be(9,6,v));const L=Ns*.6+Fs*.25;mh=(.35+.65*v)*(1-Ze*.7)*(1-L*.9),Bs.setHex(16751964).lerp(new Jt(16773076),En(0,.55,v)),Bs.lerp(new Jt(10466536),Ze),d.color.copy(Bs),d.intensity=(.9+2.4*v)*(1-Ze*.82)*(1-L*.7),Bs.lerp(new Jt(14673388),L*.6),d.color.copy(Bs),f.intensity=(1.4+1.1*v)*(1-Ze*.55),f.color.setHex(16251903).lerp(new Jt(7177405),Ze),f.groundColor.setHex(8622195).lerp(new Jt(2831696),Ze),m.intensity=.7*(1-Ze*.6),Ie=!0}bl();const yh=u=>{u.preventDefault(),Ji.length=0,i.dispatchEvent(new Event("garden-context-lost")),t.forEach(v=>{v.style.visibility="hidden",v.tabIndex=-1})},Sh=()=>{i.dispatchEvent(new Event("garden-context-restored")),t.forEach(u=>u.style.visibility="")};l.domElement.addEventListener("webglcontextlost",yh),l.domElement.addEventListener("webglcontextrestored",Sh);let Al=!0;function Eh(u){if(Wi)return;if(xl=requestAnimationFrame(Eh),!ch||document.hidden){qo=u;return}if(o&&u-qo<1e3/30-4)return;const v=Math.min((u-qo)/1e3,.05);qo=u,Rr<1&&(Rr=Ve||An?1:Math.min(1,Rr+v/3.2),Ie=!0);const L=Bi.some(Pe=>Pe.age<1),F=Math.abs(vl-Ne)>1e-4||Math.abs(Xo-Ar)>1e-4||Math.abs(Zo-Ls)>5e-4||Math.abs(Ml-Jo)>5e-4||Math.abs(El-Si)>.002||Xi.distanceTo($o)>5e-4||qi.distanceTo(Cr)>5e-4||Math.abs(Yi-Ko)>5e-4||Ds.distanceTo(Kn)>5e-4||Math.abs(Os-ai)>.001||Fd()||L;if((An||Ne<.5)&&!F&&!Ie)return;o&&(F||Ie)&&(l.shadowMap.needsUpdate=!0),Ie=!1;const k=performance.now();Ne=be(Ne,vl,Ve?1:Math.min(v*7,1)),Ar=be(Ar,Xo,Ve?1:Math.min(v*4,1)),An||(zn+=v);const z=Ve?1:Math.min(v*3.2,1);Al&&(Xi.copy($o),qi.copy(Cr)),Ls=be(Ls,Zo,z),Jo=be(Jo,Ml,z),Xi.lerp($o,z),qi.lerp(Cr,z);const X=Ve?1:Math.min(v*14,1);Ko=be(Ko,Yi,X),Ds.lerp(Kn,X),uh.lerp(hh,z);const ot=Rr*Rr*(3-2*Rr),Tt=vr.geometry.attributes.position.count;vr.geometry.setDrawRange(0,Math.floor(Tt*ot/2)*2),B.value=zn;const yt=En(.69,.96,Ne);W.value=An?0:yt;const Yt=En(.07,.3,Ne),Vt=En(.35,.6,Ne);if(h.scale.setScalar(be(.77,1,En(0,.62,Ne))),h.scale.y*=be(.72,1,En(.1,.55,Ne)),h.rotation.y=Ar,ai!==Os){const Pe=Os-ai;ai=Ve||An?Os:ai+Pi.clamp(Pe,-v*.12,v*.3),lh()}_r.forEach(({material:Pe,flora:Je,glass:Dn,key:ea})=>{const Ep=ea==="flower"||ea==="coral"?zu[ke]:1;uc(Pe,Je?yt*Ep:Vt*(Dn?.38:1))}),uc(Nu,Vt),ws.forEach(Pe=>uc(Pe,yt)),_i.color.copy(xh).lerp(Mh,Yt).lerp(_p,Vt),_i.opacity=be(Yo?.38:.21,Yo?.85:.6,Yt)*(1-Vt*.92),Ts.color.copy(_i.color),Ts.opacity=_i.opacity*(1-Vt),Ts.visible=Ts.opacity>.003,xr.opacity=.055*(1-Yt),w.opacity=En(.06,.3,Ne)*(1-En(.45,.62,Ne))*.38,_.opacity=Vt*.15*mh,At.material.opacity=Vt,q.uniforms.uOpacity.value=En(.46,.63,Ne);const Te=Ze*Vt;Bd.forEach(Pe=>Pe.intensity=Te*2.6),Do.opacity=Te*.95,Do.visible=Te>.01,Uu.value=Ze*yt,Pu.opacity=yt*(ke==="summer"||ke==="spring"?1-ai:0),el.opacity=yt,el.visible=yt>.01,Vu.value=yt*(ke==="autumn"?.95:ke==="spring"?.85:0)*(1-Si*.65)*(1-ai),Si=be(Si,El,Ve?1:Math.min(v*1.5,1)),Si>.002?(a.fog=Us,Us.near=be(30,9.5,Si),Us.far=be(60,27,Si)):a.fog=null,Nt.value=En(.52,.64,Ne),je.opacity=yt,si.opacity=yt,Ce.opacity=yt*.21,je.emissiveIntensity=Ze*.5,si.emissiveIntensity=Ze*.35,Qe.value=yt*(.3+.7*Ze),en.opacity=En(.15,.3,Ne)*(1-yt)*.46+yt*Ze*.55,Bn.forEach((Pe,Je)=>{const Dn=zn*.105*yt+Je*2.08;Pe.position.set(Math.cos(Dn)*(3.6+Je*.22),3.35+Je*.62+Math.sin(Dn*2+Je)*.22,Math.sin(Dn)*(2.95+Je*.2)),Pe.rotation.set(Math.sin(Dn*2)*.055*yt,-Dn+.5,Math.cos(Dn)*.075*yt)}),Od(v,Vt,ot,Yt),fp(An||Ve?0:v,yt),o||up(An||Ve?0:v,An||Ve),Cu.forEach((Pe,Je)=>{Pe.position.set(Math.cos(zn*.2+Je*1.9)*(2+Je*.25),1.5+Math.sin(zn*.4+Je)*.35+Je*.4,Math.sin(zn*.2+Je*1.9)*2),Pe.rotation.y=zn*.2+Je,Pe.children.forEach((Dn,ea)=>Dn.rotation.y=Math.sin(zn*8+Je)*.7*(ea===0?1:-1))}),Bi.forEach(Pe=>{Pe.age=Ve?1:Math.min(1,Pe.age+v*1.6);const Je=Pe.age,Dn=1+2.2*Math.pow(Je-1,3)+1.2*Math.pow(Je-1,2);Pe.group.scale.setScalar(Math.max(.001,Dn*Pe.group.userData.size))});const yn=Math.max(.05,qi.y-qi.x),kn=$i/(Ei*yn),sn=wp(kn)/2/(1+Ls*Jo)/Ko,ne=sn/yn;c.left=-sn*kn-(Xi.x*sn+Ds.x*sn)*kn*2,c.right=sn*kn-(Xi.x*sn+Ds.x*sn)*kn*2,c.top=(qi.x+qi.y)*ne-Xi.y*sn*2+Ds.y*ne*2,c.bottom=c.top-2*ne,Wu.value=Ei/(2*ne)*.2*l.getPixelRatio();const Gn=be(.69,.78,En(.3,1,Ne))-(1-ot)*.45,Qo=xp.clone().lerp(uh,Ls);c.position.set(Qo.x+Math.sin(Gn)*15,Qo.y-2.4+be(14,12,Vt),Qo.z+Math.cos(Gn)*15),c.lookAt(Qo),c.updateProjectionMatrix(),c.updateMatrixWorld(),h.updateMatrixWorld();for(const Pe of t)wl.copy(Tl[Pe.dataset.spot]).applyMatrix4(h.matrixWorld).project(c),Pe.style.left=`${(wl.x*.5+.5)*$i}px`,Pe.style.top=`${(-wl.y*.5+.5)*Ei}px`;gp();const ta=Zi&&Ji.length<4?Hn.createQuery():null;ta&&Hn.beginQuery(Zi.TIME_ELAPSED_EXT,ta);const Sp=performance.now();l.render(a,c),ta&&(Hn.endQuery(Zi.TIME_ELAPSED_EXT),Ji.push(ta)),Al&&(Al=!1,performance.mark("notebook:first-render"),performance.measure("notebook:scene-to-first-render","notebook:scene-construction:start","notebook:first-render")),Is=be(Is||1,performance.now()-Sp,.1),i.dataset.progress=Ne.toFixed(3),i.dataset.drawCalls=String(l.info.render.calls),i.dataset.triangles=String(l.info.render.triangles),i.dataset.waterfall=Nt.value.toFixed(2),i.dataset.drones=String(Bn.length),i.dataset.animationTime=zn.toFixed(3),i.dataset.rotation=Ar.toFixed(3),i.dataset.shift=Xi.x.toFixed(3),i.dataset.meter=((vo+Math.PI/2)/Math.PI).toFixed(3),i.dataset.narrating=wr.toFixed(2),i.dataset.path=ys===null?"none":String(ys),i.dataset.postbox=Ss,i.dataset.flag=Es.toFixed(2),dh+=performance.now()-k,yl++}await s("ground-litter"),await Xd(),r(),n(),xl=requestAnimationFrame(Eh);async function Mp(){if(Wi)return;const u=Zs("shader-warmup"),v=[l.compileAsync(a,c)];if(await Zr(),Wi)return;const L=_r.map(({material:Vt})=>Vt).filter(Vt=>Vt.transparent&&!Vt.side);if(L.forEach(Vt=>Vt.transparent=!1),v.push(l.compileAsync(a,c)),L.forEach(Vt=>{Vt.transparent=!0,Vt.needsUpdate=!0}),await Zr(),Wi)return;const F=a.fog;if(a.fog=Us,v.push(l.compileAsync(a,c)),a.fog=F,await Zr(),Wi)return;const k=new Sd({depthPacking:td,side:gn}),z=new fe,X=new he;X.add(new Pt(z,k),new Xs(z,k,1));const ot=new Ni(1,1),Tt=a.fog;a.fog=null,l.setRenderTarget(ot),v.push(l.compileAsync(X,c,a)),l.setRenderTarget(null),a.fog=Tt,await Promise.all(v),u(),ot.dispose(),z.dispose();const yt=[...l.info.programs??[]],Yt=()=>{const Vt=yt.pop();if(Wi)return;if(!Vt){performance.mark("notebook:shader-first-use-complete");return}const Te=Zs("shader-first-use");Vt.getUniforms(),Te(),yp(Yt,{timeout:1e3})};Yt()}const yp=window.requestIdleCallback??(u=>setTimeout(u,200));return requestAnimationFrame(()=>Mp().catch(u=>console.warn("Garden shader warm-up failed.",u))),{setNarrating(u){Qa=u,Ie=!0},highlightPath(u){u!==null&&Nd(u),ys=u,Ie=!0},setPostbox(u){u==="sent"&&(An||Ve||Lo<.5?u="idle":oi=0),!(u==="idle"&&oi>=0)&&(Ss=u,Ie=!0)},setProgress(u,v=!1){vl=u,Ve=v,Ie=!0,v&&(Ne=u)},setTheme(u){Yo=u,xh.setHex(u?9419994:8751499),Mh.setHex(u?12643071:4488378),w.color.setHex(u?7451620:6917045),xr.color.setHex(u?9750761:7830397),en.color.setHex(u?12643071:5866413),l.toneMappingExposure=u?.95:1.2,Ie=!0},setMotion(u){An=u,Ie=!0},rotate(){Xo+=Math.PI/6},rotateBy(u){Xo+=u,Ie=!0},plantAt(u,v){if(Bi.length>=Io)return Io;Ou.set(u/$i*2-1,-(v/Ei)*2+1),Tr.setFromCamera(Ou,c);const L=Tr.intersectObjects(Oi,!1)[0];return!L?.face||L.face.normal.y<.7?-1:Fu(h.worldToLocal(L.point.clone()))},setSeason(u){ke=u,mp()},setFog(u,v){El=u,Us.color.setHex(v),Ie=!0},setTally(u){Mi=u;const v=Ms??null;Lo>.01&&(u===null!=(v===null)||u!==null&&Math.abs(u-v)>=5e-4)&&(Ie=!0)},setWeather(u,v,L=!1){Ns=u,Fs=v,Os=L?Math.min(1,.55+v*.5):0,bl()},setHour(u){$n=u,bl()},frame(u,v){Cr.set(u,v),Ie=!0},zoomBy(u,v,L){const F=Pi.clamp(Yi*u,1,4),k=F/Yi;if(v!==void 0&&L!==void 0){const z=v/$i-.5,X=L/Ei-(Cr.x+Cr.y)/2;Kn.set(z-(z-Kn.x)*k,X-(X-Kn.y)*k)}else Kn.multiplyScalar(k);Yi=F,fh(),Ie=!0},panBy(u,v){Kn.x+=u/$i,Kn.y+=v/Ei,fh(),Ie=!0},resetView(){Yi=1,Kn.set(0,0),Ie=!0},focus(u,v=0,L=0){if(u&&Tl[u]){const F=vp[u];hh.copy(F?.at??Tl[u]).multiply(h.scale).applyAxisAngle(new A(0,1,0),Ar),Zo=1,Ml=F?.zoom??.4}else Zo=0;$o.set(v,L),Ie=!0},stats(){return{triangles:l.info.render.triangles,calls:l.info.render.calls,ms:Is,gpuFrameMs:Zi&&jo?Sl:null,cpuMs:dh,gpuMs:Zi?jo?ph/jo*yl:0:null,frames:yl}},plant(){if(Bi.length>=Io)return Io;const u=Bi.length%12;return Fu(new A(-4.3+u*.78+(Zt()-.5)*.2,.36,3.95))},dispose(){Wi=!0,cancelAnimationFrame(xl),Ji.forEach(L=>Hn.deleteQuery(L)),gh.disconnect(),vh.disconnect(),l.domElement.removeEventListener("webglcontextlost",yh),l.domElement.removeEventListener("webglcontextrestored",Sh);const u=new Set,v=new Set;a.traverse(L=>{(L instanceof Pt||L instanceof za||L instanceof qr)&&(u.add(L.geometry),(Array.isArray(L.material)?L.material:[L.material]).forEach(F=>v.add(F)))}),u.forEach(L=>L.dispose()),v.forEach(L=>L.dispose()),gs.dispose(),xs.dispose(),l.dispose(),l.domElement.remove()}}}export{RM as createGarden};
