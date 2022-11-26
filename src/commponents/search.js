import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {actionType} from '../store/reducer';
import {useStateConsumer} from '../store/StateProvider';
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import './search.css';

export default function Search({hiddinButton}) {
	const [{trim}, dispatch] = useStateConsumer();
	const [input, setInput] = useState('');
	const history = useNavigate();
	const submit = (e)=> {
		e.preventDefault();
		dispatch({
			type: actionType.SET_SEARCH_TRIM,
			trim: input
		})
		history("/search")
	}
	useEffect(()=>{
		if(trim == null || trim == undefined) {
			setInput(input)
		}else {
			setInput(trim)
		}
	},[trim])
	return (
		<div className="search">
			{
				!hiddinButton ? (
					<form onSubmit={submit} className="search__form">
						<div className="search__container">
							<SearchIcon />
							<input onChange={(e)=>{
								setInput(e.target.value)
							}} type="text" name="q" 
							value={input}
							/>
							<MicIcon />
						</div>
						<div className="search__buttons">
							<Button type="Submit">Google search</Button>
							<Button>Try with google</Button>
						</div>
					</form>
				) : (
					<form onSubmit={submit} className="search__form">
						<div className="search__container">
							<SearchIcon />
							<input onChange={(e)=>{
								setInput(e.target.value)
							}} type="text" name="q" 
							value={input}
							/>
							<MicIcon />
						</div>
						<div className="search__buttons search__buttons-hiddin">
							<Button type="Submit">Google search</Button>
							<Button>Try with google</Button>
						</div>
					</form>
				)
			}
		</div>
	)
}