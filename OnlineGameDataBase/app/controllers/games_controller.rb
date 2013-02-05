class GamesController < ApplicationController

  before_filter :require_login, only: [:create, :new, :edit]

  def index
     @games = Game.search(params[:search])
  end

  def show
    @game = Game.find(params[:id])
  end


  def new
    @game = Game.new

  end

  def edit
    @game = Game.find(params[:id])
  end


  def create
    @game = Game.new(params[:game])

    respond_to do |format|
      if @game.save
        format.html { redirect_to @game, notice: 'Game was successfully created.' }
        format.json { render json: @game, status: :created, location: @game }
      else
        format.html { render action: "new" }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end


  def update
    @game = Game.find(params[:id])

    respond_to do |format|
      if @game.update_attributes(params[:game])
        format.html { redirect_to @game, notice: 'Game was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @game = Game.find(params[:id])
    @game.destroy

  end
  
  def user_profile
    
  end
  

  
end
