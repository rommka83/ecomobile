import {gql} from "@apollo/client";

export const GET_USER_QUERY = gql`
query getUser ($msisdn: Msisdn) {
  me {
    account {
      email
      birthday
      gender
      contactPhone
      contactName
      billingNumber (msisdn: $msisdn) {
        pricePlan {
          id
          name
          description
          monthFee
        }
        isActive
        balance
        msisdn
      }
    }
  }
}
`

export const GET_REQUESTS = gql`
{
  me {
    account {
      requestList(page: 1, pageSize: 20) {
        nodes {
          id
          resultMessage
          type {
            id
            name
          }
          status
          createdAt
          description
        }
      }
    }
  }
}
`

export const GET_SERVICES = gql`
query getServices ($msisdn: Msisdn) {
  me {
    account {
      billingNumber (msisdn: $msisdn) {
        services {
          __typename
          ...on BillingNumberServiceEnabled {
            id
            state
            serviceId
            isReadonly
            name
            description
            enabledAt
            state
            fee {
              amount
              type
            }
          }
          ...on BillingNumberServiceAvailable {
            serviceId
            name
            description
            feeToEnable
            fee {
              amount
              type
            }
          }
        }
      }
    }
  }
}
`

export const GET_DASHBOARD = gql`
    query getDashboard($msisdn: Msisdn) {
        me {
            account {
                contactPhone
                contactName
                billingNumber(msisdn: $msisdn) {
                    services {
                        ...on BillingNumberServiceEnabled {
                            id
                            state
                            serviceId
                            isReadonly
                            name
                            description
                            enabledAt
                            state
                            fee {
                                amount
                                type
                            }
                        }
                    }
                }
            }
        }
    }
`

export const GET_OPERATIONS = gql`
query getOperations ($msisdn: Msisdn) {
  me {
    account {
      billingNumber (msisdn: $msisdn) {
        balanceTopUpList(page: 1, pageSize: 20) {
          nodes {
            amount
            timestamp
            methodName
            orderId
          }
        }
      }
    }
  }
}
`

export const GET_EXPENSES = gql`
query getExpenses ($year: Int!, $month: Int!, $msisdn: Msisdn) {
  me {
    account {
      billingNumber (msisdn: $msisdn) {
        expenses {
          month (year: $year, month: $month) {
            transactionList {
              nodes {
                name
                amount
                timestamp
                type
              }
            }
          }
        }
      }
    }
  }
}
`

export const GET_REMAINS = gql`
query getRemains ($msisdn: Msisdn) {
  me {
    account {
      billingNumber (msisdn: $msisdn) {
        remains {
          simple {
            measure
            balance
            size
          }
        }
      }
    }
  }
}
`

export const GET_GROUP = gql`
{
  me {
    account {
      number {
        groups {
          balance
          numbers {
            msisdn
          }
        }
      }
    }
  }
}
`

export const GET_GROUP_FULL = gql`
{
  me {
    account {
      number {
        groups {
          balance
          numbers {
            msisdn
            balance
            pricePlan {
              name
            }
            description
            access
            isActive
            mark {
              name
            }
          }
        }
      }
    }
  }
}
`
export const GET_REQUEST_TYPES = gql`
{
  requestTypes {
    id
    name
  }
}
`

export const GET_REQUEST_SUBJECTS = gql`
{
  requestCustomSubjects {
    id
    name
  }
}
`

export const DETAILS_INFO = gql`
    query detailsInfo($msisdn: Msisdn) {
        detailsFormats {
            id
            name
        }
        me {
            account {
                billingNumber(msisdn: $msisdn) {
                    details {
                        orderAvailableMonths {
                            year
                            month
                        }
                        lastOrderInfo {
                            orderTime,
                            orderTimeout
                        }
                    }
                }
            }
        }
    }
`

export const ACCESS_STATUS = gql`
  query accessStatus ($msisdn: Msisdn!) {
    accessStatus(msisdn: $msisdn) {
      signUpDenyReason
    }
  }
`

export const REGISTRATION_TYPE = gql`
  query registrationType ($msisdn: Msisdn!) {
    registrationType(msisdn: $msisdn)
  }
`


export const PAYMENT_ACCOUNT = gql`
  query paymentAccounts($targetMsisdn: Msisdn) {
    paymentAccounts(targetMsisdn: $targetMsisdn) {
      id,
      name,
      amountMin,
      amountMax
    }
  }
`

export const PAYMENT_SBP_CREATE = gql`
  mutation paymentSBPCreate($correlationId: ID!, $actionId: ID!, $paymentId: ID!, $targetMsisdn: Msisdn, $amount: Int!) {
    paymentSBPCreate (correlation: {
      correlationId: $correlationId
      actionId: $actionId
    }
      params: {
        paymentId: $paymentId
        targetMsisdn: $targetMsisdn
        amount: $amount
      }
    ) {
      paymentId,
      payment {
        orderNumber,
        amount,
        paymentUrl
      }
    }
  }
`
export const BALANCE_TOP_UP_LIST = gql`
  query balanceTopUpList ($msisdn: Msisdn, $page: Int!, $pageSize: Int!) {
    me {
      account {
        billingNumber (msisdn: $msisdn) {
          balanceTopUpList(page: $page, pageSize: $pageSize) {
            nodes {
              amount,
              timestamp,
              methodName,
              orderId
            }
          }
        }
      }
    }
  }
`
export const RECOMMENDED_PAYMENT = gql`
  query balanceTopUpList ($msisdn: Msisdn) {
    me {
      account {
        billingNumber (msisdn: $msisdn) {
          recommendedPayment {
            amount,
            balance,
            parts {
              amount
              type
            }
          }
        }
      }
    }
  }
`
