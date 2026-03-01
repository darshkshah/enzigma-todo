import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { Observable } from 'rxjs';

interface TaskApiResponse {
    results: TaskModel[];
    next: string;
    previous: string;
    count: number;
}

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    constructor(private http:HttpClient) {}

    tasks = signal<TaskModel[]>([]);
    count = signal<number>(4);

    apiUrl:string = 'api/todo/tasks/';

    loadTasks() : Observable<HttpResponse<TaskApiResponse>> {
        return this.http.get<TaskApiResponse>(this.apiUrl, { observe: 'response' });
    }

    newTask(task: Object) {
        return this.http.post(this.apiUrl, task, { observe: 'response' });
    }

    addTaskLocally(task:TaskModel) {
        this.tasks.update(current => [...current, task]);
    }

    setTasksLocally(tasks: TaskModel[]) {
        this.tasks.set(tasks);
    }
}
