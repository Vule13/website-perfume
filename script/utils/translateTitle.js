export const translatedValues = function (arr) {
  const translatedTitleArr = arr.map((value) => {
    switch (value) {
      case "male-perfume":
        return "nước hoa nam";
      case "female-perfume":
        return "nước hoa nữ";
      case "unisex-perfume":
        return "nước hoa unisex";
      case "niche-perfume":
        return "nước hoa niche";
      case "chanel":
        return "Chanel";
      case "dior":
        return "Dior";
      case "roja":
        return "Roja";
      case "yeves-st":
        return "Yves Saint Laurent";
      case "lt2m":
        return "Dưới 2.000.000";
      case "2t2.5":
        return "Từ 2.000.000 đến 2.500.000";
      case "2.5t3":
        return "Từ 2.500.000 đến 3.000.000";
      case "gt3":
        return "Trên 3.000.000";
      default:
        return value;
    }
  });
  return translatedTitleArr;
};
