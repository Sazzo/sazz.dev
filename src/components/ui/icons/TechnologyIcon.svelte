<script lang="ts">
  import RustIcon from "./tech/RustIcon.svelte";
  import TypeScriptIcon from "./tech/TypeScriptIcon.svelte";

  export let technology: string;
  export let className: string = "";

  const technologiesIcons = [
    {
      name: "node",
      icon: TypeScriptIcon,
    },
    {
      name: "typescript",
      icon: TypeScriptIcon,
    },
    {
      name: "gh-actions",
      icon: TypeScriptIcon,
    },
    {
      name: "docker",
      icon: TypeScriptIcon,
    },
    {
      name: "mongodb",
      icon: TypeScriptIcon,
    },
    {
      name: "golang",
      icon: TypeScriptIcon,
    },
    {
      name: "sveltekit",
      icon: TypeScriptIcon,
    },
    {
      name: "rust",
      icon: RustIcon,
    },
  ];
  const technologyIcon = technologiesIcons.find(
    (tech) => tech.name === technology
  );
</script>

<svelte:component this={technologyIcon.icon} class={className} />
