import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SupplierService} from '../../service/supplier.service';
import {Supplier} from '../../model/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  newSupplierForm: FormGroup;
  suppliers: any;
  editSupplierVisible: boolean;

  constructor(private formBuilder: FormBuilder, private supplierService: SupplierService) {
    this.editSupplierVisible = false;

    this.newSupplierForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      fax: ['', Validators.required]
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

  loadEditSupplierDiv(supplier_id: string) {
    console.log(this.editSupplierVisible);
    this.editSupplierVisible = !this.editSupplierVisible;
  }

}
