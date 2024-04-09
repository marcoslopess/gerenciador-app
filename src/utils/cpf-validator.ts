export const isValidCPF = (cpf: string) => {
  // Remove any non-digit characters from the CPF string
  const cleanCPF = cpf.replace(/\D/g, '');

  if (
    cleanCPF.length !== 11 || // CPF must have 11 digits
    /^(\d)\1{10}$/.test(cleanCPF) // Invalid CPF with all the same digits
  ) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }

  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cleanCPF.charAt(9))) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cleanCPF.charAt(10))) {
    return false;
  }

  return true;
};
