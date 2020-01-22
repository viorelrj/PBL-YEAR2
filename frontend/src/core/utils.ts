export class ExternalPromise<T> extends Promise<T> {
    private _resolve: any;
    private _reject: any;

    constructor() {
        let _res, _rej;
        super((resolve, reject) => {
            _res = resolve;
            _rej = reject;
        });
        
        this._resolve = _res;
        this._reject = _rej;
    }

    resolve(value?: T) {
        this._resolve(value);
    }

    reject(value?: T) {
        this._reject(value);
    }
}