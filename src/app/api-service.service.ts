import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getRandomAdvice(){
    const url = "https://api.adviceslip.com/advice"
    return this.http.get<any>(`${url}`);
  }
}
