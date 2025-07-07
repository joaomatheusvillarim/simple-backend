# simple-backend

This project is a simple backend in which you can do the CRUD operations with the user entity.

### technologies used:
| Type                 | Used       |
|----------------------|------------|
| Programming language | TypeScript |
| Web framework        | Express    |
| Database             | PostgreSQL |
| Documentation        | Swagger    |
| Other                | Sequelize  |

## first steps
1. Install dependencies
```
npm install
```

2. Set up database
```
psql -U postgres -h localhost

CREATE DATABASE <database-name>;
```

3. Set up .env  
Create an .env file with the same fields as in [.env.template](.env.template). Make sure "DB_NAME" is the same as the database created in the previous step
```
DB_DIALECT=
DB_HOST=
DB_PORT=
DB_USER=
DB_NAME=
DB_PASS=
JWT_SECRET=
```

4. Run
```
npm run dev
```
you can access swagger-ui in http://localhost:3000/api-docs/

## curl commands

1. create user
```
curl -X POST "http://localhost:3000" \
-H "Content-Type: application/json" \
-d '{"name": "João Matheus", "email": "joaomatheus@gmail.com", "password": "12345678Jm!"}'
```

2. login
```
curl -X POST "http://localhost:3000/login" \
-H "Content-Type: application/json" \
-d '{"email": "joaomatheus@gmail.com", "password": "12345678Jm!"}'
```
copy the token in the response for auth

3. recover user
```
curl -X GET "http://localhost:3000/users/1" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <token>"
```

4. recover all users
```
curl -X GET "http://localhost:3000/users" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <token>"
```

5. update user
```
curl -X PU "http://localhost:3000/users/1" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <token>" \
-d '{"name": "João Matheus Villarim"}'
```

6. delete user
```
curl -X DELETE "http://localhost:3000/users/1" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <token>"
```