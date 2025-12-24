export class ServidorPage {

    //clicar no menu Servidor
    clickServidor() {
        cy.get('#pv_id_2_tab_1').click()
    }

    //clicar na opção Sistema Elotech Oxy
    clickSistemaElotechOxy() {
        cy.get('#pv_id_2_tabpanel_1 > [href="https://maringa.oxy.elotech.com.br"]').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar na opção 1550 - Ouvidoria do Servidor
    clickOuvidoriaServidor() {
        cy.get('#pv_id_2_tabpanel_1 > [href="http://www3.maringa.pr.gov.br/ouvidoria-do-servidor/"]').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar na opção Portal do Servidor
    clickPortalServidor() {
        cy.get('#pv_id_2_tabpanel_1 > [href="https://sisrh.maringa.pr.gov.br:9597/portaldoservidor/portal/login"]').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar na opção Portal do Estagiário
    clickPortalEstagiario() {
        cy.get('#pv_id_2_tabpanel_1 > [href="https://sisrh.maringa.pr.gov.br:9597/portaldoestagiario/portal/login"]').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

}