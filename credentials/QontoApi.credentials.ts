import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class QontoApi implements ICredentialType {
	name = 'qontoApi';
	displayName = 'Qonto API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://api-doc.qonto.com/docs/business-api/eobfqiiz8imbv-api-key';
	properties: INodeProperties[] = [
		{
			displayName: 'Qonto secret API key',
			name: 'secretKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
    {
			displayName: 'Qonto login',
			name: 'login',
			type: 'string',
			typeOptions: { password: false },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				'api_key': '={{$credentials.login}}:{{$credentials.secretKey}}'
			}
		},
	};
}