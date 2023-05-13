import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeCharacter = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearch = searchInp => {
    this.setState({searchInput: searchInp})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt=" google logo"
        />
        <div className="container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searchIcen"
              alt="search icon"
            />
            <input
              type="search"
              className="inputElement"
              placeholder="Search Google"
              onChange={this.onChangeCharacter}
              value={searchInput}
            />
          </div>
          <ul className="conts">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggested={eachItem}
                searchIn={this.searchInput}
                getSearch={this.getSearch}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
