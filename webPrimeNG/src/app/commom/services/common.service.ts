import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
// import * as http from "http";
// @ts-ignore
// tslint:disable-next-line:no-require-imports
import http = require('http');

@Injectable()
export class CommonHttpService {
    constructor(private http: HttpClient) {
    }

    getAll(url) {
        return this.http.get('/' + url + '/');
    }

    add(url, pdata: any) {
        return this.http.post('/' + url + '/', pdata);
    }
    carUserId(url,pdata: any){
        return this.http.get('/' + url + '?id=' + pdata);
    }
    connect(url,pdata: any){
        return this.http.get('/' + url + '/?carId=' + pdata);
    }
    delete(url, pdata: any) {
        return this.http.delete('/' + url + '/?id=' + pdata);
    }

    update(url, pdata: any) {
        return this.http.put('/' + url + '/', pdata);
    }

    async getAllAsync(url): Promise<http.IncomingMessage> {
        // return new Promise<http.IncomingMessage>(resolve => {
        //     http.get("/" + url + "/", res => {
        //         resolve(res);
        //     });
        // });
        return new Promise<http.IncomingMessage>(resolve => {
            // tslint:disable-next-line:prefer-template
            this.http.get(url).subscribe(res => {
                // tslint:disable-next-line:ban-ts-ignore
                // @ts-ignore
                resolve(res);
            });
        });
        // const promise = new Promise<http.IncomingMessage>(resolve => {
        //    http.get("/" + url + "/", res => {
        //        resolve(res);
        //    }) ;
        // });
        // return promise;
    }

    regist(url, pdata: any) {
        return this.http.post(url, pdata);
    }

    get(url) {
        return this.http.get(url);
    }
    applyGet(url: any, userId: any) {
        return this.http.get(url + userId);
    }

    put(url, pdata: any) {
        return this.http.put(url, pdata);
    }

    async getAllUser(url): Promise<http.IncomingMessage> {
        return new Promise<http.IncomingMessage>(resolve => {
            // tslint:disable-next-line:prefer-template
            this.http.get('/' + url + '/').subscribe(res => {
                // tslint:disable-next-line:ban-ts-ignore
                // @ts-ignore
                resolve(res);
            });
        });
    }
}
