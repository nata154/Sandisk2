@all
Feature: Playing

  Scenario Outline: Playing with Sandisk
    Given I open "<URL>" url
    Then Page title should be "SanDisk | Global Leader in Flash Memory Storage Solutions"

    When I click usb Flash tab
    Then Page title should be "USB Flash Drives | SanDisk"

#    When I perform search for "usb"

    Examples:
      | URL                      |
      | https://www.sandisk.com/ |

  @USB-Windows
  Scenario Outline: Filter USB Windows flash
    Given I open "<URL>" url
    When I click filter "USB"
    When I click filter "Windows"
    When I click first item
    Then I check device name "<nameOfDevice>"

    Examples:
      | URL                      | nameOfDevice                                        |
      | https://www.sandisk.com/ | SanDisk Extreme PRO USB 3.1 Solid State Flash Drive |

  @SSD-portable-highPerform-whereToBy-InEuropeBelarus
  Scenario Outline: Filter SSD portable highPerformance - second item - where to by - region Belarus - amount of Items
    Given I open "<URL>" url
    When I click "SSD" tab

    Examples:
      | URL                      |
      | https://www.sandisk.com/ |
