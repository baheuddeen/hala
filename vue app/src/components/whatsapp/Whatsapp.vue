<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Whatsapp',
    setup() {
        return {
            whatsappNumber: '+966593198999',
        }
    }
});
</script>

<template>
  <section>
    <a v-tooltip.top="{
        value: 'تواصل معنا',
        showDelay: 100,
        hideDelay: 100,
        pt: {
            arrow: {
                style: {
                    borderBottomColor: 'black'
                }
            },
            text: 'white'
            
        }
        }" :href="'https://wa.me/' + whatsappNumber" target="_blank" class="whatsapp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="whatsapp" width="30" />
    </a>
  </section>
</template>

<style>
.whatsapp {
    position: fixed;
    bottom: 20px;
    left: 30px;
    z-index: 1000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: white;
}
</style>