export const getPosition = (index, count) => {
  if (index == 0) {
    return "first";
  }
  if (index == count-1) {
    return "last";
  }

  const oddLabel = "odd";
  const evenLabel = "even";
  const isOdd = index % 2 == 0;
  return isOdd ? oddLabel : evenLabel;
};
