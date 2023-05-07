<script lang="ts">
  import { fade } from "svelte/transition";
  import { subscribeToLanyard } from "../../utils/lanyard";
  import { truncate } from "../../utils/truncate";
  import SpotifyIcon from "./icons/SpotifyIcon.svelte";

  const lanyardData = subscribeToLanyard("326123612153053184");

  let showSpotifyData = false;
</script>

{#if $lanyardData && $lanyardData.listening_to_spotify}
  <div
    class="absolute bottom-8 right-4 bg-black md:right-8"
    on:mouseover={() => (showSpotifyData = true)}
    on:focus={() => (showSpotifyData = true)}
    on:blur={() => (showSpotifyData = false)}
    on:mouseout={() => (showSpotifyData = false)}
  >
    {#if !showSpotifyData}
      <div class="border-2 border-gray-800 rounded-lg w-fit" in:fade>
        <SpotifyIcon class="m-2" />
      </div>
    {:else}
      <div
        class="flex flex-row max-w-sm min-h-[4rem] border border-gray-800 rounded-lg"
        in:fade
      >
        <img
          src={$lanyardData.spotify.album_art_url}
          alt={$lanyardData.spotify.song}
          class="ml-2 mr-3 mt-2 w-12 h-12 rounded-xl"
        />

        <div class="flex flex-col mt-2 w-72">
          <p class="text-gray-400 text-sm">{$lanyardData.spotify.artist}</p>
          <p class="font-semibold text-xl" title={$lanyardData.spotify.song}>
            {truncate($lanyardData.spotify.song, 25)}
          </p>
        </div>

        <SpotifyIcon class="mt-2 mr-2 w-5" />
      </div>
    {/if}
  </div>
{/if}
