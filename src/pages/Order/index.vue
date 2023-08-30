<template>
  <div class="content">
    <md-button class="md-raised md-fab-top-right md-primary" @click="$router.push('/supplier/add')"><md-icon>add</md-icon>Thêm mới</md-button>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Danh sách đơn hàng</h4>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="dataTable" table-header-color="green">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Tên sản phẩm">{{ item.product ? item.product.name : '---' }}</md-table-cell>
                  <md-table-cell md-label="Số lượng">1</md-table-cell>
                  <md-table-cell md-label="Danh mục">{{ item.product.category.name }}</md-table-cell>
                  <md-table-cell md-label="Nhà cung cấp">{{ item.product.supplier.name }}</md-table-cell>
                  <md-table-cell md-label="Giá bán">{{ item.product.price }}</md-table-cell>
                  <md-table-cell md-label="Giảm giá">{{ item.product.discountPercent }}</md-table-cell>
                  <md-table-cell md-label="Ảnh"><img :src="item.product.images[0].url" style="width: 50px;height: 50px;" alt=""></md-table-cell>
                  <!-- <md-table-cell md-label="Thao tác">
                    <md-button @click="$router.push(`/supplier/edit/${item.supplierId}`)" class="md-dense md-fab-top-right md-success"><md-icon>edit</md-icon>Sửa</md-button>
                    <md-button @click="deleteItem(item.supplierId)" class="md-dense md-fab-top-right md-danger"><md-icon>delete</md-icon>Xóa</md-button>
                </md-table-cell> -->
              </md-table-row>
              </md-table>
            </div>
          </md-card-content>
          <paginate
            v-model="page"
            :page-count="total / limit"
            :margin-pages="1"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'">
          </paginate>
        </md-card>
      </div>

    </div>
  </div>
</template>

<script>
// import { SimpleTable } from "@/components";
import axios from 'axios';
export default {
  name:'OderList',
  data(){
    return {
      dataTable: [],
      page:1,
      limit:10,
      total:null
    }
  },
  components: {
    // SimpleTable,
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    'page': function () {
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      const url = `/api/admin/api/v1/oderProducts?page=${this.page}&limit=${this.limit}`;

      axios.get(url)
        .then(response => {
          console.log('Dữ liệu:', response.data);
          this.dataTable = response.data
          this.total = response.data.totalItems
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    },
    deleteItem(id) {
      const url = `/api/admin/api/v1/suppliers/${id}`;

      axios.delete(url)
        .then(response => {
          if(response.status === 200) {
            this.$swal({
            title:'Xóa đơn hàng thành công',
            icon:'success',
            confirmButtonText: 'OK'
            })
            this.fetchData()
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    }
  }
};
</script>

<style>
ul {
list-style: none;
}
.pagination{
  display: flex;
}
</style>
