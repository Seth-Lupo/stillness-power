<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
  
  const { testimonials } = siteContent;
</script>

<svelte:head>
  <title>Testimonials - Stillness Power®</title>
  <meta name="description" content="Read what our students say about their transformative experiences with Stillness Power® practices." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-blue-900/70"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-6xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span class="inline-block animate-slide-up" style="animation-delay: 0.3s;">Student</span>
          <span class="inline-block animate-slide-up text-orange-400" style="animation-delay: 0.5s;">Stories</span>
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <p class="text-xl md:text-2xl mb-12 text-purple-100 font-light max-w-3xl mx-auto">
          Discover how Stillness Power® practices have transformed the lives of our community members through their own words.
        </p>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.9s;">
        <a href="#testimonials" class="btn btn-primary text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          Read Their Journeys
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Grid -->
<section id="testimonials" class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">Transformative Experiences</h2>
      <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Real stories from our community members who have experienced the life-changing benefits of Stillness Power® practices.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {#each testimonials as testimonial, index}
        <div class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50" style="animation-delay: {index * 0.2}s;">
          <div class="flex items-center mb-6">
            <div class="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4 shadow-xl">
              <Icon name="person" style="color: white;" size="24" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">
                {testimonial.author}
              </h3>
              <p class="text-purple-600 font-medium">Stillness Power® Student</p>
            </div>
          </div>
          
          <blockquote class="text-lg text-gray-700 leading-relaxed italic">
            "{testimonial.text}"
          </blockquote>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Benefits Summary -->
<section class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-5xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">Common Benefits</h2>
      <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        What our students consistently experience through their Stillness Power® practice.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each [
        { icon: 'psychology', title: 'Stress Relief', color: 'from-purple-500 to-pink-500' },
        { icon: 'favorite', title: 'Physical Healing', color: 'from-blue-500 to-indigo-600' },
        { icon: 'self_improvement', title: 'Inner Peace', color: 'from-orange-500 to-red-500' },
        { icon: 'group', title: 'Community', color: 'from-green-500 to-teal-500' }
      ] as benefit, index}
        <div class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100/50 text-center" style="animation-delay: {index * 0.1}s;">
          <div class="bg-gradient-to-br {benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
            <Icon name="{benefit.icon}" style="color: white;" size="24" />
          </div>
          <h3 class="text-lg font-bold text-gray-900">{benefit.title}</h3>
        </div>
      {/each}
    </div>
  </div>
</section>


<!-- CTA Section -->
<section class="relative py-24 bg-orange-500 overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-10"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600"></div>

  <div class="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
    <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
      <h2 class="text-6xl font-bold mb-8 leading-tight">
        <span class="inline-block animate-slide-up">Ready to Write</span>
        <span class="inline-block animate-slide-up text-purple-200" style="animation-delay: 0.3s;">Your Story?</span>
      </h2>
    </div>
    
    <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
      <p class="text-2xl mb-12 text-orange-100 font-light max-w-3xl mx-auto">
        Join our welcoming community and discover the transformative power of Stillness Power® practices for yourself.
      </p>
    </div>
    
    <div class="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style="animation-delay: 0.9s;">
      <a href="/classes" class="group bg-white text-orange-600 hover:bg-purple-100 font-bold text-xl px-12 py-6 rounded-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
        <span class="flex items-center justify-center">
          Explore Classes
          <Icon name="arrow_forward" style="color: currentColor; margin-left: 8px;" size="24" class="group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </a>
      <a href="/contact" class="group border-3 border-white text-white font-bold text-xl px-12 py-6 rounded-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
        <span class="flex items-center justify-center">
          Contact Us
          <Icon name="favorite" style="color: currentColor; margin-left: 8px;" size="24" class="group-hover:scale-110 transition-transform duration-200" />
        </span>
      </a>
    </div>
  </div>
</section>