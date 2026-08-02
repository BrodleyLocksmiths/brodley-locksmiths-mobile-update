export default function manifest() {
  return {
    name: 'Brodley Locksmiths',
    short_name: 'Brodley Locksmiths',
    description: 'Planned locksmith, door repair and security upgrade services across Tendring.',
    start_url: '/',
    display: 'standalone',
    background_color: '#303237',
    theme_color: '#303237',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  };
}
