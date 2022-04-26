<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>輸入學號</label>
        <!-- TODO:修改長度 -->
        <input class="form-control" v-model="current_user">
      </div>
      <button @click="checkList()" class="mb-3 btn btn-primary">查詢課表</button>
    </form>
  </div>

  <div class="container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">開課班級</th>
          <th scope="col">課程名稱</th>
          <th scope="col">選課代號</th>
          <th scope="col">學分數</th>
          <th scope="col">必選修</th>
          <th scope="col">開課系所</th>
          <th scope="col">上限人數</th>
          <th scope="col">已選人數</th>
          <th scope="col">授課教師</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(item,index) in getCourse" :key="item.id" :id="item.id">
          <!-- TODO:勾勾位置調整,勾勾綁定ID -->
          <th scope="row"><input  type="checkbox" value="" ></th>
          <td>{{ item.class }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.credit }}</td>
          <td>{{ item.must }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.limit }}</td>
          <td>{{ item.current }}</td>
          <td>{{ item.teacher }}</td>
        </tr>
      </tbody>
    </table>
    <form>
      <button type="submit" class="btn btn-primary">退選課程</button>
    </form>
        <form>
      <div class="form-group">
        <label>輸入選課代號</label>
        <!-- TODO:修改長度 -->
        <input class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">加選課程</button>
    </form>
  </div>
</template>

<script>
export default {
  name:"Revise",
  data() {
    return {
      current_user:"",
      arr: [
        {id:"1",class:"2",name:"3",must:"4",credit:"5"},
        {id:"6",class:"7",name:"8",must:"9",credit:"10"}
      ],
    }
  },
  computed: {
    getCourse: function () {
      return this.arr
    }
  },
  methods:{
    // submit(){
    //   // TODO: 可以做點加密
    //   let destin = ''
    //   if(this.path == '登入') destin = 'loginn'
    //   else if(this.path == '註冊') destin = 'signUpp'
    //   this.$http.post("http://localhost:8080/1234", {
    //     id: 123,
    //   })
    //   .then( r => {
    //     console.log(r)
    //   })
    //   .catch( r => console.log(r))
    // },
    checkList(){
      console.log(this.current_user)
      this.$http.post('http://localhost:8080/usertakes',{
        data:{ current_user : this.current_user },
  })
      .then( r => {
        console.log(r)
      })
      .catch( r => console.log(r))
    }
  }
}
</script>