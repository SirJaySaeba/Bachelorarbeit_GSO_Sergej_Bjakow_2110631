# encoding: UTF-8
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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130129114448) do

  create_table "games", :force => true do |t|
    t.binary   "game_cover"
    t.string   "title_german"
    t.string   "title_original"
    t.string   "title_alternative"
    t.string   "developer"
    t.string   "publisher"
    t.string   "system"
    t.date     "release"
    t.boolean  "dlc"
    t.boolean  "dlc_addon"
    t.float    "rating"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
    t.string   "untertitel"
  end

  create_table "users", :force => true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "username"
  end

end
