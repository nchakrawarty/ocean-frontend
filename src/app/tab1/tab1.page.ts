
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Urls } from '../constants/urls';
import { FishermanPage } from '../fisherman/fisherman.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(

    private authService: AuthService,
    private http: HttpClient, private router: Router,
    private loadingCtrl: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }
  user: any;
  ActiveUser: any;
  dockList: any;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user)
    this.http.get(`${Urls.USERS}/${this.user.userId}?access_token=${this.user.id}`).subscribe((res: any) => {
      this.ActiveUser = res;
      console.log(res)
      // this.ActiveUser.AccountName = res.username;
      // this.ActiveUser.role = res.role;
      // this.ActiveUser.DOB = res.DOB;
      // this.ActiveUser.email = res.email;
      /*----------------- PATIENT LIST ------------------------------------*/
    })
    this.getDocks();
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  getDocks() {
    this.http.get(`${Urls.DOCKS}?access_token=${this.user.id}`).subscribe((res: any) => {
      console.log("DOCK List=> ", res)
      this.dockList = res;
    })
  }
  async onClickDock(d, e) {
    const modal = await this.modalController.create({
      component: FishermanPage,
      componentProps: [d, this.user]
    });
    return await modal.present();
    // this.http.get(`${Urls.DOCKS}/${d.id}/fishermans?access_token=${this.user.id}`).subscribe((res => {
    //   console.log(res)
    // }))
  }
}
