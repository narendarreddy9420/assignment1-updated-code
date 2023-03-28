const BrowserHistoryItems = props => {
  const {eachDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachDetails

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={onDelete} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItems
