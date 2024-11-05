import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskScreenComponent } from './screen/task-screen/task-screen.component';
import { NewTaskListComponent } from './screen/new-task-list/new-task-list.component';
import { NewTaskComponent } from './screen/new-task/new-task.component';
const routes: Routes = [
{path: '',redirectTo: 'task-lists',pathMatch: 'full'},
{path: 'task-lists',component:TaskScreenComponent},
{path: 'task-lists/:taskListId',component:TaskScreenComponent},
{path: 'new-tasklist',component:NewTaskListComponent},
{path: 'task-lists/:taskListId/new-task',component:NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
