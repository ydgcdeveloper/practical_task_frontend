import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private httpClient: HttpClient) { }

  async getGateways(): Promise<any>{
    console.log(`${environment.url}/device`);
    return await firstValueFrom(this.httpClient.get<any>(`${environment.url}/gateway`));
  }
}
