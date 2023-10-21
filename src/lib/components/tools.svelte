<script>
    import { Icon } from "svelte-materialdesign-icons";
    import { dropdown, search } from '$lib/stores';
    export let classes;
    export let align;
</script>

<div class="hidden items-center {classes}">
    <div class="relative inline-block text-left">
        <button id="dropdown-button" class="inline-flex justify-center w-full py-2 text-md font-medium text-white bg-mine-shaft-950 items-center" on:click={() => (dropdown.set(!$dropdown))}>
          <Icon  name="minecraft"/>&nbsp&nbspTOOLS
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
        {#if $dropdown}
            <div id="dropdown-menu" class="origin-top-right absolute right-0 {align} mt-2 w-48 shadow-lg bg-mine-shaft-950 text-white">
                <div class="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                    <a href="/market" class="flex px-4 py-2 text-md  hover:bg-mine-shaft-700 w-full" role="menuitem">
                        <Icon  name="axe"/>&nbsp;Mercado Negro
                    </a>
                    <button class="flex px-4 py-2 text-md  hover:bg-mine-shaft-700 w-full" role="menuitem" on:click={() => (search.set(true))}>
                        <Icon name="magnify"/>&nbsp;Buscar
                    </button>
                </div>
            </div>
        {/if}
    </div>
  </div>