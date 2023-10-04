<script>
    import { MagnifyingGlass } from 'svelte-heros-v2';
    import { search } from '../stores';
</script>

{#if $search}
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-neutral-800 bg-opacity-75 transition-opacity" on:click_outside={() => (search.set(false))}></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto animate-jump-in animate-once animate-ease-linear">
      <div class="flex min-h-full items-center justify-center p-4 text-center">
        <div class="relative transform rounded-lg bg-gray-100 text-left shadow-xl transition-all"> 
          <form class="bg-neutral-800 px-4 py-3 rounded-md" action="/?search" method="POST">
            <div class="flex flex-row justify-between">
                <div class="flex items-center">
                    <img alt="Logo" src="/Icons/logo.svg" class="w-6 h-6">
                </div>
                <div class="-mt-10">
                    <img alt="Glass" src="/Icons/glass.svg" class="w-20 h-20 bg-gray-100 p-3 rounded-2xl">
                </div>
                <button class="modal-close cursor-pointer" on:click={() => (search.set(false))}>
                    <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </button>
            </div>
            <div class="relative mt-2 rounded-md shadow-sm text-center text-white">
                <p class="my-4">Utiliza la función de búsqueda para localizar elementos en el mercado negro o usuarios en nuestra base de datos.</p>
                <div class="flex flex-row gap-2 ">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg" type="text">
                    <button class=" bg-white text-mine-shaft-950 leading-tight focus:outline-none focus:shadow-outline rounded py-2 px-3 flex justify-center"><MagnifyingGlass size="30"/></button>
                </div>
                <div class="flex flex-wrap py-2 gap-10 text-white">
                    <div class="flex items-center">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-1" class="ml-2 text-lg font-medium  dark:text-gray-300">Usuario</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-2" class="ml-2 text-lg font-medium  dark:text-gray-300">Mercado negro</label>
                    </div>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  {/if}