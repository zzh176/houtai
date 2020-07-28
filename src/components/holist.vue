<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/holist">{{$route.meta.title}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 和添加用户 -->
    <div class="seek">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="dialogFormVisible = true">添加用户</el-button>
    </div>
    <!-- 点击添加用户弹出莫弹框 -->
    <div>
      <el-dialog title="用户添加" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.emle" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.mobel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="角色" :label-width="formLabelWidth">
            <el-input v-model="form.jiaose" autocomplete="off"></el-input>
          </el-form-item>
         
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add(form)">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- list列表 -->
    <el-table
      style="width: 100%;"
      :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    >
      <el-table-column label="姓名" prop="name" width="180"></el-table-column>
      <el-table-column label="邮箱" prop="emle" width="180"></el-table-column>
      <el-table-column label="电话" prop="mobel" width="180"></el-table-column>
      <el-table-column label="角色" prop="jiaose" width="200"></el-table-column>
      <el-table-column label="注册时间" width="200">{{ {} | dateformat('YYYY/MM/DD HH:mm')}}</el-table-column>
      <el-table-column type="index" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> 
          <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length"
    ></el-pagination>

    <!-- 点击编辑弹出的模态框 -->
    <el-dialog title="编辑" :visible.sync="show">
      <el-form :model="from1">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="from1.name1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="from1.emle1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="from1.mobel1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-input v-model="from1.jiaose1" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="add1(from1)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      input: "",
      form: {
        name: "", //姓名
        mobel: "", //电话
        emle: "", //邮箱
        jiaose: "" //角色
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      list: JSON.parse(localStorage.getItem("xue")) || [],
      currentPage: 1, //初始页
      pagesize: 5, //
      show: false,
      from1: {
        name1: "", //姓名
        mobel1: "", //电话
        emle1: "", //邮箱
        jiaose1: "" //角色
      },
      key:0 , //编辑中转索引值
    };
  },
  methods: {
      //添加用户
    add(f) {
      var obj = new Object();
      obj.name = f.name;
      obj.mobel = f.mobel;
      obj.emle = f.emle;
      obj.jiaose = f.jiaose;
      this.list.push(obj);
      // localStorage.setItem("xue", JSON.stringify(this.list));
      this.dialogFormVisible = false;
      console.log(this.list);
    },
    //分页器
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    //编辑
    handleEdit(i, v) {
        this.k=i
      this.show = true;
      console.log(i);
      console.log(v);
      this.from1.name1=v.name
      this.from1.mobel1=v.mobel
      this.from1.emle1=v.emle
      this.from1.jiaose1=v.jiaose
      
    },
    //确定编辑
    add1(f){
        console.log(this.key)
        this.list[this.key].name=f.name1
        this.list[this.key].mobel=f.mobel1
        this.list[this.key].emle=f.emle1
        this.list[this.key].jiaose=f.jiaose1
        this.list[this.key].henshan = f.henshan
        this.show=false

        // localStorage.setItem("xue", JSON.stringify(this.list));
    },
    //删除
    del(k) {
        this.list.splice(k, 1);
        this.list.remove(k,1);
    }
  }
};
</script>

<style lang="scss" scoped>
.seek {
  width: 30%;
  // border: 1px solid ;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  .el-button {
    margin-left: 20px;
  }
}
</style>