class GamesController < ApplicationController
  before_filter :require_login, only: [:create, :new, :edit]
  before_filter :store_location, only: :show
  
  def index
    #@games = Game.all
    #@games = Game.search(params[:search])
    #@games = Game.search.paginate(page: params[:page][:search], :per_page => 10)
    @games = Game.search(params[:search], params[:page])
  end

  def owners
    @title = "Besitzer"
    @game = Game.find(params[:id])
    @users = @game.owners.paginate(page: params[:page], :per_page => 10)
    render 'users/show_owners'
  end

  def show
    @game = Game.find(params[:id])
    @reviews = @game.list_game_reviews.paginate(page: params[:page], :per_page => 10)
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @game }
    end

  end


  def new
    @game = Game.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @game }
    end
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
    Game.find(params[:id]).destroy
    flash[:success] = "Spiel entfernt"
    respond_to do |format|
      format.html { redirect_to root_path}
      format.json { head :no_content }
    end
  end
end
