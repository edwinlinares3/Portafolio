import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-sub-porfolio',
  templateUrl: './sub-porfolio.component.html',
  styleUrls: ['./sub-porfolio.component.css']
})
export class SubPorfolioComponent implements OnInit {
  config = config
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
//private router: Router
}
