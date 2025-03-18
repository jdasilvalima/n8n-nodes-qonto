import type { INodeProperties } from 'n8n-workflow';

export const externalTransferOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'get',
    options: [
      {
        name: 'Get',
        value: 'get',
        description: 'Get an external transfer',
        action: 'Get a external transfer',
      },
    ],
    displayOptions: {
      show: {
        resource: ['externalTransfer'],
      },
    },
  },
];