import { localstorage_key } from "config";

class Storate {
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

}

export default new Storate(localstorage_key);