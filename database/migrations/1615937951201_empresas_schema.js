'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresasSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.string('cnpj', 30).unique()
      table.string('razao', 255)
      table.string('logradouro', 255)
      table.string('numero', 255)
      table.string('complemento', 255).notNullable()
      table.string('municipio', 255)
      table.string('uf', 2)
      table.string('cep', 10)
      table.string('telefone', 20)
      table.string('email', 255)
      table.timestamps()
      
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresasSchema
