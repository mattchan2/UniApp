import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hands-slide',
  templateUrl: './hands-slide.page.html',
  styleUrls: ['./hands-slide.page.scss'],
})
export class HandsSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-evening')
  }

  ngOnInit() {
  }

}
