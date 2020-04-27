import { Timestamp } from 'rxjs';

export interface Task {
    id: string;
    taskName: string;
    taskDetails: string;
    startTime: Timestamp<any>;
    endTime: Timestamp<any>;
  }