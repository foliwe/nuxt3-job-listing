<template>
    <div class="footer mt-14  border-t border-stone-400 pt-1">
        <div class="">
            <ul class="flex md:inline-flex" v-for="link in links">
                <li class="p-1 md:px-2 text-sm hover:underline hover:text-sky-500"> <a href="">{{ link }}</a></li>
            </ul>
        </div>
    </div>

    <div class="footer mt-5 pt-1">
        <div class="">
            <ul class="flex md:inline-flex" v-for="link in linksTwo">
                <li class="p-1 md:px-2 text-sm hover:underline hover:text-sky-500"> <a href="">{{ link }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup>

const links = ref([
'Hiring Lab',
'Career Advice',
'Browse Jobs',
'Browse Companies',
'Salaries',
'Indeed Events',
' Work at Indeed',
' Countries',
' About',
'Help Centre',
'ESG at Indeed',
' Post a job'
])

const linksTwo = ref([
'© 2023 Indeed',
'Anti-Slavery statement',
'Accessibility at Indeed',
'Privacy Centre',
'Cookies',
'Privacy',
'Terms'
])

</script>

<style lang="scss" scoped>

</style>