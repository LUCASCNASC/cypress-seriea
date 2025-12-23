export class MenuPortalGeoMaringaPage {

    //clicar no menu Portal Geo Maringá
    clickPortalGeoMaringa() {
        cy.get('#pv_id_1_7 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }
}