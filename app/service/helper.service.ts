import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    constructor() { }
    
    arrGroupBy(arr, key) {
        var obj = arr.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});

        return Object.keys(obj).map(i => {
            return {
                'key': i,
                'values': obj[i]
            };
        });
    }

    gridColumnsGenerator(len: number) {
        var result: string = '';
        for (let x = 0; x < len; x++) {
            if(x === len - 1) {
                result += '*';
                break;
            }
            result += '*,';
        }
        return result;
    }
}