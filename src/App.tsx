import logo from './logo.svg';

import images1 from '@/assets/images/images-1.jpg';
import images2 from '@/assets/images/images-2.jpg';
import images3 from '@/assets/images/images-3.jpg';
import images4 from '@/assets/images/images-4.jpg';
import images5 from '@/assets/images/images-5.jpg';
import ImageSlider from '@/components/ImageSlider';

function App() {
  const slides = [
    {
      url: images1,
      title: 'Slide 1',
    },
    {
      url: images2,
      title: 'Slide 2',
    },
    {
      url: images3,
      title: 'Slide 3',
    },
    {
      url: images4,
      title: 'Slide 4',
    },
    {
      url: images5,
      title: 'Slide 5',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-xl text-white">Slider</h1>
        <div className="mt-5 flex justify-center">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </div>
  );
}

export default App;
