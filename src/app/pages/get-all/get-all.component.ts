import { Component, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetAllComponent {

  crudService = inject(CrudService)

  users: any[] = [];

  getAllUsers() {
    this.crudService.users().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
