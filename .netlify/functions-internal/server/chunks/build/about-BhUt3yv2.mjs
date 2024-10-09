import { _ as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './client-only-BwBfOuAV.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardSpotlight",
  __ssrInlineRender: true,
  setup(__props) {
    const divRef = ref(null);
    ref(false);
    const position = reactive({ x: 0, y: 0 });
    const opacity = ref(0);
    const rotate = ref({ x: 0, y: 0 });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "divRef",
        ref: divRef,
        class: "relative flex items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 shadow-2xl w-full h-full transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform",
        style: {
          transform: `perspective(1000px) rotateX(${rotate.value.x}deg) rotateY(${rotate.value.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"
        }
      }, _attrs))}><div class="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style="${ssrRenderStyle({
        opacity: opacity.value,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`
      })}"></div><p class="text-sm text-gray-200 text-center p-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`Card Content`);
      }, _push, _parent);
      _push(`</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardSpotlight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("Don Puerto");
    const nickname = ref("Don");
    const intro = ref("I architect innovative digital solutions that bridge cutting-edge technology with real-world impact.");
    const background = ref(`Armed with a BS in Computer Engineering and over a decade of hands-on experience, I've established myself as a versatile and forward-thinking software developer. My journey through the digital landscape has been marked by continuous learning, adaptation, and a relentless pursuit of excellence.

Over the years, I've honed my expertise in a diverse array of technologies, including Vue, Nuxt, Next, React Native, Flutter, Supabase, Laravel, and Adonis. This comprehensive skill set allows me to craft bespoke, cross-platform solutions that seamlessly blend functionality with user-centric design.

Throughout my career, I've tackled complex challenges head-on, transforming abstract concepts into robust, high-performance applications. My approach to software development is characterized by:

A commitment to clean, maintainable code;
A focus on scalable and future-proof architecture;
An eye for intuitive user experiences;
A drive for continuous improvement and innovation

What sets me apart is not just my technical proficiency, but my ability to see the bigger picture. I don't just write code; I create digital ecosystems that drive business growth, enhance user engagement, and push the boundaries of what's possible in the digital realm.`);
    const techPhilosophy = ref("In the ever-evolving world of technology, I believe in the power of adaptive learning and strategic innovation. My philosophy is to stay ahead of the curve, not just by keeping up with the latest trends, but by anticipating future needs and preparing for them. This forward-thinking approach ensures that the solutions I develop are not only cutting-edge today but will remain relevant and effective well into the future.");
    const hobbiesText = ref("While code is my professional medium, I find spiritual renewal and inspiration in God's creation. When I'm not developing digital solutions, you'll find me tending to the earth through farming, marveling at His majesty atop mountain peaks, or cycling through scenic landscapes He's crafted. These activities not only rejuvenate my spirit but also remind me of the greater purpose behind my work \u2013 to use technology as a means to glorify God and serve others.");
    const interests = ref([
      "Farming",
      "Mountain Climbing",
      "Biking",
      "Spiritual Rejuvenation"
    ]);
    const closingText = ref("In the vast realm of technology, I see a divine opportunity to positively impact our world. My mission, guided by faith, is to harness this potential to create innovative solutions that not only address today's challenges but also pave the way for a brighter, more connected future. Whether I'm navigating the complexities of a coding problem or scaling a mountain peak, I approach each task with the same spirit of devotion, excellence, and gratitude for the abilities God has bestowed upon me.");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Icon = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 sm:px-6 lg:px-8 max-w-[912px]" }, _attrs))}><div class="bg-background bg-opacity-80 p-8 rounded-lg"><h1 class="text-xl font-bold my-4 text-foreground text-center flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:user",
        class: "h-6 w-6 text-primary mr-2"
      }, null, _parent));
      _push(` About Me </h1><p class="text-xl mb-6 text-foreground text-center"> Greetings! I&#39;m ${ssrInterpolate(name.value)}, though ${ssrInterpolate(nickname.value)} works just fine \u{1F44B}. <span class="underline decoration-primary">${ssrInterpolate(intro.value)}</span></p>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<p class="mb-6 text-foreground text-justify">${(_a = background.value.replace(/\n\n/g, "<br><br>")) != null ? _a : ""}</p><p class="mb-6 text-foreground text-justify">${(_b = techPhilosophy.value) != null ? _b : ""}</p><p class="mb-6 text-foreground text-justify">${(_c = hobbiesText.value) != null ? _c : ""}</p><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6"><!--[-->`);
      ssrRenderList(interests.value, (interest) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: interest,
          class: "aspect-[3/1]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(interest)}`);
            } else {
              return [
                createTextVNode(toDisplayString(interest), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><p class="text-muted-foreground text-justify">${(_d = closingText.value) != null ? _d : ""}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BhUt3yv2.mjs.map
