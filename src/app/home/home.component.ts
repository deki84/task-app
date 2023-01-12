import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
