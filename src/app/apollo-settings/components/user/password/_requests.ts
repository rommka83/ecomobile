import {ApiClient} from "../../ApiClient";
import {PASSWORD_CHANGE_CREATE, PASSWORD_CHANGE_SUBMIT, VERIFITATION_SUBMIT} from "../../_mutations"

export async function passwordChangeCreate(client: ApiClient, msisdn: String, passwordChangeId: String, correlationId: String, actionId: String) {
    return client.mutate({
        mutation: PASSWORD_CHANGE_CREATE, variables: {
            correlationId: correlationId,
            actionId: actionId,
            msisdn: msisdn,
            passwordChangeId: passwordChangeId
        }
    }).then((result) => {
        return {
            data: result.data,
            errors: result.errors
        }
    });
}

export async function verificationSubmit(client: ApiClient, secret: String, verificationId: String, correlationId: String, actionId: String) {
    return client.mutate({
        mutation: VERIFITATION_SUBMIT, variables: {
            correlationId: correlationId,
            actionId: actionId,
            verificationId: verificationId,
            secret: secret
        }
    }).then((result) => {
        return {
            data: result.data,
            errors: result.errors
        }
    });
}

export async function passwordChangeSubmit(client: ApiClient, newPassword: String, passwordChangeId: String, correlationId: String, actionId: String) {
    return client.mutate({
        mutation: PASSWORD_CHANGE_SUBMIT, variables: {
            correlationId: correlationId,
            actionId: actionId,
            passwordChangeId: passwordChangeId,
            newPassword: newPassword
        }
    }).then((result) => {
        return {
            data: result.data,
            errors: result.errors
        }
    });
}
