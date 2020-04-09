import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase';
import { FirebaseFirestore } from '@angular/fire';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.page.html',
  styleUrls: ['./user-schedule.page.scss'],
})
export class UserSchedulePage implements OnInit {

  userMorningTasks
  userAfternoonTasks
  userEveningTasks
  hideDetails: boolean
  currDate = new Date()
  today = new Date();
  date = this.today.getDate() +'/'+ (this.today.getMonth()+1) +'/'+ this.today.getFullYear();
  time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
  dateTime: any

  constructor(private afs: AngularFirestore, private user: UserService) {
    const tasks = afs.doc(`users/${user.getUID()}`)
    this.userMorningTasks = tasks.valueChanges()

    this.userAfternoonTasks = tasks.valueChanges()

    this.userEveningTasks = tasks.valueChanges()

    this.dateTime = [{date: this.date, time: this.time}]
  }

  showDetails(task) {
    if (task.hideDetails == true) {
      task.hideDetails = false
    }
    else {
      task.hideDetails = true
    }
  }

  deleteTask(task){
   
    console.log(task)
    
    this.afs.doc(`users/${this.user.getUID}/morningTasks/${task}`).delete()
  }

  //deleteTask(){
  //  this.afs.doc(`users/${this.user.getUID()}/`).delete()
  //}

  ngOnInit() {
    this.hideDetails = false
  }

}
