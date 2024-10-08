import { u as useRoute, f as useAppConfig, b as _export_sfc, d as useRuntimeConfig, _ as __nuxt_component_1 } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShareLinks",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (value) => ["xs", "sm", "md", "lg", "xl"].includes(value)
    },
    direction: {
      type: String,
      default: "row",
      validator: (value) => ["row", "column"].includes(value)
    }
  },
  setup(__props) {
    const route = useRoute();
    const appConfig = useAppConfig();
    const runtimeConfig = useRuntimeConfig();
    const props = __props;
    const currentUrl = computed(() => {
      const baseUrl = runtimeConfig.public.siteUrl || "http://localhost:3000";
      return `${baseUrl}${route.path}`;
    });
    const shareLinks = computed(
      () => appConfig.app.shareLinks.map((link) => ({
        ...link,
        url: `${link.url}${encodeURIComponent(currentUrl.value)}`
      }))
    );
    const sizeValues = {
      xs: { default: "1em", x: "0.75em" },
      sm: { default: "1.25em", x: "1em" },
      md: { default: "1.5em", x: "1.25em" },
      lg: { default: "1.75em", x: "1.5em" },
      xl: { default: "2em", x: "1.75em" }
    };
    const getIconSize = (iconName) => {
      const sizeValue = sizeValues[props.size];
      return iconName === "line-md:twitter-x" ? sizeValue.x : sizeValue.default;
    };
    const containerClasses = computed(() => [
      "flex",
      props.direction === "column" ? "flex-col space-y-2" : "space-x-2"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(containerClasses) }, _attrs))} data-v-482e98bf><!--[-->`);
      ssrRenderList(unref(shareLinks), (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="share-link text-primary hover:text-ring transition-all duration-300 ease-in-out rounded-full p-2 flex items-center justify-center"${ssrRenderAttr("title", `Share on ${link.name}`)} data-v-482e98bf>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: link.icon,
          size: getIconSize(link.icon)
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/ShareLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-482e98bf"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=ShareLinks-BSEhue_U.mjs.map
