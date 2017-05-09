import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-developer-plan-column',
  templateUrl: './developer-plan-column.component.html',
  styleUrls: ['./developer-plan-column.component.scss']
})
export class DeveloperPlanColumnComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() { }
  btnClick() {
    this.router.navigate(['/pricing/developer']);
  }
}
