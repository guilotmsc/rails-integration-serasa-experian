class AddAttachmentExcelToPessoas < ActiveRecord::Migration[5.1]
  def self.up
    change_table :pessoas do |t|
      t.attachment :excel
    end
  end

  def self.down
    remove_attachment :pessoas, :excel
  end
end
