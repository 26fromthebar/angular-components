import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items = [
    { title: 'Introduction', content: 'Welcome to our website!' },
    {
      title: 'About Us',
      content: 'Learn more about our company and our mission.',
    },
    { title: 'Services', content: 'Discover the range of services we offer.' },
    {
      title: 'Contact Us',
      content: 'Get in touch with our team for inquiries and support.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
