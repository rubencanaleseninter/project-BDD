@appFeature
Feature: app
    This feature lets a user go from home to counter page.

    Scenario: Basic app change route scenario
        Given I am on the "app" page
        When I click the "home/counter" button
        Then I go to the "home/counter" page

