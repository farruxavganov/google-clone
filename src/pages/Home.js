import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from '../commponents/search';
import Footer from '../commponents/footer';
import {Link} from 'react-router-dom';
import logo from '../asset/googlelogo.png';
import './home.css';

export default function Home() {
	return (
		<div className="home">
			<div className="home__header">
				<div className="home__headerRight">
					<nav className="home__nav">
						<ul className="home__lists">
							<li className="home__list">
								<Link className="home__link">Gmail</Link>
							</li>
							<li className="home__list">
								<Link className="home__link">Images</Link>
							</li>
						</ul>
						<ul className="home__lists home__lists-right">
							<li className="home__list">
								<Link className="home__link">
									<AppsIcon />
								</Link>
							</li>
							<li className="home__list">
								<Link className="home__link">
									<Avatar />
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="home__body">
				<div className="home__logo">
					<img src={logo} />
				</div>
				<div className="home__main">
					<Search />
				</div>
				<div className="home__footer">
					<Footer />
				</div>
			</div>
		</div>
	)
}