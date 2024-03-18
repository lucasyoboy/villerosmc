<script>
  import { notifications } from "$lib/stores";
  import { copy } from "svelte-copy";
  import { Icon } from "svelte-materialdesign-icons";
  import "../../app.css";
  import { page } from "$app/stores";
  import { items } from "$lib/navItems";
  import Search from "$lib/components/search.svelte";
  import { enhance } from "$app/forms";
  export let data;
</script>

<Search />
<header
  class="w-full text-white-700 bg-mine-shaft-950 text-white body-font border-b-4 border-zinc-300"
>
  <div
    hidden
    class="bg-[url('/Images/background.webp')] bg-cover bg-center md:block"
  >
    <div class="flex justify-center items-center py-28 backdrop-blur-sm">
      <div
        class="flex flex-row gap-3 bg-mine-shaft-950 p-5 w-5/12 lg:w-4/12 -mr-7 justify-start rounded-md"
      >
        <img class="h-14 w-14" alt="Inicio" src="/Icons/discord.svg" />
        <div class="flex justify-center flex-col text-left">
          <span class="uppercase font-bold text-md">discord server</span>
          <a
            href="https://discord.com/invite/H2dGwz8"
            class="uppercase text-sm text-blaze-orange-300 hover:text-blaze-orange-500"
            >visitar comunidad</a
          >
        </div>
      </div>
      <div class="bg-mine-shaft-950 rounded-full p-8">
        <a href="/"
          ><img class="h-20 w-20" alt="Inicio" src="/Icons/logo.svg" /></a
        >
      </div>
      <div
        class="flex flex-row gap-3 bg-mine-shaft-950 p-5 w-5/12 lg:w-4/12 -ml-7 justify-end rounded-md"
      >
        <div class="flex justify-center flex-col text-right">
          <span class="uppercase font-bold text-md">play.villerosmc.net</span>
          <a
            href="#!"
            use:copy={"play.villerosmc.net"}
            on:svelte-copy={() =>
              notifications.success(
                "Has copiado la IP play.villerosmc.net!",
                3000
              )}
            class="uppercase text-sm text-blaze-orange-300 hover:text-blaze-orange-500"
            >copiar direction</a
          >
        </div>
        <img class="h-14 w-14" alt="Inicio" src="/Icons/minecraft.svg" />
      </div>
    </div>
  </div>
  <nav class="container-fluid h-14 mx-auto shadow-2xl">
    <div class="h-full w-full flex flex-row justify-between">
      <a href="/" class="md:hidden flex justify-end items-center h-full"
        ><img alt="logo" class="h-full p-2" src="/Icons/logo-text.svg" /></a
      >
      <div class="h-full flex-row gap-2 md:flex hidden">
        {#each items as item}
          <a
            href={item.url}
            class="flex justify-center items-center h-full p-4"
            class:active={$page.url.pathname === item.url}
            ><Icon name={item.icon} color={item.color} /> &nbsp; {item.name}</a
          >
        {/each}
      </div>
      <div class="w-fit flex flex-row">
        {#if !data}
          <a href="/auth" class="w-full h-full p-4 bg-blaze-orange-500 cursor-pointer inline-block text-center"><Icon name="login-variant" class="inline-block" /><span class="hidden md:inline-block">
            &nbsp;Iniciar sesión</span>
          </a>
          {:else}
          <div class="relative inline-block tooltip">
            <a href="#!" class="w-full h-full p-4 hover:text-blaze-orange-100 bg-blaze-orange-500 text-lg flex flex-row items-center"><Icon name="account-circle"/>&nbsp;<span class="hidden md:inline-block">{data.username}</a>
            <div class="flex flex-col p-4 bg-mine-shaft-950 w-full h-fit rounded-md z-20 absolute right-0 invisible tooltip-item ">
              <ul class="list-disc space-y-2">
                <li class="flex items-start hover:text-blaze-orange-400">
                  <a href="/user/{data.username}"class=" inline-block"><Icon name="account-arrow-left" class="inline-block"/><span class="hidden md:inline-block">&nbsp;Cuenta</span></a>
                </li>
                <li class="flex items-start hover:text-blaze-orange-400">
                  <a href="/auth/logout"class=" inline-block"><Icon name="logout" class="inline-block"/>&nbsp;<span class="hidden md:inline-block">&nbsp;Cerrar sesion</span></a>
                </li>
              </ul>
            </div>
          </div>
        {/if}
        <label class="relative z-40 cursor-pointer px-3 py-7 md:hidden block"for="mobile-menu">
          <input class="peer hidden h-full" type="checkbox" id="mobile-menu" />
          <div class="relative z-50 block h-[2px] w-7 bg-blaze-orange-600 content-[''] before:absolute before:top-[-0.5rem] before:z-50 before:block before:h-full before:w-full before:bg-blaze-orange-600 before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.5rem] after:block after:h-full after:w-full after:bg-blaze-orange-600 after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
          <div class="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
            &nbsp;
          </div>
          <div
            class="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
          >
            <div
              class="float-right min-h-full w-[85%] bg-white px-0 pt-12 shadow-2xl"
            >
              <menu>
                {#each items as item}
                  <a
                    href={item.url}
                    class="flex justify-center items-center h-full p-4 text-black"
                    class:active={$page.url.pathname === item.url}
                    ><Icon name={item.icon} color={item.color} /> &nbsp; {item.name}</a
                  >
                {/each}
              </menu>
            </div>
          </div>
        </label>
      </div>
    </div>
  </nav>
</header>
