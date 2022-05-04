import React, { Component } from 'react'
//read imageUrl syntax
class NewsItem extends Component {
	render() {

		let { title, description, imageUrl, newsUrl, author, date } = this.props;
		return (
			<div className="my-3">
				<div className="card">
					<img src={!imageUrl ? "https://c.ndtvimg.com/2022-01/3mckphk_india-coronavirusafp_625x300_29_January_22.jpg" : imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {date}</small></p>
						<a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-info">Read More</a>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsItem
