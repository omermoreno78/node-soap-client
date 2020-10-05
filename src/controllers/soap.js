const soap = require('soap');
const soapController = {};

soapController.test = async (req, res) => {
	console.log("-- (Controller) soapController.test() - req.body: ", req.body);

	// Based on: https://www.brcline.com/blog/how-to-perform-soap-requests-with-node-js

	const wsdlUrl = 'http://www.chemspider.com/MassSpecAPI.asmx?WSDL';

	// Passing in overridePromiseSuffix because some of the endpoints end with "Async" which breaks promisify.
	soap.createClientAsync(wsdlUrl, {
		overridePromiseSuffix: 'Promise'
	}).then(client => {
		client.GetDatabasesPromise({}).then(response => {
			// Results is an array with only one item which then has an array called "string":
			const databases = response[0].GetDatabasesResult.string;

			console.log("-- (Controller) soapController.test() - databases: ", databases);

			res.json({
				status: 'success',
				data: databases
			});
		});
	});
};

module.exports = soapController;