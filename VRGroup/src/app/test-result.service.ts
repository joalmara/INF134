import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {
	data: string;

	setData(data) {
		this.data = data;
	}

	getData(){
		return this.data;
	}

  constructor() { }


}
