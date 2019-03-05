import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController} from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClassDataService } from '../class-data.service'

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.page.html',
  styleUrls: ['./askquestion.page.scss'],
})
export class AskquestionPage implements OnInit {

  constructor(public modalController: ModalController, private router: Router, public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  goBack() {
		//this.router.navigate(['tabs']);
		let data = {
			class: 'Preventing Anxiety',
			time: '8:00am - 9:30am',
			days: ['Tue','Thu']
		};
		this.modalController.dismiss(data);


  }

}
