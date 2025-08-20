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

<!-- What Students Gain Section -->
<section class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">What Students Consistently Gain</h2>
      <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        The lasting changes our community members experience through dedicated practice.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200">
        <div class="flex items-start gap-4 mb-6">
          <div class="text-4xl">🧘‍♀️</div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Mental Clarity & Peace</h3>
            <p class="text-gray-700">Reduced anxiety, improved focus, and a deeper sense of inner calm that carries into daily life.</p>
          </div>
        </div>
        <div class="bg-white/50 rounded-xl p-4">
          <p class="text-purple-700 italic">"I finally found the peace I was searching for" - Student feedback</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 border border-blue-200">
        <div class="flex items-start gap-4 mb-6">
          <div class="text-4xl">💪</div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Physical Wellness</h3>
            <p class="text-gray-700">Enhanced flexibility, core strength, and better body awareness through mindful movement.</p>
          </div>
        </div>
        <div class="bg-white/50 rounded-xl p-4">
          <p class="text-blue-700 italic">"My chronic pain has significantly decreased" - Student experience</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-green-100 to-teal-100 rounded-3xl p-8 border border-green-200">
        <div class="flex items-start gap-4 mb-6">
          <div class="text-4xl">🤝</div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Supportive Community</h3>
            <p class="text-gray-700">Connection with like-minded individuals on similar wellness journeys and personal growth paths.</p>
          </div>
        </div>
        <div class="bg-white/50 rounded-xl p-4">
          <p class="text-green-700 italic">"Found my wellness family here" - Community member</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 border border-orange-200">
        <div class="flex items-start gap-4 mb-6">
          <div class="text-4xl">✨</div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Life Transformation</h3>
            <p class="text-gray-700">Renewed perspective, increased resilience, and tools for navigating life's challenges with grace.</p>
          </div>
        </div>
        <div class="bg-white/50 rounded-xl p-4">
          <p class="text-orange-700 italic">"I'm a completely different person" - Testimonial</p>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Join Community Section -->
<section class="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-20"></div>
  
  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="text-white">
        <h2 class="text-5xl font-bold mb-6">Your Transformation Awaits</h2>
        <p class="text-xl text-purple-100 mb-8 leading-relaxed">
          These stories could be yours. Every journey begins with a single step toward wellness and self-discovery.
        </p>
        
        <div class="space-y-4 mb-8">
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-white text-sm">✓</span>
            </div>
            <span class="text-purple-100">Expert guidance from Sanjyot's 20000+ hours of experience</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-white text-sm">✓</span>
            </div>
            <span class="text-purple-100">Supportive community of like-minded individuals</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-white text-sm">✓</span>
            </div>
            <span class="text-purple-100">Flexible class options: Traditional, Aerial, Virtual</span>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/classes" class="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-3 rounded-lg transition-colors">
            View Class Options
          </a>
          <a href="/contact" class="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-3 rounded-lg transition-colors">
            Ask Questions
          </a>
        </div>
      </div>
      
      <!-- Quote Highlight -->
      <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
        <div class="text-center">
          <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <img 
              src="/images/sanjyot.jpg" 
              alt="Sanjyot Lupo" 
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <blockquote class="text-2xl font-light text-white mb-6 italic leading-relaxed">
            "The proof is in the practice!"
          </blockquote>
          <cite class="text-purple-200 font-medium">— Sanjyot's Philosophy</cite>
        </div>
        
        <div class="mt-8 pt-8 border-t border-white/20">
          <h3 class="text-xl font-bold text-white mb-4 text-center">Ready to Experience It Yourself?</h3>
          <div class="text-center">
            <a href="tel:+19782721339" class="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 font-bold px-6 py-3 rounded-lg transition-colors">
              <Icon name="phone" style="color: currentColor;" size="20" />
              (978) 272-1339
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>