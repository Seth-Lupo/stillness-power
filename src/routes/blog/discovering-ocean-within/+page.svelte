<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { url } from '$lib/utils/paths';
  
  const post = {
    id: 5,
    title: "Discovering the Ocean Within",
    excerpt: "\"Lord, in the littlest there is an Ocean of You to be Discovered.\" Every small moment holds infinite possibility for spiritual awakening and self-realization.",
    date: "2012-08-12",
    readTime: "5 min read",
    category: "Self-Discovery",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=600&fit=crop&auto=format",
    content: `
      <div class="opening-quote">
        <blockquote class="text-2xl italic text-blue-800 font-light mb-8 p-6 border-l-4 border-blue-400 bg-blue-50 rounded-r-lg">
          "Lord, in the littlest there is an Ocean of You to be Discovered."
        </blockquote>
      </div>

      <p class="lead-paragraph">This profound truth reminds us that the infinite Divine presence is not found only in grand gestures or peak experiences—it dwells within the smallest, most ordinary moments of our lives. Every breath, every heartbeat, every moment of awareness contains the entire ocean of Divine consciousness.</p>
      
      <h3>The Infinite in the Infinitesimal</h3>
      <p>We often think we need to go somewhere else, do something special, or become someone different to connect with the Divine. But the truth is that every breath, every heartbeat, every moment of awareness contains the entire ocean of Divine consciousness.</p>
      
      <div class="wisdom-card">
        <p class="text-lg italic text-center text-blue-700 mb-0">
          A single dewdrop contains the essence of the entire ocean. Similarly, each moment of your life contains the fullness of spiritual possibility.
        </p>
      </div>
      
      <h3>Finding the Sacred in the Ordinary</h3>
      <p>In Stillness Power® practice, we learn to recognize the sacred within the everyday. These simple practices help us discover the ocean of Divine presence in ordinary moments:</p>
      
      <div class="practice-grid">
        <div class="practice-card">
          <h4>Mindful Breathing</h4>
          <p>Each breath is communion with universal life force</p>
        </div>
        
        <div class="practice-card">
          <h4>Present Moment Awareness</h4>
          <p>This moment is the only place the Divine can be met</p>
        </div>
        
        <div class="practice-card">
          <h4>Loving Attention</h4>
          <p>Whatever we attend to with love reveals its sacred nature</p>
        </div>
        
        <div class="practice-card">
          <h4>Inner Listening</h4>
          <p>The small voice within connects us to infinite wisdom</p>
        </div>
      </div>
      
      <div class="meditation-section">
        <h3>The Practice of Micro-Meditations</h3>
        <p>You don't need hours of formal practice to discover the ocean within. Try these micro-meditations throughout your day:</p>
        
        <div class="micro-meditation-list">
          <div class="meditation-item">
            <div class="meditation-number">1</div>
            <div class="meditation-content">
              <h4>Three Conscious Breaths</h4>
              <p>Stop and breathe mindfully three times</p>
            </div>
          </div>
          
          <div class="meditation-item">
            <div class="meditation-number">2</div>
            <div class="meditation-content">
              <h4>Gratitude Moment</h4>
              <p>Appreciate something small and beautiful</p>
            </div>
          </div>
          
          <div class="meditation-item">
            <div class="meditation-number">3</div>
            <div class="meditation-content">
              <h4>Body Check-in</h4>
              <p>Feel your feet on the ground, your breath flowing</p>
            </div>
          </div>
          
          <div class="meditation-item">
            <div class="meditation-number">4</div>
            <div class="meditation-content">
              <h4>Heart Opening</h4>
              <p>Send love to yourself or someone else</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3>The Vastness of Now</h3>
      <p>When you truly drop into the present moment—when you stop the mental commentary and simply BE—you discover that this moment is not small at all. It is vast, unlimited, pregnant with infinite possibility.</p>
      
      <p>In this recognition, you realize that you are not a small person having a small experience. You are the ocean of consciousness itself, temporarily expressing as a wave of individual awareness.</p>
      
      <div class="realization-section">
        <p class="text-xl font-semibold text-center p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg border border-blue-200">
          The little self dissolves into the Ocean of Being, and you remember who you really are. 
          <span class="text-blue-700">This is the greatest discovery possible, and it's available in every single moment.</span>
        </p>
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
      <a href={url("/blog")} class="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
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

  :global(.article-content h3) {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #dbeafe;
  }
  
  :global(.article-content h4) {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.75rem;
  }
  
  :global(.article-content p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #4b5563;
    font-size: 1rem;
  }
  
  :global(.article-content .wisdom-card) {
    margin: 2rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: 1rem;
    border: 1px solid #bfdbfe;
    text-align: center;
  }
  
  :global(.article-content .practice-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  :global(.article-content .practice-card) {
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);
    border: 1px solid #e0e7ff;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  :global(.article-content .practice-card:hover) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -3px rgba(59, 130, 246, 0.15);
  }
  
  :global(.article-content .practice-card h4) {
    color: #2563eb;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  :global(.article-content .practice-card p) {
    margin-bottom: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  :global(.article-content .meditation-section) {
    margin: 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-radius: 1rem;
    border: 1px solid #bae6fd;
  }
  
  :global(.article-content .micro-meditation-list) {
    margin-top: 2rem;
  }
  
  :global(.article-content .meditation-item) {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    border: 1px solid #e0f2fe;
  }
  
  :global(.article-content .meditation-number) {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  :global(.article-content .meditation-content h4) {
    color: #0284c7;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  
  :global(.article-content .meditation-content p) {
    margin-bottom: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  :global(.article-content .realization-section) {
    margin: 3rem 0;
  }
  
  :global(.article-content .realization-section p) {
    margin-bottom: 0;
  }
  
  :global(.article-content ul) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  :global(.article-content ol) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  :global(.article-content li) {
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }
  
  :global(.article-content ul li) {
    list-style-type: disc;
  }
  
  :global(.article-content ol li) {
    list-style-type: decimal;
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
    color: #3b82f6;
    opacity: 0.3;
    font-family: serif;
  }
</style>