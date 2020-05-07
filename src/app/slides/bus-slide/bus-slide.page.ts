import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bus-slide',
  templateUrl: './bus-slide.page.html',
  styleUrls: ['./bus-slide.page.scss'],
})
export class BusSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-travel')
  }

  ngOnInit() {
  }

}
