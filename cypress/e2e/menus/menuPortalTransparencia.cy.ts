import { MenuPortalTransparenciaPage } from '../../page/menus/MenuPortalTransparenciaPage';

describe('menu Portal Transparencia', () => {

  const menuPortalTransparenciaPage = new MenuPortalTransparenciaPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('Portal Transparencia', () => {
    menuPortalTransparenciaPage.clickPortalTransparencia(); // ✅ usa o método da instância
  });
});
