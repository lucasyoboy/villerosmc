<script>
    import { enhance } from "$app/forms";
    import { notifications } from '$lib/stores';
    import { Icon } from "svelte-materialdesign-icons"; 
    import { browser } from "$app/environment";

    export let form;

    $: if (form?.error) notifications.danger(form?.error_msg, 3000);
    $: if (form?.message) notifications.info(form?.message_text, 3000);

    //functions
    function nav_back() {
        if (browser) window.history.back();
    }

</script>
<div class="w-full h-screen bg-mine-shaft-700 bg-cover bg-center" style="background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/Images/home.webp)">
    <a href="#!" on:click={nav_back} class=" absolute p-4 flex items-center justify-center flex-col text-blaze-orange-400">
      <Icon name="arrow-left-bold-circle-outline" class="w-12 h-12" />
      <span class="text-md font-mediumbold bg-opacity-70 px-2 rounded-md uppercase">Volver</span>
    </a>
    <div class="h-full flex items-center justify-center">
      <div class="mx-5 flex items-center justify-center flex-col">
          <div class="bg-mine-shaft-950 p-4 w-full md:w-2/3 flex flex-col items-center rounded-t-md text-gray-300" >
            <img alt="logo" class="w-4/6 sm:w-1/2 md:w-3/6 p-4" src="/Icons/logo-text.svg" />
              <input id="tab-login" type="radio" name="tabs" class="peer/tab-login opacity-0 absolute" hidden/>
              <input id="tab-register" type="radio" name="tabs" class="peer/tab-register opacity-0 absolute" hidden checked/>
              <input id="tab-password" type="radio" name="tabs" class="peer/tab-password opacity-0 absolute" hidden/>
              <div class=" hidden peer-checked/tab-login:block w-full">
                <form class="w-full md:px-10 text-left" action="?/login" method="POST" use:enhance>
                  <label for="username" class=" text-lg">Nombre de Usuario</label>
                  <input class="w-full mb-2 p-2 rounded-md bg-mine-shaft-700" type="text" id="username" name="username" />
                  <label for="password" class="text-lg">Contraseña</label>
                  <input class="w-full p-2 rounded-md bg-mine-shaft-700" type="password" id="password" name="password" />
                  <button type="submit" class="mt-4 w-full p-2 bg-blaze-orange-500 rounded-md hover:bg-blaze-orange-400">&nbsp; Iniciar sesión</button>
                  <div class="w-full flex justify-between">
                    <input id="tab-register" type="radio" name="tabs" class="peer/tab-register opacity-0 absolute" />
                    <label for="tab-register" class="text-md text-blaze-orange-700 hover:text-blaze-orange-500 mt-2 cursor-pointer">
                      Registrarse
                    </label>
                    <input id="tab-password" type="radio" name="tabs" class="peer/tab-password opacity-0 absolute" />
                    <label for="tab-password" class="text-md text-blaze-orange-700 hover:text-blaze-orange-500 mt-2 cursor-pointer">
                      Restablecer Contraseña
                    </label>
                  </div>
                </form>
              </div>
              <div class=" hidden peer-checked/tab-register:block w-full">
                <form class="w-full md:px-10 text-left" action="?/register" method="POST" use:enhance>
                  <label for="username" class=" text-lg">Nombre de Usuario</label>
                  <input class="w-full mb-2 p-2 rounded-md bg-mine-shaft-700" type="text" id="username" name="username" required/>
                  <label for="email" class=" text-lg">Email</label>
                  <input class="w-full mb-2 p-2 rounded-md bg-mine-shaft-700" type="email" id="email" name="email" required/>
                  <label for="password" class="text-lg">Contraseña</label>
                  <input class="w-full mb-2  p-2 rounded-md bg-mine-shaft-700" type="password" id="password" name="password" required/>
                  <label for="repeat-password" class="text-lg">Repetir Contraseña</label>
                  <input class="w-full p-2 rounded-md bg-mine-shaft-700" type="password" id="repeat-password" name="passwordConfirm" required/>
                
                  <button type="submit" class="mt-4 w-full p-2 bg-blaze-orange-500 rounded-md hover:bg-blaze-orange-400">&nbsp; Registrarse</button>
                  <div class="w-full flex justify-between">
                    <input id="tab-login" type="radio" name="tabs" class="peer/tab-login opacity-0 absolute" checked />
                    <label for="tab-login" class="text-md text-blaze-orange-700 hover:text-blaze-orange-500 mt-2 cursor-pointer">
                      Iniciar sesión
                    </label>
                    <input id="tab-password" type="radio" name="tabs" class="peer/tab-password opacity-0 absolute" />
                    <label for="tab-password" class="text-md text-blaze-orange-700 hover:text-blaze-orange-500 mt-2 cursor-pointer">
                      Restablecer Contraseña
                    </label>
                  </div>
                </form>
              </div>
              <div class=" hidden peer-checked/tab-password:block w-full">
                <form class="w-full md:px-10 text-left" action="?/reset" method="POST" use:enhance>
                  <label for="email" class="text-lg">Email</label>
                  <input class="w-full p-2 rounded-md bg-mine-shaft-700" type="email" id="email" name="email" />
                
                  <button type="submit" class="mt-4 w-full p-2 bg-blaze-orange-500 rounded-md hover:bg-blaze-orange-400">&nbsp; Enviar</button>
                  <div class="w-full flex justify-between">
                    <input id="tab-login" type="radio" name="tabs" class="peer/tab-login opacity-0 absolute" checked/>
                    <label for="tab-login" class="text-md text-blaze-orange-700 hover:text-blaze-orange-500 mt-2 cursor-pointer">
                      Iniciar sesión
                    </label>
                    <input id="tab-register" type="radio" name="tabs" class="peer/tab-register opacity-0 absolute"/>
                    <label for="tab-register" class="text-md text-blaze-orange-700 hover:text-blaze-orange-500 mt-2 cursor-pointer">
                      Registrarse
                    </label>
                  </div>
                </form>
              </div>
          </div>
          <div class="bg-mine-shaft-950 p-4 w-full md:w-2/3 flex flex-col items-center mt-2 rounded-b-md text-gray-300" >
            <span class="text-center">La cuenta no tiene relación con la cuenta de Minecraft (Servidor). Para conectar su cuenta de Minecraft (Servidor), debe registrarse.</span>
          </div>
      </div>
    </div>
</div>