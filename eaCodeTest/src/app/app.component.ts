import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EaCodingService } from './service/eacoding.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {

  title = 'EnergyAustralia Coding Test';
  public eadata: any;
  public dataRetrieved = false;

  constructor(private eaCodingService: EaCodingService) {
  }

  ngOnInit(): void {
    this.eaCodingService.getData().subscribe(data => {
      console.log('data', data);
      if (data !== null && data !== '' && data !== undefined) {
        this.dataRetrieved = true;
        this.eadata = data;
      } else {
        this.dataRetrieved = false;
      }
    });
  }
}
