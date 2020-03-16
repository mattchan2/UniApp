import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.page.html",
  styleUrls: ["./tasks.page.scss"]
})

export class TasksPage implements OnInit {

  constructor(private afs: AngularFirestore) {

  }
  
  //local storage of preset tasks - move over to firebase soon
  presetTasks: any[] = [{id: 1, title:"Put on Coat", pageLink:""},
  {id: 2, title:"Tie Laces", pageLink:""},
  {id: 3, title:"Get the Bus", pageLink:""},
  {id: 4, title:"Wash Clothes", pageLink:""},
  {id: 5, title:"Make Food", pageLink:""},
  {id: 6, title:"Walk to the Shops", pageLink:""}];

  ngOnInit() {}
}
