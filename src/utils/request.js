const fetchRequest = async ( API_ENDPOINT ) => (await fetch(API_ENDPOINT)).json()

export default fetchRequest
