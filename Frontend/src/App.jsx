import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HamProvider } from './context/HamContext'
import './App.css'

import Index from './page/Index'
import Explore from './page/Explore'
import Profile from './page/Profile'
import Saved from './page/Saved'
import Cart from './page/Cart'
import History from './page/History'
import Contact from './page/Contact'
import Setting from './page/Setting'
import Error from './page/Error'
import Login from './page/Login'
import Signup from './page/Signup'
import Product from './page/Product'

function App() {
  // global toggle variable
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setToggle((toggle) => !toggle)
    console.log(toggle)
  }

  // product quantity state
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0);
  }




  // filter by brands
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryClick = (brandname) => {
    navigate(`/explore`);
    setSelectedCategory(brandname);

    console.log(brandname);
  };


  // search filter
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }



  // shopping cart
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const handleAdd = (item) => {
    const doesIdExist = cart.some(cartItem => cartItem.id === item.id);
    if (!doesIdExist) {
      setCart([...cart, item]);
      setToastVisible(false);
    } else {
      setToastVisible(true);

    }
  };
  const handleRemove = (item) => {
    setCart(cart.filter((i) => i.id !== item));
  };


  // saved items section
  const [saved, setSaved] = useState([
    {
      'id': '09',
      'category': 'headphone',
      'brand': 'sony',
      'title': 'Sony WH-1000XM5 The Best Wireless Noise Canceling Headphones with Auto Noise Canceling Optimizer, Crystal Clear Hands-Free Calling, and Alexa Voice Control, Silver      ',
      'image': 'https://m.media-amazon.com/images/I/61aT4CcnGmL._AC_SX466_.jpg',
      'discription': 'Pure adaptive noise canceling (pure ANC) actively blocks external noise. Real-time Audio calibration preserves a Premium listening experience',
      'price': 398.00,
      'rating': '4.4',
      'count': 1,
      'featured': false,
    },
  ]);

  
  // adding saved items
  const addSaved = (item) => {
    if (!saved.some(savedItem => savedItem.id === item.id)) {
      setSaved([...saved, item]);
    } else {
      console.log('Item already exists in saved.');
      alert('Item already exists in saved');
    }

  };

  // removing saved item
  const removeSaved = (itemId) => {
    const updatedSaved = saved.filter(item => item.id !== itemId);
    setSaved(updatedSaved);
  };

  const handleSave = (item) => {
    if(!saved.some(savedItem => savedItem.id === item.id)) {
      addSaved(item);
    } else {
      removeSaved(item.id);
    }
  };



  // handeling add button increment
  const handleButtonAdd = (index, currentCount) => {
    setCart(prevData => {
      const newData = [...prevData];
      newData[index].count = currentCount + 1;
      return newData;

    });
  };
  const handleButtonRem = (index, currentCount) => {
    setCart(prevData => {
      const newData = [...prevData];
      newData[index].count = currentCount > 1 ? currentCount - 1 : 1;
      return newData;

    });
  };

  // displaying toast message
  const [toastVisible, setToastVisible] = useState(false);
  if (toastVisible) {
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }


  // brands
  const brands = [
    {
      'id': '01',
      'brand': 'apple',
      'image': 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'
    },
    {
      'id': '02',
      'brand': 'jbl',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/JBL_logo.svg/2500px-JBL_logo.svg.png'
    },
    {
      'id': '03',
      'brand': 'beat',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beats_Electronics_logo.svg/2048px-Beats_Electronics_logo.svg.png'
    }
    , {
      'id': '04',
      'brand': 'bose',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bose_logo.svg/1280px-Bose_logo.svg.png'
    }
    , {
      'id': '05',
      'brand': 'logitech',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/1200px-Logitech_logo.svg.png'
    },
    {
      'id': '06',
      'brand': 'sony',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg'
    }
    , {
      'id': '07',
      'brand': 'soundcore',
      'image': 'https://preview.redd.it/zteoxofp8wi91.png?width=1003&format=png&auto=webp&s=cf23f7a67b28e1166705ab057dbaaef1618d8d44',

    }
    , {
      'id': '08',
      'brand': 'tozo',
      'image': 'https://www.tozostore.com/cdn/shop/files/TOZO_-01_1600x.png?v=1683880396'

    }
  ]




  // mock api
  const product = [
    {
      'id': '01',
      'category': 'headphone',
      'brand': 'apple',
      'title': 'Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Green',
      'image': 'https://m.media-amazon.com/images/I/81FnSOE94NL.__AC_SY445_SX342_QL70_FMwebp_.jpg',
      'gallery': ['https://m.media-amazon.com/images/I/81FnSOE94NL.__AC_SY445_SX342_QL70_FMwebp_.jpg', 'https://m.media-amazon.com/images/I/6107aYfAoHL._AC_SX466_.jpg', 'https://m.media-amazon.com/images/I/51QeS0jkx-L._AC_SX466_.jpg', 'https://m.media-amazon.com/images/I/51M23ATNj4L.__AC_SX300_SY300_QL70_FMwebp_.jpg', 'https://m.media-amazon.com/images/I/61aT4CcnGmL._AC_SX466_.jpg'],
      'discription': 'Apple designed dynamic driver provides high-fidelity audio. Computational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences. FOCUS ON WHAT’S PLAYING — Active Noise Cancellation blocks outside noise so you can immerse yourself in music. HEAR THE WORLD AROUND YOU — Transparency mode lets you hear and interact with the world around you.',
      'price': 475.19,
      'rating': '4.6',
      'count': 1,
      'featured': false,
    },
    {
      'id': '02',
      'category': 'headphone',
      'brand': 'jbl',
      'title': 'JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - White, Medium',
      'image': 'https://m.media-amazon.com/images/I/51M23ATNj4L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      'discription': 'The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.Specific uses for product : Personal With Wireless Bluetooth 5.0 Streaming, you can stream wirelessly from your device and even switch between two devices so that you dont miss a call. For long-lasting fun, listen wirelessly for up to 40 hours and recharge the battery in as little as 2 hours with the convenient Type-C USB cable. A quick 5-minute recharge gives you 2 additional hours of music.',
      'price': 39.95,
      'rating': '4.6',
      'count': 1,
      'featured': false,
    },
    {
      'id': '03',
      'category': 'headphone',
      'brand': 'beat',
      'title': 'Beats Solo3 Wireless On-Ear Headphones',
      'image': 'https://m.media-amazon.com/images/I/714og8zjjDL.__AC_SX342_SY445_QL70_FMwebp_.jpg',
      'discription': 'Pure adaptive noise canceling (pure ANC) actively blocks external noise. Real-time Audio calibration preserves a Premium listening experience',
      'price': 349.95,
      'rating': '4.3',
      'count': 1,
      'featured': true,
    }
    , {
      'id': '04',
      'category': 'headphone',
      'brand': 'bose',
      'title': 'NEW Bose QuietComfort Wireless Noise Cancelling Headphones, Bluetooth Over Ear Headphones with Up To 24 Hours of Battery Life, Black',
      'image': 'https://m.media-amazon.com/images/I/51QeS0jkx-L._AC_SX466_.jpg',
      'discription': 'LEGENDARY NOISE CANCELLATION: Effortlessly combines noise cancelling headphones technology with passive features so you can shut off the outside world, quiet distractions, and take music beyond the beat. PREMIUM COMFORT: Plush earcup cushions softly hug your ears, while a secure and comfortable padded band gently keeps your over ear headphones in place for those extra-long listening sessions. 2 LISTENING MODES: These wireless Bluetooth headphones feature Quiet and Aware Modes that let you toggle between full noise cancelling or full awareness of your surroundings for seamless sound control',
      'price': 249.00,
      'rating': '3.0',
      'count': 1,
      'featured': false,
    }
    , {
      'id': '05',
      'category': 'headphone',
      'brand': 'logitech',
      'title': 'Logitech G335 Wired Gaming Headset, with Flip to Mute Microphone, 3.5mm Audio Jack, Memory Foam Earpads, Lightweight, Compatible with PC, PlayStation, Xbox, Nintendo Switch - Black      ',
      'image': 'https://m.media-amazon.com/images/I/71QEWj+ioXS._AC_SX466_.jpg',
      'discription': 'Lightweight Design: Weighing in at only 8.5 oz (240 g), G335 is smaller and lighter than the G733, features a suspension headband to help distribute weight and is adjustable for a customized fit.All-day Comfort: Soft memory foam ear pads and sports mesh material are comfortable for extended use so you can take your gaming to the next level in style and comfort.Plug and Play: Quickly jump into your game and simply connect with the 3.5 mm audio jack; these colorful headphones are compatible with PC, laptop, gaming consoles, and select mobile devices.',
      'price': 68.99,
      'rating': '4.3',
      'count': 1,
      'featured': false,
    },
    {
      'id': '06',
      'category': 'headphone',
      'brand': 'sony',
      'title': 'Sony WH-CH720NW Noise Canceling Wireless Bluetooth Headphones - Built-in Microphone - up to 35 Hours Battery Life and Quick Charge - Matte White',
      'image': 'https://m.media-amazon.com/images/I/6107aYfAoHL._AC_SX466_.jpg',
      'discription': 'Enjoy natural vocals, crystal clear sound and balanced tuning thanks to the Integrated Processor V1 and Digital Sound Enhancement Engine (DSEE), producing a high quality sound exactly as the artists intended. Tailor sound to your personal preference using the EQ settings on the Sony | Headphones Connect app. 360 Reality Audio Certified – optimise your experience by analysing your individual ear shape on the Sony | Headphones Connect app, and enjoy the ultimate immersive music experience.Digital Noise Cancelling headphones. Dual Noise Sensor technology and the Integrated Processor V1 let you adapt sound to your liking, and with the Sony | Headphones Connect app, you can adjust the ambient sound across 20 different levels for when you’re on the move.Stays comfortable, however long you listen. A lightweight, ergonomic construction makes the most of the 35 hour* battery life, so these wireless headphones stay comfortable for long periods of listening. *With Noise Cancelling ON.',
      'price': 149.9,
      'rating': '2.4',
      'count': 1,
      'featured': false,
    }
    , {
      'id': '07',
      'category': 'headphone',
      'brand': 'soundcore',
      'title': 'Soundcore Anker Space Q45 Adaptive Active Noise Cancelling Headphones, Black',
      'image': 'https://m.media-amazon.com/images/I/618oZSHv6KL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      'discription': '98% Less Noise for Your Journey: The fully-upgraded noise cancelling system targets and blocks out a wider range of noises—from plane engines to crying babies. Enjoy personal space wherever you go with Space Q45 noise cancelling headphones.Make Every Space Your Own: Whether youre indoors, outdoors, commuting, or on a flight, Space Q45s adaptive noise cancelling will automatically select a suitable level to match your location. Also, use the app to choose 1 of 5 noise cancelling levels. Ideal for Traveling: 50 hours of playtime in noise cancelling mode will cover an around-the-world flight without needing to recharge. In normal mode, get up to 65 hours of playtime and if you are low on battery, charge for 5 minutes for 4 hours of playtime.',
      'price': 49.99,
      'rating': '2.9',
      'count': 1,
      'featured': false,
    }
    , {
      'id': '08',
      'category': 'headphone',
      'brand': 'tozo',
      'title': 'HT2 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 60H Playtime, Hi-Res Audio Custom EQ via App Deep Bass Comfort Fit Ear Cups, for Home Office Travel',
      'image': 'https://m.media-amazon.com/images/I/71A2MkKuuWL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      'discription': 'Pure adaptive noise canceling (pure ANC) actively blocks external noise. Real-time Audio calibration preserves a Premium listening experience',
      'price': 100.00,
      'rating': '3.7',
      'count': 1,
      'featured': false,
    },
    {
      'id': '09',
      'category': 'headphone',
      'brand': 'sony',
      'title': 'Sony WH-1000XM5 The Best Wireless Noise Canceling Headphones with Auto Noise Canceling Optimizer, Crystal Clear Hands-Free Calling, and Alexa Voice Control, Silver      ',
      'image': 'https://m.media-amazon.com/images/I/61aT4CcnGmL._AC_SX466_.jpg',
      'discription': 'Pure adaptive noise canceling (pure ANC) actively blocks external noise. Real-time Audio calibration preserves a Premium listening experience',
      'price': 398.00,
      'rating': '4.4',
      'count': 1,
      'featured': false,
    },
    {
      'id': '10',
      'category': 'headphone',
      'brand': 'jbl',
      'title': 'JBL Tour One M2 - Wireless Over-Ear Noise Cancelling Headphones (Black), Medium',
      'image': 'https://m.media-amazon.com/images/I/61prx3nXW8L._AC_SX466_.jpg',
      'discription': 'The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.Specific uses for product : Personal With Wireless Bluetooth 5.0 Streaming, you can stream wirelessly from your device and even switch between two devices so that you dont miss a call. For long-lasting fun, listen wirelessly for up to 40 hours and recharge the battery in as little as 2 hours with the convenient Type-C USB cable. A quick 5-minute recharge gives you 2 additional hours of music.',
      'price': 249.95,
      'rating': '4.6',
      'featured': false,
      'count': 1
    }
  ]
  return (
    <HamProvider value={{cartPrice,handleSave, saved, addSaved, toastVisible, cart, handleAdd, handleRemove, handleButtonAdd, handleButtonRem, search, setSearch, handleSearch, toggle, toggleSidebar, selectedCategory, setSelectedCategory, handleCategoryClick, product, brands, count, setCount }}>
      <div className='max-w-screen-2xl mx-auto'>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/profile' element={<Profile />} />
          <Route path='/history' element={<History />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/setting' element={<Setting />} /> */}
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </HamProvider>

  )
}

export default App
