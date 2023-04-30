<script lang="ts">
  import FastifyIcon from "./tech/FastifyIcon.svelte";
  import NestJsIcon from "./tech/NestJSIcon.svelte";
  import NextJsIcon from "./tech/NextJSIcon.svelte";
  import RustIcon from "./tech/RustIcon.svelte";
  import SvelteIcon from "./tech/SvelteIcon.svelte";
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
    {
      name: "nextjs",
      icon: NextJsIcon,
    },
    {
      name: "fastify",
      icon: FastifyIcon,
    },
    {
      name: "nestjs",
      icon: NestJsIcon,
    },
    {
      name: "svelte",
      icon: SvelteIcon,
    },
  ];
  const technologyIcon = technologiesIcons.find(
    (tech) => tech.name === technology
  );
</script>

<svelte:component this={technologyIcon.icon} class={className} />
