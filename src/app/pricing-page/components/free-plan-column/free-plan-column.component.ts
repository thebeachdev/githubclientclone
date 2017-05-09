import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-free-plan-column',
  templateUrl: './free-plan-column.component.html',
  styleUrls: ['./free-plan-column.component.scss']
})
export class FreePlanColumnComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  btnClick() {
    this.router.navigate(['/pricing/freeplan']);
  }
}
