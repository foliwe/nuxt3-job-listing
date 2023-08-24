<template>
    <DashboardCenter>
        <DashboardAlert />
    </DashboardCenter>
   

</template>

<script setup>

const route = useRoute()
const pageName = route.params.pageName;

console.log(pageName);

</script>



<style >


</style>
