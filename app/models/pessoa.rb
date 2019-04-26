class Pessoa < ApplicationRecord
	has_many :pessoa_consultum
	has_attached_file :excel, :path => ":rails_root/public/system/:filename"
	validates_attachment_file_name :excel, matches: [/\.pdf$/, /\.docx?$/, /\.xlsx?$/, /\.odt$/, /\.ods$/]
end