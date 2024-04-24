import { formatNumber } from "../utils/formatNumber.js";

const productItem = (data) => {
  return `
    <div>
    <div>
      <img src="${data.image}" alt="${data.name}" />
    </div>
    <div>
      <h3>${data.name}</h3>
      <div>${formatNumber(data.price)}đ</div>
      <div>
        <span>rating</span>
        <span>icon</span>
      </div>
    </div>
  </div>
    `;
};

export { productItem };
