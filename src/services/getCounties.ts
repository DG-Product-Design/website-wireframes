export interface CountiesApiParams {
	CountyId: number,
	CountyName: string,
	State: string,
	AmountLimit: number,
	FHALimit: number,
	IsRealtyApplied: boolean,
	region: string,
	regionId: number
}

const baseUrl = 'https://apps-dev.capcenter.com';


export async function getCounties(): Promise<any> {
	const url = `${baseUrl}/QuoteService/api/Counties`;

	try {
		//Get Counties (counties in our service area) from our system of record (Clac DB in Azure SQL Instance for now)
		const response = await fetch(url);
		const counties = await response.json();

		return counties;
	}
	catch (error) {
		console.error('Error: Cannot get counties from QuoteService API', error);
		return false;
	}
}

export async function getRealtyCountiesandStates() {
	const countiesListUnfiltered = await getCounties();
	if(countiesListUnfiltered === false)
		return false;

	const filteredCountiesList = countiesListUnfiltered.filter((object: CountiesApiParams) => object.IsRealtyApplied === true);

	return {countiesWithRealty: filteredCountiesList};
}