import DemoPage from './demoPage.cy.js';

describe('NxtGen AI Academy Demo Site', () => {
  beforeEach(() => {
    cy.visit('https://nxtgenaiacademy.com/demo-site/');
  });

  it('should submit the form with valid data', () => {
    DemoPage
      .fillFirstName('John')
      .fillLastName('Doe')
      .fillEmail('john.doe@example.com')
      .selectGender('male')
      .getVerificationNumbers()
      .typeVerificationNumbers('99')
      .submit();

    DemoPage.getTransactionID().then((transactionID) => {
      cy.log(`Transaction ID: ${transactionID}`);
    });
  });

  it('should display error labels for missing mandatory fields', () => {
    DemoPage.submit();
    DemoPage.verifyErrorLabels();
  });
});
