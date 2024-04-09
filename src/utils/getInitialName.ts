export function getInitials(nome: string) {
  const partesDoNome = nome.split(' ');
  const iniciais = partesDoNome
    .map((parte) => parte[0])
    .join('')
    .toUpperCase();
  return iniciais.substring(0, 2);
}
