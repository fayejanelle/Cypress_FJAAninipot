# Cypress_FJAAninipot
Automation Exercise

* These are automated UI tests, for the User Stories below.
* This was created using Cypress, Java Script, and Vistual Studio Code for Mac, by Faye Aninipot.

## Setup Instructions:
1.	Ensure Chrome browser is available. If not, it can be installed from the following link (https://www.google.com/chrome/?brand=WHAR&gclid=EAIaIQobChMIn7TGw9fU7gIV0G4qCh2iHgjqEAAYASAAEgKa6fD_BwE&gclsrc=aw.ds)  
2.	Ensure that Node JS in your machine or you can download it from (https://nodejs.org/en/download/current/) 
3.	Ensure that Visual Studio Code is installed in your machine or you can download it from (https://code.visualstudio.com/download) 
4.	Install Git (https://git-scm.com/downloads) 
5.	Ensure that Git is enabled from the Visual Studio Code
6.	Pull the codes from the solution repository (https://github.com/fayejanelle/Cypress_FJAAninipot)

## To run the automated tests:
1.	Run the following command in Terminal: npx cypress open
2.	In the resulting Cypress window, select KiwiSaverTests.spec.js to run the automated tests

* NOTE: The test for User Story 1, is expected to fail as the text displayed in the information message for Current Age is different from the Acceptance Criteria.

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
