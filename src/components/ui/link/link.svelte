<script lang="ts">
  export let to: string;
</script>

<a class="text-blue-600 font-medium underline" href={to} target="_blank">
  <slot />
</a>
