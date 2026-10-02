const gn="srgb",Er="srgb-linear",bo="linear",Ae="srgb";const lc="300 es";class Ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const Sr=Math.PI/180,cs=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function nl(i,t){return(i%t+t)%t}function Oh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Bh(i,t,e){return i!==t?(e-i)/(t-i):0}function os(i,t,e){return(1-e)*i+e*t}function zh(i,t,e,n){return os(i,t,1-Math.exp(-e*n))}function Gh(i,t=1){return t-Math.abs(nl(i,t*2)-t)}function Hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wh(i,t){return i+Math.random()*(t-i)}function Xh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(cc=i);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yh(i){return i*Sr}function Zh(i){return i*cs}function Jh(i){return(i&i-1)===0&&i!==0}function $h(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jh(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),p=o((t-n)/2),m=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*u,c*h,c*p,a*l);break;case"YZY":i.set(c*p,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*p,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mr={DEG2RAD:Sr,RAD2DEG:cs,generateUUID:Li,clamp:ce,euclideanModulo:nl,mapLinear:Oh,inverseLerp:Bh,lerp:os,damp:zh,pingpong:Gh,smoothstep:Hh,smootherstep:kh,randInt:Vh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:Yh,radToDeg:Zh,isPowerOfTwo:Jh,ceilPowerOfTwo:$h,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:jh,normalize:on,denormalize:pr};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class br{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],_=s[o+2],M=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=M;return}if(h!==M||c!==p||l!==m||u!==_){let g=1-a;const d=c*p+l*m+u*_+h*M,b=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const P=Math.sqrt(T),A=Math.atan2(P,d*b);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}const v=a*b;if(c=c*g+p*v,l=l*g+m*v,u=u*g+_*v,h=h*g+M*v,g===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],p=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+u*h+c*m-l*p,t[e+1]=c*_+u*p+l*h-a*m,t[e+2]=l*_+u*m+a*p-c*h,t[e+3]=u*_-a*h-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),p=c(n/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*u*h+l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h-p*m*_;break;case"YXZ":this._x=p*u*h+l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h+p*m*_;break;case"ZXY":this._x=p*u*h-l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h-p*m*_;break;case"ZYX":this._x=p*u*h-l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h+p*m*_;break;case"YZX":this._x=p*u*h+l*m*_,this._y=l*m*h+p*u*_,this._z=l*u*_-p*m*h,this._w=l*u*h-p*m*_;break;case"XZY":this._x=p*u*h-l*m*_,this._y=l*m*h-p*u*_,this._z=l*u*_+p*m*h,this._w=l*u*h+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new C,uc=new br;class re{constructor(t,e,n,r,s,o,a,c,l){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],m=n[5],_=n[8],M=r[0],g=r[3],d=r[6],b=r[1],T=r[4],v=r[7],P=r[2],A=r[5],I=r[8];return s[0]=o*M+a*b+c*P,s[3]=o*g+a*T+c*A,s[6]=o*d+a*v+c*I,s[1]=l*M+u*b+h*P,s[4]=l*g+u*T+h*A,s[7]=l*d+u*v+h*I,s[2]=p*M+m*b+_*P,s[5]=p*g+m*T+_*A,s[8]=p*d+m*v+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,p=a*c-u*s,m=l*s-o*c,_=e*h+n*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=h*M,t[1]=(r*l-u*n)*M,t[2]=(a*n-r*o)*M,t[3]=p*M,t[4]=(u*e-r*c)*M,t[5]=(r*s-a*e)*M,t[6]=m*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new re;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qh(){const i=Ro("canvas");return i.style.display="block",i}const hc={};function us(i){i in hc||(hc[i]=!0,console.warn(i))}function tf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const fc=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){const i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ae&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:t,whitePoint:n,transfer:bo,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const xe=ef();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class nf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ki===void 0&&(Ki=Ro("canvas")),Ki.width=t.width,Ki.height=t.height;const r=Ki.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rf=0;class il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ma(r[o].image)):s.push(ma(r[o]))}else s=ma(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;const ga=new C;class rn extends Ar{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=1001,r=1001,s=1006,o=1008,a=1023,c=1009,l=rn.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Li(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=300;rn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,r=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],p=c[1],m=c[5],_=c[9],M=c[2],g=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+M)<.1&&Math.abs(_+g)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,v=(m+1)/2,P=(d+1)/2,A=(u+p)/4,I=(h+M)/4,F=(_+g)/4;return T>v&&T>P?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=A/n,s=I/n):v>P?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=F/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=I/s,r=F/s),this.set(n,r,s,e),this}let b=Math.sqrt((g-_)*(g-_)+(h-M)*(h-M)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(h-M)/b,this.z=(p-u)/b,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends Ar{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new rn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new il(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yu extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),qs.subVectors(this.max,Zr),ji.subVectors(t.a,Zr),Qi.subVectors(t.b,Zr),tr.subVectors(t.c,Zr),ei.subVectors(Qi,ji),ni.subVectors(tr,Qi),Mi.subVectors(ji,tr);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!_a(e,ji,Qi,tr,qs)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,ji,Qi,tr,qs))?!1:(Ys.crossVectors(ei,ni),e=[Ys.x,Ys.y,Ys.z],_a(e,ji,Qi,tr,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new C,new C,new C,new C,new C,new C,new C,new C],In=new C,Xs=new Ii,ji=new C,Qi=new C,tr=new C,ei=new C,ni=new C,Mi=new C,Zr=new C,qs=new C,Ys=new C,Si=new C;function _a(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Si.fromArray(i,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const lf=new Ii,Jr=new C,va=new C;class Ui{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const e=Jr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Jr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(va)),this.expandByPoint(Jr.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new C,xa=new C,Zs=new C,ii=new C,Ma=new C,Js=new C,Sa=new C;class Lo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){xa.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(xa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=ii.dot(this.direction),c=-ii.dot(Zs),l=ii.lengthSq(),u=Math.abs(1-o*o);let h,p,m,_;if(u>0)if(h=o*c-a,p=o*a-c,_=s*u,h>=0)if(p>=-_)if(p<=_){const M=1/u;h*=M,p*=M,m=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xa).addScaledVector(Zs,p),m}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-p.z)*h,c=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,c=(t.min.z-p.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,r,s){Ma.subVectors(e,t),Js.subVectors(n,t),Sa.crossVectors(Ma,Js);let o=this.direction.dot(Sa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors(ii,Js));if(c<0)return null;const l=a*this.direction.dot(Ma.cross(ii));if(l<0||c+l>o)return null;const u=-a*ii.dot(Sa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,n,r,s,o,a,c,l,u,h,p,m,_,M,g){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,p,m,_,M,g)}set(t,e,n,r,s,o,a,c,l,u,h,p,m,_,M,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=_,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/er.setFromMatrixColumn(t,0).length(),s=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=o*u,m=o*h,_=a*u,M=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+_*l,e[5]=p-M*l,e[9]=-a*c,e[2]=M-p*l,e[6]=_+m*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,m=c*h,_=l*u,M=l*h;e[0]=p+M*a,e[4]=_*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-_,e[6]=M+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,m=c*h,_=l*u,M=l*h;e[0]=p-M*a,e[4]=-o*h,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*u,e[9]=M-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,m=o*h,_=a*u,M=a*h;e[0]=c*u,e[4]=_*l-m,e[8]=p*l+M,e[1]=c*h,e[5]=M*l+p,e[9]=m*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,m=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=M-p*h,e[8]=_*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+_,e[10]=p-M*h}else if(t.order==="XZY"){const p=o*c,m=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=p*h+M,e[5]=o*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=a*u,e[10]=M*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,uf)}lookAt(t,e,n){const r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ri.crossVectors(n,xn),ri.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ri.crossVectors(n,xn)),ri.normalize(),$s.crossVectors(xn,ri),r[0]=ri.x,r[4]=$s.x,r[8]=xn.x,r[1]=ri.y,r[5]=$s.y,r[9]=xn.y,r[2]=ri.z,r[6]=$s.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],m=n[13],_=n[2],M=n[6],g=n[10],d=n[14],b=n[3],T=n[7],v=n[11],P=n[15],A=r[0],I=r[4],F=r[8],E=r[12],S=r[1],U=r[5],H=r[9],X=r[13],K=r[2],j=r[6],q=r[10],ht=r[14],$=r[3],St=r[7],Mt=r[11],Rt=r[15];return s[0]=o*A+a*S+c*K+l*$,s[4]=o*I+a*U+c*j+l*St,s[8]=o*F+a*H+c*q+l*Mt,s[12]=o*E+a*X+c*ht+l*Rt,s[1]=u*A+h*S+p*K+m*$,s[5]=u*I+h*U+p*j+m*St,s[9]=u*F+h*H+p*q+m*Mt,s[13]=u*E+h*X+p*ht+m*Rt,s[2]=_*A+M*S+g*K+d*$,s[6]=_*I+M*U+g*j+d*St,s[10]=_*F+M*H+g*q+d*Mt,s[14]=_*E+M*X+g*ht+d*Rt,s[3]=b*A+T*S+v*K+P*$,s[7]=b*I+T*U+v*j+P*St,s[11]=b*F+T*H+v*q+P*Mt,s[15]=b*E+T*X+v*ht+P*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],p=t[10],m=t[14],_=t[3],M=t[7],g=t[11],d=t[15];return _*(+s*c*h-r*l*h-s*a*p+n*l*p+r*a*m-n*c*m)+M*(+e*c*m-e*l*p+s*o*p-r*o*m+r*l*u-s*c*u)+g*(+e*l*h-e*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+d*(-r*a*u-e*c*h+e*a*p+r*o*h-n*o*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],p=t[10],m=t[11],_=t[12],M=t[13],g=t[14],d=t[15],b=h*g*l-M*p*l+M*c*m-a*g*m-h*c*d+a*p*d,T=_*p*l-u*g*l-_*c*m+o*g*m+u*c*d-o*p*d,v=u*M*l-_*h*l+_*a*m-o*M*m-u*a*d+o*h*d,P=_*h*c-u*M*c-_*a*p+o*M*p+u*a*g-o*h*g,A=e*b+n*T+r*v+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/A;return t[0]=b*I,t[1]=(M*p*s-h*g*s-M*r*m+n*g*m+h*r*d-n*p*d)*I,t[2]=(a*g*s-M*c*s+M*r*l-n*g*l-a*r*d+n*c*d)*I,t[3]=(h*c*s-a*p*s-h*r*l+n*p*l+a*r*m-n*c*m)*I,t[4]=T*I,t[5]=(u*g*s-_*p*s+_*r*m-e*g*m-u*r*d+e*p*d)*I,t[6]=(_*c*s-o*g*s-_*r*l+e*g*l+o*r*d-e*c*d)*I,t[7]=(o*p*s-u*c*s+u*r*l-e*p*l-o*r*m+e*c*m)*I,t[8]=v*I,t[9]=(_*h*s-u*M*s-_*n*m+e*M*m+u*n*d-e*h*d)*I,t[10]=(o*M*s-_*a*s+_*n*l-e*M*l-o*n*d+e*a*d)*I,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*m-e*a*m)*I,t[12]=P*I,t[13]=(u*M*r-_*h*r+_*n*p-e*M*p-u*n*g+e*h*g)*I,t[14]=(_*a*r-o*M*r-_*n*c+e*M*c+o*n*g-e*a*g)*I,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*p+e*a*p)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,p=s*l,m=s*u,_=s*h,M=o*u,g=o*h,d=a*h,b=c*l,T=c*u,v=c*h,P=n.x,A=n.y,I=n.z;return r[0]=(1-(M+d))*P,r[1]=(m+v)*P,r[2]=(_-T)*P,r[3]=0,r[4]=(m-v)*A,r[5]=(1-(p+d))*A,r[6]=(g+b)*A,r[7]=0,r[8]=(_+T)*I,r[9]=(g-b)*I,r[10]=(1-(p+M))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const o=er.set(r[4],r[5],r[6]).length(),a=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Un.copy(this);const l=1/s,u=1/o,h=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,e.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=2e3,c=!1){const l=this.elements,u=2*s/(e-t),h=2*s/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let _,M;if(c)_=s/(o-s),M=o*s/(o-s);else if(a===2e3)_=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===2001)_=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=2e3,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-r),p=-(e+t)/(e-t),m=-(n+r)/(n-r);let _,M;if(c)_=1/(o-s),M=o/(o-s);else if(a===2e3)_=-2/(o-s),M=-(o+s)/(o-s);else if(a===2001)_=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const er=new C,Un=new Se,cf=new C(0,0,0),uf=new C(1,1,1),ri=new C,$s=new C,xn=new C,pc=new Se,mc=new br;class Vn{constructor(t=0,e=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const gc=new C,nr=new br,Zn=new Se,Ks=new C,$r=new C,ff=new C,df=new br,_c=new C(1,0,0),vc=new C(0,1,0),xc=new C(0,0,1),Mc={type:"added"},pf={type:"removed"},ir={type:"childadded",child:null},ya={type:"childremoved",child:null};class Oe extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new C,e=new Vn,n=new br,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new re}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(xc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($r,Ks,this.up):Zn.lookAt(Ks,$r,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(Zn),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),p=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Oe.DEFAULT_UP=new C(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new C,Jn=new C,Ea=new C,$n=new C,rr=new C,sr=new C,Sc=new C,Ta=new C,wa=new C,Aa=new C,ba=new be,Ra=new be,Ca=new be;class Rn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fn.subVectors(t,e),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Fn.subVectors(r,e),Jn.subVectors(n,e),Ea.subVectors(t,e);const o=Fn.dot(Fn),a=Fn.dot(Jn),c=Fn.dot(Ea),l=Jn.dot(Jn),u=Jn.dot(Ea),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(l*c-a*u)*p,_=(o*u-a*c)*p;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return ba.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),ba.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ba,s.x),o.addScaledVector(Ra,s.y),o.addScaledVector(Ca,s.z),o}static isFrontFacing(t,e,n,r){return Fn.subVectors(n,e),Jn.subVectors(t,e),Fn.cross(Jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Fn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;rr.subVectors(r,n),sr.subVectors(s,n),Ta.subVectors(t,n);const c=rr.dot(Ta),l=sr.dot(Ta);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,r);const u=rr.dot(wa),h=sr.dot(wa);if(u>=0&&h<=u)return e.copy(r);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(rr,o);Aa.subVectors(t,s);const m=rr.dot(Aa),_=sr.dot(Aa);if(_>=0&&m<=_)return e.copy(s);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(sr,a);const g=u*_-m*h;if(g<=0&&h-u>=0&&m-_>=0)return Sc.subVectors(s,r),a=(h-u)/(h-u+(m-_)),e.copy(r).addScaledVector(Sc,a);const d=1/(g+M+p);return o=M*d,a=p*d,e.copy(n).addScaledVector(rr,o).addScaledVector(sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},js={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=xe.workingColorSpace){if(t=nl(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Pa(o,s,t+1/3),this.g=Pa(o,s,t),this.b=Pa(o,s,t-1/3)}return xe.colorSpaceToWorking(this,r),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return xe.workingToColorSpace(nn.copy(this),t),Math.round(ce(nn.r*255,0,255))*65536+Math.round(ce(nn.g*255,0,255))*256+Math.round(ce(nn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(nn.copy(this),e);const n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=gn){xe.workingToColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,r=nn.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(js);const n=os(si.h,js.h,e),r=os(si.s,js.s,e),s=os(si.l,js.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new jt;jt.NAMES=Eu;let mf=0;class ci extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ai extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new C,Qs=new xt;let gf=0;class Cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Tu extends Cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends Cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _f=0;const An=new Se,Da=new Oe,or=new C,Mn=new Ii,Kr=new Ii,Ye=new C;class Me extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?wu:Tu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Mn.min,Kr.min),Mn.expandByPoint(Ye),Ye.addVectors(Mn.max,Kr.max),Mn.expandByPoint(Ye)):(Mn.expandByPoint(Kr.min),Mn.expandByPoint(Kr.max))}Mn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ye.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(t,l),Ye.add(or)),r=Math.max(r,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new C,c[F]=new C;const l=new C,u=new C,h=new C,p=new xt,m=new xt,_=new xt,M=new C,g=new C;function d(F,E,S){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),p.fromBufferAttribute(s,F),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),u.sub(l),h.sub(l),m.sub(p),_.sub(p);const U=1/(m.x*_.y-_.x*m.y);isFinite(U)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(U),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(U),a[F].add(M),a[E].add(M),a[S].add(M),c[F].add(g),c[E].add(g),c[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,E=b.length;F<E;++F){const S=b[F],U=S.start,H=S.count;for(let X=U,K=U+H;X<K;X+=3)d(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const T=new C,v=new C,P=new C,A=new C;function I(F){P.fromBufferAttribute(r,F),A.copy(P);const E=a[F];T.copy(E),T.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(A,E);const U=v.dot(c[F])<0?-1:1;o.setXYZW(F,T.x,T.y,T.z,U)}for(let F=0,E=b.length;F<E;++F){const S=b[F],U=S.start,H=S.count;for(let X=U,K=U+H;X<K;X+=3)I(t.getX(X+0)),I(t.getX(X+1)),I(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),M=t.getX(p+1),g=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,p=new l.constructor(c.length*u);let m=0,_=0;for(let M=0,g=c.length;M<g;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*u;for(let d=0;d<u;d++)p[_++]=l[m++]}return new Cn(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const p=l[u],m=t(p,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new Se,yi=new Lo,to=new Ui,Ec=new C,eo=new C,no=new C,io=new C,La=new C,ro=new C,Tc=new C,so=new C;class bt extends Oe{constructor(t=new Me,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ro.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(La.fromBufferAttribute(h,t),o?ro.addScaledVector(La,u):ro.addScaledVector(La.sub(e),u))}e.add(ro)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),yi.copy(t.ray).recast(t.near),!(to.containsPoint(yi.origin)===!1&&(yi.intersectSphere(to,Ec)===null||yi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(yc.copy(s).invert(),yi.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=p.length;_<M;_++){const g=p[_],d=o[g.materialIndex],b=Math.max(g.start,m.start),T=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let v=b,P=T;v<P;v+=3){const A=a.getX(v),I=a.getX(v+1),F=a.getX(v+2);r=oo(this,d,t,n,l,u,h,A,I,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=_,d=M;g<d;g+=3){const b=a.getX(g),T=a.getX(g+1),v=a.getX(g+2);r=oo(this,o,t,n,l,u,h,b,T,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=p.length;_<M;_++){const g=p[_],d=o[g.materialIndex],b=Math.max(g.start,m.start),T=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let v=b,P=T;v<P;v+=3){const A=v,I=v+1,F=v+2;r=oo(this,d,t,n,l,u,h,A,I,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let g=_,d=M;g<d;g+=3){const b=g,T=g+1,v=g+2;r=oo(this,o,t,n,l,u,h,b,T,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function vf(i,t,e,n,r,s,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===0,a),c===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(so);return l<e.near||l>e.far?null:{distance:l,point:so.clone(),object:i}}function oo(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,eo),i.getVertexPosition(c,no),i.getVertexPosition(l,io);const u=vf(i,t,e,n,eo,no,io,Tc);if(u){const h=new C;Rn.getBarycoord(Tc,eo,no,io,h),r&&(u.uv=Rn.getInterpolatedAttribute(r,a,c,l,h,new xt)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,a,c,l,h,new xt)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new C,materialIndex:0};Rn.getNormal(eo,no,io,p.normal),u.face=p,u.barycoord=h}return u}class pe extends Me{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let p=0,m=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function _(M,g,d,b,T,v,P,A,I,F,E){const S=v/I,U=P/F,H=v/2,X=P/2,K=A/2,j=I+1,q=F+1;let ht=0,$=0;const St=new C;for(let Mt=0;Mt<q;Mt++){const Rt=Mt*U-X;for(let qt=0;qt<j;qt++){const ae=qt*S-H;St[M]=ae*b,St[g]=Rt*T,St[d]=K,l.push(St.x,St.y,St.z),St[M]=0,St[g]=0,St[d]=A>0?1:-1,u.push(St.x,St.y,St.z),h.push(qt/I),h.push(1-Mt/F),ht+=1}}for(let Mt=0;Mt<F;Mt++)for(let Rt=0;Rt<I;Rt++){const qt=p+Rt+j*Mt,ae=p+Rt+j*(Mt+1),_e=p+(Rt+1)+j*(Mt+1),Jt=p+(Rt+1)+j*Mt;c.push(qt,ae,Jt),c.push(ae,_e,Jt),$+=6}a.addGroup(m,$,E),m+=$,p+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=Tr(i[e]);for(const r in n)t[r]=n[r]}return t}function xf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Mf={clone:Tr,merge:an};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new C,wc=new xt,Ac=new xt;class bn extends bu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,wc,Ac),e.subVectors(Ac,wc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ar=-90,lr=1;class Ef extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ar,lr,t,e);r.layers=this.layers,this.add(r);const s=new bn(ar,lr,t,e);s.layers=this.layers,this.add(s);const o=new bn(ar,lr,t,e);o.layers=this.layers,this.add(o);const a=new bn(ar,lr,t,e);a.layers=this.layers,this.add(a);const c=new bn(ar,lr,t,e);c.layers=this.layers,this.add(c);const l=new bn(ar,lr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ru extends rn{constructor(t=[],e=301,n,r,s,o,a,c,l,u){super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tf extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ru(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pe(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const o=new bt(r,s),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Ef(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class fe extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wf={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),d=this._getHandJoint(l,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&p>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class sl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Af extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bf extends rn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=1003,u=1003,h,p){super(null,o,a,c,l,u,r,s,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bc extends Cn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cr=new Se,Rc=new Se,ao=[],Cc=new Ii,Rf=new Se,jr=new bt,Qr=new Ui;class ts extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Rf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Cc.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Cc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Qr.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),t.ray.intersectsSphere(Qr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cr),Rc.multiplyMatrices(n,cr),jr.matrixWorld=Rc,jr.raycast(t,ao);for(let o=0,a=ao.length;o<a;o++){const c=ao[o];c.instanceId=s,c.object=this,e.push(c)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new bf(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ua=new C,Cf=new C,Pf=new re;class bi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ua.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ua),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pf.getNormalMatrix(t),r=this.coplanarPoint(Ua).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ui,Df=new xt(.5,.5),lo=new C;class ol{constructor(t=new bi,e=new bi,n=new bi,r=new bi,s=new bi,o=new bi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],p=s[6],m=s[7],_=s[8],M=s[9],g=s[10],d=s[11],b=s[12],T=s[13],v=s[14],P=s[15];if(r[0].setComponents(l-o,m-u,d-_,P-b).normalize(),r[1].setComponents(l+o,m+u,d+_,P+b).normalize(),r[2].setComponents(l+a,m+h,d+M,P+T).normalize(),r[3].setComponents(l-a,m-h,d-M,P-T).normalize(),n)r[4].setComponents(c,p,g,v).normalize(),r[5].setComponents(l-c,m-p,d-g,P-v).normalize();else if(r[4].setComponents(l-c,m-p,d-g,P-v).normalize(),e===2e3)r[5].setComponents(l+c,m+p,d+g,P+v).normalize();else if(e===2001)r[5].setComponents(c,p,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=Df.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(lo.x=r.normal.x>0?t.max.x:t.min.x,lo.y=r.normal.y>0?t.max.y:t.min.y,lo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gr extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Co=new C,Po=new C,Pc=new Se,es=new Lo,co=new Ui,Fa=new C,Dc=new C;class To extends Oe{constructor(t=new Me,e=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Co.fromBufferAttribute(e,r-1),Po.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Co.distanceTo(Po);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),co.radius+=s,t.ray.intersectsSphere(co)===!1)return;Pc.copy(r).invert(),es.copy(t.ray).applyMatrix4(Pc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=m,g=_-1;M<g;M+=l){const d=u.getX(M),b=u.getX(M+1),T=uo(this,t,es,c,d,b,M);T&&e.push(T)}if(this.isLineLoop){const M=u.getX(_-1),g=u.getX(m),d=uo(this,t,es,c,M,g,_-1);d&&e.push(d)}}else{const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let M=m,g=_-1;M<g;M+=l){const d=uo(this,t,es,c,M,M+1,M);d&&e.push(d)}if(this.isLineLoop){const M=uo(this,t,es,c,_-1,m,_-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uo(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Co.fromBufferAttribute(a,r),Po.fromBufferAttribute(a,s),e.distanceSqToSegment(Co,Po,Fa,Dc)>n)return;Fa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Fa);if(!(l<t.near||l>t.far))return{distance:l,point:Dc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Lc=new C,Ic=new C;class ur extends To{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Lc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Lc.distanceTo(Ic);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cu extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uc=new Se,Ja=new Lo,ho=new Ui,fo=new C;class hr extends Oe{constructor(t=new Me,e=new Cu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ho.radius+=s,t.ray.intersectsSphere(ho)===!1)return;Uc.copy(r).invert(),Ja.copy(t.ray).applyMatrix4(Uc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=p,M=m;_<M;_++){const g=l.getX(_);fo.fromBufferAttribute(h,g),Fc(fo,g,c,r,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,M=m;_<M;_++)fo.fromBufferAttribute(h,_),Fc(fo,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(i,t,e,n,r,s,o){const a=Ja.distanceSqToPoint(i);if(a<e){const c=new C;Ja.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Nc extends rn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pu extends rn{constructor(t,e,n=1014,r,s,o,a=1003,c=1003,l,u=1026,h=1){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Du extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _r extends Me{constructor(t=1,e=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:r,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=e/2,h=Math.PI/2*t,p=e,m=2*h+p,_=n*2+s,M=r+1,g=new C,d=new C;for(let b=0;b<=_;b++){let T=0,v=0,P=0,A=0;if(b<=n){const E=b/n,S=E*Math.PI/2;v=-u-t*Math.cos(S),P=t*Math.sin(S),A=-t*Math.cos(S),T=E*h}else if(b<=n+s){const E=(b-n)/s;v=-u+E*e,P=t,A=0,T=h+E*p}else{const E=(b-n-s)/n,S=E*Math.PI/2;v=u+t*Math.sin(S),P=t*Math.cos(S),A=t*Math.sin(S),T=h+p+E*h}const I=Math.max(0,Math.min(1,T/m));let F=0;b===0?F=.5/r:b===_&&(F=-.5/r);for(let E=0;E<=r;E++){const S=E/r,U=S*Math.PI*2,H=Math.sin(U),X=Math.cos(U);d.x=-P*X,d.y=v,d.z=P*H,a.push(d.x,d.y,d.z),g.set(-P*X,A,P*H),g.normalize(),c.push(g.x,g.y,g.z),l.push(S+F,I)}if(b>0){const E=(b-1)*M;for(let S=0;S<r;S++){const U=E+S,H=E+S+1,X=b*M+S,K=b*M+S+1;o.push(U,H,X),o.push(H,K,X)}}}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class vr extends Me{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new C,u=new xt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const m=n+h/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ke extends Me{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],m=[];let _=0;const M=[],g=n/2;let d=0;b(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(m,2));function b(){const v=new C,P=new C;let A=0;const I=(e-t)/n;for(let F=0;F<=s;F++){const E=[],S=F/s,U=S*(e-t)+t;for(let H=0;H<=r;H++){const X=H/r,K=X*c+a,j=Math.sin(K),q=Math.cos(K);P.x=U*j,P.y=-S*n+g,P.z=U*q,h.push(P.x,P.y,P.z),v.set(j,I,q).normalize(),p.push(v.x,v.y,v.z),m.push(X,1-S),E.push(_++)}M.push(E)}for(let F=0;F<r;F++)for(let E=0;E<s;E++){const S=M[E][F],U=M[E+1][F],H=M[E+1][F+1],X=M[E][F+1];(t>0||E!==0)&&(u.push(S,U,X),A+=3),(e>0||E!==s-1)&&(u.push(U,H,X),A+=3)}l.addGroup(d,A,0),d+=A}function T(v){const P=_,A=new xt,I=new C;let F=0;const E=v===!0?t:e,S=v===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,g*S,0),p.push(0,S,0),m.push(.5,.5),_++;const U=_;for(let H=0;H<=r;H++){const K=H/r*c+a,j=Math.cos(K),q=Math.sin(K);I.x=E*q,I.y=g*S,I.z=E*j,h.push(I.x,I.y,I.z),p.push(0,S,0),A.x=j*.5+.5,A.y=q*.5*S+.5,m.push(A.x,A.y),_++}for(let H=0;H<r;H++){const X=P+H,K=U+H;v===!0?u.push(K,K+1,X):u.push(K+1,K,X),F+=3}l.addGroup(d,F,v===!0?1:2),d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn extends Ke{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class al extends Me{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const T=new C,v=new C,P=new C;for(let A=0;A<e.length;A+=3)m(e[A+0],T),m(e[A+1],v),m(e[A+2],P),c(T,v,P,b)}function c(b,T,v,P){const A=P+1,I=[];for(let F=0;F<=A;F++){I[F]=[];const E=b.clone().lerp(v,F/A),S=T.clone().lerp(v,F/A),U=A-F;for(let H=0;H<=U;H++)H===0&&F===A?I[F][H]=E:I[F][H]=E.clone().lerp(S,H/U)}for(let F=0;F<A;F++)for(let E=0;E<2*(A-F)-1;E++){const S=Math.floor(E/2);E%2===0?(p(I[F][S+1]),p(I[F+1][S]),p(I[F][S])):(p(I[F][S+1]),p(I[F+1][S+1]),p(I[F+1][S]))}}function l(b){const T=new C;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(b),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function u(){const b=new C;for(let T=0;T<s.length;T+=3){b.x=s[T+0],b.y=s[T+1],b.z=s[T+2];const v=g(b)/2/Math.PI+.5,P=d(b)/Math.PI+.5;o.push(v,1-P)}_(),h()}function h(){for(let b=0;b<o.length;b+=6){const T=o[b+0],v=o[b+2],P=o[b+4],A=Math.max(T,v,P),I=Math.min(T,v,P);A>.9&&I<.1&&(T<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),P<.2&&(o[b+4]+=1))}}function p(b){s.push(b.x,b.y,b.z)}function m(b,T){const v=b*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function _(){const b=new C,T=new C,v=new C,P=new C,A=new xt,I=new xt,F=new xt;for(let E=0,S=0;E<s.length;E+=9,S+=6){b.set(s[E+0],s[E+1],s[E+2]),T.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),A.set(o[S+0],o[S+1]),I.set(o[S+2],o[S+3]),F.set(o[S+4],o[S+5]),P.copy(b).add(T).add(v).divideScalar(3);const U=g(P);M(A,S+0,b,U),M(I,S+2,T,U),M(F,S+4,v,U)}}function M(b,T,v,P){P<0&&b.x===1&&(o[T]=b.x-1),v.x===0&&v.z===0&&(o[T]=P/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.vertices,t.indices,t.radius,t.details)}}const po=new C,mo=new C,Na=new C,go=new Rn;class _o extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Sr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),p={},m=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:M,b:g,c:d}=go;if(M.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),go.getNormal(Na),h[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const T=(b+1)%3,v=h[b],P=h[T],A=go[u[b]],I=go[u[T]],F=`${v}_${P}`,E=`${P}_${v}`;E in p&&p[E]?(Na.dot(p[E].normal)<=s&&(m.push(A.x,A.y,A.z),m.push(I.x,I.y,I.z)),p[E]=null):F in p||(p[F]={index0:l[b],index1:l[T],normal:Na.clone()})}}for(const _ in p)if(p[_]){const{index0:M,index1:g}=p[_];po.fromBufferAttribute(a,M),mo.fromBufferAttribute(a,g),m.push(po.x,po.y,po.z),m.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new le(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],p=n[r+1]-u,m=(o-u)/p;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new xt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,r=[],s=[],o=[],a=new C,c=new Se;for(let m=0;m<=t;m++){const _=m/t;r[m]=this.getTangentAt(_,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ce(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,_))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(ce(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ll extends Wn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*u-m*h+this.aX,l=p*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lf extends ll{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let p=(o-s)/l-(a-s)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;p*=u,m*=u,r(o,a,p,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const vo=new C,Oa=new cl,Ba=new cl,za=new cl;class If extends Wn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new C){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(vo.subVectors(r[0],r[1]).add(r[0]),l=vo);const h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(vo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),m),M=Math.pow(h.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(u),m);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),Oa.initNonuniformCatmullRom(l.x,h.x,p.x,u.x,_,M,g),Ba.initNonuniformCatmullRom(l.y,h.y,p.y,u.y,_,M,g),za.initNonuniformCatmullRom(l.z,h.z,p.z,u.z,_,M,g)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(l.x,h.x,p.x,u.x,this.tension),Ba.initCatmullRom(l.y,h.y,p.y,u.y,this.tension),za.initCatmullRom(l.z,h.z,p.z,u.z,this.tension));return n.set(Oa.calc(c),Ba.calc(c),za.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new C().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Oc(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function Uf(i,t){const e=1-i;return e*e*t}function Ff(i,t){return 2*(1-i)*i*t}function Nf(i,t){return i*i*t}function as(i,t,e,n){return Uf(i,t)+Ff(i,e)+Nf(i,n)}function Of(i,t){const e=1-i;return e*e*e*t}function Bf(i,t){const e=1-i;return 3*e*e*i*t}function zf(i,t){return 3*(1-i)*i*i*t}function Gf(i,t){return i*i*i*t}function ls(i,t,e,n,r){return Of(i,t)+Bf(i,e)+zf(i,n)+Gf(i,r)}class Lu extends Wn{constructor(t=new xt,e=new xt,n=new xt,r=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new xt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ls(t,r.x,s.x,o.x,a.x),ls(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hf extends Wn{constructor(t=new C,e=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ls(t,r.x,s.x,o.x,a.x),ls(t,r.y,s.y,o.y,a.y),ls(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iu extends Wn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends Wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends Wn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(as(t,r.x,s.x,o.x),as(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(as(t,r.x,s.x,o.x),as(t,r.y,s.y,o.y),as(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fu extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Oc(a,c.x,l.x,u.x,h.x),Oc(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new xt().fromArray(r))}return this}}var $a=Object.freeze({__proto__:null,ArcCurve:Lf,CatmullRomCurve3:If,CubicBezierCurve:Lu,CubicBezierCurve3:Hf,EllipseCurve:ll,LineCurve:Iu,LineCurve3:kf,QuadraticBezierCurve:Uu,QuadraticBezierCurve3:Vf,SplineCurve:Fu});class Wf extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new $a[r.type]().fromJSON(r))}return this}}class Bc extends Wf{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Iu(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Uu(this.currentPoint.clone(),new xt(t,e),new xt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Lu(this.currentPoint.clone(),new xt(t,e),new xt(n,r),new xt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Fu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new ll(t,e,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ka extends Bc{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Bc().fromJSON(r))}return this}}function Xf(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Nu(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=$f(i,t,s,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let p=e;p<r;p+=e){const m=i[p],_=i[p+1];m<a&&(a=m),_<c&&(c=_),m>u&&(u=m),_>h&&(h=_)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return hs(s,o,e,a,c,l,0),o}function Nu(i,t,e,n,r){let s;if(r===ad(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=zc(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=zc(o/n|0,i[o],i[o+1],s);return s&&wr(s,s.next)&&(ds(s),s=s.next),s}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wr(e,e.next)||Ie(e.prev,e,e.next)===0)){if(ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&ed(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?Yf(i,n,r,s):qf(i)){t.push(c.i,i.i,l.i),ds(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Zf(Di(i),t),hs(i,t,e,n,r,s,2)):o===2&&Jf(i,t,e,n,r,s):hs(Di(i),t,e,n,r,s,1);break}}}function qf(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(r,s,o),h=Math.min(a,c,l),p=Math.max(r,s,o),m=Math.max(a,c,l);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=p&&_.y>=h&&_.y<=m&&rs(r,a,s,c,o,l,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Yf(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Ie(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,p=o.y,m=Math.min(a,c,l),_=Math.min(u,h,p),M=Math.max(a,c,l),g=Math.max(u,h,p),d=ja(m,_,t,e,n),b=ja(M,g,t,e,n);let T=i.prevZ,v=i.nextZ;for(;T&&T.z>=d&&v&&v.z<=b;){if(T.x>=m&&T.x<=M&&T.y>=_&&T.y<=g&&T!==r&&T!==o&&rs(a,u,c,h,l,p,T.x,T.y)&&Ie(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=m&&v.x<=M&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&rs(a,u,c,h,l,p,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=d;){if(T.x>=m&&T.x<=M&&T.y>=_&&T.y<=g&&T!==r&&T!==o&&rs(a,u,c,h,l,p,T.x,T.y)&&Ie(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=b;){if(v.x>=m&&v.x<=M&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&rs(a,u,c,h,l,p,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Zf(i,t){let e=i;do{const n=e.prev,r=e.next.next;!wr(n,r)&&Bu(n,e,e.next,r)&&fs(n,r)&&fs(r,n)&&(t.push(n.i,e.i,r.i),ds(e),ds(e.next),e=i=r),e=e.next}while(e!==i);return Di(e)}function Jf(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rd(o,a)){let c=zu(o,a);o=Di(o,o.next),c=Di(c,c.next),hs(o,t,e,n,r,s,0),hs(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function $f(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=Nu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(id(l))}r.sort(Kf);for(let s=0;s<r.length;s++)e=jf(r[s],e);return e}function Kf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function jf(i,t){const e=Qf(i,t);if(!e)return t;const n=zu(e,i);return Di(n,n.next),Di(e,e.next)}function Qf(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(wr(i,e))return e;do{if(wr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Ou(r<l?n:s,r,c,l,r<l?s:n,r,e.x,e.y)){const h=Math.abs(r-e.y)/(n-e.x);fs(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&td(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function td(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function ed(i,t,e,n){let r=i;do r.z===0&&(r.z=ja(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,nd(r)}function nd(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ja(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function id(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ou(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function rs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Ou(i,t,e,n,r,s,o,a)}function rd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sd(i,t)&&(fs(i,t)&&fs(t,i)&&od(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||wr(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wr(i,t){return i.x===t.x&&i.y===t.y}function Bu(i,t,e,n){const r=Mo(Ie(i,t,e)),s=Mo(Ie(i,t,n)),o=Mo(Ie(e,n,i)),a=Mo(Ie(e,n,t));return!!(r!==s&&o!==a||r===0&&xo(i,e,t)||s===0&&xo(i,n,t)||o===0&&xo(e,i,n)||a===0&&xo(e,t,n))}function xo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mo(i){return i>0?1:i<0?-1:0}function sd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fs(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function od(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zu(i,t){const e=Qa(i.i,i.x,i.y),n=Qa(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function zc(i,t,e,n){const r=Qa(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ad(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class ld{static triangulate(t,e,n=2){return Xf(t,e,n)}}class xr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return xr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Gc(t),Hc(n,t);let o=t.length;e.forEach(Gc);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Hc(n,e[c]);const a=ld.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Gc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Do extends Me{constructor(t=new Ka([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:cd;let T,v=!1,P,A,I,F;d&&(T=d.getSpacedPoints(u),v=!0,p=!1,P=d.computeFrenetFrames(u,!1),A=new C,I=new C,F=new C),p||(g=0,m=0,_=0,M=0);const E=a.extractPoints(l);let S=E.shape;const U=E.holes;if(!xr.isClockWise(S)){S=S.reverse();for(let et=0,st=U.length;et<st;et++){const it=U[et];xr.isClockWise(it)&&(U[et]=it.reverse())}}function X(et){const it=10000000000000001e-36;let nt=et[0];for(let yt=1;yt<=et.length;yt++){const ct=yt%et.length,gt=et[ct],Qt=gt.x-nt.x,Wt=gt.y-nt.y,R=Qt*Qt+Wt*Wt,x=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(nt.x),Math.abs(nt.y)),G=it*x*x;if(R<=G){et.splice(ct,1),yt--;continue}nt=gt}}X(S),U.forEach(X);const K=U.length,j=S;for(let et=0;et<K;et++){const st=U[et];S=S.concat(st)}function q(et,st,it){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(st,it)}const ht=S.length;function $(et,st,it){let nt,yt,ct;const gt=et.x-st.x,Qt=et.y-st.y,Wt=it.x-et.x,R=it.y-et.y,x=gt*gt+Qt*Qt,G=gt*R-Qt*Wt;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(x),at=Math.sqrt(Wt*Wt+R*R),tt=st.x-Qt/J,Bt=st.y+gt/J,mt=it.x-R/at,Ft=it.y+Wt/at,Dt=((mt-tt)*R-(Ft-Bt)*Wt)/(gt*R-Qt*Wt);nt=tt+gt*Dt-et.x,yt=Bt+Qt*Dt-et.y;const ft=nt*nt+yt*yt;if(ft<=2)return new xt(nt,yt);ct=Math.sqrt(ft/2)}else{let J=!1;gt>Number.EPSILON?Wt>Number.EPSILON&&(J=!0):gt<-Number.EPSILON?Wt<-Number.EPSILON&&(J=!0):Math.sign(Qt)===Math.sign(R)&&(J=!0),J?(nt=-Qt,yt=gt,ct=Math.sqrt(x)):(nt=gt,yt=Qt,ct=Math.sqrt(x/2))}return new xt(nt/ct,yt/ct)}const St=[];for(let et=0,st=j.length,it=st-1,nt=et+1;et<st;et++,it++,nt++)it===st&&(it=0),nt===st&&(nt=0),St[et]=$(j[et],j[it],j[nt]);const Mt=[];let Rt,qt=St.concat();for(let et=0,st=K;et<st;et++){const it=U[et];Rt=[];for(let nt=0,yt=it.length,ct=yt-1,gt=nt+1;nt<yt;nt++,ct++,gt++)ct===yt&&(ct=0),gt===yt&&(gt=0),Rt[nt]=$(it[nt],it[ct],it[gt]);Mt.push(Rt),qt=qt.concat(Rt)}let ae;if(g===0)ae=xr.triangulateShape(j,U);else{const et=[],st=[];for(let it=0;it<g;it++){const nt=it/g,yt=m*Math.cos(nt*Math.PI/2),ct=_*Math.sin(nt*Math.PI/2)+M;for(let gt=0,Qt=j.length;gt<Qt;gt++){const Wt=q(j[gt],St[gt],ct);Gt(Wt.x,Wt.y,-yt),nt===0&&et.push(Wt)}for(let gt=0,Qt=K;gt<Qt;gt++){const Wt=U[gt];Rt=Mt[gt];const R=[];for(let x=0,G=Wt.length;x<G;x++){const J=q(Wt[x],Rt[x],ct);Gt(J.x,J.y,-yt),nt===0&&R.push(J)}nt===0&&st.push(R)}}ae=xr.triangulateShape(et,st)}const _e=ae.length,Jt=_+M;for(let et=0;et<ht;et++){const st=p?q(S[et],qt[et],Jt):S[et];v?(I.copy(P.normals[0]).multiplyScalar(st.x),A.copy(P.binormals[0]).multiplyScalar(st.y),F.copy(T[0]).add(I).add(A),Gt(F.x,F.y,F.z)):Gt(st.x,st.y,0)}for(let et=1;et<=u;et++)for(let st=0;st<ht;st++){const it=p?q(S[st],qt[st],Jt):S[st];v?(I.copy(P.normals[et]).multiplyScalar(it.x),A.copy(P.binormals[et]).multiplyScalar(it.y),F.copy(T[et]).add(I).add(A),Gt(F.x,F.y,F.z)):Gt(it.x,it.y,h/u*et)}for(let et=g-1;et>=0;et--){const st=et/g,it=m*Math.cos(st*Math.PI/2),nt=_*Math.sin(st*Math.PI/2)+M;for(let yt=0,ct=j.length;yt<ct;yt++){const gt=q(j[yt],St[yt],nt);Gt(gt.x,gt.y,h+it)}for(let yt=0,ct=U.length;yt<ct;yt++){const gt=U[yt];Rt=Mt[yt];for(let Qt=0,Wt=gt.length;Qt<Wt;Qt++){const R=q(gt[Qt],Rt[Qt],nt);v?Gt(R.x,R.y+T[u-1].y,T[u-1].x+it):Gt(R.x,R.y,h+it)}}}Q(),ot();function Q(){const et=r.length/3;if(p){let st=0,it=ht*st;for(let nt=0;nt<_e;nt++){const yt=ae[nt];Ut(yt[2]+it,yt[1]+it,yt[0]+it)}st=u+g*2,it=ht*st;for(let nt=0;nt<_e;nt++){const yt=ae[nt];Ut(yt[0]+it,yt[1]+it,yt[2]+it)}}else{for(let st=0;st<_e;st++){const it=ae[st];Ut(it[2],it[1],it[0])}for(let st=0;st<_e;st++){const it=ae[st];Ut(it[0]+ht*u,it[1]+ht*u,it[2]+ht*u)}}n.addGroup(et,r.length/3-et,0)}function ot(){const et=r.length/3;let st=0;Ct(j,st),st+=j.length;for(let it=0,nt=U.length;it<nt;it++){const yt=U[it];Ct(yt,st),st+=yt.length}n.addGroup(et,r.length/3-et,1)}function Ct(et,st){let it=et.length;for(;--it>=0;){const nt=it;let yt=it-1;yt<0&&(yt=et.length-1);for(let ct=0,gt=u+g*2;ct<gt;ct++){const Qt=ht*ct,Wt=ht*(ct+1),R=st+nt+Qt,x=st+yt+Qt,G=st+yt+Wt,J=st+nt+Wt;ee(R,x,G,J)}}}function Gt(et,st,it){c.push(et),c.push(st),c.push(it)}function Ut(et,st,it){he(et),he(st),he(it);const nt=r.length/3,yt=b.generateTopUV(n,r,nt-3,nt-2,nt-1);L(yt[0]),L(yt[1]),L(yt[2])}function ee(et,st,it,nt){he(et),he(st),he(nt),he(st),he(it),he(nt);const yt=r.length/3,ct=b.generateSideWallUV(n,r,yt-6,yt-3,yt-2,yt-1);L(ct[0]),L(ct[1]),L(ct[3]),L(ct[1]),L(ct[2]),L(ct[3])}function he(et){r.push(c[et*3+0]),r.push(c[et*3+1]),r.push(c[et*3+2])}function L(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ud(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new $a[r.type]().fromJSON(r)),new Do(n,t.options)}}const cd={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],u=t[r*3+1];return[new xt(s,o),new xt(a,c),new xt(l,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],p=t[r*3],m=t[r*3+1],_=t[r*3+2],M=t[s*3],g=t[s*3+1],d=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new xt(o,1-c),new xt(l,1-h),new xt(p,1-_),new xt(M,1-d)]:[new xt(a,1-c),new xt(u,1-h),new xt(m,1-_),new xt(g,1-d)]}};function ud(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ln extends al{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ln(t.radius,t.detail)}}class mn extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,p=e/c,m=[],_=[],M=[],g=[];for(let d=0;d<u;d++){const b=d*p-o;for(let T=0;T<l;T++){const v=T*h-s;_.push(v,-b,0),M.push(0,0,1),g.push(T/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const T=b+l*d,v=b+l*(d+1),P=b+1+l*(d+1),A=b+1+l*d;m.push(T,v,A),m.push(v,P,A)}this.setIndex(m),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(M,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ze extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,p=new C,m=[],_=[],M=[],g=[];for(let d=0;d<=n;d++){const b=[],T=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const A=P/e;h.x=-t*Math.cos(r+A*s)*Math.sin(o+T*a),h.y=t*Math.cos(o+T*a),h.z=t*Math.sin(r+A*s)*Math.sin(o+T*a),_.push(h.x,h.y,h.z),p.copy(h).normalize(),M.push(p.x,p.y,p.z),g.push(A+v,1-T),b.push(l++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const T=u[d][b+1],v=u[d][b],P=u[d+1][b],A=u[d+1][b+1];(d!==0||o>0)&&m.push(T,v,A),(d!==n-1||c<Math.PI)&&m.push(v,P,A)}this.setIndex(m),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(M,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ci extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new C,h=new C,p=new C;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const M=_/r*s,g=m/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(M),h.y=(t+e*Math.cos(g))*Math.sin(M),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(h,u).normalize(),c.push(p.x,p.y,p.z),l.push(_/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const M=(r+1)*m+_-1,g=(r+1)*(m-1)+_-1,d=(r+1)*(m-1)+_,b=(r+1)*m+_;o.push(M,g,b),o.push(g,d,b)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hd extends ci{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class dn extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gu extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fd extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dd extends gr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class ul extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pd extends ul{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ga=new Se,kc=new C,Vc=new C;class Hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wc=new Se,ns=new C,Ha=new C;class md extends Hu{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(ns),Ha.copy(n.position),Ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ha),n.updateMatrixWorld(),r.makeTranslation(-ns.x,-ns.y,-ns.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc,n.coordinateSystem,n.reversedDepth)}}class Xc extends ul{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new md}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hl extends bu{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class gd extends Hu{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new gd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _d extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yc=new Se;class vd{constructor(t,e,n=0,r=1/0){this.ray=new Lo(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(t,e=!0,n=[]){return tl(t,this,n,e),n.sort(Zc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)tl(t[r],this,n,e);return n.sort(Zc),n}}function Zc(i,t){return i.distance-t.distance}function tl(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)tl(s[o],t,e,!0)}}function Jc(i,t,e,n){const r=xd(n);switch(e){case 1021:return i*t;case 1028:return i*t/r.components*r.byteLength;case 1029:return i*t/r.components*r.byteLength;case 1030:return i*t*2/r.components*r.byteLength;case 1031:return i*t*2/r.components*r.byteLength;case 1022:return i*t*3/r.components*r.byteLength;case 1023:return i*t*4/r.components*r.byteLength;case 1033:return i*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xd(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ku(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Md(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<h.length;m++){const _=h[p],M=h[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++p,h[p]=M)}h.length=p+1;for(let m=0,_=h.length;m<_;m++){const M=h[m];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
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
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
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
#endif`,Fd=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,Mp=`
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Sd,alphahash_pars_fragment:yd,alphamap_fragment:Ed,alphamap_pars_fragment:Td,alphatest_fragment:wd,alphatest_pars_fragment:Ad,aomap_fragment:bd,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Pd,begin_vertex:Dd,beginnormal_vertex:Ld,bsdfs:Id,iridescence_fragment:Ud,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:zd,color_fragment:Gd,color_pars_fragment:Hd,color_pars_vertex:kd,color_vertex:Vd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Yd,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:$d,colorspace_fragment:Kd,colorspace_pars_fragment:jd,envmap_fragment:Qd,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:dp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:up,lights_lambert_pars_fragment:hp,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:Mp,lights_fragment_maps:Sp,lights_fragment_end:yp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Ap,map_fragment:bp,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Ip,morphcolor_vertex:Up,morphnormal_vertex:Fp,morphtarget_pars_vertex:Np,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:Gp,normal_pars_vertex:Hp,normal_vertex:kp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:Zp,packing:Jp,premultiplied_alpha_fragment:$p,project_vertex:Kp,dithering_fragment:jp,dithering_pars_fragment:Qp,roughnessmap_fragment:tm,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:om,skinning_pars_vertex:am,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:um,specularmap_pars_fragment:hm,tonemapping_fragment:fm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:xm,background_vert:Mm,background_frag:Sm,backgroundCube_vert:ym,backgroundCube_frag:Em,cube_vert:Tm,cube_frag:wm,depth_vert:Am,depth_frag:bm,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Dm,linedashed_vert:Lm,linedashed_frag:Im,meshbasic_vert:Um,meshbasic_frag:Fm,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:Gm,meshnormal_frag:Hm,meshphong_vert:km,meshphong_frag:Vm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:Ym,points_vert:Zm,points_frag:Jm,shadow_vert:$m,shadow_frag:Km,sprite_vert:jm,sprite_frag:Qm},At={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},kn={basic:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new jt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:an([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:an([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new jt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:an([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:an([At.points,At.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:an([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:an([At.common,At.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:an([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:an([At.sprite,At.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:an([At.common,At.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:an([At.lights,At.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};kn.physical={uniforms:an([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const So={r:0,b:0,g:0},Ti=new Vn,t0=new Se;function e0(i,t,e,n,r,s,o){const a=new jt(0);let c=s===!0?0:1,l,u,h=null,p=0,m=null;function _(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?e:t).get(v)),v}function M(T){let v=!1;const P=_(T);P===null?d(a,c):P&&P.isColor&&(d(P,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,v){const P=_(v);P&&(P.isCubeTexture||P.mapping===306)?(u===void 0&&(u=new bt(new pe(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Tr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ti.copy(v.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(Ti)),u.material.toneMapped=xe.getTransfer(P.colorSpace)!==Ae,(h!==P||p!==P.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,p=P.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new bt(new mn(2,2),new cn({name:"BackgroundMaterial",uniforms:Tr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=xe.getTransfer(P.colorSpace)!==Ae,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||p!==P.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=P,p=P.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function d(T,v){T.getRGB(So,Au(i)),n.buffers.color.setClear(So.r,So.g,So.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,d(a,c)},render:M,addToRenderList:g,dispose:b}}function n0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(S,U,H,X,K){let j=!1;const q=h(X,H,U);s!==q&&(s=q,l(s.object)),j=m(S,X,H,K),j&&_(S,X,H,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(S,U,H,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,U,H){const X=H.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let j=K[U.id];j===void 0&&(j={},K[U.id]=j);let q=j[X];return q===void 0&&(q=p(c()),j[X]=q),q}function p(S){const U=[],H=[],X=[];for(let K=0;K<e;K++)U[K]=0,H[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:X,object:S,attributes:{},index:null}}function m(S,U,H,X){const K=s.attributes,j=U.attributes;let q=0;const ht=H.getAttributes();for(const $ in ht)if(ht[$].location>=0){const Mt=K[$];let Rt=j[$];if(Rt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor)),Mt===void 0||Mt.attribute!==Rt||Rt&&Mt.data!==Rt.data)return!0;q++}return s.attributesNum!==q||s.index!==X}function _(S,U,H,X){const K={},j=U.attributes;let q=0;const ht=H.getAttributes();for(const $ in ht)if(ht[$].location>=0){let Mt=j[$];Mt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor));const Rt={};Rt.attribute=Mt,Mt&&Mt.data&&(Rt.data=Mt.data),K[$]=Rt,q++}s.attributes=K,s.attributesNum=q,s.index=X}function M(){const S=s.newAttributes;for(let U=0,H=S.length;U<H;U++)S[U]=0}function g(S){d(S,0)}function d(S,U){const H=s.newAttributes,X=s.enabledAttributes,K=s.attributeDivisors;H[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),K[S]!==U&&(i.vertexAttribDivisor(S,U),K[S]=U)}function b(){const S=s.newAttributes,U=s.enabledAttributes;for(let H=0,X=U.length;H<X;H++)U[H]!==S[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function T(S,U,H,X,K,j,q){q===!0?i.vertexAttribIPointer(S,U,H,K,j):i.vertexAttribPointer(S,U,H,X,K,j)}function v(S,U,H,X){M();const K=X.attributes,j=H.getAttributes(),q=U.defaultAttributeValues;for(const ht in j){const $=j[ht];if($.location>=0){let St=K[ht];if(St===void 0&&(ht==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),ht==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),St!==void 0){const Mt=St.normalized,Rt=St.itemSize,qt=t.get(St);if(qt===void 0)continue;const ae=qt.buffer,_e=qt.type,Jt=qt.bytesPerElement,Q=_e===i.INT||_e===i.UNSIGNED_INT||St.gpuType===1013;if(St.isInterleavedBufferAttribute){const ot=St.data,Ct=ot.stride,Gt=St.offset;if(ot.isInstancedInterleavedBuffer){for(let Ut=0;Ut<$.locationSize;Ut++)d($.location+Ut,ot.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ut=0;Ut<$.locationSize;Ut++)g($.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ut=0;Ut<$.locationSize;Ut++)T($.location+Ut,Rt/$.locationSize,_e,Mt,Ct*Jt,(Gt+Rt/$.locationSize*Ut)*Jt,Q)}else{if(St.isInstancedBufferAttribute){for(let ot=0;ot<$.locationSize;ot++)d($.location+ot,St.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ot=0;ot<$.locationSize;ot++)g($.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ot=0;ot<$.locationSize;ot++)T($.location+ot,Rt/$.locationSize,_e,Mt,Rt*Jt,Rt/$.locationSize*ot*Jt,Q)}}else if(q!==void 0){const Mt=q[ht];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv($.location,Mt);break;case 3:i.vertexAttrib3fv($.location,Mt);break;case 4:i.vertexAttrib4fv($.location,Mt);break;default:i.vertexAttrib1fv($.location,Mt)}}}}b()}function P(){F();for(const S in n){const U=n[S];for(const H in U){const X=U[H];for(const K in X)u(X[K].object),delete X[K];delete U[H]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const H in U){const X=U[H];for(const K in X)u(X[K].object),delete X[K];delete U[H]}delete n[S.id]}function I(S){for(const U in n){const H=n[U];if(H[S.id]===void 0)continue;const X=H[S.id];for(const K in X)u(X[K].object),delete X[K];delete H[S.id]}}function F(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function i0(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];e.update(m,n,1)}function c(l,u,h,p){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],u[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M]*p[M];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function r0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==1023&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const F=I===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==1009&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==1015&&!F)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function s0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new bi,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,m){const _=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!r||_===null||_.length===0||s&&!g)s?u(null):l();else{const b=s?0:n,T=b*4;let v=d.clippingState||null;c.value=v,v=u(_,p,T,m);for(let P=0;P!==T;++P)v[P]=e[P];d.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,m,_){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=c.value,_!==!0||g===null){const d=m+M*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let T=0,v=m;T!==M;++T,v+=4)o.copy(h[T]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function o0(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Tf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Mr=4,$c=[.125,.215,.35,.446,.526,.582],Pi=20,ka=new hl,Kc=new jt;let Va=null,Wa=0,Xa=0,qa=!1;const Ri=(1+Math.sqrt(5))/2,fr=1/Ri,jc=[new C(-Ri,fr,0),new C(Ri,fr,0),new C(-fr,0,Ri),new C(fr,0,Ri),new C(0,Ri,-fr),new C(0,Ri,fr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],a0=new C;class Qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=a0}=s;Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Wa,Xa),this._renderer.xr.enabled=qa,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Er,depthBuffer:!1},r=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(s)),this._blurMaterial=c0(s,t,e)}return r}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,r,s){const c=new bn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(Kc),h.toneMapping=0,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const M=new ai({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new bt(new pe,M);let d=!1;const b=t.background;b?b.isColor&&(M.color.copy(b),t.background=null,d=!0):(M.color.copy(Kc),d=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const P=this._cubeSize;yo(r,v*P,T>2?P:0,P,P),h.setRenderTarget(r),d&&h.render(g,c),h.render(t,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=p,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;yo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jc[(r-s-1)%jc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),M=s/_,g=isFinite(s)?1+Math.floor(u*M):Pi;g>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);const d=[];let b=0;for(let I=0;I<Pi;++I){const F=I/M,E=Math.exp(-F*F/2);d.push(E),I===0?b+=E:I<g&&(b+=2*E)}for(let I=0;I<d.length;I++)d[I]=d[I]/b;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:T}=this;p.dTheta.value=_,p.mipInt.value=T-n;const v=this._sizeLods[r],P=3*v*(r>T-Mr?r-T+Mr:0),A=4*(this._cubeSize-v);yo(e,P,A,3*v,2*v),c.setRenderTarget(e),c.render(h,ka)}}function l0(i){const t=[],e=[],n=[];let r=i;const s=i-Mr+1+$c.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Mr?c=$c[o-i+Mr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,M=3,g=2,d=1,b=new Float32Array(M*_*m),T=new Float32Array(g*_*m),v=new Float32Array(d*_*m);for(let A=0;A<m;A++){const I=A%3*2/3-1,F=A>2?0:-1,E=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];b.set(E,M*_*A),T.set(p,g*_*A);const S=[A,A,A,A,A,A];v.set(S,d*_*A)}const P=new Me;P.setAttribute("position",new Cn(b,M)),P.setAttribute("uv",new Cn(T,g)),P.setAttribute("faceIndex",new Cn(v,d)),t.push(P),r>Mr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tu(i,t,e){const n=new li(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function c0(i,t,e){const n=new Float32Array(Pi),r=new C(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function eu(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function nu(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function u0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u){let h=t.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Qc(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Qc(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function h0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&us("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function f0(i,t,e,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(h){const p=h.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER)}function l(h){const p=[],m=h.index,_=h.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let T=0,v=b.length;T<v;T+=3){const P=b[T+0],A=b[T+1],I=b[T+2];p.push(P,A,A,I,I,P)}}else if(_!==void 0){const b=_.array;M=_.version;for(let T=0,v=b.length/3-1;T<v;T+=3){const P=T+0,A=T+1,I=T+2;p.push(P,A,A,I,I,P)}}else return;const g=new(Su(p)?wu:Tu)(p,1);g.version=M;const d=s.get(h);d&&t.remove(d),s.set(h,g)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function d0(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,m){i.drawElements(n,m,s,p*o),e.update(m,n,1)}function l(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,p*o,_),e.update(m,n,_))}function u(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];e.update(g,n,1)}function h(p,m,_,M){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)l(p[d]/o,m[d],M[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,M,0,_);let d=0;for(let b=0;b<_;b++)d+=m[b]*M[b];e.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function p0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function m0(i,t,e){const n=new WeakMap,r=new be;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),M===!0&&(T=3);let v=a.attributes.position.count*T,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*P*4*h),I=new yu(A,v,P,h);I.type=1015,I.needsUpdate=!0;const F=T*4;for(let S=0;S<h;S++){const U=g[S],H=d[S],X=b[S],K=v*P*4*S;for(let j=0;j<U.count;j++){const q=j*F;m===!0&&(r.fromBufferAttribute(U,j),A[K+q+0]=r.x,A[K+q+1]=r.y,A[K+q+2]=r.z,A[K+q+3]=0),_===!0&&(r.fromBufferAttribute(H,j),A[K+q+4]=r.x,A[K+q+5]=r.y,A[K+q+6]=r.z,A[K+q+7]=0),M===!0&&(r.fromBufferAttribute(X,j),A[K+q+8]=r.x,A[K+q+9]=r.y,A[K+q+10]=r.z,A[K+q+11]=X.itemSize===4?r.w:1)}}p={count:h,texture:I,size:new xt(v,P)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let M=0;M<l.length;M++)m+=l[M];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function g0(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Vu=new rn,iu=new Pu(1,1),Wu=new yu,Xu=new af,qu=new Ru,ru=[],su=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function Rr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ru[r];if(s===void 0&&(s=new Float32Array(r),ru[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function S0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),Ve(e,n)}}function y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),Ve(e,n)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),Ve(e,n)}}function T0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function L0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=515,s=iu):s=Vu,e.setTexture2D(t||s,r)}function I0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Xu,r)}function U0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||qu,r)}function F0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Wu,r)}function N0(i){switch(i){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return M0;case 35674:return S0;case 35675:return y0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return w0;case 35668:case 35672:return A0;case 35669:case 35673:return b0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return F0}}function O0(i,t){i.uniform1fv(this.addr,t)}function B0(i,t){const e=Rr(t,this.size,2);i.uniform2fv(this.addr,e)}function z0(i,t){const e=Rr(t,this.size,3);i.uniform3fv(this.addr,e)}function G0(i,t){const e=Rr(t,this.size,4);i.uniform4fv(this.addr,e)}function H0(i,t){const e=Rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function k0(i,t){const e=Rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function V0(i,t){const e=Rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function W0(i,t){i.uniform1iv(this.addr,t)}function X0(i,t){i.uniform2iv(this.addr,t)}function q0(i,t){i.uniform3iv(this.addr,t)}function Y0(i,t){i.uniform4iv(this.addr,t)}function Z0(i,t){i.uniform1uiv(this.addr,t)}function J0(i,t){i.uniform2uiv(this.addr,t)}function $0(i,t){i.uniform3uiv(this.addr,t)}function K0(i,t){i.uniform4uiv(this.addr,t)}function j0(i,t,e){const n=this.cache,r=t.length,s=Io(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Vu,s[o])}function Q0(i,t,e){const n=this.cache,r=t.length,s=Io(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Xu,s[o])}function tg(i,t,e){const n=this.cache,r=t.length,s=Io(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||qu,s[o])}function eg(i,t,e){const n=this.cache,r=t.length,s=Io(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Wu,s[o])}function ng(i){switch(i){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return G0;case 35674:return H0;case 35675:return k0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return Z0;case 36294:return J0;case 36295:return $0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}class ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=N0(e.type)}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ng(e.type)}}class sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function cu(i,t){i.seq.push(t),i.map[t.id]=t}function og(i,t,e){const n=i.name,r=n.length;for(Ya.lastIndex=0;;){const s=Ya.exec(n),o=Ya.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){cu(e,l===void 0?new ig(a,i,t):new rg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new sg(a),cu(e,h)),e=h}}}class wo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);og(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function uu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ag=37297;let lg=0;function cg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const hu=new re;function ug(i){xe._getMatrix(hu,xe.workingColorSpace,i);const t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case bo:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+cg(i.getShaderSource(t),a)}else return s}function hg(i,t){const e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fg(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Eo=new C;function dg(){xe.getLuminanceCoefficients(Eo);const i=Eo.x.toFixed(4),t=Eo.y.toFixed(4),e=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function mg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ss(i){return i!==""}function du(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(_g,xg)}const vg=new Map;function xg(i,t){let e=oe[t];if(e===void 0){const n=vg.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(Mg,Sg)}function Sg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function yg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===302&&(t="ENVMAP_MODE_REFRACTION"),t}function wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Ag(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bg(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=yg(e),l=Eg(e),u=Tg(e),h=wg(e),p=Ag(e),m=pg(e),_=mg(s),M=r.createProgram();let g,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),d.length>0&&(d+=`
`)):(g=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),d=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?oe.tonemapping_pars_fragment:"",e.toneMapping!==0?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,hg("linearToOutputTexel",e.outputColorSpace),dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=el(o),o=du(o,e),o=pu(o,e),a=el(a),a=du(a,e),a=pu(a,e),o=mu(o),a=mu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=b+g+o,v=b+d+a,P=uu(r,r.VERTEX_SHADER,T),A=uu(r,r.FRAGMENT_SHADER,v);r.attachShader(M,P),r.attachShader(M,A),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(U){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(P)||"",K=r.getShaderInfoLog(A)||"",j=H.trim(),q=X.trim(),ht=K.trim();let $=!0,St=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,P,A);else{const Mt=fu(r,P,"vertex"),Rt=fu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+j+`
`+Mt+`
`+Rt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(q===""||ht==="")&&(St=!1);St&&(U.diagnostics={runnable:$,programLog:j,vertexShader:{log:q,prefix:g},fragmentShader:{log:ht,prefix:d}})}r.deleteShader(P),r.deleteShader(A),F=new wo(r,M),E=gg(r,M)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,ag)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=A,this}let Rg=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pg(t),e.set(t,n)),n}}class Pg{constructor(t){this.id=Rg++,this.code=t,this.usedTimes=0}}function Dg(i,t,e,n,r,s,o){const a=new rl,c=new Cg,l=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,S,U,H,X){const K=H.fog,j=X.geometry,q=E.isMeshStandardMaterial?H.environment:null,ht=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),$=ht&&ht.mapping===306?ht.image.height:null,St=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Rt=Mt!==void 0?Mt.length:0;let qt=0;j.morphAttributes.position!==void 0&&(qt=1),j.morphAttributes.normal!==void 0&&(qt=2),j.morphAttributes.color!==void 0&&(qt=3);let ae,_e,Jt,Q;if(St){const de=kn[St];ae=de.vertexShader,_e=de.fragmentShader}else ae=E.vertexShader,_e=E.fragmentShader,c.update(E),Jt=c.getVertexShaderID(E),Q=c.getFragmentShaderID(E);const ot=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Gt=X.isInstancedMesh===!0,Ut=X.isBatchedMesh===!0,ee=!!E.map,he=!!E.matcap,L=!!ht,et=!!E.aoMap,st=!!E.lightMap,it=!!E.bumpMap,nt=!!E.normalMap,yt=!!E.displacementMap,ct=!!E.emissiveMap,gt=!!E.metalnessMap,Qt=!!E.roughnessMap,Wt=E.anisotropy>0,R=E.clearcoat>0,x=E.dispersion>0,G=E.iridescence>0,J=E.sheen>0,at=E.transmission>0,tt=Wt&&!!E.anisotropyMap,Bt=R&&!!E.clearcoatMap,mt=R&&!!E.clearcoatNormalMap,Ft=R&&!!E.clearcoatRoughnessMap,Dt=G&&!!E.iridescenceMap,ft=G&&!!E.iridescenceThicknessMap,wt=J&&!!E.sheenColorMap,Yt=J&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Et=!!E.specularColorMap,Xt=!!E.specularIntensityMap,O=at&&!!E.transmissionMap,pt=at&&!!E.thicknessMap,vt=!!E.gradientMap,Lt=!!E.alphaMap,dt=E.alphaTest>0,rt=!!E.alphaHash,Ot=!!E.extensions;let te=0;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(te=i.toneMapping);const ye={shaderID:St,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:_e,defines:E.defines,customVertexShaderID:Jt,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ut,batchingColor:Ut&&X._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&X.instanceColor!==null,instancingMorph:Gt&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Er,alphaToCoverage:!!E.alphaToCoverage,map:ee,matcap:he,envMap:L,envMapMode:L&&ht.mapping,envMapCubeUVHeight:$,aoMap:et,lightMap:st,bumpMap:it,normalMap:nt,displacementMap:p&&yt,emissiveMap:ct,normalMapObjectSpace:nt&&E.normalMapType===1,normalMapTangentSpace:nt&&E.normalMapType===0,metalnessMap:gt,roughnessMap:Qt,anisotropy:Wt,anisotropyMap:tt,clearcoat:R,clearcoatMap:Bt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ft,dispersion:x,iridescence:G,iridescenceMap:Dt,iridescenceThicknessMap:ft,sheen:J,sheenColorMap:wt,sheenRoughnessMap:Yt,specularMap:zt,specularColorMap:Et,specularIntensityMap:Xt,transmission:at,transmissionMap:O,thicknessMap:pt,gradientMap:vt,opaque:E.transparent===!1&&E.blending===1&&E.alphaToCoverage===!1,alphaMap:Lt,alphaTest:dt,alphaHash:rt,combine:E.combine,mapUv:ee&&M(E.map.channel),aoMapUv:et&&M(E.aoMap.channel),lightMapUv:st&&M(E.lightMap.channel),bumpMapUv:it&&M(E.bumpMap.channel),normalMapUv:nt&&M(E.normalMap.channel),displacementMapUv:yt&&M(E.displacementMap.channel),emissiveMapUv:ct&&M(E.emissiveMap.channel),metalnessMapUv:gt&&M(E.metalnessMap.channel),roughnessMapUv:Qt&&M(E.roughnessMap.channel),anisotropyMapUv:tt&&M(E.anisotropyMap.channel),clearcoatMapUv:Bt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:mt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&M(E.sheenRoughnessMap.channel),specularMapUv:zt&&M(E.specularMap.channel),specularColorMapUv:Et&&M(E.specularColorMap.channel),specularIntensityMapUv:Xt&&M(E.specularIntensityMap.channel),transmissionMapUv:O&&M(E.transmissionMap.channel),thicknessMapUv:pt&&M(E.thicknessMap.channel),alphaMapUv:Lt&&M(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(nt||Wt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!j.attributes.uv&&(ee||Lt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ct,skinning:X.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:ee&&E.map.isVideoTexture===!0&&xe.getTransfer(E.map.colorSpace)===Ae,decodeVideoTextureEmissive:ct&&E.emissiveMap.isVideoTexture===!0&&xe.getTransfer(E.emissiveMap.colorSpace)===Ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===2,flipSided:E.side===1,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)S.push(U),S.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(b(S,E),T(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const S=_[E.type];let U;if(S){const H=kn[S];U=Mf.clone(H.uniforms)}else U=E.uniforms;return U}function P(E,S){let U;for(let H=0,X=u.length;H<X;H++){const K=u[H];if(K.cacheKey===S){U=K,++U.usedTimes;break}}return U===void 0&&(U=new bg(i,S,E,s),u.push(U)),U}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function I(E){c.remove(E)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:F}}function Lg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _u(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,p,m,_,M,g){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:_,renderOrder:h.renderOrder,z:M,group:g},i[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=M,d.group=g),t++,d}function a(h,p,m,_,M,g){const d=o(h,p,m,_,M,g);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function c(h,p,m,_,M,g){const d=o(h,p,m,_,M,g);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function l(h,p){e.length>1&&e.sort(h||Ig),n.length>1&&n.sort(p||_u),r.length>1&&r.sort(p||_u)}function u(){for(let h=t,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Ug(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new vu,i.set(n,[o])):r>=s.length?(o=new vu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new jt};break;case"SpotLight":e={position:new C,direction:new C,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Og=0;function Bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){const t=new Fg,e=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const r=new C,s=new Se,o=new Se;function a(l){let u=0,h=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,M=0,g=0,d=0,b=0,T=0,v=0,P=0,A=0,I=0;l.sort(Bg);for(let E=0,S=l.length;E<S;E++){const U=l[E],H=U.color,X=U.intensity,K=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=H.r*X,h+=H.g*X,p+=H.b*X;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],X);I++}else if(U.isDirectionalLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ht=U.shadow,$=e.get(U);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=q,m++}else if(U.isSpotLight){const q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(H).multiplyScalar(X),q.distance=K,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[M]=q;const ht=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,ht.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[M]=ht.matrix,U.castShadow){const $=e.get(U);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=j,v++}M++}else if(U.isRectAreaLight){const q=t.get(U);q.color.copy(H).multiplyScalar(X),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=q,g++}else if(U.isPointLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const ht=U.shadow,$=e.get(U);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,$.shadowCameraNear=ht.camera.near,$.shadowCameraFar=ht.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=U.shadow.matrix,T++}n.point[_]=q,_++}else if(U.isHemisphereLight){const q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(X),q.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[d]=q,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const F=n.hash;(F.directionalLength!==m||F.pointLength!==_||F.spotLength!==M||F.rectAreaLength!==g||F.hemiLength!==d||F.numDirectionalShadows!==b||F.numPointShadows!==T||F.numSpotShadows!==v||F.numSpotMaps!==P||F.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=g,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,F.directionalLength=m,F.pointLength=_,F.spotLength=M,F.rectAreaLength=g,F.hemiLength=d,F.numDirectionalShadows=b,F.numPointShadows=T,F.numSpotShadows=v,F.numSpotMaps=P,F.numLightProbes=I,n.version=Og++)}function c(l,u){let h=0,p=0,m=0,_=0,M=0;const g=u.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const T=l[d];if(T.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(T.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(T.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),p++}else if(T.isHemisphereLight){const v=n.hemi[M];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(g),M++}}}return{setup:a,setupView:c,state:n}}function xu(i){const t=new zg(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Gg(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new xu(i),t.set(r,[a])):s>=o.length?(a=new xu(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function Vg(i,t,e){let n=new ol;const r=new xt,s=new xt,o=new be,a=new Gu({depthPacking:3201}),c=new fd,l={},u=e.maxTextureSize,h={0:1,1:0,2:2},p=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Hg,fragmentShader:kg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Me;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bt(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(A,I,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(0),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const X=d!==3&&this.type===3,K=d===3&&this.type!==3;for(let j=0,q=A.length;j<q;j++){const ht=A[j],$=ht.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const St=$.getFrameExtents();if(r.multiply(St),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/St.x),r.x=s.x*St.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/St.y),r.y=s.y*St.y,$.mapSize.y=s.y)),$.map===null||X===!0||K===!0){const Rt=this.type!==3?{minFilter:1003,magFilter:1003}:{};$.map!==null&&$.map.dispose(),$.map=new li(r.x,r.y,Rt),$.map.texture.name=ht.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Mt=$.getViewportCount();for(let Rt=0;Rt<Mt;Rt++){const qt=$.getViewport(Rt);o.set(s.x*qt.x,s.y*qt.y,s.x*qt.z,s.y*qt.w),H.viewport(o),$.updateMatrices(ht,Rt),n=$.getFrustum(),v(I,F,$.camera,ht,this.type)}$.isPointLightShadow!==!0&&this.type===3&&b($,F),$.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(E,S,U)};function b(A,I){const F=t.update(M);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,F,p,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,F,m,M,null)}function T(A,I,F,E){let S=null;const U=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)S=U;else if(S=F.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=S.uuid,X=I.uuid;let K=l[H];K===void 0&&(K={},l[H]=K);let j=K[X];j===void 0&&(j=S.clone(),K[X]=j,I.addEventListener("dispose",P)),S=j}if(S.visible=I.visible,S.wireframe=I.wireframe,E===3?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=F}return S}function v(A,I,F,E,S){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const X=t.update(A),K=A.material;if(Array.isArray(K)){const j=X.groups;for(let q=0,ht=j.length;q<ht;q++){const $=j[q],St=K[$.materialIndex];if(St&&St.visible){const Mt=T(A,St,E,S);A.onBeforeShadow(i,A,I,F,X,Mt,$),i.renderBufferDirect(F,null,X,Mt,A,$),A.onAfterShadow(i,A,I,F,X,Mt,$)}}}else if(K.visible){const j=T(A,K,E,S);A.onBeforeShadow(i,A,I,F,X,j,null),i.renderBufferDirect(F,null,X,j,A,null),A.onAfterShadow(i,A,I,F,X,j,null)}}const H=A.children;for(let X=0,K=H.length;X<K;X++)v(H[X],I,F,E,S)}function P(A){A.target.removeEventListener("dispose",P);for(const F in l){const E=l[F],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Wg={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Xg(i,t){function e(){let O=!1;const pt=new be;let vt=null;const Lt=new be(0,0,0,0);return{setMask:function(dt){vt!==dt&&!O&&(i.colorMask(dt,dt,dt,dt),vt=dt)},setLocked:function(dt){O=dt},setClear:function(dt,rt,Ot,te,ye){ye===!0&&(dt*=te,rt*=te,Ot*=te),pt.set(dt,rt,Ot,te),Lt.equals(pt)===!1&&(i.clearColor(dt,rt,Ot,te),Lt.copy(pt))},reset:function(){O=!1,vt=null,Lt.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,vt=null,Lt=null,dt=null;return{setReversed:function(rt){if(pt!==rt){const Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;const te=dt;dt=null,this.setClear(te)}},getReversed:function(){return pt},setTest:function(rt){rt?ot(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(rt){vt!==rt&&!O&&(i.depthMask(rt),vt=rt)},setFunc:function(rt){if(pt&&(rt=Wg[rt]),Lt!==rt){switch(rt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=rt}},setLocked:function(rt){O=rt},setClear:function(rt){dt!==rt&&(pt&&(rt=1-rt),i.clearDepth(rt),dt=rt)},reset:function(){O=!1,vt=null,Lt=null,dt=null,pt=!1}}}function r(){let O=!1,pt=null,vt=null,Lt=null,dt=null,rt=null,Ot=null,te=null,ye=null;return{setTest:function(de){O||(de?ot(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(de){pt!==de&&!O&&(i.stencilMask(de),pt=de)},setFunc:function(de,Sn,_n){(vt!==de||Lt!==Sn||dt!==_n)&&(i.stencilFunc(de,Sn,_n),vt=de,Lt=Sn,dt=_n)},setOp:function(de,Sn,_n){(rt!==de||Ot!==Sn||te!==_n)&&(i.stencilOp(de,Sn,_n),rt=de,Ot=Sn,te=_n)},setLocked:function(de){O=de},setClear:function(de){ye!==de&&(i.clearStencil(de),ye=de)},reset:function(){O=!1,pt=null,vt=null,Lt=null,dt=null,rt=null,Ot=null,te=null,ye=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,m=[],_=null,M=!1,g=null,d=null,b=null,T=null,v=null,P=null,A=null,I=new jt(0,0,0),F=0,E=!1,S=null,U=null,H=null,X=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ht=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec($)[1]),q=ht>=1):$.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=ht>=2);let St=null,Mt={};const Rt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),ae=new be().fromArray(Rt),_e=new be().fromArray(qt);function Jt(O,pt,vt,Lt){const dt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(O,rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<vt;Ot++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(pt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return rt}const Q={};Q[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(3),it(!1),nt(1),ot(i.CULL_FACE),et(0);function ot(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Ct(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Gt(O,pt){return h[O]!==pt?(i.bindFramebuffer(O,pt),h[O]=pt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ut(O,pt){let vt=m,Lt=!1;if(O){vt=p.get(pt),vt===void 0&&(vt=[],p.set(pt,vt));const dt=O.textures;if(vt.length!==dt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ot=dt.length;rt<Ot;rt++)vt[rt]=i.COLOR_ATTACHMENT0+rt;vt.length=dt.length,Lt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(vt)}function ee(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const he={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};he[103]=i.MIN,he[104]=i.MAX;const L={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function et(O,pt,vt,Lt,dt,rt,Ot,te,ye,de){if(O===0){M===!0&&(Ct(i.BLEND),M=!1);return}if(M===!1&&(ot(i.BLEND),M=!0),O!==5){if(O!==g||de!==E){if((d!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),d=100,v=100),de)switch(O){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,T=null,P=null,A=null,I.set(0,0,0),F=0,g=O,E=de}return}dt=dt||pt,rt=rt||vt,Ot=Ot||Lt,(pt!==d||dt!==v)&&(i.blendEquationSeparate(he[pt],he[dt]),d=pt,v=dt),(vt!==b||Lt!==T||rt!==P||Ot!==A)&&(i.blendFuncSeparate(L[vt],L[Lt],L[rt],L[Ot]),b=vt,T=Lt,P=rt,A=Ot),(te.equals(I)===!1||ye!==F)&&(i.blendColor(te.r,te.g,te.b,ye),I.copy(te),F=ye),g=O,E=!1}function st(O,pt){O.side===2?Ct(i.CULL_FACE):ot(i.CULL_FACE);let vt=O.side===1;pt&&(vt=!vt),it(vt),O.blending===1&&O.transparent===!1?et(0):et(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Lt=O.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ct(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function nt(O){O!==0?(ot(i.CULL_FACE),O!==U&&(O===1?i.cullFace(i.BACK):O===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),U=O}function yt(O){O!==H&&(q&&i.lineWidth(O),H=O)}function ct(O,pt,vt){O?(ot(i.POLYGON_OFFSET_FILL),(X!==pt||K!==vt)&&(i.polygonOffset(pt,vt),X=pt,K=vt)):Ct(i.POLYGON_OFFSET_FILL)}function gt(O){O?ot(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Qt(O){O===void 0&&(O=i.TEXTURE0+j-1),St!==O&&(i.activeTexture(O),St=O)}function Wt(O,pt,vt){vt===void 0&&(St===null?vt=i.TEXTURE0+j-1:vt=St);let Lt=Mt[vt];Lt===void 0&&(Lt={type:void 0,texture:void 0},Mt[vt]=Lt),(Lt.type!==O||Lt.texture!==pt)&&(St!==vt&&(i.activeTexture(vt),St=vt),i.bindTexture(O,pt||Q[O]),Lt.type=O,Lt.texture=pt)}function R(){const O=Mt[St];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(O){ae.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function Yt(O){_e.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),_e.copy(O))}function zt(O,pt){let vt=l.get(pt);vt===void 0&&(vt=new WeakMap,l.set(pt,vt));let Lt=vt.get(O);Lt===void 0&&(Lt=i.getUniformBlockIndex(pt,O.name),vt.set(O,Lt))}function Et(O,pt){const Lt=l.get(pt).get(O);c.get(pt)!==Lt&&(i.uniformBlockBinding(pt,Lt,O.__bindingPointIndex),c.set(pt,Lt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},St=null,Mt={},h={},p=new WeakMap,m=[],_=null,M=!1,g=null,d=null,b=null,T=null,v=null,P=null,A=null,I=new jt(0,0,0),F=0,E=!1,S=null,U=null,H=null,X=null,K=null,ae.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Gt,drawBuffers:Ut,useProgram:ee,setBlending:et,setMaterial:st,setFlipSided:it,setCullFace:nt,setLineWidth:yt,setPolygonOffset:ct,setScissorTest:gt,activeTexture:Qt,bindTexture:Wt,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:Dt,texImage3D:ft,updateUBOMapping:zt,uniformBlockBinding:Et,texStorage2D:mt,texStorage3D:Ft,texSubImage2D:J,texSubImage3D:at,compressedTexSubImage2D:tt,compressedTexSubImage3D:Bt,scissor:wt,viewport:Yt,reset:Xt}}function qg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return m?new OffscreenCanvas(R,x):Ro("canvas")}function M(R,x,G){let J=1;const at=Wt(R);if((at.width>G||at.height>G)&&(J=G/Math.max(at.width,at.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const tt=Math.floor(J*at.width),Bt=Math.floor(J*at.height);h===void 0&&(h=_(tt,Bt));const mt=x?_(tt,Bt):h;return mt.width=tt,mt.height=Bt,mt.getContext("2d").drawImage(R,0,0,tt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+Bt+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function g(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,x,G,J,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=x;if(x===i.RED&&(G===i.FLOAT&&(tt=i.R32F),G===i.HALF_FLOAT&&(tt=i.R16F),G===i.UNSIGNED_BYTE&&(tt=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.R8UI),G===i.UNSIGNED_SHORT&&(tt=i.R16UI),G===i.UNSIGNED_INT&&(tt=i.R32UI),G===i.BYTE&&(tt=i.R8I),G===i.SHORT&&(tt=i.R16I),G===i.INT&&(tt=i.R32I)),x===i.RG&&(G===i.FLOAT&&(tt=i.RG32F),G===i.HALF_FLOAT&&(tt=i.RG16F),G===i.UNSIGNED_BYTE&&(tt=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RG8UI),G===i.UNSIGNED_SHORT&&(tt=i.RG16UI),G===i.UNSIGNED_INT&&(tt=i.RG32UI),G===i.BYTE&&(tt=i.RG8I),G===i.SHORT&&(tt=i.RG16I),G===i.INT&&(tt=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),G===i.UNSIGNED_INT&&(tt=i.RGB32UI),G===i.BYTE&&(tt=i.RGB8I),G===i.SHORT&&(tt=i.RGB16I),G===i.INT&&(tt=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),G===i.UNSIGNED_INT&&(tt=i.RGBA32UI),G===i.BYTE&&(tt=i.RGBA8I),G===i.SHORT&&(tt=i.RGBA16I),G===i.INT&&(tt=i.RGBA32I)),x===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),x===i.RGBA){const Bt=at?bo:xe.getTransfer(J);G===i.FLOAT&&(tt=i.RGBA32F),G===i.HALF_FLOAT&&(tt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(tt=Bt===Ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(R,x){let G;return R?x===null||x===1014||x===1020?G=i.DEPTH24_STENCIL8:x===1015?G=i.DEPTH32F_STENCIL8:x===1012&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?G=i.DEPTH_COMPONENT24:x===1015?G=i.DEPTH_COMPONENT32F:x===1012&&(G=i.DEPTH_COMPONENT16),G}function P(R,x){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),F(x),x.isVideoTexture&&u.delete(x)}function I(R){const x=R.target;x.removeEventListener("dispose",I),S(x)}function F(R){const x=n.get(R);if(x.__webglInit===void 0)return;const G=R.source,J=p.get(G);if(J){const at=J[x.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(R),Object.keys(J).length===0&&p.delete(G)}n.remove(R)}function E(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const G=R.source,J=p.get(G);delete J[x.__cacheKey],o.memory.textures--}function S(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let at=0;at<x.__webglFramebuffer[J].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[J][at]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=R.textures;for(let J=0,at=G.length;J<at;J++){const tt=n.get(G[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(R)}let U=0;function H(){U=0}function X(){const R=U;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function K(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function j(R,x){const G=n.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,R,x);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function q(R,x){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Q(G,R,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function ht(R,x){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Q(G,R,x);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function $(R,x){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ot(G,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const St={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Mt={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Rt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function qt(R,x){if(x.type===1015&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,St[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,St[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,St[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Mt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ae(R,x){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const J=x.source;let at=p.get(J);at===void 0&&(at={},p.set(J,at));const tt=K(x);if(tt!==R.__cacheKey){at[tt]===void 0&&(at[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),at[tt].usedTimes++;const Bt=at[R.__cacheKey];Bt!==void 0&&(at[R.__cacheKey].usedTimes--,Bt.usedTimes===0&&E(x)),R.__cacheKey=tt,R.__webglTexture=at[tt].texture}return G}function _e(R,x,G){return Math.floor(Math.floor(R/G)/x)}function Jt(R,x,G,J){const tt=R.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,G,J,x.data);else{tt.sort((ft,wt)=>ft.start-wt.start);let Bt=0;for(let ft=1;ft<tt.length;ft++){const wt=tt[Bt],Yt=tt[ft],zt=wt.start+wt.count,Et=_e(Yt.start,x.width,4),Xt=_e(wt.start,x.width,4);Yt.start<=zt+1&&Et===Xt&&_e(Yt.start+Yt.count-1,x.width,4)===Et?wt.count=Math.max(wt.count,Yt.start+Yt.count-wt.start):(++Bt,tt[Bt]=Yt)}tt.length=Bt+1;const mt=i.getParameter(i.UNPACK_ROW_LENGTH),Ft=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ft=0,wt=tt.length;ft<wt;ft++){const Yt=tt[ft],zt=Math.floor(Yt.start/4),Et=Math.ceil(Yt.count/4),Xt=zt%x.width,O=Math.floor(zt/x.width),pt=Et,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Xt,O,pt,vt,G,J,x.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function Q(R,x,G){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);const at=ae(R,x),tt=x.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+G);const Bt=n.get(tt);if(tt.version!==Bt.__version||at===!0){e.activeTexture(i.TEXTURE0+G);const mt=xe.getPrimaries(xe.workingColorSpace),Ft=x.colorSpace===""?null:xe.getPrimaries(x.colorSpace),Dt=x.colorSpace===""||mt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ft=M(x.image,!1,r.maxTextureSize);ft=Qt(x,ft);const wt=s.convert(x.format,x.colorSpace),Yt=s.convert(x.type);let zt=T(x.internalFormat,wt,Yt,x.colorSpace,x.isVideoTexture);qt(J,x);let Et;const Xt=x.mipmaps,O=x.isVideoTexture!==!0,pt=Bt.__version===void 0||at===!0,vt=tt.dataReady,Lt=P(x,ft);if(x.isDepthTexture)zt=v(x.format===1027,x.type),pt&&(O?e.texStorage2D(i.TEXTURE_2D,1,zt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,zt,ft.width,ft.height,0,wt,Yt,null));else if(x.isDataTexture)if(Xt.length>0){O&&pt&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,Xt[0].width,Xt[0].height);for(let dt=0,rt=Xt.length;dt<rt;dt++)Et=Xt[dt],O?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,wt,Yt,Et.data):e.texImage2D(i.TEXTURE_2D,dt,zt,Et.width,Et.height,0,wt,Yt,Et.data);x.generateMipmaps=!1}else O?(pt&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,ft.width,ft.height),vt&&Jt(x,ft,wt,Yt)):e.texImage2D(i.TEXTURE_2D,0,zt,ft.width,ft.height,0,wt,Yt,ft.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,zt,Xt[0].width,Xt[0].height,ft.depth);for(let dt=0,rt=Xt.length;dt<rt;dt++)if(Et=Xt[dt],x.format!==1023)if(wt!==null)if(O){if(vt)if(x.layerUpdates.size>0){const Ot=Jc(Et.width,Et.height,x.format,x.type);for(const te of x.layerUpdates){const ye=Et.data.subarray(te*Ot/Et.data.BYTES_PER_ELEMENT,(te+1)*Ot/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,te,Et.width,Et.height,1,wt,ye)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,ft.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,zt,Et.width,Et.height,ft.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,ft.depth,wt,Yt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,zt,Et.width,Et.height,ft.depth,0,wt,Yt,Et.data)}else{O&&pt&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,Xt[0].width,Xt[0].height);for(let dt=0,rt=Xt.length;dt<rt;dt++)Et=Xt[dt],x.format!==1023?wt!==null?O?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,wt,Yt,Et.data):e.texImage2D(i.TEXTURE_2D,dt,zt,Et.width,Et.height,0,wt,Yt,Et.data)}else if(x.isDataArrayTexture)if(O){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,zt,ft.width,ft.height,ft.depth),vt)if(x.layerUpdates.size>0){const dt=Jc(ft.width,ft.height,x.format,x.type);for(const rt of x.layerUpdates){const Ot=ft.data.subarray(rt*dt/ft.data.BYTES_PER_ELEMENT,(rt+1)*dt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ft.width,ft.height,1,wt,Yt,Ot)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,wt,Yt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ft.width,ft.height,ft.depth,0,wt,Yt,ft.data);else if(x.isData3DTexture)O?(pt&&e.texStorage3D(i.TEXTURE_3D,Lt,zt,ft.width,ft.height,ft.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,wt,Yt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ft.width,ft.height,ft.depth,0,wt,Yt,ft.data);else if(x.isFramebufferTexture){if(pt)if(O)e.texStorage2D(i.TEXTURE_2D,Lt,zt,ft.width,ft.height);else{let dt=ft.width,rt=ft.height;for(let Ot=0;Ot<Lt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,zt,dt,rt,0,wt,Yt,null),dt>>=1,rt>>=1}}else if(Xt.length>0){if(O&&pt){const dt=Wt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,zt,dt.width,dt.height)}for(let dt=0,rt=Xt.length;dt<rt;dt++)Et=Xt[dt],O?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt,Yt,Et):e.texImage2D(i.TEXTURE_2D,dt,zt,wt,Yt,Et);x.generateMipmaps=!1}else if(O){if(pt){const dt=Wt(ft);e.texStorage2D(i.TEXTURE_2D,Lt,zt,dt.width,dt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Yt,ft)}else e.texImage2D(i.TEXTURE_2D,0,zt,wt,Yt,ft);g(x)&&d(J),Bt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ot(R,x,G){if(x.image.length!==6)return;const J=ae(R,x),at=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const tt=n.get(at);if(at.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const Bt=xe.getPrimaries(xe.workingColorSpace),mt=x.colorSpace===""?null:xe.getPrimaries(x.colorSpace),Ft=x.colorSpace===""||Bt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Dt=x.isCompressedTexture||x.image[0].isCompressedTexture,ft=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let rt=0;rt<6;rt++)!Dt&&!ft?wt[rt]=M(x.image[rt],!0,r.maxCubemapSize):wt[rt]=ft?x.image[rt].image:x.image[rt],wt[rt]=Qt(x,wt[rt]);const Yt=wt[0],zt=s.convert(x.format,x.colorSpace),Et=s.convert(x.type),Xt=T(x.internalFormat,zt,Et,x.colorSpace),O=x.isVideoTexture!==!0,pt=tt.__version===void 0||J===!0,vt=at.dataReady;let Lt=P(x,Yt);qt(i.TEXTURE_CUBE_MAP,x);let dt;if(Dt){O&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Xt,Yt.width,Yt.height);for(let rt=0;rt<6;rt++){dt=wt[rt].mipmaps;for(let Ot=0;Ot<dt.length;Ot++){const te=dt[Ot];x.format!==1023?zt!==null?O?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,te.width,te.height,zt,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Xt,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,te.width,te.height,zt,Et,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Xt,te.width,te.height,0,zt,Et,te.data)}}}else{if(dt=x.mipmaps,O&&pt){dt.length>0&&Lt++;const rt=Wt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Xt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ft){O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,wt[rt].width,wt[rt].height,zt,Et,wt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,wt[rt].width,wt[rt].height,0,zt,Et,wt[rt].data);for(let Ot=0;Ot<dt.length;Ot++){const ye=dt[Ot].image[rt].image;O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,ye.width,ye.height,zt,Et,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Xt,ye.width,ye.height,0,zt,Et,ye.data)}}else{O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,zt,Et,wt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,zt,Et,wt[rt]);for(let Ot=0;Ot<dt.length;Ot++){const te=dt[Ot];O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,zt,Et,te.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Xt,zt,Et,te.image[rt])}}}g(x)&&d(i.TEXTURE_CUBE_MAP),tt.__version=at.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ct(R,x,G,J,at,tt){const Bt=s.convert(G.format,G.colorSpace),mt=s.convert(G.type),Ft=T(G.internalFormat,Bt,mt,G.colorSpace),Dt=n.get(x),ft=n.get(G);if(ft.__renderTarget=x,!Dt.__hasExternalTextures){const wt=Math.max(1,x.width>>tt),Yt=Math.max(1,x.height>>tt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Ft,wt,Yt,x.depth,0,Bt,mt,null):e.texImage2D(at,tt,Ft,wt,Yt,0,Bt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ct(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,at,ft.__webglTexture,0,yt(x)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,at,ft.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(R,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const J=x.depthTexture,at=J&&J.isDepthTexture?J.type:null,tt=v(x.stencilBuffer,at),Bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=yt(x);ct(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,tt,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,R)}else{const J=x.textures;for(let at=0;at<J.length;at++){const tt=J[at],Bt=s.convert(tt.format,tt.colorSpace),mt=s.convert(tt.type),Ft=T(tt.internalFormat,Bt,mt,tt.colorSpace),Dt=yt(x);G&&ct(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Ft,x.width,x.height):ct(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,Ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const at=J.__webglTexture,tt=yt(x);if(x.depthTexture.format===1026)ct(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(x.depthTexture.format===1027)ct(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function ee(R){const x=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const at=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",at)};J.addEventListener("dispose",at),x.__depthDisposeCallback=at}x.__boundDepthTexture=J}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=R.texture.mipmaps;J&&J.length>0?Ut(x.__webglFramebuffer[0],R):Ut(x.__webglFramebuffer,R)}else if(G){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),Gt(x.__webglDepthbuffer[J],R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Gt(x.__webglDepthbuffer,R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,x,G){const J=n.get(R);x!==void 0&&Ct(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ee(R)}function L(R){const x=R.texture,G=n.get(R),J=n.get(x);R.addEventListener("dispose",I);const at=R.textures,tt=R.isWebGLCubeRenderTarget===!0,Bt=at.length>1;if(Bt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,o.memory.textures++),tt){G.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[mt]=[];for(let Ft=0;Ft<x.mipmaps.length;Ft++)G.__webglFramebuffer[mt][Ft]=i.createFramebuffer()}else G.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let mt=0;mt<x.mipmaps.length;mt++)G.__webglFramebuffer[mt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let mt=0,Ft=at.length;mt<Ft;mt++){const Dt=n.get(at[mt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ct(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let mt=0;mt<at.length;mt++){const Ft=at[mt];G.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[mt]);const Dt=s.convert(Ft.format,Ft.colorSpace),ft=s.convert(Ft.type),wt=T(Ft.internalFormat,Dt,ft,Ft.colorSpace,R.isXRRenderTarget===!0),Yt=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,wt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,G.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),qt(i.TEXTURE_CUBE_MAP,x);for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)Ct(G.__webglFramebuffer[mt][Ft],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft);else Ct(G.__webglFramebuffer[mt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let mt=0,Ft=at.length;mt<Ft;mt++){const Dt=at[mt],ft=n.get(Dt);let wt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(wt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ft.__webglTexture),qt(wt,Dt),Ct(G.__webglFramebuffer,R,Dt,i.COLOR_ATTACHMENT0+mt,wt,0),g(Dt)&&d(wt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),qt(mt,x),x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)Ct(G.__webglFramebuffer[Ft],R,x,i.COLOR_ATTACHMENT0,mt,Ft);else Ct(G.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,mt,0);g(x)&&d(mt),e.unbindTexture()}R.depthBuffer&&ee(R)}function et(R){const x=R.textures;for(let G=0,J=x.length;G<J;G++){const at=x[G];if(g(at)){const tt=b(R),Bt=n.get(at).__webglTexture;e.bindTexture(tt,Bt),d(tt),e.unbindTexture()}}}const st=[],it=[];function nt(R){if(R.samples>0){if(ct(R)===!1){const x=R.textures,G=R.width,J=R.height;let at=i.COLOR_BUFFER_BIT;const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(R),mt=x.length>1;if(mt)for(let Dt=0;Dt<x.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Ft=R.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Dt=0;Dt<x.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Dt]);const ft=n.get(x[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,at,i.NEAREST),c===!0&&(st.length=0,it.length=0,st.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(tt),it.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Dt=0;Dt<x.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Dt]);const ft=n.get(x[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function ct(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function gt(R){const x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function Qt(R,x){const G=R.colorSpace,J=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Er&&G!==""&&(xe.getTransfer(G)===Ae?(J!==1023||at!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=ht,this.setTextureCube=$,this.rebindTextures=he,this.setupRenderTarget=L,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ct}function Yg(i,t){function e(n,r=""){let s;const o=xe.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return o===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return o===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
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

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Du(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new cn({vertexShader:Zg,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends Ar{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,p=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",g=new $g,d={},b=e.getContextAttributes();let T=null,v=null;const P=[],A=[],I=new xt;let F=null;const E=new bn;E.viewport=new be;const S=new bn;S.viewport=new be;const U=[E,S],H=new _d;let X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=P[Q];return ot===void 0&&(ot=new Ia,P[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=P[Q];return ot===void 0&&(ot=new Ia,P[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=P[Q];return ot===void 0&&(ot=new Ia,P[Q]=ot),ot.getHandSpace()};function j(Q){const ot=A.indexOf(Q.inputSource);if(ot===-1)return;const Ct=P[ot];Ct!==void 0&&(Ct.update(Q.inputSource,Q.frame,l||o),Ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<P.length;Q++){const ot=A[Q];ot!==null&&(A[Q]=null,P[Q].disconnect(ot))}X=null,K=null,g.reset();for(const Q in d)delete d[Q];t.setRenderTarget(T),m=null,p=null,h=null,r=null,v=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",q),r.addEventListener("inputsourceschange",ht),b.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Gt=null,Ut=null;b.depth&&(Ut=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=b.stencil?1027:1026,Gt=b.stencil?1020:1014);const ee={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(ee),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new li(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new Pu(p.textureWidth,p.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Ct),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new li(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Jt.setContext(r),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ht(Q){for(let ot=0;ot<Q.removed.length;ot++){const Ct=Q.removed[ot],Gt=A.indexOf(Ct);Gt>=0&&(A[Gt]=null,P[Gt].disconnect(Ct))}for(let ot=0;ot<Q.added.length;ot++){const Ct=Q.added[ot];let Gt=A.indexOf(Ct);if(Gt===-1){for(let ee=0;ee<P.length;ee++)if(ee>=A.length){A.push(Ct),Gt=ee;break}else if(A[ee]===null){A[ee]=Ct,Gt=ee;break}if(Gt===-1)break}const Ut=P[Gt];Ut&&Ut.connect(Ct)}}const $=new C,St=new C;function Mt(Q,ot,Ct){$.setFromMatrixPosition(ot.matrixWorld),St.setFromMatrixPosition(Ct.matrixWorld);const Gt=$.distanceTo(St),Ut=ot.projectionMatrix.elements,ee=Ct.projectionMatrix.elements,he=Ut[14]/(Ut[10]-1),L=Ut[14]/(Ut[10]+1),et=(Ut[9]+1)/Ut[5],st=(Ut[9]-1)/Ut[5],it=(Ut[8]-1)/Ut[0],nt=(ee[8]+1)/ee[0],yt=he*it,ct=he*nt,gt=Gt/(-it+nt),Qt=gt*-it;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qt),Q.translateZ(gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ut[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Wt=he+gt,R=L+gt,x=yt-Qt,G=ct+(Gt-Qt),J=et*L/R*Wt,at=st*L/R*Wt;Q.projectionMatrix.makePerspective(x,G,J,at,Wt,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Rt(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ot=Q.near,Ct=Q.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(Ct=g.depthFar)),H.near=S.near=E.near=ot,H.far=S.far=E.far=Ct,(X!==H.near||K!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),X=H.near,K=H.far),H.layers.mask=Q.layers.mask|6,E.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;const Gt=Q.parent,Ut=H.cameras;Rt(H,Gt);for(let ee=0;ee<Ut.length;ee++)Rt(Ut[ee],Gt);Ut.length===2?Mt(H,E,S):H.projectionMatrix.copy(E.projectionMatrix),qt(Q,H,Gt)};function qt(Q,ot,Ct){Ct===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(Ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(Q){c=Q,p!==null&&(p.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Q){return d[Q]};let ae=null;function _e(Q,ot){if(u=ot.getViewerPose(l||o),_=ot,u!==null){const Ct=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let Gt=!1;Ct.length!==H.cameras.length&&(H.cameras.length=0,Gt=!0);for(let L=0;L<Ct.length;L++){const et=Ct[L];let st=null;if(m!==null)st=m.getViewport(et);else{const nt=h.getViewSubImage(p,et);st=nt.viewport,L===0&&(t.setRenderTargetTextures(v,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(v))}let it=U[L];it===void 0&&(it=new bn,it.layers.enable(L),it.viewport=new be,U[L]=it),it.matrix.fromArray(et.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(et.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(st.x,st.y,st.width,st.height),L===0&&(H.matrix.copy(it.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Gt===!0&&H.cameras.push(it)}const Ut=r.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=n.getBinding();const L=h.getDepthInformation(Ct[0]);L&&L.isValid&&L.texture&&g.init(L,r.renderState)}if(Ut&&Ut.includes("camera-access")&&M){t.state.unbindTexture(),h=n.getBinding();for(let L=0;L<Ct.length;L++){const et=Ct[L].camera;if(et){let st=d[et];st||(st=new Du,d[et]=st);const it=h.getCameraImage(et);st.sourceTexture=it}}}}for(let Ct=0;Ct<P.length;Ct++){const Gt=A[Ct],Ut=P[Ct];Gt!==null&&Ut!==void 0&&Ut.update(Gt,ot,l||o)}ae&&ae(Q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),_=null}const Jt=new ku;Jt.setAnimationLoop(_e),this.setAnimationLoop=function(Q){ae=Q},this.dispose=function(){}}}const wi=new Vn,jg=new Se;function Qg(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Au(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,b,T,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,v)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,b,T):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===1&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===1&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const b=t.get(d),T=b.envMap,v=b.envMapRotation;T&&(g.envMap.value=T,wi.copy(v),wi.x*=-1,wi.y*=-1,wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),g.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(wi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,b,T){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=T*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const b=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function t_(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const v=T.program;n.uniformBlockBinding(b,v)}function l(b,T){let v=r[b.id];v===void 0&&(_(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",g));const P=T.program;n.updateUBOMapping(b,P);const A=t.render.frame;s[b.id]!==A&&(p(b),s[b.id]=A)}function u(b){const T=h();b.__bindingPointIndex=T;const v=i.createBuffer(),P=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const T=r[b.id],v=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,I=v.length;A<I;A++){const F=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,S=F.length;E<S;E++){const U=F[E];if(m(U,A,E,P)===!0){const H=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let j=0;j<X.length;j++){const q=X[j],ht=M(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+K,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,K),K+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,v,P){const A=b.value,I=T+"_"+v;if(P[I]===void 0)return typeof A=="number"||typeof A=="boolean"?P[I]=A:P[I]=A.clone(),!0;{const F=P[I];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return P[I]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function _(b){const T=b.uniforms;let v=0;const P=16;for(let I=0,F=T.length;I<F;I++){const E=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,U=E.length;S<U;S++){const H=E[S],X=Array.isArray(H.value)?H.value:[H.value];for(let K=0,j=X.length;K<j;K++){const q=X[K],ht=M(q),$=v%P,St=$%ht.boundary,Mt=$+St;v+=St,Mt!==0&&P-Mt<ht.storage&&(v+=P-Mt),H.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=ht.storage}}}const A=v%P;return A>0&&(v+=P-A),b.__size=v,b.__cache={},this}function M(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function g(b){const T=b.target;T.removeEventListener("dispose",g);const v=o.indexOf(T.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class e_{constructor(t={}){const{canvas:e=Qh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),M=new Int32Array(4);let g=null,d=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let P=!1;this._outputColorSpace=gn;let A=0,I=0,F=null,E=-1,S=null;const U=new be,H=new be;let X=null;const K=new jt(0);let j=0,q=e.width,ht=e.height,$=1,St=null,Mt=null;const Rt=new be(0,0,q,ht),qt=new be(0,0,q,ht);let ae=!1;const _e=new ol;let Jt=!1,Q=!1;const ot=new Se,Ct=new C,Gt=new be,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function he(){return F===null?$:1}let L=n;function et(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){const B="webgl2";if(L=et(B,w),L===null)throw et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,it,nt,yt,ct,gt,Qt,Wt,R,x,G,J,at,tt,Bt,mt,Ft,Dt,ft,wt,Yt,zt,Et,Xt;function O(){st=new h0(L),st.init(),zt=new Yg(L,st),it=new r0(L,st,t,zt),nt=new Xg(L,st),it.reversedDepthBuffer&&p&&nt.buffers.depth.setReversed(!0),yt=new p0(L),ct=new Lg,gt=new qg(L,st,nt,ct,it,zt,yt),Qt=new o0(v),Wt=new u0(v),R=new Md(L),Et=new n0(L,R),x=new f0(L,R,yt,Et),G=new g0(L,x,R,yt),ft=new m0(L,it,gt),mt=new s0(ct),J=new Dg(v,Qt,Wt,st,it,Et,mt),at=new Qg(v,ct),tt=new Ug,Bt=new Gg(st),Dt=new e0(v,Qt,Wt,nt,G,m,c),Ft=new Vg(v,G,it),Xt=new t_(L,yt,it,nt),wt=new i0(L,st,yt),Yt=new d0(L,st,yt),yt.programs=J.programs,v.capabilities=it,v.extensions=st,v.properties=ct,v.renderLists=tt,v.shadowMap=Ft,v.state=nt,v.info=yt}O();const pt=new Kg(v,L);this.xr=pt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(q,ht,!1))},this.getSize=function(w){return w.set(q,ht)},this.setSize=function(w,B,V=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ht=B,e.width=Math.floor(w*$),e.height=Math.floor(B*$),V===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(q*$,ht*$).floor()},this.setDrawingBufferSize=function(w,B,V){q=w,ht=B,$=V,e.width=Math.floor(w*V),e.height=Math.floor(B*V),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,B,V,Y){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,B,V,Y),nt.viewport(U.copy(Rt).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,B,V,Y){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,B,V,Y),nt.scissor(H.copy(qt).multiplyScalar($).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){nt.setScissorTest(ae=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,V=!0){let Y=0;if(w){let z=!1;if(F!==null){const lt=F.texture.format;z=lt===1033||lt===1031||lt===1029}if(z){const lt=F.texture.type,Tt=lt===1009||lt===1014||lt===1012||lt===1020||lt===1017||lt===1018,It=Dt.getClearColor(),Pt=Dt.getClearAlpha(),kt=It.r,$t=It.g,Ht=It.b;Tt?(_[0]=kt,_[1]=$t,_[2]=Ht,_[3]=Pt,L.clearBufferuiv(L.COLOR,0,_)):(M[0]=kt,M[1]=$t,M[2]=Ht,M[3]=Pt,L.clearBufferiv(L.COLOR,0,M))}else Y|=L.COLOR_BUFFER_BIT}B&&(Y|=L.DEPTH_BUFFER_BIT),V&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Dt.dispose(),tt.dispose(),Bt.dispose(),ct.dispose(),Qt.dispose(),Wt.dispose(),G.dispose(),Et.dispose(),Xt.dispose(),J.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",_n),pt.removeEventListener("sessionend",ps),yn.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=yt.autoReset,B=Ft.enabled,V=Ft.autoUpdate,Y=Ft.needsUpdate,z=Ft.type;O(),yt.autoReset=w,Ft.enabled=B,Ft.autoUpdate=V,Ft.needsUpdate=Y,Ft.type=z}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const B=w.target;B.removeEventListener("dispose",rt),Ot(B)}function Ot(w){te(w),ct.remove(w)}function te(w){const B=ct.get(w).programs;B!==void 0&&(B.forEach(function(V){J.releaseProgram(V)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,V,Y,z,lt){B===null&&(B=Ut);const Tt=z.isMesh&&z.matrixWorld.determinant()<0,It=gs(w,B,V,Y,z);nt.setMaterial(Y,Tt);let Pt=V.index,kt=1;if(Y.wireframe===!0){if(Pt=x.getWireframeAttribute(V),Pt===void 0)return;kt=2}const $t=V.drawRange,Ht=V.attributes.position;let se=$t.start*kt,me=($t.start+$t.count)*kt;lt!==null&&(se=Math.max(se,lt.start*kt),me=Math.min(me,(lt.start+lt.count)*kt)),Pt!==null?(se=Math.max(se,0),me=Math.min(me,Pt.count)):Ht!=null&&(se=Math.max(se,0),me=Math.min(me,Ht.count));const Ee=me-se;if(Ee<0||Ee===1/0)return;Et.setup(z,Y,It,V,Pt);let ve,ge=wt;if(Pt!==null&&(ve=R.get(Pt),ge=Yt,ge.setIndex(ve)),z.isMesh)Y.wireframe===!0?(nt.setLineWidth(Y.wireframeLinewidth*he()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(z.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),nt.setLineWidth(Vt*he()),z.isLineSegments?ge.setMode(L.LINES):z.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else z.isPoints?ge.setMode(L.POINTS):z.isSprite&&ge.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ge.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Vt=z._multiDrawStarts,Pe=z._multiDrawCounts,ue=z._multiDrawCount,sn=Pt?R.get(Pt).bytesPerElement:1,En=ct.get(Y).currentProgram.getUniforms();for(let We=0;We<ue;We++)En.setValue(L,"_gl_DrawID",We),ge.render(Vt[We]/sn,Pe[We])}else if(z.isInstancedMesh)ge.renderInstances(se,Ee,z.count);else if(V.isInstancedBufferGeometry){const Vt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pe=Math.min(V.instanceCount,Vt);ge.renderInstances(se,Ee,Pe)}else ge.render(se,Ee)};function ye(w,B,V){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,Ni(w,B,V),w.side=0,w.needsUpdate=!0,Ni(w,B,V),w.side=2):Ni(w,B,V)}this.compile=function(w,B,V=null){V===null&&(V=w),d=Bt.get(V),d.init(B),T.push(d),V.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),w!==V&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const Y=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const lt=z.material;if(lt)if(Array.isArray(lt))for(let Tt=0;Tt<lt.length;Tt++){const It=lt[Tt];ye(It,V,z),Y.add(It)}else ye(lt,V,z),Y.add(lt)}),d=T.pop(),Y},this.compileAsync=function(w,B,V=null){const Y=this.compile(w,B,V);return new Promise(z=>{function lt(){if(Y.forEach(function(Tt){ct.get(Tt).currentProgram.isReady()&&Y.delete(Tt)}),Y.size===0){z(w);return}setTimeout(lt,10)}st.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let de=null;function Sn(w){de&&de(w)}function _n(){yn.stop()}function ps(){yn.start()}const yn=new ku;yn.setAnimationLoop(Sn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(w){de=w,pt.setAnimationLoop(w),w===null?yn.stop():yn.start()},pt.addEventListener("sessionstart",_n),pt.addEventListener("sessionend",ps),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(B),B=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,F),d=Bt.get(w,T.length),d.init(B),T.push(d),ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),_e.setFromProjectionMatrix(ot,2e3,B.reversedDepth),Q=this.localClippingEnabled,Jt=mt.init(this.clippingPlanes,Q),g=tt.get(w,b.length),g.init(),b.push(g),pt.enabled===!0&&pt.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&On(lt,B,-1/0,v.sortObjects)}On(w,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(St,Mt),ee=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,ee&&Dt.addToRenderList(g,w),this.info.render.frame++,Jt===!0&&mt.beginShadows();const V=d.state.shadowsArray;Ft.render(V,w,B),Jt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,z=g.transmissive;if(d.setupLights(),B.isArrayCamera){const lt=B.cameras;if(z.length>0)for(let Tt=0,It=lt.length;Tt<It;Tt++){const Pt=lt[Tt];Bn(Y,z,w,Pt)}ee&&Dt.render(w);for(let Tt=0,It=lt.length;Tt<It;Tt++){const Pt=lt[Tt];Fi(g,w,Pt,Pt.viewport)}}else z.length>0&&Bn(Y,z,w,B),ee&&Dt.render(w),Fi(g,w,B);F!==null&&I===0&&(gt.updateMultisampleRenderTarget(F),gt.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(v,w,B),Et.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(d=T[T.length-1],Jt===!0&&mt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function On(w,B,V,Y){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_e.intersectsSprite(w)){Y&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const Tt=G.update(w),It=w.material;It.visible&&g.push(w,Tt,It,V,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_e.intersectsObject(w))){const Tt=G.update(w),It=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Gt.copy(Tt.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(It)){const Pt=Tt.groups;for(let kt=0,$t=Pt.length;kt<$t;kt++){const Ht=Pt[kt],se=It[Ht.materialIndex];se&&se.visible&&g.push(w,Tt,se,V,Gt.z,Ht)}}else It.visible&&g.push(w,Tt,It,V,Gt.z,null)}}const lt=w.children;for(let Tt=0,It=lt.length;Tt<It;Tt++)On(lt[Tt],B,V,Y)}function Fi(w,B,V,Y){const z=w.opaque,lt=w.transmissive,Tt=w.transparent;d.setupLightsView(V),Jt===!0&&mt.setGlobalState(v.clippingPlanes,V),Y&&nt.viewport(U.copy(Y)),z.length>0&&ui(z,B,V),lt.length>0&&ui(lt,B,V),Tt.length>0&&ui(Tt,B,V),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Bn(w,B,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new li(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const lt=d.state.transmissionRenderTarget[Y.id],Tt=Y.viewport||U;lt.setSize(Tt.z*v.transmissionResolutionScale,Tt.w*v.transmissionResolutionScale);const It=v.getRenderTarget(),Pt=v.getActiveCubeFace(),kt=v.getActiveMipmapLevel();v.setRenderTarget(lt),v.getClearColor(K),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Dt.render(V);const $t=v.toneMapping;v.toneMapping=0;const Ht=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),Jt===!0&&mt.setGlobalState(v.clippingPlanes,Y),ui(w,V,Y),gt.updateMultisampleRenderTarget(lt),gt.updateRenderTargetMipmap(lt),st.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let me=0,Ee=B.length;me<Ee;me++){const ve=B[me],ge=ve.object,Vt=ve.geometry,Pe=ve.material,ue=ve.group;if(Pe.side===2&&ge.layers.test(Y.layers)){const sn=Pe.side;Pe.side=1,Pe.needsUpdate=!0,ms(ge,V,Y,Vt,Pe,ue),Pe.side=sn,Pe.needsUpdate=!0,se=!0}}se===!0&&(gt.updateMultisampleRenderTarget(lt),gt.updateRenderTargetMipmap(lt))}v.setRenderTarget(It,Pt,kt),v.setClearColor(K,j),Ht!==void 0&&(Y.viewport=Ht),v.toneMapping=$t}function ui(w,B,V){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,lt=w.length;z<lt;z++){const Tt=w[z],It=Tt.object,Pt=Tt.geometry,kt=Tt.group;let $t=Tt.material;$t.allowOverride===!0&&Y!==null&&($t=Y),It.layers.test(V.layers)&&ms(It,B,V,Pt,$t,kt)}}function ms(w,B,V,Y,z,lt){w.onBeforeRender(v,B,V,Y,z,lt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,B,V,Y,w,lt),z.transparent===!0&&z.side===2&&z.forceSinglePass===!1?(z.side=1,z.needsUpdate=!0,v.renderBufferDirect(V,B,Y,z,w,lt),z.side=0,z.needsUpdate=!0,v.renderBufferDirect(V,B,Y,z,w,lt),z.side=2):v.renderBufferDirect(V,B,Y,z,w,lt),w.onAfterRender(v,B,V,Y,z,lt)}function Ni(w,B,V){B.isScene!==!0&&(B=Ut);const Y=ct.get(w),z=d.state.lights,lt=d.state.shadowsArray,Tt=z.state.version,It=J.getParameters(w,z.state,lt,B,V),Pt=J.getProgramCacheKey(It);let kt=Y.programs;Y.environment=w.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(w.isMeshStandardMaterial?Wt:Qt).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",rt),kt=new Map,Y.programs=kt);let $t=kt.get(Pt);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===Tt)return Bi(w,It),$t}else It.uniforms=J.getUniforms(w),w.onBeforeCompile(It,v),$t=J.acquireProgram(It,Pt),kt.set(Pt,$t),Y.uniforms=It.uniforms;const Ht=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=mt.uniform),Bi(w,It),Y.needsLights=Uo(w),Y.lightsStateVersion=Tt,Y.needsLights&&(Ht.ambientLightColor.value=z.state.ambient,Ht.lightProbe.value=z.state.probe,Ht.directionalLights.value=z.state.directional,Ht.directionalLightShadows.value=z.state.directionalShadow,Ht.spotLights.value=z.state.spot,Ht.spotLightShadows.value=z.state.spotShadow,Ht.rectAreaLights.value=z.state.rectArea,Ht.ltc_1.value=z.state.rectAreaLTC1,Ht.ltc_2.value=z.state.rectAreaLTC2,Ht.pointLights.value=z.state.point,Ht.pointLightShadows.value=z.state.pointShadow,Ht.hemisphereLights.value=z.state.hemi,Ht.directionalShadowMap.value=z.state.directionalShadowMap,Ht.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ht.spotShadowMap.value=z.state.spotShadowMap,Ht.spotLightMatrix.value=z.state.spotLightMatrix,Ht.spotLightMap.value=z.state.spotLightMap,Ht.pointShadowMap.value=z.state.pointShadowMap,Ht.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=$t,Y.uniformsList=null,$t}function Oi(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=wo.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Bi(w,B){const V=ct.get(w);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function gs(w,B,V,Y,z){B.isScene!==!0&&(B=Ut),gt.resetTextureUnits();const lt=B.fog,Tt=Y.isMeshStandardMaterial?B.environment:null,It=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Er,Pt=(Y.isMeshStandardMaterial?Wt:Qt).get(Y.envMap||Tt),kt=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$t=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,me=!!V.morphAttributes.color;let Ee=0;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ge=ve!==void 0?ve.length:0,Vt=ct.get(Y),Pe=d.state.lights;if(Jt===!0&&(Q===!0||w!==S)){const Fe=w===S&&Y.id===E;mt.setState(Y,w,Fe)}let ue=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Pe.state.version||Vt.outputColorSpace!==It||z.isBatchedMesh&&Vt.batching===!1||!z.isBatchedMesh&&Vt.batching===!0||z.isBatchedMesh&&Vt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Vt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Vt.instancing===!1||!z.isInstancedMesh&&Vt.instancing===!0||z.isSkinnedMesh&&Vt.skinning===!1||!z.isSkinnedMesh&&Vt.skinning===!0||z.isInstancedMesh&&Vt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Vt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Vt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Vt.instancingMorph===!1&&z.morphTexture!==null||Vt.envMap!==Pt||Y.fog===!0&&Vt.fog!==lt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==kt||Vt.vertexTangents!==$t||Vt.morphTargets!==Ht||Vt.morphNormals!==se||Vt.morphColors!==me||Vt.toneMapping!==Ee||Vt.morphTargetsCount!==ge)&&(ue=!0):(ue=!0,Vt.__version=Y.version);let sn=Vt.currentProgram;ue===!0&&(sn=Ni(Y,B,z));let En=!1,We=!1,jn=!1;const Te=sn.getUniforms(),Ue=Vt.uniforms;if(nt.useProgram(sn.program)&&(En=!0,We=!0,jn=!0),Y.id!==E&&(E=Y.id,We=!0),En||S!==w){nt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Te.setValue(L,"projectionMatrix",w.projectionMatrix),Te.setValue(L,"viewMatrix",w.matrixWorldInverse);const je=Te.map.cameraPosition;je!==void 0&&je.setValue(L,Ct.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&Te.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Te.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,We=!0,jn=!0)}if(z.isSkinnedMesh){Te.setOptional(L,z,"bindMatrix"),Te.setOptional(L,z,"bindMatrixInverse");const Fe=z.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Te.setValue(L,"boneTexture",Fe.boneTexture,gt))}z.isBatchedMesh&&(Te.setOptional(L,z,"batchingTexture"),Te.setValue(L,"batchingTexture",z._matricesTexture,gt),Te.setOptional(L,z,"batchingIdTexture"),Te.setValue(L,"batchingIdTexture",z._indirectTexture,gt),Te.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Te.setValue(L,"batchingColorTexture",z._colorsTexture,gt));const Re=V.morphAttributes;if((Re.position!==void 0||Re.normal!==void 0||Re.color!==void 0)&&ft.update(z,V,sn),(We||Vt.receiveShadow!==z.receiveShadow)&&(Vt.receiveShadow=z.receiveShadow,Te.setValue(L,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ue.envMap.value=Pt,Ue.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Ue.envMapIntensity.value=B.environmentIntensity),We&&(Te.setValue(L,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Cr(Ue,jn),lt&&Y.fog===!0&&at.refreshFogUniforms(Ue,lt),at.refreshMaterialUniforms(Ue,Y,$,ht,d.state.transmissionRenderTarget[w.id]),wo.upload(L,Oi(Vt),Ue,gt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wo.upload(L,Oi(Vt),Ue,gt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Te.setValue(L,"center",z.center),Te.setValue(L,"modelViewMatrix",z.modelViewMatrix),Te.setValue(L,"normalMatrix",z.normalMatrix),Te.setValue(L,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Fe=Y.uniformsGroups;for(let je=0,Gi=Fe.length;je<Gi;je++){const un=Fe[je];Xt.update(un,sn),Xt.bind(un,sn)}}return sn}function Cr(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Uo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,B,V){const Y=ct.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ct.get(w.texture).__webglTexture=B,ct.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:V,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const V=ct.get(w);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0};const zi=L.createFramebuffer();this.setRenderTarget=function(w,B=0,V=0){F=w,A=B,I=V;let Y=!0,z=null,lt=!1,Tt=!1;if(w){const Pt=ct.get(w);if(Pt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Pt.__webglFramebuffer===void 0)gt.setupRenderTarget(w);else if(Pt.__hasExternalTextures)gt.rebindTextures(w,ct.get(w.texture).__webglTexture,ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ht=w.depthTexture;if(Pt.__boundDepthTexture!==Ht){if(Ht!==null&&ct.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(w)}}const kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Tt=!0);const $t=ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[B])?z=$t[B][V]:z=$t[B],lt=!0):w.samples>0&&gt.useMultisampledRTT(w)===!1?z=ct.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?z=$t[V]:z=$t,U.copy(w.viewport),H.copy(w.scissor),X=w.scissorTest}else U.copy(Rt).multiplyScalar($).floor(),H.copy(qt).multiplyScalar($).floor(),X=ae;if(V!==0&&(z=zi),nt.bindFramebuffer(L.FRAMEBUFFER,z)&&Y&&nt.drawBuffers(w,z),nt.viewport(U),nt.scissor(H),nt.setScissorTest(X),lt){const Pt=ct.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,V)}else if(Tt){const Pt=B;for(let kt=0;kt<w.textures.length;kt++){const $t=ct.get(w.textures[kt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+kt,$t.__webglTexture,V,Pt)}}else if(w!==null&&V!==0){const Pt=ct.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(w,B,V,Y,z,lt,Tt,It=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){nt.bindFramebuffer(L.FRAMEBUFFER,Pt);try{const kt=w.textures[It],$t=kt.format,Ht=kt.type;if(!it.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Y&&V>=0&&V<=w.height-z&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+It),L.readPixels(B,V,Y,z,zt.convert($t),zt.convert(Ht),lt))}finally{const kt=F!==null?ct.get(F).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(w,B,V,Y,z,lt,Tt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(B>=0&&B<=w.width-Y&&V>=0&&V<=w.height-z){nt.bindFramebuffer(L.FRAMEBUFFER,Pt);const kt=w.textures[It],$t=kt.format,Ht=kt.type;if(!it.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.bufferData(L.PIXEL_PACK_BUFFER,lt.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+It),L.readPixels(B,V,Y,z,zt.convert($t),zt.convert(Ht),0);const me=F!==null?ct.get(F).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,me);const Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await tf(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,lt),L.deleteBuffer(se),L.deleteSync(Ee),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,V=0){const Y=Math.pow(2,-V),z=Math.floor(w.image.width*Y),lt=Math.floor(w.image.height*Y),Tt=B!==null?B.x:0,It=B!==null?B.y:0;gt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,Tt,It,z,lt),nt.unbindTexture()};const _s=L.createFramebuffer(),Fo=L.createFramebuffer();this.copyTextureToTexture=function(w,B,V=null,Y=null,z=0,lt=null){lt===null&&(z!==0?(us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=z,z=0):lt=0);let Tt,It,Pt,kt,$t,Ht,se,me,Ee;const ve=w.isCompressedTexture?w.mipmaps[lt]:w.image;if(V!==null)Tt=V.max.x-V.min.x,It=V.max.y-V.min.y,Pt=V.isBox3?V.max.z-V.min.z:1,kt=V.min.x,$t=V.min.y,Ht=V.isBox3?V.min.z:0;else{const Re=Math.pow(2,-z);Tt=Math.floor(ve.width*Re),It=Math.floor(ve.height*Re),w.isDataArrayTexture?Pt=ve.depth:w.isData3DTexture?Pt=Math.floor(ve.depth*Re):Pt=1,kt=0,$t=0,Ht=0}Y!==null?(se=Y.x,me=Y.y,Ee=Y.z):(se=0,me=0,Ee=0);const ge=zt.convert(B.format),Vt=zt.convert(B.type);let Pe;B.isData3DTexture?(gt.setTexture3D(B,0),Pe=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(gt.setTexture2DArray(B,0),Pe=L.TEXTURE_2D_ARRAY):(gt.setTexture2D(B,0),Pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const ue=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),En=L.getParameter(L.UNPACK_SKIP_PIXELS),We=L.getParameter(L.UNPACK_SKIP_ROWS),jn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const Te=w.isDataArrayTexture||w.isData3DTexture,Ue=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const Re=ct.get(w),Fe=ct.get(B),je=ct.get(Re.__renderTarget),Gi=ct.get(Fe.__renderTarget);nt.bindFramebuffer(L.READ_FRAMEBUFFER,je.__webglFramebuffer),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let un=0;un<Pt;un++)Te&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ct.get(w).__webglTexture,z,Ht+un),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ct.get(B).__webglTexture,lt,Ee+un)),L.blitFramebuffer(kt,$t,Tt,It,se,me,Tt,It,L.DEPTH_BUFFER_BIT,L.NEAREST);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||ct.has(w)){const Re=ct.get(w),Fe=ct.get(B);nt.bindFramebuffer(L.READ_FRAMEBUFFER,_s),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fo);for(let je=0;je<Pt;je++)Te?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,z,Ht+je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,z),Ue?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,lt,Ee+je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,lt),z!==0?L.blitFramebuffer(kt,$t,Tt,It,se,me,Tt,It,L.COLOR_BUFFER_BIT,L.NEAREST):Ue?L.copyTexSubImage3D(Pe,lt,se,me,Ee+je,kt,$t,Tt,It):L.copyTexSubImage2D(Pe,lt,se,me,kt,$t,Tt,It);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ue?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Pe,lt,se,me,Ee,Tt,It,Pt,ge,Vt,ve.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,lt,se,me,Ee,Tt,It,Pt,ge,ve.data):L.texSubImage3D(Pe,lt,se,me,Ee,Tt,It,Pt,ge,Vt,ve):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,lt,se,me,Tt,It,ge,Vt,ve.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,lt,se,me,ve.width,ve.height,ge,ve.data):L.texSubImage2D(L.TEXTURE_2D,lt,se,me,Tt,It,ge,Vt,ve);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,En),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jn),lt===0&&B.generateMipmaps&&L.generateMipmap(Pe),nt.unbindTexture()},this.initRenderTarget=function(w){ct.get(w).__webglFramebuffer===void 0&&gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?gt.setTextureCube(w,0):w.isData3DTexture?gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?gt.setTexture2DArray(w,0):gt.setTexture2D(w,0),nt.unbindTexture()},this.resetState=function(){A=0,I=0,F=null,nt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}function Ai(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Me;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let p=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(t){let m;if(e)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,u),l+=m}}if(e){let u=0;const h=[];for(let p=0;p<i.length;++p){const m=i[p].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+u);u+=i[p].attributes.position.count}c.setIndex(h)}for(const u in s){const h=Mu(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<h;++p){const m=[];for(let M=0;M<o[u].length;++M)m.push(o[u][M][p]);const _=Mu(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}return c}function Mu(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new Cn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let p=0,m=u.count;p<m;p++)for(let _=0;_<e;_++){const M=u.getComponent(p,_);a.setComponent(p+h,_,M)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}async function dr(){const i=globalThis.scheduler;i?.yield?await i.yield():await new Promise(t=>setTimeout(t,0))}function is(i){const t=performance.now();return performance.mark(`notebook:${i}:start`),()=>{performance.measure(`notebook:${i}`,{start:t,end:performance.now()}),performance.mark(`notebook:${i}:end`)}}const pn=(i,t,e)=>mr.smoothstep(e,i,t),Ce=mr.lerp;function Za(i,t){i.opacity=t;const e=t<.995;i.transparent!==e&&(i.transparent=e,i.needsUpdate=!0),i.depthWrite=t>.92,i.visible=t>.003}let Ao=73;function Zt(){return Ao=Ao*16807%2147483647,(Ao-1)/2147483646}async function n_(i,t,e="full"){const n=is("scene-construction");let r=is("construction:renderer");const s=async f=>{r(),await dr(),r=is(`construction:${f}`)};Ao=73;const o=new Af,a=new e_({alpha:!0,antialias:!0,powerPreference:"low-power"});a.debug.checkShaderErrors=!0,a.setPixelRatio(Math.min(devicePixelRatio,e==="low"?1.25:1.6)),i.dataset.quality=e,a.setClearColor(16448504,0),a.shadowMap.enabled=!0,a.shadowMap.type=2,a.toneMapping=4,a.toneMappingExposure=1.2,a.domElement.setAttribute("aria-hidden","true"),i.appendChild(a.domElement);const c=new hl(-10,10,10,-10,.1,100),l=new fe;o.add(l);const u=new pd(16251903,8622195,2.5);o.add(u);const h=new qc(16773076,3.3);h.position.set(-6,15,8),h.castShadow=!0,h.shadow.mapSize.set(e==="low"?1024:2048,e==="low"?1024:2048),h.shadow.camera.left=-12,h.shadow.camera.right=12,h.shadow.camera.top=12,h.shadow.camera.bottom=-12,h.shadow.normalBias=.025,h.shadow.bias=-15e-5,h.shadow.radius=4,h.shadow.camera.far=50,o.add(h);const p=new qc(14084351,.7);p.position.set(8,6,-6),o.add(p);const m=new hd({opacity:0}),_=new bt(new mn(80,80),m);_.rotation.x=-Math.PI/2,_.position.y=-.27,_.receiveShadow=!0,o.add(_);const M={stone:15130055,light:15854039,trim:13220512,wood:11041102,dark:5007457,soil:7237712,leaf:8493395,leafLight:10926448,leafDark:5141841,grass:10663810,flower:15185763,coral:13533797,glass:10996417,ochre:15185763,terracotta:13533797},g=new Map,d=[],b=["leaf","leafLight","leafDark","grass","flower","coral"],T=new Oe,v=(f,y=0)=>{const D=Math.sin(f*127.1+y*311.7)*43758.5453;return D-Math.floor(D)};function P(f,y,D,N,W,k=[0,0,0],Z=!0){T.position.set(y,D,N),T.rotation.set(...k),T.scale.set(1,1,1),T.updateMatrix(),f.applyMatrix4(T.matrix),Z&&d.push(new _o(f,26));const ut=f.index?f.toNonIndexed():f;ut!==f&&f.dispose(),g.has(W)||g.set(W,[]),g.get(W).push(ut)}function A(f,y,D,N,W,k,Z="stone",ut=!0){P(new pe(N,W,k),f,y,D,Z,[0,0,0],ut)}function I(f,y,D,N,W,k="stone",Z=N,ut=!0){P(new Ke(Z,N,W,12),f,y,D,k,[0,0,0],ut)}function F(f,y,D,N="wood",W=!0){const k=y.clone().sub(f),Z=new Ke(D*.68,D,k.length(),7);Z.applyQuaternion(new br().setFromUnitVectors(new C(0,1,0),k.normalize()));const ut=f.clone().add(y).multiplyScalar(.5);P(Z,ut.x,ut.y,ut.z,N,[0,0,0],W)}function E(f,y,D,N,W="x"){const k=Math.ceil(N/.5);for(let Z=0;Z<=k;Z++){const ut=-N/2+N*Z/k;A(f+(W==="x"?ut:0),y+.28,D+(W==="z"?ut:0),.035,.55,.035,"dark")}A(f,y+.56,D,W==="x"?N:.045,.045,W==="z"?N:.045,"wood")}function S(f,y,D,N,W){A(f,y+.13,D,N,.26,W,"light"),A(f,y+.27,D,N-.1,.035,W-.1,"soil",!1);for(let k=0;k<Math.ceil(N*W*11);k++){const Z=f+(Zt()-.5)*(N-.14),ut=D+(Zt()-.5)*(W-.14);P(new ln(.1+Zt()*.12,0),Z,y+.34+Zt()*.09,ut,Zt()>.5?"leaf":"leafLight",[Zt(),Zt(),0],!1)}}function U(f,y,D,N){F(new C(f,y,D),new C(f+.05*N,y+N*1.05,D),N*.055);for(let W=0;W<5;W++){const k=W*2.4,Z=Math.cos(k)*N*.35,ut=Math.sin(k)*N*.35;F(new C(f,y+N*.55,D),new C(f+Z,y+N*(1.02+W*.04),D+ut),N*.023)}for(let W=0;W<14;W++){const k=W*2.4,Z=N*(.12+Zt()*.38),ut=f+Math.cos(k)*Z,_t=D+Math.sin(k)*Z,Nt=y+N*(1.02+Zt()*.43),Kt=new ln(N*(.25+Zt()*.16),1);Kt.scale(1,.75+Zt()*.35,1),P(Kt,ut,Nt,_t,["leaf","leafLight","leafDark"][W%3],[Zt(),Zt(),Zt()],!1)}for(let W=0;W<3;W++){const k=[];for(let Nt=0;Nt<=30;Nt++){const Kt=Nt/30*Math.PI*2,ne=N*(.47+Math.sin(Kt*7+W)*.03);k.push(new C(f+Math.cos(Kt)*ne,y+N*1.2+Math.sin(Kt)*ne*(W===2?.5:1),D+(W-1)*N*.18))}const Z=new Me().setFromPoints(k),ut=Z.getAttribute("position"),_t=[];for(let Nt=0;Nt<ut.count-1;Nt++)_t.push(ut.getX(Nt),ut.getY(Nt),ut.getZ(Nt),ut.getX(Nt+1),ut.getY(Nt+1),ut.getZ(Nt+1));d.push(new Me().setAttribute("position",new le(_t,3))),Z.dispose()}}function H(f,y,D,N,W,k,Z=0){const ut=new Ka,_t=N/2;ut.moveTo(-_t,0),ut.lineTo(-_t,W-_t),ut.absarc(0,W-_t,_t,Math.PI,0,!0),ut.lineTo(_t,0),ut.lineTo(_t-.18,0),ut.lineTo(_t-.18,W-_t),ut.absarc(0,W-_t,_t-.18,0,Math.PI,!1),ut.lineTo(-_t+.18,0),ut.closePath(),P(new Do(ut,{depth:k,bevelEnabled:!1,curveSegments:12}),f,y,D,"light",[0,Z,0])}function X(f,y,D,N,W,k=1){for(let Z=0;Z<W;Z++)A(f,y+Z*.13,D-Z*.22*k,N,.14,.26,"light")}await s("terraces"),A(0,-.03,0,10.8,.38,8.7,"stone"),A(-3.85,.23,.2,3.2,.28,5.3,"light"),A(3.5,.32,-.3,3.2,.46,5.2,"light"),A(.05,.24,-2.1,3.2,.46,3.9,"light"),A(.4,.25,3.05,4.9,.42,1.8,"light");for(let f=-5;f<5.3;f+=.44)A(f,.172,4.3,.025,.014,.18,"trim",!1);const K=[[-5.4,5.4,-4.35,4.35,.16],[-5.45,-2.25,-2.45,2.85,.37],[1.9,5.1,-2.9,2.3,.55],[-1.55,1.65,-4.05,-.15,.47],[-2.05,2.85,2.15,3.95,.46]],j=(f,y)=>Math.max(...K.filter(([D,N,W,k])=>f>=D&&f<=N&&y>=W&&y<=k).map(D=>D[4]));A(.01,.315,1.965,1.25,.31,3.93,"light"),A(-1.7075,.315,2.61,2.185,.31,.8,"light"),A(.675,.355,1.965,.08,.39,4.01,"stone"),A(-.655,.355,1.065,.08,.39,2.21,"stone"),A(-.655,.355,3.51,.08,.39,.92,"stone");for(const f of[-.04,3.97])A(.01,.355,f,1.41,.39,.08,"stone");for(const f of[2.17,3.05])A(-1.7475,.355,f,2.185,.39,.08,"stone");A(-2.84,.355,2.61,.08,.39,.96,"stone");for(const f of[2.37,2.61,2.85])A(-1.9,.5,f,.22,.06,.18,"light");for(const f of[-1.13,1.13])for(const y of[-2.9,-.7])A(f,1.57,y,.3,2.55,.3,"stone");for(const f of[-.74,.74])H(f,.36,-.5,1.38,2.55,.18);A(0,2.92,-1.8,3.1,.26,3.1,"light"),A(.13,3.14,-1.86,2.85,.13,2.85,"trim");for(const f of[-.92,1.02])for(const y of[-2.75,-1.05])A(f,4.05,y,.2,1.9,.2,"stone");A(.08,5.04,-1.9,2.75,.23,2.65,"light"),A(.08,3.95,-2.85,1.8,1.8,.13,"stone"),A(-.78,.75,-.42,.4,.04,.5,"wood");for(const f of[-.95,-.61])for(const y of[-.64,-.2])A(f,.6,y,.03,.27,.03,"wood");A(-.78,.78,-.47,.36,.02,.36,"light");for(let f=0;f<4;f++)for(let y=0;y<4;y++)(f+y)%2&&A(-.915+f*.09,.792,-.605+y*.09,.09,.006,.09,"dark",!1);for(const[f,y,D]of[[-.87,-.56,"ochre"],[-.69,-.56,"ochre"],[-.78,-.38,"terracotta"],[-.69,-.38,"terracotta"]])I(f,.815,y,.026,.045,D);P(new pe(.045,.045,.045),-.88,.792,-.23,"light",[0,.4,0]),P(new pe(.045,.045,.045),-.74,.792,-.22,"light",[0,-.3,0]),A(.08,4.12,-2.77,1.4,.8,.02,"dark");for(const f of[3.7,4.54])A(.08,f,-2.76,1.5,.05,.04,"wood");for(const f of[-.65,.81])A(f,4.12,-2.76,.05,.89,.04,"wood");A(.25,3.63,-2.42,.72,.04,.34,"wood");for(const f of[-.08,.58])A(f,3.41,-2.42,.03,.4,.3,"dark");for(let f=0;f<5;f++)P(new pe(.17,.007,.23),.42,3.655+f*.008,-2.42,"light",[0,(v(f,9)-.5)*.35,0],f===4);I(.02,3.66,-2.5,.05,.02,"dark"),F(new C(.02,3.66,-2.5),new C(.06,3.92,-2.45),.012,"dark"),I(.08,3.9,-2.42,.1,.09,"ochre",.04);const q=6.02,ht=[-1.15,.05,1.25],$=[-3.1,-1.62];S(.06,5.19,-2.86,2.4,.34);for(const f of ht)for(const y of $){I(f,(5.16+q)/2,y,.042,q-5.16,"stone",.036);for(let D=0;D<2;D++){let N=new C(f+.05,5.17,y);for(let W=1;W<=14;W++){const k=W*.62+D*Math.PI+f*2+y,Z=.05+Math.sin(W*1.3+D)*.012,ut=new C(f+Math.cos(k)*Z,5.17+W/14*(q-5.1),y+Math.sin(k)*Z);F(N,ut,.021-W*7e-4,"wood",!1),N=ut}}for(let D=0;D<3;D++){const N=D*2.1+f+y*1.7;F(new C(f,q+.1,y),new C(mr.clamp(f+Math.cos(N)*.4,-1.2,1.3),q+.17,mr.clamp(y+Math.sin(N)*.4,-3.15,-1.62)),.013,"wood",!1)}}for(const f of $)A(.05,q+.04,f,2.68,.07,.06,"trim");for(let f=0;f<13;f++)A(-1.2+f*.205,q+.1,-2.36,.035,.05,1.86,"trim");for(const f of[-2.85,-2.36,-1.87])A(.05,q+.14,f,2.7,.025,.03,"trim",!1);for(let f=0;f<230;f++){const y=-1.28+v(f,1)*2.68,D=-3.22+v(f,2)*1.62;P(new ln(.07+v(f,3)*.07,0).scale(1,.5,1),y,q+.17+v(f,4)*.05,D,["leafLight","leaf","leafLight","leafDark"][f%4],[0,v(f,6)*3,(v(f,5)-.5)*.4],!1)}for(let f=0;f<22;f++){const y=f<14,D=y?-1.2+f*.185+(v(f,11)-.5)*.1:1.33,N=y?-1.6:-3+(f-14)*.2,W=1+Math.floor(v(f,12)*4);for(let k=0;k<W;k++)P(new ln(.05-k*.006,0).scale(1,.8,1),D+Math.sin(k*1.7+f)*.02,q+.05-k*.075,N+Math.cos(k+f)*.02,k%2?"leaf":"leafLight",[k,f,0],!1)}for(let f=0;f<10;f++){const y=.12+v(f,9)*.08;P(new Nn(.03,y,5).rotateX(Math.PI),-1+v(f,7)*2.1,q+.07-y/2,-3+v(f,8)*1.3,f%3?"coral":"flower",[0,v(f,10)*3,0],!1)}function St(f,y,D,N){const W=Math.cos(D),k=Math.sin(D);for(const[Z,ut,_t,Nt,Kt,ne,we]of N)P(new pe(Z,ut,_t),f+Nt*W+ne*k,5.16+Kt,y-Nt*k+ne*W,we,[0,D,0],we==="wood")}const Mt={x:-.45,z:-2.05},Rt={x:.45,z:-1,yaw:-.6};St(Mt.x,Mt.z,0,[[.92,.14,.34,0,.1,0,"wood"],[.42,.06,.28,-.215,.2,.02,"light"],[.42,.06,.28,.215,.2,.02,"light"],[.92,.26,.06,0,.28,-.15,"wood"],[.4,.17,.06,-.215,.31,-.105,"light"],[.4,.17,.06,.215,.31,-.105,"light"],[.06,.12,.34,-.46,.24,0,"wood"],[.06,.12,.34,.46,.24,0,"wood"]]),St(Rt.x,Rt.z,Rt.yaw,[[.36,.14,.34,0,.1,0,"wood"],[.28,.06,.28,0,.2,.02,"light"],[.36,.26,.06,0,.28,-.15,"wood"],[.28,.17,.06,0,.31,-.105,"light"],[.05,.12,.34,-.155,.24,0,"wood"],[.05,.12,.34,.155,.24,0,"wood"]]);const qt={x:-.3,z:-.88};A(qt.x,5.32,qt.z,.42,.035,.27,"wood");for(const f of[-.17,.17])for(const y of[-.1,.1])A(qt.x+f,5.235,qt.z+y,.035,.15,.035,"wood");function ae(f,y,D){const N=D*1.3;I(f,5.16+N/2,y,D*.75,N,"terracotta",D);for(let W=0;W<6;W++){const k=W*2.4+f*5;P(new ln(D*(.5+v(W,f+y)*.25),0),f+Math.cos(k)*D*.45,5.16+N+D*.35+v(W,y)*D*.3,y+Math.sin(k)*D*.45,W%2?"leaf":"leafLight",[k,W,0],!1),P(new ln(D*.28,0),f+Math.cos(k+1)*D*.6,5.16+N+D*.75+v(W,f)*D*.25,y+Math.sin(k+1)*D*.6,W%3?"coral":"flower",[0,0,0],!1)}}const _e=[[-.95,-1.45,.09],[.25,-1.45,.08],[1.05,-1.48,.085]];_e.forEach(([f,y,D])=>ae(f,y,D)),ae(-1.12,-.78,.11),ae(1.2,-2.6,.1),ae(qt.x+.08,qt.z,.045);for(const f of[-1.6,-.66])F(new C(1.32,5.16,f),new C(1.32,5.82,f),.022,"dark"),A(1.32,5.8,f,.03,.03,.16,"wood");F(new C(1.32,5.79,-1.6),new C(1.32,5.79,-.66),.006,"light",!1),I(1,5.22,-.72,.13,.12,"wood",.15),I(1,5.285,-.72,.12,.012,"light",.12,!1),F(new C(Mt.x,q,-1.62),new C(Mt.x,5.8,-1.62),.005,"dark",!1),I(Mt.x,5.795,-1.62,.012,.03,"dark",.045),I(Mt.x,5.72,-1.62,.032,.12,"glass",.032),I(Mt.x,5.65,-1.62,.045,.02,"dark"),E(-.91,3.12,-.46,.58),E(1.02,3.12,-.46,.76),I(.01,3.27,-1.95,.2,.13,"light");for(const f of[-.18,.2])A(f,3.23,-1.09,.04,.05,1.32,"light");S(-1.19,3.15,-1.65,.42,1.7),S(1.26,3.15,-2.25,.4,.5),S(1.3,3.15,-.85,.32,.5),await s("observatory");const Jt=-3.55,Q=.2;I(Jt,.62,Q,1.47,.2,"light"),P(new Ci(1.25,.15,5,52),Jt,2.42,Q,"light",[Math.PI/2,0,0]);for(let f=0;f<10;f++){const y=f/10*Math.PI*2,D=Jt+Math.cos(y)*1.25,N=Q+Math.sin(y)*1.25;I(D,1.5,N,.09,1.8,"stone")}I(Jt,.81,Q,1.09,.13,"dark"),I(Jt,.9,Q,.87,.1,"glass");const ot=1.53,Ct=.36,Gt=.56;I(Jt,1.06,Q,.44,.22,"light"),I(Jt,1.195,Q,.42,.05,"wood"),I(Jt,ot,Q,Ct-.07,Gt,"dark");for(const f of[ot-.295,ot+.295])I(Jt,f,Q,Ct+.02,.03,"dark");I(Jt,ot+.335,Q,.07,.05,"ochre",.05);const Ut=2,ee=.48,he=new C(Jt+Math.sin(Ut)*(Ct+ee),ot-.06,Q+Math.cos(Ut)*(Ct+ee));A(he.x,(.95+he.y)/2,he.z,.05,he.y-.95,.05,"dark"),A(he.x,he.y,he.z,.07,.07,.07,"ochre");const L=new C(-3.2,1.03,.8);A(L.x,L.y,L.z,.26,.16,.2,"dark"),A(L.x,1.07,L.z+.102,.18,.025,.006,"glass",!1);const et=new C(-2.92,1.52,1.07),st=[new C(Jt+.22,.97,Q+.37),new C(L.x-.05,.97,L.z-.1),new C(L.x+.13,.97,L.z+.02),new C(-2.97,.9,1),new C(et.x,.9,et.z)];for(let f=0;f<st.length-1;f++)F(st[f],st[f+1],.016,"dark",!1);A(et.x,1.1,et.z,.05,.44,.05,"dark");const it=1.2;P(new pe(.5,.14,.07),et.x,it,et.z,"dark",[0,.75,0]),P(new pe(.22,.05,.02).translate(0,0,.025),et.x,it-.1,et.z,"light",[0,.75,0]),P(new Ke(.2,.2,.035,24).rotateX(Math.PI/2).rotateY(.75),et.x,et.y,et.z,"light");for(let f=0;f<7;f++){const y=-Math.PI/2+f/6*Math.PI;P(new pe(.012,f%3?.035:.055,.008).rotateZ(-y).translate(Math.sin(y)*.15,Math.cos(y)*.15,.021).rotateY(.75),et.x,et.y,et.z,"dark",[0,0,0],!1)}for(const[f,y]of[[-3.52,.86],[-3.78,.7]])A(f,1.01,y,.025,.12,.025,"dark"),P(new pe(.17,.11,.015),f,1.12,y,"dark",[0,.75,0]),P(new mn(.14,.085),f+Math.sin(.75)*.009,1.12,y+Math.cos(.75)*.009,"glass",[0,.75,0],!1),F(new C(L.x-.13,.97,L.z),new C(f,.97,y),.01,"dark",!1);U(-4.4,j(-4.4,-1.9),-1.9,.8),S(-5,j(-5,1.7),1.7,.55,1.1),X(-3.55,.3,2.24,1.3,4),await s("reading-room"),A(3.33,.73,-.75,2.6,.28,3.3,"trim");const nt=2.84,yt=Math.tan(.09),ct=1.69,gt=f=>nt+Math.abs(f)*yt,Qt=f=>gt(f)+.07,Wt=f=>Qt(f)+.04+.2*(1-(1-Math.min(f/.6,1))**2);function R(f,y,D,N,W=!0){const k=new Ka(f.map(([Z,ut])=>new xt(Z,ut)));P(new Do(k,{depth:y,bevelEnabled:!1}).translate(0,0,-y/2),D,0,-.75,N,[0,-Math.PI/2,0],W)}const x=(f,y,D,N=16)=>Array.from({length:N+1},(W,k)=>{const Z=f+(y-f)*k/N;return[Z,D(Math.abs(Z))]});for(const f of[-1,1]){R([[0,nt],[f*1.75,gt(1.75)],[f*1.75,gt(1.75)+.07],[0,nt+.07]],2.9,3.33,"terracotta"),R([...x(0,f*ct,Qt,1),...x(f*ct,0,Wt)],2.76,3.33,"light");const y=(D,N)=>d.push(new Me().setAttribute("position",new le([...D.toArray(),...N.toArray()],3)));y(new C(1.95,Wt(.6),-.75+f*.6),new C(4.71,Wt(.6),-.75+f*.6));for(let D=0;D<21;D++){if(v(D,f+20)<.12)continue;const N=.5+v(D,f+21)*.3,W=.72+N/2,k=2.13+D*.12;y(new C(k,Wt(.72)+.007,-.75+f*.72),new C(k,Wt(.72+N)+.007,-.75+f*(.72+N))),P(new pe(.024,.006,N),k,Wt(W)+.004,-.75+f*W,"dark",[-f*.09,0,0],!1)}}P(new Ke(.08,.08,2.9,12).rotateZ(Math.PI/2),3.33,nt+.02,-.75,"terracotta");const G=Wt(ct);R([...x(.04,ct,f=>Wt(f)+.002),[1.756,G+.002],[1.756,G+.01],...x(ct,.04,f=>Wt(f)+.01)],.06,3.87,"ochre",!1),A(3.87,G-.17,1.01,.06,.36,.008,"ochre",!1);for(const f of[2.18,4.48])for(const y of[-2.18,.62]){const D=gt(y+.75);A(f,(.7+D)/2,y,.22,D-.7,.22,"stone")}const J=gt(1.45);A(3.33,(.75+J)/2,-2.2,2.5,J-.75,.17,"stone");for(const f of[.92,2.47])A(3.33,f,-1.985,2.34,.05,.26,"wood");for(let f=0,y=2.2;y<4.38;f++){const D=Math.min(.11+v(f)*.1,4.44-y),N=1+v(f,1)*.47,W=.17+v(f,2)*.07;A(y+D/2,.945+N/2,-2.115+W/2,D,N,W,["wood","trim","dark"][f%3]),y+=D+.012}A(4.39,1.78,-.78,.04,1.82,2.54,"stone");for(const f of[-2.04,.48])A(4.515,1.78,f,.25,1.82,.04,"wood");for(const f of[.9,1.79,2.67])A(4.515,f,-.78,.25,.04,2.5,"wood");for(const[f,y]of[[0,.92],[1,1.81]])for(let D=0,N=-2.02;N<.42;D++){const W=D+f*50;if(v(W,8)>.9){N+=.1;continue}const k=Math.min(.07+v(W,5)*.08,.46-N),Z=.5+v(W,6)*.3,ut=.17+v(W,7)*.05;A(4.62-ut/2,y+Z/2,N+k/2,ut,Z,k,["wood","trim","dark","terracotta","light","ochre"][D%6]),N+=k+.008}A(3.25,1.36,.05,1.7,.1,.7,"wood");for(const f of[2.7,3.8])A(f,1.03,.05,.07,.65,.55,"dark");A(3.25,1.43,-.03,.14,.04,.11,"dark"),P(new pe(.15,.28,.022),3.25,1.58,-.07,"dark",[-.22,0,0]),P(new mn(.12,.24),3.25,1.58+.013*Math.sin(.22),-.07+.013*Math.cos(.22),"glass",[-.22,0,0],!1);for(const[f,y]of[[2.8,"ochre"],[3.7,"terracotta"]])I(f,1.43,.02,.07,.04,"dark"),P(new Ze(.075,14,10).scale(1,.85,1),f,1.5,.02,y,[0,0,0],!1);X(3.35,.34,1.6,1.8,4),await s("greenhouse"),A(-1.9,.65,-.3,.8,.14,.6,"wood");for(let f=0;f<8;f++)A(-2.25+f*.1,.74,-.3,.065,.04,.58,"light");E(-1.9,.74,-.62,.8),E(-1.9,.74,.02,.8);for(const f of[-.55,-.05])A(-1.6,.37,f,.06,.42,.06,"dark");A(1.82,3.15,-1.6,.74,.12,.62,"wood"),E(1.82,3.2,-1.93,.74),E(1.82,3.2,-1.28,.74),A(2.02,.585,3.11,1.75,.25,1.8,"light");for(const f of[1.26,2.78])for(const y of[2.34,3.88])A(f,1.28,y,.045,1.2,.045,"dark");for(const f of[2.34,3.88])F(new C(1.26,1.9,f),new C(2.02,2.47,f),.035,"dark"),F(new C(2.78,1.9,f),new C(2.02,2.47,f),.035,"dark");A(2.02,2.47,3.11,.055,.05,1.6,"dark");for(const f of[1.26,2.78])A(f,1.91,3.11,.04,.04,1.6,"dark"),A(f,1.2,3.11,.025,.025,1.6,"dark");S(1.55,.72,3.12,.43,1.28),A(2.43,1.1,3.12,.46,.04,1.3,"wood");for(const f of[2.24,2.62])for(const y of[2.52,3.72])A(f,.895,y,.035,.37,.035,"dark");for(const f of[2.72,3.12]){A(2.43,1.145,f,.34,.05,.34,"dark");for(let y=0;y<3;y++)for(let D=0;D<3;D++)P(new Nn(.02,.07,4),2.33+y*.1,1.2,f-.1+D*.1,"grass",[0,v(y*3+D,f)*3,0],!1)}I(2.43,1.195,3.5,.065,.15,"trim"),F(new C(2.48,1.17,3.5),new C(2.62,1.3,3.5),.015,"trim"),P(new Ci(.05,.009,4,12,Math.PI),2.4,1.27,3.5,"trim"),["light","ochre","terracotta","light"].forEach((f,y)=>P(new pe(.07,.1,.012),2.28+y*.1,1.17,3.72,f,[-.12,0,0])),A(3.05,.47,3.95,.05,.62,.05,"dark"),A(3.05,.88,3.95,.26,.2,.2,"terracotta"),P(new Ke(.1,.1,.26,14).rotateZ(Math.PI/2),3.05,.98,3.95,"terracotta"),A(3.05,.93,4.052,.13,.016,.006,"dark",!1);const at=new mn(.95,1.54);P(at,1.64,2.185,3.11,"glass",[-Math.PI/2,0,-.643],!1),P(new mn(.95,1.54),2.4,2.185,3.11,"glass",[-Math.PI/2,0,.643],!1),await s("planting"),[[-4.45,3.25,1.15],[-2.95,3.5,.75],[-1.66,3.5,1],[4.4,1.72,1.1],[4.62,3.42,.83],[-1.08,1.73,.9],[-3.5,-3.4,.83],[2.08,-3.53,.8]].forEach(([f,y,D])=>{const N=j(f,y);S(f,N,y,.75,.72),U(f,N+.29,y,D)});for(const[f,y,D,N]of[[.22,-3.85,2.4,.37],[4.7,-2.65,.4,.45],[-5.1,-.95,.42,.9],[1.2,1.45,.6,.7]])S(f,j(f,y),y,D,N);const Bt=(f,y)=>Math.hypot(f-Jt,y-Q)<1.6||[[-.85,.87,-.3,4.15],[-3.05,-.6,2,3.25],[2,4.7,-2.45,.95],[2.4,4.3,.8,1.75],[1.1,2.95,2.15,4.05],[-4.25,-2.85,1.45,2.4]].some(([D,N,W,k])=>f>D&&f<N&&y>W&&y<k);for(let f=0;f<90;f++){const y=(Zt()-.5)*10,D=(Zt()-.5)*8;if(Math.abs(y)<1.25||Math.abs(D)<.8||Bt(y,D))continue;const N=j(y,D)+.1;P(new Nn(.05,.22,4),y,N,D,"grass",[0,Zt()*4,.2],!1),f%3===0&&P(new ln(.065,0),y,N+.15,D,f%2?"flower":"coral",[0,0,0],!1)}A(-.98,.92,3.525,.3,.07,.75,"wood");for(const f of[3.25,3.8])A(-.98,.68,f,.24,.48,.05,"dark");I(4.36,1.4,.75,.027,1.6,"dark"),I(4.36,2.21,.75,.13,.19,"flower"),await s("geometry-batches");const mt=[],Ft=[];for(const[f,y]of g){const D=new dn({color:M[f],roughness:.86,metalness:0,transparent:!0,opacity:0,side:f==="glass"?2:0}),N=b.includes(f);N&&(D.onBeforeCompile=Z=>{Z.uniforms.uTime=Xt,Z.uniforms.uLife=O,Z.vertexShader=`uniform float uTime; uniform float uLife;
`+Z.vertexShader,Z.vertexShader=Z.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*2.1 + position.z + uTime*.85)*.022*uLife; transformed.z += cos(position.x*1.6 + uTime*.7)*.018*uLife;`)}),await s(`merge-${f}`);const W=Ai(y);y.forEach(Z=>Z.dispose());const k=new bt(W,D);k.castShadow=f!=="glass",k.receiveShadow=!0,l.add(k),f!=="glass"&&mt.push(k),Ft.push({material:D,flora:N,glass:f==="glass",key:f})}const Dt=new gr({color:7830397,transparent:!0,opacity:.26,depthWrite:!1}),ft=new ur(Ai(d),Dt);d.forEach(f=>f.dispose()),l.add(ft);const wt=Dt.clone();wt.opacity=.06;const Yt=new ur(ft.geometry,wt);Yt.position.set(.019,.008,-.013),l.add(Yt);const zt=new fe;l.add(zt);const Et=new dd({color:6917045,transparent:!0,opacity:0,dashSize:.16,gapSize:.12,depthWrite:!1});for(let f=-6;f<=6;f++)for(const y of["x","z"]){const D=y==="x"?[new C(-6,.04,f),new C(6,.04,f)]:[new C(f,.04,-5),new C(f,.04,5)],N=new To(new Me().setFromPoints(D),Et);N.computeLineDistances(),zt.add(N)}for(const[f,y]of[[-1.55,-3.35],[1.55,-3.35],[-1.55,-.25],[1.55,-.25]]){const D=new To(new Me().setFromPoints([new C(f,0,y),new C(f,7.6,y)]),Et);D.computeLineDistances(),zt.add(D)}const Xt={value:0},O={value:0},pt=new cn({transparent:!0,depthWrite:!1,uniforms:{uTime:Xt,uOpacity:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float w=sin(vUv.y*92.-uTime*1.6+sin(vUv.x*24.)*1.4);float line=smoothstep(.9,1.,w);vec3 c=mix(vec3(.29,.56,.58),vec3(.70,.84,.77),vUv.x*.45+line*.4);gl_FragColor=vec4(c,uOpacity*.88);}"});function vt(f,y,D,N,W,k=!1){const Z=new bt(new mn(N,W),pt);Z.position.set(f,y,D),k||(Z.rotation.x=-Math.PI/2),l.add(Z)}vt(.01,.495,1.965,1.25,3.93),vt(-1.7075,.495,2.61,2.185,.8),vt(.01,3.213,-1.09,.34,1.32);const Lt=new bt(new vr(.17,20),pt);Lt.rotation.x=-Math.PI/2,Lt.position.set(.01,3.34,-1.95),l.add(Lt);const dt=new bt(new pe(1.18,.3,.78),new dn({color:M.light,transparent:!0,opacity:0}));dt.position.set(.01,3.06,-.04),l.add(dt),vt(.01,3.216,-.04,.96,.8);const rt={value:0},Ot=new cn({transparent:!0,side:2,depthWrite:!1,uniforms:{uTime:Xt,uOpacity:rt},vertexShader:"uniform float uTime;varying vec2 vUv;void main(){vUv=uv;vec3 p=position;p.z+=sin(uv.y*13.+uTime*3.+uv.x*9.)*.014;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float streams=sin(vUv.x*58.+sin(vUv.y*8.+uTime*2.)*.7);float drops=sin(vUv.y*39.+uTime*5.8+sin(vUv.x*16.)*3.);float streak=smoothstep(.20,1.,streams)*.45+smoothstep(.65,1.,drops)*.22;vec3 water=mix(vec3(.27,.59,.63),vec3(.91,.98,.93),streak+pow(1.-vUv.y,7.)*.5);float edge=smoothstep(0.,.08,vUv.x)*smoothstep(0.,.08,1.-vUv.x);gl_FragColor=vec4(water,uOpacity*edge*.92);}"}),te=new bt(new mn(1.03,2.72,12,36),Ot);te.position.set(.01,1.855,.37),l.add(te);const ye=new cn({transparent:!0,depthWrite:!1,uniforms:{uTime:Xt,uOpacity:rt},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;uniform float uOpacity;varying vec2 vUv;void main(){float r=length((vUv-.5)*vec2(1.,1.35));float rings=smoothstep(.77,1.,sin(r*58.-uTime*3.));float fade=(1.-smoothstep(.23,.49,r));gl_FragColor=vec4(.86,.97,.92,(rings*.6+.12)*fade*uOpacity);}"}),de=new bt(new mn(1.22,1.1),ye);de.rotation.x=-Math.PI/2,de.position.set(.01,.505,.85),l.add(de);const Sn=new Me,_n=[];for(let f=0;f<44;f++)_n.push((Zt()-.5)*.95,Zt(),Zt());Sn.setAttribute("position",new le(_n,3));const ps=new cn({transparent:!0,depthWrite:!1,uniforms:{uTime:Xt,uOpacity:rt},vertexShader:"uniform float uTime;void main(){float t=fract(position.y+uTime*.5);vec3 p=vec3(.01+position.x*(1.+t*.25),.55+sin(t*3.14159)*.32,.39+position.z*.52+t*.25);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=2.4;}",fragmentShader:"uniform float uOpacity;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(.9,.99,.95,(1.-d*2.)*uOpacity*.8);}"});l.add(new hr(Sn,ps)),await s("drones");const yn=[],On=[],Fi=[];function Bn(f,y,D,N,W){f.translate(y,D,N),W.push(f.index?f.toNonIndexed():f),f.index&&f.dispose()}Bn(new Ze(.21,12,7).scale(1,.42,1.2),0,0,0,yn),Bn(new pe(.12,.045,.13),0,.065,.04,On),Bn(new Ze(.055,8,6),0,-.02,.22,On);for(const f of[-.31,.31])for(const y of[-.29,.29]){const D=new pe(.4,.025,.035);D.rotateY(-Math.atan2(y,f)),Bn(D,f*.5,0,y*.5,On);const N=new Ci(.15,.016,5,20);N.rotateX(Math.PI/2),Bn(N,f,.016,y,yn),Bn(new Ke(.028,.028,.065,7),f,.025,y,On),Bn(new vr(.125,16).rotateX(-Math.PI/2),f,.051,y,Fi)}const ui=Ai(yn),ms=Ai(On),Ni=Ai(Fi);[...yn,...On,...Fi].forEach(f=>f.dispose());const Oi=new dn({color:15919571,emissive:10466520,emissiveIntensity:0,roughness:.7,transparent:!0,opacity:0}),Bi=new dn({color:4811879,emissive:7311272,emissiveIntensity:0,roughness:.55,transparent:!0,opacity:0}),gs=new ai({color:7833464,side:2,transparent:!0,opacity:0,depthWrite:!1}),Cr=new gr({color:5866413,transparent:!0,opacity:0}),Uo=new _o(ui,28),zi=new Me;zi.setAttribute("position",new le([-.42,.03,.39,.42,.03,.39,-.42,.03,-.39,.42,.03,-.39],3)),zi.setAttribute("aColor",new le([1,.25,.2,.3,1,.45,1,1,1,1,1,1],3)),zi.setAttribute("aBlink",new le([0,0,1,1],1));const _s={value:0},Fo=new cn({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:Xt,uOpacity:_s,uScale:{value:a.getPixelRatio()}},vertexShader:"uniform float uTime;uniform float uScale;attribute vec3 aColor;attribute float aBlink;varying vec3 vColor;varying float vOn;void main(){vColor=aColor;float k=fract(uTime*.8+modelMatrix[3][0]*.31);vOn=aBlink>.5?step(.86,k):.75+.25*sin(uTime*2.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=(aBlink>.5?13.:11.)*uScale;}",fragmentShader:"uniform float uOpacity;varying vec3 vColor;varying float vOn;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,1.6);gl_FragColor=vec4(mix(vColor,vec3(1.),smoothstep(.22,0.,d)*.7),a*vOn*uOpacity);}"}),w=[];for(let f=0;f<3;f++){const y=new fe;y.add(new bt(ui,Oi),new bt(ms,Bi),new bt(Ni,gs),new ur(Uo,Cr),new hr(zi,Fo)),l.add(y),w.push(y)}await s("room-details");const B=new Ci(1,.045,3,48),V=[0,1,2].map(()=>new ai({color:16773316,transparent:!0,opacity:0,depthWrite:!1})),Y=V.map(f=>{const y=new bt(B,f);return y.rotation.x=Math.PI/2,y.position.set(3.25,1.418,-.02),l.add(y),y}),z=new Xc(16761466,0,2.6,1.6);z.position.set(3.25,2.1,.1),l.add(z);const lt=new dn({color:3095352,roughness:.6,transparent:!0,opacity:0}),Tt=new fe;Tt.position.copy(et),Tt.rotation.y=.75,l.add(Tt);const It=new fe;It.position.z=.024,It.add(new bt(new pe(.014,.15,.008).translate(0,.065,0),lt)),Tt.add(It,new bt(new Ke(.022,.022,.02,10).rotateX(Math.PI/2).translate(0,0,.025),lt));let Pt=-Math.PI/2;const kt=document.createElement("canvas");kt.width=1024,kt.height=256;const $t=kt.getContext("2d"),Ht=new Nc(kt);Ht.colorSpace=gn,Ht.anisotropy=4;const se=new dn({map:Ht,roughness:.9,transparent:!0,opacity:0}),me=new fe;me.position.set(Jt,ot,Q),l.add(me),me.add(new bt(new Ke(Ct,Ct,Gt,40,1,!0),se),new bt(new pe(.02,Gt,.012).translate(0,0,Ct+.004),lt));const Ee=new fe;Ee.position.copy(he),Ee.rotation.y=Ut-Math.PI/2,Ee.add(new bt(new pe(ee,.014,.014).translate(-ee/2,0,0),lt),new bt(new pe(.022,.045,.022).translate(-ee+.011,0,0),lt)),l.add(Ee);const ve=[];let ge=0,Vt=-.2;function Pe(){const f=$t,y=kt.width,D=kt.height;f.fillStyle="#f6efdf",f.fillRect(0,0,y,D),f.strokeStyle="rgba(206, 130, 101, 0.35)",f.lineWidth=4,f.beginPath();for(let k=0;k<y;k+=64)f.moveTo(k,0),f.lineTo(k,D);for(let k=32;k<D;k+=32)f.moveTo(0,k),f.lineTo(y,k);f.stroke(),f.strokeStyle="#2f3b38",f.lineWidth=14,f.lineJoin="round",f.beginPath();let N=0,W=0;ve.forEach((k,Z)=>{const ut=(Ut-k.angle)/(Math.PI*2),_t=(ut-Math.floor(ut))*y,Nt=D/2-k.level/Gt*D;Z===0?f.moveTo(_t,Nt):(_t<N&&(f.lineTo(_t+y,Nt),f.moveTo(N-y,W)),f.lineTo(_t,Nt)),N=_t,W=Nt}),f.stroke(),Ht.needsUpdate=!0}Pe();const ue=document.createElement("canvas");ue.width=512,ue.height=192;const sn=ue.getContext("2d"),En=new Nc(ue);En.colorSpace=gn,En.anisotropy=4;const We=new dn({map:En,roughness:.7,transparent:!0,opacity:0});function jn(f,y,D,N,W,k){const Z=new mn(f,y),ut=Z.attributes.uv;for(let _t=0;_t<ut.count;_t++)ut.setXY(_t,Ce(D,W,ut.getX(_t)),Ce(N,k,ut.getY(_t)));return Z}const Te=new fe;Te.position.set(et.x,it,et.z),Te.rotation.y=.75,Te.add(new bt(jn(.48,.12,0,1/3,1,1).translate(0,0,.0365),We),new bt(jn(.2,.04,0,0,320/512,1/3).translate(0,-.1,.0365),We)),l.add(Te);let Ue=null,Re=null,Fe;const je=()=>Fe===void 0||Re===null!=(Fe===null)||Re!==null&&Math.abs(Re-Fe)>=5e-4;function Gi(){const f=sn;f.fillStyle="#e3dccb",f.fillRect(0,0,512,128),f.fillStyle="#f1e9d7",f.fillRect(0,128,320,64),f.textAlign="center",f.textBaseline="middle",f.fillStyle="#2f3b38",f.font='600 40px "Helvetica Neue", Arial, sans-serif',f.fillText("g CO₂e",160,162),f.beginPath(),f.arc(303,108,9,0,Math.PI*2),f.fill(),f.font='bold 96px "Helvetica Neue", Arial, sans-serif';const y=Re===null?null:Math.min(Math.max(Re,0),999.99)*100;let D=0;for(let N=0;N<5;N++){const W=4-N,k=18+W*94+(W>=3?16:0),Z=10,ut=84,_t=108;if(f.save(),f.beginPath(),f.rect(k,Z,ut,_t),f.clip(),f.fillStyle=N<2?"#7e3326":"#2f3b38",f.fillRect(k,Z,ut,_t),f.fillStyle="#fbf6ea",y===null)f.fillText("–",k+ut/2,Z+_t/2+4);else{const Kt=N===0?y%10:Math.floor(y/10**N)%10+D;D=Math.max(0,Kt-9);const ne=Math.floor(Kt);for(let we=ne-1;we<=ne+2;we++)f.fillText(String((we%10+10)%10),k+ut/2,Z+_t/2+4+(we-Kt)*_t*.95)}const Nt=f.createLinearGradient(0,Z,0,Z+_t);Nt.addColorStop(0,"rgba(0, 0, 0, 0.4)"),Nt.addColorStop(.2,"rgba(0, 0, 0, 0)"),Nt.addColorStop(.8,"rgba(0, 0, 0, 0)"),Nt.addColorStop(1,"rgba(0, 0, 0, 0.4)"),f.fillStyle=Nt,f.fillRect(k,Z,ut,_t),f.restore()}Fe=Re,En.needsUpdate=!0}Gi();const un=new fe;un.visible=!1,l.add(un);const vs=new gr({color:3894074,transparent:!0,opacity:0,depthTest:!1}),xs=new ai({color:3894074,transparent:!0,opacity:0,depthWrite:!1,blending:2}),Ms=new fe;Ms.add(new ur(new _o(new pe(1,1,1)),vs),new bt(new pe(1,1,1),xs));const Ss=new fe;Ss.add(new ur(new _o(new Ke(1,1,1,48),30),vs),new bt(new Ke(1,1,1,48),xs)),un.add(Ms,Ss),un.traverse(f=>f.renderOrder=3);const Yu=[[0,1.66,-1.75,2.75,2.4,2.75],[.08,4.05,-1.86,3,1.95,3],[Jt,1.6,Q,2.9,2,2.9],[.08,5.85,-1.9,2.95,1.5,2.85]];function Zu(f){const[y,D,N,W,k,Z]=Yu[f];un.position.set(y,D,N),Ms.visible=f!==2,Ss.visible=f===2,(f===2?Ss:Ms).scale.set(f===2?W/2:W,k,f===2?Z/2:Z)}const dl={light:[8159365,2776218,9072462,3894074],dark:[9349826,9226482,14206630,10934171]};let Pr=null,Hi=0;const No=new dn({color:14248271,roughness:.6,transparent:!0,opacity:0}),ys=new fe;ys.position.set(3.185,.9,3.9),ys.add(new bt(new pe(.012,.2,.012).translate(0,.1,0),lt),new bt(new pe(.008,.06,.085).translate(0,.17,.042),No)),l.add(ys);const pl=new dn({color:16447212,roughness:.8,transparent:!0,opacity:0}),ki=new bt(new pe(.11,.075,.006),pl);ki.visible=!1,l.add(ki);let Dr="idle",Lr=0,Xn=-1,Oo=!1,Vi=0,ml=0,Es=0;const Bo=(f,y,D)=>f<y?Math.min(y,f+D):Math.max(y,f-D);function Ju(){return Vi!==(Oo?1:0)||Hi!==(Pr===null?0:1)||Lr!==(Dr==="idle"?0:1)||Xn>=0||Es>.01&&Ue!==null&&Re!==null&&Math.abs(Ue-Re)>=5e-4}function $u(f,y,D,N){Es=y;const W=Tn||$e;if(Vi=Bo(Vi,Oo?1:0,$e?1:f/.3),W||(ml+=f),Y.forEach((Nt,Kt)=>{const ne=(ml*.55+Kt/3)%1,we=.06+ne*.5;Nt.scale.set(we,we,1),V[Kt].opacity=(1-ne)*Vi*y*.9,V[Kt].visible=V[Kt].opacity>.01}),z.intensity=Vi*y*2.4,!W){const Nt=Ce(-Math.PI/2,Math.PI/2,Math.min(kr/8,1));Pt=Ce(Pt,Nt,Math.min(f*3,1))}if(It.rotation.z=-Pt,lt.opacity=y,lt.visible=y>.01,se.opacity=y,se.visible=y>.01,We.opacity=y,We.visible=y>.01,Ue===null||Re===null||W?Re=Ue:(Re=Ce(Re,Ue,Math.min(f*3,1)),Math.abs(Ue-Re)<2e-4&&(Re=Ue)),y>.01&&je()&&Gi(),!W){const Nt=Ce(-.2,.2,Math.sqrt(Math.min(kr/8,1)));Vt=Ce(Vt,Nt,Math.min(f*3,1)),ge-=f*.22*y}me.rotation.y=ge,Ee.rotation.z=-Math.asin((Vt+ot-he.y)/ee);const k=ve[ve.length-1];if(!k||k.angle-ge>=.066){for(ve.push({angle:ge,level:Vt});ve[0].angle-ge>Math.PI*1.7;)ve.shift();Pe()}const Z=Ne>=.6?2:Ne>=.28?1:0;Hi=Bo(Hi,Pr===null?0:1,$e?1:f/.25);const ut=Math.max(y,N)*D;un.visible=Hi*ut>.01;const _t=(Bs?dl.dark:dl.light)[Ne>=.96?3:Ne>=.6?2:Z];if(vs.color.setHex(_t),xs.color.setHex(_t),vs.opacity=Hi*ut*.95,xs.opacity=Hi*ut*.22,Lr=Bo(Lr,Dr==="idle"?0:1,$e?1:f/.35),ys.rotation.x=Ce(-Math.PI/2,0,1-(1-Lr)**2),No.opacity=y,No.visible=y>.01,Xn>=0){Xn=Math.min(1,Xn+f/.8);const Nt=Xn,Kt=Math.min(Nt/.7,1),ne=Math.max(0,(Nt-.7)/.3);ki.position.set(3.05,Ce(1.45,.93,Kt*Kt),Ce(4.08,3.98,ne)),ki.rotation.set(0,0,(1-Kt)*.5),pl.opacity=y,ki.visible=!0,Xn>=1&&(Xn=-1,ki.visible=!1,Dr="idle")}}const gl=[],_l=new ai({color:13607508,side:2,transparent:!0,opacity:0});for(let f=0;f<5;f++){const y=new fe;for(const D of[-1,1]){const N=new bt(new vr(.09,4),_l);N.position.x=D*.065,N.rotation.y=D*.3,y.add(N)}l.add(y),gl.push(y)}await s("lighting");const vl=[[4.36,2.21,.75],[3.3,1.7,-1.2],[-3.55,1.25,.2],[.05,1.6,-1.8],[2.02,1.3,3.11]],Ku=vl.map(([f,y,D])=>{const N=new Xc(16758117,0,3.4,1.6);return N.position.set(f,y,D),l.add(N),N}),Ts=new ai({color:16765578,transparent:!0,opacity:0,depthWrite:!1}),ju=new Ze(.075,10,8);vl.forEach(([f,y,D])=>{const N=new bt(ju,Ts);N.position.set(f,y+(f===4.36?0:.35),D),l.add(N)});const xl=new Me,Ml=[];for(let f=0;f<70;f++)Ml.push((Zt()-.5)*10,.7+Zt()*2.6,(Zt()-.5)*8);xl.setAttribute("position",new le(Ml,3));const Sl={value:0},Qu=new cn({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:Xt,uOpacity:Sl},vertexShader:"uniform float uTime;varying float vBlink;void main(){vec3 p=position;float s=position.x*1.7+position.z*2.3;p.x+=sin(uTime*.45+s)*.35;p.y+=sin(uTime*.7+s*1.3)*.22;p.z+=cos(uTime*.38+s)*.35;vBlink=smoothstep(.15,1.,sin(uTime*1.6+s*4.)*.5+.5);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=7.;}",fragmentShader:"uniform float uOpacity;varying float vBlink;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,2.);gl_FragColor=vec4(1.,.86,.48,a*vBlink*uOpacity);}"});l.add(new hr(xl,Qu));const hi=[],yl=new dn({color:9216864,roughness:1}),ws=[9216864,7312469,10926448,5141841].map(f=>new dn({color:f,roughness:1})),th=new Ke(.025,.035,.45,6),eh=new ln(.19,1),Ir=new gr({transparent:!0,depthWrite:!1}),nh=new Me().setFromPoints([[0,0,0],[0,.62,0],[0,.3,0],[-.14,.5,.03],[0,.36,0],[.15,.56,-.04],[0,.44,0],[.04,.6,.13],[0,.48,0],[-.05,.62,-.12]].map(([f,y,D])=>new C(f,y,D)));function El(f){const y=new fe;y.add(new ur(nh,Ir));const D=new bt(th,yl);D.position.y=.23,D.castShadow=!0,y.add(D);const N=ws[Math.floor(Zt()*ws.length)],W=2+Math.floor(Zt()*3);for(let k=0;k<W;k++){const Z=new bt(eh,N);Z.position.set((Zt()-.5)*.28,.42+Zt()*.18,(Zt()-.5)*.22),Z.scale.setScalar(.75+Zt()*.5),Z.castShadow=!0,y.add(Z)}return y.position.copy(f),y.rotation.y=Zt()*Math.PI*2,y.userData.size=1.15+Zt()*.6,y.scale.setScalar($e||Tn?y.userData.size:.001),l.add(y),hi.push({group:y,age:$e||Tn?1:0}),Ge=!0,hi.length}const Wi=new vd,Tl=new xt,As=24;await s("seasons");const ih={spring:{leaf:9417562,leafLight:15913950,leafDark:5933653,grass:11126918,flower:15908818,coral:16313585,plants:[10272866,15777744,12572542,5933653]},summer:{leaf:7312456,leafLight:9941854,leafDark:4156230,grass:9678190,flower:15776074,coral:14248271,plants:[7312456,9941854,5141841,4156230]},autumn:{leaf:13203247,leafLight:14722624,leafDark:6123071,grass:11904106,flower:14191162,coral:12076335,plants:[13795631,15052101,11027755,6123071]},winter:{leaf:14410721,leafLight:15922676,leafDark:5204572,grass:13818321,flower:15199467,coral:15199467,plants:[14936808,5204572,15922676,6125415]}},wl={spring:1,summer:1,autumn:.45,winter:0},rh={spring:[16173787,16510707,15906250],summer:[],autumn:[13795631,15052101,11027755,12738346],winter:[16251386,15660021]};let Je="summer",fi=null;const zo=new dn({roughness:1,transparent:!0,opacity:0,side:2});async function sh(){const f={s:l.scale.clone(),r:l.rotation.y};l.scale.set(1,1,1),l.rotation.y=0,l.updateMatrixWorld(!0);const y=new C(0,-1,0),D=[];for(let k=0;k<260&&D.length<170;k++){k&&k%8===0&&await dr(),Wi.set(new C((Zt()-.5)*10.4,12,(Zt()-.5)*8.4),y);const Z=Wi.intersectObjects(mt,!1)[0];Z?.face&&Z.face.normal.y>.7&&D.push(Z.point.clone())}l.scale.copy(f.s),l.rotation.y=f.r,l.updateMatrixWorld(!0);const N=new ts(new vr(.05,7).rotateX(-Math.PI/2),zo,D.length),W=new Se;D.forEach((k,Z)=>{T.position.set(k.x,k.y+.012,k.z),T.rotation.set(0,Zt()*Math.PI,0);const ut=.7+Zt()*.8;T.scale.set(ut*1.6,1,ut),T.updateMatrix(),W.copy(T.matrix),N.setMatrixAt(Z,W),N.setColorAt(Z,new jt(16777215))}),N.receiveShadow=!0,N.userData.total=D.length,l.add(N),fi=N}function oh(){if(!fi)return;const f=rh[Je],y=new jt;for(let D=0;D<fi.count;D++)y.setHex(f.length?f[D%f.length]:16777215),fi.setColorAt(D,y);fi.instanceColor.needsUpdate=!0,fi.count=Math.round(fi.userData.total*(Je==="spring"?.45:Je==="summer"?0:1))}const Al=new Me,bl=[];for(let f=0;f<70;f++)bl.push((Zt()-.5)*11,Zt(),(Zt()-.5)*9);Al.setAttribute("position",new le(bl,3));const Rl={value:0},Cl={value:12},Pl={value:new jt(13795631)},ah=new cn({transparent:!0,depthWrite:!1,uniforms:{uTime:Xt,uOpacity:Rl,uColor:Pl,uSize:Cl},vertexShader:"uniform float uTime;uniform float uSize;varying float vSpin;void main(){vec3 p=position;float t=fract(p.y+uTime*.045);p.y=6.8-t*6.6;p.x+=sin(uTime*.6+position.z*2.)*.45+t*1.2;p.z+=cos(uTime*.5+position.x)*.3;vSpin=uTime*2.+position.x*3.;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=uSize;}",fragmentShader:"uniform float uOpacity;uniform vec3 uColor;varying float vSpin;void main(){vec2 q=gl_PointCoord-.5;float c=cos(vSpin),s=sin(vSpin);q=mat2(c,-s,s,c)*q;q.x*=1.9*(.55+.45*abs(sin(vSpin*.7)));if(length(q)>.5)discard;gl_FragColor=vec4(uColor*(.85+.3*q.y),uOpacity);}"});l.add(new hr(Al,ah)),await s("animals");async function Dl(f,y){const D={s:l.scale.clone(),r:l.rotation.y};l.scale.set(1,1,1),l.rotation.y=0,l.updateMatrixWorld(!0);const N=new C(0,-1,0),W=[];for(let k=0;k<f*8&&W.length<f;k++){k&&k%8===0&&await dr(),Wi.set(new C((Zt()-.5)*10.4,12,(Zt()-.5)*8.4),N);const Z=Wi.intersectObjects(mt,!1)[0];Z?.face&&Z.face.normal.y>.7&&y(Z.point)&&W.push(l.worldToLocal(Z.point.clone()))}return l.scale.copy(D.s),l.rotation.y=D.r,l.updateMatrixWorld(!0),W}const lh=f=>f.x>-.8&&f.x<.85&&f.z>-2.25&&f.z<4.35||f.x>-3.35&&f.x<.25&&f.z>2&&f.z<3.2,ch=f=>f.x>-2.4&&f.x<-1.4&&f.z>-.75&&f.z<.15,Ll=f=>f.y<.75&&!lh(f)&&!ch(f);function Il(f){return f.onBeforeCompile=y=>{y.uniforms.uTime=Xt,y.uniforms.uLife=O,y.vertexShader=`uniform float uTime; uniform float uLife;
`+y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x += sin(position.y*9. + uTime*1.1)*.012*uLife; transformed.z += cos(position.x*7. + uTime*.9)*.01*uLife;`)},f}const Go=[],bs=f=>(f.transparent=!0,f.opacity=0,Go.push(f),f),Qe=(f,y=.9)=>bs(new dn({color:f,roughness:y}));function Ur(f,y,D,N,W=1,k=1,Z=1){return f.scale(W,k,Z).translate(y,D,N),f.index?f.toNonIndexed():f}const Ho=[7312456,4156230].map(f=>Il(Qe(f,.95))),ko=Il(Qe(14248271,.6)),uh=Ai([Ur(new ln(.17,0),0,.13,0),Ur(new ln(.13,0),.14,.09,.05),Ur(new ln(.12,0),-.13,.08,-.04),Ur(new ln(.11,0),.03,.22,.08)]),hh=Ai([[.08,.24,.12],[-.1,.17,.08],[.17,.15,.1],[0,.27,-.07],[-.16,.1,.06],[.12,.07,-.12]].map(([f,y,D])=>Ur(new ln(.03,0),f,y,D))),Vo=await Dl(48,Ll),Ul=Ho.map(f=>new ts(uh,f,Vo.length)),Fl=new ts(hh,ko,Vo.length),Nl=[0,0];Vo.forEach((f,y)=>{T.position.copy(f),T.rotation.set(0,Zt()*Math.PI*2,0),T.scale.setScalar(.65+Zt()*.6),T.updateMatrix();const D=y%2;Ul[D].setMatrixAt(Nl[D]++,T.matrix),Fl.setMatrixAt(y,T.matrix)}),Ul.forEach((f,y)=>{f.count=Nl[y],f.castShadow=!0,f.receiveShadow=!0,l.add(f)}),l.add(Fl);const Fr=bs(new ai({color:3817808,side:2})),Wo=new Me().setFromPoints([new C(0,0,.05),new C(0,0,-.05),new C(.26,.02,-.03)]);Wo.computeVertexNormals();const fh=Array.from({length:7},(f,y)=>{const D=new fe,N=new bt(new Nn(.035,.18,5).rotateX(Math.PI/2),Fr),W=new bt(Wo,Fr),k=new bt(Wo,Fr);return k.scale.x=-1,D.add(N,W,k),D.userData={phase:y*.45+Zt()*.3,radius:5.2+Zt()*1.4,height:7+Zt()*1.2,flap:8+Zt()*3},l.add(D),D}),Ol=Qe(15986402,.8),dh=Qe(3103301,.5),ph=Qe(14916155,.6),mh=Array.from({length:3},(f,y)=>{const D=new fe,N=y===2?1:1.6,W=new bt(new Ze(.1,10,7).scale(.85,.6,1.35),Ol),k=new bt(new Ze(.055,9,7),dh);k.position.set(0,.1,.11);const Z=new bt(new pe(.035,.02,.05),ph);Z.position.set(0,.095,.17);const ut=new bt(new Nn(.035,.08,4),Ol);return ut.position.set(0,.05,-.14),ut.rotation.x=-1.1,D.add(W,k,Z,ut),[W,k].forEach(_t=>_t.castShadow=!0),D.children.forEach(_t=>_t.renderOrder=2),D.scale.setScalar(N),D.userData={phase:y*1.7,speed:.11+y*.015},l.add(D),D}),di=Qe(14268810),Xo=Qe(15984335),qo=Qe(4863014),Yo=await Dl(70,Ll),gh=Array.from({length:3},()=>{const f=new fe,y=new bt(new Ze(.09,10,8).scale(.7,.7,1.3),di);y.position.y=.12;const D=new bt(new Ze(.05,9,7),di);D.position.set(0,.175,.12);const N=new bt(new Nn(.024,.07,6),Xo);N.position.set(0,.165,.175),N.rotation.x=Math.PI/2;const W=new bt(new Ze(.009,6,4),qo);W.position.set(0,.165,.21);const k=[-1,1].map(ne=>{const we=new bt(new Nn(.04,.13,8),di),He=new bt(new Nn(.028,.095,8).scale(1,1,.4),Xo);return He.position.set(0,-.01,.022),we.add(He),we.position.set(ne*.055,.265,.105),we.rotation.set(-.15,0,-ne*.4),we}),Z=new fe,ut=new bt(new _r(.032,.1,3,7),di);ut.position.y=.08;const _t=new bt(new Ze(.033,7,5),qo);_t.position.y=.155,Z.add(ut,_t),Z.position.set(0,.12,-.12),Z.rotation.x=-2.1;const Nt=[[-1,1],[1,1],[-1,-1],[1,-1]].map(([ne,we])=>{const He=new bt(new Ke(.011,.009,.085,5).translate(0,-.0425,0),di);return He.position.set(ne*.035,.085,we*.07),He});f.add(y,D,N,W,...k,Z,...Nt),f.scale.setScalar(1.35),y.castShadow=!0;const Kt=Yo[Math.floor(Zt()*Yo.length)];return f.position.copy(Kt),f.userData={from:Kt.clone(),to:Kt.clone(),t:1,rest:Zt()*3,ear:k[0],tail:Z,legs:Nt},l.add(f),f});function _h(f){const y=f.userData.to,D=Yo.filter(N=>Math.abs(N.y-y.y)<.03&&N.distanceTo(y)>.4&&N.distanceTo(y)<1.8);D.length&&(f.userData.from=y.clone(),f.userData.to=D[Math.floor(Zt()*D.length)].clone(),f.userData.t=0)}const Rs=Qe(13863756,.85),Cs=new fe,Zo=new bt(new Ze(.1,12,8).scale(1.35,.7,1),Rs),Bl=new bt(new Ze(.06,10,8),Rs);Bl.position.set(.13,.02,.03);const vh=[-1,1].map(f=>{const y=new bt(new Nn(.022,.05,4),Rs);return y.position.set(.14,.075,.03+f*.03),y}),Ps=new bt(new _r(.018,.16,2,6).rotateZ(Math.PI/2),Rs);Ps.position.set(-.12,-.03,.08),Ps.rotation.y=.6,Cs.add(Zo,Bl,...vh,Ps),Zo.castShadow=!0,Cs.position.set(-.98,1.02,3.48),Cs.rotation.y=-Math.PI/2+.3,l.add(Cs);const Jo=Qe(14264703,.8),zl=Qe(12873807,.85),Gl=Qe(4150624,.9),Hl=Qe(3877409,.9),xh=Qe(5007457,.8),Mh=Qe(15327176,.95),$o=Qe(8231567,.5),Ds=(f,y,D)=>{const N=new bt(new _r(f,y,2,7).translate(0,-y/2-f*.4,0),D);return N.castShadow=!0,N},Le=new fe,Nr=new fe;Nr.position.y=.3;const Or=new fe,kl=new bt(new _r(.07,.12,2,8).scale(1.15,1,.8).translate(0,.13,0),zl);kl.castShadow=!0;const Ls=new fe;Ls.position.y=.27;const Vl=new bt(new Ze(.06,10,8).translate(0,.06,0),Jo),Sh=new bt(new Ze(.064,10,6,0,Math.PI*2,0,Math.PI*.55).rotateX(-.35).translate(0,.07,-.006),Hl);Vl.castShadow=!0,Ls.add(Vl,Sh);const Qn=[-1,1].map(f=>{const y=new fe;y.position.set(f*.09,.22,0);const D=new fe;D.position.y=-.12;const N=new fe;N.position.y=-.11;const W=new bt(new Ze(.024,7,5),Jo);return N.add(W),D.add(Ds(.022,.08,Jo),N),y.add(Ds(.026,.08,zl),D),Or.add(y),{shoulder:y,elbow:D,hand:N}}),Is=[-1,1].map(f=>{const y=new fe;y.position.x=f*.043;const D=new fe;D.position.y=-.15;const N=new bt(new pe(.05,.035,.09).translate(0,-.14,.02),Hl);return D.add(Ds(.028,.1,Gl),N),y.add(Ds(.033,.1,Gl),D),Nr.add(y),{hip:y,knee:D}});Or.add(kl,Ls),Nr.add(Or),Le.add(Nr),Le.scale.setScalar(1.2);const pi=new fe,Wl=[-1,1].map(f=>{const y=new fe;return y.add(new bt(new pe(.075,.006,.1).translate(f*.0375,0,0),xh),new bt(new pe(.068,.012,.09).translate(f*.036,.009,0),Mh)),pi.add(y),y}),zn=new fe,Ko=new Oe;Ko.position.set(0,.11,.17),zn.add(new bt(new Ke(.05,.055,.1,10).translate(0,.05,0),$o),new bt(new Ke(.008,.013,.15,6).rotateX(1).translate(0,.08,.1),$o),new bt(new Ci(.04,.007,4,10,Math.PI).translate(0,.1,0).rotateY(Math.PI/2),$o),Ko),zn.traverse(f=>f.castShadow=!0);const Us=new hr(new Me().setAttribute("position",new le(new Array(24).fill(0),3)),bs(new Cu({color:12182252,size:3,sizeAttenuation:!1})));Us.frustumCulled=!1;const mi=new ts(new mn(.16,.2,1,2).translate(0,-.1,0).rotateY(Math.PI/2),bs(new dn({roughness:.95,side:2})),4);[15854039,8364992,15185763,13533797].forEach((f,y)=>mi.setColorAt(y,new jt(f))),mi.castShadow=!0;const jo=5.16,Xl=new bt(new Ze(.05,8,6),Ts);Xl.position.set(Mt.x,5.72,-1.62),l.add(Le,pi,zn,Us,mi,Xl);const Qo=Math.PI-.5,ta=_e.map(([f,y])=>[f-Math.sin(Qo)*.27,y-Math.cos(Qo)*.27,Qo]),Fs={read:[Rt.x-Math.sin(Rt.yaw)*.03,Rt.z-Math.cos(Rt.yaw)*.03,Rt.yaw],shelter:[Mt.x+.2,Mt.z-.02,0],sleep:[Mt.x+.38,Mt.z+.02,Math.PI/2],water:ta[0],hang:[1.06,-1.1,Math.PI/2]},Xi={stand:[0,0,.05,.05,-.1,-.1,0,0,0,0,.3,0,0],sit:[-.18,.32,-.75,-.75,-1.25,-1.25,-1.57,-1.57,1.35,1.35,.225,0,0],lie:[0,.1,-.45,-.55,-1.5,-1.4,.03,-.05,.08,.15,.3,-Math.PI/2,.29],water:[.22,.3,-.95,.1,-.25,-.15,0,0,0,0,.29,0,0],hang:[-.05,-.35,-2.7,-2.5,-.35,-.5,0,0,0,0,.3,0,0]};Le.rotation.order="YXZ";const tn=Xi.stand.slice(),hn=Xi.stand.slice();let ze="read",Ns=0,Gn=0;const yh=()=>Xe>.5?"sleep":Xr>.15?"shelter":Hn<9.5||Hn>=17&&Hn<19?"water":Hn<11.5&&Wr<.45?"hang":"read",Eh=()=>Wr<.45&&Xr<.05&&Hn>=9.5&&Hn<18.5,Br=new C,vn=new C,gi=new C,Th=[-1.44,-1.21,-.98,-.75];Le.position.set(Fs.read[0],jo,Fs.read[1]);function wh(f,y){const D=yh();D!==ze&&(ze=D,Ns=0),Ns+=f;const N=Pn;ze==="water"&&(Fs.water=ta[y?0:Math.floor(Ns/6)%ta.length]);const[W,k,Z]=Fs[ze];Br.set(W,Le.position.y,k);const ut=Le.position.distanceTo(Br);if(y||ut<.02)Le.position.copy(Br),Gn=0;else{const ie=Math.min(ut,f*.38),Ln=Math.atan2(Br.x-Le.position.x,Br.z-Le.position.z);Le.position.x+=Math.sin(Ln)*ie,Le.position.z+=Math.cos(Ln)*ie,Le.rotation.y=ql(Le.rotation.y,Ln,f*6),Gn=1}Gn||(Le.rotation.y=y?Z:ql(Le.rotation.y,Z,f*4));const _t=!Gn&&(ze==="read"||ze==="shelter"||ze==="sleep"),Nt=_t&&ze!=="sleep",Kt=Gn?Xi.stand:ze==="sleep"?Xi.lie:Nt?Xi.sit:Xi[ze];for(let ie=0;ie<Kt.length;ie++)hn[ie]=Kt[ie];if(Gn){const ie=Math.sin(N*9)*.55;hn[6]=ie,hn[7]=-ie,hn[8]=Math.max(0,-ie)*.8,hn[9]=Math.max(0,ie)*.8,hn[2]=-ie*.6,hn[3]=ie*.6,hn[10]=.3+Math.abs(Math.cos(N*9))*.012}else if(Nt)hn[1]+=Math.sin(N*.6)*.05,hn[4]-=Math.max(0,Math.sin(N*.45)-.92)*6;else if(ze==="water")hn[2]+=Math.sin(N*1.4)*.12;else if(ze==="hang"){const ie=Math.sin(N*2.2);hn[2]+=ie*.2,hn[3]-=ie*.2}const ne=y?1:Math.min(1,f*5);for(let ie=0;ie<tn.length;ie++)tn[ie]=Ce(tn[ie],hn[ie],ne);const we=ze==="sleep"&&!Gn?Math.sin(N*1.3)*.03:Math.sin(N*2)*.01;Or.rotation.x=tn[0],Or.scale.set(1,1+we,1+we),Ls.rotation.set(tn[1],0,ze==="sleep"&&!Gn?.3:0),Qn[0].shoulder.rotation.set(tn[2],0,-.08),Qn[1].shoulder.rotation.set(tn[3],0,.08),Qn[0].elbow.rotation.x=tn[4],Qn[1].elbow.rotation.x=tn[5],Is[0].hip.rotation.set(tn[6],0,.04),Is[1].hip.rotation.set(tn[7],0,-.04),Is[0].knee.rotation.x=tn[8],Is[1].knee.rotation.x=tn[9],Nr.position.y=tn[10],Le.rotation.x=tn[11],Le.position.y=jo+tn[12],Le.updateMatrixWorld(!0),_t?(Qn[0].hand.getWorldPosition(vn),Qn[1].hand.getWorldPosition(gi),l.worldToLocal(vn.add(gi).multiplyScalar(.5)),pi.position.copy(vn),pi.position.y+=ze==="sleep"?.01:.03,pi.rotation.set(ze==="sleep"?0:-.95,Le.rotation.y,0,"YXZ")):(pi.position.set(qt.x-.08,5.34,qt.z),pi.rotation.set(0,.4,0)),Wl[0].rotation.z=Nt?-.3:0,Wl[1].rotation.z=Nt?.3:Math.PI-.06;const He=ze==="water"&&!Gn;He?(Qn[0].hand.getWorldPosition(vn),l.worldToLocal(vn),zn.position.set(vn.x,vn.y-.13,vn.z),zn.rotation.set(.55+Math.sin(N*1.4)*.12,Le.rotation.y,0,"YXZ")):ze==="water"?(Qn[0].hand.getWorldPosition(vn),l.worldToLocal(vn),zn.position.set(vn.x,vn.y-.13,vn.z),zn.rotation.set(0,Le.rotation.y,0,"YXZ")):(zn.position.set(-.72,jo,-1.5),zn.rotation.set(0,-.6,0)),zn.updateMatrixWorld(!0);const Ji=Us.geometry.attributes.position;Ko.getWorldPosition(gi),l.worldToLocal(gi);const $i=Le.rotation.y;for(let ie=0;ie<8;ie++){const Ln=(N*1.6+ie/8)%1;Ji.setXYZ(ie,gi.x+Math.sin($i)*Ln*.06,gi.y-Ln*Ln*.32,gi.z+Math.cos($i)*Ln*.06)}Ji.needsUpdate=!0,Us.visible=He&&!y;const fn=Eh()?ze==="hang"?y?4:Gn?0:Math.min(4,Math.floor(Ns/2.5)+1):4:0;mi.count=fn;for(let ie=0;ie<fn;ie++)T.position.set(1.32,5.785,Th[ie]),T.rotation.set(0,0,Math.sin(N*1.3+ie)*.12*(1-Wr)),T.scale.setScalar(1),T.updateMatrix(),mi.setMatrixAt(ie,T.matrix);mi.instanceMatrix.needsUpdate=!0,mi.visible=fn>0}function ql(f,y,D){let N=(y-f+Math.PI)%(Math.PI*2)-Math.PI;return N<-Math.PI&&(N+=Math.PI*2),Math.abs(N)<=D?y:f+Math.sign(N)*D}const Ah={spring:14268810,summer:14466182,autumn:13609592,winter:14994854};function bh(f,y){const D=1-Xe,N=1-Math.min(Xr*1.4,1);Go.forEach(k=>k.opacity=y),ko.opacity=y*wl[Je]*(Je==="autumn"?2:1),Fr.opacity=y*D*N*(Je==="winter"?.6:1)*(1-ti*.7),di.opacity=Xo.opacity=qo.opacity=y*D*N,Go.forEach(k=>k.visible=k.opacity>.01);const W=Pn;fh.forEach((k,Z)=>{const ut=k.userData;Je==="winter"&&Z>3?k.visible=!1:k.visible=Fr.visible;const _t=W*.16+ut.phase;k.position.set(Math.cos(_t)*ut.radius,ut.height+Math.sin(W*.7+Z)*.25,Math.sin(_t)*ut.radius*.8),k.rotation.set(0,-_t,Math.sin(_t)*.15);const Nt=Math.sin(W*ut.flap+Z)*.55;k.children[1].rotation.z=Nt,k.children[2].rotation.z=-Nt}),mh.forEach((k,Z)=>{const ut=k.userData,_t=W*ut.speed*(.25+.75*D),Nt=2.3+Math.sin(_t+ut.phase)*1.4,Kt=Math.cos(_t+ut.phase),ne=.01+Math.sin(_t*2.3+Z)*.28+(Z-1)*.12;k.position.set(ne,.505+Math.sin(W*2.2+Z)*.008,Nt),k.rotation.y=Kt>=0?0:Math.PI,k.rotation.z=Math.sin(W*1.7+Z)*.05}),gh.forEach(k=>{const Z=k.userData,ut=Z.legs,_t=Z.tail;if(Z.t>=1){Z.rest-=f,Z.rest<=0&&(_h(k),Z.rest=1.5+Zt()*3.5),Z.ear.rotation.x=-.15+Math.max(0,Math.sin(W*3+Z.rest))*.25,ut.forEach(fn=>fn.rotation.x=0),_t.rotation.set(-2.1,Math.sin(W*.8+Z.rest)*.25,0);return}const Nt=Z.from,Kt=Z.to,ne=Nt.distanceTo(Kt),we=Math.max(1,Math.round(ne/.2));Z.t=Math.min(1,Z.t+f/(we*.26));const He=Z.t*we,Ji=He-Math.floor(He);k.position.lerpVectors(Nt,Kt,Z.t),k.position.y=Nt.y+Math.abs(Math.sin(Math.PI*2*Ji))*.02,k.rotation.y=Math.atan2(Kt.x-Nt.x,Kt.z-Nt.z);const $i=Math.sin(Math.PI*2*Ji)*.6;ut.forEach((fn,ie)=>fn.rotation.x=ie===0||ie===3?$i:-$i),_t.rotation.set(-1.75,0,0)}),Zo.scale.y=1+Math.sin(W*1.6)*.04,Ps.rotation.y=.6+Math.sin(W*.7)*.35}function Rh(){const f=ih[Je];Ft.forEach(({material:y,key:D})=>{const N=f[D];N!==void 0&&y.color.setHex(N)}),ws.forEach((y,D)=>y.color.setHex(f.plants[D])),Ho[0].color.setHex(f.leaf),Ho[1].color.setHex(f.leafDark),ko.color.setHex(Je==="autumn"?12070954:f.flower),di.color.setHex(Ah[Je]),oh(),Pl.value.setHex(Je==="spring"?16040917:13795631),Ge=!0}await s("renderer-state");let ea=0,Ne=0,Tn=!1,$e=!1,Yl=!0,zr=0,Os=0,na=0,ia=0,Pn=0,_i=!1,Ge=!0,Bs=!1,qi=0,Hn=13,Xe=0;const Zl=new C(0,2.4,0),Jl=new C(0,2.4,0);let Gr=0,zs=0,Gs=.4,ra=.4,Hr=new xt,sa=new xt;const Yi=new xt(0,1),oa=new xt(0,1);let kr=0,$l=0,aa=0,Kl=0,Hs=0,la=0;const Dn=a.getContext(),vi=Dn.getExtension("EXT_disjoint_timer_query_webgl2"),xi=[];function Ch(){if(!vi)return;const f=Dn.getParameter(vi.GPU_DISJOINT_EXT);for(;xi.length;){const y=xi[0];if(!f&&!Dn.getQueryParameter(y,Dn.QUERY_RESULT_AVAILABLE))break;if(xi.shift(),!f){const D=Dn.getQueryParameter(y,Dn.QUERY_RESULT)/1e6;Kl+=D,Hs++,la=Ce(la||D,D,.1)}Dn.deleteQuery(y)}}let jl=1,ti=0,ca=0;const Vr=new sl(15856366,30,60);let Wr=0,Xr=0;const Ql=new IntersectionObserver(f=>{Yl=f[0].isIntersecting,Ge=!0},{rootMargin:"80px"});Ql.observe(i);let qr=1,Zi=1;const tc=()=>{qr=i.clientWidth,Zi=i.clientHeight,a.setSize(qr,Zi),Ge=!0},ec=new ResizeObserver(tc);ec.observe(i),tc();const nc=new jt(8751499),ic=new jt(4488378),Ph=new jt(8094327),ua=new C,ha={wattch:new C(-3.65,2.65,.2),whisperbook:new C(3.35,3.55,-.65),about:new C(.1,6.4,-1.62),contact:new C(2.02,2.5,3.11)},Dh={whisperbook:{at:new C(3.4,1.7,-.55),zoom:1.6},wattch:{at:new C(-3.4,1.45,.45),zoom:1.8}},Lh=new C(0,2.4,0),Yr=new jt;function fa(){const f=mr.clamp((Hn-6)/14,0,1),y=Math.sin(f*Math.PI);Xe=pn(19.2,21.5,Hn)+(1-pn(5,6.6,Hn)),Xe=mr.clamp(Xe,0,1),h.position.set(Ce(-9,9,f),8+y*8,Ce(9,6,y));const D=Wr*.6+Xr*.25;jl=(.35+.65*y)*(1-Xe*.7)*(1-D*.9),Yr.setHex(16751964).lerp(new jt(16773076),pn(0,.55,y)),Yr.lerp(new jt(10466536),Xe),h.color.copy(Yr),h.intensity=(.9+2.4*y)*(1-Xe*.82)*(1-D*.7),Yr.lerp(new jt(14673388),D*.6),h.color.copy(Yr),u.intensity=(1.4+1.1*y)*(1-Xe*.55),u.color.setHex(16251903).lerp(new jt(7177405),Xe),u.groundColor.setHex(8622195).lerp(new jt(2831696),Xe),p.intensity=.7*(1-Xe*.6),Ge=!0}fa();const rc=f=>{f.preventDefault(),xi.length=0,i.dispatchEvent(new Event("garden-context-lost")),t.forEach(y=>{y.style.visibility="hidden",y.tabIndex=-1})},sc=()=>{i.dispatchEvent(new Event("garden-context-restored")),t.forEach(f=>f.style.visibility="")};a.domElement.addEventListener("webglcontextlost",rc),a.domElement.addEventListener("webglcontextrestored",sc);let oc=!0;function ac(f){if(_i)return;if(na=requestAnimationFrame(ac),!Yl||document.hidden){ia=f;return}const y=Math.min((f-ia)/1e3,.05);ia=f,qi<1&&(qi=$e||Tn?1:Math.min(1,qi+y/3.2),Ge=!0);const D=hi.some(De=>De.age<1),N=Math.abs(ea-Ne)>1e-4||Math.abs(Os-zr)>1e-4||Math.abs(zs-Gr)>5e-4||Math.abs(ra-Gs)>5e-4||Math.abs(ca-ti)>.002||Hr.distanceTo(sa)>5e-4||Yi.distanceTo(oa)>5e-4||Ju()||D;if((Tn||Ne<.5)&&!N&&!Ge)return;Ge=!1;const W=performance.now();Ne=Ce(Ne,ea,$e?1:Math.min(y*7,1)),zr=Ce(zr,Os,$e?1:Math.min(y*4,1)),Tn||(Pn+=y);const k=$e?1:Math.min(y*3.2,1);Gr=Ce(Gr,zs,k),Gs=Ce(Gs,ra,k),Hr.lerp(sa,k),Yi.lerp(oa,k),Zl.lerp(Jl,k);const Z=qi*qi*(3-2*qi),ut=ft.geometry.attributes.position.count;ft.geometry.setDrawRange(0,Math.floor(ut*Z/2)*2),Xt.value=Pn;const _t=pn(.69,.96,Ne);O.value=Tn?0:_t;const Nt=pn(.07,.3,Ne),Kt=pn(.35,.6,Ne);l.scale.setScalar(Ce(.77,1,pn(0,.62,Ne))),l.scale.y*=Ce(.72,1,pn(.1,.55,Ne)),l.rotation.y=zr,Ft.forEach(({material:De,flora:qe,glass:wn,key:Ws})=>{const Nh=Ws==="flower"||Ws==="coral"?wl[Je]:1;Za(De,qe?_t*Nh:Kt*(wn?.38:1))}),Za(yl,Kt),ws.forEach(De=>Za(De,_t)),Dt.color.copy(nc).lerp(ic,Nt).lerp(Ph,Kt),Dt.opacity=Ce(Bs?.38:.21,Bs?.85:.6,Nt)*(1-Kt*.92),Ir.color.copy(Dt.color),Ir.opacity=Dt.opacity*(1-Kt),Ir.visible=Ir.opacity>.003,wt.opacity=.055*(1-Nt),Et.opacity=pn(.06,.3,Ne)*(1-pn(.45,.62,Ne))*.38,m.opacity=Kt*.15*jl,dt.material.opacity=Kt,pt.uniforms.uOpacity.value=pn(.46,.63,Ne);const ne=Xe*Kt;Ku.forEach(De=>De.intensity=ne*2.6),Ts.opacity=ne*.95,Ts.visible=ne>.01,Sl.value=Xe*_t,_l.opacity=_t*(Je==="summer"||Je==="spring"?1:0),zo.opacity=_t,zo.visible=_t>.01,Rl.value=_t*(Je==="autumn"?.95:Je==="spring"?.85:0)*(1-ti*.65),ti=Ce(ti,ca,$e?1:Math.min(y*1.5,1)),ti>.002?(o.fog=Vr,Vr.near=Ce(30,9.5,ti),Vr.far=Ce(60,27,ti)):o.fog=null,rt.value=pn(.52,.64,Ne),Oi.opacity=_t,Bi.opacity=_t,gs.opacity=_t*.21,Oi.emissiveIntensity=Xe*.5,Bi.emissiveIntensity=Xe*.35,_s.value=_t*(.3+.7*Xe),Cr.opacity=pn(.15,.3,Ne)*(1-_t)*.46+_t*Xe*.55,w.forEach((De,qe)=>{const wn=Pn*.105*_t+qe*2.08;De.position.set(Math.cos(wn)*(3.6+qe*.22),3.35+qe*.62+Math.sin(wn*2+qe)*.22,Math.sin(wn)*(2.95+qe*.2)),De.rotation.set(Math.sin(wn*2)*.055*_t,-wn+.5,Math.cos(wn)*.075*_t)}),$u(y,Kt,Z,Nt),bh(Tn||$e?0:y,_t),wh(Tn||$e?0:y,Tn||$e),gl.forEach((De,qe)=>{De.position.set(Math.cos(Pn*.2+qe*1.9)*(2+qe*.25),1.5+Math.sin(Pn*.4+qe)*.35+qe*.4,Math.sin(Pn*.2+qe*1.9)*2),De.rotation.y=Pn*.2+qe,De.children.forEach((wn,Ws)=>wn.rotation.y=Math.sin(Pn*8+qe)*.7*(Ws===0?1:-1))}),hi.forEach(De=>{De.age=$e?1:Math.min(1,De.age+y*1.6);const qe=De.age,wn=1+2.2*Math.pow(qe-1,3)+1.2*Math.pow(qe-1,2);De.group.scale.setScalar(Math.max(.001,wn*De.group.userData.size))});const we=Math.max(.05,Yi.y-Yi.x),He=qr/(Zi*we),fn=(innerWidth<=760&&innerHeight>520?Math.max(12.8,15.2/He):He<.9?15.3/He:15.6)/2/(1+Gr*Gs),ie=fn/we;c.left=-fn*He-Hr.x*fn*He*2,c.right=fn*He-Hr.x*fn*He*2,c.top=(Yi.x+Yi.y)*ie-Hr.y*fn*2,c.bottom=c.top-2*ie,Cl.value=Zi/(2*ie)*.2*a.getPixelRatio();const Ln=Ce(.69,.78,pn(.3,1,Ne))-(1-Z)*.45,ks=Lh.clone().lerp(Zl,Gr);c.position.set(ks.x+Math.sin(Ln)*15,ks.y-2.4+Ce(14,12,Kt),ks.z+Math.cos(Ln)*15),c.lookAt(ks),c.updateProjectionMatrix(),c.updateMatrixWorld(),l.updateMatrixWorld();for(const De of t)ua.copy(ha[De.dataset.spot]).applyMatrix4(l.matrixWorld).project(c),De.style.left=`${(ua.x*.5+.5)*qr}px`,De.style.top=`${(-ua.y*.5+.5)*Zi}px`;Ch();const Vs=vi&&xi.length<4?Dn.createQuery():null;Vs&&Dn.beginQuery(vi.TIME_ELAPSED_EXT,Vs);const Fh=performance.now();a.render(o,c),Vs&&(Dn.endQuery(vi.TIME_ELAPSED_EXT),xi.push(Vs)),oc&&(oc=!1,performance.mark("notebook:first-render"),performance.measure("notebook:scene-to-first-render","notebook:scene-construction:start","notebook:first-render")),kr=Ce(kr||1,performance.now()-Fh,.1),i.dataset.progress=Ne.toFixed(3),i.dataset.drawCalls=String(a.info.render.calls),i.dataset.triangles=String(a.info.render.triangles),i.dataset.waterfall=rt.value.toFixed(2),i.dataset.drones=String(w.length),i.dataset.animationTime=Pn.toFixed(3),i.dataset.meter=((Pt+Math.PI/2)/Math.PI).toFixed(3),i.dataset.narrating=Vi.toFixed(2),i.dataset.path=Pr===null?"none":String(Pr),i.dataset.postbox=Dr,i.dataset.flag=Lr.toFixed(2),$l+=performance.now()-W,aa++}await s("ground-litter"),await sh(),r(),n(),na=requestAnimationFrame(ac);async function Ih(){if(_i)return;const f=is("shader-warmup"),y=[a.compileAsync(o,c)];if(await dr(),_i)return;const D=Ft.map(({material:ne})=>ne).filter(ne=>ne.transparent&&!ne.side);if(D.forEach(ne=>ne.transparent=!1),y.push(a.compileAsync(o,c)),D.forEach(ne=>{ne.transparent=!0,ne.needsUpdate=!0}),await dr(),_i)return;const N=o.fog;if(o.fog=Vr,y.push(a.compileAsync(o,c)),o.fog=N,await dr(),_i)return;const W=new Gu({depthPacking:3201,side:1}),k=new pe,Z=new fe;Z.add(new bt(k,W),new ts(k,W,1));const ut=new li(1,1),_t=o.fog;o.fog=null,a.setRenderTarget(ut),y.push(a.compileAsync(Z,c,o)),a.setRenderTarget(null),o.fog=_t,await Promise.all(y),f(),ut.dispose(),k.dispose();const Nt=[...a.info.programs??[]],Kt=()=>{const ne=Nt.pop();if(_i)return;if(!ne){performance.mark("notebook:shader-first-use-complete");return}const we=is("shader-first-use");ne.getUniforms(),we(),Uh(Kt,{timeout:1e3})};Kt()}const Uh=window.requestIdleCallback??(f=>setTimeout(f,200));return requestAnimationFrame(()=>Ih().catch(f=>console.warn("Garden shader warm-up failed.",f))),{setNarrating(f){Oo=f,Ge=!0},highlightPath(f){f!==null&&Zu(f),Pr=f,Ge=!0},setPostbox(f){f==="sent"&&(Tn||$e||Es<.5?f="idle":Xn=0),!(f==="idle"&&Xn>=0)&&(Dr=f,Ge=!0)},setProgress(f,y=!1){ea=f,$e=y,Ge=!0,y&&(Ne=f)},setTheme(f){Bs=f,nc.setHex(f?9419994:8751499),ic.setHex(f?12643071:4488378),Et.color.setHex(f?7451620:6917045),wt.color.setHex(f?9750761:7830397),Cr.color.setHex(f?12643071:5866413),a.toneMappingExposure=f?.95:1.2,Ge=!0},setMotion(f){Tn=f,Ge=!0},rotate(){Os+=Math.PI/6},rotateBy(f){Os+=f,Ge=!0},plantAt(f,y){if(hi.length>=As)return As;Tl.set(f/qr*2-1,-(y/Zi)*2+1),Wi.setFromCamera(Tl,c);const D=Wi.intersectObjects(mt,!1)[0];return!D?.face||D.face.normal.y<.7?-1:El(l.worldToLocal(D.point.clone()))},setSeason(f){Je=f,Rh()},setFog(f,y){ca=f,Vr.color.setHex(y),Ge=!0},setTally(f){Ue=f;const y=Fe??null;Es>.01&&(f===null!=(y===null)||f!==null&&Math.abs(f-y)>=5e-4)&&(Ge=!0)},setWeather(f,y){Wr=f,Xr=y,fa()},setHour(f){Hn=f,fa()},frame(f,y){oa.set(f,y),Ge=!0},focus(f,y=0,D=0){if(f&&ha[f]){const N=Dh[f];Jl.copy(N?.at??ha[f]).multiply(l.scale).applyAxisAngle(new C(0,1,0),zr),zs=1,ra=N?.zoom??.4}else zs=0;sa.set(y,D),Ge=!0},stats(){return{triangles:a.info.render.triangles,calls:a.info.render.calls,ms:kr,gpuFrameMs:vi&&Hs?la:null,cpuMs:$l,gpuMs:vi?Hs?Kl/Hs*aa:0:null,frames:aa}},plant(){if(hi.length>=As)return As;const f=hi.length%12;return El(new C(-4.3+f*.78+(Zt()-.5)*.2,.36,3.95))},dispose(){_i=!0,cancelAnimationFrame(na),xi.forEach(D=>Dn.deleteQuery(D)),Ql.disconnect(),ec.disconnect(),a.domElement.removeEventListener("webglcontextlost",rc),a.domElement.removeEventListener("webglcontextrestored",sc);const f=new Set,y=new Set;o.traverse(D=>{(D instanceof bt||D instanceof To||D instanceof hr)&&(f.add(D.geometry),(Array.isArray(D.material)?D.material:[D.material]).forEach(N=>y.add(N)))}),f.forEach(D=>D.dispose()),y.forEach(D=>D.dispose()),Ht.dispose(),En.dispose(),a.dispose(),a.domElement.remove()}}}export{n_ as createGarden};
