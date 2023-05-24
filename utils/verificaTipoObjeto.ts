export function verificaPropriedades(
  objeto: any,
  interfaceObjeto: any
): boolean {
  const objetoPropriedades = Object.keys(objeto);
  const interfacePropriedades = Object.keys(interfaceObjeto);

  return objetoPropriedades.every((propriedade) =>
    interfacePropriedades.includes(propriedade)
  );
}
