export type Theme = {
  image: string;
  color: string;
};

const makeThemes = <T extends string>(obj: Record<T, Theme>) => obj;

export const themes = makeThemes({
  'vibrant-violet': {
    color: '#bb98f7',
    image: 'linear-gradient(to left, #8e2de2, #4a00e0)'
  },
  'stark-white-blue': {
    color: '#ffffff',
    image: 'linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)'
  },
  'tingy-blue-red': {
    image: 'linear-gradient(to left, #fc466b, #3f5efb)',
    color: '#E88796'
  },
  'blue-green': {
    image: 'linear-gradient(to left, #00f260, #0575e6)',
    color: '#50E29B'
  },
  'pink-to-blue': {
    image: 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
    color: '#74C7FB'
  },
  'muted-purple': {
    image: 'linear-gradient(to right, #6441a5, #2a0845)',
    color: '#b09fd2'
  },
  'pride-rainbow': {
    image: 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
    color: '#FF8C00'
  },
  'orange-juice': {
    image: 'linear-gradient(to right, #f12711, #f5af19)',
    color: '#f5af19'
  },
  'muddy-sand': {
    image: 'linear-gradient(to right, #3c3b3f, #605c3c)',
    color: '#beb894'
  },
  'grinn-ish': {
    image: 'linear-gradient(to right, #11998e, #38ef7d)',
    color: '#38ef7d'
  },
  'indigo-market': {
    image: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    color: '#838ab9'
  },
  scarlet: {
    image: 'linear-gradient(to right, #ed213a, #93291e)',
    color: '#f26475'
  },
  sucrose: {
    image: 'linear-gradient(to right, #43c6ac, #f8ffae)',
    color: '#F8FFAE'
  },
  'angry-green': {
    image: 'linear-gradient(to right, #a8ff78, #78ffd6)',
    color: '#aeffe6'
  },
  deadpool: {
    image: 'linear-gradient(to right, #c31432, #240b36)',
    color: '#a79daf'
  },
  'cabin-in-the-woods': {
    image: 'url(/wallpapers/1.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'nausicaas-desert': {
    image: 'url(/wallpapers/2.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'norway-sunlit-icy-mountains': {
    image: 'url(/wallpapers/3.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'grand-canyon-gorge': {
    image: 'url(/wallpapers/4.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'shiny-lake': {
    image: 'url(/wallpapers/5.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'blinding-beach': {
    image: 'url(/wallpapers/6.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'norway-fjords': {
    image: 'url(/wallpapers/7.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'christmasy-town-in-mountains': {
    image: 'url(/wallpapers/8.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'sunlit-valley': {
    image: 'url(/wallpapers/9.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'sunset-african-horizon': {
    image: 'url(/wallpapers/10.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'daylight-borealis': {
    image: 'url(/wallpapers/11.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'pandoran-forest': {
    image: 'url(/wallpapers/12.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'paradisical-tree': {
    image: 'url(/wallpapers/13.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'middle-earth': {
    image: 'url(/wallpapers/14.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  },
  'girl-on-mountaintop': {
    image: 'url(/wallpapers/15.jpg)',
    color: 'rgba(244, 245, 248, 1)'
  }
});

export type ThemeName = keyof typeof themes;
