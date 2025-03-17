import type { INodeProperties } from 'n8n-workflow';

export const transactionOperations: INodeProperties[] = [
  {
    displayName: 'Transaction',
    name: 'transaction',
    type: 'options',
    noDataExpression: true,
    default: 'get',
    options: [
      {
        name: 'Get',
        value: 'get',
        description: 'Get a transaction',
        action: 'Get a transaction',
      },
    ],
    displayOptions: {
      show: {
        resource: ['transaction'],
      },
    },
  },
];