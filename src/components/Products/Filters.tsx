function Filters() {
  return (
    <aside className="products__filters">
      <input
        type="text"
        className="products__search"
        placeholder="Search"
        name="SearchProduct"
        aria-label="Search"
        role="searchbox"
      />

      <h3>Category</h3>
      <ul>
        <li>All</li>
        <li>Office</li>
        <li>Office</li>
        <li>Office</li>
        <li>Office</li>
        <li>Office</li>
      </ul>
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
      <button>Clear Filters</button>
    </aside>
  )
}
export default Filters
