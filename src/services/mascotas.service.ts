import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  constructor(private http: HttpClient) {}

  public getPets(url: string) {
    return this.http.get(url);
    }

}