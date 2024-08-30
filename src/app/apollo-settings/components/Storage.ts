type strObj = {[key:string]:any}

export interface IStorage {
    bug: strObj
    isset(key: string): any
    get(key: string): any
    set(key: string, value: any): any
    unset(key: string): any
}

const Storage = {
    bug: {} as strObj,
    isset: function (key: string) {
        return this.get(key) !== undefined
    },
    get: function (key: string) {
        return this.bug[key] || undefined
    },
    set: function (key: string, value: any) {
        this.bug[key] = value
    },
    unset: function (key: string) {
        delete this.bug[key]
    }
} as IStorage

export default Storage;