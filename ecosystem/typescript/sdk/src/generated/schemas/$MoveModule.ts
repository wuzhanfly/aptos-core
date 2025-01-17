/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MoveModule = {
    description: `A Move module`,
    properties: {
        address: {
            type: 'all-of',
            contains: [{
                type: 'Address',
            }],
            isRequired: true,
        },
        name: {
            type: 'all-of',
            contains: [{
                type: 'IdentifierWrapper',
            }],
            isRequired: true,
        },
        friends: {
            type: 'array',
            contains: {
                type: 'MoveModuleId',
            },
            isRequired: true,
        },
        exposed_functions: {
            type: 'array',
            contains: {
                type: 'MoveFunction',
            },
            isRequired: true,
        },
        structs: {
            type: 'array',
            contains: {
                type: 'MoveStruct',
            },
            isRequired: true,
        },
    },
} as const;
