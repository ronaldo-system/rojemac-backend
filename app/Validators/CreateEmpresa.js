'use strict'

class CreateEmpresa {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      cnpj: 'required|string|unique:empresas,cnpj',
      razao: 'required|string|max:255',
      logradouro: 'required|string|max:255',
      numero: 'required|string|max:255',
      complemento: 'string|max:255',
      municipio: 'required|string|max:255',
      uf: 'required|string|max:2|min:2',
      cep: 'required|string|max:10',
      telefone: 'required|string|max:20',
      email: 'required|email|max:255'
    }
  }
}

module.exports = CreateEmpresa
