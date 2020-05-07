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
  presetTasksMorning: any[] = [
  {id: 7, title:"Breakfast", pageLink:"/user-tabs/breakfast-slide", img:"../../../assets/img/breakfast.png"},
  {id: 2, title:"Tie Laces", pageLink:"/user-tabs/laces-slide", img:"../../../assets/img/tielaces.png"},
  {id: 3, title:"Clean Teeth", pageLink:"/user-tabs/teeth-slide", img:"../../../assets/img/brushteeth.png"},
  {id: 4, title:"Get Dressed", pageLink:"/user-tabs/dressed-slide", img:"../../../assets/img/dressed.png"},
  {id: 1, title:"Putting on your Coat", pageLink:"/user-tabs/coat-slide", img:"../../../assets/img/coat.png"},
  {id: 5, title:"Shower", pageLink:"/user-tabs/shower-slide", img:"../../../assets/img/shower.png"},
  {id: 6, title:"Bath", pageLink:"/user-tabs/bath-slide", img:"../../../assets/img/bath.png"},];

  ngOnInit() {
  }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/tasks-menu')
  }

  taskLink(link){
    this.navCtrl.navigateForward(link)
  }

}
