import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(){

    return this.http.get(apiUrl);
  }

  deletePost(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  createPost(obj: {name:string, class: string}) {
    return this.http.post(apiUrl, obj);
  }

  updatePost(id: number|string, obj: {name:string, class: string}) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }
}
