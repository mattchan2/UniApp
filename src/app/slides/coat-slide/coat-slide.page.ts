import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coat-slide',
  templateUrl: './coat-slide.page.html',
  styleUrls: ['./coat-slide.page.scss'],
})
export class CoatSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-morning')
  }

}
