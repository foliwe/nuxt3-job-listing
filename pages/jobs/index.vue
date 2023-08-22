<template>
    <div class="pt-2">
         <SearchForm />
    </div>
    <div class="container px-3 mx-auto">

        <div class="flex flex-col md:flex-row">

            <div class="md:w-1/3">
                <p class="text-sm font-bold py-5 border-b-2"> <a class="text-blue-700" href=""> Post your resume</a> and find your next job on Indeed!</p>
                <div class=" py-5">
                    <span class="text-xs">full time jobs</span>
                    <div class="flex justify-between">
                        <p class="text-sm">Sort by: <span class="font-bold">relevance</span> <span class="text-sky-600">- date</span></p>
                        <p class="flex items-center gap-1 text-xs">
                            <span>589,885 jobs</span>
                            <IconsQuestion />
                        </p>
                    </div>
                </div>

                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />

               

            </div>

            <div class="hidden md:flex">
                <div class=""></div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

