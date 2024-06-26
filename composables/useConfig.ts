import { defu } from 'defu'

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.shadcnDocs || {})

  return computed(() => {

  })
}
