import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { firestore } from 'firebase';
import { FirebaseFirestore } from '@angular/fire';
import { FirestoreService } from '../../services/data/firestore.service';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../services/task.interface';
import { Observable } from 'rxjs';
import { DayService, WeekService, MonthService, AgendaService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { L10n, Internationalization } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
      'schedule': {
          'saveButton': 'Add',
          'cancelButton': 'Close',
          'deleteButton': 'Remove',
          'newEvent': 'Add Task',
      },
  }
});

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.page.html',
  styleUrls: ['./user-schedule.page.scss'],
  providers: [DayService, WeekService, MonthService, AgendaService],
})
export class UserSchedulePage implements OnInit {

  public task: Observable<Task>;

  public morningTaskList;
  public afternoonTaskList;
  public eveningTaskList;

  items: any;
  today = Date.now();
  public test;
  public data;
  public currentView = "Agenda";
  public selectedDate = new Date(this.today);
  public allowVirtualScroll: boolean = true;
  public readonly: boolean = true;

  private instance: Internationalization = new Internationalization();
  getTimeString(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  };


  constructor(
    private afs: AngularFirestore,
    private user: UserService,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
    ) {
      this.data = afs.collection(`users/${this.user.getUID()}/tasks`);
    this.items = afs.collection(`users/${this.user.getUID()}/tasks`).valueChanges().subscribe(data => {
      this.items = data;
      this.test = data;
      let schObj = (document.querySelector('.e-schedule') as any).ej2_instances[0];
      let length = this.test.length;
      for (let i = 0; i < length; i++) {
        let endTime = this.test[i].EndTime.seconds.toString() + "000";
        let srtTime = this.test[i].StartTime.seconds.toString() + "000";
        this.test[i].StartTime = new Date(parseInt(srtTime));
        this.test[i].EndTime = new Date(parseInt(endTime));
      }
      schObj.eventSettings.dataSource = this.test;
    })
  }

  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: 'Id',
      subject: { name: 'Subject', title: 'Task Name', validation: { required: true } },
      location: { name: 'Location', title: 'Location', validation: { required: false } },
      description: { name: 'Description', title: 'Description', validation: { required: false } },
      startTime: { name: 'StartTime', title: 'Start Duration', validation: { required: true } },
      endTime: { name: 'EndTime', title: 'End Duration', validation: { required: true } }
    }
  };

  async logOut() {
    try {
      this.user.afAuth.auth.signOut();
      this.navCtrl.navigateBack('login');
    } catch (err) {
      console.dir(err)
    }
  }

  // showDetails(task) {
  //   if (task.hideDetails == true) {
  //     task.hideDetails = false;
  //   }
  //   else {
  //     task.hideDetails = true;
  //   }
  // }

  // async deleteTask(taskId, taskTime) {
  //   //const taskId: string = this.route.snapshot.paramMap.get('id');
  //   console.log("Item deleted: ", taskId)
  //   const alert = await this.alertController.create({
  //     message: 'Are you sure you want to delete the task?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: blah => {
  //           console.log('Confirm Cancel: blah');
  //         },
  //       },
  //       {
  //         text: 'Okay',
  //         handler: () => {
  //           this.firestoreService.deleteTask(taskId, taskTime).then(() => {

  //           });
  //         },
  //       },
  //     ],
  //   });
  
  //   await alert.present();
  // }

  ngOnInit() {
    // this.hideDetails = false;

    // //const taskId: string = this.route.snapshot.paramMap.get('id');
    // //this.task = this.firestoreService.getTaskDetail(taskId).valueChanges();

    // this.morningTaskList = this.firestoreService.getTaskList("morning").valueChanges();
    // this.afternoonTaskList = this.firestoreService.getTaskList("afternoon").valueChanges();
    // this.eveningTaskList = this.firestoreService.getTaskList("evening").valueChanges();
  }

}
