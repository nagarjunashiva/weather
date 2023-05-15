import { Component } from '@angular/core';
@Component({
  selector: 'app-weather-card',
  templateUrl: 'weather-card.component.html',
  styleUrls: ['style.css']
})
export class WeatherCardComponent {
  weatherData: any;
  toggleUnit(): void {
  }
}
