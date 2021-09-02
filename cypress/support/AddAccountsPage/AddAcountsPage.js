export class AddAccountPage {

    clickOnSaveButton() {
        return cy.get('.btn').click();
    }

    writeAnAccountName(name) {
        return cy.get('#nome').type(name);
    }

}