import {TaskDAO} from "../interface/TaskDAO";
import {Observable, of} from "rxjs";
import { Task } from 'src/app/model/Task';
import {Category} from "../../../model/Category";
import {Priority} from "../../../model/Priority";
import {TestData} from "../../TestData";

export class TaskDaoArray implements TaskDAO {
  add(T): Observable<Task> {
    return undefined;
  }

  delete(id: number): Observable<Task> {
    return undefined;
  }

  get(id: number): Observable<Task> {
    return undefined;
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return undefined;
  }

  update(T): Observable<Task> {
    return undefined;
  }

}
