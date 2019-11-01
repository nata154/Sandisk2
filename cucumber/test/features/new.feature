@language
Feature: Playing

  Scenario Outline: Playing with Sandisk
    Given I open "<URL>" url
    When I click to 'Change language' button

    And I expect 'Asia Pacific' region is present for Select Your Region form
    And I expect 'Europe' region is present for Select Your Region form
    And I expect 'Middle East' region is present for Select Your Region form
    When I choose 'Русский' in language options
    Then I expect 'МАГАЗИН' button on page
    And I expect 'ПОИСК' button on page
    And I expect 'ПОДДЕРЖКА' button on page


    Examples:
      | URL                      |
      | https://www.sandisk.com/ |
