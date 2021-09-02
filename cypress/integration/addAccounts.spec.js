/// <reference types="cypress" />

import { AddAccountPage } from "../support/AddAccountsPage/AddAcountsPage";
import { HomePage } from "../support/HomePage/HomePage";
import { LoginPage } from "../support/LoginPage/LoginPage";


const loginPage = new LoginPage();
const homePage = new HomePage();
const addAccountPage = new AddAccountPage();


beforeEach(()=> {

    cy.visit('/login');
    loginPage.writeUserEmail("aguia1@aguia.com.br");
    loginPage.writeUserPassword("32690305");
    loginPage.clickOnLoginButton();
})

it('validade the message returned when try to create an account without a name', ()=>{
    homePage.clickOnAddAccountButton();
    addAccountPage.clickOnSaveButton();
    cy.get('.alert').should("contain.text", "Informe o nome da conta"); 
})

it('validade the message returned when try to create an account with a name', ()=>{
    homePage.clickOnAddAccountButton();
    addAccountPage.writeAnAccountName("ZZZ");
    addAccountPage.clickOnSaveButton();
    cy.get('.alert').should("contain.text", "Conta adicionada com sucesso!");    
})

it.only('shoul Show All Accounts On TheSystem', ()=>{
    homePage.clickOnListButton();
})




