class PessoaConsultaController < ApplicationController
  before_action :set_pessoa_consultum, only: [:show, :edit, :update, :destroy]

  def get_negative

    PessoaConsultum.get_negative(params[:id])

    redirect_to "/pessoas/#{params[:id]}"
  
  end

  # GET /pessoa_consulta
  # GET /pessoa_consulta.json
  def index
    @pessoa_consulta = PessoaConsultum.all
  end

  # GET /pessoa_consulta/1
  # GET /pessoa_consulta/1.json
  def show
  end

  # GET /pessoa_consulta/new
  def new
    @pessoa_consultum = PessoaConsultum.new
  end

  # GET /pessoa_consulta/1/edit
  def edit
  end

  # POST /pessoa_consulta
  # POST /pessoa_consulta.json
  def create
    @pessoa_consultum = PessoaConsultum.new(pessoa_consultum_params)

    respond_to do |format|
      if @pessoa_consultum.save
        format.html { redirect_to @pessoa_consultum, notice: 'Pessoa consultum was successfully created.' }
        format.json { render :show, status: :created, location: @pessoa_consultum }
      else
        format.html { render :new }
        format.json { render json: @pessoa_consultum.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pessoa_consulta/1
  # PATCH/PUT /pessoa_consulta/1.json
  def update
    respond_to do |format|
      if @pessoa_consultum.update(pessoa_consultum_params)
        format.html { redirect_to @pessoa_consultum, notice: 'Pessoa consultum was successfully updated.' }
        format.json { render :show, status: :ok, location: @pessoa_consultum }
      else
        format.html { render :edit }
        format.json { render json: @pessoa_consultum.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pessoa_consulta/1
  # DELETE /pessoa_consulta/1.json
  def destroy
    @pessoa_consultum.destroy
    respond_to do |format|
      format.html { redirect_to pessoa_consulta_url, notice: 'Pessoa consultum was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pessoa_consultum
      @pessoa_consultum = PessoaConsultum.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pessoa_consultum_params
      params.require(:pessoa_consultum).permit(:documento, :nome, :nome_mae, :nome_fantasia, :nascimento, :fundacao, :situacao_rfb, :descricao_rfb, :data_situacao, :ocorrencias, :valor_total, :pend_inter, :pend_int_obs, :pend_fin, :pend_fin_obs, :pend_bacen, :pend_bacen_obs)
    end
end
