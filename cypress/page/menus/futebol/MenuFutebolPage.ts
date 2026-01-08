export class MenuFutebolPage {

    //clicar no menu FUTEBOL e validar
    clickFutebol() {
        cy.get(':nth-child(2) > .ct-submenu-trigger').click()
    }

    //validar "Futebol Feminino"
    validateFutebolFeminino() {
        cy.get('.mt-3 > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Futebol Feminino")
    }

    //validar "Futebol Masculino"
    validateFutebolMasculino() {
        cy.get('.ct-submenu > .mb-3 > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Futebol Masculino")
    }

    //validar "Formação de Atletas"
    validateFormacaoAtletas() {
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Formação de Atletas")
    }
}