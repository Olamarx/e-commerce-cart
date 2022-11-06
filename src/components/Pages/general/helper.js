export const imageContainer = {
  position: 'relative',
  textAlign: 'center',
  color: 'grey',
};
export const centered = {
  position: 'absolute',
  fontSize: '30px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const currencyPrice = (currency, array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].currency.symbol === currency) {
      return array[i].amount;
    }
  }
  return null;
};