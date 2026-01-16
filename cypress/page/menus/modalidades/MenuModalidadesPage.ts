export class MenuModalidadesPage {

    //clicar no menu MODALIDADES e validar
    clickModalidades() {
        cy.get('.menu-items-left > .ct-flex-align-center > :nth-child(3) > .ct-submenu-trigger').click()
    }

    //validar "Competitivas"
    validateCompetitivas() {
        cy.get('.ct-submenu > :nth-child(1) > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Competitivas")
    }

    //validar "Associativas"
    validateAssociativas() {
        cy.get('.ct-active > .ct-submenu > :nth-child(2) > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Associativas")
    }

    //validar "Paradesporto"
    validateParadesporto() {
        cy.get('.ct-active > .ct-submenu > :nth-child(3) > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Paradesporto")
    }
    
}
