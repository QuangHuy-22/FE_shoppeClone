<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">{{this.$route.params.id ? 'Sửa' : 'Thêm'}} ảnh</h4>
        <p class="category">Điền thông tin ảnh</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Link ảnh</label>
              <md-input v-model="dataRequest.url" type="text"></md-input>
            </md-field>
          </div>
          <div v-if="dataRequest.url" class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <img :src="dataRequest.url" alt="">
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label for="product">Sản phẩm</label>
              <md-select v-model="dataRequest.productId" name="product" id="product">
                <md-option v-for="(item, index) in dataSelect" :key="index" :value="item.productId">{{ item.name }}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Ghi chú</label>
              <md-input v-model="dataRequest.description" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="submit" class="md-raised md-success">{{ this.$route.params.id ? 'Cập nhật' : "Thêm mới" }} ảnh</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'SupplierRequest',
  data() {
    return {
      dataRequest:{},
      dataSelect:[]
    };
  },
  mounted(){
    this.fetchData()
  },
  methods:{
    submit() {
      console.log(this.dataRequest);
      const url = '/api/images';
      const body = this.dataRequest
      axios.post(url, body)
        .then(response => {
          console.log('Dữ liệu:', response);
          if (response.status === 200) {
            this.$swal({
            title:'Thêm ảnh thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/district')});
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    },
    fetchData() {
      const url = `/api/admin/api/v1/products`;

      axios.get(url)
        .then(response => {
          console.log('Dữ liệu:', response.data.data);
          this.dataSelect = response.data.data
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    },
  }
};
</script>
