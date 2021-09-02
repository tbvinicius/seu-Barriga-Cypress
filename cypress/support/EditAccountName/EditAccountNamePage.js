export class EditAccountPage {

    clearAccountName(){
        
        return cy.get('#nome').clear();
        
    }

    changeAccountName(name){
        
        return cy.get('#nome').type(name);
        
    }

    clickOnSaveButton() {
        return cy.get('.btn').click();
    }



}