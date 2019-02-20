import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-depression-test',
  templateUrl: './depression-test.page.html',
  styleUrls: ['./depression-test.page.scss'],
})



export class DepressionTestPage implements OnInit {
	selectedOption: any;

	options: Array <any> = [];

	results: any;

	Q1: any;
	Q2: any;
	Q3: any;

	Q4: any;
	Q5: any;
	Q6: any;

	Q7: any;
	Q8: any;
	Q9: any;

	Q10: any;

	interpretationOfScore: any;

	

	constructor( public router: Router, private navCtrl: NavController) {

		this.options = ['not at all',
	'several days', 'more than half the days', 'nearly everyday'
	];


	}

  ngOnInit() {
  }
    goBack() {
  	this.router.navigate(['test']);
  	}

  	Q1radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q1 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q1 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q1 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q1 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q1 = 3;
  		}
  		console.log(this.Q1)

  	}

  	Q2radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q2 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q2 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q2 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q2 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q2 = 3;
  		}
  		console.log(this.Q2)
  	}

	Q3radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q3 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q3 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q3 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q3 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q3 = 3;
  		}
  		console.log(this.Q3)
  	}

  		Q4radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q4 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q4 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q4 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q4 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q4 = 3;
  		}
  		console.log(this.Q4)
  	}

  	Q5radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q5 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q5 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q5 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q5 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q5 = 3;
  		}
  		console.log(this.Q5)
  	}

  	Q6radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q6 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q6 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q6 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q6 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q6 = 3;
  		}
  		console.log(this.Q6)
  	}

  	Q7radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q7 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q7 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q7 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q7 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q7 = 3;
  		}
  		console.log(this.Q7)
  	}

  	Q8radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q8 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q8 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q8 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q8 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q8 = 3;
  		}
  		console.log(this.Q8)
  	}

  	Q9radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q9 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q9 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q9 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q9 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q9 = 3;
  		}
  		console.log(this.Q9)
  	}

   	Q10radioChangeHandler (event: any) {
  		this.selectedOption = event.target.value;

  		this.Q10 = 0;

  		if(this.selectedOption == "not at all")
  		{
  			this.selectedOption = 0;
  			 this.Q10 = 0;
  		}
  		if (this.selectedOption == "several days")
  		{
  			this.selectedOption = 1;
  			this.Q10 = 1;
  		}
  		if (this.selectedOption == "more than half the days")
  		{
  			this.selectedOption = 2;
  			this.Q10 = 2;
  		}
  		 if (this.selectedOption == "nearly everyday")
  		{
  			this.selectedOption = 3;
  			this.Q10 = 3;
  		}
  		console.log(this.Q10)
  	}

  	submittedBtn()
  	{
  		this.results = this.Q1 + this.Q2 + this.Q3 + this.Q4 + this.Q5 + this.Q6 +  this.Q7 + this.Q8 + this.Q9 + this.Q10;
  		console.log(this.results);

  		if (this.results >= 0 && this.results <= 4)
  		{
  			this.interpretationOfScore = "Minimal depression";
  		}
  		else if (this.results >= 5 && this.results <= 9)
  		{
  			this.interpretationOfScore = "Mild depression";
  		}
   		else if (this.results >= 10 && this.results <= 14)
  		{
  			this.interpretationOfScore = "Moderately severe depression";
  		}
  		else if (this.results >= 20 && this.results <= 30)
  		{
  			this.interpretationOfScore = "Severe depression";
  		}
  		console.log(this.interpretationOfScore);

  		var value = this.interpretationOfScore;
  		this.router.navigate(['/results', this.interpretationOfScore]);


  		// this.router.navigate(['results']);
  	}

}
