import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-food-dinner',
  templateUrl: './food-dinner.page.html',
  styleUrls: ['./food-dinner.page.scss'],
})
export class FoodDinnerPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  presetTasksFood: any[] = [{id: 1, title:"Beef Burgers", pageLink:"/user-tabs/burger-slide", img:"../../../assets/img/burger.png"},
  {id: 2, title:"Toad in the Hole", pageLink:"/user-tabs/toad-slide", img:"../../../assets/img/toad.png"},
  {id: 3, title:"Quiche", pageLink:"/user-tabs/quiche-slide", img:"../../../assets/img/quiche.png"}];

  ngOnInit() {
  }

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-food')
  }

  taskLink(link){
    this.navCtrl.navigateForward(link)
  }

}
