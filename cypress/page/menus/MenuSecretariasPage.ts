export class MenuSecretariasPage {

    //clicar no menu Secretarias
    clickSecretarias() {
        cy.get('#pv_id_1_2 > :nth-child(1) > .p-menubar-item-link').click()
    }

    //clicar no submenu Prefeitos
    clickPrefeitos() {
        cy.get('#pv_id_1_2_0 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.section-title').should('have.text', 'Prefeitos')
    }

    //clicar no submenu Estrutura Organizacional / Organograma
    clickEstruturaOrganizacional() {
        cy.get('#pv_id_1_2_1 > .p-menubar-item-content > .p-menubar-item-link').click()
        //cy.get('.section-title').should('have.text', 'Prefeitos')
    }

    //clicar no submenu do submenu Secretarias
    clickSubSecretarias() {
        // 1️⃣ Abre o menu "Secretarias"
        cy.get('li.p-menubar-item[aria-label="Secretarias"][aria-level="2"]')
        .trigger('mouseover')
    }

    //clicar no submenu do submenu Secretarias -> Gabinete do Prefeito
    clickGabinetePrefeito() {
        cy.get('li.p-menubar-item[aria-label="Gabinete do Prefeito"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Gabinete do Prefeito')
    }

    //clicar no submenu do submenu Secretarias -> Aceleração Econômica E Turismo
    clickAceleracaoEconomicaTurismo() {
        cy.get('li.p-menubar-item[aria-label="Aceleração Econômica E Turismo"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria Municipal de Aceleração Econômica e Turismo')
    }

    //clicar no submenu do submenu Secretarias -> Aeroporto
    clickAeroporto() {
        cy.get('li.p-menubar-item[aria-label="Aeroporto"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Aeroporto')
    }

    //clicar no submenu do submenu Secretarias -> Agência Maringaense de Regulação - AMR
    clickAgenciaMaringaenseRegulacaoAMR() {
        cy.get('li.p-menubar-item[aria-label="Agência Maringaense de Regulação - AMR"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Agência Maringaense de Regulação')
    }

    //clicar no submenu do submenu Secretarias -> Assistência Social
    clickAssistenciaSocial() {
        cy.get('li.p-menubar-item[aria-label="Assistência Social"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria Municipal de Assistência Social')
    }

    //clicar no submenu do submenu Secretarias -> Assuntos Metropolitanos e Comunitários
    clickAssuntosMetropolitanosComunitarios() {
        cy.get('li.p-menubar-item[aria-label="Assuntos Metropolitanos e Comunitários"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Assuntos Metropolitanos')
    }

    //clicar no submenu do submenu Secretarias -> Chefia de Gabinete
    clickChefiaGabinete() {
        cy.get('li.p-menubar-item[aria-label="Chefia de Gabinete"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Chefia de Gabinete do Prefeito')
    }

    //clicar no submenu do submenu Secretarias -> Compliance E Controle
    clickComplianceControle() {
        cy.get('li.p-menubar-item[aria-label="Compliance E Controle"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Compliance e Controle')
    }

    //clicar no submenu do submenu Secretarias -> Comunicação
    clickComunicacao() {
        cy.get('li.p-menubar-item[aria-label="Comunicação"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Comunicação')
    }

    //clicar no submenu do submenu Secretarias -> Criança e do Adolescente
    clickCriançaAdolescente() {
        cy.get('li.p-menubar-item[aria-label="Criança e do Adolescente"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria da Criança e do Adolescente')
    }

    //clicar no submenu do submenu Secretarias -> Cultura
    clickCultura() {
        cy.get('li.p-menubar-item[aria-label="Cultura"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Cultura')
    }

    //clicar no submenu do submenu Secretarias -> Educação
    clickEducacao() {
        cy.get('li.p-menubar-item[aria-label="Educação"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Educação')
    }

    //clicar no submenu do submenu Secretarias -> Esportes e Lazer
    clickEsportesLazer() {
        cy.get('li.p-menubar-item[aria-label="Esportes e Lazer"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Esportes e Lazer')
    }

    //clicar no submenu do submenu Secretarias -> Fazenda
    clickFazenda() {
        cy.get('li.p-menubar-item[aria-label="Fazenda"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Fazenda')
    }

    //clicar no submenu do submenu Secretarias -> Gestão De Pessoas
    clickGestaoPessoas() {
        cy.get('li.p-menubar-item[aria-label="Gestão De Pessoas"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Gestão de Pessoas')
    }

    //clicar no submenu do submenu Secretarias -> Governo
    clickGoverno() {
        cy.get('li.p-menubar-item[aria-label="Governo"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Governo')
    }

    //clicar no submenu do submenu Secretarias -> Infraestrutura
    clickInfrastrutura() {
        cy.get('li.p-menubar-item[aria-label="Infraestrutura"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Infraestrutura')
    }

    //clicar no submenu do submenu Secretarias -> Instituto Ambiental de Maringá
    clickInstitutoAmbientalMaringa() {
        cy.get('li.p-menubar-item[aria-label="Instituto Ambiental de Maringá"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Instituto Ambiental de Maringá')
    }

    //clicar no submenu do submenu Secretarias -> Instituto de Pesquisa E Planejamento Urbano De Maringá - IPPLAM
    clickInstitutoPesquisaPlanejamentoUrbanoMaringa() {
        cy.get('li.p-menubar-item[aria-label="Instituto de Pesquisa E Planejamento Urbano De Maringá - IPPLAM"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Instituto de Pesquisa e Planejamento Urbano de Maringá')
    }

    //clicar no submenu do submenu Secretarias -> Juventude Cidadania E Migrantes
    clickJuventudeCidadaniaMigrantes() {
        cy.get('li.p-menubar-item[aria-label="Juventude Cidadania E Migrantes"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Juventude, Cidadania e Migrantes')
    }

    //clicar no submenu do submenu Secretarias -> Limpeza Urbana
    clickLimpezaUrbana() {
        cy.get('li.p-menubar-item[aria-label="Limpeza Urbana"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Limpeza Urbana')
    }

    //clicar no submenu do submenu Secretarias -> Logística E Compras
    clickLogísticaCompras() {
        cy.get('li.p-menubar-item[aria-label="Logística E Compras"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria Municipal Logística e Compras')
    }

    //clicar no submenu do submenu Secretarias -> Maringá Previdência
    clickMaringaPrevidencia() {
        cy.get('li.p-menubar-item[aria-label="Maringá Previdência"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Maringá Previdência')
    }

    //clicar no submenu do submenu Secretarias -> Mobilidade Urbana
    clickMobilidadeUrbana() {
        cy.get('li.p-menubar-item[aria-label="Mobilidade Urbana"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Mobilidade Urbana')
    }

    //clicar no submenu do submenu Secretarias -> Obras Públicas
    clickObrasPublicas() {
        cy.get('li.p-menubar-item[aria-label="Obras Públicas"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Obras Públicas')
    }

    //clicar no submenu do submenu Secretarias -> Pessoa com Deficiência
    clickPessoaDeficiencia() {
        cy.get('li.p-menubar-item[aria-label="Pessoa com Deficiência"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria da Pessoa com Deficiência')
    }

    //clicar no submenu do submenu Secretarias -> Políticas Públicas Para Mulheres
    clickPoliticasPublicasMulheres() {
        cy.get('li.p-menubar-item[aria-label="Políticas Públicas Para Mulheres"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Políticas Públicas para Mulheres')
    }

    //clicar no submenu do submenu Secretarias -> Procon
    clickProcon() {
        cy.get('li.p-menubar-item[aria-label="Procon"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Coordenadoria de Proteção e Defesa do Consumidor - Procon')
    }

    //clicar no submenu do submenu Secretarias -> Procuradoria Geral do Município
    clickProcuradoriaGeralMunicipio() {
        cy.get('li.p-menubar-item[aria-label="Procuradoria Geral do Município"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Procuradoria-Geral do Município')
    }

    //clicar no submenu do submenu Secretarias -> Proteção E Bem Estar Animal
    clickProtecaoBemEstarAnimal() {
        cy.get('li.p-menubar-item[aria-label="Proteção E Bem Estar Animal"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Proteção e Bem Estar Animal')
    }

    //clicar no submenu do submenu Secretarias -> Saúde
    clickSaude() {
        cy.get('li.p-menubar-item[aria-label="Saúde"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria Municipal de Saúde')
    }

    //clicar no submenu do submenu Secretarias -> Segurança
    clickSeguranca() {
        cy.get('li.p-menubar-item[aria-label="Segurança"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Segurança')
    }

    //clicar no submenu do submenu Secretarias -> Tecnologia e Inovação
    clickTecnologiaInovacao() {
        cy.get('li.p-menubar-item[aria-label="Tecnologia e Inovação"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Agência Maringá de Tecnologia e Inovação')
    }

    //clicar no submenu do submenu Secretarias -> Trabalho, Renda e Agricultura Familiar
    clickTrabalhoRendaAgriculturaFamiliar() {
        cy.get('li.p-menubar-item[aria-label="Trabalho, Renda e Agricultura Familiar"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Trabalho, Renda e Agricultura Familiar')
    }

    //clicar no submenu do submenu Secretarias -> Urbanismo e Habitação
    clickUrbanismoHabitação() {
        cy.get('li.p-menubar-item[aria-label="Urbanismo e Habitação"][aria-level="3"]')
        .find('a.p-menubar-item-link')
        .click({force:true})

        cy.contains('Secretaria de Urbanismo e Habitação')
    }

}