<template>
  <div class="post">
    <router-link :to="post.path">
      <img class="post__img" :src="pathImage" :alt="altImage">
      <h2 class="post__title">{{ post.frontmatter.title }}</h2>
    </router-link>
    <div class="post__content">
      <span class="post__author">Por <a href="#">{{ post.frontmatter.author }}</a> · </span>
      <span class="post__date">{{ post.frontmatter.date }}</span>
      ·
      <span class="post__tags" v-for="tag in post.frontmatter.tags">
        <span class="tag">#{{ tag }}</span>
      </span>
      <p class="small-description">{{ post.frontmatter.description }}</p>
    </div>
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

<style lang="stylus">
  border-radius()
    -webkit-border-radius arguments
    -moz-border-radius arguments
    border-radius arguments

  .post
    border-radius(5px)
    margin-bottom 20px
    box-shadow 0 .5rem 1rem rgba(0, 0, 0, .15)

    > a
      display block
      color #333

      &:hover
        color #0056b3

    .post__img
      border-radius(5px 5px 0px 0px)

    .post__title
      margin-left 20px
      margin-right 20px
      margin-bottom 10px

    .post__content
      padding 0 20px 20px 20px

    .post__author
      font-size 10px

    .post__date
      font-size 10px
      background-color #f3f3f3
      padding 4px 7px
      border-radius 18px

    .post__tags
      font-size 10px

      .tag
        border 1px solid #03a9f4
        border-radius 18px
        padding 3px 6px
        margin-right 5px


</style>
