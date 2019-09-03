<template>
  <div id="centerid">
    <el-table
      :data="tableData"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      >
      <el-table-column label="序号" type="index" show-overflow-tooltip />
      <el-table-column label="日期" >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span >{{ scope.row.createtime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="单据编号" >
        <template slot-scope="scope">
          <span >{{ scope.row.billid }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        >
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.staffname }}</el-tag>
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
            this.$http.get('/lzzz_war/getOp').then(function (res) {
                this.tableData = res.data.data
            });
            return {tableData: tableData}
        },
        methods: {
            handleDelete(index, row) {
                this.$http.post('/lzzz_war/delOp',{
                    billid:row.billid
                }
                ).then(function (res) {
                    this.$message({
                        message: '删除成功！',
                        type: 'success'
                    });
                    this.tableData.splice(index, 1);
                }), function (error) {
                    this.$message.error('删除失败！');
                };
            },
        }
    }
</script>


