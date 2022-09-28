const baseUrl = 'https://apps-dev.capcenter.com';

export async function getRates() {
	const url = `${baseUrl}/QuoteService/api/Quote/Rates?`;
	const queryString = 'CountyID=123&LoanPurposeID=2&LoanProgramID=0&LoanTermID=0&LoanTypeID=1&PropertyUseID=1&LoanAmountValue=320000';

	try {
		let response = await fetch(url + queryString)
		let parsedResponse = await response.json();
		let ratesData = parsedResponse;

		return ratesData;
	} catch (err) {
		console.log('Unexpected database error while retrieving rates: ' + err);

		return false;
	}
}