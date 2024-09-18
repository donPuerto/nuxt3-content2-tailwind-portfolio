export const TECHNOLOGIES = [
  { name: 'Vue', url: 'https://vuejs.org/', icon: 'logos:vue' },
  { name: 'Nuxt', url: 'https://nuxt.com/', icon: 'logos:nuxt-icon' },
  { name: 'Next', url: 'https://nextjs.org/', icon: 'logos:nextjs-icon' },
  { name: 'Ionic', url: 'https://ionicframework.com/', icon: 'logos:ionic-icon' },
  { name: 'React Native', url: 'https://reactnative.dev/', icon: 'logos:react' },
  { name: 'Supabase', url: 'https://supabase.com/', icon: 'logos:supabase-icon' },
  { name: 'Laravel', url: 'https://laravel.com/', icon: 'logos:laravel' },
  { name: 'Adonis', url: 'https://adonisjs.com/', icon: 'logos:adonisjs-icon' },
] as const;
  
export type Technology = typeof TECHNOLOGIES[number];
