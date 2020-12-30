@dataFeature
Feature: data
    This feature lets a user increment and decrement the counter by clicking on the button.

    Scenario: Basic increment counter
        When I click on the increment button 50 times
        Then The counter should show "50"

    Scenario: Basic increment counter
        When I click on the decrement button 50 times
        Then The counter should shows "0"

