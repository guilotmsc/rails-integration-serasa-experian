class AddDataToPessoa < ActiveRecord::Migration[5.1]
  def change
    add_column :pessoas, :data, :date
  end
end
