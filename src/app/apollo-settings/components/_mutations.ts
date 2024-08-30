import {gql} from "@apollo/client";

export const UPDATE_USER_MUTATION = gql`
  mutation AccountUpdate ($contactName: String, $contactPhone: Msisdn, $email: String!, $birthday: Date, $gender: AccountGender) {
    accountUpdate (data: {
      contactName: {value: $contactName},
      contactPhone: {value: $contactPhone},
      email: {value: $email},
      birthday: {value: $birthday},
      gender: {value: $gender}
    }) {
      contactName
      contactPhone
      email
      birthday
      gender
    }
  }
`

export const ENABLE_SERVICE = gql`
  mutation billingNumberServiceEnable ($correlationId: ID!, $actionId: ID!, $targetMsisdn: Msisdn, $availableServiceId: ID!) {
    billingNumberServiceEnable (correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      availableServiceId: $availableServiceId
      targetMsisdn: $targetMsisdn
    }
    ) {
      correlation {
        actionId
        correlationId
      }
    }
  }
`

export const DISABLE_SERVICE = gql`
  mutation billingNumberServiceDisable ($correlationId: ID!, $actionId: ID!, $targetMsisdn: Msisdn, $enabledServiceId: ID!) {
    billingNumberServiceDisable (correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      enabledServiceId: $enabledServiceId
      targetMsisdn: $targetMsisdn
    }
    ) {
      correlation {
        actionId
        correlationId
      }
    }
  }
`

export const REQUEST_CREATE = gql`
  mutation requestCustomCreate ($correlationId: ID!, $actionId: ID!, $requestId: ID!, $subjectId: ID!, $message: String!) {
    requestCustomCreate (correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      requestId: $requestId
      subjectId: $subjectId
      message: $message
    }
    ) {
      correlation {
        actionId
        correlationId
      }
      requestId
    }
  }
`
export const SET_NUMBER_MARK = gql`
  mutation markSetNumberName($msisdn: Msisdn!, $value: String) {
    markSetNumberName (
      msisdn: $msisdn
      data: {
        value: $value
      }
    ) {
      name
    }
  }
`
export const DETAIL_BY_EMAIL = gql`
  mutation detailsOrderByEmail(
    $correlationId: ID!,
    $actionId: ID!,
    $requestId: ID!,
    $formatId: ID!,
    $email: String!,
    $targetMsisdn: Msisdn
    $year: Int!,
    $month: Int!,
  ) {
    detailsOrderByEmail(
      correlation: {
        correlationId: $correlationId
        actionId: $actionId
      }
      params: {
        requestId: $requestId
        month: {
          year: $year
          month: $month
        }
        formatId: $formatId
        email: $email
        targetMsisdn: $targetMsisdn
      }
    ) {
      requestId
    }
  }
`
export const REGISTRATION_CREATE = gql`
  mutation registrationCreate(
    $msisdn: Msisdn!,
    $correlationId: ID!,
    $actionId: ID!,
    $registrationId: ID!,
    $sim: String,
    $email: String!,
    $contactName: String!,
    $contactPhone: Msisdn
  ) {
    registrationCreate(correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      registrationId: $registrationId
      msisdn: $msisdn
      email: $email
      sim: $sim
      contactName: $contactName
      contactPhone: $contactPhone
    }
    ) {
      denyReason
    }
  }
`

export const REGISTRATION_VERIFY = gql`
  mutation registrationVerify(
    $correlationId: ID!,
    $actionId: ID!,
    $registrationId: ID!,
  ) {
    registrationVerify(correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      registrationId: $registrationId
    }
    ) {
      verificationId
      verification {
        id
        isActive
        createdAt
        deadline
        timeout
      }
    }
  }
`
export const REGISTRATION_SUBMIT = gql`
  mutation registrationSubmit(
    $correlationId: ID!,
    $actionId: ID!,
    $registrationId: ID!,
  ) {
    registrationSubmit(correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      registrationId: $registrationId
    }
    ) {
      denyReason
      passwordDeliveryType
    }
  }
`
export const VERIFITATION_SUBMIT = gql`
  mutation verificationSubmit ($correlationId: ID!, $actionId: ID!, $verificationId: ID!, $secret: String!) {
    verificationSubmit(correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      verificationId: $verificationId
      secret: $secret
    }
    ) {
      result {
        notice
        isFinal
        isSuccess
      }
      verification {
        id
        isActive
        createdAt
        deadline
        timeout
      }
    }
  }
`
export const PASSWORD_CHANGE_CREATE = gql`
  mutation passwordChangeCreate ($correlationId: ID!, $actionId: ID!, $passwordChangeId: ID!, $msisdn: Msisdn!) {
    passwordChangeCreate(correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      passwordChangeId: $passwordChangeId
      msisdn: $msisdn
    }
    ) {
      deadline
      verificationId
      verification {
        id
        isActive
        createdAt
        deadline
        timeout
      }
    }
  }
`

export const PASSWORD_CHANGE_SUBMIT = gql`
  mutation passwordChangeSubmit ($correlationId: ID!, $actionId: ID!, $passwordChangeId: ID!, $newPassword: String!) {
    passwordChangeSubmit(correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
    params: {
      passwordChangeId: $passwordChangeId
      newPassword: $newPassword
    }
    ) {
      passwordChangedAt
    }
  }
`