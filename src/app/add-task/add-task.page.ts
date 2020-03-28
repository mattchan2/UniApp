import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserService } from "../user.service";
import { firestore } from "firebase/app";
import { AlertController } from "@ionic/angular";
import { PresetTasksMorningPage } from "../preset-tasks-morning/preset-tasks-morning.page";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.page.html",
  styleUrls: ["./add-task.page.scss"]
})
export class AddTaskPage implements OnInit {
  inputTask: string;
  taskTime: string;
  inputTaskDetails: string;
  inputPresetTask: string;
  selectedTaskType: string;
  customHide: boolean;
  normalHide: boolean;

  presetTasks;

  constructor(
    public afs: AngularFirestore,
    public user: UserService,
    public alertController: AlertController
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

  async segmentChanged(){
    if(this.selectedTaskType == "task"){
      this.normalHide = true
      this.customHide = false
    }
    if(this.selectedTaskType == "customTask"){
      this.customHide = true
      this.normalHide = false
    }
  }

  createTask() {
    const task = this.inputTask;
    const details = this.inputTaskDetails;
    const pTask = this.inputPresetTask;

    // this.afs.doc(`users/${this.user.getUID()}`).update({
    //   morningTasks: firestore.FieldValue.arrayUnion({
    //     pTask
    //   })
    // });

    if (this.taskTime == "morning") {
      this.afs.doc(`users/${this.user.getUID()}`).update({
        morningTasks: firestore.FieldValue.arrayUnion({
          task,
          details,
          pTask
        })
      });
      this.presentAlert("Success", "Task added!");
    } else if (this.taskTime == "afternoon") {
      this.afs.doc(`users/${this.user.getUID()}`).update({
        afternoonTasks: firestore.FieldValue.arrayUnion({
          task,
          details,
          pTask
        })
      });
      this.presentAlert("Success", "Task added!");
    } else if (this.taskTime == "evening") {
      this.afs.doc(`users/${this.user.getUID()}`).update({
        eveningTasks: firestore.FieldValue.arrayUnion({
          task,
          details,
          pTask
        })
      });
      this.presentAlert("Success", "Task added!");
    } else {
      this.presentAlert("Error", "Please Select a Time of Day");
    }

    this.inputTask = "";
    this.taskTime = "";
    this.inputTaskDetails = "";
    this.inputPresetTask = "";
  }
}
