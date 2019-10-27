<template>
  <div class="posts" v-if="posts.length">
    <Post :post="post" v-for="(post, idx) in posts" :key="idx"/>
  </div>
</template>

<script>
  import moment from 'moment'

  const TYPE_BLOG = 'blog'
  // Info: https://momentjs.com/docs/#/displaying/format/
  const FORMAT = 'DD-MM-YY'

  export default {
    computed: {
      posts() {
        return this.$site.pages
          .filter( i => i.frontmatter.type === TYPE_BLOG )
          .sort( ( a, b ) => {
            return moment( a.frontmatter.date, FORMAT ).valueOf() - moment( b.frontmatter.date, FORMAT ).valueOf()
          } )
      }
    }
  }
</script>
