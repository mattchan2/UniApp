import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-work-slide',
  templateUrl: './work-slide.page.html',
  styleUrls: ['./work-slide.page.scss'],
})
export class WorkSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-travel')
  }

  ngOnInit() {
  }

}
