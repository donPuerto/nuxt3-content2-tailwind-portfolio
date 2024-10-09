import { useSSRContext, defineComponent, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, ref, isRef, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'radix-vue';
import { tv } from 'tailwind-variants';
import { _ as _sfc_main$7 } from './Input-B4kK5GdE.mjs';
import { u as useVModel } from './index-B8ehBWn-.mjs';
import { _ as _sfc_main$8 } from './Button-DDe4Hotg.mjs';
import { b as _export_sfc, h as useToast, i as useLoadingIndicator, g as useNuxtApp, _ as __nuxt_component_1 } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-disqus';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "flex flex-col space-y-1.5 p-6 [&+*]:pt-0"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class }),
        as: _ctx.as,
        "as-child": _ctx.asChild
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Card/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" },
    title: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "text-xl font-semibold leading-none tracking-tight"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class }),
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.title)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.title), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Card/Title.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Description",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    description: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "text-sm text-muted-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class }),
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.description)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Card/Description.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    content: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "p-6 [&+*]:pt-0"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.content)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.content), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Card/Content.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    title: { default: void 0 },
    description: { default: void 0 },
    content: { default: void 0 },
    class: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "rounded-lg border bg-card text-card-foreground shadow-sm"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardHeader = _sfc_main$6;
      const _component_UiCardTitle = _sfc_main$5;
      const _component_UiCardDescription = _sfc_main$4;
      const _component_UiCardContent = _sfc_main$3;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                _push2(ssrRenderComponent(_component_UiCardHeader, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                        if (_ctx.title || _ctx.$slots.title) {
                          _push3(ssrRenderComponent(_component_UiCardTitle, { title: _ctx.title }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                        if (_ctx.description || _ctx.$slots.description) {
                          _push3(ssrRenderComponent(_component_UiCardDescription, { description: _ctx.description }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          _ctx.title || _ctx.$slots.title ? (openBlock(), createBlock(_component_UiCardTitle, {
                            key: 0,
                            title: _ctx.title
                          }, null, 8, ["title"])) : createCommentVNode("", true)
                        ]),
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          _ctx.description || _ctx.$slots.description ? (openBlock(), createBlock(_component_UiCardDescription, {
                            key: 0,
                            description: _ctx.description
                          }, null, 8, ["description"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              if (_ctx.content || _ctx.$slots.content) {
                ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                  _push2(ssrRenderComponent(_component_UiCardContent, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a;
                      if (_push3) {
                        _push3(`<div${_scopeId2}>${(_a = _ctx.content) != null ? _a : ""}</div>`);
                      } else {
                        return [
                          createVNode("div", { innerHTML: _ctx.content }, null, 8, ["innerHTML"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createVNode(_component_UiCardHeader, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        _ctx.title || _ctx.$slots.title ? (openBlock(), createBlock(_component_UiCardTitle, {
                          key: 0,
                          title: _ctx.title
                        }, null, 8, ["title"])) : createCommentVNode("", true)
                      ]),
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        _ctx.description || _ctx.$slots.description ? (openBlock(), createBlock(_component_UiCardDescription, {
                          key: 0,
                          description: _ctx.description
                        }, null, 8, ["description"])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 3
                  })
                ]),
                _ctx.content || _ctx.$slots.content ? renderSlot(_ctx.$slots, "content", { key: 0 }, () => [
                  createVNode(_component_UiCardContent, null, {
                    default: withCtx(() => [
                      createVNode("div", { innerHTML: _ctx.content }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  })
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Card/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: {},
    name: {},
    id: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    rows: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const localModel = useVModel(props, "modelValue", emits);
    const styles = tv({
      base: "form-textarea flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:border-input focus:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps(props, {
        class: unref(styles)({ class: props.class })
      }, _attrs), "textarea")}>${ssrInterpolate(unref(localModel))}</textarea>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Textarea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/DonPuerto.png");
const useMail = () => useNuxtApp().$mail;
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { toast } = useToast();
    const { start, finish } = useLoadingIndicator();
    const mail = useMail();
    const sending = ref(false);
    const contactInfo = [
      { icon: "mdi:email", title: "Email", content: "don.puerto.1003@gmail.com" },
      { icon: "mdi:phone", title: "Phone", content: "(+63) 976 093 8376" },
      { icon: "mdi:whatsapp", title: "WhatsApp", content: "(+63) 976 093 8376" },
      { icon: "mdi:skype", title: "Skype", content: "king.james.empire" },
      { icon: "mdi:map-marker", title: "Address", content: "Catalunan Grande, Davao City, Philippines" }
    ];
    const { meta, handleSubmit, defineField, errors } = useForm({
      validationSchema: yup.object({
        firstName: yup.string().min(2).required().label("First Name"),
        lastName: yup.string().min(2).required().label("Last Name"),
        email: yup.string().email("Please enter a valid email address").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address").required().label("Email"),
        phone: yup.string().matches(/^(\+?\d{1,4})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Please enter a valid phone number").label("Phone").required(),
        message: yup.string().min(20).required().label("Message")
      })
    });
    const [firstName, firstAttrs] = defineField("firstName");
    const [lastName, lastAttrs] = defineField("lastName");
    const [email, emailAttrs] = defineField("email");
    const [phone, phoneAttrs] = defineField("phone");
    const [message, messageAttrs] = defineField("message");
    const onSubmit = handleSubmit(async (values, { resetForm }) => {
      const { firstName: firstName2, lastName: lastName2, email: email2, phone: phone2, message: message2 } = values;
      sending.value = true;
      start();
      try {
        await mail.send({
          from: email2,
          subject: "Contact Form Submission",
          html: `<h1>New Contact Form Submission</h1>
       <p><strong>Name:</strong> ${firstName2} ${lastName2}</p>
       <p><strong>Email:</strong> ${email2}</p>
       <p><strong>Phone:</strong> ${phone2}</p>
       <p><strong>Message:</strong> ${message2}</p>`
        });
        toast({
          title: "Email Sent Successfully",
          description: "We will get back to you within 24 hours.",
          variant: "success",
          style: "background-color: var(--success-bg); color: var(--success-text); border-color: var(--success-border);"
        });
        resetForm();
      } catch (error) {
        toast({
          title: "An Error Occurred",
          description: error.message || "Failed to send email. Please try again later.",
          variant: "error",
          style: "background-color: var(--error-bg); color: var(--error-text); border-color: var(--error-border);"
        });
      } finally {
        sending.value = false;
        finish();
      }
    });
    const imageError = ref(false);
    const handleImageError = () => {
      imageError.value = true;
    };
    const resetImageError = () => {
      imageError.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$2;
      const _component_UiCardContent = _sfc_main$3;
      const _component_UiInput = _sfc_main$7;
      const _component_UiTextarea = _sfc_main$1;
      const _component_UiButton = _sfc_main$8;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-theme-bg-secondary-color min-h-screen p-4" }, _attrs))} data-v-486dc35d><div class="max-w-6xl mx-auto bg-theme-bg-primary-color rounded-lg overflow-hidden" data-v-486dc35d><div class="flex flex-col md:flex-row" data-v-486dc35d><div class="md:w-1/2 p-4 flex" data-v-486dc35d>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full flex flex-col" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-2xl font-bold" data-v-486dc35d${_scopeId}> Get in Touch </h2><h3 class="text-xl font-semibold" data-v-486dc35d${_scopeId}> Let&#39;s Chat, Contact Me </h3>`);
          } else {
            return [
              createVNode("h2", { class: "text-2xl font-bold" }, " Get in Touch "),
              createVNode("h3", { class: "text-xl font-semibold" }, " Let's Chat, Contact Me ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base text-muted-foreground mb-4" data-v-486dc35d${_scopeId}> Have any questions or feedback? I&#39;m here to help. Send me a message, I&#39;ll get back to you within 24 hours. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-base text-muted-foreground mb-4" }, " Have any questions or feedback? I'm here to help. Send me a message, I'll get back to you within 24 hours. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, {
              as: "form",
              class: "flex flex-col gap-4 flex-grow",
              onSubmit: unref(onSubmit)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 w-full items-start gap-4" data-v-486dc35d${_scopeId2}><div class="flex flex-col" data-v-486dc35d${_scopeId2}><label for="firstName" class="mb-1 text-sm font-medium" data-v-486dc35d${_scopeId2}>First Name</label>`);
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps({ id: "firstName" }, unref(firstAttrs), {
                    modelValue: unref(firstName),
                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                    placeholder: "First name",
                    class: "text-base"
                  }), null, _parent3, _scopeId2));
                  _push3(`<span class="${ssrRenderClass([{ "h-5": unref(errors).firstName, "h-0": !unref(errors).firstName }, "text-red-500 text-sm mt-1"])}" data-v-486dc35d${_scopeId2}>${ssrInterpolate(unref(errors).firstName)}</span></div><div class="flex flex-col" data-v-486dc35d${_scopeId2}><label for="lastName" class="mb-1 text-sm font-medium" data-v-486dc35d${_scopeId2}>Last Name</label>`);
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps({ id: "lastName" }, unref(lastAttrs), {
                    modelValue: unref(lastName),
                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                    placeholder: "Last name",
                    class: "text-base"
                  }), null, _parent3, _scopeId2));
                  _push3(`<span class="${ssrRenderClass([{ "h-5": unref(errors).lastName, "h-0": !unref(errors).lastName }, "text-red-500 text-sm mt-1"])}" data-v-486dc35d${_scopeId2}>${ssrInterpolate(unref(errors).lastName)}</span></div></div><div class="flex flex-col" data-v-486dc35d${_scopeId2}><label for="email" class="mb-1 text-sm font-medium" data-v-486dc35d${_scopeId2}>Email</label>`);
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps({ id: "email" }, unref(emailAttrs), {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    placeholder: "Email",
                    class: "text-base"
                  }), null, _parent3, _scopeId2));
                  _push3(`<span class="${ssrRenderClass([{ "h-5": unref(errors).email, "h-0": !unref(errors).email }, "text-red-500 text-sm mt-1"])}" data-v-486dc35d${_scopeId2}>${ssrInterpolate(unref(errors).email)}</span></div><div class="flex flex-col" data-v-486dc35d${_scopeId2}><label for="phone" class="mb-1 text-sm font-medium" data-v-486dc35d${_scopeId2}>Phone</label>`);
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps({ id: "phone" }, unref(phoneAttrs), {
                    modelValue: unref(phone),
                    "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                    placeholder: "Phone",
                    class: "text-base"
                  }), null, _parent3, _scopeId2));
                  _push3(`<span class="${ssrRenderClass([{ "h-5": unref(errors).phone, "h-0": !unref(errors).phone }, "text-red-500 text-sm mt-1"])}" data-v-486dc35d${_scopeId2}>${ssrInterpolate(unref(errors).phone)}</span></div><div class="flex flex-col" data-v-486dc35d${_scopeId2}><label for="message" class="mb-1 text-sm font-medium" data-v-486dc35d${_scopeId2}>Message</label>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, mergeProps({ id: "message" }, unref(messageAttrs), {
                    modelValue: unref(message),
                    "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                    rows: 4,
                    placeholder: "Message",
                    class: "text-base"
                  }), null, _parent3, _scopeId2));
                  _push3(`<span class="${ssrRenderClass([{ "h-5": unref(errors).message, "h-0": !unref(errors).message }, "text-red-500 text-sm mt-1"])}" data-v-486dc35d${_scopeId2}>${ssrInterpolate(unref(errors).message)}</span></div><div data-v-486dc35d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: !unref(meta).touched,
                    loading: sending.value,
                    type: "submit",
                    class: "w-full",
                    variant: "ghost"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (sending.value) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:loader-2",
                            class: "animate-spin"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(` ${ssrInterpolate(sending.value ? "Sending..." : "Send Message")}`);
                      } else {
                        return [
                          sending.value ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "lucide:loader-2",
                            class: "animate-spin"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(sending.value ? "Sending..." : "Send Message"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 w-full items-start gap-4" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "firstName",
                          class: "mb-1 text-sm font-medium"
                        }, "First Name"),
                        createVNode(_component_UiInput, mergeProps({ id: "firstName" }, unref(firstAttrs), {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          placeholder: "First name",
                          class: "text-base"
                        }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", {
                          class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).firstName, "h-0": !unref(errors).firstName }]
                        }, toDisplayString(unref(errors).firstName), 3)
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "lastName",
                          class: "mb-1 text-sm font-medium"
                        }, "Last Name"),
                        createVNode(_component_UiInput, mergeProps({ id: "lastName" }, unref(lastAttrs), {
                          modelValue: unref(lastName),
                          "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                          placeholder: "Last name",
                          class: "text-base"
                        }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", {
                          class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).lastName, "h-0": !unref(errors).lastName }]
                        }, toDisplayString(unref(errors).lastName), 3)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "email",
                        class: "mb-1 text-sm font-medium"
                      }, "Email"),
                      createVNode(_component_UiInput, mergeProps({ id: "email" }, unref(emailAttrs), {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        placeholder: "Email",
                        class: "text-base"
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", {
                        class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).email, "h-0": !unref(errors).email }]
                      }, toDisplayString(unref(errors).email), 3)
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "phone",
                        class: "mb-1 text-sm font-medium"
                      }, "Phone"),
                      createVNode(_component_UiInput, mergeProps({ id: "phone" }, unref(phoneAttrs), {
                        modelValue: unref(phone),
                        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                        placeholder: "Phone",
                        class: "text-base"
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", {
                        class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).phone, "h-0": !unref(errors).phone }]
                      }, toDisplayString(unref(errors).phone), 3)
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "message",
                        class: "mb-1 text-sm font-medium"
                      }, "Message"),
                      createVNode(_component_UiTextarea, mergeProps({ id: "message" }, unref(messageAttrs), {
                        modelValue: unref(message),
                        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                        rows: 4,
                        placeholder: "Message",
                        class: "text-base"
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", {
                        class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).message, "h-0": !unref(errors).message }]
                      }, toDisplayString(unref(errors).message), 3)
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiButton, {
                        disabled: !unref(meta).touched,
                        loading: sending.value,
                        type: "submit",
                        class: "w-full",
                        variant: "ghost"
                      }, {
                        default: withCtx(() => [
                          sending.value ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "lucide:loader-2",
                            class: "animate-spin"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(sending.value ? "Sending..." : "Send Message"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, {
                as: "form",
                class: "flex flex-col gap-4 flex-grow",
                onSubmit: unref(onSubmit)
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 w-full items-start gap-4" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "firstName",
                        class: "mb-1 text-sm font-medium"
                      }, "First Name"),
                      createVNode(_component_UiInput, mergeProps({ id: "firstName" }, unref(firstAttrs), {
                        modelValue: unref(firstName),
                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                        placeholder: "First name",
                        class: "text-base"
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", {
                        class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).firstName, "h-0": !unref(errors).firstName }]
                      }, toDisplayString(unref(errors).firstName), 3)
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "lastName",
                        class: "mb-1 text-sm font-medium"
                      }, "Last Name"),
                      createVNode(_component_UiInput, mergeProps({ id: "lastName" }, unref(lastAttrs), {
                        modelValue: unref(lastName),
                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                        placeholder: "Last name",
                        class: "text-base"
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", {
                        class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).lastName, "h-0": !unref(errors).lastName }]
                      }, toDisplayString(unref(errors).lastName), 3)
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("label", {
                      for: "email",
                      class: "mb-1 text-sm font-medium"
                    }, "Email"),
                    createVNode(_component_UiInput, mergeProps({ id: "email" }, unref(emailAttrs), {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      placeholder: "Email",
                      class: "text-base"
                    }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", {
                      class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).email, "h-0": !unref(errors).email }]
                    }, toDisplayString(unref(errors).email), 3)
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("label", {
                      for: "phone",
                      class: "mb-1 text-sm font-medium"
                    }, "Phone"),
                    createVNode(_component_UiInput, mergeProps({ id: "phone" }, unref(phoneAttrs), {
                      modelValue: unref(phone),
                      "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                      placeholder: "Phone",
                      class: "text-base"
                    }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", {
                      class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).phone, "h-0": !unref(errors).phone }]
                    }, toDisplayString(unref(errors).phone), 3)
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("label", {
                      for: "message",
                      class: "mb-1 text-sm font-medium"
                    }, "Message"),
                    createVNode(_component_UiTextarea, mergeProps({ id: "message" }, unref(messageAttrs), {
                      modelValue: unref(message),
                      "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                      rows: 4,
                      placeholder: "Message",
                      class: "text-base"
                    }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", {
                      class: ["text-red-500 text-sm mt-1", { "h-5": unref(errors).message, "h-0": !unref(errors).message }]
                    }, toDisplayString(unref(errors).message), 3)
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_UiButton, {
                      disabled: !unref(meta).touched,
                      loading: sending.value,
                      type: "submit",
                      class: "w-full",
                      variant: "ghost"
                    }, {
                      default: withCtx(() => [
                        sending.value ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:loader-2",
                          class: "animate-spin"
                        })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(sending.value ? "Sending..." : "Send Message"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled", "loading"])
                  ])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:w-1/2 p-4 flex" data-v-486dc35d>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full flex flex-col overflow-hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full h-64 overflow-hidden rounded-t-lg" data-v-486dc35d${_scopeId}>`);
            if (!imageError.value) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Contact Person" class="w-full h-full object-cover object-center" data-v-486dc35d${_scopeId}>`);
            } else {
              _push2(`<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500" data-v-486dc35d${_scopeId}><span data-v-486dc35d${_scopeId}>No Preview Available</span></div>`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "flex-grow bg-theme-bg-secondary-color" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-2 bg-theme-bg-tertiary-color text-theme-text-inverse p-4 rounded-lg" data-v-486dc35d${_scopeId2}><!--[-->`);
                  ssrRenderList(contactInfo, (item) => {
                    _push3(`<div class="flex items-center space-x-2" data-v-486dc35d${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: item.icon,
                      class: "text-lg flex-shrink-0"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div data-v-486dc35d${_scopeId2}><p class="text-sm font-medium" data-v-486dc35d${_scopeId2}>${ssrInterpolate(item.title)}</p><p class="text-base text-muted-foreground" data-v-486dc35d${_scopeId2}>${ssrInterpolate(item.content)}</p></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-2 bg-theme-bg-tertiary-color text-theme-text-inverse p-4 rounded-lg" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(contactInfo, (item) => {
                        return createVNode("div", {
                          key: item.title,
                          class: "flex items-center space-x-2"
                        }, [
                          createVNode(_component_Icon, {
                            name: item.icon,
                            class: "text-lg flex-shrink-0"
                          }, null, 8, ["name"]),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(item.title), 1),
                            createVNode("p", { class: "text-base text-muted-foreground" }, toDisplayString(item.content), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "relative w-full h-64 overflow-hidden rounded-t-lg" }, [
                !imageError.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: _imports_0,
                  alt: "Contact Person",
                  class: "w-full h-full object-cover object-center",
                  onError: handleImageError,
                  onLoad: resetImageError
                }, null, 32)) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full h-full flex items-center justify-center bg-gray-200 text-gray-500",
                  onClick: resetImageError
                }, [
                  createVNode("span", null, "No Preview Available")
                ]))
              ]),
              createVNode(_component_UiCardContent, { class: "flex-grow bg-theme-bg-secondary-color" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-2 bg-theme-bg-tertiary-color text-theme-text-inverse p-4 rounded-lg" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(contactInfo, (item) => {
                      return createVNode("div", {
                        key: item.title,
                        class: "flex items-center space-x-2"
                      }, [
                        createVNode(_component_Icon, {
                          name: item.icon,
                          class: "text-lg flex-shrink-0"
                        }, null, 8, ["name"]),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-sm font-medium" }, toDisplayString(item.title), 1),
                          createVNode("p", { class: "text-base text-muted-foreground" }, toDisplayString(item.content), 1)
                        ])
                      ]);
                    }), 64))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-486dc35d"]]);

export { contact as default };
//# sourceMappingURL=contact-BAtDhvkV.mjs.map
