import { MenuInicioPage } from '../../page/menus/MenuInicioPage';

describe('menu Início', () => {

  const menuInicioPage = new MenuInicioPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('Início', () => {
    menuInicioPage.clickInicio(); // ✅ usa o método da instância
  });
});
