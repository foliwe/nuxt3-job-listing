<!-- <template>
    <div class="flex flex-col min-h-screen ">

        <div class="py-2">
            <NavBar />
           <SearchForm />
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

</script> -->

<template>
    
    <header class="border-b hidden md:flex">

    
    </header>
    
    <section class="maintitle container mx-auto  px-3 md:px-1">
        <div class="heading py-3 border-b ">
            <h3 class="text-xl font-bold">{{ heading }}</h3>
        </div>

        <main class="grid md:grid-cols-[.5fr_2.3fr_.5fr] gap-3">

            <DashboardLeftMenu />
          
           <slot />

            <DashboardRight />
            
           
            
        </main>
    </section>

</template>

<script setup>

const heading = ref('Alert')

</script>



<style >

</style>