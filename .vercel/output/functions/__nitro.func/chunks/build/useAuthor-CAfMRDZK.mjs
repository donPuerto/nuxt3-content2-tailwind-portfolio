import { e as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Author",
  __ssrInlineRender: true,
  props: {
    author: {},
    size: { default: "md" },
    showSlug: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const initials = computed(() => {
      return props.author.name.split(" ").map((word) => word[0]).join("").toUpperCase().slice(0, 2);
    });
    const sizeClasses = computed(() => ({
      "w-5 h-5 text-xs": props.size === "xs",
      "w-6 h-6 text-sm": props.size === "sm",
      "w-8 h-8 text-base": props.size === "md",
      "w-10 h-10 text-lg": props.size === "lg"
    }));
    const textClasses = computed(() => ({
      "text-xs": props.size === "xs" || props.size === "sm",
      "text-sm": props.size === "md",
      "text-base": props.size === "lg"
    }));
    const authorSlug = computed(() => {
      if (props.author.slug)
        return props.author.slug;
      return props.author.name.toLowerCase().replace(/\s+/g, "-");
    });
    const authorDisplaySlug = computed(() => `@${authorSlug.value}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/authors/${unref(authorSlug)}`,
        class: "flex items-center group"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.author.avatar) {
              _push2(`<div class="${ssrRenderClass([unref(sizeClasses), "mr-2 relative"])}"${_scopeId}><img${ssrRenderAttr("src", _ctx.author.avatar)}${ssrRenderAttr("alt", _ctx.author.name)} class="rounded-full w-full h-full object-cover"${_scopeId}><div class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-secondary transition-colors duration-300"${_scopeId}></div></div>`);
            } else {
              _push2(`<div class="${ssrRenderClass(["mr-2 bg-primary text-primary-foreground rounded-full flex items-center justify-center relative", unref(sizeClasses)])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(initials))}</span><div class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-secondary transition-colors duration-300"${_scopeId}></div></div>`);
            }
            _push2(`<div class="flex flex-col ml-1"${_scopeId}><span class="${ssrRenderClass(unref(textClasses))}"${_scopeId}>${ssrInterpolate(_ctx.author.name)}</span>`);
            if (props.showSlug) {
              _push2(`<span class="${ssrRenderClass([unref(textClasses), "text-gray-500"])}"${_scopeId}>${ssrInterpolate(unref(authorDisplaySlug))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              _ctx.author.avatar ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["mr-2 relative", unref(sizeClasses)]
              }, [
                createVNode("img", {
                  src: _ctx.author.avatar,
                  alt: _ctx.author.name,
                  class: "rounded-full w-full h-full object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 rounded-full border-2 border-transparent group-hover:border-secondary transition-colors duration-300" })
              ], 2)) : (openBlock(), createBlock("div", {
                key: 1,
                class: ["mr-2 bg-primary text-primary-foreground rounded-full flex items-center justify-center relative", unref(sizeClasses)]
              }, [
                createVNode("span", null, toDisplayString(unref(initials)), 1),
                createVNode("div", { class: "absolute inset-0 rounded-full border-2 border-transparent group-hover:border-secondary transition-colors duration-300" })
              ], 2)),
              createVNode("div", { class: "flex flex-col ml-1" }, [
                createVNode("span", { class: unref(textClasses) }, toDisplayString(_ctx.author.name), 3),
                props.showSlug ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: [unref(textClasses), "text-gray-500"]
                }, toDisplayString(unref(authorDisplaySlug)), 3)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Author.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useAuthor() {
  const getAuthor = (authorData) => {
    if (typeof authorData === "string") {
      return { name: authorData, avatar: "", slug: authorData.toLowerCase().replace(/\s+/g, "-") };
    } else if (Array.isArray(authorData) && authorData.length > 0) {
      return authorData[0];
    } else if (typeof authorData === "object" && authorData !== null) {
      return Array.isArray(authorData) ? authorData[0] || null : authorData;
    }
    return null;
  };
  return {
    getAuthor
  };
}

export { _sfc_main as _, useAuthor as u };
//# sourceMappingURL=useAuthor-CAfMRDZK.mjs.map
