<template>
    <div id="photo_zone">
        <link href="https://fonts.googleapis.com/css2?family=Short+Stack&family=Baloo+Tamma+2:wght@500&family=Hina+Mincho&family=Klee+One:wght@600&family=Niramit:wght@200&family=Quicksand&family=Varela+Round&display=swap" rel="stylesheet">
           <div v-if="(progress < 1)" class="image-container">
              <h2>Upload your image</h2> 
                 <p class="p-tag">File should be Jpeg, Png...</p>
                    <input type="file" id="dropzone-file" style="display:none;" class="dropzone-file" ref="dropzoneFile"  @change="uploadFile" multiple accept="image/*">
           
                    <div class="dropzone-wrapper" @dragenter.prevent="" @dragover.prevent="" @drop.prevent="uploadFile">
                        <label for="dropzone-file" class="dropzone-label">
                          <img class="image" src="drag image.gif">
                             <div class="dropzone-label-text">
                                <p>
                                    <strong style="opacity:0.8;font-weight:700;font-family: 'Baloo Tamma 2', cursive;">Drag and drop files to upload</strong>
                                </p>
                             </div>  
                            <div class="choose-btn">Choose a File</div> <br>
                        </label>
                    </div> <br> <span style="opacity:0.7">or</span> <br><br><br><br>  
             </div>
                <progress-bar v-show="(progress!==0)"  :progress="progress" v-if="(progress<99)"> </progress-bar> 
    </div>
</template>

<script>


import ProgressBar from './ProgressBar.vue'
import axios from 'axios'


export default {
     name:'DropZone',
     components:{
         ProgressBar,
     
        
         },
     props:['modelValue'],
     emits:['update:modelValue'],
    
     data(){
         return{
             showProgress:false,
             files:[],
             progress:0,
             Uploading:false,

         }
     },
     methods:{
        
         uploadFile(e){
               const inputValue = e.target.files || e.dataTransfer.files||this.$refs.dropzoneFile.files||this.$refs.uploadFile.files
                     for(let i= 0; i< inputValue.length;i++){
                         const fileitem =inputValue[i]
                         this.files.push(fileitem)
                     }
                     console.log(this.file)

             let data = new FormData();
             data.append('file',this.files[0])
                     axios.post('http://localhost:3000/dropzoneFile', data, {
                         onUploadProgress: e =>{ this.progress = Math.round(e.loaded * 100 / e.total)
                         console.log(this.progress)
                     if(this.progress > 98){
                        this.$emit('update:modelValue', this.files)
                      }
                    },
                
             }).then(res=>{
                 console.log("upload completed")
               
             })   
             .catch(err => {
                 console.log('upload failed')
             })  
        }
    }
}
</script>

<style>
.dropzone{
    width:100%;
    height:700px;
}
h2{
    font-family: 'Quicksand', sans-serif;
    text-align: center;
}
.p-tag{
   font-family: 'Mallanna', sans-serif;
    text-align: center;
    
     font-size:14px;
     opacity:0.8;
}
h4{
    
    opacity: 0.7;
}
.image-container{
    padding:0.5rem;
    width:30%;
    margin-left:35%;
    align-items: center;
    height:100%;
    box-shadow:-2px 6px 18px -5px rgba(0, 0, 0, 0.75);
}
.dropzone > input{
    position: absolute;
    text-align:center;
    margin-left:-5rem;
    margin-top:27rem;


 }
.dropzone-wrapper{
    width:300px;
    height:300px;
    margin:auto;
    padding:1rem;
    margin-top:2rem;
    border:2px dashed skyblue;
    position:relative;
    display:flex;
    align-items:center ;
    justify-content: center;
}
.image{
    width:220px;
    height:220px;
    font-size:26px;
    margin-top:3rem;
   
   }
.choose-btn{
    width:150px;
    height:40px;
    border-radius:10px;
    background:rgb(2, 82, 230);
    border-style:none;
    font-size:18px;
    color:rgb(238, 238, 238);
    font-family: 'Klee One', cursive;
    text-align:center;
    position:relative;
    float:bottom;
    bottom:-5rem;
    left:2rem;
    display:flex;
    align-items: center;
    justify-content: center;
    
}
</style>