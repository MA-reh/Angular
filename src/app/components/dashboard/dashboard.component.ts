import { ProductsService } from './../../shared/services/products.service';
import { Component, inject, signal } from '@angular/core';
import { AdminsService } from '../../shared/services/admins.service';
import { AdminComponent } from "./admin/admin.component";
import { ClientsService } from '../../shared/services/clients.service';
import { ClientComponent } from "./client/client.component";
import { NgClass } from '@angular/common';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [AdminComponent, ClientComponent, NgClass, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  public AdminsService = inject(AdminsService);
  public ClientsService = inject(ClientsService);
  public ProductsService = inject(ProductsService);


  public navBtns: string[] = ['admins', 'clients', 'products'];

  public admins = signal<any[]>([])

  public clients = signal<any[]>([])

  public products = signal<any[]>([])

  constructor() {
    this.AdminsService.getAdmins().subscribe((users) => {
      this.admins.set(users);
    });
    this.ClientsService.getClients().subscribe((users) => {
      this.clients.set(users);
    });
    this.ProductsService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }



  public async alerts(actionType: string, alertType: string, personType: string, inputType: string = "") {
    if (alertType == "areYouSure?") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, ${actionType} it!`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${actionType}!`,
            text: `This ${personType} has been ${actionType}.`,
            icon: "success"
          });
        }
      });
    } else if (alertType == 'error') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else if (alertType == 'edit') {
      console.log("HI");

      const { value: formValues } = await Swal.fire({
        title: `Edit ${inputType} `,
        html: `
          <label for="swal-input1" class="form-label d-block me-auto">${inputType} :</label>
          <input id="swal-input1" class="form-control" class="swal2-input">
        `,
        focusConfirm: false,
      });

      console.log(formValues);
      if (formValues) Swal.fire('Done For Edit, Thx');
    }


  }

}
