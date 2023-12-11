import {BsFilterRight} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'

import './index.css'

const ProductsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const inputChange = event => {
    const {Changeinput} = props
    Changeinput(event.target.value)
  }

  const {sortbyOptions, activeOptionId} = props

  return (
    <div className="products-header">
      <div className="input">
        <div>
          <input
            type="search"
            className="input-div"
            placeholder="Search"
            onChange={inputChange}
            value={inputChange}
          />
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
      <div className="head-list">
        <h1 className="products-list-heading">All Products</h1>
        <div className="sort-by-container">
          <BsFilterRight className="sort-by-icon" />
          <p className="sort-by">Sort by</p>
          <select
            className="sort-by-select"
            value={activeOptionId}
            onChange={onChangeSortby}
          >
            {sortbyOptions.map(eachOption => (
              <option
                key={eachOption.optionId}
                value={eachOption.optionId}
                className="select-option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductsHeader
