import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
		this.router.navigate(['tabs']);
	}
}
