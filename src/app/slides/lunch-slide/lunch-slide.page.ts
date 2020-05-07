import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lunch-slide',
  templateUrl: './lunch-slide.page.html',
  styleUrls: ['./lunch-slide.page.scss'],
})
export class LunchSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-food')
  }
  ngOnInit() {
  }

}
