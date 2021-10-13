/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
*/

import Route from '@ioc:Adonis/Core/Route'

Route.resource('profiles','ProfilesController');
Route.resource('users','UsersController');
Route.resource('projects','ProjectsController')

Route.on("/").render("welcome")

Route.get('/about', async () => {
  return 'This is the about page'
})
Route.get('/contact', async () => {
  return 'This is the contact page'
})

Route.get('/posts/:id', async ({ params }) => {
  return `You are viewing a blog post with id ${params.id}`
})
