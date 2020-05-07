import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preset-tasks-travel',
  templateUrl: './preset-tasks-travel.page.html',
  styleUrls: ['./preset-tasks-travel.page.scss'],
})
export class PresetTasksTravelPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  //local storage of preset tasks - move over to firebase soon
  presetTasksTravel: any[] = [{id: 1, title:"Walking to the Shops", pageLink:"/user-tabs/shops-slide", img:"../../../assets/img/shops.png"},
  {id: 2, title:"Going to Work", pageLink:"/user-tabs/work-slide", img:"../../../assets/img/work.png"},
  {id: 3, title:"Getting the Bus", pageLink:"/user-tabs/bus-slide", img:"../../../assets/img/bus.png"},
  {id: 2, title:"Going to School", pageLink:"/user-tabs/school-slide", img:"../../../assets/img/school.png"},];

  ngOnInit() {
  }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/tasks-menu')
  }

  taskLink(link){
    this.navCtrl.navigateForward(link)
  }
}

