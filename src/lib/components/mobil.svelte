<script>
  import { page } from '$app/stores';
  import { mobil } from '$lib/stores';
  import { Icon } from 'svelte-materialdesign-icons';
  import {items} from '$lib/navItems';

  mobil.set(false);
</script>

{#if $mobil}
<div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div class="fixed inset-0 overflow-hidden animate-fade-left animate-once animate-ease-linear " >
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-16">
          <div class="pointer-events-auto relative w-screen max-w-md">
            <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
              <button on:click={() => (mobil.set(false))} type="button" class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span class="absolute -inset-2.5"></span>
                <span class="sr-only">Close panel</span>
                <Icon name="arrow-right" width="30" height="30" />
              </button>
            </div>
  
            <div class="flex h-full flex-col overflow-y-scroll bg-mine-shaft-950 shadow-xl">
              <div class=" bg-mine-shaft-700 flex items-center justify-center">
                  <img alt="Logo-text" class="p-16" src="/Icons/logo-text.svg"/>
              </div>
              <div class="">
                {#each items as item}
                  <a href="{item.url}" class="flex flex-row items-center text-2xl no-underline font-normal gap-2 p-5 text-white" class:active_mobil={$page.url.pathname === item.url}><Icon name="{item.icon}" width="35" height="35"  />{item.name}</a>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
