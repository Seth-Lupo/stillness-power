<script lang="ts">
  import { siteContent } from '$lib/data/content';
  
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
<section class="relative bg-gradient-to-br from-brand-sky/10 via-brand-violet/5 to-brand-lavender/10 py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        {blog.title}
      </h1>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        {blog.description}
      </p>
    </div>
  </div>
</section>

<!-- Blog Posts Grid -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each blogPosts as post, index}
        <article class="card overflow-hidden animate-slide-up" style="animation-delay: {index * 0.1}s;">
          <div class="aspect-video bg-gray-200 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="inline-block bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span class="text-brand-gray text-sm">
                {post.readTime}
              </span>
            </div>
            
            <h2 class="text-xl font-semibold text-brand-black mb-3 line-clamp-2">
              {post.title}
            </h2>
            
            <p class="text-brand-gray mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div class="flex items-center justify-between">
              <time class="text-brand-gray text-sm">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <a 
                href="/blog/{post.id}" 
                class="text-brand-violet hover:text-brand-lavender font-medium text-sm transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- Newsletter Signup -->
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="bg-white rounded-2xl shadow-lg p-12">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl mb-6">
          Stay Connected
        </h2>
        <p class="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
          Subscribe to receive wellness insights, practice tips, and updates from the Stillness Power® community.
        </p>
        
        <form class="max-w-md mx-auto">
          <div class="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent"
              required
            />
            <button
              type="submit"
              class="btn btn-primary px-8"
            >
              Subscribe
            </button>
          </div>
          <p class="text-brand-gray text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
