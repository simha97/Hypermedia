<template>
    <div class="person-card">
      <img alt="Picture of the team member, it works as a button to go to the person's page and read more information" 
       v-bind:src="'/TeamPictures/' + name + surname + '.jpg'" id="profile">
      <div class="data-container">
        <div class="person-name-surname">{{ name }} {{surname }}</div>
        <div class="person-founderTag" v-if="isFounder == true">Founder</div>
        <div class="person-expertiseInfo">Expert in
          <div class="person-areaTag">
            <div v-for="element in area" :key="element.id" class="area-container"> 
              {{ element.name }}
            </div>
          </div>  
        </div>      
      </div>
    </div>
</template>

<style scoped>

  .person-card {
    box-shadow: 0 4px 8px 0 #E7E7E7;
    transition: 0.3s;
    width: 256px;
    height: 400px;
    background-color: #F26225;
    transition: background-color .3s ease-in-out;
    color: white;
    border-radius: 8px;
  }

  .person-card .data-container{
    padding: 16px;
    position: relative; 
    width: 224px;
    height: 96px;
    margin-top: -6px;
  }

  .person-name-surname{
    font-size: 24px;
    font-family: 'Myriad-Pro-Light';
  }

  .person-founderTag{
    font-size: 18px; 
    position: absolute;
    top: 18px; 
    right: 12px;
    font-family: 'Myriad-Pro-Bold';
    font-size: 18px;
  }

  .person-expertiseInfo{
    font-size: 18px;
    font-family: 'Myriad-Pro-Regular';
    margin-top: 8px;
  }

  .person-areaTag{
    flex-direction: row;
    display: flex;
  }

  #profile{
    height: 272px;
    width: 256px;
    object-fit:cover;
    border-top-right-radius: 4px;  
    border-top-left-radius: 4px;
  }

  .person-areaTag{
    gap: 8px;
    margin-top: 8px;
  }

  .person-card .area-container {
    background-color: transparent;
    color: white;
    border: solid 1px white;
    font-size: 16px;
    transition: background-color .3s ease-in-out;

  }

</style>

<script setup>

  const props = defineProps(['name', 'surname', 'isFounder', 'area', 'link']);
  
</script>
