<script lang="ts">
  import { navigation } from '$lib/data/content';
  import { page } from '$app/stores';
  import Icon from '$lib/components/Icon.svelte';
  import { asset } from '$lib/utils/paths';
  import { base } from '$app/paths';
  
  let { mobileMenuOpen = $bindable(false) } = $props();
</script>

<header class="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
  <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
    <div class="flex w-full items-center justify-between py-4">
      <div class="flex items-center">
        <a href="{base}/" class="flex items-center space-x-3">
          <img
            class="h-12 w-auto"
            src={asset("/images/logo.png")}
            alt="Stillness Power"
          />
          <span class="text-xl font-bold text-purple-600">
            Stillness Power<span class="text-amber-500">®</span>
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:block">
        <div class="flex items-center space-x-8">
          {#each navigation as item}
            <a
              href="{base}{item.href}"
              class="text-sm font-medium transition-colors hover:text-purple-600
                     {$page.url.pathname === `${base}${item.href}` 
                       ? 'text-purple-600 border-b-2 border-purple-600' 
                       : 'text-gray-700'}"
            >
              {item.name}
            </a>
          {/each}
          
          <a
            href="{base}/contact"
            class="btn btn-primary ml-4"
          >
            Get Started
          </a>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="lg:hidden">
        <button
          type="button"
          class="text-brand-black hover:text-brand-violet focus:outline-none focus:text-brand-violet"
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          aria-expanded={mobileMenuOpen}
        >
          <span class="sr-only">Open main menu</span>
{#if mobileMenuOpen}
            <Icon name="close" style="color: currentColor;" size="24" />
          {:else}
            <Icon name="menu" style="color: currentColor;" size="24" />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="lg:hidden">
        <div class="space-y-1 pb-4 pt-2">
          {#each navigation as item}
            <a
              href="{base}{item.href}"
              class="block px-3 py-2 text-base font-medium transition-colors hover:text-brand-violet hover:bg-gray-50 rounded-md
                     {$page.url.pathname === `${base}${item.href}` 
                       ? 'text-brand-violet bg-brand-violet/10' 
                       : 'text-brand-black'}"
              onclick={() => mobileMenuOpen = false}
            >
              {item.name}
            </a>
          {/each}
          
          <div class="px-3 py-2">
            <a
              href="{base}/contact"
              class="btn btn-primary w-full text-center"
              onclick={() => mobileMenuOpen = false}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>