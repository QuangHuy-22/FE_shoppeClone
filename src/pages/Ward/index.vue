<template>
  <div class="content">
    <md-button class="md-raised md-fab-top-right md-primary" @click="$router.push('/ward/add')"><md-icon>add</md-icon>Thêm mới</md-button>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Danh sách phường/xã</h4>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="dataTable" table-header-color="green">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Tên phường/xã">{{ item.name ? item.name : '---' }}</md-table-cell>
                  <md-table-cell md-label="SĐT">{{ item.code ? item.code : '---' }}</md-table-cell>
                  <md-table-cell md-label="Thao tác">
                    <md-button @click="$router.push(`/ward/edit/${item.wardId}`)" class="md-dense md-fab-top-right md-success"><md-icon>edit</md-icon>Sửa</md-button>
                    <md-button @click="deleteItem(item.wardId)" class="md-dense md-fab-top-right md-danger"><md-icon>delete</md-icon>Xóa</md-button>
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
import axios from 'axios';
export default {
  name:'DistrictList',
  data(){
    return {
      dataTable: [],
      page:1,
      limit:10,
      total:null
    }
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
      const url = `/api/admin/api/v1/wards?page=${this.page}&limit=${this.limit}`;

      axios.get(url)
        .then(response => {
          console.log('Dữ liệu:', response.data.data);
          this.dataTable = response.data.data
          this.total = response.data.totalItems
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    },
    deleteItem(id) {
      const url = `/api/admin/api/v1/wards/${id}`;

      axios.delete(url)
        .then(response => {
          if(response.status === 200) {
            this.$swal({
            title:'Xóa phường/xã thành công',
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
