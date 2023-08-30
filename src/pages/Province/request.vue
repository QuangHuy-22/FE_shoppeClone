<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">{{this.$route.params.id ? 'Sửa' : 'Thêm'}} tỉnh/thành phố</h4>
        <p class="category">Điền thông tin tỉnh/thành phố</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Tên tỉnh/thành phố</label>
              <md-input v-model="dataRequest.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Mã tỉnh/thành phố</label>
              <md-input v-model="dataRequest.code" type="text"></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input v-model="dataRequest.email" type="email"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Địa chỉ</label>
              <md-input v-model="dataRequest.address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Số điện thoại</label>
              <md-input v-model="dataRequest.phoneNumber" type="text"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Thành phố</label>
              <md-input v-model="dataRequest.city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>tỉnh/thành phố</label>
              <md-input v-model="dataRequest.district" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Phường/Xã</label>
              <md-input v-model="dataRequest.ward" type="number"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Ghi chú</label>
              <md-textarea v-model="dataRequest.description"></md-textarea>
            </md-field>
          </div> -->
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="submit" class="md-raised md-success">{{ this.$route.params.id ? 'Cập nhật' : "Thêm mới" }} tỉnh/thành phố</md-button>
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
    };
  },
  created() {
    this.getDetail()
  },
  methods:{
    submit() {
      if (this.$route.params.id) {
        const body = this.dataRequest
        const url = `/api/admin/api/v1/provinces/${this.$route.params.id}`;
        axios.put(url, body)
        .then(response => {
          if (response.status === 200) {
            this.$swal({
            title:'Sửa tỉnh/thành phố thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/province')});
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
      }
      else {
      const url = '/api/admin/api/v1/provinces';
      const body = this.dataRequest
      axios.post(url, body)
        .then(response => {
          console.log('Dữ liệu:', response);
          if (response.status === 200) {
            this.$swal({
            title:'Thêm tỉnh/thành phố thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/province')});
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
      }
    },
    getDetail() {
      if (this.$route.params.id) {
      try {
        const url = `/api/admin/api/v1/provinces/${this.$route.params.id}`;
        axios.get(url).then(response => {
          this.dataRequest = response.data
        })
      } catch (error) {
        console.log(error);
      }
    }
    }
  }
};
</script>
