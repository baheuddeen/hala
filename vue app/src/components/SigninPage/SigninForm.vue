
<script lang="ts">
import { defineComponent } from 'vue';
import SigninForm from './SigninFormFacet';

export default defineComponent({

  components: {
  },

  emits: ['my-event'],

  setup(_props, { emit }) {
    const signinForm = new SigninForm();
    return signinForm.setup(emit);
  },

});

</script>

<template>
      <form @submit.prevent="onsubmit" style="direction: ltr;">

          <div>
            <label for="email">Email</label>
            <input type="text" name="email" v-model="email"  required placeholder="Email" />
          </div>
          
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" required placeholder="Password" />
          </div>
          
          <button type="submit">Login</button>
      </form>

      <span>
        <small v-if="failedToLogIn" class="p-error" id="text-error">{{ errorMessage }}</small>
      </span>
</template>

<style>
label {
  margin: 10px;
  padding: 10px;
  width: 80px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

input {
  margin: 10px;
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

button {
  margin: 10px;
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
</style>