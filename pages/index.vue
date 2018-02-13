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
            <div class="box">
              <h2 class="subtitle has-text-weight-bold has-text-black">Filter by type:</h2>
              <div class="field" v-for="type in types" :key="type">
                <b-checkbox v-model="selectedTypes"
                  :native-value="type" class="is-warning"> {{ type }}</b-checkbox>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns is-multiline is-variable is-2">
              <div class="column is-one-third" v-for="product in products" :key="product._id">
                <div class="box">
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
      types: ['painted', 'pattern', 'gradient'],
      selectedTypes: []
    }
  },
  computed: {
    products() {
      return this.$store.state.products.filter(el =>
        this.selectedTypes.length
        ? this.selectedTypes.includes(el.metadata.type)
        : el
      )
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('getProducts')
  },
  methods: {
    addToCart(item) {
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
button {
  margin: 0 auto;
}
</style>
