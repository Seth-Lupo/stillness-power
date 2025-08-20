<script lang="ts">
  import { siteContent } from '$lib/data/content';
  
  const { partners } = siteContent;
</script>

<svelte:head>
  <title>{partners.title} - Stillness Power®</title>
  <meta name="description" content="Partner with Stillness Power® to deliver holistic wellness programs to your organization or community." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-brand-sky/10 via-brand-violet/5 to-brand-lavender/10 py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        {partners.title}
      </h1>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        {partners.subtitle}
      </p>
    </div>
  </div>
</section>

<!-- Partnership Types -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Corporate Partnerships -->
      <div class="card p-8">
        <div class="flex items-center mb-6">
          <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-violet to-brand-lavender flex items-center justify-center mr-4">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-3.75 3h.75m-3.75 3h.75m-3.75 3h.75M9 21v-7.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-brand-black">
            Corporate Wellness
          </h2>
        </div>
        
        <p class="text-brand-gray mb-6">
          Bring holistic wellness to your workplace with our comprehensive corporate programs designed to reduce stress, improve focus, and enhance employee well-being.
        </p>
        
        <div class="space-y-3 mb-8">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-violet mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">On-site wellness sessions</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-violet mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">Stress reduction workshops</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-violet mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">Team building activities</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-violet mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">Flexible scheduling options</span>
          </div>
        </div>
        
        <a href="/contact" class="btn btn-primary w-full">
          Discuss Corporate Programs
        </a>
      </div>
      
      <!-- Non-Profit Partnerships -->
      <div class="card p-8">
        <div class="flex items-center mb-6">
          <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-sky to-brand-lavender flex items-center justify-center mr-4">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-brand-black">
            Non-Profit Programs
          </h2>
        </div>
        
        <p class="text-brand-gray mb-6">
          {partners.nonprofit.description}
        </p>
        
        <div class="space-y-3 mb-8">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-sky mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">One-time workshops</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-sky mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">Sustainable long-term programs</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-sky mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">Member & non-member access</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-brand-sky mr-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-brand-gray">Community-focused approach</span>
          </div>
        </div>
        
        <a href="/contact" class="btn btn-secondary w-full">
          Explore Non-Profit Options
        </a>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
        How Partnership Works
      </h2>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        Our simple process to bring Stillness Power® programs to your organization.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-brand-violet text-white flex items-center justify-center mb-6 text-2xl font-bold">
          1
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Initial Consultation
        </h3>
        <p class="text-brand-gray">
          We discuss your organization's needs, goals, and preferred program structure during a comprehensive consultation.
        </p>
      </div>
      
      <div class="text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-brand-lavender text-white flex items-center justify-center mb-6 text-2xl font-bold">
          2
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Custom Program Design
        </h3>
        <p class="text-brand-gray">
          We create a tailored wellness program that fits your schedule, space, and participant needs.
        </p>
      </div>
      
      <div class="text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-brand-sky text-white flex items-center justify-center mb-6 text-2xl font-bold">
          3
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Program Implementation
        </h3>
        <p class="text-brand-gray">
          Our certified instructors deliver high-quality sessions while you track progress and participant satisfaction.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          Partnership Benefits
        </h2>
        <p class="mt-6 text-lg text-brand-gray">
          When you partner with Stillness Power®, you're investing in proven wellness practices that create lasting positive change.
        </p>
        
        <div class="mt-8 space-y-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-brand-violet mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <div>
              <h4 class="text-lg font-semibold text-brand-black">Reduced Stress & Anxiety</h4>
              <p class="text-brand-gray">Proven techniques for managing workplace stress and promoting mental wellness.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg class="h-6 w-6 text-brand-violet mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <div>
              <h4 class="text-lg font-semibold text-brand-black">Increased Productivity</h4>
              <p class="text-brand-gray">Enhanced focus and clarity leading to improved performance and job satisfaction.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg class="h-6 w-6 text-brand-violet mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            <div>
              <h4 class="text-lg font-semibold text-brand-black">Stronger Team Cohesion</h4>
              <p class="text-brand-gray">Shared wellness experiences that build stronger relationships and team unity.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <img 
          src="/images/group.jpg" 
          alt="Group wellness session" 
          class="rounded-2xl shadow-2xl"
        />
        <div class="absolute -bottom-6 -right-6 bg-brand-sky text-white p-6 rounded-xl shadow-lg">
          <p class="font-semibold">Look for our</p>
          <p class="text-sm opacity-90">Luminous Logo</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl mb-6">
        {partners.contact.title}
      </h2>
      <p class="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
        {partners.contact.lookFor}
      </p>
      
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
        <div class="text-center mb-6">
          <div class="h-16 w-16 rounded-full bg-gradient-to-br from-brand-violet to-brand-lavender flex items-center justify-center mx-auto mb-4">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-brand-black">Ready to Partner?</h3>
          <p class="text-brand-gray mt-2">Call us to discuss terms and conditions</p>
        </div>
        
        <a 
          href="tel:978.272.1339" 
          class="btn btn-primary w-full text-xl py-4"
        >
          (978) 272-1339
        </a>
        
        <div class="mt-4">
          <a href="/contact" class="btn btn-outline w-full">
            Contact Form
          </a>
        </div>
      </div>
    </div>
  </div>
</section>