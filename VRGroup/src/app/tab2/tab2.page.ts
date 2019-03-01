import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SuccessPage } from '../success/success.page';
import { ClassDataService } from '../class-data.service'
import { EnrolledClassPage } from '../enrolled-class/enrolled-class.page';

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
  convertedToString: string;

  value: string;

  classValue: string;

  constructor(public modalCtrl: ModalController, public classData: ClassDataService, public modalController: ModalController, private storage: Storage, private router: Router, public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  onChange($event){
  	//console.log($event);
  	//console.log("TODAY IS :" + $event._d);

    this.convertedToString = "" +  $event._d;

    //console.log(this.convertedToString);


   console.log(this.classData.allClasses);

    //console.log(this.classData.allClasses[0]['days']);

    //console.log(this.convertedToString.slice(0,3));

    //console.log(this.classData.allClasses[0]['days'][0]);
    
    //console.log(this.convertedToString.slice(0,3) == this.classData.allClasses[0]['days'][1].slice(0,3));
   
     console.log(this.classData.allClasses[0]['days']);
     console.log(this.convertedToString);
    if(this.classData.allClasses[0]['days'].includes(this.convertedToString.slice(0,3)))
    {
      this.classValue = 'Your class: ' + this.classData.allClasses[0]['class'] + ' at ' + this.classData.allClasses[0]['time'];
    }  
    else{
      this.classValue='';
    }



}



   ngOnInit() {
    //this.passedId = this.activatedRoute.snapshot.paramMap.get("myid");


  }

  loadData(){
    this.storage.get(this.key).then((val) => {
      console.log("Your class is", val )
      this.value = val;
    })
  }

  async btnClicked(){
    const modal = await this.modalCtrl.create({
        component: EnrolledClassPage
      });
    //this.router.navigate(['tab2']);
         return  await modal.present();

  }


}
