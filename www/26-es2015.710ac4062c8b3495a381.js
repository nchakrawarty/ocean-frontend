(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{hO9l:function(t,e,n){"use strict";n.r(e),n.d(e,"TabsPageModule",(function(){return u}));var a=n("TEn/"),o=n("ofXK"),b=n("3Pt+"),i=n("tyNb"),l=n("fXoL"),r=n("ccyI"),d=n("tk/3");const c=[{path:"",component:(()=>{class t{constructor(t,e,n,a){this.authService=t,this.http=e,this.router=n,this.toastController=a}barcode(){this.router.navigate(["/tabs/barcode"])}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(r.a),l.Jb(d.a),l.Jb(i.g),l.Jb(a.D))},t.\u0275cmp=l.Db({type:t,selectors:[["app-tabs"]],decls:23,vars:0,consts:[[2,"position","fixed","z-index","99","width","100%","display","flex","justify-content","space-between","align-items","center"],["color","transparent","size","large",1,"menu",2,"float","right","right","50px","z-index","99",3,"click"],[2,"display","block"],["color","primary","name","qr-code-outline","size","large"],["slot","bottom",2,"--background","#f3f7fd","border","none","padding","10px"],["tab","tab1"],["name","home"],["tab","tab2"],["name","calendar"],["tab","tab3"],["name","document"],["tab","setting-tab"],["name","settings"]],template:function(t,e){1&t&&(l.Mb(0,"div",0),l.Kb(1,"div"),l.Mb(2,"ion-button",1),l.Ub("click",(function(){return e.barcode()})),l.Mb(3,"span",2),l.Kb(4,"ion-icon",3),l.Lb(),l.Lb(),l.Lb(),l.Mb(5,"ion-tabs"),l.Mb(6,"ion-tab-bar",4),l.Mb(7,"ion-tab-button",5),l.Kb(8,"ion-icon",6),l.Mb(9,"ion-label"),l.ic(10,"Home"),l.Lb(),l.Lb(),l.Mb(11,"ion-tab-button",7),l.Kb(12,"ion-icon",8),l.Mb(13,"ion-label"),l.ic(14,"Appointments"),l.Lb(),l.Lb(),l.Mb(15,"ion-tab-button",9),l.Kb(16,"ion-icon",10),l.Mb(17,"ion-label"),l.ic(18,"Report"),l.Lb(),l.Lb(),l.Mb(19,"ion-tab-button",11),l.Kb(20,"ion-icon",12),l.Mb(21,"ion-label"),l.ic(22,"Setting"),l.Lb(),l.Lb(),l.Lb(),l.Lb())},directives:[a.b,a.j,a.s,a.q,a.r,a.l],styles:[""]}),t})(),children:[{path:"tab1",loadChildren:()=>Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"tmrb")).then(t=>t.Tab1PageModule)},{path:"tab2",loadChildren:()=>Promise.all([n.e(0),n.e(24)]).then(n.bind(null,"TUkU")).then(t=>t.Tab2PageModule)},{path:"tab3",loadChildren:()=>Promise.all([n.e(0),n.e(25)]).then(n.bind(null,"k+ul")).then(t=>t.Tab3PageModule)},{path:"barcode",loadChildren:()=>n.e(3).then(n.bind(null,"fQu3")).then(t=>t.BarcodePageModule)},{path:"setting-tab",loadChildren:()=>n.e(0).then(n.bind(null,"S1np")).then(t=>t.SettingTabPageModule)},{path:"add-items/:id",loadChildren:()=>Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"8o8R")).then(t=>t.AddItemsPageModule)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let s=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[i.j.forChild(c)]]}),t})(),u=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[a.v,o.b,b.a,s]]}),t})()}}]);