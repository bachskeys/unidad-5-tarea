<template>
  <div>
  <b-card
    :img-src="user.picture.medium"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-6 text-center"
  >
    <b-card-text>
     {{user.name.title}} {{user.name.first}} {{user.name.last}}<br>
     {{user.gender}}<br>
     {{user.email}}<br>
     {{user.phone}}<br>
     {{user.cell}}<br>
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'Tarjeta',
  props:{
    user:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
