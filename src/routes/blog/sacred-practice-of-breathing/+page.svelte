<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  
  const post = {
    id: 1,
    title: "The Sacred Practice of Breathing",
    excerpt: "\"Oh, Eternal One, my breath being Yours, teach me to inhale and exhale with the same Bliss, so I can truly accept the duality in this earthly life.\" Discover how conscious breathing connects us to divine stillness.",
    date: "2012-10-26",
    readTime: "4 min read",
    category: "Breath Work",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&auto=format",
    content: `
      <div class="opening-quote">
        <blockquote class="text-2xl italic text-purple-800 font-light mb-8 p-6 border-l-4 border-purple-400 bg-purple-50 rounded-r-lg">
          "Oh, Eternal One, my breath being Yours, teach me to inhale and exhale with the same Bliss, so I can truly accept the duality in this earthly life."
        </blockquote>
      </div>

      <p class="lead-paragraph">Breathing is not merely a biological function—it is a sacred bridge between the physical and spiritual realms. In the ancient teachings that form the foundation of Stillness Power®, we understand that our breath is literally the breath of the Divine flowing through us.</p>
      
      <h3>The Prayer of Breath</h3>
      <p>This prayer encapsulates the essence of conscious breathing practice. When we breathe with awareness, we acknowledge that each inhalation brings us divine energy, and each exhalation releases what no longer serves us. This creates a continuous cycle of renewal and purification.</p>
      
      <div class="practice-section">
        <h3>Practical Breathing Techniques</h3>
        <p>In our Stillness Power® classes, we practice specific breathing patterns that help quiet the mind and open the heart:</p>
        
        <div class="technique-grid">
          <div class="technique-card">
            <h4>Divine Breath</h4>
            <p>Equal length inhales and exhales, connecting to universal rhythm</p>
          </div>
          
          <div class="technique-card">
            <h4>Cleansing Breath</h4>
            <p>Longer exhales to release tension and negativity</p>
          </div>
          
          <div class="technique-card">
            <h4>Energizing Breath</h4>
            <p>Focused inhales to draw in life force energy</p>
          </div>
        </div>
      </div>
      
      <div class="call-to-action">
        <p class="text-lg font-semibold text-center p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border border-purple-200">
          Remember: <span class="text-purple-700">"The PROOF is in the PRACTICE."</span> Only through consistent, devoted practice will you experience the transformative power of conscious breathing.
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
  
  :global(.article-content .practice-section) {
    margin: 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
    border-radius: 1rem;
    border: 1px solid #e9d5ff;
  }
  
  :global(.article-content .technique-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  :global(.article-content .technique-card) {
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  :global(.article-content .technique-card:hover) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  }
  
  :global(.article-content .technique-card h4) {
    color: #7c3aed;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  :global(.article-content .technique-card p) {
    margin-bottom: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  :global(.article-content .call-to-action) {
    margin: 3rem 0;
  }
  
  :global(.article-content .call-to-action p) {
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
    color: #a855f7;
    opacity: 0.3;
    font-family: serif;
  }
</style>