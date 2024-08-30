import {Response} from '../../../../_metronic/helpers'

export interface PricePlan {
    name: string
}

export interface GroupNumber {
    msisdn: String
    balance: number
    pricePlan: PricePlan
    description: string
    access: string
    isActive: boolean
}

export interface Group {
    balance: number
    numbers: GroupNumber[]
}

export const initialNumberMarkEdit = {
    msisdn: '',
    value: '',
}

export type GroupsQueryResponse = Response<Group[]>