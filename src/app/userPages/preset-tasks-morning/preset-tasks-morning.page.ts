import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preset-tasks-morning',
  templateUrl: './preset-tasks-morning.page.html',
  styleUrls: ['./preset-tasks-morning.page.scss'],
})
export class PresetTasksMorningPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  //local storage of preset tasks - move over to firebase soon
  presetTasksMorning: any[] = [{id: 1, title:"Put on Coat", pageLink:"/user-tabs/coat-slide"},
  {id: 2, title:"Tie Laces", pageLink:""},
  {id: 3, title:"Get the Bus", pageLink:""}];

  ngOnInit() {
  }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/tasks-menu')
  }

  taskLink(link){
    this.navCtrl.navigateForward(link)
  }

}
