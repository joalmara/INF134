import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  goBack() {
		this.router.navigate(['tabs']);
  }

  ngOnInit() {
  }

}
