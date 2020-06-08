import axios, { AxiosResponse, AxiosError, AxiosPromise } from 'axios';
import { API } from 'config';
import { storage } from '../localstorage-service';

class AxiosService {
    private service = axios.create();
    private auth_token: string | undefined | null;

    constructor(token?: string | null) {
        this.auth_token = token;
        this.service.interceptors.response.use(this.handleSuccess, this.handlesError);
        this.service.defaults.baseURL = API;
        if(!!this.auth_token) {
            this.service.defaults.headers.common['Authorization'] = this.auth_token;
        }
    }

    private handleSuccess(response: AxiosResponse)  {
        return Promise.resolve(response.data);
    }
    private handlesError(responseError: AxiosError): Promise<AxiosError> {
        return Promise.reject(responseError);
    }

    public get(endpoint: string): AxiosPromise {
        return this.service.request({
            method: 'GET',
            url: endpoint,
        });
    }

    public put(endpoint: string, payload: any): AxiosPromise {
        return this.service.request({
            method: 'PUT',
            url: endpoint,
            responseType: 'json',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public patch(endpoint: string, payload: any): AxiosPromise {
        return this.service.request({
            method: 'PATCH',
            url: endpoint,
            responseType: 'json',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public post(endpoint: string, payload: any): AxiosPromise {
        return this.service.request({
            method: 'POST',
            url: endpoint,
            responseType: 'json',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    public delete(endpoint: string): AxiosPromise {
        return this.service.request({
            method: 'DELETE',
            url: endpoint,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}

export default new AxiosService(storage.token)