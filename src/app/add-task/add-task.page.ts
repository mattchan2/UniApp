import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  inputTask: string
  taskTime: string

  constructor(
    public afStore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(title:string, content: string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  createTask(){
    const task = this.inputTask

    if(this.taskTime == "morning"){
      this.afStore.doc(`users/${this.user.getUID()}`).update({
        morningTasks: firestore.FieldValue.arrayUnion({
          task
        })
      })
      this.presentAlert('Success', 'Task added!')
    }
    else if(this.taskTime == "afternoon"){
      this.afStore.doc(`users/${this.user.getUID()}`).update({
        afternoonTasks: firestore.FieldValue.arrayUnion({
          task
        })
      })  
      this.presentAlert('Success', 'Task added!')
    }
    else if(this.taskTime == "evening"){
      this.afStore.doc(`users/${this.user.getUID()}`).update({
        eveningTasks: firestore.FieldValue.arrayUnion({
          task
        })
      })
      this.presentAlert('Success', 'Task added!')
    }
    else{
      this.presentAlert('Error', 'Please Select a Time of Day')
    }

    this.inputTask = ""
    this.taskTime = ""
  }

}
