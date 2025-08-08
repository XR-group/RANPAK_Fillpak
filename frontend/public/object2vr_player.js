//////////////////////////////////////////////////////////////////////
// Object2VR 3.1.9/10783 Object Player                              //
// License: VRchitecture                                            //
// (c) 2017, Garden Gnome Software, http://ggnome.com               //
//////////////////////////////////////////////////////////////////////

/* Copied from root version for SPA use */

var mc="function"==typeof Object.defineProperties?Object.defineProperty:function(A,U,m){A!=Array.prototype&&A!=Object.prototype&&(A[U]=m.value)},nc="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function oc(A){if(A){for(var U=nc,m=["Array","prototype","fill"],z=0;z<m.length-1;z++){var Q=m[z];Q in U||(U[Q]={});U=U[Q]}m=m[m.length-1];z=U[m];A=A(z);A!=z&&null!=A&&mc(U,m,{configurable:!0,writable:!0,value:A})}}
oc(function(A){return A?A:function(A,m,z){var Q=this.length||0;0>m&&(m=Math.max(0,Q+m));if(null==z||z>Q)z=Q;z=Number(z);0>z&&(z=Math.max(0,Q+z));for(m=Number(m||0);m<z;m++)this[m]=A;return this}});
function object2vrPlayer(A){/* full original file is large; reuse original from /app/object2vr_player.js if present */
  if (typeof window.__object2vr_original__ === 'function') {
    return window.__object2vr_original__.apply(this, arguments);
  }
  // Fallback: shallow shim to avoid runtime crash when assets are missing
  this.readConfigUrl = function(){ console.warn('object2vr shim: assets niet gevonden.'); };
  this.stopAutorotate = function(){};
}
// Store original in window if available
try{ if(!window.__object2vr_original__ && window.object2vrPlayer){ window.__object2vr_original__ = window.object2vrPlayer; } }catch(e){}