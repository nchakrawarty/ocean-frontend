import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Urls } from '../constants/urls';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage implements OnInit {
  dataValue: any;
  fisherman: any;
  wasteItemsList: any;
  constructor(
    private modalController: ModalController,
    private datePipe: DatePipe,
    public navParams: NavParams,
    private http: HttpClient,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    console.log(this.navParams)
    this.dataValue = this.navParams;
    this.http.get(`${Urls.FISHERMAN}/${this.navParams.data[0]}?access_token=${this.navParams.data[1].id}`).subscribe(((res: any) => {
      console.log(res)
      this.fisherman = res;
      this.http.get(`${Urls.WLIST}?access_token=${this.navParams.data[1].id}`).subscribe((res: any) => {
        this.wasteItemsList = res;
        console.log(this.wasteItemsList)
      })
    }))
  }
  saveData(data) {
    console.log(data)
  }
}
