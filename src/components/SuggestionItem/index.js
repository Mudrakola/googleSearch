import './index.css'

const SuggestionItem = props => {
  const {suggested, getSearch} = props
  const {id, suggestion} = suggested

  const arrowClick = () => {
    getSearch(suggestion)
  }

  return (
    <li className="list-container">
      <div className="containerList">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrowImage"
          alt="arrow"
          onClick={arrowClick}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
