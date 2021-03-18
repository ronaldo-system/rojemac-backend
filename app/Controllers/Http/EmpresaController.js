'use strict'
const Empresa = use('App/Models/Empresa')
class EmpresaController {
    async listaEmpresa({request, response}) {
        const empresas = await Empresa.all()
        return response.status(200).json({
           status: 'success',
           data: empresas
       })
    }

    async insertEmpresa({request, response}){
        const data = request.post()
        const empresa = new Empresa()
        empresa.cnpj = data.cnpj
        empresa.razao = data.razao
        empresa.logradouro = data.logradouro
        empresa.numero = data.numero
        empresa.complemento = data.complemento
        empresa.municipio = data.municipio
        empresa.uf = data.uf
        empresa.cep = data.cep
        empresa.telefone = data.telefone
        empresa.email = data.email
        await empresa.save()

        return response.status(200).json({
            status: 'success',
        })
    }

    async updateEmpresa({request, response}){
        const data = request.post()
        const empresa = await Empresa.find(data.id)
        
        if(empresa !== null){
            empresa.cnpj = data.cnpj
            empresa.razao = data.razao
            empresa.logradouro = data.logradouro
            empresa.numero = data.numero
            empresa.complemento = data.complemento
            empresa.municipio = data.municipio
            empresa.uf = data.uf
            empresa.cep = data.cep
            empresa.telefone = data.telefone
            empresa.email = data.email
            await empresa.save()

            return response.status(200).json({
                status: 'success',
            })
        }
        return response.status(400).json({
            status: 'error',
            message: 'Empresa não localizada'
        })
    }

    async deleteEmpresa({request, response}){
        const data = request.post()
        const empresa = await Empresa.find(data.id)
        await empresa.delete()

        return response.status(200).json({
            status: 'success'
        })
        
    }

    async getEmpresaById({request, response}){
        const data = request.post()
        const empresa = await Empresa.find(data.id)
        return response.status(200).json({
            status: 'success',
            data: empresa
        })
    }

    async searchEmpresa({request, response}){
        const data = request.post()
        const result = await Empresa
            .query()
            .where('cnpj', 'ilike', '%' + data.term  + '%')
            .orWhere('razao', 'ilike', '%' + data.term + '%') 
            .fetch()
        return response.status(200).json({
            status: 'success',
            data: result
        })
    }
}

module.exports = EmpresaController
