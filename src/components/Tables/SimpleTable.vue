<!-- <template>
  <div>
    <md-table v-model="dataTable" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Tên đăng nhập">{{ item.username ? item.username : '---' }}</md-table-cell>
        <md-table-cell md-label="Tên">{{ item.firstName ? item.firstName : '---' }}</md-table-cell>
        <md-table-cell md-label="SĐT">{{ item.phoneNumber ? item.phoneNumber : '---' }}</md-table-cell>
        <md-table-cell md-label="Địa chỉ">{{ item.address ? item.address : '' }}</md-table-cell>
        <md-table-cell md-label="Thao tác"><button>Sửa</button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
    dataTable: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas",
        },
        {
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park",
        },
        {
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester",
        },
        {
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
        },
        {
          name: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "Gloucester",
        },
      ],
    };
  },
};
</script> -->
