<script lang="ts">
  import { lanyardStore } from "../../utils/lanyard";
</script>

{#if $lanyardStore}
  @{$lanyardStore.discord_user.username}
{:else}
  ...whoa..i'm fetching the data!
{/if}
