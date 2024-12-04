import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedMonth: number | undefined;

  constructor(private router: Router) {}

  onMonthSelect(event: any) {
    const date = new Date(event.value);
    this.selectedMonth = date.getMonth() + 1; 
  }

  viewReport() {
    if (this.selectedMonth !== undefined) {
      this.router.navigate(['/food-report', this.selectedMonth]);
    } else {
      alert('Please select a month.');
    }
  }

}
