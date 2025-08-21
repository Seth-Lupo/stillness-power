<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  
  const post = {
    id: 3,
    title: "Finding Light Within: The Spiritual Path",
    excerpt: "\"Lord, always keep me in Your Light so I don't drift away.\" Explore how yoga practice becomes a spiritual journey of connection and divine guidance.",
    date: "2012-08-24",
    readTime: "5 min read",
    category: "Spiritual Practice",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&auto=format",
    content: `
      <div class="opening-quote">
        <blockquote class="text-2xl italic text-purple-800 font-light mb-8 p-6 border-l-4 border-purple-400 bg-purple-50 rounded-r-lg">
          "Lord, always keep me in Your Light so I don't drift away."
        </blockquote>
      </div>

      <p class="lead-paragraph">This heartfelt prayer reflects the essence of spiritual practice—maintaining our connection to the Divine light that guides and sustains us.</p>
      
      <div class="concept-section">
        <h3>Yoga as Spiritual Practice</h3>
        <p>While many people see yoga as physical exercise, true yoga is a spiritual discipline that unites us with the Divine. Every posture, every breath, every moment of practice is an opportunity to deepen this sacred connection.</p>
        
        <div class="insight-card">
          <p class="font-medium text-purple-800">In Stillness Power®, we approach yoga as a form of moving prayer. Each movement is offered with devotion, each breath is a communication with the sacred, and each moment of stillness is a homecoming to our true nature.</p>
        </div>
      </div>
      
      <div class="practice-section">
        <h3>Staying in the Light</h3>
        <p>Life has a way of pulling us into darkness—stress, fear, anger, and confusion can cloud our perception and make us feel separate from the Divine. But through consistent spiritual practice, we learn to stay anchored in the Light:</p>
        
        <div class="practice-grid">
          <div class="practice-card">
            <div class="practice-icon">🧘</div>
            <h4>Daily Practice</h4>
            <p>Regular meditation and movement keep us connected</p>
          </div>
          
          <div class="practice-card">
            <div class="practice-icon">🌟</div>
            <h4>Mindful Living</h4>
            <p>Bringing awareness to all activities throughout the day</p>
          </div>
          
          <div class="practice-card">
            <div class="practice-icon">💝</div>
            <h4>Service</h4>
            <p>Using our practice to help others also helps us stay aligned</p>
          </div>
          
          <div class="practice-card">
            <div class="practice-icon">🙏</div>
            <h4>Surrender</h4>
            <p>Letting go of our small will to align with Divine will</p>
          </div>
        </div>
      </div>
      
      <div class="wisdom-section">
        <h3>The Inner Light</h3>
        <p>The beautiful truth is that the Light we seek is already within us. We don't need to find it—we need to remember it, uncover it, and allow it to shine through our daily lives.</p>
        
        <p>When we practice with devotion and sincerity, we begin to embody this Light. We become beacons for others who are still searching, and our very presence becomes a gift to the world.</p>
        
        <div class="call-to-action">
          <p class="text-lg font-semibold text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-200">
            Remember: <span class="text-orange-700">You are already the Light you seek.</span> Stillness Power® practice simply helps you remember this eternal truth.
          </p>
        </div>
      </div>
    `
  };
</script>

<svelte:head>
  <title>{post.title} - Stillness Power®</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[50vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('{post.image}')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-blue-900/60"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-4xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <div class="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
          {post.category}
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <div class="flex items-center justify-center gap-6 text-purple-200">
          <div class="flex items-center gap-2">
            <Icon name="calendar_today" style="color: currentColor;" size="16" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="schedule" style="color: currentColor;" size="16" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Article Content -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-3xl px-6">
    <div class="prose prose-lg max-w-none">
      <div class="text-xl text-gray-700 leading-relaxed mb-8 font-light border-l-4 border-purple-500 pl-6 bg-purple-50 py-6 rounded-r-lg">
        {post.excerpt}
      </div>
      
      <div class="article-content text-gray-800 leading-relaxed">
        {@html post.content}
      </div>
    </div>
    
    <!-- Back to Blog -->
    <div class="mt-12 pt-8 border-t border-gray-200">
      <a href="/blog" class="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
        <Icon name="arrow_back" style="color: currentColor;" size="20" />
        Back to All Articles
      </a>
    </div>
  </div>
</section>

<style>
  :global(.article-content .lead-paragraph) {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #374151;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  :global(.article-content .insight-card) {
    background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid #8b5cf6;
    margin: 2rem 0;
  }

  :global(.article-content .insight-card p) {
    margin-bottom: 0;
    font-style: italic;
  }

  :global(.article-content h3) {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }
  
  :global(.article-content h4) {
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }
  
  :global(.article-content p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #4b5563;
    font-size: 1rem;
  }
  
  :global(.article-content .concept-section) {
    margin: 2rem 0;
  }
  
  :global(.article-content .practice-section) {
    margin: 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #fefbff 0%, #f3e8ff 100%);
    border-radius: 1rem;
    border: 1px solid #e9d5ff;
  }
  
  :global(.article-content .wisdom-section) {
    margin: 3rem 0;
  }
  
  :global(.article-content .practice-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  :global(.article-content .practice-card) {
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  :global(.article-content .practice-card:hover) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -3px rgba(0, 0, 0, 0.1);
  }
  
  :global(.article-content .practice-icon) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  :global(.article-content .practice-card h4) {
    color: #7c3aed;
    margin-bottom: 0.75rem;
  }
  
  :global(.article-content .practice-card p) {
    margin-bottom: 0;
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  :global(.article-content .call-to-action) {
    margin: 2rem 0;
  }
  
  :global(.article-content .call-to-action p) {
    margin-bottom: 0;
  }
  
  :global(.article-content strong) {
    font-weight: 600;
    color: #1f2937;
  }
  
  :global(.article-content blockquote) {
    position: relative;
  }
  
  :global(.article-content blockquote::before) {
    content: '"';
    position: absolute;
    left: -1rem;
    top: -0.5rem;
    font-size: 4rem;
    color: #a855f7;
    opacity: 0.3;
    font-family: serif;
  }
</style>