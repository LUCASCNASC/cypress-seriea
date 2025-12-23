export class MenuACidadePage {

    //clicar no menu A Cidade
    clickACidade() {
        cy.get('#pv_id_1_1 > :nth-child(1) > .p-menubar-item-link').click()
    }

    //clicar no submenu Bandeira
    clickBandeira() {
        cy.get('#pv_id_1_1_0 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Bandeira').and('be.visible')
    }

    //clicar no submenu Brasão
    clickBrasao() {
        cy.get('#pv_id_1_1_1 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Brasão').and('be.visible')
    }

    //clicar no submenu Cadastur
    clickCadastur() {
        cy.get('#pv_id_1_1_2 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Nossa Cidade').and('be.visible')
    }

    //clicar no submenu Demografia
    clickDemografia() {
        cy.get('#pv_id_1_1_3 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Nossa Cidade').and('be.visible')
    }

    //clicar no submenu Embarque/Desembarque Rodoviária
    clickEmbarqueDesembarqueRodoviaria() {
        cy.get('#pv_id_1_1_4 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Embarque/Desembarque Rodoviária').and('be.visible')
    }

    //clicar no submenu Galeria de Arte
    clickGaleriaDeArte() {
        cy.get('#pv_id_1_1_5 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Galeria de Arte').and('be.visible')
    }

    //clicar no submenu Hino
    clickHino() {
        cy.get('#pv_id_1_1_6 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Hino').and('be.visible')
    }

    //clicar no submenu Histórico no Município
    clickHistoricoDoMunicipio() {
        cy.get('#pv_id_1_1_7 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Histórico do Município').and('be.visible')
    }

    //clicar no submenu Maringá - Cidade Canção
    clickMaringaCidadeCancao() {
        cy.get('#pv_id_1_1_8 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('contain.text', 'Maringá - Cidade Canção').and('be.visible')
    }

    //clicar no submenu Maringá em Rotas
    clickMaringaEmRotas() {
        cy.get('#pv_id_1_1_9 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Maringá em Rotas').and('be.visible')
    }

    //clicar no submenu Nossa Cidade
    clickNossaCidade() {
        cy.get('#pv_id_1_1_10 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Nossa Cidade').and('be.visible')
    }

    //clicar no submenu Plano Municipal de Turismo 2023/2033
    clickPlanoMunicipalDeTurismo() {
        cy.get('#pv_id_1_1_11 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.text-3xl').should('have.text', 'Plano Municipal de Turismo 2023/2033').and('be.visible')
    }
}