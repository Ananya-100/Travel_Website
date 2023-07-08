import maldives1 from "../assets/maldiv1.jpg";
import maldives2 from "../assets/maldiv2.jpg";
import mountain1 from "../assets/img5.jpg";
import mountain2 from "../assets/img2.jpg";
import forest1 from "../assets/jungle1.jpg";
import forest2 from "../assets/lion.jpg";

import "./DestinationStyle.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>

      <DestinationData
        className="first-des"
        heading="Maldives"
        text="Home to 1,192 coral
              islands, the tropical 
              paradise of Maldives country 
              lies in the Indian Ocean to 
              the southern side of Sri Lanka. 
              The islands sheltered in this 
              archipelago are categorized into natural 
              atolls, most of which remain uninhabited.
               Floating on serene ocean waters, this 
               island nation makes for the perfect 
               getaway for leisure seekers away from the 
               chaos and anxiety of city life. Maldives has
                in store all types of fun-filled and
                 thrilling activities for every kind of 
                 tourist. While the adventure seekers can 
                 engage in snorkeling and catamaran sailing 
                 on Bandos Island,While the shoppaholics can 
                 go on a shopping spree to the famous Male 
                 Local Market, the foodies can dine with a 
                 view at Ithaa Undersea Restaurant."
        img1={maldives1}
        img2={maldives2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Jammu & Kashmir"
        text="This state provides unique experiences to its tourists,
        long walks or a jagged trekking 
        experience on the many mountains in the region, marvelling at the 
        cozy houseboats on the lakes of Srinagar and visiting the many 
        pilgrimage sites, temples and religious and spiritual centres that 
        are present throughout the state. These are some of the unique experiences you can face all 
        in the same state! With our Kashmir holiday packages, tourism will 
         only be about touring a destination but it more of exploring hidden 
         treasures of the city, learning about their culture and traditions, 
         and being one with the locals. On these terms, Kashmir does have a lot 
         to offer for tourists holidaying here! Check out our best tour packages
          for Kashmir."
        img1={mountain1}
        img2={mountain2}
      />

      <DestinationData
        className="first-des"
        heading="Kenya"
        text="Located in East Africa, Kenya is a place full 
        of diverse and rich species of both Flora and Fauna. 
        This coastline state lies next to the Indian Ocean 
        and houses some of the unique aquatic animals. Kenya 
        is known in the world for its annual wildebeest migration. 
        People fly in from all around the globe to witness the 
        majestic birds and animals, take photographs, enjoy 
        safaris and have an adventurous time.For all those adventure 
        junkies out there, Kenya should be among the top places they must 
        visit as the tourist places in Kenya will leave you awestruck . 
        One can go trekking to enjoy the view of the enormous yet beautiful 
        mountains, especially the 5895 meters tall Mount Kilimanjaro. 
        One can go on a variety of safaris to enjoy the wildlife and bask in 
        the beauty of nature"
        img1={forest1}
        img2={forest2}
      />
    </div>
  );
};
export default Destination;
