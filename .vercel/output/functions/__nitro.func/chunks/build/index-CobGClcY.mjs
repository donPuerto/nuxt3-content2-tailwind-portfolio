import { a as useAsyncData, _ as __nuxt_component_1, e as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './preview-D_6nC1AN.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects", () => queryContent("/projects").find())), __temp = await __temp, __restore(), __temp);
    if (projects.value) {
      projects.value = projects.value.map((project) => ({
        ...project,
        icon: project.icon || "uil:file-alt"
        // Fallback icon if none is specified
      }));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 sm:px-6 lg:px-8 py-8" }, _attrs))}><div class="mb-8"><h1 class="text-md sm:text-lg md:text-xl font-bold flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:apps",
        class: "h-6 w-6 text-primary mr-2"
      }, null, _parent));
      _push(` Projects </h1><p class="text-sm sm:text-lg text-muted-foreground mt-1">Explore our innovative solutions</p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: project._path,
          to: project._path,
          class: "bg-card rounded-lg p-4 sm:p-6 flex items-center space-x-6 hover:bg-accent transition-colors border border-border hover:border-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-muted rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: project.icon || "uil:file-alt",
                class: "w-5 h-5 sm:w-6 sm:h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex-grow overflow-hidden"${_scopeId}><h2 class="text-sm sm:text-base md:text-lg font-semibold mb-1 truncate"${_scopeId}>${ssrInterpolate(project.title)}</h2><p class="text-xs sm:text-sm text-muted-foreground truncate lg:whitespace-normal"${_scopeId}>${ssrInterpolate(project.description)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-muted rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0" }, [
                  createVNode(_component_Icon, {
                    name: project.icon || "uil:file-alt",
                    class: "w-5 h-5 sm:w-6 sm:h-6"
                  }, null, 8, ["name"])
                ]),
                createVNode("div", { class: "flex-grow overflow-hidden" }, [
                  createVNode("h2", { class: "text-sm sm:text-base md:text-lg font-semibold mb-1 truncate" }, toDisplayString(project.title), 1),
                  createVNode("p", { class: "text-xs sm:text-sm text-muted-foreground truncate lg:whitespace-normal" }, toDisplayString(project.description), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CobGClcY.mjs.map
