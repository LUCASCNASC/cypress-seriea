export class FormacaoAtletasPage {

    //clicar no submenu Sub-20
    clickSub20() {
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(2) > a')
            .should("be.visible")
        cy.contains("Sub-20")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(2) > a')
            .click()
    }

    //validar página após clicar no submenu Sub-20
    validateSub20() {
        cy.get('.bg-dark > .d-none')
            .should("be.visible")
    }

    //clicar no submenu Estrutura
    clickEstrutura() {
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(3) > a')
            .should("be.visible")
        cy.contains("Estrutura")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(3) > a')
            .click()
    }

    //validar página após clicar no submenu Estrutura
    validateEstrutura() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Estrutura")
    }

    //clicar no submenu Calendário de Jogos
    clickCalendarioJogos() {
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(4) > a')
            .should("be.visible")
        cy.contains("Calendário de Jogos")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(4) > a')
            .click()
    }

    //validar página após clicar no submenu Calendário de Jogos
    validateCalendarioJogos() {
        cy.get('.a2a_button_facebook')
            .should("be.visible")
    }

    //clicar no submenu Depto. de Formação de Atletas
    clickDeptFormaçãoAtletas() {
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(5) > a')
            .should("be.visible")
        cy.contains("Depto. de Formação de Atletas")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(5) > a')
            .click()
    }

    //validar página após clicar no submenu Depto. de Formação de Atletas
    validateDeptFormaçãoAtletas() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Departamento de Formação de Atletas")
    }

    //clicar no submenu Peneiras 2024
    clickPeneiras() {
        cy.get(':nth-child(3) > :nth-child(6) > a')
            .should("be.visible")
        cy.contains("Peneiras 2024")
            .should("be.visible")
        cy.get(':nth-child(3) > :nth-child(6) > a')
            .click()
    }

    //validar página após clicar no submenu Peneiras 2024
    validatePeneiras() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Processo Seletivo de Triagem e Captação do Corinthians")
    }

}
