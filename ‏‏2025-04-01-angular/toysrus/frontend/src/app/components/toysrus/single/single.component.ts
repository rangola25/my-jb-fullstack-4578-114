import { Component, Input, OnInit } from '@angular/core';
import { Toy } from '../../../models/toysrus/toy.model';
import { Type } from '../../../models/toysrus/type.model';
import { ToysrusService } from '../../../services/toysrus.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input() toy!: Toy;
  types: Type[] = [];

  constructor(private toysrusService: ToysrusService) { }

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

  getTypeName(typeId: string | undefined): string {
    if (!typeId) {
      return 'Unknown';
    }
    const type = this.types.find(type => type.id === typeId);
    return type ? type.type : 'Unknown';
  }

  async deleteToy() {
    if (confirm('Are you sure you want to delete this toy?')) {
      try {
        await this.toysrusService.deleteToy(this.toy.id);
        alert('Toy deleted successfully');
        window.location.reload()
      } catch (error) {
        alert('Failed to delete toy');
      }
    }
  }
}