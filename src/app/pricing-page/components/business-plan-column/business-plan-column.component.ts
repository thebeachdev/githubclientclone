import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-plan-column',
  templateUrl: './business-plan-column.component.html',
  styleUrls: ['./business-plan-column.component.scss']
})
export class BusinessPlanColumnComponent implements OnInit {
  @Input() showButton: null;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  btnClick() {
    this.router.navigate(['/pricing/business']);
  }
}
