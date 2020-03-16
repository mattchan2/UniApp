import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-menu',
  templateUrl: './tasks-menu.page.html',
  styleUrls: ['./tasks-menu.page.scss'],
})
export class TasksMenuPage implements OnInit {

  constructor() { }

  //local storage for preset task menu items
  taskGenre: any[] = [{id:1, genre:"Morning Activities" ,genreLink:"/preset-tasks-morning"},
  {id:2, genre:"Evening Activities" ,genreLink:""},
  {id:3, genre:"Work Activities" ,genreLink:""},
  {id:4, genre:"Food Preparation" ,genreLink:""},
  {id:5, genre:"Travel Activities" ,genreLink:""}]

  ngOnInit() {
  }

}
