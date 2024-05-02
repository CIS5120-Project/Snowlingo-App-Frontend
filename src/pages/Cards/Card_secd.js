import React, { useState, useRef, useEffect } from "react";
// import { createContext, useContext } from 'react';
import './Card_init.css'
import snow from '../../snowlingo.svg';
import card_g from './card_g.svg';
import ski_icon from './pics/board_icon.svg';
import jump_1 from './pics/jump_1.svg';
import jump_2 from './pics/jump_2.svg';
import jump_3 from './pics/jump_3.svg';
import balance from './pics/balance.svg';
import lesson from './pics/lesson.svg';
import map from './pics/map.svg';
import { NavLink, useNavigate } from 'react-router-dom';
// import { Box, Grid, Paper, TextField, Button } from '@mui/material';
import { Box, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Looks4Icon from '@mui/icons-material/Looks4';
import CheckIcon from '@mui/icons-material/Check';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Scrollbar } from 'swiper/modules';
// import 'swiper/swiper.min.css';
import 'swiper/css';
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/css/effect-coverflow';
// import 'swiper/pagination/pagination.min.css';
import 'swiper/css/pagination';
// import 'swiper/navigation/navigation.min.css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';



const Card1 = () => {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [quized, setQuized] = useState(false);
    const imageList = [jump_1, jump_2, jump_3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    const [buttonText, setButtonText] = useState('Current location');
    const API_Key = "uK5KQiG3kRSRj6CGY8wr1MLniUGG4IuL";
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [lastUnlockedSlideIndex, setLastUnlockedSlideIndex] = useState(0);
    const totalSlides = 8  //dynamic

    //click to unlock
    const handleSlideClick = (index) => {
        if (index === lastUnlockedSlideIndex && index < totalSlides - 1) {
            setLastUnlockedSlideIndex(index + 1);
        }
    };

    const handleClick = () => {
        console.log('The image was clicked!');
      };

    const handleQuized = () => {
        setQuized(true);
    };

    const goToSlide = (index) => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideTo(index);
        }
      };
    
      
    function handleUnitClick(event) {
    const buttonId = event.currentTarget.getAttribute('data-id');
    navigate(`/unit?id=${buttonId}`);
    };

    const handleJumpClick = () => {
        // Update the current image index to the next one in the array, cycling back to the first after the last
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageList.length);
    };

    const handleRotateClick = () => {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      };

    const handleSuccess = async (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        fetch(`https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_Key}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
          .then((res) => res.json())
          .then((data) => {
            const addressObj = data.results[0].address;
            const stateCode = addressObj.countrySubdivisionCode;
            const cityName = addressObj.municipality
            setState(stateCode);
            setCity(cityName);
          });
    };

    // Function to handle location access error
    const handleError = (error) => {
        console.error('Error accessing location:', error.message);
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
                // maximumAge: 60000, // Acceptable cache age of a position
                // timeout: 5000,    // Timeout for the request
                enableHighAccuracy: true // Request high accuracy position
            });
        } else {
            console.error('Geolocation is not supported by your browser');
        }
        // setStartTime(Date.now());
        // setHeight("5'8''"); // Set a default example value for feet and inches
        }, 
        []);

    const showLocation = () => {
        // setButtonText(city, state || "No location access")
        if (city && state) {
            setButtonText(`${city}, ${state}`); // Both city and state are set
          } else {
            setButtonText("Location not set"); // Default text if one or both are not set
          }
    };

    







    return (
        <Box
        sx={{
            // margin: '5% 5%',
            // display: 'flex'
          }}
        >
            <Box
            sx={{
                margin: '5% 5%',
                display: 'flex'
              }}
            >
                <NavLink to="/lesson" style={{ textDecoration: 'none' }}>
                <ArrowBackIosNewIcon sx={{ marginRight: 1, color: 'white', fontSize:"2.8rem", marginTop: "2rem"}} /> {/* Add some right margin to the icon */}
                </NavLink>
                <img id="login-snow" src={snow} alt="logo" style={{ marginTop: "0.5rem", marginBottom: "1.5rem", marginLeft:"5.5rem" }}></img>
            </Box>

            <img id="ski-icon" src={ski_icon} alt="logo" style={{ marginTop: "0.2rem", marginBottom: "0.5rem", marginLeft:"10.5rem" }}></img>


            <Swiper
                ref={swiperRef}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true,
                }}
                pagination={{clickable:true,
                            // type: 'fraction',
                            // marginTop:'50px',
                            // bottom: '10px',
                            // el: '.swiper-pagination',
                            }}
                Navigation={true}
                scrollbar={{ draggable: true }}
                modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
                className="my-swiper"
                style={{
                    // width: '100%', // Ensure Swiper takes up the full width
                    // maxWidth: '600px', // Maximum width of the Swiper; adjust as needed
                    // marginLeft: '0px', // Combined with marginRight: 'auto', this centers the Swiper
                    // marginRight: 'auto',
                    marginTop: '10px',
                }}
            >

                 <SwiperSlide id="lesson_card" onClick={() => handleSlideClick(0)}>
                    {/* Content of your first slide */}
                    {0 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <img id="lesson_1" src={lesson} alt="logo"  onClick={handleClick}
                            style={{
                                position: 'absolute',
                                top: '40%', 
                                left: '100%', 
                                transform: 'translate(-50%, -50%)', 
                                width: '90%', 
                                height: 'auto',
                                zIndex: 2,
                                cursor: 'pointer',
                            }}
                        />
                        <p
                        style={{
                            position: 'absolute',
                            top: '70%', // Adjust as needed to move the text up or down
                            left: '99%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            wordSpacing: '-1px',
                            lineHeight: '1.1',
                            textAlign: 'center',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >How To Fix Heel Jutter In Your Snowboard Turns</p>
                        <p
                        style={{
                            position: 'absolute',
                            top: '12%', // Adjust as needed to move the text up or down
                            left: '130%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Unit 1</p>
                        <Button color="primary" variant="contained" onClick={handleUnitClick} style={{ position: 'relative', bottom: '150px', left: '105px' }}>
                        START
                        </Button>
                        <Looks4Icon style={{ position: 'relative', top: '-370px', left:'150px' }}></Looks4Icon>
                    </div>
                    ) : (
                        <div style={{ opacity: 0.5, backgroundColor: 'grey', justifyContent: 'center', display: 'flex', alignItems: 'center', height: '100%' }}>
                            <LockTwoToneIcon style={{ fontSize: '50px', color: 'white' }} />
                        </div>
                    )}
                </SwiperSlide>


                <SwiperSlide id="jump_card" onClick={() => handleSlideClick(1)}>
                    {1 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <img id="jump_1" src={imageList[currentImageIndex]} alt="action image"
                            style={{
                                position: 'absolute',
                                top: '35%', // Adjust this value to position `jump_1` as needed
                                left: '100%', // Adjust this value to position `jump_1` as needed
                                transform: 'translate(-50%, -50%)', // This centers the image on the container
                                width: '90%', // Adjust this value to set the size of the `jump_1`
                                height: 'auto',
                                zIndex: 2, // Ensure `jump_1` is above `card_backg`
                            }}
                        />
                        <Button color="primary" variant="contained" onClick={handleJumpClick} style={{ position: 'relative', bottom: '150px', left: '105px' }}>
                        JUMP
                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '67%', // Adjust as needed to move the text up or down
                            left: '92%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Train Focus&Agility</p>
                        <p
                        style={{
                            position: 'absolute',
                            top: '8%', // Adjust as needed to move the text up or down
                            left: '138%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Focus</p>
                    </div>
                     ) : (
                        <div style={{ opacity: 0.8, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img id="card_backg" src={card_g} alt="logo" />
                            <LockTwoToneIcon style={{position: 'absolute', fontSize: '80px', color: 'white',top: '35%',left:'70%', zIndex: 2 }} />
                        </div>
                    )}
                </SwiperSlide>


                <SwiperSlide id="lesson_card02" onClick={() => handleSlideClick(2)}>
                    {2 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <img id="lesson_1" src={lesson} alt="logo"  onClick={handleClick}
                            style={{
                                position: 'absolute',
                                top: '40%', 
                                left: '100%', 
                                transform: 'translate(-50%, -50%)', 
                                width: '90%', 
                                height: 'auto',
                                zIndex: 2,
                                cursor: 'pointer',
                            }}
                        />
                        <p
                        style={{
                            position: 'absolute',
                            top: '70%', // Adjust as needed to move the text up or down
                            left: '99%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            wordSpacing: '-1px',
                            lineHeight: '1.1',
                            textAlign: 'center',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >How To make simple turn on Slope</p>
                        <p
                        style={{
                            position: 'absolute',
                            top: '12%', // Adjust as needed to move the text up or down
                            left: '130%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Unit 2</p>
                        <Button color="primary" variant="contained" onClick={handleUnitClick} style={{ position: 'relative', bottom: '150px', left: '105px' }}>
                        START
                        </Button>
                        <Looks4Icon style={{ position: 'relative', top: '-370px', left:'150px' }}></Looks4Icon>
                    </div>
                     ) : (
                        <div style={{ opacity: 0.8, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img id="card_backg" src={card_g} alt="logo" />
                            <LockTwoToneIcon style={{position: 'absolute', fontSize: '80px', color: 'white',top: '35%',left:'70%', zIndex: 2 }} />
                        </div>
                    )}
                </SwiperSlide>



                <SwiperSlide id="rotate_card" onClick={() => handleSlideClick(3)}>
                    {3 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <img id="balance" src={balance} alt="logo"
                            style={{
                            // Set a specific size or use max values to constrain the size
                            // maxWidth: '350px', // Adjust this value as needed
                            // maxHeight: '350px', // Adjust this value as needed
                            // marginLeft: '5.5rem',
                                position: 'absolute',
                                top: '35%',
                                left: '100%',
                                transform: 'translate(-50%, -50%)',
                                width: '90%',
                                height: 'auto',
                                zIndex: 2,
                            }}
                        />
                        <Button color="primary" variant="contained" onClick={handleRotateClick} style={{ position: 'relative', bottom: '150px', left: '105px' }}>
                        ROTATE
                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '67%', // Adjust as needed to move the text up or down
                            left: '92%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Keep Body Balance</p>
                        <p
                        style={{
                            position: 'absolute',
                            top: '8%', // Adjust as needed to move the text up or down
                            left: '128%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Balance</p>
                        {showMessage && (
                            <div style={{
                            position: 'absolute',
                            width: 300,
                            color: 'orange',
                            bottom: '0px', // Position the message slightly below the button
                            left: '60%',
                            transform: 'translateX(-50%)',
                            // backgroundColor: 'white',
                            // padding: '10px',
                            borderRadius: '5px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                            Ready to Calibrate your phone
                            </div>
                        )}
                    </div>
                        ) : (
                            <div style={{ opacity: 0.8, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <img id="card_backg" src={card_g} alt="logo" />
                                <LockTwoToneIcon style={{position: 'absolute', fontSize: '80px', color: 'white',top: '35%',left:'70%', zIndex: 2 }} />
                            </div>
                        )}
                </SwiperSlide>


                <SwiperSlide id="quiz_card" onClick={() => handleSlideClick(4)}>
                    {4 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <Button color="primary" variant="contained" onClick={handleQuized}
                            style={{ backgroundColor: quized?'#FE76FF':'white', color: 'black', position: 'relative', bottom: '300px', left: '50px', width: '180px' }}>
                        {/* A: Ask for help */}
                        {quized ? <><CheckIcon /> Correct</> : 'A: Ask for help'}
                        </Button>
                        <Button color='primary' variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '280px', left: '50px', width: '180px' }}>
                        B: Wait and rest
                        </Button>
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '260px', left: '50px', width: '180px' }}>
                        C: Ignore and go
                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '57%', // Adjust as needed to move the text up or down
                            left: '92%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            zIndex: 3,
                            fontWeight: 'bold'
                          }}
                        >When you hurt what should do?</p>
                        <p
                        style={{
                            position: 'absolute',
                            top: '8%', // Adjust as needed to move the text up or down
                            left: '138%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Quiz</p>
                    </div>
                    ) : (
                        <div style={{ opacity: 0.8, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img id="card_backg" src={card_g} alt="logo" />
                            <LockTwoToneIcon style={{position: 'absolute', fontSize: '80px', color: 'white',top: '35%',left:'70%', zIndex: 2 }} />
                        </div>
                    )}
                </SwiperSlide>

                <SwiperSlide id="resort_card" onClick={() => handleSlideClick(5)}>
                    {5 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '305px', left: '40px', width: '200px', height: '30px' }}>
                        <p
                        style={{
                            fontSize: '8px',
                            width: '300px',
                            whiteSpace: 'nowrap',
                            // overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontWeight:'bold'
                        }}
                        >BlueMountain Resort (5.1mi)</p>
                            <Button onClick={()=>goToSlide(2)} style={{ backgroundColor: '#FE76FF', color: 'black', left: '7px', width:'50px', height:'20px', fontSize:'12px' }}>
                            More
                            </Button>
                        </Button>
                        <img id="map" src={map} alt="logo"
                            style={{
                                position: 'absolute',
                                top: '38%',
                                left: '97%',
                                transform: 'translate(-50%, -50%)',
                                width: '55vw',
                                height: 'auto',
                                zIndex: 2,
                            }}
                        />
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '175px', left: '40px', width: '200px', height: '50px',  fontSize: '12px', fontWeight: 'bold' }}>
                        Go make 10 turns in mid level slope!
                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '8%', // Adjust as needed to move the text up or down
                            left: '138%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Tasks</p>
                        <Button onClick={()=>showLocation()} style={{ backgroundColor: '#FE76FF', color: 'black', fontWeight: 'bold', left: '7px', width:'125px', height:'30px', fontSize:'10px', bottom:'155px', left:"75px" }}>
                            {buttonText}
                        </Button>
                    </div>
                    ) : (
                        <div style={{ opacity: 0.8, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img id="card_backg" src={card_g} alt="logo" />
                            <LockTwoToneIcon style={{position: 'absolute', fontSize: '80px', color: 'white',top: '35%',left:'70%', zIndex: 2 }} />
                        </div>
                    )}
                </SwiperSlide>

                <SwiperSlide id="more_resort_cards" onClick={() => handleSlideClick(6)}>
                    {6 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <Button color="primary" variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '280px', left: '50px', width: '180px', height: '30px' }}>
                        BlueMountain Resort (5.1 mi)
                        </Button>
                        <Button color='primary' variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '270px', left: '50px', width: '180px', height: '30px' }}>
                        Aspen Resort (111.1 mi)
                        </Button>
                        <Button color="primary" variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '260px', left: '50px', width: '180px', height: '30px' }}>
                        Killintong Resort (555.1 mi)
                        </Button>
                        <Button color="primary" variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '250px', left: '50px', width: '180px', height: '30px' }}>
                        FujiMountain Resort (1095.1 mi)
                        </Button>
                        <Button color='primary' variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '240px', left: '50px', width: '180px', height: '30px' }}>

                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '10%', // Adjust as needed to move the text up or down
                            left: '110%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >More Resorts</p>
                    </div>
                    ) : (
                        <div style={{ opacity: 0.8, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img id="card_backg" src={card_g} alt="logo" />
                            <LockTwoToneIcon style={{position: 'absolute', fontSize: '80px', color: 'white',top: '35%',left:'70%', zIndex: 2 }} />
                        </div>
                    )}
                </SwiperSlide>

                <SwiperSlide id="lock_func" onClick={() => handleSlideClick(7)}>
                    {7 <= lastUnlockedSlideIndex ? (
                    <div style={{ position: 'relative'}}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <div 
                        style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            width: '180%',
                            height: '95%',
                            backgroundColor: 'rgba(128, 128, 128, 0.5)', // Grey color with 50% opacity
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 2  // Ensures the overlay is above the image
                          }}
                        />
                        <div
                        style={{
                            position: 'absolute',
                            top: '160px',
                            left: '100px',
                            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                        >
                            <LockTwoToneIcon 
                                style={{ width: '80px', height: '80px', fill: 'white' }}
                            />
                        </div>
                        <p
                        style={{
                            position: 'absolute',
                            top: '20%', // Adjust as needed to move the text up or down
                            left: '110%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >More Comming..</p>
                         <p
                        style={{
                            position: 'absolute',
                            top: '58%', // Adjust as needed to move the text up or down
                            left: '140%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Locked</p>
                    </div>
                    ) : (
                        <div style={{ opacity: 0.8, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img id="card_backg" src={card_g} alt="logo" />
                            <LockTwoToneIcon style={{position: 'absolute', fontSize: '80px', color: 'white',top: '35%',left:'70%', zIndex: 2 }} />
                        </div>
                    )}
                </SwiperSlide>
                {/* More SwiperSlides */}
            </Swiper>
        </Box>
    );
};

export default Card1;