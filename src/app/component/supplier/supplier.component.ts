import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SupplierService} from '../../service/supplier.service';
import {Supplier} from '../../model/supplier';
import {User} from '../../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  newSupplierForm: FormGroup;

  suppliers: Supplier[];
  selectedSupplier: Supplier;

  isEditVisible: boolean;

  constructor(private formBuilder: FormBuilder, private supplierService: SupplierService, private router: Router) {

    this.newSupplierForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      fax: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadSupplierTable();
  }

  loadSupplierTable() {
    this.supplierService.getSuppliers().subscribe(
      (result) => {
        this.suppliers = result;
      },
      (error1) => {
        console.log(error1);
      }
    );
  }

  addNewSupplier() {
    const supplier: Supplier = {
      supplier_id: -1,
      name: this.newSupplierForm.value.name,
      email: this.newSupplierForm.value.email,
      contact: this.newSupplierForm.value.contact,
      fax: this.newSupplierForm.value.fax,
      address: this.newSupplierForm.value.address
    };

    this.supplierService.addSupplier(supplier).subscribe(
      (result) => {
        console.log(result);
        this.loadSupplierTable();
        alert('new User added');
      }, (error1) => {
        console.log(error1);
      }
    );
  }

  showEditSupplier(index: number) {
    if (this.isEditVisible) {
      if (this.selectedSupplier.supplier_id === this.suppliers[index].supplier_id) {
        this.isEditVisible = false;
      } else {
        this.selectedSupplier = this.suppliers[index];
        console.log(this.selectedSupplier);
      }
    } else {
      this.isEditVisible = true;
      this.selectedSupplier = this.suppliers[index];
      console.log(this.selectedSupplier);
    }
  }

}
