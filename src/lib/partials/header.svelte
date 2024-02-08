<script>
    import { notifications } from '$lib/stores';
    import { copy } from 'svelte-copy';
    import { MagnifyingGlass, Bars3BottomRight } from 'svelte-heros-v2';
    import { Icon } from 'svelte-materialdesign-icons';
    import { mobil } from '$lib/stores';
    import "../../app.css";
    import {page} from '$app/stores';
    import {items} from '$lib/navItems';
    import Mobil from '$lib/components/mobil.svelte';
    import Search from '$lib/components/search.svelte';

</script>
<Search/>
<Mobil/>
<header class="w-full text-white-700 bg-mine-shaft-950 text-white body-font border-b-4 border-zinc-300">
    <div hidden class="bg-[url('/Images/background.webp')] bg-cover bg-center md:block">
      <div class="flex justify-center items-center py-28 backdrop-blur-sm">
        <div class="flex flex-row gap-3 bg-mine-shaft-950 p-5 w-5/12 lg:w-4/12 -mr-7 justify-start rounded-md">
          <img class="h-14 w-14" alt="Inicio" src="/Icons/discord.svg"/>
          <div class="flex justify-center flex-col text-left">
            <span class="uppercase font-bold text-md">discord server</span>
            <a href="https://discord.com/invite/H2dGwz8" class="uppercase text-sm text-blaze-orange-300 hover:text-blaze-orange-500 ">visitar comunidad</a>
          </div>
        </div>
        <div class="bg-mine-shaft-950 rounded-full p-8">
          <img class="h-20 w-20" alt="Inicio" src="/Icons/logo.svg"/>
        </div>
        <div class="flex flex-row gap-3 bg-mine-shaft-950 p-5 w-5/12 lg:w-4/12 -ml-7 justify-end rounded-md">
          <div class="flex justify-center flex-col text-right">
            <span class="uppercase font-bold text-md">play.villerosmc.net</span>
            <a href="#!" use:copy={'play.villerosmc.net'} on:svelte-copy={() => notifications.success('Has copiado la IP play.villerosmc.net!', 3000)} class="uppercase text-sm text-blaze-orange-300 hover:text-blaze-orange-500">copiar direction</a>
          </div>
          <img class="h-14 w-14" alt="Inicio" src="/Icons/minecraft.svg"/>
        </div>
      </div>
    </div>
    <nav class="container-fluid md:container h-14 mx-auto shadow-2xl">
      <div class="h-full w-full flex flex-row justify-between">
        <a href="/" class="md:hidden flex justify-end items-center h-full"><img alt="logo" class="h-full p-2" src="/Icons/logo-text.svg"/></a>
        <div class="h-full flex flex-row gap-2">
          {#each items as item}
            <a href="{item.url}" class="flex justify-center items-center h-full p-4" class:active={$page.url.pathname === item.url}><Icon name="{item.icon}" color="{item.color}" /> &nbsp; {item.name}</a>
          {/each}
        </div>
        <a href="Inciar session" class="md:flex hidden justify-end items-center h-full p-4 bg-blaze-orange-500"><Icon name="minecraft"/>&nbsp; Iniciar sesión</a>
      </div>

    </nav>
  </header>