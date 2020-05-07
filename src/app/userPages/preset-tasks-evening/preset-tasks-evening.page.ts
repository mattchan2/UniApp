import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preset-tasks-evening',
  templateUrl: './preset-tasks-evening.page.html',
  styleUrls: ['./preset-tasks-evening.page.scss'],
})
export class PresetTasksEveningPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  presetTasksEvening: any[] = [{id: 1, title:"Dinner", pageLink:"/user-tabs/dinner-slide", img:"../../../assets/img/dinner.png"},
  {id: 2, title:"Brush teeth", pageLink:"/user-tabs/teeth-slide", img:"../../../assets/img/brushteeth.png"},
  {id: 3, title:"Going to Sleep", pageLink:"/user-tabs/sleep-slide", img:"../../../assets/img/sleep.png"},
  {id: 3, title:"Shower", pageLink:"/user-tabs/shower-slide", img:"../../../assets/img/shower.png"},
  {id: 3, title:"Bath", pageLink:"/user-tabs/bath-slide", img:"../../../assets/img/bath.png"},
  {id: 3, title:"Getting dressed", pageLink:"/user-tabs/dressed-slide", img:"../../../assets/img/dressed.png"},
  {id: 3, title:"Wash hands", pageLink:"/user-tabs/hands-slide", img:"../../../assets/img/washHands.png"}];

  ngOnInit() {
  }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/tasks-menu')
  }

  taskLink(link){
    this.navCtrl.navigateForward(link)
  }

}
