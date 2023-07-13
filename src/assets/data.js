import image1 from '../images/washe.svg';
import image2 from '../images/fomo.svg';
import image3 from '../images/ride.svg';
import image4 from '../images/weather.svg';
import image5 from '../images/calcule.svg';
import image6 from '../images/notes.svg';

export const data = [
    {
        id: '1',
        active: 'no',
        title: 'Washe',
        image:`${image1}`,
        body: [{
            description: 'Washe serves as a modern solution to traditional laundry hassles by offering an on-demand laundry service. It seamlessly connects users with local laundromats through a network of delivery drivers, who conveniently transport laundry to and from the laundromat. By marrying technology with convenience, Washe revolutionizes the laundry experience, making it more efficient and less time-consuming for users.'
        }],
        status: `Temporarily halted`,
        inBeta: false
    },
    {
        id: '2',
        active: 'no',
        title: 'F.O.M.O',
        image:`${image2}`,
        body: [{
            description: 'F.O.M.O is a dynamic event management platform that allows users to construct, oversee, and share their remarkable events with ease. This innovative solution provides an all-in-one ecosystem for event creation, attendee management, and interactive social sharing, transforming every event into a memorable experience.'
        }],
        status: `Currently in beta`,
        inBeta: true
    },
    {
        id: '3',
        active: 'no',
        title: 'Ride',
        image:`${image3}`,
        body: [{
            description: 'Ride is an innovative app that elevates the cycling experience, it combines real-time navigation, community engagement, and performance analytics. With the unique addition of in-app access to certified bike technicians for maintenance needs, Ride ensures consistently safe and smooth journeys. More than just an app, Ride stands as a powerful companion for cyclists aiming to explore, ride with confidence, and immerse themselves within a dynamic cycling community.'
        }],
        status: `Under development`,
        inBeta: false
    },
    {
        id: '4',
        active: 'no',
        title: 'Weather app',
        image:`${image4}`,
        body: [{
            description: 'Practice project'
        }],
        status: `Deprecated`,
        inBeta: false
    },
    {
        id: '5',
        active: 'no',
        title: 'Calculator app',
        image:`${image5}`,
        body: [{
            description: 'Practice project'
        }],
        status: `Deprecated`,
        inBeta: false
    },
    {
        id: '6',
        active: 'no',
        title: 'To do list',
        image:`${image6}`,
        body: [{
            description: 'Practice project'
        }],
        status: `Deprecated`,
        inBeta: false
    },
];