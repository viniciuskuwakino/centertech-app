<script setup>
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
    <form @submit.prevent="createService">

        <div class="row g-3">
            <!-- <div class="col-sm-5"> -->
            <div class="col-sm">
                <label for="name" class="form-label">Nome do cliente</label>
                <input 
                    id="name"
                    v-model="form.name"
                    class="form-control mt-zero"
                    type="text"
                    name="name"
                />
            </div>
            <div class="col-sm">
                <label for="phone" class="form-label">Telefone</label>
                <input 
                    id="phone"
                    v-model="form.phone"
                    class="form-control mt-zero"
                    type="text"
                    vue-the-mask:mask="['(##) ####-####', '(##) #####-####']"
                    name="phone"
                />
            </div>
            <div class="col-sm">
                <label for="device" class="form-label">Aparelho</label>
                <input 
                    id="device"
                    v-model="form.device"
                    class="form-control mt-zero"
                    type="text"
                    name="device"
                />
            </div>
        </div>

        <div class="row g-3">
            <div class="col-sm">
                <label for="brand" class="form-label">Marca</label>
                <input
                    id="brand"
                    v-model="form.brand"
                    class="form-control mt-zero"
                    type="text"
                    name="brand"
                />
            </div>
            <div class="col-sm">
                <label for="model" class="form-label">Modelo</label>
                <input 
                    id="model" 
                    v-model="form.model" 
                    class="form-control mt-zero" 
                    type="text" 
                    name="model"
                />
            </div>
            <div class="col-sm">
                <label for="serial-number" class="form-label">Nº de série</label>
                <input 
                    id="serial-number" 
                    v-model="form.serial_number" 
                    class="form-control mt-zero" 
                    type="text" 
                    name="serial-number"
                />
            </div>
        </div>

        <div class="row g-3">
            <div class="col-sm">
                <label for="brand" class="form-label">Marca</label>
                <textarea
                    id="description"
                    v-model="form.description"
                    class="form-control mt-zero"
                    name="description"
                    rows="3"
                    style="resize: none;"
                ></textarea>
            </div>
            <div class="col-sm-4 buttons-form">
                <div>
                    <label for="price" class="form-label">Preço</label>
                    <input 
                        id="price"
                        v-model="form.price"
                        class="form-control mt-zero"
                        type="text"
                        name="price"
                    />
                </div>
                <div class="buttons-form-group">
                    <button type="reset" class="btn btn-warning" @click="clearForms">Resetar</button>
                    <button type="submit" class="btn btn-primary">Registrar</button>
                </div>
            </div>
        </div>
    </form>
</template>
  
