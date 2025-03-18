import type { INodeProperties } from 'n8n-workflow';

export const clientInvoiceOperations: INodeProperties[] = [
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
        description: 'Get a client invoice',
        action: 'Get a client invoice',
      },
    ],
    displayOptions: {
      show: {
        resource: ['clientInvoice'],
      },
    },
  },
];