@counterFeature
Feature: counter
    This feature lets a user increment, decrement and reset the counter by clicking on the button.

    Scenario: Basic increment counter
        When I click on the increment button 100 times
        Then The counter should show, "100"

    Scenario: Basic decrement counter
        When I click on the decrement button 50 times
        Then The counter should show. "50"

    Scenario: Basic reset counter
        When I click on the reset button
        Then The counter should show; "0"

