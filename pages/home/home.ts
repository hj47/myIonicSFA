import { Customer } from '../../assets/model/Customer';
import { Customers } from '../../assets/model/mock-customers';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  productPage = AboutPage;
  
  virtualYn: boolean;
  customers = Customers;
  selectedCustomer: Customer;
  
  constructor(public navCtrl: NavController) {

  }
  
  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
  
  getItems(ev: any) {
    
    this.initializeItems();     // Reset

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.customers = this.customers.filter((customer) => {
        return (customer.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  initializeItems(): void {
    this.customers = Customers;    
  };
}
