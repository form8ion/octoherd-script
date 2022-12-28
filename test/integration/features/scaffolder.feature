Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then the script file is bootstrapped
    And project metadata is generated
