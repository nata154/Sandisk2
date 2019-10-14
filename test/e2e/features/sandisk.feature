@all
Feature: Access to other sites


  Scenario Outline: I should be able to access <>
    Given I open "<URL>" url
    Then Page title should be "SanDisk | Global Leader in Flash Memory Storage Solutions"
    When I perform search for "usb"

    Then Page title should be "USB Flash Drives | SanDisk"

    Examples:
      | URL                      | USB Flash                               |
      | https://www.sandisk.com/ | element(by.css(a[href *= "usb-flash"])) |