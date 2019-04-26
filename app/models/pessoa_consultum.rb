class PessoaConsultum < ApplicationRecord
	belongs_to :pessoa

	def self.get_negative(id)
		require 'roo'
		require 'uri'
	    require 'net/http'

	    consulta = Pessoa.find_by_id(id)
	    PessoaConsultum.where(pessoa_id: id).destroy_all
	    excel_file = Roo::Spreadsheet.open("public/system/#{consulta.excel_file_name}")


	    excel_file.each do |row|

		    uri = URI.parse("http://www.soawebservices.com.br/restservices/test-drive/serasa/pefin.ashx")
	    	header = {'Accept': 'application/json'}
	    	parameters =  {
		                    "Credenciais": {
		                      "Email": "Seu endereco de E-Mail",
		                      "Senha": "Sua Senha"
		                    },
		                    "Documento": row[2]
		                  }

		    http = Net::HTTP.new(uri.host, uri.port)
		    request = Net::HTTP::Post.new(uri.request_uri, header)
		    request.body = parameters.to_json
 
	    	response = http.request(request)
	    	puts response.body

	    	PessoaConsultum.create(pessoa_id: id, documento: '097.249.229-10',nome: 'Jose Alberto Rodrigues',nome_mae: 'Maria Dias Rodrigues',nascimento:'07/04/1996', fundacao:'', situacao_rfb:'', descricao_rfb:'', data_situacao:'', ocorrencias: 2, valor_total:'5.000', pend_inter:0, pend_int_obs:'nao', pend_fin: 1, pend_fin_obs:'Sim', pend_bacen:0, pend_bacen_obs:'nao')

	    	# PessoaConsultum.create(pessoa_id: id, 
	    	# 						documento: response[:SinteseCadastral][:Documento],
	    	# 						nome: response[:SinteseCadastral][:Nome], 
	    	# 						situacao_rfb: response[:SinteseCadastral][:SituacaoRFB], 
	    	# 						descricao_rfb: response[:SinteseCadastral][:SituacaoDescricaoRFB], 
	    	# 						# data_situacao:'', 
	    	# 						ocorrencias: response[:TotalOcorrencias], 
	    	# 						# valor_total:'5.000', 
	    	# 						pend_inter: response[:PendenciasInternas][:TotalOcorrencias], 
	    	# 						pend_int_obs: response[:PendenciasInternas][:Mensagem], 
	    	# 						pend_fin: response[:PendenciasFinanceiras][:TotalOcorrencias], 
	    	# 						pend_fin_obs: response[:PendenciasFinanceiras][:TotalOcorrencias], 
	    	# 						pend_bacen: response[:PendenciasBacen][:TotalOcorrencias], 
	    	# 						pend_bacen_obs: response[:PendenciasBacen][:TotalOcorrencias])
		end    
	end
    
end
