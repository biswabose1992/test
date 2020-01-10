Feature: Tesla Test

Scenario: Tesla Page verfication
Given Tesla website launched
Then I resize window to 550 ppx
Then I swipe on the carmodel slider
Then Item displayed is "Model S"