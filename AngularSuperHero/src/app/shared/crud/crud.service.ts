import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Hero } from '../models/hero';

@Injectable()
export class CrudService {
  url: string;

  constructor(public http: HttpClient){
  }

  getOne(id): Observable<Hero>{
    return this.http.get<Hero>(environment.api_url + this.url + `/${id}`);
  }

  getAll(): Observable<any>{
    return this.http.get<any>(environment.api_url + this.url);
  }

  add(entity): Observable<Hero>{
    console.log('entity', environment.api_url + this.url, entity)
    return this.http.post<Hero>(environment.api_url + this.url, entity);
  }

  update(entity): Observable<any>{
    return this.http.put<any>(environment.api_url + this.url + `/${entity.id}` , entity);
  }

  delete(id): Observable<any>{
    return this.http.delete(environment.api_url + this.url + `/${id}`);
  }



  addAll(list): Observable<any>{
    return this.http.post(environment.api_url + this.url + '/all', list);
  }

}
