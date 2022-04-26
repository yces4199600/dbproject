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
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(item,index) in getCourse" :key="item.id">
        <th scope="row">{{ index+1 }}</th>
        <td>{{ item.class_Name }}</td>
        <td>{{ item.course_Name }}</td>
        <td>{{ item.course_ID }}</td>
        <td>{{ item.credits }}</td>
        <td>{{ item.required_Elective_subject }}</td>
        <td>{{ item.dep_Name }}</td>
        <td>{{ item.capacity }}</td>
        <td>{{ item.numbers }}</td>
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
      arr: [],
    }
  },
  computed: {
    getCourse: function () {
      return this.arr
    }
  },
  mounted(){
    console.log("on")
    this.$http.get('http://localhost:8080/getCourse')
    .then( r =>  {
      this.arr = r.data
      console.log(r)
    })
    .catch( r => console.log(r))
    console.log("off")
  }
}
</script>