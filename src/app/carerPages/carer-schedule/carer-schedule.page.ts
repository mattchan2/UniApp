import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { firestore } from 'firebase';
import { FirebaseFirestore } from '@angular/fire';
import { FirestoreService } from '../../services/data/firestore.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../services/task.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carer-schedule',
  templateUrl: './carer-schedule.page.html',
  styleUrls: ['./carer-schedule.page.scss'],
})
export class CarerSchedulePage implements OnInit {

  public task: Observable<Task>;

  public morningTaskList;
  public afternoonTaskList;
  public eveningTaskList;

  userMorningTasks
  userAfternoonTasks
  userEveningTasks
  hideDetails: boolean

  today = Date.now();

  constructor(
    private afs: AngularFirestore,
    private user: UserService,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    public loadingCtrl: LoadingController
    ) {

  }

  showDetails(task) {
    if (task.hideDetails == true) {
      task.hideDetails = false
    }
    else {
      task.hideDetails = true
    }
  }

  async deleteTask(taskId, taskTime) {
    //const taskId: string = this.route.snapshot.paramMap.get('id');
    console.log("Item deleted: ", taskId)
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete the task?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.firestoreService.deleteTask(taskId, taskTime).then(() => {

            });
          },
        },
      ],
    });
  
    await alert.present();
  }

  ngOnInit() {
    this.hideDetails = false

    //const taskId: string = this.route.snapshot.paramMap.get('id');
    //this.task = this.firestoreService.getTaskDetail(taskId).valueChanges();

    this.morningTaskList = this.firestoreService.getTaskList("morning").valueChanges();
    this.afternoonTaskList = this.firestoreService.getTaskList("afternoon").valueChanges();
    this.eveningTaskList = this.firestoreService.getTaskList("evening").valueChanges();
  }

}
