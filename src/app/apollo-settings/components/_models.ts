import {ID, Response} from '../../_metronic/helpers'

export interface RequestType {
    name: string
    id: ID
}

export interface RequestSubject {
    name: string
    id: ID
}

export type RequestTypesQueryResponse = Response<RequestType[]>
export type RequestSubjectsQueryResponse = Response<RequestSubject[]>