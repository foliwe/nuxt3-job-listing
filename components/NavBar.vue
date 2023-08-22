<template>
    <header class="md:border-b mt-2">
        <nav class="flex items-center justify-between px-4 mx-auto">

            <div class="flex items-center gap-4">
                <IconsLogo />
                <img src="@/assets/images/indeed.png" width="50">
                <ul class=" text-sm gap-6 self-end hidden sm:flex">
                        <li class="py-6 border-b-2 border-stone-100 hover:border-blue-800">Find Jobs</li>
                        <li class="py-6 border-b-2 border-stone-100 hover:border-blue-800">Company reviews</li>
                        <li class="py-6 border-b-2 border-stone-100 hover:border-blue-800">Salary guide</li>
                    </ul>
            </div>

            <div class=" hidden sm:flex">                            
                <div class="flex ">
                    <ul class="flex gap-10 text-sm">
                        <li class="py-6 border-b-2  border-stone-100 hover:border-blue-800 text-blue-800 font-bold">Sign in</li>
                        <li class="py-6 border-b-2 border-stone-100 hover:border-blue-800">Employers/Post Job</li>
                    </ul>
                </div>
            </div> 

            <div class="flex items-center gap-3 md:hidden">
                <button class="flex items-center font-bold justify-center bg-blue-900 text-white p-2 w-28 rounded-lg gap-2">
                    <IconsUser />
                    Sign in
                </button>
                <IconsMobineMenu class=""/>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style>

</style>