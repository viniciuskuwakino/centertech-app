<script setup lang="js">
import Forms from './components/Form.vue'
import List from './components/List.vue'

// import Vue from 'vue'
// import VueTheMask from 'vue-the-mask'
// Vue.use(VueTheMask)
// const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <!-- <img alt="logo" class="logo" src="./assets/electron.svg" /> -->
  <!-- <Teste /> -->
  <Forms />
  <hr />
  <List />

  <!-- <div>
    <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
  </div> -->
  <!-- <Versions /> -->
</template>
