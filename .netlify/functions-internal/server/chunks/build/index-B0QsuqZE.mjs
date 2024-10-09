import { _ as _sfc_main$1 } from './Input-B4kK5GdE.mjs';
import { a as useAsyncData, d as useRuntimeConfig, _ as __nuxt_component_1, e as __nuxt_component_0$1 } from './server.mjs';
import { u as useAuthor, _ as _sfc_main$2 } from './useAuthor-CAfMRDZK.mjs';
import { _ as __nuxt_component_0 } from './client-only-BwBfOuAV.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { q as queryContent } from './query-BCm8oN5n.mjs';
import './index-B8ehBWn-.mjs';
import 'tailwind-variants';
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
import '@iconify/utils/lib/css/icon';
import './preview-D_6nC1AN.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { getAuthor } = useAuthor();
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "all-posts",
      () => queryContent("blog").where({ is_publish: true }).sort({ published_at: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const showSlug = ref(false);
    const safePosts = computed(() => posts.value || []);
    const searchQuery = ref("");
    const filteredPosts = computed(() => {
      if (!searchQuery.value)
        return safePosts.value;
      const lowercaseQuery = searchQuery.value.toLowerCase();
      return safePosts.value.filter((post) => {
        var _a, _b;
        const titleMatch = post.title.toLowerCase().includes(lowercaseQuery);
        const descriptionMatch = ((_a = post.description) == null ? void 0 : _a.toLowerCase().includes(lowercaseQuery)) || false;
        const tagMatch = ((_b = post.tags) == null ? void 0 : _b.some((tag) => tag.toLowerCase().includes(lowercaseQuery))) || false;
        const author = getAuthor(post.authors);
        const authorMatch = author ? author.name.toLowerCase().includes(lowercaseQuery) : false;
        return titleMatch || descriptionMatch || tagMatch || authorMatch;
      });
    });
    const featuredPost = computed(() => filteredPosts.value[0]);
    const featuredAuthor = computed(() => featuredPost.value ? getAuthor(featuredPost.value.authors) : null);
    const smallerPosts = computed(() => filteredPosts.value.slice(1, 5));
    computed(() => ({
      url: `${config.public.productionUrl}/blog`,
      identifier: "blog-index",
      title: "Blog Comments"
    }));
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiInput = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_BlogAuthor = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 sm:px-6 lg:px-8" }, _attrs))}><div class="flex flex-col items-center my-12"><div class="relative w-full max-w-md">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        type: "text",
        placeholder: "Search posts...",
        class: "w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      }, null, _parent));
      _push(`<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:search",
        class: "h-5 w-5 text-gray-400"
      }, null, _parent));
      _push(`</div></div></div>`);
      if (filteredPosts.value.length > 0) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-4 gap-4"><div class="lg:col-span-3 space-y-4"><div class="block shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:border-primary hover:border-2"><div class="flex flex-col sm:flex-row"><div class="w-full sm:w-1/3 lg:w-2/5 h-auto sm:h-56 relative overflow-hidden group"><div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm"></div><div class="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">`);
        if (featuredPost.value.media.type === "image") {
          _push(`<img${ssrRenderAttr("src", featuredPost.value.media.content.image.url)}${ssrRenderAttr("alt", featuredPost.value.media.content.image.alt)} class="w-full h-full object-cover relative z-10">`);
        } else if (featuredPost.value.media.type === "video") {
          _push(`<div class="w-full h-full flex items-center justify-center relative z-10"><img${ssrRenderAttr("src", featuredPost.value.media.content.video.thumbnail.url)}${ssrRenderAttr("alt", featuredPost.value.media.content.video.thumbnail.alt)} class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/30 flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "uil:play-circle",
            class: "text-6xl text-white"
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center relative z-10 bg-primary/10"><span class="text-primary-foreground">No media available</span></div>`);
        }
        _push(`</div></div><div class="w-full sm:w-2/3 lg:w-3/5 p-4 flex flex-col">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: featuredPost.value._path,
          class: "hover:text-primary transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm sm:text-base md:text-lg font-bold line-clamp-2 text-justify"${_scopeId}>${ssrInterpolate(featuredPost.value.title)}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm sm:text-base md:text-lg font-bold line-clamp-2 text-justify" }, toDisplayString(featuredPost.value.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="text-xs text-gray-500 mt-1 text-justify"> Published at ${ssrInterpolate(new Date(featuredPost.value.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))}</p>`);
        if (featuredPost.value.description) {
          _push(`<p class="text-sm text-gray-600 mb-2 line-clamp-3 my-2 text-justify">${ssrInterpolate(featuredPost.value.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-wrap justify-between items-center mt-auto gap-2">`);
        if (featuredAuthor.value) {
          _push(ssrRenderComponent(_component_BlogAuthor, {
            author: featuredAuthor.value,
            size: "sm",
            class: "flex-shrink-0 mt-2 sm:mt-0",
            "show-slug": showSlug.value
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-xs text-gray-500 text-justify"> Updated at ${ssrInterpolate(new Date(featuredPost.value.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))} | ${ssrInterpolate(featuredPost.value.reading_time)}</span></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(smallerPosts.value, (post) => {
          _push(`<div class="block shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:border-primary hover:border-2"><div class="flex flex-col sm:flex-row lg:flex-col"><div class="w-full sm:w-1/3 lg:w-full h-32 sm:h-40 lg:h-32 relative overflow-hidden group"><div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm"></div><div class="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">`);
          if (post.media.type === "image") {
            _push(`<img${ssrRenderAttr("src", post.media.content.image.url)}${ssrRenderAttr("alt", post.media.content.image.alt)} class="w-full h-full object-cover relative z-10">`);
          } else if (post.media.type === "video") {
            _push(`<div class="w-full h-full relative z-10"><img${ssrRenderAttr("src", post.media.content.video.thumbnail.url)}${ssrRenderAttr("alt", post.media.content.video.thumbnail.alt)} class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/30 flex items-center justify-center">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "uil:play-circle",
              class: "text-4xl text-white"
            }, null, _parent));
            _push(`</div></div>`);
          } else {
            _push(`<div class="w-full h-full flex items-center justify-center relative z-10 bg-primary/10"><span class="text-primary-foreground text-sm">No media</span></div>`);
          }
          _push(`</div></div><div class="w-full sm:w-2/3 lg:w-full p-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path,
            class: "hover:text-primary transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="text-sm sm:text-base md:text-lg font-bold line-clamp-2 text-justify"${_scopeId}>${ssrInterpolate(post.title)}</h3>`);
              } else {
                return [
                  createVNode("h3", { class: "text-sm sm:text-base md:text-lg font-bold line-clamp-2 text-justify" }, toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="text-xs text-gray-500 mt-1 text-justify"> Published at ${ssrInterpolate(new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))}</p>`);
          if (post.description) {
            _push(`<p class="text-sm text-gray-600 mb-1 line-clamp-2 my-2 text-justify">${ssrInterpolate(post.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex flex-wrap justify-between items-center mt-2 gap-2">`);
          if (unref(getAuthor)(post.authors)) {
            _push(ssrRenderComponent(_component_BlogAuthor, {
              author: unref(getAuthor)(post.authors),
              size: "xs",
              class: "flex-shrink-0 mt-2 sm:mt-0",
              "show-slug": showSlug.value
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="text-xs text-gray-500 text-justify"> Updated at ${ssrInterpolate(new Date(post.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))} | ${ssrInterpolate(post.reading_time)}</span></div></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="shadow-lg rounded-lg p-4"><h2 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4"> Comments </h2>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="text-center py-8"><p class="text-xl text-gray-600"> No posts found matching your search. </p></div>`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B0QsuqZE.mjs.map
