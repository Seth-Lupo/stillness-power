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
<section class="relative min-h-screen flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-blue-900/70"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-6xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span class="inline-block animate-slide-up" style="animation-delay: 0.3s;">Stillness</span>
          <span class="inline-block animate-slide-up text-orange-400" style="animation-delay: 0.5s;">Power</span>
          <span class="inline-block animate-slide-up text-orange-300" style="animation-delay: 0.7s;">®</span>
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.9s;">
        <p class="text-2xl md:text-3xl mb-12 text-purple-100 font-light">
          {homepage.tagline}
        </p>
      </div>
      
      <div class="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style="animation-delay: 1.2s;">
        <a href="/classes" class="btn btn-primary text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          Start Your Journey
        </a>
        <a href="/contact" class="btn btn-outline border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          Book Session
        </a>
      </div>
    </div>
  </div>

</section>

<!-- Mission Section -->
<section class="relative py-24 bg-white overflow-hidden">
  <div class="relative z-10 mx-auto max-w-5xl px-6">
    <div class="text-center animate-fade-in-up">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">{homepage.mission.title}</h2>
      <div class="max-w-4xl mx-auto">
        <p class="text-xl text-gray-700 leading-relaxed">
          Stillness Power is dedicated to providing communities with meditative and prayerful approach to holistic health and wellness. Through various education programs, Stillness Power is dedicated to teaching simple, easy and practical way to well-being. The value of long-lasting meditative approach to well-being will be appreciated since it will influence our lifestyle and choices we make in our life. Stillness Power is committed to providing strong and experienced leadership to organizations and individuals who want to integrate holistic strategies into their healthcare programs.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Class Types Section -->
<section class="relative py-24 bg-indigo-600 text-white overflow-hidden">
  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold mb-6">Our Practice Types</h2>
      <p class="text-xl text-indigo-200">Discover your perfect path to wellness</p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      {#each homepage.classTypes as classType, index}
        {@const colors = ['from-purple-500 to-pink-500', 'from-blue-500 to-indigo-600', 'from-orange-500 to-red-500']}
        {@const iconNames = ['self_improvement', 'flight', 'videocam']}
        
        <div class="group animate-slide-up bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105" style="animation-delay: {index * 0.2}s;">
          <div class="bg-gradient-to-br {colors[index]} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-all duration-300 shadow-xl">
            <Icon name="{iconNames[index]}" style="color: white;" size="40" />
          </div>
          <h3 class="text-2xl font-bold mb-4">{classType.name}</h3>
          <p class="text-indigo-200 text-lg leading-relaxed">{classType.description}</p>
          <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full h-1 bg-gradient-to-r {colors[index]} rounded-full"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Sessions Info Section -->
<section class="relative py-24 bg-white overflow-hidden">
  <!-- Background elements -->
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-5xl px-6">
    <div class="text-center animate-fade-in-up mb-16">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">{homepage.sessions.title}</h2>
      <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        {homepage.sessions.description}
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      {#each [
        { icon: 'location_on', text: 'N Chelmsford, MA', color: 'from-orange-500 to-red-500' },
        { icon: 'schedule', text: 'Daily Classes', color: 'from-purple-500 to-indigo-600' },
        { icon: 'group', text: 'All Levels Welcome', color: 'from-blue-500 to-purple-500' }
      ] as info, index}
        <div class="group animate-slide-up bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100/50" style="animation-delay: {index * 0.2}s;">
          <div class="bg-gradient-to-br {info.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-all duration-300 shadow-lg">
            <Icon name="{info.icon}" style="color: white;" size="32" />
          </div>
          <p class="text-xl font-semibold text-gray-800 text-center">{info.text}</p>
          <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full h-1 bg-gradient-to-r {info.color} rounded-full"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="relative py-24 bg-orange-500 overflow-hidden">
  <!-- Background elements -->
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-10"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600"></div>

  <div class="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
    <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
      <h2 class="text-6xl font-bold mb-8 leading-tight">
        <span class="inline-block animate-slide-up">Ready to Begin</span>
        <span class="inline-block animate-slide-up text-purple-200" style="animation-delay: 0.3s;">Your Journey?</span>
      </h2>
    </div>
    
    <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
      <p class="text-2xl mb-12 text-orange-100 font-light max-w-3xl mx-auto">
        Join our community and discover the transformative power of meditative wellness practices.
      </p>
    </div>
    
    <div class="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style="animation-delay: 0.9s;">
      <a href="/contact" class="group bg-white text-orange-600 hover:bg-purple-100 font-bold text-xl px-12 py-6 rounded-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
        <span class="flex items-center justify-center">
          Contact Us Today
          <Icon name="arrow_forward" style="color: currentColor; margin-left: 8px;" size="24" class="group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </a>
      <a href="/testimonials" class="group border-3 border-white text-white hover:bg-white hover:text-orange-600 font-bold text-xl px-12 py-6 rounded-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
        <span class="flex items-center justify-center">
          Read Stories
          <Icon name="favorite" style="color: currentColor; margin-left: 8px;" size="24" class="group-hover:scale-110 transition-transform duration-200" />
        </span>
      </a>
    </div>
  </div>
</section>
