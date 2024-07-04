<script lang="ts" setup>

</script>

<template>
  <div class="flex h-screen justify-center items-center">
    <div class="mx-auto mt-10 flex justify-center px-4 sm:mt-2 sm:px-6 md:mt-8 lg:mt-10 lg:px-8">
      <div class="text-center ">
        <div>
          <p

            class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
          >
            <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">For Hire</span>
            <span class="ml-4 text-sm">Visit my <span class="font-medium cursor-pointer hover:underline hover:text-green-500">
              <NuxtLink to="/contact">
                contact
              </NuxtLink>
            </span> page 💪</span>
          </p>
        </div>
        <h1
          class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl"
        >
          <span class="block xl:inline"><span class="mb-1 block"><span class="text-5xl">Looking to hire a </span>developer</span>
            <span class="text-2xl">for your</span>
            <span class="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
              web and mobile
            </span>
            <span class="text-2xl">applications?</span>
          </span>
          <div class="mt-2">
            Full stack Developer
            <span class="relative mt-3 whitespace-nowrap text-primary"><svg
                                                                         aria-hidden="true"
                                                                         viewBox="0 0 418 42"
                                                                         class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                                                                         preserveAspectRatio="none"
                                                                       >
                                                                         <path
                                                                           d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                                                                         />
                                                                       </svg>
              <span class="relative">Don Puerto</span>
            </span>
          </div>
        </h1>
        <p class="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
          Revolutionize your web and mobile projects with a Full Stack Developer skilled in Vue, Ionic, Supabase, Adonis, and Laravel, ready to deliver excellence!
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center space-x-2 flex-wrap">
          <UiButton
            variant="ghost"
            class="mb-2"
            to="https://vuejs.org/"
            target="_blank"
          >
            <Icon
              class="h-4 w-4"
              name="logos:vue"
            />
            Vue
          </UiButton>
          <UiButton
            variant="ghost"
            class="mb-2"
            to="https://nuxt.com/"
            target="_blank"
          >
            <Icon
              class="h-4 w-4"
              name="logos:nuxt-icon"
            />
            Nuxt
          </UiButton>
          <UiButton
            variant="ghost"
            class="mb-2"
            to="https://ionicframework.com/"
            target="_blank"
          >
            <Icon
              class="h-4 w-4"
              name="logos:ionic-icon"
            />
            Ionic
          </UiButton>
          <UiButton
            variant="ghost"
            class="mb-2"
            to="https://supabase.com/"
            target="_blank"
          >
            <Icon
              class="h-4 w-4"
              name="logos:supabase-icon"
            />
            Supabase
          </UiButton>
          <UiButton
            variant="ghost"
            class="mb-2"
            to="https://laravel.com/"
            target="_blank"
          >
            <Icon
              class="h-4 w-4"
              name="logos:laravel"
            />
            Laravel
          </UiButton>
          <UiButton
            variant="ghost"
            class="mb-2"
            to="https://adonisjs.com/"
            target="_blank"
          >
            <Icon
              class="h-4 w-4"
              name="logos:adonisjs-icon"
            />
            Adonis
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
