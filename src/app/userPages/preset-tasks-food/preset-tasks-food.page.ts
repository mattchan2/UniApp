import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preset-tasks-food',
  templateUrl: './preset-tasks-food.page.html',
  styleUrls: ['./preset-tasks-food.page.scss'],
})
export class PresetTasksFoodPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  presetTasksFood: any[] = [{id: 1, title:"Breakfast", pageLink:"/user-tabs/breakfast-slide", img:"../../../assets/img/breakfast.png"},
  {id: 2, title:"Lunch", pageLink:"/user-tabs/lunch-slide", img:"../../../assets/img/lunch.png"},
  {id: 3, title:"Dinner", pageLink:"/user-tabs/food-dinner", img:"../../../assets/img/dinner.png"},
  {id: 4, title:"Snacks", pageLink:"/user-tabs/snack-slide", img:"../../../assets/img/snack.png"}];

  ngOnInit() {
  }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/tasks-menu')
  }

  taskLink(link){
    this.navCtrl.navigateForward(link)
  }

}
