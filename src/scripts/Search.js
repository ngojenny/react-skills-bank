import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="searchText" value={this.props.searchText} onChange={this.props.handleChange}/>
                <button type="submit">search</button>
            </form>
        )
    }
}

export default Search;