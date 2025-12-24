export class AgendasPage {

    //clicar no Cultural
    clickCultural() {
        cy.contains('.agenda-item', 'Cultural').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }

    //clicar no Datas Comemorativas
    clickDatasComemorativas() {
        cy.contains('.agenda-item', 'Datas Comemorativas').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }

    //clicar no Eventos
    clickEventos() {
        cy.contains('.agenda-item', 'Eventos').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }

    //clicar no Pontos Facultativos
    clickPontosFacultativos() {
        cy.contains('.agenda-item', 'Pontos Facultativos').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }

    //clicar no Cursos da Saúde
    clickCursosSaude() {
        cy.contains('.agenda-item', 'Cursos da Saúde').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }

    //clicar no Esportiva
    clickEsportiva() {
        cy.contains('.agenda-item', 'Esportiva').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }

    //clicar no Feriados
    clickFeriados() {
        cy.contains('.agenda-item', 'Feriados').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }

    //clicar no Prefeito
    clickPrefeito() {
        cy.contains('.agenda-item', 'Prefeito').click({force:true})
        // cy.intercept('GET', '/public/v1/agendas**').as('api_agendas');
        // cy.wait('@api_agendas', { timeout: 5000 });
        cy.contains('Nenhum registro encontrado')
    }
}