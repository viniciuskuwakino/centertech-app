<script setup lang="ts">
import { ref } from 'vue';
// import type { Ref } from 'vue';
// import {mask} from 'vue-the-mask';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'

const name = ref('')
const phone = ref('')
const device = ref('')
const brand = ref('')
const model = ref('')
const serial_number = ref('')
const price = ref(0)
const description = ref('')

// interface ServiceInterface {
//     name: string
// }

// const service = {
//     name: name.value
// }

const form = {
    name: name.value,
    phone: phone.value,
    device: device.value,
    brand: brand.value,
    model: model.value,
    serial_number: serial_number.value,
    price: price.value,
    description: description.value

    // name: 'Vinicius Kuwakino',
    // phone: '17996325684',
    // device: 'Monitor',
    // brand: 'BenQ',
    // model: 'XL2411P',
    // serial_number: '41975972',
    // description: 'Defeito na tela',
    // price: ''

}

// const form = useForm<ServiceForm>({});



function createService() {
    form.phone = form.phone.toString()
    window.electron.ipcRenderer.send('createService', {form})
}

function clearForms() {
    form.name = '',
    form.phone = '',
    form.device = '',
    form.brand = '',
    form.model = '',
    form.serial_number = '',
    form.price = 0,
    form.description = ''
}

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
                        <form @submit.prevent="createService">
                        
                            <div class="border-b border-gray-900/10 pb-4 px-1">
                                <h1 class="text-lg font-semibold leading-10 text-gray-900">Cadastrar Serviços</h1>
    
                                <div class="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="name" class="block text-md font-medium leading-6 text-gray-900">Nome do cliente</label>
                                        <div>
                                            <input 
                                                id="name"
                                                v-model="form.name"
                                                type="text"
                                                name="name"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                            />
                                        </div>
                                    </div>
    
                                    <div class="sm:col-span-1">
                                        <label for="phone" class="block text-md font-medium leading-6 text-gray-900">Telefone</label>
                                        <div>
                                            <input 
                                                id="phone"
                                                v-model="form.phone"
                                                type="number"
                                                vue-the-mask
                                                :mask="['(##) ####-####', '(##) #####-####']"
                                                name="phone"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
    
                                    <div class="sm:col-span-2">
                                        <label for="device" class="block text-md font-medium leading-6 text-gray-900">Aparelho</label>
                                        <div>
                                            <input 
                                                id="device"
                                                v-model="form.device"
                                                type="text"
                                                name="device"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
    
                                    <div class="sm:col-span-2">
                                        <label for="brand" class="block text-md font-medium leading-6 text-gray-900">Marca</label>
                                        <div>
                                            <input 
                                                id="brand"
                                                v-model="form.brand"
                                                type="text"
                                                name="brand"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div class="sm:col-span-2">
                                        <label for="model" class="block text-md font-medium leading-6 text-gray-900">Modelo</label>
                                        <div>
                                            <input 
                                                id="model"
                                                v-model="form.model"
                                                type="text"
                                                name="model"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
    
                                    <div class="sm:col-span-1">
                                        <label for="serial-number" class="block text-md font-medium leading-6 text-gray-900">Nº de série</label>
                                        <div>
                                            <input 
                                                id="serial-number"
                                                v-model="form.serial_number"
                                                type="text"
                                                name="serial-number"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-1">
                                        <label for="price" class="block text-md font-medium leading-6 text-gray-900">Preço</label>
                                        <div>
                                            <input 
                                                id="price"
                                                v-model="form.price"
                                                type="number"
                                                name="price"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
    
                                    <div class="col-span-full">
                                        <label for="description" class="block text-md font-medium leading-6 text-gray-900">Descrição</label>
                                        <div>
                                            <textarea 
                                                id="description"
                                                v-model="form.description"
                                                name="description"
                                                rows="3"
                                                class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                            />
                                        </div>
                                    </div>
    
                                </div>
    
                                <div class="mt-3 flex items-center justify-end gap-x-6">
                                    <button 
                                        type="reset"
                                        class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                                        @click="clearForms"
                                    >
                                        Resetar
                                    </button>

                                    <button 
                                        type="submit"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                    >
                                        Registrar
                                    </button>
                                    <!-- <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                    <button type="submit"
                                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button> -->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </form>
</template>
  
