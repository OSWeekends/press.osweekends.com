<template>
  <div class="posts" v-if="posts.length">
    <Post :post="post" v-for="(post, idx) in posts" :key="idx"/>
  </div>
</template>

<script>
  import moment from 'moment'

  const TYPE_BLOG = 'blog'
  const FORMAT = 'DD-MM-YYYY'
  const TODAY = new Date()

  export default {
    computed: {
      posts() {
        return this.$site.pages
        // Type blog
          .filter( i => i.frontmatter.type === TYPE_BLOG )
          // Date is same or before "today" (Autopublished)
          .filter( i => moment( i.frontmatter.date, FORMAT ).isSameOrBefore( TODAY ) )
          // Order by date (Newest first)
          .sort( ( a, b ) => {
            return moment( b.frontmatter.date, FORMAT ).valueOf() - moment( a.frontmatter.date, FORMAT ).valueOf()
          } )
      }
    }
  }
</script>

<style lang="stylus">
</style>
