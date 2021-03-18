'use strict'

class SearchEmpresa {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      cnpj: 'required|string',
    }
  }
}

module.exports = SearchEmpresa
