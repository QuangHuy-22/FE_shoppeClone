<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">{{this.$route.params.id ? 'Sửa' : 'Thêm'}} người dùng</h4>
        <p class="category">Điền thông tin người dùng</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Tên đăng nhập</label>
              <md-input v-model="dataRequest.username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Mật khẩu</label>
              <md-input v-model="dataRequest.password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Tên đầu tiên</label>
              <md-input v-model="dataRequest.firstName" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Họ</label>
              <md-input v-model="dataRequest.lastName" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
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
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Thành phố</label>
              <md-input v-model="dataRequest.city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Quận/Huyện</label>
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
              <label>Role</label>
              <md-textarea v-model="dataRequest.role"></md-textarea>
            </md-field>
          </div> -->
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="submit" class="md-raised md-success">{{ this.$route.params.id ? 'Cập nhật' : "Thêm mới" }} Người dùng</md-button>
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
// import { EditProfileForm } from "@/pages";
import axios from 'axios';
export default {
  data() {
    return {
      dataRequest:{
      username: null,
      password: null,
      lastname: null,
      firstname: null,
      address: null,
      role:[{"code":"ADMIN","roleId":2}]
    },
    city: null,
    district: null,
    ward: null,
    };
  },
  components: {
    // EditProfileForm,
  },
  methods:{
    submit() {
      console.log(this.dataRequest);
      const url = '/api/api/v1/users';
      const body = this.dataRequest
      axios.post(url, body)
        .then(response => {
          console.log('Dữ liệu:', response);
          this.dataTable = response.data.data
          if (response.status === 200) {
            this.$swal({
            title:'Thêm người dùng thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/user')});
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
    }
  }
};
</script>
