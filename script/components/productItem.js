import { formatNumber } from "../utils/formatNumber.js";

const productItem = (data, col) => {
  let sale = "";
  let price = "";
  if (data.sale) {
    sale = `<div class="product-tag">-15%</div>`;
    price = `<span class="price">${formatNumber(data.price)}đ</span>
    <span class="sale">${formatNumber(data.sale)}đ</span>`;
  } else {
    price = `<span>${formatNumber(data.price)}đ</span>`;
  }

  return `
  <div class="col" style="--col-xl: ${col};">
    <div  class="product-item" >
      ${sale}
      <a href="./product-detail.html" class="product-item_img">
        <img src="${data.image}" alt="${data.name}" />
      </a>
      <div class="product-item_content">
        <h3 class="product-item_title">${data.name}</h3>
        <div class="product-item_price">${price}</div>
        <div class="product-item_info">
          <span class="product-item_rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="18" viewBox="0 0 86 18" fill="none">
              <path d="M8.6 0L10.5308 6.21885H16.7791L11.7241 10.0623L13.655 16.2812L8.6 12.4377L3.54505 16.2812L5.47587 10.0623L0.420914 6.21885H6.66918L8.6 0Z" fill="#EC3237"/>
              <path d="M25.8 0L27.7308 6.21885H33.979L28.9241 10.0623L30.8549 16.2812L25.8 12.4377L20.745 16.2812L22.6758 10.0623L17.6209 6.21885H23.8691L25.8 0Z" fill="#EC3237"/>
              <path d="M42.9999 0L44.9307 6.21885H51.179L46.124 10.0623L48.0549 16.2812L42.9999 12.4377L37.9449 16.2812L39.8758 10.0623L34.8208 6.21885H41.0691L42.9999 0Z" fill="#EC3237"/>
              <path d="M60.2001 0L62.1309 6.21885H68.3792L63.3242 10.0623L65.2551 16.2812L60.2001 12.4377L55.1451 16.2812L57.076 10.0623L52.021 6.21885H58.2693L60.2001 0Z" fill="#EC3237"/>
              <path d="M77.4 0L79.3309 6.21885H85.5791L80.5242 10.0623L82.455 16.2812L77.4 12.4377L72.3451 16.2812L74.2759 10.0623L69.221 6.21885H75.4692L77.4 0Z" fill="#EC3237"/>
            </svg>
          </span>
          <span class="product-item_card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 16C16.5304 16 17.0391 16.2107 17.4142 16.5858C17.7893 16.9609 18 17.4696 18 18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20C15.4696 20 14.9609 19.7893 14.5858 19.4142C14.2107 19.0391 14 18.5304 14 18C14 16.89 14.89 16 16 16ZM0 0H3.27L4.21 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20 3.17 19.95 3.34 19.88 3.5L16.3 9.97C15.96 10.58 15.3 11 14.55 11H7.1L6.2 12.63L6.17 12.75C6.17 12.8163 6.19634 12.8799 6.24322 12.9268C6.29011 12.9737 6.3537 13 6.42 13H18V15H6C5.46957 15 4.96086 14.7893 4.58579 14.4142C4.21071 14.0391 4 13.5304 4 13C4 12.65 4.09 12.32 4.24 12.04L5.6 9.59L2 2H0V0ZM6 16C6.53043 16 7.03914 16.2107 7.41421 16.5858C7.78929 16.9609 8 17.4696 8 18C8 18.5304 7.78929 19.0391 7.41421 19.4142C7.03914 19.7893 6.53043 20 6 20C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18C4 16.89 4.89 16 6 16ZM15 9L17.78 4H5.14L7.5 9H15Z" fill="#176AB4"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
    `;
};

export { productItem };
