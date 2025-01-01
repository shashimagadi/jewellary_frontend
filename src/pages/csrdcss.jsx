

// .home-container {
//     height: 100vh; /* Full viewport height */
//     background-image: url('assets/img/bg3.jpg'); /* Replace with your image URL */
//     background-size: cover;
//     background-position: center center;
//     display: flex;
//     /* justify-content: center; */
//     /* align-items: center; */
//     color: white;
//     text-align: center;
//     background-attachment: fixed;
    
   
//   }
//   @media (max-width: 768px) {
//     .home-container {
//       background-attachment: scroll; /* Disable parallax effect on smaller screens */
//       height: auto; /* Height adjusts based on content */
//       background-size: cover; /* Ensure the background still covers */
//       background-position: center center; /* Center the background image */
//     }
//   }
  
  
  
  
//   /* For larger desktop screens (optional) */
//   @media (max-width: 400px) {
//     .home-container {
//       background-position: center center !important; /* Keep background centered */
//       height: auto; /* Adjust based on content */
//       background-size: cover;
     
//       max-width: 100% !important;
//     }
//   }
  
//   .home-content h1 {
//     font-size: 3rem;
//     font-weight: bold;
//     text-align: left;
//     padding: 40px 20px 0px 0px;
//     margin-left: 80px;
    
//   }
//   @media (max-width: 768px) {
//     .home-content h1 {
//       font-size: 2rem;
//       padding: 20px 20px 0px 0px; 
      
//     }
//   }
  
//   .home-content p {
//     font-size: 1.5rem;
//     text-align: left;
//     margin-left: 80px;
//   }
  
  
//   /* @media (max-width: 1024px) {
//     .home-content h1 {
//       font-size: 2rem; 
//     }
//     .home-content p {
//       font-size: 1rem;
//     }
//   } */
  
//   /* Breakpoint for small screens (e.g., smartphones) */
//   @media (max-width: 768px) {
//     .home-content h1 {
//       font-size: 1.8rem; /* Smaller for small screens */
//     }
//     .home-content p {
//       font-size: 0.9rem;
//     }
//   }
  
//   /* Breakpoint for very small screens (e.g., narrow smartphones) */
//   @media (max-width: 480px) {
//     .home-content h1 {
//       font-size: 1.5rem; /* Even smaller for very small screens */
//     }
//     .home-content p {
//       font-size: 0.8rem;
//     }
//   }

// //////////////////////

// .card-container {
//     display: flex;
//     flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
//     gap: 20px; /* Space between cards */
//     justify-content: center; /* Center the cards */
//    margin:20px 20px 20px 60px;
//   text-align: center;
//   }
  
//   .card {
   
//     border-radius: 10px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     width: 300px;
//     padding: 20px;
//     text-align: center;
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//     max-height: 400px;
//     justify-content: center; /* Vertically center content */
   
  
//   }
  
//   .card:first-child {
//     width: 400px; /* Increased width for the first card */
//     background-color: #1977cc;
//     max-height: 550px !important; /* Ensure the card height is sufficient */
//     display: flex;
//     flex-direction: column; /* Stack content vertically */
//     justify-content: space-between; /* Space between content and button */
//     padding: 20px; /* Add padding to ensure content doesn't touch the edges */
//     position: relative; /* Needed for absolute positioning of button */
//   }
  
//   .card:not(:first-child) {
//     background-color: #e2e3e5 !important; /* Light blue background for other 3 cards */
//     max-height:400px !important; /* Reduced height for other 3 cards */
//     padding: 10px; /* Adjust padding to fit reduced height */
//     overflow: hidden; /* Ensure content stays within bounds */
//     backdrop-filter: blur(5px); 
//   }
  
  
//   .card:first-child button {
//     background-color: #566470;
//     padding: 10px 20px;
//     font-size: 1rem;
//     border: none;
//     border-radius: 5px;
//     color: white;
//     cursor: pointer;
//     /* position: relative;  */
//     margin-top: 15px; 
//   }
  
//   .card:first-child button:hover {
//     background-color: #adcbe7;
//   }
//   .card:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//   }
  
//   .card-title {
//     font-size: 1.5rem;
//     margin: 0 0 10px;
//     color: #333;
//   }
  
//   .card-description {
//     font-size: 1rem !important;
   
  
//     color: #131414;
   
  
//   }
  
//   /* Responsive Design */
//   @media (max-width: 900px) {
//     .card-container {
//       flex-direction: row;
//       justify-content: center;
    
//     }
//   }
  
//   @media (max-width: 600px) {
//     .card-container {
//       flex-direction: column; 
    
//      /* margin: auto; */
//     }
  
//     .card {
//       width: 100px; /* Adjust width for small screens */
//       /* height: 100px !important; */
//     }
//   }
  
  
  