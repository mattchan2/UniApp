import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-breakfast-slide',
  templateUrl: './breakfast-slide.page.html',
  styleUrls: ['./breakfast-slide.page.scss'],
})
export class BreakfastSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-food')
  }

  ngOnInit() {
  }

}
