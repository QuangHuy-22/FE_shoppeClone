import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
//User
import UserProfile from "@/pages/User/UserProfile.vue";
import UserList from "@/pages/User/UserList.vue";
//Supplier
import SupplierList from "@/pages/Supplier/index.vue";
import SupplierRequest from "@/pages/Supplier/request.vue";
//District
import DistrictList from "@/pages/District/index.vue";
import DistrictRequest from "@/pages/District/request.vue";
//Ward
import WardList from "@/pages/Ward/index.vue";
import WardRequest from "@/pages/Ward/request.vue";
//Province
import ProvinceList from "@/pages/Province/index.vue";
import ProvinceRequest from "@/pages/Province/request.vue";
//Image
import ImageList from "@/pages/Image/index.vue";
import ImageRequest from "@/pages/Image/request.vue";
//Product
import ProductList from "@/pages/Product/index.vue";
import ProductRequest from "@/pages/Product/request.vue";
//Product
import AddressList from "@/pages/Address/index.vue";
import AddressRequest from "@/pages/Address/request.vue";
//Shoppe
import ShoppeList from "@/pages/Shopee/shopee.vue";


import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user/add",
        name: "Thêm mới người dùng",
        component: UserProfile,
      },
      {
        path: "user",
        name: "Quản lý người dùng",
        component: UserList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
      {
        path: "/supplier",
        name: "Danh sách nhà cung cấp",
        component: SupplierList,
      },
      {
        path: "/supplier/add",
        name: "Thêm mới nhà cung cấp",
        component: SupplierRequest,
      },
      {
        path: "/supplier/edit/:id",
        name: "Sửa nhà cung cấp",
        component: SupplierRequest,
      },
      {
        path: "/district",
        name: "Quản lý quận/huyện",
        component: DistrictList,
      },
      {
        path: "/district/add",
        name: "Thêm mới quận/huyện",
        component: DistrictRequest,
      },
      {
        path: "/district/edit/:id",
        name: "Sửa quận/huyện",
        component: DistrictRequest,
      },
      {
        path: "/ward",
        name: "Quản lý phường/xã",
        component: WardList,
      },
      {
        path: "/ward/add",
        name: "Thêm mới phường/xã",
        component: WardRequest,
      },
      {
        path: "/ward/edit/:id",
        name: "Sửa phường/xã",
        component: WardRequest,
      },
      {
        path: "/province",
        name: "Quản lý tỉnh/thành phố",
        component: ProvinceList,
      },
      {
        path: "/province/add",
        name: "Thêm mới tỉnh/thành phố",
        component: ProvinceRequest,
      },
      {
        path: "/province/edit/:id",
        name: "Sửa tỉnh/thành phố",
        component: ProvinceRequest,
      },
      {
        path: "/image",
        name: "Quản lý ảnh",
        component: ImageList,
      },
      {
        path: "/image/add",
        name: "Thêm mới ảnh",
        component: ImageRequest,
      },
      {
        path: "/product",
        name: "Quản lý sản phẩm",
        component: ProductList,
      },
      {
        path: "/product/add",
        name: "Thêm mới sản phẩm",
        component: ProductRequest,
      },
      {
        path: "/product/edit/:id",
        name: "Sửa sản phẩm",
        component: ProductRequest,
      },
      {
        path: "/address",
        name: "Quản lý sản phẩm",
        component: AddressList,
      },
      {
        path: "/address/add",
        name: "Thêm mới sản phẩm",
        component: AddressRequest,
      },
      {
        path: "/address/edit/:id",
        name: "Sửa sản phẩm",
        component: AddressRequest,
      },
    ],
  },
  {
    path: "/shoppe",
    name: "Shoppe",
    component: ShoppeList,
  }
];

export default routes;
