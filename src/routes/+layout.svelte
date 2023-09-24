<script>
  import { MagnifyingGlass, Bars3BottomRight } from 'svelte-heros-v2';
  import { search } from '$lib/stores';
  import "../app.css";
  import {page} from '$app/stores';
</script>
<header class="w-full text-white-700 bg-neutral-800 text-white body-font border-b-4 border-zinc-300">
  <nav class="flex flex-col md:flex-row justify-between md:items-center text-center py-0 px-6 w-full shadow-md shadow-neutral-800 relative ">
    <div class="flex-row gap-3 items-center uppercase hidden md:flex h-16">
      <a href="/" class="flex flex-row items-center text-md no-underline font-bold hover:text-blue-dark ml-2 gap-2 h-full" class:active={$page.route.id === '/'}><img class="h-6 w-7" alt="Inicio" src="/Icons/home.svg"/> Inicio</a>
      <a href="/reglas" class="flex flex-row items-center text-md no-underline font-bold hover:text-blue-dark ml-2 gap-2 h-full" class:active={$page.route.id === '/reglas'}><img class="h-6 w-6" alt="Reglas" src="/Icons/rules.svg"/> Reglas</a>
      <a href="/market" class="flex flex-row items-center text-md no-underline font-bold hover:text-blue-dark ml-2 gap-2 h-full" class:active={$page.route.id === '/market'}><img class="h-6 w-6" alt="Mercado Negro" src="/Icons/ping.svg"/>Mercado negro</a>
    </div>
    <a href="#_" on:click={() => (search.set(true))} class="hidden md:block"><MagnifyingGlass size="30"/></a>
    <div class="flex flex-row justify-between items-center md:hidden">
      <div>
        <a href="#_" on:click={() => (search.set(true))}><MagnifyingGlass size="30"/></a>
      </div>
      <div class="bg-neutral-800 rounded-full p-4 -mb-8 shadow-md shadow-neutral-800">
        <img class="h-14 w-14" alt="Inicio" src="/Icons/logo.svg"/>
      </div>
      <div>
        <a><Bars3BottomRight size="30"/></a>
      </div>
    </div>
  </nav>
  <div hidden class="bg-[url('/Images/background.webp')] bg-cover bg-center md:block">
    <div class="flex justify-center items-center py-28">
      <div class="flex flex-row gap-3 bg-neutral-800 p-5 w-5/12 lg:w-4/12 -mr-7 justify-start">
        <img class="h-14 w-14" alt="Inicio" src="/Icons/discord.svg"/>
        <div class="flex justify-center flex-col text-left">
          <span class="uppercase font-black text-md">discord server</span>
          <span class="uppercase text-sm">visitar comunidad</span>
        </div>
      </div>
      <div class="bg-neutral-800 rounded-full p-8">
        <img class="h-20 w-20" alt="Inicio" src="/Icons/logo.svg"/>
      </div>
      <div class="flex flex-row gap-3 bg-neutral-800 p-5 w-5/12 lg:w-4/12 -ml-7 justify-end">
        <div class="flex justify-center flex-col text-right">
          <span class="uppercase font-black text-md">play.villerosmc.net</span>
          <span class="uppercase text-sm">copiar direction</span>
        </div>
        <img class="h-14 w-14" alt="Inicio" src="/Icons/minecraft.svg"/>
      </div>
    </div>
  </div>
</header>
<slot />