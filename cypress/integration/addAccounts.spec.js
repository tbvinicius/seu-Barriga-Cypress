/// <reference types="cypress" />

import { HomePage } from "../support/HomePage/HomePage";
import { LoginPage } from "../support/LoginPage";


const loginPage = new LoginPage();
const homepage = new HomePage();


beforeEach(()=> {

    cy.visit('/login');
    loginPage.writeUserEmail("aguia1@aguia.com.br");
    loginPage.writeUserPassword("32690305");
    loginPage.clickOnLoginButton();
})

it.only('validade the message returned when try to create an account without a name', ()=>{
    /* cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    cy.get('.btn').click(); */
    homepage.clickOnAddAccountButton();
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




