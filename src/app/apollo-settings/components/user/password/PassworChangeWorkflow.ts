import { passwordChangeCreate, passwordChangeSubmit } from './_requests'
import { generateCorrelationId } from '../../_helpers';
import {ApiClient} from "../../ApiClient";

export type strObj = {[key:string]:string}

class PasswordChangeWorkflow {
    worklowData:strObj = {}
    workflowStarted:boolean = false
    async create(api: ApiClient, msisdn: String) {
        if (this.workflowStarted) return false

        let passworChangeId = generateCorrelationId()
        let correlationId = generateCorrelationId()
        let actionId = generateCorrelationId()

        let result = (await passwordChangeCreate(api, msisdn, passworChangeId, correlationId, actionId)).data

        this.worklowData.passworChangeId = passworChangeId
        this.worklowData.correlationId = correlationId
        this.worklowData.verificationId = result.verificationId
        this.worklowData.verification = result.verification

        return result
    }
    async submit(api: ApiClient, newPassword: String) {
        if (!this.workflowStarted) return false
        let actionId = generateCorrelationId()
        let result = (await passwordChangeSubmit(api, this.worklowData.passworChangeId, newPassword, this.worklowData.correlationId, actionId)).data

        if (result.passwordChangedAt) {
            this.flush()
            return result.passwordChangedAt
        }

        return false
    }

    flush() {
        this.worklowData = {}
    }
}

let passwordChangeWorkflow = new PasswordChangeWorkflow()

export default passwordChangeWorkflow;
