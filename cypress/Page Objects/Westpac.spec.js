import Locators from "./Locators.spec";

class Home{

 inputCurrentAge = () => {
  const locate=new Locators;
  locate.findCurrentAgeField;
  return locate.getIframeBody().find('[model="ctrl.data.CurrentAge"]');
 }


 selectEmploymentStatus = () => {
  const locate=new Locators;
  locate.findEmploymentStatusField;
  return locate.getIframeBody().find('[selected-content="ctrl.data.EmploymentStatusHTML"]');
 }

 inputSalaryPerYear= () => {
  const locate=new Locators;
  locate.findSalaryPerYearField;
  return locate.getIframeBody().find('[model="ctrl.data.AnnualIncome"]').then(cy.wrap).find('[type="text"]')
 }

 selectKiwiSaverContribution = () => {
  const locate=new Locators;
  locate.findKiwiSaverContributionField;
  return locate.getIframeBody().find('[class="control-group"]')
 }

 selectRiskProfile = () => {
  const locate=new Locators;
  locate.findRiskProfileField;
  return locate.getIframeBody().find('[class="input-holder"]')
 }

 submitForm = () => {
  const locate=new Locators;
  locate.getIframeBody().find('[id="widget"]').then(cy.wrap);
  return locate.getIframeBody().find('[class="btn btn-regular btn-results-reveal btn-has-chevron"]');
}

checkResultsDisplayed = () => {
  const locate=new Locators;
  locate.getIframeBody().find('[id="widget"]').then(cy.wrap);
  return locate.getIframeBody().find('[class="field-group-set results-field-group-set"]').should('have.class','field-group-set results-field-group-set');
}

inputCurrentKSBalance = () => {
  const locate=new Locators;
  locate.findCurrentKSBalance;
  return locate.getIframeBody().find('[model="ctrl.data.KiwiSaverBalance"]').then(cy.wrap).find('[type="text"]')
}

inputVoluntaryContAmount = () => {
  const locate=new Locators;
  locate.findVoluntaryContributionField;
  return locate.getIframeBody().find('[model="ctrl.data.VoluntaryContributions"]').then(cy.wrap).find('[type="text"]')
}

selectVoluntaryContFrequency= () => {
  const locate=new Locators;
  locate.findVoluntaryContributionField;
  locate.getIframeBody().find('[model="ctrl.data.VoluntaryContributions"]').then(cy.wrap);
  return locate.getIframeBody().find('[selected-content="$parent.periodHtml"]').then(cy.wrap).find('[class="control-well"]')
}

inputSavingsGoal = () => {
  const locate=new Locators;
  locate.findSavingsGoalField;
  return locate.getIframeBody().find('[model="ctrl.data.SavingsGoal"]').then(cy.wrap).find('[type="text"]')
}

accessKiwiSaverCalcPage = () => {
  return cy.visit('https://www.westpac.co.nz/kiwisaver/calculators/kiwisaver-calculator/');
}

}
export default Home