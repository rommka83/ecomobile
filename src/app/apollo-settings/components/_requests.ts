import {GET_REQUEST_TYPES, GET_REQUEST_SUBJECTS} from "./_queries";
import {REGISTRATION_CREATE, REGISTRATION_SUBMIT, REGISTRATION_VERIFY} from "./_mutations";
import {RequestTypesQueryResponse, RequestSubjectsQueryResponse} from "./_models"
import {ApiClient} from "./ApiClient";

export const getRequestTypes = async (client: ApiClient): Promise<RequestTypesQueryResponse> => {
    let result = await client.query({query: GET_REQUEST_TYPES});
    return {
        data: result.data.requestTypes
    }
}

export const getRequestSubjects = async (client: ApiClient): Promise<RequestSubjectsQueryResponse> => {
    let result = await client.query({query: GET_REQUEST_SUBJECTS});
    return {
        data: result.data.requestCustomSubjects
    }
}

export async function registrationCreate(
    client: ApiClient,
    msisdn: String,
    correlationId: String,
    actionId: String,
    registrationId: String,
    sim: String,
    email: String,
    contactName: String,
    contactPhone: String,
) {
    return client.mutate({
        mutation: REGISTRATION_CREATE, variables: {
            msisdn: msisdn,
            correlationId: correlationId,
            actionId: actionId,
            registrationId: registrationId,
            sim: sim,
            email: email,
            contactName: contactName,
            contactPhone: contactPhone
        }
    }).then((result) => {
        return {
            data: result.data
        }
    })
}

export async function registrationVerify(client: ApiClient, registrationId: String, correlationId: String, actionId: String) {
    return client.mutate({
        mutation: REGISTRATION_VERIFY, variables: {
            correlationId: correlationId,
            actionId: actionId,
            registrationId: registrationId,
        }
    }).then((result) => {
        return {
            data: result.data
        }
    })
}

export async function registrationSubmit(client: ApiClient, registrationId: String, correlationId: String, actionId: String) {
    return client.mutate({
        mutation: REGISTRATION_SUBMIT, variables: {
            correlationId: correlationId,
            actionId: actionId,
            registrationId: registrationId,
        }
    }).then((result) => {
        return {
            data: result.data
        }
    })
}
