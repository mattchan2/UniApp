import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-snack-slide',
  templateUrl: './snack-slide.page.html',
  styleUrls: ['./snack-slide.page.scss'],
})
export class SnackSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-food')
  }

  ngOnInit() {
  }

}
