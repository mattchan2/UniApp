import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-school-slide',
  templateUrl: './school-slide.page.html',
  styleUrls: ['./school-slide.page.scss'],
})
export class SchoolSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-travel')
  }

  ngOnInit() {
  }

}
