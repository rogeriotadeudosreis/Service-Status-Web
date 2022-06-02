import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {ServiceStatus} from "../model/service-status";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private readonly baseUrl = `${environment.URL_SERVICE_STATUS_API}/api/service-status`;

  constructor(private http: HttpClient) {
  }

  read(): Observable<ServiceStatus[]> {
    return this.http
      .get<ServiceStatus[]>(`${this.baseUrl}/consultar`)
      .pipe(
        map((response) => response)
      );
  }
}
