export const getDollar = async () => {
  try {
    const res = await fetch('https://dolarapi.com/v1/dolares/blue').then(
      (res) => res.json(),
    );

    return res;
  } catch (error) {
    console.log('ERROR HOME', error);
  }
};
