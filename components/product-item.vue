<template>
  <div>
    <div class="box product-box">
      <p class="subtitle has-text-centered has-text-black has-text-weight-light product-title" @click="modalActive = true">
        {{ product.title }}
      </p>
      <figure class="image product-image" @click="modalActive = true">
        <img :src="product.metadata.image.imgix_url" alt="">
      </figure><br>
      <button class="button is-link is-outlined is-rounded is-block" @click="addToCart(product)">
        ${{product.metadata.price}} - Add to Cart
      </button>
    </div>

    <b-modal :active.sync="modalActive">
        <div class="box modal-box">
          <a class="close-button" @click.prevent="modalActive = false">X</a>
          <div class="columns">
            <div class="column is-hidden-mobile">
              <figure class="image modal-image">
                <img :src="product.metadata.image.imgix_url" alt="">
              </figure>
            </div>
            <div class="column">
              <div class="box is-bordered">
                <p class="is-size-4 has-text-weight-bold is-black">
                  {{ product.title }}
                </p>
                <p class="description" v-html="product.content"></p>
                <button class="button is-link is-outlined is-rounded is-block " @click="addToCart(product)">
                  ${{product.metadata.price}} - Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  props: ['product'],
  data() {
    return {
      modalActive: false
    }
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item)
      this.$toast.open({
         message: 'Added to cart',
         type: 'is-success'
     })
    }
  }
}
</script>

<style scoped>
.product-image img{
  height: 200px;
  width: auto;
  margin: 0 auto;
  cursor: pointer;
}
.modal-image img{
  height: 300px;
  width: auto;
  margin: 0 auto;
}
.product-box {
  height: 100%;
}

.product-box button {
  margin: 0 auto;
}
.product-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.box {
  background: #f4f2f3;
  box-shadow: none;
}
.box:not(:last-child) {
    margin-bottom: auto;
}
.modal-box {
  background: #eee;
}
.modal-box .column {
  padding: 1.5rem;
}
p.description {
  margin: 10px 0 30px;
  line-height: 1.25;
}
.box.is-bordered {
  border: 1px solid rgba(50, 115, 220, 0.2);
}
.close-button {
  position: absolute;
  right: 10px;
  font-size: 1.2rem;
  color:#000;
  top: 5px;
}
.close-button:hover {
  color: #ff3860;
}
</style>
