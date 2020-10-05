<template>
  <!-- ===========================================  Freelancer signup  =========================================== -->

  <div class="container">
    <div div v-if="userSignup">
      <form class="form-signup">
        <div class="text-center mb-4">
          <h1 class="h3 mb-3 font-weight-normal">
            You don't have account? create one. It's free
          </h1>

          <button
            id="userSignup"
            type="button"
            class="btn btn-outline-success"
            @click="signupuser"
          >
            Freelancer
          </button>
          <button
            id="companySignup"
            type="button"
            class="btn btn-outline-success"
            @click="signupcompany"
          >
            Company
          </button>
        <label id="userMsg" for="label-name">Sign up as a Freelancer</label>
        </div>

        <label for="label-name">Your name</label>
        <div class="form-label-group">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your name"
            required
            autofocus
          />
        </div>

        <label for="label-email">Your Email</label>
        <div class="form-label-group">
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Your Email"
            required
            autofocus
          />
        </div>

        <label for="label-password">Password</label>
        <div class="form-label-group">
          <input
            type="password"
            id="label-password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <label for="label-password">Confirm password</label>
        <div class="form-label-group">
          <input
            type="password"
            id="label-password"
            class="form-control"
            placeholder="Confirme password"
            required
          />
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>

        <button class="btn btn-lg btn-success btn-block" type="submit">
          Sign Up
        </button>
      </form>
    </div>

    <!-- ===========================================  company signup  =========================================== -->
    
    <div v-if="comapnysignup">
      <form class="comapnysignup">
        <div class="text-center mb-4">
          <h1 class="h3 mb-3 font-weight-normal">
            You don't have account? create one. It's free
          </h1>

          <button
            id="userSignup"
            type="button"
            class="btn btn-outline-success"
            @click="signupuser"
          >
            Freelancer
          </button>
          <button
            id="companySignup"
            type="button"
            class="btn btn-outline-success"
            @click="signupcompany"
          >
            Company
          </button>
        <label id ="companyMsg" for="label-name">Sign up as a Company</label>

        </div>

        <label for="label-name">Company name</label>
        <div class="form-label-group">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Company name"
            required
            autofocus
          />
        </div>

        <label for="label-email">Company email</label>
        <div class="form-label-group">
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Your Company email"
            required
            autofocus
          />
        </div>

        <label for="label-password">Password</label>
        <div class="form-label-group">
          <input
            type="password"
            id="label-password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <label for="label-password">Confirm password</label>
        <div class="form-label-group">
          <input
            type="password"
            id="label-password"
            class="form-control"
            placeholder="Confirme password"
            required
          />
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>

        <button class="btn btn-lg btn-success btn-block" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      comapnysignup: false,
      userSignup: true,
    };
  },
  methods: {
    signupuser() {
      console.log("w");
      this.comapnysignup = false;
      this.userSignup = true;
    },
    signupcompany() {
      console.log("w");
      this.comapnysignup = true;
      this.userSignup = false;
    },
  },
};
</script>

<style scoped>

.container{
  border:1px solid ;
  border-radius: 5%;
  position: relative;
  top:50px;
  left: 22%;
}

#userSignup {
  margin: 10px;
}

#companySignup {
  margin: 10px;
}

.container {
  width: 380px;
}

#companyMsg{
  font-size:30px;
}

#userMsg{
  font-size:30px;
}
</style>
