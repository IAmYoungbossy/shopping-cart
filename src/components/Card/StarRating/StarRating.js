import uniqid from "uniqid";
import GreyStar from "../../assets/greyStar.png";
import GoldStar from "../../assets/goldStar.png";

// Display stars as rating on page
export function StarRating({ rating }) {
  // Calculate the ratio of gold and grey stars
  const starRating = getGoldAndGreyStarRatio(rating);

  // Return a div containing the star rating
  return <div className="star-div">{starRating}</div>;
}

// Function that calculates the ratio of gold and grey stars based on the rating number
function getGoldAndGreyStarRatio(rating) {
  // Calculate the number of checked and unchecked stars
  const checkedStarCount = Math.floor(parseFloat(rating));
  const uncheckedStarCount = 5 - checkedStarCount;

  // Create arrays of gold and grey stars
  const goldStars = duplicateStar(checkedStarCount, GoldStar);
  const greyStars = duplicateStar(uncheckedStarCount, GreyStar);

  // Combine the arrays of gold and grey stars and return them
  return [...goldStars, ...greyStars];
}

// Function duplicates an image based on number passed to it
function duplicateStar(maxNumOfStar, src) {
  // Create empty array to store duplicated images
  const iconArray = [];

  // Loop through the specified number of stars
  for (let i = 1; i <= maxNumOfStar; i++) {
    // Push a new image to the array, using a unique key and the provided source
    iconArray.push(
      <img
        key={uniqid()}
        src={src}
        alt={src === GoldStar ? "gold-star" : "grey-star"}
      />
    );
  }

  // Return the array of duplicated images
  return iconArray;
}
