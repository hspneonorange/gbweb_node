curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "name": "API Test Event!", "start_date": "2019-08-30", "end_date": "2019-09-01", "city": "Napa", "state_abbr": "CA", "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/events

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "first_name": "api_test", "last_name": "api_test2", "username": "api_test", "password_hash": "123456", "last_seen": "2019-08-28", "token": "123456", "token_expiration": "2019-09-10", "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/users

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "name": "api_test_type1", "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/product_types

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "name": "api_test_series1", "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/product_series

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "name": "API Test Product", "sku": null, "gb_image_link": null, "keywords": "keyword", "stock": 4, "price": 2.00, "local_image_link": null, "created_at": "2019-08-28", "updated_at": "2019-08-28", "product_type_id": 1, "product_series_id": 1}' \
  http://localhost:3000/api/products

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "datetime_recorded": "2019-08-28", "commissioner_name": "api_test_name1", "commissioner_email": "commissioner1@gmail.com", "commissioner_phone": null, "street_address": "123 example st.", "address_city": "Napa", "address_state_abbr": "CA", "address_zip": "94558", "commission_details": "details", "price": 13.00, "amt_paid": 13.00, "completed": true, "created_at": "2019-08-28", "updated_at": "2019-08-28", "user_id": 1, "event_id": 1}' \
  http://localhost:3000/api/commissions

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "description": "Booth cost", "cost": 225.00, "datetime_recorded": "2019-08-28", "created_at": "2019-08-28", "updated_at": "2019-08-28", "user_id": 1, "event_id": 1}' \
  http://localhost:3000/api/expenses


curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "date": "2019-08-28", "discount": 0.00, "notes": null, "created_at": "2019-08-28", "updated_at": "2019-08-28", "user_id": 1, "event_id": 1}' \
  http://localhost:3000/api/sales

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"id": 1, "num_sold": 1, "sale_price": 2.00, "created_at": "2018-08-28", "updated_at": "2019-08-28", "product_id": 1, "sale_id": 1}' \
  http://localhost:3000/api/sale_line_items