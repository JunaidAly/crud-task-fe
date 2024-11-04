import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import TaskModel from './models/taskModel';
import { Observable } from 'rxjs';
import TasklistModel from './models/tasklistModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService:ApiConfigService) { }
  //GET ALL TASKLISTS
  //http://localhost:3000/tasklists
  GetAllTaskLists(): Observable<TasklistModel[]>{
    return this.apiConfigService.getAllTaskLists('tasklists');
  }
  //Create TaskList
  //http://localhost:3000/tasklists
  CreateTaskLists(title:string){
    let data = {
      'title': title
    }
    return this.apiConfigService.post('tasklists',data);
  }
  //fetch all tasks inside a tasklist object
  //http://localhost:3000/tasklists/:id/tasks
  GetAllTasksForTaskLists(tasklistId:string){
    return this.apiConfigService.getAllTasks(`tasklists/${tasklistId}/tasks`);
  }
  //create a task inside a particular tasklist object
  //http://localhost:3000/tasklists/:id/tasks
  CreateATaskInsideTaskList(tasklistId:string, title:string){
    return this.apiConfigService.post(`tasklists/${tasklistId}/tasks`,{title});
  }
 //delete a task list
  //http://localhost:3000/tasklists/:id
  DeleteTaskList(tasklistId:string){
    return this.apiConfigService.delete(`tasklists/${tasklistId}`);
  }
  //delete a task inside a particular tasklist
  //http://localhost:3000/tasklists/:id/tasks/:tasklistId
  DeleteTaskInsideTaskList(tasklistId:string, taskId:string){
    return this.apiConfigService.delete(`tasklists/${tasklistId}/tasks/${taskId}`);
  }
  //update a status of task weather its completed or not
  //http://localhost:3000/tasklists/:id/tasks/:tasklistId
  UpdateTaskStatus(tasklistId:string, taskObject:TaskModel){
    //toggle the status of task
    let updateData={'completed':!taskObject.completed};
    return this.apiConfigService.patch(`tasklists/${tasklistId}/tasks/${taskObject._id}`,updateData);
  }
}
