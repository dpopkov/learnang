import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Task} from "../../model/Task";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task>;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);

    // Datasource can use any type of source (DB, arrays)
    this.dataSource = new MatTableDataSource<Task>();
    this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  private readonly COMPLETED_TASK_PRIORITY_COLOR = '#F8F9FA';
  private readonly NO_PRIORITY_COLOR = '#FFF';

  getPriorityColor(task: Task): string {
    if (task.completed) {
      return this.COMPLETED_TASK_PRIORITY_COLOR;
    }
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return this.NO_PRIORITY_COLOR;
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
