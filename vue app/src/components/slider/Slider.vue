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
            },
            {
                id: '2',
                name: 'Car two',
                image: '/assets/slider_2.jpg',
            },
            {
                id: '3',
                name: 'Car three',
                image: '/assets/slider_3.jpg',
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
        <Carousel :value="cars" :numVisible="1" :numScroll="1" :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="row border-1 surface-border border-round m-2  p-3">
                    <div class="col-12">
                        <div class="relative mx-auto">
                            <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round" />
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
    }
</style>