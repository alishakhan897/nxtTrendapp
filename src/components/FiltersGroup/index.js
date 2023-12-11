import './index.css'

const FiltersGroup = props => {
  const {categoryDetails, ratingList} = props

  return (
    <div className="filters-group-container">
      <h1>Category</h1>
      <ul>
        {categoryDetails.map(category => (
          <li key={category.categoryId}>
            <button type="button" className="button">
              <p>{category.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {ratingList.map(each => (
          <li>
            <img src={each.imageUrl} className="img" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
