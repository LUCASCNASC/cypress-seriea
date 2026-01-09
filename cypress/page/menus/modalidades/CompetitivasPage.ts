export class CompetitivasPage {

    //clicar no submenu Asa Delta
    clickAsaDelta() {
        cy.get('.ct-active > .ct-submenu > :nth-child(1) > :nth-child(2) > a')
            .should("be.visible")
        cy.contains("Asa Delta")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > :nth-child(1) > :nth-child(2) > a')
            .click()
    }

    //validar página após clicar no submenu Asa Delta
    validateAsaDelta() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Asa Delta")
    }

    //clicar no submenu Basquete Masculino
    clickBasqueteMasculino() {
        cy.get('.ct-active > .ct-submenu > :nth-child(1) > :nth-child(3) > a')
            .should("be.visible")
        cy.contains("Basquete Masculino")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > :nth-child(1) > :nth-child(3) > a')
            .click()
    }

    //validar página após clicar no submenu Basquete Masculino
    validateBasqueteMasculino() {
        cy.get('.centered-title-black > h1')
            .should("be.visible")
    }

    //clicar no submenu Basquete Feminino
    clickBasqueteFeminino() {
        cy.get('.ct-active > .ct-submenu > :nth-child(1) > :nth-child(4) > a')
            .should("be.visible")
        cy.contains("Basquete Feminino")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > :nth-child(1) > :nth-child(4) > a')
            .click()
    }

    //validar página após clicar no submenu Basquete Feminino
    validateBasqueteFeminino() {
        cy.get('.centered-title-black > h1')
            .should("be.visible")
    }

    //clicar no submenu Beach Soccer
    clickBeachSoccer() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(5) > a')
            .should("be.visible")
        cy.contains("Beach Soccer")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(5) > a')
            .click()
    }

    //validar página após clicar no submenu Beach Soccer
    validateBeachSoccer() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Beach Soccer")
    }

    
}