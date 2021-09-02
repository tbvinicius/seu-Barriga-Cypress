/// <reference types="cypress-xpath" />


beforeEach(()=> {
    cy.visit('/login');
    cy.get('#email').type("aguia1@aguia.com.br");
    cy.get('#senha').type("32690305");
    cy.get('.btn').click();
})

it('validate Message ReturnedWhenChangeTheNameOfAnAccountSuccessfully', ()=>{
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
    cy.xpath('//*[@id="tabelaContas"]/tbody/tr[1]/td[2]/a[1]/span').click();
    cy.get('#nome').clear();
    cy.get('#nome').type('ALTERADO');
    cy.get('.btn').click();
    cy.get('.alert').should("contain.text", "Conta alterada com sucesso!");    
})


it('validateMessageReturnedWhenDeleteAnAccountSuccessfully', ()=>{
    cy.get('.dropdown-toggle').click();   
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
    cy.xpath('//*[@id="tabelaContas"]/tbody/tr[1]/td[2]/a[2]/span').click();
    cy.get('.alert').should("contain.text", "Conta removida com sucesso!");    
})







