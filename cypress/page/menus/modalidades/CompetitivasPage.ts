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

    //clicar no submenu Bocha
    clickBocha() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(6) > a')
            .should("be.visible")
        cy.contains("Bocha")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(6) > a')
            .click()
    }

    //validar página após clicar no submenu Bocha
    validateBocha() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Bocha")
    }

    //clicar no submenu Boxe
    clickBoxe() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(7) > a')
            .should("be.visible")
        cy.contains("Boxe")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(7) > a')
            .click()
    }

    //validar página após clicar no submenu Boxe
    validateBoxe() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Boxe")
    }

    //clicar no submenu Footgolf
    clickFootgolf() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(8) > a')
            .should("be.visible")
        cy.contains("Footgolf")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(8) > a')
            .click()
    }

    //validar página após clicar no submenu Footgolf
    validateFootgolf() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Footgolf")
    }

    //clicar no submenu Futebol Americano
    clickFutebolAmericano() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(9) > a')
            .should("be.visible")
        cy.contains("Futebol Americano")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(9) > a')
            .click()
    }

    //validar página após clicar no submenu Futebol Americano
    validateFutebolAmericano() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Futebol Americano")
    }

    //clicar no submenu Futebol Society
    clickFutebolSociety() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(10) > a')
            .should("be.visible")
        cy.contains("Futebol Society")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(10) > a')
            .click()
    }

    //validar página após clicar no submenu Futebol Society
    validateFutebolSociety() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Futebol Society")
    }

    //clicar no submenu Futsal
    clickFutsal() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(11) > a')
            .should("be.visible")
        cy.contains("Futsal")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(11) > a')
            .click()
    }

    //validar página após clicar no submenu Futsal
    validateFutsal() {
        cy.get('.jumbotron-big-title > .d-none')
            .should("be.visible")
    }

    //clicar no submenu Futsal Feminino Tiger
    clickFutsalFemininoTiger() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(12) > a')
            .should("be.visible")
        cy.contains("Futsal Feminino Tiger")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(12) > a')
            .click()
    }

    //validar página após clicar no submenu Futsal Feminino Tiger
    validateFutsalFemininoTiger() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Futsal Feminino Tiger")
    }

    //clicar no submenu Handebol
    clickHandebol() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(13) > a')
            .should("be.visible")
        cy.contains("Handebol")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(13) > a')
            .click()
    }

    //validar página após clicar no submenu Handebol
    validateHandebol() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Handebol")
    }

    //clicar no submenu MMA
    clickMMA() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(14) > a')
            .should("be.visible")
        cy.contains("MMA")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(14) > a')
            .click()
    }

    //validar página após clicar no submenu MMA
    validateMMA() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "MMA")
    }

    //clicar no submenu Natação
    clickNatacao() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(15) > a')
            .should("be.visible")
        cy.contains("Natação")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(15) > a')
            .click()
    }

    //validar página após clicar no submenu Natação
    validateNatacao() {
        cy.get('.centered-title-black > h1')
            .should("be.visible")
    }

    //clicar no submenu Rally
    clickRally() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(16) > a')
            .should("be.visible")
        cy.contains("Rally")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(16) > a')
            .click()
    }

    //validar página após clicar no submenu Rally
    validateRally() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Rally")
    }

    //clicar no submenu Remo
    clickRemo() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(17) > a')
            .should("be.visible")
        cy.contains("Remo")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(17) > a')
            .click()
    }

    //validar página após clicar no submenu Remo
    validateRemo() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Remo")
    }

    //clicar no submenu Skate
    clickSkate() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(18) > a')
            .should("be.visible")
        cy.contains("Skate")
            .should("be.visible")
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(18) > a')
            .click()
    }

    //validar página após clicar no submenu Skate
    validateSkate() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Skate")
    }

    
}