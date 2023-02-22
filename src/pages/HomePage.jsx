import React from "react";
import "../styles/HomePage.css";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
	return (
		<div>
			<div className='content_homepage'>
				<div className='title-home'>
					<h3>
						<strong>Chaika Store.</strong>The best way to buy chaikas you love.
					</h3>
				</div>

				<div className='desc-right'>
					<div className='find_answer'>
						<p className='desc-right-ask'>Need a shopping help?</p>
						<a className='desc-right-answer' href='https://t.me/Daana1902'>
							Ask a specialist
						</a>
					</div>
					<div className='find-store'>
						<p className='desc-right-ask'>Visit offline store</p>
						<a className='desc-right-answer' href='https://2gis.kg/bishkek'>
							Find one near you
						</a>
					</div>
				</div>
			</div>
			<div className='title_carousel_block'>
				<h3 style={{ fontSize: "25px", marginBottom: "5px" }}>
					<strong>Special stores. </strong>Exclusive savings for businesses, school, and more.
				</h3>
			</div>
			<div style={{ width: "100%", marginTop: "60px" }} className='d-flex justify-content-center '>
				<Carousel style={{ width: "75%" }}>
					<Carousel.Item>
						<img className='d-block w-100' src='https://cdn.download.ams.birds.cornell.edu/api/v1/asset/140481081/900' alt='First slide' />
						<Carousel.Caption>
							<h3>Education</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src='https://cdn.download.ams.birds.cornell.edu/api/v1/asset/512909271/1800' alt='Second slide' />

						<Carousel.Caption>
							<h3>Bussiness</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='Third slide' />

						<Carousel.Caption>
							<h3>Entertaiment</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className='footer'>
				<div className='content_footer'>
					<p>Copyright © 2023 CHAIKA Inc. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
