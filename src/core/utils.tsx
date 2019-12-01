export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'E-mail não pode ser vazio.';
  if (!re.test(email)) return 'Endereço do e-mail deve ser válido.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Senha não pode ser vazia.';

  if (!password || password.length < 6)
    return 'Senha deve ter no mínimo 6 caracteres.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Nome não pode ser vazio.';

  return '';
};
