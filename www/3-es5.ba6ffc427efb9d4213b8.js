function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3,18,19],{"9HyD":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("mrSG"),o=n("AzuR"),a=n("fXoL"),c=n("TEn/"),r=n("ofXK"),s=n("tk/3"),b=n("3Pt+");function l(t,e){if(1&t){var n=a.Nb();a.Mb(0,"ion-card"),a.Mb(1,"ion-card-content"),a.Mb(2,"div",10),a.Mb(3,"div",4),a.Kb(4,"img",11),a.Lb(),a.Mb(5,"div",12),a.ic(6),a.Lb(),a.Mb(7,"div",5),a.Mb(8,"ion-input",13),a.Ub("ionChange",(function(t){a.ec(n);var i=e.index;return a.Wb(2).chngeweight(t,i)})),a.Lb(),a.Lb(),a.Mb(9,"div",5),a.Mb(10,"ion-input",14),a.Ub("ionChange",(function(t){a.ec(n);var i=e.index;return a.Wb(2).chngerate(t,i)})),a.Lb(),a.Lb(),a.Lb(),a.Mb(11,"div"),a.ic(12),a.Lb(),a.Lb(),a.Lb()}if(2&t){var i=e.$implicit;a.zb(6),a.kc(" ",i.name," "),a.zb(6),a.kc(" Total = ",i.total," ")}}function d(t,e){if(1&t){var n=a.Nb();a.Mb(0,"ion-content"),a.Mb(1,"div",1),a.Kb(2,"img",2),a.Mb(3,"h2"),a.ic(4),a.Lb(),a.Mb(5,"h4"),a.ic(6,"#"),a.Mb(7,"span"),a.ic(8),a.Lb(),a.Lb(),a.Lb(),a.Mb(9,"div"),a.Mb(10,"div",3),a.Mb(11,"div",4),a.Kb(12,"span"),a.Lb(),a.Mb(13,"div",5),a.ic(14," Name "),a.Lb(),a.Mb(15,"div",5),a.ic(16," Quantity "),a.Lb(),a.Mb(17,"div",5),a.ic(18," Rate "),a.Lb(),a.Lb(),a.Mb(19,"form",6,7),a.Ub("ngSubmit",(function(){a.ec(n);var t=a.dc(20);return a.Wb().saveData(t)})),a.hc(21,l,13,2,"ion-card",8),a.Mb(22,"ion-button",9),a.ic(23," Save "),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&t){var i=a.dc(20),o=a.Wb();a.zb(4),a.jc(o.fisherman.name),a.zb(4),a.jc(o.fisherman.id),a.zb(13),a.Zb("ngForOf",o.tmp),a.zb(1),a.Zb("disabled",i.invalid)}}var u=function(){var t=function(){function t(e,n,i,o,a){_classCallCheck(this,t),this.modalController=e,this.datePipe=n,this.navParams=i,this.http=o,this.toastController=a,this.weight=[],this.rate=[],this.tmp=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;console.log(this.navParams),this.dataValue=this.navParams,this.http.get("".concat(o.a.FISHERMAN,"/").concat(this.navParams.data[0],"?access_token=").concat(this.navParams.data[1].id)).subscribe((function(e){console.log(e),t.fisherman=e,t.http.get("".concat(o.a.WLIST,"?access_token=").concat(t.navParams.data[1].id)).subscribe((function(e){t.wasteItemsList=e,console.log(t.wasteItemsList),t.tempData(t.wasteItemsList)}))}))}},{key:"tempData",value:function(t){for(var e=0;e<t.length;e++){var n={name:"",weight:NaN,rate:NaN,total:NaN};n.name=t[e].name,this.tmp=this.tmp.concat(n),console.log(t[e])}console.log(this.tmp)}},{key:"chngeweight",value:function(t,e){console.log(t.detail.value,e),this.tmp[e].weight=t.detail.value,this.tmp[e].total=this.tmp[e].weight*this.tmp[e].rate,console.log(this.tmp)}},{key:"chngerate",value:function(t,e){console.log(t.detail.value,e),this.tmp[e].rate=t.detail.value,this.tmp[e].total=this.tmp[e].weight*this.tmp[e].rate,console.log(this.tmp)}},{key:"saveData",value:function(t){var e=this;console.log(this.tmp),this.tmp.forEach((function(t){console.log(t),t.fishermanId=e.fisherman.id,console.log(t),e.http.post("".concat(o.a.FISHERMAN,"/").concat(e.fisherman.id,"/wasteCollecteds?access_token=").concat(e.navParams.data[1].id),{name:t.name,quantity:t.weight,rate:t.rate,total:t.total,fishermanId:e.fisherman.id}).subscribe((function(t){console.log(t)}))})),this.closeModalNodata()}},{key:"closeModalNodata",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Close"),t.next=3,this.modalController.dismiss();case 3:case"end":return t.stop()}}),t,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Jb(c.y),a.Jb(r.d),a.Jb(c.z),a.Jb(s.a),a.Jb(c.D))},t.\u0275cmp=a.Db({type:t,selectors:[["app-add-items"]],decls:3,vars:1,consts:[[4,"ngIf"],[1,"fisherman"],["src","../../assets/patient-1.png","width","150px"],[1,"grid-container",2,"border-bottom","1px solid"],[1,"grid-item"],[1,"item-grid"],[3,"ngSubmit"],["form","ngForm"],[4,"ngFor","ngForOf"],["mode","ios","color","primary","size","medium","type","submit","expand","block",3,"disabled"],[1,"grid-container"],["src","../../assets/patient-1.png","width","25px"],[1,"item-grid",2,"padding-left","5px"],["name","weight","type","number","placeholder","Weight","required","",2,"margin-bottom","5px",3,"ionChange"],["name","rate","type","number","placeholder","Rate","required","",2,"margin-bottom","5px",3,"ionChange"]],template:function(t,e){1&t&&(a.Mb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Lb(),a.hc(2,d,24,4,"ion-content",0)),2&t&&(a.zb(2),a.Zb("ngIf",e.fisherman))},directives:[c.i,c.u,r.j,c.g,b.i,b.e,b.f,r.i,c.b,c.c,c.d,c.k,c.A],styles:[".fisherman[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:center;align-items:center}.fisherman[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .fisherman[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:5px}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr 6fr 6fr;padding:10px;align-items:center}.grid-item[_ngcontent-%COMP%]{display:flex;text-align:center;align-content:center;align-items:center;flex-wrap:wrap;justify-content:space-around}"]}),t}()},fQu3:function(t,e,n){"use strict";n.r(e),n.d(e,"BarcodePageModule",(function(){return O}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),c=n("tyNb"),r=n("mrSG"),s=n("AzuR"),b=n("9HyD"),l=n("fXoL"),d=n("tk/3"),u=n("WdVq");function f(t,e){if(1&t&&(l.Mb(0,"ion-header",2),l.Mb(1,"header",3),l.Mb(2,"div",4),l.Kb(3,"img",5),l.Mb(4,"h3",6),l.Mb(5,"span",7),l.ic(6,"Welcome"),l.Lb(),l.ic(7,", "),l.Mb(8,"span"),l.Mb(9,"b"),l.ic(10),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t){var n=l.Wb();l.zb(10),l.kc(" ",null==n.ActiveUser?null:n.ActiveUser.name,"")}}function m(t,e){if(1&t){var n=l.Nb();l.Mb(0,"ion-content"),l.Mb(1,"ion-card",8),l.Mb(2,"ion-card-content"),l.Mb(3,"h1",9),l.ic(4,"Scan any QR first"),l.Lb(),l.Lb(),l.Mb(5,"ion-footer",10),l.Mb(6,"ion-button",11),l.Ub("click",(function(){return l.ec(n),l.Wb().scanBarcode()})),l.ic(7,"Read New QR code"),l.Lb(),l.Lb(),l.Lb(),l.Lb()}}function h(t,e){if(1&t&&(l.Mb(0,"div",22),l.ic(1),l.Lb()),2&t){var n=e.$implicit;l.zb(1),l.kc(" Image ",n," ")}}function p(t,e){if(1&t&&(l.Mb(0,"div"),l.Mb(1,"ion-card",19),l.Mb(2,"ion-card-content"),l.Mb(3,"div",20),l.hc(4,h,2,1,"div",21),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t){var n=l.Wb(2);l.zb(4),l.Zb("ngForOf",n.productimages)}}function g(t,e){if(1&t&&(l.Mb(0,"div",25),l.Kb(1,"img",26),l.Mb(2,"p"),l.ic(3),l.Lb(),l.Lb()),2&t){var n=e.$implicit;l.zb(1),l.ac("src","../../assets/icon/",n.name,".png",l.fc),l.zb(2),l.jc(n.name)}}function v(t,e){if(1&t&&(l.Mb(0,"div",25),l.Mb(1,"p"),l.ic(2),l.Lb(),l.Lb()),2&t){var n=e.$implicit;l.zb(2),l.lc("",n.name," | ",n.quantity,"Kg | Rs",n.rate," | Total= Rs",n.total," ")}}function M(t,e){if(1&t&&(l.Mb(0,"div"),l.Mb(1,"ion-card",19),l.Mb(2,"ion-card-content"),l.Mb(3,"div",23),l.hc(4,g,4,2,"div",24),l.Lb(),l.Lb(),l.Lb(),l.Mb(5,"ion-card"),l.Mb(6,"ion-card-content"),l.hc(7,v,3,4,"div",24),l.Lb(),l.Lb(),l.Lb()),2&t){var n=l.Wb(2);l.zb(4),l.Zb("ngForOf",n.wasteItemsList),l.zb(3),l.Zb("ngForOf",n.wasteCollected)}}function y(t,e){if(1&t&&(l.Mb(0,"div",22),l.ic(1),l.Lb()),2&t){var n=e.$implicit;l.zb(1),l.kc(" Amount ",n," ")}}function L(t,e){if(1&t&&(l.Mb(0,"div"),l.Mb(1,"ion-card",19),l.Mb(2,"ion-card-content"),l.Mb(3,"div",20),l.hc(4,y,2,1,"div",21),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t){var n=l.Wb(2);l.zb(4),l.Zb("ngForOf",n.productimages)}}var x=function(t){return{"border-bottom":t}};function w(t,e){if(1&t){var n=l.Nb();l.Mb(0,"ion-content"),l.Mb(1,"ion-refresher",12),l.Ub("ionRefresh",(function(t){return l.ec(n),l.Wb().doRefresh(t)})),l.Kb(2,"ion-refresher-content"),l.Lb(),l.Mb(3,"div",13),l.Kb(4,"img",14),l.Mb(5,"h2"),l.ic(6),l.Lb(),l.Mb(7,"h4"),l.ic(8,"#"),l.Mb(9,"span",11),l.Ub("click",(function(){l.ec(n);var t=l.Wb();return t.copy(t.fisherman.id)})),l.ic(10),l.Lb(),l.Lb(),l.Lb(),l.Mb(11,"div",15),l.Mb(12,"ion-button",16),l.Ub("click",(function(){l.ec(n);var t=l.Wb();return t.addItems(t.fisherman.id)})),l.ic(13," Add Items "),l.Lb(),l.Lb(),l.Mb(14,"ion-card"),l.Mb(15,"ion-card-content"),l.Mb(16,"div",17),l.Mb(17,"span",18),l.Ub("click",(function(t){return l.ec(n),l.Wb().func_photos(t)})),l.ic(18,"Photos"),l.Lb(),l.Mb(19,"span",18),l.Ub("click",(function(t){return l.ec(n),l.Wb().func_items(t)})),l.ic(20,"Items"),l.Lb(),l.Mb(21,"span",18),l.Ub("click",(function(t){return l.ec(n),l.Wb().func_amounts(t)})),l.ic(22,"Amounts"),l.Lb(),l.Lb(),l.hc(23,p,5,1,"div",1),l.hc(24,M,8,2,"div",1),l.hc(25,L,5,1,"div",1),l.Lb(),l.Lb(),l.Lb()}if(2&t){var i=l.Wb();l.zb(6),l.jc(i.fisherman.name),l.zb(4),l.jc(i.fisherman.id),l.zb(7),l.Zb("ngStyle",l.bc(8,x,1==i.photos?"2px solid var(--ion-color-primary)":"none")),l.zb(2),l.Zb("ngStyle",l.bc(10,x,1==i.items?"2px solid var(--ion-color-primary)":"none")),l.zb(2),l.Zb("ngStyle",l.bc(12,x,1==i.amounts?"2px solid var(--ion-color-primary)":"none")),l.zb(2),l.Zb("ngIf",i.photos),l.zb(1),l.Zb("ngIf",i.items),l.zb(1),l.Zb("ngIf",i.amounts)}}var C,k,_,I=[{path:"",component:(C=function(){function t(e,n,i,o,a,c){_classCallCheck(this,t),this.http=e,this.barcodeScanner=n,this.datePipe=i,this.modalController=o,this.toastController=a,this.router=c,this.photos=!0,this.items=!1,this.amounts=!1,this.tempId="6285c34e4108c2667cab6a3b",this.productimages=[1,2,3,4,5,6,7,8,9]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.user=JSON.parse(localStorage.getItem("currentUser")),console.log(this.user),this.http.get("".concat(s.a.USERS,"/").concat(this.user.userId,"?access_token=").concat(this.user.id)).subscribe((function(e){t.ActiveUser=e,console.log(e)})),this.http.get("".concat(s.a.WLIST,"?access_token=").concat(this.user.id)).subscribe((function(e){t.wasteItemsList=e,console.log(t.wasteItemsList)})),console.log("Call scan"),this.scanBarcode()}},{key:"scanBarcode",value:function(){var t=this;this.barcodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,saveHistory:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then((function(e){t.scannedData=JSON.parse(e.text),console.log("Barcode data",e.text),console.log("Barcode data Scanned Id",e.text),console.log("Barcode data Scanned json",t.scannedData.name),console.log("Barcode data Scanned json",t.scannedData.id),t.callFisherman(t.scannedData.id)})).catch((function(t){console.log("Error",t)}))}},{key:"callFisherman",value:function(t){var e=this;this.http.get("".concat(s.a.FISHERMAN,"/").concat(t,"?access_token=").concat(this.user.id)).subscribe((function(t){console.log(t),e.fisherman=t}))}},{key:"func_photos",value:function(t){console.log(t),this.photos=!0,this.items=!1,this.amounts=!1}},{key:"func_items",value:function(t){var e=this;console.log(t),this.http.get("".concat(s.a.FISHERMAN,"/").concat(this.scannedData.id,"/wasteCollecteds?access_token=").concat(this.user.id)).subscribe((function(t){console.log(t),e.wasteCollected=t})),this.photos=!1,this.items=!0,this.amounts=!1}},{key:"func_amounts",value:function(t){console.log(t),this.photos=!1,this.items=!1,this.amounts=!0}},{key:"copy",value:function(t){console.log(t);var e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.presentToast("Copied ID = "+t,"success")}},{key:"addItems",value:function(t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.modalController.create({component:b.a,componentProps:[t,this.user]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"presentToast",value:function(t,e){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:t,duration:1e3,position:"top",cssClass:"normalToast",color:e});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"doRefresh",value:function(t){this.ngOnInit(),setTimeout((function(){console.log("Async operation has ended"),t.target.complete()}),2e3)}}]),t}(),C.\u0275fac=function(t){return new(t||C)(l.Jb(d.a),l.Jb(u.a),l.Jb(i.d),l.Jb(a.y),l.Jb(a.D),l.Jb(c.g))},C.\u0275cmp=l.Db({type:C,selectors:[["app-barcode"]],decls:3,vars:3,consts:[["class","ion-no-border",4,"ngIf"],[4,"ngIf"],[1,"ion-no-border"],[1,"flex","p-4","items-center","justify-between",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between","padding","12px"],[1,"flex","items-center",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between"],["src","../../assets/patient-1.png","width","50px"],[1,"text-sm","m-0","ml-2",2,"padding-left","5px"],[1,"text-xs"],["color","danger",2,"display","flex","flex-wrap","wrap","align-content","center","align-items","center","justify-content","center"],[2,"font-size","2em !important","color","#fff","text-align","center"],[2,"display","flex","justify-content","center"],[3,"click"],["spellcheck","z-index:9999","slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],[1,"fisherman"],["src","../../assets/patient-1.png","width","150px"],[2,"text-align","center","padding","10px"],["size","medium","color","primary",3,"click"],[1,"dlist"],[3,"ngStyle","click"],[2,"box-shadow","none"],[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[1,"grid-item"],[1,"grid-containerI"],["class","grid-item","style","background:#efefef;margin: 1%;",4,"ngFor","ngForOf"],[1,"grid-item",2,"background","#efefef","margin","1%"],[2,"padding","2%","margin","5%",3,"src"]],template:function(t,e){1&t&&(l.hc(0,f,11,1,"ion-header",0),l.hc(1,m,8,0,"ion-content",1),l.hc(2,w,26,14,"ion-content",1)),2&t&&(l.Zb("ngIf",e.ActiveUser),l.zb(1),l.Zb("ngIf",!e.fisherman),l.zb(1),l.Zb("ngIf",e.fisherman))},directives:[i.j,a.i,a.g,a.c,a.d,a.h,a.b,a.m,a.n,i.k,i.i],styles:[".fisherman[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:center;align-items:center}.fisherman[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .fisherman[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:5px}.dlist[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;margin:25px auto 0;border-bottom:1px solid grey}.dlist[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:10px;border-bottom:2px solid var(--ion-color-primary)}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto;padding:10px}.grid-containerI[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;padding:10px}.grid-item[_ngcontent-%COMP%]{text-align:center}"]}),C)}],P=((_=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:_}),_.\u0275inj=l.Gb({factory:function(t){return new(t||_)},imports:[[c.j.forChild(I)],c.j]}),_),O=((k=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:k}),k.\u0275inj=l.Gb({factory:function(t){return new(t||k)},imports:[[i.b,o.a,a.v,P]]}),k)}}]);