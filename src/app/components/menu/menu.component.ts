import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
config = config
  constructor(private router: Router) { }

  ngOnInit(): void {

   //this.router.navigate(['/login'])
    
  }

}
