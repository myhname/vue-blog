<script setup>

</script>

<template>
    <div class="spin"></div>
</template>
  
<style scoped>
.spin {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    margin: 1.875rem auto;
    border: .1875rem solid transparent;
    border-radius: 50%;
    border-top-color: #ff8800;
    animation: spin 1s ease infinite;
}

@keyframes spin {
    to {
        -webkit-transform: rotateZ(360deg);
    }
}
</style>