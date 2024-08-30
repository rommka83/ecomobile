import Storage, {IStorage} from './Storage'
import { getRequestTypes, getRequestSubjects } from './_requests'
import {ApiClient} from "./ApiClient";

class Lists {
    constructor() {
        this.store = Storage
    }
    store:IStorage = Storage
    async getRequestTypes(api: ApiClient) {
        if (this.store.isset('requestTypes')) {
            return this.store.get('requestTypes')
        }
        let requestTypes = (await getRequestTypes(api)).data
        this.store.set('requestTypes', requestTypes)

        return requestTypes
    }
    async getRequestSubjects(api: ApiClient) {
        if (this.store.isset('requestSubjects')) {
            return this.store.get('requestSubjects')
        }
        let requestSubjects = (await getRequestSubjects(api)).data
        this.store.set('requestSubjects', requestSubjects)

        return requestSubjects
    }
}

let lists = new Lists()

export default lists;
