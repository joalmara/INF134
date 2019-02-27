import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SuccessPage } from '../success/success.page';
import { ClassDataService } from '../class-data.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    passedId = null;

  key:string = "className";

  value: string;
  constructor(public classData: ClassDataService, public modalController: ModalController, private storage: Storage, private router: Router, public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  onChange($event){
  	console.log($event);
  	console.log("TODAY IS :" + $event._d);
  }



   ngOnInit() {
      console.log(this.classData.allClasses);

    //this.passedId = this.activatedRoute.snapshot.paramMap.get("myid");


  }

  loadData(){
    this.storage.get(this.key).then((val) => {
      console.log("Your class is", val )
      this.value = val;
    })
  }


}
