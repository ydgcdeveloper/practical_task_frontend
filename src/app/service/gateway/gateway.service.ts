import { Gateway } from './../../data/gateway.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private httpClient: HttpClient) { }

  async getGateways(): Promise<any> {
    return await firstValueFrom(this.httpClient.get<any>(`${environment.url}/gateway`));
  }

  async getGateway(id: string): Promise<any> {
    return await firstValueFrom(this.httpClient.get<any>(`${environment.url}/gateway/${id}`));
  }

  async addGateway(data: any): Promise<any> {
    return await firstValueFrom(this.httpClient.put<any>(`${environment.url}/gateway`, data));
  }

  async editGateway(data: any): Promise<any> {
    return await firstValueFrom(this.httpClient.patch<any>(`${environment.url}/gateway`, data));
  }

  async deleteGateway(data: any): Promise<any> {
    console.log(data);
    return await firstValueFrom(this.httpClient.delete<any>(`${environment.url}/gateway`, { body: data }));
  }
}
