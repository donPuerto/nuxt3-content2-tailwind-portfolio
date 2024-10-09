import { b as _export_sfc, e as __nuxt_component_0$1, _ as __nuxt_component_1 } from './server.mjs';
import { _ as _sfc_main$2 } from './Button-DDe4Hotg.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const TECHNOLOGIES = [
  { name: "Vue", url: "https://vuejs.org/", icon: "logos:vue" },
  { name: "Nuxt", url: "https://nuxt.com/", icon: "logos:nuxt-icon" },
  { name: "Next", url: "https://nextjs.org/", icon: "logos:nextjs-icon" },
  { name: "Ionic", url: "https://ionicframework.com/", icon: "logos:ionic-icon" },
  { name: "React Native", url: "https://reactnative.dev/", icon: "logos:react" },
  { name: "Supabase", url: "https://supabase.com/", icon: "logos:supabase-icon" },
  { name: "Laravel", url: "https://laravel.com/", icon: "logos:laravel" },
  { name: "Adonis", url: "https://adonisjs.com/", icon: "logos:adonisjs-icon" }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "V1",
  __ssrInlineRender: true,
  setup(__props) {
    const isForHire = ref(true);
    const toggleHireStatus = () => {
      isForHire.value = !isForHire.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiButton = _sfc_main$2;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16" }, _attrs))} data-v-ff1ada4b><div class="text-center max-w-4xl mx-auto" data-v-ff1ada4b><div data-v-ff1ada4b><div class="${ssrRenderClass([unref(isForHire) ? "bg-green-500 shadow-green-300/50" : "bg-gray-500 shadow-gray-300/50", "inline-flex items-center rounded-full p-1 pr-2 text-sm sm:text-base transition-all duration-300 ease-in-out shadow-lg w-56 sm:w-64 justify-between"])}" data-v-ff1ada4b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: ["px-3 py-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide rounded-full transition-all duration-300 ease-in-out flex-grow", unref(isForHire) ? "bg-green-600 hover:bg-green-700 glow-green" : "bg-transparent"],
        onClick: ($event) => unref(isForHire) ? _ctx.$router.push("/contact") : toggleHireStatus()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FOR HIRE `);
          } else {
            return [
              createTextVNode(" FOR HIRE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([!unref(isForHire) ? "bg-gray-600 glow-gray" : "bg-transparent", "px-3 py-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide rounded-full transition-all duration-300 ease-in-out flex-grow"])}" data-v-ff1ada4b> HIRED </button></div></div><h1 class="mt-5 font-extrabold tracking-tight" data-v-ff1ada4b><span class="block space-y-1 sm:space-y-2" data-v-ff1ada4b><span class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl" data-v-ff1ada4b>Looking to hire a developer for your</span><span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent glow-text" data-v-ff1ada4b> web and mobile </span><span class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl" data-v-ff1ada4b>applications?</span></span></h1><p class="mx-auto mt-2 max-w-xl text-base sm:text-lg text-secondary-foreground sm:mt-5 md:mt-6" data-v-ff1ada4b> Revolutionize your web and mobile projects with Vue, Nuxt, Next, React Native, Ionic, Supabase, Adonis, and Laravel, ready to deliver excellence! </p><div class="mt-2 sm:mt-4 flex flex-wrap justify-center gap-2" data-v-ff1ada4b><!--[-->`);
      ssrRenderList(unref(TECHNOLOGIES), (tech) => {
        _push(ssrRenderComponent(_component_UiButton, {
          key: tech.name,
          variant: "ghost",
          class: "mb-2",
          to: tech.url,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                class: "h-4 w-4 mr-1",
                name: tech.icon
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(tech.name)}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  class: "h-4 w-4 mr-1",
                  name: tech.icon
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(tech.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/hero/V1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ff1ada4b"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeroV1 = __nuxt_component_0;
  _push(ssrRenderComponent(_component_AppHeroV1, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-SElIYFhn.mjs.map
