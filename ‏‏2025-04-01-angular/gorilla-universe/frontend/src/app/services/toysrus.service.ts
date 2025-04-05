import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Type } from '../models/toysrus/type.model';
import { Draft } from '../models/toysrus/draft.model';
import { Toy } from '../models/toysrus/toy.model';

@Injectable({
  providedIn: 'root'
})
export class ToysrusService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getAllTypes(): Promise<Type[]> {
    const observable = this.httpClient.get<Type[]>(`${environment.restServerUrl}/types`)
        const typeList = firstValueFrom(observable)
        return typeList
  }

  async getAllToys(): Promise<Toy[]> {
    const observable = this.httpClient.get<Toy[]>(`${environment.restServerUrl}/toys`)
        const listByPrice = firstValueFrom(observable)
        return listByPrice
  }

  async getAllByPrice(maxPrice: number): Promise<Toy[]> {
    const observable = this.httpClient.get<Toy[]>(`${environment.restServerUrl}/toys/${maxPrice}`)
        const listByPrice = firstValueFrom(observable)
        return listByPrice
  }
  
  async create(draft: Draft): Promise<Toy> {
      const observable = this.httpClient.post<Toy>(`${environment.restServerUrl}/toys/create`, draft)
      const newToy = firstValueFrom(observable); 
      return newToy
      }

  async deleteToy(id: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/toys/${id}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }
}
