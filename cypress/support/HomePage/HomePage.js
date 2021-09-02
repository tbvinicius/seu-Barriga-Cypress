export class HomePage {


    clickOnAddAccountButton(){
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        return cy.get('.btn').click();

    }

    writeUserEmail(email) {
        return cy.get('#email').type(email);
    }

    writeUserPassword(password) {
        return cy.get('#senha').type(password);
    }
    clickOnLoginButton(){
        return cy.get('.btn').click();
    }
}