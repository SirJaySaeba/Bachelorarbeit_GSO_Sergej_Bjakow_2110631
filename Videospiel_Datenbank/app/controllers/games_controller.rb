class GamesController < ApplicationController
  before_filter :require_login, only: [:create, :new, :edit]

  def index
    #@games = Game.all
    @games = Game.search(params[:search])
  end

  def followers
    @title = "Followers"
    @game = Game.find(params[:id])
    @users = @game.followers.paginate(page: params[:page])
    render 'users/show_owners'
  end

  def show
    #store_location
    @game = Game.find(params[:id])
    @review = @game.reviews.build
    @feed_items = @game.feed.paginate(page: params[:page])
    #@reviews = @user.reviews.paginate(page: params[:page])
    
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
