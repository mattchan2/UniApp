import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dinner-slide',
  templateUrl: './dinner-slide.page.html',
  styleUrls: ['./dinner-slide.page.scss'],
})
export class DinnerSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-food')
  }

  ngOnInit() {
  }

}
