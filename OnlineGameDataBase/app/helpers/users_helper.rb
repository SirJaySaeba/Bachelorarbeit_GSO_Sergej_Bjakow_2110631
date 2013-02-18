# encoding: utf-8
module UsersHelper
  
  def link_to_register
    link_to "Register", register_path
  end

  def link_to_login
    link_to "Login", login_path
  end
  
  def link_to_logout
    link_to "logout", logout_path, method: :delete
  end
  


end
