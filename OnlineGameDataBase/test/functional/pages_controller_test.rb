require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get startscreen" do
    get :startscreen
    assert_response :success
  end

end
