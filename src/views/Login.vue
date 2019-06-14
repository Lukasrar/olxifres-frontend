<template>
    <div class="login">
		<div class="login-screen">
			<div class="app-title">
				<h1>LOGIN</h1>
			</div>
			<form class="login-form" @submit.prevent="fazerLogin">
				<div class="control-group">
					<label for="login-eamil" class="label-form">E-mail</label>
					<input v-model="email" type="email" class="login-field" placeholder="Informe seu e-mail">
				</div>
				<div class="control-group">
					<label for="login-pass" class="label-form">Senha</label>
					<input v-model="senha" type="password" class="login-field" placeholder="Informe sua senha">
				</div>
				<!-- <input type="submit" class="btn" value="Login"> -->
				<input type="submit" class="btn" value="Login">
				<div class="links">
					<button class="btn login-link" @click="navegarTelaCadastro">Não possui conta?</button>
					<button class="btn login-link" @click="navegarEsqueciMinhaSenha">Esqueci minha senha</button>
				</div>
			</form>
		</div>
        <div class="overlay"></div>
	</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        fazerLogin() {
            // 
            console.log('fazendo login....')
        },
        navegarTelaCadastro() {
            this.$router.push({name: 'cadastrar'})
        },
        navegarEsqueciMinhaSenha() {
            this.$router.push({name: 'esqueci-senha'})
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

*:focus {
    outline: none;
}


.overlay{
    z-index: -1;
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
}

.login-screen {
    background-image: url('../assets/img/bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    font-family: Arial;
    overflow-x: hidden;
    z-index: 1;
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    margin-left:-10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.app-title {
    margin-top: 15px;
    text-align: center;
    color:white;
}

.login-form {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.label-form {
    text-align: left !important;
    color: #ffffff;
    margin-bottom: 5px;
}

.control-group {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

input {
    text-align: left;
    background-color: #ECF0F1;
    border: 2px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 200;
    padding: 10px 5px;
    width: 320px;
    transition: border .5s;
}

input::placeholder{
    color: #078a06;
    font-weight: 500;
}

input:focus {
    border: 2px solid #078a06;
    box-shadow: none;
}

.btn {
    text-align: center;
    border: 2px solid transparent;
    background: transparent;
    border: 2px solid #f6fdf6;
    color: #ffffff;
    font-size: 16px;
    line-height: 25px;
    padding: 10px 0;
    text-decoration: none;
    text-shadow: none;
    border-radius: 3px;
    box-shadow: none;
    transition: 0.25s;
    display: block;
    width: 320px;
    margin: 2px auto;
    cursor: pointer;
}

.btn:hover {
    background-color: #078a06;
}

.links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.login-link {
    font-size: 12px;
    color: #ffffff;
    display: block;
    margin: 12px;
}
</style>
