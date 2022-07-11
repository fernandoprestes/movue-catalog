<script lang="ts" setup></script>
<template>
  <header class="bg-[#5C16C5] py-4">
    <div class="container flex justify-center md:justify-start">
      <IconLogo />
    </div>
  </header>
  <div class="flex h-[500px] items-center bg-[#2D0C5E] px-4 lg:px-0">
    <div class="container md:text-center lg:w-[1120px]">
      <h1 class="mx-auto text-2xl font-bold leading-tight text-white md:text-5xl lg:w-[780px]">
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </h1>
      <MovieFilter />
    </div>
  </div>
  <ul class="container my-8 flex max-w-7xl flex-wrap items-stretch justify-center gap-8">
    <MovieCard />
  </ul>
</template>
