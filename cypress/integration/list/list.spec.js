/// <reference types="cypress" />

describe('list behavior', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('has Lists as header title', () => {
        cy.get('h1').should('have.text', 'Lists')
    })

    it('can create new list (List 1)', () => {
        cy.get('#new-list-form > #name').type('List 1{enter}')
        cy.get(':nth-child(1) > h3').should('have.text', 'List 1')
    })

    it('can create another 2 lists (List 2, List 3)', () => {
        cy.get('#new-list-form > #name').type('New List 2{enter}')
        cy.get(':nth-child(2) > h3').should('have.text', 'List 2')
        cy.get('#new-list-form > #name').type('New List 3{enter}')
        cy.get(':nth-child(3) > h3').should('have.text', 'List 3')
    })

    it('can create an item in List 1', () => {
        // cy.get(':nth-child(1) > h3').first
    })
})
