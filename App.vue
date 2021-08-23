<template>
  <div class="">
    <drop-zone v-model="files"></drop-zone>
     <upload-list :items="files"></upload-list>
  </div>
</template>

<script>
import axios from 'axios'
import UploadList from './components/UploadList.vue'
import DropZone from './components/DropZone.vue'
 
export default {
  name: 'App',
    components: {
      UploadList,
      DropZone
    
  },

  data(){
    return{
       files:[],
      }
  },
}
</script>
