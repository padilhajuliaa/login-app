describe('Operações matemáticas básicas', () => {
  
    test('Soma de 2 + 2 deve ser 4', () => {
      expect(2 + 2).toBe(4);
    });
  
    test('Subtração de 5 - 3 deve ser 2', () => {
      expect(5 - 3).toBe(2);
    });
  
    test('Multiplicação de 3 * 4 deve ser 12', () => {
      expect(3 * 4).toBe(12);
    });
  
    test('Divisão de 10 / 2 deve ser 5', () => {
      expect(10 / 2).toBe(5);
    });
  
    test('Número 10 deve ser maior que 5', () => {
      expect(10).toBeGreaterThan(5);
    });
  
  });
  