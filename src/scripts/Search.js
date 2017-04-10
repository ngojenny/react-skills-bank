import React from 'react';

import Card from './Card';

class Search extends React.Component {
    render() {
        let team = this.props.searchResults;
        const searchText = this.props.searchText;

        

        return (
            <div className="searchArea">
                <form>
                    <input type="text" name="searchText" value={this.props.searchText} onChange={this.props.handleChange}/>
                    <button type="submit">search</button>
                </form>
                {
                    team
                    .map((member, i) => <Card key={`employee${i}`} details={member} />)
                }
            </div>
        )
    }
}

export default Search;