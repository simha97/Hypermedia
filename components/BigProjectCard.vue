<template>
  <div class="big-project-card">
    <div class="data-container">
      <div class="shown-data">
        <img v-bind:src="'/ProjectIcons/' + title + '.png'" id="small-logo">
        <div>
          <div class="project-title">{{ title }}</div>
          <div class="project-description">{{ slogan }}</div>
        </div>
        <div class="area-container">
          <div >{{ area }}</div>
        </div>
      </div>
      <div class="hidden-data">
        <div class="project-description">{{ mainIdea }}</div>
        <div class="icon-text">
          <img src="~\assets\icons\location-pin-white.png" id="icon-white">
          {{ city }}
        </div>
        <NuxtLink :to = link>Show me more</NuxtLink>
        <div class="icon-text">
          <img src="~\assets\icons\date-white.png" id="icon-date">
          {{ date }}
        </div>
      </div>
    </div>
    <img class="shadow" src="~\assets\img\bigProjectShadow.png" id="start-shadow">
    <img class="shadow" src="~\assets\img\bigProjectHoverShadow.png" id="end-shadow">
    <img v-bind:src="'/ProjectBanners/' + title + '.jpg'" id="big-picture">
  </div>
</template>
  
<style scoped>
  
  .big-project-card {
    width: 1120px;
    height: 480px;
    color: white;
    transition: .5s ease-in-out;
    pointer-events: none;
    box-shadow: 0 4px 8px 0 #E7E7E7;
    border-radius: 8px;
  }
    
  #big-picture{
    width: 1120px; 
    height: 480px;
    border-radius: 8px;  
    pointer-events: auto;
  }

  .big-project-card .data-container {
    position: absolute; 
    margin-top: 376px;
    margin-left: 64px;
    height: 80px;
    z-index: 1;
    transition: .5s ease-in-out;
  }

  .shown-data{
    display: flex;
  }

  .shown-data #small-logo{
    width: 80px;
    height: 80px;
    margin-right: 32px;
  }

  .big-project-card .project-title{
    margin-top: -8px;
    margin-bottom: 8px;
    font-size: 36px;
    width: 768px;
    font-family: 'Myriad-Pro-Bold';
  }

  .big-project-card .icon-text{
    display: flex;
    height: 16px;
    font-family: 'Myriad-Pro-Regular';
    font-size: 18px;
    margin-top: 16px;
  }

  .big-project-card .area-container {
    font-family: "Myriad-Pro-Regular";
    position: absolute;
    right: -104px;
    top: 4px;
  }

  .big-project-card .project-description{
    font-size: 24px;
    width: 768px;
    margin-bottom: 48px;
    font-family: 'Myriad-Pro-Regular';
  }

  .hidden-data{
    margin-left: 112px;
    opacity: 0%;
    transition: opacity .3s ease;
  }

  .big-project-card #icon-white{
    height: 30px;
    width: 26px;
    margin-left: -4px;
    margin-right: 8px;
  }

  .big-project-card #icon-date{
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }

  #start-shadow{
    opacity: 100%;
    transition: opacity .5s ease-in-out;
  }

  #end-shadow{
    opacity: 0%;
    transition: opacity .5s ease-in-out;
  }

  .big-project-card:hover #start-shadow{
    opacity: 0%;
  }

  .big-project-card:hover #end-shadow{
    opacity: 100%;
  }

  .big-project-card:hover .data-container{ 
    margin-top: 56px;
  }

  .big-project-card:hover .hidden-data{ 
    opacity: 100%;
    transition: opacity .8s ease-in;
  }

  .hidden-data a{
    font-family: "Myriad-Pro-Bold";
    color: #F26225;
    font-style: italic;
    position: absolute;
    margin-top: 8px;
    margin-left: 568px;
  }

  .big-project-card:hover .hidden-data{
    pointer-events: auto;
  }

  .big-project-card:hover .hidden-data a:hover{
    color: #F26225;
    text-decoration: underline;
  }

</style>
  
<script setup>

  const props = defineProps(['title', 'slogan', 'city', 'area', 'mainIdea', 'date', 'link']);
  
</script>