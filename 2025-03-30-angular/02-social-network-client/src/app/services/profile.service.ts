import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { environment } from '../../environments/environment';
import { Post } from '../models/post/post.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  random = v4()

  constructor(
    public httpClient: HttpClient 
 ) { }

  sayHi() {
    console.log(`hi from service ${this.random}`)
  }

  async getProfile(): Promise<Post[]> {
    const observable = this.httpClient.get<Post[]>(`${environment.restServerUrl}/profile`)
    const profile = firstValueFrom(observable)
    return profile
}

  async deletePost(id: string): Promise<Post[]> {
    const observable = this.httpClient.delete<Post[]>(`${environment.restServerUrl}/profile/${id}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }

  async addComment(id: string, comment: string): Promise<Comment[]> {
    const observable = this.httpClient.post<Comment[]>(`${environment.restServerUrl}/profile/${id}`,
      { comment }  
    );

    const commentResponse = await firstValueFrom(observable); 
    return commentResponse;
  }
}
