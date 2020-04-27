import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { FirestoreService } from '../../services/data/firestore.service';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { Task } from '../../services/task.interface';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { L10n } from '@syncfusion/ej2-base';

import { DayService, WeekService, MonthService, AgendaService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
    'schedule': {
      'saveButton': 'Add',
      'cancelButton': 'Close',
      'deleteButton': 'Remove',
      'newEvent': 'Add Event',
    },
  }
});

@Component({
  selector: 'app-carer-schedule',
  templateUrl: './carer-schedule.page.html',
  styleUrls: ['./carer-schedule.page.scss'],
  providers: [DayService, WeekService, MonthService, AgendaService],

})
export class CarerSchedulePage implements OnInit {

  public task: Observable<Task>;

  // public morningTaskList;
  // public afternoonTaskList;
  // public eveningTaskList;

  // userMorningTasks
  // userAfternoonTasks
  // userEveningTasks

  hideDetails: boolean
  hideEdit: boolean
  items: any;
  today = Date.now();
  public test;
  public data;
  public currentView = "Agenda";
  public selectedDate = new Date(this.today);
  public allowVirtualScroll: boolean = true;

  constructor(
    private afs: AngularFirestore,
    private user: UserService,
    private firestoreService: FirestoreService,
    private alertController: AlertController,
    public loadingCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public navCtrl: NavController,
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

  public onActionBegin(args: any): void {
    if (args.requestType == "eventChange") {
      this.afs.doc(`users/${this.user.getUID()}/tasks/${args.changedRecords[0].DocumentId}`).update({ Subject: args.changedRecords[0].Subject });
      this.afs.doc(`users/${this.user.getUID()}/tasks/${args.changedRecords[0].DocumentId}`).update({ EndTime: args.changedRecords[0].EndTime });
      this.afs.doc(`users/${this.user.getUID()}/tasks/${args.changedRecords[0].DocumentId}`).update({ StartTime: args.changedRecords[0].StartTime });
      // this.data.doc(args.changedRecords[0].DocumentId).update({ Location: args.changedRecords[0].Location });
      // this.data.doc(args.changedRecords[0].DocumentId).update({ IsAllDay: args.changedRecords[0].IsAllDay });
      // this.data.doc(args.changedRecords[0].DocumentId).update({ RecurrenceRule: args.changedRecords[0].RecurrenceRule });
    } else if (args.requestType == "eventCreate") {
      let guid = (this.GuidFun() + this.GuidFun() + "-" + this.GuidFun() + "-4" + this.GuidFun().substr(0, 3) + "-" + this.GuidFun() + "-" + this.GuidFun() + this.GuidFun() + this.GuidFun()).toLowerCase();
      args.data[0].DocumentId = guid.toString();
      this.afs.doc(`users/${this.user.getUID()}/tasks/${guid}`).set(args.data[0])
    } else if (args.requestType == "eventRemove") {
      console.log("Task deleted:", args.deletedRecords[0].DocumentId);
      this.afs.doc(`users/${this.user.getUID()}/tasks/${args.deletedRecords[0].DocumentId}`).delete();
    }
  }

  public GuidFun() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  ngOnInit() {
    this.hideDetails = false;
    this.hideEdit = false;
  }

}
