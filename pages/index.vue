<template>
  <main>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> Celebrate Uniquesness</h1>
          <h2 class="is-size-3 has-text-weight-light">
            Beautiful mobile covers that <br>
            reflects your personality.
          </h2>
        </div>
      </div>
    </section>
    <section class="section category-list">
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth">

          </div>
          <div class="column">
            <div class="columns is-multiline is-variable is-2">
              <div class="column is-one-third" v-for="product in products" :key="product._id">
                <div class="box is-fullheight">
                  <p class="subtitle has-text-centered has-text-black has-text-weight-light">
                    {{ product.title }}
                  </p>
                  <figure class="image product-image">
                    <img :src="product.metadata.image.imgix_url" alt="">
                  </figure><br>
                  <button class="button is-link is-outlined is-rounded is-block" @click="addToCart(product)">
                    ${{product.metadata.price}} - Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import cosmic from '../plugins/cosmic'
export default {
  data () {
    return {
    }
  },
  computed: {
    products() {
      console.log(this.$store.state.products)
      return this.$store.state.products
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('getProducts')
  },
  methods: {
    addToCart(item) {
      console.log(item)
      this.$store.commit('addToCart', item)
    }
  }
}
</script>

<style scoped>
.hero {
  background: url('/images/student-texting-smart-phone_925x.jpg');
  background-position: center center;
  background-size: cover;
}
.box {
  background: #f4f2f3;
  box-shadow: none;
}
.product-image img{
  height: 200px;
  width: auto;
  margin: 0 auto;
}
.subtitle {
  font-family: 'Nunito', sans-serif;
}
button {
  margin: 0 auto;
}
</style>
