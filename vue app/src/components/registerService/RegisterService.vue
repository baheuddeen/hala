<script>
import { get } from 'http';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    name: 'RegisterService',

    setup() {
        const formSubmited = ref(false);
        const carTypeSelector = ref(null);
        const carModelSelector = ref(null);
        const showModelSelector = ref(false);
        const inputName = ref('');
        const inputServiceType = ref('0');
        const inputMobile = ref('');
        const inputCarType = ref('0');
        const inputCarModel = ref('0');

        onMounted(() => {
            console.log('mounted');
            carTypeSelector.value.addEventListener('change', () => {
                if (carModelSelector.value) {
                    inputCarModel.value = '0';
                }
                if (carTypeSelector.value.value == '0') {
                    showModelSelector.value = false;
                    return;
                }
                showModelSelector.value = true;
            });
        });
        const serviceTypes = ref([
            {
                id: 1,
                name: 'صيانة',
            },
            {
                id: 2,
                name: 'مبيعات',
            },
        ])
        const carCategories = ref([
            {
                id: 10,
                name: 'تويوتا',
                models: [
                    {
                        id: 101,
                        name: 'كامري'
                    },
                    {
                        id: 102,
                        name: 'كورولا'
                    },
                    {
                        id: 103,
                        name: 'هايلكس'
                    },
                ]
            },
            {
                id: 11,
                name: 'لكزس',
                models: [
                    {
                        id: 111,
                        name: 'ES'
                    },
                    {
                        id: 112,
                        name: 'LS'
                    },
                    {
                        id: 113,
                        name: 'RX'
                    },
                ]
            },
        ]);

        const onSubmit = (e) => {
            e.preventDefault();
            let valid = true;
            const validateEmail = (email) => {
                return email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            };
            const fields = document.querySelectorAll('.form-field');
            fields.forEach(field => {
                if (!field.querySelector('input') && !field.querySelector('select')) return;
                console.log(field, field.querySelector('input')?.value, field.querySelector('select')?.value)
                console.log(!field.querySelector('input')?.value, (field.querySelector('select')?.value != "0"))

                if (
                    !field.querySelector('input')?.value &&
                    !(parseInt(field.querySelector('select')?.value))
                ) {
                    field.classList.add('error');
                    valid = false;
                    return;
                } else {
                    console.log(field.querySelector('input')?.value && field.querySelector('select')?.value);
                    field.classList.remove('error');
                }

                if (field.querySelector('input')?.name == 'email') {
                    if (!validateEmail(field.querySelector('input').value)) {
                        field.classList.add('error-valid-email');
                        valid = false;
                        return;
                    } else {
                        field.classList.remove('error-valid-email');
                    }
                }

                if (field.querySelector('.digits')) {
                    if (isNaN(field.querySelector('.digits').value)) {
                        field.classList.add('error-digits-only');
                        valid = false;
                        return;
                    } else {
                        field.classList.remove('error-digits-only');
                    }
                    if (field.querySelector('.digits').value.length != 10) {
                        field.classList.add('error-digits-length');
                        valid = false;
                        return;
                    } else {
                        field.classList.remove('error-digits-length');
                    }
                }
            });

            if (!valid) {
                return;
            }

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                user_name: inputName.value,
                service_type: serviceTypes.value.find(item => item.id == inputServiceType.value).name,
                phone: inputMobile.value,
                car_type: carCategories.value.find(item => item.id == inputCarType.value).name,
                car_model: carCategories.value.find(item => item.id == inputCarType.value).models.find(item => item.id == inputCarModel.value).name,
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("/api/service-request/create", requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    console.log(result);
                    formSubmited.value = true
                })
                .catch((error) => console.error(error));
        }
        return {
            carCategories,
            carTypeSelector,
            carModelSelector,
            showModelSelector,
            inputName,
            inputServiceType,
            inputMobile,
            inputCarType,
            inputCarModel,
            formSubmited,
            serviceTypes,
            onSubmit,
        }
    }
});

</script>


