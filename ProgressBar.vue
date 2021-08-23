<template>

 <div class="progress-bar">
        <div>
              <div id="progressing">
                   <h5>Uploading....</h5><br><br>
                     <div class="loading-bar"> 
                          <div  class="percentage"  role="progressbar" :style="{width: getProgress}"></div>
                     </div>
              </div>       
       
        </div>
 </div>

</template>

<script>
    export default {
        name:'ProgressBar',
        props:{
            progress:{
                type:Number,
                default:0
            }
        },
data(){
    return{
           
    }
},
        computed:{
             getProgress(){
                 return Math.round(this.progress) + '%'
             }
        },
        
    }
</script>

<style>

.progress-bar{
 width:40%;
 height:700px;
 display:flex;
 margin:auto;
 justify-content: center;
 align-items: center;
 position:relative;
 margin-top:1rem;

}
#progressing{
    padding:0.5rem;
    width:100%;
    height:150%;
    box-shadow:-2px 6px 18px -5px rgba(0, 0, 0, 0.75);
    
}
.loading-bar{
margin-bottom:2rem;    
margin-top:-2rem;
margin-left:2rem;
width:300px;
height:10px;
border-radius:15px;
overflow: hidden;
border-bottom:1px solid #ddd;
box-shadow: inset 0 1px 2px rgba(#000 .4),
                 0 -1px 1px #fff, 0 1px 0 #fff;
      

}

.percentage{
  
    top:1px;left:1px;right:1px;
    display: block;
    height:10px;
    color:white;
    border-radius:15px;
    background-color:#3b7ffd;
    background-size:10px 10px;
    background-image:linear-gradient(135deg, rgba(0, 0, 0, 255, .15) 25%, transparent 25%,
    
                                       transparent 50%, rgba(0, 0, 0, 255,.15) 50%,
                                       rgba(0, 0, 0, 255, .15) 75%, transparent 75%,
                                       transparent);
    animation:animate-stripes 3s linear infinite;

}


h5{
    font-family: 'Varela Round', sans-serif;
    text-align:center;
    font-size:18px;
}

</style>
