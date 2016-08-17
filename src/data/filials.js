import dt from '../img/lombards/dt.jpg' 
import komsomol from '../img/lombards/komsomol.jpg'
import stroi from '../img/lombards/stroi.jpg'
import {getWorkInteval} from '../utilis'

export let filials = {
  results: [1,2,3,4],
  1: {
    id: 1,
    name: 'Комсомольский',
    address: 'ул.Комсомольская 124,М',
    phone: '(8362)33-65-08',
    shop: true,
    workTime: {begin: 9, end: 15},
    get workInterval() { return getWorkInteval.bind(this)()},
    daysInterval: 'Без выходных',
    thumbnail: '',
    image: komsomol,
    latitude: '56.635691',
    longitude:'47.892634' 
  },
 2: {
   id: 2,
   name: 'Пролетарский',
   address:'ул.Пролетарская, 13',
   phone: '(8362)33-65-08',
   shop: false,
   workTime: {begin: 9, end: 19},
   get workInterval() { return getWorkInteval.bind(this)()},
   daysInterval: 'Без выходных',
   thumbnail: '',
   image: dt,
   latitude: '56.634487',
   longitude: '47.884974'
 },
 3: {
   id: 3,
   name: 'Радуга',
   address: 'ул. Войнов-интернационалистов, 14',
   phone: '(8362)33-65-06',
   shop: false,
   workTime: {begin: 8, end: 20},
   get workInterval() { return getWorkInteval.bind(this)()},
   daysInterval: 'Без выходных',
   thumbnail: '',
   image: stroi,
   latitude: '56.634244',
   longitude: '47.925548'
  },
 4:{ 
  id: 4,
  name: 'Находка',
  address: 'ул. Строителей, 36',
  phone: '(8362)33-65-07',
  shop: false,
  workTime: {begin: 8, end: 20},
  get workInterval() { return getWorkInteval.bind(this)()},
  daysInterval: 'Без выходных',
  thumbnail: '',
  image: stroi,
  latitude: '56.619186',
  longitude: '47.859364'
 }
}
