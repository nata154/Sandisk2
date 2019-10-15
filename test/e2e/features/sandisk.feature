@all
Feature: Access to other sites

  Scenario Outline: Playing with Sandisk
    Given I open "<URL>" url
    Then Page title should be "SanDisk | Global Leader in Flash Memory Storage Solutions"

    When I click usb Flash tab
    Then Page title should be "USB Flash Drives | SanDisk"

    When I perform search for "usb"

    Examples:
      | URL                      | USB Flash                               |
      | https://www.sandisk.com/ | element(by.css(a[href *= "usb-flash"])) |

  @USB-WireLess
  Scenario Outline: Filter USB WireLess flash
    Given I open "<URL>" url
    When I filter by USB
    When I filter by WireLess
    When I click first item
    Then I check parameters of filtring

    Examples:
      | URL                      |
      | https://www.sandisk.com/ |

