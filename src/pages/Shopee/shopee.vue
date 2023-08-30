<template>
  <div class="app">
        <!-- header -->
        <header class="header">
            <div class="grid wide">
                <!-- navbar -->
                <nav class="header__navbar hide-on-mobile-tablet">
                    <ul class="header__nav-list">
                        <li class="header__nav-item header__nav-item--hover header__nav-item--separate">Kênh Người Bán</li>
                        <li class="header__nav-item header__nav-item--hover header__nav-item--separate">Trở thành Người bán Shopee</li>
                        <li class="header__nav-item header__nav-item--hover header__nav-item--separate header__show-qr">
                            Tải ứng dụng
                        </li>
                        <!-- qr code -->
                        <div class="header__qrcode">
                            <img src="@/assets/img/qr/qr-code.png" class="header__qr">
                            <div class="header__apps">
                                <a href="#" class="header__app-link">
                                    <img src="@/assets/img/qr/app-store.png" class="header__app-img">
                                </a>
                                <a href="#" class="header__app-link">
                                    <img src="@/assets/img/qr/gg-play.png" class="header__app-img">
                                </a>
                                <a href="#" class="header__app-link">
                                    <img src="@/assets/img/qr/app-gallery.png" class="header__app-img">
                                </a>
                                <a href="#" class="header__app-link">
                                    <img src="@/assets/img/qr/ltp-img.png" class="header__app-img">
                                </a>
                            </div>
                        </div>
                        <li class="header__nav-item">
                            Kết nối
                            <a href="#" class="header__nav-icon-link">
                                <i class="header__nav-icon fab fa-facebook"></i>
                            </a>
                            <a href="#" class="header__nav-icon-link">
                                <i class="header__nav-icon fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <ul class="header__nav-list">
                        <li class="header__nav-item header__show-note">
                            <a href="#" class="header__nav-item-link">
                                <i class="header__nav-icon far fa-bell"></i>
                                Thông báo
                            </a>
                            <!-- thông báo -->
                            <div class="header__notifi">
                                <header class="header__notifi-header">
                                    <h3>Thông Báo Mới Nhận</h3>
                                </header>
                                <ul class="header__notifi-list">
                                    <li class="header__notifi-item">
                                        <a href="#" class="header__notifi-link">
                                            <img src="@/assets/img/sp/casio.png" class="header__notifi-img">
                                            <div class="header__notifi-info">
                                                <div class="header__notifi-name">
                                                    Casio fx 580 VN Plus
                                                </div>
                                                <div class="header__notifi-desc">
                                                    Mua Casio 580 của LTP bao xịn, bao mượt, bao đẹp
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header__notifi-item">
                                        <a href="#" class="header__notifi-link">
                                            <img src="@/assets/img/sp/iphone.png" class="header__notifi-img">
                                            <div class="header__notifi-info">
                                                <div class="header__notifi-name">
                                                    Điện Thoại iPhone 13 Pro 128GB - Hàng Nhập Khẩu
                                                </div>
                                                <div class="header__notifi-desc">
                                                    3 Camera: Ống kính góc rộng f/1.5 - Tele f/2.8 - Siêu rộng f/1.8
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header__notifi-item">
                                        <a href="#" class="header__notifi-link">
                                            <img src="@/assets/img/sp/iphone2.png" class="header__notifi-img">
                                            <div class="header__notifi-info">
                                                <div class="header__notifi-name">
                                                    Apple iPhone 12 Pro Max 128GB
                                                </div>
                                                <div class="header__notifi-desc">
                                                    iPhone 12 Pro Max. Màn hình Super Retina XDR 6.7 inch
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header__notifi-item">
                                        <a href="#" class="header__notifi-link">
                                            <img src="@/assets/img/sp/laptop.png" class="header__notifi-img">
                                            <div class="header__notifi-info">
                                                <div class="header__notifi-name">
                                                    Laptop HP 650 g1 siêu khỏe bền
                                                </div>
                                                <div class="header__notifi-desc">
                                                    Laptop siêu bền, HP 650 g1 siêu khỏe bền ssd 120gb 15,6inh FULL HD
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="header__notifi-item">
                                        <a href="#" class="header__notifi-link">
                                            <img src="@/assets/img/sp/laptop2.png" class="header__notifi-img">
                                            <div class="header__notifi-info">
                                                <div class="header__notifi-name">
                                                    Laptop thinkpad x240 chất mỏng nhẹ i5 4300u Ram 4gb Ssd 128gb
                                                </div>
                                                <div class="header__notifi-desc">
                                                    HP 650 g1 chip M đời 4, cpu i5 4200M ram 4gb -8gb
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <footer class="header__notifi-footer">
                                    <a href="#" class="header__notifi-footer-btn">Xem tất cả</a>
                                </footer>
                            </div>
                        </li>
                        <li class="header__nav-item">
                            <a href="#" class="header__nav-item-link">
                                <i class="header__nav-icon far fa-question-circle"></i>
                                Hỗ trợ
                            </a>
                        </li>
                        
                        <li class="header__nav-item header__nav-item--bold header__nav-item--separate">
                            <a href="#" class="header__nav-item-link">Đăng ký</a>
                        </li>
                        <li class="header__nav-item header__nav-item--bold">
                            <a href="#" class="header__nav-item-link">Đăng nhập</a>
                        </li>

                        <!-- <li class="header__nav-item header__nav-user">
                            <img src="@/assets/img/user.png" class="header__nav-user-avt">
                            <a href="#" class="header__nav-item-link header__nav-item--bold">Lục Thiên Phong</a>
                            <ul class="header__nav-user-menu">
                                <li class="header__nav-user-item">
                                    <a href="#">Tài khoản của tôi</a>
                                </li>
                                <li class="header__nav-user-item">
                                    <a href="#">Đơn mua</a>
                                </li>
                                <li class="header__nav-user-item">
                                    <a href="#">Đăng xuất</a>
                                </li>
                            </ul>
                        </li> -->
                    </ul>
                </nav>
                <!-- search -->
                <div class="header__contain">
                    <label for="mobile-search" class="header__mobile-search">
                        <i class="header__mobile-search-icon fas fa-search"></i>
                    </label>
                    <div class="header__logo">
                        <a href="#" class="header__logo-link">
                            <img src="@/assets/img/logo/logo-full-white.png" class="header__logo-img">
                        </a>
                    </div>
                    <input type="checkbox" id="mobile-search" class="header__search-check" hidden>
                    <div class="header__search">
                        <div class="header__search-input-wrap">
                            <input type="text" class="header__search-input" placeholder="Tìm kiếm trên Shoppee">
                            <div class="header__search-history">
                                <ul class="header__search-history-list">
                                    <li class="header__search-history-item">
                                        <a href="#">Combo 30 điểm đại học khối A</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="#">Combo 30 điểm đại học khối D</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="#">Mỹ phẩm cho người yêu</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="#">Bí kíp tán crush auto đổ</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="#">Iphone 13 Pro Max giá rẻ</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="#">Người yêu đẹp trai như LTP</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button class="btn header__search-btn">
                            <i class="header__search-btn-icon fas fa-search"></i>
                        </button>
                    </div>
                    <!-- header__cart--no-cart --><!-- header__cart--has-cart -->
                    <div class="header__cart header__cart--has-cart">
                        <i class="header__cart-icon fas fa-shopping-cart"></i>
                        <div class="header__cart-count">4</div>
                        
                        <div class="header__cart-list no-cart">
                            <img src="@/assets/img/sp/no-cart.png" class="header__no-cart-img">
                            <p class="header__no-cart-text">Chưa có sản phẩm</p>
                        </div>
                        
                        <div class="header__cart-list has-cart">
                            <h4 class="header__cart-heading">Sản phẩm đã chọn</h4>
                            <ul class="header__cart-list-item">
                                <li class="header__cart-item">
                                    <img src="../../assets/img/buy/a.png" width="70px" class="header__cart-item-img">
                                    <div class="header__cart-item-info">
                                        <div class="header__cart-item-heading">
                                            <h3 class="header__cart-item-name">Thanh Thanh 2000 1m57 46kg 88-62-89</h3>
                                            <p class="header__cart-item-price">2.000.000đ</p>
                                        </div>
                                        <div class="header__cart-item-body">
                                            <p class="header__cart-item-number">x 2</p>
                                            <div class="header__cart-item-close">
                                                Xoá
                                                <i class="fas fa-times"></i>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="header__cart-footer">
                                <a href="#" class="btn btn--primary header__cart-see-cart">Xem giỏ hàng</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="header__sort-bar">
                <li class="header__sort-item">
                    <a href="#" class="header__sort-link">Liên quan</a>
                </li>
                <li class="header__sort-item header__sort-item--active">
                    <a href="#" class="header__sort-link">Mới nhất</a>
                </li>
                <li class="header__sort-item">
                    <a href="#" class="header__sort-link">Bán chạy</a>
                </li>
                <li class="header__sort-item">
                    <a href="#" class="header__sort-link">Giá</a>
                </li>
            </ul>
        </header>
        <!-- container -->
        <div class="container">
            <div class="grid wide">
                <div class="row sm-gutter">
                    <div class="col l-2 m-0 c-0">
                        <!-- category -->
                        <nav class="category">
                            <h3 class="category-heading">
                                <i class="category-heading-icon fas fa-list-ul"></i>
                                Bộ lọc tìm kiếm
                            </h3>
                            <div class="category-group">
                                <div class="category-group-title">Theo Danh Mục</div>
                                <ul class="category-group-list">
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Thiết bị mạng
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Chuột và bàn phím
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        USB
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Link kiện máy tính
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Wifi
                                    </li>
                                </ul>
                            </div>
                            <div class="category-group">
                                <div class="category-group-title">Nơi Bán</div>
                                <ul class="category-group-list">
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Hà Nội
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Hồ Chí Minh
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Đà Nẵng
                                    </li>
                                </ul>
                            </div>
                            <div class="category-group">
                                <div class="category-group-title">Đơn Vị Vận Chuyển</div>
                                <ul class="category-group-list">
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Hoả tốc
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Nhanh
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Tiết kiệm
                                    </li>
                                </ul>
                            </div>
                            <div class="category-group">
                                <div class="category-group-title">Thương Hiệu</div>
                                <ul class="category-group-list">
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Kingston
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Sandisk
                                    </li>
                                    <li class="category-group-item">
                                        <input type="checkbox" class="category-group-item-check">
                                        Seagate
                                    </li>
                                </ul>
                            </div>
                            <button class="btn btn--primary category-group-filter-btn category-group--margin">LÀM MỚI</button>
                        </nav>
                    </div>
                    <div class="col l-10 m-12 c-12">
                        <!-- home filter -->
                        <div class="home-filter hide-on-mobile-tablet">
                            <div class="home-filter-control">
                                <p class="home-filter-title">Sắp xếp theo</p>
                                <button class="btn btn--primary home-filter-btn">Phổ biến</button>
                                <button class="btn home-filter-btn">Mới nhất</button>
                                <button class="btn home-filter-btn">Bán chạy</button>
                                <div class="btn home-filter-sort">
                                    <p class="home-filter-sort-btn">Giá</p>
                                    <i class="fas fa-sort-amount-down-alt"></i>
                                    <ul class="home-filter-sort-list">
                                        <li>
                                            <a href="#" class="home-filter-sort-item-link">
                                                Giảm dần
                                                <i class="fas fa-sort-amount-down-alt"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="home-filter-sort-item-link">
                                                Tăng dần
                                                <i class="fas fa-sort-amount-up-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="home-filter-page">
                                <div class="home-filter-page-number">
                                    <p class="home-filter-page-now">1</p>
                                    /14
                                </div>
                                <div class="home-filter-page-control">
                                    <a href="#" class="home-filter-page-btn home-filter-page-btn--disable">
                                        <i class="fas fa-angle-left"></i>
                                    </a>
                                    <a href="#" class="home-filter-page-btn">
                                        <i class="fas fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- home product -->
                        <div class="home-product">
                            <nav class="mobile-category">
                                <ul class="mobile-category-list">
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Thiết bị mạng</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Chuột và bàn phím</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">USB</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Link kiện máy tính</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Wifi</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Ổ cứng</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">CD/DVD</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Tai nghe</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Lót chuột</a>
                                    </li>
                                    <li class="mobile-category-item">
                                        <a href="#" class="mobile-category-item-link">Micro</a>
                                    </li>
                                </ul>
                            </nav>
                            <div id="list-product" class="row sm-gutter"></div>
                            <div id="list-product" class="row sm-gutter" >
                                <div class="col l-2-4 m-3 c-6 home-product-item"  v-for="(item, index) in dataShoppe" :key="index">
                                    <a class="home-product-item-link">
                                        <img class="home-product-item__img"  :src="item.images[0].url" alt="">
                                        <div class="home-product-item__info">
                                            <h4 class="home-product-item__name">{{ item.name }}</h4>
                                            <div class="home-product-item__price">
                                                <p class="home-product-item__price-old">180.000đ</p>
                                                <p class="home-product-item__price-new">200.000đ</p>
                                                <i class="home-product-item__ship fas fa-shipping-fast"></i>
                                            </div>
                                            <div class="home-product-item__footer">
                                                <div class="home-product-item__save">
                                                    <input type="checkbox" name="save-check" id="heart-save">
                                                    <label for="heart-save" class="far fa-heart"></label>
                                                </div>
                                                <div class="home-product-item__rating-star">
                                                    <i class="star-checked far fa-star"></i>
                                                    <i class="star-checked far fa-star"></i>
                                                    <i class="star-checked far fa-star"></i>
                                                    <i class="star-checked far fa-star"></i>
                                                    <i class="star-checked far fa-star"></i>
                                                </div>
                                            </div>
                                            <div class="home-product-item__origin">Hà Nội</div>
                                            <div class="home-product-item__favourite">
                                                Yêu thích
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <div class="home-product-item__sale-off-value">{{ item.discountPercent }}%</div>
                                                <div class="home-product-item__sale-off-label">GIẢM</div>
                                            </div>
                                        </div>
                                        <div @click="buy(item)" class="home-product-item-footer">Mua hàng</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- pagination -->
                        <paginate
                        v-model="page"
                        :page-count="total / limit"
                        :margin-pages="1"
                        :prev-text="'<'"
                        :next-text="'>'"
                        :container-class="'pagination'"
                        :page-class="'page-item'">
                      </paginate>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer -->
        <footer class="footer">
            <!-- main footer -->
            <div class="main-footer">
                <div class="grid wide">
                        <div class="row sm-gutter main-footer-info">
                            <div class="col l-2-4 m-4 c-6">
                                <h3 class="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
                                <ul class="footer-list">
                                    <li>
                                        <a href="#" class="footer-item-link">Trung Tâm Trợ Giúp</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Shopee Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Shopee Mall</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Hướng Dẫn Mua Hàng</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Hướng Dẫn Bán Hàng</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Thanh Toán</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Shopee Xu</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Vận Chuyển</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Trả Hàng & Hoàn Tiền</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Chăm Sóc Khách Hàng</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Chính Sách Bảo Hành</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col l-2-4 m-4 c-6">
                                <h3 class="footer__heading">VỀ SHOPEE</h3>
                                <ul class="footer-list">
                                    <li>
                                        <a href="#" class="footer-item-link">Giới Thiệu Về Shopee Việt Nam</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Tuyển Dụng</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Điều Khoản Shopee</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Chính Sách Bảo Mật</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Chính Hãng</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Kênh Người Bán</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Flash Sales</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Chương Trình Tiếp Thị Liên Kết Shopee</a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link">Liên Hệ Với Truyền Thông</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col l-2-4 m-4 c-12 pay-and-ship">
                                <div>
                                    <h3 class="footer__heading">THANH TOÁN</h3>
                                    <div class="footer-sale-ship">
                                        <img src="../../assets/img/pay/a.png" class="footer-item-sale-ship">
                                        <img src="../../assets/img/pay/b.png" class="footer-item-sale-ship">
                                        <img src="../../assets/img/pay/c.png" class="footer-item-sale-ship">
                                        <img src="../../assets/img/pay/d.png" class="footer-item-sale-ship">
                                        <img src="../../assets/img/pay/e.png" class="footer-item-sale-ship">                                
                                    </div>
                                </div>
                            </div>
                            <div class="col l-2-4 m-4 c-6">
                                <h3 class="footer__heading">THEO DÕI CHÚNG TÔI</h3>
                                <ul class="footer-list">
                                    <li>
                                        <a href="#" class="footer-item-link footer-item-link-fb">
                                            <i class="footer-item-icon fab fa-facebook-square"></i>
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link footer-item-link-is">
                                            <i class="footer-item-icon fab fa-instagram-square"></i>
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="footer-item-link footer-item-link-li">
                                            <i class="footer-item-icon fab fa-linkedin"></i>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col l-2-4 m-8 c-6">
                                <h3 class="footer__heading">TẢI ỨNG DỤNG SHOPEE</h3>
                                <div class="footer-download">
                                    <a href="#" class="footer-download-link">
                                        <img src="@/assets/img/qr/qr-code.png" class="footer-download-qr">
                                    </a>
                                    <div class="footer-download-app">
                                        <a href="#" class="footer-download-link">
                                            <img src="@/assets/img/qr/gg-play.png" class="footer-download-app-img">
                                        </a>
                                        <a href="#" class="footer-download-link">
                                            <img src="@/assets/img/qr/app-store.png" class="footer-download-app-img">
                                        </a>
                                        <a href="#" class="footer-download-link">
                                            <img src="@/assets/img/qr/app-gallery.png" class="footer-download-app-img">
                                        </a>
                                        <a href="#" class="footer-download-link">
                                            <img src="@/assets/img/qr/ltp-img.png" class="footer-download-app-img">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- copyright -->
                    <div class="row">
                        <div class="grid">
                            <p class="copyright-title">
                                © 2021 Shopee copyright - Công ty TNHH CRF - Product by LTP
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- other footer -->
            <div class="other-footer">
                <div class="grid wide">
                    <div class="row other-footer-heading">
                        <div class="col l-2">
                            <a href="#" class="other-footer-link">
                                CHÍNH SÁCH BẢO MẬT
                            </a>
                        </div>
                        <div class="col l-2">
                            <a href="#" class="other-footer-link">
                                QUY CHẾ HOẠT ĐỘNG
                            </a>
                        </div>
                        <div class="col l-2">
                            <a href="#" class="other-footer-link">
                                CHÍNH SÁCH VẬN CHUYỂN
                            </a>
                        </div>
                        <div class="col l-2">
                            <a href="#" class="other-footer-link">
                                TRẢ HÀNG VÀ HOÀN TIỀN
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="grid other-footer-info">
                            <p class="other-footer-title">Thông tin về Shoppee</p>
                            <p class="other-footer-more">
                                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
                                Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam.
                                Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                            </p>
                            <p class="other-footer-more">
                                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí -
                                Điện thoại liên hệ: 024 73081221 (ext 4678)
                            </p>
                            <p class="other-footer-more">
                                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư
                                TP Hà Nội cấp lần đầu ngày 10/02/2015
                            </p>
                            <p class="other-footer-more">
                                Ngày sản xuất 2015 -
                                Bản quyền gốc thuộc về Công ty TNHH Shopee
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
  name:'shoppe',
  data() {
    return {
      dataShoppe:[],
      dataAddress:[],
      page:1,
      limit:10,
      total:null
    }
  },
  mounted() {
    this.fetchData()
    this.fetchDataAdd()
  },
  watch: {
    'page': function () {
      this.fetchData()
    }
  },
  methods:{
    fetchData() {
      const url = `/api/admin/api/v1/products?page=${this.page}&limit=${this.limit}`;
      axios.get(url)
        .then(response => {
          console.log('Dữ liệu:', response.data.data);
          this.dataShoppe = response.data.data
          this.total = response.data.totalItems
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    },
    fetchDataAdd() {
      const url = `/api/admin/api/v1/address?page=${this.page}&limit=${this.limit}`;

      axios.get(url)
        .then(response => {
          const addressMapping = {};
          response.data.data.map(item => {addressMapping[item.addressId] = `${item.province.name}` +' -'+ ` ${item.district.name} ` +'- '+ `${item.ward.name}`})
          console.log('Dữ liệu ADD:', addressMapping);
          this.dataAddress = addressMapping
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    },
    async buy(item){
      console.log(item);
      const { value: fruit } = await Swal.fire({
        title: `Bạn có chắc chắn muốn mua ${item.name}`,
        input: 'select',
        inputOptions: this.dataAddress,
        inputPlaceholder: 'Chọn địa chỉ bạn muốn giao hàng',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            const url = `/api/admin/api/v1/order`
            const body = {
              addressId: Number(value),
              userId:2,
              description:'Khong co gi'
            }
            const urlOrderPro = `/api/admin/api/v1/oderProducts`
            
            axios.post(url,body)
            .then(response => {
              console.log('1',response);
              if (response.status === 200) {
                const bodyOder = {
                  orderId: response.data.orderId,
                  productId:item.productId,
                  quantity:1
                }
                let bodyFn=[]
                bodyFn.push(bodyOder)
                console.log(bodyFn);
                axios.post(urlOrderPro,bodyFn).then(res=>{
                  if (res.status === 200) {
                    this.$swal({
                      title:'Mua hàng thành công',
                      icon:'success',
                      confirmButtonText: 'OK'
                      }).then((check) => { if(check.isConfirmed) this.$router.push('/shoppe')});
                  }
                })
              }
            })
            .catch(error => {
              console.error('Lỗi:', error);
            });
          })
        }
      })

      if (fruit) {
        Swal.fire(`You selected: ${fruit}`)
      }
    }
  }
}
</script>
