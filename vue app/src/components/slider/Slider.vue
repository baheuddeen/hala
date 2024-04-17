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
                description: 'Product Description',
                image: 'https://halaauto.com/wp-content/uploads/2022/11/crown-done-7-1024x551.png',
            },
            {
                id: '2',
                name: 'Car two',
                description: 'Product Description',
                image: 'https://halaauto.com/wp-content/uploads/2022/11/crown-done-7-1024x551.png',
            },
            {
                id: '3',
                name: 'Car three',
                description: 'Product Description',
                image: 'https://halaauto.com/wp-content/uploads/2022/11/crown-done-7-1024x551.png',
            },
            {
                id: '4',
                name: 'Car four',
                description: 'Product Description',
                image: 'https://halaauto.com/wp-content/uploads/2022/11/crown-done-7-1024x551.png',
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
                    <div class="col-md-6 mb-3">
                        <div class="relative mx-auto">
                            <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round" />
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 font-medium">
                        <h1>{{ slotProps.data.name }}</h1>
                        <p>{{ slotProps.data.description }}</p>
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