import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {TaskDaoArray} from "../data/dao/impl/TaskDaoArray";
import {CategoryDaoArray} from "../data/dao/impl/CategoryDaoArray";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private taskDaoArray = new TaskDaoArray();
  private categoryDaoArray = new CategoryDaoArray();

  constructor() {
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDaoArray.getAll();
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  // Remove when add dao
  /*fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(c => c.category === category);
    this.taskSubject.next(tasks);
  }*/
}
