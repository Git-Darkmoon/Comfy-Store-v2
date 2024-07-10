function Filters() {
  return (
    <aside className="products__filters">
      <input
        type="search"
        className="products__search"
        placeholder="Search"
        name="SearchProduct"
        aria-label="Search"
        role="searchbox"
      />

      <h3>Category</h3>
      <select name="category" className="products__categorySelector">
        <option value="all">All</option>
        <option value="tables">Tables</option>
        <option value="chairs">Chairs</option>
        <option value="kids">Kids</option>
        <option value="sofas">Sofas</option>
        <option value="beds">Beds</option>
      </select>
      <h3>Company</h3>
      <select name="" className="products__companySelector">
        <option value="all">All</option>
        <option value="all">All</option>
        <option value="all">All</option>
        <option value="all">All</option>
        <option value="all">All</option>
      </select>
      <h3>Colors</h3>
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>All</button>
        </li>
      </ul>
      <h3>Price</h3>
      <input type="range" min={0} max={4000} />
      <br />
      <label htmlFor="freeShipping">Free Shipping</label>
      <input type="checkbox" name="freeShipping" id="freeShipping" />
      <br />
      <button className="products__searchBtn products__btn">Search</button>
      <button className="products__clearBtn products__btn">
        Clear Filters
      </button>
    </aside>
  )
}
export default Filters
