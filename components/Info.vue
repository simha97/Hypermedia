<template>
  <div class="person-info-container">
    <div v-for="info in infos" :key="info.title">
      <div class="person-info-data">
        <img id="bullet" src="~\assets\icons\orange-bullet.png">
        <div>
          <div class="person-info-title">{{ info.title }}</div>
          <div class="person-info-content">
            <div class="person-info-description" v-if="info.type == 'text'">
              {{ info.content }}
            </div>
            <div v-if="info.type == 'link'">
              <NuxtLink :to = info.content.page><div class="person-info-link" >{{ info.content.title }}</div></NuxtLink>
            </div>
            <div v-if="info.type == 'area'">
              <div class="area-container" >{{ info.content }}</div>
            </div>
            <div v-if="info.type == 'picture'">
              <NuxtLink :to = info.content.page class="person-info-picture">
                <img v-bind:src="'/TeamPictures/' + info.content.name + info.content.surname + '_Round.jpg'" id="person"/>
                <div class="person-info-picture-link">{{ info.content.name + ' ' + info.content.surname }}</div>
              </NuxtLink>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script setup>
  const props = defineProps(['infos']);
</script>

<style scoped>

  .person-info-container{
    width: 100%;
    font-size: 24px;
  }
  .person-info-data{
    display: flex;
    margin-bottom: 32px;
    font-family: "Myriad-Pro-Regular";
  }

  #bullet{
    height: 16px;
    width: 16px;
    margin-right: 16px;
    margin-top: 6px;
  }
  .person-info-description{
    margin-top: 16px;
    font-size: 18px;
  }
  .person-info-link{
    color: #F26225;
    font-style: italic;
    text-align:center;
    font-family: "Myriad-Pro-Bold";
    margin-top: 8px;
  }
  .person-info-link:hover{
    text-decoration: underline;
  }
  .area-container{
    margin-top: 16px;
    border: solid 1px #F26225;
    color: #F26225;
  }

  #person{
      margin-top: 16px;
      width: 128px;
      height: 128px;
      border-radius: 50%;
  }
  .person-info-picture-link{
    color: #F26225;
    font-size: 18px;
    font-family: "Myriad-Pro-Regular";
    margin-top: 8px;
    text-align: center;
  }
  .person-info-picture:hover .person-info-picture-link{
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    .person-info-container {
      font-size: 18px;
    }

    .person-info-data {
      flex-direction: column;
      align-items: flex-start;
    }

    #bullet {
      margin-top: 0;
    }

    .person-info-title {
      margin-bottom: 8px;
    }
  }

</style>
