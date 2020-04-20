import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  options: NativeTransitionOptions = {
    direction: 'left',
    duration: 500,
  }

  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router,
    private nativePageTransitions: NativePageTransitions,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  async presentAlert(title:string, content: string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async register(){
    const { username, password, cpassword } = this
    if(password != cpassword){
      this.presentAlert("Error!", "Passwords don't match!")
      return console.error("Passwords do not match")
    }
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)
      
      this.afStore.doc(`users/${res.user.uid}`).set({
        username
      })

      this.user.setUser({
        username,
        uid: res.user.uid
      })

      this.presentAlert('Success', 'You are now registered. Please login!')
      this.router.navigate(['/login'])

    } catch(error){
      console.dir(error)
    }
  }

  async loginLink(){
    //this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateBack('login');
  }
  
}
