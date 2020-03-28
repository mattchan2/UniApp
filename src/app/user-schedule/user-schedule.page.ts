import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.page.html',
  styleUrls: ['./user-schedule.page.scss'],
})
export class UserSchedulePage implements OnInit {

  userMorningTasks
  userAfternoonTasks
  userEveningTasks

  constructor(private afs: AngularFirestore, private user: UserService) { 
   const tasks = afs.doc(`users/${user.getUID()}`)
   this.userMorningTasks = tasks.valueChanges()

   this.userAfternoonTasks = tasks.valueChanges()

   this.userEveningTasks = tasks.valueChanges()
  }

  //deleteTask(){
  //  this.afs.doc(`users/${this.user.getUID()}/`).delete()
  //}

  ngOnInit() {
  }

}
