class ApplicationController < ActionController::Base
  
  protect_from_forgery
  
  include SessionsHelper
  
  def require_login
    unless user_signed_in?
      store_location
      redirect_to signin_url, notice: "Please sign in."
    end
  end
  
  def admin_user
    if (current_user.admin? == false)
      redirect_to(root_path)
      flash[:error] = "You are not permitted to delete users!"
    end
  end

end
