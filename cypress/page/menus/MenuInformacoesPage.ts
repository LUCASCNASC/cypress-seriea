export class MenuInformacoesPage {

    //clicar no menu Informações
    clickInformacoes() {
        cy.get('#pv_id_1_5 > :nth-child(1) > .p-menubar-item-link').click()
    }

    //clicar no submenu Datas Comemorativas
    clickDatasComemorativas() {
        cy.get('#pv_id_1_5_0 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Consultar Protocolo de Formulário
    clickConsultarProtocoloFormulario() {
        cy.get('#pv_id_1_5_1 > .p-menubar-item-content > [data-test="menu-item"]').click()
        //cy.url().should('include', 'https://www.maringa.pr.gov.br/')
        cy.contains('Consultar Protocolo de Formulário')
    }

    //clicar no submenu Área de Esportes e Lazer
    clickAreaEsportesLazer() {
        cy.get('#pv_id_1_5_2 > .p-menubar-item-content > [data-test="menu-item"]').click()
        //cy.url().should('include', 'https://www.maringa.pr.gov.br/')
        cy.get('.section-title').should('be.visible')
    }

    //clicar no submenu Feiras
    clickFeiras() {
        cy.get('#pv_id_1_5_3 > .p-menubar-item-content > [data-test="menu-item"]').click()
        //cy.url().should('include', 'https://www.maringa.pr.gov.br/')
        cy.get('.section-title').should('be.visible')
    }

    //clicar no submenu Hortas Comunitárias
    clickHortasComunitarias() {
        cy.get('#pv_id_1_5_4 > .p-menubar-item-content > [data-test="menu-item"]').click()
        //cy.url().should('include', 'https://www.maringa.pr.gov.br/')
        cy.get('.section-title').should('be.visible')
    }

    //clicar no submenu Informativos
    clickInformativos() {
        cy.get('#pv_id_1_5_0 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Telefones e Endereços
    clickTelefonesEnderecos() {
        cy.get('#pv_id_1_5_0 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Unidades de Saúde
    clickUnidadesSaude() {
        cy.get('#pv_id_1_5_0 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Unidades Escolares
    clickUnidadesEscolares() {
        cy.get('#pv_id_1_5_0 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }
}