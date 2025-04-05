// import { HttpInterceptorFn } from '@angular/common/http';

// export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

//     const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWlrYSIsInVzZXJuYW1lIjoibWlrYTAwIiwicGFzc3dvcmQiOiI3Zjc3MzdmZGRkMjg0MmJjMmFmZGJmMTg2OGFhYThlOTg2YjgzMTMzYTFmMDEwZmU5NjUzNWMxNWU0NTg0NjI4IiwiY3JlYXRlZEF0IjoiMjAyNS0wMy0zMVQyMToyOToyMC44MTRaIiwiZm9sbG93aW5nIjpbXSwiaWQiOiI2N2ViMDkzMGE3YWNkY2ZhMDAzZDhlYzAiLCJpYXQiOjE3NDM0OTI4MzN9.7coWi3n8awIoRUEimZSZZQpRPYKAwrBapsa9NOTPCZg'

//     const reqWithJwt = req.clone({
//         headers: req.headers.set('Authorization', `Bearer ${jwt}`)
//     }) 

//     return next(reqWithJwt);
// };
