import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router, public navCtrl: NavController) {}

	btnClicked(){
		console.log(" btn is clicked");
		this.router.navigate(['editprofile']);
	}

}
