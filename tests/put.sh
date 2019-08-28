curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 5, "datetime_recorded": "2019-08-28", "commissioner_name": "api_test_name1", "commissioner_email": "commissioner1@gmail.com", "commissioner_phone": "8329515411", "street_address": "123 example st.", "address_city": "Napa", "address_state_abbr": "CA", "address_zip": "94558", "commission_details": "details", "price": 13.00, "amt_paid": 13.00, "completed": true, "created_at": "2019-08-28", "updated_at": "2019-08-28", "user_id": 1, "event_id": 1}'
  http://localhost:3000/api/commissions/5

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 4, "name": "api_test_type2", "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/product_types/4

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 5, "name": "api_test_series2", "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/product_series/5

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 3, "name": "API Test Event - EDITED!", "start_date": "2019-08-30", "end_date": "2019-09-01", "city": "Napa", "state_abbr": "CA", "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/events/3

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 4, "description": "Booth cost2", "cost": 225.00, "datetime_recorded": "2019-08-28", "created_at": "2019-08-28", "updated_at": "2019-08-28", "user_id": 1, "event_id": 1}' \
  http://localhost:3000/api/expenses/4

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 5, "name": "API Test Product - EDITED", "sku": null, "gb_image_link": null, "keywords": null, "stock": 4, "price": 2.00, "local_image_link": null, "created_at": "2019-08-28", "updated_at": "2019-08-28", "product_type_id": 1, "product_series_id": 1}' \
  http://localhost:3000/api/products/5

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 6, "date": "2019-08-28", "discount": 20.00, "notes": null, "created_at": "2019-08-28", "updated_at": "2019-08-28", "user_id": 1, "event_id": 1}' \
  http://localhost:3000/api/sales/6

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 8, "num_sold": 3, "sale_price": 2.00, "created_at": "2018-08-28", "updated_at": "2019-08-28", "product_id": 1, "sale_id": 1}' \
  http://localhost:3000/api/sale_line_items/8

curl \
  --header "Content-type: application/json" \
  --request PUT \
  --data '{"id": 3, "first_name": "api_test_EDITED", "last_name": "api_test2", "username": "api_test", "password_hash": null, "last_seen": null, "token": null, "token_expiration": null, "created_at": "2019-08-28", "updated_at": "2019-08-28"}' \
  http://localhost:3000/api/users/3