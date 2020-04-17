import { Component, OnInit } from "@angular/core";
import { AngularFirestore, DocumentSnapshot } from "@angular/fire/firestore";
import { UserService } from "../../services/user.service";
import { firestore } from "firebase/app";
import { AlertController, LoadingController } from "@ionic/angular";
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.page.html",
  styleUrls: ["./add-task.page.scss"]
})
export class AddTaskPage implements OnInit {
  inputTaskName: string;
  inputTaskTime: string;
  inputTaskDetails: string;
  inputPresetTask: string;

  selectedTaskType: string;
  customHide: boolean;
  normalHide: boolean;

  presetTasks;

  constructor(
    public afs: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public firestoreService: FirestoreService,
    public loadingCtrl: LoadingController,
  ) {
    const task = afs.doc(`presetTasks/IMhK5CDr72B4C6MnFaQR`);
    this.presetTasks = task.valueChanges();

  }

  ngOnInit() {
    this.normalHide = true
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["OK"]
    });

    await alert.present();
  }

  async segmentChanged() {
    if (this.selectedTaskType == "task") {
      this.normalHide = true
      this.customHide = false
    }
    if (this.selectedTaskType == "customTask") {
      this.customHide = true
      this.normalHide = false
    }
  }

  async createTaskNew() {
    const loading = await this.loadingCtrl.create();

    const taskName = this.inputTaskName;
    const taskDetails = this.inputTaskDetails;
    const taskTime = this.inputTaskTime;
  
    this.firestoreService
      .createTask(taskName, taskDetails, taskTime)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.presentAlert("Success", "Task added!");
            this.inputTaskName = "";
            this.inputTaskTime = "";
            this.inputTaskDetails = "";
          });
        },
        error => {
          console.error(error);
        }
      );
  
    return await loading.present();
    
  }

  // createTask() {
  //   //const task = this.inputTask;
  //   //const details = this.inputTaskDetails;
  //   //const pTask = this.inputPresetTask;
  //   //const pLink = this.inputTaskLink;
 
  //   //console.log(pLink);

  //   // this.afs.doc(`users/${this.user.getUID()}`).update({
  //   //   morningTasks: firestore.FieldValue.arrayUnion({
  //   //     pTask
  //   //   })
  //   // });

  //   if (this.selectedTaskType == "task") {
  //     if (this.taskTime == "morning") {
  //       this.afs.doc(`users/${this.user.getUID()}`).update({
  //         morningTasks: firestore.FieldValue.arrayUnion({
  //           task,
  //           details,
  //         })
  //       });
  //       this.presentAlert("Success", "Task added!");
  //     } else if (this.taskTime == "afternoon") {
  //       this.afs.doc(`users/${this.user.getUID()}`).update({
  //         afternoonTasks: firestore.FieldValue.arrayUnion({
  //           task,
  //           details,
  //         })
  //       });
  //       this.presentAlert("Success", "Task added!");
  //     } else if (this.taskTime == "evening") {
  //       this.afs.doc(`users/${this.user.getUID()}`).update({
  //         eveningTasks: firestore.FieldValue.arrayUnion({
  //           task,
  //           details,
  //         })
  //       });
  //       this.presentAlert("Success", "Task added!");
  //     } else {
  //       this.presentAlert("Error", "Please Select a Time of Day");
  //     }
  //   }

  //   if (this.selectedTaskType == "customTask") {
  //     if (this.taskTime == "morning") {
  //       this.afs.doc(`users/${this.user.getUID()}`).update({
  //         morningTasks: firestore.FieldValue.arrayUnion({
  //           pTask,
  //           details,
  //           pLink
  //         })
  //       });
  //       this.presentAlert("Success", "Task added!");
  //     } else if (this.taskTime == "afternoon") {
  //       this.afs.doc(`users/${this.user.getUID()}`).update({
  //         afternoonTasks: firestore.FieldValue.arrayUnion({
  //           pTask,
  //           details,
            
  //         })
  //       });
  //       this.presentAlert("Success", "Task added!");
  //     } else if (this.taskTime == "evening") {
  //       this.afs.doc(`users/${this.user.getUID()}`).update({
  //         eveningTasks: firestore.FieldValue.arrayUnion({
  //           pTask,
  //           details,
            
  //         })
  //       });
  //       this.presentAlert("Success", "Task added!");
  //     } else {
  //       this.presentAlert("Error", "Please Select a Time of Day");
  //     }

  //   }

  //   this.inputTask = "";
  //   this.taskTime = "";
  //   this.inputTaskDetails = "";
  //   this.inputPresetTask = "";
  // }
}
