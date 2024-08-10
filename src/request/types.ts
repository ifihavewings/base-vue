import { type AxiosRequestConfig, type InternalAxiosRequestConfig } from "axios";;
export interface IAxiosRequestConfig extends AxiosRequestConfig {
    [key: string]: any;
}
export interface IInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
    [key: string]: any;
}