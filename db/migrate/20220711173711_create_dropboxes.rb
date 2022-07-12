class CreateDropboxes < ActiveRecord::Migration[6.1]
  def change
    create_table :dropboxes do |t|
      t.string :dropbox_location 

      t.timestamps
    end
  end
end
