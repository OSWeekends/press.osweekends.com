<template>
  <div class="post">
    <router-link :to="post.path">
      <img v-if="hasImage" :src="mainImgPath" :alt="altImage">
      <img v-else :src="defaultImgPath" alt="osweekends">
      <h2>{{ post.frontmatter.title }}</h2>
    </router-link>
    <span>{{ post.frontmatter.date }}</span>
    <p>{{ post.frontmatter.description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    computed: {
      hasImage() {
        return this.post.frontmatter.image !== undefined && this.post.frontmatter.image !== '' && this.post.frontmatter.image !== null
      },
      mainImgPath() {
        return this.$withBase( '/assets' + this.post.path + this.post.frontmatter.image )
      },
      defaultImgPath() {
        return this.$withBase( '/assets/img/postDefault.png' )
      },
      altImage() {
        return this.post.frontmatter.altImage || ''
      }
    }
  }
</script>

<style scoped lang="stylus">
  .post
    margin-bottom 20px
    border 1px solid #999
</style>
