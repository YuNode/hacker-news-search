import React from 'react';
import logoSearch from './logo-search.png';
import algolia from './algolia.svg';

class BarraPrincipal extends React.Component{
	
	render(){
		return(
		<div className="barraPrincipal">
				<img className="logoSearch" src={logoSearch}/>
				<p className="searchBarTitle">Las Noticias de Alex</p>
				<div className="searchBar">
					<i className="fa fa-search iBusqueda"></i>
					<input type="text" className="searchBarInput" placeholder="Search stories by title, url or author"
						onChange={(e) => this.props.handleChangeSearchBar(e.target.value)}
					/>
				</div>
				
				<p className="pAfterSearchBar">by</p>
				<img className="logoAfterSearch" src={algolia}/>
			</div>
		);
	}
	
}

export default BarraPrincipal;