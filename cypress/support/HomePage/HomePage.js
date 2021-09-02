export class HomePage {

    clickOnAddAccountButton(){
        cy.get('.dropdown-toggle').click();
        return cy.get('.dropdown-menu > :nth-child(1) > a').click();
        
    }

    clickOnListButton(){
        cy.get('.dropdown-toggle').click();
        return cy.get('.dropdown-menu > :nth-child(2) > a').click();
        
    }

}