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
        onMounted(async () => {
            console.log('LandingPage component is mounted');
            const url = new URL(document.URL);
            const utm_source = url.searchParams.get("utm_source") || "direct";
            var requestOptions = {
                method: 'GET',
            };

            let country = "not-set";
            let city = "not-set";
            try { 
                const geoInf = await (await fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=8243e8158a9d45328449573dc66d8088", requestOptions)).json();
                country = geoInf?.country?.name || 'null';
                city = geoInf?.city?.name || 'null';
            } catch(e) {
                console.log(e);
            }
           
            fetch("/api/init-source/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'init_source': utm_source,
                    country,
                    city,
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