export function selectPhoto(photo) {
  // selectPhoto is an ActionCreator, it needs to return an action,
  // an object with a type property.
    console.log("a photo has been selected.", photo.title);
  return {
    type: 'PHOTO_SELECTED',
    payload: photo
  };
}


