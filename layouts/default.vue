<template>
    <div class="flex flex-col min-h-screen ">

        <div class="py-2">
            <NavBar />
        </div>

        <div class="">
            <slot />
        </div>

        <div class=" mt-auto">
            <Footer />
        </div>
        
    </div>
</template>

<script setup>

</script>

