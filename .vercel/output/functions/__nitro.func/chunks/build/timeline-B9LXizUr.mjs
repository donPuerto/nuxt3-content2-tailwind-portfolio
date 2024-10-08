import { b as _export_sfc, a as useAsyncData, _ as __nuxt_component_1 } from './server.mjs';
import _sfc_main$2 from './ContentRenderer-ClIe9sU4.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withAsyncContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { q as queryContent } from './query-BCm8oN5n.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import 'shiki/core';
import '@shikijs/transformers';
import 'nodemailer';
import '@dword-design/functions';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'minisearch';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-disqus';
import '@iconify/vue';
import 'radix-vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import './ContentRendererMarkdown-5EPUx-Yh.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';
import './preview-D_6nC1AN.mjs';

function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  props: {
    position: {
      type: String,
      default: "bottom-right"
    },
    size: {
      type: String,
      default: "md"
    }
  },
  setup(__props) {
    const props = __props;
    const isVisible = ref(false);
    const buttonPosition = computed(() => {
      switch (props.position) {
        case "bottom-left":
          return "fixed bottom-8 left-8 z-50";
        case "top-left":
          return "fixed top-8 left-8 z-50";
        case "top-right":
          return "fixed top-8 right-8 z-50";
        default:
          return "fixed bottom-8 right-8 z-50";
      }
    });
    const buttonSize = computed(() => {
      switch (props.size) {
        case "sm":
          return "w-10 h-10";
        case "lg":
          return "w-14 h-14";
        default:
          return "w-12 h-12";
      }
    });
    const iconSize = computed(() => {
      switch (props.size) {
        case "sm":
          return "w-4 h-4";
        case "lg":
          return "w-8 h-8";
        default:
          return "w-6 h-6";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        style: isVisible.value ? null : { display: "none" },
        class: [[buttonPosition.value, buttonSize.value], "bg-background text-foreground rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-75 ease-out-quart border border-border glow-effect flex items-center justify-center"]
      }, _attrs))} data-v-d20d0396>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "line-md:upload-outline-loop",
        class: iconSize.value
      }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ScrollToTop = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d20d0396"]]);
const _sfc_main = {
  __name: "timeline",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const selectedStatus = ref("Guidelines");
    const statuses = ["Guidelines", "Plans", "DropPlans", "Done", "InProgress", "Pending", "OnHold", "NotStarted", "Review", "Bug"];
    const { data: timelineEvents } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "timeline",
      () => queryContent("timeline").find()
    )), __temp = await __temp, __restore(), __temp);
    const filteredEvents = computed(() => {
      return (timelineEvents.value || []).filter((event) => event.posted_date).filter((event) => event.status === selectedStatus.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12 px-4 sm:px-6 md:px-8" }, _attrs))} data-v-eb6167db><div class="container mx-auto max-w-4xl pb-8" data-v-eb6167db><div class="flex justify-between items-center mb-8" data-v-eb6167db><h1 class="text-2xl font-bold text-foreground" data-v-eb6167db> Timeline </h1><select class="px-2 py-1 text-sm font-medium text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" data-v-eb6167db><!--[-->`);
      ssrRenderList(statuses, (status) => {
        _push(`<option${ssrRenderAttr("value", status)} data-v-eb6167db>${ssrInterpolate(status)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      if (filteredEvents.value.length) {
        _push(`<ol class="relative border-s border-border" data-v-eb6167db><!--[-->`);
        ssrRenderList(filteredEvents.value, (event) => {
          _push(`<li class="mb-8 ms-4" data-v-eb6167db><span class="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -start-3 ring-4 ring-background" data-v-eb6167db>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "uil:calendar-alt",
            class: "w-3 h-3 text-primary"
          }, null, _parent));
          _push(`</span><h3 class="flex items-center mb-1 text-lg font-semibold text-foreground" data-v-eb6167db>${ssrInterpolate(event.title)} `);
          if (event.status) {
            _push(`<span class="bg-primary/20 text-primary text-xs font-medium me-2 px-2.5 py-0.5 rounded ms-2" data-v-eb6167db>${ssrInterpolate(event.status)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</h3><time class="block mb-2 text-sm font-normal leading-none text-muted-foreground" data-v-eb6167db>${ssrInterpolate(unref(formatDate)(event.posted_date))} `);
          if (event.updated_date) {
            _push(`<span data-v-eb6167db> (Updated: ${ssrInterpolate(unref(formatDate)(event.updated_date))}) </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</time><div class="my-5 text-base font-normal text-foreground prose prose-sm max-w-none leading-snug content-renderer" data-v-eb6167db>`);
          _push(ssrRenderComponent(_component_ContentRenderer, { value: event }, null, _parent));
          _push(`</div>`);
          if (event.link) {
            _push(`<a${ssrRenderAttr("href", event.link)} class="inline-flex items-center px-3 py-1 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted hover:text-primary focus:z-10 focus:ring-2 focus:outline-none focus:ring-border focus:text-primary" data-v-eb6167db>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "uil:link",
              class: "w-3.5 h-3.5 me-2"
            }, null, _parent));
            _push(` ${ssrInterpolate(event.linkText || "Learn More")}</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ol>`);
      } else {
        _push(`<div class="flex items-center justify-center h-[50vh]" data-v-eb6167db><p class="text-center text-muted-foreground" data-v-eb6167db> No events found. </p></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(ScrollToTop, { position: "bottom-right" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb6167db"]]);

export { timeline as default };
//# sourceMappingURL=timeline-B9LXizUr.mjs.map
