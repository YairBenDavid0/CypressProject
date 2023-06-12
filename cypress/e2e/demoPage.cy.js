class DemoPage {
  constructor() {
    this.firstNameInput = '#vfb-5';
    this.lastNameInput = '#vfb-7';
    this.emailInput = '#vfb-14';
    this.maleOption = '#vfb-31-1';
    this.femaleOption = '#vfb-31-2';
    this.otherOption = '#vfb-31-3';
    this.verificationInput = '#vfb-3';
    this.submitButton = '#vfb-4';
    this.errorLabels = '[class=vfb-error]';
    this.transactionCodeMessage = '.elementor-element-75d4546';
  }

  fillFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
    return this;
  }

  fillLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }

  fillEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  selectGender(gender) {
    const genderOption = gender === 'male' ?
    this.maleOption : gender === 'female' ?
    this.femaleOption : this.otherOption;
    cy.get(genderOption).check();
    return this;
  }

  getVerificationNumbers() {
    cy.get(this.verificationInput)
      .next('label')
      .invoke('text')
      .then((labelText) => {
        const numbers = labelText.replace('Example:', '').trim();
        cy.wrap(numbers).as('verificationNumbers');
      });
    return this;
  }

  typeVerificationNumbers(verificationNumbers) {
    cy.get(this.verificationInput).type(verificationNumbers);
    return this;
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  verifyErrorLabels() {
    cy.get(this.errorLabels).should('have.length', 5);
  }

  getTransactionID() {
    return cy.get(this.transactionCodeMessage)
      .invoke('text')
      .then((text) => {
        const transactionID = text.replace
        ('Registration Form is Successfully Submitted. The Transaction ID : NXTGEN', '').trim();
        return transactionID;
      });
  }
}

export default new DemoPage();
