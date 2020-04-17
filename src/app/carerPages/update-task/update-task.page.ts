import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../services/task.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';

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
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
    const taskId: string = this.route.snapshot.paramMap.get('id');

    this.taskMorning = this.firestoreService.getTaskDetailMorning(taskId).valueChanges();
    this.taskAfternoon = this.firestoreService.getTaskDetailAfternoon(taskId).valueChanges();
    this.taskEvening = this.firestoreService.getTaskDetailEvening(taskId).valueChanges();

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
            this.router.navigateByUrl('/user-tabs/user-schedule');
          });
        },
        error => {
          console.error(error);
        }
      );
  
    return await loading.present();
    
  }
}
