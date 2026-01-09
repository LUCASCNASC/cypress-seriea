import { CompetitivasPage } from '../../../page/menus/modalidades/CompetitivasPage';
import { MenuModalidadesPage } from '../../../page/menus/modalidades/MenuModalidadesPage';

describe('menu futebol feminino', () => {

  const competitivasPage = new CompetitivasPage(); // ✅ cria instância
  const menuModalidadesPage = new MenuModalidadesPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuModalidadesPage.clickModalidades();
    menuModalidadesPage.validateCompetitivas();
  });

  it('Asa Delta', () => {
    competitivasPage.clickAsaDelta();
    competitivasPage.validateAsaDelta();
  });

  it('Basquete Masculino', () => {
    competitivasPage.clickBasqueteMasculino();
    competitivasPage.validateBasqueteMasculino();
  });

  it('Basquete Feminino', () => {
    competitivasPage.clickBasqueteFeminino();
    competitivasPage.validateBasqueteFeminino();
  });

  it('Beach Soccer', () => {
    competitivasPage.clickBeachSoccer();
    competitivasPage.validateBeachSoccer();
  });

  it.only('Bocha', () => {
    
  });

  it('Boxe', () => {
    
  });

  it('Footgolf', () => {
    
  });

  it('Futebol Americano', () => {
    
  });

  it('Futebol Sociaty', () => {
    
  });

  it('Futsal', () => {
    
  });

  it('Futsal Feminino Tiger', () => {
    
  });

  it('Handebol', () => {
    
  });

  it('MMA', () => {
    
  });

  it('Natação', () => {
    
  });

  it('Rally', () => {
    
  });

  it('Remo', () => {
    
  });

  it('Skate', () => {
    
  });

  it('Surf', () => {
    
  });

  it('Vôlei', () => {
    
  });

  it('Xadrez', () => {
    
  });
});