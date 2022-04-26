<template>
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
      <tr  v-for="(item,index) in getCourse" :key="item.id">
        <th scope="row">{{ index+1 }}</th>
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
</div>
</template>

<script>
export default {
  name:"List",
  data() {
    return {
      arr: [
        {class:"1",name:"2",id:"3",credit:"4",must:"5",department:"6",limit:"7",current:"8",teacher:"9"},
        {class:"11",name:"12",id:"13",credit:"14",must:"15",department:"16",limit:"17",current:"18",teacher:"19"}
      ],
    }
  },
  computed: {
    getCourse: function () {
      return this.arr
    }
  },
}
</script>