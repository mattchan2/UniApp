import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toad-slide',
  templateUrl: './toad-slide.page.html',
  styleUrls: ['./toad-slide.page.scss'],
})
export class ToadSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/food-dinner')
  }

  ngOnInit() {
  }

}
