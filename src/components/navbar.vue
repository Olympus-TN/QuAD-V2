<template>

<nav id="navbar" class="navbar navbar-expand-lg navbar-light" :class="navbar">
  <a id="logo" class="navbar-brand" href="#">Quad</a>
  <button class="navbar-toggler" type="button" data-toggle="Collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a id="about" class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a id="about" class="nav-link" href="#">About us <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item active">
        <a id="about" class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="email" placeholder="Email">
      <input class="form-control mr-sm-2" type="password" placeholder="Password">
      <button  id ="btn" class="btn btn-primary"  type="submit" data-toggle="collapse" >Log in</button>
    </form>
  </div>
</nav>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style scoped>
#about{
    color: white;
    font-size: 20px;
}

#logo{
    color: white;
    font-size: 34px;
}
</style>