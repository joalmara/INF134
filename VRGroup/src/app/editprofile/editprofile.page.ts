import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  myphoto:any="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  name:any="Jane Smith"
  username:any="starklady82"
  bday:any="01/13/82"

  constructor(public router: Router, public navCtrl: NavController, private camera: Camera) {
    if (typeof this.router.getCurrentNavigation().extras.state === "undefined"){
      console.log('not edit profile');
    }
    else{
      this.myphoto = this.router.getCurrentNavigation().extras.state.photo;
    }
   }

  back() {
    console.log("back")
		this.router.navigate(['tabs/tab3'], { state: {photo: this.myphoto} } );
  }

  ngOnInit() {
  }

  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  changeName() {
    
  }

}
