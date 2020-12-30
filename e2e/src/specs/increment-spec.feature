@secondFeature
Feature: app
    This feature lets a user increment the counter by clicking on the button.

    Scenario: Basic increment counter
        # Given I am on the "data" page

        When I click on the increment button 50 times
        Then The counter should show "50"

