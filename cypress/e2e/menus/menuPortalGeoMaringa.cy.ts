import { MenuPortalGeoMaringaPage } from '../../page/menus/MenuPortalGeoMaringaPage';

describe('menu Portal Geo Maringá', () => {

  const menuPortalGeoMaringaPage = new MenuPortalGeoMaringaPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('Portal Geo Maringá', () => {
    menuPortalGeoMaringaPage.clickPortalGeoMaringa(); // ✅ usa o método da instância
  });
});
