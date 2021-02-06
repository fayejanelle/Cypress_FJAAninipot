class Locators{

    getKiwiSaver() {
        return cy.get('[id="ubermenu-section-link-kiwisaver-ps"]');
       }

    getKiwiSaverButton() {
        return cy.get('[id="ubermenu-item-cta-kiwisaver-calculators-ps"]');
       }
       
    getKSRetirementCalc(){
         return cy.get('a').contains("Click here to get started.");
       }

    getIframeBody = () => {
        return cy
        .get('iframe[src*="calculator-embed"]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
      }

    findCurrentAgeField = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-current-age field-group ng-isolate-scope"]').then(cy.wrap);
        getIframeBody().find('[class="control-row"]').then(cy.wrap);
        return getIframeBody().find('[class="control-cell ng-scope ng-isolate-scope"]')
    }
    findEmploymentStatusField = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-employment-status field-group ng-isolate-scope"]').then(cy.wrap);
        return getIframeBody().find('[class="control-row"]').then(cy.wrap);
    }
    findSalaryPerYearField = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-annual-income field-group ng-scope ng-isolate-scope"]').then(cy.wrap);
        return getIframeBody().find('[class="control-row"]').then(cy.wrap);
    }
    findKiwiSaverContributionField = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-kiwisaver-member-contribution field-group ng-scope ng-isolate-scope"]').then(cy.wrap);
        return getIframeBody().find('[class="control-row"]').then(cy.wrap);
    }
    findRiskProfileField = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-risk-profile field-group ng-isolate-scope"]').then(cy.wrap);
        getIframeBody().find('[class="control-row"]').then(cy.wrap);
        return getIframeBody().find('[class="control-group"]').then(cy.wrap);
    }
    findCurrentKSBalance = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-kiwi-saver-balance field-group ng-isolate-scope"]').then(cy.wrap);
        return getIframeBody().find('[class="control-row"]').then(cy.wrap);
    }
    findVoluntaryContributionField = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-voluntary-contributions field-group ng-isolate-scope"]').then(cy.wrap);
        return getIframeBody().find('[class="control-row"]').then(cy.wrap);
    }
    findSavingsGoalField = () => {
        getIframeBody().find('[id="widget"]').then(cy.wrap);
        getIframeBody().find('[class="wpnib-field-savings-goal field-group ng-isolate-scope"]').then(cy.wrap);
        return getIframeBody().find('[class="control-row"]').then(cy.wrap);
    }

}
export default Locators
