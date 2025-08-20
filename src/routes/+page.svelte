<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
  
  const { homepage } = siteContent;
</script>

<svelte:head>
  <title>{homepage.title}</title>
  <meta name="description" content={homepage.mission.description} />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[90vh] flex items-center">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/60"></div>
  <div class="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">
      Stillness Power<span class="text-yellow-400">®</span>
    </h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      {homepage.tagline}
    </p>
    <div class="space-x-4">
      <a href="/classes" class="btn btn-primary">Start Your Journey</a>
      <a href="/contact" class="btn btn-outline border-white text-white hover:bg-white hover:text-purple-900">Book Session</a>
    </div>
  </div>
</section>

<!-- Mission Section -->
<section class="py-16 bg-gradient-to-br from-emerald-50 to-teal-100">
  <div class="mx-auto max-w-4xl px-6 text-center">
    <h2 class="text-4xl font-bold text-emerald-900 mb-6">{homepage.mission.title}</h2>
    <p class="text-lg text-emerald-800 leading-relaxed">
      {homepage.mission.description}
    </p>
  </div>
</section>

<!-- Class Types Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-6">
    <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Our Practice Types</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      {#each homepage.classTypes as classType, index}
        {@const colors = ['from-rose-400 to-pink-500', 'from-blue-400 to-indigo-500', 'from-green-400 to-emerald-500']}
        {@const iconColors = ['text-rose-600', 'text-blue-600', 'text-green-600']}
        {@const iconNames = ['self_improvement', 'flight', 'videocam']}
        
        <div class="group card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-{iconColors[index].split('-')[1]}-500">
          <div class="bg-gradient-to-r {colors[index]} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon name="{iconNames[index]}" style="color: white;" size="32" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{classType.name}</h3>
          <p class="text-gray-600">{classType.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Sessions Info Section -->
<section class="py-16 relative">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-indigo-900/75"></div>
  <div class="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
    <h2 class="text-4xl font-bold mb-6">{homepage.sessions.title}</h2>
    <p class="text-lg mb-8 text-indigo-100">
      {homepage.sessions.description}
    </p>
    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <Icon name="location_on" style="color: #fbbf24;" size="32" class="mx-auto mb-2" />
          <p class="font-semibold">N Chelmsford, MA</p>
        </div>
        <div>
          <Icon name="schedule" style="color: #fbbf24;" size="32" class="mx-auto mb-2" />
          <p class="font-semibold">Daily Classes</p>
        </div>
        <div>
          <Icon name="group" style="color: #fbbf24;" size="32" class="mx-auto mb-2" />
          <p class="font-semibold">All Levels Welcome</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
  <div class="mx-auto max-w-4xl px-6 text-center text-white">
    <h2 class="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
    <p class="text-xl mb-8 text-orange-100">
      Join our community and discover the transformative power of meditative wellness practices.
    </p>
    <div class="space-x-4">
      <a href="/contact" class="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-lg transition-colors">
        Contact Us Today
      </a>
      <a href="/testimonials" class="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 rounded-lg transition-colors">
        Read Stories
      </a>
    </div>
  </div>
</section>
