<template>
    <header id="header">
        <div class="container">
            <div class="top_header d-flex align-items-center">
                <div class="logo_site">
                    <a href="https://halaauto.com"><img
                            src="https://halaauto.com/wp-content/themes/hala-auto3/images/logo.svg" alt=""></a>
                </div>
                <div class="top_head_left mr-auto  d-flex align-items-center">
                    <ul class="top_menu clearfix">
                        <li><a href="https://halaauto.com/%d8%a7%d9%84%d8%a7%d8%ae%d8%a8%d8%a7%d8%b1/"><span
                                    class="mn_icon"><img
                                        src="https://halaauto.com/wp-content/themes/hala-auto3/images/news.svg"></span>الأخبار</a>
                        </li>
                        <li><a href="https://halaauto.com/%d8%a7%d9%84%d8%aa%d9%88%d8%b8%d9%8a%d9%81/"><span
                                    class="mn_icon"><img
                                        src="https://halaauto.com/wp-content/themes/hala-auto3/images/career.svg"></span>التوظيف</a>
                        </li>
                        <li><a href="#search"><span class="mn_icon"><img
                                        src="https://halaauto.com/wp-content/themes/hala-auto3/images/zoom.svg"></span>بحث</a>
                        </li>
                    </ul>
                    <div class="lang_btn  ">

                        <a href="https://halaauto.com/en/about-us/">English</a>




                    </div>
                    <div class="search_mobile">
                        <a href="#search" class="btn_search_mb"><img
                                src="https://halaauto.com/wp-content/themes/hala-auto3/images/zoom.svg" alt=""></a>
                    </div>
                    <a class="menu-trigger ml-auto">
                        <span>Menu</span>
                    </a>
                    <ul class="head_social clearfix">
                        <li><a href="https://www.facebook.com/halaauto/?locale=ar_AR" target="_blank">
                            <img :src="'/assets/fb.png'" alt="youtube" width="20" height="20"
                                style="background-size: cover; width: 14px; height: 20px;">
                        </a></li>
                        <li><a href="https://twitter.com/halaauto?lang=ar" target="_blank">
                            <img :src="'/assets/twitter.png'" alt="youtube" width="20" height="20"
                                style="background-size: cover; width: 20px; height: 20px;">
                        </a></li>
                        <li><a href="https://www.instagram.com/halaauto" target="_blank">
                            <img :src="'/assets/instgram.png'" alt="youtube" width="20" height="20"
                                style="background-size: cover; width: 20px; height: 20px;">
                        </a></li>
                        <li><a href="https://www.youtube.com/@halaauto94" target="_blank">
                            <img :src="'/assets/youtube.png'" alt="youtube" width="20" height="20"
                                style="background-size: cover; width: 20px; height: 20px;">
                            </a></li>
                    </ul>
                </div>
            </div>
            <div class="bottom_header">
                <ul id="menu-main-ar-1" class="main_menu clearfix">
                    <li
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home nav-item menu-item-97">
                        <a title="الرئيسية" href="https://halaauto.com/">الرئيسية</a></li>
                    <li
                        class="prod-menu menu-item menu-item-type-taxonomy menu-item-object-brand nav-item menu-item-106 dropdown">
                        <a title="تويوتا" href="https://halaauto.com/brand/%d8%aa%d9%88%d9%8a%d9%88%d8%aa%d8%a7/"
                            data-toggle="dropdown" aria-haspopup="true">تويوتا</a>
                        <script>
							$("#myTab3953").on("click", ".nav-item a", function(){
                                $(this).closest(".dropdown").addClass("dontClose");
                            }) </script>
                    </li>
                    <li
                        class="prod-menu menu-item menu-item-type-taxonomy menu-item-object-brand nav-item menu-item-107 dropdown">
                        <a title="لكزس" href="https://halaauto.com/brand/%d9%84%d9%83%d8%b2%d8%b3/"
                            data-toggle="dropdown" aria-haspopup="true">لكزس</a>
                        <script>
							$("#myTab5141").on("click", ".nav-item a", function(){
                                $(this).closest(".dropdown").addClass("dontClose");
                            }) </script>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-100"><a
                            title="طلب شراء"
                            href="https://halaauto.com/%d8%b7%d9%84%d8%a8-%d8%b4%d8%b1%d8%a7%d8%a1/">طلب شراء</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-101"><a
                            title="العروض" href="https://halaauto.com/%d8%a7%d9%84%d8%b9%d8%b1%d9%88%d8%b6/">العروض</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-189"><a
                            title="قطع غيار"
                            href="https://halaauto.com/%d9%82%d8%b7%d8%b9-%d8%a7%d9%84%d8%ba%d9%8a%d8%a7%d8%b1/">قطع
                            غيار</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-103"><a
                            title="حجز موعد صيانة"
                            href="https://halaauto.com/%d8%ad%d8%ac%d8%b2-%d9%85%d9%88%d8%b9%d8%af-%d8%b5%d9%8a%d8%a7%d9%86%d8%a9/">حجز
                            موعد صيانة</a></li>
                    <li
                        class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-29 nav-item menu-item-104">
                        <a title="من نحن" href="https://halaauto.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86/">من نحن</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-105"><a
                            title="اتصل بنا"
                            href="https://halaauto.com/%d8%a7%d8%aa%d8%b5%d9%84-%d8%a8%d9%86%d8%a7/">اتصل بنا</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>