<script lang="ts">
  import { siteContent } from '$lib/data/content';
  
  const { testimonials } = siteContent;
</script>

<svelte:head>
  <title>Testimonials - Stillness Power®</title>
  <meta name="description" content="Read what our students say about their transformative experiences with Stillness Power® practices." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-brand-lavender/10 via-brand-sky/5 to-brand-violet/10 py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        Student Stories
      </h1>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        Discover how Stillness Power® practices have transformed the lives of our community members through their own words.
      </p>
    </div>
  </div>
</section>

<!-- Testimonials Grid -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {#each testimonials as testimonial, index}
        <div class="card p-8 animate-slide-up" style="animation-delay: {index * 0.2}s;">
          <div class="flex items-center mb-6">
            <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-violet to-brand-lavender flex items-center justify-center mr-4">
              <span class="text-white font-bold text-lg">
                {testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-brand-black">
                {testimonial.author}
              </h3>
              <p class="text-brand-gray text-sm">Stillness Power® Student</p>
            </div>
          </div>
          
          <blockquote class="text-brand-gray leading-relaxed">
            <svg class="h-6 w-6 text-brand-violet mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M26.667 16h-5.333c0-4.418 3.582-8 8-8v-2.667c-5.891 0-10.667 4.776-10.667 10.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c1.473 0 2.667-1.194 2.667-2.667v-5.333c0-1.473-1.194-2.667-2.667-2.667zM10.667 16h-5.333c0-4.418 3.582-8 8-8v-2.667c-5.891 0-10.667 4.776-10.667 10.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c1.473 0 2.667-1.194 2.667-2.667v-5.333c0-1.473-1.194-2.667-2.667-2.667z"/>
            </svg>
            "{testimonial.text}"
          </blockquote>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Benefits Highlight -->
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
        What Students Experience
      </h2>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        Common benefits reported by our Stillness Power® community members.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-violet to-brand-lavender flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Stress Relief
        </h3>
        <p class="text-brand-gray">
          Experience significant reduction in stress and anxiety through mindful breathing and movement practices.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-sky to-brand-lavender flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Physical Healing
        </h3>
        <p class="text-brand-gray">
          Gentle movements and breathwork support the body's natural healing processes and improve mobility.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-lavender to-brand-sky flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Inner Peace
        </h3>
        <p class="text-brand-gray">
          Discover deeper self-awareness and lasting peace through meditative practices and community support.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-violet to-brand-sky flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Increased Energy
        </h3>
        <p class="text-brand-gray">
          Feel revitalized and energized after each session, with lasting effects throughout your daily life.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-sky to-brand-violet flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Community Connection
        </h3>
        <p class="text-brand-gray">
          Build meaningful relationships with like-minded individuals on similar wellness journeys.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-lavender to-brand-violet flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Life Perspective
        </h3>
        <p class="text-brand-gray">
          Gain new insights and a refreshed perspective on life's challenges and opportunities.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Success Story Highlight -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="bg-gradient-to-r from-brand-violet/5 to-brand-lavender/5 rounded-3xl p-12">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl mb-8">
          A Transformative Journey
        </h2>
        
        <blockquote class="text-xl text-brand-gray leading-relaxed max-w-4xl mx-auto">
          <svg class="h-8 w-8 text-brand-violet mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
            <path d="M26.667 16h-5.333c0-4.418 3.582-8 8-8v-2.667c-5.891 0-10.667 4.776-10.667 10.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c1.473 0 2.667-1.194 2.667-2.667v-5.333c0-1.473-1.194-2.667-2.667-2.667zM10.667 16h-5.333c0-4.418 3.582-8 8-8v-2.667c-5.891 0-10.667 4.776-10.667 10.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c1.473 0 2.667-1.194 2.667-2.667v-5.333c0-1.473-1.194-2.667-2.667-2.667z"/>
          </svg>
          "I started out classes with severe inflammation in my knees and pelvis, they were pretty immobile. I felt nothing but praise and encouragement to do the classes in a chair until the effect of the movement and breathing slowly enabled me to do more and more of the work on the yoga mat. Every week the problems in my joints as well as the ones in my head seemed to lighten up more. Each class is a high point for me to look forward to. I am very grateful and blessed to have these classes at this very highly stressful time of my life. They are a Godsend."
        </blockquote>
        
        <footer class="mt-8">
          <p class="text-lg font-semibold text-brand-black">Julie</p>
          <p class="text-brand-gray">Long-time Stillness Power® Student</p>
        </footer>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-brand-violet to-brand-lavender py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Ready to Write Your Own Success Story?
      </h2>
      <p class="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
        Join our welcoming community and discover the transformative power of Stillness Power® practices for yourself.
      </p>
      <div class="mt-8 flex items-center justify-center gap-x-6">
        <a href="/classes" class="bg-white text-brand-violet hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
          Explore Classes
        </a>
        <a href="/contact" class="text-white hover:text-white/80 font-semibold">
          Contact Us →
        </a>
      </div>
    </div>
  </div>
</section>