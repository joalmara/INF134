import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ClassDataService {
  className: string = "Anxiety";
 	allClasses: ClassDataService[] = [];
	

  constructor() { }
}
