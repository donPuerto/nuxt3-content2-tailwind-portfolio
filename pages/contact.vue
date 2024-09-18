<script setup>
import { ref } from 'vue';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { useToast } from '@/composables/useToast';

const { toast } = useToast();
const { start, finish } = useLoadingIndicator();
const mail = useMail();

const sending = ref(false);

const contactInfo = [
  { icon: 'mdi:email', title: 'Email', content: 'don.puerto.1003@gmail.com' },
  { icon: 'mdi:phone', title: 'Phone', content: '(+63) 976 093 8376' },
  { icon: 'mdi:whatsapp', title: 'WhatsApp', content: '(+63) 976 093 8376' },
  { icon: 'mdi:skype', title: 'Skype', content: 'king.james.empire' },
  { icon: 'mdi:map-marker', title: 'Address', content: 'Catalunan Grande, Davao City, Philippines' },
];

const { meta, handleSubmit, defineField, errors } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().min(2).required().label('First Name'),
    lastName: yup.string().min(2).required().label('Last Name'),
    email: yup.string().email('Please enter a valid email address').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address').required().label('Email'),
    phone: yup.string().matches(/^(\+?\d{1,4})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Please enter a valid phone number').label('Phone').required(),
    message: yup.string().min(20).required().label('Message'),
  }),
});

const [firstName, firstAttrs] = defineField('firstName');
const [lastName, lastAttrs] = defineField('lastName');
const [email, emailAttrs] = defineField('email');
const [phone, phoneAttrs] = defineField('phone');
const [message, messageAttrs] = defineField('message');

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  const { firstName, lastName, email, phone, message } = values;
  sending.value = true;
  start();

  try {
    await mail.send({
      from: email,
      subject: 'Contact Form Submission',
      html: `<h1>New Contact Form Submission</h1>
       <p><strong>Name:</strong> ${firstName} ${lastName}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Message:</strong> ${message}</p>`,
    });

    toast({
      title: 'Email Sent Successfully',
      description: 'We will get back to you within 24 hours.',
      variant: 'success',
      style: 'background-color: var(--success-bg); color: var(--success-text); border-color: var(--success-border);',
    });

    resetForm();
  }
  catch (error) {
    toast({
      title: 'An Error Occurred',
      description: error.message || 'Failed to send email. Please try again later.',
      variant: 'error',
      style: 'background-color: var(--error-bg); color: var(--error-text); border-color: var(--error-border);',
    });
  }
  finally {
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

onMounted(() => {
  resetImageError();
});
</script>

<template>
  <div class="bg-theme-bg-secondary-color min-h-screen p-4">
    <div class="max-w-6xl mx-auto bg-theme-bg-primary-color rounded-lg overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <!-- Left side: Contact Form -->
        <div class="md:w-1/2 p-4 flex">
          <UiCard class="w-full flex flex-col">
            <template #title>
              <h2 class="text-2xl font-bold">
                Get in Touch
              </h2>
              <h3 class="text-xl font-semibold">
                Let's Chat, Contact Me
              </h3>
            </template>
            <template #description>
              <p class="text-base text-muted-foreground mb-4">
                Have any questions or feedback? I'm here to help. Send me a message, I'll get back to you within 24 hours.
              </p>
            </template>
            <template #content>
              <UiCardContent
                as="form"
                class="flex flex-col gap-4 flex-grow"
                @submit="onSubmit"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 w-full items-start gap-4">
                  <div class="flex flex-col">
                    <label
                      for="firstName"
                      class="mb-1 text-sm font-medium"
                    >First Name</label>
                    <UiInput
                      id="firstName"
                      v-bind="firstAttrs"
                      v-model="firstName"
                      placeholder="First name"
                      class="text-base"
                    />
                    <span
                      class="text-red-500 text-sm mt-1"
                      :class="{ 'h-5': errors.firstName, 'h-0': !errors.firstName }"
                    >{{ errors.firstName }}</span>
                  </div>

                  <div class="flex flex-col">
                    <label
                      for="lastName"
                      class="mb-1 text-sm font-medium"
                    >Last Name</label>
                    <UiInput
                      id="lastName"
                      v-bind="lastAttrs"
                      v-model="lastName"
                      placeholder="Last name"
                      class="text-base"
                    />
                    <span
                      class="text-red-500 text-sm mt-1"
                      :class="{ 'h-5': errors.lastName, 'h-0': !errors.lastName }"
                    >{{ errors.lastName }}</span>
                  </div>
                </div>

                <div class="flex flex-col">
                  <label
                    for="email"
                    class="mb-1 text-sm font-medium"
                  >Email</label>
                  <UiInput
                    id="email"
                    v-bind="emailAttrs"
                    v-model="email"
                    placeholder="Email"
                    class="text-base"
                  />
                  <span
                    class="text-red-500 text-sm mt-1"
                    :class="{ 'h-5': errors.email, 'h-0': !errors.email }"
                  >{{ errors.email }}</span>
                </div>

                <div class="flex flex-col">
                  <label
                    for="phone"
                    class="mb-1 text-sm font-medium"
                  >Phone</label>
                  <UiInput
                    id="phone"
                    v-bind="phoneAttrs"
                    v-model="phone"
                    placeholder="Phone"
                    class="text-base"
                  />
                  <span
                    class="text-red-500 text-sm mt-1"
                    :class="{ 'h-5': errors.phone, 'h-0': !errors.phone }"
                  >{{ errors.phone }}</span>
                </div>

                <div class="flex flex-col">
                  <label
                    for="message"
                    class="mb-1 text-sm font-medium"
                  >Message</label>
                  <UiTextarea
                    id="message"
                    v-bind="messageAttrs"
                    v-model="message"
                    :rows="4"
                    placeholder="Message"
                    class="text-base"
                  />
                  <span
                    class="text-red-500 text-sm mt-1"
                    :class="{ 'h-5': errors.message, 'h-0': !errors.message }"
                  >{{ errors.message }}</span>
                </div>
                <div>
                  <UiButton
                    :disabled="!meta.touched"
                    :loading="sending"
                    type="submit"
                    class="w-full"
                    variant="ghost"
                  >
                    <Icon
                      v-if="sending"
                      name="lucide:loader-2"
                      class="animate-spin"
                    />
                    {{ sending ? 'Sending...' : 'Send Message' }}
                  </UiButton>
                </div>
              </UiCardContent>
            </template>
          </UiCard>
        </div>
        <!-- Right side: Image and Contact Info -->
        <div class="md:w-1/2 p-4 flex">
          <UiCard class="w-full flex flex-col overflow-hidden">
            <div class="relative w-full h-64 overflow-hidden rounded-t-lg">
              <img
                v-if="!imageError"
                src="/images/DonPuerto.png"
                alt="Contact Person"
                class="w-full h-full object-cover object-center"
                @error="handleImageError"
                @load="resetImageError"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500"
                @click="resetImageError"
              >
                <span>No Preview Available</span>
              </div>
            </div>
            <UiCardContent class="flex-grow bg-theme-bg-secondary-color">
              <div class="space-y-2 bg-theme-bg-tertiary-color text-theme-text-inverse p-4 rounded-lg">
                <div
                  v-for="item in contactInfo"
                  :key="item.title"
                  class="flex items-center space-x-2"
                >
                  <Icon
                    :name="item.icon"
                    class="text-lg flex-shrink-0"
                  />
                  <div>
                    <p class="text-sm font-medium">
                      {{ item.title }}
                    </p>
                    <p class="text-base text-muted-foreground">
                      {{ item.content }}
                    </p>
                  </div>
                </div>
              </div>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
