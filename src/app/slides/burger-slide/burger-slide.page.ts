import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-burger-slide',
  templateUrl: './burger-slide.page.html',
  styleUrls: ['./burger-slide.page.scss'],
})
export class BurgerSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/food-dinner')
  }

  ngOnInit() {
  }

}
