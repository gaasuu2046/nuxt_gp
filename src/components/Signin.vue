<template>
  <div class="signin">
    <h2>Sign in</h2>
  <input type="text" placeholder="Username" v-model="email">
  <input type="password" placeholder="Password" v-model="password">
  <button @click="signIn">Signin</button>
  <p>You don't have an account ?
      <router-link to="/signup">create account new!!</router-link>
  </p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
        localStorage.setItem('jwt', res.user.qa)
        this.$router.push('/')
      }, err => {
        alert(err.message)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>
