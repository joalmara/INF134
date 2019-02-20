import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depression-test',
  templateUrl: './depression-test.page.html',
  styleUrls: ['./depression-test.page.scss'],
})
export class DepressionTestPage implements OnInit {
	selectedOption: string = '';

	options: Array <any> = [];



	constructor(public router: Router, public navCtrl: NavController) {

		this.options = ['not at all',
	'several days', 'more than half the days', 'nearly everyday'
	];


	}

  ngOnInit() {
  }
    goBack() {
  	this.router.navigate(['test']);
  	}

  	radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;
  		console.log(this.selectedOption)
  	}

}
