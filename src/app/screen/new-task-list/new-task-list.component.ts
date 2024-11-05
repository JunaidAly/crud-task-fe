import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../task.service';
import TasklistModel from '../../models/tasklistModel';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrl: './new-task-list.component.scss'
})
export class NewTaskListComponent implements OnInit {
  constructor(
    private taskService:TaskService,
    private activatedRoute:ActivatedRoute,
    private route:Router
  ){}
  ngOnInit(): void {
  
  }
  addNewTaskList(title: string) {
  console.log(title);
    if(title){
      this.taskService.CreateTaskLists(title)
      .subscribe((newlyCreatedTaskList: TasklistModel) => {
        this.route.navigate(['/task-lists',newlyCreatedTaskList._id]);
      });
    }
    else{
      alert('Please enter a title');
    }
  }
}
