import { Component ,OnInit } from '@angular/core';
import TaskModel from '../../models/taskModel';
import TasklistModel from '../../models/tasklistModel';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Router ,Params} from '@angular/router';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrl: './task-screen.component.scss'
})
export class TaskScreenComponent implements OnInit {
  Tasks: TaskModel []=[];
  TaskLists: TasklistModel []=[];
  TaskListId: string = '';

  constructor(
    private taskService:TaskService,
    private activatedRoute:ActivatedRoute,
    private route:Router
  ){}

ngOnInit(): void{
  this.taskService.GetAllTaskLists()
  .subscribe(allTaskLists=>{ this.TaskLists=allTaskLists
    this.route.navigate(['/task-lists',allTaskLists[0]._id])
  });
  this.activatedRoute.params.subscribe(
    (params:Params)=>{
      this.TaskListId = params['taskListId'];
      if(this.TaskListId){
        this.taskService.GetAllTasksForTaskLists(this.TaskListId)
        .subscribe((tasks: TaskModel[]) => this.Tasks = tasks);
      }
    }
  );
}

markUpdate(task: TaskModel) {
  console.log(task);
  this.taskService.UpdateTaskStatus(task._taskListId, task).subscribe(
    () => {
      task.completed = !task.completed;
    }
  )
}
deleteTask(task: TaskModel) {
  console.log(task);
  this.taskService.DeleteTaskInsideTaskList(task._taskListId, task._id)
    .subscribe((tasks: TaskModel[]) => this.Tasks =
  this.Tasks.filter((taskObject: TaskModel) => taskObject._id !== task._id));
  
}

DeleteTaskList(taskList: TasklistModel){
  console.log(taskList);
  this.taskService.DeleteTaskList(taskList._id)
  .subscribe((taskLists: TasklistModel[]) => this.TaskLists =
  this.TaskLists.filter((taskListObject: TasklistModel) => taskListObject._id !== taskList._id));
}
newTask(){
  if(this.TaskListId){
    this.route.navigate(['./new-task'],{relativeTo:this.activatedRoute});
  }else{
      alert('Please select a task list to add a new task');
      return;
    }
  }
}

