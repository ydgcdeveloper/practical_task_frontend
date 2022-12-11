import { Gateway } from './gateway.interface';
export interface Device {
    _id?: string;
    vendor?: string;
    status?: string;
    created?: string;
    uid?: number;
    gateway?: any;
}
