<script lang="ts" setup>
  const filterOptionsSelect = [
    {
      name: 'action',
      label: 'ação',
    },
    {
      name: 'action',
      label: 'Aventura',
    },
    {
      name: 'action',
      label: 'Animação',
    },
    {
      name: 'action',
      label: 'Comédia',
    },
    {
      name: 'action',
      label: 'Crime',
    },
    {
      name: 'action',
      label: 'Documentário',
    },
    {
      name: 'action',
      label: 'Drama',
    },
    {
      name: 'action',
      label: 'Família',
    },
    {
      name: 'action',
      label: 'Fantasia',
    },
    {
      name: 'action',
      label: 'História',
    },
    {
      name: 'action',
      label: 'Terror',
    },
    {
      name: 'action',
      label: 'Música',
    },
    {
      name: 'action',
      label: 'Mistério',
    },
    {
      name: 'action',
      label: 'Romance',
    },
    {
      name: 'action',
      label: 'Ficção cientifica',
    },
    {
      name: 'action',
      label: 'Cinema TV',
    },
    {
      name: 'action',
      label: 'Thriller',
    },
    {
      name: 'action',
      label: 'Guerra',
    },
    {
      name: 'action',
      label: 'Faroeste',
    },
  ];
</script>
<template>
  <div>
    <p class="mt-10 mb-4 text-sm font-bold uppercase text-white">Filtre por:</p>
    <div class="flex w-full flex-wrap gap-3 lg:justify-center">
      <div
        v-for="(item, index) in filterOptionsSelect"
        :key="index"
        class="w-fit cursor-pointer rounded bg-white px-4 py-2"
      >
        <label
          :for="item.name"
          class="cursor-pointer select-none font-bold capitalize"
          >{{ item.label }}</label
        >
        <input
          :id="item.name"
          type="radio"
          :name="item.name"
          class="sr-only"
        />
      </div>
    </div>
  </div>
</template>
