import { _ as __nuxt_component_0 } from './client-only-BwBfOuAV.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, unref, mergeProps, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, computed, resolveDynamicComponent, Fragment, renderList, useAttrs, watch, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderAttrs, ssrRenderList, ssrRenderTeleport } from 'vue/server-renderer';
import { _ as _sfc_main$q } from './Button-DDe4Hotg.mjs';
import { b as _export_sfc, r as reactiveOmit, e as __nuxt_component_0$1, q as useRouter, _ as __nuxt_component_1, p as useState } from './server.mjs';
import { useForwardPropsEmits, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, Primitive, DropdownMenuItem, ComboboxRoot, ComboboxCancel, ComboboxInput, ComboboxContent, ComboboxEmpty, ComboboxLabel, ComboboxGroup, ComboboxItem, ComboboxSeparator } from 'radix-vue';
import { tv } from 'tailwind-variants';
import { a as useWindowSize } from './index-B8ehBWn-.mjs';
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

const MENU_LIST = [
  {
    header: "Pages",
    items: [
      { name: "Home", route: "/", icon: "ri:home-2-line", shortcut: "\u2318H" },
      { name: "Blog", route: "/blog", icon: "uil:notes", shortcut: "\u2318B" },
      { name: "Projects", route: "/projects", icon: "ic:outline-work-outline", shortcut: "\u2318P" },
      { name: "About", route: "/about", icon: "mdi:briefcase-account-outline", shortcut: "\u2318A" }
    ]
  }
];
const FETCH_MENU_LIST_BY_HEADER = (header) => {
  return MENU_LIST.find((section) => section.header === header);
};
const THEME_MODES = [
  { value: "light", icon: "material-symbols:wb-twilight", title: "Light" },
  { value: "dark", icon: "lucide:moon", title: "Dark" },
  { value: "sepia", icon: "ph:coffee-bold", title: "Sepia" },
  { value: "system", icon: "gridicons:themes", title: "System" }
];
const FOOTER_LINKS = [
  {
    title: "Nuxt",
    icon: "tabler:brand-nuxt",
    to: "https://nuxt.com/",
    target: "_blank"
  },
  {
    title: "Tailwind",
    icon: "mdi:tailwind",
    to: "https://tailwindcss.com/",
    target: "_blank"
  },
  {
    title: "Radix-Vue",
    to: "https://www.radix-vue.com/",
    target: "_blank"
  },
  {
    title: "UI-thing",
    to: "https://ui-thing.behonbaker.com/getting-started/introduction",
    target: "_blank"
  },
  {
    title: "Github",
    icon: "mdi:github",
    to: "https://my-portfolio-blush-phi.vercel.app/",
    target: "_blank"
  }
];
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "ParticlesBackground",
  __ssrInlineRender: true,
  setup(__props) {
    shallowRef({
      fullScreen: {
        enable: false
      },
      background: {
        color: {
          value: "transparent"
        }
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true
          }
        },
        color: {
          value: "random"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: { min: 0.1, max: 0.9 },
          animation: {
            enable: true,
            speed: 1,
            sync: false
          }
        },
        size: {
          value: { min: 1, max: 3 }
        },
        move: {
          enable: true,
          speed: 0.1,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out"
        },
        twinkle: {
          particles: {
            enable: true,
            color: "random",
            frequency: 0.05,
            opacity: 1
          }
        }
      }
    });
    shallowRef(null);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ParticlesBackground.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const forwarded = useForwardPropsEmits(props, emit);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/DropdownMenu/DropdownMenu.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Trigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/DropdownMenu/Trigger.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "Portal",
  __ssrInlineRender: true,
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/DropdownMenu/Portal.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean, default: true },
    side: { default: "bottom" },
    sideOffset: { default: 5 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
    const styles = tv({
      base: "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-accent-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDropdownMenuPortal = _sfc_main$m;
      _push(ssrRenderComponent(_component_UiDropdownMenuPortal, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(styles)({ class: props.class })
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(styles)({ class: props.class })
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/DropdownMenu/Content.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Shortcut",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "span" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "ml-auto text-xs tracking-widest opacity-60"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/DropdownMenu/Shortcut.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean },
    shortcut: {},
    title: {},
    icon: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(
      reactiveOmit(props, "class", "inset", "shortcut", "title", "icon"),
      emits
    );
    const styles = tv({
      base: "relative flex cursor-default select-none items-center gap-3 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      variants: {
        inset: {
          true: "pl-8"
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_UiDropdownMenuShortcut = _sfc_main$k;
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwarded), {
        class: unref(styles)({ inset: _ctx.inset, class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                if (_ctx.icon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: _ctx.icon,
                    class: "h-4 w-4"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                if (_ctx.title) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.title)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "shortcut", {}, () => {
              if (_ctx.shortcut) {
                _push2(ssrRenderComponent(_component_UiDropdownMenuShortcut, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.shortcut)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.shortcut), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                renderSlot(_ctx.$slots, "icon", {}, () => [
                  _ctx.icon ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: _ctx.icon,
                    class: "h-4 w-4"
                  }, null, 8, ["name"])) : createCommentVNode("", true)
                ]),
                renderSlot(_ctx.$slots, "title", {}, () => [
                  _ctx.title ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true)
                ])
              ]),
              renderSlot(_ctx.$slots, "shortcut", {}, () => [
                _ctx.shortcut ? (openBlock(), createBlock(_component_UiDropdownMenuShortcut, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.shortcut), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/DropdownMenu/Item.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "w-full py-2"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/List/List.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    class: {},
    onClick: { type: Function },
    to: {},
    href: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "flex w-full items-center gap-5 px-4 py-2",
      variants: {
        hover: {
          true: "cursor-pointer outline-none hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/10"
        }
      }
    });
    const eltype = computed(() => {
      if (props.to || props.href)
        return __nuxt_component_0$1;
      if (props.onClick)
        return "button";
      return "li";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(eltype)), mergeProps({
        href: _ctx.href,
        to: _ctx.to,
        class: unref(styles)({
          hover: Boolean(_ctx.onClick) || Boolean(_ctx.to) || Boolean(_ctx.href),
          class: props.class
        }),
        onClick: _ctx.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/List/Item.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "flex flex-col gap-1 leading-none"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/List/Content.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Kbd",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "kbd" },
    size: { default: "sm" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "size");
    const styles = tv({
      base: "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-md border border-border bg-muted font-sans font-medium",
      variants: {
        size: {
          xs: "h-5 min-h-[16px] px-1 text-[10px]",
          sm: "h-6 min-h-[20px] px-1.5 text-[11px]",
          md: "h-7 min-h-[24px] px-2 text-[12px]"
        }
      },
      defaultVariants: {
        size: "sm"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ size: _ctx.size, class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Kbd.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "MobileBarMenu",
  __ssrInlineRender: true,
  props: {
    menuList: {},
    modelValue: { type: Boolean },
    forceClosed: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { width } = useWindowSize();
    const isMenuVisible = computed(() => {
      return props.modelValue && !props.forceClosed && width.value < 768;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiList = _sfc_main$i;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiListItem = _sfc_main$h;
      const _component_Icon = __nuxt_component_1;
      const _component_UiListContent = _sfc_main$g;
      const _component_UiKbd = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container px-4 w-full md:hidden" }, _attrs))}>`);
      if (unref(isMenuVisible)) {
        _push(ssrRenderComponent(_component_UiList, { class: "w-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<h4 class="mb-2 text-xs font-bold text-muted-foreground uppercase"${_scopeId}>${ssrInterpolate((_a = props.menuList) == null ? void 0 : _a.header)}</h4><!--[-->`);
              ssrRenderList((_b = props.menuList) == null ? void 0 : _b.items, (item) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: item.route
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiListItem, { class: "px-3 py-1.5 hover:bg-accent hover:text-accent-foreground rounded-md" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: item.icon,
                              class: "h-4 w-4 mr-3 text-muted-foreground"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiListContent, { class: "text-sm font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiKbd, {
                              size: "sm",
                              class: "ml-auto text-xs text-muted-foreground"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>\u2318${ssrInterpolate(item.shortcut)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", null, "\u2318" + toDisplayString(item.shortcut), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: item.icon,
                                class: "h-4 w-4 mr-3 text-muted-foreground"
                              }, null, 8, ["name"]),
                              createVNode(_component_UiListContent, { class: "text-sm font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiKbd, {
                                size: "sm",
                                class: "ml-auto text-xs text-muted-foreground"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "\u2318" + toDisplayString(item.shortcut), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiListItem, { class: "px-3 py-1.5 hover:bg-accent hover:text-accent-foreground rounded-md" }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: item.icon,
                              class: "h-4 w-4 mr-3 text-muted-foreground"
                            }, null, 8, ["name"]),
                            createVNode(_component_UiListContent, { class: "text-sm font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiKbd, {
                              size: "sm",
                              class: "ml-auto text-xs text-muted-foreground"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "\u2318" + toDisplayString(item.shortcut), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("h4", { class: "mb-2 text-xs font-bold text-muted-foreground uppercase" }, toDisplayString((_c = props.menuList) == null ? void 0 : _c.header), 1),
                (openBlock(true), createBlock(Fragment, null, renderList((_d = props.menuList) == null ? void 0 : _d.items, (item) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: item.name,
                    to: item.route
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiListItem, { class: "px-3 py-1.5 hover:bg-accent hover:text-accent-foreground rounded-md" }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: item.icon,
                            class: "h-4 w-4 mr-3 text-muted-foreground"
                          }, null, 8, ["name"]),
                          createVNode(_component_UiListContent, { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiKbd, {
                            size: "sm",
                            class: "ml-auto text-xs text-muted-foreground"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u2318" + toDisplayString(item.shortcut), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/header/MobileBarMenu.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: { type: Function },
    displayValue: { type: Function },
    resetSearchTermOnBlur: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
    const styles = tv({
      base: "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps(unref(forwarded), {
        open: true,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Command.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Cancel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "flex items-center justify-center"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(unref(ComboboxCancel), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:x",
                class: "h-4 w-4 text-muted-foreground/70"
              }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_Icon, {
                  name: "lucide:x",
                  class: "h-4 w-4 text-muted-foreground/70"
                })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Cancel.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    class: {},
    icon: {},
    type: {},
    disabled: { type: Boolean },
    showCancel: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "flex h-11 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_1;
      const _component_UiCommandCancel = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center border-b px-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.icon || "lucide:search",
        class: "mr-2 h-4 w-4 shrink-0 opacity-50"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ComboboxInput), mergeProps(_ctx.$attrs, {
        type: (_a = _ctx.type) != null ? _a : "text",
        disabled: _ctx.disabled,
        "auto-focus": "",
        class: unref(styles)({ class: props.class })
      }), null, _parent));
      if (_ctx.showCancel) {
        _push(ssrRenderComponent(_component_UiCommandCancel, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Input.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "List",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
    const styles = tv({
      base: "max-h-[300px] overflow-y-auto overflow-x-hidden"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxContent), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/List.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Empty",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "py-6 text-center text-sm"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxEmpty), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Empty.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "label");
    const styles = tv({
      base: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxLabel), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.label)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Label.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Group",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    heading: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "heading");
    const styles = tv({
      base: "overflow-hidden p-1 text-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCommandLabel = _sfc_main$8;
      _push(ssrRenderComponent(unref(ComboboxGroup), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "heading", {}, () => {
              if (_ctx.heading) {
                _push2(ssrRenderComponent(_component_UiCommandLabel, { label: _ctx.heading }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "heading", {}, () => [
                _ctx.heading ? (openBlock(), createBlock(_component_UiCommandLabel, {
                  key: 0,
                  label: _ctx.heading
                }, null, 8, ["label"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Group.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Shortcut",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    shortcut: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "ml-auto text-xs tracking-widest text-muted-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as || "span",
        "as-child": _ctx.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.shortcut)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.shortcut), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Shortcut.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    icon: {},
    text: {},
    shortcut: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const forwarded = useForwardPropsEmits(
      reactiveOmit(props, "class", "icon", "text", "shortcut"),
      emit
    );
    const styles = tv({
      base: "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_UiCommandShortcut = _sfc_main$6;
      _push(ssrRenderComponent(unref(ComboboxItem), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                if (_ctx.icon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: _ctx.icon,
                    class: "h-4 w-4"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(` ${ssrInterpolate(_ctx.text)} `);
              ssrRenderSlot(_ctx.$slots, "shortcut", {}, () => {
                if (_ctx.shortcut) {
                  _push2(ssrRenderComponent(_component_UiCommandShortcut, { shortcut: _ctx.shortcut }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                renderSlot(_ctx.$slots, "icon", {}, () => [
                  _ctx.icon ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: _ctx.icon,
                    class: "h-4 w-4"
                  }, null, 8, ["name"])) : createCommentVNode("", true)
                ]),
                createTextVNode(" " + toDisplayString(_ctx.text) + " ", 1),
                renderSlot(_ctx.$slots, "shortcut", {}, () => [
                  _ctx.shortcut ? (openBlock(), createBlock(_component_UiCommandShortcut, {
                    key: 0,
                    shortcut: _ctx.shortcut
                  }, null, 8, ["shortcut"])) : createCommentVNode("", true)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Item.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "-mx-1 h-px bg-border"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxSeparator), mergeProps({
        "as-child": _ctx.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Command/Separator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CommandSearch",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isOpen = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const router = useRouter();
    const closeCommandPalette = () => {
      isOpen.value = false;
      emit("close");
    };
    const handleSelect = (route) => {
      router.push(route);
      closeCommandPalette();
    };
    const items = computed(() => {
      return MENU_LIST.reduce((acc, menu) => {
        acc[menu.header] = menu.items.map((item) => ({
          label: item.name,
          icon: item.icon,
          perform: () => handleSelect(item.route),
          shortcut: item.shortcut
        }));
        return acc;
      }, {});
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCommand = _sfc_main$d;
      const _component_UiCommandInput = _sfc_main$b;
      const _component_UiButton = _sfc_main$q;
      const _component_Icon = __nuxt_component_1;
      const _component_UiCommandList = _sfc_main$a;
      const _component_UiCommandEmpty = _sfc_main$9;
      const _component_UiCommandGroup = _sfc_main$7;
      const _component_UiCommandItem = _sfc_main$5;
      const _component_UiCommandSeparator = _sfc_main$4;
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isOpen)) {
          _push2(`<div class="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50" data-v-f9cf00d9><div class="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8" data-v-f9cf00d9><div class="border-2 border-border rounded-lg overflow-hidden" data-v-f9cf00d9>`);
          _push2(ssrRenderComponent(_component_UiCommand, { class: "w-full shadow-lg bg-popover" }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<div class="relative border-b border-border" data-v-f9cf00d9${_scopeId}>`);
                _push3(ssrRenderComponent(_component_UiCommandInput, {
                  placeholder: "Type a command or search...",
                  class: "w-full pt-3 pb-3"
                }, null, _parent2, _scopeId));
                _push3(ssrRenderComponent(_component_UiButton, {
                  variant: "ghost",
                  size: "icon",
                  class: "absolute right-1 top-1/2 transform -translate-y-1/2 p-1",
                  onClick: closeCommandPalette
                }, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_Icon, {
                        name: "heroicons:x-mark",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "heroicons:x-mark",
                          class: "h-4 w-4"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push3(`</div>`);
                _push3(ssrRenderComponent(_component_UiCommandList, null, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_UiCommandEmpty, null, {
                        default: withCtx((_3, _push5, _parent4, _scopeId3) => {
                          if (_push5) {
                            _push5(`No results found.`);
                          } else {
                            return [
                              createTextVNode("No results found.")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push4(`<!--[-->`);
                      ssrRenderList(unref(items), (item, label, i) => {
                        _push4(`<!--[-->`);
                        _push4(ssrRenderComponent(_component_UiCommandGroup, { heading: label }, {
                          default: withCtx((_3, _push5, _parent4, _scopeId3) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(item, (child, k) => {
                                _push5(ssrRenderComponent(_component_UiCommandItem, {
                                  key: k,
                                  text: child.label,
                                  icon: child.icon,
                                  value: child.label,
                                  shortcut: child.shortcut,
                                  onSelect: ($event) => {
                                    var _a;
                                    (_a = child.perform) == null ? void 0 : _a.call(child);
                                    $event.preventDefault();
                                  }
                                }, null, _parent4, _scopeId3));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(item, (child, k) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: k,
                                    text: child.label,
                                    icon: child.icon,
                                    value: child.label,
                                    shortcut: child.shortcut,
                                    onSelect: ($event) => {
                                      var _a;
                                      (_a = child.perform) == null ? void 0 : _a.call(child);
                                      $event.preventDefault();
                                    }
                                  }, null, 8, ["text", "icon", "value", "shortcut", "onSelect"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push4(ssrRenderComponent(_component_UiCommandSeparator, { class: "last:hidden" }, null, _parent3, _scopeId2));
                        _push4(`<!--]-->`);
                      });
                      _push4(`<!--]-->`);
                    } else {
                      return [
                        createVNode(_component_UiCommandEmpty, null, {
                          default: withCtx(() => [
                            createTextVNode("No results found.")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, label, i) => {
                          return openBlock(), createBlock(Fragment, { key: i }, [
                            createVNode(_component_UiCommandGroup, { heading: label }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(item, (child, k) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: k,
                                    text: child.label,
                                    icon: child.icon,
                                    value: child.label,
                                    shortcut: child.shortcut,
                                    onSelect: ($event) => {
                                      var _a;
                                      (_a = child.perform) == null ? void 0 : _a.call(child);
                                      $event.preventDefault();
                                    }
                                  }, null, 8, ["text", "icon", "value", "shortcut", "onSelect"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["heading"]),
                            createVNode(_component_UiCommandSeparator, { class: "last:hidden" })
                          ], 64);
                        }), 128))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", { class: "relative border-b border-border" }, [
                    createVNode(_component_UiCommandInput, {
                      placeholder: "Type a command or search...",
                      class: "w-full pt-3 pb-3"
                    }),
                    createVNode(_component_UiButton, {
                      variant: "ghost",
                      size: "icon",
                      class: "absolute right-1 top-1/2 transform -translate-y-1/2 p-1",
                      onClick: closeCommandPalette
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "heroicons:x-mark",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UiCommandList, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandEmpty, null, {
                        default: withCtx(() => [
                          createTextVNode("No results found.")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, label, i) => {
                        return openBlock(), createBlock(Fragment, { key: i }, [
                          createVNode(_component_UiCommandGroup, { heading: label }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(item, (child, k) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: k,
                                  text: child.label,
                                  icon: child.icon,
                                  value: child.label,
                                  shortcut: child.shortcut,
                                  onSelect: ($event) => {
                                    var _a;
                                    (_a = child.perform) == null ? void 0 : _a.call(child);
                                    $event.preventDefault();
                                  }
                                }, null, 8, ["text", "icon", "value", "shortcut", "onSelect"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["heading"]),
                          createVNode(_component_UiCommandSeparator, { class: "last:hidden" })
                        ], 64);
                      }), 128))
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommandSearch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f9cf00d9"]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TopBar",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    const pages = FETCH_MENU_LIST_BY_HEADER("Pages");
    const colorMode = useColorMode();
    const isMobileNavOpen = ref(false);
    const isCommandPaletteVisible = ref(false);
    const isClient = ref(false);
    const setTheme = (val) => {
      colorMode.preference = val.value;
    };
    const currentIcon = computed(() => {
      var _a;
      return (_a = THEME_MODES.find((m) => m.value === (colorMode == null ? void 0 : colorMode.value))) == null ? void 0 : _a.icon;
    });
    const toggleMobileNav = () => {
      isMobileNavOpen.value = !isMobileNavOpen.value;
    };
    const { width } = useWindowSize();
    watch(width, () => {
      isMobileNavOpen.value = false;
    });
    const toggleCommandPalette = () => {
      isCommandPaletteVisible.value = !isCommandPaletteVisible.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiButton = _sfc_main$q;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiDropdownMenu = _sfc_main$o;
      const _component_UiDropdownMenuTrigger = _sfc_main$n;
      const _component_UiDropdownMenuContent = _sfc_main$l;
      const _component_UiDropdownMenuItem = _sfc_main$j;
      const _component_AppHeaderMobileBarMenu = _sfc_main$e;
      const _component_CommandSearch = __nuxt_component_8;
      _push(`<header${ssrRenderAttrs(mergeProps(unref(attrs), { class: "sticky top-0 z-30 border-b border-border/50 bg-transparent" }, _attrs))}><div class="container mx-auto flex h-14 items-center justify-between"><div class="flex items-center gap-10"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UiButton, {
        size: "icon-sm",
        variant: "outline",
        class: "h-9 w-9 lg:hidden bg-background/50 backdrop-blur-sm",
        onClick: toggleMobileNav
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(isMobileNavOpen) ? "heroicons:x-mark" : "heroicons:bars-3",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: unref(isMobileNavOpen) ? "heroicons:x-mark" : "heroicons:bars-3",
                class: "h-4 w-4"
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center justify-center w-9 h-9 border border-border/50 rounded-md text-sm font-bold transition-colors duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-background/50 backdrop-blur-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` DP `);
          } else {
            return [
              createTextVNode(" DP ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden md:flex flex-grow items-center justify-center gap-3"><!--[-->`);
      ssrRenderList((_a = unref(pages)) == null ? void 0 : _a.items, (item) => {
        _push(ssrRenderComponent(_component_UiButton, {
          variant: "ghost",
          to: item.route,
          class: "bg-background/50 backdrop-blur-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "h-4 w-4 lg:hidden"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(item.name)}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: item.icon,
                  class: "h-4 w-4 lg:hidden"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "h-9 w-9",
        variant: "ghost",
        size: "icon",
        onClick: toggleCommandPalette
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:keyboard-command-key",
              class: "h-[18px] w-[18px]"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "material-symbols:keyboard-command-key",
                class: "h-[18px] w-[18px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isClient)) {
        _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "h-9 w-9",
                      variant: "ghost",
                      size: "icon"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: unref(currentIcon) || "lucide:sun",
                            class: "h-[18px] w-[18px]"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: unref(currentIcon) || "lucide:sun",
                              class: "h-[18px] w-[18px]"
                            }, null, 8, ["name"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        class: "h-9 w-9",
                        variant: "ghost",
                        size: "icon"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: unref(currentIcon) || "lucide:sun",
                            class: "h-[18px] w-[18px]"
                          }, null, 8, ["name"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDropdownMenuContent, {
                align: "end",
                "side-offset": 5
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(THEME_MODES), (m, i) => {
                      _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                        key: i,
                        class: "cursor-pointer",
                        icon: m.icon,
                        title: m.title,
                        onClick: ($event) => setTheme(m)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(THEME_MODES), (m, i) => {
                        return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                          key: i,
                          class: "cursor-pointer",
                          icon: m.icon,
                          title: m.title,
                          onClick: ($event) => setTheme(m)
                        }, null, 8, ["icon", "title", "onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, {
                      class: "h-9 w-9",
                      variant: "ghost",
                      size: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: unref(currentIcon) || "lucide:sun",
                          class: "h-[18px] w-[18px]"
                        }, null, 8, ["name"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiDropdownMenuContent, {
                  align: "end",
                  "side-offset": 5
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(THEME_MODES), (m, i) => {
                      return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                        key: i,
                        class: "cursor-pointer",
                        icon: m.icon,
                        title: m.title,
                        onClick: ($event) => setTheme(m)
                      }, null, 8, ["icon", "title", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AppHeaderMobileBarMenu, {
        modelValue: unref(isMobileNavOpen),
        "onUpdate:modelValue": ($event) => isRef(isMobileNavOpen) ? isMobileNavOpen.value = $event : null,
        "menu-list": unref(pages),
        "force-closed": !unref(isMobileNavOpen)
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommandSearch, {
        modelValue: unref(isCommandPaletteVisible),
        "onUpdate:modelValue": ($event) => isRef(isCommandPaletteVisible) ? isCommandPaletteVisible.value = $event : null,
        onClose: ($event) => isCommandPaletteVisible.value = false
      }, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/header/TopBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = FOOTER_LINKS || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background/80 backdrop-blur-sm border-t border-border py-4 md:py-0.5" }, _attrs))} data-v-bf35174a><div class="container mx-auto flex flex-col items-center justify-between gap-1 md:gap-2 md:flex-row md:h-14" data-v-bf35174a><div class="flex flex-wrap justify-center items-center gap-1 w-full md:w-auto" data-v-bf35174a><span class="text-sm text-muted-foreground" data-v-bf35174a>Powered by:</span><div class="flex flex-wrap justify-center items-center" data-v-bf35174a><!--[-->`);
      ssrRenderList(unref(footerLinks).slice(0, 4), (link, i) => {
        _push(`<div class="flex items-center gap-1" data-v-bf35174a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.to,
          target: link.target,
          class: "font-medium text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (i < 3) {
          _push(`<span class="text-muted-foreground mx-2" data-v-bf35174a>\xB7</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><p class="text-sm text-muted-foreground text-center md:text-left" data-v-bf35174a> \xA9${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Don Puerto. All rights reserved. </p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bf35174a"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ParticlesBackground = _sfc_main$p;
  const _component_AppHeaderTopBar = _sfc_main$2;
  const _component_AppFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen bg-background text-foreground" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ParticlesBackground, { class: "fixed inset-0 pointer-events-none" }, null, _parent));
  _push(`<div class="relative z-10 flex flex-col min-h-screen">`);
  _push(ssrRenderComponent(_component_AppHeaderTopBar, null, null, _parent));
  _push(`<main class="flex-grow flex flex-col">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DN6iYInd.mjs.map
