import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css'],
})
export class ViewsComponent implements OnInit {
  stats: any[] = [
    {
      label: 'Users',
      value: 22,
    },
    {
      label: 'Revenue',
      value: 3.125,
    },
    {
      label: 'Rating / 100',
      value: 74,
    },
  ];

  items: any[] = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Large Couch',
      description:
        'This is a couch for many people. You can sit comfortably here up to 10 persons.',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Vintage dresser',
      description:
        "What a lovely vintage dresser! Directly from the 80's, this dresser will upgrade your home feeling.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
