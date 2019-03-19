import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EaCodingService {

    constructor(public http: HttpClient) {
    }

    getData(): Observable<any> {
        return this.http.get('http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars')
        .pipe(map((res: any) => {
            if (res !== null && res !== '' && res !== undefined) {
                return res;
            } else {
            return [{ suggestion: 'No Address found. Enter address manually..' }];
            }
        }));
    }

}
