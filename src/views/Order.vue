<template>
  <br>
  <div class="px-4 py-16 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <!-- <pattern id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern> -->
            </defs>
            <rect fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)" width="52" height="24"></rect>
          </svg>
          <span class="relative">𝙏𝙝𝙖𝙣𝙠𝙮𝙤𝙪</span>
        </span>
       𝙛𝙤𝙧 𝙔𝙤𝙪𝙧 𝙊𝙧𝙙𝙚𝙧
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        𝘊𝘰𝘥𝘦 𝘖𝘳𝘥𝘦𝘳 : {{ getOrder.code }}
      </p>
      <br>
      <p class="font-semibold text-gray-600 md:text-xs italic">
        A copy your order summary has been sent to {{ getOrder.user.email }}
      </p>
    </div>
    <div class="h-9 w-max-full relative mt-5">
      <span class="text-gray-700 font-bold text-2xl mt-5">𝙊𝙧𝙙𝙚𝙧 𝙎𝙪𝙢𝙢𝙖𝙧𝙮</span>
    </div>
    <br>
    <div class="grid grid-rows-4 grid-flow-col gap-1 mt-6 max-w-sm mb-8 sm:mx-auto lg:max-w-full">
      <div>
        <span class="font-bold">𝘊𝘰𝘥𝘦 𝘖𝘳𝘥𝘦𝘳 : </span>
        <dd class="text-x font-semibold">{{ getOrder.code }}</dd>
      </div>
      <div>
        <span class="font-bold">𝘕𝘢𝘮𝘦 : </span>
        <dd class="text-x font-semibold">{{ getOrder.user.name }}</dd>
      </div>
      <div>
        <span class="font-bold">𝘌𝘮𝘢𝘪𝘭 : </span>
        <dd class="text-x font-semibold">{{ getOrder.user.email }}</dd>
      </div>
      <div>
        <span class="font-bold">𝘚𝘩𝘪𝘱𝘱𝘪𝘯𝘨 𝘢𝘥𝘥𝘳𝘦𝘴𝘴 : </span>
        <dd class="text-x font-semibold">{{ getOrder.shipping_address.address }},
                  {{ getOrder.shipping_address.city }},
                  {{ getOrder.shipping_address.state }},
                  {{ getOrder.shipping_address.country }},
                  {{ getOrder.shipping_address.postal_code }}
                  <br>
                  <dd class="text-base font-semibold">𝘗𝘩𝘰𝘯𝘦 : 
                 <dd class="font-extralight">{{ getOrder.shipping_address.phone }}</dd></dd></dd>
      </div>
      <div>
        <span class="font-bold">𝘛𝘰𝘵𝘢𝘭 𝘰𝘳𝘥𝘦𝘳 𝘮𝘰𝘶𝘯𝘵 : </span>
        <dd class="text-x font-semibold">{{ getOrder.orders[0].grand_total.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</dd>
      </div>
      <div>
        <span class="font-bold">𝘗𝘢𝘺𝘮𝘦𝘯𝘵 𝘮𝘦𝘵𝘩𝘰𝘥 : </span>
        <dd class="text-x font-semibold">{{ getOrder.orders[0].payment_type }}</dd>
      </div>
      <div>
        <span class="font-bold">𝘋𝘦𝘭𝘪𝘷𝘦𝘳𝘺 𝘵𝘺𝘱𝘦 : </span>
        <dd class="text-x font-semibold">{{ getOrder.orders[0].delivery_type }}</dd>
      </div>
      <div>
        <span class="font-bold">𝘉𝘪𝘭𝘭𝘪𝘯𝘨 𝘢𝘥𝘥𝘳𝘦𝘴𝘴 : </span>
        <dd class="text-x font-semibold">{{ getOrder.shipping_address.address }},
                  {{ getOrder.shipping_address.city }},
                  {{ getOrder.shipping_address.state }},
                  {{ getOrder.shipping_address.country }},
                  {{ getOrder.shipping_address.postal_code }}</dd>
      </div>
    </div>
    <br>
    <p class="text-gray-500 dark:text-gray-400"></p>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-400 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>
<p class="text-gray-500 dark:text-gray-400"></p>
    <div class="h-9 w-max-full relative mt-5">
      <span class="text-gray-700 font-bold text-2xl mt-5">𝙊𝙧𝙙𝙚𝙧 𝘿𝙚𝙩𝙖𝙞𝙡𝙨</span>
    </div>
    <br>
    <div class="relative overflow-x-auto pt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-pink-300 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">𝙉𝙤.</th>
              <th scope="col" class="px-6 py-3">𝙋𝙧𝙤𝙙𝙪𝙘𝙩</th>
              <th scope="col" class="px-6 py-3">𝙌𝙪𝙖𝙣𝙩𝙞𝙩𝙮</th>
              <th scope="col" class="px-6 py-3">𝙋𝙧𝙞𝙘𝙚</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-pink-100 border-b dark:bg-gray-800 dark:border-gray-700" v-for="(order, index) in getOrder.orders[0].products.data">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
              {{ index + 1 }}
              </th>
              <td class="px-6 py-4">{{ order.name }}</td>
              <td class="px-6 py-4">{{ order.quantity }}</td>
              <td class="px-6 py-4">{{ order.total }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">𝙏𝙤𝙩𝙖𝙡 𝙨𝙥𝙚𝙣𝙙𝙞𝙣𝙜</p>
              <p class="font-semibold text-gray-900">$ {{ getOrder.grand_total }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">𝙎𝙚𝙧𝙫𝙞𝙘𝙚 𝙛𝙚𝙚</p>
              <p class="font-semibold text-gray-900">
                $ {{ (getOrder.orders[0].products.data.length) * 10000 }}
              </p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">𝙏𝙤𝙩𝙖𝙡 𝙥𝙧𝙞𝙘𝙚 :</p>
            <p class="text-2xl font-semibold text-gray-900">
              $ {{(getOrder.grand_total) + (getOrder.orders[0].products.data.length * 10000) }}
            </p>
          </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['orderCode'],
  computed: {
    ...mapGetters('order', ['getOrder']),
  },
  created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
};
</script> 