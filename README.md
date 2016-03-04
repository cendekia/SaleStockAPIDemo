# SaleStockAPIDemo

## Assessment points

* REST API routing design → 5 points
* Application modelling and abstraction skill → 5 points
* Quality assessment with functional API test (optional) → 3 points
* Deployment to cloud infrastructure (optional) → 3 points

## Case study

* Product and Category management with hierarchical tree data for Category
* Product Shopping cart supporting: add, remove item to cart, support for discount coupon and total purchase amount

---

## TODO:

### Case 1:

Make tables needed: (i will try to clone from salestock.id)

  * Categories table
    - name

  * Sub Categories table
    - name
    - category_id

  * Attributes table
    - name

  * Attribute Details table
    - name
    - attribute_id

  * Products table
    - name
    - price
    - description

  * Product Categories
    - product_id
    - category_id
    - sub_category_id : nullable

  * Product Attributes
    - product_id
    - attribute_detail_id


