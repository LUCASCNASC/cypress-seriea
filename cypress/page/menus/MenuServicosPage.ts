export class MenuServicosPage {

    //clicar no menu Serviços
    clickServicos() {
        cy.get('#pv_id_1_4 > :nth-child(1) > .p-menubar-item-link').click()
    }

    //clicar no submenu Publicações Oficiais
    clickPublicacoesOficiais() {
        cy.get('#pv_id_1_4_0 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.section-title').should('be.visible')
    }

    //clicar no submenu Portal de Serviços
    clickPortalServicos() {
        cy.get('#pv_id_1_4_1 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Portal do Servidor
    clickPortalServidor() {
        cy.get('#pv_id_1_4_2 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Portal do Estagiário
    clickPortalEstagiario() {
        cy.get('#pv_id_1_4_3 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido
    clickSubAcessoRapido() {
        // 1️⃣ Abre o menu "Acesso Rapido"
        cy.get('li.p-menubar-item[aria-label="Acesso Rapido"][aria-level="2"]')
        .trigger('mouseover')
    }

    //clicar no submenu do submenu Acesso Rapido -> Farmácia Móvel
    clickFarmaciaMovel() {
        cy.get('li.p-menubar-item[aria-label="Farmácia Móvel"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Resid. Médica Edital 2026
    clickResidenciaMedicaEdital() {
        cy.get('li.p-menubar-item[aria-label="Resid. Médica Edital 2026"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> PSS Educação 2025
    clickPSSEducacao() {
        cy.get('li.p-menubar-item[aria-label="PSS Educação 2025"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> PSS Saúde 2025
    clickPSSSaude() {
        cy.get('li.p-menubar-item[aria-label="PSS Saúde 2025"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Sistema Elotech Oxy
    clickSistemaElotechOxy() {
        cy.get('li.p-menubar-item[aria-label="Sistema Elotech Oxy"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Agenda Previsão de Pagamentos
    clickAgendaPrevisaoPagamentos() {
        cy.get('li.p-menubar-item[aria-label="Agenda Previsão de Pagamentos"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> 1550 - Ouvidoria do Servidor
    clickOuvidoriaServidor() {
        cy.get('li.p-menubar-item[aria-label="1550 - Ouvidoria do Servidor"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Vacinação
    clickVacinacao() {
        cy.get('li.p-menubar-item[aria-label="Vacinação"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> leis do Município
    clickLeisMunicipio() {
        cy.get('li.p-menubar-item[aria-label="leis do Município"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Portal do Servidor
    clickPortalDoServidor() {
        cy.get('li.p-menubar-item[aria-label="Portal do Servidor"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Estágio
    clickEstagio() {
        cy.get('li.p-menubar-item[aria-label="Estágio"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> S.I.M
    clickSIM() {
        cy.get('li.p-menubar-item[aria-label="S.I.M"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Carta de Serviços
    clickCartaServicos() {
        cy.get('li.p-menubar-item[aria-label="Carta de Serviços"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> SEI
    clickSEI() {
        cy.get('li.p-menubar-item[aria-label="SEI"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Passe do Estudante
    clickPasseEstudante() {
        cy.get('li.p-menubar-item[aria-label="Passe do Estudante"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> ISS Eletrônico
    clickINSSEletronico() {
        cy.get('li.p-menubar-item[aria-label="ISS Eletrônico"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Consulta Concursos
    clickConsultaConcursos() {
        cy.get('li.p-menubar-item[aria-label="Consulta Concursos"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Diário Oficial
    clickDiarioOficial() {
        cy.get('li.p-menubar-item[aria-label="Diário Oficial"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Portal do Estagiário
    clickPortalDoEstagiario() {
        cy.get('li.p-menubar-item[aria-label="Portal do Estagiário"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> EMISSÃO DE GUIAS/BOLETOS
    clickEmissaoGuiasBoletos() {
        cy.get('li.p-menubar-item[aria-label="EMISSÃO DE GUIAS/BOLETOS"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Emissão de Certidões
    clickEmissaoCertidoes() {
        cy.get('li.p-menubar-item[aria-label="Emissão de Certidões"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Plano Diretor 2020-2030
    clickPlanoDiretor() {
        cy.get('li.p-menubar-item[aria-label="Plano Diretor 2020-2030"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> FAQ - LGPD
    clickFaqLGPD() {
        cy.get('li.p-menubar-item[aria-label="FAQ - LGPD"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Portal Maringá compra
    clickPortalMaringaCompra() {
        cy.get('li.p-menubar-item[aria-label="Portal Maringá compra"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Notifica Saúde
    clickNotificaSaude() {
        cy.get('li.p-menubar-item[aria-label="Notifica Saúde"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Portal Saúde Maringá
    clickPortalSaudeMaringa() {
        cy.get('li.p-menubar-item[aria-label="Portal Saúde Maringá"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Sala digital do microempreendedor
    clickSalaDigitalMicroempreendedor() {
        cy.get('li.p-menubar-item[aria-label="Sala digital do microempreendedor"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Agência do Trabalhador
    clickAgenciaTrabalhador() {
        cy.get('li.p-menubar-item[aria-label="Agência do Trabalhador"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Vacinação Covid-19
    clickVacinacaoCovid19() {
        cy.get('li.p-menubar-item[aria-label="Vacinação Covid-19"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Acesso à Informação
    clickAcessoInformacao() {
        cy.get('li.p-menubar-item[aria-label="Acesso à Informação"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu do submenu Acesso Rapido -> Portal Covid-19
    clickPortalCovid19() {
        cy.get('li.p-menubar-item[aria-label="Portal Covid-19"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }
}