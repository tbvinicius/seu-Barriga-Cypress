export class CreateFinancialMovementPage {

    setDataOFTransaction(data) {
        
        return cy.get('#data_transacao').type(data);
    }

    setDataOFpayment(data) {
        return cy.get('#data_pagamento').type(data);
    }

    setDescription(data) {
        return cy.get('#descricao').type(data);
    }

    setWhoWants(data) {
        return cy.get('#interessado').type(data);
    }

    setValue(data) {
        return cy.get('#valor').type(data);
    }

    clickOnSaveButtonToSaveAFinancialMovement() {
        return cy.get('#btn-primary').type(data);
    }

    getTextReturnedOnAlertDanger(stringToCompare) {
        return cy.get('.alert').should("contain.text", stringToCompare);
    }

    getTextReturnedOnAlertSuccess() {
        //return driver.findElement(alertSuccessBy).getText();
    }

    clickOnSaveButton() {
        return cy.get('.btn').click();
    }
  
    
/* 
    List<WebElement> getAllMessagesAlertDanger(){

        List<WebElement> listOfErros;

        listOfErros = driver.findElements(erros);
        return listOfErros;
    }
 */
}

