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
    Then I check USBdevice name "<nameOfDevice>"

    Examples:
      | URL                      | nameOfDevice                                        |
      | https://www.sandisk.com/ | SanDisk Extreme PRO USB 3.1 Solid State Flash Drive |

  @SSD-portable-highPerform-whereToBy-InEuropeBelarus
  Scenario Outline: Filter SSD portable highPerformance - second item - where to by - region Belarus - amount of Items
    Given I open "<URL>" url
    When I click "SSD" tab at homePage
    When I click filter "Portable SSD"
    When I click filter "High Performance"
    When I click first item
    Then I check SSDdevice name "<nameOfDevice>"
    When I click "Where To Buy" tab at SSDPage
    When I set region "Europe / Middle East"
    When I set area "Belarus"
    Then Amount of distributors should be not null



    Examples:
      | URL                      | nameOfDevice                     |
      | https://www.sandisk.com/ | SanDisk Extreme 900 Portable SSD |
