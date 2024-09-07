import {SKIPPER_IMAGES} from "@/constants/skipper-images";
import { SkipperPreviewData } from "./models/SkipperCategory";



interface SkipperGalleryProps {
    title: string;
    data: SkipperPreviewData[];
}

const SKIPPER_GALLERY:SkipperGalleryProps[] = [
    {
        title: "Docking",
        data: [
            {
                id: 1,
                text: "Parallel Forward Approach: This is probably the most common way to approach a pump-out or fuel dock when there is plenty of room to do so. When you can approach from either side equally then plan to approach port side to the dock (LH: starboard side to the dock) so you can use prop walk in getting off if needed. Prepare an aft spring loop on the port side (LH: starboard side) as described above. Approach slowly in forward gear from a ways out, turn 30 degrees to the dock until you judge you are getting close, then straighten the wheel. You should be in neutral by now. Make adjustments (reverse if you’re going too fast, forward if you’ve lost way) and slow down until you are stopped or nearly stopped a few feet away from the dock. Ask the crew to toss the aft spring loop onto a cleat. Then pop into forward with very low throttle and turn the wheel away from the dock. The boat will be sucked into the dock and held there so that crew can safely and slowly disembark. If you need to do a lengthy fuel up or need to take your boat out of gear for another reason then the crew can secure the boat normally with mooring lines. Otherwise you can just stay in gear while you pump out.",
                image: SKIPPER_IMAGES.californiaBackyardOne,
            },
            {
                id: 2,
                text: "Back-and-Fill or Standing Turn: A standing turn, changing direction or “spinning” in place, also called Back-and-Fill is a useful technique. You can practice this is an open area, or for best results, in an empty mooring field where you can really mark your starting position. For a RH Drive boat you will put your wheel all the way to the right (LH: Left wheel) and lean against it to hold it in place – you will not be turning the wheel again until you’re done. Go forward and proceed slowly on your turn. When you are starting to move away from your starting position, go into reverse, where you will be helped by prop walk as well as the rudder angle. Once you start to go backwards rather than just turning, shift back into forward and continue alternating forwards and reverse until your boat is facing the new direction. Straighten your wheel to proceed.",
                image: SKIPPER_IMAGES.californiaBackyardTwo,
            },
            {
                id: 3,
                text: "Parallel Backwards Approach: This approach is very similar to above but you will be backing in and using a forward spring loop. The preference is also to land on the port side (LH: starboard side) In this method but you can approach with either side to the dock in good conditions (little wind or current). Once the spring is deployed, pop into a gentle reverse, and you will be sucked into the dock and against the spring line.",
                image: SKIPPER_IMAGES.californiaBackyardThree,
            },
            {
                id: 4,
                text: "Wind Blowing into the slip:When the wind is blowing into the slip it’s essential to reverse a little more forcefully to get out of the slip, but you can take a wider turn so as to end up on the other side of the fairway. You will need to make sure you can get your bow around so that you don’t get blown back down onto the pilings around your slip. So as soon as you are out of the slip and are crossing the center line of the fairway forcefully turn the wheel towards the wind, shift into forward and give it plenty of throttle to get that bow moving.",
                image: SKIPPER_IMAGES.californiaBackyardFour,
            },
        ],
    },
    {
        title: "International Bareboat Skipper",
        data: [
            {
                id: 5,
                text: "The International Bareboat Skipper course is a five day course. This course is not for beginners. This is a certificate of competency for those candidates who wish to train to command a vessel up to 24 metres in length, in fair weather and in sight of land. Candidates should be 16 years of age or over.o have logged with proof of a total of 200 nautical miles and 10 days at sea by the end of course. Must have taken IYT’s International Crew physical course with an IYT Partner School (candidates must either hold an IYT International Crew Certificate proving they have taken and passed the course, OR, a gold seal affixed to the IYT Boating & Sailing Passport signed by the school’s principal). Or they must hold an equivalent qualification from another training organisation. Hold an IYT VHF Radio Operators Certificate or equivalent from another training organisation.",
                image: SKIPPER_IMAGES.englishCountrysideOne,
            },
            {
                id: 6,
                text: "The International Bareboat Skipper Course consists of Modules 13 – 25 in the IYT International Boating & Sailing Passport (Passport).Candidates must either hold a recognised VHF Radio Operators Certificate or must take the full IYT VHF-SRC Marine Communications course and school must place order for this certificate while placing order for the Bareboat Skipper Certificate of Competency.  If ordering VHF at the same time as Bareboat Skipper please upload a note to this effect.  We have provided a sample note to upload when placing order.",
                image: SKIPPER_IMAGES.englishCountrysideTwo,
            },
            {
                id: 7,
                text: "NOTE ABOUT POWER OR SAIL ENDORSEMENTS: If you undertake this course on a sailboat and later wish to obtain the International Bareboat Skipper Power you may do so by attending any IYT Partner school approved to offer the International Bareboat Skipper Power course and do the power training (Module 14 in the Passport Training Programme). This can usually be accomplished in 2 to 4 days depending upon the candidate’s experience as skipper of a sailing vessel.  This will be left to the discretion of each school based on the cv and sea time of the candidate.If you undertake this course on a power vessel and later wish to obtain the International Bareboat Skipper Sail you may do so by attending any IYT Partner school approved to offer the International Bareboat Skipper Sail course and do the sail training (Module 15 in the Passport Training Programme). This can usually be accomplished in 2 to 4 days depending upon the candidate’s experience as skipper of a power vessel.  This will be left to the discretion of each school based on the cv and sea time of the candidate. The IYT International Bareboat Skipper Sail Certificate covers command of a sailing vessel with a sail area of greater than 80 square metres/861 square feet. ",
                image: SKIPPER_IMAGES.englishCountrysideThree,
            },
            {
                id: 8,
                text: "Certificate Limitations: 1/Command of a vessel up to a maximum length of 78 ft /24 metres. 2/In coastal waters up to 20 miles offshore 3/In fair conditions with moderate wind and sea condition",
                image: SKIPPER_IMAGES.englishCountrysideFour,
            },
        ],
    },
    {
        title: "RYA DAY SKIPPER POWER",
        data: [
            {
                id: 9,
                text: "The RYA Day Skipper Motor (Power) Course includes boat handling safety and navigation skills and is aimed at new motor cruiser skippers. It enables new motorboats to skipper a motor cruiser in familiar waters by day. Any UK citizen or bona fide resident who achieves the Day Skipper Power is automatically eligible for the ICC (International Licence) for powered craft (unrestricted by length).",
                image: SKIPPER_IMAGES.mountainMeditateOne,
            },
            {
                id: 10,
                text: "HOW LONG IS THE RYA DAY SKIPPER POWER COURSE? The RYA Day Skipper Power course takes 4 days including a night navigation exercise one evening. Once certified your certificate never expires.",
                image: SKIPPER_IMAGES.mountainMeditateTwo,
            },
            {
                id: 11,
                text: "Вярвам в способностите си и се доверявам на процеса на постигане на успех. Предизвикателствата са възможности за растеж и усъвършенстване. Аз съм фокусиран, мотивиран и отдаден на целите си. Успехът идва към мен естествено, защото съм подготвен и го заслужавам.",
                image: SKIPPER_IMAGES.mountainMeditateThree,
            },
            {
                id: 12,
                text: "Аз съм магнит за успех и изобилие във всички области на моя живот. Нагласата ми е положителна, а действията ми са умишлени. Уча се от всеки опит и непрекъснато се усъвършенствам. Успехът не е дестинация, а пътуване, на което се наслаждавам всеки ден.",
                image: SKIPPER_IMAGES.mountainMeditateFour,
            },
        ],
    },
    {
        title: "Important Information about Sailboats I",
        data: [
            {
                id: 13,
                text: "Introduction: Sailboats, also known as sailing boats, are vessels that are propelled using the power of the wind. They come in a variety of sizes and shapes, from small dinghies to massive yachts, and are popular for both recreational and competitive sailing. Sailboats typically have one or more masts and are equipped with sails that can be adjusted to harness the wind’s energy and propel the boat forward. Whether you are a seasoned sailor or a beginner, understanding the important aspects of sailboats can help you make informed decisions when it comes to buying, using, or maintaining one.",
                image: SKIPPER_IMAGES.nightSkyOne,
            },
            {
                id: 14,
                text: "What is a Sailboat? A ship that has a stretched thick cloth in order for it to take advantage of the wind power at sea is named a “sailboat”. The stretchy cloth allows the craft to move properly by fitting it to the pole which stands side by side to form a large surface called a sail.",
                image: SKIPPER_IMAGES.nightSkyTwo,
            },
            {
                id: 15,
                text: "How Many Types of Sailboats Are There? Sailboats are a group of boats with many varieties. Some of the boat groups are: Ketch, sloop, catamaran and rowing sailboat.",
                image: SKIPPER_IMAGES.nightSkyThree,
            },
            {
                id: 16,
                text: "What is the Average Speed of a Sailboat? In general, the speed of a sailing ship can vary according to the speed and direction of the wind, the design of the sails, the structure and dimensions of the ship, the size of the waves in the water and the load of the ship. For example, a sailing ship’s speed can be between 10 km/h and 20 km/h in a light wind with a small deck load, while the same ship can travel between 5 km/h and 10 km/h in a strong wind with a heavy load.",
                image: SKIPPER_IMAGES.nightSkyFour,
            },
        ],
    },
    {
        title: "Important Information about Sailboats II",
        data: [
            {
                id: 17,
                text: "What are Sailboats Made of? Sailboats are usually made of durable, flexible and lightweight materials such as polyester, mother-of-pearl or dacron. These materials allow the sails to resist the effects of the wind. In addition, metal winches, rods and other mechanical parts are used to facilitate the opening and closing of the sails and the reversing movements.",
                image: SKIPPER_IMAGES.oregonOne,
            },
            {
                id: 18,
                text: "How Does a Sailboat Work? There are 2 forces that affect the movement of the sailboat:1/Thrust: This is the name for the wind strength, which is the most basic principle for the movement of the sailboat and it affects vertically. The resulting effect is when the wind hits the sailboat from the abaft, driving the vessel forward.2/Suction Force: This is necessary for boats to be able to move easily against the wind. The force of the wind flows from both sides of the sail, resulting in a pressure difference occurring due to the difference between the distance traveled by the two streams of air. With the force of the pressure difference, the sailboat is absorbed towards the wind. Sailboats can not cruise directly into the wind; in order to gather way with the sailboat, it is necessary to travel at an angle of about 45 degrees against the wind. ",
                image: SKIPPER_IMAGES.oregonTwo,
            },
            {
                id: 19,
                text: "What is Wing and Wing? The mainsail blocks the wind to the genoa, and when the sailboat cruises it takes the wind from the stern. Wing and wing is the cruising type when the genoa and the mainsail hoist the sail to two opposite sides and therefore get an advantage from the wind. For wing and wing sail: 1/ The wind needs to come from the stern.2/It needs to be on scud.3/The wind needs to come exactly from the bearing pintle.",
                image: SKIPPER_IMAGES.oregonThree,
            },
            {
                id: 20,
                text: "What is ‘Heaving To’? Heave to is a method for halting the sailboat. It is a method often used in heavy weather conditions. In emergency situations such as when someone falls overboard into the sea, when your boat breaks down, or even when you want to take a break due to harsh weather conditions, you can use the heave as a method to bring the sailboat to a stop.",
                image: SKIPPER_IMAGES.oregonFour,
            },
        ],
    },
    {
        title: "Mooring and Points to Consider During Mooring",
        data: [
            {
                id: 21,
                text: "Firstly, the mooring area should be selected from the map. Second, When the boat approaches the mooring, the speed should be lowered while the flow is at the downwind position. Third, The boat should be stopped and the anchor lowered until it reaches the seafloor. Four, The boat should then be tamed and the anchor should be maintained. ",
                image: SKIPPER_IMAGES.relaxingRiverOne,
            },
            {
                id: 22,
                text: "Structure of Sea Bottom (moss, rock, sand etc): It is important to know the sea bottom structure of the region you are in, in order to accordingly choose the anchor type and avoid trouble during the anchoring process.",
                image: SKIPPER_IMAGES.relaxingRiverTwo,
            },
            {
                id: 23,
                text: "Wind: If there is no wind, anchoring will be quite easy as there is no driving force. For windy weather, it is important to anchor at a place that cuts you off from the waves and wind for security reasons.",
                image: SKIPPER_IMAGES.relaxingRiverThree,
            },
            {
                id: 24,
                text: "Depth: For safe anchoring, anchor chain must be at least four times the depth of the water. It should not be forgotten that the chain holds our boat, not the anchor. Diameter Oscillation: Oscillation is the circular gliding to the flag or to the starboard, which happens when the wind is changing direction often and the diameter of this circular motion is called a “diameter oscillation”. The diameter of the oscillation should be calculated correctly by taking the other boats into consideration.",
                image: SKIPPER_IMAGES.relaxingRiverFour,
            },
        ],
    },
    {
        title: "Sailor’s Hitches",
        data: [
            {
                id: 25,
                text: "Figure Eight: The figure-of-eight knot is a stopper knot that is tied at the end of the rope in order for the rope not to get loose from the block.; Buntline Hitch: This is used to tie up certain things like the anchor or buoy when they hang down from the boat, this is also known as a “Meza volta hitch”.",
                image: SKIPPER_IMAGES.tuscannyOne,
            },
            {
                id: 26,
                text: "Cow Hitch: The Cow Hitch, also called the Lanyard Hitch, Lark’s Head and Lark’s Foot, is used to secure a rope to a post or other object including another rope; Bowline Hitch: This is called a bowline as it is often used for tying a loop in a mooring line and tying the bow of the boat to the dock.  This is safer than devices with metal locks.",
                image: SKIPPER_IMAGES.tuscannyTwo,
            },
            {
                id: 27,
                text: "Whip: It is the name given to the tie made by wrapping tightly with a thin rope so that the ends of the ropes do not open.; Sheep Shank: This is a knot that is thrown to temporarily relieve the damaged part of the rope from heavy load or to shorten the length of the rope.; Half Hitch: This is the tie that is used to attach the end of a rope to a mast, eyebolt, anchor, sail matafion and a deck structure.",
                image: SKIPPER_IMAGES.tuscannyThree,
            },
            {
                id: 28,
                text: "Parts of Sail boat",
                image: SKIPPER_IMAGES.tuscannyFour,
            },
        ],
    },
];

export default SKIPPER_GALLERY;
