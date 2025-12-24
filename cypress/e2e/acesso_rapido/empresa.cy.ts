import { EmpresaPage } from '../../page/acesso_rapido/EmpresaPage';

describe('acesso rápido Empresa', () => {

  const empresaPage = new EmpresaPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    empresaPage.clickEmpresa(); // ✅ usa o método da instância
  });

  it('S.I.M', () => {
    empresaPage.clickSIM();
  });

  it.only('ISS Eletronico', () => {
    empresaPage.clickISSEletronico();
  });
});
