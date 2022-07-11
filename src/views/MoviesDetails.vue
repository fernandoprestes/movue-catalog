<script lang="ts" setup>
  import { Genres } from '~/types/MovieDetails';
  const props = defineProps({
    id: {
      type: Number,
      default: null,
    },
  });
  const store = useMovieDetailsStore();

  const { movie } = storeToRefs(store);

  onMounted(async () => {
    await store.getMovie(props.id);
  });

  function formatterDate(date: string) {
    if (!date) return;
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  function genres(genresArr: Array<Genres>) {
    if (!genresArr) return;

    let genresConcat = '';

    for (const genre of genresArr) {
      genresConcat += `${genre.name}, `;
    }

    return genresConcat.replace(/,\s*$/, '');
  }
</script>
<template>
  <div class="bg-[#2d0c5e] pt-10 md:bg-hero md:pt-20">
    <div class="container flex flex-col items-center justify-start gap-8 px-4 pb-10 md:flex-row md:items-start md:pb-0">
      <img
        class="h-[450px] rounded-lg shadow-md"
        :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`"
        :alt="`Poster do filme ${movie.title}`"
      />

      <div class="max-w-2xl text-white">
        <div>
          <h2 class="text-3xl font-bold">{{ movie.title }}</h2>
          <p class="text-lg">
            {{ formatterDate(movie.release_date) }} (BR) • {{ genres(movie.genres) }} • {{ movie.runtime }}
          </p>
        </div>
        <div></div>
        <div>
          <h2 class="text-xl font-bold">Sinopse</h2>
          <p class="leading-relaxed">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="css"></style>
