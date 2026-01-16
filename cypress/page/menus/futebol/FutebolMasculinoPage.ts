export class FutebolMasculinoPage {

    //clicar no submenu Elenco
    clickElenco() {
        cy.get('.ct-submenu > .mb-3 > :nth-child(2) > a')
            .should("be.visible")
        cy.contains("Elenco")
            .should("be.visible")
        cy.get('.ct-submenu > .mb-3 > :nth-child(2) > a')
            .click()
    }

    //validar página após clicar no submenu Elenco
    validateElenco() {
        cy.get(':nth-child(6) > .container > :nth-child(1)')
            .should("be.visible")
            .and("contain.text", "goleiros")
    }

    //clicar no submenu Estrutura
    clickEstrutura() {
        cy.get('.ct-submenu > .mb-3 > :nth-child(3) > a')
            .should("be.visible")
        cy.contains("Estrutura")
            .should("be.visible")
        cy.get('.ct-submenu > .mb-3 > :nth-child(3) > a')
            .click()
    }

    //validar página após clicar no submenu Estrutura
    validateEstrutura() {
        cy.get('.a2a_button_facebook')
            .should("be.visible")
    }

    //clicar no submenu Depto. de Futebol Profissional
    clickDeptoFutebolProfissional() {
        cy.get('.ct-submenu > .mb-3 > :nth-child(4) > a')
            .should("be.visible")
        cy.contains("Depto. de Futebol Profissional")
            .should("be.visible")
        cy.get('.ct-submenu > .mb-3 > :nth-child(4) > a')
            .click()
    }

    //validar página após clicar no submenu Depto. de Futebol Profissional
    validateDeptoFutebolProfissional() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Departamento de Futebol Profissional")
    }

    //clicar no submenu Notícias
    clickNoticias() {
        cy.get('.ct-submenu > .mb-3 > :nth-child(5) > a')
            .should("be.visible")
        cy.contains("Notícias")
            .should("be.visible")
        cy.get('.ct-submenu > .mb-3 > :nth-child(5) > a')
            .click()
    }

    //validar página após clicar no submenu Notícias
    validateNoticias() {
        cy.get('.text-uppercase')
            .should("be.visible")
            .and("contain.text", "NOTÍCIAS")
    }

}
