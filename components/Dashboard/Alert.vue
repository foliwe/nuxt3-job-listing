<template>
    <div class="sidecenter p-2 bg-white w-full">
        <div class="border-b bg-white ">
            <h2 class="py-3 px-2">Create new Job Alert</h2>
        </div>

      <div class="bg-blue-100/50 p-3 pb-1 w-full border border-blue-300/50">
        <form action="" class="p-5">
            <div class="flex flex-col md:flex-row gap-2">

                <div class="flex flex-col">
                    <label for="keyword"> Keyword</label>
                    <input type="text" name="keyword" id="keyword" 
                    class="rounded focus-within:border-none
                    focus:ring-red-600
                    focus:ring-2 placeholder:text-sm
                        " placeholder="eg Sales/IT">
                </div>

                <div class="flex flex-col">
                    <label for="location"> Location</label>
                    <input type="text"  name="location" id="location"
                    class="rounded focus-within:border-none
                    focus:ring-red-600
                    focus:ring-2">
                </div>

                <div class="flex flex-col w-30">
                    <label for="job_type"> Job Type</label>
                    <select name="job_type" id="job_type" class="rounded ">
                        <option value="">Select</option>
                        <option value="part_time">Part Time</option>
                        <option value="full_time">Full Time</option>
                        <option value="contract">Contract</option>
                    </select>
                </div>
                    

            </div>

            <div class="flex flex-col md:flex-row gap-2 pt-3">

                <div class="flex flex-col">
                    <label for="alert"> Alert Name</label>
                    <input type="text" name="alert_name" id="alert" 
                    class="rounded focus-within:border-none
                    focus:ring-red-600
                    focus:ring-2 placeholder:text-sm
                    " placeholder="for your reference">
                </div>

                
               
                    <div class="flex flex-col md:w-24">
                        <label for="min"> Min Salary</label>
                        <input type="number" name="min_salary" id="min" 
                        class="rounded focus-within:border-none
                        focus:ring-red-600
                        focus:ring-2 placeholder:text-sm
                        ">
                    </div>

                    <div class="flex flex-col md:w-24">
                        <label for="max"> Max Salary</label>
                        <input type="number" name="max_salary" id="max" 
                        class="rounded focus-within:border-none
                        focus:ring-red-600 
                        focus:ring-2 placeholder:text-sm
                        ">
                    </div>
               
                


            </div>

            <div class="flex justify-between items-center pt-3">
                <div class="text-sm text-blue-900">More Options <Icon name="mdi:chevron-down" size="20" /></div>
                <div class="">
                    <button class="text-white p-3 bg-teal-700 rounded w-40">Create Alert</button>
                </div>
            </div>

        </form>
      </div>

      
      <DashboardAlertSaved />
        
    </div>
</template>

<script setup>
const title = ref('Alerts')
</script>
