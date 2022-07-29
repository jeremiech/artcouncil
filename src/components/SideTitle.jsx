import {AiFillHome} from 'react-icons/ai'
import {FaTradeFederation} from 'react-icons/fa'
import {GrNotification} from 'react-icons/gr'
import {BsCardList} from 'react-icons/bs'
export const sideData=[
    {title:"Home",
    icon:<AiFillHome />,
    link:"/"
    },{
        title:"Federation",
        icon:<FaTradeFederation />,
        link:"/federation"  
    },
    {
        title:"View List",
    icon:<BsCardList />,
    link:"/listing"
    },
    {
        title:"Notification",
        icon:<GrNotification />,
        link:"/notification"  
    }
]