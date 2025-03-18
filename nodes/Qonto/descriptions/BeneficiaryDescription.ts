import type { INodeProperties } from 'n8n-workflow';

export const beneficiaryOperations: INodeProperties[] = [
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
        description: 'Get a beneficiary',
        action: 'Get a beneficiary',
      },
    ],
    displayOptions: {
      show: {
        resource: ['beneficiary'],
      },
    },
  },
];