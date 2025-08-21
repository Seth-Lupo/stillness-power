<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
  import { asset } from '$lib/utils/paths';
  
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
        <a href="/contact" class="btn btn-outline border-2 border-orange-400 text-orange-400 text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
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
          {homepage.mission.description}
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
        {@const iconNames = ['self_improvement', 'raven', 'videocam']}
        
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

<!-- Founder Philosophy Section -->
<section class="relative py-24 bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-10"></div>
  
  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="animate-fade-in-up">
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50">
          <div class="text-center mb-8">
            <div class="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-purple-200 shadow-lg">
              <img 
                src={asset("/images/sanjyot.jpg")} 
                alt="Sanjyot Lupo" 
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">Sanjyot Lupo</h3>
            <p class="text-xl text-purple-600 font-medium">Creator of Stillness Power®</p>
          </div>
          
          <blockquote class="text-center mb-8">
            <p class="text-2xl text-gray-700 font-light leading-relaxed italic">
              "Soul can be neither created nor destroyed, it takes only different forms. So take the time to honor the indestructible and get to know it when you can"
            </p>
            <cite class="text-purple-600 font-semibold">— Sanjyot</cite>
          </blockquote>
          
          <div class="text-center">
            <a href="/about" class="btn btn-primary text-lg px-8 py-4">
              Learn More About Our Founder
            </a>
          </div>
        </div>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.3s;">
        <h2 class="text-5xl font-bold text-gray-900 mb-8">Our Foundation</h2>
        <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Sanjyot is a certified yoga instructor with specialized expertise in Breath Control, Meditation & Stress Management practices. With over 500 hours of teaching experience since 2011, she brings both scientific understanding and deep spiritual wisdom to her practice.
          </p>
          <p>
            Born with an inherently positive attitude, Sanjyot's own journey through motherhood and personal challenges led her to seek both scientific and practical healing methods. She realizes that only inner peace and realization of the Self brings Bliss, Power, Knowledge and Ultimate Freedom that aids renewal and healing.
          </p>
          <p>
            One of her greatest skills is her ability to connect with people regardless of their background, focusing primarily on Postures, Kriyas, Pranayama and Meditation in all her programs.
          </p>
          <div class="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
            <p class="text-xl font-medium text-center">
              "The Proof is in the Practice!" — Sanjyot's philosophy for skeptics
            </p>
          </div>
        </div>
      </div>
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
      <div class="mt-8">
        <p class="text-lg text-purple-600 font-medium">
          {homepage.sessions.callToAction}
        </p>
      </div>
    </div>
    
    <div class="max-w-3xl mx-auto">
      <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100/50">
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Icon name="location_on" style="color: white;" size="24" />
            </div>
            <span class="text-lg font-semibold text-gray-800">North Chelmsford, MA</span>
          </div>
          
          <div class="hidden md:block w-px h-8 bg-gray-300"></div>
          
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Icon name="schedule" style="color: white;" size="24" />
            </div>
            <span class="text-lg font-semibold text-gray-800">Daily Classes</span>
          </div>
          
          <div class="hidden md:block w-px h-8 bg-gray-300"></div>
          
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Icon name="group" style="color: white;" size="24" />
            </div>
            <span class="text-lg font-semibold text-gray-800">All Levels Welcome</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Preview Section -->
<section class="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-20"></div>
  
  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold mb-6">What Our Students Say</h2>
      <p class="text-xl text-indigo-200">Real experiences from our Stillness Power® community</p>
    </div>
    
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="animate-slide-up bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="person" style="color: white;" size="24" />
          </div>
          <div>
            <h4 class="text-xl font-semibold text-white">Julie</h4>
            <p class="text-indigo-200">Long-time Practitioner</p>
          </div>
        </div>
        <blockquote class="text-lg leading-relaxed text-gray-100 italic ml-16">
          "Yoga seems such a weak term for these classes! This process of being led to going deep within yourself to hear your own body's wisdom, find peacefulness, release negativity and open up to healing... these aspects are quite unique from any other yoga, exercise or meditation classes I have taken."
        </blockquote>
      </div>
      
      <div class="animate-slide-up bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20" style="animation-delay: 0.2s;">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="person" style="color: white;" size="24" />
          </div>
          <div>
            <h4 class="text-xl font-semibold text-white">Doris</h4>
            <p class="text-indigo-200">Cancer Survivor</p>
          </div>
        </div>
        <blockquote class="text-lg leading-relaxed text-gray-100 italic ml-16">
          "Having my share of medical problems (cancer survivor) & weight issues, I tend to shy away from a lot of classes. I was very impressed as I loved the mixture of yoga, breathing, stretching, concentration and bliss. Sanjyot's positive energy helps keep me inspired."
        </blockquote>
      </div>
    </div>
    
    <div class="text-center mt-12 animate-fade-in-up" style="animation-delay: 0.4s;">
      <a href="/testimonials" class="btn bg-white text-indigo-900 hover:bg-indigo-50 text-lg px-8 py-4 font-semibold">
        Read More Stories
      </a>
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
