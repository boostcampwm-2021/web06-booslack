/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

const loginRoute = '/login';
const signupRoute = '/signup';
const changepasswordRoute = '/changepassword';
const workspaceListRoute = '/workspacelist';

describe('login page', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('http://localhost:3001');
  });

  it('render exactly', () => {
    cy.location('pathname').should('equal', loginRoute);
    cy.findByText(/Github으로 로그인/i).should('exist');
    cy.findByText(/LOG IN/i).should('exist');
    cy.findByText(/회원 가입/i).should('exist');
    cy.findByText(/비밀 번호 변경/i).should('exist');
  });

  describe('router test', () => {
    it('router to signUp', () => {
      cy.location('pathname').should('equal', loginRoute);
      cy.findByText(/회원 가입/i)
        .should('exist')
        .click();
      cy.location('pathname').should('equal', signupRoute);
    });

    it('router to changepassword', () => {
      cy.location('pathname').should('equal', loginRoute);
      cy.findByText(/비밀 번호 변경/i)
        .should('exist')
        .click();
      cy.location('pathname').should('equal', changepasswordRoute);
    });
  });

  describe('login test', () => {
    it('type login id correctly', () => {
      const id = Cypress.env('correctName');
      const password = Cypress.env('correctPassword');

      cy.get('input').eq(0).type(id);
      cy.get('input').eq(1).type(password);
      cy.findByText(/LOG IN/i).click();
      cy.location('pathname').should('equal', workspaceListRoute);
    });

    it('type login id incorrectly', () => {
      const id = Cypress.env('incorrectName');
      const password = Cypress.env('incorrectPassword');

      cy.wait(350);

      cy.get('input').eq(0).type(id);
      cy.get('input').eq(1).type(password);
      cy.findByText(/LOG IN/i).click();
      cy.location('pathname').should('equal', loginRoute);

      //popup
      cy.findByText(
        /사용자의 아이디가 존재하지 않거나 비밀번호가 틀렸습니다./i,
      ).should('exist');
      cy.findByText(/확인/i).should('exist').click();
    });
  });
});
