import { AgendasPage } from '../page/AgendasPage';

describe('Redes Sociais', () => {

  const agendasPage = new AgendasPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.wait(400)
  });

  it('Cultural', () => {
    agendasPage.clickCultural();
  });

  it('Datas Comemorativas', () => {
    agendasPage.clickDatasComemorativas();
  });

  it('Eventos', () => {
    agendasPage.clickEventos();
  });

  it('Pontos Facultativos', () => {
    agendasPage.clickPontosFacultativos();
  });

  it('Cursos de Saúde', () => {
    agendasPage.clickCursosSaude();
  });

  it('Esportiva', () => {
    agendasPage.clickEsportiva();
  });

  it('Feriados', () => {
    agendasPage.clickFeriados();
  });

  it('Prefeitos', () => {
    agendasPage.clickPrefeito();
  });
});