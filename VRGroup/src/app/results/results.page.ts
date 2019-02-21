import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  passedId = null;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  	this.passedId = this.activatedRoute.snapshot.paramMap.get("myid");
  }


}
