<script>
import { defineComponent, onMounted, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
    name: 'RequestsReports',
    components: {
        DataTable,
        Column,
    },
    setup() {
        const requests = ref([]);
        // Add data
        onMounted(() => {
            console.log('RequestsReports component is mounted');
            fetch('/api/service-request/show')
                .then((res) => {
                    console.log(res);
                    return res.json()
                })
                .then((resp) => {
                    requests.value = resp.data;
                    console.log(requests.value);
                });
        });
        const dt = ref();
        const exportCSV = () => {
                dt.value.exportCSV();
        };
        return {
            requests,
            dt,
            exportCSV,
        };
    },
});
</script>


<template>
    <div style="direction: ltr; margin: 25px;">        
        <DataTable :value="requests" ref="dt" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align: left">
                    <button @click="exportCSV($event)" style="padding: 10px; margin: 10px;"> Export CSV</button>
                </div>
            </template>
            <Column field="id" header="Id"  style="width: 5%"></Column>
            <Column field="ip" header="IP"  style="width: 15%"></Column>
            <Column field="user_name" header="Full Name"  style="width: 15%"></Column>
            <Column field="phone" header="Phone"  style="width: 15%"></Column>
            <Column field="service_type" header="Service Type"  style="width: 15%"></Column>
            <Column field="car_type" header="Car Type"  style="width: 15%"></Column>
            <Column field="car_model" header="Car Model"  style="width: 15%"></Column>
            <Column field="created_at" header="Time"  style="width: 15%"></Column>
        </DataTable>
    </div> 
</template>