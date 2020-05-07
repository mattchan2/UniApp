import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preset-tasks-afternoon',
  templateUrl: './preset-tasks-afternoon.page.html',
  styleUrls: ['./preset-tasks-afternoon.page.scss'],
})
export class PresetTasksAfternoonPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  presetTasksAfternoon: any[] = [{id: 1, title:"Lunch", pageLink:"/user-tabs/lunch-slide", img:"../../../assets/img/lunch.png"},
  {id: 2, title:"Homework", pageLink:"/user-tabs/homework-slide", img:"../../../assets/img/homework.png"},
  {id: 3, title:"Reading", pageLink:"/user-tabs/reading-slide", img:"../../../assets/img/read.png"},
  {id: 3, title:"Writing", pageLink:"/user-tabs/writing-slide", img:"../../../assets/img/write.png"}];

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/tasks-menu')
  }

  taskLink(link){
    this.navCtrl.navigateForward(link)
  }

}
