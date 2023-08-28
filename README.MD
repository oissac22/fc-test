# BACKEND

# login

- send the key property in headers with the login token
- the every time interval, a property arrive in headers with the name newtoken, the new token should replacing the before
- the every time interval, a property arrive in headers with the name x-access-key, the new token should replacing the before

# urls from login

- POST /api/v1/login
  - login
- GET /api/v1/login/refresh
  - refresh and return new token if necessary, 
- GET /api/v1/login
  - login data and verify
- DELETE /api/v1/login
  - delete login
- DELETE /api/v1/login/every
  - delete every login from the logged user

# urls from users

- GET /api/v1/users
- GET /api/v1/users/:id
- POST /api/v1/users
- PUT /api/v1/users/:id
- DELETE /api/v1/users/:id