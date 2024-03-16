<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

// import {mask} from 'vue-the-mask';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'


const services = ref([])


onBeforeMount(() => {
    window.electron.ipcRenderer.send('listService')
    window.electron.ipcRenderer.on('recvListService', (_event, data) => {
        services.value = data
    })
})

function format_date(date) {
    const new_date = new Date(date)
    console.log(`${new_date.getDate()}/${new_date.getMonth()}/${new_date.getFullYear()} - ${new_date.getHours()}:${new_date.getMinutes()}`)
}
// const createService = () => window.electron.ipcRenderer.send('createService')

// const createService = () => {
//     console.log(form)
//     // form.post(route('store.admin.user'), {
//     //     onSuccess: () => {
//     //         form.reset();
//     //     },
//     //     onError: () => {
//     //         if (form.errors.password) {
//     //             form.reset('password', 'password_confirmation');
//     //             passwordInput.value?.focus();
//     //         }
//     //     },
//     // });
// }


</script>

<template>
    <form>
        <div class="py-4">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="space-y-12">
                        <!-- <form @submit.prevent="createService"> -->
                        <form>
                        
                            <div class="border-b border-gray-900/10 pb-12 px-1">

                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400 table-auto">
                                    <thead class="text-xs text-gray-800 uppercase bg-gray-200 light:bg-gray-700 light:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Nome
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Telefone
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Aparelho
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Data do registro
                                            </th>
                                            <!-- <th scope="col" class="px-6 py-3">
                                                Marca
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Modelo
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Nº de série
                                            </th> -->
                                            <th scope="col" class="px-6 py-3">
                                                Preco
                                            </th>
                                            <!-- <th scope="col" class="px-6 py-3">
                                                Descrição
                                            </th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-for="s in services" :key="s['id']">
                                            <tr class="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                                    {{ s['name'] }}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {{ s['phone'] }}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {{ s['device'] }}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {{ format_date(s['created_at']) }}
                                                </td>
                                                <!-- <td class="px-6 py-4">
                                                    {{ s['brand'] }}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {{ s['model'] }}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {{ s['serial_number'] }} -->
                                                <!-- </td> -->
                                                <td class="px-6 py-4">
                                                    {{ s['price'] }}
                                                </td>
                                            </tr>
                                        </template>

                                    </tbody>
                                </table>
                                
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </form>
</template>
  
