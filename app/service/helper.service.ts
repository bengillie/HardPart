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

	isAlphaNumeric(args): boolean {
		var re = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i;
		return re.test(String(args).toLowerCase());
	}

	validateEmail(email): boolean {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
}