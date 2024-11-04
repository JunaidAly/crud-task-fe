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
}
