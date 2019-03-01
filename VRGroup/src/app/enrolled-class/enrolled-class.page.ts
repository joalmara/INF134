import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SuccessPage } from '../success/success.page';
import { ClassDataService } from '../class-data.service'

@Component({
  selector: 'app-enrolled-class',
  templateUrl: './enrolled-class.page.html',
  styleUrls: ['./enrolled-class.page.scss'],
})
export class EnrolledClassPage implements OnInit {

 className = "Preventing Anixety at 8:00am - 9:30am"; // HARDCODED CLASS NAME.

  key:string = "className";

  constructor(public classData: ClassDataService, public modalCtrl: ModalController, private storage: Storage, private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async btnClicked(){
    this.router.navigate(['tab2']);
  }

  cancelBtn()
  {
  	    this.classData.allClasses.pop();

  
}
    goBack() {
		//this.router.navigate(['tabs']);
		
		this.modalCtrl.dismiss();


  }
  


  // async enrollClass() {

  //   const modal = await this.modalCtrl.create({
  //       component: SuccessPage,
  //       componentProps: { value: this.className }
  //     });

  //    modal.onDidDismiss()
  //      .then((data) => 
  //      {
  //        const classes = data['data'];
  //        this.classData.allClasses.push(classes);
  //        ;

  //       // console.log(data['data']);
  //      });
     
  //    return  await modal.present();

    // this.router.navigate(['/success', this.className]);

    // this.storage.set(this.key, this.className);

    //this.navCtrl.navigateBack(['/tab2', this.className]);

  


}
