<script>
    import { search } from '../stores';
</script>

{#if $search}
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-neutral-800 bg-opacity-75 transition-opacity" on:click_outside={() => (search.set(false))}></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center">
        <div class="relative transform rounded-lg bg-gray-100 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"> 
          <div class="bg-neutral-800 px-4 py-3 rounded-md">
            <div class="flex flex-row justify-between">
                <div class="flex items-center">
                    <img src="/Icons/logo.svg" class="w-6 h-6">
                </div>
                <div class="-mt-10">
                    <img src="/Icons/glass.svg" class="w-20 h-20 bg-gray-100 p-3 rounded-2xl">
                </div>
                <button class="modal-close cursor-pointer" on:click={() => (search.set(false))}>
                    <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </button>
            </div>
            <div class="relative mt-2 rounded-md shadow-sm text-center text-white">
                <p class="my-4">Busca jugadores que hayan participado en Villeromc.net y podrás acceder a estadísticas como kills, muertes, y más.</p>
                <div class="flex items-center max-w-md mx-auto bg-white rounded-lg ">
                    <div class="w-full">
                        <input type="search" class="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                            placeholder="Nombre de usuario">
                    </div>
                    <div>
                        <button type="submit" class="flex items-center bg-amber-600 justify-center w-12 h-12 text-white rounded-r-lg">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/if}