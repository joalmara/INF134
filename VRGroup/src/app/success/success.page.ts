import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  passedId = null;

  constructor(private router: Router, public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  goBack() {
		this.router.navigate(['tabs']);
  }

  ngOnInit() {
  	this.passedId = this.activatedRoute.snapshot.paramMap.get("myid");
  }

  enrollBtn(){

  }

}
