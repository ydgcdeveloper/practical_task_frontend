import { Device } from './device.interface';

export interface Gateway {
    _id?: string;
    usn?: string;
    name?: string;
    ipv4?: string;
    devices?: Device [];
}
