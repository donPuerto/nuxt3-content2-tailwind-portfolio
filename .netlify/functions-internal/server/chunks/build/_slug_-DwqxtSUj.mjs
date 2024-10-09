import { b as _export_sfc, u as useRoute, a as useAsyncData, c as createError, e as __nuxt_component_0$1, _ as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './ContentRenderer-ClIe9sU4.mjs';
import { useSSRContext, defineComponent, withAsyncContext, unref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`project-${route.params.slug}`, () => queryContent(`/projects/${route.params.slug}`).findOne())), __temp = await __temp, __restore(), __temp);
    if (!project.value) {
      throw createError({ statusCode: 404, message: "Project not found" });
    }
    const vStyleListItems = {
      mounted: (el) => {
        const listItems = el.querySelectorAll("li");
        listItems.forEach((li) => {
          const strong = li.querySelector("strong");
          if (strong) {
            const text = li.innerHTML.split(strong.outerHTML)[1];
            li.innerHTML = `${strong.outerHTML}<span class="text-muted-foreground">${text}</span>`;
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      const _component_ContentRenderer = _sfc_main$1;
      if (unref(project)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 sm:px-6 lg:px-8 py-8" }, _attrs))} data-v-d3d11377><div class="mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold" data-v-d3d11377>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects",
          class: "hover:underline hover:scale-105 transition-transform duration-300 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Projects`);
            } else {
              return [
                createTextVNode("Projects")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="text-gray-500 mx-2" data-v-d3d11377>&gt;</span><span data-v-d3d11377>${ssrInterpolate(unref(project).title)}</span></div>`);
        if (unref(project).image) {
          _push(`<div class="mb-4 overflow-hidden aspect-[45/16] w-full" data-v-d3d11377><img${ssrRenderAttr("src", unref(project).image)}${ssrRenderAttr("alt", unref(project).title)} width="1440" height="512" class="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300" data-v-d3d11377></div>`);
        } else {
          _push(`<div class="bg-gray-800 rounded-lg p-4 mb-4 text-center text-gray-400 aspect-[45/16] w-full flex items-center justify-center" data-v-d3d11377><span class="text-sm sm:text-base md:text-lg" data-v-d3d11377>Image not available</span></div>`);
        }
        _push(`<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" data-v-d3d11377><div class="flex flex-wrap gap-2" data-v-d3d11377><!--[-->`);
        ssrRenderList(unref(project).tags, (tag) => {
          _push(`<span class="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-105" data-v-d3d11377> #${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><div class="flex flex-wrap gap-4" data-v-d3d11377>`);
        if (unref(project).repository_url) {
          _push(`<a${ssrRenderAttr("href", unref(project).repository_url)} target="_blank" rel="noopener noreferrer" class="bg-secondary text-secondary-foreground rounded-full p-1.5 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center w-8 h-8" data-v-d3d11377>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "line-md:github",
            size: "18"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(project).production_url) {
          _push(`<a${ssrRenderAttr("href", unref(project).production_url)} target="_blank" rel="noopener noreferrer" class="bg-secondary text-secondary-foreground rounded-full p-1.5 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center w-8 h-8" data-v-d3d11377>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "line-md:external-link",
            size: "18"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(project).repository_url && !unref(project).production_url) {
          _push(`<span class="text-muted-foreground italic text-sm" data-v-d3d11377> No external links available </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "project-content max-w-none" }, ssrGetDirectiveProps(_ctx, vStyleListItems)))} data-v-d3d11377>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(project) }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-d3d11377>Loading...</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3d11377"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DwqxtSUj.mjs.map
