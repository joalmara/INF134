import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController} from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClassDataService } from '../class-data.service'

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  passedId = null;

  constructor( public classData: ClassDataService, public modalController: ModalController, private router: Router, public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  goBack() {
		//this.router.navigate(['tabs']);
		let data = {
			class: 'Preventing Anxiety',
			time: '8:00am - 9:30am',
			day: 'Tuesday/Thursday'
		};
		this.modalController.dismiss(data);


  }

  ngOnInit() {
  	//this.passedId = this.activatedRoute.snapshot.paramMap.get("myid");
  }

  enrollBtn(){

  }

}
