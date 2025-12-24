import { RedesSociaisPage } from '../page/RedesSociaisPage';

describe('Redes Sociais', () => {

  const redesSociaisPage = new RedesSociaisPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('FACEBOOK', () => {
    redesSociaisPage.clickFacebook();
  });

  it('INSTAGRAM', () => {
    redesSociaisPage.clickInstagram();
  });

  it('TIKTOK', () => {
    redesSociaisPage.clickTikTok();
  });

  it('X', () => {
    redesSociaisPage.clickX();
  });

  it('YOUTUBE', () => {
    redesSociaisPage.clickYoutube();
  });
});