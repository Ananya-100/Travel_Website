import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/eiffel.jpg";
import Trip2 from "../assets/img4.jpg";
import Trip3 from "../assets/aurora.jpg";
import Trip4 from "../assets/mountain3.jpg";
import Trip5 from "../assets/img1.jpg";
import Trip6 from "../assets/imgs1.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Iconic Destinations For You</h1>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Paris"
          text="Paris, the city of romance, is
          the most visited place in the world. Toured 
          by more than 20 million people, this 
         French capital is home to some of the most 
         iconic structures like the Eiffel Tower, 
         museums like the Louvre, several happening 
         boulevards, and several artistic treasures."
        />

        <TripData
          image={Trip2}
          heading="Trip to North Bengal"
          text="North Bengal is definitely one of 
          our favourite destinations. North Bengal boasts 
          of mountains, tea gardens, forests and rivers. 
          And I believe that this part of Bengal is 
          also one of your coveted places to visit as well. 
          The place is of unending natural beauty and there 
          are a number of offbeat places in North Bengal 
          that you can visit."
        />

        <TripData
          image={Trip3}
          heading="Trip to Norway"
          text="Known as the best place in Norway 
          to see Northern lights, Tromsø is located 
          in the middle of the aurora region. Being 
          the largest city in the northern region of 
          Norway, it is also a hub for northern lights 
          camps and safaris."
        />
        <TripData
          image={Trip4}
          heading="Trip to Uttarakhand"
          text="Known as the best place in Norway 
          to see Northern lights, Tromsø is located 
          in the middle of the aurora region. Being 
          the largest city in the northern region of 
          Norway, it is also a hub for northern lights 
          camps and safaris."
        />
        <TripData
          image={Trip6}
          heading="Trip to Switzerland"
          text="Known as the best place in Norway 
          to see Northern lights, Tromsø is located 
          in the middle of the aurora region. Being 
          the largest city in the northern region of 
          Norway, it is also a hub for northern lights 
          camps and safaris."
        />
        <TripData
          image={Trip5}
          heading="Trip to Goa"
          text="Known as the best place in Norway 
          to see Northern lights, Tromsø is located 
          in the middle of the aurora region. Being 
          the largest city in the northern region of 
          Norway, it is also a hub for northern lights 
          camps and safaris."
        />
      </div>
      <button className="trip-btn">Show More</button>
    </div>
  );
}

export default Trip;
