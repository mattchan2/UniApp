import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {

  Settings: any[] = [{name: "Account", link: "/user-tabs/account"},
  {name: "About", link: "/user-tabs/about"},
  {name: "Privacy", link: "/user-tabs/privacy"},
  {name: "Log Out", link: "LogOut"}
]


  constructor(
    public navCtrl: NavController,
    public user: UserService) { }

  ngOnInit() {
  }

  async settingsLink(link){
    if(link = "logOut"){
      try {
        this.user.afAuth.auth.signOut();
        this.navCtrl.navigateBack('login');
      } catch (err) {
        console.dir(err);
      }
    }
    else{
      this.navCtrl.navigateForward(link);
    }
  }

}
