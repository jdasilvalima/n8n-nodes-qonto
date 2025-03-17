import { INodeType, INodeTypeDescription } from 'n8n-workflow';

import {
	clientOperations,
  transactionOperations,
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
            name: 'Client',
            value: 'client',
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
		]
	};
}