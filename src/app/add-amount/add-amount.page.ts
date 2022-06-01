import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Urls } from '../constants/urls';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.page.html',
  styleUrls: ['./add-amount.page.scss'],
})
export class AddAmountPage implements OnInit {
  dataValue: any;
  fisherman: any;
  wasteItemsList: any;
  resp: any;
  weight: any = [];
  rate: any = [];
  total: any;
  tmp: any[] = []
  transactions: any;
  wasteCollected: any;
  paid: any;
  // tempWaste: any;
  constructor(
    private modalController: ModalController,
    private datePipe: DatePipe,
    public navParams: NavParams,
    private http: HttpClient,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.paid = 0;
    console.log(this.navParams)
    this.dataValue = this.navParams;
    this.http.get(`${Urls.FISHERMAN}/${this.navParams.data[0]}?access_token=${this.navParams.data[1].id}`).subscribe(((res: any) => {
      console.log(res)
      this.fisherman = res;
      // this.http.get(`${Urls.WLIST}?access_token=${this.navParams.data[1].id}`).subscribe((res) => {
      //   this.wasteItemsList = res;
      //   console.log(this.wasteItemsList)
      //   this.tempData(this.wasteItemsList);
      // })
    }))
    this.http.get(`${Urls.FISHERMAN}/${this.navParams.data[0]}/wasteCollecteds?access_token=${this.navParams.data[1].id}`).subscribe((res => {
      console.log(res);
      this.wasteCollected = res;
      // this.calcttl()
    }))
    this.http.get(`${Urls.FISHERMAN}/${this.navParams.data[0]}/transactions?access_token=${this.navParams.data[1].id}`).subscribe(((res: any) => {
      console.log(res);
      this.transactions = res;
      this.transactions.forEach(element => {
        element.amount.forEach(amt => {
          this.paid = this.paid + amt.Amount;
        });
      });
      this.Balance = res[0].balance;
      this.calcttl()
    }))
  }


  Balance: any;
  calcttl() {
    if (this.wasteCollected != undefined && this.transactions != undefined) {
      // var ttl = 0;
      // this.wasteCollected.forEach(element => {
      //   ttl = ttl + element.total;
      // });
      // console.log(ttl)
      this.http.get(`${Urls.FISHERMAN}/${this.navParams.data[0]}/transactions?access_token=${this.navParams.data[1].id}`).subscribe(((res: any) => {
        console.log(res);
        this.transactions.forEach(element => {
          element.amount.forEach(amt => {
            this.paid = this.paid + amt.Amount;
          });
        });
        this.Balance = res[0].balance;
        // this.calcttl()
      }))
      // this.Balance = ttl;
    }
  }

  addAmount(data) {
    var ttl = 0;
    ttl = this.transactions[0].balance - data.form.value.Amount;
    console.log(data.form.value)
    if (this.Balance) {
      this.http.patch(`${Urls.TRANSACTION}/${this.transactions[0].id}?access_token=${this.navParams.data[1].id}`,
        {
          "balance": ttl,
          "amount": [{
            "Amount": data.form.value.Amount, "transactionDate": data.form.value.transactionDate
          }

          ]
        }
      ).subscribe(((res: any) => {
        console.log(res)

      }))
    }
    this.closeModalNodata()

  }
  async closeModalNodata() {
    console.log("Close")
    await this.modalController.dismiss();
  }
}





