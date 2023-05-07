<script lang="ts">
  import { fly } from "svelte/transition";
  import MenuIcon from "./icons/MenuIcon.svelte";
  import CloseIcon from "./icons/CloseIcon.svelte";

  let showMenu: boolean = false;
</script>

<button on:click={() => (showMenu = !showMenu)}
  ><MenuIcon class="fixed m-8 w-6 h-6" /></button
>

{#if showMenu}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
    on:click={() => (showMenu = false)}
    out:fly
  />

  <div
    class="fixed min-w-[16rem] h-full bg-black border-r-[1px] border-[#2B2B2B] font-light text-white text-2xl z-10"
    in:fly
    out:fly
  >
    <button on:click={() => (showMenu = !showMenu)}>
      <CloseIcon class="fixed m-8 w-8 h-8" />
    </button>

    <div class="flex flex-col gap-2 px-4 items-center justify-center h-full">
      <a href="#whoami">Who am I</a>
      <a href="#featured">Open-source Projects</a>
      <a href="#tech">Most Used Tech</a>
      <a href="#contact">Contact & Jobs</a>
    </div>
  </div>
{/if}
