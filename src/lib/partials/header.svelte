<script>
    import { notifications } from '$lib/stores';
    import { copy } from 'svelte-copy';
    import { MagnifyingGlass, Bars3BottomRight } from 'svelte-heros-v2';
    import { Icon } from 'svelte-materialdesign-icons';
    import { mobil, search } from '$lib/stores';
    import "../../app.css";
    import {page} from '$app/stores';
    import {items} from '$lib/navItems';
    import Mobil from '$lib/components/mobil.svelte';
    import Search from '$lib/components/search.svelte';
    import Tools from '$lib/components/tools.svelte';

</script>
<Search/>
<Mobil/>
<header class="w-full text-white-700 bg-mine-shaft-950 text-white body-font border-b-4 border-zinc-300">
    <nav class="flex flex-col md:flex-row justify-between md:items-center text-center py-0 px-6 w-full shadow-md shadow-blaze-orange-500 relative">
      <div class="flex-row gap-3 items-center uppercase hidden md:flex h-14 w-full">
        {#each items as item}
          <a href="{item.url}" class="flex flex-row items-center text-md no-underline font-normal hover:text-blue-dark ml-2 gap-2 h-full" class:active={$page.url.pathname === item.url}><Icon name="{item.icon}" />{item.name}</a>
        {/each}
      </div>
      <Tools classes="md:flex"/>
      <div class="flex flex-row justify-between items-center md:hidden">
        <div class="w-2/6">
          <a href="#_" on:click={() => (search.set(true))}><MagnifyingGlass size="30"/></a>
        </div>
        <div class="bg-mine-shaft-950 rounded-full p-4 -mb-8 shadow-md shadow-mine-shaft-950">
          <img class="h-14 w-14" alt="Inicio" src="/Icons/logo.svg"/>
        </div>
        <div class="w-2/6">
          <Tools classes="!flex"/>
        </div>
      </div>
    </nav>
    <div hidden class="bg-[url('/Images/background.webp')] bg-cover bg-center md:block">
      <div class="flex justify-center items-center py-28">
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
  </header>