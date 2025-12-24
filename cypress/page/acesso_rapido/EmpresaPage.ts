export class EmpresaPage {

    //clicar no menu Empresa
    clickEmpresa() {
        cy.get('#pv_id_2_tab_2').click()
    }

    //clicar na opção S.I.M
    clickSIM() {
        cy.get('#pv_id_2_tabpanel_2 > [href="http://www3.maringa.pr.gov.br/conferencia/?cod=simpoa"]').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar na opção ISS Eletronico
    clickISSEletronico() {
        cy.get('#pv_id_2_tabpanel_2 > [href="https://maringa.fintel.com.br/"]').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }
}