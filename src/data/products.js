import { nanoid } from "nanoid";

const products = [
    {
        id: nanoid(),
        name: "Sony a7R V Mirrorless Camera",
        brand: "Sony",
        category: "camera",
        img: "sony-a7r-v.jpg",
        desc: "Combining resolution and precision, the Sony a7R V is the mirrorless camera designed for those who crave detail. Featuring a 61MP full-frame sensor, all-new AI-based autofocus system with advanced subject recognition, 8K video recording, and 8-stop image stabilization, the fifth-generation a7R is reliable and well-rounded for both photography and video applications.",
        features: [
            "61MP Full-Frame Exmor R BSI CMOS Sensor",
            "AI-Based Real-Time Tracking AF System",
            "4K 16-Bit Raw Output; S-Log3/S-Cinetone",
            "3.2\" 4-Axis Multi-Angle Touchscreen LCD",
            "8-Stop 5-Axis Image Stabilization",
            "BIONZ XR & AI Processing Unit",
            "8K 24p, 4K 60p, FHD 120p 10-Bit Video",
            "9.44m-Dot EVF with 120 fps Refresh Rate",
            "10 fps Shooting with AF/AE Tracking",
            "Dual CFexpress Type A/SD Card Slots",
        ],
        price: 3899,
    },
    {
        id: nanoid(),
        name: "Sony a7C Mirrorless Camera",
        brand: "Sony",
        category: "camera",
        img: "sony-a7c.jpg",
        desc: "Mixing the quality and advantages of a full-frame sensor with an especially sleek and portable design, the black Sony a7C offers the hybrid recording capabilities, 24.2MP Exmor R BSI CMOS sensor, and intelligent AF performance you would expect from an Alpha camera but with a form factor for all-day, everyday carry.",
        features: [
            "24.2MP Full-Frame Exmor R BSI Sensor",
            "BIONZ X Image Processor",
            "UHD 4K30p Video with HLG & S-Log3 Gammas",
            "693-Point Hybrid AF System",
            "2.36m-Dot OLED Electronic Viewfinder",
            "3.0\" 921.6k-Dot Vari-Angle Touchscreen",
            "5-Axis In-Body Image Stabilization",
            "Shooting Up to 10 fps, ISO 50-204800",
            "Bluetooth and Wi-Fi Connectivity",
        ],
        price: 1789,
    },
    {
        id: nanoid(),
        name: "Sony ZV-E1 Mirrorless Camera",
        brand: "Sony",
        category: "camera",
        img: "sony-zv-e1.jpg",
        desc: "Designed as a professional photo+cinema camera for content creators to up their game, the ultra-compact black Sony ZV-E1 Mirrorless Camera provides cinematic looks to your vlogs, interviews, and product demonstrations. With an even smaller form than the EV-10 and the cinema-style inner-workings of the a7S III, the ZV-E1 features a full-frame 12MP Exmor R CMOS sensor and a BIONZ XR image processor to offer stunning cinema looks in a tiny, mobile form. Its full-frame E-mount makes it one of the smallest cameras with an interchangeable lens mount around. Some of the benefits of the ZV-E1 include a cinematic bokeh, 15+ stops of dynamic range, 5-axis stabilization, AI-based auto-framing, AF assist, multiple mic options, USB streaming, a dust and moisture resistant housing, and more.",
        features: [
            "Designed for Content Creators",
            "12MP Full-Frame Exmor R CMOS Sensor",
            "UHD 4K 120p / FHD 240p / 10-Bit 4:2:2",
            "5-Axis SteadyShot Image Stabilization",
            "15+ Stops Dynamic Range, AI Auto-Framing",
            "Multi-Face Recognition, Time-Lapse",
            "Product Showcase Setting",
            "S-Log3, S-Gamut3, S-Cinetone, User LUTs",
            "Extended ISO 80-409,600",
            "Internal Mic + Inputs, USB Streaming",
        ],
        price: 2198,
    },
    {
        id: nanoid(),
        name: "Canon EOS R5 Mirrorless Camera",
        brand: "Canon",
        category: "camera",
        img: "canon-eos-r5.jpg",
        desc: "For the professional image-maker who needs resolution, speed, and video capabilities, the Canon EOS R5 full-frame mirrorless camera features a newly developed 45MP CMOS sensor, which offers 8K raw video recording, 12 fps continuous shooting with a mechanical shutter, and is the first EOS camera to feature 5-axis sensor-shift image stabilization.",
        features: [
            "45MP Full-Frame CMOS Sensor",
            "DIGIC X Image Processor",
            "8K30 Raw and 4K120 10-Bit Internal Video",
            "400MP In-Camera Files with No Software",
            "Sensor-Shift 5-Axis Image Stabilization",
            "12 fps Mech. Shutter, 20 fps E. Shutter",
            "Dual Pixel CMOS AF II with 1053 Points",
            "3.2\" Vari-Angle Touchscreen LCD",
            "Subject Tracking with Deep Learning",
            "CFexpress & SD UHS-II Memory Card Slots",
        ],
        price: 3399,
    },
    {
        id: nanoid(),
        name: "Canon EOS 6D Mark II DSLR Camera",
        brand: "Canon",
        category: "camera",
        img: "canon-eos-6dm2.jpg",
        desc: "Step up into the full-frame game with the EOS 6D Mark II DSLR Camera from Canon. Making high-performance full-frame imaging more accessible, the 6D Mark II makes numerous advancements over its predecessor to improve upon every aspect of image capture and creation. The main update comes in the form of a 26.2MP CMOS sensor and the use of the DIGIC 7 Image Processor to deliver sharper, more vivid imagery in a variety of shooting situations. This setup offers an improved native sensitivity range of ISO 100-40000, which can then be expanded to ISO 50-102400, as well as speedy shooting rates of up to 6.5 fps.",
        features: [
            "26.2MP Full-Frame CMOS Sensor",
            "DIGIC 7 Image Processor",
            "45-Point All-Cross Type AF System",
            "Full HD Video at 60 fps; Digital IS",
            "3\" 1.04m-Dot Vari-Angle Touchscreen LCD",
            "Dual Pixel CMOS AF and Movie Servo AF",
            "Native ISO 40000, Expanded to ISO 102400",
            "6.5 fps Shooting; Time-Lapse & HDR Movie",
            "Built-In GPS, Bluetooth & Wi-Fi with NFC",
            "Dust and Water-Resistant; SD Card Slot",
        ],
        price: 1199,
    },
    {
        id: nanoid(),
        name: "Canon EOS R3 Mirrorless Camera",
        brand: "Canon",
        category: "camera",
        img: "canon-eos-r3.jpg",
        desc: "Built for speed, versatility, and reliability, the Canon EOS R3 combines the technology from their mirrorless EOS R system with the robustness and performance you'd expect from a flagship DSLR. Revolving around a new full-frame stacked sensor, updated AF performance, and refined body design, the EOS R3 is first 3-Series camera since the film era and plants itself as a fast-shooting, flexible, and contemporary mirrorless camera.",
        features: [
            "24MP Full-Frame Stacked BSI CMOS Sensor",
            "Dual Pixel CMOS AF II, Eye Control AF",
            "6K60 Raw and 4K120 10-Bit Internal Video",
            "30 fps E. Shutter, 12 fps Mech. Shutter",
            "5.76m-Dot EVF with 120 fps Refresh Rate",
            "3.2\" 4.2m-Dot Vari-Angle Touchscreen LCD",
            "Sensor-Shift 5-Axis Image Stabilization",
            "Multi-Function Shoe, Built-In Vert. Grip",
            "CFexpress & SD UHS-II Memory Card Slots",
            "Wired LAN and 5 GHz Wi-Fi Support",
        ],
        price: 5499,
    },
    {
        id: nanoid(),
        name: "Nikon Z8 Mirrorless Camera",
        brand: "Nikon",
        category: "camera",
        img: "nikon-z8.jpg",
        desc: "Built using flagship DNA, the Nikon Z8 is a compact, lightweight camera housing much of the technology from the Z9 but in a sleeker, more portable package. Dubbed the ultimate hybrid camera, the Z8 features the same proven sensor, processing, and AF capabilities of the flagship with a new body design that better suits gimbal use, event shooting, and other handheld applications.",
        features: [
            "45.7MP FX-Format Stacked CMOS Sensor",
            "Lightweight Design, 30% Smaller than Z9",
            "8.3K 60p N-RAW, 4.1K 60p ProRes RAW",
            "8K30p and 4K120p Video, 10-Bit Internal",
            "Up to 20 fps Raw, 30 fps JPEG Shooting",
            "493-Point AF, AI-Based Subject Detection",
            "Blackout-Free Real Live Viewfinder",
            "3.2\" 4-Axis Tilting Touchscreen LCD",
            "CFx Type B & SD Memory Card Slots",
        ],
        price: 3990,
    },
    {
        id: nanoid(),
        name: "Nikon D850 DSLR Camera",
        brand: "Nikon",
        category: "camera",
        img: "nikon-d850.jpg",
        desc: "Proving that speed and resolution can indeed coexist, the Nikon D850 is a multimedia DSLR that brings together robust stills capabilities along with apt movie and time-lapse recording. Revolving around a newly designed 45.7MP BSI CMOS sensor and proven EXPEED 5 image processor, the D850 is clearly distinguished by its high resolution for recording detailed imagery. The back-illuminated design of the sensor is able to acquire greater detail and clarity when working in low-light conditions, and the sensor also forgoes an optical low-pass filter for improved sharpness. Working in conjunction with the sensor is the EXPEED 5 image processor, which together afford a 7 fps continuous shooting rate for up to 51 consecutive frames, an expandable sensitivity range from ISO 32 to 102400, and 4K UHD video recording using either a DX crop or the entire area of the full-frame sensor. An 8K time-lapse recording mode is also available, as well as additional specialized recording modes for digitizing film negatives and for focus stacking applications. Benefitting the imaging capabilities is an advanced Multi-CAM 20K 153-point AF system, which debuted with the flagship D5 and offers 99 cross-type sensors for refined focusing accuracy in a variety of lighting conditions. Checking off a number of boxes for multimedia image-makers, the D850 positions itself as not only a high-resolution DSLR but also as a camera for speed, movies, and low-light shooting needs.",
        features: [
            "45.7MP FX-Format BSI CMOS Sensor",
            "EXPEED 5 Image Processor",
            "3.2\" 2.36m-Dot Tilting Touchscreen LCD",
            "4K UHD Video Recording at 30 fps",
            "Multi-CAM 20K 153-Point AF System",
            "Native ISO: 64-25600,Extended: 32-102400",
            "7 fps Shooting for 51 Frames with AE/AF",
            "8K Time-Lapse, Negative Digitizer Mode",
            "180k-Pixel RGB Sensor, Focus Shift Mode",
            "SnapBridge Bluetooth and Wi-Fi",
        ],
        price: 2999,
    },
    {
        id: nanoid(),
        name: "Nikon Z9 Mirrorless Camera",
        brand: "Nikon",
        category: "camera",
        img: "nikon-z9.jpg",
        desc: "Delivering speed, image quality, and connectivity, the Nikon Z9 is a professional-grade camera characterized by its newly developed sensor, advanced AF performance, and high-resolution 8K video recording. Their first mirrorless flagship camera, the Z9 stands out as a camera that appeals to photographers and filmmakers working across a wide variety of applications.",
        features: [
            "45.7MP FX-Format Stacked CMOS Sensor",
            "EXPEED 7 Image Processor",
            "8.3K 60p N-RAW, 4.1K 60p ProRes RAW",
            "8K30p and 4K120p Video, 10-Bit Internal",
            "Up to 20 fps Raw, 30 fps JPEG Shooting",
            "493-Point AF, AI-Based Subject Detection",
            "Blackout-Free Real Live Viewfinder",
            "3.2\" 4-Axis Tilting Touchscreen LCD",
            "Vertical Grip, 2x CFexpress Type B Slots",
            "5 GHz Wi-Fi, Bluetooth, and GNSS",
        ],
        price: 5499,
    },
    {
        id: nanoid(),
        name: "Sony FE 24-70mm f/2.8 GM II Lens (Sony E)",
        brand: "Sony",
        category: "lens",
        img: "sony-fe2470f28gm2.jpg",
        desc: "A refined take on the fast standard zoom, the Sony FE 24-70mm f/2.8 GM II is not only smaller and lighter than the previous generation, it also features a variety of optical, focusing, and handling upgrades, catering to both photo and video applications, that make this the most well-rounded G Master zoom to date.",
        features: [
            "Full-Frame | f/2.8 to f/22",
            "Fast Standard Zoom",
            "22% Lighter, 18% Smaller than Previous",
            "Four XD Linear AF Motors, Floating Focus",
            "Aperture De-Click and Lock Switches",
            "Zoom Smoothness Switch",
            "XA and Super ED Elements",
            "Nano AR Coating II and Fluorine Coating",
            "Dust and Moisture-Resistant Construction",
            "Rounded 11-Blade Diaphragm",
        ],
        price: 2298,
    },
    {
        id: nanoid(),
        name: "Sony FE 70-200mm f/2.8 GM OSS II Lens (Sony E)",
        brand: "Sony",
        category: "lens",
        img: "sony-fe70200f28gm2.jpg",
        desc: "Sony's FE 70-200mm f/2.8 GM OSS II takes the classic fast zoom and elevates performance to a whole new level. This lens builds upon the best parts of the original and makes them even better while simultaneously reducing weight by 29%—making this lens the lightest in its class. Sony has also given this lens a brand-new AF system that promises up to four times the speed and has made plenty of optical optimizations that will appeal to video shooters, including improvements to focus breathing and focus shift. Whether you shoot portraits, sports, landscapes, or video, the 70-200mm f/2.8 will get the job done.",
        features: [
            "E-Mount Lens/Full-Frame Format",
            "Aperture Range: f/2.8 to f/22",
            "29% Weight Reduction from Previous Model",
            "Four XD Linear AF Motors; 4x Faster AF",
            "One XA & One Aspherical Elements",
            "Two ED Elements & Two Super ED Elements",
            "Nano AR Coating II",
            "Optical Steady Shot Image Stabilization",
            "Dust and Moisture-Resistant Construction",
            "Eleven-Blade Circular Diaphragm",
        ],
        price: 2798,
    },
    {
        id: nanoid(),
        name: "Sony FE 50mm f/1.4 GM Lens (Sony E)",
        brand: "Sony",
        category: "lens",
        img: "sony-fe50f14gm.jpg",
        desc: "Offering the latest in lens technology, the Sony FE 50mm f/1.4 GM Lens is designed with sophisticated elements and advanced optics to provide uncompromising image quality for still and video shooters alike. A member of the esteemed G Master lens family, this versatile normal-length prime provides a natural field of view, allowing you to create memorable images to last a lifetime. An excellent choice for everyday use, this lens also includes a fast and precise autofocus system in a lightweight and compact design making it convenient to take with you everywhere you go.",
        features: [
            "Full-Frame | f/1.4 to f/16",
            "G-Master Design with Advanced Optics",
            "Two XD Linear AF Motors, Internal Focus",
            "Focus Hold Buttons & Iris Lock Switch",
            "Physical Aperture Ring & De-Click Switch",
            "Rounded 11-Blade Diaphragm",
            "Nano AR II & Fluorine Coatings",
            "Dust and Moisture-Resistant Construction",
        ],
        price: 1298,
    },
    {
        id: nanoid(),
        name: "Canon RF 28-70mm f/2 L USM Lens",
        brand: "Canon",
        category: "lens",
        img: "canon-rf2870f2l.jpg",
        desc: "Combining the versatility of a zoom with the speed typically reserved for a prime, the Canon RF 28-70mm f/2 L USM is a wide-angle to portrait-length lens distinguished by its impressively unique f/2 constant maximum aperture. This bright design yields excellent low-light performance along with enhanced control over depth of field for isolating subject matter. Ultra-Low Dispersion glass is employed in the optical design, and greatly reduces color fringing and chromatic aberrations in order to realize high clarity and color accuracy. Complementing the advanced optical properties is Canon's proven ring-type Ultrasonic Motor, which delivers fast and quiet autofocus performance along with full-time manual focus control. Additionally, unique to RF lenses, this 28-70mm incorporates a configurable Control Ring for intuitively adjusting exposure settings, including ISO, aperture, and exposure compensation, from the lens itself.",
        features: [
            "RF-Mount Lens/Full-Frame Format",
            "Aperture Range: f/2 to f/22",
            "Ultra-Low Dispersion Elements",
            "Ring-Type Ultrasonic Motor AF System",
            "Customizable Control Ring",
            "Rounded 9-Blade Diaphragm",
        ],
        price: 2899,
    },
    {
        id: nanoid(),
        name: "Canon RF 15-35mm f/2.8 L IS USM Lens",
        brand: "Canon",
        category: "lens",
        img: "canon-rf1535f28l.jpg",
        desc: "Covering a versatile wide-angle focal length range, the RF 15-35mm f/2.8 L IS USM from Canon is also characterized by its bright f/2.8 constant maximum aperture. This bright design enables working in available light conditions and also affords greater control over depth of field. The range of wide focal lengths suits working in a variety of situations, from landscape to documentary shooting, and this zoom is complemented by an advanced optical design that greatly reduces color fringing and distortion for high clarity and sharpness. An Air-Sphere coating has also been applied to reduce flare and ghosting for improved contrast and color fidelity when working in bright conditions.",
        features: [
            "Full-Frame | f/2.8 to f/22",
            "Fast Wide-Angle Zoom",
            "Nano USM AF System",
            "Optical Image Stabilizer",
            "Aspherical and Low Dispersion Elements",
            "Air-Sphere and Fluorine Coatings",
            "Customizable Control Ring",
            "Weather-Resistant Design",
        ],
        price: 2199,
    },
    {
        id: nanoid(),
        name: "Canon RF 50mm f/1.2 L USM Lens",
        brand: "Canon",
        category: "lens",
        img: "canon-rf50f12l.jpg",
        desc: "Distinguished by its speed, the RF 50mm f/1.2 L USM from Canon is a desirable normal-length prime due to its versatile focal length and bright f/1.2 maximum aperture. This fast design excels in difficult lighting conditions and also benefits working with shallow depth of field and selective focus techniques. The optical layout incorporates one UD element and one aspherical element, which help to reduce both chromatic and spherical aberrations in order to produce greater clarity and sharpness. A rounded 10-blade diaphragm also benefits bokeh quality to suit isolating subjects with depth of field. Complementing the imaging capabilities is an apt ring-type Ultrasonic Motor, which delivers fast, near-silent autofocus and full-time manual focus override. Additionally, a unique Control Ring is integrated into the lens design for intuitive control over exposure settings from the lens itself.",
        features: [
            "RF-Mount Lens/Full-Frame Format",
            "Aperture Range: f/1.2 to f/16",
            "One UD Element, One Aspherical Element",
            "Ring-Type Ultrasonic Motor AF System",
            "Customizable Control Ring",
            "Rounded 10-Blade Diaphragm",
        ],
        price: 2299,
    },
    {
        id: nanoid(),
        name: "Nikon NIKKOR Z 24-120mm f/4 S Lens",
        brand: "Nikon",
        category: "lens",
        img: "nikon-z24120f4s.jpg",
        desc: "A truly versatile everyday lens, the NIKKOR Z 24-120mm f/4 S, from Nikon, is a wide-angle to short-telephoto zoom covering an extremely useful range of focal lengths to benefit a variety of applications from landscape to portraiture. The constant f/4 maximum aperture offers consistent performance throughout the zoom range and the lens features an advanced optical design for high sharpness and clarity. As a go-to lens for a majority of needs, this lens also sports a relatively compact and lightweight design.",
        features: [
            "Full-Frame | f/4 to f/22",
            "Wide-Angle to Telephoto Zoom",
            "Multi-Focus Stepping Motor AF System",
            "Programmable Control Ring & L.Fn Button",
            "ED and Aspherical Elements",
            "ARNEO and Nano Crystal Coatings",
            "Weather-Sealed Design, Fluorine Coating",
            "Rounded 9-Blade Diaphragm",
        ],
        price: 1096,
    },
    {
        id: nanoid(),
        name: "Nikon NIKKOR Z 100-400mm f/4.5-5.6 VR S Lens",
        brand: "Nikon",
        category: "lens",
        img: "nikon-z100400f4556vrs.jpg",
        desc: "Offering super-telephoto reach in a portable design, the NIKKOR Z 100-400mm f/4.5-5.6 VR S, from Nikon, is a versatile zoom well-suited for sports and wildlife applications. Covering a broad telephoto range, the lens manages to remain relatively lightweight and compact, making it ideal for travel as well, and it incorporates Inner Balance technology that maintains stability when tracking moving subjects and shooting atop a gimbal head.",
        features: [
            "Z-Mount Lens/FX Format",
            "Aperture Range: f/4.5 to f/40",
            "Six Super ED and Two ED Glass Elements",
            "ARNEO and Nano Crystal Coatings",
            "Multi-Focus Stepping Motor AF System",
            "Vibration Reduction Image Stabilization",
            "Programmable Control Ring",
            "Inner Balance Technology",
            "Information OLED Panel and L.Fn Button",
            "Weather-Sealed Design, Fluorine Coating",
        ],
        price: 2696,
    },
    {
        id: nanoid(),
        name: "Nikon NIKKOR Z 85mm f/1.2 S Lens",
        brand: "Nikon",
        category: "lens",
        img: "nikon-z85f12s.jpg",
        desc: "The NIKKOR Z 85mm f/1.2 S Lens from Nikon is an ultrafast short telephoto portrait lens for full-frame and APS-C/DX Z-Series mirrorless cameras. It achieves both superior rendering performance and large, beautiful bokeh, expanding possibilities for users capturing images of portraiture, weddings, maternity, high fashion, and boudoir photography.",
        features: [
            "Full-Frame | f/1.2 to f/16",
            "Fast Aperture Portrait-Length Prime Lens",
            "Multi-Focus System and Dual STM",
            "Control Ring and Function Button",
            "2 Aspherical, 1 ED Element",
            "Extensively Weather Sealed",
        ],
        price: 2796,
    },
    // {
    //     id: nanoid(),
    //     name: "",
    //     brand: "",
    //     category: "",
    //     img: "",
    //     desc: "",
    //     features: [
    //         ""
    //     ],
    //     price: 0,
    // },
];

export default products;