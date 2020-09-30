import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { GenericService } from './generic.services';

@Injectable()
export class ConfigService {
 
  constructor(private http: HttpClient, private _genericService: GenericService) { }

url = '/api';

  public getRegistros(): Observable<any> {
    return  this._genericService.genericCallServices('get', `${this.url}/registros`, null, null);
  }

  public saveRegistros(obj: any): Observable<any> {
    return  this._genericService.genericCallServices('post', `${this.url}/registros`, obj, null);
  }

  public updateRegistros(obj: any): Observable<any> {
    return  this._genericService.genericCallServices('put', `${this.url}/registros/${obj.id}`, obj, null);
  }

  public deleteRegistros(obj: any): Observable<any> {
    return  this._genericService.genericCallServices('delete', `${this.url}/registros/${obj.id}`, null , null);
  }
}
