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

  title = 'ea-app';
  public eadata: any;

  constructor(private eaCodingService: EaCodingService) {
  }

  ngOnInit(): void {
    this.eaCodingService.getData().subscribe(data => {
      this.eadata = data;
      console.log('this.eadata', this.eadata);
    });
  }
}
