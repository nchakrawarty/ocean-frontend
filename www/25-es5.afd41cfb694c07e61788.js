function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{tmrb:function(e,t,n){"use strict";n.r(t),n.d(t,"Tab1PageModule",(function(){return M}));var i=n("TEn/"),r=n("ofXK"),o=n("3Pt+"),c=n("qtYk"),a=n("tyNb"),s=n("mrSG"),l=n("AzuR"),b=n("ual7"),f=n("fXoL"),u=n("ccyI"),d=n("tk/3");function p(e,t){if(1&e&&(f.Mb(0,"ion-header",5),f.Mb(1,"header",6),f.Mb(2,"div",7),f.Kb(3,"img",8),f.Mb(4,"h3",9),f.Mb(5,"span",10),f.ic(6,"Welcome"),f.Lb(),f.ic(7,", "),f.Mb(8,"span"),f.Mb(9,"b"),f.ic(10),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb()),2&e){var n=f.Wb();f.zb(10),f.kc(" ",null==n.ActiveUser?null:n.ActiveUser.name,"")}}function h(e,t){1&e&&(f.Mb(0,"div",11),f.Kb(1,"div",12),f.Lb())}function g(e,t){if(1&e){var n=f.Nb();f.Mb(0,"div",15),f.Ub("click",(function(e){f.ec(n);var i=t.$implicit;return f.Wb(3).onClickDock(i,e)})),f.Mb(1,"ion-card",16),f.Mb(2,"ion-card-header"),f.Mb(3,"ion-card-subtitle"),f.ic(4),f.Mb(5,"span"),f.ic(6),f.Lb(),f.Lb(),f.Lb(),f.Mb(7,"ion-card-content"),f.ic(8),f.Lb(),f.Lb(),f.Lb()}if(2&e){var i=t.$implicit;f.zb(4),f.kc(" ",i.dockName," "),f.zb(2),f.kc(" (",i.address,") "),f.zb(2),f.kc(" Click to see List of Fisherman at ",i.dockName," ")}}function k(e,t){if(1&e&&(f.Mb(0,"div"),f.hc(1,g,9,3,"div",14),f.Lb()),2&e){var n=f.Wb(2);f.zb(1),f.Zb("ngForOf",n.dockList)}}function m(e,t){if(1&e){var n=f.Nb();f.Mb(0,"div"),f.Mb(1,"ion-refresher",13),f.Ub("ionRefresh",(function(e){return f.ec(n),f.Wb().doRefresh(e)})),f.Kb(2,"ion-refresher-content"),f.Lb(),f.hc(3,k,2,1,"div",4),f.Lb()}if(2&e){var i=f.Wb();f.zb(3),f.Zb("ngIf",i.dockList)}}var v,w,y,x=[{path:"",component:(v=function(){function e(t,n,i,r,o,c){_classCallCheck(this,e),this.authService=t,this.http=n,this.router=i,this.loadingCtrl=r,this.modalController=o,this.toastController=c}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.user=JSON.parse(localStorage.getItem("currentUser")),console.log(this.user),this.http.get("".concat(l.a.USERS,"/").concat(this.user.userId,"?access_token=").concat(this.user.id)).subscribe((function(t){e.ActiveUser=t,console.log(t)})),this.getDocks()}},{key:"doRefresh",value:function(e){this.ngOnInit(),setTimeout((function(){console.log("Async operation has ended"),e.target.complete()}),2e3)}},{key:"getDocks",value:function(){var e=this;this.http.get("".concat(l.a.DOCKS,"?access_token=").concat(this.user.id)).subscribe((function(t){console.log("DOCK List=> ",t),e.dockList=t}))}},{key:"onClickDock",value:function(e,t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:b.a,componentProps:[e,this.user]});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(f.Jb(u.a),f.Jb(d.a),f.Jb(a.g),f.Jb(i.y),f.Jb(i.z),f.Jb(i.F))},v.\u0275cmp=f.Db({type:v,selectors:[["app-tab1"]],decls:5,vars:4,consts:[["class","ion-no-border",4,"ngIf"],[3,"fullscreen"],[1,"wrapper-grad"],["style","display: flex;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    height: -webkit-fill-available;\n    ",4,"ngIf"],[4,"ngIf"],[1,"ion-no-border"],[1,"flex","p-4","items-center","justify-between",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between","padding","12px"],[1,"flex","items-center",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between"],["src","../../assets/patient-1.png","width","50px"],[1,"text-sm","m-0","ml-2",2,"padding-left","5px"],[1,"text-xs"],[2,"display","flex","align-content","center","justify-content","center","align-items","center","flex-wrap","wrap","height","-webkit-fill-available"],[1,"loader"],["spellcheck","z-index:9999","slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["color","primary"]],template:function(e,t){1&e&&(f.hc(0,p,11,1,"ion-header",0),f.Mb(1,"ion-content",1),f.Mb(2,"div",2),f.hc(3,h,2,0,"div",3),f.hc(4,m,4,1,"div",4),f.Lb(),f.Lb()),2&e&&(f.Zb("ngIf",t.ActiveUser),f.zb(1),f.Zb("fullscreen",!0),f.zb(2),f.Zb("ngIf",!t.ActiveUser),f.zb(1),f.Zb("ngIf",t.ActiveUser))},directives:[r.j,i.g,i.j,i.n,i.o,r.i,i.c,i.e,i.f,i.d],styles:[".loader[_ngcontent-%COMP%]{border-radius:50%;border:5px solid #f3f3f3;border-top-color:#015098;width:50px;height:50px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}#background-content[_ngcontent-%COMP%]{--background:linear-gradient(182.19deg,rgba(171,241,195,0.1) 30.67%,#58cbcd 87.14%)}"]}),v)}],L=((y=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:y}),y.\u0275inj=f.Gb({factory:function(e){return new(e||y)},imports:[[a.j.forChild(x)],a.j]}),y),M=((w=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:w}),w.\u0275inj=f.Gb({factory:function(e){return new(e||w)},imports:[[i.w,r.b,o.a,c.a,L]]}),w)}}]);