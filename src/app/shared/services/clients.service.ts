import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ClientsService {

  public urlClients: string = "https://semicode.tech/api/v1/dashboard/clients"

  public httpClient = inject(HttpClient);

  public getClients(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlClients);
  }

}
