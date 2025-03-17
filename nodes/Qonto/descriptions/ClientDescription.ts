import type { INodeProperties } from 'n8n-workflow';

export const clientOperations: INodeProperties[] = [
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
				description: 'Get a client',
				action: 'Get a client',
			},
		],
		displayOptions: {
			show: {
				resource: ['client'],
			},
		},
	},
];