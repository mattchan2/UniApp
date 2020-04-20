import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../services/task.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  public taskMorning: Observable<Task>;
  public taskAfternoon: Observable<Task>;
  public taskEvening: Observable<Task>;
  public inputTaskName;
  public inputTaskDetails;
  public inputNewTaskTime;
  public inputOldTaskTime;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public alertController: AlertController) { }

  ngOnInit() {
    const taskId: string = this.route.snapshot.paramMap.get('id');

    this.taskMorning = this.firestoreService.getTaskDetailMorning(taskId).valueChanges();
    this.taskAfternoon = this.firestoreService.getTaskDetailAfternoon(taskId).valueChanges();
    this.taskEvening = this.firestoreService.getTaskDetailEvening(taskId).valueChanges();

  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["OK"]
    });

    await alert.present();
  }

  async updateTask() {
    const loading = await this.loadingCtrl.create();
  
    const taskName = this.inputTaskName;
    const taskDetails = this.inputTaskDetails;
    const newTaskTime = this.inputNewTaskTime;
    const oldTaskTime = this.inputOldTaskTime;
   
    const taskId: string = this.route.snapshot.paramMap.get('id');
  
    this.firestoreService
      .updateTask(taskId, taskName, taskDetails, oldTaskTime, newTaskTime)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.presentAlert("Success", "Task updated!");
            this.navCtrl.navigateBack('/tabs/carer-schedule');
          });
        },
        error => {
          console.error(error);
        }
      );
  
    return await loading.present();
    
  }

  async backLink(){
    this.navCtrl.navigateBack('/tabs/carer-schedule')
  }

  async deleteTask() {
    const taskId: string = this.route.snapshot.paramMap.get('id');
    const oldTaskTime = this.inputOldTaskTime;

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
            this.firestoreService.deleteTask(taskId, oldTaskTime).then(() => {
              this.navCtrl.navigateBack('/tabs/carer-schedule');
            });
          },
        },
      ],
    });
  
    await alert.present();
  }
}
