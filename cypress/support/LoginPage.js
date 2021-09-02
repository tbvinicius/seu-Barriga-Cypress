export class LoginPage {

    writeUserEmail(email) {
        return cy.get('#email').type(email);
    }

    writeUserPassword(password) {
        return cy.get('#senha').type(password);
    }
}
    