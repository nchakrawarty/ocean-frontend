(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},"8o8R":function(t,e,n){"use strict";n.r(e),n.d(e,"AddItemsPageModule",(function(){return b}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),c=n("9HyD"),a=n("fXoL");const l=[{path:"",component:c.a}];let u=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(l)],s.j]}),t})(),b=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,r.w,u]]}),t})()},AzuR:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("AytR");let o=(()=>{class t{}return t.BASE_URL=i.a.api_base_url,t.CENTERS=t.BASE_URL+"/centers",t.LOGIN=t.BASE_URL+"/accounts/login",t.USERS=t.BASE_URL+"/accounts",t.DOCKS=t.BASE_URL+"/docks",t.FISHERMAN=t.BASE_URL+"/fishermans",t.TRANSACTION=t.BASE_URL+"/transactions",t.WLIST=t.BASE_URL+"/wasteItems",t.WCOLLECTED=t.BASE_URL+"/wasteCollecteds",t.LOGOUT=t.BASE_URL+"/accounts/logout",t})()},NKIX:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("QX1p"),o=n("ItpF"),r=n("2c9M");const s=(t,e)=>{let n,s;const c=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),a(r,o)):l()},a=(t,e)=>{n=t,s||(s=n);const o=n;Object(i.n)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.n)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,r.a),onMove:t=>c(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),s=void 0}})}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},S1np:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingTabPageModule",(function(){return m}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),c=n("AzuR"),a=n("fXoL"),l=n("ccyI"),u=n("tk/3");function b(t,e){if(1&t&&(a.Mb(0,"ion-header",8),a.Mb(1,"header",9),a.Mb(2,"div",10),a.Kb(3,"img",11),a.Mb(4,"h3",12),a.Mb(5,"span",13),a.ic(6,"Welcome"),a.Lb(),a.ic(7,", "),a.Mb(8,"span"),a.Mb(9,"b"),a.ic(10),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t){const t=a.Wb();a.zb(10),a.kc(" ",null==t.ActiveUser?null:t.ActiveUser.name,"")}}function d(t,e){1&t&&(a.Mb(0,"div",14),a.Kb(1,"div",15),a.Lb())}function f(t,e){if(1&t){const t=a.Nb();a.Mb(0,"div"),a.Mb(1,"ion-refresher",16),a.Ub("ionRefresh",(function(e){return a.ec(t),a.Wb().doRefresh(e)})),a.Kb(2,"ion-refresher-content"),a.Lb(),a.Lb()}}const p=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,r){this.authService=t,this.http=e,this.router=n,this.loadingCtrl=i,this.modalController=o,this.toastController=r}ngOnInit(){this.user=JSON.parse(localStorage.getItem("currentUser")),console.log(this.user),this.http.get(`${c.a.USERS}/${this.user.userId}?access_token=${this.user.id}`).subscribe(t=>{this.ActiveUser=t,console.log(t)}),this.getDocks()}doRefresh(t){this.ngOnInit(),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}getDocks(){this.http.get(`${c.a.DOCKS}?access_token=${this.user.id}`).subscribe(t=>{console.log("DOCK List=> ",t),this.dockList=t})}LogOut(){this.authService.logout(this.user),localStorage.removeItem("currentUser"),this.router.navigate(["/login"])}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(l.a),a.Jb(u.a),a.Jb(s.g),a.Jb(r.y),a.Jb(r.z),a.Jb(r.F))},t.\u0275cmp=a.Db({type:t,selectors:[["app-setting-tab"]],decls:9,vars:4,consts:[["class","ion-no-border",4,"ngIf"],[3,"fullscreen"],[1,"wrapper-grad"],["style","display: flex;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    height: -webkit-fill-available;\n    ",4,"ngIf"],[4,"ngIf"],[1,"px-4"],["size","medium","expand","block","mode","ios","color","primary",3,"click"],[1,"text-sm"],[1,"ion-no-border"],[1,"flex","p-4","items-center","justify-between",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between","padding","12px"],[1,"flex","items-center",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between"],["src","../../assets/patient-1.png","width","50px"],[1,"text-sm","m-0","ml-2",2,"padding-left","5px"],[1,"text-xs"],[2,"display","flex","align-content","center","justify-content","center","align-items","center","flex-wrap","wrap","height","-webkit-fill-available"],[1,"loader"],["spellcheck","z-index:9999","slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"]],template:function(t,e){1&t&&(a.hc(0,b,11,1,"ion-header",0),a.Mb(1,"ion-content",1),a.Mb(2,"div",2),a.hc(3,d,2,0,"div",3),a.hc(4,f,3,0,"div",4),a.Mb(5,"div",5),a.Mb(6,"ion-button",6),a.Ub("click",(function(){return e.LogOut()})),a.Mb(7,"span",7),a.ic(8," LogOut"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.Zb("ngIf",e.ActiveUser),a.zb(1),a.Zb("fullscreen",!0),a.zb(2),a.Zb("ngIf",!e.ActiveUser),a.zb(1),a.Zb("ngIf",e.ActiveUser))},directives:[i.j,r.g,r.b,r.j,r.n,r.o],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(p)],s.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,r.w,h]]}),t})()},ccyI:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("lJxs"),o=n("AzuR"),r=n("fXoL"),s=n("tk/3"),c=n("tyNb");let a=(()=>{class t{constructor(t,e){this.http=t,this.router=e}login(t,e){return this.http.post(""+o.a.LOGIN,{email:t,password:e,returnSecureToken:!0}).pipe(Object(i.a)(t=>(localStorage.setItem("currentUser",JSON.stringify(t)),this.http.get(`${o.a.USERS}/${t.userId}?access_token=${t.id}`).subscribe(t=>{localStorage.setItem("userName",t.username)}),t&&t.id&&localStorage.setItem("currentUser",JSON.stringify(t)),this.router.navigate(["/tabs"]),t)))}logout(t){this.http.post(`${o.a.LOGOUT}?access_token=${t.id}`,{}).subscribe(t=>{console.log(t),console.log("Logged out"),localStorage.removeItem("currentUser"),localStorage.removeItem("userName"),this.router.navigate(["/login"])})}register(t,e,n,r,s,c,a){return console.log(t,e,n,r,s,a,c),this.http.post(""+o.a.USERS,{name:s,email:t,contactNum:c,boloodgroup:a,password:e,age:n,gender:r,username:s,emailverified:!0}).pipe(Object(i.a)(t=>{}))}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(s.a),r.Qb(c.g))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));const i=(t,e)=>null!==e.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},q4bS:function(t,e,n){"use strict";n.r(e),n.d(e,"AddAmountPageModule",(function(){return b}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),c=n("8I4O"),a=n("fXoL");const l=[{path:"",component:c.a}];let u=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(l)],s.j]}),t})(),b=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,r.w,u]]}),t})()},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,r.w]]}),t})()},ual7:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("mrSG"),o=n("AzuR"),r=n("fXoL"),s=n("TEn/"),c=n("ofXK"),a=n("WdVq"),l=n("tk/3");function u(t,e){if(1&t&&(r.Mb(0,"ion-header",4),r.Mb(1,"header",5),r.Mb(2,"div",6),r.Kb(3,"img",7),r.Mb(4,"h3",8),r.Mb(5,"span"),r.Mb(6,"b"),r.ic(7),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&t){const t=r.Wb();r.zb(7),r.kc(" ",t.navParams.data[0].dockName,"")}}function b(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div"),r.Mb(1,"ion-card",12),r.Mb(2,"ion-card-header"),r.Mb(3,"ion-card-subtitle"),r.ic(4),r.Mb(5,"span"),r.ic(6),r.Lb(),r.Lb(),r.Lb(),r.Mb(7,"ion-card-content"),r.Mb(8,"div"),r.ic(9," Contact no. :- "),r.Mb(10,"a",13),r.ic(11),r.Lb(),r.Lb(),r.Mb(12,"div"),r.Mb(13,"ion-button",14),r.Ub("click",(function(){r.ec(t);const n=e.$implicit;return r.Wb(3).generateqr(n)})),r.ic(14,"QR"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&t){const t=e.$implicit;r.zb(4),r.kc(" ",t.name," "),r.zb(2),r.kc(" (",t.id,") "),r.zb(4),r.ac("href","tel:",t.contactNum,"",r.fc),r.zb(1),r.jc(t.contactNum)}}function d(t,e){if(1&t&&(r.Mb(0,"div"),r.hc(1,b,15,4,"div",11),r.Lb()),2&t){const t=r.Wb(2);r.zb(1),r.Zb("ngForOf",t.fishermanList)}}function f(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div"),r.Mb(1,"ion-card",12),r.Mb(2,"ion-card-header"),r.Mb(3,"ion-card-subtitle"),r.ic(4),r.Mb(5,"span"),r.ic(6),r.Lb(),r.Lb(),r.Lb(),r.Mb(7,"ion-card-content"),r.Mb(8,"div"),r.ic(9," Contact no. :- "),r.Mb(10,"a",13),r.ic(11),r.Lb(),r.Lb(),r.Mb(12,"div"),r.Mb(13,"ion-button",14),r.Ub("click",(function(){r.ec(t);const n=e.$implicit;return r.Wb(3).generateqr(n)})),r.ic(14,"QR"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&t){const t=e.$implicit;r.zb(4),r.kc(" ",t.name," "),r.zb(2),r.kc(" (",t.id,") "),r.zb(4),r.ac("href","tel:",t.contactNum,"",r.fc),r.zb(1),r.jc(t.contactNum)}}function p(t,e){if(1&t&&(r.Mb(0,"div"),r.hc(1,f,15,4,"div",11),r.Lb()),2&t){const t=r.Wb(2);r.zb(1),r.Zb("ngForOf",t.fshman)}}function h(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div"),r.Mb(1,"ion-refresher",9),r.Ub("ionRefresh",(function(e){return r.ec(t),r.Wb().doRefresh(e)})),r.Kb(2,"ion-refresher-content"),r.Lb(),r.Mb(3,"div"),r.Mb(4,"ion-searchbar",10),r.Ub("ionInput",(function(e){return r.ec(t),r.Wb().queryAcronyms(e)})),r.Lb(),r.hc(5,d,2,1,"div",3),r.hc(6,p,2,1,"div",3),r.Lb(),r.Lb()}if(2&t){const t=r.Wb();r.zb(5),r.Zb("ngIf",0==t.queryF),r.zb(1),r.Zb("ngIf",1==t.queryF)}}let m=(()=>{class t{constructor(t,e,n,i,o,r){this.modalController=t,this.datePipe=e,this.navParams=n,this.barcodeScanner=i,this.http=o,this.toastController=r,this.queryF=!1}ngOnInit(){console.log(this.navParams),this.dataValue=this.navParams,this.http.get(`${o.a.DOCKS}/${this.navParams.data[0].id}/fishermans?access_token=${this.navParams.data[1].id}`).subscribe(t=>{console.log(t),this.fishermanList=t})}closeModalNodata(){return Object(i.a)(this,void 0,void 0,(function*(){console.log("Close"),yield this.modalController.dismiss()}))}generateqr(t){console.log(t),this.inputData={name:t.name,id:t.id},console.log(this.inputData),this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.inputData).then(t=>{console.log(t),this.encodedData=t},t=>{console.log("Error occured : "+t)})}queryAcronyms(t){this.queryF=!0,this.fshman=this.fishermanList,console.log(t.target.value);const e=t.target.value;e&&""!=e.trim()&&(this.fshman=this.fishermanList.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())>-1||t.id.toLowerCase().indexOf(e.toLowerCase())>-1),console.log(this.fshman))}doRefresh(t){console.log("Begin async operation"),this.ngOnInit(),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},1e3)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(s.z),r.Jb(c.d),r.Jb(s.A),r.Jb(a.a),r.Jb(l.a),r.Jb(s.F))},t.\u0275cmp=r.Db({type:t,selectors:[["app-fisherman"]],decls:4,vars:3,consts:[["class","ion-no-border",4,"ngIf"],[3,"fullscreen"],[1,"wrapper-grad"],[4,"ngIf"],[1,"ion-no-border"],[1,"flex","p-4","items-center","justify-between",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between","padding","12px"],[1,"flex","items-center",2,"display","flex","flex-direction","row","flex-wrap","wrap","justify-content","space-between"],["src","../../assets/patient-1.png","width","50px"],[1,"text-sm","m-0","ml-2",2,"padding-left","5px"],["spellcheck","z-index:9999","slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],["color","medium",1,"p-0",2,"--border-radius","20px !important","--box-shadow","none",3,"ionInput"],[4,"ngFor","ngForOf"],["color","primary"],[2,"color","#fff",3,"href"],["color","secondary",3,"click"]],template:function(t,e){1&t&&(r.hc(0,u,8,1,"ion-header",0),r.Mb(1,"ion-content",1),r.Mb(2,"div",2),r.hc(3,h,7,2,"div",3),r.Lb(),r.Lb()),2&t&&(r.Zb("ngIf",e.navParams),r.zb(1),r.Zb("fullscreen",!0),r.zb(2),r.Zb("ngIf",e.fishermanList))},directives:[c.j,s.g,s.j,s.n,s.o,s.q,s.E,c.i,s.c,s.e,s.f,s.d,s.b],styles:[""]}),t})()}}]);