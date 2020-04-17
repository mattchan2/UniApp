import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""
  path: string = ""
  selectedPath: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public user:UserService,
    public router:Router
    ) { }

  ngOnInit() {
  }

  async login(){
    const { username, password } = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password) //this isn't the best way of handling usernames
      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
        })
        this.router.navigate([this.path])
      }
    } catch(err){
      console.dir(err)
      if(err.code == "auth/user-not-found"){
        console.log("User not found")
      }
    }
  }

  async segmentChanged(){
    if(this.selectedPath == "user"){
      this.path = '/user-tabs'
    }
    else if(this.selectedPath == "carer"){
      this.path = "/tabs"
    }
  }

  async userPath(){
    this.path = '/user-tabs'
  }

  async carerPath(){
    this.path = '/tabs'
  } 
}
