(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{X3zk:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginPageModule",(function(){return p}));var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("fXoL"),l=n("ccyI");const d=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.authService=t,this.router=e,this.route=n,this.toastController=o}ngOnInit(){console.log(this.users),this.users=null}contact(){this.presentToast("Error?, send a mail on","nripen@tip.agency","danger")}login(t){this.authService.login(t.form.value.email,t.form.value.password).subscribe(e=>{console.log(e),this.presentToast("Logged in successfully",t.form.value.email,"primary"),window.location.reload()},e=>{console.log(e,t),this.presentToast(e.statusText+": Wrong Email or password",t.form.value.email,"danger")})}presentToast(t,e,n){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t+"<br>"+e+"<br>",duration:2e3,position:"top",cssClass:"normalToast",color:n})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.a),c.Jb(a.g),c.Jb(a.a),c.Jb(r.D))},t.\u0275cmp=c.Db({type:t,selectors:[["app-login"]],decls:23,vars:1,consts:[["padding",""],[1,"wrapper"],[1,"flex","flex-col","justify-center","text-center",2,"position","relative","padding-top","30%"],[1,"w-96","flex","justify-center"],["src","../../assets/Logo OBP.svg","width","180px"],[2,"width","80%","margin","35px auto 10px"],[1,"my-8","text-gray-700",2,"margin-top","0px","font-weight","bold"],[2,"margin-top","5%","display","flex","flex-wrap","nowrap","justify-content","center"],[2,"padding","5px","width","85%",3,"ngSubmit"],["form","ngForm"],["name","email","type","email","placeholder","Email","ngModel","","required","",1,"bg-white","rounded-lg","text-sm","overflow-hidden","mb-3"],["name","password","type","password","placeholder","Password","ngModel","","required","",1,"bg-white","rounded-lg","text-sm","overflow-hidden","mb-3"],["mode","ios","color","primary","size","medium","type","submit","expand","block",3,"disabled"],[1,"my-5","text-center","text-sm","text-gray-700"],["routerLink","/register",1,"nav-item","nav-link",2,"text-decoration","none"],[1,"nav-item","nav-link",2,"text-decoration","none",3,"click"]],template:function(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-content",0),c.Mb(1,"section",1),c.Mb(2,"div",2),c.Mb(3,"div",3),c.Kb(4,"img",4),c.Lb(),c.Lb(),c.Mb(5,"div",5),c.Mb(6,"h2",6),c.ic(7,"Welcome"),c.Lb(),c.Lb(),c.Mb(8,"div",7),c.Mb(9,"form",8,9),c.Ub("ngSubmit",(function(){c.ec(t);const n=c.dc(10);return e.login(n)})),c.Kb(11,"ion-input",10),c.Kb(12,"ion-input",11),c.Mb(13,"ion-button",12),c.ic(14," Login "),c.Lb(),c.Mb(15,"p",13),c.ic(16," Don't have an account ? "),c.Mb(17,"span"),c.Mb(18,"a",14),c.ic(19," Sign Up |"),c.Lb(),c.Lb(),c.Mb(20,"span"),c.Mb(21,"a",15),c.Ub("click",(function(){return e.contact()})),c.ic(22,"| Request"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=c.dc(10);c.zb(13),c.Zb("disabled",t.invalid)}},directives:[r.g,i.i,i.e,i.f,r.k,r.C,i.d,i.g,i.h,r.b,a.i,r.B],styles:["ion-button[_ngcontent-%COMP%]{--background:#062f77}.wrapper[_ngcontent-%COMP%]{background:url(Login\\ In.709a45dde45b6287f7ed.png);background-repeat:no-repeat;background-size:cover;background-position-y:bottom;height:100%}ion-header.ios.header-ios.header-collapse-none.hydrated[_ngcontent-%COMP%]{display:none!important}#background-content[_nghost-%COMP%]{left:0;right:0;top:calc(var(--offset-top)*-1);bottom:calc(var(--offset-bottom)*-1);position:absolute;background:transparent}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;justify-content:center;align-items:center}"]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(d)],a.j]}),t})(),p=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.b,i.a,r.v,b]]}),t})()}}]);