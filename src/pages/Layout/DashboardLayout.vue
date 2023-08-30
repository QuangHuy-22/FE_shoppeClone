<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Quản lý người dùng</p>
      </sidebar-link>
      <sidebar-link to="/product">
        <md-icon>notifications</md-icon>
        <p>Quản lý sản phẩm</p>
      </sidebar-link>
      <sidebar-link to="/supplier">
        <md-icon>library_books</md-icon>
        <p>Nhà cung cấp</p>
      </sidebar-link>
      <sidebar-link to="/order">
        <md-icon>library_books</md-icon>
        <p>Quản lý đơn hàng</p>
      </sidebar-link>
      <sidebar-link to="/address">
        <md-icon>library_books</md-icon>
        <p>Địa chỉ</p>
      </sidebar-link>
      <sidebar-link to="/province">
        <md-icon>location_on</md-icon>
        <p>Tỉnh/Thành phố</p>
      </sidebar-link>
      <sidebar-link to="/district">
        <md-icon>bubble_chart</md-icon>
        <p>Quận/Huyện</p>
      </sidebar-link>
      <sidebar-link to="/ward">
        <md-icon>location_on</md-icon>
        <p>Phường/Xã</p>
      </sidebar-link>
      <sidebar-link to="/image">
        <md-icon>location_on</md-icon>
        <p>Quản lý ảnh</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
      <!-- <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Upgrade to PRO</p>
      </sidebar-link> -->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
