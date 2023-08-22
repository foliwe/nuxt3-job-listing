<template>
    <div class>
        <section class="searchForm grid place-content-center mt-7 md:mt-12">
            <form action="" class="">
                <div class="flex justify-center flex-col w-screen  px-3 mx-auto gap-3 md:flex-row">

                    <div class="w-full flex md:w-3/12 items-center relative">
                        <span class="absolute font-bold pl-3"> What</span>
                        <input type="text" 
                        name="search" 
                        class="focus-within:border-none
                        focus:ring-blue-700 rounded-lg 
                        pl-20 pr-3 py-3 w-full placeholder:text-sm"
                        placeholder="Job title, keywords, or company">
                        <span class="absolute font-bold pl-3 right-0 pr-3"> <IconsSearch class=""/></span>
                    </div>

                    <div class="w-full flex md:w-3/12 items-center relative">
                        <span class="absolute font-bold pl-3"> Where</span>
                        <input type="text" 
                        name="search" 
                        class="focus-within:border-none
                        focus:ring-blue-700 rounded-lg 
                        pl-20 pr-3 py-3 w-full placeholder:text-sm"
                        placeholder="City or postcode">
                        <span class="absolute font-bold pl-6 right-0 pr-3"> <IconsLocation class=""/></span>
                    </div>

                    <div class="w-full md:w-1/12">
                        <button class="bg-blue-800 text-white rounded-lg w-full py-3"> Find jobs</button>
                    </div>

                </div>
            </form>
            <div class="flex-col justify-center text-center p-6 hidden md:flex gap-20 h-90">
                <div class="">
                    <p> <span class="text-blue-700 font-bold">Upload your CV -</span>It only takes a few seconds</p>
                    <p> <span class="text-blue-700 font-bold">Employers:post a job-</span> Your next hired candidate is here</p>
                </div>
                <div class="flex justify-center items-end gap-2">
                    <p class="text-sm">
                        What's trending on indeed 
                    </p>
                    <span class=""> <IconsChevronDown/> </span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>