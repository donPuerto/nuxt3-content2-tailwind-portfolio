import { e as __nuxt_component_0$1 } from './server.mjs';
import { tv } from 'tailwind-variants';
import { useSSRContext, defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      "default": "h-10 px-4 py-2",
      "sm": "h-9 rounded-md px-3",
      "lg": "h-11 rounded-md px-8",
      "icon-sm": "h-9 w-9",
      "icon": "h-10 w-10"
    },
    disabled: {
      true: "pointer-events-none opacity-50"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: { default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    onClick: { default: void 0 },
    to: { default: void 0 },
    href: { default: void 0 },
    as: { default: void 0 },
    class: { default: void 0 },
    variant: { default: "default" },
    size: { default: "default" },
    text: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const elementType = computed(() => {
      if (props.as)
        return props.as;
      if (props.href || props.to)
        return __nuxt_component_0$1;
      return "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(elementType)), mergeProps({
        class: ("buttonStyles" in _ctx ? _ctx.buttonStyles : unref(buttonStyles))({
          disabled: _ctx.disabled || _ctx.loading,
          variant: _ctx.variant,
          size: _ctx.size,
          class: props.class
        }),
        disabled: _ctx.disabled || _ctx.loading,
        to: _ctx.to,
        href: _ctx.href,
        type: _ctx.type,
        onClick: _ctx.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.text)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.text), 1)
              ])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Button-DDe4Hotg.mjs.map
