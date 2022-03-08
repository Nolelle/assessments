# MVC Code Challenge

The purpose of this challenge is to assess your coding skill in building a simple REST API end point using Express.js.  Your code will be reviewed for structure and style to see how you approach building back end APIs.

## The Problem
Create a Express.js API end point that allows the creation of a car rental record in a database.  The API user will provide the following information:
- `name`: Name of the car (eg. Civic)
- `model`: Model of the car (eg. Honda)
- `start_date`: Start date of the rental
- `end_date`: End date of the rental

When the request comes in validate that `name` and `model` are not blank and that `start_date` is less than `end_date`.  If the inputted values are valid then write a record to the database.  You can use Postgres or Mysql (docker containers are included).

The API should work as follows:

### Successful Request
POST /api/v1/rentals

Request body:
```
{
  "name": "Civic",
  "model": "Honda",
  "start_date": "2019-11-01",
  "end_date": "2019-11-05"
}
```

Response (Status code 200)
```
{
  "id": 1,
  "name": "Civic",
  "model": "Honda",
  "start_date": "2019-11-01",
  "end_date": "2019-11-05"
}
```

### Invalid Request
POST /api/v1/rentals

Request body:
```
{
  "name": "Civic",
  "model": "Honda",
  "start_date": "2020-01-01",
  "end_date": "2010-01-01"
}
```

Response (Status code 422)
```
{
  "error": "Start date must not be greater than the end date"
}
```



