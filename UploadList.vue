<template>
   
    <div class="upload"> 
        <div v-for="(file, index) in files" :key="index">
          <img src="tick.gif" class="correct" alt=""><br><br>
               <div id="container">
                   <h3>Uploaded Successfully</h3> 
                   <img class="image" :src="getFileImage(file)" alt="">     
              </div>       
        </div>
    </div>

</template>

<script>

import {
    getFileSize,
    getFileName,
    getFileType,
    getFileDate,
    getFileImage,
    loadFileImage
} from '../../src/utils.js'
export default {
    name:'UploadList',
    props:['items'],
      components:{
           
         },
    setup(){
        return{
   
    getFileSize,
    getFileName,
    getFileType,
    getFileDate,
    getFileImage,
    loadFileImage
}
    },    
    computed:{
        files(){
            return this.items.reverse()
        }
    },
    methods:
    {
        getFileImage()
        {
            const getFileImage = (image) => {
             return URL.createObjectURL(image)
            }
        }
    }

}
</script>

<style>
.upload{
 width:50%;
 height:600px;
 display:flex;
 margin:auto;
 justify-content: center;
 align-items: center;
 position:relative;
 margin-top:1rem;

}
#container{
    padding:0.5rem;
    width:130%;
    height:150%;
    box-shadow:-2px 6px 18px -5px rgba(0, 0, 0, 0.75);
    
}
.correct{
    width:75px;
    height:75px;
    position:absolute;
    margin-top:-4rem;
    margin-bottom:2rem;
}
.image{
    margin-top:-2rem;
    width:250px;
    height:250px;
    border-radius:15px;
  
}
h3{
    font-family: 'Niramit', sans-serif;
    padding-top:1rem;
    margin-bottom:-1rem;
}
</style>