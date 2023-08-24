<template>
    <div class="border-t-4 border-t-teal-600 mt-5 border-r border-l border-b">
        <h1 class="py-5 border-b px-3">Cisco</h1>

        <div class="flex-row md:flex">

            <div class="grow">
                <p> Keywords: it </p>
                <p>Industry: All industries <span class="text-blue-700">(Select an Industry) </span></p>
                <p> Location: Anywhere <span class="text-blue-700">(Select a Location)</span> </p>
                <p>Salary: Any <span class="text-blue-700">(Select a Salary)</span> </p>
            </div>

            <div class="second">
                <div class="md:hidden flex gap-2 pt-4">
                        <button class="py-2 px-4 text-white bg-blue-800 rounded-lg w-40">Search</button>
                        <button class="py-2 px-4 border-2 border-blue-800 rounded-lg text-blue-800">Modify Alert</button>
                </div>

                <div class="hidden md:flex">

                    <div class="text-blue-700 text-sm">
                        <p class="items-center"><span> <Icon name="heroicons:envelope-20-solid" /></span> Email Alert</p>
                        <p><span> <Icon name="ic:baseline-search" /></span> Search</p>
                        <p><span> <Icon name="ic:sharp-mode-edit-outline" /></span> Modify Alert</p>
                        <p><span> <Icon name="ic:baseline-notifications" /></span> Deactivate Alert</p>
                        <p><span> <Icon name="ic:baseline-delete" /></span> Confirm Delete</p>
                    </div>

                    <div class=""> <Icon name="ic:baseline-toggle-on" size="50" color="teal" />
                    </div>
                </div>

            </div>
           
            <!--<div class="yes">
                <div class="md:hidden flex gap-2 pt-4">
                    <button class="py-2 px-4 text-white bg-blue-800 rounded-lg w-40">Search</button>
                    <button class="py-2 px-4 border-2 border-blue-800 rounded-lg text-blue-800">Modify Alert</button>
                </div>

                <div class="hidden md:flex">

                    <div class="text-blue-700 text-sm">
                        <p class="items-center"><span> <Icon name="heroicons:envelope-20-solid" /></span> Email Alert</p>
                        <p><span> <Icon name="ic:baseline-search" /></span> Search</p>
                        <p><span> <Icon name="ic:sharp-mode-edit-outline" /></span> Modify Alert</p>
                        <p><span> <Icon name="ic:baseline-notifications" /></span> Deactivate Alert</p>
                        <p><span> <Icon name="ic:baseline-delete" /></span> Confirm Delete</p>
                    </div>

                    <div class=""> <Icon name="ic:baseline-toggle-on" size="50" color="teal" />
                    </div>
                </div>

            </div> -->

        </div>
    </div>
</template>

<script setup>

</script>

