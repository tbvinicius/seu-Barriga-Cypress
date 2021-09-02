const el = require('./elements').ELEMENTS;

export class LoginPage {

    writeUserEmail(email) {
        return cy.get(el.email).type(email);
    }

    writeUserPassword(password) {
        return cy.get(el.password).type(password);
    }
    clickOnLoginButton(){
        return cy.get('.btn').click();
    }
}
