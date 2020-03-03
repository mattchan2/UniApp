import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  task: string

  constructor(
    public afStore: AngularFirestore,
    public user: UserService) { }

  ngOnInit() {
  }

  createTask(){
    const task = this.task

    this.afStore.doc(`users/${this.user.getUID()}`).update({
      tasks: firestore.FieldValue.arrayUnion({
        task
      })
    })
  }

}
