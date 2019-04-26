# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180301154644) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pessoa_consulta", force: :cascade do |t|
    t.string "documento"
    t.string "nome"
    t.string "nome_mae"
    t.string "nome_fantasia"
    t.string "nascimento"
    t.string "fundacao"
    t.string "situacao_rfb"
    t.string "descricao_rfb"
    t.string "data_situacao"
    t.integer "ocorrencias"
    t.string "valor_total"
    t.integer "pend_inter"
    t.string "pend_int_obs"
    t.integer "pend_fin"
    t.string "pend_fin_obs"
    t.integer "pend_bacen"
    t.string "pend_bacen_obs"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "pessoa_id"
    t.index ["pessoa_id"], name: "index_pessoa_consulta_on_pessoa_id"
  end

  create_table "pessoas", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "excel_file_name"
    t.string "excel_content_type"
    t.integer "excel_file_size"
    t.datetime "excel_updated_at"
    t.date "data"
  end

  add_foreign_key "pessoa_consulta", "pessoas"
end
