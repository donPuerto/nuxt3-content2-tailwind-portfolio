import { _ as __nuxt_component_3 } from './ShareLinks-BSEhue_U.mjs';
import _sfc_main$1 from './ContentRenderer-ClIe9sU4.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { b as _export_sfc, u as useRoute, a as useAsyncData, c as createError } from './server.mjs';
import { q as queryContent } from './query-BCm8oN5n.mjs';
import './ContentRendererMarkdown-5EPUx-Yh.mjs';
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
import 'property-information';
import './node-04k6j4dz.mjs';
import './preview-D_6nC1AN.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: allAuthors } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("authors", () => queryContent("authors").find())), __temp = await __temp, __restore(), __temp);
    const author = computed(() => {
      var _a;
      return ((_a = allAuthors.value) == null ? void 0 : _a.find((a) => a._path === `/authors/${slug}` || a._file === `authors/${slug}.md`)) || null;
    });
    if (!author.value) {
      throw createError({ statusCode: 404, message: "Author not found" });
    }
    const authorName = computed(() => {
      var _a;
      return ((_a = author.value) == null ? void 0 : _a.name) || "Unknown Author";
    });
    const authorBio = computed(() => {
      var _a;
      return ((_a = author.value) == null ? void 0 : _a.bio) || "No bio available";
    });
    const authorOccupation = computed(() => {
      var _a;
      return ((_a = author.value) == null ? void 0 : _a.occupation) || "Occupation not specified";
    });
    const authorCompany = computed(() => {
      var _a;
      return ((_a = author.value) == null ? void 0 : _a.company) || "Company not specified";
    });
    const authorLocation = computed(() => {
      var _a;
      return ((_a = author.value) == null ? void 0 : _a.location) || "Location not specified";
    });
    const authorAvatar = computed(() => {
      var _a;
      return ((_a = author.value) == null ? void 0 : _a.avatar) || "/default-avatar.png";
    });
    const currentPageUrl = computed(() => {
      return "";
    });
    const isFullScreen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogShareLinks = __nuxt_component_3;
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-dfc6ee56>`);
      if (unref(author)) {
        _push(`<div class="bg-background min-h-screen py-8 px-4 sm:py-12 sm:px-6 lg:px-8" data-v-dfc6ee56><div class="max-w-4xl mx-auto bg-card shadow-xl rounded-lg overflow-hidden border border-border" data-v-dfc6ee56><div class="md:flex md:h-[250px]" data-v-dfc6ee56><div class="md:w-1/3 md:flex-shrink-0" data-v-dfc6ee56><img${ssrRenderAttr("src", unref(authorAvatar))}${ssrRenderAttr("alt", unref(authorName))} class="h-full w-full object-cover cursor-pointer" data-v-dfc6ee56></div><div class="p-4 md:p-6 md:w-2/3 flex flex-col justify-between" data-v-dfc6ee56><div data-v-dfc6ee56><div class="uppercase tracking-wide text-xs md:text-sm text-primary font-semibold" data-v-dfc6ee56>${ssrInterpolate(unref(authorOccupation))}</div><h1 class="mt-1 text-lg sm:text-xl md:text-2xl leading-6 md:leading-7 font-bold md:font-extrabold tracking-tight text-foreground" data-v-dfc6ee56>${ssrInterpolate(unref(authorName))}</h1><p class="mt-1 text-sm md:text-base text-muted-foreground" data-v-dfc6ee56>${ssrInterpolate(unref(authorCompany))} | ${ssrInterpolate(unref(authorLocation))}</p><p class="mt-1 text-sm md:text-base text-foreground" data-v-dfc6ee56>${ssrInterpolate(unref(authorBio))}</p></div><div class="mt-2 flex space-x-4" data-v-dfc6ee56>`);
        _push(ssrRenderComponent(_component_BlogShareLinks, {
          size: "sm",
          class: "flex-shrink-0",
          url: unref(currentPageUrl),
          title: unref(authorName)
        }, null, _parent));
        _push(`</div></div></div><div class="px-6 py-2 md:px-8 md:py-4 bg-muted/50" data-v-dfc6ee56><h2 class="text-lg sm:text-xl md:text-2xl font-bold text-foreground" data-v-dfc6ee56>Skills</h2><div class="mt-3 md:mt-4 flex flex-wrap" data-v-dfc6ee56><!--[-->`);
        ssrRenderList(unref(author).skills, (skill) => {
          _push(`<span class="inline-block bg-muted/80 text-muted-foreground rounded-full px-2 py-1 text-xs sm:text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-105" data-v-dfc6ee56>${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div>`);
        if (unref(author).body) {
          _push(`<div class="px-6 py-4 md:px-8 md:py-6 prose max-w-none leading-snug custom-prose content-renderer" data-v-dfc6ee56>`);
          _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(author) }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isFullScreen)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md z-50 flex items-center justify-center p-4" data-v-dfc6ee56><img${ssrRenderAttr("src", unref(authorAvatar))}${ssrRenderAttr("alt", unref(authorName))} class="max-h-full max-w-full object-contain rounded-lg" data-v-dfc6ee56></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authors/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfc6ee56"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-B6Uj8L7L.mjs.map
