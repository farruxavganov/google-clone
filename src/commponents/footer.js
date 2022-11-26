import React from 'react';
import './footer.css';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__country">
				<p className="footer__text">
					O'zbekiston
				</p>
			</div>
			<div className="footer__links">
				<ul className="footer__lists">
					<li className="footer__list">
						<a href="#">Google haqida</a>
					</li>
					<li className="footer__list">
						<a href="#">Rekalma</a>
					</li>
					<li className="footer__list">
						<a href="#">Biznes</a>
					</li>
					<li className="footer__list">
						<a href="#">Qidiruv qanday ishlaydi?</a>
					</li>
				</ul>
				<ul className="footer__lists">
					<li className="footer__list">
						<a href="#">Maxfiylik</a>
					</li>
					<li className="footer__list">
						<a href="#">Sharxlar</a>
					</li>
					<li className="footer__list">
						<a href="#">Sozlamalar</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}