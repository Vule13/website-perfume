const footer = () => {
  const footer = `
  <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col" style="--col-xl: 4">
            <h3 class="footer-title">VỀ LOVELY PERFUME</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <a class="footer-item_link" href="#">Sản phẩm</a>
              </li>
              <li class="footer-item">
                <a class="footer-item_link" href="#">Tin tức</a>
              </li>
              <li class="footer-item">
                <a class="footer-item_link" href="#">Giới thiệu</a>
              </li>
              <li class="footer-item">
                <a class="footer-item_link" href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div class="col" style="--col-xl: 4">
            <h3 class="footer-title">Thông tin liên hệ</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <div class="footer-item_contact">
                  <span class="footer-icon">
                    <img src="./assets/pin.png" alt="icon" />
                  </span>
                  <a class="footer-item_link" href="#"
                    >229 Đặng Tiến Đông, Đống Đa, Hà Nội</a
                  >
                </div>
              </li>
              <li class="footer-item">
                <div class="footer-item_contact">
                  <span class="footer-icon">
                    <img src="./assets/telephone.png" alt="icon" />
                  </span>
                  <a class="footer-item_link" href="#">0965998668</a>
                </div>
              </li>
              <li class="footer-item">
                <div class="footer-item_contact">
                  <span class="footer-icon">
                    <img src="./assets/mail.png" alt="icon" />
                  </span>
                  <a class="footer-item_link" href="#">info@lovelyperfume.vn</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="col" style="--col-xl: 4">
            <h3 class="footer-title">Chính sách</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <a class="footer-item_link" href="policy.html"
                  >Chính sách đổi trả - bảo hành</a
                >
              </li>
              <li class="footer-item">
                <a class="footer-item_link" href="#"
                  >Chính sách bảo mật thông tin</a
                >
              </li>
              <li class="footer-item">
                <a class="footer-item_link" href="#">Chính sách vận chuyển</a>
              </li>
              <li class="footer-item">
                <a class="footer-item_link" href="#">Hướng dẫn mua hàng</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
  return footer;
};

export { footer };
