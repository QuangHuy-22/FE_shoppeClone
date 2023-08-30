<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">{{this.$route.params.id ? 'Sửa' : 'Thêm'}} sản phẩm</h4>
        <p class="category">Điền thông tin sản phẩm</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Tên sản phẩm</label>
              <md-input v-model="dataRequest.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Giá nhập vào</label>
              <md-input v-model="dataRequest.importPrice" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Giá bán</label>
              <md-input v-model="dataRequest.price" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Khuyến mại</label>
              <md-input v-model="dataRequest.discountPercent" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label for="product">Danh mục</label>
              <md-select v-model="dataRequest.categoryId" name="product" id="product">
                <md-option v-for="(item, index) in dataSelectCate" :key="index" :value="item.categoryId">{{ item.name }}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label for="product">Nhà cung cấp</label>
              <md-select v-model="dataRequest.supplierId" name="product" id="product">
                <md-option v-for="(item, index) in dataSelectSup" :key="index" :value="item.supplierId">{{ item.name }}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label for="movies">Ảnh</label>
              <md-select v-model="dataRequest.imageIds" name="image" id="image" multiple>
                <md-option  v-for="(item, index) in dataSelectImg" :key="index" :value="item.imageId">{{ item.description }}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Ghi chú</label>
              <md-textarea v-model="dataRequest.description"></md-textarea>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="submit" class="md-raised md-success">{{ this.$route.params.id ? 'Cập nhật' : "Thêm mới" }} sản phẩm</md-button>
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
      dataSelectSup:[],
      dataSelectImg:[],
      dataSelectCate:[]
    };
  },
  created() {
    this.fetchData()
    this.getDetail()
  },
  methods:{
    prepareData(data){
      const body = {
    name: data.name,
    importPrice: data.importPrice,
    price: data.price,
    discountPercent: data.discountPercent,
    description: data.discountPercent,
    categoryId: data.categoryId,
    supplierId: data.supplierId,
    imageIds: data.imageIds
      }
      return body
    },
    submit() {
      if (this.$route.params.id) {
        const body = this.prepareData(this.dataRequest)
        const url = `/api/admin/api/v1/products/${this.$route.params.id}`;
        axios.put(url, body)
        .then(response => {
          if (response.status === 200) {  
            this.$swal({
            title:'Sửa sản phẩm thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/product')});
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
      }
      else {
      const url = '/api/admin/api/v1/products';
      const body = this.dataRequest
      axios.post(url, body)
        .then(response => {
          console.log('Dữ liệu:', response);
          if (response.status === 200) {  
            this.$swal({
            title:'Thêm sản phẩm thành công',
            icon:'success',
            confirmButtonText: 'OK'
            }).then((check) => { if(check.isConfirmed) this.$router.push('/product')});
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
      }
    },
    fetchData() {
      try {
        
        const urlimg = `/api/images`;
        const urlCate = `/api/admin/api/v1/categories`;
        const urlSupplier = `/api/admin/api/v1/suppliers`;
        
        axios.get(urlimg).then(response => {this.dataSelectImg = response.data})
        axios.get(urlCate).then(response => {this.dataSelectCate = response.data.data})
        axios.get(urlSupplier).then(response => {this.dataSelectSup = response.data.data})
      } catch (error) {
        console.log(error);
      }
    },
    getDetail() {
      if (this.$route.params.id) {
      try {
        const url = `/api/admin/api/v1/products/${this.$route.params.id}`;
        axios.get(url).then(response => {
          this.dataRequest = response.data
          this.dataRequest.categoryId = response.data.category.categoryId
          this.dataRequest.supplierId = response.data.supplier.supplierId
          this.dataRequest.imageIds = response.data.images.map(item => item.imageId)
        })
      } catch (error) {
        console.log(error);
      }
    }
    }
  }
};
</script>
