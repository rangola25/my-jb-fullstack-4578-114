import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToysrusService } from '../../../services/toysrus.service';
import { Draft } from '../../../models/toysrus/draft.model';
import { Type } from '../../../models/toysrus/type.model';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  types: Type[] = [];  
  formSubmitted = false; 

  constructor (
    public toysrusService: ToysrusService,
    public router: Router
  ) {}

  newForm = new FormGroup({
    typeId: new FormControl('', [
        Validators.required,
    ]),
    name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
    ]),
    description: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
    ]),
    price: new FormControl(0, [
        Validators.required,
        Validators.min(0)
    ])
  });

  ngOnInit() {
    this.fetchTypes();
  }

  async fetchTypes() {
    try {
      this.types = await this.toysrusService.getAllTypes();
    } catch (error) {
      alert('Failed to fetch types');
    }
  }

  async addToy() {
    this.formSubmitted = true;  

    if (this.newForm.invalid) return;
    
    try {
      await this.toysrusService.create(this.newForm.value as Draft);
      this.router.navigate(['/toys']);
    } catch (error) {
      alert(error);
    }
  }
}