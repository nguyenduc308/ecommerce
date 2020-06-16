import { localstorage_key } from "app-config";

class Storage {
    private _data = JSON.parse(localStorage.getItem(this.KEY) || "{}");

    constructor(private KEY: string = 'DATA') {}
    
    private checkToken(): boolean {
        return !!this._data.token;
    }
    
    get token(): string | null {
        const isStoredToken = this.checkToken()
        if(isStoredToken) {
            return this._data.token;
        }
        return null;
    }
    setData(data: any):void {
        localStorage.setItem(this.KEY, JSON.stringify(data));
    }
}

export default new Storage(localstorage_key);