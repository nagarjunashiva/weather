import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['style.css']
})
export class ChartComponent {
  hourlyForecast: any[] = [];
}
