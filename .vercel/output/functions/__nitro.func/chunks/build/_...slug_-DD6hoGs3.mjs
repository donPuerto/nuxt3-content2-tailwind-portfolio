import { u as useRoute, a as useAsyncData, r as reactiveOmit, d as useRuntimeConfig, e as __nuxt_component_0$1, _ as __nuxt_component_1, b as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, ref, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useForwardPropsEmits, AvatarImage, AvatarFallback, AvatarRoot } from 'radix-vue';
import { tv } from 'tailwind-variants';
import { _ as __nuxt_component_3 } from './ShareLinks-BSEhue_U.mjs';
import { _ as __nuxt_component_0$2, a as __nuxt_component_6 } from './client-only-BwBfOuAV.mjs';
import _sfc_main$6 from './ContentRenderer-ClIe9sU4.mjs';
import { parseISO, formatDistanceToNow, format } from 'date-fns';
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
import '@iconify/utils/lib/css/icon';
import './ContentRendererMarkdown-5EPUx-Yh.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';
import './preview-D_6nC1AN.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {},
    alt: {},
    class: {}
  },
  emits: ["loadingStatusChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
    const styles = tv({
      base: "aspect-square h-full w-full object-cover"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarImage), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Avatar/Image.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Fallback",
  __ssrInlineRender: true,
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    fallback: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "fallback");
    const styles = tv({
      base: "flex h-full w-full items-center justify-center rounded-full bg-muted font-medium"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarFallback), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.fallback)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.fallback), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Avatar/Fallback.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    src: {},
    class: { default: void 0 },
    imageClass: { default: void 0 },
    fallbackClass: { default: void 0 },
    alt: { default: void 0 },
    fallback: { default: void 0 },
    delayMs: { default: void 0 }
  },
  emits: ["loadingStatusChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const styles = tv({
      base: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAvatarImage = _sfc_main$5;
      const _component_UiAvatarFallback = _sfc_main$4;
      _push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              ssrRenderSlot(_ctx.$slots, "image", {}, () => {
                if (_ctx.src) {
                  _push2(ssrRenderComponent(_component_UiAvatarImage, {
                    src: _ctx.src,
                    alt: _ctx.alt,
                    class: _ctx.imageClass,
                    onLoadingStatusChange: ($event) => emits("loadingStatusChange", $event)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              ssrRenderSlot(_ctx.$slots, "fallback", {}, () => {
                _push2(ssrRenderComponent(_component_UiAvatarFallback, {
                  "delay-ms": _ctx.delayMs,
                  class: _ctx.fallbackClass,
                  fallback: _ctx.fallback
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                renderSlot(_ctx.$slots, "image", {}, () => [
                  _ctx.src ? (openBlock(), createBlock(_component_UiAvatarImage, {
                    key: 0,
                    src: _ctx.src,
                    alt: _ctx.alt,
                    class: _ctx.imageClass,
                    onLoadingStatusChange: ($event) => emits("loadingStatusChange", $event)
                  }, null, 8, ["src", "alt", "class", "onLoadingStatusChange"])) : createCommentVNode("", true)
                ]),
                renderSlot(_ctx.$slots, "fallback", {}, () => [
                  createVNode(_component_UiAvatarFallback, {
                    "delay-ms": _ctx.delayMs,
                    class: _ctx.fallbackClass,
                    fallback: _ctx.fallback
                  }, null, 8, ["delay-ms", "class", "fallback"])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Avatar/Avatar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AuthorList",
  __ssrInlineRender: true,
  props: {
    authors: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    const showAllAuthors = ref(false);
    const visibleAuthors = computed(
      () => showAllAuthors.value ? props.authors : props.authors.slice(0, 3)
    );
    const sizeMap = {
      xs: { avatar: "h-6 w-6", font: "text-xs", overlap: "-space-x-2" },
      sm: { avatar: "h-8 w-8", font: "text-sm", overlap: "-space-x-3" },
      md: { avatar: "h-10 w-10", font: "text-base", overlap: "-space-x-4" },
      lg: { avatar: "h-12 w-12", font: "text-lg", overlap: "-space-x-5" },
      xl: { avatar: "h-14 w-14", font: "text-xl", overlap: "-space-x-6" }
    };
    const sizeConfig = computed(() => sizeMap[props.size || "xs"]);
    const getInitials = (author) => {
      if (!author || !author.name)
        return "?";
      return author.name.split(" ").map((n) => n[0]).join("").toUpperCase();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAvatar = _sfc_main$3;
      if (_ctx.authors.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center" }, _attrs))} data-v-1965c553><div${ssrRenderAttrs({
          name: "author-list",
          class: ["flex items-center", sizeConfig.value.overlap]
        })} data-v-1965c553>`);
        ssrRenderList(visibleAuthors.value, (author, index) => {
          _push(`<div data-v-1965c553>`);
          _push(ssrRenderComponent(_component_UiAvatar, {
            src: author == null ? void 0 : author.avatar,
            alt: author == null ? void 0 : author.name,
            fallback: getInitials(author),
            class: [
              sizeConfig.value.avatar,
              "border",
              "border-border",
              "dark:border-border",
              "hover:border-primary",
              "dark:hover:border-primary",
              "rounded-full",
              "transition-colors",
              "duration-200",
              "ease-in-out"
            ]
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`</div>`);
        if (_ctx.authors.length > 3 && !showAllAuthors.value) {
          _push(ssrRenderComponent(_component_UiAvatar, {
            fallback: `+${_ctx.authors.length - 3}`,
            class: [
              sizeConfig.value.avatar,
              sizeConfig.value.font,
              "border",
              "border-border",
              "dark:border-border",
              "flex",
              "items-center",
              "justify-center",
              "bg-background",
              "dark:bg-background",
              "text-foreground",
              "dark:text-foreground",
              "font-semibold",
              "hover:border-primary",
              "dark:hover:border-primary",
              "rounded-full",
              "transition-colors",
              "duration-200",
              "ease-in-out",
              "cursor-pointer",
              "-ml-2"
            ]
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/AuthorList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1965c553"]]);
const QUICK_LINKS = [
  { icon: "ph:pen-duotone", text: "Edit this article", url: "https://github.com/donPuerto/nuxt3-content2-tailwind-portfolio/blob/master/content/blog/2.nuxt/1.nuxt.md" },
  { icon: "ph:shooting-star-duotone", text: "Star on Github", url: "https://github.com/donPuerto" },
  { icon: "ph:chat-centered-text-duotone", text: "Chat on Discord", url: "https://discord.gg/6eGKS3En" },
  { icon: "ph:hand-heart-duotone", text: "Become Sponsor", url: "https://github.com/sponsors/donPuerto" }
];
function useDate() {
  function formatRelativeDate(dateString) {
    if (!dateString)
      return "Unknown date";
    try {
      const date = parseISO(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      return "Invalid date";
    }
  }
  function formatDate(dateString) {
    if (!dateString)
      return "Unknown date";
    try {
      const date = parseISO(dateString);
      return format(date, "MMMM d, yyyy");
    } catch (error) {
      return "Invalid date";
    }
  }
  function formatDateWithRelative(dateString) {
    return {
      relative: formatRelativeDate(dateString),
      formatted: formatDate(dateString)
    };
  }
  return {
    formatRelativeDate,
    formatDate,
    formatDateWithRelative
  };
}
function useAuthors() {
  const getAuthors = (authorsData) => {
    if (typeof authorsData === "string") {
      return [{ name: authorsData, avatar: "", slug: "" }];
    } else if (Array.isArray(authorsData)) {
      return authorsData;
    } else if (typeof authorsData === "object") {
      return [authorsData];
    }
    return [];
  };
  return {
    getAuthors
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Render",
  __ssrInlineRender: true,
  props: {
    post: {},
    status: {},
    error: {},
    refresh: { type: Function }
  },
  setup(__props) {
    const route = useRoute();
    const config = useRuntimeConfig();
    const props = __props;
    const { formatDate } = useDate();
    const { getAuthors } = useAuthors();
    const allAuthors = computed(() => {
      const authors = getAuthors(props.post.authors);
      return authors.filter((author) => author !== void 0);
    });
    const title = computed(() => props.post.title);
    const publishedDate = computed(() => formatDate(props.post.published_at));
    const updatedDate = computed(() => props.post.updated_at ? formatDate(props.post.updated_at) : null);
    const imageUrl = computed(() => {
      var _a;
      return ((_a = props.post.media.content.image) == null ? void 0 : _a.url) || null;
    });
    const tableOfContents = ref([]);
    const activeId = ref(null);
    const isFullscreen = ref(false);
    ref(false);
    const isScrolled = ref(false);
    ref(null);
    ref(false);
    const showComments = ref(false);
    ref(null);
    ref(false);
    const disqusConfig = computed(() => ({
      url: `${config.public.productionUrl}${route.path}`,
      identifier: props.post.slug || route.path,
      title: props.post.title
    }));
    const mediaType = computed(() => props.post.media.type);
    ref(false);
    const videoUrl = computed(() => {
      if (mediaType.value === "video" && props.post.media.content.video) {
        const videoId = props.post.media.content.video.url.split("v=")[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      const _component_BlogAuthorList = __nuxt_component_2;
      const _component_BlogShareLinks = __nuxt_component_3;
      const _component_ClientOnly = __nuxt_component_0$2;
      const _component_ContentRenderer = _sfc_main$6;
      const _component_DisqusComments = __nuxt_component_6;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "font-sans text-sm" }, _attrs))} data-v-65d3e548><div class="container mx-auto px-5 sm:px-6 lg:px-8 py-8" data-v-65d3e548><nav class="text-sm sm:text-base font-medium flex items-center space-x-1" data-v-65d3e548>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "hover:text-ring flex items-center space-x-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:newspaper-duotone",
              class: "w-5 h-5 sm:w-6 sm:h-6"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-65d3e548${_scopeId}>Blog</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:newspaper-duotone",
                class: "w-5 h-5 sm:w-6 sm:h-6"
              }),
              createVNode("span", null, "Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="mx-1" data-v-65d3e548>&gt;</span><span class="text-primary hover:text-ring" data-v-65d3e548>${ssrInterpolate(props.post.title)}</span></nav><h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-12 mb-2" data-v-65d3e548>${ssrInterpolate(unref(title))}</h1><p class="text-sm text-foreground my-2" data-v-65d3e548>${ssrInterpolate(_ctx.post.description)}</p>`);
      if (_ctx.post.tags && _ctx.post.tags.length > 0) {
        _push(`<div class="flex flex-wrap gap-2 my-2" data-v-65d3e548><!--[-->`);
        ssrRenderList(_ctx.post.tags, (tag) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tag,
            to: `/blog/tag/${encodeURIComponent(tag)}`,
            class: "inline-block bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs sm:text-sm font-semibold mr-1 mb-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-105"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` #${ssrInterpolate(tag)}`);
              } else {
                return [
                  createTextVNode(" #" + toDisplayString(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col sm:flex-row justify-between text-sm text-muted-foreground mt-8 mb-2" data-v-65d3e548><span data-v-65d3e548>Published at ${ssrInterpolate(unref(publishedDate))}</span>`);
      if (unref(updatedDate)) {
        _push(`<span data-v-65d3e548>Updated at ${ssrInterpolate(unref(updatedDate))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative w-full rounded-lg overflow-hidden" data-v-65d3e548>`);
      if (unref(isFullscreen) && unref(imageUrl)) {
        _push(`<div class="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md" data-v-65d3e548><img${ssrRenderAttr("src", unref(imageUrl))}${ssrRenderAttr("alt", props.post.media.content.image.alt || props.post.title)} class="max-w-[95%] max-h-[95%] object-contain rounded-lg" data-v-65d3e548></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative w-full rounded-lg overflow-hidden" data-v-65d3e548><div class="aspect-w-45 aspect-h-16" data-v-65d3e548>`);
      if (unref(mediaType) === "image" && unref(imageUrl)) {
        _push(`<img${ssrRenderAttr("src", unref(imageUrl))}${ssrRenderAttr("alt", props.post.media.content.image.alt || props.post.title)} class="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105" data-v-65d3e548>`);
      } else if (unref(mediaType) === "video") {
        _push(`<!--[-->`);
        if (unref(videoUrl)) {
          _push(`<iframe${ssrRenderAttr("src", unref(videoUrl))}${ssrRenderAttr("title", _ctx.post.media.content.video.title)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full" data-v-65d3e548></iframe>`);
        } else {
          _push(`<div class="flex justify-center items-center w-full h-full bg-secondary text-secondary-foreground text-xs sm:text-sm md:text-base" data-v-65d3e548> No video available </div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div class="flex justify-center items-center w-full h-full bg-secondary text-secondary-foreground text-xs sm:text-sm md:text-base" data-v-65d3e548> Media content is not available </div>`);
      }
      _push(`</div></div></div><div class="flex justify-between items-center mt-4" data-v-65d3e548>`);
      _push(ssrRenderComponent(_component_BlogAuthorList, {
        authors: unref(allAuthors),
        size: "sm",
        class: "flex-shrink-0"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BlogShareLinks, {
        size: "md",
        class: "flex-shrink-0"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="container mx-auto px-5 sm:px-6 lg:px-8 py-8" data-v-65d3e548><div class="grid grid-cols-12 gap-2 lg:gap-4" data-v-65d3e548><aside class="${ssrRenderClass([{ "opacity-0": !unref(isScrolled), "opacity-100": unref(isScrolled) }, "col-span-1 hidden sm:block transition-opacity duration-300"])}" data-v-65d3e548><div class="sticky top-8" data-v-65d3e548>`);
      _push(ssrRenderComponent(_component_BlogShareLinks, { direction: "column" }, null, _parent));
      _push(`</div></aside><div class="col-span-12 sm:col-span-11 lg:col-span-7" data-v-65d3e548><div class="bg-secondary w-full px-4 sm:px-8 py-6 rounded-xl shadow-md" data-v-65d3e548>`);
      if (_ctx.status === "pending") {
        _push(`<div class="loading-spinner" data-v-65d3e548> Loading... </div>`);
      } else if (_ctx.error) {
        _push(`<div class="error-message" data-v-65d3e548> An error occurred while loading the content: ${ssrInterpolate(_ctx.error.message)} <button data-v-65d3e548> Retry </button></div>`);
      } else if (_ctx.post) {
        _push(`<div class="blog-content text-sm" data-v-65d3e548>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: _ctx.post }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-65d3e548${_scopeId}>No content found.</p>`);
            } else {
              return [
                createVNode("p", null, "No content found.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-65d3e548> Post not found </div>`);
      }
      _push(`</div></div><aside class="col-span-12 lg:col-span-4 mt-4 lg:mt-0 text-sm right-sidebar" data-v-65d3e548><div class="sticky top-8 space-y-4" data-v-65d3e548>`);
      if (unref(tableOfContents).length > 0) {
        _push(`<div class="bg-secondary py-6 px-6 rounded-xl shadow-sm" data-v-65d3e548><h2 class="text-lg font-semibold mb-4" data-v-65d3e548> Table of Contents </h2><ul class="space-y-2" data-v-65d3e548><!--[-->`);
        ssrRenderList(unref(tableOfContents), (header) => {
          _push(`<li data-v-65d3e548><a${ssrRenderAttr("href", `#${header.id}`)} class="${ssrRenderClass([{
            "active": header.id === unref(activeId),
            "font-medium": header.level === 2,
            "pl-2": header.level === 3,
            "pl-4": header.level === 4,
            "pl-6": header.level > 4
          }, "toc-link block text-sm text-primary transition-all duration-300 ease-in-out"])}" data-v-65d3e548>${ssrInterpolate(header.text)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-secondary p-6 rounded-xl shadow-sm" data-v-65d3e548><h2 class="text-lg font-semibold mb-4" data-v-65d3e548> Quick Links </h2><ul class="space-y-2" data-v-65d3e548><!--[-->`);
      ssrRenderList(unref(QUICK_LINKS), (link) => {
        _push(`<li data-v-65d3e548><a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center text-sm text-primary hover:text-ring transition-colors duration-200" data-v-65d3e548>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: link.icon,
          class: "mr-2"
        }, null, _parent));
        _push(`<span data-v-65d3e548>${ssrInterpolate(link.text)}</span></a></li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-secondary p-6 rounded-xl shadow-sm" data-v-65d3e548><h2 class="text-base font-semibold mb-4" data-v-65d3e548> Advertisement </h2><div class="bg-gray-200 h-40 flex items-center justify-center text-xs text-gray-500" data-v-65d3e548> Ad Space </div></div></div></aside></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div data-v-65d3e548>`);
      if (unref(showComments)) {
        _push(ssrRenderComponent(_component_DisqusComments, {
          identifier: unref(disqusConfig).identifier,
          url: unref(disqusConfig).url,
          title: unref(disqusConfig).title,
          class: "mt-16 mb-12"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Render.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-65d3e548"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: post, status, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "fetch-blog",
      () => {
        var _a2;
        var _a;
        return queryContent("blog").where({
          _path: { $regex: new RegExp(`^/blog/${(_a2 = (_a = route.params.slug) == null ? void 0 : _a.join("/")) != null ? _a2 : ""}`) }
        }).findOne();
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogRender = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(post)) {
        _push(ssrRenderComponent(_component_BlogRender, {
          post: unref(post),
          status: unref(status),
          error: unref(error),
          refresh: unref(refresh)
        }, null, _parent));
      } else if (unref(error)) {
        _push(`<p> Error: ${ssrInterpolate(unref(error).message)}</p>`);
      } else if (unref(status) === "pending") {
        _push(`<p> Loading... </p>`);
      } else {
        _push(`<p> Post not found </p>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DD6hoGs3.mjs.map
