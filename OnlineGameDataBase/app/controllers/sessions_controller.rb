# encoding: utf-8
class SessionsController < ApplicationController
  
  def new
    
  end
  
  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to startscreen_path,
                  notice: "ja wohl jetzt bist du eigeloggt"
    else
      flash.now.alert = "scheissen dreck"
      render "new"
    end
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to startscreen_path,
                alert: "draußen"
  end
end
