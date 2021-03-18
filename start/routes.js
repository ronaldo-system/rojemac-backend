'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/empresa-list', 'EmpresaController.listaEmpresa');
Route.post('/empresa-find-by-id', 'EmpresaController.getEmpresaById');
Route.post('/empresa-delete', 'EmpresaController.deleteEmpresa');
Route.post('/empresa-insert', 'EmpresaController.insertEmpresa').validator('CreateEmpresa');
Route.post('/empresa-update', 'EmpresaController.updateEmpresa');
Route.post('/empresa-search', 'EmpresaController.searchEmpresa');