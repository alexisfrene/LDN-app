export const getDollar = async () => {
  try {
    const res = await fetch(
      'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
    ).then((res) => res.json());
    const dollarBlue = res?.filter((item) => item.casa.nombre === 'Dolar Blue');

    return dollarBlue[0].casa;
  } catch (error) {
    console.log('ERROR HOME', error);
  }
};
