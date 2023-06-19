import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: 'John',
      age: 30,
      job: 'Engineer',
    },
    {
      name: 'Sarah',
      age: 25,
      job: 'Teacher',
    },
    {
      name: 'Michael',
      age: 35,
      job: 'Doctor',
    },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
