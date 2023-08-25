<template>
    
<NuxtLayout name="dashbaord">
    <SearchForm />
    <header class="border-b hidden md:flex">

    
</header>

<section class="maintitle container mx-auto  px-3 md:px-1">
    <div class="heading py-3 border-b ">
        <h1 class=""> {{ getPageName($route.name) }}</h1>
    </div>

    <main class="grid md:grid-cols-[.5fr_2.3fr_.5fr] gap-3">

        <DashboardLeftMenu />
      
        <NuxtPage />

        <DashboardRight />
        
       
        
    </main>
</section>
    
    
</NuxtLayout>

</template>

<script lang="ts" setup>
import getPageName from '@/composables/get-page-name'
const pageName = (
  useRouter().currentRoute.value!.matched[0]['components']!.default as {
    __name: string;
  }
)['__name'];
</script>



<!-- <template>
    <header class="border-b hidden md:flex">

    
    </header>
    
    <section class="maintitle container mx-auto  px-3 md:px-1">
        <div class="heading py-3 border-b ">
            <h3 class="text-xl font-bold">{{ heading }}</h3>
        </div>

        <main class="grid md:grid-cols-[.5fr_2.3fr_.5fr] gap-3">

            <DashboardLeftMenu />
          
           <DashboardCenter />

            <DashboardRight />
            
           
            
        </main>
    </section>

</template>

<script setup>

const heading = ref('My DashBoard')

</script>



<style >

</style> -->