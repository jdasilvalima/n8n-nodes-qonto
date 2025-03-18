import { INodeType, INodeTypeDescription } from 'n8n-workflow';

import {
	clientOperations,
  transactionOperations,
  beneficiaryOperations,
  clientInvoiceOperations,
  externalTransferOperations,
} from './descriptions';

export class Qonto implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Qonto',
    name: 'qonto',
    icon: 'file:qonto.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Read, update, write and delete data from Qonto API',
    defaults: {
      name: 'Qonto',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'QontoApi',
        required: true,
      },
    ],
    requestDefaults: {
      baseURL: 'https://thirdparty-sandbox.staging.qonto.co',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
		properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          {
            name: 'Beneficiary',
            value: 'beneficiary',
          },
          {
            name: 'Client',
            value: 'client',
          },
          {
            name: 'Client Invoice',
            value: 'clientInvoice',
          },
          {
            name: 'External Transfer',
            value: 'externalTransfer',
          },
          {
            name: 'Transaction',
            value: 'transaction',
          },
        ],
        default: 'client',
      },
      ...clientOperations,
      ...transactionOperations,
      ...beneficiaryOperations,
      ...clientInvoiceOperations,
      ...externalTransferOperations,
		]
	};
}