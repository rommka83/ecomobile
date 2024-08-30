import {createContext, FC, useContext, useEffect, useState} from "react";
import {WithChildren} from "../../../_metronic/helpers";
import {ApolloQueryResult, gql} from "@apollo/client";
import {useApi} from "../ApiClient";
import {useAuth} from "../../modules/auth";

export enum AUTHORITIES {
    // `payment.pay` - платеж деньгами на номер телефона;
    PAYMENTS = 'payment.pay',
    // `access.manage_group` - управление доступом в ЛК дочерних номеров;
    MANAGE_GROUPS = 'access.manage_group',
}

export interface IAccess {
    [AUTHORITIES.PAYMENTS]: boolean
    [AUTHORITIES.MANAGE_GROUPS]: boolean
}

const defaultAccess = {
    [AUTHORITIES.MANAGE_GROUPS]: false,
    [AUTHORITIES.PAYMENTS]: false,
} as IAccess;

const AccessContext = createContext<IAccess>(defaultAccess)

export function useAccess(): IAccess {
    return useContext(AccessContext)
}

export const AccessProvider: FC<WithChildren> = ({children}) => {
    const api = useApi()
    const auth = useAuth()
    const [value, setValue] = useState<IAccess>(defaultAccess)

    useEffect(() => {
        if (!auth.currentUser) {
            return
        }
        const authList = Object.entries(AUTHORITIES)

        api.query({
            query: ACCESS_QUERY,
            variables: {authorities: authList.map(([_, value]) => value)}
        }).then((resp: ApolloQueryResult<AccessQueryResponse>) => {
            if (!resp.errors) {
                const access: IAccess = {} as IAccess

                resp.data.accessCheck.results.forEach(({authority, hasAccess}) => {
                    const auth = authList.find(([k, v]) => authority === v)
                    if (auth) {
                        access[auth[1]] = hasAccess
                    }
                })
                //console.debug(access)
                setValue(access)
            }
        })
    }, [api, auth]);

    return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

interface AccessQueryResponse {
    accessCheck: {
        results: {
            authority: string
            hasAccess: boolean
        }[]
    }
}

const ACCESS_QUERY = gql`
    query accessCheck ($authorities: [ID!]!) {
        accessCheck(authorities: $authorities) {
            results {
                authority
                hasAccess
            }
        }
    }
`
