<template>
  <!-- Default form contact -->
  <div>
 


    <p class="h4 text-center mb-4">Post a new job</p>

    <!-- Default input name -->
    <label for="defaultFormContactNameEx" class="grey-text">Company name</label>
    <input type="text" id="defaultFormContactNameEx" class="form-control" v-model="companyName">
   

    <br>

    <!-- Default input email -->
    <label for="defaultFormContactEmailEx" class="grey-text">Job Title</label>
    <input type="text" id="defaultFormContactEmailEx" class="form-control" v-model="jobTitle">
   
    <br>

    <!-- Default textarea message -->
    <label for="defaultFormContactMessageEx" class="grey-text">Job description</label>
    <textarea type="text" id="defaultFormContactMessageEx" class="form-control" rows="3" v-model="jobDescription"></textarea>
 
    <div class="text-center mt-4">
        <button class="btn btn-outline-warning"  v-on:click="addNew()">Add a new post<i class="far fa-paper-plane ml-2"></i></button>
    </div>
  </div>
  <!-- Default form contact -->
</template>

<script>
export default {
    data() {
        
        return {
            companyName:"",
          jobTitle:"",
          jobDescription :"",
            list : []
      }
      },
      methods: {
          addNew: function(){
              this.list.push(this.companyName);
              this.list.push(this.jobTitle);
              this.list.push(this.jobDescription);
              console.log(this.list)
          }
      },
      watch:{
         companyName: function(val) {
             console.log(val)
         }
      }
    
};
</script>