<script lang="ts" setup>
  import imgNotFound from '~/assets/img/notFoundImg.png';
  import { Genres, MovieDetails } from '~/types/MovieDetails';
  import { MovieCasting } from '~/types/MovieCasting';

  const { fetchDetailsMovie, fetchMovieCast } = useFetchMovies();

  const props = defineProps({
    id: {
      type: Number,
      default: null,
    },
  });

  const movie = ref<MovieDetails>();
  const casting = ref<MovieCasting>();

  function formatterDate(date?: string) {
    if (!date) return;
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  function genres(genresArr?: Array<Genres>) {
    if (!genresArr) return;
    let genresConcat = '';
    for (const genre of genresArr) {
      genresConcat += `${genre.name}, `;
    }
    return genresConcat.replace(/,\s*$/, '');
  }

  function minutosToHours(runtime?: number) {
    if (!runtime) return;
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes}min`;
  }

  function voteAveragePerCent(vote?: number) {
    if (!vote) return;
    return vote * 10;
  }

  onMounted(async () => {
    movie.value = await fetchDetailsMovie(props.id);
    casting.value = await fetchMovieCast(props.id);
  });
</script>
<template>
  <div class="bg-[#2d0c5e] pt-10 md:bg-hero md:pt-20">
    <div class="container flex flex-col items-center justify-start gap-8 px-4 pb-10 md:flex-row md:items-start md:pb-0">
      <img
        class="h-[450px] rounded-lg shadow-md"
        :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie?.poster_path}`"
        :alt="`Poster do filme ${movie?.title}`"
      />

      <div class="max-w-2xl space-y-4 text-white">
        <div>
          <h2 class="text-3xl font-bold">{{ movie?.title }}</h2>
          <p class="text-lg">
            {{ formatterDate(movie?.release_date) }} (BR) • {{ genres(movie?.genres) }} •
            {{ minutosToHours(movie?.runtime) }}
          </p>
        </div>
        <div class="flex items-center gap-4">
          <div
            class="flex h-16 w-16 border-spacing-1 items-center justify-center rounded-full border-4 border-[#14FF00] font-bold text-[#14FF00]"
          >
            {{ voteAveragePerCent(movie?.vote_average) }} %
          </div>
          <p class="w-32">Avaliação dos usuários</p>
        </div>
        <div>
          <h2 class="text-xl font-bold">Sinopse</h2>
          <p class="leading-relaxed">{{ movie?.overview }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#E5E5E5]">
    <div class="container py-8 px-4">
      <h2 class="py-6 text-2xl font-bold">Elenco Original</h2>
      <div class="overflow-auto">
        <div class="inline-flex items-stretch justify-between gap-4 py-4">
          <div
            v-for="(caster, index) in casting?.cast"
            :key="index"
            class="w-48 flex-grow rounded-lg bg-white p-2 shadow-lg"
          >
            <img
              v-if="caster.profile_path"
              :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${caster.profile_path}`"
              :alt="`Foto de perfil do(a) autor(a) ${caster.name}`"
              class="rounded"
            />
            <div
              v-else
              class="flex h-[264px] items-center justify-center rounded bg-[#dbdbdb]"
            >
              <img
                :src="imgNotFound"
                alt="Foto não encontrada"
              />
            </div>
            <div class="py-2">
              <p>{{ caster.name }}</p>
              <p>{{ caster.character }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="css"></style>
