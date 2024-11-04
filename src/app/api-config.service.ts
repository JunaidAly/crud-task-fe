import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TasklistModel from './models/tasklistModel';
import TaskModel from './models/taskModel';
@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  BASE_URL_API = 'http://localhost:3000';
  constructor(private httpclient: HttpClient) { }

  //GET API CALL
  getAllTaskLists(url: string){
    return this.httpclient.get<TasklistModel[]>(`${this.BASE_URL_API}/${url}`);
  }

  getAllTasks(url: string){
    return this.httpclient.get<TaskModel[]>(`${this.BASE_URL_API}/${url}`);
  }

  post(url:string, data:any){
    return this.httpclient.post(`${this.BASE_URL_API}/${url}`,data);
  }

  put(url:string, data:any){
    return this.httpclient.put(`${this.BASE_URL_API}/${url}`,data);
  }
  patch(url:string, data:any){
    return this.httpclient.patch(`${this.BASE_URL_API}/${url}`,data);
  }

  delete(url:string){
    return this.httpclient.delete(`${this.BASE_URL_API}/${url}`);
  }
 
}
