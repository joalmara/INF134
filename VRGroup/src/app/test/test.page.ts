import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

	constructor(public router: Router, public navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
  	this.router.navigate(['tabs']);
  	}

  	goDepressionTest()
  	{
  		this.router.navigate(['depression-test']);
  	}


}
