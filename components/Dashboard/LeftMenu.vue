<template>
    <div class="sideR p-4 md:bg-white md:border border-blue-300/50">
                <div class=" grid p-1 md:gap-4">

                    <div class="md:border-b flex items-center gap-1 md:flex-col bg-white rounded-xl shadow-md md:shadow-none">
                        <Icon name="material-symbols:person" size="90" color="#94a3b8" />

                        <p class="flex flex-col md:items-center md:pb-5 text-sm">
                            <span>Kifaru Muto Ya Bantu</span>
                            <span>none</span>
                            <span><a href="">Edit profile</a></span>
                        </p>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-1 my-1 md:gap-2 text-sm">
                        <div class="md:bg-sky-50 md:border md:rounded-2xl">
                            <div class="flex items-center gap-3 
                                md:bg-transparent bg-white p-3 
                                mx-2 md:rounded-none rounded-xl 
                                shadow-md md:shadow-none
                                md:justify-center
                                ">
                                <span><Icon name="material-symbols:favorite-rounded" size="20" color="#b91c1c"/></span>
                                <p class="flex flex-col md:flex-row md:justify-between md:gap-3 ">
                                    <span class=""><NuxtLink to="/dashboard/saved_jobs"> Saved Jobs</NuxtLink></span>
                                    <span class="font-bold">5</span>
                                </p>

                            </div>
                        </div>

                        <div class="md:bg-sky-50 md:border md:rounded-2xl">

                            <div class="flex items-center gap-3 bg-white p-2
                                mx-2 md:rounded-none rounded-xl 
                                md:bg-transparent
                                shadow-md md:shadow-none
                                md:justify-center
                                my-1
                                ">
                                <span><Icon name="material-symbols:wifi-notification" size="20" color="#1d4ed8"/></span>
                                <p class="flex flex-col md:flex-row md:justify-between md:gap-3">
                                    <span class=""><NuxtLink to="/dashboard/alert"> Alert</NuxtLink></span>
                                    <span class="font-bold">5</span>
                                </p>

                            </div>
                        </div>
                        
                        
                    </div> 


                    <div class="grid grid-cols-2 md:grid-cols-1 md:gap-2 text-sm">

                        <div class="md:bg-sky-50 md:border md:rounded-2xl">
                            <div class="flex items-center gap-3 bg-white p-3
                                mx-2 md:rounded-none rounded-xl 
                                md:bg-transparent
                                shadow-md md:shadow-none
                                md:justify-center
                                ">
                                <Icon name="material-symbols:person" size="20" color="#1d4ed8" />
                                <p class="flex flex-col md:flex-row md:justify-between md:gap-3">
                                    <span class=""><NuxtLink to="/dashboard/viewers"> Viewers</NuxtLink></span>
                                    <span class="font-bold">5</span>
                                </p>

                            </div>
                        </div>
                        <div class="md:bg-sky-50 md:border md:rounded-2xl">
                            <div class="flex items-center gap-3 bg-white p-3 
                                mx-2 md:rounded-none rounded-xl 
                                md:bg-transparent
                                shadow-md md:shadow-none
                                md:justify-center
                                my-1
                                ">
                                <span><Icon name="material-symbols:check-circle-rounded" size="20" color="#16a34a"/></span>
                                <p class="flex flex-col md:flex-row md:justify-between md:gap-3">
                                    <span class=""><NuxtLink to="/dashboard/applications">Applications</NuxtLink></span>
                                    <span class="font-bold">5</span>
                                </p>

                            </div>
                        </div>

                    </div> 
                    
                    <div class="hidden md:grid p-3 mx-2 py-6 bg-white">
                        <p class="text-sm">
                            <h3 class="text-center font-bold py-2">Complete your profle</h3>
                            <h3 class="text-center">A completed profile is 71% more likely to be viewed by a recruiter.</h3>
                        </p>

                    </div>

                </div>
            </div>
</template>

<script setup>

</script>

