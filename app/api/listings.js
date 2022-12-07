import { DatePickerAndroid } from 'react-native';
import client from './client';

const endpoint = '/listings';

//Get a list of all the listings
const getListings = () => client.get(endpoint);

//Post a listing to the server
const addListing = (listing) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) =>
    data.append('image', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    })
  );

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};
