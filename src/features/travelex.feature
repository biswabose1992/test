Feature: Travelex Test

Scenario: Travelex Page verfication
Given Wikipedia website launched
When I search for furry rabbits
Then Do you mean suggestion should appear
Then I click on the suggestion
Then 20 search results shoud appear
Then I click on first search result to verify article title and contents