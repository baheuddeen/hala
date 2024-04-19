<template>
        <div class="container header_lp">
            <img :src="'/assets/logo_banner.png'" class="banner_page_inner_img_mini"/>
        </div>
</template>

<style>
.header_lp {
    border: solid #e5e5e5 1px;
    position: fixed;
    top: 0px;
    z-index: 100;
    width: 100%;
    background-color: white;
    max-width: unset !important;
}
.banner_page_inner_img_mini {
    max-height: 50px;
    display: block;
    margin-left: auto;
}
</style>