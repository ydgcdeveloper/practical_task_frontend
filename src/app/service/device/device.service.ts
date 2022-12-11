import { Device } from './../../data/device.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }
  
  async getDevices(): Promise<any>{
    return await firstValueFrom(this.httpClient.get<any>(`${environment.url}/device`));
  }

  async getDevice(id: string): Promise<any> {
    return await firstValueFrom(this.httpClient.get<any>(`${environment.url}/device/${id}`));
  }

  async addDevice(data: any): Promise<any> {
    return await firstValueFrom(this.httpClient.put<any>(`${environment.url}/device`, data));
  }

  async editDevice(data: any): Promise<any> {
    return await firstValueFrom(this.httpClient.patch<any>(`${environment.url}/device`, data));
  }

  async deleteDevice(data: any): Promise<any> {
    return await firstValueFrom(this.httpClient.delete<any>(`${environment.url}/device`, { body: data }));
  }
}
