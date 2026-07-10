import React from 'react'

const Footer = () => {
  return (
    <section classname="categories" id="categories">
  <div classname="container">
    <div classname="section-head">
      <h2>Pick a category</h2>
      <span classname="count" id="category-count">
        3 categories
      </span>
    </div>
    <div classname="row" id="category-grid">
      {"{"}/* Static dummy data — becomes{" "}
      <categorygrid categories="{categories}">
        {" "}
        mapping
        <categorycard category="{cat}">
          {" "}
          in React. Shape matches TheMealDB's response: const categories = [
          {"{"} idCategory: "1", strCategory: "Beef", strCategoryThumb: "...",
          strCategoryDescription: "..." {"}"},{"{"} idCategory: "3",
          strCategory: "Dessert", strCategoryThumb: "...",
          strCategoryDescription: "..." {"}"},{"{"} idCategory: "8",
          strCategory: "Seafood", strCategoryThumb: "...",
          strCategoryDescription: "..." {"}"}, ]; */{"}"}
          <div classname="col-12 col-sm-6 col-lg-4 card-col">
            <article classname="recipe-card">
              <span classname="pin" aria-hidden="true">
                <div classname="recipe-thumb-wrap">
                  <img
                    classname="recipe-thumb"
                    src="https://www.themealdb.com/images/category/beef.png"
                    alt="Beef"
                    loading="lazy"
                  />
                </div>
                <div classname="recipe-body">
                  <div classname="recipe-id">CAT. 01</div>
                  <h3 classname="recipe-title">Beef</h3>
                  <p classname="recipe-desc">
                    Beef is the culinary name for meat from cattle, prized for
                    its high-quality protein and essential nutrients.
                  </p>
                  <a href="#" classname="recipe-link" data-category="Beef">
                    View recipes <span classname="arrow">→</span>
                  </a>
                </div>
              </span>
            </article>
          </div>
          <div classname="col-12 col-sm-6 col-lg-4 card-col">
            <article classname="recipe-card">
              <span classname="pin" aria-hidden="true">
                <div classname="recipe-thumb-wrap">
                  <img
                    classname="recipe-thumb"
                    src="https://www.themealdb.com/images/category/dessert.png"
                    alt="Dessert"
                    loading="lazy"
                  />
                </div>
                <div classname="recipe-body">
                  <div classname="recipe-id">CAT. 03</div>
                  <h3 classname="recipe-title">Dessert</h3>
                  <p classname="recipe-desc">
                    Dessert is a course that concludes a meal, often built from
                    ingredients that are more commonly savory.
                  </p>
                  <a href="#" classname="recipe-link" data-category="Dessert">
                    View recipes <span classname="arrow">→</span>
                  </a>
                </div>
              </span>
            </article>
          </div>
          <div classname="col-12 col-sm-6 col-lg-4 card-col">
            <article classname="recipe-card">
              <span classname="pin" aria-hidden="true">
                <div classname="recipe-thumb-wrap">
                  <img
                    classname="recipe-thumb"
                    src="https://www.themealdb.com/images/category/seafood.png"
                    alt="Seafood"
                    loading="lazy"
                  />
                </div>
                <div classname="recipe-body">
                  <div classname="recipe-id">CAT. 08</div>
                  <h3 classname="recipe-title">Seafood</h3>
                  <p classname="recipe-desc">
                    Seafood is any form of sea life regarded as food, from fish
                    to shellfish, prized worldwide.
                  </p>
                  <a href="#" classname="recipe-link" data-category="Seafood">
                    View recipes <span classname="arrow">→</span>
                  </a>
                </div>
              </span>
            </article>
          </div>
        </categorycard>
      </categorygrid>
    </div>
  </div>
</section>

  )
}

export default Footer