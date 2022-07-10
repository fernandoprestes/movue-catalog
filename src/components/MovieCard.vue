<script lang="ts" setup>
  const store = useMoviesStore();

  const { movies } = storeToRefs(store);

  function formatterDate(date: string) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  onMounted(async () => {
    await store.getMovies();
  });
</script>
<template>
  <div
    v-for="item in movies.results"
    :key="item.id"
    class="flex w-[220px] flex-col justify-between overflow-hidden rounded shadow-md"
  >
    <div class="mb-2">
      <img
        class="h-[330px]"
        :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`"
        :alt="`${item.title}`"
      />

      <h2 class="px-1 font-bold">{{ item.title }}</h2>
    </div>
    <p class="px-1 text-sm text-[#646464]">{{ formatterDate(item.release_date) }}</p>
  </div>
</template>
<style scoped lang=""></style>
