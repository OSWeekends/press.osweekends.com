<template>
  <div class="post">
    <router-link :to="post.path">
      <img :src="pathImage" :alt="altImage">
      <h2>{{ post.frontmatter.title }}</h2>
    </router-link>
    <span class="date">{{ post.frontmatter.date }}</span>
    <span class="tags">{{ post.frontmatter.tags }}</span>
    <p class="small-description">{{ post.frontmatter.description }}</p>
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
      /**
       * If post has image set (through frontmatter), returns the url of the image.
       * Else, returns a default image path.
       * @returns {String} The path of the image
       */
      pathImage() {
        return this.hasImage ? this.mainImgPath : this.defaultImgPath
      },
      /**
       * Check if the post has set an image, returns true or false
       * @returns {boolean}
       */
      hasImage() {
        return this.post.frontmatter.image !== undefined && this.post.frontmatter.image !== '' && this.post.frontmatter.image !== null
      },
      /**
       * Path of the image in the post
       * @returns {String}
       */
      mainImgPath() {
        return this.$withBase( '/assets' + this.post.path + this.post.frontmatter.image )
      },
      /**
       * Path of the default image
       * @returns {String}
       */
      defaultImgPath() {
        return this.$withBase( '/assets/img/postDefault.png' )
      },
      altImage() {
        return this.post.frontmatter.altImage || 'osweekends'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .post
    border-radius: .25rem
    padding 20px
    margin-bottom 20px
    box-shadow 0 .5rem 1rem rgba(0, 0, 0, .15)
</style>
