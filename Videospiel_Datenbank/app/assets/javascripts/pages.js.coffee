# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready ->


  y = $(".container").height()
  $(".main-container ").height (index, height) ->
    y

  x = $(".main-container").height()
  $(".sidebar").height (index, height) ->
    x