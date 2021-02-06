import Locators from '../../Page Objects/Locators.spec'
import Home from '../../Page Objects/Westpac.spec';

const home =new Home();
const locate = new Locators();

describe ('Access Westpac', function(){
    it ('Westpac',function(){
    cy.visit('http://www.westpac.co.nz/');
    });
});

describe ('Go to KiwiSaver Calculator', function(){
    it ('Navigate to KiwiSaver Retirement Calculator', function(){
    locate.getKiwiSaver().click();
    locate.getKiwiSaverButton().click({force:true});
    locate.getKSRetirementCalc().click();
    });
});

describe ('User Story 1 - AC 1: Checks information icon message for Current Age',function(){
    it('Current Age Message must be = "This calculator has an age limit of 64 years old as you need to be under the age of 65 to join KiwiSaver.” ', () => {
        home.accessKiwiSaverCalcPage().reload();
        locate.getIframeBody().find('[id="widget"]').then(cy.wrap);
        locate.getIframeBody().find('[class="wpnib-field-current-age field-group ng-isolate-scope"]').then(cy.wrap);
        locate.getIframeBody().find('[class="field-info ng-scope"]').then(cy.wrap);
        locate.getIframeBody().find('[class="ng-isolate-scope"]').then(cy.wrap);
        locate.getIframeBody().find('[help-id="CurrentAge"]').contains('View help for this field').click();
        locate.getIframeBody().find('[class="wpnib-field-current-age field-group ng-isolate-scope"]').then(cy.wrap);
        locate.getIframeBody().find('[class="field-message message-info ng-binding"]').should('have.text', 'This calculator has an age limit of 64 years old as you need to be under the age of 65 to join KiwiSaver');
    });

});

describe ('User Story 2 - AC 1: For Employed User - Calculate KiwiSaver Projected Balances at Retirement', function(){
    it('At Current Age = 30; Employed; Salary = $82,000 p.a.; KS cont. = 4%; Risk Profile = Defensive', () => {
        home.accessKiwiSaverCalcPage().reload();
        home.inputCurrentAge().type('30');
        home.selectEmploymentStatus().click(); 
        locate.getIframeBody().find('[value="employed"]').click();
        home.inputSalaryPerYear().type('82000');
        home.selectKiwiSaverContribution().find('[value="4"]').then(cy.wrap).find('[class="input-holder"]').click();
        home.selectRiskProfile().find('[value="low"]').click(); 
        home.submitForm().click();
        home.checkResultsDisplayed;
        
      });
});

describe ('User Story 2 - AC 2: For Self-Employed User - Calculate KiwiSaver Projected Balances at Retirement', function(){
    it('At Current Age = 45; Self-Employed; Current KS Bal = $100,000; Voluntary cont. = 90, fornightly; Risk Profile = Conservative; Savings Goal = $290,000', () => {
        home.accessKiwiSaverCalcPage().reload();
        home.inputCurrentAge().type('45');
        home.selectEmploymentStatus().click(); 
        locate.getIframeBody().find('[value="self-employed"]').click();
        home.inputCurrentKSBalance().type('100000');
        home.inputVoluntaryContAmount().type('90');
        home.selectVoluntaryContFrequency().click();
        locate.getIframeBody().find('[value="fortnight"]').click();
        home.selectRiskProfile().find('[value="medium"]').click(); 
        home.inputSavingsGoal().type('290000');
        home.submitForm().click();
        home.checkResultsDisplayed;
    });
});

describe ('User Story 2 - AC 3: For Not Employed User - Calculate KiwiSaver Projected Balances at Retirement', function(){
    it('At Current Age = 55; Not Employed; Current KS Bal = $140,000; Voluntary cont. = 10, annually; Risk Profile = Conservative; Savings Goal = $200,000', () => {
        home.accessKiwiSaverCalcPage().reload();
        home.inputCurrentAge().type('55');
        home.selectEmploymentStatus().click(); 
        locate.getIframeBody().find('[value="not-employed"]').click();
        home.inputCurrentKSBalance().type('140000');
        home.inputVoluntaryContAmount().type('10');
        home.selectVoluntaryContFrequency().click();
        locate.getIframeBody().find('[value="year"]').click();
        home.selectRiskProfile().find('[value="high"]').click(); 
        home.inputSavingsGoal().type('200000');
        home.submitForm().click();
        home.checkResultsDisplayed;
    });
});