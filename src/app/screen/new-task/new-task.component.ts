import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  taskListId: string = '';
  constructor(
    private taskService:TaskService,
    private activatedRoute:ActivatedRoute,
    private route:Router
  ){}
  ngOnInit(): void {
  
  }

  addNewTask(title:string){
    console.log(title);
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.taskService.CreateATaskInsideTaskList(params['taskListId'], title)
        .subscribe(
          (response)=>{
            console.log(response);
            this.route.navigate(['/task-lists',params['taskListId']]);
          }
        )
      }
    )
  }
}
