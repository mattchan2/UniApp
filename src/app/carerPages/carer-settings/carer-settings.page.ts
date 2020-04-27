import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carer-settings',
  templateUrl: './carer-settings.page.html',
  styleUrls: ['./carer-settings.page.scss'],
})
export class CarerSettingsPage implements OnInit {

  Settings: any[] = [{name: "Account", link: "/carer-tabs/account"},
  {name: "About", link: "/carer-tabs/about"},
  {name: "User Controls", link: "/carer-tabs/user-controls"},
  {name: "Log Out", link: "LogOut"}
]

  constructor(
    public navCtrl: NavController,
    public user: UserService
  ) { }

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
