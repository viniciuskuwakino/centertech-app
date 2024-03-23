<script setup>
import { onBeforeMount, ref } from 'vue';
// export default {
//   directives: {mask}
// }
// import {mask} from 'vue-the-mask';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'


const services = ref([])

onBeforeMount(() => {
    window.electron.ipcRenderer.send('listService')
    window.electron.ipcRenderer.on('recvListService', (_event, data) => {
        services.value = data
    })
})

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
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Aparelho</th>
                    <th scope="col">Data do registro</th>
                    <th scope="col">Preço</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="s in services" :key="s['id']">
                    <tr>
                        <th scope="row">{{ s['id'] }}</th>
                        <td>{{ s['name'] }}</td>
                        <td v-mask="['(##) ####-####', '(##) #####-####']" >{{ s['phone'] }}</td>
                        <td>{{ s['device'] }}</td>
                        <td>{{ s['created_at'] }}</td>
                        <td>{{ s['price'] }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

