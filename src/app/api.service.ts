import { environment } from '../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './_model/cliente'
import { Hamburger } from './_model/hamburger'

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  async getAllBurger() {
    console.log('getting All Burgers');
    
    return await this.http.get<Hamburger[]>(`${API_URL}/hamburgers`).toPromise()
  }

  async getOneBurger(id: any) {
    return await this.http.get<Hamburger>(`${API_URL}/hamburgers/${id}`).toPromise()
  }

  async createOneBurger(body: any) {
    return await this.http.post<Hamburger>(`${API_URL}/hamburgers`, body).toPromise()
  }

  async deleteOneBurger(id: any) {
    return await this.http.delete<Hamburger>(`${API_URL}/hamburgers/${id}`).toPromise()
  }

  async updateOneBurger(id: any, body: any) {
    return await this.http.put<Hamburger>(`${API_URL}/hamburgers/${id}`, body).toPromise()
  }

  async likeOneBurger(id: any, body: any) {
    return await this.http.put<Hamburger>(`${API_URL}/hamburgers/${id}/like`, body).toPromise()
  }



  async getAll() {
    return await this.http.get<Cliente[]>(`${API_URL}/clientes`).toPromise()
  }

  async createOne(body: any) {
    return await this.http.post<Cliente>(`${API_URL}/clientes`, body).toPromise()
  }

  async deleteOne(id: any) {
    return await this.http.delete<Cliente>(`${API_URL}/clientes/${id}`).toPromise()
  }

  async updateOne(id: any, body: any) {
    return await this.http.put<Cliente>(`${API_URL}/clientes/${id}`, body).toPromise()
  }
}
