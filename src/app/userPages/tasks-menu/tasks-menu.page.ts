import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tasks-menu',
  templateUrl: './tasks-menu.page.html',
  styleUrls: ['./tasks-menu.page.scss'],
})
export class TasksMenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  //local storage for preset task menu items
  taskGenre: any[] = [{id:1, genre:"Morning Activities" ,genreLink:"/user-tabs/preset-tasks-morning", img:"../../assets/img/morning.png" },
  {id:2, genre:"Afternoon Activities" ,genreLink:"", img:"../../assets/img/afternoon.png"},
  {id:3, genre:"Evening Activities" ,genreLink:"", img:"../../assets/img/night.png"},
  {id:4, genre:"Food Preparation" ,genreLink:"", img:"../../assets/img/food.png"},
  {id:5, genre:"Travel Activities" ,genreLink:"", img:"../../assets/img/travel.png"}]

  async menuLink(link){
    this.navCtrl.navigateForward(link);
  }

  ngOnInit() {
    
  }

}
