<template>
    <div class="">
        <div class="pt-5 pb-6">
        <SearchForm />
    </div>
        <div class="">
            <div class="flex-col justify-center text-center p-6 hidden md:flex gap-20 h-90">
                <div class="">
                    <p> <span class="text-blue-700 font-bold">Upload your CV -</span>It only takes a few seconds</p>
                    <p> <span class="text-blue-700 font-bold">Employers:post a job-</span> Your next hired candidate is here</p>
                </div>
                <div class="flex justify-center items-end gap-2 relative">
                    <p class="text-sm">
                        What's trending on indeed 
                    </p>
                    <span class="hover:cursor-pointer" @click="isOpen = !isOpen"> <IconsChevronDown/> </span>
                <transition name="fade" class="myclass" appear>
                    <div class="absolute drop w-full top-0 mt-5 border-t" v-if="isOpen">

                        <div class=" container mx-auto grid grid-cols-4  pb-5">

                            <div class="">
                                <h3 class="text-sm py-3">Trending search</h3>
                                <ul>
                                    <li class="link3"><a href="">link</a></li>
                                    <li class="link2"><a href="">link</a></li>
                                    <li class="link1"><a href="">link</a></li>
                                </ul>
                            </div>

                            <div class="">
                                <h3 class="text-sm py-3">Trending search</h3>
                                <ul>
                                    <li class="link3"><a href="">link</a></li>
                                    <li class="link2"><a href="">link</a></li>
                                    <li class="link1"><a href="">link</a></li>
                                </ul>
                            </div>

                            <div class="">
                                <h3 class="text-sm py-3">Trending search</h3>
                                <ul>
                                    <li class="link3"><a href="">link</a></li>
                                    <li class="link2"><a href="">link</a></li>
                                    <li class="link1"><a href="">link</a></li>
                                </ul>
                            </div>

                            <div class="">
                                <h3 class="text-sm py-3">Trending search</h3>
                                <ul>
                                    <li class="link3"><a href="">link</a></li>
                                    <li class="link2"><a href="">link</a></li>
                                    <li class="link1"><a href="">link</a></li>
                                </ul>
                            </div>

                        </div>
                     
                    </div>
                </transition>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const isOpen = ref(false)
const route = useRoute()
const pageName = route.params;

console.log(pageName);
</script>


<style  scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all .3s ease-in-out;
}

.fade-enter-from{
    opacity: 0;
    height: 3px;
    
}


.fade-leave-to {
    opacity: 0;
}



</style>
