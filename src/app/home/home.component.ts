import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTasks().subscribe(
      (response: any) => {
        console.log('Data', response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
