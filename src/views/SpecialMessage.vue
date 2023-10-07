<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="pt-5 text-light">Special Message:</h1>
      </div>
      <div class="col-lg-12">
        <p class="fs-5 text-center ml-5">
          These are messages that are sent to the developer directly, without
          any private sites or companies, only through this site
        </p>
      </div>
    </div>
  </div>
  <div class="container pb-5">
    <form class="text-primary p-5" ref="form" @submit.prevent="sendEmail">
      <div class="form-floating mb-3">
        <input
          name="Name"
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Full name</label>
      </div>
      <div class="form-floating">
        <input
          name="Email"
          type="Email"
          class="form-control"
          id="floatingPassword"
          placeholder="Email"
        />
        <label for="floatingPassword">Email</label>
      </div>
      <div class="form-floating mt-4">
        <textarea
          id="Message"
          class="form-control"
          placeholder="Message"
          name="message"
        ></textarea>
        <label for="floatingTextarea">Message</label>
      </div>
      <button
        class="form-control btn btn-primary mt-4 mb-0 fs-3"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        send
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          fill="currentColor"
          class="bi bi-envelope-arrow-up-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697Zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"
          />
          <path
            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z"
          />
        </svg>
      </button>
    </form>
    <!------------------------------------    message to user after send the messag  ----------------------->
  </div>
  <div
    class="modal fade"
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-primary fs-4">message was sent</div>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModalToggle2"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
            Modal 2
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-primary fs-5">
          <span class="d-block"
            >I will read your message as soon as possible</span
          >
          <span class="d-block">Thank you very much.</span>
          <span class="d-block">Sufyan</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";
export default {
  name: "SpecialMessage",
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_c97wq93",
          "template_7gmbgn8",
          this.$refs.form,
          "MaYpbgnw2canUk_Fj"
        );
    },
  },
};
</script>
<style scoped>
form {
  margin-left: 0 25%;
  backdrop-filter: blur(40px) saturate(200%);
  border-radius: 30px;
}
</style>