<template>
    <div class="wpb_wrapper" v-if="!formSubmited">
        <div class="layout_inner_content">

            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-lg-6 col-md-9 col-sm-10">

                        <div class="content_bk_page">

                            <div class="content_bk_form">

                                <form class="form_sty job-form">

                                    <div class="grp_txt_frm">

                                        <h3>طلب خدمة</h3>

                                        <p> املأ هذا النموذج السريع لطلب خدمة </p>

                                    </div>

                                    <div class="form-group">

                                        <h3 class="title_grp">1. الاسم</h3>
                                        <div class="form-field">
                                            <div class="frm_gp">

                                                <input type="text" v-model="inputName" class="form-control ff"
                                                    name="name" required="" placeholder="الاسم بالكامل">

                                            </div>
                                            <label>
                                                <span class="err-msg" style="display: none;">
                                                    <span>هذا الحقل مطلوب</span>
                                                </span>
                                            </label>
                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <h3 class="title_grp">2. نوع الخدمة</h3>


                                        <div class="form-field">
                                            <div class="frm_gp">

                                            <select v-model="inputServiceType"
                                                    class="form-control js-select marka0 ff select2-hidden-accessible"
                                                    name="marka0" required="" data-placeholder=" "
                                                    data-select2-id="select2-data-1-iku0" tabindex="-1"
                                                    aria-hidden="true">

                                                    <option value="0"> نوع الخدمة </option>
                                                    <option v-for="service in serviceTypes" :value="service.id">{{
                                                    service.name }}</option>
                                                </select>
                                            </div>  
                                            <label>
                                                <span class="err-msg" style="display: none;">
                                                    <span>هذا الحقل مطلوب</span>
                                                </span>
                                                
                                            </label>
                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <h3 class="title_grp">3. رقم الجوال </h3>

                                        <div class="form-field">

                                            <div class="frm_gp">

                                                <input type="text" v-model="inputMobile" id="mobile"
                                                    class="form-control ff digits" name="mobile" minlength="10"
                                                    maxlength="10" required="" placeholder="رقم الجوال">

                                            </div>
                                            <label>
                                                <span class="err-msg" style="display: none;">
                                                    <span>هذا الحقل مطلوب</span>
                                                </span>
                                                <span class="err-msg-digits" style="display: none;">
                                                    <span>ارقام فقط</span>
                                                </span>
                                                <span class="err-msg-length" style="display: none;">
                                                    <span>10 أرقام</span>
                                                </span>
                                            </label>
                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <h3 class="title_grp">4.  نوع المركبة</h3>



                                        <div class="form-field">
                                            <div class="frm_gp">

                                                <select ref="carTypeSelector" v-model="inputCarType" id="mark0"
                                                    class="form-control js-select marka0 ff select2-hidden-accessible"
                                                    name="marka0" required="" data-placeholder=" "
                                                    data-select2-id="select2-data-1-iku0" tabindex="-1"
                                                    aria-hidden="true">

                                                    <option value="0">حدد نوع مركبتك</option>


                                                    <option v-for="category in carCategories" :value="category.id">{{
                                                    category.name }}</option>

                                                </select>
                                            </div>
                                            <label>
                                                <span class="err-msg" style="display: none;">
                                                    <span>هذا الحقل مطلوب</span>
                                                </span>
                                            </label>
                                        </div>



                                        <div class="form-field">
                                            <div class="frm_gp" v-if="showModelSelector">

                                                <select ref="carModelSelector" v-model="inputCarModel"
                                                    class="form-control js-select marka1 ff select2-hidden-accessible"
                                                    name="marka1" required="" data-placeholder=" "
                                                    data-select2-id="select2-data-4-zik2" tabindex="-1"
                                                    aria-hidden="true">
                                                    <option value="0">حدد موديل مركبتك</option>

                                                    <option
                                                        v-for="model in carCategories.find(item => item.id == inputCarType).models"
                                                        :value="model.id">{{ model.name }}</option>

                                                </select>

                                            </div>
                                            <label>
                                                <span class="err-msg" style="display: none;">
                                                    <span>هذا الحقل مطلوب</span>
                                                </span>
                                            </label>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-end">

                                        <button type="submit" @click="onSubmit" class="btn btn_prim">
                                            <span class="send-btn"> ابدا الارسال </span>
                                            <span class="btn_icon">
                                                <svg class="arrow" enable-background="new 0 0 45 34" id="Layer_1"
                                                    version="1.1" viewBox="0 0 45 34" xml:space="preserve"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <polygon fill="#231F20"
                                                        points="19.626,31.705 7.712,20 45,20 45,15 7.712,15 19.626,3.006 16.798,0.273 -0.38,17.499   16.798,34.605 " />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="thank-you" v-else>
        <div>
            <h1>شكرا لك</h1>
            <h2>تم استلام طلبك بنجاح</h2>
        </div>
    </div>
</template>

<style scoped>
input,
select {
    padding-top: 0px !important;
}

.form-group h3.title_grp {
    color: black !important;
}

.error input,
.error-digits-only input,
.error-digits-length input,
.error-valid-email input,
.error select {
    border: 3px solid red !important;
}

.error .err-msg,
.error-valid-email .err-msg-valid-email,
.error-digits-only .err-msg-digits,
.error-digits-length .err-msg-length {
    color: red !important;
    display: block !important;
    opacity: 1 !important;
}

.form-group {
    opacity: 1 !important;
}

.form-group input {
    opacity: .6;
}

.arrow {
    width: 20px;
    height: 15px;
    display: block;
    margin: auto;
}

.thank-you {
    text-align: center;
    margin-top: 50px;
    padding: 100px;
    color: white;
    background-image: url('https://halaauto.com/wp-content/themes/hala-auto3/images/bg-banner-inner.jpg');
}
</style>