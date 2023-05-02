<template>
    <div class="banner row col-10 m-auto my-5">
    <div class="text col-6">
      <h1 class="text-start">Lorem ipsum dolor <span class="text-primary">adipiscing elit</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Adipiscing sit bibendum erat mus egestas suscipit tristique id. Diam commodo venenatis.</p>
      <button @click="$emit('buttonClicked')">Naplniť tabuľku</button>
    </div>
    <div class="image col-6 d-flex justify-content-center">
      <img src="@/assets/images/hand.png" alt="👌">
    </div>
  </div>
</template>

<style scoped>
 .banner {
    height: 460px;
    widows: 1180px;
    background-color: #EFF9FF;
    border-radius: 80px;
  }
  .banner h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #333;
    text-align: center;
  }
  .banner img {
    width: 354px;
    height: 460px;
  }
  .banner p {
    font-weight: 700;
    color: #333;
    font-size: 16px;
  }
  .banner button{
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 16px;
    margin-top: 20px;
  }
  .text{
    padding-top: 80px;
    padding-left: 100px;
  }
</style>