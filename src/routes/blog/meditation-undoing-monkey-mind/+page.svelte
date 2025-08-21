<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  
  const post = {
    id: 2,
    title: "Meditation: Undoing the Mischief of the Monkey Mind",
    excerpt: "MEDITATE and UNDO the MISCHIEF done by the MONKEY MIND. Learn practical techniques to quiet mental chatter and find your inner stillness through dedicated practice.",
    date: "2013-01-21",
    readTime: "6 min read",
    category: "Meditation",
    image: "https://images.unsplash.com/photo-1549540806-76ce9007b674?w=1200&h=600&fit=crop&auto=format",
    content: `
      <div class="opening-quote">
        <blockquote class="text-2xl italic text-purple-800 font-light mb-8 p-6 border-l-4 border-purple-400 bg-purple-50 rounded-r-lg">
          "MEDITATE and UNDO the MISCHIEF done by the MONKEY MIND"
        </blockquote>
      </div>

      <p class="lead-paragraph">We all know the monkey mind—that restless, chattering voice that jumps from thought to thought, creating mischief in our inner peace. Meditation is our tool to tame this wild mind and find the stillness within.</p>
      
      <div class="concept-section">
        <h3>Understanding the Monkey Mind</h3>
        <p>The monkey mind represents our untrained consciousness—always moving, always seeking, never satisfied. It creates stories, worries about the future, regrets the past, and rarely allows us to be present in the moment.</p>
        
        <p class="highlight-text">But through the practice of meditation, we can UNDO this mischief. We can train our minds to find peace, clarity, and connection to our highest Self.</p>
      </div>
      
      <div class="practice-section">
        <h3>Meditation Techniques for Stillness</h3>
        <p>In Stillness Power® practice, meditation is not about forcing the mind to be empty—it's about observing and gradually training it:</p>
        
        <div class="technique-list">
          <div class="technique-item">
            <div class="technique-number">1</div>
            <div class="technique-content">
              <h4>Breath Awareness</h4>
              <p>Simply watch your breath without trying to change it</p>
            </div>
          </div>
          
          <div class="technique-item">
            <div class="technique-number">2</div>
            <div class="technique-content">
              <h4>Mantra Practice</h4>
              <p>Use sacred sounds to give the mind a positive focus</p>
            </div>
          </div>
          
          <div class="technique-item">
            <div class="technique-number">3</div>
            <div class="technique-content">
              <h4>Body Scanning</h4>
              <p>Move awareness through the body to anchor attention</p>
            </div>
          </div>
          
          <div class="technique-item">
            <div class="technique-number">4</div>
            <div class="technique-content">
              <h4>Loving-Kindness</h4>
              <p>Send compassion to yourself and others</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="wisdom-section">
        <h3>The Journey to Inner Peace</h3>
        <p>Meditation is not about achieving some perfect state—it's about developing a loving relationship with your own mind. Each time you notice the monkey mind and gently return to your practice, you are strengthening your spiritual muscles.</p>
        
        <div class="call-to-action">
          <p class="text-lg font-semibold text-center p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border border-indigo-200">
            With consistent practice, you'll find that the monkey mind settles naturally, and profound stillness emerges. This is where healing happens, where wisdom arises, and where you connect with your true nature.
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

  :global(.article-content .highlight-text) {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid #f59e0b;
    font-weight: 500;
    margin: 2rem 0;
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
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-radius: 1rem;
    border: 1px solid #bae6fd;
  }
  
  :global(.article-content .wisdom-section) {
    margin: 3rem 0;
  }
  
  :global(.article-content .technique-list) {
    margin-top: 2rem;
    space-y: 1.5rem;
  }
  
  :global(.article-content .technique-item) {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    margin-bottom: 1rem;
  }
  
  :global(.article-content .technique-number) {
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.125rem;
    flex-shrink: 0;
  }
  
  :global(.article-content .technique-content) {
    flex: 1;
  }
  
  :global(.article-content .technique-content h4) {
    color: #6d28d9;
    margin-bottom: 0.5rem;
  }
  
  :global(.article-content .technique-content p) {
    margin-bottom: 0;
    font-size: 0.95rem;
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