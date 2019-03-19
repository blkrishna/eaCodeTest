import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EaCodingService {

    constructor(public http: HttpClient) {
    }

    getData(): Observable<any> {
        return this.http.get('http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars')
        .pipe(
            catchError(err => {
                console.log('Handling error locally and rethrowing it...', err);
                return [{ suggestion: 'No data retrieved..' }];
            })
        ).pipe(map((res: any) => {
            return res;
        }));
    }
}
