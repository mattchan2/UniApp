import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Task } from '../task.interface';
import { UserService } from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public firestore: AngularFirestore,
    public user: UserService,
    ) { }

  createTask(
    taskName: string,
    taskDetails: string,
    taskTime: string

  ): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`users/${this.user.getUID()}/${taskTime}/${id}`).set({
      id,
      taskName,
      taskDetails,
      taskTime  
    });
  }

  getTaskList(
    taskTime: string
  ): AngularFirestoreCollection<Task> {
    return this.firestore.collection(`users/${this.user.getUID()}/${taskTime}`);
  }

  getTaskDetailMorning(
    taskId: string,
    ): AngularFirestoreDocument<Task> {
    return this.firestore.collection(`users/${this.user.getUID()}/morning`).doc(taskId);
  }

  getTaskDetailAfternoon(
    taskId: string,
    ): AngularFirestoreDocument<Task> {
    return this.firestore.collection(`users/${this.user.getUID()}/afternoon`).doc(taskId);
  }

  getTaskDetailEvening(
    taskId: string,
    ): AngularFirestoreDocument<Task> {
    return this.firestore.collection(`users/${this.user.getUID()}/evening`).doc(taskId);
  }

  deleteTask(
    taskId: string,
    taskTime: string
    ): Promise<void> {
    return this.firestore.doc(`users/${this.user.getUID()}/${taskTime}/${taskId}`).delete();
  }

  updateTask(
    taskId: string,
    taskName: string,
    taskDetails: string,
    oldTaskTime: string,
    newTaskTime: string
    ): Promise<void> {
      this.firestore.doc(`users/${this.user.getUID()}/${oldTaskTime}/${taskId}`).delete(); 
    return this.firestore.doc(`users/${this.user.getUID()}/${newTaskTime}/${taskId}`).set({
      id: taskId,
      taskName,
      taskDetails,
      taskTime: newTaskTime
    });
  }

  
}
