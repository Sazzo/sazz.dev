<script lang="ts">
  import { fade } from "svelte/transition";

  const items: { name: string; href: string }[] = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about me",
      href: "/whoami",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "contact/jobs",
      href: "/contact",
    },
  ];

  let isHambugerMenuOpen: boolean = false;
</script>

<nav class="flex font-secondary fixed w-screen h-auto">
  <button
    on:click={() => (isHambugerMenuOpen = !isHambugerMenuOpen)}
    class="flex gap-2 pt-8 font-sans lg:hidden px-5 font-medium z-40"
  >
    {#if isHambugerMenuOpen}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      CLOSE
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 8h16M4 16h16"
        />
      </svg>
      MENU
    {/if}
  </button>

  <div class="flex pt-8 items-center px-14 w-screen">
    <div class="hidden lg:flex lg:gap-12">
      {#each items as item (item.name)}
        <a href={item.href}>{item.name}</a>
      {/each}
    </div>
  </div>

  {#if isHambugerMenuOpen}
    <div
      class="flex flex-col gap-2 bg-black px-7 pt-20 z-30 w-screen h-screen fixed font-secondary"
      in:fade
      out:fade
    >
      {#each items as item (item.name)}
        <a href={item.href}>{item.name}</a>
      {/each}
    </div>
  {/if}
</nav>
