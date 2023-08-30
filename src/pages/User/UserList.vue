<template>
  <div class="content">
    <md-button class="md-raised md-fab-top-right md-primary" @click="$router.push('/user/add')"><md-icon>add</md-icon>Thêm mới</md-button>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Danh sách người dùng</h4>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="dataTable" table-header-color="green">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Tên đăng nhập">{{ item.username ? item.username : '---' }}</md-table-cell>
                  <md-table-cell md-label="Tên">{{ item.firstName ? item.firstName : '---' }} {{ item.lastName ? item.lastName : '---' }}</md-table-cell>
                  <md-table-cell md-label="SĐT">{{ item.phoneNumber ? item.phoneNumber : '---' }}</md-table-cell>
                  <md-table-cell md-label="Địa chỉ">{{ item.address ? item.address : '---' }}</md-table-cell>
                  <md-table-cell md-label="Thao tác">
                    <md-button class="md-dense md-fab-top-right md-success"><md-icon>edit</md-icon>Sửa</md-button>
                    <md-button @click="deleteItem(item.userId)" class="md-dense md-fab-top-right md-danger"><md-icon>delete</md-icon>Xóa</md-button>
                </md-table-cell>
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
  name:'UserList',
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
      const url = `/api/api/v1/users?page=${this.page}&limit=${this.limit}`;

      axios.get(url)
        .then(response => {
          console.log('Dữ liệu:', response.data);
          this.dataTable = response.data.data
          this.total = response.data.totalItems
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    },
    deleteItem(id) {
      const url = `/api/api/v1/users/${id}`;

      axios.delete(url)
        .then(response => {
          console.log('Dữ liệu:', response.data);
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
