const header = () => {
  const header = `
  <header>
  <div class="header-top container">
    <div class="header-left">
      <img src="./assets/Logo-removebg-preview.png" alt="logo" />
    </div>
    <div class="header-search">
      <input
        class="header-search_input"
        type="text"
        id="search"
        placeholder="Tìm kiếm sản phẩm"
      />
      <a href="./searchPage.html" class="header-search_button">
        <img
          class="header-search_icon"
          src="./assets/search.png"
          alt="search-icon"
        />
      </a>
    </div>
    <div class="header-right" style="--col-xl: 2">
      <div class="header-card">
        <a href="./cart.html"><img src="./assets/Giỏ hàng.png" alt="cart" /></a>
      </div>
      <a href="account.html" class="header-account">
        <img id="avatar" src="./assets/user.png" alt="account" />
      </a>
    </div>
  </div>
  <nav class="header-bottom">
    <ul class="container nav-list">
      <li class="nav-item">
        <a class="nav-item_link" href="./index.html">Trang chủ</a>
      </li>
      <li class="nav-item">
        <a class="nav-item_link" href="./product.html">Sản phẩm</a>
      </li>
      <li class="nav-item">
        <a class="nav-item_link" href="./blog.html">Tin tức</a>
      </li>
      <li class="nav-item">
        <a class="nav-item_link" href="./about.html">Giới Thiệu</a>
      </li>
      <li class="nav-item">
        <a class="nav-item_link" href="./contact.html">Liên hệ</a>
      </li>
    </ul>
  </nav>
</header>
`;
  return header;
};

export { header };
