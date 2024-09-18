<!-- pages/timeline.vue -->
<script setup>
import { ref, computed } from 'vue';
import { formatDate } from '@/utils/dateFormatter';
import ScrollToTop from '~/components/ScrollToTop.vue';

const selectedStatus = ref('Guidelines');

const statuses = ['Guidelines', 'Plans', 'DropPlans', 'Done', 'InProgress', 'Pending', 'OnHold', 'NotStarted', 'Review'];

const { data: timelineEvents } = await useAsyncData('timeline', () =>
  queryContent('timeline').find(),
);

const filteredEvents = computed(() => {
  return (timelineEvents.value || [])
    .filter(event => event.posted_date)
    .filter(event => event.status === selectedStatus.value);
});
</script>

<template>
  <div class="mt-12 px-4 sm:px-6 md:px-8">
    <div class="container mx-auto max-w-4xl pb-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-foreground">
          Timeline
        </h1>
        <select
          v-model="selectedStatus"
          class="px-2 py-1 text-sm font-medium text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option
            v-for="status in statuses"
            :key="status"
            :value="status"
          >
            {{ status }}
          </option>
        </select>
      </div>
      <ol
        v-if="filteredEvents.length"
        class="relative border-s border-border"
      >
        <li
          v-for="event in filteredEvents"
          :key="event._path"
          class="mb-8 ms-4"
        >
          <span class="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -start-3 ring-4 ring-background">
            <Icon
              name="uil:calendar-alt"
              class="w-3 h-3 text-primary"
            />
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-foreground">
            {{ event.title }}
            <span
              v-if="event.status"
              class="bg-primary/20 text-primary text-xs font-medium me-2 px-2.5 py-0.5 rounded ms-2"
            >{{ event.status }}</span>
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-muted-foreground">
            {{ formatDate(event.posted_date) }}
            <span v-if="event.updated_date">
              (Updated: {{ formatDate(event.updated_date) }})
            </span>
          </time>
          <div class="mb-4 text-base font-normal text-foreground prose prose-sm max-w-none leading-snug custom-prose">
            <ContentRenderer :value="event" />
          </div>
          <a
            v-if="event.link"
            :href="event.link"
            class="inline-flex items-center px-3 py-1 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted hover:text-primary focus:z-10 focus:ring-2 focus:outline-none focus:ring-border focus:text-primary"
          >
            <Icon
              name="uil:link"
              class="w-3.5 h-3.5 me-2"
            />
            {{ event.linkText || 'Learn More' }}
          </a>
        </li>
      </ol>
      <div
        v-else
        class="flex items-center justify-center h-[50vh]"
      >
        <p class="text-center text-muted-foreground">
          No events found.
        </p>
      </div>
    </div>
    <ScrollToTop position="bottom-right" />
  </div>
</template>

<style scoped>
/* Add any additional styles here if needed */

.custom-prose {
  /* Adjust overall line height */
  line-height: 1.2;
}

.custom-prose :deep(blockquote) {
  /* Tighten spacing for blockquotes */
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.custom-prose :deep(ul),
.custom-prose :deep(ol) {
  /* Tighten spacing for lists */
  margin-top: 0.5em;
  margin-bottom: 1.2em;
}

.custom-prose :deep(li) {
  /* Adjust line height for list items */
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.custom-prose :deep(p) {
  /* Adjust spacing between paragraphs if needed */
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
