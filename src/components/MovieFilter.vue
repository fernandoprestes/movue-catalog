<script lang="ts" setup>
  interface Tags {
    id: string;
    label: string;
  }
  const tagsSelected = ref<string[]>([]);

  const filterOptionsSelect: Array<Tags> = [
    {
      id: '28',
      label: 'Ação',
    },
    {
      id: '12',
      label: 'Aventura',
    },
    {
      id: '16',
      label: 'Animação',
    },
    {
      id: '35',
      label: 'Comédia',
    },
    {
      id: '80',
      label: 'Crime',
    },
    {
      id: '99',
      label: 'Documentário',
    },
    {
      id: '18',
      label: 'Drama',
    },
    {
      id: '10751',
      label: 'Família',
    },
    {
      id: '14',
      label: 'Fantasia',
    },
    {
      id: '36',
      label: 'História',
    },
    {
      id: '27',
      label: 'Terror',
    },
    {
      id: '10402',
      label: 'Música',
    },
    {
      id: '9648',
      label: 'Mistério',
    },
    {
      id: '10749',
      label: 'Romance',
    },
    {
      id: '878',
      label: 'Ficção cientifica',
    },
    {
      id: '10770',
      label: 'Cinema TV',
    },
    {
      id: '53',
      label: 'Thriller',
    },
    {
      id: '10752',
      label: 'Guerra',
    },
    {
      id: '37',
      label: 'Faroeste',
    },
  ];

  const removeSelectedItem = (idd: string) => {
    tagsSelected.value = tagsSelected.value.filter(item => item !== idd);
  };
</script>
<template>
  <div>
    <p class="mt-10 mb-4 text-sm font-bold uppercase text-white">Filtre por:</p>
    <div class="flex w-full flex-wrap gap-3 lg:justify-center">
      <div
        v-for="item in filterOptionsSelect"
        :key="item.id"
        class="relative mb-2 flex items-center justify-between rounded bg-white"
        :class="{ 'bg-[#D18000] text-white': tagsSelected.includes(item.id) }"
      >
        <div class="flex w-full items-center justify-center">
          <input
            :id="item.id"
            v-model="tagsSelected"
            :value="item.id"
            :name="item.id"
            type="checkbox"
            class="sr-only"
          />
          <label
            :for="item.id"
            class="inline-block w-full cursor-pointer px-4 py-2"
            :class="{ 'pointer-events-none': tagsSelected.includes(item.id) }"
            >{{ item.label }}</label
          >
        </div>
        <span
          v-if="tagsSelected.includes(item.id)"
          class="-translate-x-2 cursor-pointer rounded-full bg-white text-[#d18000]"
          @click="removeSelectedItem(item.id)"
        >
          <IconClose />
        </span>
      </div>
    </div>
  </div>
</template>
