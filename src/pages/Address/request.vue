<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">{{this.$route.params.id ? 'Sửa' : 'Thêm'}} địa chỉ</h4>
        <p class="category">Điền thông tin địa chỉ</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label for="movies">Tỉnh/Thành phố</label>
              <md-select v-model="dataRequest.province" name="province" id="province">
                <md-option  v-for="(item, index) in dataSelectProvince" :key="index" :value="item.provinceId">{{ item.name }}</md-option>
              </md-select>
            </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label for="movies">Quận/Huyện</label>
              <md-select v-model="dataRequest.district" name="district" id="district">
                <md-option  v-for="(item, index) in dataSelectDistrict" :key="index" :value="item.districtId">{{ item.name }}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label for="movies">Phường/Xã</label>
              <md-select v-model="dataRequest.ward" name="ward" id="ward">
                <md-option  v-for="(item, index) in dataSelectWard" :key="index" :value="item.wardId">{{ item.name }}</md-option>
              </md-select>
            </md-field>
            <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Ghi chú</label>
              <md-textarea v-model="dataRequest.description"></md-textarea>
            </md-field>
          </div>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="submit" class="md-raised md-success">{{ this.$route.params.id ? 'Cập nhật' : "Thêm mới" }} địa chỉ</md-button>
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
      dataSelectWard:[],
      dataSelectDistrict:[],
      dataSelectProvince:[]
    };
  },
  created() {
    this.fetchData()
    this.getDetail()
  },
  methods:{
    submit() {
      if (this.$route.params.id) {
        const body = this.dataRequest
        const url = `/api/admin/api/v1/address/${this.$route.params.id}`;
        axios.put(url, body)
        .then(response => {
          if (response.status === 200) {
            this.$swal({
            title:'Sửa địa chỉ thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/address')});
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
      }
      else {
      console.log(this.dataRequest);
      const url = '/api/admin/api/v1/address';
      const body = this.dataRequest
      axios.post(url, body)
        .then(response => {
          console.log('Dữ liệu:', response);
          if (response.status === 200) {
            this.$swal({
            title:'Thêm địa chỉ thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/address')});
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
        const url = `/api/admin/api/v1/address/${this.$route.params.id}`;
        axios.get(url).then(response => {
          console.log('111',response.data);
          this.dataRequest = {
            addressId: response.data.addressId,
            description: response.data.description,
            district: response.data.district.districtId,
            province: response.data.province.provinceId,
            ward: response.data.ward.wardId
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
    },
    fetchData() {
      try {
        
        const urlProvince = `/api/admin/api/v1/provinces`;
        const urlDistrict = `/api/admin/api/v1/districts`;
        const urlWard = `/api/admin/api/v1/wards`;
        
        axios.get(urlProvince).then(response => {this.dataSelectProvince = response.data.data})
        axios.get(urlDistrict).then(response => {this.dataSelectDistrict = response.data.data})
        axios.get(urlWard).then(response => {this.dataSelectWard = response.data.data})
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>
