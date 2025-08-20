<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
  
  const { blog } = siteContent;
  
  // Sample blog posts - in a real implementation these would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Breath and Wellness",
      excerpt: "Discover how conscious breathing practices create lasting changes in your nervous system and overall well-being.",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Wellness Science",
      image: "/images/om-40.jpg"
    },
    {
      id: 2,
      title: "Building a Daily Mindfulness Practice",
      excerpt: "Simple, practical steps to integrate stillness and mindfulness into your everyday routine for lasting peace.",
      date: "2024-03-10",
      readTime: "7 min read",
      category: "Practice Tips",
      image: "/images/group.jpg"
    },
    {
      id: 3,
      title: "Holistic Approaches to Stress Management",
      excerpt: "Explore how combining movement, breath, and meditation creates a comprehensive approach to managing modern stress.",
      date: "2024-03-05",
      readTime: "6 min read", 
      category: "Stress Relief",
      image: "/images/om-40.jpg"
    }
  ];
</script>

<svelte:head>
  <title>{blog.title} - Stillness Power®</title>
  <meta name="description" content={blog.description} />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-blue-900/70"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-6xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span class="inline-block animate-slide-up" style="animation-delay: 0.3s;">Wellness</span>
          <span class="inline-block animate-slide-up text-orange-400" style="animation-delay: 0.5s;">Insights</span>
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <p class="text-xl md:text-2xl mb-12 text-purple-100 font-light max-w-3xl mx-auto">
          {blog.description}
        </p>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.9s;">
        <a href="#articles" class="btn btn-primary text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          Explore Articles
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Blog Posts Grid -->
<section id="articles" class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">Latest Articles</h2>
      <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Explore insights on wellness, mindfulness, and transformative practices to support your journey.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each blogPosts as post, index}
        {@const colors = ['from-purple-500 to-pink-500', 'from-blue-500 to-indigo-600', 'from-orange-500 to-red-500']}
        
        <article class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-purple-100/50 group hover:scale-105 transition-all duration-300" style="animation-delay: {index * 0.2}s;">
          <div class="relative aspect-video bg-gray-200 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 left-4">
              <span class="inline-block bg-gradient-to-r {colors[index % colors.length]} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {post.category}
              </span>
            </div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
              <Icon name="schedule" style="color: #7c3aed;" size="16" />
            </div>
          </div>
          
          <div class="p-8">
            <div class="flex items-center justify-between mb-4">
              <span class="text-purple-600 text-sm font-medium">
                {post.readTime}
              </span>
              <time class="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            
            <h2 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
              {post.title}
            </h2>
            
            <p class="text-gray-700 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <a 
              href="/blog/{post.id}" 
              class="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-bold transition-colors duration-200 group/link"
            >
              Read Full Article
              <Icon name="arrow_forward" style="color: currentColor;" size="16" class="group-hover/link:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- Newsletter & Community Section -->
<section class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  
  <div class="relative z-10 mx-auto max-w-4xl px-6">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Community Stats -->
      <div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Join Our Wellness Community</h2>
        <p class="text-lg text-gray-700 mb-8">
          Connect with like-minded individuals on a journey of self-discovery and holistic wellness.
        </p>
        
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-xl">500+</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900">Students Transformed</h3>
              <p class="text-gray-600">Since 2011</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-xl">10+</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900">Years of Experience</h3>
              <p class="text-gray-600">Proven practices</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900">Class Types</h3>
              <p class="text-gray-600">Traditional, Aerial, Virtual</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Next Steps Card -->
      <div>
        <div class="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-3xl p-8 border border-purple-200">
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="spa" style="color: white;" size="32" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Ready for Your First Class?</h3>
            <p class="text-gray-700">Take the next step in your wellness journey</p>
          </div>
          
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <span class="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span class="text-gray-800">Browse our class offerings</span>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span class="text-gray-800">Contact us with questions</span>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <span class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span class="text-gray-800">Book your first session</span>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col gap-3 mt-8">
            <a href="/classes" class="bg-purple-600 text-white hover:bg-purple-700 font-bold py-3 px-6 rounded-lg text-center transition-colors">
              View Classes
            </a>
            <a href="/contact" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-lg text-center transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
