export const getRating = (rating) => {
  switch (rating) {
    case rating >= 0 && rating < 3:
      return `Bad`;
    case rating >= 3 && rating < 5:
      return `Normal`;
    case rating >= 5 && rating < 8:
      return `Good`;
    case rating >= 8 && rating < 10:
      return `Very good`;
    case 10:
      return `Awesome`;
    default:
      return ``;
  }
};
