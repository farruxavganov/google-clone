import React from 'react';
import {Link} from 'react-router-dom';
import useGoogleSearch from '../useGoogleSearch';
import {useStateConsumer} from "../store/StateProvider";
import Search from '../commponents/search';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
// import data from '../../mockData';
import logo from '../asset/googlelogo.png';
import './searchPage.css';

export default function SearchPage() {
	const [{trim} ,dispatch] = useStateConsumer();
	const {data} = useGoogleSearch(trim);

	return (
		<div className="searchPage">
			<header className="searchPage__header">
				<div className="searchPage__headerMain">
					<Link to="/">
						<img src={logo} alt="google logo" />
					</Link>
					<Search hiddinButton/>
				</div>
				<div className="searchPage__headerBody">
					<div className="searchPage__headerContainer">
						<ul className="searchPage__headerLists">
							<li className="searchPage__headerList">
								<Link to="all" className="searchPage__headerLink searchPage__headerLink--active">
									<SearchIcon />
									All
								</Link>
							</li>
							<li className="searchPage__headerList">
								<Link to="videos" className="searchPage__headerLink">
									<OndemandVideoIcon />
									Videos
								</Link>
							</li>
							<li className="searchPage__headerList">
								<Link to="all" className="searchPage__headerLink">
									<CropOriginalIcon />
									Images
								</Link>
							</li>
							<li className="searchPage__headerList">
								<button className="searchPage__headerLink">
									<MoreVertIcon />
									More
								</button>
								<div className="searchPage__popap">
									<Link to="books" className="searchPage__headerLink searchPage__headerLink--popap">
										Books
									</Link>
									<Link to="statistcs" className="searchPage__headerLink searchPage__headerLink--popap">
										Statistcs
									</Link>
								</div>
							</li>
						</ul>
						<ul className="searchPage__headerLists">
							<li className="searchPage__headerList">
								<Button>Tools</Button>
							</li>
							<li className="searchPage__headerList">
								<Button>Tools</Button>
							</li>
						</ul>
					</div>
				</div>
			</header>
			{
				Array.isArray(data?.items) && (
					<div className="searchPage__results">
						<p className="searchPage__resultsCount">
							About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} Seconds)
							for {trim}
						</p>
						{
							data?.items.map(item => (
								<div key={item.link} className="searchPage__result">
									<a href={item?.displayLink} className="searchPage__resultLink">{item?.pagemap?.cse_image?.length > 0 && item?.pagemap?.cse_image[0]?.src && item?.pagemap?.cse_thumbnail && (
										<img src={
											item?.pagemap?.cse_image?.length > 0 && item?.pagemap?.cse_thumbnail[0].src
										} alt="image"/>
									)} {item?.displayLink}</a>
									<a href={item?.link} className="searchPage__resultTitle"><h2>{item?.title}</h2></a>
									<p className="searchPage__resultText">{item?.snippet}</p>
								</div>
							))
						}
					</div>
				)
			}
		</div>
	)
}