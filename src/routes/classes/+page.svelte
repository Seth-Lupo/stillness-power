<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
   import { asset} from '$lib/utils/paths';
  
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
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop&auto=format"
    }
  ];
</script>

<svelte:head>
  <title>Classes & Services - Stillness Power®</title>
  <meta name="description" content="Explore our range of holistic wellness practices including Traditional, Aerial, and Virtual Stillness Power® sessions." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-blue-900/70"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-6xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span class="inline-block animate-slide-up" style="animation-delay: 0.3s;">Classes &</span>
          <span class="inline-block animate-slide-up text-orange-400" style="animation-delay: 0.5s;">Services</span>
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <p class="text-xl md:text-2xl mb-12 text-purple-100 font-light max-w-3xl mx-auto">
          Discover our comprehensive range of holistic wellness practices designed to nurture your mind, body, and spirit.
        </p>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.9s;">
        <a href="#classes" class="btn btn-primary text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          Explore Our Classes
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Class Types Grid -->
<section id="classes" class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">Our Practice Types</h2>
      <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Each practice type is thoughtfully designed to meet you where you are on your wellness journey.
      </p>
    </div>
    
    <div class="space-y-16">
      {#each classDetails as classItem, index}
        {@const colors = ['from-purple-500 to-pink-500', 'from-blue-500 to-indigo-600', 'from-orange-500 to-red-500']}
        {@const iconNames = ['self_improvement', 'raven', 'videocam']}
        
        <div class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50" style="animation-delay: {index * 0.2}s;">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="{index % 2 === 1 ? 'lg:order-2' : ''}">
              <div class="flex items-center gap-4 mb-6">
                <div class="bg-gradient-to-br {colors[index]} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl">
                  <Icon name="{iconNames[index]}" style="color: white;" size="32" />
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                  {classItem.name}
                </h2>
              </div>
              
              <p class="text-lg text-gray-700 leading-relaxed mb-8">
                {classItem.description}
              </p>
              
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div class="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-xl border border-purple-200">
                  <div class="flex items-center gap-2 mb-2">
                    <Icon name="schedule" style="color: #7c3aed;" size="20" />
                    <h4 class="font-semibold text-gray-900">Duration</h4>
                  </div>
                  <p class="text-gray-700">{classItem.duration}</p>
                </div>
                <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl border border-blue-200">
                  <div class="flex items-center gap-2 mb-2">
                    <Icon name="trending_up" style="color: #3b82f6;" size="20" />
                    <h4 class="font-semibold text-gray-900">Level</h4>
                  </div>
                  <p class="text-gray-700">{classItem.level}</p>
                </div>
              </div>
              
              <div class="mb-8">
                <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="check_circle" style="color: #10b981;" size="20" />
                  What's Included:
                </h4>
                <ul class="space-y-3">
                  {#each classItem.features as feature}
                    <li class="flex items-center text-gray-700">
                      <div class="w-2 h-2 bg-gradient-to-r {colors[index]} rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  {/each}
                </ul>
              </div>
              
              <a href={url("/contact")} class="btn btn-primary text-lg px-8 py-4">
                Learn More & Book
              </a>
            </div>
            
            <div class="{index % 2 === 1 ? 'lg:order-1' : ''}">
              <div class="relative group">
                <div class="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={asset(classItem.image)}
                    alt={classItem.name}
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="absolute -bottom-6 -right-6 bg-gradient-to-br {colors[index]} text-white p-4 rounded-2xl shadow-2xl">
                  <div class="flex items-center gap-2">
                    <Icon name="star" style="color: white;" size="20" />
                    <p class="font-semibold">{classItem.level}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Studio Info Section -->
<section class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-5xl px-6">
    <div class="text-center animate-fade-in-up mb-16">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">Visit Our Studio</h2>
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
            <div>
              <p class="font-semibold text-gray-800">OM Studio Central</p>
              <p class="text-gray-600 text-sm">North Chelmsford, MA</p>
            </div>
          </div>
          
          <div class="hidden md:block w-px h-8 bg-gray-300"></div>
          
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Icon name="schedule" style="color: white;" size="24" />
            </div>
            <div>
              <p class="font-semibold text-gray-800">Daily Classes</p>
              <p class="text-gray-600 text-sm">Multiple sessions weekly</p>
            </div>
          </div>
          
          <div class="hidden md:block w-px h-8 bg-gray-300"></div>
          
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Icon name="group" style="color: white;" size="24" />
            </div>
            <div>
              <p class="font-semibold text-gray-800">All Levels Welcome</p>
              <p class="text-gray-600 text-sm">Beginner to advanced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Getting Started Guide -->
<section class="py-24 bg-white">
  <div class="mx-auto max-w-4xl px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-6">Your First Class</h2>
      <p class="text-xl text-gray-700">Everything you need to know to get started with confidence</p>
    </div>
    
    <div class="space-y-8">
      <div class="flex items-start gap-6 p-6 bg-purple-50 rounded-2xl">
        <div class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Choose Your Class</h3>
          <p class="text-gray-700">Start with Traditional classes if you're new to practice, or try Aerial for a unique experience. Virtual sessions are perfect for busy schedules.</p>
        </div>
      </div>
      
      <div class="flex items-start gap-6 p-6 bg-blue-50 rounded-2xl">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">What to Bring</h3>
          <p class="text-gray-700">Just yourself and comfortable clothing! We provide all mats, props, and equipment. Come hydrated and ready to relax.</p>
        </div>
      </div>
      
      <div class="flex items-start gap-6 p-6 bg-green-50 rounded-2xl">
        <div class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Arrive Early</h3>
          <p class="text-gray-700">Plan to arrive 10-15 minutes before class starts. This gives you time to settle in and chat with Sanjyot about any questions or concerns.</p>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-12 p-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
      <p class="text-gray-700 mb-6">Contact us to book your first class or ask any questions</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={url("/contact")} class="bg-purple-600 text-white hover:bg-purple-700 font-semibold px-8 py-3 rounded-lg transition-colors">
          Book Your First Class
        </a>
        <a href="https://omstudiocentral.com/schedule-2/" target="_blank" class="bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 rounded-lg transition-colors">
          View Schedule
        </a>
      </div>
    </div>
  </div>
</section>