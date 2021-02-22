import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Task} from "../../model/Task";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {

  tasks: Task[];
  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task>;

  // Table components for sorting and pagination
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);

    // Datasource can use any type of source (DB, arrays)
    this.dataSource = new MatTableDataSource<Task>();
    this.refreshTable();
  }

  // в этом методе уже все проинциализировано, поэтому можно присваивать объекты (иначе может быть ошибка undefined)
  ngAfterViewInit(): void {
    this.addTableObjects(); // is called after visual components are drawn on page
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

  // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
  private refreshTable() {
    this.dataSource.data = this.tasks;

    this.addTableObjects();

    // когда получаем новые данные..
    // чтобы можно было сортировать по столбцам "категория" и "приоритет", т.к. там не примитивные типы, а объекты
    // @ts-ignore - показывает ошибку для типа даты, но так работает, т.к. можно возвращать любой тип
    this.dataSource.sortingDataAccessor = (task, colName) => {

      // по каким полям выполнять сортировку для каждого столбца
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : null;
        }
        case 'category': {
          return task.category ? task.category.title : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }
        case 'title': {
          return task.title;
        }
      }
    };
  }

  private addTableObjects() {
    this.dataSource.sort = this.sort; // sorting table component
    this.dataSource.paginator = this.paginator; // paginator table component
  }
}
