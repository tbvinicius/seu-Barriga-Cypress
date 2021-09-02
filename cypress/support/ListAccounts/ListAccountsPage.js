export class ListAccountsPage {

    clickOnEditButtonFistLine(){
        
        return cy.xpath('//*[@id="tabelaContas"]/tbody/tr[1]/td[2]/a[1]/span').click();
        
    }

    clickOnDeleteButtonFistLine(){
        
        return cy.xpath('//*[@id="tabelaContas"]/tbody/tr[1]/td[2]/a[2]/span').click();
        
    }

}