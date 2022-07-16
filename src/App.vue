<template>
  <header class="bg-[#5C16C5] py-4">
    <div class="container flex justify-center px-2 md:justify-start">
      <router-link :to="{ name: 'HomePage' }">
        <IconLogo />
      </router-link>
    </div>
  </header>
  <router-view />
</template>
