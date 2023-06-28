import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  searchField = "";
  users = [
      {
        "name": "John Doe",
        "phone": "555-1234",
        "email": "john.doe@example.com"
      },
      {
        "name": "Jane Smith",
        "phone": "555-5678",
        "email": "jane.smith@example.com"
      },
      {
        "name": "Alex Johnson",
        "phone": "555-9012",
        "email": "alex.johnson@example.com"
      },
      {
        "name": "Emily Davis",
        "phone": "555-3456",
        "email": "emily.davis@example.com"
      },
      {
        "name": "Michael Brown",
        "phone": "555-7890",
        "email": "michael.brown@example.com"
      }
    ]
    sortedData:any[];

    constructor() {
      this.sortedData = this.users.slice();
    }
    sortData(sort: Sort) {
      const data = this.users.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
  
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name':
            return this.compare(a.name, b.name, isAsc);
          case 'phone':
            return this.compare(a.phone, b.phone, isAsc);
          case 'email':
            return this.compare(a.email, b.email, isAsc);
          default:
            return 0;
        }
      });
    }
    compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  
}
