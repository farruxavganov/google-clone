import React, {useEffect,useState} from 'react';
import API_KEY from './apiKey';

const CONTEXT_KEY = "4c8a3c6efb2e92b90";

function useGoogleSearch(trim) {
	const [data,setData] = useState(null);

	const fetchData = async () => {
		fetch(
			`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${trim}`
		)
		.then(response => {
			return response.json()
		})
		.then(result => {
			setData(result)
		})
	}

	useEffect(()=>{
		if(trim){
			fetchData(trim)
		}
	},[trim])

	return {data}
}

export default useGoogleSearch;