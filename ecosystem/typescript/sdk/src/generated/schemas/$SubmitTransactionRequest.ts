/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SubmitTransactionRequest = {
    description: `A request to submit a transaction

    This requires a transaction and a signature of it`,
    properties: {
        sender: {
            type: 'all-of',
            contains: [{
                type: 'Address',
            }],
            isRequired: true,
        },
        sequence_number: {
            type: 'all-of',
            contains: [{
                type: 'U64',
            }],
            isRequired: true,
        },
        max_gas_amount: {
            type: 'all-of',
            contains: [{
                type: 'U64',
            }],
            isRequired: true,
        },
        gas_unit_price: {
            type: 'all-of',
            contains: [{
                type: 'U64',
            }],
            isRequired: true,
        },
        expiration_timestamp_secs: {
            type: 'all-of',
            contains: [{
                type: 'U64',
            }],
            isRequired: true,
        },
        payload: {
            type: 'all-of',
            contains: [{
                type: 'TransactionPayload',
            }],
            isRequired: true,
        },
        signature: {
            type: 'all-of',
            contains: [{
                type: 'TransactionSignature',
            }],
            isRequired: true,
        },
    },
} as const;
