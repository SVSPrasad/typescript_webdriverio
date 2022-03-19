Feature: validate the end to end functionality in TR

Background: 
   
# Scenario: End 2 End hotel booking
# Given I am on TR Site
# When I complete a hotel end 2 end booking
# Then Hotel booking should be created


Scenario: End 2 End hotel booking 
Given I am on TR Site
When I search for a hotels
And Choose a hotel
And Choose rooms
And Choose the flight
And Populate guest details 
And Populate address details
#  And Populate payment details
# And Confirm hotel booking
# Then I should be presented with the booking id 


    