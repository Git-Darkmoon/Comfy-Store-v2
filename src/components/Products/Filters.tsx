const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  console.log(Object.fromEntries(formData.entries()))
}

function Filters() {
  return (
    <aside className="products__filters">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="products__search"
          placeholder="Search"
          name="SearchProduct"
          aria-label="Search"
          role="searchbox"
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="products__categorySelector products__select"
        >
          <option value="all">All</option>
          <option value="tables">Tables</option>
          <option value="chairs">Chairs</option>
          <option value="kids">Kids</option>
          <option value="sofas">Sofas</option>
          <option value="beds">Beds</option>
        </select>
        <label htmlFor="company">Company</label>
        <select
          id="company"
          name=""
          className="products__companySelector products__select"
        >
          <option value="all">All</option>
          <option value="all">All</option>
          <option value="all">All</option>
          <option value="all">All</option>
          <option value="all">All</option>
        </select>
        <label htmlFor="sort">Sort By</label>
        <select
          name=""
          id="sort"
          className="products__companySelector products__select"
        >
          <option value="all">A-Z</option>
          <option value="all">Z-A</option>
          <option value="all">high</option>
          <option value="all">low</option>
        </select>
        <label htmlFor="">Price</label>
        <input type="range" min={0} max={4000} />
        <label htmlFor="freeShipping">Free Shipping</label>
        <input type="checkbox" name="freeShipping" id="freeShipping" />
        <button className="products__searchBtn products__btn">Search</button>
        <button className="products__clearBtn products__btn">
          Clear Filters
        </button>
      </form>
    </aside>
  )
}
export default Filters
