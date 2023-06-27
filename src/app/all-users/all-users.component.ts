import { Component } from '@angular/core';

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
}
