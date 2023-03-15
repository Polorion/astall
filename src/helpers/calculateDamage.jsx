export const calculateDamage = (damage, defence) => {
  const rez = damage - defence;
  if (rez <= 0) {
    return 0;
  } else {
    return rez;
  }
};
