// Garden Gnome Software - Skin
// Object2VR 3.1.9/10783
// Filename: Ranpak_O2VR_Skin_geami_hv.ggsk
// Generated Wed Jul 21 13:15:08 2021

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_geami__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_geami__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_wrappak__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_wrappak__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_padpak__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_padpak__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_fillpak__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_cat_fillpak__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_ms_cabinet__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_ms_cabinet__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_hv_under_table__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_hv_under_table__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_sheets__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_sheets__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_mx_3d__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_mx_3d__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_wrappak_protector__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_wrappak_protector__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_lc__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_lc__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_jr__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_jr__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_guardian__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_guardian__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_cc__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_padpak_cc__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_go__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_go__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_ttc__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_ttc__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_tt__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_tt__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_trident__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_trident__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_m__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak_m__a.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak__o.png';
		preLoadImg.src=basePath + 'geami_hv_GUI/button_fillpak__a.png';
	}
	
	this.addSkin=function() {
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_image';
		this._info.ggType='image';
		hs ='position:absolute;';
		hs+='left: 64px;';
		hs+='top:  128px;';
		hs+='width: 574px;';
		hs+='height: 179px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_image';
		this._info__img.setAttribute('src',basePath + 'geami_hv_GUI/info.png');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._info__img.className='ggskin ggskin_image';
		this._info__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._info__img);
		this._info.appendChild(this._info__img);
		this.divSkin.appendChild(this._info);
		this._logo_01=document.createElement('div');
		this._logo_01.ggId="Logo_01";
		this._logo_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo_01.ggVisible=true;
		this._logo_01.className='ggskin ggskin_image';
		this._logo_01.ggType='image';
		hs ='position:absolute;';
		hs+='left: -4px;';
		hs+='top:  -5px;';
		hs+='width: 200px;';
		hs+='height: 93px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._logo_01.setAttribute('style',hs);
		this._logo_01__img=document.createElement('img');
		this._logo_01__img.className='ggskin ggskin_image';
		this._logo_01__img.setAttribute('src',basePath + 'geami_hv_GUI/logo_01.png');
		this._logo_01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._logo_01__img.className='ggskin ggskin_image';
		this._logo_01__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._logo_01__img);
		this._logo_01.appendChild(this._logo_01__img);
		this.divSkin.appendChild(this._logo_01);
		this._button_cat_geami=document.createElement('div');
		this._button_cat_geami.ggId="button_cat_geami";
		this._button_cat_geami.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._button_cat_geami.ggVisible=true;
		this._button_cat_geami.className='ggskin ggskin_button';
		this._button_cat_geami.ggType='button';
		this._button_cat_geami.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-162 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -162px;';
		hs+='top:  15px;';
		hs+='width: 136px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._button_cat_geami.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_cat_geami.setAttribute('style',hs);
		this._button_cat_geami__img=document.createElement('img');
		this._button_cat_geami__img.className='ggskin ggskin_button';
		this._button_cat_geami__img.setAttribute('src',basePath + 'geami_hv_GUI/button_cat_geami.png');
		this._button_cat_geami__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_cat_geami__img.className='ggskin ggskin_button';
		this._button_cat_geami__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_cat_geami__img);
		this._button_cat_geami.appendChild(this._button_cat_geami__img);
		this._button_cat_geami.onclick=function () {
			me._cat_geami.style[domTransition]='none';
			me._cat_geami.style.visibility='inherit';
			me._cat_geami.ggVisible=true;
			me._cat_fillpak.style[domTransition]='none';
			me._cat_fillpak.style.visibility='hidden';
			me._cat_fillpak.ggVisible=false;
			me._cat_padpak.style[domTransition]='none';
			me._cat_padpak.style.visibility='hidden';
			me._cat_padpak.ggVisible=false;
			me._cat_wrappak.style[domTransition]='none';
			me._cat_wrappak.style.visibility='hidden';
			me._cat_wrappak.ggVisible=false;
			me._img_cat_geami.style[domTransition]='none';
			me._img_cat_geami.style.visibility='inherit';
			me._img_cat_geami.ggVisible=true;
			me._img_cat_fillpak.style[domTransition]='none';
			me._img_cat_fillpak.style.visibility='hidden';
			me._img_cat_fillpak.ggVisible=false;
			me._img_cat_padpak.style[domTransition]='none';
			me._img_cat_padpak.style.visibility='hidden';
			me._img_cat_padpak.ggVisible=false;
			me._img_cat_wrappak.style[domTransition]='none';
			me._img_cat_wrappak.style.visibility='hidden';
			me._img_cat_wrappak.ggVisible=false;
		}
		this._button_cat_geami.onmouseover=function () {
			me._button_cat_geami__img.src=basePath + 'geami_hv_GUI/button_cat_geami__o.png';
			me._button_cat_geami.ggIsOver=true;
		}
		this._button_cat_geami.onmouseout=function () {
			me._button_cat_geami__img.src=basePath + 'geami_hv_GUI/button_cat_geami.png';
			me._button_cat_geami.ggIsOver=false;
		}
		this._button_cat_geami.onmousedown=function () {
			me._button_cat_geami__img.src=basePath + 'geami_hv_GUI/button_cat_geami__a.png';
		}
		this._button_cat_geami.onmouseup=function () {
			if (me._button_cat_geami.ggIsOver) {
				me._button_cat_geami__img.src=basePath + 'geami_hv_GUI/button_cat_geami__o.png';
			} else {
				me._button_cat_geami__img.src=basePath + 'geami_hv_GUI/button_cat_geami.png';
			}
		}
		this._img_cat_geami=document.createElement('div');
		this._img_cat_geami.ggId="img_cat_geami";
		this._img_cat_geami.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_cat_geami.ggVisible=true;
		this._img_cat_geami.className='ggskin ggskin_button';
		this._img_cat_geami.ggType='button';
		this._img_cat_geami.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-136 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -136px;';
		hs+='top:  0px;';
		hs+='width: 136px;';
		hs+='height: 47px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_cat_geami.setAttribute('style',hs);
		this._img_cat_geami__img=document.createElement('img');
		this._img_cat_geami__img.className='ggskin ggskin_button';
		this._img_cat_geami__img.setAttribute('src',basePath + 'geami_hv_GUI/img_cat_geami.png');
		this._img_cat_geami__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._img_cat_geami__img.className='ggskin ggskin_button';
		this._img_cat_geami__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._img_cat_geami__img);
		this._img_cat_geami.appendChild(this._img_cat_geami__img);
		this._button_cat_geami.appendChild(this._img_cat_geami);
		this.divSkin.appendChild(this._button_cat_geami);
		this._button_cat_wrappak=document.createElement('div');
		this._button_cat_wrappak.ggId="button_cat_wrappak";
		this._button_cat_wrappak.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._button_cat_wrappak.ggVisible=true;
		this._button_cat_wrappak.className='ggskin ggskin_button';
		this._button_cat_wrappak.ggType='button';
		this._button_cat_wrappak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-336 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -336px;';
		hs+='top:  15px;';
		hs+='width: 205px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._button_cat_wrappak.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_cat_wrappak.setAttribute('style',hs);
		this._button_cat_wrappak__img=document.createElement('img');
		this._button_cat_wrappak__img.className='ggskin ggskin_button';
		this._button_cat_wrappak__img.setAttribute('src',basePath + 'geami_hv_GUI/button_cat_wrappak.png');
		this._button_cat_wrappak__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_cat_wrappak__img.className='ggskin ggskin_button';
		this._button_cat_wrappak__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_cat_wrappak__img);
		this._button_cat_wrappak.appendChild(this._button_cat_wrappak__img);
		this._button_cat_wrappak.onclick=function () {
			me._cat_wrappak.style[domTransition]='none';
			me._cat_wrappak.style.visibility='inherit';
			me._cat_wrappak.ggVisible=true;
			me._cat_fillpak.style[domTransition]='none';
			me._cat_fillpak.style.visibility='hidden';
			me._cat_fillpak.ggVisible=false;
			me._cat_padpak.style[domTransition]='none';
			me._cat_padpak.style.visibility='hidden';
			me._cat_padpak.ggVisible=false;
			me._cat_geami.style[domTransition]='none';
			me._cat_geami.style.visibility='hidden';
			me._cat_geami.ggVisible=false;
			me._img_cat_wrappak.style[domTransition]='none';
			me._img_cat_wrappak.style.visibility='inherit';
			me._img_cat_wrappak.ggVisible=true;
			me._img_cat_fillpak.style[domTransition]='none';
			me._img_cat_fillpak.style.visibility='hidden';
			me._img_cat_fillpak.ggVisible=false;
			me._img_cat_padpak.style[domTransition]='none';
			me._img_cat_padpak.style.visibility='hidden';
			me._img_cat_padpak.ggVisible=false;
			me._img_cat_geami.style[domTransition]='none';
			me._img_cat_geami.style.visibility='hidden';
			me._img_cat_geami.ggVisible=false;
		}
		this._button_cat_wrappak.onmouseover=function () {
			me._button_cat_wrappak__img.src=basePath + 'geami_hv_GUI/button_cat_wrappak__o.png';
			me._button_cat_wrappak.ggIsOver=true;
		}
		this._button_cat_wrappak.onmouseout=function () {
			me._button_cat_wrappak__img.src=basePath + 'geami_hv_GUI/button_cat_wrappak.png';
			me._button_cat_wrappak.ggIsOver=false;
		}
		this._button_cat_wrappak.onmousedown=function () {
			me._button_cat_wrappak__img.src=basePath + 'geami_hv_GUI/button_cat_wrappak__a.png';
		}
		this._button_cat_wrappak.onmouseup=function () {
			if (me._button_cat_wrappak.ggIsOver) {
				me._button_cat_wrappak__img.src=basePath + 'geami_hv_GUI/button_cat_wrappak__o.png';
			} else {
				me._button_cat_wrappak__img.src=basePath + 'geami_hv_GUI/button_cat_wrappak.png';
			}
		}
		this._img_cat_wrappak=document.createElement('div');
		this._img_cat_wrappak.ggId="img_cat_wrappak";
		this._img_cat_wrappak.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_cat_wrappak.ggVisible=true;
		this._img_cat_wrappak.className='ggskin ggskin_button';
		this._img_cat_wrappak.ggType='button';
		this._img_cat_wrappak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-205 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -205px;';
		hs+='top:  0px;';
		hs+='width: 205px;';
		hs+='height: 47px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_cat_wrappak.setAttribute('style',hs);
		this._img_cat_wrappak__img=document.createElement('img');
		this._img_cat_wrappak__img.className='ggskin ggskin_button';
		this._img_cat_wrappak__img.setAttribute('src',basePath + 'geami_hv_GUI/img_cat_wrappak.png');
		this._img_cat_wrappak__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._img_cat_wrappak__img.className='ggskin ggskin_button';
		this._img_cat_wrappak__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._img_cat_wrappak__img);
		this._img_cat_wrappak.appendChild(this._img_cat_wrappak__img);
		this._button_cat_wrappak.appendChild(this._img_cat_wrappak);
		this.divSkin.appendChild(this._button_cat_wrappak);
		this._button_cat_padpak=document.createElement('div');
		this._button_cat_padpak.ggId="button_cat_padpak";
		this._button_cat_padpak.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._button_cat_padpak.ggVisible=true;
		this._button_cat_padpak.className='ggskin ggskin_button';
		this._button_cat_padpak.ggType='button';
		this._button_cat_padpak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-473 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -473px;';
		hs+='top:  15px;';
		hs+='width: 166px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._button_cat_padpak.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_cat_padpak.setAttribute('style',hs);
		this._button_cat_padpak__img=document.createElement('img');
		this._button_cat_padpak__img.className='ggskin ggskin_button';
		this._button_cat_padpak__img.setAttribute('src',basePath + 'geami_hv_GUI/button_cat_padpak.png');
		this._button_cat_padpak__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_cat_padpak__img.className='ggskin ggskin_button';
		this._button_cat_padpak__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_cat_padpak__img);
		this._button_cat_padpak.appendChild(this._button_cat_padpak__img);
		this._button_cat_padpak.onclick=function () {
			me._cat_padpak.style[domTransition]='none';
			me._cat_padpak.style.visibility='inherit';
			me._cat_padpak.ggVisible=true;
			me._cat_fillpak.style[domTransition]='none';
			me._cat_fillpak.style.visibility='hidden';
			me._cat_fillpak.ggVisible=false;
			me._cat_wrappak.style[domTransition]='none';
			me._cat_wrappak.style.visibility='hidden';
			me._cat_wrappak.ggVisible=false;
			me._cat_geami.style[domTransition]='none';
			me._cat_geami.style.visibility='hidden';
			me._cat_geami.ggVisible=false;
			me._img_cat_padpak.style[domTransition]='none';
			me._img_cat_padpak.style.visibility='inherit';
			me._img_cat_padpak.ggVisible=true;
			me._img_cat_fillpak.style[domTransition]='none';
			me._img_cat_fillpak.style.visibility='hidden';
			me._img_cat_fillpak.ggVisible=false;
			me._img_cat_wrappak.style[domTransition]='none';
			me._img_cat_wrappak.style.visibility='hidden';
			me._img_cat_wrappak.ggVisible=false;
			me._img_cat_geami.style[domTransition]='none';
			me._img_cat_geami.style.visibility='hidden';
			me._img_cat_geami.ggVisible=false;
		}
		this._button_cat_padpak.onmouseover=function () {
			me._button_cat_padpak__img.src=basePath + 'geami_hv_GUI/button_cat_padpak__o.png';
			me._button_cat_padpak.ggIsOver=true;
		}
		this._button_cat_padpak.onmouseout=function () {
			me._button_cat_padpak__img.src=basePath + 'geami_hv_GUI/button_cat_padpak.png';
			me._button_cat_padpak.ggIsOver=false;
		}
		this._button_cat_padpak.onmousedown=function () {
			me._button_cat_padpak__img.src=basePath + 'geami_hv_GUI/button_cat_padpak__a.png';
		}
		this._button_cat_padpak.onmouseup=function () {
			if (me._button_cat_padpak.ggIsOver) {
				me._button_cat_padpak__img.src=basePath + 'geami_hv_GUI/button_cat_padpak__o.png';
			} else {
				me._button_cat_padpak__img.src=basePath + 'geami_hv_GUI/button_cat_padpak.png';
			}
		}
		this._img_cat_padpak=document.createElement('div');
		this._img_cat_padpak.ggId="img_cat_padpak";
		this._img_cat_padpak.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_cat_padpak.ggVisible=true;
		this._img_cat_padpak.className='ggskin ggskin_button';
		this._img_cat_padpak.ggType='button';
		this._img_cat_padpak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-166 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -166px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 47px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_cat_padpak.setAttribute('style',hs);
		this._img_cat_padpak__img=document.createElement('img');
		this._img_cat_padpak__img.className='ggskin ggskin_button';
		this._img_cat_padpak__img.setAttribute('src',basePath + 'geami_hv_GUI/img_cat_padpak.png');
		this._img_cat_padpak__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._img_cat_padpak__img.className='ggskin ggskin_button';
		this._img_cat_padpak__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._img_cat_padpak__img);
		this._img_cat_padpak.appendChild(this._img_cat_padpak__img);
		this._button_cat_padpak.appendChild(this._img_cat_padpak);
		this.divSkin.appendChild(this._button_cat_padpak);
		this._button_cat_fillpak=document.createElement('div');
		this._button_cat_fillpak.ggId="button_cat_fillpak";
		this._button_cat_fillpak.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._button_cat_fillpak.ggVisible=true;
		this._button_cat_fillpak.className='ggskin ggskin_button';
		this._button_cat_fillpak.ggType='button';
		this._button_cat_fillpak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-610 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -610px;';
		hs+='top:  15px;';
		hs+='width: 167px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._button_cat_fillpak.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_cat_fillpak.setAttribute('style',hs);
		this._button_cat_fillpak__img=document.createElement('img');
		this._button_cat_fillpak__img.className='ggskin ggskin_button';
		this._button_cat_fillpak__img.setAttribute('src',basePath + 'geami_hv_GUI/button_cat_fillpak.png');
		this._button_cat_fillpak__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_cat_fillpak__img.className='ggskin ggskin_button';
		this._button_cat_fillpak__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_cat_fillpak__img);
		this._button_cat_fillpak.appendChild(this._button_cat_fillpak__img);
		this._button_cat_fillpak.onclick=function () {
			me._cat_fillpak.style[domTransition]='none';
			me._cat_fillpak.style.visibility='inherit';
			me._cat_fillpak.ggVisible=true;
			me._cat_padpak.style[domTransition]='none';
			me._cat_padpak.style.visibility='hidden';
			me._cat_padpak.ggVisible=false;
			me._cat_wrappak.style[domTransition]='none';
			me._cat_wrappak.style.visibility='hidden';
			me._cat_wrappak.ggVisible=false;
			me._cat_geami.style[domTransition]='none';
			me._cat_geami.style.visibility='hidden';
			me._cat_geami.ggVisible=false;
			me._img_cat_fillpak.style[domTransition]='none';
			me._img_cat_fillpak.style.visibility='inherit';
			me._img_cat_fillpak.ggVisible=true;
			me._img_cat_padpak.style[domTransition]='none';
			me._img_cat_padpak.style.visibility='hidden';
			me._img_cat_padpak.ggVisible=false;
			me._img_cat_wrappak.style[domTransition]='none';
			me._img_cat_wrappak.style.visibility='hidden';
			me._img_cat_wrappak.ggVisible=false;
			me._img_cat_geami.style[domTransition]='none';
			me._img_cat_geami.style.visibility='hidden';
			me._img_cat_geami.ggVisible=false;
		}
		this._button_cat_fillpak.onmouseover=function () {
			me._button_cat_fillpak__img.src=basePath + 'geami_hv_GUI/button_cat_fillpak__o.png';
			me._button_cat_fillpak.ggIsOver=true;
		}
		this._button_cat_fillpak.onmouseout=function () {
			me._button_cat_fillpak__img.src=basePath + 'geami_hv_GUI/button_cat_fillpak.png';
			me._button_cat_fillpak.ggIsOver=false;
		}
		this._button_cat_fillpak.onmousedown=function () {
			me._button_cat_fillpak__img.src=basePath + 'geami_hv_GUI/button_cat_fillpak__a.png';
		}
		this._button_cat_fillpak.onmouseup=function () {
			if (me._button_cat_fillpak.ggIsOver) {
				me._button_cat_fillpak__img.src=basePath + 'geami_hv_GUI/button_cat_fillpak__o.png';
			} else {
				me._button_cat_fillpak__img.src=basePath + 'geami_hv_GUI/button_cat_fillpak.png';
			}
		}
		this._img_cat_fillpak=document.createElement('div');
		this._img_cat_fillpak.ggId="img_cat_fillpak";
		this._img_cat_fillpak.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._img_cat_fillpak.ggVisible=true;
		this._img_cat_fillpak.className='ggskin ggskin_button';
		this._img_cat_fillpak.ggType='button';
		this._img_cat_fillpak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-167 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -167px;';
		hs+='top:  0px;';
		hs+='width: 167px;';
		hs+='height: 47px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_cat_fillpak.setAttribute('style',hs);
		this._img_cat_fillpak__img=document.createElement('img');
		this._img_cat_fillpak__img.className='ggskin ggskin_button';
		this._img_cat_fillpak__img.setAttribute('src',basePath + 'geami_hv_GUI/img_cat_fillpak.png');
		this._img_cat_fillpak__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._img_cat_fillpak__img.className='ggskin ggskin_button';
		this._img_cat_fillpak__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._img_cat_fillpak__img);
		this._img_cat_fillpak.appendChild(this._img_cat_fillpak__img);
		this._button_cat_fillpak.appendChild(this._img_cat_fillpak);
		this.divSkin.appendChild(this._button_cat_fillpak);
		this._cat_geami=document.createElement('div');
		this._cat_geami.ggId="CAT_geami";
		this._cat_geami.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cat_geami.ggVisible=true;
		this._cat_geami.className='ggskin ggskin_rectangle';
		this._cat_geami.ggType='rectangle';
		this._cat_geami.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-29 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -29px;';
		hs+='top:  88px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		this._cat_geami.setAttribute('style',hs);
		this._button_geami_ms_cabinet=document.createElement('div');
		this._button_geami_ms_cabinet.ggId="button_geami_ms_cabinet";
		this._button_geami_ms_cabinet.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_ms_cabinet.ggVisible=true;
		this._button_geami_ms_cabinet.className='ggskin ggskin_button';
		this._button_geami_ms_cabinet.ggType='button';
		this._button_geami_ms_cabinet.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-384 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -384px;';
		hs+='top:  587px;';
		hs+='width: 352px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_ms_cabinet.setAttribute('style',hs);
		this._button_geami_ms_cabinet__img=document.createElement('img');
		this._button_geami_ms_cabinet__img.className='ggskin ggskin_button';
		this._button_geami_ms_cabinet__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_ms_cabinet.png');
		this._button_geami_ms_cabinet__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_ms_cabinet__img.className='ggskin ggskin_button';
		this._button_geami_ms_cabinet__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_ms_cabinet__img);
		this._button_geami_ms_cabinet.appendChild(this._button_geami_ms_cabinet__img);
		this._button_geami_ms_cabinet.onclick=function () {
			me.player.openUrl("Ranpak_geami_ms_cabinet.html","_self");
		}
		this._button_geami_ms_cabinet.onmouseover=function () {
			me._button_geami_ms_cabinet__img.src=basePath + 'geami_hv_GUI/button_geami_ms_cabinet__o.png';
			me._button_geami_ms_cabinet.ggIsOver=true;
		}
		this._button_geami_ms_cabinet.onmouseout=function () {
			me._button_geami_ms_cabinet__img.src=basePath + 'geami_hv_GUI/button_geami_ms_cabinet.png';
			me._button_geami_ms_cabinet.ggIsOver=false;
		}
		this._button_geami_ms_cabinet.onmousedown=function () {
			me._button_geami_ms_cabinet__img.src=basePath + 'geami_hv_GUI/button_geami_ms_cabinet__a.png';
		}
		this._button_geami_ms_cabinet.onmouseup=function () {
			if (me._button_geami_ms_cabinet.ggIsOver) {
				me._button_geami_ms_cabinet__img.src=basePath + 'geami_hv_GUI/button_geami_ms_cabinet__o.png';
			} else {
				me._button_geami_ms_cabinet__img.src=basePath + 'geami_hv_GUI/button_geami_ms_cabinet.png';
			}
		}
		this._cat_geami.appendChild(this._button_geami_ms_cabinet);
		this._button_geami_hv_under_table=document.createElement('div');
		this._button_geami_hv_under_table.ggId="button_geami_hv_under_table";
		this._button_geami_hv_under_table.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_hv_under_table.ggVisible=true;
		this._button_geami_hv_under_table.className='ggskin ggskin_button';
		this._button_geami_hv_under_table.ggType='button';
		this._button_geami_hv_under_table.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-458 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -458px;';
		hs+='top:  512px;';
		hs+='width: 427px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_hv_under_table.setAttribute('style',hs);
		this._button_geami_hv_under_table__img=document.createElement('img');
		this._button_geami_hv_under_table__img.className='ggskin ggskin_button';
		this._button_geami_hv_under_table__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_hv_under_table.png');
		this._button_geami_hv_under_table__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_hv_under_table__img.className='ggskin ggskin_button';
		this._button_geami_hv_under_table__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_hv_under_table__img);
		this._button_geami_hv_under_table.appendChild(this._button_geami_hv_under_table__img);
		this._button_geami_hv_under_table.onclick=function () {
			me.player.openUrl("Ranpak_geami_hv_under_table.html","_self");
		}
		this._button_geami_hv_under_table.onmouseover=function () {
			me._button_geami_hv_under_table__img.src=basePath + 'geami_hv_GUI/button_geami_hv_under_table__o.png';
			me._button_geami_hv_under_table.ggIsOver=true;
		}
		this._button_geami_hv_under_table.onmouseout=function () {
			me._button_geami_hv_under_table__img.src=basePath + 'geami_hv_GUI/button_geami_hv_under_table.png';
			me._button_geami_hv_under_table.ggIsOver=false;
		}
		this._button_geami_hv_under_table.onmousedown=function () {
			me._button_geami_hv_under_table__img.src=basePath + 'geami_hv_GUI/button_geami_hv_under_table__a.png';
		}
		this._button_geami_hv_under_table.onmouseup=function () {
			if (me._button_geami_hv_under_table.ggIsOver) {
				me._button_geami_hv_under_table__img.src=basePath + 'geami_hv_GUI/button_geami_hv_under_table__o.png';
			} else {
				me._button_geami_hv_under_table__img.src=basePath + 'geami_hv_GUI/button_geami_hv_under_table.png';
			}
		}
		this._cat_geami.appendChild(this._button_geami_hv_under_table);
		this._button_geami_sheets=document.createElement('div');
		this._button_geami_sheets.ggId="button_geami_sheets";
		this._button_geami_sheets.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_sheets.ggVisible=true;
		this._button_geami_sheets.className='ggskin ggskin_button';
		this._button_geami_sheets.ggType='button';
		this._button_geami_sheets.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-292 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -292px;';
		hs+='top:  437px;';
		hs+='width: 262px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_sheets.setAttribute('style',hs);
		this._button_geami_sheets__img=document.createElement('img');
		this._button_geami_sheets__img.className='ggskin ggskin_button';
		this._button_geami_sheets__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_sheets.png');
		this._button_geami_sheets__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_sheets__img.className='ggskin ggskin_button';
		this._button_geami_sheets__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_sheets__img);
		this._button_geami_sheets.appendChild(this._button_geami_sheets__img);
		this._button_geami_sheets.onclick=function () {
			me.player.openUrl("Ranpak_geami_sheets.html","_self");
		}
		this._button_geami_sheets.onmouseover=function () {
			me._button_geami_sheets__img.src=basePath + 'geami_hv_GUI/button_geami_sheets__o.png';
			me._button_geami_sheets.ggIsOver=true;
		}
		this._button_geami_sheets.onmouseout=function () {
			me._button_geami_sheets__img.src=basePath + 'geami_hv_GUI/button_geami_sheets.png';
			me._button_geami_sheets.ggIsOver=false;
		}
		this._button_geami_sheets.onmousedown=function () {
			me._button_geami_sheets__img.src=basePath + 'geami_hv_GUI/button_geami_sheets__a.png';
		}
		this._button_geami_sheets.onmouseup=function () {
			if (me._button_geami_sheets.ggIsOver) {
				me._button_geami_sheets__img.src=basePath + 'geami_hv_GUI/button_geami_sheets__o.png';
			} else {
				me._button_geami_sheets__img.src=basePath + 'geami_hv_GUI/button_geami_sheets.png';
			}
		}
		this._cat_geami.appendChild(this._button_geami_sheets);
		this._button_geami_mx_die_cut_only=document.createElement('div');
		this._button_geami_mx_die_cut_only.ggId="button_geami_mx_die_cut_only";
		this._button_geami_mx_die_cut_only.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_mx_die_cut_only.ggVisible=true;
		this._button_geami_mx_die_cut_only.className='ggskin ggskin_button';
		this._button_geami_mx_die_cut_only.ggType='button';
		this._button_geami_mx_die_cut_only.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-468 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -468px;';
		hs+='top:  362px;';
		hs+='width: 436px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_mx_die_cut_only.setAttribute('style',hs);
		this._button_geami_mx_die_cut_only__img=document.createElement('img');
		this._button_geami_mx_die_cut_only__img.className='ggskin ggskin_button';
		this._button_geami_mx_die_cut_only__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only.png');
		this._button_geami_mx_die_cut_only__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_mx_die_cut_only__img.className='ggskin ggskin_button';
		this._button_geami_mx_die_cut_only__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_mx_die_cut_only__img);
		this._button_geami_mx_die_cut_only.appendChild(this._button_geami_mx_die_cut_only__img);
		this._button_geami_mx_die_cut_only.onclick=function () {
			me.player.openUrl("Ranpak_geami_mx_die_cut_only.html","_self");
		}
		this._button_geami_mx_die_cut_only.onmouseover=function () {
			me._button_geami_mx_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only__o.png';
			me._button_geami_mx_die_cut_only.ggIsOver=true;
		}
		this._button_geami_mx_die_cut_only.onmouseout=function () {
			me._button_geami_mx_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only.png';
			me._button_geami_mx_die_cut_only.ggIsOver=false;
		}
		this._button_geami_mx_die_cut_only.onmousedown=function () {
			me._button_geami_mx_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only__a.png';
		}
		this._button_geami_mx_die_cut_only.onmouseup=function () {
			if (me._button_geami_mx_die_cut_only.ggIsOver) {
				me._button_geami_mx_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only__o.png';
			} else {
				me._button_geami_mx_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_mx_die_cut_only.png';
			}
		}
		this._cat_geami.appendChild(this._button_geami_mx_die_cut_only);
		this._button_geami_mx_3d=document.createElement('div');
		this._button_geami_mx_3d.ggId="button_geami_mx_3d";
		this._button_geami_mx_3d.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_mx_3d.ggVisible=true;
		this._button_geami_mx_3d.className='ggskin ggskin_button';
		this._button_geami_mx_3d.ggType='button';
		this._button_geami_mx_3d.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-287 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -287px;';
		hs+='top:  287px;';
		hs+='width: 257px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_mx_3d.setAttribute('style',hs);
		this._button_geami_mx_3d__img=document.createElement('img');
		this._button_geami_mx_3d__img.className='ggskin ggskin_button';
		this._button_geami_mx_3d__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_mx_3d.png');
		this._button_geami_mx_3d__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_mx_3d__img.className='ggskin ggskin_button';
		this._button_geami_mx_3d__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_mx_3d__img);
		this._button_geami_mx_3d.appendChild(this._button_geami_mx_3d__img);
		this._button_geami_mx_3d.onclick=function () {
			me.player.openUrl("Ranpak_geami_mx_3d.html","_self");
		}
		this._button_geami_mx_3d.onmouseover=function () {
			me._button_geami_mx_3d__img.src=basePath + 'geami_hv_GUI/button_geami_mx_3d__o.png';
			me._button_geami_mx_3d.ggIsOver=true;
		}
		this._button_geami_mx_3d.onmouseout=function () {
			me._button_geami_mx_3d__img.src=basePath + 'geami_hv_GUI/button_geami_mx_3d.png';
			me._button_geami_mx_3d.ggIsOver=false;
		}
		this._button_geami_mx_3d.onmousedown=function () {
			me._button_geami_mx_3d__img.src=basePath + 'geami_hv_GUI/button_geami_mx_3d__a.png';
		}
		this._button_geami_mx_3d.onmouseup=function () {
			if (me._button_geami_mx_3d.ggIsOver) {
				me._button_geami_mx_3d__img.src=basePath + 'geami_hv_GUI/button_geami_mx_3d__o.png';
			} else {
				me._button_geami_mx_3d__img.src=basePath + 'geami_hv_GUI/button_geami_mx_3d.png';
			}
		}
		this._cat_geami.appendChild(this._button_geami_mx_3d);
		this._button_geami_hv=document.createElement('div');
		this._button_geami_hv.ggId="button_geami_hv";
		this._button_geami_hv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_hv.ggVisible=true;
		this._button_geami_hv.className='ggskin ggskin_button';
		this._button_geami_hv.ggType='button';
		this._button_geami_hv.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-214 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -214px;';
		hs+='top:  212px;';
		hs+='width: 187px;';
		hs+='height: 47px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_hv.setAttribute('style',hs);
		this._button_geami_hv__img=document.createElement('img');
		this._button_geami_hv__img.className='ggskin ggskin_button';
		this._button_geami_hv__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_hv.png');
		this._button_geami_hv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_hv__img.className='ggskin ggskin_button';
		this._button_geami_hv__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_hv__img);
		this._button_geami_hv.appendChild(this._button_geami_hv__img);
		this._cat_geami.appendChild(this._button_geami_hv);
		this._button_geami_exbox_mini_standard=document.createElement('div');
		this._button_geami_exbox_mini_standard.ggId="button_geami_exbox_mini_standard";
		this._button_geami_exbox_mini_standard.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_exbox_mini_standard.ggVisible=true;
		this._button_geami_exbox_mini_standard.className='ggskin ggskin_button';
		this._button_geami_exbox_mini_standard.ggType='button';
		this._button_geami_exbox_mini_standard.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-548 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -548px;';
		hs+='top:  137px;';
		hs+='width: 523px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_exbox_mini_standard.setAttribute('style',hs);
		this._button_geami_exbox_mini_standard__img=document.createElement('img');
		this._button_geami_exbox_mini_standard__img.className='ggskin ggskin_button';
		this._button_geami_exbox_mini_standard__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard.png');
		this._button_geami_exbox_mini_standard__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_exbox_mini_standard__img.className='ggskin ggskin_button';
		this._button_geami_exbox_mini_standard__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_exbox_mini_standard__img);
		this._button_geami_exbox_mini_standard.appendChild(this._button_geami_exbox_mini_standard__img);
		this._button_geami_exbox_mini_standard.onclick=function () {
			me.player.openUrl("Ranpak_geami_exbox_mini_standard.html","_self");
		}
		this._button_geami_exbox_mini_standard.onmouseover=function () {
			me._button_geami_exbox_mini_standard__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard__o.png';
			me._button_geami_exbox_mini_standard.ggIsOver=true;
		}
		this._button_geami_exbox_mini_standard.onmouseout=function () {
			me._button_geami_exbox_mini_standard__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard.png';
			me._button_geami_exbox_mini_standard.ggIsOver=false;
		}
		this._button_geami_exbox_mini_standard.onmousedown=function () {
			me._button_geami_exbox_mini_standard__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard__a.png';
		}
		this._button_geami_exbox_mini_standard.onmouseup=function () {
			if (me._button_geami_exbox_mini_standard.ggIsOver) {
				me._button_geami_exbox_mini_standard__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard__o.png';
			} else {
				me._button_geami_exbox_mini_standard__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_standard.png';
			}
		}
		this._cat_geami.appendChild(this._button_geami_exbox_mini_standard);
		this._button_geami_exbox_mini_die_cut_only=document.createElement('div');
		this._button_geami_exbox_mini_die_cut_only.ggId="button_geami_exbox_mini_die_cut_only";
		this._button_geami_exbox_mini_die_cut_only.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_geami_exbox_mini_die_cut_only.ggVisible=true;
		this._button_geami_exbox_mini_die_cut_only.className='ggskin ggskin_button';
		this._button_geami_exbox_mini_die_cut_only.ggType='button';
		this._button_geami_exbox_mini_die_cut_only.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-611 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -611px;';
		hs+='top:  62px;';
		hs+='width: 583px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_geami_exbox_mini_die_cut_only.setAttribute('style',hs);
		this._button_geami_exbox_mini_die_cut_only__img=document.createElement('img');
		this._button_geami_exbox_mini_die_cut_only__img.className='ggskin ggskin_button';
		this._button_geami_exbox_mini_die_cut_only__img.setAttribute('src',basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only.png');
		this._button_geami_exbox_mini_die_cut_only__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_geami_exbox_mini_die_cut_only__img.className='ggskin ggskin_button';
		this._button_geami_exbox_mini_die_cut_only__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_geami_exbox_mini_die_cut_only__img);
		this._button_geami_exbox_mini_die_cut_only.appendChild(this._button_geami_exbox_mini_die_cut_only__img);
		this._button_geami_exbox_mini_die_cut_only.onclick=function () {
			me.player.openUrl("Ranpak_geami_exbox_mini_die_cut_only.html","_self");
		}
		this._button_geami_exbox_mini_die_cut_only.onmouseover=function () {
			me._button_geami_exbox_mini_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only__o.png';
			me._button_geami_exbox_mini_die_cut_only.ggIsOver=true;
		}
		this._button_geami_exbox_mini_die_cut_only.onmouseout=function () {
			me._button_geami_exbox_mini_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only.png';
			me._button_geami_exbox_mini_die_cut_only.ggIsOver=false;
		}
		this._button_geami_exbox_mini_die_cut_only.onmousedown=function () {
			me._button_geami_exbox_mini_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only__a.png';
		}
		this._button_geami_exbox_mini_die_cut_only.onmouseup=function () {
			if (me._button_geami_exbox_mini_die_cut_only.ggIsOver) {
				me._button_geami_exbox_mini_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only__o.png';
			} else {
				me._button_geami_exbox_mini_die_cut_only__img.src=basePath + 'geami_hv_GUI/button_geami_exbox_mini_die_cut_only.png';
			}
		}
		this._cat_geami.appendChild(this._button_geami_exbox_mini_die_cut_only);
		this.divSkin.appendChild(this._cat_geami);
		this._cat_wrappak=document.createElement('div');
		this._cat_wrappak.ggId="CAT_wrappak";
		this._cat_wrappak.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cat_wrappak.ggVisible=true;
		this._cat_wrappak.className='ggskin ggskin_rectangle';
		this._cat_wrappak.ggType='rectangle';
		this._cat_wrappak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-29 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -29px;';
		hs+='top:  88px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		this._cat_wrappak.setAttribute('style',hs);
		this._button_wrappak_protector=document.createElement('div');
		this._button_wrappak_protector.ggId="button_wrappak_protector";
		this._button_wrappak_protector.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_wrappak_protector.ggVisible=true;
		this._button_wrappak_protector.className='ggskin ggskin_button';
		this._button_wrappak_protector.ggType='button';
		this._button_wrappak_protector.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-378 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -378px;';
		hs+='top:  62px;';
		hs+='width: 354px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_wrappak_protector.setAttribute('style',hs);
		this._button_wrappak_protector__img=document.createElement('img');
		this._button_wrappak_protector__img.className='ggskin ggskin_button';
		this._button_wrappak_protector__img.setAttribute('src',basePath + 'geami_hv_GUI/button_wrappak_protector.png');
		this._button_wrappak_protector__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_wrappak_protector__img.className='ggskin ggskin_button';
		this._button_wrappak_protector__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_wrappak_protector__img);
		this._button_wrappak_protector.appendChild(this._button_wrappak_protector__img);
		this._button_wrappak_protector.onclick=function () {
			me.player.openUrl("Ranpak_wrappak_protector.html","_self");
		}
		this._button_wrappak_protector.onmouseover=function () {
			me._button_wrappak_protector__img.src=basePath + 'geami_hv_GUI/button_wrappak_protector__o.png';
			me._button_wrappak_protector.ggIsOver=true;
		}
		this._button_wrappak_protector.onmouseout=function () {
			me._button_wrappak_protector__img.src=basePath + 'geami_hv_GUI/button_wrappak_protector.png';
			me._button_wrappak_protector.ggIsOver=false;
		}
		this._button_wrappak_protector.onmousedown=function () {
			me._button_wrappak_protector__img.src=basePath + 'geami_hv_GUI/button_wrappak_protector__a.png';
		}
		this._button_wrappak_protector.onmouseup=function () {
			if (me._button_wrappak_protector.ggIsOver) {
				me._button_wrappak_protector__img.src=basePath + 'geami_hv_GUI/button_wrappak_protector__o.png';
			} else {
				me._button_wrappak_protector__img.src=basePath + 'geami_hv_GUI/button_wrappak_protector.png';
			}
		}
		this._cat_wrappak.appendChild(this._button_wrappak_protector);
		this.divSkin.appendChild(this._cat_wrappak);
		this._cat_padpak=document.createElement('div');
		this._cat_padpak.ggId="CAT_padpak";
		this._cat_padpak.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cat_padpak.ggVisible=true;
		this._cat_padpak.className='ggskin ggskin_rectangle';
		this._cat_padpak.ggType='rectangle';
		this._cat_padpak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-29 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -29px;';
		hs+='top:  88px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		this._cat_padpak.setAttribute('style',hs);
		this._button_padpak_lc=document.createElement('div');
		this._button_padpak_lc.ggId="button_padpak_lc";
		this._button_padpak_lc.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_padpak_lc.ggVisible=true;
		this._button_padpak_lc.className='ggskin ggskin_button';
		this._button_padpak_lc.ggType='button';
		this._button_padpak_lc.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-228 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -228px;';
		hs+='top:  287px;';
		hs+='width: 202px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_padpak_lc.setAttribute('style',hs);
		this._button_padpak_lc__img=document.createElement('img');
		this._button_padpak_lc__img.className='ggskin ggskin_button';
		this._button_padpak_lc__img.setAttribute('src',basePath + 'geami_hv_GUI/button_padpak_lc.png');
		this._button_padpak_lc__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_padpak_lc__img.className='ggskin ggskin_button';
		this._button_padpak_lc__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_padpak_lc__img);
		this._button_padpak_lc.appendChild(this._button_padpak_lc__img);
		this._button_padpak_lc.onclick=function () {
			me.player.openUrl("Ranpak_padpak_lc.html","_self");
		}
		this._button_padpak_lc.onmouseover=function () {
			me._button_padpak_lc__img.src=basePath + 'geami_hv_GUI/button_padpak_lc__o.png';
			me._button_padpak_lc.ggIsOver=true;
		}
		this._button_padpak_lc.onmouseout=function () {
			me._button_padpak_lc__img.src=basePath + 'geami_hv_GUI/button_padpak_lc.png';
			me._button_padpak_lc.ggIsOver=false;
		}
		this._button_padpak_lc.onmousedown=function () {
			me._button_padpak_lc__img.src=basePath + 'geami_hv_GUI/button_padpak_lc__a.png';
		}
		this._button_padpak_lc.onmouseup=function () {
			if (me._button_padpak_lc.ggIsOver) {
				me._button_padpak_lc__img.src=basePath + 'geami_hv_GUI/button_padpak_lc__o.png';
			} else {
				me._button_padpak_lc__img.src=basePath + 'geami_hv_GUI/button_padpak_lc.png';
			}
		}
		this._cat_padpak.appendChild(this._button_padpak_lc);
		this._button_padpak_jr=document.createElement('div');
		this._button_padpak_jr.ggId="button_padpak_jr";
		this._button_padpak_jr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_padpak_jr.ggVisible=true;
		this._button_padpak_jr.className='ggskin ggskin_button';
		this._button_padpak_jr.ggType='button';
		this._button_padpak_jr.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-221 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -221px;';
		hs+='top:  212px;';
		hs+='width: 196px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_padpak_jr.setAttribute('style',hs);
		this._button_padpak_jr__img=document.createElement('img');
		this._button_padpak_jr__img.className='ggskin ggskin_button';
		this._button_padpak_jr__img.setAttribute('src',basePath + 'geami_hv_GUI/button_padpak_jr.png');
		this._button_padpak_jr__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_padpak_jr__img.className='ggskin ggskin_button';
		this._button_padpak_jr__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_padpak_jr__img);
		this._button_padpak_jr.appendChild(this._button_padpak_jr__img);
		this._button_padpak_jr.onclick=function () {
			me.player.openUrl("Ranpak_padpak_jr.html","_self");
		}
		this._button_padpak_jr.onmouseover=function () {
			me._button_padpak_jr__img.src=basePath + 'geami_hv_GUI/button_padpak_jr__o.png';
			me._button_padpak_jr.ggIsOver=true;
		}
		this._button_padpak_jr.onmouseout=function () {
			me._button_padpak_jr__img.src=basePath + 'geami_hv_GUI/button_padpak_jr.png';
			me._button_padpak_jr.ggIsOver=false;
		}
		this._button_padpak_jr.onmousedown=function () {
			me._button_padpak_jr__img.src=basePath + 'geami_hv_GUI/button_padpak_jr__a.png';
		}
		this._button_padpak_jr.onmouseup=function () {
			if (me._button_padpak_jr.ggIsOver) {
				me._button_padpak_jr__img.src=basePath + 'geami_hv_GUI/button_padpak_jr__o.png';
			} else {
				me._button_padpak_jr__img.src=basePath + 'geami_hv_GUI/button_padpak_jr.png';
			}
		}
		this._cat_padpak.appendChild(this._button_padpak_jr);
		this._button_padpak_guardian=document.createElement('div');
		this._button_padpak_guardian.ggId="button_padpak_guardian";
		this._button_padpak_guardian.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_padpak_guardian.ggVisible=true;
		this._button_padpak_guardian.className='ggskin ggskin_button';
		this._button_padpak_guardian.ggType='button';
		this._button_padpak_guardian.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-349 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -349px;';
		hs+='top:  137px;';
		hs+='width: 324px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_padpak_guardian.setAttribute('style',hs);
		this._button_padpak_guardian__img=document.createElement('img');
		this._button_padpak_guardian__img.className='ggskin ggskin_button';
		this._button_padpak_guardian__img.setAttribute('src',basePath + 'geami_hv_GUI/button_padpak_guardian.png');
		this._button_padpak_guardian__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_padpak_guardian__img.className='ggskin ggskin_button';
		this._button_padpak_guardian__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_padpak_guardian__img);
		this._button_padpak_guardian.appendChild(this._button_padpak_guardian__img);
		this._button_padpak_guardian.onclick=function () {
			me.player.openUrl("Ranpak_padpak_guardian.html","_self");
		}
		this._button_padpak_guardian.onmouseover=function () {
			me._button_padpak_guardian__img.src=basePath + 'geami_hv_GUI/button_padpak_guardian__o.png';
			me._button_padpak_guardian.ggIsOver=true;
		}
		this._button_padpak_guardian.onmouseout=function () {
			me._button_padpak_guardian__img.src=basePath + 'geami_hv_GUI/button_padpak_guardian.png';
			me._button_padpak_guardian.ggIsOver=false;
		}
		this._button_padpak_guardian.onmousedown=function () {
			me._button_padpak_guardian__img.src=basePath + 'geami_hv_GUI/button_padpak_guardian__a.png';
		}
		this._button_padpak_guardian.onmouseup=function () {
			if (me._button_padpak_guardian.ggIsOver) {
				me._button_padpak_guardian__img.src=basePath + 'geami_hv_GUI/button_padpak_guardian__o.png';
			} else {
				me._button_padpak_guardian__img.src=basePath + 'geami_hv_GUI/button_padpak_guardian.png';
			}
		}
		this._cat_padpak.appendChild(this._button_padpak_guardian);
		this._button_padpak_cc=document.createElement('div');
		this._button_padpak_cc.ggId="button_padpak_cc";
		this._button_padpak_cc.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_padpak_cc.ggVisible=true;
		this._button_padpak_cc.className='ggskin ggskin_button';
		this._button_padpak_cc.ggType='button';
		this._button_padpak_cc.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-233 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -233px;';
		hs+='top:  62px;';
		hs+='width: 207px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_padpak_cc.setAttribute('style',hs);
		this._button_padpak_cc__img=document.createElement('img');
		this._button_padpak_cc__img.className='ggskin ggskin_button';
		this._button_padpak_cc__img.setAttribute('src',basePath + 'geami_hv_GUI/button_padpak_cc.png');
		this._button_padpak_cc__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_padpak_cc__img.className='ggskin ggskin_button';
		this._button_padpak_cc__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_padpak_cc__img);
		this._button_padpak_cc.appendChild(this._button_padpak_cc__img);
		this._button_padpak_cc.onclick=function () {
			me.player.openUrl("Ranpak_padpak_cc.html","_self");
		}
		this._button_padpak_cc.onmouseover=function () {
			me._button_padpak_cc__img.src=basePath + 'geami_hv_GUI/button_padpak_cc__o.png';
			me._button_padpak_cc.ggIsOver=true;
		}
		this._button_padpak_cc.onmouseout=function () {
			me._button_padpak_cc__img.src=basePath + 'geami_hv_GUI/button_padpak_cc.png';
			me._button_padpak_cc.ggIsOver=false;
		}
		this._button_padpak_cc.onmousedown=function () {
			me._button_padpak_cc__img.src=basePath + 'geami_hv_GUI/button_padpak_cc__a.png';
		}
		this._button_padpak_cc.onmouseup=function () {
			if (me._button_padpak_cc.ggIsOver) {
				me._button_padpak_cc__img.src=basePath + 'geami_hv_GUI/button_padpak_cc__o.png';
			} else {
				me._button_padpak_cc__img.src=basePath + 'geami_hv_GUI/button_padpak_cc.png';
			}
		}
		this._cat_padpak.appendChild(this._button_padpak_cc);
		this.divSkin.appendChild(this._cat_padpak);
		this._cat_fillpak=document.createElement('div');
		this._cat_fillpak.ggId="CAT_fillpak";
		this._cat_fillpak.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cat_fillpak.ggVisible=true;
		this._cat_fillpak.className='ggskin ggskin_rectangle';
		this._cat_fillpak.ggType='rectangle';
		this._cat_fillpak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-29 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -29px;';
		hs+='top:  88px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		this._cat_fillpak.setAttribute('style',hs);
		this._button_fillpak_go=document.createElement('div');
		this._button_fillpak_go.ggId="button_fillpak_go";
		this._button_fillpak_go.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fillpak_go.ggVisible=true;
		this._button_fillpak_go.className='ggskin ggskin_button';
		this._button_fillpak_go.ggType='button';
		this._button_fillpak_go.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-231 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -231px;';
		hs+='top:  437px;';
		hs+='width: 201px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_fillpak_go.setAttribute('style',hs);
		this._button_fillpak_go__img=document.createElement('img');
		this._button_fillpak_go__img.className='ggskin ggskin_button';
		this._button_fillpak_go__img.setAttribute('src',basePath + 'geami_hv_GUI/button_fillpak_go.png');
		this._button_fillpak_go__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_fillpak_go__img.className='ggskin ggskin_button';
		this._button_fillpak_go__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_fillpak_go__img);
		this._button_fillpak_go.appendChild(this._button_fillpak_go__img);
		this._button_fillpak_go.onclick=function () {
			me.player.openUrl("Ranpak_fillpak_go.html","_self");
		}
		this._button_fillpak_go.onmouseover=function () {
			me._button_fillpak_go__img.src=basePath + 'geami_hv_GUI/button_fillpak_go__o.png';
			me._button_fillpak_go.ggIsOver=true;
		}
		this._button_fillpak_go.onmouseout=function () {
			me._button_fillpak_go__img.src=basePath + 'geami_hv_GUI/button_fillpak_go.png';
			me._button_fillpak_go.ggIsOver=false;
		}
		this._button_fillpak_go.onmousedown=function () {
			me._button_fillpak_go__img.src=basePath + 'geami_hv_GUI/button_fillpak_go__a.png';
		}
		this._button_fillpak_go.onmouseup=function () {
			if (me._button_fillpak_go.ggIsOver) {
				me._button_fillpak_go__img.src=basePath + 'geami_hv_GUI/button_fillpak_go__o.png';
			} else {
				me._button_fillpak_go__img.src=basePath + 'geami_hv_GUI/button_fillpak_go.png';
			}
		}
		this._cat_fillpak.appendChild(this._button_fillpak_go);
		this._button_fillpak_ttc=document.createElement('div');
		this._button_fillpak_ttc.ggId="button_fillpak_ttc";
		this._button_fillpak_ttc.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fillpak_ttc.ggVisible=true;
		this._button_fillpak_ttc.className='ggskin ggskin_button';
		this._button_fillpak_ttc.ggType='button';
		this._button_fillpak_ttc.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-244 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -244px;';
		hs+='top:  362px;';
		hs+='width: 217px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_fillpak_ttc.setAttribute('style',hs);
		this._button_fillpak_ttc__img=document.createElement('img');
		this._button_fillpak_ttc__img.className='ggskin ggskin_button';
		this._button_fillpak_ttc__img.setAttribute('src',basePath + 'geami_hv_GUI/button_fillpak_ttc.png');
		this._button_fillpak_ttc__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_fillpak_ttc__img.className='ggskin ggskin_button';
		this._button_fillpak_ttc__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_fillpak_ttc__img);
		this._button_fillpak_ttc.appendChild(this._button_fillpak_ttc__img);
		this._button_fillpak_ttc.onclick=function () {
			me.player.openUrl("Ranpak_fillpak_ttc.html","_self");
		}
		this._button_fillpak_ttc.onmouseover=function () {
			me._button_fillpak_ttc__img.src=basePath + 'geami_hv_GUI/button_fillpak_ttc__o.png';
			me._button_fillpak_ttc.ggIsOver=true;
		}
		this._button_fillpak_ttc.onmouseout=function () {
			me._button_fillpak_ttc__img.src=basePath + 'geami_hv_GUI/button_fillpak_ttc.png';
			me._button_fillpak_ttc.ggIsOver=false;
		}
		this._button_fillpak_ttc.onmousedown=function () {
			me._button_fillpak_ttc__img.src=basePath + 'geami_hv_GUI/button_fillpak_ttc__a.png';
		}
		this._button_fillpak_ttc.onmouseup=function () {
			if (me._button_fillpak_ttc.ggIsOver) {
				me._button_fillpak_ttc__img.src=basePath + 'geami_hv_GUI/button_fillpak_ttc__o.png';
			} else {
				me._button_fillpak_ttc__img.src=basePath + 'geami_hv_GUI/button_fillpak_ttc.png';
			}
		}
		this._cat_fillpak.appendChild(this._button_fillpak_ttc);
		this._button_fillpak_tt=document.createElement('div');
		this._button_fillpak_tt.ggId="button_fillpak_tt";
		this._button_fillpak_tt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fillpak_tt.ggVisible=true;
		this._button_fillpak_tt.className='ggskin ggskin_button';
		this._button_fillpak_tt.ggType='button';
		this._button_fillpak_tt.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-217 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -217px;';
		hs+='top:  287px;';
		hs+='width: 190px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_fillpak_tt.setAttribute('style',hs);
		this._button_fillpak_tt__img=document.createElement('img');
		this._button_fillpak_tt__img.className='ggskin ggskin_button';
		this._button_fillpak_tt__img.setAttribute('src',basePath + 'geami_hv_GUI/button_fillpak_tt.png');
		this._button_fillpak_tt__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_fillpak_tt__img.className='ggskin ggskin_button';
		this._button_fillpak_tt__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_fillpak_tt__img);
		this._button_fillpak_tt.appendChild(this._button_fillpak_tt__img);
		this._button_fillpak_tt.onclick=function () {
			me.player.openUrl("Ranpak_fillpak_tt.html","_self");
		}
		this._button_fillpak_tt.onmouseover=function () {
			me._button_fillpak_tt__img.src=basePath + 'geami_hv_GUI/button_fillpak_tt__o.png';
			me._button_fillpak_tt.ggIsOver=true;
		}
		this._button_fillpak_tt.onmouseout=function () {
			me._button_fillpak_tt__img.src=basePath + 'geami_hv_GUI/button_fillpak_tt.png';
			me._button_fillpak_tt.ggIsOver=false;
		}
		this._button_fillpak_tt.onmousedown=function () {
			me._button_fillpak_tt__img.src=basePath + 'geami_hv_GUI/button_fillpak_tt__a.png';
		}
		this._button_fillpak_tt.onmouseup=function () {
			if (me._button_fillpak_tt.ggIsOver) {
				me._button_fillpak_tt__img.src=basePath + 'geami_hv_GUI/button_fillpak_tt__o.png';
			} else {
				me._button_fillpak_tt__img.src=basePath + 'geami_hv_GUI/button_fillpak_tt.png';
			}
		}
		this._cat_fillpak.appendChild(this._button_fillpak_tt);
		this._button_fillpak_trident=document.createElement('div');
		this._button_fillpak_trident.ggId="button_fillpak_trident";
		this._button_fillpak_trident.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fillpak_trident.ggVisible=true;
		this._button_fillpak_trident.className='ggskin ggskin_button';
		this._button_fillpak_trident.ggType='button';
		this._button_fillpak_trident.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-303 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -303px;';
		hs+='top:  212px;';
		hs+='width: 276px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_fillpak_trident.setAttribute('style',hs);
		this._button_fillpak_trident__img=document.createElement('img');
		this._button_fillpak_trident__img.className='ggskin ggskin_button';
		this._button_fillpak_trident__img.setAttribute('src',basePath + 'geami_hv_GUI/button_fillpak_trident.png');
		this._button_fillpak_trident__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_fillpak_trident__img.className='ggskin ggskin_button';
		this._button_fillpak_trident__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_fillpak_trident__img);
		this._button_fillpak_trident.appendChild(this._button_fillpak_trident__img);
		this._button_fillpak_trident.onclick=function () {
			me.player.openUrl("Ranpak_fillpak_trident.html","_self");
		}
		this._button_fillpak_trident.onmouseover=function () {
			me._button_fillpak_trident__img.src=basePath + 'geami_hv_GUI/button_fillpak_trident__o.png';
			me._button_fillpak_trident.ggIsOver=true;
		}
		this._button_fillpak_trident.onmouseout=function () {
			me._button_fillpak_trident__img.src=basePath + 'geami_hv_GUI/button_fillpak_trident.png';
			me._button_fillpak_trident.ggIsOver=false;
		}
		this._button_fillpak_trident.onmousedown=function () {
			me._button_fillpak_trident__img.src=basePath + 'geami_hv_GUI/button_fillpak_trident__a.png';
		}
		this._button_fillpak_trident.onmouseup=function () {
			if (me._button_fillpak_trident.ggIsOver) {
				me._button_fillpak_trident__img.src=basePath + 'geami_hv_GUI/button_fillpak_trident__o.png';
			} else {
				me._button_fillpak_trident__img.src=basePath + 'geami_hv_GUI/button_fillpak_trident.png';
			}
		}
		this._cat_fillpak.appendChild(this._button_fillpak_trident);
		this._button_fillpak_m=document.createElement('div');
		this._button_fillpak_m.ggId="button_fillpak_m";
		this._button_fillpak_m.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fillpak_m.ggVisible=true;
		this._button_fillpak_m.className='ggskin ggskin_button';
		this._button_fillpak_m.ggType='button';
		this._button_fillpak_m.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-200 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -200px;';
		hs+='top:  137px;';
		hs+='width: 177px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_fillpak_m.setAttribute('style',hs);
		this._button_fillpak_m__img=document.createElement('img');
		this._button_fillpak_m__img.className='ggskin ggskin_button';
		this._button_fillpak_m__img.setAttribute('src',basePath + 'geami_hv_GUI/button_fillpak_m.png');
		this._button_fillpak_m__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_fillpak_m__img.className='ggskin ggskin_button';
		this._button_fillpak_m__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_fillpak_m__img);
		this._button_fillpak_m.appendChild(this._button_fillpak_m__img);
		this._button_fillpak_m.onclick=function () {
			me.player.openUrl("Ranpak_fillpak_m.html","_self");
		}
		this._button_fillpak_m.onmouseover=function () {
			me._button_fillpak_m__img.src=basePath + 'geami_hv_GUI/button_fillpak_m__o.png';
			me._button_fillpak_m.ggIsOver=true;
		}
		this._button_fillpak_m.onmouseout=function () {
			me._button_fillpak_m__img.src=basePath + 'geami_hv_GUI/button_fillpak_m.png';
			me._button_fillpak_m.ggIsOver=false;
		}
		this._button_fillpak_m.onmousedown=function () {
			me._button_fillpak_m__img.src=basePath + 'geami_hv_GUI/button_fillpak_m__a.png';
		}
		this._button_fillpak_m.onmouseup=function () {
			if (me._button_fillpak_m.ggIsOver) {
				me._button_fillpak_m__img.src=basePath + 'geami_hv_GUI/button_fillpak_m__o.png';
			} else {
				me._button_fillpak_m__img.src=basePath + 'geami_hv_GUI/button_fillpak_m.png';
			}
		}
		this._cat_fillpak.appendChild(this._button_fillpak_m);
		this._button_fillpak=document.createElement('div');
		this._button_fillpak.ggId="button_fillpak";
		this._button_fillpak.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fillpak.ggVisible=true;
		this._button_fillpak.className='ggskin ggskin_button';
		this._button_fillpak.ggType='button';
		this._button_fillpak.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-156 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -156px;';
		hs+='top:  62px;';
		hs+='width: 131px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_fillpak.setAttribute('style',hs);
		this._button_fillpak__img=document.createElement('img');
		this._button_fillpak__img.className='ggskin ggskin_button';
		this._button_fillpak__img.setAttribute('src',basePath + 'geami_hv_GUI/button_fillpak.png');
		this._button_fillpak__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_fillpak__img.className='ggskin ggskin_button';
		this._button_fillpak__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_fillpak__img);
		this._button_fillpak.appendChild(this._button_fillpak__img);
		this._button_fillpak.onclick=function () {
			me.player.openUrl("Ranpak_fillpak.html","_self");
		}
		this._button_fillpak.onmouseover=function () {
			me._button_fillpak__img.src=basePath + 'geami_hv_GUI/button_fillpak__o.png';
			me._button_fillpak.ggIsOver=true;
		}
		this._button_fillpak.onmouseout=function () {
			me._button_fillpak__img.src=basePath + 'geami_hv_GUI/button_fillpak.png';
			me._button_fillpak.ggIsOver=false;
		}
		this._button_fillpak.onmousedown=function () {
			me._button_fillpak__img.src=basePath + 'geami_hv_GUI/button_fillpak__a.png';
		}
		this._button_fillpak.onmouseup=function () {
			if (me._button_fillpak.ggIsOver) {
				me._button_fillpak__img.src=basePath + 'geami_hv_GUI/button_fillpak__o.png';
			} else {
				me._button_fillpak__img.src=basePath + 'geami_hv_GUI/button_fillpak.png';
			}
		}
		this._cat_fillpak.appendChild(this._button_fillpak);
		this.divSkin.appendChild(this._cat_fillpak);
		this._default_loading_bar=document.createElement('div');
		this._default_loading_bar.ggId="default loading bar";
		this._default_loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._default_loading_bar.ggVisible=true;
		this._default_loading_bar.className='ggskin ggskin_container';
		this._default_loading_bar.ggType='container';
		this._default_loading_bar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-61 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 42px;';
		hs+='top:  -61px;';
		hs+='width: 180px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._default_loading_bar.setAttribute('style',hs);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text';
		this._loading_text.ggType='text';
		this._loading_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-30 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -30px;';
		hs+='width: 178px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 178px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<b>Loading..."+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		this._default_loading_bar.appendChild(this._loading_text);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="loading bar";
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle';
		this._loading_bar.ggType='rectangle';
		this._loading_bar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-10 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -10px;';
		hs+='width: 180px;';
		hs+='height: 10px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #00aaff;';
		hs+='background: rgba(0,170,255,0.298039);';
		hs+='border: 0px solid #000080;';
		this._loading_bar.setAttribute('style',hs);
		this._default_loading_bar.appendChild(this._loading_bar);
		this.divSkin.appendChild(this._default_loading_bar);
		me._img_cat_wrappak.style[domTransition]='none';
		me._img_cat_wrappak.style.visibility='hidden';
		me._img_cat_wrappak.ggVisible=false;
		me._img_cat_padpak.style[domTransition]='none';
		me._img_cat_padpak.style.visibility='hidden';
		me._img_cat_padpak.ggVisible=false;
		me._img_cat_fillpak.style[domTransition]='none';
		me._img_cat_fillpak.style.visibility='hidden';
		me._img_cat_fillpak.ggVisible=false;
		me._cat_wrappak.style[domTransition]='none';
		me._cat_wrappak.style.visibility='hidden';
		me._cat_wrappak.ggVisible=false;
		me._cat_padpak.style[domTransition]='none';
		me._cat_padpak.style.visibility='hidden';
		me._cat_padpak.ggVisible=false;
		me._cat_fillpak.style[domTransition]='none';
		me._cat_fillpak.style.visibility='hidden';
		me._cat_fillpak.ggVisible=false;
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._default_loading_bar.style[domTransition]='none';
			me._default_loading_bar.style.visibility='hidden';
			me._default_loading_bar.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		this._loading_text.ggUpdateText();
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
	};
	this.addSkin();
};