import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from 'src/Model/resource'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://localhost:46650'

  constructor(private http: HttpClient) { }

  async getResources() {
    return axios.get<Resource[]>(`${this.apiUrl}/Resource`)
  }
}
