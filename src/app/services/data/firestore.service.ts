import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Task } from '../task.interface';
import { UserService } from "../user.service";
import { Timestamp } from 'rxjs';
import { Time } from '@angular/common';

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
    startTime: any,
    endTime: any

  ): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`users/${this.user.getUID()}/tasks/${id}`).set({
      DocumentId: id,
      Subject: taskName,
      Details: taskDetails,
      StartTime: startTime,
      EndTime: endTime
    });
  }

  getTaskListMorning(
  ):
    AngularFirestoreCollection<Task> {
      let start = new Date(null, null, null, 9, null );
      let end = new Date(null, null, null, 12, null )
    return this.firestore.collection(`users/${this.user.getUID()}/tasks`, ref => ref.orderBy('time').where('time', '>', start).where('time', '<', end));
  }

  getTaskListAfternoon(
  ):
    AngularFirestoreCollection<Task> {
      let start = new Date(null, null, null, 12, null );
      console.log(start);
    return this.firestore.collection(`users/${this.user.getUID()}/tasks`, ref => ref.orderBy('time').where('time', '<', start));
  }

  getTaskListEvening(
  ):
    AngularFirestoreCollection<Task> {
    return this.firestore.collection(`users/${this.user.getUID()}/tasks`, ref => ref.orderBy('time'));
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
  ): Promise<void> {
    return this.firestore.doc(`users/${this.user.getUID()}/tasks/${taskId}`).delete();
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
