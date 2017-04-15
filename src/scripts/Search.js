import React from 'react';

import Card from './Card';

class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        let team = this.props.searchResults;
        const searchText = this.props.searchText;

        return (
            <div className="searchArea">
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="searchText" placeholder="e.g. HTML" value={this.props.searchText} onChange={this.props.handleChange}/>
                    <button type="submit" hidden>search</button>
                </form>
                {
                    team
                    .map((member, i) => <Card key={`employee${i}`} details={member} tagClass={this.props.tags}/>)
                }
            </div>
        )
    }
}

export default Search;