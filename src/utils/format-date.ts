export const formatDate = (date: string): string => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString('pt-br', {
    timeZone: 'America/Sao_Paulo',
  });
};
