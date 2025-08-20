<script lang="ts">
  type Props = {
    platform: 'linkedin' | 'instagram' | 'facebook';
    size?: string;
    class?: string;
  };
  
  let { platform, size = "20", class: className = "" }: Props = $props();
  
  const iconUrls = {
    linkedin: 'https://s.magecdn.com/social/tc-linkedin.svg',
    instagram: 'https://s.magecdn.com/social/tc-instagram.svg',
    facebook: 'https://s.magecdn.com/social/tc-facebook.svg'
  };
  
  const iconStyle = `width: ${size}px; height: ${size}px;`;
</script>

<img 
  src={iconUrls[platform]}
  alt={platform}
  class="rounded-full {className}"
  style={iconStyle}
  loading="lazy"
/>