import { ServidorPage } from '../../page/acesso_rapido/ServidorPage';

describe('acesso rápido Servidor', () => {

  const servidorPage = new ServidorPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    servidorPage.clickServidor(); // ✅ usa o método da instância
  });

  it('Sistema Elotech Oxy', () => {
    servidorPage.clickSistemaElotechOxy();
  });

  it('1550 - Ouvidoria do Servidor', () => {
    servidorPage.clickOuvidoriaServidor();
  });

  it('Portal do Servidor', () => {
    servidorPage.clickPortalServidor();
  });

  it('Portal do Estagiário', () => {
    servidorPage.clickPortalEstagiario();
  });

});
