import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoggingService } from "./logging.service";

@Injectable()
export class ErrorService {
    private logService: LoggingService;
    constructor() { }
    
    handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          this.logService.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
    }
}
