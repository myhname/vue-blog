<script setup>

</script>

<template>
    <header>
        <h1>个人博客</h1>
        <nav>
            <router-link to="/">首页</router-link>
            <router-link to="/create">新建</router-link>
        </nav>
    </header>
</template>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 75rem;
        margin: 0 auto;
        padding: .625rem;
      }
      header h1 {
        color: #dfdfdf;
        font-size: 3rem;
      }
      header a {
        color: #bbb;
        text-decoration: none;
        margin-left: 1.25rem;
      }
      header a.router-link-active {
        color: #444;
        font-weight: bold;
      }
</style>