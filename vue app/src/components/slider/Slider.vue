<script>
import { defineComponent, ref } from 'vue';
import Carousel from 'primevue/carousel';

export default defineComponent({
    name: 'Slider',
    components: {
        Carousel,
    },
    setup() {
        const cars = ref([
            {
                id: '1',
                name: 'Car one',
                image: '/assets/slider_1.jpg',
                imageMobile: '/assets/slider_1_mob.jpg'
            },
            {
                id: '2',
                name: 'Car two',
                image: '/assets/slider_2.jpg',
                imageMobile: '/assets/slider_2_mob.jpg'
            },
            {
                id: '3',
                name: 'Car three',
                image: '/assets/slider_3.jpg',
                imageMobile: '/assets/slider_3_mob.jpg'
            },
        ]);

        return {
            cars,
        }
    }
});
</script>

<template>
    <section class="slider-primevue">
        <Carousel :value="cars" :numVisible="1" :numScroll="1" :autoplayInterval="5000" :nextButtonProps="{hidden: true}" :prevButtonProps="{hidden: true}" >
            <template #item="slotProps">
                <div class="row">
                    <div class="col-12">
                        <div>
                            <picture>
                                <source type="image/webp" :srcset="slotProps.data.imageMobile" media="(max-width: 780px)">
                                <source type="image/webp" :srcset="slotProps.data.image" media="(min-width: 780px)">
                                <img width="100%" :src="slotProps.data.image" :alt="slotProps.data.name">
                            </picture>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </section>
</template>

<style scoped>
    .slider-primevue {
        direction: ltr;
        margin-top: 45px;
    }

    .slider-primevue img {
        height: 500px;
    }

    @media screen and (max-width:767px) {
        .slider-primevue img {
        height: 400px;
    }
    }
</style>