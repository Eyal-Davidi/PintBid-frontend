<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <h3 class="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Log in to PintBid
                  </h3>
                  <Form @submit="handleLogin" :validation-schema="schema">
                    <div class="form-group">
                      <label for="username">Username</label>
                      <Field name="username" type="text" class="form-control" />
                      <ErrorMessage name="username" class="error-feedback" />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <Field name="password" type="password" class="form-control" />
                      <ErrorMessage name="password" class="error-feedback" />
                    </div>

                    <div class="form-group">
                      <button class="btn btn-primary btn-block" :disabled="loading">
                        <span
                          v-show="loading"
                          class="spinner-border spinner-border-sm"
                        ></span>
                        <span>Login</span>
                      </button>
                    </div>

                    <div class="form-group">
                      <div v-if="message" class="alert alert-danger" role="alert">
                        {{ message }}
                      </div>
                    </div>
                  </Form>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex order-1 order-lg-2">
                  <img
                    src="../assets/pics/pintbidlogo.svg"
                    class="img-fluid"
                    alt="Logo PintBid Plaftorm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import User from "../models/user";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      user: new User("", ""),
      loading: false,
      message: "",
      schema,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/home");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
img {
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
h3 {
  font-weight: bold;
  font-style: normal;
  color: rgb(102, 90, 102);
}
</style>
