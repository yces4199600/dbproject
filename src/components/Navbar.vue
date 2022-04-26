<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand ">選課系統</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex not-login" v-if="show">
          <li class="nav-item">
            <router-link to="/list" class="nav-link">課程列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">加退選</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<!-- Modal -->
</template>

<script>
// TODO:
// 搜尋功能
export default {
  name: "Nav",
  data() {
    return {
      num:0,
      arr:{
        name: "",
        img_url: "",
        price:0,
        detail: "",
      },
      key: "",
    }
  },
  computed: {
    buy: function () {
      return this.num
    },
    show: function(){
      return this.$route.params.USER==null
    },
    adminshow: function(){
      return this.$route.params.USER=="admin"
    },
    isAdmin: function () {
      if(this.$route.name == 'Admin') return "disabled"
      else return ""
    },
  },
  components: {

  },
  methods: {
    searchKey(){
      this.$emitter.emit('keyword',this.key)
      this.key= ""
    },
    backhome(){
      var elements = document.getElementsByClassName('modal-backdrop');
      var p = elements[0].parentNode
      p.removeAttribute("style")
      p.removeAttribute("class")
      p.removeChild(elements[0])
    },
    logout(){
      this.num=0
      this.$router.push("Index")
    },
    createProduct(){
      this.$http.post(process.env.VUE_APP_BACKEND_URL + "new",
      {
        name: this.arr.name,
        imageUrl: this.arr.img_url,
        price: this.arr.price,
        description: this.arr.detail
      })
      .then( () => this.$emitter.emit('reload',1))
      .catch( r => console.log(r))

      this.arr.name= ""
      this.arr.img_url= ""
      this.arr.price= 0
      this.arr.detail= ""
    }
  },
  mounted(){
      this.$emitter.on('cartNum',()=>{
        this.num++
        console.log(this.num)
      })
  },
};
</script>


<style scoped>
.windowset{
  margin: 0 auto;
  max-width: 100%;
  padding: 0 0 0 0;
}
.windowset1{
  padding-right: 0 !important;
}
.windowset2{
  border-radius: 0%;
}
</style>