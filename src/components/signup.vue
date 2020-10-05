<template>

<!-- freelancer signup -->

  <div class="container">
    <form class="form-signup">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">You don't </h1>
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

<!-- company signup -->

  <!-- ////signUp Company/// -->
  <!-- <div > -->
  <!-- <div id="companyS">
    <Form>
        <div>
          <Input
            name="CompanyName"
            type="text"
            placeholder="Company Name"
          />
          <br />
          <Input
            name="Email"
            type="email"
            placeholder="Email"
          />
          <br />
          <Input
            name="Password"
            type="password"
            placeholder="Password"
          />
          <br />
          <Input
            name="Cpassword"
            type="password"
            placeholder="Confirm password"
          />
          <br />
          <Button color="primary" type="submit" >Submit</Button>
        </div>
      </Form>
      </div> -->
  <!-- ////signUp Freelancer/// -->
  <!-- <div id="FreelancerS">
    <Form>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <br />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <br />
          <Input
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <Input
            type="password"
            name="Cpassword"
            placeholder="Confirm password"
          />
          <br />
          <Button color="primary" type="submit"  >
            Submit
          </Button>
      </Form> -->
  <!-- </div> -->
  <!-- </div> -->
</template>
<script>
export default {
  name: "signup",
};
</script>
<style scoped>
.container{
  width:27%;
  }
</style>
