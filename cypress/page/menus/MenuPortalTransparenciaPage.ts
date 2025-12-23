export class MenuPortalTransparenciaPage {

    //clicar no menu Portal Transparencia
    clickPortalTransparencia() {
        cy.get('#pv_id_1_6 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }
}