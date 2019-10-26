<template>
  <div class="posts" v-if="posts.length">
    <Post :post="post" v-for="(post, idx) in posts" :key="idx"/>
  </div>
</template>

<script>

  const typeBlog = 'blog'

  export default {
    props: [ 'page' ],
    computed: {
      posts() {
        const currentPage = this.page ? this.page : this.$page.path
        console.log( 'this.$site.pages' )
        console.log( this.$site.pages )
        return this.$site.pages
          .filter( i => i.frontmatter.type === typeBlog )
          .sort( ( a, b ) => new Date( b.frontmatter.date ) - new Date( a.frontmatter.date ) )
      }
    }
  }
</script>
