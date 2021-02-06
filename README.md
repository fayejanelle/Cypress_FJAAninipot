# Cypress_FJAAninipot
Automation Exercise

* These are automated UI tests, for the User Stories below.
* This was created using Cypress, Java Script, and Vistual Studio for Mac, by Faye Aninipot.

NOTE: Chrome Browser must be available for these tests.

## Instructions to run the tests:
1. Install Node JS (https://nodejs.org/en/download/current/)
2. Install Visual Studio Code
3. Create a working folder in your local machine
4. Download the files from GitHub (https://github.com/fayejanelle/Cypress_FJAAninipot) into your working folder
5. Open the working folder in Visual Studio Code
6. Click on Terminal > New Terminal
7. Run the following command: npx cypress open
8. In the resulting window, select KiwiSaverTests.spec.js


## User Stories

## Test User Story 1: 
Priority: Major
As a Product Owner 
I want that while using the KiwiSaver Retirement Calculator all fields in the calculator have got the information icon present
So that 
The user is able to get a clear understanding of what needs to be entered in the field .

* Acceptance Criteria
Scenario 1 
Given User Clicks information icon besides Current age the message “This calculator has an age limit of 64 years old as you need to be under the age of 65 to join KiwiSaver.” is displayed below the current age field.

## Test User Story 2:
Priority: Major
As a Product Owner 
I want that the KiwiSaver Retirement Calculator users are able to calculate what their KiwiSaver projected balance would be at retirement
So that 
The users are able to plan their investments better.

* Acceptance Criteria

•	User whose Current age is 30 is Employed @ a Salary 82000 p/a, contributes to KiwiSaver @ 4% and chooses a Defensive risk profile can calculate his projected balances at retirement.

•	 User whose current aged 45 is Self-employed, current KiwiSaver balance is $100000, voluntary contributes $90 fortnightly and chooses Conservative risk profile with saving goals requirement of $290000 can calculate his projected balances at retirement.

•	User whose current aged 55 is not employed, current KiwiSaver balance is $140000, voluntary contributes $10 annually and chooses Balanced risk profile with saving goals requirement of $200000 is able to calculate his projected balances at retirement.
