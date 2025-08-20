<script lang="ts">
  import { siteContent } from '$lib/data/content';
  
  const { homepage } = siteContent;
  
  const classDetails = [
    {
      name: "Stillness Power® Traditional",
      description: "Our foundational practice combining meditation, gentle movement, and breathwork. Perfect for beginners and experienced practitioners alike.",
      features: [
        "Guided meditation techniques",
        "Gentle yoga movements", 
        "Breathing exercises",
        "Stress reduction practices",
        "Mind-body awareness"
      ],
      duration: "60 minutes",
      level: "All levels welcome",
      image: "/images/om-40.jpg"
    },
    {
      name: "Stillness Power® Aerial",
      description: "An elevated practice that incorporates aerial techniques to deepen your mind-body connection and enhance flexibility.",
      features: [
        "Aerial yoga elements",
        "Enhanced flexibility training",
        "Core strengthening",
        "Balance improvement",
        "Unique perspective on practice"
      ],
      duration: "75 minutes", 
      level: "Intermediate recommended",
      image: "/images/group.jpg"
    },
    {
      name: "Stillness Power® Virtual",
      description: "Interactive online sessions that bring our holistic wellness practices directly to your home with personalized guidance.",
      features: [
        "Live interactive sessions",
        "Personalized instruction",
        "Home practice adaptation",
        "Community connection",
        "Flexible scheduling"
      ],
      duration: "45-60 minutes",
      level: "All levels welcome", 
      image: "/images/om-40.jpg"
    }
  ];
</script>

<svelte:head>
  <title>Classes & Services - Stillness Power®</title>
  <meta name="description" content="Explore our range of holistic wellness practices including Traditional, Aerial, and Virtual Stillness Power® sessions." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-brand-lavender/10 via-brand-sky/5 to-brand-violet/10 py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        Classes & Services
      </h1>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        Discover our comprehensive range of holistic wellness practices designed to nurture your mind, body, and spirit.
      </p>
    </div>
  </div>
</section>

<!-- Class Types Grid -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="space-y-16">
      {#each classDetails as classItem, index}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center {index % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
          <div class="{index % 2 === 1 ? 'lg:order-2' : ''}">
            <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              {classItem.name}
            </h2>
            <p class="mt-6 text-lg text-brand-gray leading-relaxed">
              {classItem.description}
            </p>
            
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-brand-black mb-2">Duration</h4>
                <p class="text-brand-gray">{classItem.duration}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-brand-black mb-2">Level</h4>
                <p class="text-brand-gray">{classItem.level}</p>
              </div>
            </div>
            
            <div class="mt-8">
              <h4 class="font-semibold text-brand-black mb-4">What's Included:</h4>
              <ul class="space-y-2">
                {#each classItem.features as feature}
                  <li class="flex items-center text-brand-gray">
                    <svg class="h-5 w-5 text-brand-violet mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                {/each}
              </ul>
            </div>
            
            <div class="mt-8">
              <a href="/contact" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
          
          <div class="{index % 2 === 1 ? 'lg:order-1' : ''}">
            <div class="relative">
              <img 
                src={classItem.image}
                alt={classItem.name}
                class="rounded-2xl shadow-2xl w-full"
              />
              <div class="absolute -bottom-6 -right-6 bg-brand-violet text-white p-4 rounded-xl shadow-lg">
                <p class="font-semibold text-sm">{classItem.level}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Studio Info Section -->
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
        Visit Our Studio
      </h2>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        {homepage.sessions.description}
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-violet to-brand-lavender flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          OM Studio Central
        </h3>
        <p class="text-brand-gray">
          70 Princeton St, Suite 2<br>
          N Chelmsford, MA 01863
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-sky to-brand-lavender flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          Daily Classes
        </h3>
        <p class="text-brand-gray">
          Multiple sessions throughout the week with beginner-friendly options available.
        </p>
      </div>
      
      <div class="card p-8 text-center">
        <div class="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-brand-lavender to-brand-sky flex items-center justify-center mb-6">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-brand-black mb-4">
          All Levels Welcome
        </h3>
        <p class="text-brand-gray">
          Whether you're a beginner or experienced practitioner, find your perfect class level.
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
        Ready to Begin Your Practice?
      </h2>
      <p class="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
        Join us at OM Studio Central and experience the transformative power of Stillness Power® practices.
      </p>
      <div class="mt-8 flex items-center justify-center gap-x-6">
        <a href="/contact" class="bg-white text-brand-violet hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
          Get Started Today
        </a>
        <a href="/testimonials" class="text-white hover:text-white/80 font-semibold">
          Read Success Stories →
        </a>
      </div>
    </div>
  </div>
</section>