import { a as useAsyncData, _ as __nuxt_component_1, e as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Input-B4kK5GdE.mjs';
import { u as useAuthor, _ as _sfc_main$2 } from './useAuthor-CAfMRDZK.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import 'vue3-disqus';
import '@iconify/vue';
import 'radix-vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import './index-B8ehBWn-.mjs';
import './preview-D_6nC1AN.mjs';

const postsPerPage = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tag]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getAuthor } = useAuthor();
    const route = useRoute();
    const tag = route.params.tag;
    const { data: allPosts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `posts-${tag}`,
      () => queryContent("blog").where({ tags: { $contains: tag } }).find()
    )), __temp = await __temp, __restore(), __temp);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const filteredPosts = computed(() => {
      var _a2;
      var _a;
      const query = searchQuery.value.toLowerCase();
      return (_a2 = (_a = allPosts.value) == null ? void 0 : _a.filter(
        (post) => {
          var _a22, _b, _c;
          return ((_a22 = post.title) == null ? void 0 : _a22.toLowerCase().includes(query)) || ((_b = post.description) == null ? void 0 : _b.toLowerCase().includes(query)) || ((_c = post.tags) == null ? void 0 : _c.some((tag2) => tag2.toLowerCase().includes(query)));
        }
      )) != null ? _a2 : [];
    });
    const paginatedPosts = computed(() => {
      const startIndex = (currentPage.value - 1) * postsPerPage;
      return filteredPosts.value.slice(startIndex, startIndex + postsPerPage);
    });
    const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_UiInput = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_BlogAuthor = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}><h1 class="text-xl font-bold mb-6 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:tag-alt",
        class: "h-6 w-6 text-primary mr-2"
      }, null, _parent));
      _push(` Posts tagged with <span class="text-primary underline ml-2">#${ssrInterpolate(unref(tag))}</span></h1><div class="mb-6 flex justify-center"><div class="relative w-full max-w-md">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        type: "text",
        placeholder: "Search tags...",
        class: "w-full px-4 py-2 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      }, null, _parent));
      _push(`<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:search",
        class: "h-5 w-5 text-gray-400"
      }, null, _parent));
      _push(`</div></div></div>`);
      if (filteredPosts.value.length === 0) {
        _push(`<div class="text-center my-2"><p class="text-base sm:text-lg md:text-xl text-muted-foreground"> No tags found matching your search. </p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(paginatedPosts.value, (post) => {
          var _a;
          _push(`<div class="block shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:border-primary hover:border-2 bg-card"><div class="flex flex-col h-full"><div class="h-48 relative overflow-hidden group"><div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm"></div><div class="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">`);
          if (((_a = post.media) == null ? void 0 : _a.type) === "image") {
            _push(`<img${ssrRenderAttr("src", post.media.content.image.url)}${ssrRenderAttr("alt", post.media.content.image.alt)} class="w-full h-full object-cover relative z-10">`);
          } else {
            _push(`<div class="w-full h-full flex items-center justify-center relative z-10 bg-primary/10"><span class="text-primary-foreground">No image available</span></div>`);
          }
          _push(`</div></div><div class="p-4 flex flex-col flex-grow">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path,
            class: "hover:text-primary transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h2 class="text-sm sm:text-base font-bold line-clamp-2 text-justify"${_scopeId}>${ssrInterpolate(post.title)}</h2>`);
              } else {
                return [
                  createVNode("h2", { class: "text-sm sm:text-base font-bold line-clamp-2 text-justify" }, toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="text-xs text-gray-500 mt-1 mb-2"> Published at ${ssrInterpolate(new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))}</p>`);
          if (post.description) {
            _push(`<p class="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4">${ssrInterpolate(post.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex flex-wrap justify-between items-center mt-auto gap-2">`);
          if (unref(getAuthor)(post.authors)) {
            _push(ssrRenderComponent(_component_BlogAuthor, {
              author: unref(getAuthor)(post.authors),
              size: "sm",
              class: "flex-shrink-0 mt-2 sm:mt-0",
              "show-slug": false
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="text-xs text-gray-500 text-justify"> Updated at ${ssrInterpolate(new Date(post.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))} | ${ssrInterpolate(post.reading_time)}</span></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (filteredPosts.value.length > 0) {
        _push(`<div class="mt-8 flex justify-center"><!--[-->`);
        ssrRenderList(totalPages.value, (page) => {
          _push(`<button class="${ssrRenderClass([
            "mx-1 px-3 py-1 rounded text-xs sm:text-sm",
            currentPage.value === page ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          ])}">${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/tag/[tag].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_tag_-CH9OcZcm.mjs.map
