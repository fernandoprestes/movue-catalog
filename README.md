# MOVue Catalog - The Movie Database (TMDB)

## Introdução

Este desafio é inspirado no desafio dev frontend da [Promobit/front-end-challenge](https://github.com/Promobit/front-end-challenge).

> ⚠️ _Não participo do processo seletivo, usei a ideia para melhorar as minhas habilidades com o framework [Vue](https://vuejs.org/) e seu ecossistema._

## O desafio

Usando a API de filmes gratuita [TheMovieDB](https://developers.themoviedb.org/3/getting-started/introduction) em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme.

- [Layout do figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End) sugerido.

## Funcionalidades

- [x] O app deverá ser criado usando [Vue](https://vuejs.org/);
- [x] O usuário deve ter acesso a uma listagem dos filmes mais populares do dia;
- [ ] O usuário deve conseguir paginar a lista para encontrar novos filmes;
- [x] O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem;
- [ ] A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa;
- [x] O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge;
- [x] O app deverá ser responsivo;
- [x] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero;
- [x] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido;
- [ ] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

> ⏱️ tempo estimado de 14 horas de desenvolvimento

## Demonstração

![Demonstração da navegação](./src/assets/img/navigation.gif)

## Tecnologias

- [Vite](https://vitejs.dev/)
- [Vue3](https://vuejs.org/)
- [Vue-Router](https://router.vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Eslint](https://eslint.org/)
- [Eslint-plugin-vue](https://eslint.vuejs.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Vue Composition API e outros sem importar
- [Axios](https://axios-http.com/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)

- [TMDBApi](https://developers.themoviedb.org/3)

### Ferramentas e extensões recomendadas

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

2022 - [fernandoprestes](https://github.com/fernandoprestes)
