/// <reference types="cypress" />


beforeEach(()=> {
    cy.visit('https://seubarriga.wcaquino.me/login');
    cy.get('#email').type("aguia1@aguia.com.br");
    cy.get('#senha').type("32690305");
    cy.get('.btn').click();
})

it('validade the message returned when try to create an account without a name', ()=>{
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    cy.get('.btn').click();
    cy.get('.alert').should("contain.text", "Informe o nome da conta"); 
})

it('validade the message returned when try to create an account with a name', ()=>{
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    cy.get('#nome').type("zaa");
    cy.get('.btn').click();
    cy.get('.alert').should("contain.text", "Conta adicionada com sucesso!");    
})

it('mustShowAllAccountsOnTheSystem', ()=>{
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
})


