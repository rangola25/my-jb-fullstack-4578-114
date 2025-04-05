import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewComponent } from '../new/new.component';
import { SingleComponent } from '../single/single.component';  
import { Toy } from '../../../models/toysrus/toy.model';
import { Type } from '../../../models/toysrus/type.model';
import { ToysrusService } from '../../../services/toysrus.service';

@Component({
  selector: 'app-list',
  standalone: true,  
  imports: [CommonModule, FormsModule, SingleComponent, ReactiveFormsModule], 
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']  
})
export class ListComponent implements OnInit, OnDestroy {

    list = signal<Toy[]>([]);
    types: Type[] = [];
    selectedType: string | undefined = '';
    price: any = '';
    formSubmitted = false; 

    constructor (
        public toysrusService: ToysrusService
    ) {}

    ngOnDestroy(): void {
    }

    newForm = new FormGroup({
        maxPrice: new FormControl('', [
            Validators.min(0)
        ])})

    async maxPriceClicked() {
        this.formSubmitted = true
    }

    async ngOnInit(): Promise<void> {
        await this.fetchToysByPrice();
        await this.fetchTypes();
    }

    async fetchTypes() {
        try {
            this.types = await this.toysrusService.getAllTypes();
        } catch (error) {
            alert('Failed to fetch types');
        }
    }

    async fetchToysByPrice() {
        try {
            let list: Toy[];
             if (this.price === '') {
                list = await this.toysrusService.getAllToys(); 
            } else {
                list = await this.toysrusService.getAllByPrice(this.price);
            }
            this.list.set(this.filterByType(list, this.selectedType));
        } catch (e) {
            alert(e);
        }
    }

    onPriceChange() {
        this.fetchToysByPrice();
    }

    onTypeChange() {
        this.fetchToysByPrice();
    }
    
    addToy(toy: Toy) {
        this.list.set([toy, ...this.list()]);
    }

    filterByType(toys: Toy[], typeId: string | undefined): Toy[] {
        if (!typeId) {
            return toys;
        }
        return toys.filter(toy => toy.typeId === typeId);
    }

    trackById(index: number, item: Toy): string {
        return item.id;
    }
}