<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  
  const post = {
    id: 4,
    title: "Listening to Nature's Whispers",
    excerpt: "\"Whispers of Nature can be heard only by a Blissful Heart.\" How mindfulness practice opens our awareness to the subtle teachings around us every day.",
    date: "2012-10-14",
    readTime: "4 min read",
    category: "Mindfulness",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&auto=format",
    content: `
      <div class="opening-quote">
        <blockquote class="text-2xl italic text-green-800 font-light mb-8 p-6 border-l-4 border-green-400 bg-green-50 rounded-r-lg">
          "Whispers of Nature can be heard only by a Blissful Heart."
        </blockquote>
      </div>

      <p class="lead-paragraph">Nature is constantly speaking to us, offering wisdom, guidance, and healing. But to hear these subtle messages, we must cultivate a heart filled with bliss—a state of open, joyful awareness.</p>
      
      <div class="concept-section">
        <h3>The Language of Nature</h3>
        <p>Nature communicates through countless channels: the rhythm of waves, the dance of leaves in wind, the patient growth of trees, the cycles of seasons. These are not random events but profound teachings about life, impermanence, resilience, and grace.</p>
        
        <div class="insight-card">
          <p class="font-medium text-green-800">When we practice mindfulness in nature, we begin to understand this language. We see that we are not separate from nature—we ARE nature, temporarily expressing itself in human form.</p>
        </div>
      </div>
      
      <div class="practice-section">
        <h3>Cultivating a Blissful Heart</h3>
        <p>A blissful heart is not one that is always happy—it's a heart that is open, receptive, and filled with wonder. It's the heart of a child who sees magic everywhere, combined with the wisdom of someone who has learned to trust life's unfolding.</p>
        
        <div class="cultivation-grid">
          <div class="cultivation-card">
            <h4>Gratitude Practice</h4>
            <p>Appreciating the beauty that surrounds us daily</p>
          </div>
          <div class="cultivation-card">
            <h4>Present Moment Awareness</h4>
            <p>Fully experiencing what is here now</p>
          </div>
          <div class="cultivation-card">
            <h4>Wonder and Curiosity</h4>
            <p>Approaching life with fresh eyes</p>
          </div>
          <div class="cultivation-card">
            <h4>Loving-Kindness</h4>
            <p>Extending compassion to all beings</p>
          </div>
        </div>
      </div>
      
      <div class="meditation-section">
        <h3>Practical Nature Meditation</h3>
        <div class="meditation-steps">
          <div class="step">
            <span class="step-number">1</span>
            <p>Sit quietly in a natural setting. Close your eyes and listen. What do you hear? The wind? Birds? Insects? Your own heartbeat?</p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>Now open your eyes and really look. Notice colors, textures, movements. See if you can feel the life force energy flowing through everything, including yourself.</p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>Ask nature: "What do you want to teach me today?" Then listen with your whole being. The answer may come as a feeling, an image, a knowing, or simply a sense of peace.</p>
          </div>
        </div>
        
        <div class="call-to-action">
          <p class="text-lg font-semibold text-center p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-200">
            When we learn to listen to nature's whispers, we reconnect with our own natural wisdom and find guidance for every aspect of our lives.
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
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid #22c55e;
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
    color: #059669;
    margin-bottom: 0.5rem;
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
    background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
    border-radius: 1rem;
    border: 1px solid #bbf7d0;
  }
  
  :global(.article-content .meditation-section) {
    margin: 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
    border-radius: 1rem;
    border: 1px solid #fde047;
  }
  
  :global(.article-content .cultivation-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  
  :global(.article-content .cultivation-card) {
    background: white;
    padding: 1.25rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #d1fae5;
  }
  
  :global(.article-content .meditation-steps) {
    margin-top: 2rem;
  }
  
  :global(.article-content .step) {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    border: 1px solid #fbbf24;
  }
  
  :global(.article-content .step-number) {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
  }
  
  :global(.article-content .step p) {
    margin-bottom: 0;
    flex: 1;
  }
  
  :global(.article-content .call-to-action) {
    margin: 2rem 0;
  }
  
  :global(.article-content .call-to-action p) {
    margin-bottom: 0;
  }
  
  :global(.article-content blockquote::before) {
    content: '"';
    position: absolute;
    left: -1rem;
    top: -0.5rem;
    font-size: 4rem;
    color: #22c55e;
    opacity: 0.3;
    font-family: serif;
  }
</style>