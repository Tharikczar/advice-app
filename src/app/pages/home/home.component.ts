import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  advice: any;
  constructor(private apiservice: ApiServiceService){}
  ngOnInit(): void {
    this.getAdvice()
  }
getAdvice(){
  this.apiservice.getRandomAdvice().subscribe((data:any)=>{
    this.advice = data
  })
}
}
