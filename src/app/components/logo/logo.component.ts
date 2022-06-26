import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  config = config

  constructor(private router:Router) { 

  }

  ngOnInit(): void {

    //this.router.navigate(['/login'])
  }

}
