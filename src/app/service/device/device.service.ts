import { Device } from './../../data/device.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }
  
  async getDevices(): Promise<any>{
    console.log(`${environment.url}/device`);
    return await firstValueFrom(this.httpClient.get<any>(`${environment.url}/device`));
  }
}
