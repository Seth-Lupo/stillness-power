<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
  import { asset} from '$lib/utils/paths';
  
  const { about } = siteContent;
</script>

<svelte:head>
  <title>{about.title} - Stillness Power®</title>
  <meta name="description" content={about.founder.bio} />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-blue-900/70"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-6xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span class="inline-block animate-slide-up" style="animation-delay: 0.3s;">{about.title}</span>
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <p class="text-xl md:text-2xl mb-12 text-purple-100 font-light max-w-3xl mx-auto">
          Meet the dedicated individuals behind Stillness Power® and our commitment to holistic wellness.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Founder Introduction -->
<section class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="animate-fade-in-up order-2 lg:order-1">
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {about.founder.name}
          </h2>
          <p class="text-xl text-purple-600 font-medium mb-8">
            {about.founder.title}
          </p>
          
          <blockquote class="mb-8 p-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl border-l-4 border-purple-500">
            <p class="text-xl italic text-gray-700 leading-relaxed">
              "{about.founder.quote}"
            </p>
            <cite class="block mt-4 text-purple-600 font-semibold">— {about.founder.name}</cite>
          </blockquote>
          
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            Sanjyot is a certified yoga instructor with specialized expertise in Breath Control, Meditation & Stress Management practices. With over 500 hours of teaching experience since 2011, she brings both scientific understanding and deep spiritual wisdom to her practice.
          </p>
          
          <div class="text-center">
            <a href={url("/contact")} class="btn btn-primary text-lg px-8 py-4">
              Connect With Sanjyot
            </a>
          </div>
        </div>
      </div>
      
      <div class="animate-fade-in-up order-1 lg:order-2" style="animation-delay: 0.3s;">
        <div class="relative">
          <div class="w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={asset("/images/sanjyot.jpg")} 
              alt={about.founder.name}
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl">
            <div class="flex items-center gap-3">
              <Icon name="star" style="color: white;" size="24" />
              <div>
                <p class="font-semibold text-lg">Master Coach</p>
                <p class="text-orange-100">Founder & Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Founder Background -->
<section class="relative py-24 bg-indigo-600 text-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-20"></div>
  
  <div class="relative z-10 mx-auto max-w-5xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold mb-6">Sanjyot's Journey</h2>
      <p class="text-xl text-indigo-200 max-w-3xl mx-auto">
        A path of personal transformation that led to creating Stillness Power®
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-12">
      <div class="animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-2xl p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
            <Icon name="school" style="color: white;" size="24" />
          </div>
          <h3 class="text-2xl font-bold">Personal Journey</h3>
        </div>
        <p class="text-indigo-200 text-lg leading-relaxed">
          Born with an inherently positive attitude, Sanjyot's own journey through motherhood and personal challenges led her to seek both scientific and practical healing methods. She realizes that only inner peace and realization of the Self brings Bliss, Power, Knowledge and Ultimate Freedom that aids renewal and healing.
        </p>
      </div>
      
      <div class="animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-2xl p-8" style="animation-delay: 0.2s;">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
            <Icon name="group" style="color: white;" size="24" />
          </div>
          <h3 class="text-2xl font-bold">Teaching Philosophy</h3>
        </div>
        <p class="text-indigo-200 text-lg leading-relaxed">
          One of her greatest skills is her ability to connect with people regardless of their background, focusing primarily on Postures, Kriyas, Pranayama and Meditation in all her programs.
        </p>
      </div>
    </div>
    
    <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.4s;">
      <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
        <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
          <Icon name="lightbulb" style="color: white;" size="32" />
        </div>
        <h3 class="text-3xl font-bold mb-4">Philosophy for Skeptics</h3>
        <p class="text-2xl font-medium text-orange-200">
          "The Proof is in the Practice!"
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="relative py-24 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528319725582-ddc096101511?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-30"></div>
  
  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
      <div class="text-center">
        <h2 class="text-5xl font-bold text-gray-900 mb-6">
          Begin Your Journey Today
        </h2>
        <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the transformative power of Stillness Power® practices in a supportive, welcoming environment guided by Sanjyot's expertise.
        </p>
        
        <div class="grid md:grid-cols-3 gap-6 mb-10">
          <div class="text-center p-6">
            <div class="text-4xl mb-3">🧘‍♀️</div>
            <h3 class="font-bold text-lg text-gray-900 mb-2">Expert Guidance</h3>
            <p class="text-gray-600">20,000+ hours of teaching experience</p>
          </div>
          <div class="text-center p-6">
            <div class="text-4xl mb-3">💝</div>
            <h3 class="font-bold text-lg text-gray-900 mb-2">All Levels Welcome</h3>
            <p class="text-gray-600">From complete beginners to advanced</p>
          </div>
          <div class="text-center p-6">
            <div class="text-4xl mb-3">✨</div>
            <h3 class="font-bold text-lg text-gray-900 mb-2">Proven Results</h3>
            <p class="text-gray-600">Real transformations since 2011</p>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={url("/classes")} class="bg-purple-600 text-white hover:bg-purple-700 font-bold text-lg px-8 py-4 rounded-xl transition-colors">
            Explore Classes
          </a>
          <a href={url("/contact")} class="bg-gray-100 text-purple-600 hover:bg-gray-200 font-bold text-lg px-8 py-4 rounded-xl transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>