<template>
  <div id="centerid">
    <el-table
      :data="tableData"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      >
      <el-table-column label="序号" type="index" show-overflow-tooltip/>
      <el-table-column label="预占日期" >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span >{{ scope.row.createtime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="客户编码" >
        <template slot-scope="scope">
          <span >{{ scope.row.custno }}</span>
        </template>
      </el-table-column>
      <el-table-column label="客户名称" >
        <template slot-scope="scope">
          <span >{{ scope.row.custname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品编码" >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.prodno }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.prodname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="预占数量" >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.quantity }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>商品: {{ scope.row.prodname }}</p>
            <p>数量: {{ scope.row.quantity }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.staffname }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
    export default {
        data() {
            var tableData;
            this.$http.get('/lzzz_war/goYzList').then(function (res) {
                this.tableData = res.data.data
            });
            return {tableData: tableData}
        },
        methods: {
            handleDelete(index, row) {
                this.$http.post('/lzzz_war/detYz',{ pk : row.pk}).then(function (res) {
                    this.$message({
                        message: '删除成功！',
                        type: 'success'
                    });
                    this.tableData.splice(index, 1);
                });
            },
        }
    }
</script>


