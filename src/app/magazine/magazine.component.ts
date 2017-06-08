import {Component} from '@angular/core';

@Component({
  selector: 'magazine',
  templateUrl: 'magazine.component.html',
  styleUrls: ['magazine.component.css']
})

export class MagazineComponent {
  users = [
    {
      id: 1,
      name: 'Item1',
      status: 'active'
    },
    {
      id: 2,
      name: 'Item2',
      status: 'active'
    },
    {
      id: 3,
      name: 'Item3',
      status: 'disable'
    },
    {
      id: 4,
      name: 'Item4',
      status: 'active'
    },{
      id: 5,
      name: 'Item5',
      status: 'disable'
    }
  ];

  filteredStatus = '';

  onAddUser() {
    this.users.push({
      id: 6,
      name: 'Item6',
      status: 'disable'
    });
  }

}
