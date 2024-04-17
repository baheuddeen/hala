<script>
import { defineComponent, onMounted } from 'vue';
import HalaHeader from './header/Header.vue';
import PageBanner from './pageBanner/PageBanner.vue';
import Slider from './slider/Slider.vue';
import RegisterService from './registerService/RegisterService.vue';
import AboutUs from './aboutUs/AboutUs.vue';
import Whatsapp from './whatsapp/Whatsapp.vue';
import HalaFooter from './footer/Footer.vue';

export default defineComponent({
    name: 'LandingPage',
   components: {
        HalaHeader,
        PageBanner,
        Slider,
        RegisterService,
        AboutUs,
        Whatsapp,
        HalaFooter,
   },
   setup() {
        onMounted(() => {
            console.log('LandingPage component is mounted');
            const url = new URL(document.URL);
            const utm_source = url.searchParams.get("utm_source") || "direct";
            fetch("/api/init-source/create", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                'init_source': utm_source
                }),
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.error("Error:", error);
            });
        });
       return {
       };
   },
});
</script>

<template>
    <div class='main-wrapper'>
        <PageBanner />
        <Slider />
        <RegisterService />
        <AboutUs />
        <Whatsapp />
    </div>
</template>