<template>
  <NuxtLink :to = "link">
    <div class="project-card" >
      <img class="main-img" id="logo" v-bind:src="'/ProjectLogos/' + title + '.png'" alt="logo of the project, it works as a button to go to the project's page and read more information about it">
      <div class="data-container">
        <div class="project-title">{{ title }}</div>
        <div class="project-mainIdea">{{ mainIdea }}</div>
        <div class="icon-text">
          <img src="~\assets\icons\location-pin-dark.png" id="icon-dark">
          <img src="~\assets\icons\location-pin-white.png" id="icon-white">
          {{ city }}
        </div>
        <div class="area-container">
          <div >{{ area }}</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

  .project-card {
    box-shadow: 0 4px 8px 0 #E7E7E7;
    width: 352px;
    height: 564px;
    background-color: white;
    transition: .3s ease-in-out;
    color: #282E36;
    border-radius: 8px;
  }
  
  #logo{
    width: 352px; 
    height: 352px;
    border-top-right-radius: 4px;  
    border-top-left-radius: 4px;
  }
  
  .project-card .area-container {
    position: absolute;
    top: 160px;
    right: 48px;
  }

  .project-card .data-container {
    width: 352px;
    padding: 16px;
    position: relative; 
    font-size: 16px;
  }

  .project-card .project-title {
    font-family: 'Myriad-Pro-SemiBold';
    font-size: 24px; 
    width: 352px;
  }

  .project-card .project-mainIdea {
    padding-top: 18px;
    width: 320px;
  }

  .project-card .icon-text {
    display: flex;
    height: 16px;
    margin-top: 8px;
  }

  #icon-dark{
    position: absolute;
    height: 16px;
    width: 14px;
    margin-right: 4px;
    opacity: 100%;
    transition: opacity .3s ease-in-out;
    padding: 5px 0;
  }

  .project-card #icon-white{
    height: 16px;
    width: 14px;
    margin-right: 4px;
    opacity: 0%;
    transition: opacity .3s ease-in-out;
    padding: 5px 0;
  }

  .project-card:hover{
    background-color: #282E36;
    color:white;
  }

  .project-card:hover #icon-dark{
    opacity: 0%;
  }

  .project-card:hover #icon-white{
    opacity: 100%;
  }

</style>

<script setup>

  const props = defineProps(['title', 'mainIdea', 'city', 'area', 'link']);

</script>