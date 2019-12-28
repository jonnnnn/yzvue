<template>
  <div id="mm">
    <!-- Form -->

    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form" :rules = "rules" ref="ruleForm">
        <el-form-item label="旧密码" prop="oldpassword">
          <el-input type="password" v-model="form.oldpassword"  placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpassword">
          <el-input type="password" v-model="form.newpassword" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confimpassword">
          <el-input type="password" v-model="form.confimpassword" placeholder="请再次输入新密码"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitform" >确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
    export default {
        data() {
            var valiOldPass = (rule, value, callback) => {
               this.$http.get('/lzzz_war/getUserByPass',{params : {password : value}}).then(function (res) {
                   if (res.data.msg !== 'success'){
                       callback(new Error('原密码错误！'));
                   }else {
                       callback();
                   }
               });
            };

            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.form.newpassword) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback();
                }
            };


            return {
                dialogFormVisible: false,
                form: {

                },
                rules: {
                    newpassword: [ { required: true, message: '请输入密码', trigger: 'blur' }],
                    oldpassword:[{ required: true, validator: valiOldPass, trigger: 'blur' }],
                    confimpassword: [{ required: true, validator: validatePass2, trigger: 'blur' }]
                }
            };
        },

        methods: {
            parentclick(){
                this.dialogFormVisible=true;
            },

            submitform() {
                this.$refs.ruleForm.validate(valid => {
                    if (valid){
                        this.$http.post('/lzzz_war/updUser',{password : this.form.confimpassword}).then(function (res) {
                            this.$message({
                                message: '修改成功！',
                                type: 'success'
                            });
                        }),function(error) {
                            this.$message.error('网络错误!');
                        };
                        this.$refs.ruleForm.resetFields();
                        this.dialogFormVisible=false;
                    }
                });
            }
        }
    };
</script>
