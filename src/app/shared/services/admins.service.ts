import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class AdminsService {

  public urlAdminsData: string = 'https://semicode.tech/api/v1/dashboard/admins';

  private http = inject(HttpClient);

  public getAdmins(): Observable<any[]> {
    return this.http.get<any[]>(this.urlAdminsData);
  }
}
