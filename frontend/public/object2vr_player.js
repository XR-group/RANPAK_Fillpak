//////////////////////////////////////////////////////////////////////
// Object2VR 3.1.9/10783 Object Player                              //
// License: VRchitecture                                            //
// (c) 2017, Garden Gnome Software, http://ggnome.com               //
//////////////////////////////////////////////////////////////////////

/* Shimmed player for environments zonder originele image-tiles. */
window.__O2VR_SHIM__ = true;
function object2vrPlayer(){
  this.readConfigUrl = function(){ console.warn('object2vr shim actief: geen 360° assets.'); };
  this.stopAutorotate = function(){};
}
window.object2vrPlayer = window.object2vrPlayer || object2vrPlayer;