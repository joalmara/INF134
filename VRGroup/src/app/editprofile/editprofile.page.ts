import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(public router: Router, public navCtrl: NavController) { }

  back() {
    this.router.navigate(['tabs/tab3']);
  }

  ngOnInit() {
  }

}
