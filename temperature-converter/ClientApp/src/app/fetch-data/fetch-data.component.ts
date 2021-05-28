import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  name: string;

  
  data: string;

  selected: string = '';
  public forecasts: WeatherForecast[];

  selectedTemp: string = '';

  constructor(
    private http: HttpClient
  ) { }

  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedTemp = event.target.value;
  }



  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}


  //selectChangeHandler(event: any) {
  //  //update the ui
  //  this.selected = event.target.value;
  //}
 
  //onKey(value: string): void {
  //  this.name = value;
  //  const formData: FormData = new FormData();
  //  formData.append('name', this.name);
  //  this.http.post('https://localhost:44336/TestName', formData).subscribe(result => {
  //    console.log(result);
  //  }, error => console.error(error));
  //}

  addNewOption(name: string): void {

    //this.name = name;
    //this.selected = selected;


    //this.http.post('https://localhost:44336/TestName', this.name, this.selected ).subscribe(result => {
    // this.data = result;
    //}, error => console.error(error));
    this.name = name;
    
    const formData: FormData = new FormData();
    formData.append('name', this.name);
    formData.append('selected', this.selectedTemp);
    this.http.post('https://localhost:44336/TestName', formData).subscribe(result => {
      console.log(result);
    }, error => console.error(error));


  }


}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
