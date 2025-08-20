<script lang="ts">
  import { siteContent } from '$lib/data/content';
  
  const { about } = siteContent;
</script>

<svelte:head>
  <title>{about.title} - Stillness Power®</title>
  <meta name="description" content={about.founder.bio} />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-brand-sky/10 via-brand-lavender/5 to-brand-violet/10 py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        {about.title}
      </h1>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        Meet the dedicated individuals behind Stillness Power® and our commitment to holistic wellness.
      </p>
    </div>
  </div>
</section>

<!-- Founder Section -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="order-2 lg:order-1">
        <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          {about.founder.name}
        </h2>
        <p class="mt-2 text-xl text-brand-violet font-medium">
          {about.founder.title}
        </p>
        
        <blockquote class="mt-8 p-6 bg-gray-50 border-l-4 border-brand-violet rounded-r-lg">
          <p class="text-lg italic text-brand-gray">
            "{about.founder.quote}"
          </p>
          <footer class="mt-4 text-brand-black font-medium">
            - {about.founder.name}
          </footer>
        </blockquote>
        
        <p class="mt-8 text-lg text-brand-gray leading-relaxed">
          {about.founder.bio}
        </p>
        
        <div class="mt-8">
          <a href="/contact" class="btn btn-primary">
            Connect With Sanjyot
          </a>
        </div>
      </div>
      
      <div class="order-1 lg:order-2">
        <div class="relative">
          <img 
            src="/images/sanjyot.jpg" 
            alt={about.founder.name}
            class="rounded-2xl shadow-2xl w-full"
          />
          <div class="absolute -bottom-6 -right-6 bg-brand-sky text-white p-6 rounded-xl shadow-lg">
            <p class="font-semibold">Master Coach</p>
            <p class="text-sm opacity-90">Founder & Creator</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
        Our Core Values
      </h2>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        The principles that guide our approach to holistic wellness and community building.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-violet to-brand-lavender flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Holistic Wellness
        </h3>
        <p class="text-brand-gray">
          We believe in treating the whole person - mind, body, and spirit - through integrated practices.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-sky to-brand-lavender flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Community Focus
        </h3>
        <p class="text-brand-gray">
          Building supportive communities where everyone can grow and heal together on their wellness journey.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-lavender to-brand-sky flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Accessible Learning
        </h3>
        <p class="text-brand-gray">
          Making wellness practices simple, easy, and accessible to people of all backgrounds and abilities.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-brand-violet to-brand-lavender py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Join Our Wellness Community
      </h2>
      <p class="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
        Experience the transformative power of Stillness Power® practices in a supportive, welcoming environment.
      </p>
      <div class="mt-8">
        <a href="/classes" class="bg-white text-brand-violet hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
          View Our Classes
        </a>
      </div>
    </div>
  </div>
</section>