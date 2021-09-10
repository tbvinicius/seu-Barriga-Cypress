/// <reference types="cypress" />

import { AddAccountPage } from "../support/AddAccountsPage/AddAcountsPage";
import { CreateFinancialMovementPage } from "../support/CreateFinancialMovement/CreateFinancialMovementPAge";
import { EditAccountPage } from "../support/EditAccountName/EditAccountNamePage";
import { HomePage } from "../support/HomePage/HomePage";
import { ListAccountsPage } from "../support/ListAccounts/ListAccountsPage";
import { LoginPage } from "../support/LoginPage/LoginPage";


const loginPage = new LoginPage();
const homePage = new HomePage();
const addAccountPage = new AddAccountPage();
const listAccounts = new ListAccountsPage();
const editAccountPage = new EditAccountPage();
const createFinancialMovementPage = new CreateFinancialMovementPage();


beforeEach(()=> {

    cy.visit('/login');
    loginPage.writeUserEmail("aguia1@aguia.com.br");
    loginPage.writeUserPassword("32690305");
    loginPage.clickOnLoginButton();

})

describe('First Part', ()=> {
    
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
    
    it('shoul Show All Accounts On The System', ()=>{
        homePage.clickOnListButton();
    })

    it('validate Message ReturnedWhenChangeTheNameOfAnAccountSuccessfully', ()=>{
        homePage.clickOnListButton();
        listAccounts.clickOnEditButtonFistLine();
        editAccountPage.clearAccountName();
        editAccountPage.changeAccountName("ALTERADO");
        editAccountPage.clickOnSaveButton();
        
        cy.get('.alert').should("contain.text", "Conta alterada com sucesso!");         
    })
    
    it('validateMessageReturnedWhenDeleteAnAccountSuccessfully', ()=>{

        homePage.clickOnListButton();
        listAccounts.clickOnDeleteButtonFistLine();
        cy.get('.alert').should("contain.text", "Conta removida com sucesso!");    
    })

})

describe('Second Part', ()=>{

    
    it('Sould validate The Errors Mandatory Message Of Filds', ()=>{
                
        homePage.clickOnCreateAFinancialMovementtButton();
        createFinancialMovementPage.clickOnSaveButton();
        cy.get('.alert').should("contain.text", "Data da Movimentação é obrigatório");
        cy.get('.alert').should("contain.text", "Data do pagamento é obrigatório");
        cy.get('.alert').should("contain.text", "Descrição é obrigatório");
        cy.get('.alert').should("contain.text", "Interessado é obrigatório");
        cy.get('.alert').should("contain.text", "Valor é obrigatório");
        cy.get('.alert').should("contain.text", "Valor deve ser um número");             
    })

    it('Sould validate The Error Message Of Value Field Must Be Only Numbers', ()=>{
                
        homePage.clickOnCreateAFinancialMovementtButton();
        
        createFinancialMovementPage.setDataOFTransaction("03/09/2021");
        createFinancialMovementPage.setDataOFpayment("29/09/2021");
        createFinancialMovementPage.setDescription("Pague o aluguel");
        createFinancialMovementPage.setWhoWants("Madruga");
        createFinancialMovementPage.setValue("A");
        createFinancialMovementPage.clickOnSaveButtonToSaveAFinancialMovement();
       
        cy.get('.alert').should("contain.text", "Valor deve ser um número");              
    })
})






