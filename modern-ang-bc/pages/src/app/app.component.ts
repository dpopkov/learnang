import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Boardwalk',
      url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Coast',
      url: 'https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Bridge',
      url: 'https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Boardwalk',
      url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Coast',
      url: 'https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Bridge',
      url: 'https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Boardwalk',
      url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Coast',
      url: 'https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Bridge',
      url: 'https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Boardwalk',
      url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Coast',
      url: 'https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Bridge',
      url: 'https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Boardwalk',
      url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Coast',
      url: 'https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Bridge',
      url: 'https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
    }
  ];

  checkWindowIndex(idx: number): boolean {
    return Math.abs(this.currentPage - idx) < 5;
  }
}
